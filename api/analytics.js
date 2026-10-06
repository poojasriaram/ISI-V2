import { getDatabase, verifyAdminCredentials } from './analyticsDb.js';
import {
  extractClientIp,
  analyzeUserAgent,
  checkRateLimit,
  resolveNetworkIntelligence
} from './networkIntelligence.js';
import { seedBaselineDataIfEmpty } from './seedAnalyticsData.js';
import crypto from 'crypto';

// Active Session Tokens Store (In-memory token cache with TTL)
const ACTIVE_TOKENS = new Map();
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

// Failed login attempts tracker for brute-force prevention
const FAILED_LOGINS = new Map();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_PERIOD_MS = 15 * 60 * 1000; // 15 minutes lockout

// Ensure baseline data is present on server startup
try {
  seedBaselineDataIfEmpty();
} catch (err) {
  console.warn('[Analytics API] Baseline seed note:', err.message);
}

/**
 * Authentication Middleware Helper
 */
function authenticateAdmin(req) {
  const headers = req.headers || {};
  const authHeader = headers.authorization || headers.Authorization || '';
  if (!authHeader.startsWith('Bearer ')) return null;

  const token = authHeader.substring(7).trim();
  const session = ACTIVE_TOKENS.get(token);

  if (!session) return null;
  if (Date.now() - session.createdAt > TOKEN_TTL_MS) {
    ACTIVE_TOKENS.delete(token);
    return null;
  }

  return session.user;
}

/**
 * Normalizes Traffic Channel based on source, medium, referrer
 */
function categorizeChannel(source = '', medium = '', referrer = '') {
  const s = (source || '').toLowerCase();
  const m = (medium || '').toLowerCase();
  const r = (referrer || '').toLowerCase();

  if (m === 'cpc' || m === 'ppc' || m === 'paid' || m === 'adwords' || s.includes('ad')) return 'Paid Campaign';
  if (s.includes('google') || s.includes('bing') || s.includes('yahoo') || s.includes('duckduckgo') || m === 'organic' || r.includes('google.') || r.includes('bing.')) {
    if (m === 'cpc') return 'Paid Campaign';
    return 'Organic Search';
  }
  if (s.includes('linkedin') || s.includes('whatsapp') || s.includes('facebook') || s.includes('twitter') || s.includes('instagram') || s.includes('youtube') || m === 'social') return 'Social Media';
  if (m === 'email' || s.includes('newsletter') || s.includes('mail')) return 'Email';
  if (!s || s === 'direct' || (!r && !s)) return 'Direct';
  return 'Referral';
}

/**
 * Main Request Handler for /api/analytics
 */
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const url = req.url || '';
  const pathname = url.split('?')[0];

  try {
    // 1. Post Analytics Events (Public tracking endpoint)
    if (pathname.endsWith('/events') && req.method === 'POST') {
      return await handleRecordEvents(req, res);
    }

    // 2. Admin Auth: Login
    if (pathname.endsWith('/auth/login') && req.method === 'POST') {
      return await handleAdminLogin(req, res);
    }

    // 3. Admin Auth: Verify
    if (pathname.endsWith('/auth/verify') && req.method === 'GET') {
      const user = authenticateAdmin(req);
      if (!user) {
        return res.status(401).json({ success: false, authenticated: false, error: 'Unauthorized' });
      }
      return res.status(200).json({ success: true, authenticated: true, user });
    }

    // 4. Analytics Stats & Modules Query (Protected)
    if (pathname.endsWith('/stats') && req.method === 'GET') {
      const user = authenticateAdmin(req);
      if (!user) {
        return res.status(401).json({ success: false, error: 'Unauthorized. Admin session required.' });
      }
      return await handleGetStats(req, res, user);
    }

    // 5. Export Reports CSV (Protected)
    if (pathname.endsWith('/export') && req.method === 'GET') {
      const user = authenticateAdmin(req);
      if (!user) {
        return res.status(401).json({ success: false, error: 'Unauthorized. Admin session required.' });
      }
      return await handleExportCSV(req, res);
    }

    // 6. User Privacy Consent Preference (Public)
    if (pathname.endsWith('/consent') && req.method === 'POST') {
      return await handleSaveConsent(req, res);
    }

    // 7. Seed Demo Baseline Data (Protected or Dev)
    if (pathname.endsWith('/seed') && req.method === 'POST') {
      seedBaselineDataIfEmpty();
      return res.status(200).json({ success: true, message: 'Baseline analytics data checked/seeded.' });
    }

    // Default 404
    return res.status(404).json({ success: false, error: `Endpoint not found: ${pathname}` });
  } catch (err) {
    console.error('[Analytics API Handler Error]', err);
    return res.status(500).json({ success: false, error: 'Internal Server Error', message: err.message });
  }
}

