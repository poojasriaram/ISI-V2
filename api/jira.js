// api/jira.js - Vercel Serverless API Route for Jira Cloud Integration
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const lead = req.body || {};

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN || 'isisecurity.atlassian.net';
    const JIRA_EMAIL = process.env.JIRA_EMAIL || 'poojasri.aram@gmail.com';
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN || 'ATATT3xFfGF0HB1UotLKd9u7BPre5gFXU-TOc7VugV_s8MLvu_bF_ux-0SyrE3RvZsztwclrd2jFOiBIuOu0Zg7FeeNdWlnLh4Si_exXZNSSlQNqhx8DHewkNPBoRkegQh5cDq-ZGJctIZhwDqUrQBdSBVO0HfIS0P3nyf27WRnBPT2zYLy7bxE=C3BDAF04';
    const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY || 'ISI';
    const JIRA_ISSUE_TYPE = process.env.JIRA_ISSUE_TYPE || 'Task';

    // Normalize domain
    const cleanDomain = JIRA_DOMAIN.replace(/^https?:\/\//, '').replace(/\/+$/, '');

    // Format Basic Auth
    const authString = Buffer.from(`${JIRA_EMAIL.trim()}:${JIRA_API_TOKEN.trim()}`).toString('base64');

    // Build structured Atlassian Document Format (ADF) description
    const contentParagraphs = [
      {
        type: 'heading',
        attrs: { level: 3 },
        content: [{ type: 'text', text: '📋 Lead Contact Information' }]
      },
      {
        type: 'bulletList',
        content: [
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '👤 Full Name: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.name || lead.fullName || 'N/A' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '📧 Email: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.email || 'N/A' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '📞 Phone: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.phone || lead.mobile || 'N/A' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '🏢 Company / Org: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.company || lead.organization || 'N/A' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '🎯 Service / Requirement: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.serviceRequested || lead.service || lead.requirement || 'General Inquiry' }
              ]
            }]
          }
        ]
      }
    ];

    if (lead.message || lead.requirements || lead.comments) {
      contentParagraphs.push(
        {
          type: 'heading',
          attrs: { level: 3 },
          content: [{ type: 'text', text: '📝 Message / Specific Details' }]
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: String(lead.message || lead.requirements || lead.comments) }]
        }
      );
    }

    // Add Attribution & Context
    contentParagraphs.push(
      {
        type: 'heading',
        attrs: { level: 3 },
        content: [{ type: 'text', text: '🌐 Tracking & Attribution' }]
      },
      {
        type: 'bulletList',
        content: [
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Page / Form: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.formName || lead.pageSource || lead.source || 'Website' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'UTM Source: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.utm_source || lead.utmSource || 'Direct / Organic' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'UTM Campaign: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.utm_campaign || lead.utmCampaign || 'None' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Location: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.location || 'Unknown' }
              ]
            }]
          }
        ]
      }
    );

    const summaryTitle = `[Lead] ${lead.name || 'New Prospect'} - ${lead.serviceRequested || lead.service || lead.formName || 'Inquiry'}`;

    const jiraPayload = {
      fields: {
        project: {
          key: JIRA_PROJECT_KEY.trim()
        },
        summary: summaryTitle.substring(0, 250),
        issuetype: {
          name: JIRA_ISSUE_TYPE.trim()
        },
        description: {
          type: 'doc',
          version: 1,
          content: contentParagraphs
        },
        labels: [
          'website-lead',
          (lead.formName || 'lead').toLowerCase().replace(/[^a-z0-9_-]/g, '-'),
          (lead.utm_source || '').toLowerCase().replace(/[^a-z0-9_-]/g, '-')
        ].filter(Boolean)
      }
    };

    const response = await fetch(`https://${cleanDomain}/rest/api/3/issue`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(jiraPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Jira API Error Response:', data);
      return res.status(response.status).json({
        success: false,
        error: data.errorMessages?.join(', ') || data.errors || 'Failed to create issue in Jira',
        details: data
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Lead captured in Jira successfully!',
      issueKey: data.key,
      issueId: data.id,
      issueUrl: `https://${cleanDomain}/browse/${data.key}`
    });

  } catch (error) {
    console.error('Jira Serverless Handler Exception:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
