import { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    SheetName,
    TrafficAnalytics,
    EngagementMetrics,
    BehaviorMetrics,
    UserBehaviorLibrary,
    BaseTrackingData
} from '@/types/analytics';

const GOOGLE_SHEETS_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

// ─── IST Timestamp (Human-readable: "26-Feb-2026 07:43:11 IST") ───────────────
function getISTTimestamp(): string {
    const now = new Date();
    // IST = UTC + 5 hours 30 minutes
    const istOffset = 5.5 * 60 * 60 * 1000;
    const ist = new Date(now.getTime() + istOffset);
    const dd = String(ist.getUTCDate()).padStart(2, '0');
    const mon = ist.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const yyyy = ist.getUTCFullYear();
    const hh = String(ist.getUTCHours()).padStart(2, '0');
    const mm = String(ist.getUTCMinutes()).padStart(2, '0');
    const ss = String(ist.getUTCSeconds()).padStart(2, '0');
    return `${dd}-${mon}-${yyyy} ${hh}:${mm}:${ss} IST`;
}

// ─── IP Providers (fallback chain) ────────────────────────────────────────────
const IP_PROVIDERS = [
    async () => {
        const r = await fetch('https://ipapi.co/json/');
        const d = await r.json();
        if (!d.ip) throw new Error('no ip');
        return { ip: d.ip, city: d.city, region: d.region, country_name: d.country_name, org: d.org || d.asn };
    },
    async () => {
        const r = await fetch('https://ipwho.is/');
        const d = await r.json();
        if (!d.ip) throw new Error('no ip');
        return { ip: d.ip, city: d.city, region: d.region, country_name: d.country, org: d.connection?.org };
    },
    async () => {
        const r = await fetch('https://freeipapi.com/api/json');
        const d = await r.json();
        if (!d.ipAddress) throw new Error('no ip');
        return { ip: d.ipAddress, city: d.cityName, region: d.regionName, country_name: d.countryName, org: d.isp };
    }
];

async function fetchIpWithFallback(): Promise<any>   {
    // First, try cached data (but only if < 30 minutes old)
    const cached = localStorage.getItem('isi_ip_info');
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            const age = Date.now() - (parsed._fetchedAt || 0);
            if (parsed.ip && age < 30 * 60 * 1000) return parsed; // 30 min cache
        } catch { /* ignore */ }
    }

    // Try each provider in order
    for (const provider of IP_PROVIDERS) {
        try {
            const data = await provider();
            const withMeta = { ...data, _fetchedAt: Date.now() };
            localStorage.setItem('isi_ip_info', JSON.stringify(withMeta));
            return withMeta;
        } catch { /* try next */ }
    }

    // Last resort: use stale cache even if old
    if (cached) {
        try { return JSON.parse(cached); } catch { /* ignore */ }
    }
    return null;
}

