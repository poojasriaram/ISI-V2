# ISI Security - Ultra-Pro Google Sheets Analytics, Leads & Automation (V7.1)

This project implements enterprise tracking with **60+ Master Metrics**, A/B testing, intelligent tab resolution, and industrial behavioral profiling.

---

## 🌟 What's New in V7.1:

1. **✨ Redesigned Enterprise Contact Form**:
   - **Full Name**: Required.
   - **Corporate / Work Email**: Required, accepting personal and corporate domains (`Gmail`, `Outlook`, `Hotmail`, `Yahoo`, and custom business domains).
   - **Company Name**: Required.
   - **Contact Number**: Required (+91 format with validation).
   - **Designation**: Optional.
   - **Services Type**: Optional with comprehensive enterprise security dropdown.
   - **Your Message**: Optional.
   - **Removed Fields**: `Location` and `How did you find us` removed from the user form interface.

2. **🔄 Dynamic Sheet Tab Name & Alias Resolution**:
   - The Apps Script now automatically detects and writes to renamed tabs in your Google Sheet (e.g. `Contacts`, `Contact Us`, `Contact Leads`, `Leads`, `Website Leads`, `Career`, `Careers`, `Ad Campaign`, `Chatbot`, `Academy`, etc.).
   - No more missing sheet errors if you customize tab names in your Google Spreadsheet!

3. **🎯 Dedicated Ad Campaign Google Sheet (`Google_Ad_Leads`)**:
   - `Google_Ad_Leads` (or `AdCampaign`) leads are automatically routed to a **separate, dedicated Google Sheet** ("ISI Security - Ad Campaign Leads") under the tab **`Google_Ad_Leads`** to keep paid campaign acquisition completely isolated from general analytics.

4. **📄 Google Drive Resume Archiving & Monthly Digest**:
   - Candidate resumes are automatically saved directly into a dedicated Google Drive folder (`ISI_Career_Resumes`).
   - The direct Drive link and File ID are saved in the `CareerApplications` sheet.
   - **Monthly Scheduled Forwarder (`forwardMonthlyCareerApplications`)**: Every month, automatically compiles all applicant profiles and attaches their resumes in an executive email.

5. **💎 Enhanced Executive Email Design**:
   - Branded lead category alerts:
     - `🎯 [Google Ad Lead Generation]`
     - `🔔 [Contact Form Lead Generation]`
     - `📄 [Career Application] (Career Application - [Applicant Name] - [Open Position])`
     - `💼 [Sales Lead Generation]`
     - `🤝 [Partner Application Lead Generation]`
     - `🎓 [Academy Training Lead Generation]`
     - `💬 [Chatbot Lead Generation]`
     - `🏫 [Campus Safety Lead Generation]`
     - `📋 [Tender RFQ Lead Generation]`
   - Quick-action buttons: `📞 Call Lead`, `✉️ Reply via Email`, `📄 View Resume in Drive`, `📊 Open Sheet`.

---

## 🛠 Required Setup Instructions

### 1. Copy Apps Script Code
Open your Google Sheet > **Extensions > Apps Script**, replace all contents with the code in `AppsScript_Webhook.js`, and click **Save**.

### 2. Configure Constants in Apps Script
At the top of the script:
```javascript
const CONFIG = {
  MAIN_SPREADSHEET_ID: "1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60",
  AD_CAMPAIGN_SPREADSHEET_ID: "15OaMm3wf1esko6IZfpO74lnAZior8RGMwO2FiV_iz74", // Or leave blank to auto-create
  CAREER_RESUMES_FOLDER_NAME: "ISI_Career_Resumes"
};
```

### 3. Deploy Webhook
Click **Deploy > Manage Deployments > Edit (or New Deployment)**:
- **Type**: Web App
- **Execute as**: Me
- **Who has access**: Anyone
- Click **Deploy** and copy the Web App URL into your `.env` as `VITE_GOOGLE_SHEETS_WEB_APP_URL`.

---

## 🧠 5 Advanced Website Intelligence Modules in Google Sheets

The ISI Security analytics system integrates five dedicated intelligence modules into both **Sheet 1 (Data Ingestion)** and **Sheet 2 (Analytics Dashboard)**:

### 1. Sheet 1: Raw Ingestion Tabs (`AppsScript_Webhook.js`)
- **`Session_Intelligence`**: Real-time upsert tracking per user session (`Session ID`, `Visitor ID`, `Started UTC`, `Duration (sec)`, `Page Views`, `Entry Page`, `Exit Page`, `Traffic Source`, `Traffic Channel`, `Device`, `Browser`, `OS`, `City`, `Is Bounce`, `Is Converted`, `Lead Number`, `Lead Type`).
- **`IP_Network_Intelligence`**: Public IP telemetry and autonomous network profiling (`IP Address`, `ASN`, `Network Organization`, `ISP`, `Country`, `City`, `Is Hosting / Datacenter`, `Is VPN / Proxy`, `Is Bot`, `Request Count`).
- **`Security_Telemetry`**: Automated threat and security incident logging (`Incident ID`, `IP Address`, `Severity`, `Event Type`, `Details`, `Blocked`, `Timestamp UTC`).

