/**
 * =========================================================================================
 * ISI SECURITY - APPS SCRIPT WEBHOOK & AUTOMATION ENGINE (V7 - ULTRA PRO)
 * =========================================================================================
 * Features:
 * 1. Dedicated Ad Campaign Google Sheet: Isolates and routes AdCampaign leads to a separate sheet.
 * 2. High-End Executive Email UI: Category-specific headers, badges, UTM pills, and quick actions.
 * 3. Drive Resume Archiving: Automatically stores career applicant resumes into Google Drive.
 * 4. Monthly Career Digest: Monthly scheduled forwarder of all candidate applications & resumes.
 * 5. Advanced Analytics & Reporting: Daily & weekly automated digests with KPI cards and charts.
 * =========================================================================================
 */

// =========================================================================================
// 1. GLOBAL CONFIGURATION
// =========================================================================================

const CONFIG = {
  // Main Analytics & Multi-Form Tracking Spreadsheet ID
  MAIN_SPREADSHEET_ID: "1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60",

  // Dedicated Ad Campaign Spreadsheet ID
  AD_CAMPAIGN_SPREADSHEET_ID: "15OaMm3wf1esko6IZfpO74lnAZior8RGMwO2FiV_iz74",

  // Google Drive folder name to store career resumes
  CAREER_RESUMES_FOLDER_NAME: "ISI_Career_Resumes",

  // (Optional) Explicit Google Drive Folder ID if you already created one
  CAREER_RESUMES_FOLDER_ID: ""
};

const EMAIL_CONFIG = {
  host: "mail.deeptrust.tech",
  port: 465,
  user: "pooja@deeptrust.tech",
  pass: "India@2050",
  name: "ISI Security",
  website: "https://www.isisecurity.in",
  replyTo: "info@isisecurity.in",
  
  // Recipients for Lead & Sales inquiries
  salesEmails: [
    "v.varshith@isisecurity.in",
    "v.vishal@isisecurity.in",
    "bv@trustflow.in",
    "poojasri.aram@gmail.com"
  ],
  
  // Recipients for Ad Campaign Lead Generation
  adCampaignEmails: [
    "v.varshith@isisecurity.in",
    "v.vishal@isisecurity.in",
    "bv@trustflow.in",
    "poojasri.aram@gmail.com"
  ],

  // Recipients for Career Applications & Monthly Resumes
  careerEmails: [
    "hrms2026@isisecurity.in",
    "careers@isisecurity.in",
    "poojasri.aram@gmail.com"
  ],

  // Recipients for Daily & Weekly Analytics Reports
  reportEmails: [
    "pooja@deeptrust.tech",
    "v.varshith@isisecurity.in",
    "bv@trustflow.in",
    "poojasri.aram@gmail.com"
  ]
};

// =========================================================================================
// 2. SHEET TAB HEADERS & CONFIGURATION
// =========================================================================================

var masterMetrics = [
  "Session ID","Visitor ID","Organization","IP Address","IP Location","Variant",
  "Viewport","OS","Screen Resolution","Connection Type","Language","Dark Theme",
  "Time Zone","Page Depth","Active Tab","Session Age","Initial Source","Landing Page",
  "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content","Referrer Host","Search Engine","First Visit Date",
  "Returning User","Cursor Velocity","Rage Clicks","Scroll Velocity","Max Scroll Depth",
  "Total Click Count","Average Dwell Time","Total Active Time","Idle Time","Tab Switches",
  "Exit Intent Triggered","Interaction Frequency","Last Active Timestamp","Lead Generated",
  "Form Started","Form Abandoned","Form Last Field","Ebook Downloaded",
  "Consultation Requested","Partner Inquiry Count","Career Inquiry Count",
  "WhatsApp Widget Interactions","CTA Conversion Rate","Interest Banking","Interest Retail",
  "Interest Logistics","Interest School Safety","Interest Campus Safety",
  "Interest Cash Logistics","Interest Command Center","Interest Services",
  "Interest Commercial","Interest Residential","Interest Academy","Map Interactions","Offices Explored",
  "Job Views","Certification Views","Carousel Slide Swipes","Testimonials Viewed",
  "Philosophy Views","Trust Metric Engagement","Benefits Section Views",
  "Footer Navigation Usage","Weighted Rank","Engagement Score","Segment",
  "Hot Lead Flag","Intent Rank","Dwell Time","Interactions","Tree","Timestamp"
];

