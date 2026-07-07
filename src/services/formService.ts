// src/services/formService.ts

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxfcFmiHhfW3F-T3skwzWZS5fG5XFlL5vbAWJCLbqtg_E06ePa4yIPXsdgLwMFqMfJB/exec';

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
 * Generic sheet sender — wraps every form submission with IP context.
 */
async function sendToSheet(sheetName: string, payload: Record<string, any>): Promise<void> {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[Form Blocked on Localhost] Would have sent to ${sheetName}:`, payload);
        return;
    }

    const ipCtx = getIpContext();
    const sanitizedPayload = { ...payload };
    for (const key in sanitizedPayload) {
        if (typeof sanitizedPayload[key] === 'string' && sanitizedPayload[key].startsWith('+')) {
            sanitizedPayload[key] = `'${sanitizedPayload[key]}`;
        }
    }

    const body = JSON.stringify({
        sheetName,
        ...sanitizedPayload,
        ipAddress: sanitizedPayload.ipAddress || ipCtx.ipAddress,
        location: sanitizedPayload.location || ipCtx.location,
        organization: sanitizedPayload.organization || ipCtx.organization,
        variant: localStorage.getItem('isi_variant') || 'original',
        timestamp: getISTTimestamp()
    });

    await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body
    });
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
export const submitCareerApplication = async (data: any) => {
    try {
        await sendToSheet('CareerApplications', data);
        return { success: true };
    } catch (error) {
        console.error('Error submitting career application:', error);
        throw error;
    }
};

export const submitTenderRFQ = async (data: any) => {
    try {
        await sendToSheet('TenderRFQ', data);
        return { success: true };
    } catch (error) {
        console.error('Error submitting tender RFQ:', error);
        throw error;
    }
};
