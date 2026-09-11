// src/services/jiraService.ts
import { getUtmParams } from '../utils/utm';

export interface JiraLeadPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceRequested?: string;
  message?: string;
  formName?: string;
  category?: string;
  [key: string]: unknown;
}

/**
 * Submits lead data to the Jira integration endpoint (/api/jira).
 * Works on Vercel Serverless Functions, Next.js API, or local Express server.
 */
export async function submitLeadToJira(payload: JiraLeadPayload): Promise<{ success: boolean; issueKey?: string; issueUrl?: string; error?: string }> {
  try {
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

    const fullPayload = {
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

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error('Error submitting lead to Jira:', err);
    return {
      success: false,
      error: err.message || 'Failed to submit lead to Jira'
    };
  }
}
