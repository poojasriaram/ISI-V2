import {
    Truck, Wallet, Package, Shield, Eye, TrendingUp, CheckCircle2,
    Clock, MapPin, AlertTriangle, BarChart3, Zap, Database, FileCheck,
    Radio, Wifi, Bell, Target, Activity, Users, Building2, Landmark,
    CreditCard, ArrowLeftRight, FileText, Lock, MonitorDot, Cpu, Network,
    CalendarClock, ScanLine
} from "lucide-react";

// ============================================================================
// INTERFACES
// ============================================================================

export interface CashLogisticsStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface CashLogisticsCard {
    icon: any  ;
    title: string;
    features: string[];
}

export interface CashLogisticsTab {
    title: string;
    description: string;
}

export interface CashLogisticsSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: CashLogisticsStatistic[];
    portfolioCards: CashLogisticsCard[];
    verticalTabs: CashLogisticsTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const cashLogisticsHero = {
    badge: "Cash Logistics Platform",
    title: "AI-Driven, Zero-Loss Cash Movement & Control",
    subtitle: "Enterprise-grade cash logistics platform for banks, retailers, and high-cash businesses with real-time visibility and AI risk intelligence."
};

// ============================================================================
// SECTION 1: INTELLIGENT CASH-IN-TRANSIT (CIT)
// ============================================================================