export const useAnalytics = () => {
    const location = useLocation();

    // Variant Selection (A/B Testing)
    const [variant] = useState(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlVariant = urlParams.get('v') || urlParams.get('variant');
        if (urlVariant) {
            localStorage.setItem('isi_variant', urlVariant);
            return urlVariant;
        }
        return localStorage.getItem('isi_variant') || 'original';
    });

    const [sessionId] = useState(() => {
        const stored = sessionStorage.getItem('isi_session_id');
        if (stored) return stored;
        const newId = crypto.randomUUID();
        sessionStorage.setItem('isi_session_id', newId);
        return newId;
    });

    const [visitorId] = useState(() => {
        const stored = localStorage.getItem('isi_visitor_id');
        if (stored) return stored;
        const newId = crypto.randomUUID();
        localStorage.setItem('isi_visitor_id', newId);
        return newId;
    });

    const [ipInfo, setIpInfo] = useState<any>  (null);
    const ipInfoRef = useRef<any>  (null); // Keep a ref so closures always see latest value

    // ─── Queue: holds events that fired before IP was ready ──────────────────
    const pendingQueue = useRef<{ sheetName: SheetName; data: any }[]>([]);
    const ipReady = useRef(false);

    // Set tracks ALL pages sent this session — prevents duplicates even across re-renders
    const pageViewSent = useRef<Set<string>>(new Set());
    const navigationPath = useRef<{ path: string, timestamp: number }[]>([]);
    const formInteractions = useRef<{ [key: string]: { started: boolean, lastField: string, submitted: boolean } }>({});

    // Interaction Accumulators
    const counters = useRef({
        clicks: 0,
        switches: 0,
        mapInteractions: 0,
        officesExplored: 0,
        jobViews: 0,
        certViews: 0,
        slideSwipes: 0,
        whatsappClicks: 0,
        partnerInquiries: 0,
        careerInquiries: 0
    });

    // Interest Scoring (Visits per vertical)
    const interests = useRef({
        banking: 0,
        retail: 0,
        logistics: 0,
        schoolSafety: 0,
        campusSafety: 0,
        cashLogistics: 0,
        commandCenter: 0,
        services: 0,
        commercial: 0,
        residential: 0
    });

    // Behavioral Snapshots
    const sessionFlags = useRef({
        leadGenerated: false,
        ebookDownloaded: false,
        consultationRequested: false,
        exitIntentTriggered: false
    });

    // Scroll & Velocity Stats
    const scrollStats = useRef({
        maxDepth: 0,
        totalTravel: 0,
        lastPosition: 0,
        lastTime: Date.now(),
        velocities: [] as number[]
    });

    // Initial Source Attribution (UTM Persistence)
    useEffect(() => {
        const currentSource = getTrafficSource();
        const storedSource = localStorage.getItem('isi_initial_source');
        if (!storedSource || (currentSource !== 'Direct' && currentSource !== storedSource)) {
            localStorage.setItem('isi_initial_source', currentSource);
        }
    }, [location.search]);

    // ─── CORE FIX: Fetch IP info eagerly and flush queue when ready ──────────
    useEffect(() => {
        const initAnalytics = () => {
            fetchIpWithFallback().then((data) => {
                if (data) {
                    ipInfoRef.current = data;
                    setIpInfo(data);
                ipReady.current = true;

                // Flush all queued events now that IP is available
                if (pendingQueue.current.length > 0) {
                    const queue = [...pendingQueue.current];
                    pendingQueue.current = [];
                    queue.forEach(({ sheetName, data: eventData }) => {
                        // Inject IP data into queued events before sending
                        const enriched = {
                            ...eventData,
                            ipAddress: eventData.ipAddress || data.ip || '',
                            location: eventData.location || formatLocation(data) || '',
                            organization: eventData.organization || data.org || ''
                        };
                        fireToSheets(sheetName, enriched);
                    });
                }
            }
        });
        };
        setTimeout(() => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(initAnalytics);
            } else {
                initAnalytics();
            }
        }, 5000);
    }, []);

    // ─── Raw HTTP fire (no queue logic — only called when IP is ready or for flush) ─
    const fireToSheets = useCallback(async (sheetName: SheetName, data: any  ) => {
        // if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        //     console.log(`[Analytics Blocked on Localhost] Would have sent to ${sheetName}:`, data);
        //     return;
        // }

        if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes('YOUR_GOOGLE_SHEETS_WEB_APP_URL')) return;
        try {
            const sanitizedData = { ...data };
            for (const key in sanitizedData) {
                if (typeof sanitizedData[key] === 'string' && /^[+=\-@]/.test(sanitizedData[key])) {
                    sanitizedData[key] = `'${sanitizedData[key]}`;
                }
            }

            await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    sheetName,
                    ...sanitizedData,
                    variant,
                    timestamp: sanitizedData.timestamp || getISTTimestamp()
                }),
            });
        } catch { /* silent fail — analytics should never break the app */ }
    }, [variant]);

    // ─── Smart send: waits for IP or queues if not ready ─────────────────────
    const sendToGoogleSheets = useCallback(async (sheetName: SheetName, data: any  ) => {
        if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes('YOUR_GOOGLE_SHEETS_WEB_APP_URL')) return;

        const currentIp = ipInfoRef.current;

        if (!currentIp) {
            // IP not ready — queue the event, it will be flushed once IP loads
            pendingQueue.current.push({ sheetName, data });
            return;
        }

        // IP is ready — enrich with IP data if missing, then fire
        const enriched = {
            ...data,
            ipAddress: data.ipAddress || currentIp.ip || '',
            location: data.location || formatLocation(currentIp) || '',
            organization: data.organization || currentIp.org || ''
        };
        fireToSheets(sheetName, enriched);
    }, [fireToSheets]);

    const getBaseData = useCallback((): BaseTrackingData => {
        const currentIp = ipInfoRef.current || ipInfo;
        return {
            sessionId,
            visitorId,
            ipAddress: currentIp?.ip || '',
            location: currentIp ? formatLocation(currentIp) : '',
            organization: currentIp?.org || '',
            trafficSource: localStorage.getItem('isi_initial_source') || getTrafficSource(),
            deviceType: getDeviceType(),
            browserType: navigator.userAgent,
            timestamp: getISTTimestamp(),
            variant
        };
    }, [sessionId, visitorId, ipInfo, variant]);

    // Technical Error Tracking
    useEffect(() => {
        const handleError = (event: ErrorEvent) => {
            const errorData: BehaviorMetrics = {
                ...getBaseData(),
                pageUrl: window.location.href,
                category: 'Technical Error',
                metricName: 'JS Error',
                value: event.message,
                elementInfo: `${event.filename}:${event.lineno}`,
                metadata: { col: event.colno, stack: event.error?.stack }
            };
            sendToGoogleSheets('BehaviorMetrics', errorData);
        };

        const handleRejection = (event: PromiseRejectionEvent) => {
            const errorData: BehaviorMetrics = {
                ...getBaseData(),
                pageUrl: window.location.href,
                category: 'Technical Error',
                metricName: 'Unhandled Promise Rejection',
                value: String(event.reason),
                elementInfo: 'promise',
            };
            sendToGoogleSheets('BehaviorMetrics', errorData);
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleRejection);
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleRejection);
        };
    }, [getBaseData, sendToGoogleSheets]);

    // Tracking Vertical Interests based on path
    useEffect(() => {
        const path = location.pathname.toLowerCase();
        if (path.includes('banking')) interests.current.banking += 1;
        if (path.includes('retail')) interests.current.retail += 1;
        if (path.includes('logistics')) interests.current.logistics += 1;
        if (path.includes('school-safety')) interests.current.schoolSafety += 1;
        if (path.includes('campus-safety')) interests.current.campusSafety += 1;
        if (path.includes('cash-logistics')) interests.current.cashLogistics += 1;
        if (path.includes('command-center')) interests.current.commandCenter += 1;
        if (path.includes('services')) interests.current.services += 1;
        if (path.includes('commercial')) interests.current.commercial += 1;
        if (path.includes('residential')) interests.current.residential += 1;
    }, [location.pathname]);

    // ─── Track Page View — fires ONCE per unique page per session ────────────
    useEffect(() => {
        const pageKey = location.pathname + location.search;

        // Guard: already sent this exact page in this session → skip
        if (pageViewSent.current.has(pageKey)) return;
        pageViewSent.current.add(pageKey);

        // Add to navigation path only once
        navigationPath.current.push({ path: location.pathname, timestamp: Date.now() });

        // Build data inline using ref (not getBaseData callback)
        // Using ref avoids re-firing this effect when ipInfo state updates
        const ip = ipInfoRef.current;
        const data: TrafficAnalytics = {
            sessionId,
            visitorId,
            ipAddress: ip?.ip || '',
            location: ip ? formatLocation(ip) : '',
            organization: ip?.org || '',
            trafficSource: localStorage.getItem('isi_initial_source') || getTrafficSource(),
            deviceType: getDeviceType(),
            browserType: navigator.userAgent,
            timestamp: getISTTimestamp(),
            variant,
            pagePath: location.pathname,
            pageTitle: document.title,
            referrer: document.referrer || 'Direct',
        };

        sendToGoogleSheets('TrafficAnalytics', data);
         
    }, [location]); // ← ONLY re-fire when location changes, NOT when IP loads

    // --- Main Behavioral Collector ---
    useEffect(() => {
        const startTime = Date.now();
        const interactions: any[] = [];
        let totalActiveTime = 0;
        let lastActivityTimestamp = Date.now();

        const updateActivity = () => {
            if (document.visibilityState === 'visible') {
                const now = Date.now();
                totalActiveTime += (now - lastActivityTimestamp);
                lastActivityTimestamp = now;
            }
        };

        const handleClick = (e: MouseEvent) => {
            counters.current.clicks++;
            updateActivity();
            const target = e.target as HTMLElement;
            const nowTime = Date.now();

            const interaction = {
                type: 'click',
                target: target.tagName,
                text: (target.innerText || 'unnamed').substring(0, 30),
                timestamp: new Date().toISOString(), // Always ISO string
                x: e.clientX,
                y: e.clientY,
                timeMs: nowTime
            };
            interactions.push(interaction);

            // 😡 UX Friction: Rage Click Detection (3+ clicks within 50px radius in under 1 second)
            const recentClicks = interactions.filter(i => nowTime - i.timeMs < 1000);
            if (recentClicks.length >= 3) {
                const isRage = recentClicks.every(i => Math.abs(i.x - e.clientX) < 50 && Math.abs(i.y - e.clientY) < 50);
                if (isRage && recentClicks.length === 3) { // Only log once per burst
                    sendToGoogleSheets('BehaviorMetrics', {
                        ...getBaseData(),
                        pageUrl: window.location.href,
                        category: 'UX Friction',
                        metricName: 'Rage Click Burst',
                        value: '3+ clicks in 1sec',
                        elementInfo: target.tagName + '.' + (target.className || 'no-class'),
                    });
                }
            }

            // 😡 UX Friction: Dead Click Detection (Clicking non-actionable static elements repeatedly)
            const isClickable = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('select') || target.closest('textarea');
            if (!isClickable && recentClicks.length >= 2) {
                const isDead = recentClicks.every(i => Math.abs(i.x - e.clientX) < 50 && Math.abs(i.y - e.clientY) < 50);
                if (isDead && recentClicks.length === 2) { // Log on 2nd dead click
                    sendToGoogleSheets('BehaviorMetrics', {
                        ...getBaseData(),
                        pageUrl: window.location.href,
                        category: 'UX Friction',
                        metricName: 'Dead Click',
                        value: interaction.text,
                        elementInfo: target.tagName + '.' + (target.className || 'no-class'),
                    });
                }
            }

            // Industry Section Logic
            const text = interaction.text.toLowerCase();
            if (text.includes('whatsapp')) counters.current.whatsappClicks++;
            if (target.closest('.office-card')) counters.current.officesExplored++;
            if (target.closest('.job-card')) counters.current.jobViews++;
            if (target.closest('.cert-item')) counters.current.certViews++;

            // Native CTA Tracking
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                sendToGoogleSheets('BehaviorMetrics', {
                    ...getBaseData(),
                    pageUrl: window.location.href,
                    category: 'CTA Click',
                    metricName: target.tagName,
                    value: interaction.text,
                    elementInfo: target.className || 'no-class',
                });
            }
        };

        const handleScroll = () => {
            updateActivity();
            const now = Date.now();
            const pos = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (pos / docHeight) * 100 : 0;

            if (scrollPercent > scrollStats.current.maxDepth) {
                scrollStats.current.maxDepth = Math.round(scrollPercent);
            }

            const dist = Math.abs(pos - scrollStats.current.lastPosition);
            const time = now - scrollStats.current.lastTime;
            if (time > 0) {
                const v = dist / time;
                scrollStats.current.velocities.push(v);
                scrollStats.current.totalTravel += dist;
            }
            scrollStats.current.lastPosition = pos;
            scrollStats.current.lastTime = now;
        };

        const flushLibraryData = () => {
            updateActivity();
            const activeSeconds = Math.round(totalActiveTime / 1000);
            const avgScrollVel = scrollStats.current.velocities.length > 0
                ? scrollStats.current.velocities.reduce((a, b) => a + b, 0) / scrollStats.current.velocities.length
                : 0;

            const engScore = calculateEngagementScore(activeSeconds, scrollStats.current.maxDepth, counters.current.clicks);

            const libraryData: UserBehaviorLibrary = {
                ...getBaseData(),
                viewport: `${window.innerWidth}x${window.innerHeight}`,
                os: navigator.platform,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
                connectionType: (navigator as any).connection?.effectiveType || 'unknown',
                language: navigator.language,
                darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                pageDepth: navigationPath.current.length,
                activeTab: document.visibilityState === 'visible',
                sessionAge: Math.round((Date.now() - startTime) / 1000),
                initialSource: localStorage.getItem('isi_initial_source') || 'Direct',
                landingPage: navigationPath.current[0]?.path || '/',
                utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
                utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
                referrerHost: document.referrer ? (() => { try { return new URL(document.referrer).hostname; } catch { return document.referrer; } })() : 'None',
                searchEngine: getTrafficSource().includes('Search') ? getTrafficSource() : '',
                firstVisitDate: localStorage.getItem('isi_first_visit') || new Date().toISOString(),
                returningUser: !!localStorage.getItem('isi_first_visit'),
                cursorVelocity: calculateAverageVelocity(interactions),
                rageClicks: calculateRageClicks(interactions),
                scrollVelocity: Math.round(avgScrollVel * 100),
                maxScrollDepth: scrollStats.current.maxDepth,
                totalClickCount: counters.current.clicks,
                averageDwellTime: Math.round(activeSeconds / (navigationPath.current.length || 1)),
                totalActiveTime: activeSeconds,
                idleTime: Math.max(0, Math.round(((Date.now() - startTime) / 1000) - activeSeconds)),
                tabSwitches: counters.current.switches,
                exitIntentTriggered: sessionFlags.current.exitIntentTriggered,
                interactionFrequency: activeSeconds > 0 ? Math.round((counters.current.clicks / activeSeconds) * 100) : 0,
                lastActiveTimestamp: new Date().toISOString(),
                leadGenerated: sessionFlags.current.leadGenerated,
                formStarted: Object.keys(formInteractions.current).length > 0,
                formAbandoned: Object.values(formInteractions.current).some(f => f.started && !f.submitted),
                formLastField: Object.values(formInteractions.current).map(f => f.lastField).join(', ') || '',
                ebookDownloaded: sessionFlags.current.ebookDownloaded,
                consultationRequested: sessionFlags.current.consultationRequested,
                partnerInquiryCount: counters.current.partnerInquiries,
                careerInquiryCount: counters.current.careerInquiries,
                whatsappWidgetInteractions: counters.current.whatsappClicks,
                ctaConversionRate: Math.round((counters.current.clicks / (activeSeconds || 1)) * 10),
                interestBanking: interests.current.banking,
                interestRetail: interests.current.retail,
                interestLogistics: interests.current.logistics,
                interestSchoolSafety: interests.current.schoolSafety,
                interestCampusSafety: interests.current.campusSafety,
                interestCashLogistics: interests.current.cashLogistics,
                interestCommandCenter: interests.current.commandCenter,
                interestServices: interests.current.services,
                interestCommercial: interests.current.commercial,
                interestResidential: interests.current.residential,
                mapInteractions: counters.current.mapInteractions,
                officesExplored: counters.current.officesExplored,
                jobViews: counters.current.jobViews,
                certificationViews: counters.current.certViews,
                carouselSlideSwipes: counters.current.slideSwipes,
                testimonialsViewed: interactions.filter(i => i.text && i.text.toLowerCase().includes('testimonial')).length,
                philosophyViews: interests.current.services > 0 ? 1 : 0,
                trustMetricEngagement: counters.current.certViews + counters.current.officesExplored,
                benefitsSectionViews: interactions.filter(i => i.text && i.text.toLowerCase().includes('benefit')).length,
                footerNavigationUsage: interactions.filter(i => i.target === 'FOOTER').length,
                weightedRank: calculateWeightedRank(navigationPath.current.length, activeSeconds),
                engagementScore: engScore,
                segment: identifySegment(
                    !!localStorage.getItem('isi_user_email'),
                    !!localStorage.getItem('isi_user_phone'),
                    !!localStorage.getItem('isi_first_visit'),
                    engScore,
                    interests.current
                ),
                hotLeadFlag: engScore > 70 ? 'YES' : 'NO',
                intentRank: calculateIntentRank(interests.current, counters.current),
                dwellTime: JSON.stringify({ [window.location.pathname]: activeSeconds }),
                interactions: interactions.slice(-30),
                tree: constructLinearTree(navigationPath.current)
            };

            sendToGoogleSheets('UserBehaviorLibrary', libraryData);

            if (activeSeconds > 1) {
                sendToGoogleSheets('EngagementMetrics', {
                    ...getBaseData(),
                    pageUrl: window.location.href,
                    userAgent: navigator.userAgent,
                    duration: activeSeconds,
                    scrollDepth: scrollStats.current.maxDepth,
                    clickCount: counters.current.clicks,
                    engagementScore: engScore,
                    ctaClicked: counters.current.clicks > 0,
                    returningUser: !!localStorage.getItem('isi_first_visit'),
                    isHotLead: engScore > 70 ? 'YES' : 'NO'
                });
            }
        };

        const handleVisibilityChange = () => {
            updateActivity();
            if (document.visibilityState === 'hidden') {
                counters.current.switches++;
                flushLibraryData();
            }
        };

        const handleFocus = (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
                const form = target.closest('form');
                const formId = form?.id || form?.getAttribute('data-name') || 'unknown';
                if (!formInteractions.current[formId]) {
                    formInteractions.current[formId] = { started: true, lastField: target.id || target.name, submitted: false };
                    sendToGoogleSheets('BehaviorMetrics', {
                        ...getBaseData(),
                        pageUrl: window.location.href,
                        category: 'Form Focus',
                        metricName: formId,
                        value: target.id || target.name,
                        elementInfo: 'Started',
                    });
                } else {
                    formInteractions.current[formId].lastField = target.id || target.name;
                }
            }
        };

        window.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focusin', handleFocus);
        window.addEventListener('mousemove', updateActivity);
        window.addEventListener('keydown', updateActivity);

        return () => {
            flushLibraryData();
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('focusin', handleFocus);
            window.removeEventListener('mousemove', updateActivity);
            window.removeEventListener('keydown', updateActivity);
        };
    }, [getBaseData, ipInfo, sendToGoogleSheets]);

    const getPathAnalysis = useCallback(() => {
        return {
            ...getBaseData(),
            path: navigationPath.current,
            tree: constructLinearTree(navigationPath.current)
        };
    }, [getBaseData]);

    return {
        trackMapInteraction: () => counters.current.mapInteractions++,
        trackSlideSwipe: () => counters.current.slideSwipes++,
        trackLead: (type: 'generic' | 'ebook' | 'consultation') => {
            sessionFlags.current.leadGenerated = true;
            if (type === 'ebook') {
                sessionFlags.current.ebookDownloaded = true;
                navigationPath.current.push({ path: 'Action: Downloaded E-Book', timestamp: Date.now() });
            }
            if (type === 'consultation') {
                sessionFlags.current.consultationRequested = true;
                navigationPath.current.push({ path: 'Action: Requested Consultation', timestamp: Date.now() });
            }
        },
        trackExitIntent: () => {
            sessionFlags.current.exitIntentTriggered = true;
            navigationPath.current.push({ path: 'Action: Exit Intent Triggered', timestamp: Date.now() });
        },
        trackFormSubmission: (sheetName: SheetName, formData: any  ) => {
            navigationPath.current.push({ path: `Action: Form Submitted [${sheetName}]`, timestamp: Date.now() });
            if (formInteractions.current[sheetName]) formInteractions.current[sheetName].submitted = true;
            if (sheetName === 'PartnerApps') counters.current.partnerInquiries++;
            if (sheetName === 'CareerApps') counters.current.careerInquiries++;
            if (formData.email) localStorage.setItem('isi_user_email', formData.email);

            sendToGoogleSheets(sheetName, {
                ...getBaseData(),
                ...formData,
                ipLocation: getBaseData().location,
                status: 'New'
            });
        },
        observeElement: (elementId: string, metricName: string) => {
            const el = document.getElementById(elementId);
            if (!el) return;
            new IntersectionObserver((entries, obs) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        navigationPath.current.push({ path: `Action: Viewed Element [${metricName}]`, timestamp: Date.now() });
                        sendToGoogleSheets('BehaviorMetrics', {
                            ...getBaseData(),
                            pageUrl: window.location.href,
                            category: 'Element View',
                            metricName,
                            value: elementId,
                            elementInfo: 'Viewed'
                        });
                        obs.unobserve(el);
                    }
                });
            }, { threshold: 0.5 }).observe(el);
        },
        getPathAnalysis
    };
};

