// src/services/analyticsService.ts
import { getUtmParams, captureUtmParams } from '../utils/utm';

export type AnalyticsEventType =
  | 'page_view'
  | 'session_start'
  | 'session_end'
  | 'service_page_view'
  | 'contact_page_view'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'inquiry_success'
  | 'phone_link_click'
  | 'email_link_click'
  | 'outbound_link_click';

export interface AnalyticsEventPayload {
  sessionId?: string;
  visitorId?: string;
  eventType: AnalyticsEventType;
  pagePath?: string;
  pageTitle?: string;
  referrer?: string;
  referrerHost?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  deviceType?: string;
  browserName?: string;
  osName?: string;
  browserTimezone?: string;
  durationSeconds?: number;
  timestampUtc?: string;
  isReturning?: boolean;
  metadata?: Record<string, any>;
}

class AnalyticsService {
  private sessionId: string;
  private visitorId: string;
  private isReturning: boolean;
  private eventQueue: AnalyticsEventPayload[] = [];
  private flushTimer: any = null;
  private recentEvents: Set<string> = new Set();
  private sessionStartTime: number = Date.now();
  private lastActivityTime: number = Date.now();
  private isInitialized: boolean = false;
  private pageViewsCount: number = 0;
  private hasConverted: boolean = false;
  private leadNumber: string = '';
  private leadType: string = '';
  private entryPage: string = typeof window !== 'undefined' ? window.location.pathname : '/';

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    const { visitorId, isReturning } = this.getOrCreateVisitorId();
    this.visitorId = visitorId;
    this.isReturning = isReturning;

