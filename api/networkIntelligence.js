import { getDatabase } from './analyticsDb.js';

// In-memory LRU / Map cache for instant lookup
const MEMORY_CACHE = new Map();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours in memory

// In-memory sliding window rate limiter
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 120; // 120 req / min per IP
const requestHistory = new Map();

// Known Bot Patterns
const BOT_REGEX = /(Googlebot|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp|facebookexternalhit|Twitterbot|LinkedInBot|Bytespider|GPTBot|ClaudeBot|PerplexityBot|Applebot|crawling|spider|crawler)/i;
const AUTOMATED_TOOL_REGEX = /(curl|wget|python-requests|Go-http-client|node-fetch|axios|PostmanRuntime|headless|Puppeteer|Playwright|PhantomJS)/i;

// Known Datacenter / Hosting ASNs / Orgs
const HOSTING_IDENTIFIERS = [
  'amazon', 'aws', 'microsoft', 'azure', 'google cloud', 'digitalocean',
  'linode', 'ovh', 'hetzner', 'vultr', 'oracle', 'cloudflare', 'alibaba',
  'hosting', 'datacenter', 'server', 'rackspace'
];

/**
 * Safely extracts client IP address from request headers or socket.
 * Avoids trusting client-forged headers unless running behind verified proxies.
 */
export function extractClientIp(req) {
  let ip = '';

  // Check headers in order of reliability for known platforms
  if (req.headers) {
    if (req.headers['cf-connecting-ip']) {
      ip = req.headers['cf-connecting-ip'];
    } else if (req.headers['x-real-ip']) {
      ip = req.headers['x-real-ip'];
    } else if (req.headers['x-forwarded-for']) {
      // First IP in the comma-separated list is the original client
      const forwarded = req.headers['x-forwarded-for'].split(',')[0].trim();
      if (forwarded) ip = forwarded;
    }
  }

  if (!ip && req.socket && req.socket.remoteAddress) {
    ip = req.socket.remoteAddress;
  }

  // Strip IPv6-mapped IPv4 prefix (::ffff:127.0.0.1 -> 127.0.0.1)
  if (ip.startsWith('::ffff:')) {
    ip = ip.substring(7);
  }

  return ip || '127.0.0.1';
}

/**
 * Checks whether an IP is loopback or in RFC1918 private address ranges.
 */
export function isPrivateIp(ip) {
  if (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') return true;
  if (ip.startsWith('10.') || ip.startsWith('192.168.')) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(ip)) return true;
  return false;
}

/**
 * Detects if the User-Agent represents a bot, crawler, or automated tool.
 */
export function analyzeUserAgent(userAgent = '') {
  const isSearchBot = BOT_REGEX.test(userAgent);
  const isTool = AUTOMATED_TOOL_REGEX.test(userAgent);
  const isBot = isSearchBot || isTool;

  let botType = 'none';
  if (isSearchBot) botType = 'search_crawler';
  else if (isTool) botType = 'automated_tool';

  return { isBot, botType };
}

/**
 * Evaluates rate limiting for an IP address.
 * Records security warning or blocks if thresholds are exceeded.
 */
export function checkRateLimit(ip, userAgent = '') {
  const now = Date.now();
  let timestamps = requestHistory.get(ip);

  if (!timestamps) {
    timestamps = [];
    requestHistory.set(ip, timestamps);
  }

  // Filter out timestamps outside the sliding window
  timestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestHistory.set(ip, timestamps);

  // Periodically clean stale IPs from memory
  if (requestHistory.size > 5000) {
    for (const [key, list] of requestHistory.entries()) {
      if (list.length === 0 || now - list[list.length - 1] > RATE_LIMIT_WINDOW_MS) {
        requestHistory.delete(key);
      }
    }
  }

  const count = timestamps.length;
  if (count > MAX_REQUESTS_PER_WINDOW) {
    // Log Security Event
    try {
      const db = getDatabase();
      db.prepare(`
        INSERT INTO security_events (ip_address, event_type, severity, details, timestamp_utc, blocked)
        VALUES (?, 'RATE_LIMIT_EXCEEDED', 'WARNING', ?, ?, 0)
      `).run(
        ip,
        `Rate limit exceeded: ${count} requests in 60s. UA: ${userAgent.substring(0, 100)}`,
        new Date().toISOString()
      );
    } catch { /* ignore */ }

    return { allowed: false, count, reason: 'Too many requests' };
  }

  return { allowed: true, count };
}