// ─── Helper: Format location string ───────────────────────────────────────────
function formatLocation(ipData: any  ): string {
    if (!ipData) return '';
    const parts = [ipData.city, ipData.region, ipData.country_name].filter(Boolean);
    return parts.join(', ') || '';
}

// ─── JSON Tree: Linear linked-list format for JSONCrack ──────────────────────
function constructLinearTree(path: { path: string; timestamp: number }[]): string {
    if (!path.length) return JSON.stringify({ session: 'empty', flow: null });

    // Build a linked-list: each node has a `next` pointing to the next step
    type TreeNode = {
        step: number;
        action: string;
        time: string;
        dwell_seconds: number | null;
        next: TreeNode | null;
    };

    const nodes: TreeNode[] = path.map((step, index) => ({
        step: index + 1,
        action: step.path,
        time: new Date(step.timestamp).toISOString(),
        dwell_seconds: index < path.length - 1
            ? Math.round((path[index + 1].timestamp - step.timestamp) / 1000)
            : null,
        next: null
    }));

    // Link nodes together
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return JSON.stringify({ session_flow: nodes[0] });
}

// ─── Pure functions (no React hooks) ─────────────────────────────────────────
function calculateRageClicks(interactions: any[]) {
    let rage = 0;
    for (let i = 1; i < interactions.length; i++) {
        const curr = typeof interactions[i].timestamp === 'string'
            ? new Date(interactions[i].timestamp).getTime()
            : interactions[i].timestamp;
        const prev = typeof interactions[i - 1].timestamp === 'string'
            ? new Date(interactions[i - 1].timestamp).getTime()
            : interactions[i - 1].timestamp;
        if (curr - prev < 300) rage++;
    }
    return Math.floor(rage / 3);
}