/**
 * Handle incoming events from frontend client
 */
async function handleRecordEvents(req, res) {
  const ip = extractClientIp(req);
  const userAgent = req.headers['user-agent'] || '';

  // Sliding window rate limit check
  const rateResult = checkRateLimit(ip, userAgent);
  if (!rateResult.allowed) {
    return res.status(429).json({ success: false, error: 'Rate limit exceeded' });
  }

  const { isBot } = analyzeUserAgent(userAgent);
  const geoInfo = await resolveNetworkIntelligence(ip);

  let rawEvents = [];
  if (Array.isArray(req.body)) {
    rawEvents = req.body;
  } else if (req.body && Array.isArray(req.body.events)) {
    rawEvents = req.body.events;
  } else if (req.body && typeof req.body === 'object') {
    rawEvents = [req.body];
  }

  if (rawEvents.length === 0) {
    return res.status(400).json({ success: false, error: 'No events provided' });
  }

  const db = getDatabase();
  const insertEventStmt = db.prepare(`
    INSERT INTO analytics_events (
      session_id, visitor_id, event_type, page_path, page_title,
      referrer, referrer_host, utm_source, utm_medium, utm_campaign,
      traffic_channel, device_type, browser_name, os_name,
      ip_address, country, region, city, isp, asn, org,
      is_hosting, is_vpn_proxy, is_bot, browser_timezone, estimated_timezone,
      duration_seconds, timestamp_utc, timestamp_ist, metadata
    ) VALUES (
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?
    )
  `);

  const selectSessionStmt = db.prepare('SELECT * FROM visitor_sessions WHERE session_id = ?');
  const insertSessionStmt = db.prepare(`
    INSERT INTO visitor_sessions (
      session_id, visitor_id, started_at_utc, ended_at_utc,
      duration_seconds, page_views, entry_page, exit_page,
      traffic_source, traffic_channel, utm_campaign,
      device_type, browser_name, country, region, city,
      is_returning, is_bounce, is_converted, lead_number, lead_type,
      last_activity_utc
    ) VALUES (
      ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?
    )
  `);

  const updateSessionStmt = db.prepare(`
    UPDATE visitor_sessions SET
      page_views = page_views + ?,
      exit_page = ?,
      duration_seconds = ?,
      is_bounce = ?,
      is_converted = CASE WHEN ? = 1 THEN 1 ELSE is_converted END,
      lead_number = COALESCE(?, lead_number),
      lead_type = COALESCE(?, lead_type),
      ended_at_utc = ?,
      last_activity_utc = ?
    WHERE session_id = ?
  `);

  let processedCount = 0;

  for (const item of rawEvents) {
    if (!item.sessionId || !item.eventType) continue;

    const sessionId = String(item.sessionId).slice(0, 100);
    const visitorId = String(item.visitorId || sessionId).slice(0, 100);
    const eventType = String(item.eventType).slice(0, 50);
    const pagePath = String(item.pagePath || '/').slice(0, 200);
    const pageTitle = String(item.pageTitle || 'ISI Security').slice(0, 200);
    const referrer = String(item.referrer || '').slice(0, 300);
    const referrerHost = String(item.referrerHost || '').slice(0, 100);

    const utmSource = String(item.utmSource || '').slice(0, 100);
    const utmMedium = String(item.utmMedium || '').slice(0, 100);
    const utmCampaign = String(item.utmCampaign || '').slice(0, 100);
    const utmTerm = String(item.utmTerm || '').slice(0, 100);
    const utmContent = String(item.utmContent || '').slice(0, 100);

    const trafficChannel = categorizeChannel(utmSource, utmMedium, referrer);
    const deviceType = String(item.deviceType || 'desktop').slice(0, 30);
    const browserName = String(item.browserName || 'Browser').slice(0, 50);
    const osName = String(item.osName || 'OS').slice(0, 50);

    const browserTimezone = String(item.browserTimezone || 'Asia/Kolkata').slice(0, 60);
    const durationSeconds = Number(item.durationSeconds || 0);

    const now = new Date();
    const timestampUtc = item.timestampUtc ? new Date(item.timestampUtc).toISOString() : now.toISOString();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + istOffset);
    const timestampIst = istDate.toISOString().replace('T', ' ').slice(0, 19) + ' IST';

    // Sanitize metadata: strictly exclude sensitive form field values or passwords
    const safeMetadata = { ...(item.metadata || {}) };
    delete safeMetadata.password;
    delete safeMetadata.token;
    delete safeMetadata.creditCard;

    insertEventStmt.run(
      sessionId, visitorId, eventType, pagePath, pageTitle,
      referrer, referrerHost, utmSource, utmMedium, utmCampaign,
      trafficChannel, deviceType, browserName, osName,
      ip, geoInfo.country, geoInfo.region, geoInfo.city, geoInfo.isp, geoInfo.asn, geoInfo.org,
      geoInfo.is_hosting, geoInfo.is_vpn_proxy, isBot ? 1 : 0,
      browserTimezone, geoInfo.timezone,
      durationSeconds, timestampUtc, timestampIst,
      JSON.stringify(safeMetadata)
    );

    // Upsert Session
    const existingSession = selectSessionStmt.all(sessionId)[0];
    const isLeadConversion = eventType === 'contact_form_submit' || eventType === 'inquiry_success';
    const leadNumber = safeMetadata.leadNumber || null;
    const leadType = safeMetadata.leadType || null;

    if (!existingSession) {
      insertSessionStmt.run(
        sessionId, visitorId, timestampUtc, timestampUtc,
        durationSeconds, 1, pagePath, pagePath,
        utmSource || 'direct', trafficChannel, utmCampaign || 'none',
        deviceType, browserName, geoInfo.country, geoInfo.region, geoInfo.city,
        item.isReturning ? 1 : 0, 1, isLeadConversion ? 1 : 0, leadNumber, leadType,
        timestampUtc
      );
    } else {
      const isPageView = eventType === 'page_view' || eventType === 'service_page_view' || eventType === 'contact_page_view';
      const pageViewsIncrement = isPageView ? 1 : 0;
      const totalPageViews = existingSession.page_views + pageViewsIncrement;
      const newDuration = Math.max(existingSession.duration_seconds, durationSeconds);
      const isBounce = (totalPageViews <= 1 && newDuration < 15) ? 1 : 0;

      updateSessionStmt.run(
        pageViewsIncrement, pagePath, newDuration, isBounce,
        isLeadConversion ? 1 : 0, leadNumber, leadType,
        timestampUtc, timestampUtc, sessionId
      );
    }

    processedCount++;
  }

  return res.status(200).json({ success: true, processed: processedCount });
}

