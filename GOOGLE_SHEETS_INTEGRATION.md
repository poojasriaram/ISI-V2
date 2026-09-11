# ISI Security - Ultra-Pro Google Sheets Analytics, Leads & Automation (V7)

This project implements enterprise tracking with **60+ Master Metrics**, A/B testing, and industrial behavioral profiling.

---

## 🌟 What's New in V7:

1. **🎯 Dedicated Ad Campaign Google Sheet**:
   - `AdCampaign` leads are now automatically routed to a **separate, dedicated Google Sheet** ("ISI Security - Ad Campaign Leads") to keep paid campaign acquisition completely isolated from general analytics.
   - Includes helper functions `setupAdCampaignSheet()` and `removeAdCampaignTabFromMainSheet()`.

2. **📄 Google Drive Resume Archiving & Monthly Digest**:
   - Candidate resumes are automatically saved directly into a dedicated Google Drive folder (`ISI_Career_Resumes`).
   - The direct Drive link and File ID are saved in the `CareerApplications` sheet.
   - **Monthly Scheduled Forwarder (`forwardMonthlyCareerApplications`)**: Every month, automatically compiles all applicant profiles and attaches their resumes in an executive email sent to `EMAIL_CONFIG.careerEmails`.

3. **💎 Enhanced Executive Email Design & Explicit Category Names**:
   - All internal notification emails now feature explicit, branded lead categories:
     - `🎯 [Ad Campaign Lead Generation]`
     - `📄 [Career Application Lead Generation]`
     - `💼 [Sales Lead Generation]`
     - `🔔 [Contact Form Lead Generation]`
     - `🤝 [Partner Application Lead Generation]`
     - `🎓 [Academy Training Lead Generation]`
     - `💬 [Chatbot Lead Generation]`
     - `🏫 [Campus Safety Lead Generation]`
     - `📋 [Tender RFQ Lead Generation]`
   - Includes quick-action buttons: `📞 Call Lead`, `✉️ Reply via Email`, `📄 View Resume in Drive`, `📊 Open Sheet`.
   - Polished weekly and daily performance summary digests with metric growth badges (`+14.2%`) and embedded charts.

---

## 🛠 Required Setup Instructions

### 1. Copy Apps Script Code
Open your Google Sheet > **Extensions > Apps Script**, replace all contents with the code in `AppsScript_Webhook.js`, and click **Save**.

### 2. Configure Constants in Apps Script
At the top of the script:
```javascript
const CONFIG = {
  MAIN_SPREADSHEET_ID: "1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60",
  AD_CAMPAIGN_SPREADSHEET_ID: "", // Leave blank to auto-create "ISI Security - Ad Campaign Leads"
  CAREER_RESUMES_FOLDER_NAME: "ISI_Career_Resumes"
};
```

### 3. Initialize Dedicated Ad Campaign Sheet & Triggers
In the Apps Script Editor toolbar, select and run the following setup functions:
1. `setupAdCampaignSheet()` — Creates/links the dedicated Ad Campaign Sheet and logs its URL.
2. `removeAdCampaignTabFromMainSheet()` — Cleans up any legacy `AdCampaign` tab from the main sheet.
3. `setupAllTriggers()` — Automatically registers all 4 automation triggers:
   - **Daily Analytics Dashboard Report**: Runs every day at ~8:30 AM IST.
   - **Weekly Performance Dashboard Report**: Runs every Friday at ~8:30 AM IST.
   - **Monthly Executive Intelligence Dashboard Report**: Runs on the 1st of every month at ~8:30 AM IST.
   - **Monthly Career Applications & Resumes Digest**: Runs on the 1st of every month at ~9:00 AM IST.
4. `buildAnalyticsDashboard()` — Generates the live in-sheet Visual Analytics Dashboard with KPI scorecards, charts, and Pareto distributions.
5. `buildReportsDashboard()` — Generates the in-sheet Reports & Cron Trigger history sheet.


### 4. Deploy Webhook
Click **Deploy > Manage Deployments > Edit (or New Deployment)**:
- **Type**: Web App
- **Execute as**: Me
- **Who has access**: Anyone
- Click **Deploy** and copy the Web App URL into your `.env` as `VITE_GOOGLE_SHEETS_WEB_APP_URL`.

### 5. (Optional) Standalone Script for Dedicated Ad Campaign Sheet
If you want an independent Google Apps Script attached directly to your new **"ISI Security - Ad Campaign Leads"** Google Sheet:
1. Open the dedicated Ad Campaign Sheet > **Extensions > Apps Script**.
2. Paste the contents of `AdCampaign_AppsScript.js`.
3. Run `buildAdCampaignDashboard()` to generate an instant in-sheet KPI analytics dashboard.