### 2. Sheet 2: Automated Dashboard Tabs (`Sheet2_Dashboard_Script.js`)
Open **Sheet 2** > **Extensions > Apps Script**, paste `Sheet2_Dashboard_Script.js`, and click **Save**.
The **ISI ANALYTICS** custom menu offers:
- **`Refresh All 21 Dashboards (Full Suite)`**: Pulls Sheet 1 data, purges localhost/dev records, and generates all 21 dashboards with HUD cards and charts.
- **`Build 5 Intelligence Modules Only`**: Instantly rebuilds the 5 dedicated intelligence dashboards:
  1. **`Session_Intelligence`**: Total sessions, unique visitors, duration brackets, bounce rate, top entry pages, and converted sessions telemetry.
  2. **`Traffic_Intelligence`**: Channel acquisition breakdown, UTM campaign attribution, and high-intent security service landing pages radar.
  3. **`Geo_Intelligence`**: Domestic vs international footprint, Key Indian operating hubs (Telangana/Hyderabad focus, AP, Karnataka, Maharashtra, Delhi NCR), and top metro inquiries.
  4. **`Timezone_Intelligence`**: Primary operating timezone (Asia/Kolkata - IST), peak traffic hour analysis, 24-hour traffic curve, and day-of-week velocity.
  5. **`IP_Network_Intelligence`**: Top autonomous systems (ASNs), telecom providers (Jio, Airtel, ACT), cloud/datacenter detection, and high-volume IP monitoring.

---

## 📈 Executive Analytics Briefs & Automated Reporting Engine

The system features an automated, recurring analytics engine delivering executive intelligence to corporate leadership (`EMAIL_CONFIG.reportEmails`):

1. **Daily Report (`dailyReport()`)**:
   - **Schedule**: Every day at **8:30 AM IST**.
   - **Content**: Yesterday's metrics vs. the day before (Sessions, Unique Visitors, Corporate Leads, RFQ Enquiries, Top Landing Pages, and duration).
   - **Log**: Automatically logs daily KPI rows to the `DailyReports` sheet tab.

2. **Weekly Report (`weeklyReport()`)**:
   - **Schedule**: Every Friday at **8:30 AM IST**.
   - **Content**: 7-day rolling window comparison (Current Week vs. Previous Week), service demand breakdown, and conversion efficiency.
   - **Log**: Automatically logs weekly KPI rows to the `WeeklyReports` sheet tab.

3. **Monthly Report (`monthlyReport()`)**:
   - **Schedule**: 1st of every month at **8:30 AM IST**.
   - **Content**: Full 30-day executive performance review, B2B industry vertical interest, top lead sources, and month-over-month growth trends.

---

## 💼 Monthly Career Applications & Binary Resume Forwarder (`forwardMonthlyCareerApplications`)

Fixes the issue where only candidate names and details were sent without their attached resume files:

1. **Multi-Tier Google Drive Resume Resolution**:
   - **Tier 1 (File ID / URL Parsing)**: Extracts raw 25-65 character alphanumeric file IDs from `Drive File ID`, `Resume Drive Link`, or full URLs (e.g. `https://drive.google.com/file/d/<FILE_ID>/view`).
   - **Tier 2 (Drive Folder Fallback)**: If the ID column is empty or missing, autonomously queries the `ISI_Career_Resumes` folder for the applicant's resume filename, full name, or email prefix.
   - **Tier 3 (Global Drive Fallback)**: Searches active Drive files for matching filename.

2. **Self-Healing Google Sheet Rows**:
   - When a candidate's resume is located in Google Drive, the script automatically writes back the resolved `Drive File ID` and `Resume Drive Link` into the spreadsheet row for permanent tracking.

3. **Binary Email Attachments with Safety Controls**:
   - Fetches file blobs directly from Google Drive and attaches them as binary PDF/DOC/DOCX files (named `CandidateName_Resume.pdf`).
   - Implements a **20 MB cumulative attachment safety ceiling** (well within Gmail's 25MB threshold).
   - If cumulative attachments exceed 20MB, the candidate's entry highlights an amber banner with direct access via Google Drive.

4. **Executive Email Template**:
   - Top KPI cards: Total Applicants, Resumes Attached (with MB count), and Drive backup status.
   - Candidate register with role, email, phone, submission date, and resume status badge (`📎 Attached (XXX KB)`, `⚠️ Exceeds 20MB Limit`, or `⚠️ File Not In Drive`).
   - Quick-action buttons to open the Career Applications Sheet and the `ISI_Career_Resumes` Drive folder.

5. **Trigger Management & Deduplication (`🎯 ISI WEBHOOK & CRM` Menu)**:
   - **`⏰ Setup Automated Reports & Triggers (Zero Duplicates)`**: Performs a silent wipe of old triggers and sets up strictly 1 instance for Daily (8:30 AM), Weekly (Friday 8:30 AM), Monthly (1st of month 8:30 AM), and Career Digest (1st of month 9:00 AM).
   - **`🧹 Remove Duplicate & Extra Triggers`**: Scans the project triggers, eradicates all duplicate instances of any report, and removes obsolete triggers.
   - **`📋 Audit Active Triggers & Handlers`**: Displays an active tally of every registered trigger and alerts if any duplicate exists.
   - **`❌ Clear All Project Triggers`**: Clears all triggers from the project.
   - **`📊 Send Daily Report Now`**
   - **`📈 Send Weekly Report Now`**
   - **`📑 Send Monthly Report Now`**
   - **`💼 Send Monthly Career Resume Digest Now`**




