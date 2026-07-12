export interface BaseTrackingData {
    sessionId: string;
    visitorId: string;
    ipAddress?: string;
    location?: string;
    organization?: string;
    trafficSource?: string;
    deviceType: string;
    browserType: string;
    timestamp: string;
    variant?: string; // For A/B testing (e.g., 'v1', 'v2')
}

export interface TrafficAnalytics extends BaseTrackingData {
    pagePath: string;
    pageTitle: string;
    referrer: string;
}

export interface EngagementMetrics extends BaseTrackingData {
    pageUrl: string;
    userAgent: string;
    duration: number;
    scrollDepth: number;
    clickCount: number;
    engagementScore: number;
    ctaClicked: boolean;
    returningUser: boolean;
    isHotLead?: 'YES' | 'NO';
}

export interface BehaviorMetrics extends BaseTrackingData {
    pageUrl: string;
    category: 'CTA Click' | 'Form Focus' | 'Form Abandon' | 'Element View' | 'Technical Error' | 'Custom';
    metricName: string;
    value: string;
    elementInfo: string;
    metadata?: Record<string, any>;
}

export interface UserBehaviorLibrary extends BaseTrackingData {
    // 1. Session & Environment (10)
    viewport: string;
    os: string;
    screenResolution: string;
    connectionType?: string;
    language: string;
    darkTheme: boolean;
    timeZone: string;
    pageDepth: number;
    activeTab: boolean;
    sessionAge: number;

    // 2. Acquisition (8)
    initialSource: string;
    landingPage: string;
    utmMedium?: string;
    utmCampaign?: string;
    referrerHost: string;
    searchEngine?: string;
    firstVisitDate: string;
    returningUser: boolean;

    // 3. Behavioral/Psychological (12)
    cursorVelocity: number;
    rageClicks: number;
    scrollVelocity: number;
    maxScrollDepth: number;
    totalClickCount: number;
    averageDwellTime: number;
    totalActiveTime: number;
    idleTime: number;
    tabSwitches: number;
    exitIntentTriggered: boolean;
    interactionFrequency: number;
    lastActiveTimestamp: string;

    // 4. Conversion & Funnel (10)
    leadGenerated: boolean;
    formStarted: boolean;
    formAbandoned: boolean;
    formLastField?: string;
    ebookDownloaded: boolean;
    consultationRequested: boolean;
    partnerInquiryCount: number;
    careerInquiryCount: number;
    whatsappWidgetInteractions: number;
    ctaConversionRate: number;

    // 5. Industry/Vertical Interest (10)
    interestBanking: number;
    interestRetail: number;
    interestLogistics: number;
    interestSchoolSafety: number;
    interestCampusSafety: number;
    interestCashLogistics: number;
    interestCommandCenter: number;
    interestServices: number;
    interestCommercial: number;
    interestResidential: number;

    // 6. Capability & Trust Interest (10)
    mapInteractions: number;
    officesExplored: number;
    jobViews: number;
    certificationViews: number;
    carouselSlideSwipes: number;
    testimonialsViewed: number;
    philosophyViews: number;
    trustMetricEngagement: number;
    benefitsSectionViews: number;
    footerNavigationUsage: number;

    // 7. Outcome & Scoring (5)
    weightedRank: number;
    engagementScore: number;
    segment: string;
    hotLeadFlag: 'YES' | 'NO';
    intentRank: number;

    // Technical
    interactions: any[];
    tree?: string;
    [key: string]: any  ;
}

export type SheetName =
    | 'ContactForm'
    | 'PartnerApps'
    | 'CareerApps'
    | 'EbookDownloads'
    | 'ConsultationReqs'
    | 'ChatbotLeads'
    | 'TrafficAnalytics'
    | 'EngagementMetrics'
    | 'BehaviorMetrics'
    | 'UserBehaviorLibrary'
    | 'NewsletterSubs'
    | 'ExitIntentFeedback';
