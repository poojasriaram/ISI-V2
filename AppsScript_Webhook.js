var masterMetrics = [
  "Session ID","Visitor ID","Organization","IP Address","IP Location","Variant",
  "Viewport","OS","Screen Resolution","Connection Type","Language","Dark Theme",
  "Time Zone","Page Depth","Active Tab","Session Age","Initial Source","Landing Page",
  "UTM Medium","UTM Campaign","Referrer Host","Search Engine","First Visit Date",
  "Returning User","Cursor Velocity","Rage Clicks","Scroll Velocity","Max Scroll Depth",
  "Total Click Count","Average Dwell Time","Total Active Time","Idle Time","Tab Switches",
  "Exit Intent Triggered","Interaction Frequency","Last Active Timestamp","Lead Generated",
  "Form Started","Form Abandoned","Form Last Field","Ebook Downloaded",
  "Consultation Requested","Partner Inquiry Count","Career Inquiry Count",
  "WhatsApp Widget Interactions","CTA Conversion Rate","Interest Banking","Interest Retail",
  "Interest Logistics","Interest School Safety","Interest Campus Safety",
  "Interest Cash Logistics","Interest Command Center","Interest Services",
  "Interest Commercial","Interest Residential","Map Interactions","Offices Explored",
  "Job Views","Certification Views","Carousel Slide Swipes","Testimonials Viewed",
  "Philosophy Views","Trust Metric Engagement","Benefits Section Views",
  "Footer Navigation Usage","Weighted Rank","Engagement Score","Segment",
  "Hot Lead Flag","Intent Rank","Dwell Time","Interactions","Tree","Timestamp"
];

