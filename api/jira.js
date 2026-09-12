// api/jira.js - Vercel Serverless API Route for Jira Cloud Integration & Subtask Workflow

// Standard Lead Subtask Workflow Configuration (Imperative Task Format)
const LEAD_WORKFLOW = [
  { name: 'Contact', dueHours: 24, priority: 'High' },
  { name: 'Follow Up 1', dueHours: 48, priority: 'High' },
  { name: 'Gather Requirements', dueHours: 48, priority: 'Medium' },
  { name: 'Site Visit', dueHours: 48, priority: 'Medium' },
  { name: 'Submit Quote', dueHours: 24, priority: 'Medium' },
  { name: 'Close Deal', dueHours: 24, priority: 'Medium' },
  { name: 'Handover to Operations', dueHours: 24, priority: 'Medium' }
];

/**
 * Normalizes lead source into one of the 6 standard categories:
 * 1. Google Ads
 * 2. YouTube
 * 3. Affiliate Site
 * 4. Meta / FB
 * 5. Organic
 * 6. Community
 */
function normalizeSource(utmSource, referrer, pageUrl, category) {
  const s = String(utmSource || '').toLowerCase().trim();
  const r = String(referrer || '').toLowerCase().trim();
  const u = String(pageUrl || '').toLowerCase().trim();
  const c = String(category || '').toLowerCase().trim();
  const combined = `${s} ${r} ${u} ${c}`;

  if (
    s.includes('google_ads') ||
    s.includes('googleads') ||
    s.includes('gclid') ||
    s.includes('cpc') ||
    s.includes('adwords') ||
    combined.includes('gclid=')
  ) {
    return 'Google Ads';
  }

  if (s.includes('youtube') || s.includes('youtu.be') || combined.includes('youtube') || combined.includes('youtu.be')) {
    return 'YouTube';
  }

  if (
    s.includes('facebook') ||
    s.includes('fb') ||
    s.includes('meta') ||
    s.includes('instagram') ||
    s.includes('ig') ||
    combined.includes('fbclid=') ||
    combined.includes('facebook.com') ||
    combined.includes('instagram.com')
  ) {
    return 'Meta / FB';
  }

  if (s.includes('affiliate') || s.includes('partner') || combined.includes('affiliate')) {
    return 'Affiliate Site';
  }

  if (
    s.includes('community') ||
    s.includes('referral') ||
    s.includes('linkedin') ||
    s.includes('twitter') ||
    s.includes('x.com') ||
    s.includes('whatsapp') ||
    r.includes('linkedin') ||
    r.includes('t.co') ||
    r.includes('whatsapp')
  ) {
    return 'Community';
  }

  return 'Organic';
}

/**
 * Calculates due date formatted as YYYY-MM-DD
 */
