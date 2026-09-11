import { getUtmParams } from '../utils/utm';
import { submitLeadToJira } from './jiraService';

// src/services/formService.ts

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
 * Generic sheet & Jira sender — wraps every form submission with IP context, UTM parameters,
 * routes data to Google Sheets AND automatically creates a Lead in Jira Cloud!
 */
async function sendToSheet(
    sheetName: string,
    payload: Record<string, unknown>
): Promise<void> {
    const ipCtx = getIpContext();
    const utmCtx = getUtmParams();

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

        // Form data first
        ...sanitizedPayload,

        // Include UTM values for Google_Ad_Leads and AdCampaign submissions
        ...(sheetName === 'Google_Ad_Leads' || sheetName === 'AdCampaign' ? utmCtx : {}),

        // IP information
        ipAddress:
            sanitizedPayload.ipAddress || ipCtx.ipAddress,

        location:
            sanitizedPayload.location || ipCtx.location,

        organization:
            sanitizedPayload.organization || ipCtx.organization,

        // Variant
        variant:
            localStorage.getItem('isi_variant') || 'original',

        // Timestamp
        timestamp: getISTTimestamp()
    });

    console.log('[FORM SUBMISSION]', {
        sheetName,
        utmCtx,
        payload: sanitizedPayload
    });

    // 1. Send to Google Sheets Webhook
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

    // 2. Automatically Capture Lead in Jira Cloud (Direct_Lead_Flow)
    try {
        const leadName = String(
            sanitizedPayload.name || sanitizedPayload.Name || sanitizedPayload.fullName || 
            sanitizedPayload.FullName || sanitizedPayload.contactPerson || 'Website Lead'
        );
        const leadEmail = String(
            sanitizedPayload.email || sanitizedPayload.Email || sanitizedPayload.workEmail || 
            sanitizedPayload.WorkEmail || ''
        );
        const leadPhone = String(
            sanitizedPayload.phone || sanitizedPayload.Phone || sanitizedPayload.phoneNumber || 
            sanitizedPayload.mobile || ''
        );
        const leadCompany = String(
            sanitizedPayload.company || sanitizedPayload.Company || sanitizedPayload.organization || 
            sanitizedPayload.Organization || ''
        );
        const leadService = String(
            sanitizedPayload.service || sanitizedPayload.Service || sanitizedPayload.serviceInterest || 
            sanitizedPayload.serviceRequested || sanitizedPayload["Program / Course"] || sheetName
        );
        const leadMessage = String(
            sanitizedPayload.message || sanitizedPayload.Message || sanitizedPayload.requirements || 
            sanitizedPayload.topic || 'Form submission from website.'
        );

        if (leadName || leadEmail || leadPhone) {
            submitLeadToJira({
                name: leadName,
                email: leadEmail,
                phone: leadPhone,
                company: leadCompany,
                serviceRequested: leadService,
                message: leadMessage,
                formName: sheetName,
                ...utmCtx,
                location: ipCtx.location,
                ipAddress: ipCtx.ipAddress
            }).catch(jiraErr => console.warn('[JIRA CAPTURE ERROR]', jiraErr));
        }
    } catch (jiraWrapErr) {
        console.warn('[JIRA WRAPPER ERROR]', jiraWrapErr);
    }
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
        await sendToSheet('ChatbotLeads', {
            name,
            phone,
            email,
            message: `Inquired about: ${topic}`,
            "Existing Customer": existingCustomer || 'N/A',
            "Category": category || 'N/A',
            status: 'New Lead'
        });
        return { success: true };
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
    message?: string;
}) => {
    try {
        await sendToSheet('AcademyInquiries', {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Organization: data.organization || 'Individual',
            "Program / Course": data.program || 'General Academy Inquiry',
            Message: data.message || 'No additional notes',
            Status: 'New Lead'
        });
        return { success: true };
    } catch (error) {
        console.error('Error submitting Academy inquiry:', error);
        throw error;
    }
};

export const submitCareerApplication = async (data: Record<string, unknown>) => {
    try {
        await sendToSheet('CareerApplications', {
            ...data,
            targetEmail: 'hrms2026@isisecurity.in',
            notifyEmail: 'hrms2026@isisecurity.in',
            emailTo: 'hrms2026@isisecurity.in'
        });
        return { success: true };
    } catch (error) {
        console.error('Error submitting career application:', error);
        throw error;
    }
};

export const submitTenderRFQ = async (data: Record<string, unknown>) => {
    try {
        await sendToSheet('TenderRFQ', data);
        return { success: true };
    } catch (error) {
        console.error('Error submitting tender RFQ:', error);
        throw error;
    }
};

export const submitAdCampaignLead = async (data: Record<string, unknown>) => {
    try {
        await sendToSheet('Google_Ad_Leads', data);
        return { success: true };
    } catch (error) {
        console.error('Error submitting Ad Campaign lead:', error);
        throw error;
    }
};