    if (typeof window !== 'undefined') {
      this.initLifecycleListeners();
    }
  }

  private getOrCreateSessionId(): string {
    if (typeof window === 'undefined') return 'server_session';
    try {
      let id = sessionStorage.getItem('isi_session_id');
      if (!id) {
        id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        sessionStorage.setItem('isi_session_id', id);
      }
      return id;
    } catch {
      return `sess_${Date.now()}`;
    }
  }

  private getOrCreateVisitorId(): { visitorId: string; isReturning: boolean } {
    if (typeof window === 'undefined') return { visitorId: 'server_visitor', isReturning: false };
    try {
      let id = localStorage.getItem('isi_visitor_id');
      let isReturning = true;
      if (!id) {
        id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `vis_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        localStorage.setItem('isi_visitor_id', id);
        isReturning = false;
      }
      return { visitorId: id, isReturning };
    } catch {
      return { visitorId: `vis_${Date.now()}`, isReturning: false };
    }
  }

  private initLifecycleListeners() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    captureUtmParams();

    // Send session_start if newly created
    if (!sessionStorage.getItem('isi_session_start_sent')) {
      sessionStorage.setItem('isi_session_start_sent', 'true');
      this.track('session_start', {
        pagePath: window.location.pathname,
        pageTitle: document.title,
        metadata: { initialLanding: true }
      });
    }

    // Global listener for outbound links, tel, mailto
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        this.track('phone_link_click', {
          metadata: { phoneNumber: href.replace('tel:', ''), linkText: (target.innerText || '').trim().slice(0, 50) }
        });
      } else if (href.startsWith('mailto:')) {
        this.track('email_link_click', {
          metadata: { emailAddress: href.replace('mailto:', ''), linkText: (target.innerText || '').trim().slice(0, 50) }
        });
      } else if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        this.track('outbound_link_click', {
          metadata: { destinationUrl: href, linkText: (target.innerText || '').trim().slice(0, 50) }
        });
      }
    }, { passive: true });

    // Page hide / unload listener for session_end and queue flush
    const handleUnload = () => {
      const sessionDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
      this.trackImmediate('session_end', {
        pagePath: window.location.pathname,
        durationSeconds: sessionDuration
      });
      this.flushQueue(true);
    };

    window.addEventListener('pagehide', handleUnload);
    window.addEventListener('beforeunload', handleUnload);

    // Track user active duration
    const updateActivity = () => {
      this.lastActivityTime = Date.now();
    };
    window.addEventListener('mousemove', updateActivity, { passive: true });
    window.addEventListener('keydown', updateActivity, { passive: true });
  }

  /**
   * Queue and track an event
   */
  public track(eventType: AnalyticsEventType, extra: Partial<AnalyticsEventPayload> = {}) {
    if (typeof window === 'undefined') return;

    // Check user privacy consent
    try {
      const consent = localStorage.getItem('isi_analytics_consent');
      if (consent === 'declined') return; // Respect visitor opt-out
    } catch { /* ignore */ }

    // De-duplication check: prevent identical events within 4 seconds
    const dedupeKey = `${eventType}:${extra.pagePath || window.location.pathname}:${JSON.stringify(extra.metadata || {})}`;
    if (this.recentEvents.has(dedupeKey)) {
      return;
    }
    this.recentEvents.add(dedupeKey);
    setTimeout(() => this.recentEvents.delete(dedupeKey), 4000);

    const utm = getUtmParams();
    const event: AnalyticsEventPayload = {
      sessionId: this.sessionId,
      visitorId: this.visitorId,
      eventType,
      pagePath: extra.pagePath || window.location.pathname,
      pageTitle: extra.pageTitle || document.title,
      referrer: document.referrer || '',
      referrerHost: document.referrer ? (() => { try { return new URL(document.referrer).hostname; } catch { return ''; } })() : '',
      utmSource: utm.utmSource || '',
      utmMedium: utm.utmMedium || '',
      utmCampaign: utm.utmCampaign || '',
      utmTerm: utm.utmTerm || '',
      utmContent: utm.utmContent || '',
      deviceType: this.getDeviceType(),
      browserName: this.getBrowserName(),
      osName: this.getOsName(),
      browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      durationSeconds: extra.durationSeconds || Math.round((Date.now() - this.sessionStartTime) / 1000),
      timestampUtc: new Date().toISOString(),
      isReturning: this.isReturning,
      metadata: extra.metadata || {}
    };

    if (eventType === 'page_view' || eventType === 'service_page_view' || eventType === 'contact_page_view') {
      this.pageViewsCount++;
    }
    if (eventType === 'contact_form_submit' || eventType === 'inquiry_success') {
      this.hasConverted = true;
      if (extra.metadata?.leadNumber) this.leadNumber = String(extra.metadata.leadNumber);
      if (extra.metadata?.leadType) this.leadType = String(extra.metadata.leadType);
    }

    this.eventQueue.push(event);

    // If conversion or high priority, flush immediately; otherwise schedule flush
    if (eventType === 'contact_form_submit' || eventType === 'inquiry_success' || eventType === 'session_end') {
      this.flushQueue(false);
    } else {
      this.scheduleFlush();
    }
  }

  /**
   * Track immediate synchronous event (for unloads)
   */
  public trackImmediate(eventType: AnalyticsEventType, extra: Partial<AnalyticsEventPayload> = {}) {
    const utm = getUtmParams();
    const event: AnalyticsEventPayload = {
      sessionId: this.sessionId,
      visitorId: this.visitorId,
      eventType,
      pagePath: extra.pagePath || window.location.pathname,
      pageTitle: extra.pageTitle || document.title,
      referrer: document.referrer || '',
      utmSource: utm.utmSource || '',
      utmMedium: utm.utmMedium || '',
      utmCampaign: utm.utmCampaign || '',
      deviceType: this.getDeviceType(),
      browserName: this.getBrowserName(),
      osName: this.getOsName(),
      browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      durationSeconds: extra.durationSeconds || Math.round((Date.now() - this.sessionStartTime) / 1000),
      timestampUtc: new Date().toISOString(),
      isReturning: this.isReturning,
      metadata: extra.metadata || {}
    };
    if (eventType === 'page_view') this.pageViewsCount++;
    if (eventType === 'contact_form_submit' || eventType === 'inquiry_success') this.hasConverted = true;
    this.eventQueue.push(event);
  }

  private scheduleFlush() {
    if (this.flushTimer) return;
    this.flushTimer = setTimeout(() => {
      this.flushTimer = null;
      this.flushQueue(false);
    }, 2500);
  }

  public flushQueue(isBeacon = false) {
    if (this.eventQueue.length === 0) return;
    const batch = [...this.eventQueue];
    this.eventQueue = [];

    const endpoint = '/api/analytics/events';
    const payload = JSON.stringify({ events: batch });

    // 1. Send to Local SQLite API
    if (isBeacon && navigator.sendBeacon) {
      try {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(endpoint, blob);
      } catch { /* fallback to fetch */ }
    } else {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: isBeacon
      }).catch(() => {
        // Re-queue on failure (if not unloading)
        if (!isBeacon) {
          this.eventQueue.unshift(...batch);
        }
      });
    }

    // 2. Mirror Session to Google Sheets Web App (Apps Script)
    this.forwardToGoogleSheets(batch, isBeacon);
  }

  /**
   * Mirror session state directly to Google Sheet 1 via Apps Script Webhook
   */
  private forwardToGoogleSheets(batch: AnalyticsEventPayload[], isBeacon = false) {
    const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;
    if (!sheetsUrl || sheetsUrl.includes('YOUR_GOOGLE_SHEETS_WEB_APP_URL')) return;

    try {
      const utm = getUtmParams();
      const currentDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
      const isBounce = this.pageViewsCount <= 1;

      const sessionPayload = {
        sheetName: 'Session_Intelligence',
        sessionId: this.sessionId,
        visitorId: this.visitorId,
        startedUtc: new Date(this.sessionStartTime).toISOString(),
        endedUtc: new Date().toISOString(),
        durationSeconds: currentDuration,
        pageViews: Math.max(1, this.pageViewsCount),
        entryPage: this.entryPage,
        exitPage: typeof window !== 'undefined' ? window.location.pathname : '/',
        trafficSource: utm.utmSource || (typeof document !== 'undefined' && document.referrer ? (new URL(document.referrer, window.location.origin).hostname || 'Direct') : 'Direct'),
        trafficChannel: utm.utmMedium === 'cpc' ? 'Paid Search' : (utm.utmMedium ? 'Campaign' : (typeof document !== 'undefined' && document.referrer ? 'Referral' : 'Direct')),
        campaign: utm.utmCampaign || '',
        deviceType: this.getDeviceType(),
        browserName: this.getBrowserName(),
        osName: this.getOsName(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        isReturning: this.isReturning,
        isBounce: isBounce ? '1' : '0',
        isConverted: this.hasConverted ? '1' : '0',
        leadNumber: this.leadNumber,
        leadType: this.leadType,
        timestamp: new Date().toISOString()
      };

      const serialized = JSON.stringify(sessionPayload);
      if (isBeacon && navigator.sendBeacon) {
        try {
          const blob = new Blob([serialized], { type: 'text/plain;charset=utf-8' });
          navigator.sendBeacon(sheetsUrl, blob);
        } catch { /* fallback */ }
      } else {
        fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: serialized,
          keepalive: isBeacon
        }).catch(() => { /* silent */ });
      }
    } catch {
      // Non-blocking fail-safe
    }
  }

  private getDeviceType(): string {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle/i.test(ua)) return 'mobile';
    return 'desktop';
  }

  private getBrowserName(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    return 'Other';
  }

  private getOsName(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('Linux')) return 'Linux';
    if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
    return 'Other';
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getVisitorId(): string {
    return this.visitorId;
  }
}

export const analytics = new AnalyticsService();
