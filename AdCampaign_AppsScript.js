/**
 * =========================================================================================
 * ISI SECURITY - DEDICATED AD CAMPAIGN GOOGLE SHEET APPS SCRIPT (STANDALONE V1)
 * =========================================================================================
 * Purpose:
 * Dedicated Google Apps Script bound to or managing the "ISI Security - Ad Campaign Leads" Sheet.
 * 
 * Features:
 * 1. Dedicated Webhook Endpoint (doPost) for high-speed Ad Campaign lead capture.
 * 2. Instant Executive Lead Alert Emails with UTM attribution pills, call & email quick buttons.
 * 3. User Auto-Confirmation Email with ISI executive branding and helpline.
 * 4. In-Sheet Ad Analytics Dashboard (buildAdCampaignDashboard) with summary cards & visual charts.
 * 5. Automated Weekly Ad Campaign Performance Digest (weeklyAdReport) for marketing & sales leaders.
 * =========================================================================================
 */

// =========================================================================================
// 1. CONFIGURATION & NOTIFICATION RECIPIENTS
// =========================================================================================

const AD_CONFIG = {
  // Dedicated Ad Campaign Google Sheet ID (Ensures standalone deployments link directly)
  SPREADSHEET_ID: "15OaMm3wf1esko6IZfpO74lnAZior8RGMwO2FiV_iz74",

  // Sheet Tab Name
  TAB_NAME: "AdCampaignLeads",

  // Email Notification Settings
  EMAIL: {
    name: "ISI Security Campaign Engine",
    website: "https://www.isisecurity.in",
    replyTo: "info@isisecurity.in",
    
    // Team members who receive instant Ad Campaign lead notifications
    salesRecipients: [
      "v.varshith@isisecurity.in",
      "v.vishal@isisecurity.in",
      "bv@trustflow.in",
      "poojasri.aram@gmail.com"
    ],
    
    // Leadership team who receive weekly Ad Campaign performance reports
    weeklyReportRecipients: [
      "pooja@deeptrust.tech",
      "v.varshith@isisecurity.in",
      "bv@trustflow.in",
      "poojasri.aram@gmail.com"
    ]
  }
};

/**
 * Robust Spreadsheet Resolver for Standalone or Bound Apps Script Deployments
 */
function getAdSpreadsheet() {
  if (AD_CONFIG.SPREADSHEET_ID && AD_CONFIG.SPREADSHEET_ID.trim() !== "") {
    try {
      return SpreadsheetApp.openById(AD_CONFIG.SPREADSHEET_ID.trim());
    } catch (e) {
      console.warn("Could not open by SPREADSHEET_ID, trying getActiveSpreadsheet:", e.toString());
    }
  }
  var active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  return SpreadsheetApp.openById("15OaMm3wf1esko6IZfpO74lnAZior8RGMwO2FiV_iz74");
}

const AD_HEADERS = [
  "Full Name",
  "Phone Number",
  "Work Email",
  "Company Name",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Term",
  "UTM Content",
  "Status",
  "Lead Priority",
  "IP Location",
  "IP Address",
  "Organization",
  "Variant",
  "Timestamp"
];

// =========================================================================================
// 2. WEBHOOK RECEIVER (doGet & doPost)
// =========================================================================================

/**
 * Open Web App URL directly in browser to view live status, linked sheet URL, and test submission!
 */
function doGet(e) {
  var ss = getAdSpreadsheet();
  var sheet = ss.getSheetByName(AD_CONFIG.TAB_NAME);
  var totalLeads = sheet ? Math.max(sheet.getLastRow() - 1, 0) : 0;
  
  var html = [
    '<!DOCTYPE html><html><head><meta charset="utf-8"><title>ISI Ad Campaign Webhook Status</title>',
    '<style>',
    'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 40px 20px; display: flex; justify-content: center; }',
    '.card { background: #1e293b; border-radius: 16px; padding: 32px; max-width: 580px; width: 100%; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }',
    'h1 { color: #f59e0b; font-size: 22px; margin-top: 0; display: flex; align-items: center; gap: 10px; }',
    '.badge { background: #059669; color: white; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; }',
    '.info-box { background: #0f172a; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #334155; font-size: 13px; line-height: 1.8; }',
    '.btn { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 15px; }',
    '.btn:hover { background: #1d4ed8; }',
    '</style></head><body>',
    '<div class="card">',
    '<h1>🎯 ISI Security Ad Engine <span class="badge">ACTIVE</span></h1>',
    '<p style="color:#94a3b8;font-size:14px;">Dedicated Webhook & Sheet Connector for Paid Ad Campaign Leads.</p>',
    '<div class="info-box">',
    '<div><strong>📄 Connected Spreadsheet:</strong> ' + ss.getName() + '</div>',
    '<div><strong>📑 Tab Name:</strong> ' + AD_CONFIG.TAB_NAME + '</div>',
    '<div><strong>🔥 Total Leads Captured:</strong> <span style="color:#f59e0b;font-weight:bold;font-size:16px;">' + totalLeads + '</span></div>',
    '<div><strong>📧 Email Quota Remaining:</strong> ' + MailApp.getRemainingDailyQuota() + ' emails/day</div>',
    '</div>',
    '<div style="text-align:center;">',
    '<a class="btn" href="' + ss.getUrl() + '" target="_blank">🔗 Open Connected Google Sheet</a>',
    '</div>',
    '</div></body></html>'
  ].join('');

  return HtmlService.createHtmlOutput(html).setTitle("ISI Ad Campaign Engine Status");
}

