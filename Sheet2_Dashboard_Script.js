/**
 * ═════════════════════════════════════════════════════════════════════════════
 * ISI ENTERPRISE ANALYTICS DASHBOARD (SHEET 2) - ULTIMATE LIGHT EDITION
 * ═════════════════════════════════════════════════════════════════════════════
 * This script runs entirely in your Analytics Sheet (Sheet 2).
 * It reads raw data from Sheet 1 via Apps Script, cleanses development traffic,
 * and mathematically builds 16 automated professional SQL-database formatted tabs.
 *
 * ALL TAB NAMES ARE STANDARDIZED TO DATABASE FORMAT (UNDERSCORE_SEPARATED):
 * 1.  Mission_Control
 * 2.  Executive_KPIs
 * 3.  Ad_Intelligence
 * 4.  Geo_Map_Profile
 * 5.  Pareto_80_20
 * 6.  Daily_Heatmap
 * 7.  Growth_Momentum
 * 8.  Visitor_Ratio
 * 9.  Tech_Profile
 * 10. Identity_Linker
 * 11. Std_Deviation
 * 12. Sankey_Flow
 * 13. Broken_Link_QA
 * 14. Co_Occurrence_Matrix
 * 15. Funnel_Drop_Off
 * 16. Lead_Scoring_Engine
 */

// 🔴 SHEET 1 ID (DATA COLLECTION SHEET WHERE WEBHOOK SAVES DATA)
var DATA_SHEET_ID = "1vHFp5FfF_kHCKNtGpigcDLbS2gm3ETy1xdYuuJAru60";

// 🔴 WEBSITE URL (For Broken Link Test & Live Audits)
var SITE_BASE_URL = "https://www.isisecurity.in";

// ── SaaS Professional Light Theme ───────────────────────────────────────────
var C = {
    bg: "#f8fafc", // Main dashboard background (slate-50)
    p: "#e2e8f0",  // Sub-panel borders
    r1: "#ffffff", // Table row odd
    r2: "#f1f5f9", // Table row even
    t: "#1e293b",  // Primary dark text
    m: "#64748b",  // Muted gray text
    w: "#ffffff",  // White text (for dark headers)
    pu: "#4f46e5", // Indigo accent
    g: "#10b981",  // Emerald green
    o: "#f59e0b",  // Amber orange
    c: "#0ea5e9",  // Sky blue
    re: "#ef4444"  // Red
};

// ══════════════════════════════════════════════════════════════════════════════
// THE MASTER BUILDER (Orchestrator)
// ══════════════════════════════════════════════════════════════════════════════
function PULL_DATA_AND_BUILD_ALL_DASHBOARDS() {
    var ui = null;
    try { ui = SpreadsheetApp.getUi(); } catch (e) { }

    if (!DATA_SHEET_ID || DATA_SHEET_ID === "PASTE_YOUR_DATA_COLLECTION_SHEET_ID_HERE") {
        if (ui) ui.alert("❌ Error: You must paste your Sheet 1 ID at the top of the script!");
        return;
    }

    var db;
    try {
        db = SpreadsheetApp.openById(DATA_SHEET_ID);
    } catch (e) {
        if (ui) ui.alert("❌ Error: Could not open Sheet 1 (ID: " + DATA_SHEET_ID + ").\n\nMake sure the Sheet ID is correct and you have Editor access to it.\nError details: " + e.toString());
        return;
    }

    // Pulling Raw Data (Supports both database underscore format and legacy tab names)
    var tSheet = db.getSheetByName("Traffic_Analytics") || db.getSheetByName("TrafficAnalytics");
    var eSheet = db.getSheetByName("Engagement_Metrics") || db.getSheetByName("EngagementMetrics");
    var ubSheet = db.getSheetByName("User_Behavior_Library") || db.getSheetByName("UserBehaviorLibrary");

    var tDataRaw = (tSheet && tSheet.getLastRow() > 0) ? tSheet.getDataRange().getValues() : [];
    var eDataRaw = (eSheet && eSheet.getLastRow() > 0) ? eSheet.getDataRange().getValues() : [];
    var ubDataRaw = (ubSheet && ubSheet.getLastRow() > 0) ? ubSheet.getDataRange().getValues() : [];

    // ── LOCALHOST SANITIZATION ENGINE ──
    var tData = filterLocalhostData(tDataRaw);
    var ubData = filterLocalhostData(ubDataRaw);
    
    // Cross-link filter Engagement by Session IDs from non-localhost traffic
    var validSessions = new Set();
    if (tData.length > 1) {
      var sIdx = tData[0].indexOf("Session ID");
      if (sIdx > -1) {
        for (var i = 1; i < tData.length; i++) { if(tData[i][sIdx]) validSessions.add(tData[i][sIdx]); }
      }
    }
    var eData = eDataRaw.filter(function(row, idx) {
      if (idx === 0) return true;
      var eSessIdx = eDataRaw[0] ? eDataRaw[0].indexOf("Session ID") : -1;
      if (eSessIdx === -1) return true;
      return validSessions.has(row[eSessIdx]);
    });
    
    var devRecordsPurged = (tDataRaw.length - tData.length) + (ubDataRaw.length - ubData.length);
    // ──────────────────────────────────

    // Build all 16 tabs with standardized database names
    try { buildMissionControlCenter(tData, eData, ubData, db, devRecordsPurged); } catch (err) { console.error("Tab 1 Error: " + err.toString()); }
    try { buildExecutiveDashboard(tData, eData); } catch (err) { console.error("Tab 2 Error: " + err.toString()); }
    try { buildAdPerformanceIntelligenceSheet(tData, db); } catch (err) { console.error("Tab 3 Error: " + err.toString()); }
    try { buildGeoMapProfile(tData); } catch (err) { console.error("Tab 4 Error: " + err.toString()); }
    try { buildTrafficAndPagesPareto(tData); } catch (err) { console.error("Tab 5 Error: " + err.toString()); }
    try { buildHeatmapSheet(tData); } catch (err) { console.error("Tab 6 Error: " + err.toString()); }
    try { buildGrowthGraphSheet(tData); } catch (err) { console.error("Tab 7 Error: " + err.toString()); }
    try { buildRepeatVisitorRatioSheet(tData); } catch (err) { console.error("Tab 8 Error: " + err.toString()); }
    try { buildTechProfile(ubData); } catch (err) { console.error("Tab 9 Error: " + err.toString()); }
    try { buildIdentityLinkerSheet(ubData, db); } catch (err) { console.error("Tab 10 Error: " + err.toString()); }
    try { buildStdDevSheet(eData); } catch (err) { console.error("Tab 11 Error: " + err.toString()); }
    try { buildSankeySheet(tData); } catch (err) { console.error("Tab 12 Error: " + err.toString()); }
    try { buildBrokenLinkSheet(); } catch (err) { console.error("Tab 13 Error: " + err.toString()); }
    try { buildCoOccurrenceMatrix(tData, eData); } catch (err) { console.error("Tab 14 Error: " + err.toString()); }
    try { buildFunnelDropOffSheet(tData, db); } catch (err) { console.error("Tab 15 Error: " + err.toString()); }
    try { buildLeadScoringEngine(tData, eData); } catch (err) { console.error("Tab 16 Error: " + err.toString()); }

    if (ui) ui.alert("✅ SUCCESS! 16 Database-Formatted Analytics Tabs Built & Sanitized.\n\n" + devRecordsPurged + " localhost records were purged from this session.");
}

/** 
 * Implementation of the Localhost Data Purge
 */
function filterLocalhostData(data) {
    if (!data || data.length < 2) return data || [];
    var headers = data[0];
    var ipCol = headers.indexOf("IP Address");
    if (ipCol === -1) ipCol = headers.indexOf("ipAddress");
    if (ipCol === -1) return data;
    
    var filtered = [headers];
    for (var i = 1; i < data.length; i++) {
        var ip = String(data[i][ipCol]);
        if (ip !== "127.0.0.1" && ip !== "::1" && !ip.toLowerCase().includes("localhost")) {
            filtered.push(data[i]);
        }
    }
    return filtered;
}

// ── Master Helpers ────────────────────────────────────────────────────────────

function getOrCreateTab(name) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return null;
    var sh = ss.getSheetByName(name);
    if (sh) {
        try {
            sh.clearContents();
            sh.clearFormats();
            var charts = sh.getCharts();
            for (var i = 0; i < charts.length; i++) {
                sh.removeChart(charts[i]);
            }
        } catch (e) {
            console.error("Error resetting tab: " + e.toString());
        }
    } else {
        sh = ss.insertSheet(name);
    }
    ss.setActiveSheet(sh);
    return sh;
}

function styleTitle(sh, text, c_span, bg) {
    if (!sh) return;
    sh.getRange(1, 1, 1, Math.max(c_span, 1)).merge().setValue(text).setBackground(bg).setFontColor(C.w).setFontWeight("bold").setFontSize(16).setHorizontalAlignment("center").setVerticalAlignment("middle");
    sh.setRowHeight(1, 60); 
    sh.setFrozenRows(2);
    sh.getRange("A2").setValue("PRODUCTION READY - Last Updated: " + new Date().toLocaleString()).setBackground(C.bg).setFontColor(C.m).setFontSize(10).setFontStyle("italic");
}