var TAB_CONFIGS = {
  "UserBehaviorLibrary": masterMetrics,
  "TrafficAnalytics": [
    "Session ID","Visitor ID","Page Path","Page Title","Referrer","Traffic Source",
    "Organization","IP Location","IP Address","Variant","Timestamp"
  ],
  "EngagementMetrics": [
    "Session ID","Visitor ID","Page URL","Duration (sec)","Scroll Depth (%)","Click Count",
    "Engagement Score","CTA Clicked","Returning User","Is Hot Lead","Variant","Timestamp"
  ],
  "BehaviorMetrics": [
    "Session ID","Visitor ID","Page URL","Category","Metric Name","Value",
    "Element Info","Metadata","IP Location","IP Address","Variant","Timestamp"
  ],
  "ContactForm": [
    "Name","Email","Company","Designation","Phone","Location","Service Interest",
    "Source","Message","Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "PartnerApps": [
    "Name","Email","Company","Designation","Phone","Location","Partnership Type",
    "Message","Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "CareerApplications": [
    "Name","Email","Phone","Job Title","Resume File Name","Cover Letter",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "EbookDownloads": [
    "School Name","Role","Email","Phone","Source","Follow Up Status",
    "IP Location","IP Address","Variant","Timestamp"
  ],
  "ConsultationReqs": [
    "Name","School Name","Board","Number of Students","Primary Concern","Email",
    "Phone","City","Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "ChatbotLeads": [
    "Name","Email","Phone","Existing Customer","Category","Message","Status",
    "IP Location","IP Address","Organization","Variant","Timestamp"
  ],
  "SalesInquiries": [
    "Full Name","Phone Number","Work Email","Company Name",
    "IP Location","IP Address","Variant","Timestamp"
  ]
};

function doPost(e) {
  // --- MANUAL TESTING BLOCK ---
  // If run manually from Apps Script Editor, 'e' will be undefined.
  // We initialize a mock 'e' to allow the script to execute for development.
  if (!e || !e.postData || !e.postData.contents) {
    console.warn("Running in Manual Mode: Initializing Mock Payload for Testing...");
    e = {
      postData: {
        contents: JSON.stringify({
          sheetName: "TrafficAnalytics",
          sessionId: "MOCK_SESSION_123",
          visitorId: "MOCK_VISITOR_456",
          pagePath: "/manual-test",
          ipAddress: "1.1.1.1", // Non-localhost to bypass development check
          location: "Test City, India",
          timestamp: new Date().toISOString()
        })
      }
    };
  }
  // ----------------------------

  try {
    var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return ContentService.createTextOutput("Error: Invalid JSON payload.").setMimeType(ContentService.MimeType.TEXT);
    }
    var sheetName = data.sheetName;
    
    // Safety: Ignore localhost development data to prevent analytics pollution
    // var ip = data.ipAddress || "";
    // if (ip === "127.0.0.1" || ip === "::1" || ip.toLowerCase().includes("localhost")) {
    //   return ContentService.createTextOutput("Ignored: Localhost development data").setMimeType(ContentService.MimeType.TEXT);
    // }

    if (!sheetName) {
      return ContentService.createTextOutput("Error: No sheetName").setMimeType(ContentService.MimeType.TEXT);
    }
    
    var sheet = ss.getSheetByName(sheetName);
    
    // Auto-create tab if missing
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var defaultHeaders = TAB_CONFIGS[sheetName] || Object.keys(data).filter(function(k) { return k !== 'sheetName'; });
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#1a1a2e")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    var lastCol = Math.max(sheet.getLastColumn(), 1);
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    
    var newRow = headers.map(function(header) {
      if (header === "Resume Blob" || header === "resumeBlob") return "Attached to Email";
      return resolveField(header, data);
    });
    
    // Logic for Upsert/Dedup (Library & Analytics)
    var shouldUpsert = (sheetName === "UserBehaviorLibrary" || sheetName === "EngagementMetrics");
    var shouldDedup  = (sheetName === "TrafficAnalytics");
    var lastRow = sheet.getLastRow();
    var rowSaved = false;
    
    if ((shouldUpsert || shouldDedup) && lastRow > 1) {
      var sessionCol  = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
      if (shouldUpsert) {
        var rowIndex = sessionCol.indexOf(data.sessionId);
        if (rowIndex !== -1) {
          sheet.getRange(rowIndex + 2, 1, 1, newRow.length).setValues([newRow]);
          rowSaved = true;
        }
      }
      if (!rowSaved && shouldDedup) {
        var pagePathColIndex = headers.indexOf("Page Path");
        if (pagePathColIndex !== -1 && data.sessionId && data.pagePath) {
          var pageCol = sheet.getRange(2, pagePathColIndex + 1, lastRow - 1, 1).getValues().flat();
          for (var i = 0; i < sessionCol.length; i++) {
            if (sessionCol[i] === data.sessionId && pageCol[i] === data.pagePath) {
              sheet.getRange(i + 2, 1, 1, newRow.length).setValues([newRow]);
              rowSaved = true;
              break;
            }
          }
        }
      }
    }
    
    if (!rowSaved) {
      sheet.appendRow(newRow);
    }
    
    // Handle Email Notifications (Leads & Careers)
    var IS_LEAD_FORM = ["ContactForm", "PartnerApps", "CareerApplications", "EbookDownloads", "ConsultationReqs", "SalesInquiries"].indexOf(sheetName) !== -1;
    if (IS_LEAD_FORM) {
      sendLeadEmails(data, sheetName);
    }
    
    return ContentService.createTextOutput(rowSaved ? "Updated/Deduped" : "Saved").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    console.error("doPost error:", err.toString());
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

const EMAIL_CONFIG = {
  host: "mail.deeptrust.tech",
  port: 465,
  user: "pooja@deeptrust.tech",
  pass: "India@2050",
  name: "ISI Security",
  website: "https://www.isisecurity.in",
  replyTo: "info@isisecurity.in",
  internalEmails: [
    "coordinator@isisecurity.in",
    "v.vishal@isisecurity.in",
    "rajkumar.s@isisecurity.in",
    "v.varshith@isisecurity.in",
    "careers@isisecurity.in",
    "hrms2026@isisecurity.in"
  ]
};

function sendLeadEmails(data, sheetName) {
  var userEmail = data.email || data.Email || data["Work Email"] || data.workEmail || "";
  var userName = data.name || data.Name || data["Full Name"] || data.fullName || "Valued User";
  if (!userEmail) return;

  var subjectUser = "";
  var htmlUser = "";
  var subjectInternal = "";
  var htmlInternal = "";
  var attachments = [];

  if (sheetName === "ContactForm") {
    subjectUser = "✅ Inquiry Received – ISI Security";
    htmlUser = buildUserHtml(userName, "We've received your message and our team will get back to you shortly.");
    subjectInternal = "🔔 New Security Lead: " + (data.company || data.Company || "Unknown Company");
    htmlInternal = buildInternalHtml("New Contact Form Submission", data);
  }
  else if (sheetName === "PartnerApps") {
    subjectUser = "🤝 Partnership Application Received – ISI Security";
    htmlUser = buildUserHtml(userName, "Thank you for your interest in joining the ISI Partner Network. Our team is reviewing your application.");
    subjectInternal = "🤝 New Partner Application: " + (data.company || data.Company || "");
    htmlInternal = buildInternalHtml("New Partner Application", data);
  }
  else if (sheetName === "CareerApplications") {
    subjectUser = "📄 Application Received – ISI Security";
    htmlUser = buildUserHtml(userName, "We have received your career application. Our HR team will review your profile and reach out if there's a match.");
    subjectInternal = "📄 New Career Application: " + (data.jobTitle || data["Job Title"] || "");
    htmlInternal = buildInternalHtml("New Career Application", data);
    
    // Attach Resume if present
    if (data.resumeBlob) {
      var decoded = Utilities.base64Decode(data.resumeBlob);
      var attachment = Utilities.newBlob(decoded, data.resumeMimeType, data.resumeFileName);
      attachments.push(attachment);
    }
  }
  else if (sheetName === "SalesInquiries") {
    subjectUser = "✅ Sales Consultation Request Received – ISI Security";
    htmlUser = buildUserHtml(userName, "We have received your consultation request. Our sales team is reviewing your requirements and will reach out to you shortly to assist.");
    subjectInternal = "🔔 New Sales Inquiry: " + (data.companyName || data["Company Name"] || "Unknown Company");
    htmlInternal = buildInternalHtml("New Sales Consultation Request", data);
  }
  else {
    subjectUser = "✅ Request Received – ISI Security";
    htmlUser = buildUserHtml(userName, "We've received your request and will follow up with you shortly.");
    subjectInternal = "🔔 New Submission: " + sheetName;
    htmlInternal = buildInternalHtml("New Form Submission (" + sheetName + ")", data);
  }

  // Send Confirmation to User
  try {
    MailApp.sendEmail({
      to: userEmail,
      subject: subjectUser,
      htmlBody: htmlUser,
      name: EMAIL_CONFIG.name,
      replyTo: EMAIL_CONFIG.replyTo
    });
  } catch(e) { console.error("Failed to send user email", e); }

  // Send Notification to Team
  try {
    EMAIL_CONFIG.internalEmails.forEach(function(email) {
      var mailOptions = {
        to: email,
        subject: subjectInternal,
        htmlBody: htmlInternal,
        name: "ISI System Notifications"
      };
      if (attachments.length > 0) mailOptions.attachments = attachments;
      MailApp.sendEmail(mailOptions);
    });
  } catch(e) { console.error("Failed to send internal admin email", e); }
}

function buildUserHtml(name, messageStr) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <style>',
    '    body { font-family: "Segoe UI", Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }',
    '    .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }',
    '    .header { background: #003380; padding: 30px 20px; text-align: center; }',
    '    .header h1 { color: white; margin: 0; font-size: 24px; }',
    '    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }',
    '    .title { font-size: 22px; color: #003380; font-weight: 600; margin-bottom: 20px; }',
    '    .offerings { margin-top: 30px; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }',
    '    .offerings h3 { color: #0f172a; font-size: 16px; margin-top: 0; }',
    '    .offerings ul { padding-left: 20px; margin: 0; font-size: 14px; color: #475569; }',
    '    .offerings li { margin-bottom: 8px; }',
    '    .btn { display: inline-block; padding: 12px 25px; background: #0056b3; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 25px; }',
    '    .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }',
    '  </style>',
    '</head>',
    '<body>',
    '  <div class="container">',
    '    <div class="header">',
    '      <h1>ISI Security</h1>',
    '    </div>',
    '    <div class="content">',
    '      <div class="title">Thank You, ' + name + '</div>',
    '      <p>' + messageStr + '</p>',
    '      <div class="offerings">',
    '        <h3>Explore Our Security Offerings</h3>',
    '        <ul>',
    '          <li><strong>Manned Guarding:</strong> Elite security personnel for comprehensive physical protection.</li>',
    '          <li><strong>Electronic Security:</strong> Advanced CCTV, access control, and smart surveillance systems.</li>',
    '          <li><strong>Command Center:</strong> 24/7 centralized monitoring and rapid incident response.</li>',
    '          <li><strong>Cash Logistics:</strong> Secure cash management and ATM replenishment.</li>',
    '          <li><strong>Facility Management:</strong> Integrated manpower solutions to maintain premium facility standards.</li>',
    '        </ul>',
    '      </div>',
    '      <a href="' + EMAIL_CONFIG.website + '" class="btn">Visit Our Website</a>',
    '    </div>',
    '    <div class="footer">',
    '      &copy; ' + new Date().getFullYear() + ' ISI Security. All rights reserved.<br>',
    '      This is an automated message, please do not reply directly to this email.',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

function buildInternalHtml(title, data) {
  var rows = "";
  for (var key in data) {
    if (key === "sheetName" || key === "resumeBlob" || key === "resumeMimeType" || !data[key]) continue;
    var prettyKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).trim();
    rows += '<tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 35%;">' + prettyKey + '</td>' +
            '<td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">' + String(data[key]).replace(/\n/g, "<br>") + '</td></tr>';
  }
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <style>',
    '    body { font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; }',
    '    .wrapper { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }',
    '    h2 { color: #d9453a; border-bottom: 2px solid #eee; padding-bottom: 10px; }',
    '    table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; }',
    '  </style>',
    '</head>',
    '<body>',
    '  <div class="wrapper">',
    '    <h2>🚨 ' + title + '</h2>',
    '    <p>A new lead/submission has been captured on the website.</p>',
    '    <table>',
    '      ' + rows,
    '    </table>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

function resolveField(header, data) {
  var explicitMap = {
    "IP Location":            data.location     || data.ipLocation  || data["IP Location"]  || "",
    "IP Address":             data.ipAddress     || data.ip_address  || data["IP Address"]   || "",
    "Organization":           data.organization  || data.org         || data["Organization"] || "",
    "Session ID":             data.sessionId     || data["Session ID"]    || "",
    "Visitor ID":             data.visitorId     || data["Visitor ID"]    || "",
    "Page Path":              data.pagePath      || data["Page Path"]     || "",
    "Page Title":             data.pageTitle     || data["Page Title"]    || "",
    "Traffic Source":         data.trafficSource || data["Traffic Source"]|| "",
    "Page URL":               data.pageUrl       || data["Page URL"]      || "",
    "Duration (sec)":         data.duration      || data["Duration (sec)"]|| "",
    "Scroll Depth (%)":       data.scrollDepth   || data["Scroll Depth (%)"] || "",
    "Click Count":            data.clickCount    || data["Click Count"]   || "",
    "Engagement Score":       data.engagementScore || data["Engagement Score"] || "",
    "CTA Clicked":            data.ctaClicked    || data["CTA Clicked"]   || "",
    "Returning User":         data.returningUser || data["Returning User"]|| "",
    "Is Hot Lead":            data.isHotLead     || data["Is Hot Lead"]   || "",
    "Metric Name":            data.metricName    || data["Metric Name"]   || "",
    "Element Info":           data.elementInfo   || data["Element Info"]  || "",
    "Hot Lead Flag":          data.hotLeadFlag   || data["Hot Lead Flag"] || "",
    "Intent Rank":            data.intentRank    || data["Intent Rank"]   || "",
    "Dark Theme":             (data.darkTheme !== undefined) ? String(data.darkTheme) : "",
    "Active Tab":             (data.activeTab  !== undefined) ? String(data.activeTab)  : "",
    "Lead Generated":         (data.leadGenerated !== undefined) ? String(data.leadGenerated) : "",
    "Form Started":           (data.formStarted   !== undefined) ? String(data.formStarted)   : "",
    "Form Abandoned":         (data.formAbandoned !== undefined) ? String(data.formAbandoned) : "",
    "Exit Intent Triggered":  (data.exitIntentTriggered !== undefined) ? String(data.exitIntentTriggered) : "",
    "Ebook Downloaded":       (data.ebookDownloaded !== undefined) ? String(data.ebookDownloaded) : "",
    "Consultation Requested": (data.consultationRequested !== undefined) ? String(data.consultationRequested) : "",
    "Timestamp":              normalizeTimestamp(data.timestamp || data.Timestamp)
  };
  
  if (explicitMap.hasOwnProperty(header)) {
    var val = explicitMap[header];
    return (val !== null && typeof val === 'object') ? JSON.stringify(val) : (val === undefined ? "" : val);
  }
  
  var slug = header
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(' ')
    .map(function(word, i) {
      if (i === 0) return word.charAt(0).toLowerCase() + word.slice(1);
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
    
  var value = data[slug];
  if (value === undefined) value = data[header];
  if (value === undefined) value = "";
  
  return (value !== null && typeof value === 'object') ? JSON.stringify(value) : value;
}

function normalizeTimestamp(ts) {
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
function calculateChange(current, previous) {
  if (previous === 0) return current > 0 ? "+100%" : "0%";
  var change = ((current - previous) / previous) * 100;
  return (change >= 0 ? "+" : "") + change.toFixed(1) + "%";
}
function parseSheetDate(val) {
  if (!val) return null;
  if (val instanceof Date) return val;
  var str = String(val);
  if (str.match(/^\d{4}-\d{2}-\d{2}/)) {
    return new Date(str.substring(0, 10));
  }
  var match = str.match(/^(\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{4})/);
  if (match) {
    var months = {'Jan':0,'Feb':1,'Mar':2,'Apr':3,'May':4,'Jun':5,'Jul':6,'Aug':7,'Sep':8,'Oct':9,'Nov':10,'Dec':11};
    return new Date(match[3], months[match[2]], match[1]);
  }
  return new Date(str);
}
function cleanupDuplicates() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var sheet = ss.getSheetByName('TrafficAnalytics');
  if (!sheet) { console.log('TrafficAnalytics sheet not found'); return; }
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var sessionCol = headers.indexOf('Session ID');
  var pageCol    = headers.indexOf('Page Path');
  var ipCol      = headers.indexOf('IP Address');
  if (sessionCol === -1 || pageCol === -1) {
    console.log('Required columns not found'); return;
  }
  var seen = {};
  var rowsToDelete = [];
  for (var i = data.length - 1; i >= 1; i--) {
    var key = data[i][sessionCol] + '||' + data[i][pageCol];
    if (!key || key === '||') continue;
    if (seen[key] !== undefined) {
      var existingRow = seen[key];
      var existingHasIp = data[existingRow - 1][ipCol] && data[existingRow - 1][ipCol] !== '';
      var currentHasIp  = data[i][ipCol] && data[i][ipCol] !== '';
      if (currentHasIp && !existingHasIp) {
        rowsToDelete.push(existingRow);
        seen[key] = i + 1;
      } else {
        rowsToDelete.push(i + 1);
      }
    } else {
      seen[key] = i + 1;
    }
  }
  rowsToDelete.sort(function(a, b) { return b - a; });
  rowsToDelete.forEach(function(rowNum) {
    sheet.deleteRow(rowNum);
  });
  console.log('✅ Cleanup complete. Removed ' + rowsToDelete.length + ' duplicate rows from TrafficAnalytics.');
  SpreadsheetApp.flush();
}
/** Purges all records originating from localhost/127.0.0.1 across all tracking sheets */
function cleanupLocalhost() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var sheets = ss.getSheets();
  var totalRemoved = 0;

  sheets.forEach(function(sheet) {
    var data = sheet.getDataRange().getValues();
    if (data.length < 2) return;
    var headers = data[0];
    var ipCol = headers.indexOf("IP Address");
    if (ipCol === -1) ipCol = headers.indexOf("ipAddress");
    
    if (ipCol !== -1) {
      var initialRows = sheet.getLastRow();
      for (var i = data.length - 1; i >= 1; i--) {
        var ip = String(data[i][ipCol]);
        if (ip === "127.0.0.1" || ip === "::1" || ip.toLowerCase().includes("localhost")) {
          sheet.deleteRow(i + 1);
          totalRemoved++;
        }
      }
    }
  });
  console.log("✅ Localhost Cleanup Complete. Removed " + totalRemoved + " development records.");
}
function setupTriggers() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    var fn = t.getHandlerFunction();
    if (['dailyReport', 'weeklyReport', 'checkWatchlist', 'recurringTask'].indexOf(fn) !== -1) {
      ScriptApp.deleteTrigger(t);
    }
  });
  ScriptApp.newTrigger("dailyReport")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();
  ScriptApp.newTrigger("weeklyReport")
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .atHour(8)
    .create();
  ScriptApp.newTrigger("checkWatchlist")
    .timeBased()
    .everyMinutes(15)
    .create();
  console.log("✅ ISI Analytics Triggers created successfully!");
}
function isBusinessHoursIST() {
  var now = new Date();
  var utcHour = now.getUTCHours();
  var utcMin  = now.getUTCMinutes();
  var utcDay  = now.getUTCDay();
  var istTotalMinutes = utcHour * 60 + utcMin + 330;
  var istHour = Math.floor(istTotalMinutes / 60) % 24;
  var istDay  = (utcDay + (istTotalMinutes >= 1440 ? 1 : 0)) % 7;
  return (istDay >= 1 && istDay <= 5 && istHour >= 9 && istHour < 18);
}
function dailyReport() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var trafficSheet = ss.getSheetByName("TrafficAnalytics");
  if (!trafficSheet) return;
  var yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  var dayBefore = new Date(); dayBefore.setDate(dayBefore.getDate() - 2);
  var targetDateISO = Utilities.formatDate(yesterday, "Asia/Kolkata", "yyyy-MM-dd");
  var prevDateISO   = Utilities.formatDate(dayBefore, "Asia/Kolkata", "yyyy-MM-dd");
  var data = trafficSheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol = headers.indexOf("Timestamp");
  var ipCol = headers.indexOf("IP Address");
  var pathCol = headers.indexOf("Page Path");
  var stats = { yesterday: { sess: 0, ips: new Set(), pages: {} }, dayBefore: { sess: 0, ips: new Set() } };
  for (var i = 1; i < data.length; i++) {
    var rd = parseSheetDate(data[i][tsCol]);
    if (!rd) continue;
    var rdStr = Utilities.formatDate(rd, "Asia/Kolkata", "yyyy-MM-dd");
    if (rdStr === targetDateISO) {
      stats.yesterday.sess++;
      if (data[i][ipCol]) stats.yesterday.ips.add(data[i][ipCol]);
      var p = data[i][pathCol] || "/";
      stats.yesterday.pages[p] = (stats.yesterday.pages[p] || 0) + 1;
    } else if (rdStr === prevDateISO) {
      stats.dayBefore.sess++;
      if (data[i][ipCol]) stats.dayBefore.ips.add(data[i][ipCol]);
    }
  }
  var topPage = Object.keys(stats.yesterday.pages).sort(function(a, b) { return stats.yesterday.pages[b] - stats.yesterday.pages[a]; })[0] || "N/A";
  var sessChange = calculateChange(stats.yesterday.sess, stats.dayBefore.sess);
  var ipChange   = calculateChange(stats.yesterday.ips.size, stats.dayBefore.ips.size);
  var metrics = [
    { label: "Total Sessions", value: stats.yesterday.sess, delta: sessChange },
    { label: "Unique Visitors", value: stats.yesterday.ips.size, delta: ipChange },
    { label: "Top Page", value: topPage, delta: null }
  ];
  
  var charts = {};
  try {
    var trendSh = ss.getSheetByName("📈 Reports & Trends");
    var dashSh  = ss.getSheetByName("📊 Analytics Dashboard");
    if (trendSh && trendSh.getCharts().length > 0) charts.trend = trendSh.getCharts()[0].getAs('image/png');
    if (trendSh && trendSh.getCharts().length > 2) charts.sources = trendSh.getCharts()[2].getAs('image/png');
    if (dashSh && dashSh.getCharts().length > 0) charts.pages = dashSh.getCharts()[0].getAs('image/png');
  } catch(e) { console.error("Chart extraction failed", e.toString()); }
  
  // Save to Sheet
  var dailySheet = ss.getSheetByName("DailyReports");
  if (!dailySheet) {
    dailySheet = ss.insertSheet("DailyReports");
    dailySheet.appendRow(["Date", "Sessions", "Unique IPs", "Top Page"]);
  }
  // Store the daily data so it shows on the dashboard correctly
  dailySheet.appendRow([targetDateISO, stats.yesterday.sess, stats.yesterday.ips.size, topPage]);

  var emailHtml = buildReportHtml("ISI Daily Analytics Summary", "Activity for " + targetDateISO + " (vs day before)", metrics, null, ss.getUrl(), charts);
  sendReportEmail("📊 Daily Report: " + targetDateISO, emailHtml, charts);
}
function weeklyReport() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var trafficSheet = ss.getSheetByName("TrafficAnalytics");
  if (!trafficSheet) return;
  var now = new Date();
  var w1Start = new Date(now); w1Start.setDate(now.getDate() - 7);
  var w2Start = new Date(w1Start); w2Start.setDate(w1Start.getDate() - 7);
  var data = trafficSheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol = headers.indexOf("Timestamp");
  var ipCol = headers.indexOf("IP Address");
  var pathCol = headers.indexOf("Page Path");
  var w1 = { sess: 0, ips: new Set(), pages: {} };
  var w2 = { sess: 0, ips: new Set() };
  for (var i = 1; i < data.length; i++) {
    var ts = parseSheetDate(data[i][tsCol]);
    if (!ts) continue;
    if (ts >= w1Start && ts <= now) {
      w1.sess++;
      if (data[i][ipCol]) w1.ips.add(data[i][ipCol]);
      var p = data[i][pathCol] || "/";
      w1.pages[p] = (w1.pages[p] || 0) + 1;
    } else if (ts >= w2Start && ts < w1Start) {
      w2.sess++;
      if (data[i][ipCol]) w2.ips.add(data[i][ipCol]);
    }
  }
  var topList = Object.keys(w1.pages).filter(function(p) { return p !== "/"; })
    .sort(function(a, b) { return w1.pages[b] - w1.pages[a]; }).slice(0, 5)
    .map(function(p) { return '<li><strong>' + p + '</strong> (' + w1.pages[p] + ' visits)</li>'; });
  var sessChange = calculateChange(w1.sess, w2.sess);
  var ipChange   = calculateChange(w1.ips.size, w2.ips.size);
  var metrics = [
    { label: "Week Sessions", value: w1.sess, delta: sessChange },
    { label: "Unique Visitors", value: w1.ips.size, delta: ipChange }
  ];
  
  var charts = {};
  try {
    var trendSh = ss.getSheetByName("📈 Reports & Trends");
    var dashSh  = ss.getSheetByName("📊 Analytics Dashboard");
    if (trendSh && trendSh.getCharts().length > 1) charts.trend = trendSh.getCharts()[1].getAs('image/png');
    if (trendSh && trendSh.getCharts().length > 2) charts.sources = trendSh.getCharts()[2].getAs('image/png');
    if (dashSh && dashSh.getCharts().length > 0) charts.pages = dashSh.getCharts()[0].getAs('image/png');
  } catch(e) { console.error("Chart extraction failed", e.toString()); }

  // Save to Sheet
  var weeklySheet = ss.getSheetByName("WeeklyReports");
  if (!weeklySheet) {
    weeklySheet = ss.insertSheet("WeeklyReports");
    weeklySheet.appendRow(["Week Starting", "Week Ending", "Sessions", "Unique IPs"]);
  }
  var startDate = Utilities.formatDate(w1Start, "Asia/Kolkata", "yyyy-MM-dd");
  var endDate = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd");
  weeklySheet.appendRow([startDate, endDate, w1.sess, w1.ips.size]);

  var emailHtml = buildReportHtml("ISI Weekly Performance Summary", "Last 7 days vs previous week", metrics, topList, ss.getUrl(), charts);
  sendReportEmail("📅 Weekly Report Summary", emailHtml, charts);
}
function sendReportEmail(subject, htmlBody, charts) {
  var recipients = ["pooja@deeptrust.tech", "v.varshith@isisecurity.in", "bv@trustflow.in"];
  var inlineImages = {};
  if (charts) {
    for (var key in charts) {
      inlineImages[key + "Img"] = charts[key];
    }
  }
  var options = {
    htmlBody: htmlBody,
    name: "ISI Analytics System",
    inlineImages: inlineImages
  };
  try {
    recipients.forEach(function(email) {
      MailApp.sendEmail(email, subject, "", options);
    });
  } catch(e) { console.error("Report email failed", e.toString()); }
}
function buildReportHtml(title, subtitle, metrics, list, dashboardUrl, charts) {
  var rowsHtml = metrics.map(function(m) {
    var dColor = m.delta && m.delta.startsWith('+') ? '#10b981' : (m.delta && m.delta.startsWith('-') ? '#ef4444' : '#64748b');
    var dBadge = m.delta ? '<span style="font-size:11px;margin-left:8px;color:'+dColor+';background:'+dColor+'15;padding:2px 6px;border-radius:4px;font-weight:700;">'+m.delta+'</span>' : '';
    return '<tr>' +
           '<td style="padding:12px;border-bottom:1px solid #eef2f6;color:#64748b;font-size:14px;">'+m.label+'</td>' +
           '<td style="padding:12px;border-bottom:1px solid #eef2f6;color:#0f172a;font-weight:bold;font-size:14px;text-align:right;">'+m.value + dBadge+'</td>' +
           '</tr>';
  }).join('');

  var chartSections = "";
  if (charts) {
    if (charts.trend) {
      chartSections += '<div style="margin-top:25px;padding:15px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;text-align:center;">' +
                       '<h3 style="color:#0f172a;font-size:14px;margin:0 0 10px 0;text-align:left;">📈 Performance Trend</h3>' +
                       '<img src="cid:trendImg" style="width:100%;max-width:550px;border-radius:8px;" />' +
                       '</div>';
    }
    if (charts.sources || charts.pages) {
      chartSections += '<div style="margin-top:20px; display: table; width: 100%; border-spacing: 10px 0;">';
      if (charts.sources) {
        chartSections += '<div style="display: table-cell; width: 50%; padding:15px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; vertical-align: top; text-align:center;">' +
                         '<h3 style="color:#0f172a;font-size:13px;margin:0 0 10px 0;text-align:left;">🌐 Traffic Sources</h3>' +
                         '<img src="cid:sourcesImg" style="width:100%;border-radius:6px;" />' +
                         '</div>';
      }
      if (charts.pages) {
        chartSections += '<div style="display: table-cell; width: 50%; padding:15px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; vertical-align: top; text-align:center;">' +
                         '<h3 style="color:#0f172a;font-size:13px;margin:0 0 10px 0;text-align:left;">🏆 Top Pages</h3>' +
                         '<img src="cid:pagesImg" style="width:100%;border-radius:6px;" />' +
                         '</div>';
      }
      chartSections += '</div>';
    }
  }

  var listSection = (list && list.length > 0) ? (
    '<div style="margin-top:25px;border-top:2px solid #f1f5f9;padding-top:20px;">' +
    '<h3 style="color:#0f172a;font-size:16px;margin:0 0 15px 0;">🔥 Top Analytics Breakdown</h3>' +
    '<ul style="margin:0;padding-left:20px;color:#475569;font-size:14px;line-height:1.8;">' + list.join('') + '</ul></div>'
  ) : '';

  return [
    '<!DOCTYPE html><html><head><style>body { font-family: "Segoe UI", Arial, sans-serif; }</style></head>',
    '<body style="background-color:#f4f7fa;padding:20px;margin:0;">',
    ' <div style="max-width:650px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);border:1px solid #e1e5e9;">',
    '  <div style="background-color:#003380;padding:35px 20px;text-align:center;">',
    '   <h1 style="color:#ffffff;margin:0;font-size:24px;letter-spacing:1px;font-weight:800;">ISI SECURITY</h1>',
    '   <p style="color:#93c5fd;margin:10px 0 0 0;font-size:14px;font-weight:500;">'+title+'</p>',
    '  </div>',
    '  <div style="padding:35px;">',
    '   <p style="color:#64748b;font-size:15px;margin:0 0 25px 0;font-weight:500;">'+subtitle+'</p>',
    '   <table style="width:100%;border-collapse:collapse;">',
    '    <thead><tr style="background-color:#f8fafc;">',
    '     <th style="padding:12px;text-align:left;color:#0f172a;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Metric</th>',
    '     <th style="padding:12px;text-align:right;color:#0f172a;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Value & Growth</th>',
    '    </tr></thead>',
    '    <tbody>'+rowsHtml+'</tbody>',
    '   </table>',
    chartSections, listSection,
    '   <div style="text-align:center;margin-top:35px;">',
    '    <a href="'+dashboardUrl+'" style="background-color:#003380;color:#ffffff;padding:15px 30px;text-decoration:none;border-radius:10px;font-weight:700;font-size:15px;display:inline-block;box-shadow:0 4px 12px rgba(0,51,128,0.2);">View Full Analytics Dashboard</a>',
    '   </div>',
    '  </div>',
    '  <div style="background-color:#f8fafc;padding:25px;text-align:center;border-top:1px solid #eef2f6;">',
    '   <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ' + new Date().getFullYear() + ' Industrial Security & Intelligence (India) Pvt Ltd.</p>',
    '   <p style="color:#cbd5e1;font-size:11px;margin:5px 0 0 0;">Confidential System Report • Do not share externally</p>',
    '  </div>',
    ' </div>',
    '</body></html>'
  ].join('\n');
}
function checkWatchlist() {
  if (!isBusinessHoursIST()) return;
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var watchlistSheet = ss.getSheetByName("Watchlist");
  var trafficSheet   = ss.getSheetByName("TrafficAnalytics");
  if (!watchlistSheet || !trafficSheet) return;
  var watchlistIPs = watchlistSheet.getRange(2, 1, Math.max(watchlistSheet.getLastRow() - 1, 1), 1)
    .getValues().flat().filter(String);
  if (watchlistIPs.length === 0) return;
  var trafficData = trafficSheet.getDataRange().getValues();
  var headers     = trafficData[0];
  var ipCol       = headers.indexOf("IP Address");
  var tsCol       = headers.indexOf("Timestamp");
  var pathCol     = headers.indexOf("Page Path");
  var fifteenMinAgo = new Date(Date.now() - 15 * 60 * 1000);
  var alerts = [];
  for (var i = 1; i < trafficData.length; i++) {
    var ts = trafficData[i][tsCol] ? new Date(trafficData[i][tsCol]) : null;
    if (!ts || ts < fifteenMinAgo) continue;
    var ip = String(trafficData[i][ipCol] || "");
    if (watchlistIPs.indexOf(ip) !== -1) {
      alerts.push("IP: " + ip + " visited " + (trafficData[i][pathCol] || "/") + " at " + trafficData[i][tsCol]);
    }
  }
  if (alerts.length > 0) {
    var alertsSheet = ss.getSheetByName("WatchlistAlerts");
    if (!alertsSheet) {
      alertsSheet = ss.insertSheet("WatchlistAlerts");
      alertsSheet.appendRow(["Timestamp", "Alert Details"]);
    }
    alerts.forEach(function(alert) {
      alertsSheet.appendRow([new Date(), alert]);
    });

    MailApp.sendEmail({
      to: Session.getActiveUser().getEmail(),
      subject: "🚨 ISI Watchlist Alert: " + alerts.length + " match(es)",
      body: "Watchlist IP activity detected in last 15 minutes:\n\n" + alerts.join("\n")
    });
  }
}
function recurringTask() {
  dailyReport();
  checkWatchlist();
}
function buildReportsDashboard() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var SHEET_NAME = "📈 Reports & Trends";
  var sh = ss.getSheetByName(SHEET_NAME);
  if (sh) {
    sh.clearContents();
    sh.clearFormats();
    sh.getCharts().forEach(function(c) { sh.removeChart(c); });
  } else {
    sh = ss.insertSheet(SHEET_NAME);
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(2);
  }
  var DARK_BG   = "#0f172a";
  var WHITE     = "#ffffff";
  var ACCENT    = "#6366f1";
  var GREEN     = "#22c55e";
  var ORANGE    = "#f59e0b";
  var CYAN      = "#22d3ee";
  var RED       = "#ef4444";
  [180, 130, 130, 130, 40, 180, 130, 130].forEach(function(w, i) {
    sh.setColumnWidth(i + 1, w);
  });
  sh.setRowHeight(1, 50);
  sh.getRange("A1:H1").merge()
    .setValue("📈  ISI Reports & Trigger History")
    .setBackground(DARK_BG)
    .setFontColor(WHITE)
    .setFontWeight("bold")
    .setFontSize(18)
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");
  sh.setRowHeight(2, 24);
  sh.getRange("A2:H2").merge()
    .setFormula('="Dashboard refreshed: "&TEXT(NOW(),"dd-mmm-yyyy hh:mm")&" IST"')
    .setBackground("#1e293b")
    .setFontColor("#94a3b8")
    .setFontSize(9)
    .setHorizontalAlignment("center");
  sh.setRowHeight(3, 38);
  sh.getRange("A3").setFormula('=IFERROR("📅 Daily Reports Run: "&COUNTA(DailyReports!A:A)-1,0)')
    .setBackground("#1e293b").setFontColor(CYAN).setFontSize(10).setFontWeight("bold");
  sh.getRange("B3").setFormula('=IFERROR("📊 Weekly Reports Run: "&COUNTA(WeeklyReports!A:A)-1,0)')
    .setBackground("#1e293b").setFontColor(GREEN).setFontSize(10).setFontWeight("bold");
  sh.getRange("C3").setFormula('=IFERROR("🚨 Watchlist Alerts: "&MAX(COUNTA(WatchlistAlerts!A:A)-1, 0),0)')
    .setBackground("#1e293b").setFontColor(ORANGE).setFontSize(10).setFontWeight("bold");
  sh.getRange("D3").setFormula('=IFERROR("🔥 Hot Leads Total: "&COUNTIF(INDEX(UserBehaviorLibrary!A:ZZ, 0, MATCH("Hot Lead Flag", UserBehaviorLibrary!1:1, 0)), "TRUE") + COUNTIF(INDEX(UserBehaviorLibrary!A:ZZ, 0, MATCH("Hot Lead Flag", UserBehaviorLibrary!1:1, 0)), "YES"),0)')
    .setBackground("#1e293b").setFontColor(RED).setFontSize(10).setFontWeight("bold");
  sh.setFrozenRows(3);
  var SA = 5;
  sh.getRange(SA, 1, 1, 4).merge()
    .setValue("📅  Daily Traffic Trend (from DailyReports)")
    .setBackground(ACCENT).setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  sh.setRowHeight(SA, 32);
  ["Date", "Sessions", "Unique IPs", "Top Page"].forEach(function(h, i) {
    sh.getRange(SA + 1, i + 1).setValue(h)
      .setBackground("#1e40af").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });
  sh.getRange(SA + 2, 1).setFormula(
    '=IFERROR(QUERY(DailyReports!A:E,' +
    '"SELECT A, B, C, D ORDER BY A DESC LIMIT 14",0),' +
    '{"No daily reports yet","","",""})'
  );
  for (var r = 0; r < 14; r++) {
    sh.getRange(SA + 2 + r, 1, 1, 4)
      .setBackground(r % 2 === 0 ? "#1e293b" : "#263148")
      .setFontColor(WHITE).setFontSize(10);
  }
  var chartA = sh.newChart()
    .setChartType(Charts.ChartType.LINE)
    .addRange(sh.getRange(SA + 1, 1, 16, 1))
    .addRange(sh.getRange(SA + 1, 2, 16, 1))
    .setPosition(SA, 6, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Daily Sessions Trend (Last 14 Days)")
    .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", {
      textStyle: { color: WHITE, fontSize: 8 },
      gridlines: { color: "#334155" },
      slantedText: true,
      slantedTextAngle: 45
    })
    .setOption("vAxis", { textStyle: { color: WHITE }, gridlines: { color: "#334155" } })
    .setOption("legend", { position: "none" })
    .setOption("colors", [ACCENT])
    .setOption("lineWidth", 3)
    .setOption("pointSize", 6)
    .setOption("curveType", "function")
    .setOption("width", 500)
    .setOption("height", 300)
    .build();
  sh.insertChart(chartA);
  var SB = 22;
  sh.getRange(SB, 1, 1, 4).merge()
    .setValue("📆  Weekly Sessions Comparison (from WeeklyReports)")
    .setBackground("#7c3aed").setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  sh.setRowHeight(SB, 32);
  ["Week Starting", "Week Ending", "Sessions", "Unique IPs"].forEach(function(h, i) {
    sh.getRange(SB + 1, i + 1).setValue(h)
      .setBackground("#4c1d95").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });
  sh.getRange(SB + 2, 1).setFormula(
    '=IFERROR(QUERY(WeeklyReports!A:F,' +
    '"SELECT A, B, C, D ORDER BY A DESC LIMIT 8",0),' +
    '{"No weekly reports yet","","",""})'
  );
  for (var r = 0; r < 8; r++) {
    sh.getRange(SB + 2 + r, 1, 1, 4)
      .setBackground(r % 2 === 0 ? "#1e293b" : "#263148")
      .setFontColor(WHITE).setFontSize(10);
  }
  var chartB = sh.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sh.getRange(SB + 1, 1, 9, 1))
    .addRange(sh.getRange(SB + 1, 3, 9, 2))
    .setPosition(SB, 6, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Weekly Sessions vs Unique IPs")
    .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE, fontSize: 8 }, slantedText: true })
    .setOption("vAxis", { textStyle: { color: WHITE }, gridlines: { color: "#334155" } })
    .setOption("legend", { textStyle: { color: WHITE }, position: "bottom" })
    .setOption("colors", ["#7c3aed", CYAN])
    .setOption("isStacked", false)
    .setOption("width", 500)
    .setOption("height", 280)
    .build();
  sh.insertChart(chartB);
  var SC = 33;
  sh.getRange(SC, 1, 1, 3).merge()
    .setValue("🌐  Traffic Source Breakdown")
    .setBackground("#0891b2").setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  sh.setRowHeight(SC, 32);
  ["Source", "Sessions", "% Share"].forEach(function(h, i) {
    sh.getRange(SC + 1, i + 1).setValue(h)
      .setBackground("#164e63").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });
  sh.getRange(SC + 2, 1).setFormula(
    '=IFERROR(QUERY(TrafficAnalytics!A:K,' +
    '"SELECT F, COUNT(F) WHERE F != \'\' ' +
    'GROUP BY F ORDER BY COUNT(F) DESC ' +
    'LABEL F \'Source\', COUNT(F) \'Sessions\'",0),' +
    '{"No data yet",""})'
  );
  for (var r = 0; r < 10; r++) {
    var row = SC + 2 + r;
    sh.getRange(row, 3)
      .setFormula('=IFERROR(B' + row + '/SUM($B$' + (SC+2) + ':$B$' + (SC+11) + '),"")' )
      .setNumberFormat("0.0%");
    sh.getRange(row, 1, 1, 3)
      .setBackground(r % 2 === 0 ? "#1e293b" : "#263148")
      .setFontColor(WHITE).setFontSize(10);
  }
  var chartC = sh.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(sh.getRange(SC + 1, 1, 11, 2))
    .setPosition(SC, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Traffic Sources")
    .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("legend", { textStyle: { color: WHITE }, position: "right" })
    .setOption("pieSliceTextStyle", { color: WHITE })
    .setOption("colors", [ACCENT, GREEN, ORANGE, CYAN, RED, "#8b5cf6", "#ec4899"])
    .setOption("is3D", true)
    .setOption("width", 450)
    .setOption("height", 300)
    .build();
  sh.insertChart(chartC);
  var SD = 46;
  sh.getRange(SD, 1, 1, 4).merge()
    .setValue("⚙️  Cron Trigger Execution Log")
    .setBackground("#059669").setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
  sh.setRowHeight(SD, 32);
  ["Trigger", "Status", "Last Ran", "Next Expected"].forEach(function(h, i) {
    sh.getRange(SD + 1, i + 1).setValue(h)
      .setBackground("#064e3b").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
  });
  var triggerData = [
    ["dailyReport", "✅ Active", '=IFERROR(TEXT(MAX(DailyReports!E:E),"dd-mmm-yyyy hh:mm")&" IST","Never ran")', "Every day ~8:30 AM IST"],
    ["weeklyReport", "✅ Active", '=IFERROR(TEXT(MAX(WeeklyReports!F:F),"dd-mmm-yyyy hh:mm")&" IST","Never ran")', "Every Friday ~8:30 AM IST"],
    ["checkWatchlist", "✅ Active (business hours)", "Every 15 min (Mon-Fri 9-6 IST)", "Runs continuously"],
    ["doPost (Web App)", "✅ Always Live", "On every site visit", "Instant (event-driven)"]
  ];
  triggerData.forEach(function(row, i) {
    var r = SD + 2 + i;
    sh.getRange(r, 1).setValue(row[0]).setFontWeight("bold");
    sh.getRange(r, 2).setValue(row[1]);
    if (row[2].startsWith("=")) {
      sh.getRange(r, 3).setFormula(row[2]);
    } else {
      sh.getRange(r, 3).setValue(row[2]);
    }
    sh.getRange(r, 4).setValue(row[3]);
    sh.getRange(r, 1, 1, 4)
      .setBackground(i % 2 === 0 ? "#1e293b" : "#263148")
      .setFontColor(WHITE).setFontSize(10);
    sh.setRowHeight(r, 28);
  });
  sh.getRange("A1:H80").setBackground(DARK_BG).setFontColor(WHITE);
  SpreadsheetApp.flush();
  console.log("✅ Reports & Trigger Dashboard built successfully!");
}
function buildAnalyticsDashboard() {
  var ss = SpreadsheetApp.openById("1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60");
  var DASH_NAME = "📊 Analytics Dashboard";
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
  var DARK_BG    = "#0f172a";
  var ACCENT     = "#6366f1";
  var ACCENT2    = "#22d3ee";
  var WHITE      = "#ffffff";
  var LIGHT_ROW  = "#1e293b";
  var HEADER_ROW = "#1e40af";
  dash.setColumnWidth(1, 280);
  dash.setColumnWidth(2, 130);
  dash.setColumnWidth(3, 130);
  dash.setColumnWidth(4, 40);
  dash.setColumnWidth(5, 280);
  dash.setColumnWidth(6, 130);
  dash.setColumnWidth(7, 130);
  function sectionHeader(row, col, text, span, bg) {
    var range = dash.getRange(row, col, 1, span);
    range.merge()
         .setValue(text)
         .setBackground(bg || ACCENT)
         .setFontColor(WHITE)
         .setFontWeight("bold")
         .setFontSize(11)
         .setVerticalAlignment("middle");
    dash.setRowHeight(row, 32);
  }
  function colHeader(row, col, values, bg) {
    values.forEach(function(v, i) {
      dash.getRange(row, col + i)
          .setValue(v)
          .setBackground(bg || HEADER_ROW)
          .setFontColor(WHITE)
          .setFontWeight("bold")
          .setFontSize(10);
    });
  }
  function altRow(row, col, span, isEven) {
    dash.getRange(row, col, 1, span)
        .setBackground(isEven ? LIGHT_ROW : "#263148")
        .setFontColor(WHITE)
        .setFontSize(10);
  }
  dash.setRowHeight(1, 50);
  var titleRange = dash.getRange("A1:G1");
  titleRange.merge()
            .setValue("📊  ISI Analytics Dashboard")
            .setBackground(DARK_BG)
            .setFontColor(WHITE)
            .setFontWeight("bold")
            .setFontSize(18)
            .setHorizontalAlignment("center")
            .setVerticalAlignment("middle");
  dash.setRowHeight(2, 24);
  var updatedRange = dash.getRange("A2:G2");
  updatedRange.merge()
              .setFormula('="Last Refreshed: "&TEXT(NOW(),"dd-mmm-yyyy hh:mm:ss")&" IST"')
              .setBackground("#1e293b")
              .setFontColor("#94a3b8")
              .setFontSize(9)
              .setHorizontalAlignment("center");
  var S1_START = 4;
  sectionHeader(S1_START, 1, "🏆  Q1: Top 5 Most Visited Pages (excl. Homepage)", 3, ACCENT);
  colHeader(S1_START + 1, 1, ["Page", "Visits", "% of Total"], HEADER_ROW);
  dash.getRange(S1_START + 2, 1).setFormula(
    '=IFERROR(QUERY(TrafficAnalytics!A:K,' +
    '"SELECT C, COUNT(C) WHERE C != \'/\' AND C != \'\' ' +
    'GROUP BY C ORDER BY COUNT(C) DESC LIMIT 5 ' +
    'LABEL C \'Page\', COUNT(C) \'Visits\'",0),' +
    '{"No data yet",""})'
  );
  for (var r = 1; r <= 5; r++) {
    var dataRow = S1_START + 1 + r;
    dash.getRange(dataRow, 3).setFormula(
      '=IFERROR(B' + dataRow + '/SUM($B$' + (S1_START + 2) + ':$B$' + (S1_START + 6) + '),"")'
    ).setNumberFormat("0.0%");
    altRow(dataRow, 1, 3, r % 2 === 0);
  }
  var chart1 = dash.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(dash.getRange(S1_START + 1, 1, 6, 2))
    .setPosition(S1_START, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Top 5 Pages by Visits")
    .setOption("titleTextStyle", { color: "#ffffff", fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE }, gridlines: { color: "#334155" } })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("legend", { position: "none" })
    .setOption("colors", [ACCENT])
    .setOption("width", 480)
    .setOption("height", 250)
    .build();
  dash.insertChart(chart1);
  var S2_START = 14;
  sectionHeader(S2_START, 1, "⏱  Q2: Top 5 Pages Where Users Spend Most Time", 3, "#7c3aed");
  colHeader(S2_START + 1, 1, ["Page URL", "Avg Time (sec)", "Total Sessions"], "#4c1d95");
  dash.getRange(S2_START + 2, 1).setFormula(
    '=IFERROR(QUERY(EngagementMetrics!A:L,' +
    '"SELECT C, AVG(D), COUNT(D) WHERE C != \'\' AND D > 0 ' +
    'GROUP BY C ORDER BY AVG(D) DESC LIMIT 5 ' +
    'LABEL C \'Page\', AVG(D) \'Avg Seconds\', COUNT(D) \'Sessions\'",0),' +
    '{"No data yet","",""})'
  );
  for (var r = 1; r <= 5; r++) {
    var dataRow = S2_START + 1 + r;
    dash.getRange(dataRow, 2).setNumberFormat("0.0");
    altRow(dataRow, 1, 3, r % 2 === 0);
  }
  var chart2 = dash.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(dash.getRange(S2_START + 1, 1, 6, 2))
    .setPosition(S2_START, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Avg Time Spent per Page (seconds)")
    .setOption("titleTextStyle", { color: "#ffffff", fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE }, gridlines: { color: "#334155" } })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("legend", { position: "none" })
    .setOption("colors", ["#7c3aed"])
    .setOption("width", 480)
    .setOption("height", 250)
    .build();
  dash.insertChart(chart2);
  var S3_START = 24;
  sectionHeader(S3_START, 1, "🔄  Q3: Top 5 IPs That Repeatedly Visit", 3, "#0891b2");
  colHeader(S3_START + 1, 1, ["IP Address", "Location", "Total Visits"], "#164e63");
  dash.getRange(S3_START + 2, 1).setFormula(
    '=IFERROR(QUERY(TrafficAnalytics!A:K,' +
    '"SELECT I, H, COUNT(I) WHERE I != \'\' ' +
    'GROUP BY I, H ORDER BY COUNT(I) DESC LIMIT 5 ' +
    'LABEL I \'IP\', H \'Location\', COUNT(I) \'Visits\'",0),' +
    '{"No data yet","",""})'
  );
  for (var r = 1; r <= 5; r++) {
    var dataRow = S3_START + 1 + r;
    altRow(dataRow, 1, 3, r % 2 === 0);
  }
  var chart3 = dash.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(dash.getRange(S3_START + 1, 1, 6, 1))
    .addRange(dash.getRange(S3_START + 1, 3, 6, 1))
    .setPosition(S3_START, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Repeat Visitor Frequency (Top 5 IPs)")
    .setOption("titleTextStyle", { color: "#ffffff", fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE, fontSize: 8 }, gridlines: { color: "#334155" } })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("legend", { position: "none" })
    .setOption("colors", [ACCENT2])
    .setOption("width", 480)
    .setOption("height", 250)
    .build();
  dash.insertChart(chart3);
  var S4_START = 34;
  sectionHeader(S4_START, 1, "📄  Q4: All Pages — Visitor Metrics", 3, "#059669");
  colHeader(S4_START + 1, 1, ["Page", "Total Visits", "Unique IPs"], "#064e3b");
  dash.getRange(S4_START + 2, 1).setFormula(
    '=IFERROR(QUERY(TrafficAnalytics!A:K,' +
    '"SELECT C, COUNT(C), COUNT(I) WHERE C != \'\' ' +
    'GROUP BY C ORDER BY COUNT(C) DESC ' +
    'LABEL C \'Page\', COUNT(C) \'Visits\', COUNT(I) \'Unique IPs\'",0),' +
    '{"No data yet","",""})'
  );
  var chart4 = dash.newChart()
    .setChartType(Charts.ChartType.COMBO)
    .addRange(dash.getRange(S4_START + 1, 1, 16, 2))
    .setPosition(S4_START, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Page Traffic Distribution (Pareto 80/20)")
    .setOption("titleTextStyle", { color: "#ffffff", fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE, fontSize: 8 }, slantedText: true })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("legend", { position: "none" })
    .setOption("colors", ["#059669"])
    .setOption("seriesType", "bars")
    .setOption("width", 480)
    .setOption("height", 280)
    .build();
  dash.insertChart(chart4);
  var S5_START = 55;
  sectionHeader(S5_START, 1, "⏰  Q5: Time Spent Analysis — All Pages", 3, "#d97706");
  colHeader(S5_START + 1, 1, ["Page URL", "Avg Time (sec)", "Max Time (sec)"], "#78350f");
  dash.getRange(S5_START + 2, 1).setFormula(
    '=IFERROR(QUERY(EngagementMetrics!A:L,' +
    '"SELECT C, AVG(D), MAX(D) WHERE C != \'\' AND D > 0 ' +
    'GROUP BY C ORDER BY AVG(D) DESC ' +
    'LABEL C \'Page\', AVG(D) \'Avg Sec\', MAX(D) \'Max Sec\'",0),' +
    '{"No data yet","",""})'
  );
  dash.getRange(S5_START + 2, 2, 20, 2).setNumberFormat("0.0");
  var chart5 = dash.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(dash.getRange(S5_START + 1, 1, 11, 3))
    .setPosition(S5_START, 5, 0, 0)
    .setNumHeaders(1)
    .setOption("title", "Avg vs Max Time Spent per Page")
    .setOption("titleTextStyle", { color: "#ffffff", fontSize: 12, bold: true })
    .setOption("backgroundColor", { fill: DARK_BG })
    .setOption("hAxis", { textStyle: { color: WHITE }, gridlines: { color: "#334155" } })
    .setOption("vAxis", { textStyle: { color: WHITE } })
    .setOption("legend", { textStyle: { color: WHITE }, position: "bottom" })
    .setOption("colors", ["#d97706", "#fbbf24"])
    .setOption("width", 480)
    .setOption("height", 280)
    .build();
  dash.insertChart(chart5);
  dash.setRowHeight(3, 36);
  dash.getRange("A3").setFormula('=IFERROR("Total Sessions: "&COUNTA(TrafficAnalytics!A:A)-1,"")')
      .setBackground("#1e293b").setFontColor(WHITE).setFontSize(10).setFontWeight("bold");
  dash.getRange("B3").setFormula('=IFERROR("Unique IPs: "&COUNTUNIQUE(TrafficAnalytics!I:I)-1,"")')
      .setBackground("#1e293b").setFontColor(WHITE).setFontSize(10).setFontWeight("bold");
  dash.getRange("C3").setFormula('=IFERROR("Hot Leads: "&COUNTIF(UserBehaviorLibrary!AR:AR,"YES"),"")')
      .setBackground("#1e293b").setFontColor("#f59e0b").setFontSize(10).setFontWeight("bold");
  dash.setFrozenRows(3);
  dash.getRange("A1:G80").setBackground(DARK_BG).setFontColor(WHITE);
  SpreadsheetApp.flush();
  console.log("✅ Analytics Dashboard built successfully!");
}