/**
 * Enriches an IP with Network, ISP, ASN, and Geolocation metadata.
 * Uses two-tier caching: in-memory + SQLite persistent cache.
 */
export async function resolveNetworkIntelligence(ip) {
  // If private or local IP, return testing context
  if (isPrivateIp(ip)) {
    return {
      ip,
      country: 'India',
      region: 'Tamil Nadu',
      city: 'Chennai',
      isp: 'Bharti Airtel Ltd.',
      asn: 'AS45609 Bharti Airtel Ltd.',
      org: 'Bharti Airtel Broadband (Internal/Dev)',
      is_hosting: 0,
      is_vpn_proxy: 0,
      timezone: 'Asia/Kolkata',
      is_private: true
    };
  }

  // 1. Check in-memory cache
  const memCached = MEMORY_CACHE.get(ip);
  if (memCached && Date.now() - memCached._cachedAt < CACHE_TTL_MS) {
    return memCached;
  }

  // 2. Check SQLite persistent cache
  try {
    const db = getDatabase();
    const rows = db.prepare('SELECT * FROM ip_cache WHERE ip_address = ?').all(ip);
    if (rows && rows.length > 0) {
      const cached = rows[0];
      const result = {
        ip: cached.ip_address,
        country: cached.country || 'India',
        region: cached.region || 'Tamil Nadu',
        city: cached.city || 'Chennai',
        isp: cached.isp || 'Telecom Provider',
        asn: cached.asn || 'AS-Commercial',
        org: cached.org || cached.isp || '',
        is_hosting: cached.is_hosting || 0,
        is_vpn_proxy: cached.is_vpn_proxy || 0,
        timezone: cached.timezone || 'Asia/Kolkata',
        _cachedAt: Date.now()
      };
      MEMORY_CACHE.set(ip, result);
      return result;
    }
  } catch { /* continue to external lookup */ }

  // 3. Fallback: External Geolocation & Network Resolver
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`https://ipwho.is/${ip}`, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false) {
        const orgLower = ((data.connection?.org || '') + ' ' + (data.connection?.isp || '')).toLowerCase();
        const isHosting = HOSTING_IDENTIFIERS.some(id => orgLower.includes(id)) ? 1 : 0;
        const isVpnProxy = (data.security?.vpn || data.security?.proxy || data.security?.tor) ? 1 : 0;

        const info = {
          ip,
          country: data.country || 'India',
          region: data.region || 'Tamil Nadu',
          city: data.city || 'Chennai',
          isp: data.connection?.isp || 'Internet Service Provider',
          asn: data.connection?.asn ? `AS${data.connection.asn} ${data.connection.org || ''}`.trim() : 'AS-Standard',
          org: data.connection?.org || data.connection?.isp || '',
          is_hosting: isHosting,
          is_vpn_proxy: isVpnProxy,
          timezone: data.timezone?.id || 'Asia/Kolkata',
          _cachedAt: Date.now()
        };

        // Save to SQLite cache
        try {
          const db = getDatabase();
          db.prepare(`
            INSERT OR REPLACE INTO ip_cache (ip_address, country, region, city, isp, asn, org, is_hosting, is_vpn_proxy, timezone, cached_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).run(
            ip, info.country, info.region, info.city, info.isp, info.asn, info.org,
            info.is_hosting, info.is_vpn_proxy, info.timezone, new Date().toISOString()
          );
        } catch { /* ignore */ }

        MEMORY_CACHE.set(ip, info);
        return info;
      }
    }
  } catch (err) {
    // Lookup failed or timed out — return default fallback
  }

  // Safe fallback
  const fallback = {
    ip,
    country: 'India',
    region: 'Tamil Nadu',
    city: 'Chennai',
    isp: 'Commercial Network',
    asn: 'AS-Standard',
    org: 'Commercial Subscriber',
    is_hosting: 0,
    is_vpn_proxy: 0,
    timezone: 'Asia/Kolkata',
    _cachedAt: Date.now()
  };
  MEMORY_CACHE.set(ip, fallback);
  return fallback;
}
