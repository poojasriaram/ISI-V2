# 🚀 Release Notes — ISI Digital Ecosystem & Operations Upgrade
**Release Version:** v2.4.0  
**Release Date:** September 11, 2026  
**Target Repository:** `https://github.com/poojasriaram/ISI-V2.git` (`main`)  
**Deployment Bundle:** `ISI-dist-11-09-2026.tar`

---

## 📋 Executive Overview

This release delivers major infrastructure, lead generation, analytics, and academic platform updates across the entire ISI digital ecosystem. Key achievements include **direct Jira Cloud REST API integration** for instantaneous CRM lead ticketing across all 10 site forms, **Ad Performance Intelligence** automation in Google Sheets, integration of the **ISI Academy AI Advisor** and intelligence engine, and rigorous **100% Quality & Compliance validation**.

---

## 🌟 Major Highlights & New Features

### 1. 🎫 Direct Jira Cloud Lead Flow Integration
- **Zero Latency Ticketing:** Connected all web forms and chatbot inquiries directly to Jira Cloud REST API (`praveenkumarraram.atlassian.net`) in the `DLF` (Direct Lead Flow) project space.
- **Dual-Logging Architecture:** Every submission simultaneously creates a Jira `Lead` ticket and logs to the respective Google Sheet tab.
- **Rich Lead Metadata:** Tickets automatically include:
  - Full Contact Info (Name, Email, Phone, Company)
  - Requested Service / Program Interest
  - UTM Campaign Attribution (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`)
  - Geolocation & IP Context (City, Region, Country)
- **Supported Form Endpoints (10 Total):**
  1. 💼 Sales Inquiry Form
  2. 📞 Contact Us Form
  3. 💬 Global Arya AI Chatbot
  4. 🎓 ISI Academy Inquiry Form
  5. 🤖 Dedicated Academy AI Advisor
  6. 🎯 Meta Ad Campaign Landing Pages
  7. 🎯 YouTube Ad Campaign Landing Pages
  8. 🎯 Google Search Ad Landing Pages
  9. 🎯 Affiliate / Partner Landing Pages
  10. 🛡️ School Safety Audit Requests

---

### 2. 📊 Ad Performance Intelligence & Google Sheets Engine
- **Master Sheet Consolidation:** Cleaned configuration to 3 Master Spreadsheets:
  - **Sheet 1 (Data Collection):** `1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60`
  - **Sheet 2 (16 Analytics Dashboards):** `1ZA5YvdcTrKM0Zpyvoje9r8pa7hcU_cWOBj1VCJqvLYk`
  - **Ad Campaign Sheet:** `15OaMm3wf1esko6IZfpO74lnAZior8RGMwO2FiV_iz74`
- **Tab 3 `🎯 Ad Intelligence`:** Added 4-channel breakdown table (Meta, YouTube, Google Search, Affiliate) comparing spend, impressions, CTR, CPC, CPA, leads, and conversion rates with embedded performance charts.
- **Mission Control HUD:** Added 6 core executive metrics:
  - Google Leads
  - Career Submissions
  - Total Chat Inquiries
  - Repeat Visitors (Count & Ratio %)
  - Total User Sessions
  - Average Session Duration
- **Automated Executive Digest Mailer:** Automated leadership email reports scheduled directly from Apps Script (`SEND_ISI_AD_PERFORMANCE_MAILER`).

---

### 3. 🎓 ISI Academy Platform & AI Chatbot
- **Dedicated Academy AI Advisor (`/academy`):**
  - Interactive multi-turn guidance covering 7 security domains, 90-day certificates, C-DAC PG diplomas, and corporate workforce enablement.
  - Progressive lead capture (*Name → Email → Phone → Organization → Program*).
- **Global Arya Chatbot Upgraded:** Added Academy knowledge base and trigger rules so users on any page can explore Academy programs or request advisor callbacks.
- **Institutional Compliance Clarification:**
  - Standardized Undergraduate Degree tier to **`Undergraduate Degrees (Under Consideration **)`**.
  - Added clear institutional disclaimer regarding university affiliation and regulatory review.
  - Cleaned CTA button to **`Enquire for Degree Tracks`**.

---

### 4. 🔍 Quality Assurance & Bug Fixes
- **Link & Route Validation:** All 46 routes verified with **0 broken links (100% Score)**.
- **TypeScript Compilation:** Passed with **0 type errors**.
- **UI Runtime Fix:** Resolved `cn` import issue in `ISIAcademy.tsx` ensuring zero runtime errors.
- **Asset Optimization:** Full Vite production build with 2,388 modules minified, Brotli & Gzip compressed (74% image and asset savings).

---

## 📦 Deliverables & Artifacts

| Deliverable | Description | Path / Location |
| :--- | :--- | :--- |
| **Git Repository** | Latest commit pushed on `main` branch | [`github.com/poojasriaram/ISI-V2.git`](https://github.com/poojasriaram/ISI-V2.git) |
| **Production Build Archive** | Dated `.tar` package containing production `dist/` | `ISI-dist-11-09-2026.tar` |
| **Quality Audit Report** | Complete before/after quality audit documentation | [`COMPREHENSIVE_QUALITY_AUDIT_REPORT.md`](file:///c:/Users/srimp/Downloads/ISI-V2-main/ISI-V2-main/COMPREHENSIVE_QUALITY_AUDIT_REPORT.md) |

---
*Prepared by ISI Digital & Engineering Team — September 11, 2026*
