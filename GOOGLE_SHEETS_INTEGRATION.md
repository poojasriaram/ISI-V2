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

3. **🎯 Dedicated Ad Campaign Google Sheet**:
   - `AdCampaign` leads are automatically routed to a **separate, dedicated Google Sheet** ("ISI Security - Ad Campaign Leads") to keep paid campaign acquisition completely isolated from general analytics.

4. **📄 Google Drive Resume Archiving & Monthly Digest**:
   - Candidate resumes are automatically saved directly into a dedicated Google Drive folder (`ISI_Career_Resumes`).
   - The direct Drive link and File ID are saved in the `CareerApplications` sheet.
   - **Monthly Scheduled Forwarder (`forwardMonthlyCareerApplications`)**: Every month, automatically compiles all applicant profiles and attaches their resumes in an executive email.

5. **💎 Enhanced Executive Email Design**:
   - Branded lead category alerts:
     - `🎯 [Ad Campaign Lead Generation]`
     - `🔔 [Contact Form Lead Generation]`
     - `📄 [Career Application Lead Generation]`
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