function doPost(e) {
  // Manual mode testing fallback
  if (!e || !e.postData || !e.postData.contents) {
    console.warn("Running in Manual Test Mode...");
    e = {
      postData: {
        contents: JSON.stringify({
          fullName: "Rajesh Sharma (Test)",
          phoneNumber: "+91 98765 43210",
          workEmail: "rajesh@techcorp.in",
          companyName: "TechCorp India Ltd",
          utmSource: "google_ads",
          utmMedium: "cpc",
          utmCampaign: "manned_guarding_hyderabad",
          utmTerm: "security guard agency",
          utmContent: "search_banner_v2",
          location: "Hyderabad, Telangana, India",
          ipAddress: "49.37.12.89",
          timestamp: new Date().toISOString()
        })
      }
    };
  }

  try {
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid JSON payload" })).setMimeType(ContentService.MimeType.JSON);
    }

    var ss = getAdSpreadsheet();
    var sheet = ss.getSheetByName(AD_CONFIG.TAB_NAME);

    // Auto-create tab if missing
    if (!sheet) {
      sheet = ss.insertSheet(AD_CONFIG.TAB_NAME);
    }

    // Ensure Row 1 ALWAYS has correct headers and formatting
    var firstCell = sheet.getRange(1, 1).getValue();
    if (sheet.getLastRow() === 0 || !firstCell || firstCell.toString().trim() === "") {
      sheet.getRange(1, 1, 1, AD_HEADERS.length)
           .setValues([AD_HEADERS])
           .setFontWeight("bold")
           .setBackground("#003380")
           .setFontColor("#ffffff")
           .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      
      // Auto-fit columns
      for (var col = 1; col <= AD_HEADERS.length; col++) {
        sheet.setColumnWidth(col, 160);
      }
    }

    // Map incoming lead fields directly using AD_HEADERS to guarantee columns match
    var newRow = AD_HEADERS.map(function(header) {
      return resolveAdField(header, data);
    });

    sheet.appendRow(newRow);

    // Send Instant Branded Email Notifications
    sendAdLeadNotifications(data, ss.getUrl());

    var response = {
      status: "success",
      message: "Ad Campaign Lead Captured Successfully",
      sheetName: ss.getName(),
      sheetUrl: ss.getUrl(),
      tabName: sheet.getName(),
      rowNumber: sheet.getLastRow(),
      leadData: newRow
    };

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Ad Campaign doPost error:", err.toString());
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// =========================================================================================
// 3. FIELD RESOLVER & NORMALIZER
// =========================================================================================

function resolveAdField(header, data) {
  var map = {
    "Full Name":      data.fullName || data["Full Name"] || data.name || data.Name || "Valued Prospect",
    "Phone Number":   data.phoneNumber || data["Phone Number"] || data.phone || data.Phone || "",
    "Work Email":     data.workEmail || data["Work Email"] || data.email || data.Email || "",
    "Company Name":   data.companyName || data["Company Name"] || data.company || data.Company || "Direct Business Lead",
    "UTM Source":     data.utmSource || data.utm_source || data["UTM Source"] || "Direct / Organic",
    "UTM Medium":     data.utmMedium || data.utm_medium || data["UTM Medium"] || "N/A",
    "UTM Campaign":   data.utmCampaign || data.utm_campaign || data["UTM Campaign"] || "General Campaign",
    "UTM Term":       data.utmTerm || data.utm_term || data["UTM Term"] || "",
    "UTM Content":    data.utmContent || data.utm_content || data["UTM Content"] || "",
    "Status":         data.status || "🔥 New Lead",
    "Lead Priority":  determinePriority(data),
    "IP Location":    data.location || data.ipLocation || data["IP Location"] || "India",
    "IP Address":     data.ipAddress || data.ip_address || data["IP Address"] || "",
    "Organization":   data.organization || data.org || data["Organization"] || "",
    "Variant":        data.variant || "original",
    "Timestamp":      normalizeAdTimestamp(data.timestamp || data.Timestamp)
  };

  if (map.hasOwnProperty(header)) return map[header];
  return data[header] || "";
}

function determinePriority(data) {
  var comp = (data.companyName || data.company || "").toLowerCase();
  var utm = (data.utmCampaign || "").toLowerCase();
  if (comp.includes("ltd") || comp.includes("corp") || comp.includes("industries") || utm.includes("enterprise") || utm.includes("manned")) {
    return "⚡ High Priority (Enterprise)";
  }
  return "⭐ Normal";
}

function normalizeAdTimestamp(ts) {
  if (!ts) return new Date().toISOString();
  if (typeof ts === 'string' && ts.includes('IST')) return ts;
  var ms = Date.now();
  if (typeof ts === 'number' || (typeof ts === 'string' && /^\d{10,13}$/.test(ts))) {
    ms = Number(ts);
    if (ms < 1e12) ms = ms * 1000;
  } else if (ts instanceof Date) {
    ms = ts.getTime();
  }
  var istOffset = 5.5 * 60 * 60 * 1000;
  var ist = new Date(ms + istOffset);
  var yyyy = ist.getUTCFullYear();
  var mm   = String(ist.getUTCMonth() + 1).padStart(2, '0');
  var dd   = String(ist.getUTCDate()).padStart(2, '0');
  var hh   = String(ist.getUTCHours()).padStart(2, '0');
  var min  = String(ist.getUTCMinutes()).padStart(2, '0');
  var ss   = String(ist.getUTCSeconds()).padStart(2, '0');
  return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss + ' IST';
}

// =========================================================================================
// 4. INSTANT EMAIL NOTIFICATION PIPELINE
// =========================================================================================

function sendAdLeadNotifications(data, sheetUrl) {
  var prospectName = data.fullName || data["Full Name"] || data.name || "Ad Prospect";
  var prospectPhone = data.phoneNumber || data["Phone Number"] || data.phone || "";
  var prospectEmail = data.workEmail || data["Work Email"] || data.email || "";
  var company = data.companyName || data["Company Name"] || data.company || "";
  var campaign = data.utmCampaign || data.utm_campaign || "Online Ad Campaign";

  // 1. Send Auto-Confirmation to the Prospect (if email provided)
  if (prospectEmail) {
    try {
      MailApp.sendEmail({
        to: prospectEmail,
        subject: "✅ Consultation Request Received – ISI Security",
        htmlBody: buildUserAutoReplyHtml(prospectName),
        name: AD_CONFIG.EMAIL.name,
        replyTo: AD_CONFIG.EMAIL.replyTo
      });
    } catch (e) {
      console.error("User confirmation email failed:", e.toString());
    }
  }

  // 2. Send Urgent Lead Alert to Sales Team
  var internalSubject = "🎯 [Ad Campaign Lead Generation] New Prospect: " + prospectName + (company ? " (" + company + ")" : "") + " – " + campaign;
  var internalHtml = buildExecutiveAdLeadHtml(data, sheetUrl);

  try {
    AD_CONFIG.EMAIL.salesRecipients.forEach(function(recipient) {
      MailApp.sendEmail({
        to: recipient,
        subject: internalSubject,
        htmlBody: internalHtml,
        name: "ISI Ad Lead Engine"
      });
    });
    console.log("✅ Dispatched Ad Campaign lead alert to: " + AD_CONFIG.EMAIL.salesRecipients.join(", "));
  } catch (err) {
    console.error("Sales team email notification failed:", err.toString());
  }
}

// =========================================================================================
// 5. HIGH-CONVERSION EXECUTIVE HTML EMAIL TEMPLATES
// =========================================================================================

function buildExecutiveAdLeadHtml(data, sheetUrl) {
  var name      = data.fullName || data["Full Name"] || data.name || "Prospective Client";
  var phone     = data.phoneNumber || data["Phone Number"] || data.phone || "";
  var email     = data.workEmail || data["Work Email"] || data.email || "";
  var company   = data.companyName || data["Company Name"] || data.company || "Direct Business Lead";
  var location  = data.location || data.ipLocation || data["IP Location"] || "India";
  var source    = data.utmSource || data.utm_source || "Google Ads / Paid Media";
  var campaign  = data.utmCampaign || data.utm_campaign || "Security Consultation";
  var medium    = data.utmMedium || data.utm_medium || "CPC / Search";
  var term      = data.utmTerm || data.utm_term || "N/A";
  var content   = data.utmContent || data.utm_content || "Ad Creative 1";
  var timestamp = normalizeAdTimestamp(data.timestamp || data.Timestamp);

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head><meta charset="utf-8"></head>',
    '<body style="font-family:\'Segoe UI\',Arial,sans-serif;background-color:#f1f5f9;margin:0;padding:25px 15px;">',
    '  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">',
    '    ',
    '    <!-- HEADER -->',
    '    <div style="background:linear-gradient(135deg,#002255 0%,#003380 100%);padding:30px 25px;color:#ffffff;">',
    '      <div style="display:inline-block;background:#f59e0b;color:#ffffff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:0.06em;margin-bottom:12px;">',
    '        🎯 PAID AD CAMPAIGN LEAD GENERATION',
    '      </div>',
    '      <h2 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">Ad Campaign Lead Generation</h2>',
    '      <p style="margin:6px 0 0 0;color:#93c5fd;font-size:13px;">Captured live via ISI Paid Advertising Funnel</p>',
    '    </div>',
    '',
    '    <!-- HIGHLIGHT SUMMARY CARD -->',
    '    <div style="padding:25px;">',
    '      <div style="background:#f8fafc;border-left:4px solid #f59e0b;border-radius:8px;padding:16px 20px;margin-bottom:20px;">',
    '        <div style="font-size:18px;font-weight:700;color:#0f172a;">' + name + '</div>',
    '        <div style="color:#475569;font-size:14px;margin-top:4px;">🏢 <strong>' + company + '</strong> • 📍 ' + location + '</div>',
    '        <div style="color:#64748b;font-size:12px;margin-top:6px;">⏱ ' + timestamp + '</div>',
    '      </div>',
    '',
    '      <!-- LEAD DETAILS TABLE -->',
    '      <h4 style="margin:0 0 10px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#003380;font-weight:700;">Prospect Contact Information</h4>',
    '      <table style="width:100%;border-collapse:collapse;border:1px solid #f1f5f9;border-radius:8px;overflow:hidden;margin-bottom:20px;">',
    '        <tr>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;width:35%;">Full Name</td>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;font-weight:600;">' + name + '</td>',
    '        </tr>',
    '        <tr>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;">Company Name</td>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;">' + company + '</td>',
    '        </tr>',
    '        <tr>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;">Phone Number</td>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#003380;font-size:13px;font-weight:bold;">' + (phone ? '<a href="tel:' + phone + '" style="color:#003380;text-decoration:none;">' + phone + '</a>' : 'Not provided') + '</td>',
    '        </tr>',
    '        <tr>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;">Work Email</td>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0284c7;font-size:13px;">' + (email ? '<a href="mailto:' + email + '" style="color:#0284c7;text-decoration:none;">' + email + '</a>' : 'Not provided') + '</td>',
    '        </tr>',
    '        <tr>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;">Location</td>',
    '          <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;">' + location + '</td>',
    '        </tr>',
    '      </table>',
    '',
    '      <!-- UTM ATTRIBUTION PANEL -->',
    '      <div style="padding:16px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;margin-bottom:25px;">',
    '        <h4 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">📡 Paid Campaign Attribution</h4>',
    '        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">',
    '          <div><strong style="color:#0f172a;">Source:</strong> <span style="background:#e2e8f0;padding:2px 6px;border-radius:4px;font-family:monospace;">' + source + '</span></div>',
    '          <div><strong style="color:#0f172a;">Medium:</strong> <span style="background:#e2e8f0;padding:2px 6px;border-radius:4px;font-family:monospace;">' + medium + '</span></div>',
    '          <div><strong style="color:#0f172a;">Campaign:</strong> <span style="background:#fef3c7;color:#92400e;padding:2px 6px;border-radius:4px;font-family:monospace;font-weight:bold;">' + campaign + '</span></div>',
    '          <div><strong style="color:#0f172a;">Keyword/Term:</strong> <span style="background:#e2e8f0;padding:2px 6px;border-radius:4px;font-family:monospace;">' + term + '</span></div>',
    '        </div>',
    '      </div>',
    '',
    '      <!-- QUICK ACTION BUTTONS -->',
    '      <div style="display:flex;gap:10px;flex-wrap:wrap;">',
    (phone ? '        <a href="tel:' + phone + '" style="background:#003380;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">📞 Call ' + phone + '</a>' : ''),
    (email ? '        <a href="mailto:' + email + '?subject=Re: Security Consultation - ISI Security" style="background:#059669;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">✉️ Reply via Email</a>' : ''),
    (sheetUrl ? '        <a href="' + sheetUrl + '" target="_blank" style="background:#334155;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-bottom:8px;">📊 Open Ad Campaign Sheet</a>' : ''),
    '      </div>',
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background:#f8fafc;padding:18px 25px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;text-align:center;">',
    '      &copy; ' + new Date().getFullYear() + ' Industrial Security & Intelligence (India) Pvt Ltd.<br>',
    '      Confidential Lead Alert • For authorized ISI Security Sales & Marketing team only.',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

function buildUserAutoReplyHtml(name) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head><meta charset="utf-8"></head>',
    '<body style="font-family:\'Segoe UI\',Arial,sans-serif;background-color:#f4f7f6;margin:0;padding:25px 15px;">',
    '  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">',
    '    <div style="background:#003380;padding:35px 25px;text-align:center;">',
    '      <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:800;letter-spacing:0.05em;">ISI SECURITY</h1>',
    '      <p style="color:#93c5fd;margin:8px 0 0 0;font-size:13px;">Industrial Security & Intelligence (India) Pvt Ltd</p>',
    '    </div>',
    '    <div style="padding:35px 30px;color:#333333;line-height:1.6;">',
    '      <h2 style="font-size:20px;color:#003380;font-weight:700;margin:0 0 15px 0;">Hello ' + name + ',</h2>',
    '      <p style="font-size:15px;color:#334155;margin:0 0 20px 0;">Thank you for your interest in ISI Security. We have received your consultation request and our Senior Security Specialist will connect with you shortly to understand your operational requirements.</p>',
    '      <div style="background:#f8fafc;padding:20px;border-radius:10px;border:1px solid #e2e8f0;margin:25px 0;">',
    '        <h3 style="color:#0f172a;font-size:15px;margin:0 0 12px 0;font-weight:700;">Our Core Security Capabilities:</h3>',
    '        <ul style="padding-left:20px;margin:0;font-size:13px;color:#475569;line-height:1.7;">',
    '          <li><strong>Manned Guarding:</strong> Elite trained physical security force for corporate and industrial campuses.</li>',
    '          <li><strong>Command Center & Smart Surveillance:</strong> 24/7 centralized electronic monitoring & AI deterrence.</li>',
    '          <li><strong>Cash Logistics:</strong> Secure armored transit and ATM replenishment solutions.</li>',
    '          <li><strong>Integrated Facility Management:</strong> End-to-end technical, facility hygiene, and operations support.</li>',
    '        </ul>',
    '      </div>',
    '      <div style="text-align:center;margin-top:30px;">',
    '        <a href="' + AD_CONFIG.EMAIL.website + '" style="display:inline-block;padding:13px 30px;background:#003380;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;">Visit Our Website</a>',
    '      </div>',
    '    </div>',
    '    <div style="background:#f1f5f9;padding:20px 25px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">',
    '      &copy; ' + new Date().getFullYear() + ' ISI Security. All rights reserved.<br>',
    '      24/7 Command Helpline: <strong>+91 40 2320 0000</strong>',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

// =========================================================================================
// 6. AD CAMPAIGN ANALYTICS DASHBOARD BUILDER (IN-SHEET)
// =========================================================================================

/**
 * Builds an executive Analytics & KPI Dashboard tab directly inside the Ad Campaign Spreadsheet.
 */
function buildAdCampaignDashboard() {
  var ss = getAdSpreadsheet();
  var DASH_NAME = "📈 Ad Campaign Analytics";
  var dash = ss.getSheetByName(DASH_NAME);
  
  if (dash) {
    dash.clearContents();
    dash.clearFormats();
    dash.getCharts().forEach(function(c) { dash.removeChart(c); });
  } else {
    dash = ss.insertSheet(DASH_NAME);
    ss.setActiveSheet(dash);
    ss.moveActiveSheet(1);
  }

  var DARK_BG   = "#0f172a";
  var ACCENT    = "#f59e0b";
  var BLUE      = "#003380";
  var WHITE     = "#ffffff";

  [240, 140, 140, 40, 240, 140, 140].forEach(function(w, i) {
    dash.setColumnWidth(i + 1, w);
  });

  // Title Banner
  dash.setRowHeight(1, 48);
  dash.getRange("A1:G1").merge()
      .setValue("🎯  ISI Security — Paid Ad Campaign Performance Dashboard")
      .setBackground(DARK_BG).setFontColor(WHITE).setFontWeight("bold").setFontSize(16)
      .setHorizontalAlignment("center").setVerticalAlignment("middle");

  dash.setRowHeight(2, 24);
  dash.getRange("A2:G2").merge()
      .setFormula('="Last Refreshed: "&TEXT(NOW(),"dd-mmm-yyyy hh:mm:ss")&" IST"')
      .setBackground("#1e293b").setFontColor("#94a3b8").setFontSize(9).setHorizontalAlignment("center");

  // KPI Summary Metric Bar
  dash.setRowHeight(3, 38);
  dash.getRange("A3").setFormula('=IFERROR("🔥 Total Ad Leads: "&COUNTA(AdCampaignLeads!A:A)-1,0)')
      .setBackground("#1e293b").setFontColor(ACCENT).setFontSize(10).setFontWeight("bold");
  dash.getRange("B3").setFormula('=IFERROR("🏢 Unique Companies: "&COUNTUNIQUE(AdCampaignLeads!D:D)-1,0)')
      .setBackground("#1e293b").setFontColor("#38bdf8").setFontSize(10).setFontWeight("bold");
  dash.getRange("C3").setFormula('=IFERROR("⚡ Enterprise Leads: "&COUNTIF(AdCampaignLeads!K:K,"*Enterprise*"),0)')
      .setBackground("#1e293b").setFontColor("#4ade80").setFontSize(10).setFontWeight("bold");
  dash.setFrozenRows(3);

  // Section 1: Leads by Campaign
  var S1 = 5;
  dash.getRange(S1, 1, 1, 3).merge()
      .setValue("📊  Leads by Campaign (UTM Campaign)")
      .setBackground(BLUE).setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  dash.setRowHeight(S1, 30);
  ["Campaign Name", "Total Leads", "% Share"].forEach(function(h, i) {
    dash.getRange(S1 + 1, i + 1).setValue(h).setBackground("#002255").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });

  dash.getRange(S1 + 2, 1).setFormula(
    '=IFERROR(QUERY(AdCampaignLeads!A:P,' +
    '"SELECT G, COUNT(G) WHERE G != \'\' GROUP BY G ORDER BY COUNT(G) DESC LIMIT 10 LABEL G \'Campaign\', COUNT(G) \'Leads\'",0),{"No data yet",""})'
  );

  for (var r = 1; r <= 10; r++) {
    var row = S1 + 1 + r;
    dash.getRange(row, 3).setFormula('=IFERROR(B' + row + '/SUM($B$' + (S1+2) + ':$B$' + (S1+11) + '),"")').setNumberFormat("0.0%");
    dash.getRange(row, 1, 1, 3).setBackground(r % 2 === 0 ? "#1e293b" : "#263148").setFontColor(WHITE).setFontSize(10);
  }

  // Chart 1: Bar Chart for Campaigns
  var chart1 = dash.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(dash.getRange(S1 + 1, 1, 11, 2))
    .setPosition(S1, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Lead Volume by Campaign")
    .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE } })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("colors", [ACCENT])
    .setOption("width", 480)
    .setOption("height", 280)
    .build();
  dash.insertChart(chart1);

  // Section 2: Leads by Source
  var S2 = 18;
  dash.getRange(S2, 1, 1, 3).merge()
      .setValue("🌐  Leads by Traffic Source (UTM Source)")
      .setBackground("#059669").setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  dash.setRowHeight(S2, 30);
  ["Source", "Total Leads", "% Share"].forEach(function(h, i) {
    dash.getRange(S2 + 1, i + 1).setValue(h).setBackground("#064e3b").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });

  dash.getRange(S2 + 2, 1).setFormula(
    '=IFERROR(QUERY(AdCampaignLeads!A:P,' +
    '"SELECT E, COUNT(E) WHERE E != \'\' GROUP BY E ORDER BY COUNT(E) DESC LIMIT 10 LABEL E \'Source\', COUNT(E) \'Leads\'",0),{"No data yet",""})'
  );

  for (var r = 1; r <= 10; r++) {
    var row = S2 + 1 + r;
    dash.getRange(row, 3).setFormula('=IFERROR(B' + row + '/SUM($B$' + (S2+2) + ':$B$' + (S2+11) + '),"")').setNumberFormat("0.0%");
    dash.getRange(row, 1, 1, 3).setBackground(r % 2 === 0 ? "#1e293b" : "#263148").setFontColor(WHITE).setFontSize(10);
  }

  // Chart 2: Pie Chart for Sources
  var chart2 = dash.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(dash.getRange(S2 + 1, 1, 11, 2))
    .setPosition(S2, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Ad Traffic Source Share")
    .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("legend", { textStyle: { color: WHITE }, position: "right" })
    .setOption("colors", [ACCENT, "#38bdf8", "#4ade80", "#a855f7", "#ec4899"])
    .setOption("is3D", true)
    .setOption("width", 480)
    .setOption("height", 280)
    .build();
  dash.insertChart(chart2);

  dash.getRange("A1:G60").setBackground(DARK_BG).setFontColor(WHITE);
  SpreadsheetApp.flush();
  console.log("✅ Ad Campaign Analytics Dashboard built successfully!");
}

// =========================================================================================
// 7. ISI AD PERFORMANCE INTELLIGENCE (MAILER - SENDER)
// =========================================================================================

/**
 * Executive Mailer: Sends the comprehensive Multi-Channel Ad Performance Intelligence Report
 * (Meta, YouTube, Google Search, Affiliate) to leadership.
 */
function SEND_ISI_AD_PERFORMANCE_INTELLIGENCE_MAILER() {
  var ss = getAdSpreadsheet();
  var sheet = ss.getSheetByName(AD_CONFIG.TAB_NAME);
  if (!sheet || sheet.getLastRow() < 2) {
    console.warn("No ad campaign leads available to generate performance digest.");
    return;
  }

  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol = headers.indexOf("Timestamp");
  var campCol = headers.indexOf("UTM Campaign");
  var srcCol = headers.indexOf("UTM Source");
  var nameCol = headers.indexOf("Full Name");
  var emailCol = headers.indexOf("Work Email");
  var phoneCol = headers.indexOf("Phone Number");

  var now = new Date();
  var sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  var totalLeads = data.length - 1;
  var weekLeads = 0;
  var campaigns = {};

  var channelStats = {
    meta: { name: "📘 Meta Ad", type: "Social / Display (FB & IG)", leads: 0, weekLeads: 0, topCampaign: "-" },
    youtube: { name: "🎥 YouTube Ad", type: "Video / TrueView", leads: 0, weekLeads: 0, topCampaign: "-" },
    google: { name: "🔍 Google Search Ad", type: "Search Engine (SEM / CPC)", leads: 0, weekLeads: 0, topCampaign: "-" },
    affiliate: { name: "🤝 Affiliate Ad", type: "Partner Networks & Referrals", leads: 0, weekLeads: 0, topCampaign: "-" }
  };

  var metaCamps = {}, ytCamps = {}, googleCamps = {}, affCamps = {};

  for (var i = 1; i < data.length; i++) {
    var ts = new Date(data[i][tsCol]);
    var isRecent = ts && ts >= sevenDaysAgo;
    if (isRecent) weekLeads++;

    var c = data[i][campCol] || "General";
    campaigns[c] = (campaigns[c] || 0) + 1;

    var s = String(data[i][srcCol] || "").toLowerCase();
    if (s.includes("fb") || s.includes("facebook") || s.includes("meta") || s.includes("instagram") || s.includes("ig")) {
      channelStats.meta.leads++;
      if (isRecent) channelStats.meta.weekLeads++;
      metaCamps[c] = (metaCamps[c] || 0) + 1;
    } else if (s.includes("youtube") || s.includes("yt")) {
      channelStats.youtube.leads++;
      if (isRecent) channelStats.youtube.weekLeads++;
      ytCamps[c] = (ytCamps[c] || 0) + 1;
    } else if (s.includes("google") || s.includes("cpc") || s.includes("adwords") || s.includes("search")) {
      channelStats.google.leads++;
      if (isRecent) channelStats.google.weekLeads++;
      googleCamps[c] = (googleCamps[c] || 0) + 1;
    } else {
      channelStats.affiliate.leads++;
      if (isRecent) channelStats.affiliate.weekLeads++;
      affCamps[c] = (affCamps[c] || 0) + 1;
    }
  }

  var getTop = function(obj) {
    var keys = Object.keys(obj);
    if (keys.length === 0) return "Direct Campaign";
    return keys.sort(function(a,b){ return obj[b] - obj[a]; })[0];
  };

  channelStats.meta.topCampaign = getTop(metaCamps);
  channelStats.youtube.topCampaign = getTop(ytCamps);
  channelStats.google.topCampaign = getTop(googleCamps);
  channelStats.affiliate.topCampaign = getTop(affCamps);

  var channelList = [channelStats.meta, channelStats.youtube, channelStats.google, channelStats.affiliate];

  var tableRowsHtml = channelList.map(function(ch, idx) {
    var bg = idx % 2 === 0 ? "#ffffff" : "#f8fafc";
    var share = totalLeads > 0 ? (ch.leads / totalLeads * 100).toFixed(1) + "%" : "0.0%";
    return [
      '<tr style="background:' + bg + ';border-bottom:1px solid #e2e8f0;">',
      '<td style="padding:12px;font-weight:bold;color:#1e293b;">' + ch.name + '</td>',
      '<td style="padding:12px;color:#64748b;font-size:12px;">' + ch.type + '</td>',
      '<td style="padding:12px;text-align:center;font-weight:bold;color:#f59e0b;font-size:14px;">' + ch.leads + '</td>',
      '<td style="padding:12px;text-align:center;font-weight:bold;color:#10b981;">' + ch.weekLeads + '</td>',
      '<td style="padding:12px;text-align:center;color:#475569;font-weight:bold;">' + share + '</td>',
      '<td style="padding:12px;color:#1e293b;font-size:12px;">' + ch.topCampaign + '</td>',
      '</tr>'
    ].join('');
  }).join('');

  var subject = "🎯 [ISI Ad Intelligence] Multi-Channel Performance Report - " + totalLeads + " Leads Captured";

  var html = [
    '<!DOCTYPE html><html><body style="font-family:\'Segoe UI\',Arial,sans-serif;background:#f1f5f9;padding:25px;">',
    '<div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">',
    '<div style="background:#003380;padding:25px;color:#ffffff;text-align:center;">',
    '<h2 style="margin:0;font-size:22px;">🎯 ISI Ad Performance Intelligence Report</h2>',
    '<p style="margin:6px 0 0 0;color:#93c5fd;font-size:13px;">Executive Multi-Channel Attribution Digest (Meta, YouTube, Google, Affiliate)</p>',
    '</div>',
    '<div style="padding:25px;">',
    
    // KPI Cards
    '<div style="display:flex;gap:12px;margin-bottom:24px;">',
    '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:14px;flex:1;text-align:center;">',
    '<div style="color:#1e40af;font-size:11px;font-weight:bold;letter-spacing:0.5px;">ALL-TIME LEADS</div>',
    '<div style="color:#1e3a8a;font-size:22px;font-weight:bold;margin-top:4px;">' + totalLeads + '</div>',
    '</div>',
    '<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:14px;flex:1;text-align:center;">',
    '<div style="color:#b45309;font-size:11px;font-weight:bold;letter-spacing:0.5px;">LAST 7 DAYS</div>',
    '<div style="color:#78350f;font-size:22px;font-weight:bold;margin-top:4px;">' + weekLeads + '</div>',
    '</div>',
    '<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:14px;flex:1;text-align:center;">',
    '<div style="color:#047857;font-size:11px;font-weight:bold;letter-spacing:0.5px;">TOP CHANNEL</div>',
    '<div style="color:#064e3b;font-size:15px;font-weight:bold;margin-top:8px;">' + channelList.sort(function(a,b){return b.leads-a.leads;})[0].name + '</div>',
    '</div>',
    '</div>',

    '<h3 style="color:#0f172a;font-size:15px;margin:20px 0 10px 0;">📊 Ad Performance Intelligence Table</h3>',
    '<table style="width:100%;border-collapse:collapse;margin-bottom:25px;font-size:13px;">',
    '<tr style="background:#003380;color:#ffffff;">',
    '<th style="padding:10px;text-align:left;">Channel</th>',
    '<th style="padding:10px;text-align:left;">Type</th>',
    '<th style="padding:10px;text-align:center;">Total Leads</th>',
    '<th style="padding:10px;text-align:center;">7-Day Leads</th>',
    '<th style="padding:10px;text-align:center;">Lead Share</th>',
    '<th style="padding:10px;text-align:left;">Top Campaign</th>',
    '</tr>',
    tableRowsHtml,
    '</table>',

    '<div style="text-align:center;margin-top:25px;">',
    '<a href="' + ss.getUrl() + '" style="background:#003380;color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;">Open ISI Ad Campaign Google Sheet</a>',
    '</div>',
    '</div>',
    '</div></body></html>'
  ].join('\n');

  AD_CONFIG.EMAIL.weeklyReportRecipients.forEach(function(email) {
    try {
      MailApp.sendEmail(email, subject, "", { htmlBody: html, name: "ISI Ad Intelligence Engine" });
    } catch(e) {
      console.error("Failed to send ad intelligence digest to " + email + ": " + e.toString());
    }
  });

  console.log("✅ ISI Ad Performance Intelligence report sent to leadership team.");
}

function weeklyAdCampaignDigest() {
  SEND_ISI_AD_PERFORMANCE_INTELLIGENCE_MAILER();
}

// =========================================================================================
// 8. TEST & AUTOMATION TRIGGER SETUP
// =========================================================================================

/**
 * Run this function directly inside Apps Script toolbar to test lead logging and grant permissions!
 */
function testAdLeadSubmission() {
  console.log("Testing Ad Lead Submission...");
  console.log("Remaining Daily Email Quota:", MailApp.getRemainingDailyQuota());
  var result = doPost(null);
  console.log("Result:", result.getContent());
  console.log("Spreadsheet URL:", getAdSpreadsheet().getUrl());
}

/**
 * Checks your account's remaining email quota for today
 */
function checkEmailQuota() {
  var remaining = MailApp.getRemainingDailyQuota();
  console.log("📧 Remaining Daily Email Quota for today:", remaining, "emails");
  return remaining;
}

/**
 * Sets up weekly scheduled digest trigger for Ad Campaign
 */
function setupAdCampaignWeeklyTrigger() {
  // Clear existing triggers for this function
  var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(t) {
    if (t.getHandlerFunction() === "weeklyAdCampaignDigest") {
      ScriptApp.deleteTrigger(t);
    }
  });

  // Every Friday at 8:30 AM IST
  ScriptApp.newTrigger("weeklyAdCampaignDigest")
    .timeBased()
    .everyWeeks(1)
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .atHour(8)
    .nearMinute(30)
    .create();

  console.log("✅ Weekly Ad Campaign Performance Digest trigger scheduled for Fridays 8:30 AM IST.");
}

