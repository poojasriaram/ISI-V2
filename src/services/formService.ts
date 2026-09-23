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

export interface FormSubmissionResult {
    success: boolean;
    status: 'submitted' | 'in_progress' | 'not_available';
    userStatus: string;
    message: string;
    leadNumber?: string;
    applicationNumber?: string;
    leadType: 'sales' | 'career' | string;
    jiraKey?: string;
}

/**
 * Core form & lead pipeline:
 * 1. Categorizes Career Application vs Sales Lead based on explicit job question / sheetName
 * 2. Generates unique Lead Number / Application Number (ISI-XXXXXX)
 * 3. Normalizes Lead Source (Google Ads, YouTube, Meta / FB, Organic, Affiliate, Community)
 * 4. Dispatches genuine Sales Leads to Jira Cloud backend (with parent lead + 7 subtasks)
 *    Strictly prevents Career Applications from entering Jira Sales Lead workflow
 * 5. Logs to Google Sheets with clean user-facing tracking status
 */
export async function sendToSheet(
    sheetName: string,
    payload: Record<string, unknown>
): Promise<FormSubmissionResult> {
    const ipCtx = getIpContext();
    const utmCtx = getUtmParams();
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const normalizedSource = normalizeLeadSource(utmCtx.utmSource, typeof document !== 'undefined' ? document.referrer : '', pageUrl);

    // Check explicit job question ("Are you looking for a job?" = Yes)
    const isJobQuestionYes =
        String(payload.jobQuestion || payload["Are you looking for a job?"] || '').trim().toLowerCase() === 'yes' ||
        payload.isJobSeeker === true ||
        String(payload.leadType || '').toLowerCase().includes('career');

    const rawSheetLower = sheetName.toLowerCase();
    const isCareer = isJobQuestionYes || rawSheetLower.includes('career') || rawSheetLower.includes('job');
    const actualSheetName = isCareer && !rawSheetLower.includes('career') ? 'Career_Applications' : sheetName;

    const isTraining = rawSheetLower.includes('training') || rawSheetLower.includes('course');
    const isAcademy = rawSheetLower.includes('academy');
    const isNonLead = rawSheetLower.includes('newsletter') || rawSheetLower.includes('exit_intent') || rawSheetLower.includes('behavior');

    // Business Lead applies strictly to commercial sales inquiries (NEVER career applicants)
    const isBusinessLead = !isCareer && !isTraining && !isAcademy && !isNonLead;
    const generatedNumber = generateLeadNumber();
    const leadNumber = isBusinessLead ? generatedNumber : (isCareer ? generatedNumber : (isAcademy ? `ACAD-${generatedNumber.replace('ISI-', '')}` : undefined));
    const applicationNumber = isCareer ? leadNumber : undefined;

    let jiraStatus = isCareer ? 'Not Applicable' : 'Not Applicable';
    let jiraKey = '';
    let jiraUrl = '';
    let status: 'submitted' | 'in_progress' | 'not_available' = 'submitted';
    let userStatus = isCareer ? 'Submitted' : 'Submitted';
    let message = isCareer ? 'Application Submitted' : 'Enquiry Submitted';

    // 1. If genuine Sales Lead -> Call Jira Integration First
    // (Career applications are STRICTLY excluded from Jira Sales Lead workflow)
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
                    formName: actualSheetName,
                    pageUrl,
                    pageTitle: typeof document !== 'undefined' ? document.title : '',
                    jobQuestion: 'No',
                    leadType: 'sales',
                    ...utmCtx,
                    location: ipCtx.location,
                    ipAddress: ipCtx.ipAddress
                });

                if (jiraRes.success && jiraRes.issueKey) {
                    jiraStatus = 'Created';
                    jiraKey = jiraRes.issueKey;
                    jiraUrl = jiraRes.issueUrl || '';
                    status = 'submitted';
                    userStatus = 'Submitted';
                    message = 'Enquiry Submitted';
                } else if (jiraRes.ignored) {
                    jiraStatus = 'Not Applicable';
                    status = 'submitted';
                    userStatus = 'Submitted';
                    message = 'Enquiry Submitted';
                } else {
                    // Safe error masking: NEVER show 'Failed' or 'Unknown Jira Error' to users
                    jiraStatus = 'Not Available';
                    status = 'not_available';
                    userStatus = 'Not Available';
                    message = 'Submission received. Status confirmation is currently not available.';
                }
            }
        } catch (jiraWrapErr: any) {
            // Internal diagnostic logging only
            console.warn('[INTERNAL JIRA DISPATCH NOTICE]', jiraWrapErr?.message || jiraWrapErr);
            jiraStatus = 'Not Available';
            status = 'not_available';
            userStatus = 'Not Available';
            message = 'Submission received. Status confirmation is currently not available.';
        }
    }

    const sanitizedPayload = { ...payload };

    // Prevent Google Sheets formula injection (skip binary blobs)
    const blobKeys = new Set([
        'resumeBlob', 'resume', 'resumeBase64', 'fileBlob', 'attachmentBlob', 'attachment',
        'ResumeBlob', 'Resume', 'Resume Blob', 'resume_blob'
    ]);
    for (const key in sanitizedPayload) {
        if (
            blobKeys.has(key) ||
            typeof sanitizedPayload[key] !== 'string'
        ) {
            continue;
        }
        if (/^[+=\-@]/.test(sanitizedPayload[key] as string)) {
            sanitizedPayload[key] = `'${sanitizedPayload[key]}`;
        }
    }

    const bodyObj: Record<string, unknown> = {
        sheetName: actualSheetName,
        source: normalizedSource,
        pageUrl,

        // Form data
        ...sanitizedPayload,

        // Include UTM values
        ...utmCtx,

        // IP information
        ipAddress: sanitizedPayload.ipAddress || ipCtx.ipAddress,
        location: sanitizedPayload.location || ipCtx.location,
        organization: sanitizedPayload.organization || ipCtx.organization,

        // Lead classification & Status mapping
        leadType: isCareer ? 'Career' : (isBusinessLead ? 'Sales' : (isAcademy ? 'Academy' : 'Contact')),
        formType: isCareer ? 'Career Application' : (isBusinessLead ? 'Sales Lead' : actualSheetName),
        submissionStatus: userStatus,

        // Variant & Timestamp
        variant: localStorage.getItem('isi_variant') || 'original',
        timestamp: getISTTimestamp()
    };

    if (isCareer) {
        bodyObj.applicationNumber = applicationNumber;
        bodyObj["Application Number"] = applicationNumber;
        bodyObj.jobQuestion = 'Yes';
        bodyObj.targetEmail = 'hrms2026@isisecurity.in';
        bodyObj.notifyEmail = 'hrms2026@isisecurity.in';
        bodyObj.emailTo = 'hrms2026@isisecurity.in';
    } else if (isBusinessLead) {
        bodyObj.leadNumber = leadNumber;
        bodyObj["Lead Number"] = leadNumber;
        bodyObj.jiraStatus = jiraStatus;
        bodyObj.jiraKey = jiraKey;
        bodyObj.jiraUrl = jiraUrl;
        bodyObj.jobQuestion = 'No';
    } else if (isAcademy) {
        bodyObj.leadNumber = leadNumber;
    }

    const body = JSON.stringify(bodyObj);

    // Send to Google Sheets Webhook
    const isAdCampaign = actualSheetName === 'Google_Ad_Leads' || actualSheetName === 'AdCampaign';
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
            console.warn('[INTERNAL SHEETS LOG NOTICE]', e);
        }
    }

    return {
        success: true,
        status,
        userStatus,
        message,
        leadNumber,
        applicationNumber,
        leadType: isCareer ? 'career' : 'sales',
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
    enquiryType?: string;
}) => {
    try {
        const isJob = data.enquiryType === 'Job Application';
        const sheetName = isJob ? 'Career_Applications' : 'Academy_Inquiries';
        
        return await sendToSheet(sheetName, {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Organization: data.organization || 'Individual',
            "Program / Course": data.program || 'General Academy Inquiry',
            Role: data.role || 'N/A',
            Experience: data.experience || 'N/A',
            "Learning Goal": data.learningGoal || 'N/A',
            Message: data.message || 'Academy Chatbot Lead',
            "Enquiry Type": data.enquiryType || 'Academy Program',
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
    jobQuestion?: string;
    position?: string;
    [key: string]: unknown;
}) => {
    const isJob = String(data.jobQuestion || '').trim().toLowerCase() === 'yes';
    const targetSheet = isJob ? 'Career_Applications' : (data.formName || 'Contact_Form');

    return await sendToSheet(targetSheet, {
        ...data,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: isJob ? (data.company || 'Candidate Applicant') : (data.company || 'N/A'),
        serviceRequested: isJob ? (data.position || data.requirement || 'Open Position') : (data.requirement || 'General Security Inquiry'),
        jobTitle: isJob ? (data.position || data.requirement || 'Open Position') : undefined,
        message: data.message || (isJob ? `Career Application for: ${data.position || data.requirement || 'Open Position'}` : `Inquiry for ${data.requirement || 'Services'}`),
        jobQuestion: isJob ? 'Yes' : 'No',
        leadType: isJob ? 'career' : 'sales'
    });
};
