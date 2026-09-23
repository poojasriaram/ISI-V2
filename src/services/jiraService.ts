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
  jobQuestion?: string;
  leadType?: string;
  isJobSeeker?: boolean;
  [key: string]: unknown;
}

export interface JiraLeadResponse {
  success: boolean;
  status?: 'submitted' | 'in_progress' | 'not_available' | string;
  userStatus?: string;
  message?: string;
  applicationNumber?: string;
  leadType?: 'sales' | 'career' | string;
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
    const isJobQuestionYes =
      String(payload.jobQuestion || payload["Are you looking for a job?"] || '').trim().toLowerCase() === 'yes' ||
      payload.isJobSeeker === true ||
      String(payload.leadType || '').toLowerCase().includes('career');

    const formNameLower = String(payload.formName || '').toLowerCase();
    const pageUrl = payload.pageUrl || (typeof window !== 'undefined' ? window.location.href : '');
    const pageLower = pageUrl.toLowerCase();

    // Enforce client-side exclusion check: Career applications MUST NOT go to Jira Sales workflow
    if (
      isJobQuestionYes ||
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
        status: 'submitted',
        userStatus: 'Submitted',
        message: isJobQuestionYes || formNameLower.includes('career') ? 'Application Submitted' : 'Enquiry Submitted',
        leadNumber: payload.leadNumber,
        applicationNumber: payload.leadNumber,
        leadType: isJobQuestionYes || formNameLower.includes('career') ? 'career' : 'other',
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

    let result: JiraLeadResponse = {
      success: true,
      status: response.ok ? 'submitted' : 'not_available',
      userStatus: response.ok ? 'Submitted' : 'Not Available',
      message: response.ok ? 'Enquiry Submitted' : 'Submission received. Status confirmation is currently not available.',
      leadNumber,
      applicationNumber: leadNumber,
      leadType: 'sales'
    };

    try {
      const text = await response.text();
      if (text) {
        const parsed = JSON.parse(text);
        result = {
          ...result,
          ...parsed,
          userStatus: parsed.userStatus || (parsed.status === 'submitted' ? 'Submitted' : (parsed.status === 'in_progress' ? 'In Progress' : 'Not Available'))
        };
      }
    } catch {
      // JSON parse error handled gracefully
    }

    return result;
  } catch (err: any) {
    // Internal logging only - do not expose to user
    console.warn('[INTERNAL JIRA CLIENT EXCEPTION]:', err);
    return {
      success: true,
      status: 'not_available',
      userStatus: 'Not Available',
      message: 'Submission received. Status confirmation is currently not available.',
      leadNumber: payload.leadNumber,
      applicationNumber: payload.leadNumber,
      leadType: 'sales'
    };
  }
}
