// src/services/formService.ts
import { getUtmParams } from '../utils/utm';
import { submitLeadToJira } from './jiraService';
import { generateLeadNumber, normalizeLeadSource } from '../utils/leadNumber';

const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

/** Returns current time as human-readable IST string: "26-Feb-2026 07:43:11 IST" */
function getISTTimestamp(): string {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC + 5h 30m
    const ist = new Date(now.getTime() + istOffset);
    const dd = String(ist.getUTCDate()).padStart(2, '0');
    const mon = ist.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const yyyy = ist.getUTCFullYear();
    const hh = String(ist.getUTCHours()).padStart(2, '0');
    const mm = String(ist.getUTCMinutes()).padStart(2, '0');
    const ss = String(ist.getUTCSeconds()).padStart(2, '0');
    return `${dd}-${mon}-${yyyy} ${hh}:${mm}:${ss} IST`;
}

/**
 * Reads cached IP info from localStorage (set by useAnalytics.ts).
 * Always returns an object so callers never get null.
 */
function getIpContext(): { ipAddress: string; location: string; organization: string } {
    try {
        const raw = localStorage.getItem('isi_ip_info');
        if (raw) {
            const d = JSON.parse(raw);
            const parts = [d.city, d.region, d.country_name].filter(Boolean);
            return {
                ipAddress: d.ip || '',
                location: parts.join(', ') || '',
                organization: d.org || ''
            };
        }
    } catch { /* ignore */ }
    return { ipAddress: '', location: '', organization: '' };
}

/**
 * Core form & lead pipeline:
 * 1. Generates unique Lead Number (ISI-XXXXXX) for business leads
 * 2. Normalizes Lead Source (Google Ads, YouTube, Meta / FB, Organic, Affiliate, Community)
 * 3. Dispatches lead to Jira Cloud backend (with parent lead + 7 subtasks)
 * 4. Logs to Google Sheets with Jira tracking status
 */
export async function sendToSheet(
    sheetName: string,
    payload: Record<string, unknown>
): Promise<{ success: boolean; leadNumber?: string; jiraKey?: string }> {
    const ipCtx = getIpContext();
    const utmCtx = getUtmParams();
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const normalizedSource = normalizeLeadSource(utmCtx.utmSource, typeof document !== 'undefined' ? document.referrer : '', pageUrl);

    const sheetNameLower = sheetName.toLowerCase();
    const isCareer = sheetNameLower.includes('career') || sheetNameLower.includes('job');
    const isTraining = sheetNameLower.includes('training') || sheetNameLower.includes('course');
    const isAcademy = sheetNameLower.includes('academy');
    const isNonLead = sheetNameLower.includes('newsletter') || sheetNameLower.includes('exit_intent') || sheetNameLower.includes('behavior');

    const isBusinessLead = !isCareer && !isTraining && !isAcademy && !isNonLead;
    const leadNumber = isBusinessLead ? generateLeadNumber() : (isAcademy ? `ACAD-${generateLeadNumber().replace('ISI-', '')}` : undefined);

    let jiraStatus = 'Not Applicable';
    let jiraKey = '';
    let jiraUrl = '';
    let jiraError = '';

    // 1. If Business Lead -> Call Jira Integration First
    if (isBusinessLead) {
        try {
            const leadName = String(
                payload.name || payload.Name || payload.fullName || 
                payload.FullName || payload.contactPerson || 'Website Lead'
            );
            const leadEmail = String(
                payload.email || payload.Email || payload.workEmail || 
                payload.WorkEmail || ''
            );
            const leadPhone = String(
                payload.phone || payload.Phone || payload.phoneNumber || 
                payload.mobile || ''
            );
            const leadCompany = String(
                payload.company || payload.Company || payload.organization || 
                payload.Organization || payload.schoolName || ''
            );
            const leadService = String(
                payload.service || payload.Service || payload.serviceInterest || 
                payload.serviceRequested || payload["Program / Course"] || sheetName
            );
            const leadMessage = String(
                payload.message || payload.Message || payload.requirements || 
                payload.topic || payload.primaryConcern || 'Form submission from website.'
            );

            if (leadName || leadEmail || leadPhone) {
                const jiraRes = await submitLeadToJira({
                    leadNumber,
                    name: leadName,
                    email: leadEmail,
                    phone: leadPhone,
                    company: leadCompany,
                    serviceRequested: leadService,
                    message: leadMessage,
                    formName: sheetName,
                    pageUrl,
                    pageTitle: typeof document !== 'undefined' ? document.title : '',
                    ...utmCtx,
                    location: ipCtx.location,
                    ipAddress: ipCtx.ipAddress
                });

                if (jiraRes.success && jiraRes.issueKey) {
                    jiraStatus = 'Created';
                    jiraKey = jiraRes.issueKey;
                    jiraUrl = jiraRes.issueUrl || '';
                } else if (!jiraRes.ignored) {
                    jiraStatus = 'Failed';
                    jiraError = jiraRes.error || 'Unknown Jira Error';
                }
            }
        } catch (jiraWrapErr: any) {
            console.warn('[JIRA WRAPPER ERROR]', jiraWrapErr);
            jiraStatus = 'Failed';
            jiraError = jiraWrapErr.message || 'Jira Submission Error';
        }
    }

    const sanitizedPayload = { ...payload };

    // Prevent Google Sheets formula injection
    for (const key in sanitizedPayload) {
        if (
            typeof sanitizedPayload[key] === 'string' &&
            /^[+=\-@]/.test(sanitizedPayload[key] as string)
        ) {
            sanitizedPayload[key] = `'${sanitizedPayload[key]}`;
        }
    }

    const body = JSON.stringify({
        sheetName,
        leadNumber: leadNumber || 'N/A',
        "Lead Number": leadNumber || 'N/A',
        "Lead Source": normalizedSource,
        source: normalizedSource,
        pageUrl,

        // Jira Metadata
        jiraStatus,
        jiraKey,
        jiraUrl,
        jiraError,
        "Jira Issue Key": jiraKey,
        "Jira Status": jiraStatus,

        // Form data
        ...sanitizedPayload,

        // Include UTM values
        ...utmCtx,

        // IP information
        ipAddress: sanitizedPayload.ipAddress || ipCtx.ipAddress,
        location: sanitizedPayload.location || ipCtx.location,
        organization: sanitizedPayload.organization || ipCtx.organization,

        // Variant & Timestamp
        variant: localStorage.getItem('isi_variant') || 'original',
        timestamp: getISTTimestamp()
    });

    // Send to Google Sheets Webhook
    const isAdCampaign = sheetName === 'Google_Ad_Leads' || sheetName === 'AdCampaign';
    const targetUrl = isAdCampaign
        ? (import.meta.env.VITE_AD_CAMPAIGN_WEB_APP_URL || "https://script.google.com/macros/s/AKfycbwL1i7fOTIPdyo86zgI2AbAmeAowti2nJy7LftH2YY-MEUmir8gYOKyaS2BhrK8zNnC/exec")
        : SHEETS_URL;

    if (targetUrl) {
        try {
            await fetch(targetUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body
            });
        } catch (e) {
            console.warn('[SHEETS SUBMISSION ERROR]', e);
        }
    }

    return {
        success: true,
        leadNumber,
        jiraKey
    };
}

