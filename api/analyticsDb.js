import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure data folder exists
const DATA_DIR = path.resolve(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, 'isi_analytics.db');

let dbInstance = null;

export function getDatabase() {
  if (dbInstance) return dbInstance;

  try {
    dbInstance = new DatabaseSync(DB_PATH);
    // Enable WAL mode for high concurrency
    dbInstance.exec('PRAGMA journal_mode = WAL;');
    dbInstance.exec('PRAGMA synchronous = NORMAL;');
  } catch (err) {
    console.warn('[Analytics DB] Falling back to in-memory database:', err.message);
    dbInstance = new DatabaseSync(':memory:');
  }

  initSchema(dbInstance);
  return dbInstance;
}

function initSchema(db) {
  // 1. Events Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      visitor_id TEXT NOT NULL,
      event_type TEXT NOT NULL,
      page_path TEXT NOT NULL,
      page_title TEXT,
      referrer TEXT,
      referrer_host TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      utm_term TEXT,
      utm_content TEXT,
      traffic_channel TEXT,
      device_type TEXT,
      browser_name TEXT,
      os_name TEXT,
      ip_address TEXT,
      country TEXT,
      region TEXT,
      city TEXT,
      isp TEXT,
      asn TEXT,
      org TEXT,
      is_hosting INTEGER DEFAULT 0,
      is_vpn_proxy INTEGER DEFAULT 0,
      is_bot INTEGER DEFAULT 0,
      browser_timezone TEXT,
      estimated_timezone TEXT,
      duration_seconds INTEGER DEFAULT 0,
      timestamp_utc TEXT NOT NULL,
      timestamp_ist TEXT NOT NULL,
      metadata TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_events_session ON analytics_events(session_id);
    CREATE INDEX IF NOT EXISTS idx_events_visitor ON analytics_events(visitor_id);
    CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events(event_type);
    CREATE INDEX IF NOT EXISTS idx_events_time_utc ON analytics_events(timestamp_utc);
    CREATE INDEX IF NOT EXISTS idx_events_geo ON analytics_events(country, region);
    CREATE INDEX IF NOT EXISTS idx_events_channel ON analytics_events(traffic_channel);
    CREATE INDEX IF NOT EXISTS idx_events_ip ON analytics_events(ip_address);
  `);

  // 2. Visitor Sessions Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS visitor_sessions (
      session_id TEXT PRIMARY KEY,
      visitor_id TEXT NOT NULL,
      started_at_utc TEXT NOT NULL,
      ended_at_utc TEXT,
      duration_seconds INTEGER DEFAULT 0,
      page_views INTEGER DEFAULT 1,
      entry_page TEXT,
      exit_page TEXT,
      traffic_source TEXT,
      traffic_channel TEXT,
      utm_campaign TEXT,
      device_type TEXT,
      browser_name TEXT,
      country TEXT,
      region TEXT,
      city TEXT,
      is_returning INTEGER DEFAULT 0,
      is_bounce INTEGER DEFAULT 1,
      is_converted INTEGER DEFAULT 0,
      lead_number TEXT,
      lead_type TEXT,
      last_activity_utc TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_sessions_visitor ON visitor_sessions(visitor_id);
    CREATE INDEX IF NOT EXISTS idx_sessions_started ON visitor_sessions(started_at_utc);
    CREATE INDEX IF NOT EXISTS idx_sessions_channel ON visitor_sessions(traffic_channel);
    CREATE INDEX IF NOT EXISTS idx_sessions_geo ON visitor_sessions(country, region);
  `);

  // 3. Security Events Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS security_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip_address TEXT NOT NULL,
      event_type TEXT NOT NULL,
      severity TEXT NOT NULL,
      details TEXT,
      timestamp_utc TEXT NOT NULL,
      blocked INTEGER DEFAULT 0
    );

    CREATE INDEX IF NOT EXISTS idx_sec_time ON security_events(timestamp_utc);
    CREATE INDEX IF NOT EXISTS idx_sec_ip ON security_events(ip_address);
  `);

  // 4. IP Geolocation Cache Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS ip_cache (
      ip_address TEXT PRIMARY KEY,
      country TEXT,
      region TEXT,
      city TEXT,
      isp TEXT,
      asn TEXT,
      org TEXT,
      is_hosting INTEGER DEFAULT 0,
      is_vpn_proxy INTEGER DEFAULT 0,
      timezone TEXT,
      cached_at TEXT NOT NULL
    );
  `);

  // 5. Admin Users Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      role TEXT NOT NULL,
      created_at TEXT NOT NULL,
      last_login TEXT
    );
  `);

  // 6. Analytics Consent Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS analytics_consent (
      visitor_id TEXT PRIMARY KEY,
      consent_status TEXT NOT NULL,
      analytics_allowed INTEGER DEFAULT 1,
      marketing_allowed INTEGER DEFAULT 0,
      updated_at TEXT NOT NULL
    );
  `);

  // Seed default admin user if none exists
  seedDefaultAdmin(db);
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function seedDefaultAdmin(db) {
  const existing = db.prepare('SELECT id FROM admin_users WHERE username = ?').all('isi_admin');
  if (existing.length === 0) {
    const salt = crypto.randomBytes(16).toString('hex');
    const defaultPass = process.env.ADMIN_PASSWORD || 'isisecurity@2026';
    const hash = hashPassword(defaultPass, salt);
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO admin_users (username, password_hash, salt, role, created_at)
      VALUES (?, ?, ?, 'admin', ?)
    `).run('isi_admin', hash, salt, now);

    // Also add an analyst role account
    const analystSalt = crypto.randomBytes(16).toString('hex');
    const analystHash = hashPassword('analyst@isi2026', analystSalt);
    db.prepare(`
      INSERT INTO admin_users (username, password_hash, salt, role, created_at)
      VALUES (?, ?, ?, 'analyst', ?)
    `).run('isi_analyst', analystHash, analystSalt, now);

    console.log('[Analytics DB] Initialized default admin and analyst accounts');
  }
}

export function verifyAdminCredentials(username, password) {
  const db = getDatabase();
  const rows = db.prepare('SELECT * FROM admin_users WHERE username = ?').all(username);
  if (!rows || rows.length === 0) return null;

  const user = rows[0];
  const testHash = hashPassword(password, user.salt);
  if (crypto.timingSafeEqual(Buffer.from(testHash), Buffer.from(user.password_hash))) {
    // Update last login
    db.prepare('UPDATE admin_users SET last_login = ? WHERE id = ?').run(new Date().toISOString(), user.id);
    return { id: user.id, username: user.username, role: user.role };
  }
  return null;
}