var TAB_CONFIGS = {
  // Canonical Database Format (with underscores)
  "Contact_Form": [
    "Name","Email","Company","Phone","Designation","Service Interest",
    "Message","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Partner_Applications": [
    "Name","Email","Company","Designation","Phone","Location","Partnership Type",
    "Message","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Career_Applications": [
    "Name","Email","Phone","Job Title","Resume File Name","Resume Drive Link","Drive File ID","Cover Letter",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Ebook_Downloads": [
    "School Name","Role","Email","Phone","Source","Follow Up Status",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Variant","Timestamp"
  ],
  "Consultation_Requests": [
    "Name","School Name","Board","Number of Students","Primary Concern","Email",
    "Phone","City","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Chatbot_Leads": [
    "Name","Email","Phone","Existing Customer","Category","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Organization","Variant","Timestamp"
  ],
  "Sales_Inquiries": [
    "Full Name","Phone Number","Work Email","Company Name",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Variant","Timestamp"
  ],
  "Academy_Inquiries": [
    "Name","Email","Phone","Organization","Program / Course","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Tender_RFQ": [
    "Name","Email","Phone","Organization","Tender Scope","Budget","Deadline","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "Google_Ad_Leads": [
    "Full Name","Phone Number","Work Email","Company Name",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Organization","Variant","Timestamp"
  ],
  "Newsletter_Subscriptions": [
    "Email","IP Location","IP Address","Variant","Timestamp"
  ],
  "Exit_Intent_Feedback": [
    "Feedback","URL","IP Location","IP Address","Variant","Timestamp"
  ],
  "Traffic_Analytics": [
    "Session ID","Visitor ID","Page Path","Page Title","Referrer","Traffic Source",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Organization","IP Location","IP Address","Variant","Timestamp"
  ],
  "Engagement_Metrics": [
    "Session ID","Visitor ID","Page URL","Duration (sec)","Scroll Depth (%)","Click Count",
    "Engagement Score","CTA Clicked","Returning User","Is Hot Lead","Variant","Timestamp"
  ],
  "Behavior_Metrics": [
    "Session ID","Visitor ID","Page URL","Category","Metric Name","Value",
    "Element Info","Metadata","IP Location","IP Address","Variant","Timestamp"
  ],
  "User_Behavior_Library": masterMetrics,

  // Legacy Tab Compatibility Definitions
  "ContactForm": [
    "Name","Email","Company","Phone","Designation","Service Interest",
    "Message","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "PartnerApps": [
    "Name","Email","Company","Designation","Phone","Location","Partnership Type",
    "Message","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "CareerApplications": [
    "Name","Email","Phone","Job Title","Resume File Name","Resume Drive Link","Drive File ID","Cover Letter",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "EbookDownloads": [
    "School Name","Role","Email","Phone","Source","Follow Up Status",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Variant","Timestamp"
  ],
  "ConsultationReqs": [
    "Name","School Name","Board","Number of Students","Primary Concern","Email",
    "Phone","City","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "ChatbotLeads": [
    "Name","Email","Phone","Existing Customer","Category","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Organization","Variant","Timestamp"
  ],
  "SalesInquiries": [
    "Full Name","Phone Number","Work Email","Company Name",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Variant","Timestamp"
  ],
  "AcademyInquiries": [
    "Name","Email","Phone","Organization","Program / Course","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "TenderRFQ": [
    "Name","Email","Phone","Organization","Tender Scope","Budget","Deadline","Message",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "Status","IP Location","IP Address","Variant","Timestamp"
  ],
  "AdCampaign": [
    "Full Name","Phone Number","Work Email","Company Name",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
    "IP Location","IP Address","Organization","Variant","Timestamp"
  ],
  "TrafficAnalytics": [
    "Session ID","Visitor ID","Page Path","Page Title","Referrer","Traffic Source",
    "UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content",
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
  "UserBehaviorLibrary": masterMetrics
};

// Common variations and aliases for Google Sheet tab names (mapped to canonical database names)
var SHEET_NAME_ALIASES = {
  // Contact Form
  "contactform": "Contact_Form",
  "contact_form": "Contact_Form",
  "contactforms": "Contact_Form",
  "contact": "Contact_Form",
  "contacts": "Contact_Form",
  "contactus": "Contact_Form",
  "contact_us": "Contact_Form",
  "contactleads": "Contact_Form",
  "contact_leads": "Contact_Form",
  "websiteleads": "Contact_Form",
  "website_leads": "Contact_Form",
  "leads": "Contact_Form",

  // Partner
  "partnerapps": "Partner_Applications",
  "partner_apps": "Partner_Applications",
  "partner_applications": "Partner_Applications",
  "partnerapplications": "Partner_Applications",
  "partners": "Partner_Applications",
  "partner": "Partner_Applications",
  "partnerleads": "Partner_Applications",

  // Career
  "careerapplications": "Career_Applications",
  "career_applications": "Career_Applications",
  "careers": "Career_Applications",
  "career": "Career_Applications",
  "careerapps": "Career_Applications",
  "career_apps": "Career_Applications",
  "jobs": "Career_Applications",
  "jobapplications": "Career_Applications",
  "applicants": "Career_Applications",

  // Ebook
  "ebookdownloads": "Ebook_Downloads",
  "ebook_downloads": "Ebook_Downloads",
  "ebook": "Ebook_Downloads",
  "ebooks": "Ebook_Downloads",

  // Consultation
  "consultationreqs": "Consultation_Requests",
  "consultation_requests": "Consultation_Requests",
  "consultations": "Consultation_Requests",
  "consultation": "Consultation_Requests",

  // Google Ad Leads / Ad Campaign
  "google_ad_leads": "Google_Ad_Leads",
  "googleadleads": "Google_Ad_Leads",
  "google_ads": "Google_Ad_Leads",
  "googleads": "Google_Ad_Leads",
  "adcampaign": "Google_Ad_Leads",
  "ad_campaign": "Google_Ad_Leads",
  "adcampaignleads": "Google_Ad_Leads",
  "campaigns": "Google_Ad_Leads",
  "campaignleads": "Google_Ad_Leads",
  "adleads": "Google_Ad_Leads",

  // Chatbot
  "chatbotleads": "Chatbot_Leads",
  "chatbot_leads": "Chatbot_Leads",
  "chatbot": "Chatbot_Leads",
  "botleads": "Chatbot_Leads",
  "chatleads": "Chatbot_Leads",

  // Sales
  "salesinquiries": "Sales_Inquiries",
  "sales_inquiries": "Sales_Inquiries",
  "sales": "Sales_Inquiries",
  "salesleads": "Sales_Inquiries",
  "salesinquiry": "Sales_Inquiries",

  // Academy
  "academyinquiries": "Academy_Inquiries",
  "academy_inquiries": "Academy_Inquiries",
  "academy": "Academy_Inquiries",
  "academyleads": "Academy_Inquiries",

  // Tender / RFQ
  "tenderrfq": "Tender_RFQ",
  "tender_rfq": "Tender_RFQ",
  "tenders": "Tender_RFQ",
  "rfq": "Tender_RFQ",
  "tender": "Tender_RFQ",
  "rfqs": "Tender_RFQ",

  // Newsletter
  "newslettersubs": "Newsletter_Subscriptions",
  "newsletter_subscriptions": "Newsletter_Subscriptions",
  "newsletter": "Newsletter_Subscriptions",
  "subscriptions": "Newsletter_Subscriptions",

  // Exit Intent
  "exitintentfeedback": "Exit_Intent_Feedback",
  "exit_intent_feedback": "Exit_Intent_Feedback",
  "exitfeedback": "Exit_Intent_Feedback",

  // Analytics
  "trafficanalytics": "Traffic_Analytics",
  "traffic_analytics": "Traffic_Analytics",
  "traffic": "Traffic_Analytics",
  "userbehaviorlibrary": "User_Behavior_Library",
  "user_behavior_library": "User_Behavior_Library",
  "behaviorlibrary": "User_Behavior_Library",
  "engagementmetrics": "Engagement_Metrics",
  "engagement_metrics": "Engagement_Metrics",
  "behaviormetrics": "Behavior_Metrics",
  "behavior_metrics": "Behavior_Metrics"
};

/**
 * Intelligently finds a tab in the spreadsheet matching exact name, alias, or case-insensitive name.
 */
function findSheetFlexible(spreadsheet, requestedName) {
  if (!spreadsheet || !requestedName) return null;

  // 1. Direct exact match
  var sheet = spreadsheet.getSheetByName(requestedName);
  if (sheet) return sheet;

  // 2. Normalized alias match
  var norm = requestedName.toLowerCase().replace(/[\s\-_]/g, '');
  var canonical = SHEET_NAME_ALIASES[norm] || requestedName;
  sheet = spreadsheet.getSheetByName(canonical);
  if (sheet) return sheet;

  // 3. Scan all tabs in spreadsheet and compare normalized names
  var allSheets = spreadsheet.getSheets();
  for (var i = 0; i < allSheets.length; i++) {
    var curName = allSheets[i].getName();
    var curNorm = curName.toLowerCase().replace(/[\s\-_]/g, '');
    if (curNorm === norm || curNorm === (canonical || '').toLowerCase().replace(/[\s\-_]/g, '')) {
      return allSheets[i];
    }
  }

  return null;
}

// =========================================================================================
// 3. MAIN WEBHOOK ENDPOINT (doPost)
// =========================================================================================

function doPost(e) {
  // Manual mode testing fallback
  if (!e || !e.postData || !e.postData.contents) {
    console.warn("Running in Manual Mode: Initializing Mock Payload for Testing...");
    e = {
      postData: {
        contents: JSON.stringify({
          sheetName: "TrafficAnalytics",
          sessionId: "MOCK_SESSION_" + Date.now(),
          visitorId: "MOCK_VISITOR_" + Date.now(),
          pagePath: "/manual-test",
          ipAddress: "1.1.1.1",
          location: "Hyderabad, India",
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
      return ContentService.createTextOutput("Error: Invalid JSON payload.").setMimeType(ContentService.MimeType.TEXT);
    }
    
    var sheetName = data.sheetName;
    if (!sheetName) {
      return ContentService.createTextOutput("Error: Missing sheetName parameter").setMimeType(ContentService.MimeType.TEXT);
    }

    // =====================================================================================
    // ROUTE A: GOOGLE AD / CAMPAIGN LEADS -> CAPTURE IN DEDICATED SEPARATE SPREADSHEET
    // =====================================================================================
    var isAdLead = sheetName === "Google_Ad_Leads" || 
                   sheetName === "AdCampaign" || 
                   sheetName.toLowerCase().replace(/[\s\-_]/g, '') === "googleadleads" ||
                   sheetName.toLowerCase().replace(/[\s\-_]/g, '') === "adcampaign" ||
                   sheetName.toLowerCase().replace(/[\s\-_]/g, '') === "googleads";

    if (isAdLead) {
      var adSpreadsheet = getAdCampaignSpreadsheet();
      var adSheet = findSheetFlexible(adSpreadsheet, "Google_Ad_Leads") || 
                    findSheetFlexible(adSpreadsheet, "AdCampaignLeads") || 
                    findSheetFlexible(adSpreadsheet, "AdCampaign") || 
                    adSpreadsheet.getSheetByName("Google_Ad_Leads") || 
                    adSpreadsheet.getSheetByName("AdCampaignLeads") || 
                    adSpreadsheet.getActiveSheet();
      
      // Setup headers if sheet is brand new
      if (adSheet.getLastRow() === 0) {
        var adHeaders = TAB_CONFIGS["Google_Ad_Leads"] || TAB_CONFIGS["AdCampaign"];
        adSheet.getRange(1, 1, 1, adHeaders.length)
               .setValues([adHeaders])
               .setFontWeight("bold")
               .setBackground("#003380")
               .setFontColor("#ffffff");
        adSheet.setFrozenRows(1);
        adSheet.setName("Google_Ad_Leads");
      }
      
      var adHeadersList = adSheet.getRange(1, 1, 1, Math.max(adSheet.getLastColumn(), 1)).getValues()[0];
      var adRow = adHeadersList.map(function(header) {
        return resolveField(header, data);
      });
      
      adSheet.appendRow(adRow);
      
      // Send dedicated Google Ad / Campaign Lead Generation alert email
      sendLeadEmails(data, "Google_Ad_Leads", adSpreadsheet.getUrl());
      
      return ContentService.createTextOutput("Saved to Dedicated Ad Campaign Sheet: " + adSpreadsheet.getName()).setMimeType(ContentService.MimeType.TEXT);
    }

    // =====================================================================================
    // ROUTE B: ALL OTHER FORMS & ANALYTICS -> MAIN SPREADSHEET
    // =====================================================================================
    var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
    var sheet = findSheetFlexible(ss, sheetName);
    
    // Auto-create tab or initialize headers if sheet is empty
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var defaultHeaders = TAB_CONFIGS[sheetName] || Object.keys(data).filter(function(k) { return k !== 'sheetName'; });
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#1a1a2e")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    } else if (sheet.getLastRow() === 0) {
      var defaultHeaders = TAB_CONFIGS[sheetName] || Object.keys(data).filter(function(k) { return k !== 'sheetName'; });
      sheet.getRange(1, 1, 1, defaultHeaders.length)
           .setValues([defaultHeaders])
           .setFontWeight("bold")
           .setBackground("#1a1a2e")
           .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    // Career Applications: Save resume to Google Drive if attached
    var resumeDriveUrl = "";
    var resumeFileId = "";
    if (sheetName === "CareerApplications" && data.resumeBlob) {
      try {
        var driveFile = saveResumeToDrive(data);
        if (driveFile) {
          resumeDriveUrl = driveFile.getUrl();
          resumeFileId = driveFile.getId();
          data.resumeDriveLink = resumeDriveUrl;
          data.driveFileId = resumeFileId;
        }
      } catch (driveErr) {
        console.error("Error saving resume to Drive:", driveErr.toString());
      }
    }
    
    var lastCol = Math.max(sheet.getLastColumn(), 1);
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    
    var newRow = headers.map(function(header) {
      if (header === "Resume Blob" || header === "resumeBlob") return "Archived to Drive / Email";
      if (header === "Resume Drive Link" || header === "resumeDriveLink") return resumeDriveUrl;
      if (header === "Drive File ID" || header === "driveFileId") return resumeFileId;
      return resolveField(header, data);
    });
    
    // Logic for Upsert/Dedup (Library & Analytics)
    var shouldUpsert = (sheetName === "UserBehaviorLibrary" || sheetName === "EngagementMetrics");
    var shouldDedup  = (sheetName === "TrafficAnalytics");
    var lastRow = sheet.getLastRow();
    var rowSaved = false;
    
    if ((shouldUpsert || shouldDedup) && lastRow > 1) {
      var sessionCol = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
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
    
    // Handle Email Notifications (Leads, Careers, Partners, Academy, Sales, etc.)
    var LEAD_FORMS = [
      "Contact_Form", "Partner_Applications", "Career_Applications", 
      "Ebook_Downloads", "Consultation_Requests", "Sales_Inquiries", 
      "Academy_Inquiries", "Chatbot_Leads", "Tender_RFQ", "Google_Ad_Leads",
      "ContactForm", "PartnerApps", "CareerApplications", 
      "EbookDownloads", "ConsultationReqs", "SalesInquiries", 
      "AcademyInquiries", "ChatbotLeads", "TenderRFQ"
    ];
    
    if (LEAD_FORMS.indexOf(sheetName) !== -1) {
      sendLeadEmails(data, sheetName, ss.getUrl());
    }
    
    return ContentService.createTextOutput(rowSaved ? "Updated/Deduped" : "Saved").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    console.error("doPost critical error:", err.toString());
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

// =========================================================================================
// 4. DEDICATED AD CAMPAIGN SHEET MANAGER
// =========================================================================================

/**
 * Returns or provisions the dedicated Google Spreadsheet for Ad Campaign leads.
 */
function getAdCampaignSpreadsheet() {
  var props = PropertiesService.getScriptProperties();
  var savedId = CONFIG.AD_CAMPAIGN_SPREADSHEET_ID || props.getProperty("AD_CAMPAIGN_SPREADSHEET_ID");
  
  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (e) {
      console.warn("Could not open existing Ad Campaign Sheet by ID, re-creating/searching...", e.toString());
    }
  }
  
  // Search Drive for existing "ISI Security - Ad Campaign Leads"
  var files = DriveApp.getFilesByName("ISI Security - Ad Campaign Leads");
  if (files.hasNext()) {
    var file = files.next();
    props.setProperty("AD_CAMPAIGN_SPREADSHEET_ID", file.getId());
    return SpreadsheetApp.openById(file.getId());
  }
  
  // Create brand new dedicated Google Sheet
  var newSheet = SpreadsheetApp.create("ISI Security - Ad Campaign Leads");
  var targetTab = newSheet.getActiveSheet();
  targetTab.setName("Google_Ad_Leads");
  var headers = TAB_CONFIGS["Google_Ad_Leads"] || TAB_CONFIGS["AdCampaign"];
  targetTab.getRange(1, 1, 1, headers.length)
           .setValues([headers])
           .setFontWeight("bold")
           .setBackground("#003380")
           .setFontColor("#ffffff");
  targetTab.setFrozenRows(1);
  
  props.setProperty("AD_CAMPAIGN_SPREADSHEET_ID", newSheet.getId());
  console.log("✅ Created Dedicated Ad Campaign Sheet. ID: " + newSheet.getId() + " | URL: " + newSheet.getUrl());
  return newSheet;
}

/**
 * Run this function from the Apps Script Editor to set up or view the dedicated Ad Campaign Sheet.
 */
function setupAdCampaignSheet() {
  var ss = getAdCampaignSpreadsheet();
  console.log("=================================================");
  console.log("🎯 DEDICATED AD CAMPAIGN GOOGLE SHEET READY:");
  console.log("Name: " + ss.getName());
  console.log("ID:   " + ss.getId());
  console.log("URL:  " + ss.getUrl());
  console.log("=================================================");
  return ss.getUrl();
}

/**
 * Removes the old 'AdCampaign' tab from the main analytics sheet to maintain complete separation.
 */
function removeAdCampaignTabFromMainSheet() {
  try {
    var mainSS = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
    var oldTab = mainSS.getSheetByName("AdCampaign");
    if (oldTab) {
      mainSS.deleteSheet(oldTab);
      console.log("✅ Removed old 'AdCampaign' tab from Main Spreadsheet.");
    } else {
      console.log("ℹ️ No 'AdCampaign' tab found in Main Spreadsheet.");
    }
  } catch (err) {
    console.error("Error removing AdCampaign tab:", err.toString());
  }
}

// =========================================================================================
// 5. GOOGLE DRIVE RESUME STORAGE
// =========================================================================================

/**
 * Saves candidate's resume base64 blob directly to a dedicated Google Drive folder.
 */
function saveResumeToDrive(data) {
  if (!data.resumeBlob) return null;
  
  var folder;
  if (CONFIG.CAREER_RESUMES_FOLDER_ID) {
    try {
      folder = DriveApp.getFolderById(CONFIG.CAREER_RESUMES_FOLDER_ID);
    } catch (e) {
      console.warn("Could not open folder by ID:", e.toString());
    }
  }
  
  if (!folder) {
    var folders = DriveApp.getFoldersByName(CONFIG.CAREER_RESUMES_FOLDER_NAME);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(CONFIG.CAREER_RESUMES_FOLDER_NAME);
      console.log("📁 Created Google Drive Folder: " + CONFIG.CAREER_RESUMES_FOLDER_NAME);
    }
  }
  
  var candidateName = (data.name || data.Name || data.fullName || "Candidate").replace(/[^a-zA-Z0-9_\s]/g, "");
  var jobTitle = (data.jobTitle || data["Job Title"] || "Role").replace(/[^a-zA-Z0-9_\s]/g, "");
  var origFileName = data.resumeFileName || "Resume.pdf";
  var extMatch = origFileName.match(/\.[0-9a-z]+$/i);
  var ext = extMatch ? extMatch[0] : ".pdf";
  
  var now = new Date();
  var dateStr = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd");
  var newFileName = candidateName + " - " + jobTitle + " - " + dateStr + ext;
  
  var decoded = Utilities.base64Decode(data.resumeBlob);
  var mime = data.resumeMimeType || "application/pdf";
  var blob = Utilities.newBlob(decoded, mime, newFileName);
  
  var driveFile = folder.createFile(blob);
  driveFile.setDescription("Resume submitted by " + candidateName + " for " + jobTitle + " on " + dateStr);
  return driveFile;
}

// =========================================================================================
// 6. ENHANCED EMAIL DISPATCHER WITH EXPLICIT CATEGORY LABELS
// =========================================================================================

/**
 * Dispatches beautifully styled notification emails for all lead types.
 */
function sendLeadEmails(data, sheetName, spreadsheetUrl) {
  var userEmail = data.email || data.Email || data["Work Email"] || data.workEmail || data["work_email"] || "";
  var userName  = data.name || data.Name || data["Full Name"] || data.fullName || data["full_name"] || "Valued Customer";

  var leadMeta = getLeadCategoryMeta(sheetName, data);
  
  var subjectUser = leadMeta.userSubject;
  var htmlUser = buildUserConfirmationHtml(userName, leadMeta.categoryName, leadMeta.userMessage);
  
  var subjectInternal = leadMeta.internalSubject;
  var htmlInternal = buildInternalLeadHtml(leadMeta, data, spreadsheetUrl);
  var attachments = [];

  // Resume attachment for Career Applications
  if (sheetName === "CareerApplications" && data.resumeBlob) {
    try {
      var decoded = Utilities.base64Decode(data.resumeBlob);
      var mime = data.resumeMimeType || "application/pdf";
      var fileName = data.resumeFileName || (userName + "_Resume.pdf");
      var attachment = Utilities.newBlob(decoded, mime, fileName);
      attachments.push(attachment);
    } catch (attachErr) {
      console.error("Failed to decode resume attachment:", attachErr.toString());
    }
  }

  // 1. Send Auto-Confirmation to the User
  if (userEmail) {
    try {
      MailApp.sendEmail({
        to: userEmail,
        subject: subjectUser,
        htmlBody: htmlUser,
        name: EMAIL_CONFIG.name,
        replyTo: EMAIL_CONFIG.replyTo
      });
    } catch(e) { 
      console.error("Failed to send user confirmation email:", e.toString()); 
    }
  }

  // 2. Send Alert to the Internal Team
  var targetRecipients = leadMeta.recipients;
  try {
    targetRecipients.forEach(function(email) {
      var mailOptions = {
        to: email,
        subject: subjectInternal,
        htmlBody: htmlInternal,
        name: "ISI Lead Engine • " + leadMeta.categoryName
      };
      if (attachments.length > 0) mailOptions.attachments = attachments;
      MailApp.sendEmail(mailOptions);
    });
    console.log("✅ Sent internal lead notification: " + leadMeta.categoryName + " -> " + targetRecipients.join(", "));
  } catch(e) { 
    console.error("Failed to send internal team email:", e.toString()); 
  }
}

/**
 * Returns customized category labels, badges, recipient lists, and subject lines.
 */
function getLeadCategoryMeta(sheetName, data) {
  var name = data.name || data.Name || data["Full Name"] || data.fullName || "";
  var company = data.company || data.Company || data.companyName || data["Company Name"] || "";
  var role = data.jobTitle || data["Job Title"] || "";
  var phone = data.phone || data.Phone || data["Phone Number"] || "";

  switch (sheetName) {
    case "Google_Ad_Leads":
    case "AdCampaign":
      return {
        categoryName: "Google Ad & Campaign Lead Generation",
        badgeText: "🎯 GOOGLE AD CAMPAIGN LEAD",
        badgeBg: "#f59e0b",
        badgeColor: "#ffffff",
        leadName: name || "New Ad Lead",
        leadCompany: company || "Direct Business Lead",
        leadPhone: phone,
        internalSubject: "🎯 [Google Ad Lead Generation] New Prospect: " + (name ? name + (company ? " (" + company + ")" : "") : "New Ad Inquiry"),
        userSubject: "✅ Consultation Request Received – ISI Security",
        userMessage: "Thank you for expressing interest in ISI Security through our campaign. Our Senior Security Consultant has received your details and will connect with you shortly.",
        recipients: EMAIL_CONFIG.adCampaignEmails
      };

    case "CareerApplications":
      return {
        categoryName: "Career Application & Resume Submission",
        badgeText: "📄 CAREER APPLICATION & RESUME",
        badgeBg: "#6366f1",
        badgeColor: "#ffffff",
        leadName: name || "Candidate Applicant",
        leadCompany: "Applied for: " + (role || "Security Specialist"),
        leadPhone: phone,
        internalSubject: "📄 [Career Application Lead Generation] " + (name || "Applicant") + " – " + (role || "General Application"),
        userSubject: "📄 Career Application Received – ISI Security Careers",
        userMessage: "We have received your career application. Our Talent Acquisition Team is reviewing your credentials and will reach out if your profile matches our requirements.",
        recipients: EMAIL_CONFIG.careerEmails
      };

    case "Career_Applications":
    case "CareerApplications":
      return {
        categoryName: "Talent Acquisition & Careers",
        badgeText: "📄 CAREER APPLICATION",
        badgeBg: "#059669",
        badgeColor: "#ffffff",
        leadName: name || "Applicant",
        leadCompany: data["Job Title"] || data.jobTitle || "Career Candidate",
        leadPhone: phone,
        internalSubject: "📄 [New Job Application] " + (name || "Candidate") + " - " + (data["Job Title"] || data.jobTitle || "Application"),
        userSubject: "📄 Career Application Received – ISI Security Careers",
        userMessage: "We have received your career application. Our Talent Acquisition Team is reviewing your credentials and will reach out if your profile matches our requirements.",
        recipients: EMAIL_CONFIG.careerEmails
      };

    case "Sales_Inquiries":
    case "SalesInquiries":
      return {
        categoryName: "Sales & Enterprise Lead Generation",
        badgeText: "💼 ENTERPRISE SALES INQUIRY",
        badgeBg: "#059669",
        badgeColor: "#ffffff",
        leadName: name || "Enterprise Lead",
        leadCompany: company || "Corporate Client",
        leadPhone: phone,
        internalSubject: "💼 [Sales Lead Generation] " + (company ? company + " (" + name + ")" : name || "New Sales Lead"),
        userSubject: "✅ Enterprise Consultation Request Received – ISI Security",
        userMessage: "We have received your enterprise security requirements. Our Solutions Engineering Team is preparing a tailored assessment and will contact you promptly.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Contact_Form":
    case "ContactForm":
      return {
        categoryName: "Direct Website Lead Generation",
        badgeText: "🔔 DIRECT WEBSITE INQUIRY",
        badgeBg: "#0284c7",
        badgeColor: "#ffffff",
        leadName: name || "Website Visitor",
        leadCompany: company || "Direct Inquiry",
        leadPhone: phone,
        internalSubject: "🔔 [Contact Form Lead Generation] " + (name ? name + (company ? " - " + company : "") : "New Web Lead"),
        userSubject: "✅ Inquiry Received – ISI Security",
        userMessage: "Thank you for contacting ISI Security. We have received your inquiry and our operations team will get back to you shortly.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Partner_Applications":
    case "PartnerApps":
      return {
        categoryName: "Partner Network Lead Generation",
        badgeText: "🤝 CHANNEL PARTNER APPLICATION",
        badgeBg: "#7c3aed",
        badgeColor: "#ffffff",
        leadName: name || "Partner Applicant",
        leadCompany: company || "Partner Agency",
        leadPhone: phone,
        internalSubject: "🤝 [Partner Application Lead Generation] " + (company || name || "New Partner"),
        userSubject: "🤝 Partner Network Application Received – ISI Security",
        userMessage: "Thank you for applying to the ISI Channel Partner Network. Our Strategic Alliances team will evaluate your application and initiate onboarding discussions.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Academy_Inquiries":
    case "AcademyInquiries":
      return {
        categoryName: "ISI Academy Lead Generation",
        badgeText: "🎓 ACADEMY TRAINING INQUIRY",
        badgeBg: "#d97706",
        badgeColor: "#ffffff",
        leadName: name || "Academy Prospect",
        leadCompany: data.organization || data["Program / Course"] || "Training Inquiry",
        leadPhone: phone,
        internalSubject: "🎓 [Academy Training Lead Generation] " + (name || "New Student") + " – " + (data.program || data["Program / Course"] || "Course Inquiry"),
        userSubject: "🎓 Academy Training Inquiry Received – ISI Academy",
        userMessage: "Thank you for your interest in ISI Security Academy (www.isisecurity.in/academy). Our Academic Director will contact you with course schedules, curriculum, and certification details.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Chatbot_Leads":
    case "ChatbotLeads":
      return {
        categoryName: "AI Chatbot Lead Generation",
        badgeText: "💬 AI CHATBOT CONVERSATION LEAD",
        badgeBg: "#0d9488",
        badgeColor: "#ffffff",
        leadName: name || "Chatbot Visitor",
        leadCompany: data.category || "Interactive Chat Lead",
        leadPhone: phone,
        internalSubject: "💬 [Chatbot Lead Generation] " + (name || "Visitor") + " – " + (data.category || "Inquiry"),
        userSubject: "✅ Thank You for Chatting with ISI Security",
        userMessage: "Thank you for interacting with our virtual assistant. A security advisor has received your request and will follow up with you.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Consultation_Requests":
    case "ConsultationReqs":
      return {
        categoryName: "Campus & School Safety Consultation Lead Generation",
        badgeText: "🏫 INSTITUTIONAL SAFETY CONSULTATION",
        badgeBg: "#ea580c",
        badgeColor: "#ffffff",
        leadName: name || "Institution Representative",
        leadCompany: data["School Name"] || data.schoolName || "Educational Institution",
        leadPhone: phone,
        internalSubject: "🏫 [Campus Safety Lead Generation] " + (data["School Name"] || name || "New Consultation"),
        userSubject: "🏫 Campus Safety Consultation Request Received – ISI Security",
        userMessage: "We have received your campus safety consultation request. Our Institutional Risk Specialist will contact you to arrange an on-site security assessment.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Tender_RFQ":
    case "TenderRFQ":
      return {
        categoryName: "Tender & RFQ Lead Generation",
        badgeText: "📋 TENDER / RFQ SUBMISSION",
        badgeBg: "#dc2626",
        badgeColor: "#ffffff",
        leadName: name || "Procurement Officer",
        leadCompany: data.organization || "Tender Authority",
        leadPhone: phone,
        internalSubject: "📋 [Tender RFQ Lead Generation] " + (data.organization || name || "New RFQ"),
        userSubject: "📋 Tender RFQ Submission Received – ISI Security Bid Management",
        userMessage: "Thank you for inviting ISI Security to tender. Our Tenders & Commercial Bids Division has received your RFQ documents.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    case "Google_Ad_Leads":
    case "AdCampaign":
      return {
        categoryName: "Paid Ad Campaign Lead Generation",
        badgeText: "🎯 PAID AD CAMPAIGN LEAD",
        badgeBg: "#f59e0b",
        badgeColor: "#ffffff",
        leadName: name || "Ad Prospect",
        leadCompany: company || "Corporate Client",
        leadPhone: phone,
        internalSubject: "🎯 [Ad Campaign Lead Generation] " + (name || "New Lead") + " - " + (data.utmCampaign || "Paid Campaign"),
        userSubject: "✅ Consultation Request Received – ISI Security",
        userMessage: "Thank you for your interest in ISI Security. We have received your consultation request and our Senior Security Specialist will connect with you shortly.",
        recipients: EMAIL_CONFIG.salesEmails
      };

    default:
      return {
        categoryName: sheetName + " Lead Generation",
        badgeText: "🔔 " + sheetName.toUpperCase() + " LEAD",
        badgeBg: "#475569",
        badgeColor: "#ffffff",
        leadName: name || "Website User",
        leadCompany: company || "General Inquiry",
        leadPhone: phone,
        internalSubject: "🔔 [" + sheetName + " Lead Generation] " + (name || "New Submission"),
        userSubject: "✅ Request Received – ISI Security",
        userMessage: "We have received your submission and our team will follow up with you shortly.",
        recipients: EMAIL_CONFIG.salesEmails
      };
  }
}

// =========================================================================================
// 7. MODERN EXECUTIVE HTML EMAIL TEMPLATES
// =========================================================================================

/**
 * Builds a modern, high-conversion executive HTML email for internal team alerts.
 */
function buildInternalLeadHtml(meta, data, spreadsheetUrl) {
  var phone = data.phone || data.Phone || data["Phone Number"] || data.phoneNumber || "";
  var email = data.email || data.Email || data["Work Email"] || data.workEmail || "";
  var name  = data.name || data.Name || data["Full Name"] || data.fullName || "Prospective Client";
  var location = data.location || data.ipLocation || data["IP Location"] || "India";
  var timestamp = normalizeTimestamp(data.timestamp || data.Timestamp);
  var resumeLink = data.resumeDriveLink || "";

  // Rows for main form data
  var formRows = "";
  var utmRows = "";

  for (var key in data) {
    if (["sheetName", "resumeBlob", "resumeMimeType", "targetEmail", "notifyEmail", "emailTo", "driveFileId"].indexOf(key) !== -1) continue;
    if (!data[key] || typeof data[key] === "object") continue;

    var isUtm = key.toLowerCase().indexOf("utm") !== -1;
    var prettyKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).trim();
    var valStr = String(data[key]).replace(/\n/g, "<br>");

    if (isUtm) {
      utmRows += '<div style="margin-bottom:6px;font-size:12px;color:#334155;">' +
                 '<strong style="color:#0f172a;">' + prettyKey + ':</strong> ' +
                 '<span style="background:#e2e8f0;padding:2px 8px;border-radius:4px;font-family:monospace;">' + valStr + '</span></div>';
    } else {
      formRows += '<tr>' +
                  '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;font-size:13px;width:35%;vertical-align:top;">' + prettyKey + '</td>' +
                  '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;font-weight:500;">' + valStr + '</td>' +
                  '</tr>';
    }
  }

  // Quick Action Buttons
  var actionButtons = '<div style="margin-top:25px;display:flex;gap:10px;flex-wrap:wrap;">';
  if (phone) {
    actionButtons += '<a href="tel:' + phone + '" style="background:#003380;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">📞 Call ' + phone + '</a>';
  }
  if (email) {
    actionButtons += '<a href="mailto:' + email + '?subject=Re: ' + encodeURIComponent(meta.categoryName + ' - ISI Security') + '" style="background:#059669;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">✉️ Reply via Email</a>';
  }
  if (resumeLink) {
    actionButtons += '<a href="' + resumeLink + '" target="_blank" style="background:#6366f1;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-right:8px;margin-bottom:8px;">📄 View Resume in Drive</a>';
  }
  if (spreadsheetUrl) {
    actionButtons += '<a href="' + spreadsheetUrl + '" target="_blank" style="background:#334155;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;margin-bottom:8px;">📊 Open Google Sheet</a>';
  }
  actionButtons += '</div>';

  var utmSection = utmRows ? (
    '<div style="margin-top:20px;padding:15px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;">' +
    '<h4 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">📡 Campaign Attribution & Traffic Context</h4>' +
    utmRows +
    '</div>'
  ) : '';

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">',
    '    ',
    '    <!-- HEADER -->',
    '    <div style="background: linear-gradient(135deg, #002255 0%, #003380 100%); padding: 30px 25px; color: #ffffff;">',
    '      <div style="display: inline-block; background: ' + meta.badgeBg + '; color: ' + meta.badgeColor + '; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.06em; margin-bottom: 12px;">',
    '        ' + meta.badgeText,
    '      </div>',
    '      <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">' + meta.categoryName + '</h2>',
    '      <p style="margin: 6px 0 0 0; color: #93c5fd; font-size: 13px;">Captured live from ISI Security Web Platform</p>',
    '    </div>',
    '',
    '    <!-- QUICK SUMMARY CARD -->',
    '    <div style="padding: 25px 25px 10px 25px;">',
    '      <div style="background: #f8fafc; border-left: 4px solid #003380; border-radius: 8px; padding: 16px 20px; margin-bottom: 20px;">',
    '        <div style="font-size: 18px; font-weight: 700; color: #0f172a;">' + name + '</div>',
    '        <div style="color: #475569; font-size: 14px; margin-top: 4px;">' + (meta.leadCompany ? '🏢 ' + meta.leadCompany + ' • ' : '') + '📍 ' + location + '</div>',
    '        <div style="color: #64748b; font-size: 12px; margin-top: 6px;">⏱ ' + timestamp + '</div>',
    '      </div>',
    '',
    '      <!-- FORM DATA TABLE -->',
    '      <h4 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #003380; font-weight: 700;">Submission Parameters</h4>',
    '      <table style="width: 100%; border-collapse: collapse; border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden;">',
    '        <tbody>' + formRows + '</tbody>',
    '      </table>',
    '',
    '      <!-- UTM CONTEXT -->',
    '      ' + utmSection,
    '',
    '      <!-- ACTION BUTTONS -->',
    '      ' + actionButtons,
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' Industrial Security & Intelligence (India) Pvt Ltd.<br>',
    '      Confidential Notification • Distributed to authorized ISI team members only.',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

/**
 * Builds a branded, professional auto-confirmation email for end-users.
 */
function buildUserConfirmationHtml(name, categoryName, messageStr) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">',
    '    ',
    '    <!-- HEADER -->',
    '    <div style="background: #003380; padding: 35px 25px; text-align: center;">',
    '      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em;">ISI SECURITY</h1>',
    '      <p style="color: #93c5fd; margin: 8px 0 0 0; font-size: 13px; font-weight: 500;">Industrial Security & Intelligence (India) Pvt Ltd</p>',
    '    </div>',
    '',
    '    <!-- CONTENT -->',
    '    <div style="padding: 35px 30px; color: #333333; line-height: 1.6;">',
    '      <h2 style="font-size: 20px; color: #003380; font-weight: 700; margin: 0 0 15px 0;">Hello ' + name + ',</h2>',
    '      <p style="font-size: 15px; color: #334155; margin: 0 0 20px 0;">' + messageStr + '</p>',
    '      ',
    '      <!-- SERVICE HIGHLIGHTS -->',
    '      <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0; margin: 25px 0;">',
    '        <h3 style="color: #0f172a; font-size: 15px; margin: 0 0 12px 0; font-weight: 700;">Why Leading Organizations Rely on ISI:</h3>',
    '        <ul style="padding-left: 20px; margin: 0; font-size: 13px; color: #475569; line-height: 1.7;">',
    '          <li><strong>Manned Guarding:</strong> Rigorously trained, elite physical security personnel.</li>',
    '          <li><strong>Command Center & Surveillance:</strong> 24/7 AI-assisted centralized electronic monitoring.</li>',
    '          <li><strong>Cash Logistics:</strong> Certified vaulting, ATM replenishment, and armored transit.</li>',
    '          <li><strong>Campus & School Safety:</strong> Comprehensive audit, access control, and child safety compliance.</li>',
    '          <li><strong>Facility Manpower Management:</strong> Integrated facility hygiene, engineering, and workforce solutions.</li>',
    '        </ul>',
    '      </div>',
    '',
    '      <div style="text-align: center; margin-top: 30px;">',
    '        <a href="' + EMAIL_CONFIG.website + '" style="display: inline-block; padding: 13px 30px; background: #003380; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(0,51,128,0.2);">Explore Our Solutions</a>',
    '      </div>',
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background: #f1f5f9; padding: 20px 25px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' ISI Security. All rights reserved.<br>',
    '      Need urgent assistance? Reach our 24/7 Command Helpline: <strong>+91 40 2320 0000</strong>',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

// =========================================================================================
// 8. MONTHLY CAREER RESUME DIGEST & FORWARDING ENGINE
// =========================================================================================

/**
 * Gathers all career applications received in the past month, compiles candidate profiles,
 * fetches their resumes from Drive/Storage, and forwards them as attachments to the HR team.
 */
function forwardMonthlyCareerApplications() {
  console.log("🚀 Starting Monthly Career Applications Digest Forwarder...");
  
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var sheet = ss.getSheetByName("CareerApplications");
  if (!sheet) {
    console.error("CareerApplications sheet not found in main spreadsheet.");
    return;
  }
  
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) {
    console.log("No career applications found.");
    return;
  }
  
  var headers = data[0];
  var nameCol       = headers.indexOf("Name");
  var emailCol      = headers.indexOf("Email");
  var phoneCol      = headers.indexOf("Phone");
  var jobTitleCol   = headers.indexOf("Job Title");
  var resumeNameCol = headers.indexOf("Resume File Name");
  var driveLinkCol  = headers.indexOf("Resume Drive Link");
  var driveIdCol    = headers.indexOf("Drive File ID");
  var coverCol      = headers.indexOf("Cover Letter");
  var tsCol         = headers.indexOf("Timestamp");
  
  var now = new Date();
  var thirtyDaysAgo = new Date(now.getTime() - 31 * 24 * 60 * 60 * 1000);
  
  var candidates = [];
  var attachments = [];
  var totalAttachmentSize = 0;
  var MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024; // 20 MB safety limit for Gmail (max 25MB)

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var ts = parseSheetDate(row[tsCol]);
    
    // Filter by applications submitted in last 31 days
    if (ts && ts >= thirtyDaysAgo) {
      var candidate = {
        name: row[nameCol] || "Applicant",
        email: row[emailCol] || "",
        phone: row[phoneCol] || "",
        jobTitle: row[jobTitleCol] || "General Role",
        resumeName: row[resumeNameCol] || "Resume.pdf",
        driveLink: (driveLinkCol !== -1 ? row[driveLinkCol] : "") || "",
        driveId: (driveIdCol !== -1 ? row[driveIdCol] : "") || "",
        coverLetter: row[coverCol] || "",
        date: Utilities.formatDate(ts, "Asia/Kolkata", "dd-MMM-yyyy")
      };
      
      // Attempt to attach resume file from Drive
      if (candidate.driveId) {
        try {
          var file = DriveApp.getFileById(candidate.driveId);
          var blob = file.getBlob();
          var size = blob.getBytes().length;
          if (totalAttachmentSize + size < MAX_TOTAL_ATTACHMENT_BYTES) {
            blob.setName(candidate.name.replace(/[^a-zA-Z0-9_\s]/g, "") + "_" + (candidate.resumeName || "Resume.pdf"));
            attachments.push(blob);
            totalAttachmentSize += size;
          } else {
            console.warn("Attachment size threshold reached. Candidate resume linked via Drive: " + candidate.name);
          }
        } catch (fileErr) {
          console.error("Could not fetch Drive file ID: " + candidate.driveId, fileErr.toString());
        }
      }
      
      candidates.push(candidate);
    }
  }

  if (candidates.length === 0) {
    console.log("ℹ️ No career applications recorded in the past 30 days.");
    return;
  }

  // Build Monthly Career Digest HTML
  var monthLabel = Utilities.formatDate(now, "Asia/Kolkata", "MMMM yyyy");
  var emailHtml = buildMonthlyCareerEmailHtml(monthLabel, candidates, ss.getUrl());
  var subject = "📁 [Career Applications Lead Generation] Monthly Resumes Digest – " + monthLabel + " (" + candidates.length + " Applicants)";
  
  try {
    EMAIL_CONFIG.careerEmails.forEach(function(email) {
      var mailOptions = {
        to: email,
        subject: subject,
        htmlBody: emailHtml,
        name: "ISI HR & Talent Acquisition Engine"
      };
      if (attachments.length > 0) {
        mailOptions.attachments = attachments;
      }
      MailApp.sendEmail(mailOptions);
    });
    console.log("✅ Successfully sent Monthly Career Applications Digest (" + candidates.length + " applicants, " + attachments.length + " attached resumes) to: " + EMAIL_CONFIG.careerEmails.join(", "));
  } catch (err) {
    console.error("Error sending monthly career digest email:", err.toString());
  }
}

/**
 * Builds the HTML template for the Monthly Career Digest.
 */
function buildMonthlyCareerEmailHtml(monthLabel, candidates, sheetUrl) {
  var candidateRows = candidates.map(function(c, idx) {
    var resumeCell = c.driveLink 
      ? '<a href="' + c.driveLink + '" target="_blank" style="color:#003380;font-weight:bold;text-decoration:none;">📄 View Resume</a>'
      : '<span style="color:#94a3b8;">Attached to Email</span>';

    return '<tr style="background:' + (idx % 2 === 0 ? '#ffffff' : '#f8fafc') + ';">' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#0f172a;font-size:13px;">' + c.name + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#003380;font-weight:600;font-size:12px;">' + c.jobTitle + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#334155;font-size:12px;"><a href="mailto:' + c.email + '" style="color:#0284c7;text-decoration:none;">' + c.email + '</a><br>' + c.phone + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:11px;">' + c.date + '</td>' +
           '<td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;font-size:12px;text-align:center;">' + resumeCell + '</td>' +
           '</tr>';
  }).join('');

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head><meta charset="utf-8"></head>',
    '<body style="font-family:\'Segoe UI\',Arial,sans-serif;background-color:#f1f5f9;margin:0;padding:25px 15px;">',
    ' <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">',
    '  <div style="background:linear-gradient(135deg,#1e1b4b 0%,#4338ca 100%);padding:30px 25px;color:#ffffff;">',
    '   <div style="display:inline-block;background:#6366f1;color:#ffffff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:0.06em;margin-bottom:10px;">MONTHLY TALENT PIPELINE</div>',
    '   <h2 style="margin:0;font-size:22px;font-weight:800;">ISI Career Applications & Resumes</h2>',
    '   <p style="margin:6px 0 0 0;color:#c7d2fe;font-size:13px;">Compiled talent applications for ' + monthLabel + ' • Total Applicants: <strong>' + candidates.length + '</strong></p>',
    '  </div>',
    '  <div style="padding:25px;">',
    '   <p style="color:#475569;font-size:14px;margin:0 0 20px 0;">Below is the consolidated list of candidates who applied for open positions at ISI Security over the past month. Candidate resume files are attached directly to this email and archived in Google Drive.</p>',
    '   <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">',
    '    <thead>',
    '     <tr style="background:#0f172a;color:#ffffff;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">',
    '      <th style="padding:10px;text-align:left;">Candidate</th>',
    '      <th style="padding:10px;text-align:left;">Position</th>',
    '      <th style="padding:10px;text-align:left;">Contact</th>',
    '      <th style="padding:10px;text-align:left;">Date</th>',
    '      <th style="padding:10px;text-align:center;">Resume</th>',
    '     </tr>',
    '    </thead>',
    '    <tbody>' + candidateRows + '</tbody>',
    '   </table>',
    '   <div style="text-align:center;margin-top:25px;">',
    '    <a href="' + sheetUrl + '" style="background:#003380;color:#ffffff;text-decoration:none;padding:12px 25px;border-radius:8px;font-weight:700;font-size:13px;display:inline-block;">Open Career Applications Sheet</a>',
    '   </div>',
    '  </div>',
    '  <div style="background:#f8fafc;padding:18px 25px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;text-align:center;">',
    '   &copy; ' + new Date().getFullYear() + ' ISI Security Human Resources & Talent Acquisition.',
    '  </div>',
    ' </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

/**
 * Sets up an automated recurring trigger on the 1st of every month at 9:00 AM IST.
 */
function setupMonthlyCareerTrigger() {
  // Clear any existing monthlyCareerApplications triggers
  var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(t) {
    if (t.getHandlerFunction() === "forwardMonthlyCareerApplications") {
      ScriptApp.deleteTrigger(t);
    }
  });
  
  // Create monthly trigger on 1st day of month at 9:00 AM
  ScriptApp.newTrigger("forwardMonthlyCareerApplications")
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();
    
  console.log("✅ Monthly Career Applications trigger scheduled: Runs on 1st of every month at ~9:00 AM IST.");
}

// =========================================================================================
// 9. ENHANCED EXECUTIVE ANALYTICS DASHBOARDS (DAILY, WEEKLY & MONTHLY)
// =========================================================================================

/**
 * DAILY REPORT: Computes activity for yesterday vs day before and sends an Executive Dashboard Email.
 */
function dailyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var trafficSheet = ss.getSheetByName("TrafficAnalytics");
  if (!trafficSheet) return;

  var yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  var dayBefore = new Date(); dayBefore.setDate(dayBefore.getDate() - 2);
  var targetDateISO = Utilities.formatDate(yesterday, "Asia/Kolkata", "yyyy-MM-dd");
  var prevDateISO   = Utilities.formatDate(dayBefore, "Asia/Kolkata", "yyyy-MM-dd");
  
  var data = trafficSheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol   = headers.indexOf("Timestamp");
  var ipCol   = headers.indexOf("IP Address");
  var pathCol = headers.indexOf("Page Path");
  var srcCol  = headers.indexOf("Traffic Source");

  var stats = {
    current: { sess: 0, ips: new Set(), pages: {}, sources: {} },
    previous: { sess: 0, ips: new Set() }
  };

  for (var i = 1; i < data.length; i++) {
    var rd = parseSheetDate(data[i][tsCol]);
    if (!rd) continue;
    var rdStr = Utilities.formatDate(rd, "Asia/Kolkata", "yyyy-MM-dd");
    if (rdStr === targetDateISO) {
      stats.current.sess++;
      if (data[i][ipCol]) stats.current.ips.add(data[i][ipCol]);
      var p = data[i][pathCol] || "/";
      stats.current.pages[p] = (stats.current.pages[p] || 0) + 1;
      var src = data[i][srcCol] || "Direct";
      stats.current.sources[src] = (stats.current.sources[src] || 0) + 1;
    } else if (rdStr === prevDateISO) {
      stats.previous.sess++;
      if (data[i][ipCol]) stats.previous.ips.add(data[i][ipCol]);
    }
  }

  // Count leads captured yesterday across all forms
  var leadsCount = countLeadsInPeriod(ss, yesterday, yesterday);

  var topPagesList = Object.keys(stats.current.pages)
    .sort(function(a, b) { return stats.current.pages[b] - stats.current.pages[a]; })
    .slice(0, 5)
    .map(function(p) {
      return { path: p, visits: stats.current.pages[p] };
    });

  var sourcesList = Object.keys(stats.current.sources)
    .sort(function(a, b) { return stats.current.sources[b] - stats.current.sources[a]; })
    .slice(0, 5)
    .map(function(s) {
      return { source: s, count: stats.current.sources[s] };
    });

  var sessChange = calculateChange(stats.current.sess, stats.previous.sess);
  var ipChange   = calculateChange(stats.current.ips.size, stats.previous.ips.size);

  var kpiCards = [
    { label: "Total Sessions", value: stats.current.sess, delta: sessChange, icon: "📈" },
    { label: "Unique Visitors", value: stats.current.ips.size, delta: ipChange, icon: "👥" },
    { label: "Leads Captured", value: leadsCount.total, delta: null, icon: "🔥" },
    { label: "Top Visited Page", value: (topPagesList[0] ? topPagesList[0].path : "/"), delta: null, icon: "🏆" }
  ];

  var charts = extractSheetCharts(ss);

  // Record into DailyReports sheet
  var dailySheet = ss.getSheetByName("DailyReports");
  if (!dailySheet) {
    dailySheet = ss.insertSheet("DailyReports");
    dailySheet.appendRow(["Date", "Sessions", "Unique IPs", "Leads", "Top Page"]);
  }
  dailySheet.appendRow([targetDateISO, stats.current.sess, stats.current.ips.size, leadsCount.total, (topPagesList[0] ? topPagesList[0].path : "N/A")]);

  var emailHtml = buildExecutiveDashboardReportHtml({
    reportType: "DAILY ANALYTICS DASHBOARD",
    reportTitle: "Daily Performance & Intelligence Summary",
    reportSubtitle: "Activity for " + targetDateISO + " (compared to previous day)",
    periodLabel: targetDateISO,
    kpis: kpiCards,
    leads: leadsCount,
    topPages: topPagesList,
    sources: sourcesList,
    totalSessions: stats.current.sess,
    dashboardUrl: ss.getUrl(),
    charts: charts
  });

  sendReportEmail("📊 [Daily Analytics Dashboard] " + targetDateISO + " Summary", emailHtml, charts);
}

/**
 * WEEKLY REPORT: Computes performance over the last 7 days vs previous 7 days.
 */
function weeklyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var trafficSheet = ss.getSheetByName("TrafficAnalytics");
  if (!trafficSheet) return;

  var now = new Date();
  var w1Start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  var w2Start = new Date(w1Start.getTime() - 7 * 24 * 60 * 60 * 1000);

  var data = trafficSheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol   = headers.indexOf("Timestamp");
  var ipCol   = headers.indexOf("IP Address");
  var pathCol = headers.indexOf("Page Path");
  var srcCol  = headers.indexOf("Traffic Source");

  var w1 = { sess: 0, ips: new Set(), pages: {}, sources: {} };
  var w2 = { sess: 0, ips: new Set() };

  for (var i = 1; i < data.length; i++) {
    var ts = parseSheetDate(data[i][tsCol]);
    if (!ts) continue;
    if (ts >= w1Start && ts <= now) {
      w1.sess++;
      if (data[i][ipCol]) w1.ips.add(data[i][ipCol]);
      var p = data[i][pathCol] || "/";
      w1.pages[p] = (w1.pages[p] || 0) + 1;
      var src = data[i][srcCol] || "Direct";
      w1.sources[src] = (w1.sources[src] || 0) + 1;
    } else if (ts >= w2Start && ts < w1Start) {
      w2.sess++;
      if (data[i][ipCol]) w2.ips.add(data[i][ipCol]);
    }
  }

  var leadsCount = countLeadsInPeriod(ss, w1Start, now);

  var topPagesList = Object.keys(w1.pages)
    .sort(function(a, b) { return w1.pages[b] - w1.pages[a]; })
    .slice(0, 6)
    .map(function(p) {
      return { path: p, visits: w1.pages[p] };
    });

  var sourcesList = Object.keys(w1.sources)
    .sort(function(a, b) { return w1.sources[b] - w1.sources[a]; })
    .slice(0, 5)
    .map(function(s) {
      return { source: s, count: w1.sources[s] };
    });

  var sessChange = calculateChange(w1.sess, w2.sess);
  var ipChange   = calculateChange(w1.ips.size, w2.ips.size);

  var kpiCards = [
    { label: "Weekly Sessions", value: w1.sess, delta: sessChange, icon: "📈" },
    { label: "Unique Visitors", value: w1.ips.size, delta: ipChange, icon: "👥" },
    { label: "Leads Generated", value: leadsCount.total, delta: null, icon: "🔥" },
    { label: "Top Visited Page", value: (topPagesList[0] ? topPagesList[0].path : "/"), delta: null, icon: "🏆" }
  ];

  var charts = extractSheetCharts(ss);

  var startDate = Utilities.formatDate(w1Start, "Asia/Kolkata", "dd-MMM-yyyy");
  var endDate   = Utilities.formatDate(now, "Asia/Kolkata", "dd-MMM-yyyy");

  var weeklySheet = ss.getSheetByName("WeeklyReports");
  if (!weeklySheet) {
    weeklySheet = ss.insertSheet("WeeklyReports");
    weeklySheet.appendRow(["Week Starting", "Week Ending", "Sessions", "Unique IPs", "Leads"]);
  }
  weeklySheet.appendRow([startDate, endDate, w1.sess, w1.ips.size, leadsCount.total]);

  var emailHtml = buildExecutiveDashboardReportHtml({
    reportType: "WEEKLY PERFORMANCE DASHBOARD",
    reportTitle: "Weekly Digital & Lead Performance Summary",
    reportSubtitle: "Activity for " + startDate + " to " + endDate + " (vs previous 7 days)",
    periodLabel: startDate + " – " + endDate,
    kpis: kpiCards,
    leads: leadsCount,
    topPages: topPagesList,
    sources: sourcesList,
    totalSessions: w1.sess,
    dashboardUrl: ss.getUrl(),
    charts: charts
  });

  sendReportEmail("📅 [Weekly Analytics Dashboard] Summary (" + startDate + " to " + endDate + ")", emailHtml, charts);
}

/**
 * MONTHLY REPORT: Computes overall monthly executive analytics for leadership.
 */
function monthlyReport() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var trafficSheet = ss.getSheetByName("TrafficAnalytics");
  if (!trafficSheet) return;

  var now = new Date();
  var m1Start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  var m2Start = new Date(m1Start.getTime() - 30 * 24 * 60 * 60 * 1000);

  var data = trafficSheet.getDataRange().getValues();
  var headers = data[0];
  var tsCol   = headers.indexOf("Timestamp");
  var ipCol   = headers.indexOf("IP Address");
  var pathCol = headers.indexOf("Page Path");
  var srcCol  = headers.indexOf("Traffic Source");

  var m1 = { sess: 0, ips: new Set(), pages: {}, sources: {} };
  var m2 = { sess: 0, ips: new Set() };

  for (var i = 1; i < data.length; i++) {
    var ts = parseSheetDate(data[i][tsCol]);
    if (!ts) continue;
    if (ts >= m1Start && ts <= now) {
      m1.sess++;
      if (data[i][ipCol]) m1.ips.add(data[i][ipCol]);
      var p = data[i][pathCol] || "/";
      m1.pages[p] = (m1.pages[p] || 0) + 1;
      var src = data[i][srcCol] || "Direct";
      m1.sources[src] = (m1.sources[src] || 0) + 1;
    } else if (ts >= m2Start && ts < m1Start) {
      m2.sess++;
      if (data[i][ipCol]) m2.ips.add(data[i][ipCol]);
    }
  }

  var leadsCount = countLeadsInPeriod(ss, m1Start, now);

  var topPagesList = Object.keys(m1.pages)
    .sort(function(a, b) { return m1.pages[b] - m1.pages[a]; })
    .slice(0, 8)
    .map(function(p) {
      return { path: p, visits: m1.pages[p] };
    });

  var sourcesList = Object.keys(m1.sources)
    .sort(function(a, b) { return m1.sources[b] - m1.sources[a]; })
    .slice(0, 6)
    .map(function(s) {
      return { source: s, count: m1.sources[s] };
    });

  var sessChange = calculateChange(m1.sess, m2.sess);
  var ipChange   = calculateChange(m1.ips.size, m2.ips.size);

  var kpiCards = [
    { label: "Monthly Sessions", value: m1.sess, delta: sessChange, icon: "📈" },
    { label: "Unique Visitors", value: m1.ips.size, delta: ipChange, icon: "👥" },
    { label: "Total Leads", value: leadsCount.total, delta: null, icon: "🔥" },
    { label: "Top Visited Page", value: (topPagesList[0] ? topPagesList[0].path : "/"), delta: null, icon: "🏆" }
  ];

  var charts = extractSheetCharts(ss);
  var monthLabel = Utilities.formatDate(now, "Asia/Kolkata", "MMMM yyyy");

  var emailHtml = buildExecutiveDashboardReportHtml({
    reportType: "MONTHLY EXECUTIVE INTELLIGENCE DASHBOARD",
    reportTitle: "Monthly Executive Analytics & Acquisition Report",
    reportSubtitle: "Consolidated digital performance for " + monthLabel + " (vs previous 30 days)",
    periodLabel: monthLabel,
    kpis: kpiCards,
    leads: leadsCount,
    topPages: topPagesList,
    sources: sourcesList,
    totalSessions: m1.sess,
    dashboardUrl: ss.getUrl(),
    charts: charts
  });

  sendReportEmail("📁 [Monthly Analytics Dashboard] Executive Summary – " + monthLabel, emailHtml, charts);
}

/**
 * Counts leads across all individual form tabs in the spreadsheet for a given date range.
 */
function countLeadsInPeriod(ss, startDate, endDate) {
  var counts = {
    adCampaign: 0,
    sales: 0,
    career: 0,
    partner: 0,
    academy: 0,
    chatbot: 0,
    consultation: 0,
    tender: 0,
    total: 0
  };

  var formSheetMap = {
    "ContactForm": "sales",
    "SalesInquiries": "sales",
    "CareerApplications": "career",
    "PartnerApps": "partner",
    "AcademyInquiries": "academy",
    "ChatbotLeads": "chatbot",
    "ConsultationReqs": "consultation",
    "TenderRFQ": "tender"
  };

  for (var sheetName in formSheetMap) {
    var sh = ss.getSheetByName(sheetName);
    if (!sh) continue;
    var data = sh.getDataRange().getValues();
    if (data.length < 2) continue;
    var tsCol = data[0].indexOf("Timestamp");
    if (tsCol === -1) continue;

    for (var r = 1; r < data.length; r++) {
      var ts = parseSheetDate(data[r][tsCol]);
      if (ts && ts >= startDate && ts <= endDate) {
        var key = formSheetMap[sheetName];
        counts[key] = (counts[key] || 0) + 1;
        counts.total++;
      }
    }
  }

  // Also query Google_Ad_Leads / AdCampaign sheet if present
  try {
    var adSS = getAdCampaignSpreadsheet();
    var adSh = adSS.getSheetByName("Google_Ad_Leads") || adSS.getSheetByName("AdCampaignLeads") || adSS.getSheetByName("AdCampaign") || adSS.getActiveSheet();
    var adData = adSh.getDataRange().getValues();
    if (adData.length >= 2) {
      var adTsCol = adData[0].indexOf("Timestamp");
      if (adTsCol !== -1) {
        for (var i = 1; i < adData.length; i++) {
          var adTs = parseSheetDate(adData[i][adTsCol]);
          if (adTs && adTs >= startDate && adTs <= endDate) {
            counts.adCampaign++;
            counts.total++;
          }
        }
      }
    }
  } catch(e) {}

  return counts;
}

/**
 * Extracts live charts from the Google Sheet tabs.
 */
function extractSheetCharts(ss) {
  var charts = {};
  try {
    var trendSh = ss.getSheetByName("📈 Reports & Trends");
    var dashSh  = ss.getSheetByName("📊 Analytics Dashboard");
    if (trendSh && trendSh.getCharts().length > 0) charts.trend = trendSh.getCharts()[0].getAs('image/png');
    if (trendSh && trendSh.getCharts().length > 2) charts.sources = trendSh.getCharts()[2].getAs('image/png');
    if (dashSh && dashSh.getCharts().length > 0) charts.pages = dashSh.getCharts()[0].getAs('image/png');
  } catch(e) { console.warn("Chart extraction notice:", e.toString()); }
  return charts;
}

/**
 * Builds a state-of-the-art responsive HTML Executive Analytics Dashboard email template.
 */
function buildExecutiveDashboardReportHtml(cfg) {
  // KPI Scorecards Grid
  var kpiCardsHtml = cfg.kpis.map(function(k) {
    var dColor = k.delta && k.delta.startsWith('+') ? '#10b981' : (k.delta && k.delta.startsWith('-') ? '#ef4444' : '#64748b');
    var dBadge = k.delta ? '<span style="font-size:11px;font-weight:700;color:'+dColor+';background:'+dColor+'15;padding:2px 8px;border-radius:12px;margin-left:6px;">'+k.delta+'</span>' : '';
    
    return '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;box-shadow:0 2px 6px rgba(0,0,0,0.02);">' +
           '  <div style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:6px;">' + k.icon + ' ' + k.label + '</div>' +
           '  <div style="font-size:22px;font-weight:800;color:#0f172a;letter-spacing:-0.02em;">' + k.value + dBadge + '</div>' +
           '</div>';
  }).join('');

  // Lead Generation Stream Pipeline Cards
  var leadsHtml = '';
  if (cfg.leads) {
    leadsHtml = [
      '<div style="margin-top:25px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;padding:20px;">',
      '  <h4 style="margin:0 0 14px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#003380;font-weight:800;">🔥 Lead Generation Pipeline Breakdown</h4>',
      '  <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:10px;text-align:center;">',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#f59e0b;">' + (cfg.leads.adCampaign || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">🎯 Ad Campaign</div></div>',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#059669;">' + (cfg.leads.sales || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">💼 Sales / Web</div></div>',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#6366f1;">' + (cfg.leads.career || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">📄 Career Resumes</div></div>',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#d97706;">' + (cfg.leads.academy || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">🎓 Academy</div></div>',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#7c3aed;">' + (cfg.leads.partner || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">🤝 Partners</div></div>',
      '    <div style="background:#ffffff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;"><div style="font-size:18px;font-weight:800;color:#0284c7;">' + (cfg.leads.consultation || 0) + '</div><div style="font-size:11px;color:#64748b;margin-top:2px;">🏫 Campus Safety</div></div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  // Top Performing Pages Ranking Table
  var topPagesRows = (cfg.topPages || []).map(function(p, i) {
    var rankIcon = i === 0 ? "🥇" : (i === 1 ? "🥈" : (i === 2 ? "🥉" : "#" + (i + 1)));
    var pct = cfg.totalSessions > 0 ? ((p.visits / cfg.totalSessions) * 100).toFixed(1) : "0";
    
    return '<tr style="background:' + (i % 2 === 0 ? '#ffffff' : '#f8fafc') + ';">' +
           '  <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:700;color:#0f172a;font-size:13px;width:10%;">' + rankIcon + '</td>' +
           '  <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#003380;font-weight:600;font-size:13px;">' + p.path + '</td>' +
           '  <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:bold;font-size:13px;text-align:right;">' + p.visits + '</td>' +
           '  <td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:12px;text-align:right;width:20%;">' +
           '    <span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-weight:bold;">' + pct + '%</span>' +
           '  </td>' +
           '</tr>';
  }).join('');

  // Traffic Source Distribution
  var sourceRows = (cfg.sources || []).map(function(s) {
    return '<div style="margin-bottom:8px;font-size:13px;color:#334155;display:flex;justify-content:space-between;">' +
           '  <span><strong>' + s.source + '</strong></span>' +
           '  <span style="font-weight:700;color:#003380;">' + s.count + ' visits</span>' +
           '</div>';
  }).join('');

  // Embedded Visual Charts Containers
  var chartSections = "";
  if (cfg.charts) {
    if (cfg.charts.trend) {
      chartSections += '<div style="margin-top:25px;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;text-align:center;">' +
                       '<h4 style="color:#0f172a;font-size:13px;margin:0 0 12px 0;text-align:left;font-weight:700;">📈 Traffic & Session Trend</h4>' +
                       '<img src="cid:trendImg" style="width:100%;max-width:560px;border-radius:8px;" />' +
                       '</div>';
    }
    if (cfg.charts.sources || cfg.charts.pages) {
      chartSections += '<div style="margin-top:20px; display: table; width: 100%; border-spacing: 10px 0;">';
      if (cfg.charts.sources) {
        chartSections += '<div style="display: table-cell; width: 50%; padding:15px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; vertical-align: top; text-align:center;">' +
                         '<h4 style="color:#0f172a;font-size:12px;margin:0 0 10px 0;text-align:left;font-weight:700;">🌐 Traffic Sources</h4>' +
                         '<img src="cid:sourcesImg" style="width:100%;border-radius:6px;" />' +
                         '</div>';
      }
      if (cfg.charts.pages) {
        chartSections += '<div style="display: table-cell; width: 50%; padding:15px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; vertical-align: top; text-align:center;">' +
                         '<h4 style="color:#0f172a;font-size:12px;margin:0 0 10px 0;text-align:left;font-weight:700;">🏆 Top Pages Distribution</h4>' +
                         '<img src="cid:pagesImg" style="width:100%;border-radius:6px;" />' +
                         '</div>';
      }
      chartSections += '</div>';
    }
  }

  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '</head>',
    '<body style="font-family: \'Segoe UI\', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 25px 15px;">',
    '  <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">',
    '    ',
    '    <!-- DASHBOARD HEADER -->',
    '    <div style="background: linear-gradient(135deg, #001a40 0%, #003380 100%); padding: 32px 25px; color: #ffffff;">',
    '      <div style="display: inline-block; background: #38bdf8; color: #001a40; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.06em; margin-bottom: 12px;">',
    '        ' + cfg.reportType,
    '      </div>',
    '      <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">' + cfg.reportTitle + '</h2>',
    '      <p style="margin: 6px 0 0 0; color: #93c5fd; font-size: 13px;">' + cfg.reportSubtitle + '</p>',
    '    </div>',
    '',
    '    <!-- DASHBOARD BODY -->',
    '    <div style="padding: 25px;">',
    '      <!-- KPI SCORECARDS GRID -->',
    '      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">',
    '        ' + kpiCardsHtml,
    '      </div>',
    '',
    '      <!-- LEAD PIPELINE BREAKDOWN -->',
    '      ' + leadsHtml,
    '',
    '      <!-- TOP VISITED PAGES -->',
    '      <div style="margin-top: 25px;">',
    '        <h4 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #003380; font-weight: 800;">🏆 Top Performing Pages</h4>',
    '        <table style="width: 100%; border-collapse: collapse; border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden;">',
    '          <thead>',
    '            <tr style="background: #0f172a; color: #ffffff; font-size: 11px; text-transform: uppercase;">',
    '              <th style="padding: 10px; text-align: left;">Rank</th>',
    '              <th style="padding: 10px; text-align: left;">Page Path</th>',
    '              <th style="padding: 10px; text-align: right;">Visits</th>',
    '              <th style="padding: 10px; text-align: right;">Share</th>',
    '            </tr>',
    '          </thead>',
    '          <tbody>' + topPagesRows + '</tbody>',
    '        </table>',
    '      </div>',
    '',
    '      <!-- TRAFFIC SOURCE BREAKDOWN -->',
    '      <div style="margin-top: 25px; padding: 18px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">',
    '        <h4 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700;">🌐 Traffic Acquisition Distribution</h4>',
    '        ' + sourceRows,
    '      </div>',
    '',
    '      <!-- CHARTS -->',
    '      ' + chartSections,
    '',
    '      <!-- EXECUTIVE ACTION CTA -->',
    '      <div style="text-align: center; margin-top: 30px;">',
    '        <a href="' + cfg.dashboardUrl + '" target="_blank" style="background: #003380; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 10px; font-weight: 700; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(0,51,128,0.25);">📊 Open Live Google Sheets Dashboard</a>',
    '      </div>',
    '    </div>',
    '',
    '    <!-- FOOTER -->',
    '    <div style="background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">',
    '      &copy; ' + new Date().getFullYear() + ' Industrial Security & Intelligence (India) Pvt Ltd.<br>',
    '      Confidential System Report • Generated automatically for authorized ISI Leadership.',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ].join('\n');
}

function sendReportEmail(subject, htmlBody, charts) {
  var recipients = EMAIL_CONFIG.reportEmails;
  var inlineImages = {};
  if (charts) {
    for (var key in charts) {
      inlineImages[key + "Img"] = charts[key];
    }
  }
  var options = {
    htmlBody: htmlBody,
    name: "ISI Analytics Intelligence",
    inlineImages: inlineImages
  };
  try {
    recipients.forEach(function(email) {
      MailApp.sendEmail(email, subject, "", options);
    });
    console.log("✅ Sent analytics report email: " + subject + " -> " + recipients.join(", "));
  } catch(e) { console.error("Report email failed", e.toString()); }
}

// =========================================================================================
// 10. FIELD RESOLVER & UTILITIES
// =========================================================================================

function resolveField(header, data) {
  var explicitMap = {
    "Name":                   data.name         || data.fullName    || data["Full Name"]    || data["FullName"] || "",
    "Full Name":              data.name         || data.fullName    || data["Full Name"]    || data["FullName"] || "",
    "Email":                  data.email        || data.workEmail   || data["Work Email"]   || data["Corporate Email"] || "",
    "Work Email":             data.email        || data.workEmail   || data["Work Email"]   || data["Corporate Email"] || "",
    "Corporate Email":        data.email        || data.workEmail   || data["Work Email"]   || data["Corporate Email"] || "",
    "Phone":                  data.phone        || data.phoneNumber || data["Phone Number"] || data["Contact Number"] || "",
    "Phone Number":           data.phone        || data.phoneNumber || data["Phone Number"] || data["Contact Number"] || "",
    "Contact Number":         data.phone        || data.phoneNumber || data["Phone Number"] || data["Contact Number"] || "",
    "Company":                data.company      || data.companyName || data["Company Name"] || data["organization"] || "",
    "Company Name":           data.company      || data.companyName || data["Company Name"] || data["organization"] || "",
    "Designation":            data.designation  || data.role        || data["Designation"]  || data["Role"] || "",
    "Service Interest":       data.serviceInterest || data.service || data.servicesType    || data["Services Type"] || data["Service Interest"] || "",
    "Services Type":          data.serviceInterest || data.service || data.servicesType    || data["Services Type"] || data["Service Interest"] || "",
    "Message":                data.message      || data.yourMessage || data["Your Message"] || data["Message"] || "",
    "Your Message":           data.message      || data.yourMessage || data["Your Message"] || data["Message"] || "",
    "Location":               data.location     || data.ipLocation  || data["Location"]     || data["IP Location"]  || "",
    "Source":                 data.source       || data.utmSource   || data["Source"]       || "Website Direct",
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
    "Interest Academy":       (data.interestAcademy !== undefined) ? String(data.interestAcademy) : "",
    "UTM Source":             data.utmSource     || data.utm_source  || data["UTM Source"]   || "",
    "UTM Medium":             data.utmMedium     || data.utm_medium  || data["UTM Medium"]   || "",
    "UTM Campaign":           data.utmCampaign   || data.utm_campaign|| data["UTM Campaign"] || "",
    "UTM Term":               data.utmTerm       || data.utm_term    || data["UTM Term"]     || "",
    "UTM Content":            data.utmContent    || data.utm_content || data["UTM Content"]  || "",
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

function cleanupDuplicates() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
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

function cleanupLocalhost() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
  var sheets = ss.getSheets();
  var totalRemoved = 0;

  sheets.forEach(function(sheet) {
    var data = sheet.getDataRange().getValues();
    if (data.length < 2) return;
    var headers = data[0];
    var ipCol = headers.indexOf("IP Address");
    if (ipCol === -1) ipCol = headers.indexOf("ipAddress");
    
    if (ipCol !== -1) {
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

function removeHariKrishnaTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  var count = 0;
  triggers.forEach(function(t) {
    ScriptApp.deleteTrigger(t);
    count++;
  });
  console.log("✅ Cleared " + count + " active triggers.");
}

function setupAllTriggers() {
  removeHariKrishnaTriggers();
  
  // 1. Daily Report at 8:30 AM IST
  ScriptApp.newTrigger("dailyReport")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();

  // 2. Weekly Report on Friday at 8:30 AM IST
  ScriptApp.newTrigger("weeklyReport")
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .atHour(8)
    .create();

  // 3. Monthly Analytics Executive Dashboard on 1st of month at 8:30 AM IST
  ScriptApp.newTrigger("monthlyReport")
    .timeBased()
    .onMonthDay(1)
    .atHour(8)
    .create();

  // 4. Monthly Career Resume Digest on 1st of month at 9:00 AM IST
  setupMonthlyCareerTrigger();

  console.log("✅ All automation triggers (Daily, Weekly, Monthly Analytics, Monthly Career) successfully registered!");
}

// =========================================================================================
// 11. IN-SHEET ANALYTICS & REPORTS DASHBOARD BUILDERS
// =========================================================================================

function buildAnalyticsDashboard() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
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
  dash.getRange("A1:G1").merge()
      .setValue("📊  ISI Security — Executive Analytics Dashboard")
      .setBackground(DARK_BG)
      .setFontColor(WHITE)
      .setFontWeight("bold")
      .setFontSize(18)
      .setHorizontalAlignment("center")
      .setVerticalAlignment("middle");

  dash.setRowHeight(2, 24);
  dash.getRange("A2:G2").merge()
      .setFormula('="Last Refreshed: "&TEXT(NOW(),"dd-mmm-yyyy hh:mm:ss")&" IST"')
      .setBackground("#1e293b")
      .setFontColor("#94a3b8")
      .setFontSize(9)
      .setHorizontalAlignment("center");

  // Summary Metrics Bar
  dash.setRowHeight(3, 36);
  dash.getRange("A3").setFormula('=IFERROR("🚀 Total Sessions: "&COUNTA(TrafficAnalytics!A:A)-1,"")')
      .setBackground("#1e293b").setFontColor(WHITE).setFontSize(10).setFontWeight("bold");
  dash.getRange("B3").setFormula('=IFERROR("👥 Unique IPs: "&COUNTUNIQUE(TrafficAnalytics!I:I)-1,"")')
      .setBackground("#1e293b").setFontColor(ACCENT2).setFontSize(10).setFontWeight("bold");
  dash.getRange("C3").setFormula('=IFERROR("🔥 Hot Leads: "&COUNTIF(UserBehaviorLibrary!AR:AR,"YES"),"")')
      .setBackground("#1e293b").setFontColor("#f59e0b").setFontSize(10).setFontWeight("bold");
  dash.getRange("E3").setFormula('=IFERROR("💼 Sales Leads: "&COUNTA(ContactForm!A:A)+COUNTA(SalesInquiries!A:A)-2,0)')
      .setBackground("#1e293b").setFontColor("#4ade80").setFontSize(10).setFontWeight("bold");
  dash.getRange("F3").setFormula('=IFERROR("📄 Career Apps: "&COUNTA(CareerApplications!A:A)-1,0)')
      .setBackground("#1e293b").setFontColor("#a855f7").setFontSize(10).setFontWeight("bold");
  dash.getRange("G3").setFormula('=IFERROR("🎓 Academy Leads: "&COUNTA(AcademyInquiries!A:A)-1,0)')
      .setBackground("#1e293b").setFontColor("#38bdf8").setFontSize(10).setFontWeight("bold");
  dash.setFrozenRows(3);

  // Q1: Top 5 Visited Pages
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

  // Q2: Avg Time Spent
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

  // Q3: Repeat Visitors
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

  // Q4: Traffic Distribution Across Pages
  var S4_START = 34;
  sectionHeader(S4_START, 1, "📄  Q4: All Pages — Visitor Traffic Metrics", 3, "#059669");
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

  // Q5: Time Spent Analysis Across Pages
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

  dash.getRange("A1:G80").setBackground(DARK_BG).setFontColor(WHITE);
  SpreadsheetApp.flush();
  console.log("✅ Main Analytics Dashboard built successfully!");
}

function buildReportsDashboard() {
  var ss = SpreadsheetApp.openById(CONFIG.MAIN_SPREADSHEET_ID);
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
  sh.getRange("C3").setFormula('=IFERROR("⚡ Total Leads: "&COUNTA(ContactForm!A:A)+COUNTA(CareerApplications!A:A)+COUNTA(SalesInquiries!A:A)-3,0)')
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

  sh.getRange("A1:H80").setBackground(DARK_BG).setFontColor(WHITE);
  SpreadsheetApp.flush();
  console.log("✅ Reports & Trigger Dashboard built successfully!");
}

// =========================================================================================
// 12. ONE-CLICK EMAIL PREVIEW SUITE (SENDS ALL SAMPLES TO POOJA ALONE)
// =========================================================================================

/**
 * Run this function from the Apps Script Editor toolbar to preview EVERY single
 * email template and notification generated by the system sent exclusively to poojasri.aram@gmail.com
 */
function sendAllSamplePreviewEmailsToPooja() {
  var targetEmail = "poojasri.aram@gmail.com";
  var mockSheetUrl = "https://docs.google.com/spreadsheets/d/" + CONFIG.MAIN_SPREADSHEET_ID + "/edit";
  console.log("📨 Generating and dispatching all sample preview emails to: " + targetEmail + "...");

  // Sample Resume Attachment PDF blob
  var samplePdfBlob = Utilities.newBlob("Sample Candidate Resume Content - ISI Security Talent Pipeline", "application/pdf", "Suresh_Reddy_Resume.pdf");

  // 1. Paid Ad Campaign Lead Sample
  var adData = {
    fullName: "Rajesh Sharma",
    phoneNumber: "+91 98765 43210",
    workEmail: "rajesh.sharma@techcorp-india.com",
    companyName: "TechCorp Logistics Park",
    utmSource: "google_ads",
    utmMedium: "cpc",
    utmCampaign: "manned_guarding_hyderabad_q3",
    utmTerm: "security guard agency hyderabad",
    utmContent: "search_banner_enterprise_v2",
    location: "HITEC City, Hyderabad, Telangana",
    ipAddress: "49.37.12.89",
    timestamp: new Date().toISOString()
  };
  var adMeta = getLeadCategoryMeta("AdCampaign", adData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "🎯 [SAMPLE PREVIEW] " + adMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(adMeta, adData, mockSheetUrl),
    name: "ISI Lead Engine • " + adMeta.categoryName
  });

  // 2. Career Application with Resume Sample
  var careerData = {
    name: "Suresh Reddy",
    email: "suresh.reddy.security@gmail.com",
    phone: "+91 94401 23456",
    jobTitle: "Area Security Officer / Commander",
    coverLetter: "12+ years of Indian Armed Forces veteran service with extensive expertise in corporate campus security, electronic surveillance command centers, and tactical access control.",
    resumeFileName: "Suresh_Reddy_Resume.pdf",
    resumeDriveLink: "https://drive.google.com",
    location: "Secunderabad, Telangana",
    ipAddress: "106.51.78.22",
    timestamp: new Date().toISOString()
  };
  var careerMeta = getLeadCategoryMeta("CareerApplications", careerData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📄 [SAMPLE PREVIEW] " + careerMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(careerMeta, careerData, mockSheetUrl),
    name: "ISI Lead Engine • " + careerMeta.categoryName,
    attachments: [samplePdfBlob]
  });

  // 3. Enterprise Sales Consultation Sample
  var salesData = {
    fullName: "Vikram Malhotra",
    companyName: "Reliance Commercial Hub",
    phoneNumber: "+91 98200 11223",
    workEmail: "vikram.m@reliance-commercial.com",
    location: "Bandra Kurla Complex, Mumbai",
    ipAddress: "115.112.45.10",
    timestamp: new Date().toISOString()
  };
  var salesMeta = getLeadCategoryMeta("SalesInquiries", salesData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "💼 [SAMPLE PREVIEW] " + salesMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(salesMeta, salesData, mockSheetUrl),
    name: "ISI Lead Engine • " + salesMeta.categoryName
  });

  // 4. Direct Website Contact Form Sample
  var contactData = {
    name: "Ananya Rao",
    company: "Cyber Towers Facility Management",
    email: "ananya.rao@cybertowers.in",
    phone: "+91 99887 76655",
    message: "We need 24/7 armed escort & manned guarding personnel for 3 commercial towers in Madhapur.",
    location: "Madhapur, Hyderabad",
    ipAddress: "182.74.19.4",
    timestamp: new Date().toISOString()
  };
  var contactMeta = getLeadCategoryMeta("ContactForm", contactData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "🔔 [SAMPLE PREVIEW] " + contactMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(contactMeta, contactData, mockSheetUrl),
    name: "ISI Lead Engine • " + contactMeta.categoryName
  });

  // 5. Channel Partner Application Sample
  var partnerData = {
    name: "Manoj Kulkarni",
    company: "Apex Facilities & Manpower Network",
    email: "manoj@apexfacilities.com",
    phone: "+91 97654 32109",
    "Partnership Type": "Authorized Regional Channel Partner",
    location: "Bengaluru, Karnataka",
    ipAddress: "103.21.124.8",
    timestamp: new Date().toISOString()
  };
  var partnerMeta = getLeadCategoryMeta("PartnerApps", partnerData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "🤝 [SAMPLE PREVIEW] " + partnerMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(partnerMeta, partnerData, mockSheetUrl),
    name: "ISI Lead Engine • " + partnerMeta.categoryName
  });

  // 6. ISI Academy Training Lead Sample
  var academyData = {
    name: "Karthik Varma",
    email: "karthik.varma98@gmail.com",
    phone: "+91 91234 56789",
    organization: "GMR Aerospace Campus",
    "Program / Course": "Executive Protection & Advanced CCTV Surveillance Certification",
    message: "Interested in batch training for 15 security supervisors starting next month.",
    location: "Shamshabad, Hyderabad",
    ipAddress: "49.205.10.12",
    timestamp: new Date().toISOString()
  };
  var academyMeta = getLeadCategoryMeta("AcademyInquiries", academyData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "🎓 [SAMPLE PREVIEW] " + academyMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(academyMeta, academyData, mockSheetUrl),
    name: "ISI Lead Engine • " + academyMeta.categoryName
  });

  // 7. AI Chatbot Lead Sample
  var chatData = {
    name: "Sneha Patel",
    email: "sneha.patel@gujarat-pharma.com",
    phone: "+91 98980 12345",
    category: "Cash Logistics & Armored Transit",
    message: "Inquired about secure daily cash vaulting for 8 hospital collection centers.",
    location: "Ahmedabad, Gujarat",
    ipAddress: "117.200.44.8",
    timestamp: new Date().toISOString()
  };
  var chatMeta = getLeadCategoryMeta("ChatbotLeads", chatData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "💬 [SAMPLE PREVIEW] " + chatMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(chatMeta, chatData, mockSheetUrl),
    name: "ISI Lead Engine • " + chatMeta.categoryName
  });

  // 8. Campus & School Safety Consultation Sample
  var schoolData = {
    name: "Dr. Meenakshi Sundaram",
    "School Name": "Delhi Public School & Junior College",
    email: "principal@dps-hyderabad.edu.in",
    phone: "+91 94411 99887",
    primaryConcern: "Student Entry/Exit Access Control & Child Safety POCSO Compliance Audit",
    location: "Gachibowli, Hyderabad",
    ipAddress: "14.139.12.5",
    timestamp: new Date().toISOString()
  };
  var schoolMeta = getLeadCategoryMeta("ConsultationReqs", schoolData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "🏫 [SAMPLE PREVIEW] " + schoolMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(schoolMeta, schoolData, mockSheetUrl),
    name: "ISI Lead Engine • " + schoolMeta.categoryName
  });

  // 9. Tender / RFQ Submission Sample
  var tenderData = {
    name: "Rameshwar Rao",
    organization: "Telangana State Metro Rail Logistics",
    email: "procurement@ts-metro.gov.in",
    phone: "+91 98480 55443",
    "Tender Scope": "Station Passenger Screening & Electronic Perimeter Surveillance",
    budget: "₹1.8 Crore / Annual",
    location: "Hyderabad",
    ipAddress: "125.16.89.4",
    timestamp: new Date().toISOString()
  };
  var tenderMeta = getLeadCategoryMeta("TenderRFQ", tenderData);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📋 [SAMPLE PREVIEW] " + tenderMeta.internalSubject,
    htmlBody: buildInternalLeadHtml(tenderMeta, tenderData, mockSheetUrl),
    name: "ISI Lead Engine • " + tenderMeta.categoryName
  });

  // 10. User Auto-Confirmation Sample
  MailApp.sendEmail({
    to: targetEmail,
    subject: "✅ [SAMPLE PREVIEW] Consultation Request Received – ISI Security",
    htmlBody: buildUserConfirmationHtml("Pooja Sri", "Consultation Request", "Thank you for reaching out to ISI Security. Our Senior Security Advisor has received your details and will get in touch shortly."),
    name: EMAIL_CONFIG.name,
    replyTo: EMAIL_CONFIG.replyTo
  });

  // 11. Daily Analytics Dashboard Sample
  var sampleDailyHtml = buildExecutiveDashboardReportHtml({
    reportType: "DAILY ANALYTICS DASHBOARD",
    reportTitle: "Daily Performance & Intelligence Summary",
    reportSubtitle: "Activity for Today (compared to previous day)",
    periodLabel: "Today",
    kpis: [
      { label: "Total Sessions", value: "3,480", delta: "+18.4%", icon: "📈" },
      { label: "Unique Visitors", value: "2,190", delta: "+12.1%", icon: "👥" },
      { label: "Leads Captured", value: "14", delta: "+40.0%", icon: "🔥" },
      { label: "Top Visited Page", value: "/solutions/manned-guarding", delta: null, icon: "🏆" }
    ],
    leads: { adCampaign: 4, sales: 5, career: 3, academy: 1, partner: 1, consultation: 0, total: 14 },
    topPages: [
      { path: "/solutions/manned-guarding", visits: 1120 },
      { path: "/academy", visits: 740 },
      { path: "/careers", visits: 590 },
      { path: "/lp/facility-management", visits: 410 },
      { path: "/about", visits: 280 }
    ],
    sources: [
      { source: "Google Organic", count: 1540 },
      { source: "Paid Google Ads (CPC)", count: 980 },
      { source: "Direct Traffic", count: 520 },
      { source: "LinkedIn Ads", count: 310 },
      { source: "Referral / Other", count: 130 }
    ],
    totalSessions: 3480,
    dashboardUrl: mockSheetUrl,
    charts: null
  });
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📊 [SAMPLE PREVIEW] [Daily Analytics Dashboard] Today's Summary",
    htmlBody: sampleDailyHtml,
    name: "ISI Analytics Intelligence"
  });

  // 12. Weekly Performance Dashboard Sample
  var sampleWeeklyHtml = buildExecutiveDashboardReportHtml({
    reportType: "WEEKLY PERFORMANCE DASHBOARD",
    reportTitle: "Weekly Digital & Acquisition Performance Summary",
    reportSubtitle: "Activity for Last 7 Days (vs previous week)",
    periodLabel: "Past 7 Days",
    kpis: [
      { label: "Weekly Sessions", value: "24,850", delta: "+14.2%", icon: "📈" },
      { label: "Unique Visitors", value: "16,420", delta: "+9.8%", icon: "👥" },
      { label: "Leads Generated", value: "92", delta: "+22.5%", icon: "🔥" },
      { label: "Top Visited Page", value: "/solutions/manned-guarding", delta: null, icon: "🏆" }
    ],
    leads: { adCampaign: 32, sales: 28, career: 18, academy: 8, partner: 4, consultation: 2, total: 92 },
    topPages: [
      { path: "/solutions/manned-guarding", visits: 8120 },
      { path: "/academy", visits: 5490 },
      { path: "/careers", visits: 4180 },
      { path: "/lp/facility-management", visits: 3210 },
      { path: "/about", visits: 2150 }
    ],
    sources: [
      { source: "Google Organic", count: 10840 },
      { source: "Paid Google Ads (CPC)", count: 7210 },
      { source: "Direct Traffic", count: 3950 },
      { source: "LinkedIn Ads", count: 2150 },
      { source: "Referral / Partner", count: 700 }
    ],
    totalSessions: 24850,
    dashboardUrl: mockSheetUrl,
    charts: null
  });
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📅 [SAMPLE PREVIEW] [Weekly Analytics Dashboard] Performance Summary",
    htmlBody: sampleWeeklyHtml,
    name: "ISI Analytics Intelligence"
  });

  // 13. Monthly Executive Intelligence Dashboard Sample
  var sampleMonthlyHtml = buildExecutiveDashboardReportHtml({
    reportType: "MONTHLY EXECUTIVE INTELLIGENCE DASHBOARD",
    reportTitle: "Monthly Executive Analytics & Acquisition Report",
    reportSubtitle: "Consolidated digital performance for September 2026 (vs August 2026)",
    periodLabel: "September 2026",
    kpis: [
      { label: "Monthly Sessions", value: "98,450", delta: "+21.4%", icon: "📈" },
      { label: "Unique Visitors", value: "64,200", delta: "+15.6%", icon: "👥" },
      { label: "Total Leads", value: "384", delta: "+28.0%", icon: "🔥" },
      { label: "Top Visited Page", value: "/solutions/manned-guarding", delta: null, icon: "🏆" }
    ],
    leads: { adCampaign: 142, sales: 118, career: 68, academy: 32, partner: 16, consultation: 8, total: 384 },
    topPages: [
      { path: "/solutions/manned-guarding", visits: 31200 },
      { path: "/academy", visits: 21400 },
      { path: "/careers", visits: 18300 },
      { path: "/lp/facility-management", visits: 14200 },
      { path: "/about", visits: 8900 }
    ],
    sources: [
      { source: "Google Organic", count: 42500 },
      { source: "Paid Google Ads (CPC)", count: 29800 },
      { source: "Direct Traffic", count: 15400 },
      { source: "LinkedIn & Social", count: 7600 },
      { source: "Referral / PR", count: 3150 }
    ],
    totalSessions: 98450,
    dashboardUrl: mockSheetUrl,
    charts: null
  });
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📁 [SAMPLE PREVIEW] [Monthly Analytics Dashboard] Executive Summary – September 2026",
    htmlBody: sampleMonthlyHtml,
    name: "ISI Analytics Intelligence"
  });

  // 14. Monthly Career Applications & Resumes Digest Sample
  var sampleCandidates = [
    { name: "Suresh Reddy", jobTitle: "Area Security Officer", email: "suresh.reddy@gmail.com", phone: "+91 94401 23456", date: "08-Sep-2026", driveLink: "https://drive.google.com" },
    { name: "Amitabh Sen", jobTitle: "Command Center CCTV Analyst", email: "amitabh.sen@yahoo.com", phone: "+91 98300 44556", date: "05-Sep-2026", driveLink: "https://drive.google.com" },
    { name: "Pooja Hegde", jobTitle: "Security Supervisor", email: "pooja.hegde@outlook.com", phone: "+91 97400 11223", date: "02-Sep-2026", driveLink: "https://drive.google.com" }
  ];
  var monthlyCareerHtml = buildMonthlyCareerEmailHtml("September 2026", sampleCandidates, mockSheetUrl);
  MailApp.sendEmail({
    to: targetEmail,
    subject: "📁 [SAMPLE PREVIEW] [Career Applications Lead Generation] Monthly Resumes Digest – September 2026 (3 Applicants)",
    htmlBody: monthlyCareerHtml,
    name: "ISI HR & Talent Acquisition Engine",
    attachments: [samplePdfBlob]
  });

  console.log("🎉 All 14 sample preview emails successfully delivered to: " + targetEmail);
}