export const submitChatbotLead = async (
    name: string,
    phone: string,
    email: string,
    topic: string,
    existingCustomer?: string,
    category?: string
) => {
    try {
        return await sendToSheet('Chatbot_Leads', {
            name,
            phone,
            email,
            message: `Inquired about: ${topic}`,
            "Existing Customer": existingCustomer || 'N/A',
            "Category": category || 'N/A',
            status: 'New Lead'
        });
    } catch (error) {
        console.error('Error submitting chatbot lead:', error);
        throw error;
    }
};

export const submitAcademyInquiry = async (data: {
    name: string;
    email: string;
    phone: string;
    organization?: string;
    program?: string;
    role?: string;
    experience?: string;
    learningGoal?: string;
    message?: string;
}) => {
    try {
        return await sendToSheet('Academy_Inquiries', {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Organization: data.organization || 'Individual',
            "Program / Course": data.program || 'General Academy Inquiry',
            Role: data.role || 'N/A',
            Experience: data.experience || 'N/A',
            "Learning Goal": data.learningGoal || 'N/A',
            Message: data.message || 'Academy Chatbot Lead',
            Status: 'New Lead'
        });
    } catch (error) {
        console.error('Error submitting Academy inquiry:', error);
        throw error;
    }
};

export const submitCareerApplication = async (data: Record<string, unknown>) => {
    try {
        return await sendToSheet('Career_Applications', {
            ...data,
            targetEmail: 'hrms2026@isisecurity.in',
            notifyEmail: 'hrms2026@isisecurity.in',
            emailTo: 'hrms2026@isisecurity.in'
        });
    } catch (error) {
        console.error('Error submitting career application:', error);
        throw error;
    }
};

export const submitTenderRFQ = async (data: Record<string, unknown>) => {
    try {
        return await sendToSheet('Tender_RFQ', data);
    } catch (error) {
        console.error('Error submitting tender RFQ:', error);
        throw error;
    }
};

export const submitAdCampaignLead = async (data: Record<string, unknown>) => {
    try {
        return await sendToSheet('Google_Ad_Leads', data);
    } catch (error) {
        console.error('Error submitting Ad Campaign lead:', error);
        throw error;
    }
};

export const submitBusinessLead = async (data: {
    name: string;
    email: string;
    phone: string;
    requirement?: string;
    company?: string;
    message?: string;
    formName?: string;
}) => {
    return await sendToSheet(data.formName || 'Contact_Form', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || 'N/A',
        serviceRequested: data.requirement || 'General Security Inquiry',
        message: data.message || `Inquiry for ${data.requirement || 'Services'}`
    });
};
