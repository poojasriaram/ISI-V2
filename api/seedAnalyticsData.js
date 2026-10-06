import { getDatabase } from './analyticsDb.js';

export function seedBaselineDataIfEmpty() {
  const db = getDatabase();
  const sessionCount = db.prepare('SELECT COUNT(*) as count FROM visitor_sessions').all()[0].count;

  if (sessionCount > 0) {
    return; // Already has data
  }

  console.log('[Analytics Seed] Seeding initial baseline analytics data for ISI Security (past 30 days)...');

  const now = Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;

  const CITIES_AND_REGIONS = [
    { country: 'India', region: 'Tamil Nadu', city: 'Chennai', isp: 'Bharti Airtel Ltd.', asn: 'AS45609 Airtel', org: 'Airtel Broadband', weight: 35 },
    { country: 'India', region: 'Tamil Nadu', city: 'Coimbatore', isp: 'ACT Fibernet', asn: 'AS24309 Atria Convergence', org: 'ACT Digital', weight: 10 },
    { country: 'India', region: 'Karnataka', city: 'Bengaluru', isp: 'Jio Infocomm Ltd.', asn: 'AS55836 Reliance Jio', org: 'Jio 5G Network', weight: 20 },
    { country: 'India', region: 'Maharashtra', city: 'Mumbai', isp: 'Tata Tele-Business', asn: 'AS4755 TATA Comm', org: 'Tata Tele Business', weight: 12 },
    { country: 'India', region: 'Delhi', city: 'New Delhi', isp: 'Bharti Airtel Ltd.', asn: 'AS45609 Airtel', org: 'Airtel Enterprise', weight: 8 },
    { country: 'India', region: 'Telangana', city: 'Hyderabad', isp: 'ACT Fibernet', asn: 'AS24309 Atria Convergence', org: 'ACT Fibernet Corporate', weight: 7 },
    { country: 'United Arab Emirates', region: 'Dubai', city: 'Dubai', isp: 'Etisalat', asn: 'AS5384 Emirates Telecom', org: 'Emirates Integrated', weight: 4 },
    { country: 'Singapore', region: 'Central Region', city: 'Singapore', isp: 'Singtel', asn: 'AS7473 Singtel', org: 'Singtel Fiber', weight: 2 },
    { country: 'United States', region: 'California', city: 'San Jose', isp: 'Comcast Cable', asn: 'AS7922 Comcast', org: 'Comcast Business', weight: 2 }
  ];

  const CHANNELS = [
    { source: 'google', medium: 'cpc', campaign: 'chennai_commercial_security', channel: 'Paid Campaign', weight: 22 },
    { source: 'google', medium: 'organic', campaign: null, channel: 'Organic Search', weight: 30 },
    { source: 'direct', medium: 'none', campaign: null, channel: 'Direct', weight: 20 },
    { source: 'linkedin', medium: 'social', campaign: 'facility_management_cxo', channel: 'Social Media', weight: 12 },
    { source: 'whatsapp', medium: 'messaging', campaign: null, channel: 'Social Media', weight: 6 },
    { source: 'securitytoday.in', medium: 'referral', campaign: null, channel: 'Referral', weight: 6 },
    { source: 'newsletter_sep26', medium: 'email', campaign: 'campus_safety_advisory', channel: 'Email', weight: 4 }
  ];

  const SERVICE_PAGES = [
    { path: '/services/security', title: 'Manned Guarding & Corporate Security | ISI Security' },
    { path: '/services/integrated-facility-management', title: 'Integrated Facility Management | ISI Security' },
    { path: '/lp/facility-management', title: 'Enterprise Facility Management Solutions | ISI' },
    { path: '/campussafety', title: 'Campus & Institutional Safety | ISI Security' },
    { path: '/schoolsafety', title: 'K-12 School Security & Child Safety | ISI Security' },
    { path: '/cashlogistics', title: 'Cash & Valuables Logistics | ISI Security' },
    { path: '/commandcenter', title: '24/7 Command & Control Center Operations | ISI Security' },
    { path: '/solutions', title: 'Integrated Security Solutions | ISI Security' }
  ];

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

  const insertSecStmt = db.prepare(`
    INSERT INTO security_events (
      ip_address, event_type, severity, details, timestamp_utc, blocked
    ) VALUES (?, ?, ?, ?, ?, ?)
  `);

  // Helper function for weighted random choice
  function pickWeighted(items) {
    const total = items.reduce((acc, it) => acc + it.weight, 0);
    let rand = Math.random() * total;
    for (const item of items) {
      if (rand < item.weight) return item;
      rand -= item.weight;
    }
    return items[0];
  }

  // Generate ~140 sessions distributed over the last 30 days
  const totalSessionsToGenerate = 140;

  for (let s = 0; s < totalSessionsToGenerate; s++) {
    // Random day in past 30 days, weighted towards recent days
    const dayOffset = Math.floor(Math.pow(Math.random(), 0.7) * 30);
    // Hour of day: business hours (9am to 7pm IST) have higher likelihood
    let hour = Math.floor(Math.random() * 24);
    if (Math.random() > 0.3) {
      hour = 9 + Math.floor(Math.random() * 10); // 9am - 7pm IST
    }
    const minute = Math.floor(Math.random() * 60);

    const sessionStartTime = new Date(now - (dayOffset * DAY_MS) + (hour * 3600 * 1000) + (minute * 60 * 1000));
    const sessionId = `isi_sess_${s + 1}_${sessionStartTime.getTime()}`;
    const visitorId = `isi_vis_${Math.floor(s * 0.7) + 1}`; // Some returning visitors
    const isReturning = Math.random() < 0.28 ? 1 : 0;

    const geo = pickWeighted(CITIES_AND_REGIONS);
    const traffic = pickWeighted(CHANNELS);
    const device = Math.random() > 0.45 ? 'desktop' : (Math.random() > 0.1 ? 'mobile' : 'tablet');
    const browser = Math.random() > 0.3 ? 'Chrome' : (Math.random() > 0.5 ? 'Safari' : 'Firefox');
    const os = device === 'mobile' ? (Math.random() > 0.3 ? 'Android' : 'iOS') : (Math.random() > 0.2 ? 'Windows' : 'macOS');
    const ip = `49.207.${(s * 3) % 250 + 1}.${(s * 7) % 250 + 1}`;

    const isBounce = Math.random() < 0.35 ? 1 : 0;
    const isConverted = !isBounce && Math.random() < 0.18 ? 1 : 0;

    let leadNumber = null;
    let leadType = null;
    if (isConverted) {
      leadNumber = `ISI-2026-${String(1000 + s).padStart(5, '0')}`;
      leadType = Math.random() > 0.4 ? 'Sales' : 'Career';
    }

    // Determine journey pages
    const pages = [];
    const entryPage = Math.random() > 0.4 ? '/' : pickWeighted(SERVICE_PAGES).path;
    pages.push(entryPage);

    if (!isBounce) {
      // Visit 1-3 service pages
      const extraCount = Math.floor(Math.random() * 3) + 1;
      for (let p = 0; p < extraCount; p++) {
        const nextService = pickWeighted(SERVICE_PAGES).path;
        if (!pages.includes(nextService)) pages.push(nextService);
      }
      if (isConverted || Math.random() < 0.4) {
        pages.push(Math.random() > 0.3 ? '/contact' : '/lp/facility-management');
      }
    }

    const exitPage = pages[pages.length - 1];
    const durationSeconds = isBounce ? Math.floor(Math.random() * 12) + 2 : Math.floor(Math.random() * 320) + 45;
    const sessionEndTime = new Date(sessionStartTime.getTime() + (durationSeconds * 1000));

    // Record session_start event
    const startIso = sessionStartTime.toISOString();
    const istStr = sessionStartTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

    insertEventStmt.run(
      sessionId, visitorId, 'session_start', entryPage, 'ISI Security | Leading Security & Facilities',
      traffic.source === 'direct' ? null : `https://${traffic.source}.com`, traffic.source,
      traffic.source, traffic.medium, traffic.campaign,
      traffic.channel, device, browser, os,
      ip, geo.country, geo.region, geo.city, geo.isp, geo.asn, geo.org,
      0, 0, 0, 'Asia/Kolkata', geo.country === 'India' ? 'Asia/Kolkata' : 'UTC',
      0, startIso, istStr, JSON.stringify({ isInitial: true, baseline: true })
    );

    // Record page views
    let stepTime = sessionStartTime.getTime();
    for (let p = 0; p < pages.length; p++) {
      const pagePath = pages[p];
      const pageObj = SERVICE_PAGES.find(sp => sp.path === pagePath) || { path: pagePath, title: 'ISI Security' };
      const pageViewTime = new Date(stepTime);
      const isService = pagePath.startsWith('/services') || pagePath.startsWith('/verticals') || pagePath.startsWith('/lp');
      const isContact = pagePath.includes('contact');

      insertEventStmt.run(
        sessionId, visitorId, isService ? 'service_page_view' : (isContact ? 'contact_page_view' : 'page_view'),
        pagePath, pageObj.title,
        p === 0 ? (traffic.source === 'direct' ? '' : `https://${traffic.source}.com`) : pages[p - 1],
        traffic.source, traffic.source, traffic.medium, traffic.campaign,
        traffic.channel, device, browser, os,
        ip, geo.country, geo.region, geo.city, geo.isp, geo.asn, geo.org,
        0, 0, 0, 'Asia/Kolkata', 'Asia/Kolkata',
        Math.floor(durationSeconds / pages.length), pageViewTime.toISOString(), pageViewTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        JSON.stringify({ step: p + 1, totalSteps: pages.length, baseline: true })
      );

      stepTime += (durationSeconds * 1000) / pages.length;
    }

    // If converted, record form start, submit, and inquiry success
    if (isConverted) {
      const formTime = new Date(sessionStartTime.getTime() + (durationSeconds * 800));
      insertEventStmt.run(
        sessionId, visitorId, 'contact_form_start', exitPage, 'Contact / Inquiry | ISI Security',
        '', '', traffic.source, traffic.medium, traffic.campaign,
        traffic.channel, device, browser, os,
        ip, geo.country, geo.region, geo.city, geo.isp, geo.asn, geo.org,
        0, 0, 0, 'Asia/Kolkata', 'Asia/Kolkata',
        0, formTime.toISOString(), formTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        JSON.stringify({ formName: 'Main_Inquiry_Form', baseline: true })
      );

      const submitTime = new Date(sessionStartTime.getTime() + (durationSeconds * 950));
      insertEventStmt.run(
        sessionId, visitorId, 'contact_form_submit', exitPage, 'Contact / Inquiry | ISI Security',
        '', '', traffic.source, traffic.medium, traffic.campaign,
        traffic.channel, device, browser, os,
        ip, geo.country, geo.region, geo.city, geo.isp, geo.asn, geo.org,
        0, 0, 0, 'Asia/Kolkata', 'Asia/Kolkata',
        0, submitTime.toISOString(), submitTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        JSON.stringify({ leadNumber, leadType, baseline: true })
      );

      insertEventStmt.run(
        sessionId, visitorId, 'inquiry_success', exitPage, 'Confirmation | ISI Security',
        '', '', traffic.source, traffic.medium, traffic.campaign,
        traffic.channel, device, browser, os,
        ip, geo.country, geo.region, geo.city, geo.isp, geo.asn, geo.org,
        0, 0, 0, 'Asia/Kolkata', 'Asia/Kolkata',
        0, submitTime.toISOString(), submitTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        JSON.stringify({ leadNumber, leadType, baseline: true })
      );
    }

    // Insert session record
    insertSessionStmt.run(
      sessionId, visitorId, startIso, sessionEndTime.toISOString(),
      durationSeconds, pages.length, entryPage, exitPage,
      traffic.source, traffic.channel, traffic.campaign || 'none',
      device, browser, geo.country, geo.region, geo.city,
      isReturning, isBounce, isConverted, leadNumber, leadType,
      sessionEndTime.toISOString()
    );
  }

  // Seed sample security events
  insertSecStmt.run('185.220.101.5', 'RATE_LIMIT_EXCEEDED', 'WARNING', 'Aggressive request velocity: 145 requests in 60s from known Tor exit relay', new Date(now - (2 * DAY_MS)).toISOString(), 0);
  insertSecStmt.run('45.154.255.88', 'BOT_PROBE_DETECTED', 'INFO', 'Unidentified automated crawler attempting admin path brute-forcing', new Date(now - (5 * DAY_MS)).toISOString(), 1);
  insertSecStmt.run('193.106.191.12', 'SUSPICIOUS_PAYLOAD', 'HIGH', 'Malicious characters detected in form parameter probe', new Date(now - (11 * DAY_MS)).toISOString(), 1);
  insertSecStmt.run('103.21.244.0', 'RATE_LIMIT_EXCEEDED', 'WARNING', 'Excessive concurrent sessions from single ASN: AS13335 Cloudflare', new Date(now - (18 * DAY_MS)).toISOString(), 0);

  console.log('[Analytics Seed] Completed baseline seeding of 140 sessions and security telemetry.');
}