/**
 * Handle Admin Authentication
 */
async function handleAdminLogin(req, res) {
  const { username, password } = req.body || {};
  const ip = extractClientIp(req);

  // Check lockout
  const failRecord = FAILED_LOGINS.get(ip);
  if (failRecord && failRecord.count >= MAX_FAILED_ATTEMPTS && Date.now() - failRecord.lastAttempt < LOCKOUT_PERIOD_MS) {
    const remainingMins = Math.ceil((LOCKOUT_PERIOD_MS - (Date.now() - failRecord.lastAttempt)) / 60000);
    return res.status(429).json({
      success: false,
      error: `Too many failed login attempts. Temporarily locked for ${remainingMins} minutes.`
    });
  }

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Username and password required.' });
  }

  const user = verifyAdminCredentials(username, password);
  if (!user) {
    const curFails = (failRecord?.count || 0) + 1;
    FAILED_LOGINS.set(ip, { count: curFails, lastAttempt: Date.now() });

    // Record Security Event for unauthorized attempt
    try {
      const db = getDatabase();
      db.prepare(`
        INSERT INTO security_events (ip_address, event_type, severity, details, timestamp_utc, blocked)
        VALUES (?, 'UNAUTHORIZED_ADMIN_ACCESS', 'WARNING', ?, ?, 0)
      `).run(ip, `Failed login attempt for user: ${username}`, new Date().toISOString());
    } catch { /* ignore */ }

    return res.status(401).json({ success: false, error: 'Invalid administrator credentials.' });
  }

  // Clear fail counter on success
  FAILED_LOGINS.delete(ip);

  // Generate secure session token
  const token = crypto.randomBytes(32).toString('hex');
  ACTIVE_TOKENS.set(token, {
    user: { id: user.id, username: user.username, role: user.role },
    createdAt: Date.now()
  });

  return res.status(200).json({
    success: true,
    token,
    user: {
      username: user.username,
      role: user.role
    }
  });
}

