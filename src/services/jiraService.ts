// src/services/jiraService.ts
import { getUtmParams } from '../utils/utm';
import { generateLeadNumber, normalizeLeadSource } from '../utils/leadNumber';

export interface JiraLeadPayload {
  leadNumber?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceRequested?: string;
  message?: string;
  formName?: string;
  category?: string;
  pageUrl?: string;
  pageTitle?: string;
  [key: string]: unknown;
}

export interface JiraLeadResponse {
  success: boolean;
  ignored?: boolean;
  leadNumber?: string;
  normalizedSource?: string;
  issueKey?: string;
  issueId?: string;
  issueUrl?: string;
  dueDate?: string;
  subtasks?: Array<{ name: string; key?: string; id?: string; status: string }>;
  error?: string;
}

/**
 * Submits business lead data to the Jira integration endpoint (/api/jira).
 * Automatically excludes career, training, and academy flows.
 */
export async function submitLeadToJira(payload: JiraLeadPayload): Promise<JiraLeadResponse> {
  try {
    const formNameLower = String(payload.formName || '').toLowerCase();
    const pageUrl = payload.pageUrl || (typeof window !== 'undefined' ? window.location.href : '');
    const pageLower = pageUrl.toLowerCase();

    // Enforce client-side exclusion check
    if (
      formNameLower.includes('career') ||
      formNameLower.includes('job') ||
      formNameLower.includes('resume') ||
      formNameLower.includes('training') ||
      formNameLower.includes('course') ||
      formNameLower.includes('academy') ||
      formNameLower.includes('newsletter') ||
      formNameLower.includes('exit_intent') ||
      pageLower.includes('/career') ||
      pageLower.includes('/courses') ||
      pageLower.includes('/academy')
    ) {
      return {
        success: true,
        ignored: true,
        error: undefined
      };
    }

    const utm = getUtmParams();
    let location = 'Unknown';
    let ipAddress = '';

    try {
      const cachedIp = localStorage.getItem('isi_ip_info');
      if (cachedIp) {
        const parsed = JSON.parse(cachedIp);
        location = [parsed.city, parsed.region, parsed.country_name].filter(Boolean).join(', ');
        ipAddress = parsed.ip || '';
      }
    } catch {
      // ignore
    }

    const leadNumber = payload.leadNumber || generateLeadNumber();
    const normalizedSource = normalizeLeadSource(utm.utmSource, typeof document !== 'undefined' ? document.referrer : '', pageUrl);

    const fullPayload = {
      leadNumber,
      normalizedSource,
      pageUrl,
      pageTitle: typeof document !== 'undefined' ? document.title : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      ...payload,
      ...utm,
      location,
      ipAddress,
      timestamp: new Date().toISOString()
    };

    const response = await fetch('/api/jira', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fullPayload),
    });

    let result: JiraLeadResponse = { success: response.ok, leadNumber };
    try {
      const text = await response.text();
      if (text) {
        result = JSON.parse(text);
      }
    } catch {
      result = { success: response.ok, leadNumber };
    }

    return result;
  } catch (err: any) {
    console.warn('Error submitting lead to Jira:', err);
    return {
      success: false,
      leadNumber: payload.leadNumber,
      error: err.message || 'Failed to submit lead to Jira'
    };
  }
}