function calculateDueDate(hoursFromNow = 24) {
  const date = new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
  return date.toISOString().split('T')[0];
}

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

    // ═══════════════════════════════════════════════════════════════════════════
    // 1. STRICT EXCLUSIONS (Career, Training, Academy must NOT go to Jira)
    // ═══════════════════════════════════════════════════════════════════════════
    const formNameLower = String(lead.formName || lead.sheetName || '').toLowerCase();
    const pageLower = String(lead.pageUrl || lead.pageSource || lead.source || '').toLowerCase();

    const isCareer =
      formNameLower.includes('career') ||
      formNameLower.includes('job') ||
      formNameLower.includes('resume') ||
      pageLower.includes('/career') ||
      Boolean(lead.resumeFileName || lead.resumeUrl || lead.driveFileId);

    const isTraining =
      formNameLower.includes('training') ||
      formNameLower.includes('course') ||
      pageLower.includes('/courses');

    const isAcademy =
      formNameLower.includes('academy') ||
      pageLower.includes('/academy');

    const isNonLead =
      formNameLower.includes('newsletter') ||
      formNameLower.includes('exit_intent') ||
      formNameLower.includes('behavior');

    if (isCareer || isTraining || isAcademy || isNonLead) {
      console.log(`[JIRA IGNORED] Submission excluded from Jira: formName=${lead.formName}, page=${lead.pageUrl}`);
      return res.status(200).json({
        success: true,
        ignored: true,
        reason: 'Type excluded from Jira lead pipeline (Career/Training/Academy/NonLead). Handled by dedicated backend.'
      });
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // 2. JIRA CONFIGURATION & AUTH
    // ═══════════════════════════════════════════════════════════════════════════
    const JIRA_DOMAIN = process.env.JIRA_DOMAIN || 'praveenkumarraram.atlassian.net';
    const JIRA_EMAIL = process.env.JIRA_EMAIL || 'poojasri.aram@gmail.com';
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN || 'ATATT3xFfGF0HB1UotLKd9u7BPre5gFXU-TOc7VugV_s8MLvu_bF_ux-0SyrE3RvZsztwclrd2jFOiBIuOu0Zg7FeeNdWlnLh4Si_exXZNSSlQNqhx8DHewkNPBoRkegQh5cDq-ZGJctIZhwDqUrQBdSBVO0HfIS0P3nyf27WRnBPT2zYLy7bxE=C3BDAF04';
    const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY || 'DLF';
    const JIRA_ISSUE_TYPE = process.env.JIRA_ISSUE_TYPE || 'Lead';

    const cleanDomain = JIRA_DOMAIN.replace(/^https?:\/\//, '').replace(/\/+$/, '');
    const authString = Buffer.from(`${JIRA_EMAIL.trim()}:${JIRA_API_TOKEN.trim()}`).toString('base64');

    // ═══════════════════════════════════════════════════════════════════════════
    // 3. LEAD NUMBER & ATTRIBUTION NORMALIZATION
    // ═══════════════════════════════════════════════════════════════════════════
    const leadNumber = lead.leadNumber || lead.LeadNumber || `ISI-${Math.floor(100000 + Math.random() * 900000)}`;
    const normalizedSource = normalizeSource(
      lead.utm_source || lead.utmSource,
      lead.referrer,
      lead.pageUrl || lead.pageSource,
      lead.category || lead.source
    );

    const leadName = lead.name || lead.fullName || lead.FullName || lead.contactPerson || 'Prospective Client';
    const leadEmail = lead.email || lead.workEmail || lead.WorkEmail || 'N/A';
    const leadPhone = lead.phone || lead.phoneNumber || lead.mobile || 'N/A';
    const leadCompany = lead.company || lead.companyName || lead.organization || lead.schoolName || 'N/A';
    const leadService = lead.serviceRequested || lead.service || lead.requirement || lead.serviceInterest || 'Security & Facility Management';
    const leadDueDate = calculateDueDate(24); // Created date + 1 day

    // Build structured Atlassian Document Format (ADF) description
    const contentParagraphs = [
      {
        type: 'heading',
        attrs: { level: 3 },
        content: [{ type: 'text', text: '📋 Business Lead Details' }]
      },
      {
        type: 'bulletList',
        content: [
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '🔢 Lead Number: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadNumber }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '👤 Full Name: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadName }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '📧 Email: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadEmail }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '📞 Phone: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadPhone }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '🏢 Company / Org: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadCompany }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: '🎯 Service / Requirement: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: leadService }
              ]
            }]
          }
        ]
      }
    ];

    if (lead.message || lead.requirements || lead.comments || lead.feedback) {
      contentParagraphs.push(
        {
          type: 'heading',
          attrs: { level: 3 },
          content: [{ type: 'text', text: '📝 Inquiry Notes & Requirements' }]
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: String(lead.message || lead.requirements || lead.comments || lead.feedback) }]
        }
      );
    }

    // Tracking & Attribution ADF block
    contentParagraphs.push(
      {
        type: 'heading',
        attrs: { level: 3 },
        content: [{ type: 'text', text: '🌐 Tracking & Source Attribution' }]
      },
      {
        type: 'bulletList',
        content: [
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Normalized Lead Source: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: normalizedSource }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Origin Page / Form: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.pageUrl || lead.formName || 'Direct Website' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'UTM Source: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.utm_source || lead.utmSource || 'direct' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'UTM Medium: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.utm_medium || lead.utmMedium || 'none' }
              ]
            }]
          },
          {
            type: 'listItem',
            content: [{
              type: 'paragraph',
              content: [
                { type: 'text', text: 'UTM Campaign: ', marks: [{ type: 'strong' }] },
                { type: 'text', text: lead.utm_campaign || lead.utmCampaign || 'none' }
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

    const summaryTitle = `[Lead ${leadNumber}] ${leadName} - ${leadService}`;

    // ═══════════════════════════════════════════════════════════════════════════
    // 4. CREATE JIRA PARENT ISSUE
    // ═══════════════════════════════════════════════════════════════════════════
    const jiraPayload = {
      fields: {
        project: {
          key: JIRA_PROJECT_KEY.trim()
        },
        summary: summaryTitle.substring(0, 250),
        issuetype: {
          name: JIRA_ISSUE_TYPE.trim()
        },
        duedate: leadDueDate, // Dynamic Created Date + 1 Day (YYYY-MM-DD)
        description: {
          type: 'doc',
          version: 1,
          content: contentParagraphs
        },
        labels: [
          'business-lead',
          `lead-${leadNumber.toLowerCase().replace(/[^a-z0-9_-]/g, '-')}`,
          `source-${normalizedSource.toLowerCase().replace(/[^a-z0-9_-]/g, '-')}`,
          (lead.formName || 'lead-form').toLowerCase().replace(/[^a-z0-9_-]/g, '-')
        ].filter(Boolean)
      }
    };

    const parentResponse = await fetch(`https://${cleanDomain}/rest/api/3/issue`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authString}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(jiraPayload)
    });

    const parentData = await parentResponse.json();

    if (!parentResponse.ok) {
      console.error('Jira Parent Creation Error:', parentData);
      return res.status(parentResponse.status).json({
        success: false,
        error: parentData.errorMessages?.join(', ') || parentData.errors || 'Failed to create Lead in Jira',
        details: parentData,
        leadNumber
      });
    }

    const parentKey = parentData.key;
    const parentId = parentData.id;
    console.log(`[JIRA LEAD CREATED] Key: ${parentKey}, ID: ${parentId}, LeadNo: ${leadNumber}`);

    // ═══════════════════════════════════════════════════════════════════════════
    // 5. AUTOMATICALLY CREATE 7 SUBTASKS IN JIRA UNDER PARENT
    // ═══════════════════════════════════════════════════════════════════════════
    const subtaskResults = [];

    for (const step of LEAD_WORKFLOW) {
      try {
        const subtaskDueDate = calculateDueDate(step.dueHours);
        const subtaskPayload = {
          fields: {
            project: {
              key: JIRA_PROJECT_KEY.trim()
            },
            parent: {
              key: parentKey
            },
            summary: `${step.name} - [${leadNumber}]`,
            issuetype: {
              name: 'Task' // Child issue type under Lead in Direct_Lead_Flow project
            },
            duedate: subtaskDueDate,
            priority: {
              name: step.priority || 'Medium'
            },
            description: {
              type: 'doc',
              version: 1,
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: `Lead Workflow Stage: ${step.name} | SLA: ${step.dueHours}h | Target Due Date: ${subtaskDueDate}`
                    }
                  ]
                }
              ]
            }
          }
        };

        let subResponse = await fetch(`https://${cleanDomain}/rest/api/3/issue`, {
          method: 'POST',
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(subtaskPayload)
        });

        let subData = await subResponse.json();

        // If 'Task' issue type fails, try fallback name 'Sub-task' or 'Subtask'
        if (!subResponse.ok && JSON.stringify(subData).includes('issuetype')) {
          subtaskPayload.fields.issuetype.name = 'Sub-task';
          subResponse = await fetch(`https://${cleanDomain}/rest/api/3/issue`, {
            method: 'POST',
            headers: {
              Authorization: `Basic ${authString}`,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(subtaskPayload)
          });
          subData = await subResponse.json();
        }

        if (subResponse.ok) {
          subtaskResults.push({
            name: step.name,
            key: subData.key,
            id: subData.id,
            status: 'Created',
            dueHours: step.dueHours,
            dueDate: subtaskDueDate,
            priority: step.priority || 'Medium'
          });
        } else {
          console.warn(`[SUBTASK WARNING] Failed to create subtask ${step.name}:`, subData);
          subtaskResults.push({
            name: step.name,
            status: 'Failed',
            error: subData.errorMessages?.join(', ') || subData.errors
          });
        }
      } catch (subErr) {
        console.warn(`[SUBTASK EXCEPTION] ${step.name}:`, subErr.message);
        subtaskResults.push({
          name: step.name,
          status: 'Failed',
          error: subErr.message
        });
      }
    }

    return res.status(200).json({
      success: true,
      leadNumber,
      normalizedSource,
      issueKey: parentKey,
      issueId: parentId,
      issueUrl: `https://${cleanDomain}/browse/${parentKey}`,
      dueDate: leadDueDate,
      subtasks: subtaskResults
    });

  } catch (error) {
    console.error('Jira Serverless Handler Exception:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