function calculateIntentRank(i: any  , c: any  ) {
    let score = 0;
    Object.values(i).forEach((v: any  ) => score += (v * 10));
    score += (c.clicks * 2) + (c.mapInteractions * 5);
    return Math.min(score, 100);
}

function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
    return 'desktop';
}

function getTrafficSource() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('utm_source')) return params.get('utm_source')!;
    const ref = document.referrer;
    if (!ref) return 'Direct';
    if (ref.includes('google')) return 'Google Search';
    if (ref.includes('linkedin')) return 'LinkedIn';
    if (ref.includes('wa.me')) return 'WhatsApp';
    try { return new URL(ref).hostname; } catch { return ref; }
}

function calculateEngagementScore(sec: number, scroll: number, clicks: number) {
    return Math.min(Math.round((sec / 30) * 20 + (scroll / 100) * 50 + (clicks / 5) * 30), 100);
}

function calculateWeightedRank(pages: number, sec: number) {
    return Math.round(pages * 15 + (sec / 10));
}

function identifySegment(email: boolean, phone: boolean, returning: boolean, score: number, interests: any  ) {
    let topInterest = 'GENERAL';
    let maxVal = 0;
    for (const [key, val] of Object.entries(interests)) {
        if ((val as number) > maxVal) {
            maxVal = val as number;
            topInterest = key.toUpperCase();
        }
    }
    const engagement = score > 70 ? 'HOT' : (score > 35 ? 'WARM' : 'COLD');
    const userType = (email || phone) ? 'LEAD' : (returning ? 'RETURNING' : 'NEW');
    return `${topInterest}_${engagement}_${userType}`;
}

function calculateAverageVelocity(ints: any[]) {
    if (ints.length < 2) return 0;
    let dist = 0;
    for (let i = 1; i < ints.length; i++) {
        dist += Math.sqrt(Math.pow((ints[i].x || 0) - (ints[i - 1].x || 0), 2) + Math.pow((ints[i].y || 0) - (ints[i - 1].y || 0), 2));
    }
    return Math.round(dist / ints.length);
}