function setColWidths(sh, startCol, widths) {
    if (!sh || !widths || !widths.length) return;
    for (var i = 0; i < widths.length; i++) {
        sh.setColumnWidth(startCol + i, widths[i]);
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 1: MISSION CONTROL
// ══════════════════════════════════════════════════════════════════════════════
function buildMissionControlCenter(tData, eData, ubData, db, devRecordsPurged) {
    var sh = getOrCreateTab("Mission_Control");
    styleTitle(sh, "CENTRAL COMMAND & MISSION CONTROL", 12, C.t);
    sh.getRange("A1:Z100").setBackground(C.bg);
    setColWidths(sh, 1, [20, 180, 180, 180, 180, 180, 20].concat(new Array(10).fill(100)));

    if (!tData || tData.length < 2) {
        sh.getRange(4, 2).setValue("Waiting for traffic data in Sheet 1...").setFontColor(C.m);
        return;
    }

    var tHead = tData[0], ipCol = tHead.indexOf("IP Address"), pCol = tHead.indexOf("Page Path"), sCol = tHead.indexOf("Traffic Source"), sessCol = tHead.indexOf("Session ID"), utmSrcCol = tHead.indexOf("UTM Source");
    var eDurCol = (eData && eData.length > 0) ? eData[0].indexOf("Duration (sec)") : -1;
    var ubHotCol = (ubData && ubData.length > 0) ? ubData[0].indexOf("Hot Lead Flag") : -1;

    var totalVisits = tData.length - 1;
    var ipCounts = {}, sources = {}, sessions = new Set();
    var googleLeadCount = 0;

    for (var i = 1; i < tData.length; i++) {
        var ip = tData[i][ipCol], s = tData[i][sCol] || "Direct", sess = tData[i][sessCol];
        var utm = String(tData[i][utmSrcCol] || "").toLowerCase();
        if (ip) ipCounts[ip] = (ipCounts[ip] || 0) + 1;
        if (sess) sessions.add(sess);
        sources[s] = (sources[s] || 0) + 1;
        if (utm.includes("google") || s.toLowerCase().includes("google")) {
            googleLeadCount++;
        }
    }

    var totalSessions = sessions.size || totalVisits;
    var uniqueUsers = Object.keys(ipCounts).length;
    var returnUsers = Object.keys(ipCounts).filter(function (k) { return ipCounts[k] > 1; }).length;
    var repeatVisitorPct = uniqueUsers > 0 ? (returnUsers / uniqueUsers * 100).toFixed(1) + "%" : "0%";

    var totalSecs = 0, timedSessions = 0;
    if (eDurCol > -1) {
        for (var i = 1; i < eData.length; i++) {
            var d = Number(eData[i][eDurCol]) || 0;
            if (d > 0) { totalSecs += d; timedSessions++; }
        }
    }
    var avgSecs = timedSessions > 0 ? Math.round(totalSecs / timedSessions) : 0;
    var avgDurationFormatted = avgSecs >= 60 ? Math.floor(avgSecs / 60) + "m " + (avgSecs % 60) + "s" : avgSecs + "s";

    var hotLeads = 0;
    if (ubHotCol > -1) {
        for (var i = 1; i < ubData.length; i++) {
            if (String(ubData[i][ubHotCol]).toUpperCase() === "YES" || String(ubData[i][ubHotCol]).toUpperCase() === "TRUE") hotLeads++;
        }
    }

    // Pull Career Submissions & Chats counts from DB
    var careerSubmissions = 0;
    var chatCount = 0;
    if (db) {
        try {
            var cSheet = db.getSheetByName("Career_Applications") || db.getSheetByName("CareerApplications") || db.getSheetByName("Careers");
            if (cSheet && cSheet.getLastRow() > 1) careerSubmissions = cSheet.getLastRow() - 1;
        } catch(e) {}
        try {
            var cbSheet = db.getSheetByName("Chatbot_Leads") || db.getSheetByName("ChatbotLeads");
            if (cbSheet && cbSheet.getLastRow() > 1) chatCount = cbSheet.getLastRow() - 1;
        } catch(e) {}
    }

    var drawMegaStat = function (row, col, title, value, span, color, textcolor) {
        sh.getRange(row, col, 1, span).merge().setValue(title.toUpperCase()).setBackground(C.t).setFontColor(C.w).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle").setFontSize(9);
        sh.getRange(row + 1, col, 2, span).merge().setValue(value).setBackground(color).setFontColor(textcolor || C.w).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle").setFontSize(22);
    };

    // ── MASTER HUD ROW 1 (TRAFFIC & SESSIONS) ──
    drawMegaStat(4, 2, "GLOBAL TRAFFIC", totalVisits.toLocaleString(), 1, C.pu);
    drawMegaStat(4, 3, "NUMBER OF SESSIONS", totalSessions.toLocaleString(), 1, C.c);
    drawMegaStat(4, 4, "REPEAT VISITORS", returnUsers.toLocaleString() + " (" + repeatVisitorPct + ")", 1, C.o);
    drawMegaStat(4, 5, "AVG SESSION DURATION", avgDurationFormatted, 1, C.g);
    drawMegaStat(4, 6, "HOT LEADS", hotLeads, 1, C.re, C.w);

    // ── MASTER HUD ROW 2 (LEADS & CONVERSIONS) ──
    drawMegaStat(8, 2, "GOOGLE LEADS", googleLeadCount.toLocaleString(), 1, "#1e40af");
    drawMegaStat(8, 3, "CAREER SUBMISSIONS", careerSubmissions.toLocaleString(), 1, "#0d9488");
    drawMegaStat(8, 4, "NUMBER OF CHATS", chatCount.toLocaleString(), 1, "#7c3aed");
    drawMegaStat(8, 5, "UNIQUE VISITORS", uniqueUsers.toLocaleString(), 1, "#475569");
    drawMegaStat(8, 6, "DEV RECORDS PURGED", (devRecordsPurged || 0).toLocaleString(), 1, "#0f172a");

    // ── GAUGE & PIE CHARTS ──
    sh.getRange(12, 2, 1, 5).merge().setValue("SYSTEM VITALS & ACQUISITION HEALTH").setBackground(C.p).setFontColor(C.t).setFontWeight("bold").setHorizontalAlignment("center");

    var retentionPct = uniqueUsers > 0 ? Math.round(returnUsers / uniqueUsers * 100) : 0;
    
    // Setup Gauge 1 Data (Label + Value)
    sh.getRange(13, 2).setValue("Repeat %").setFontColor(C.bg);
    sh.getRange(14, 2).setValue(retentionPct).setFontColor(C.bg); 
    try {
        var gauge1 = sh.newChart().setChartType(Charts.ChartType.GAUGE).addRange(sh.getRange(13, 2, 2, 1))
            .setPosition(13, 2, 0, 0).setOption("title", "Repeat Visitor %").setOption("width", 180).setOption("height", 180)
            .setOption("greenFrom", 25).setOption("greenTo", 100).setOption("redFrom", 0).setOption("redTo", 10).build();
        sh.insertChart(gauge1);
    } catch(e) { console.error("Gauge1 error: " + e.toString()); }

    // Setup Gauge 2 Data (Label + Value)
    sh.getRange(13, 3).setValue("Avg Secs").setFontColor(C.bg);
    sh.getRange(14, 3).setValue(avgSecs).setFontColor(C.bg);
    try {
        var gauge2 = sh.newChart().setChartType(Charts.ChartType.GAUGE).addRange(sh.getRange(13, 3, 2, 1))
            .setPosition(13, 3, 0, 0).setOption("title", "Avg Secs").setOption("width", 180).setOption("height", 180)
            .setOption("max", 200).setOption("greenFrom", 60).setOption("greenTo", 200).setOption("yellowFrom", 30).setOption("yellowTo", 60).build();
        sh.insertChart(gauge2);
    } catch(e) { console.error("Gauge2 error: " + e.toString()); }

    var srcRows = Object.keys(sources).map(function (k) { return [k, sources[k]]; }).sort(function (a, b) { return b[1] - a[1] });
    if (srcRows.length > 0) {
        sh.getRange(28, 2, srcRows.length, 2).setValues(srcRows).setFontColor(C.bg);
        try {
            var pie = sh.newChart().setChartType(Charts.ChartType.PIE).addRange(sh.getRange(28, 2, srcRows.length, 2))
                .setPosition(13, 4, 0, 0).setOption("title", "Traffic Acquisition Radar").setOption("pieHole", 0.45)
                .setOption("backgroundColor", C.bg).setOption("width", 380).setOption("height", 260).build();
            sh.insertChart(pie);
        } catch(e) { console.error("Pie error: " + e.toString()); }
    }

    // ── LIVE STATUS TERMINAL ──
    sh.getRange(24, 2, 1, 5).merge().setValue("SYSTEM LOG & CONVERSION STATUS").setBackground(C.t).setFontColor(C.g).setFontWeight("bold").setFontFamily("Courier New");
    sh.getRange(25, 2, 4, 5).merge().setBackground("#000000").setFontColor("#00ff00").setFontFamily("Courier New").setVerticalAlignment("top").setWrap(true)
        .setValue("> DATALINK ESTABLISHED... \n> " + totalVisits + " TOTAL VISITS & " + totalSessions + " SESSIONS PARSED \n> GOOGLE LEADS: " + googleLeadCount + " | CAREERS: " + careerSubmissions + " | CHATS: " + chatCount + "\n> REPEAT VISITORS: " + returnUsers + " (" + repeatVisitorPct + ") | AVG DURATION: " + avgDurationFormatted + "\n> LOCALHOST DEV RECORDS PURGED: " + (devRecordsPurged || 0));
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 2: EXECUTIVE DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
function buildExecutiveDashboard(tData, eData) {
    var sh = getOrCreateTab("Executive_KPIs");
    styleTitle(sh, "Executive Dashboard & Core Performance Metrics", 10, C.pu);
    setColWidths(sh, 1, [250, 100, 100, 40, 600, 40, 250, 100, 100, 40, 600]);

    if (!tData || tData.length < 2) {
        sh.getRange(4, 1).setValue("Waiting for traffic data...").setFontColor(C.t);
        return;
    }

    var tHeaders = tData[0], eHeaders = (eData && eData.length > 0) ? eData[0] : [];
    var pathCol = tHeaders.indexOf("Page Path"), ipCol = tHeaders.indexOf("IP Address"), locCol = tHeaders.indexOf("IP Location");
    var urlCol = eHeaders.indexOf("Page URL"), durCol = eHeaders.indexOf("Duration (sec)");

    var pageCounts = {}, ipByPage = {};
    for (var i = 1; i < tData.length; i++) {
        var p = tData[i][pathCol], ip = tData[i][ipCol];
        if (!p || p === "/") continue;
        pageCounts[p] = (pageCounts[p] || 0) + 1;
        if (!ipByPage[p]) ipByPage[p] = new Set();
        if (ip) ipByPage[p].add(ip);
    }
    var topPages = Object.keys(pageCounts).map(function (k) { return [k, pageCounts[k], ipByPage[k].size] }).sort(function (a, b) { return b[1] - a[1] });

    var timeByPage = {};
    if (urlCol > -1 && durCol > -1) {
        for (var i = 1; i < eData.length; i++) {
            var u = eData[i][urlCol], d = Number(eData[i][durCol]) || 0;
            if (!u || d <= 0) continue;
            if (!timeByPage[u]) timeByPage[u] = { sum: 0, count: 0, max: 0 };
            timeByPage[u].sum += d; timeByPage[u].count++;
            if (d > timeByPage[u].max) timeByPage[u].max = d;
        }
    }
    var timeArr = Object.keys(timeByPage).map(function (k) { return [k, (timeByPage[k].sum / timeByPage[k].count).toFixed(1), timeByPage[k].max] }).sort(function (a, b) { return b[1] - a[1] });

    var ipCounts = {}, ipLocs = {};
    for (var i = 1; i < tData.length; i++) {
        var ip = tData[i][ipCol], loc = tData[i][locCol];
        if (!ip) continue;
        ipCounts[ip] = (ipCounts[ip] || 0) + 1;
        if (loc) ipLocs[ip] = loc;
    }
    var topIPs = Object.keys(ipCounts).map(function (k) { return [k, ipLocs[k] || "Unknown", ipCounts[k]] }).filter(function (x) { return x[2] > 1 }).sort(function (a, b) { return b[2] - a[2] });

    var allPages = Object.keys(pageCounts).map(function (k) { return [k, pageCounts[k], ipByPage[k].size] }).sort(function (a, b) { return b[1] - a[1] });

    var drawTable = function (startRow, themeColor, icon, title, headers, rowData) {
        sh.getRange(startRow, 1, 1, headers.length).merge().setValue(icon + " " + title).setBackground(themeColor).setFontColor(C.w).setFontWeight("bold");
        sh.getRange(startRow + 1, 1, 1, headers.length).setValues([headers]).setBackground(C.p).setFontColor(C.t).setFontWeight("bold");
        if (rowData.length > 0) {
            sh.getRange(startRow + 2, 1, rowData.length, headers.length).setValues(rowData).setBackground(C.r1).setFontColor(C.t);
            for (var r = 0; r < rowData.length; r++) { if (r % 2 !== 0) sh.getRange(startRow + 2 + r, 1, 1, headers.length).setBackground(C.r2); }
        }
    };

    var totalVisits = tData.length - 1;
    var uniqueVisitors = Object.keys(ipCounts).length;
    var repeatVisitors = Object.keys(ipCounts).filter(function (ip) { return ipCounts[ip] > 1 }).length;
    var totalSeconds = 0, totalSessionsWithTime = 0;
    if (durCol > -1) {
        for (var i = 1; i < eData.length; i++) { var d = Number(eData[i][durCol]) || 0; if (d > 0) { totalSeconds += d; totalSessionsWithTime++; } }
    }
    var avgSessionSeconds = totalSessionsWithTime > 0 ? (totalSeconds / totalSessionsWithTime).toFixed(1) + "s" : "0s";
    var topPageName = topPages.length > 0 ? topPages[0][0] : "N/A";

    sh.getRange(4, 1, 1, 9).merge().setValue("CENTRAL COMMAND SCORECARD").setBackground(C.t).setFontColor(C.w).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(14);
    sh.getRange(5, 1).setValue("Total Visits").setBackground(C.p).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(6, 1).setValue(totalVisits).setBackground(C.bg).setFontColor(C.pu).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(18);
    sh.getRange(5, 2, 1, 2).merge().setValue("Unique Visitors").setBackground(C.p).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(6, 2, 1, 2).merge().setValue(uniqueVisitors).setBackground(C.bg).setFontColor(C.c).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(18);
    sh.getRange(5, 5).setValue("Avg Session Time").setBackground(C.p).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(6, 5).setValue(avgSessionSeconds).setBackground(C.bg).setFontColor(C.g).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(18);
    sh.getRange(5, 7).setValue("Repeat Visitors").setBackground(C.p).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(6, 7).setValue(repeatVisitors).setBackground(C.bg).setFontColor(C.o).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(18);
    sh.getRange(5, 8, 1, 2).merge().setValue("Most Active Page").setBackground(C.p).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(6, 8, 1, 2).merge().setValue(topPageName).setBackground(C.bg).setFontColor(C.re).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(12);

    var r1 = 9, r2 = 25, r3 = 41, r4 = 57;

    drawTable(r1, C.pu, "🏆", "Q1: Top 5 Pages (excl. Home)", ["Page", "Visits", "Unique IPs"], topPages.slice(0, 5));
    if (topPages.length > 0) {
        try {
            var c1 = sh.newChart().setChartType(Charts.ChartType.BAR).addRange(sh.getRange(r1+1,1,Math.min(6, topPages.length+1),2)).setPosition(r1, 5, 0, 0).setOption("title", "Top 5 Pages").setOption("backgroundColor", C.bg).build();
            sh.insertChart(c1);
        } catch(e) { console.error("Chart1 error: " + e.toString()); }
    }
    drawTable(r2, "#6366f1", "⏱", "Q2: Top Pages by Time Spent", ["Page", "Avg Sec", "Max Sec"], timeArr.slice(0, 5));
    if (timeArr.length > 0) {
        try {
            var c2 = sh.newChart().setChartType(Charts.ChartType.BAR).addRange(sh.getRange(r2+1,1,Math.min(6, timeArr.length+1),2)).setPosition(r2, 5, 0, 0).setOption("title", "Avg Time spent").setOption("backgroundColor", C.bg).build();
            sh.insertChart(c2);
        } catch(e) { console.error("Chart2 error: " + e.toString()); }
    }
    drawTable(r3, C.c, "🔄", "Q3: Top Repeat IPs", ["IP Address", "Location", "Total Visits"], topIPs.slice(0, 5));
    
    var masterRows = allPages.map(function(row) {
        var timeData = timeByPage[row[0]] || { sum: 0, count: 1, max: 0 };
        return [row[0], row[1], row[2], (timeData.sum/timeData.count).toFixed(1), timeData.max];
    });
    drawTable(r4, C.g, "📄", "Q4 / Q5: Master Metrics", ["Page URL", "Total", "Unique Users", "Avg Time", "Max Time"], masterRows);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 3: AD PERFORMANCE INTELLIGENCE (META, YOUTUBE, GOOGLE SEARCH, AFFILIATE)
// ══════════════════════════════════════════════════════════════════════════════
function buildAdPerformanceIntelligenceSheet(tData, db) {
    var sh = getOrCreateTab("Ad_Intelligence");
    styleTitle(sh, "ISI AD PERFORMANCE INTELLIGENCE (META, YOUTUBE, GOOGLE SEARCH, AFFILIATE)", 10, "#003380");
    sh.getRange("A1:Z100").setBackground(C.bg);
    setColWidths(sh, 1, [20, 180, 140, 130, 130, 130, 220, 160, 20]);

    if (!tData || tData.length < 2) {
        sh.getRange(4, 2).setValue("Waiting for campaign traffic data...").setFontColor(C.m);
        return;
    }

    var tHead = tData[0];
    var sCol = tHead.indexOf("Traffic Source");
    var utmSrcCol = tHead.indexOf("UTM Source");
    var utmCampCol = tHead.indexOf("UTM Campaign");
    var pathCol = tHead.indexOf("Page Path");

    // Pull Ad Leads from Google_Ad_Leads tab
    var adLeadsData = [];
    if (db) {
        try {
            var adSheet = db.getSheetByName("Google_Ad_Leads") || db.getSheetByName("AdCampaignLeads") || db.getSheetByName("AdCampaign");
            if (adSheet && adSheet.getLastRow() > 1) {
                adLeadsData = adSheet.getDataRange().getValues();
            }
        } catch(e) {}
    }

    var adStats = {
        meta: { name: "📘 Meta Ad", type: "Social / Display (FB & IG)", clicks: 0, leads: 0, campaigns: {} },
        youtube: { name: "🎥 YouTube Ad", type: "Video / TrueView", clicks: 0, leads: 0, campaigns: {} },
        google: { name: "🔍 Google Search Ad", type: "Search Engine (SEM / CPC)", clicks: 0, leads: 0, campaigns: {} },
        affiliate: { name: "🤝 Affiliate Ad", type: "Partner Networks & Referrals", clicks: 0, leads: 0, campaigns: {} }
    };

    // Analyze traffic data
    for (var i = 1; i < tData.length; i++) {
        var src = String(tData[i][sCol] || "").toLowerCase();
        var utmSrc = String(tData[i][utmSrcCol] || "").toLowerCase();
        var camp = String(tData[i][utmCampCol] || tData[i][pathCol] || "General");

        if (utmSrc.includes("fb") || utmSrc.includes("facebook") || utmSrc.includes("meta") || utmSrc.includes("instagram") || utmSrc.includes("ig") || src.includes("facebook") || src.includes("instagram")) {
            adStats.meta.clicks++;
            adStats.meta.campaigns[camp] = (adStats.meta.campaigns[camp] || 0) + 1;
        } else if (utmSrc.includes("youtube") || utmSrc.includes("yt") || src.includes("youtube")) {
            adStats.youtube.clicks++;
            adStats.youtube.campaigns[camp] = (adStats.youtube.campaigns[camp] || 0) + 1;
        } else if (utmSrc.includes("google") || utmSrc.includes("adwords") || utmSrc.includes("gads") || utmSrc.includes("cpc") || src.includes("google")) {
            adStats.google.clicks++;
            adStats.google.campaigns[camp] = (adStats.google.campaigns[camp] || 0) + 1;
        } else if (utmSrc.includes("affiliate") || utmSrc.includes("partner") || utmSrc.includes("referral") || utmSrc.includes("aff")) {
            adStats.affiliate.clicks++;
            adStats.affiliate.campaigns[camp] = (adStats.affiliate.campaigns[camp] || 0) + 1;
        }
    }

    // Match leads from Google_Ad_Leads tab
    if (adLeadsData.length > 1) {
        var lHead = adLeadsData[0];
        var lSrcCol = lHead.indexOf("UTM Source");
        var lCampCol = lHead.indexOf("UTM Campaign");
        for (var j = 1; j < adLeadsData.length; j++) {
            var lSrc = String(adLeadsData[j][lSrcCol] || "").toLowerCase();
            if (lSrc.includes("fb") || lSrc.includes("facebook") || lSrc.includes("meta") || lSrc.includes("instagram")) {
                adStats.meta.leads++;
            } else if (lSrc.includes("youtube") || lSrc.includes("yt")) {
                adStats.youtube.leads++;
            } else if (lSrc.includes("google") || lSrc.includes("cpc")) {
                adStats.google.leads++;
            } else if (lSrc.includes("affiliate") || lSrc.includes("partner")) {
                adStats.affiliate.leads++;
            }
        }
    }

    var totalPaidClicks = adStats.meta.clicks + adStats.youtube.clicks + adStats.google.clicks + adStats.affiliate.clicks;
    var totalPaidLeads = adStats.meta.leads + adStats.youtube.leads + adStats.google.leads + adStats.affiliate.leads;
    var blendedCvr = totalPaidClicks > 0 ? (totalPaidLeads / totalPaidClicks * 100).toFixed(2) + "%" : "0.00%";

    var drawMegaStat = function (row, col, title, value, span, color, textcolor) {
        sh.getRange(row, col, 1, span).merge().setValue(title.toUpperCase()).setBackground(C.t).setFontColor(C.w).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle").setFontSize(9);
        sh.getRange(row + 1, col, 2, span).merge().setValue(value).setBackground(color).setFontColor(textcolor || C.w).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle").setFontSize(22);
    };

    // ── MEGA STAT SCORECARDS ──
    drawMegaStat(4, 2, "TOTAL AD CLICKS", totalPaidClicks.toLocaleString(), 1, "#003380");
    drawMegaStat(4, 3, "TOTAL AD LEADS", totalPaidLeads.toLocaleString(), 1, C.o);
    drawMegaStat(4, 4, "BLENDED AD CVR", blendedCvr, 1, C.g);
    drawMegaStat(4, 5, "TOP PAID CHANNEL", totalPaidClicks > 0 ? "Google / Meta" : "Pending", 2, C.pu);

    // ── 4-CHANNEL PERFORMANCE INTELLIGENCE TABLE ──
    var tableHeaders = [
        "Ad Channel", "Channel Type", "Clicks / Traffic", "Leads Generated", "Conversion Rate (%)", "Top Campaign / Page", "Performance Status"
    ];

    var getTopCamp = function(campObj) {
        var keys = Object.keys(campObj);
        if (keys.length === 0) return "Direct / Site";
        return keys.sort(function(a,b){ return campObj[b] - campObj[a]; })[0];
    };

    var getStatus = function(clicks, leads) {
        if (leads >= 5) return "🔥 High Performing";
        if (clicks > 50) return "⚡ Steady Volume";
        if (clicks > 0) return "🔍 Monitoring";
        return "⚠️ Awaiting Traffic";
    };

    var channels = [adStats.meta, adStats.youtube, adStats.google, adStats.affiliate];
    var tableRows = channels.map(function(ch) {
        var cvr = ch.clicks > 0 ? (ch.leads / ch.clicks * 100).toFixed(2) + "%" : "0.00%";
        return [
            ch.name,
            ch.type,
            ch.clicks,
            ch.leads,
            cvr,
            getTopCamp(ch.campaigns),
            getStatus(ch.clicks, ch.leads)
        ];
    });

    sh.getRange(8, 2, 1, tableHeaders.length).merge().setValue("AD PERFORMANCE INTELLIGENCE BREAKDOWN TABLE").setBackground("#003380").setFontColor(C.w).setFontWeight("bold").setHorizontalAlignment("center").setFontSize(11);
    sh.getRange(9, 2, 1, tableHeaders.length).setValues([tableHeaders]).setBackground(C.p).setFontColor(C.t).setFontWeight("bold").setHorizontalAlignment("center");
    sh.getRange(10, 2, tableRows.length, tableHeaders.length).setValues(tableRows).setBackground(C.r1).setFontColor(C.t).setHorizontalAlignment("center");

    // Highlight rows
    for (var r = 0; r < tableRows.length; r++) {
        if (r % 2 !== 0) sh.getRange(10 + r, 2, 1, tableHeaders.length).setBackground(C.r2);
    }

    // Insert Comparison Chart
    try {
        var chartRange = sh.getRange(9, 2, 5, 4);
        var barChart = sh.newChart().setChartType(Charts.ChartType.COLUMN).addRange(chartRange)
            .setPosition(16, 2, 0, 0).setOption("title", "Ad Channel Clicks vs Leads Performance").setOption("width", 720).setOption("height", 280)
            .setOption("backgroundColor", C.bg).build();
        sh.insertChart(barChart);
    } catch(e) {
        console.error("Ad Chart Error: " + e.toString());
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 4: GEO MAP PROFILE
// ══════════════════════════════════════════════════════════════════════════════
function buildGeoMapProfile(tData) {
    var sh = getOrCreateTab("Geo_Map_Profile");
    styleTitle(sh, "Geographic Map Intensity & Traffic Profile", 8, C.c);
    setColWidths(sh, 1, [150, 100, 100, 150, 200, 100, 150]);
    if (!tData || tData.length < 2) return;
    var hd = tData[0], ipCol = hd.indexOf("IP Address"), locCol = hd.indexOf("IP Location");
    var countryDist = {}; 
    for (var i = 1; i < tData.length; i++) {
        var loc = tData[i][locCol] || "Unknown";
        var country = loc.split(",").pop().trim();
        if (country) countryDist[country] = (countryDist[country] || 0) + 1;
    }
    var cArr = Object.keys(countryDist).map(function (k) { return [k, countryDist[k]] }).sort(function (a, b) { return b[1] - a[1] });
    sh.getRange(4, 1, 1, 2).setValues([["Country", "Traffic"]]).setBackground(C.c).setFontColor(C.w).setFontWeight("bold");
    if (cArr.length > 0) {
        sh.getRange(5, 1, cArr.length, 2).setValues(cArr);
        try {
            var chart = sh.newChart().setChartType(Charts.ChartType.GEO).addRange(sh.getRange(4, 1, cArr.length+1, 2)).setPosition(4, 7, 0, 0).setOption("width", 500).build();
            sh.insertChart(chart);
        } catch(e) { console.error("GeoChart error: " + e.toString()); }
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 5: PARETO 80-20
// ══════════════════════════════════════════════════════════════════════════════
function buildTrafficAndPagesPareto(tData) {
    var sh = getOrCreateTab("Pareto_80_20");
    styleTitle(sh, "80/20 Pareto Analysis", 9, C.re);
    setColWidths(sh, 1, [200, 100, 100, 120, 50, 180, 100, 100, 120]);
    if (!tData || tData.length < 2) return;
    var hd = tData[0], pCol = hd.indexOf("Page Path"), sCol = hd.indexOf("Traffic Source");
    var pcs = {}, scs = {};
    for (var i = 1; i < tData.length; i++) {
        var p = tData[i][pCol], s = tData[i][sCol] || "Direct";
        if (p) pcs[p] = (pcs[p] || 0) + 1;
        if (s) scs[s] = (scs[s] || 0) + 1;
    }
    var pArr = Object.keys(pcs).map(function (k) { return [k, pcs[k]] }).sort(function (a, b) { return b[1] - a[1] });
    var pTot = pArr.reduce(function (a, b) { return a + b[1] }, 0), pCum = 0;
    var rows = pArr.map(function(r) { pCum += r[1]; return [r[0], r[1], (r[1]/pTot*100).toFixed(1)+"%", (pCum/pTot*100).toFixed(1)+"%"]; });
    sh.getRange(4, 1, 1, 4).setValues([["Top Pages", "Visits", "Share", "Cumulative"]]).setBackground(C.re).setFontColor(C.w);
    if (rows.length > 0) sh.getRange(5, 1, rows.length, 4).setValues(rows);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 6: HEATMAP SHEET
// ══════════════════════════════════════════════════════════════════════════════
function buildHeatmapSheet(tData) {
    var sh = getOrCreateTab("Daily_Heatmap");
    styleTitle(sh, "Traffic Heatmaps & Multi-Year Calendar", 55, C.g);
    if (!tData || tData.length < 2) return;
    var tsCol = tData[0].indexOf("Timestamp");
    var mx = []; for (var d = 0; d < 7; d++) mx[d] = new Array(24).fill(0);
    var dailyCounts = {};
    for (var i = 1; i < tData.length; i++) {
        var ts = tData[i][tsCol]; if (!ts) continue;
        var dt = new Date(typeof ts === "string" ? ts.replace(" IST", "") : ts);
        if (isNaN(dt.getTime())) continue;
        mx[dt.getDay()][dt.getHours()]++;
        var key = Utilities.formatDate(dt, "Asia/Kolkata", "yyyy-MM-dd");
        dailyCounts[key] = (dailyCounts[key] || 0) + 1;
    }
    var maxV = 1; mx.forEach(function (r) { maxV = Math.max(maxV, Math.max.apply(null, r)); });
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var d = 0; d < 7; d++) {
        sh.getRange(5 + d, 1).setValue(days[d]).setBackground(C.p).setFontWeight("bold");
        for (var h = 0; h < 24; h++) {
            var val = mx[d][h], int = val / maxV;
            var hex = "#" + ("0" + Math.round(241-int*30).toString(16)).slice(-2) + ("0" + Math.round(253-int*68).toString(16)).slice(-2) + ("0" + Math.round(244-int*115).toString(16)).slice(-2);
            sh.getRange(5+d, h+2).setValue(val || "").setBackground(val > 0 ? hex : C.bg).setHorizontalAlignment("center");
        }
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 7: GROWTH GRAPH
// ══════════════════════════════════════════════════════════════════════════════
function buildGrowthGraphSheet(tData) {
    var sh = getOrCreateTab("Growth_Momentum");
    styleTitle(sh, "Traffic Growth & Day-over-Day Momentum", 7, C.pu);
    if (!tData || tData.length < 2) return;
    var tsCol = tData[0].indexOf("Timestamp");
    var daily = {};
    for (var i = 1; i < tData.length; i++) {
        var ts = tData[i][tsCol]; if (!ts) continue;
        var key = Utilities.formatDate(new Date(ts), "Asia/Kolkata", "yyyy-MM-dd");
        daily[key] = (daily[key] || 0) + 1;
    }
    var dates = Object.keys(daily).sort(), cum = 0;
    var rows = dates.map(function(d, i) { 
        cum += daily[d]; 
        var prev = i > 0 ? daily[dates[i-1]] : daily[d];
        var mom = prev > 0 ? ((daily[d]-prev)/prev*100).toFixed(1) + "%" : "0%";
        return [d, daily[d], cum, mom]; 
    });
    sh.getRange(3, 1, 1, 4).setValues([["Date", "Sessions", "Cumulative", "Momentum"]]).setBackground(C.pu).setFontColor(C.w);
    if (rows.length > 0) sh.getRange(4, 1, rows.length, 4).setValues(rows);
    if (rows.length > 0) {
        try {
            var chart = sh.newChart().setChartType(Charts.ChartType.LINE).addRange(sh.getRange(3, 1, rows.length+1, 2)).addRange(sh.getRange(3, 3, rows.length+1, 1)).setPosition(3, 7, 0, 0).setOption("width", 600).build();
            sh.insertChart(chart);
        } catch(e) { console.error("Growth chart error: " + e.toString()); }
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 8: REPEAT VISITOR RATIO
// ══════════════════════════════════════════════════════════════════════════════
function buildRepeatVisitorRatioSheet(tData) {
    var sh = getOrCreateTab("Visitor_Ratio");
    styleTitle(sh, "Acquisition vs. Retention Ratio", 6, C.c);
    if (!tData || tData.length < 2) return;
    var ipCol = tData[0].indexOf("IP Address"), ipCounts = {};
    for (var i = 1; i < tData.length; i++) if (tData[i][ipCol]) ipCounts[tData[i][ipCol]] = (ipCounts[tData[i][ipCol]] || 0) + 1;
    var nv = 0, rv = 0; Object.keys(ipCounts).forEach(function(ip) { if (ipCounts[ip] === 1) nv++; else rv++; });
    var rows = [["New Visitors", nv], ["Repeat Visitors", rv]];
    sh.getRange(4, 1, 2, 2).setValues(rows).setBackground(C.r1);
    try {
        sh.insertChart(sh.newChart().setChartType(Charts.ChartType.PIE).addRange(sh.getRange(4,1,2,2)).setPosition(4, 4, 0, 0).setOption("pieHole", 0.6).build());
    } catch(e) { console.error("VisitorRatio pie error: " + e.toString()); }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 9: TECH PROFILE
// ══════════════════════════════════════════════════════════════════════════════
function buildTechProfile(ubData) {
    var sh = getOrCreateTab("Tech_Profile");
    styleTitle(sh, "Technical Footprint & Devices", 8, C.o);
    if (!ubData || ubData.length < 2) return;
    var hd = ubData[0], osC = hd.indexOf("OS"), vwC = hd.indexOf("Viewport"), cnC = hd.indexOf("Connection Type");
    var os = {}, vw = {}, cn = {};
    for (var i = 1; i < ubData.length; i++) {
        if (osC > -1 && ubData[i][osC]) os[ubData[i][osC]] = (os[ubData[i][osC]] || 0) + 1;
        if (vwC > -1 && ubData[i][vwC]) vw[ubData[i][vwC]] = (vw[ubData[i][vwC]] || 0) + 1;
        if (cnC > -1 && ubData[i][cnC]) cn[ubData[i][cnC]] = (cn[ubData[i][cnC]] || 0) + 1;
    }
    var osArr = Object.keys(os).map(function(k) { return [k, os[k]] }).sort(function(a,b){return b[1]-a[1]});
    sh.getRange(4, 1, 1, 2).setValues([["OS", "Hits"]]).setBackground(C.o).setFontColor(C.w);
    if (osArr.length > 0) sh.getRange(5, 1, osArr.length, 2).setValues(osArr);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 10: IDENTITY LINKER
// ══════════════════════════════════════════════════════════════════════════════
function buildIdentityLinkerSheet(ubData, db) {
    var sh = getOrCreateTab("Identity_Linker");
    styleTitle(sh, "Unmasking Anonymous Traffic", 8, C.re);
    if (!ubData || ubData.length < 2) return;
    var vidCol = ubData[0].indexOf("Visitor ID");
    var idents = {};
    ["Contact_Form", "ContactForm", "Partner_Applications", "PartnerApps", "Chatbot_Leads", "ChatbotLeads", "Academy_Inquiries", "AcademyInquiries", "Sales_Inquiries", "SalesInquiries", "Google_Ad_Leads", "Career_Applications", "CareerApplications"].forEach(function (tab) {
        var s = db.getSheetByName(tab); if (!s) return;
        var d = s.getDataRange().getValues(), vC = d[0].indexOf("Visitor ID"), eC = d[0].indexOf("Email"), nC = d[0].indexOf("Name");
        if (vC > -1 && eC > -1) {
            for (var i = 1; i < d.length; i++) if (d[i][vC] && d[i][eC]) idents[d[i][vC]] = { n: d[i][nC] || "Anon", e: d[i][eC], t: tab };
        }
    });
    var results = []; for (var i = 1; i < ubData.length; i++) {
        var v = ubData[i][vidCol]; if (v && idents[v]) results.push([v, idents[v].n, idents[v].e, idents[v].t]);
    }
    sh.getRange(3, 1, 1, 4).setValues([["VID", "Name", "Email", "Form Source"]]).setBackground(C.pu).setFontColor(C.w);
    if (results.length > 0) sh.getRange(4, 1, results.length, 4).setValues(results).setBackground(C.r1);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 11: STD DEV SHEET
// ══════════════════════════════════════════════════════════════════════════════
function buildStdDevSheet(eData) {
    var sh = getOrCreateTab("Std_Deviation");
    styleTitle(sh, "Engagement Stat Volatility", 6, C.pu);
    if (!eData || eData.length < 2) return;
    var sCol = eData[0].indexOf("Engagement Score");
    var sc = []; for (var i = 1; i < eData.length; i++) if (eData[i][sCol]) sc.push(Number(eData[i][sCol]));
    if (sc.length === 0) return;
    var mean = sc.reduce(function(a,b){return a+b},0)/sc.length;
    var std = Math.sqrt(sc.reduce(function(a,b){return a+Math.pow(b-mean,2)},0)/sc.length);
    sh.getRange(4, 1, 2, 2).setValues([["Mean Score", mean.toFixed(1)], ["Volatility (Std Dev)", std.toFixed(1)]]).setBackground(C.r1);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 12: SANKEY PATHS
// ══════════════════════════════════════════════════════════════════════════════
function buildSankeySheet(tData) {
    var sh = getOrCreateTab("Sankey_Flow");
    styleTitle(sh, "Top Journey Pathing", 6, C.c);
    if (!tData || tData.length < 2) return;
    var sidC = tData[0].indexOf("Session ID"), pC = tData[0].indexOf("Page Path"), tsC = tData[0].indexOf("Timestamp");
    var sesh = {}; for (var i = 1; i < tData.length; i++) {
        var sid = tData[i][sidC]; if (sid) { if (!sesh[sid]) sesh[sid] = []; sesh[sid].push({ p: tData[i][pC] || "/", ts: tData[i][tsC] }); }
    }
    var flows = {}; Object.keys(sesh).forEach(function(s) {
        var p = sesh[s].sort(function(a,b){return new Date(a.ts)-new Date(b.ts)});
        for (var j=0; j<p.length-1; j++) { if(p[j].p !== p[j+1].p) { var f = p[j].p + " → " + p[j+1].p; flows[f] = (flows[f]||0)+1; } }
    });
    var arr = Object.keys(flows).map(function(k){return [k, flows[k]]}).sort(function(a,b){return b[1]-a[1]}).slice(0, 15);
    sh.getRange(4, 1, 1, 2).setValues([["Path", "Flow Count"]]).setBackground(C.c).setFontColor(C.w);
    if (arr.length > 0) sh.getRange(5, 1, arr.length, 2).setValues(arr).setBackground(C.r1);
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 13: BROKEN LINK QA
// ══════════════════════════════════════════════════════════════════════════════
function buildBrokenLinkSheet() {
    if (SITE_BASE_URL.includes("yourwebsite")) return;
    var sh = getOrCreateTab("Broken_Link_QA");
    styleTitle(sh, "Automated Internal Audit", 5, C.re);
    var paths = ["/", "/about", "/services", "/contact", "/careers", "/academy"];
    sh.getRange(3, 1, 1, 3).setValues([["URL", "Status", "Latency"]]).setBackground(C.re).setFontColor(C.w);
    paths.forEach(function(p, i) {
        var url = SITE_BASE_URL + p, st = "🔴 Failed", t = 0;
        try { 
            var start = Date.now(); 
            var res = UrlFetchApp.fetch(url, {muteHttpExceptions:true}); 
            st = res.getResponseCode() === 200 ? "✅ OK" : res.getResponseCode(); 
            t = Date.now()-start; 
        } catch(e) {
            st = "🔴 Failed: " + e.toString();
        }
        sh.getRange(4+i, 1, 1, 3).setValues([[url, st, t+"ms"]]).setBackground(C.r1);
    });
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 14: CO-OCCURRENCE MATRIX
// ══════════════════════════════════════════════════════════════════════════════
function buildCoOccurrenceMatrix(tData, eData) {
    var sh = getOrCreateTab("Co_Occurrence_Matrix");
    styleTitle(sh, "Dynamic Page Interconnectivity Matrix", 15, C.pu);
    if (!tData || tData.length < 2) return;
    var tHead = tData[0], sCol = tHead.indexOf("Session ID"), pCol = tHead.indexOf("Page Path");
    var eHead = (eData && eData.length > 0) ? eData[0] : [], eSess = eHead.indexOf("Session ID"), eDur = eHead.indexOf("Duration (sec)");
    
    var sessionDurs = {};
    if (eSess > -1 && eDur > -1) { for (var i = 1; i < eData.length; i++) if (eData[i][eSess]) sessionDurs[eData[i][eSess]] = (sessionDurs[eData[i][eSess]] || 0) + (Number(eData[i][eDur]) || 0); }
    
    var sessionPages = {}; var pageCounts = {};
    for (var i = 1; i < tData.length; i++) { 
        var s = tData[i][sCol], p = tData[i][pCol]; if (!s || !p) continue;
        if (!sessionPages[s]) sessionPages[s] = new Set(); sessionPages[s].add(p);
    }
    Object.keys(sessionPages).forEach(function (s) { sessionPages[s].forEach(function (p) { pageCounts[p] = (pageCounts[p] || 0) + 1; }); });
    
    var topPages = Object.keys(pageCounts).sort(function (a, b) { return pageCounts[b] - pageCounts[a] }).slice(0, 15);
    if (topPages.length === 0) return;
    
    var matrixSum = {}; var matrixCount = {};
    topPages.forEach(function (p1) { matrixSum[p1] = {}; matrixCount[p1] = {}; topPages.forEach(function (p2) { matrixSum[p1][p2] = 0; matrixCount[p1][p2] = 0; }); });
    
    Object.keys(sessionPages).forEach(function (sid) {
        var pgs = Array.from(sessionPages[sid]); var dur = sessionDurs[sid] || 0;
        for (var i = 0; i < pgs.length; i++) {
            if (!matrixCount[pgs[i]]) continue;
            for (var j = 0; j < pgs.length; j++) { if (matrixCount[pgs[i]][pgs[j]] !== undefined) { matrixCount[pgs[i]][pgs[j]]++; matrixSum[pgs[i]][pgs[j]] += dur; } }
        }
    });

    sh.getRange(4, 2, 1, topPages.length).setValues([topPages]).setBackground(C.p).setFontWeight("bold");
    for (var r = 0; r < topPages.length; r++) {
        sh.getRange(5 + r, 1).setValue(topPages[r]).setBackground(C.p).setFontWeight("bold");
        for (var c = 0; c < topPages.length; c++) {
            var count = matrixCount[topPages[r]][topPages[c]]; var sumValue = matrixSum[topPages[r]][topPages[c]];
            var valStr = count > 0 ? (sumValue / count).toFixed(1) + "s" : "-";
            sh.getRange(5 + r, 2 + c).setValue(valStr).setHorizontalAlignment("center");
        }
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 15: FUNNEL DROP-OFF
// ══════════════════════════════════════════════════════════════════════════════
function buildFunnelDropOffSheet(tData, db) {
    var sh = getOrCreateTab("Funnel_Drop_Off");
    styleTitle(sh, "Multi-Stage Conversion Funnel", 6, C.o);
    if (!tData || tData.length < 2) return;
    var uV = new Set(), sV = new Set(), cV = new Set();
    var pCol = tData[0].indexOf("Page Path"), ipCol = tData[0].indexOf("IP Address");
    for (var i = 1; i < tData.length; i++) {
        var ip = tData[i][ipCol], p = (tData[i][pCol] || "").toLowerCase(); if (!ip) continue;
        uV.add(ip); if (p.includes("services")) sV.add(ip); if (p.includes("contact")) cV.add(ip);
    }
    var rows = [["1. Total Visitors", uV.size], ["2. Intent (Services)", sV.size], ["3. Intent (Contact)", cV.size]];
    sh.getRange(4, 1, 3, 2).setValues(rows).setBackground(C.r1);
    try {
        sh.insertChart(sh.newChart().setChartType(Charts.ChartType.BAR).addRange(sh.getRange(4,1,3,2)).setPosition(4, 4, 0, 0).build());
    } catch(e) { console.error("Funnel chart error: " + e.toString()); }
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB 16: LEAD SCORING ENGINE
// ══════════════════════════════════════════════════════════════════════════════
function buildLeadScoringEngine(tData, eData) {
    var sh = getOrCreateTab("Lead_Scoring_Engine");
    styleTitle(sh, "AI-Driven Lead Scoring Engine", 8, C.re);
    if (!tData || tData.length < 2) return;
    
    var ipCol = tData[0].indexOf("IP Address"), pCol = tData[0].indexOf("Page Path"), sCol = tData[0].indexOf("Session ID");
    var eSess = (eData && eData.length > 0) ? eData[0].indexOf("Session ID") : -1;
    var eDur = (eData && eData.length > 0) ? eData[0].indexOf("Duration (sec)") : -1;
    
    var tTime = {}; 
    if (eSess > -1 && eDur > -1) {
        for (var i = 1; i < eData.length; i++) {
            var sessId = eData[i][eSess];
            var durVal = Number(eData[i][eDur]) || 0;
            if (sessId) tTime[sessId] = (tTime[sessId] || 0) + durVal;
        }
    }
    
    var leads = {}; 
    for (var i = 1; i < tData.length; i++) {
        var ip = tData[i][ipCol], p = (tData[i][pCol] || "").toLowerCase(), s = tData[i][sCol]; if (!ip) continue;
        if (!leads[ip]) leads[ip] = { score: 0, hits: 0, time: 0, contact: false };
        leads[ip].hits++; if(s) leads[ip].time += (tTime[s] || 0); if(p.includes("contact") || p.includes("sales") || p.includes("academy")) leads[ip].contact = true;
    }
    
    var printRows = Object.keys(leads).map(function(ip) {
        var l = leads[ip]; var score = 0; if (l.contact) score += 50; if (l.hits > 10) score += 20; if (l.time > 120) score += 30;
        var badge = score >= 85 ? "🔥 HOT" : score >= 50 ? "⭐ Verified" : "Warm";
        return [ip, score, badge, l.hits, l.time+"s", l.contact?"YES":"NO"];
    }).sort(function(a,b){return b[1]-a[1]});

    sh.getRange(4, 1, 1, 6).setValues([["IP Target", "Score", "Rank", "Hits", "Dwell Time", "Lead Form Hit"]]).setBackground(C.t).setFontColor(C.w);
    if (printRows.length > 0) sh.getRange(5, 1, Math.min(50, printRows.length), 6).setValues(printRows.slice(0, 50)).setBackground(C.r1);
}

// ══════════════════════════════════════════════════════════════════════════════
// CLEANUP TRIGGERS & UI SETUP
// ══════════════════════════════════════════════════════════════════════════════
function REMOVE_ALL_TRIGGERS() {
    var triggers = ScriptApp.getProjectTriggers();
    triggers.forEach(function(t) { ScriptApp.deleteTrigger(t); });
    Browser.msgBox("✅ All automated email triggers removed! Duplicate emails from old triggers are disabled.");
}

// ══════════════════════════════════════════════════════════════════════════════
// 📧 ISI AD PERFORMANCE INTELLIGENCE (MAILER - SENDER)
// ══════════════════════════════════════════════════════════════════════════════
function SEND_ISI_AD_PERFORMANCE_MAILER() {
    var ui = null;
    try { ui = SpreadsheetApp.getUi(); } catch(e) {}

    var db = null;
    try {
        db = SpreadsheetApp.openById(DATA_SHEET_ID);
    } catch(e) {
        if (ui) ui.alert("❌ Error opening Data Sheet: " + e.toString());
        return;
    }

    var tSheet = db.getSheetByName("Traffic_Analytics") || db.getSheetByName("TrafficAnalytics");
    var tData = (tSheet && tSheet.getLastRow() > 0) ? filterLocalhostData(tSheet.getDataRange().getValues()) : [];
    
    var adSheet = db.getSheetByName("Google_Ad_Leads") || db.getSheetByName("AdCampaignLeads") || db.getSheetByName("AdCampaign");
    var adLeadsData = (adSheet && adSheet.getLastRow() > 0) ? adSheet.getDataRange().getValues() : [];

    var adStats = {
        meta: { name: "📘 Meta Ad", type: "Social / Display (FB & IG)", clicks: 0, leads: 0 },
        youtube: { name: "🎥 YouTube Ad", type: "Video / TrueView", clicks: 0, leads: 0 },
        google: { name: "🔍 Google Search Ad", type: "Search Engine (SEM / CPC)", clicks: 0, leads: 0 },
        affiliate: { name: "🤝 Affiliate Ad", type: "Partner Networks & Referrals", clicks: 0, leads: 0 }
    };

    var sCol = tData.length > 0 ? tData[0].indexOf("Traffic Source") : -1;
    var utmSrcCol = tData.length > 0 ? tData[0].indexOf("UTM Source") : -1;

    for (var i = 1; i < tData.length; i++) {
        var src = String(tData[i][sCol] || "").toLowerCase();
        var utmSrc = String(tData[i][utmSrcCol] || "").toLowerCase();

        if (utmSrc.includes("fb") || utmSrc.includes("facebook") || utmSrc.includes("meta") || utmSrc.includes("instagram") || src.includes("facebook")) {
            adStats.meta.clicks++;
        } else if (utmSrc.includes("youtube") || utmSrc.includes("yt") || src.includes("youtube")) {
            adStats.youtube.clicks++;
        } else if (utmSrc.includes("google") || utmSrc.includes("adwords") || utmSrc.includes("gads") || utmSrc.includes("cpc") || src.includes("google")) {
            adStats.google.clicks++;
        } else if (utmSrc.includes("affiliate") || utmSrc.includes("partner") || utmSrc.includes("referral")) {
            adStats.affiliate.clicks++;
        }
    }

    if (adLeadsData.length > 1) {
        var lSrcCol = adLeadsData[0].indexOf("UTM Source");
        for (var j = 1; j < adLeadsData.length; j++) {
            var lSrc = String(adLeadsData[j][lSrcCol] || "").toLowerCase();
            if (lSrc.includes("fb") || lSrc.includes("facebook") || lSrc.includes("meta") || lSrc.includes("instagram")) adStats.meta.leads++;
            else if (lSrc.includes("youtube") || lSrc.includes("yt")) adStats.youtube.leads++;
            else if (lSrc.includes("google") || lSrc.includes("cpc")) adStats.google.leads++;
            else if (lSrc.includes("affiliate") || lSrc.includes("partner")) adStats.affiliate.leads++;
        }
    }

    var totalClicks = adStats.meta.clicks + adStats.youtube.clicks + adStats.google.clicks + adStats.affiliate.clicks;
    var totalLeads = adStats.meta.leads + adStats.youtube.leads + adStats.google.leads + adStats.affiliate.leads;
    var cvr = totalClicks > 0 ? (totalLeads / totalClicks * 100).toFixed(2) + "%" : "0.00%";

    var recipients = [
        "bv@trustflow.in",
        "v.varshith@isisecurity.in",
        "v.vishal@isisecurity.in",
        "pooja@deeptrust.tech",
        "poojasri.aram@gmail.com"
    ];

    var tableHtml = [
        '<table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:13px;">',
        '<tr style="background:#003380;color:#ffffff;">',
        '<th style="padding:10px;text-align:left;">Ad Channel</th>',
        '<th style="padding:10px;text-align:left;">Platform Type</th>',
        '<th style="padding:10px;text-align:center;">Clicks</th>',
        '<th style="padding:10px;text-align:center;">Leads</th>',
        '<th style="padding:10px;text-align:center;">CVR (%)</th>',
        '</tr>'
    ];

    [adStats.meta, adStats.youtube, adStats.google, adStats.affiliate].forEach(function(c, idx) {
        var rowBg = idx % 2 === 0 ? "#ffffff" : "#f8fafc";
        var cCvr = c.clicks > 0 ? (c.leads / c.clicks * 100).toFixed(2) + "%" : "0.00%";
        tableHtml.push(
            '<tr style="background:' + rowBg + ';border-bottom:1px solid #e2e8f0;">' +
            '<td style="padding:10px;font-weight:bold;color:#1e293b;">' + c.name + '</td>' +
            '<td style="padding:10px;color:#64748b;">' + c.type + '</td>' +
            '<td style="padding:10px;text-align:center;font-weight:bold;">' + c.clicks + '</td>' +
            '<td style="padding:10px;text-align:center;font-weight:bold;color:#f59e0b;">' + c.leads + '</td>' +
            '<td style="padding:10px;text-align:center;font-weight:bold;color:#10b981;">' + cCvr + '</td>' +
            '</tr>'
        );
    });
    tableHtml.push('</table>');

    var emailHtml = [
        '<!DOCTYPE html><html><body style="font-family:\'Segoe UI\',Arial,sans-serif;background:#f1f5f9;padding:25px;">',
        '<div style="max-width:650px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">',
        '<div style="background:#003380;padding:25px;color:#ffffff;text-align:center;">',
        '<h2 style="margin:0;font-size:20px;">ISI Ad Performance Intelligence Report</h2>',
        '<p style="margin:6px 0 0 0;color:#93c5fd;font-size:13px;">Executive Multi-Channel Attribution Digest</p>',
        '</div>',
        '<div style="padding:25px;">',
        '<div style="display:flex;gap:10px;margin-bottom:20px;">',
        '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px;flex:1;text-align:center;">',
        '<div style="color:#1e40af;font-size:11px;font-weight:bold;">TOTAL PAID CLICKS</div>',
        '<div style="color:#1e3a8a;font-size:20px;font-weight:bold;margin-top:4px;">' + totalClicks + '</div>',
        '</div>',
        '<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;flex:1;text-align:center;">',
        '<div style="color:#b45309;font-size:11px;font-weight:bold;">TOTAL PAID LEADS</div>',
        '<div style="color:#78350f;font-size:20px;font-weight:bold;margin-top:4px;">' + totalLeads + '</div>',
        '</div>',
        '<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:12px;flex:1;text-align:center;">',
        '<div style="color:#047857;font-size:11px;font-weight:bold;">BLENDED CVR</div>',
        '<div style="color:#064e3b;font-size:20px;font-weight:bold;margin-top:4px;">' + cvr + '</div>',
        '</div>',
        '</div>',
        '<h3 style="color:#0f172a;font-size:14px;margin-bottom:8px;">Channel Performance Breakdown</h3>',
        tableHtml.join(''),
        '<div style="text-align:center;margin-top:25px;">',
        '<a href="https://docs.google.com/spreadsheets/d/' + DATA_SHEET_ID + '" style="background:#003380;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold;font-size:13px;display:inline-block;">Open Google Sheet Analytics</a>',
        '</div>',
        '</div>',
        '</div></body></html>'
    ].join('');

    recipients.forEach(function(em) {
        try {
            MailApp.sendEmail(em, "[ISI Ad Intelligence] Multi-Channel Performance Report", "", {
                htmlBody: emailHtml,
                name: "ISI Ad Performance Intelligence"
            });
        } catch(err) {
            console.error("Error sending to " + em + ": " + err.toString());
        }
    });

    if (ui) ui.alert("✅ ISI Ad Performance Intelligence report sent to:\n" + recipients.join("\n"));
}

function BUILD_AD_PERFORMANCE_ONLY() {
    var db = SpreadsheetApp.openById(DATA_SHEET_ID);
    var tSheet = db.getSheetByName("Traffic_Analytics") || db.getSheetByName("TrafficAnalytics");
    var tData = (tSheet && tSheet.getLastRow() > 0) ? filterLocalhostData(tSheet.getDataRange().getValues()) : [];
    buildAdPerformanceIntelligenceSheet(tData, db);
    var ui = SpreadsheetApp.getUi();
    if (ui) ui.alert("✅ 'Ad_Intelligence' Tab Updated Successfully!");
}

/**
 * Renames all raw data tabs in Sheet 1 (Data Collection Sheet) to the database underscore format.
 */
function RENAME_ALL_RAW_DATA_SHEETS_TO_DATABASE_FORMAT() {
    var ui = SpreadsheetApp.getUi();
    var db;
    try {
        db = SpreadsheetApp.openById(DATA_SHEET_ID);
    } catch(e) {
        if (ui) ui.alert("❌ Error opening Sheet 1: " + e.toString());
        return;
    }

    var MAPPING = {
        "ContactForm": "Contact_Form",
        "PartnerApps": "Partner_Applications",
        "CareerApps": "Career_Applications",
        "CareerApplications": "Career_Applications",
        "EbookDownloads": "Ebook_Downloads",
        "ConsultationReqs": "Consultation_Requests",
        "ChatbotLeads": "Chatbot_Leads",
        "SalesInquiries": "Sales_Inquiries",
        "AcademyInquiries": "Academy_Inquiries",
        "TenderRFQ": "Tender_RFQ",
        "AdCampaign": "Google_Ad_Leads",
        "AdCampaignLeads": "Google_Ad_Leads",
        "GoogleAdLeads": "Google_Ad_Leads",
        "NewsletterSubs": "Newsletter_Subscriptions",
        "ExitIntentFeedback": "Exit_Intent_Feedback",
        "TrafficAnalytics": "Traffic_Analytics",
        "EngagementMetrics": "Engagement_Metrics",
        "BehaviorMetrics": "Behavior_Metrics",
        "UserBehaviorLibrary": "User_Behavior_Library"
    };

    var sheets = db.getSheets();
    var renamedCount = 0;
    var logList = [];

    sheets.forEach(function(sheet) {
        var oldName = sheet.getName().trim();
        var newName = MAPPING[oldName];
        if (!newName) {
            var norm = oldName.toLowerCase().replace(/[\s\-_]/g, '');
            if (norm === "contactform") newName = "Contact_Form";
            else if (norm === "partnerapps" || norm === "partnerapplications") newName = "Partner_Applications";
            else if (norm === "careerapps" || norm === "careerapplications") newName = "Career_Applications";
            else if (norm === "ebookdownloads") newName = "Ebook_Downloads";
            else if (norm === "consultationreqs") newName = "Consultation_Requests";
            else if (norm === "chatbotleads") newName = "Chatbot_Leads";
            else if (norm === "salesinquiries") newName = "Sales_Inquiries";
            else if (norm === "academyinquiries") newName = "Academy_Inquiries";
            else if (norm === "tenderrfq") newName = "Tender_RFQ";
            else if (norm === "adcampaign" || norm === "adcampaignleads" || norm === "googleadleads") newName = "Google_Ad_Leads";
            else if (norm === "newslettersubs" || norm === "newslettersubscriptions") newName = "Newsletter_Subscriptions";
            else if (norm === "exitintentfeedback") newName = "Exit_Intent_Feedback";
            else if (norm === "trafficanalytics") newName = "Traffic_Analytics";
            else if (norm === "engagementmetrics") newName = "Engagement_Metrics";
            else if (norm === "behaviormetrics") newName = "Behavior_Metrics";
            else if (norm === "userbehaviorlibrary") newName = "User_Behavior_Library";
        }

        if (newName && newName !== oldName) {
            var existingTarget = db.getSheetByName(newName);
            if (!existingTarget) {
                sheet.setName(newName);
                renamedCount++;
                logList.push("✔ Renamed: '" + oldName + "' ➔ '" + newName + "'");
            } else {
                logList.push("⚠ Skipped: '" + newName + "' already exists in Sheet 1.");
            }
        }
    });

    var summary = "🎉 Renamed " + renamedCount + " raw data tab(s) in Sheet 1 to Database Format!\n\n" + (logList.join("\n") || "All tabs in Sheet 1 are already in database format.");
    console.log(summary);
    if (ui) ui.alert("✅ Sheet 1 Migration Complete", summary, ui.ButtonSet.OK);
}

/**
 * Renames all existing dashboard tabs in Sheet 2 (current sheet) from emoji/legacy names to clean SQL database underscore format.
 */
function RENAME_ALL_EXISTING_DASHBOARD_TABS_TO_DATABASE_FORMAT() {
    var ui = SpreadsheetApp.getUi();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return;

    var DASHBOARD_MAPPING = {
        "🛰️ Mission Control": "Mission_Control",
        "Mission Control": "Mission_Control",
        "🚦 Executive KPIs": "Executive_KPIs",
        "Executive KPIs": "Executive_KPIs",
        "🎯 Ad Intelligence": "Ad_Intelligence",
        "Ad Intelligence": "Ad_Intelligence",
        "🗺️ Geo Map": "Geo_Map_Profile",
        "Geo Map": "Geo_Map_Profile",
        "📏 Pareto (80-20)": "Pareto_80_20",
        "Pareto (80-20)": "Pareto_80_20",
        "🕒 Daily Heatmap": "Daily_Heatmap",
        "Daily Heatmap": "Daily_Heatmap",
        "📈 Growth & Momentum": "Growth_Momentum",
        "Growth & Momentum": "Growth_Momentum",
        "👥 Visitor Ratio": "Visitor_Ratio",
        "Visitor Ratio": "Visitor_Ratio",
        "📱 Tech Profile": "Tech_Profile",
        "Tech Profile": "Tech_Profile",
        "🔗 Identity Linker": "Identity_Linker",
        "Identity Linker": "Identity_Linker",
        "📊 Std Deviation": "Std_Deviation",
        "Std Deviation": "Std_Deviation",
        "🌊 Sankey Flow": "Sankey_Flow",
        "Sankey Flow": "Sankey_Flow",
        "🤖 Broken Link QA": "Broken_Link_QA",
        "Broken Link QA": "Broken_Link_QA",
        "🔀 Co-Occurrence": "Co_Occurrence_Matrix",
        "Co-Occurrence": "Co_Occurrence_Matrix",
        "🔻 Funnel Drops": "Funnel_Drop_Off",
        "Funnel Drops": "Funnel_Drop_Off",
        "🎯 Lead Scoring": "Lead_Scoring_Engine",
        "Lead Scoring": "Lead_Scoring_Engine"
    };

    var sheets = ss.getSheets();
    var renamedCount = 0;
    var logList = [];

    sheets.forEach(function(sheet) {
        var oldName = sheet.getName().trim();
        var newName = DASHBOARD_MAPPING[oldName];

        if (newName && newName !== oldName) {
            var existingTarget = ss.getSheetByName(newName);
            if (!existingTarget) {
                sheet.setName(newName);
                renamedCount++;
                logList.push("✔ Renamed: '" + oldName + "' ➔ '" + newName + "'");
            } else {
                logList.push("⚠ Skipped: '" + newName + "' already exists in Sheet 2.");
            }
        }
    });

    var summary = "🎉 Renamed " + renamedCount + " dashboard tab(s) in Sheet 2 to Database Format!\n\n" + (logList.join("\n") || "All tabs in Sheet 2 are already in database format.");
    console.log(summary);
    if (ui) ui.alert("✅ Sheet 2 Migration Complete", summary, ui.ButtonSet.OK);
}

function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('🚀 ISI ANALYTICS')
        .addItem('🔄 Refresh All 16 Dashboards', 'PULL_DATA_AND_BUILD_ALL_DASHBOARDS')
        .addItem('🏷️ Rename Sheet 2 Dashboard Tabs to Database Format (_)', 'RENAME_ALL_EXISTING_DASHBOARD_TABS_TO_DATABASE_FORMAT')
        .addItem('🏷️ Rename Sheet 1 Raw Data Tabs to Database Format (_)', 'RENAME_ALL_RAW_DATA_SHEETS_TO_DATABASE_FORMAT')
        .addItem('🎯 Build Ad Performance Intelligence', 'BUILD_AD_PERFORMANCE_ONLY')
        .addItem('📧 Send Ad Performance Mailer', 'SEND_ISI_AD_PERFORMANCE_MAILER')
        .addItem('🧹 Remove Duplicate Triggers', 'REMOVE_ALL_TRIGGERS')
        .addToUi();
}