/**
 * Run this function in Apps Script to instantly format Row 1 headers and clean up empty rows!
 */
function formatAndResetAdSheet() {
  var ss = getAdSpreadsheet();
  var sheet = ss.getSheetByName(AD_CONFIG.TAB_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(AD_CONFIG.TAB_NAME);
  }

  // Set headers in Row 1
  sheet.getRange(1, 1, 1, AD_HEADERS.length)
       .setValues([AD_HEADERS])
       .setFontWeight("bold")
       .setBackground("#003380")
       .setFontColor("#ffffff")
       .setHorizontalAlignment("center")
       .setVerticalAlignment("middle");
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  // Set column widths
  for (var col = 1; col <= AD_HEADERS.length; col++) {
    sheet.setColumnWidth(col, 160);
  }

  console.log("✅ Headers successfully initialized in Row 1 of AdCampaignLeads tab!");
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🎯 AD INTELLIGENCE')
    .addItem('📊 Build/Refresh Ad Dashboard', 'buildAdCampaignDashboard')
    .addItem('📧 Send Ad Performance Mailer', 'SEND_ISI_AD_PERFORMANCE_INTELLIGENCE_MAILER')
    .addItem('⚙️ Format Headers & Table', 'formatAndResetAdSheet')
    .addItem('🧪 Test Ad Lead Submission', 'testAdLeadSubmission')
    .addToUi();
}