/**
 * Handle Querying Statistics for the 5 Modules
 */
async function handleGetStats(req, res, user) {
  const db = getDatabase();
  const { searchParams } = new URL(req.url, 'http://localhost');

  const timeRange = searchParams.get('timeRange') || '30d';
  const customStart = searchParams.get('startDate');
  const customEnd = searchParams.get('endDate');
  const countryFilter = searchParams.get('country');
  const regionFilter = searchParams.get('region');
  const channelFilter = searchParams.get('channel');
  const reportingTz = searchParams.get('timezone') || 'Asia/Kolkata';

  // Calculate Start Date
  const now = new Date();
  let startDate = new Date();

  if (customStart && customEnd) {
    startDate = new Date(customStart);
  } else if (timeRange === 'today') {
    startDate.setHours(0, 0, 0, 0);
  } else if (timeRange === '7d') {
    startDate.setDate(now.getDate() - 7);
  } else if (timeRange === '30d') {
    startDate.setDate(now.getDate() - 30);
  } else if (timeRange === '90d') {
    startDate.setDate(now.getDate() - 90);
  } else {
    startDate.setDate(now.getDate() - 30);
  }

  const startIso = startDate.toISOString();
  const endIso = customEnd ? new Date(customEnd).toISOString() : now.toISOString();

  // Active Sessions (sessions with activity in last 15 minutes)
  const fifteenMinsAgoIso = new Date(now.getTime() - 15 * 60 * 1000).toISOString();
  const activeSessions = db.prepare(`
    SELECT COUNT(*) as count FROM visitor_sessions
    WHERE last_activity_utc >= ?
  `).all(fifteenMinsAgoIso)[0].count;

  // Build Filter SQL clause for sessions
  const conditions = ['started_at_utc >= ?', 'started_at_utc <= ?'];
  const params = [startIso, endIso];

  if (countryFilter) {
    conditions.push('country = ?');
    params.push(countryFilter);
  }
  if (regionFilter) {
    conditions.push('region = ?');
    params.push(regionFilter);
  }
  if (channelFilter) {
    conditions.push('traffic_channel = ?');
    params.push(channelFilter);
  }

  const whereClause = 'WHERE ' + conditions.join(' AND ');

  // 1. Executive KPIs
  const kpiRow = db.prepare(`
    SELECT
      COUNT(DISTINCT visitor_id) as total_visitors,
      COUNT(session_id) as total_sessions,
      AVG(duration_seconds) as avg_duration,
      SUM(CASE WHEN is_bounce = 1 THEN 1 ELSE 0 END) as bounce_count,
      SUM(CASE WHEN is_converted = 1 THEN 1 ELSE 0 END) as inquiry_count
    FROM visitor_sessions
    ${whereClause}
  `).all(...params)[0];

  const totalSessions = kpiRow.total_sessions || 0;
  const totalVisitors = kpiRow.total_visitors || 0;
  const avgDuration = Math.round(kpiRow.avg_duration || 0);
  const bounceRate = totalSessions > 0 ? Number(((kpiRow.bounce_count / totalSessions) * 100).toFixed(1)) : 0;
  const totalInquiries = kpiRow.inquiry_count || 0;
  const conversionRate = totalSessions > 0 ? Number(((totalInquiries / totalSessions) * 100).toFixed(1)) : 0;

  // Traffic Trends over time (Grouped by date)
  const trafficTrends = db.prepare(`
    SELECT
      SUBSTR(started_at_utc, 1, 10) as date,
      COUNT(session_id) as sessions,
      COUNT(DISTINCT visitor_id) as visitors,
      SUM(is_converted) as inquiries
    FROM visitor_sessions
    ${whereClause}
    GROUP BY SUBSTR(started_at_utc, 1, 10)
    ORDER BY date ASC
  `).all(...params);

  // Top Pages
  const topPages = db.prepare(`
    SELECT
      page_path,
      COUNT(*) as views,
      AVG(duration_seconds) as avg_dwell
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ? AND (event_type = 'page_view' OR event_type = 'service_page_view' OR event_type = 'contact_page_view')
    GROUP BY page_path
    ORDER BY views DESC
    LIMIT 10
  `).all(startIso, endIso);

  // 2. Session Intelligence: Journey paths, Entry/Exit
  const entryPages = db.prepare(`
    SELECT entry_page, COUNT(*) as count
    FROM visitor_sessions
    ${whereClause}
    GROUP BY entry_page
    ORDER BY count DESC
    LIMIT 6
  `).all(...params);

  const exitPages = db.prepare(`
    SELECT exit_page, COUNT(*) as count
    FROM visitor_sessions
    ${whereClause}
    GROUP BY exit_page
    ORDER BY count DESC
    LIMIT 6
  `).all(...params);

  // Duration Buckets
  const durationBuckets = db.prepare(`
    SELECT
      SUM(CASE WHEN duration_seconds < 10 THEN 1 ELSE 0 END) as under_10s,
      SUM(CASE WHEN duration_seconds >= 10 AND duration_seconds < 30 THEN 1 ELSE 0 END) as s10_30,
      SUM(CASE WHEN duration_seconds >= 30 AND duration_seconds < 60 THEN 1 ELSE 0 END) as s30_60,
      SUM(CASE WHEN duration_seconds >= 60 AND duration_seconds < 180 THEN 1 ELSE 0 END) as m1_3,
      SUM(CASE WHEN duration_seconds >= 180 THEN 1 ELSE 0 END) as over_3m
    FROM visitor_sessions
    ${whereClause}
  `).all(...params)[0];

  // Returning vs New
  const returningCount = db.prepare(`
    SELECT SUM(is_returning) as returning_count FROM visitor_sessions ${whereClause}
  `).all(...params)[0].returning_count || 0;

  // Funnel progression
  const funnel = {
    serviceViews: db.prepare(`SELECT COUNT(*) as c FROM analytics_events WHERE timestamp_utc >= ? AND timestamp_utc <= ? AND event_type = 'service_page_view'`).all(startIso, endIso)[0].c,
    contactViews: db.prepare(`SELECT COUNT(*) as c FROM analytics_events WHERE timestamp_utc >= ? AND timestamp_utc <= ? AND event_type = 'contact_page_view'`).all(startIso, endIso)[0].c,
    formStarts: db.prepare(`SELECT COUNT(*) as c FROM analytics_events WHERE timestamp_utc >= ? AND timestamp_utc <= ? AND event_type = 'contact_form_start'`).all(startIso, endIso)[0].c,
    conversions: totalInquiries
  };

  // Recent Sessions list
  const recentSessions = db.prepare(`
    SELECT
      session_id, visitor_id, started_at_utc, duration_seconds, page_views,
      entry_page, exit_page, traffic_source, traffic_channel, country, region, city,
      is_bounce, is_converted, lead_number, lead_type
    FROM visitor_sessions
    ${whereClause}
    ORDER BY started_at_utc DESC
    LIMIT 25
  `).all(...params);

  // 3. Traffic Intelligence: Channels & UTM Campaigns
  const channelBreakdown = db.prepare(`
    SELECT
      COALESCE(traffic_channel, 'Direct') as name,
      COUNT(*) as sessions,
      SUM(is_converted) as inquiries,
      ROUND((COUNT(*) * 100.0 / ${Math.max(totalSessions, 1)}), 1) as percentage
    FROM visitor_sessions
    ${whereClause}
    GROUP BY traffic_channel
    ORDER BY sessions DESC
  `).all(...params);

  const campaignPerformance = db.prepare(`
    SELECT
      utm_campaign as campaign,
      traffic_source as source,
      traffic_channel as channel,
      COUNT(*) as clicks,
      SUM(is_converted) as conversions,
      ROUND(AVG(duration_seconds), 0) as avg_duration,
      ROUND((SUM(is_converted) * 100.0 / COUNT(*)), 1) as conversion_rate
    FROM visitor_sessions
    ${whereClause} AND utm_campaign IS NOT NULL AND utm_campaign != 'none'
    GROUP BY utm_campaign, traffic_source
    ORDER BY clicks DESC
    LIMIT 10
  `).all(...params);

  const referralDomains = db.prepare(`
    SELECT
      COALESCE(traffic_source, 'Direct') as domain,
      COUNT(*) as count
    FROM visitor_sessions
    ${whereClause} AND traffic_channel = 'Referral'
    GROUP BY traffic_source
    ORDER BY count DESC
    LIMIT 8
  `).all(...params);

  // 4. Geographic Intelligence: India States, Cities, Global
  const indianStates = db.prepare(`
    SELECT
      region as state,
      COUNT(*) as sessions,
      SUM(is_converted) as inquiries,
      ROUND((SUM(is_converted) * 100.0 / COUNT(*)), 1) as conversion_rate
    FROM visitor_sessions
    ${whereClause} AND country = 'India' AND region IS NOT NULL
    GROUP BY region
    ORDER BY sessions DESC
    LIMIT 12
  `).all(...params);

  const topCountries = db.prepare(`
    SELECT
      country,
      COUNT(*) as sessions,
      SUM(is_converted) as inquiries
    FROM visitor_sessions
    ${whereClause} AND country IS NOT NULL
    GROUP BY country
    ORDER BY sessions DESC
    LIMIT 8
  `).all(...params);

  const topCities = db.prepare(`
    SELECT
      city, region, country,
      COUNT(*) as sessions,
      SUM(is_converted) as inquiries
    FROM visitor_sessions
    ${whereClause} AND city IS NOT NULL
    GROUP BY city, region
    ORDER BY sessions DESC
    LIMIT 12
  `).all(...params);

  // Regional Service Preference (Manned Guarding vs Facility Management)
  const regionalServicePreferences = db.prepare(`
    SELECT
      e.region,
      SUM(CASE WHEN e.page_path LIKE '%security%' OR e.page_path LIKE '%manned%' THEN 1 ELSE 0 END) as security_views,
      SUM(CASE WHEN e.page_path LIKE '%facility%' OR e.page_path LIKE '%integrated%' THEN 1 ELSE 0 END) as fm_views
    FROM analytics_events e
    WHERE e.timestamp_utc >= ? AND e.timestamp_utc <= ? AND e.country = 'India' AND e.region IS NOT NULL
    GROUP BY e.region
    ORDER BY (security_views + fm_views) DESC
    LIMIT 6
  `).all(startIso, endIso);

  // 5. Time Zone Intelligence: Activity by Hour & 7x24 Heatmap
  // Query raw event UTC timestamps and compute hour in selected timezone
  const hourTzOffsetMinutes = getTzOffsetMinutes(reportingTz);

  const rawHourlyEvents = db.prepare(`
    SELECT timestamp_utc, is_converted
    FROM analytics_events e
    LEFT JOIN visitor_sessions s ON e.session_id = s.session_id
    WHERE e.timestamp_utc >= ? AND e.timestamp_utc <= ?
  `).all(startIso, endIso);

  const hoursArray = Array(24).fill(0).map((_, i) => ({
    hour: String(i).padStart(2, '0') + ':00',
    hourIndex: i,
    events: 0,
    inquiries: 0
  }));

  // Weekly 7x24 matrix (0: Sunday .. 6: Saturday)
  const heatmapMatrix = [];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let d = 0; d < 7; d++) {
    for (let h = 0; h < 24; h++) {
      heatmapMatrix.push({ day: daysOfWeek[d], dayIndex: d, hour: h, count: 0 });
    }
  }

  for (const row of rawHourlyEvents) {
    const utcDate = new Date(row.timestamp_utc);
    // Adjust by reporting timezone offset
    const adjustedDate = new Date(utcDate.getTime() + (hourTzOffsetMinutes * 60 * 1000));
    const h = adjustedDate.getUTCHours();
    const d = adjustedDate.getUTCDay();

    hoursArray[h].events++;
    if (row.is_converted) hoursArray[h].inquiries++;

    const matrixIdx = d * 24 + h;
    if (heatmapMatrix[matrixIdx]) {
      heatmapMatrix[matrixIdx].count++;
    }
  }

  // Peak Hours identification
  const sortedHours = [...hoursArray].sort((a, b) => b.events - a.events);
  const peakHours = sortedHours.slice(0, 3).map(p => p.hour);

  // Browser vs Estimated Timezone comparison
  const timezoneDistribution = db.prepare(`
    SELECT
      browser_timezone,
      estimated_timezone,
      COUNT(*) as count
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ? AND browser_timezone IS NOT NULL
    GROUP BY browser_timezone, estimated_timezone
    ORDER BY count DESC
    LIMIT 6
  `).all(startIso, endIso);

  // 6. IP & Network Intelligence
  const asnBreakdown = db.prepare(`
    SELECT
      COALESCE(asn, 'Unknown ASN') as asn,
      COALESCE(org, 'Commercial Network') as org,
      COUNT(*) as requests
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ?
    GROUP BY asn
    ORDER BY requests DESC
    LIMIT 8
  `).all(startIso, endIso);

  const orgBreakdown = db.prepare(`
    SELECT
      COALESCE(org, 'Standard Subscriber') as org,
      COUNT(*) as requests
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ?
    GROUP BY org
    ORDER BY requests DESC
    LIMIT 8
  `).all(startIso, endIso);

  const ispBreakdown = db.prepare(`
    SELECT
      COALESCE(isp, 'Telecom Provider') as isp,
      COUNT(*) as requests
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ?
    GROUP BY isp
    ORDER BY requests DESC
    LIMIT 8
  `).all(startIso, endIso);

  const infraStats = db.prepare(`
    SELECT
      SUM(CASE WHEN is_hosting = 1 THEN 1 ELSE 0 END) as hosting_traffic,
      SUM(CASE WHEN is_vpn_proxy = 1 THEN 1 ELSE 0 END) as vpn_proxy_traffic,
      SUM(CASE WHEN is_bot = 1 THEN 1 ELSE 0 END) as bot_traffic,
      COUNT(*) as total_events
    FROM analytics_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ?
  `).all(startIso, endIso)[0];

  const securityEvents = db.prepare(`
    SELECT id, ip_address, event_type, severity, details, timestamp_utc, blocked
    FROM security_events
    WHERE timestamp_utc >= ? AND timestamp_utc <= ?
    ORDER BY timestamp_utc DESC
    LIMIT 15
  `).all(startIso, endIso);

  // Return full aggregated payload
  return res.status(200).json({
    success: true,
    meta: {
      timeRange,
      reportingTimezone: reportingTz,
      startDate: startIso,
      endDate: endIso,
      userRole: user.role
    },
    executive: {
      totalVisitors,
      totalSessions,
      activeSessions,
      avgSessionDuration: avgDuration,
      bounceRate,
      totalInquiries,
      conversionRate,
      trafficTrends,
      topPages
    },
    sessions: {
      entryPages,
      exitPages,
      durationBuckets: {
        under10s: durationBuckets?.under_10s || 0,
        s10_30: durationBuckets?.s10_30 || 0,
        s30_60: durationBuckets?.s30_60 || 0,
        m1_3: durationBuckets?.m1_3 || 0,
        over3m: durationBuckets?.over_3m || 0
      },
      returningRate: totalSessions > 0 ? Number(((returningCount / totalSessions) * 100).toFixed(1)) : 0,
      funnel,
      recentSessions
    },
    traffic: {
      channelBreakdown,
      campaignPerformance,
      referralDomains
    },
    geo: {
      topCountries,
      indianStates,
      topCities,
      regionalServicePreferences
    },
    time: {
      hoursArray,
      heatmapMatrix,
      peakHours,
      timezoneDistribution
    },
    ip: {
      asnBreakdown,
      orgBreakdown,
      ispBreakdown,
      infraStats: {
        hosting: infraStats?.hosting_traffic || 0,
        vpnProxy: infraStats?.vpn_proxy_traffic || 0,
        bot: infraStats?.bot_traffic || 0,
        totalEvents: infraStats?.total_events || 0
      },
      securityEvents
    }
  });
}