export const section1_IntelligentCIT: CashLogisticsSection = {
    id: "intelligent-cit",
    badgeLabel: "Smart Transit Solutions",
    title: "Intelligent Cash-in-Transit (CIT)",
    subtitle: "Smart, Secure & Predictive Cash-in-Transit Operations. AI-orchestrated cash movement that replaces static routes, manual controls, and reactive security with real-time intelligence and predictive risk prevention.",
    statistics: [
        {
            value: "45%",
            label: "reduction in transit risk incidents",
            icon: Shield
        },
        {
            value: "99.98%",
            label: "route adherence accuracy",
            icon: Target
        },
        {
            value: "30%",
            label: "faster delivery cycle times",
            icon: Zap
        },
        {
            value: "100%",
            label: "digitally traceable custody chain",
            icon: CheckCircle2
        }
    ],
    portfolioCards: [
        {
            icon: Truck,
            title: "Smart CIT Vehicles",
            features: ["GPS tracking", "IoT sensors", "Panic alerts", "Onboard CCTV"]
        },
        {
            icon: MapPin,
            title: "Dynamic Route Intelligence",
            features: ["AI-optimized routing", "Risk-based planning", "Time optimization", "Asset value prioritization"]
        },
        {
            icon: Radio,
            title: "Geo-Fencing Controls",
            features: ["Vault zone enforcement", "Branch perimeter alerts", "ATM location tracking", "High-risk zone warnings"]
        },
        {
            icon: FileCheck,
            title: "Digital Proof of Delivery",
            features: ["Time-stamped confirmations", "Geo-tagged delivery", "Custody chain tracking", "Automated reconciliation"]
        }
    ],
    verticalTabs: [
        {
            title: "Banking",
            description: "Branch-to-vault & inter-branch cash movement with real-time tracking, automated reconciliation, and RBI-compliant documentation for secure banking operations. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Retail",
            description: "Daily store pickups & event-based cash movement with flexible scheduling, multi-location support, and instant settlement for retail chains and franchises. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Government / PSU",
            description: "Secure movement of public funds with enhanced security protocols, audit trails, and compliance with government regulations for transparent operations. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "High-Value Enterprises",
            description: "Corporate cash transfers & escrow movement with discreet transport, armed escorts, and comprehensive insurance coverage for high-value transactions. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        }
    ],
    cta: {
        text: "Secure Every Cash Movement in Real Time",
        buttonText: "Request a Live CIT Demo",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: RETAIL & ENTERPRISE CASH COLLECTION
// ============================================================================

export const section2_RetailCollection: CashLogisticsSection = {
    id: "retail-collection",
    badgeLabel: "Collection Excellence",
    title: "Retail & Enterprise Cash Collection",
    subtitle: "Faster, Safer & Fully Reconciled Cash Collection. Digitize retail and enterprise cash pickups with real-time validation, AI reconciliation, and zero-dispute settlement.",
    statistics: [
        {
            value: "60%",
            label: "reduction in reconciliation time",
            icon: Clock
        },
        {
            value: "90%",
            label: "fewer cash variance disputes",
            icon: CheckCircle2
        },
        {
            value: "35%",
            label: "faster credit to bank accounts",
            icon: TrendingUp
        },
        {
            value: "100",
            label: "audit-ready pickup trails",
            icon: FileCheck
        }
    ],
    portfolioCards: [
        {
            icon: CalendarClock,
            title: "Scheduled & On-Demand Pickups",
            features: ["Daily collections", "Weekly schedules", "Event-based pickups", "Emergency collections"]
        },
        {
            icon: AlertTriangle,
            title: "AI Variance Detection",
            features: ["Expected vs actual alerts", "Anomaly detection", "Pattern recognition", "Fraud prevention"]
        },
        {
            icon: Lock,
            title: "Digital Custody Chain",
            features: ["Multi-level confirmation", "Biometric verification", "Photo documentation", "Video proof"]
        },
        {
            icon: Zap,
            title: "Instant Reconciliation",
            features: ["Automated bank sync", "ERP integration", "Real-time settlement", "Digital receipts"]
        }
    ],
    verticalTabs: [
        {
            title: "Retail Chains",
            description: "Multi-store cash pickup & consolidation with centralized dashboard, store-level tracking, and automated variance reporting for seamless retail operations. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "QSR & FMCG",
            description: "High-frequency, low-latency collections with same-day pickup, quick reconciliation, and minimal operational disruption for fast-paced businesses. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Hospitals & Education",
            description: "Secure institutional cash handling with scheduled collections, department-wise tracking, and compliance with institutional audit requirements. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Enterprises",
            description: "Corporate collections & settlements with flexible scheduling, multi-location support, and integration with corporate treasury systems. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        }
    ],
    cta: {
        text: "Eliminate Cash Leakages & Delays",
        buttonText: "Start Smart Cash Collection",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: ATM CASH REPLENISHMENT & REVERSE CASH LOGISTICS
// ============================================================================

export const section3_ATMReplenishment: CashLogisticsSection = {
    id: "atm-replenishment",
    badgeLabel: "ATM Optimization",
    title: "ATM Cash Replenishment & Reverse Cash Logistics",
    subtitle: "Predictive ATM Replenishment & Smart Reverse Cash Flow. AI-powered ATM operations that forecast demand, reduce downtime, and automate surplus cash returns.",
    statistics: [
        {
            value: "40%",
            label: "reduction in ATM downtime",
            icon: Activity
        },
        {
            value: "25%",
            label: "lower idle cash at ATMs",
            icon: TrendingUp
        },
        {
            value: "50%",
            label: "faster reverse cash reconciliation",
            icon: Clock
        },
        {
            value: "100",
            label: "visibility on surplus flows",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Cpu,
            title: "AI Cash Forecasting",
            features: ["Demand prediction", "Historical analysis", "Seasonal patterns", "Location-based insights"]
        },
        {
            icon: CalendarClock,
            title: "Smart Replenishment Scheduling",
            features: ["Dynamic FLM planning", "SLM optimization", "Route efficiency", "Cost reduction"]
        },
        {
            icon: ArrowLeftRight,
            title: "Reverse Cash Detection",
            features: ["Surplus tracking", "Rejected note handling", "Automated returns", "Real-time alerts"]
        },
        {
            icon: Database,
            title: "Vault Reconciliation Automation",
            features: ["Real-time settlement", "Automated reporting", "Variance detection", "Audit trails"]
        }
    ],
    verticalTabs: [
        {
            title: "Public Sector Banks",
            description: "High-volume ATM networks with predictive cash management, optimized replenishment schedules, and comprehensive reporting for large-scale operations. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Private Banks",
            description: "Urban & semi-urban ATM optimization with location-specific forecasting, dynamic scheduling, and cost-efficient cash circulation strategies. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "White-Label ATM Operators",
            description: "Multi-bank ATM servicing with unified dashboard, cross-bank reconciliation, and optimized cash deployment across diverse networks. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Cooperative Banks",
            description: "Cost-efficient cash circulation with shared resources, optimized routes, and collaborative cash management for regional banking networks. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Reduce Idle Cash & Maximize ATM Uptime",
        buttonText: "Optimize ATM Operations",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: CHEQUE & NEGOTIABLE INSTRUMENT LOGISTICS
// ============================================================================

export const section4_ChequeLogistics: CashLogisticsSection = {
    id: "cheque-logistics",
    badgeLabel: "Instrument Security",
    title: "Cheque & Negotiable Instrument Logistics",
    subtitle: "Fully Traceable Cheque & Instrument Movement. Secure, SLA-driven logistics for cheques and negotiable instruments with end-to-end digital custody and clearing visibility.",
    statistics: [
        {
            value: "70%",
            label: "reduction in lost instruments",
            icon: Shield
        },
        {
            value: "50%",
            label: "faster clearing cycle",
            icon: Zap
        },
        {
            value: "100",
            label: "traceability per cheque batch",
            icon: Eye
        },
        {
            value: "0",
            label: "custody disputes",
            icon: CheckCircle2
        }
    ],
    portfolioCards: [
        {
            icon: Truck,
            title: "Secure Pickup & Transit",
            features: ["Branch collections", "Corporate pickups", "Tamper-evident bags", "Armed escorts"]
        },
        {
            icon: ScanLine,
            title: "Barcode / QR Tracking",
            features: ["Instrument-level visibility", "Batch tracking", "Real-time updates", "Digital logs"]
        },
        {
            icon: Clock,
            title: "SLA Monitoring",
            features: ["Clearing delay alerts", "Exception management", "Performance tracking", "Automated escalations"]
        },
        {
            icon: FileText,
            title: "Compliance Logs",
            features: ["Audit trails", "Regulator reports", "Digital documentation", "Compliance dashboards"]
        }
    ],
    verticalTabs: [
        {
            title: "Banks",
            description: "Inter-branch cheque movement with automated tracking, clearing house coordination, and comprehensive audit trails for banking operations. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "NBFCs",
            description: "Loan & repayment instruments with secure handling, digital tracking, and integration with loan management systems for financial institutions. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Corporate Treasuries",
            description: "Bulk cheque handling with batch processing, priority routing, and real-time visibility for corporate financial operations. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Legal & Escrow",
            description: "Sensitive document movement with enhanced security, legal compliance, and tamper-proof custody chains for legal transactions. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        }
    ],
    cta: {
        text: "Make Cheque Logistics Audit-Proof",
        buttonText: "Digitize Instrument Movement",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: AI RISK, ANALYTICS & COMMAND CENTER
// ============================================================================

export const section5_AICommandCenter: CashLogisticsSection = {
    id: "ai-command-center",
    badgeLabel: "AI-Powered Intelligence",
    title: "AI Risk, Analytics & Command Center",
    subtitle: "Centralized Command Center with Predictive Intelligence. One command center to monitor, predict, and control every cash movement in real time.",
    statistics: [
        {
            value: "50",
            label: "faster incident response",
            icon: Zap
        },
        {
            value: "60%",
            label: "fewer security escalations",
            icon: Shield
        },
        {
            value: "100",
            label: "centralized operational visibility",
            icon: Eye
        },
        {
            value: "24×",
            label: "7 live monitoring",
            icon: MonitorDot
        }
    ],
    portfolioCards: [
        {
            icon: MapPin,
            title: "Live Vehicle & Asset Maps",
            features: ["Real-time GPS tracking", "Geo-fencing alerts", "Route visualization", "Asset location"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Engine",
            features: ["Route risk scoring", "Time-based analysis", "Behavior monitoring", "Threat prediction"]
        },
        {
            icon: Bell,
            title: "Incident & Escalation Manager",
            features: ["Automated alerts", "Workflow automation", "Priority routing", "Response tracking"]
        },
        {
            icon: BarChart3,
            title: "Audit & Compliance Cockpit",
            features: ["One-click reports", "Compliance dashboards", "Audit trails", "Performance metrics"]
        }
    ],
    verticalTabs: [
        {
            title: "Banking Command Center",
            description: "ATM, branch & vault intelligence with unified monitoring, predictive analytics, and real-time decision support for banking networks. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Retail Ops Center",
            description: "Multi-store cash visibility with centralized oversight, store-level analytics, and operational intelligence for retail operations. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Enterprise Security",
            description: "Corporate cash risk monitoring with threat detection, incident management, and comprehensive security analytics for enterprises. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Regulatory View",
            description: "Audit & compliance dashboards with automated reporting, regulatory compliance tracking, and transparent operations for stakeholders. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        }
    ],
    cta: {
        text: "See Your Entire Cash Network Live",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Cash Logistics Is Predictive, Visible & Zero-Loss",
    subtitle: "Replace manual cash handling with AI-driven cash intelligence built for scale, compliance, and trust.",
    buttonText: "Book a Cash Logistics Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allCashLogisticsSections = [
    section1_IntelligentCIT,
    section2_RetailCollection,
    section3_ATMReplenishment,
    section4_ChequeLogistics,
    section5_AICommandCenter
];