/**
 * Handle CSV Export
 */
async function handleExportCSV(req, res) {
  const db = getDatabase();
  const rows = db.prepare(`
    SELECT
      session_id, visitor_id, started_at_utc, duration_seconds, page_views,
      entry_page, exit_page, traffic_source, traffic_channel, utm_campaign,
      country, region, city, is_bounce, is_converted, lead_number, lead_type
    FROM visitor_sessions
    ORDER BY started_at_utc DESC
    LIMIT 2000
  `).all();

  const headers = [
    'Session ID', 'Visitor ID', 'Timestamp (UTC)', 'Duration (s)', 'Pages',
    'Landing Page', 'Exit Page', 'Source', 'Channel', 'Campaign',
    'Country', 'Region / State', 'City', 'Bounce (0/1)', 'Converted (0/1)', 'Lead Number', 'Lead Type'
  ];

  let csvContent = headers.join(',') + '\n';
  for (const r of rows) {
    const values = [
      r.session_id,
      r.visitor_id,
      r.started_at_utc,
      r.duration_seconds,
      r.page_views,
      `"${(r.entry_page || '').replace(/"/g, '""')}"`,
      `"${(r.exit_page || '').replace(/"/g, '""')}"`,
      `"${(r.traffic_source || '').replace(/"/g, '""')}"`,
      r.traffic_channel,
      `"${(r.utm_campaign || '').replace(/"/g, '""')}"`,
      `"${(r.country || '').replace(/"/g, '""')}"`,
      `"${(r.region || '').replace(/"/g, '""')}"`,
      `"${(r.city || '').replace(/"/g, '""')}"`,
      r.is_bounce,
      r.is_converted,
      r.lead_number || 'N/A',
      r.lead_type || 'N/A'
    ];
    csvContent += values.join(',') + '\n';
  }

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="isi_intelligence_report_${Date.now()}.csv"`);
  return res.status(200).send(csvContent);
}

/**
 * Handle Privacy & Consent Preferences
 */
async function handleSaveConsent(req, res) {
  const { visitorId, status, analyticsAllowed, marketingAllowed } = req.body || {};
  if (!visitorId || !status) {
    return res.status(400).json({ success: false, error: 'visitorId and status required' });
  }

  const db = getDatabase();
  db.prepare(`
    INSERT OR REPLACE INTO analytics_consent (visitor_id, consent_status, analytics_allowed, marketing_allowed, updated_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(
    visitorId,
    status,
    analyticsAllowed ? 1 : 0,
    marketingAllowed ? 1 : 0,
    new Date().toISOString()
  );

  return res.status(200).json({ success: true, message: 'Consent preferences recorded.' });
}

/**
 * Helper to compute timezone offset in minutes relative to UTC
 */
function getTzOffsetMinutes(tzName) {
  switch (tzName) {
    case 'Asia/Kolkata':
      return 330; // +5h 30m
    case 'Asia/Dubai':
      return 240; // +4h
    case 'Asia/Singapore':
      return 480; // +8h
    case 'Europe/London':
      return 0; // +0h (GMT)
    case 'America/New_York':
      return -300; // -5h (EST)
    case 'UTC':
    default:
      return 0;
  }
}
