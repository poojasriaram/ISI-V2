import {
    Truck, Shield, Eye, TrendingUp, CheckCircle2, Clock, MapPin,
    AlertTriangle, BarChart3, Zap, Database, FileCheck, Radio, Bell,
    Target, Activity, Users, Building2, Landmark, CreditCard,
    ArrowLeftRight, FileText, Lock, MonitorDot, Cpu, Network,
    CalendarClock, ScanLine, Lightbulb, Package, Gem, Car, UserCheck,
    Vault, Gauge, Award, ShieldCheck, TrendingDown, Briefcase, Globe
} from "lucide-react";

// ============================================================================
// INTERFACES
// ============================================================================

export interface SecureLogisticsStatistic {
    value: string;
    label: string;
    icon: any;
}

export interface SecureLogisticsCard {
    icon: any;
    title: string;
    features: string[];
}

export interface SecureLogisticsTab {
    title: string;
    description: string;
}

export interface SecureLogisticsSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: SecureLogisticsStatistic[];
    portfolioCards: SecureLogisticsCard[];
    verticalTabs: SecureLogisticsTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const secureLogisticsHero = {
    badge: "Secure Value Logistics Platform",
    title: "AI-Driven Cash, High-Value & Critical Asset Logistics",
    subtitle: "Intelligence-led logistics ecosystem for secure movement of cash, bullion, minerals, jewellery, and critical valuables with predictive, auditable, and zero-loss operations."
};

// ============================================================================
// SECTION 1: CASH & MONETARY LOGISTICS
// ============================================================================

export const section1_CashMonetary: SecureLogisticsSection = {
    id: "cash-monetary-logistics",
    badgeLabel: "Intelligent Cash Management",
    title: "Cash & Monetary Logistics",
    subtitle: "Intelligent Cash, Cheque & Monetary Instrument Management. End-to-end cash movement with AI-optimized routing, real-time reconciliation, and predictive risk prevention.",
    statistics: [
        {
            value: "30-45",
            label: "reduction in cash handling risk",
            icon: Shield
        },
        {
            value: "100",
            label: "faster settlement & reduced idle cash",
            icon: Zap
        },
        {
            value: "0",
            label: "reconciliation disputes",
            icon: CheckCircle2
        },
        {
            value: "100",
            label: "regulator-ready audit trails",
            icon: FileCheck
        }
    ],
    portfolioCards: [
        {
            icon: Truck,
            title: "Smart Cash Movement",
            features: ["AI-optimized route planning", "Smart CIT vehicles with GPS & IoT", "Geo-fencing for branches & ATMs", "Panic sensors & onboard CCTV"]
        },
        {
            icon: Database,
            title: "Collection & Reconciliation",
            features: ["AI-assisted variance detection", "Digital Proof of Collection", "Automated bank system reconciliation", "Real-time settlement"]
        },
        {
            icon: ScanLine,
            title: "Cheque & Instrument Logistics",
            features: ["Barcode/QR tracking per cheque", "Chain-of-custody validation", "SLA-based movement tracking", "Exception alerts"]
        },
        {
            icon: ArrowLeftRight,
            title: "Reverse Cash Logistics",
            features: ["Surplus cash retrieval", "ATM & branch reverse pickups", "AI abnormal pattern detection", "Automated vault reconciliation"]
        }
    ],
    verticalTabs: [
        {
            title: "Banking",
            description: "Cash-in-transit for branches, ATM replenishment (FLM/SLM), inter-branch transfers, and reverse cash logistics with real-time reconciliation and RBI-compliant documentation."
        },
        {
            title: "Retail & Enterprises",
            description: "Daily retail cash collection, event-based pickups, reverse end-of-day collections, and faster store-level reconciliation with digital proof of delivery."
        },
        {
            title: "ATM Networks",
            description: "Predictive ATM replenishment forecasting, dynamic route optimization, surplus detection, and automated reverse cash reconciliation for optimal uptime."
        },
        {
            title: "Government & PSU",
            description: "Secure movement of public funds, currency distribution, high audit standards, and transparent operations with regulator-aligned evidence trails."
        }
    ],
    cta: {
        text: "Transform your cash operations with AI-driven intelligence",
        buttonText: "Optimize Cash Operations",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: HIGH-VALUE & CRITICAL ASSET LOGISTICS
// ============================================================================

export const section2_HighValue: SecureLogisticsSection = {
    id: "high-value-logistics",
    badgeLabel: "Critical Asset Security",
    title: "High-Value & Critical Asset Logistics",
    subtitle: "Secure, Discreet & Predictive Asset Movement. Specialized logistics for bullion, jewellery, minerals, precious stones, high-value automobiles, sensitive documents, artworks, and collectibles.",
    statistics: [
        {
            value: "0",
            label: "loss exposure during movement",
            icon: ShieldCheck
        },
        {
            value: "50",
            label: "faster insurance & audit closure",
            icon: Clock
        },
        {
            value: "95",
            label: "institutional trust rating",
            icon: Award
        },
        {
            value: "100",
            label: "end-to-end traceability",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Package,
            title: "High-Value Forward Logistics",
            features: ["Risk-classified transport", "RFID/NFC asset identification", "Dual custody protocols", "Dynamic routing"]
        },
        {
            icon: ArrowLeftRight,
            title: "High-Value Reverse Logistics",
            features: ["Unsold asset returns", "Audit & valuation recalls", "Secure reverse movement", "Valuation integrity"]
        },
        {
            icon: Lock,
            title: "Custody & Handling",
            features: ["SLA-bound custody windows", "Dual-key authorization", "Tamper detection", "Incident flagging"]
        },
        {
            icon: Cpu,
            title: "AI Risk Intelligence",
            features: ["Asset-value risk scoring", "Route-time risk heatmaps", "Personnel behavior analytics", "Predictive theft modeling"]
        }
    ],
    verticalTabs: [
        {
            title: "Bullion & Jewellery",
            description: "Secure forward and reverse logistics for gold, silver, precious metals, and jewellery with RFID tracking, dual custody, and insurance-compliant documentation for HNI and institutional clients."
        },
        {
            title: "Minerals & Precious Stones",
            description: "Specialized transport for diamonds, gemstones, and high-value minerals with regulatory compliance, export documentation, and secure vault-to-vault movement."
        },
        {
            title: "High-Value Automobiles",
            description: "Luxury vehicles, armored vehicles, prototypes, and auction vehicles with enclosed transport, GPS monitoring, condition tracking, and reverse logistics post-events."
        },
        {
            title: "Documents & Artworks",
            description: "Sensitive legal documents, contracts, artworks, and collectibles with tamper-proof handling, climate-controlled transport, and comprehensive insurance coverage."
        }
    ],
    cta: {
        text: "Protect your most valuable assets with zero-loss logistics",
        buttonText: "Secure High-Value Assets",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: STRONG ROOM & VAULT SERVICES
// ============================================================================

export const section3_Vaults: SecureLogisticsSection = {
    id: "vault-services",
    badgeLabel: "Bank-Grade Vaulting",
    title: "Strong Room & Vault Services",
    subtitle: "Bank-Grade Physical Asset Protection. BIS-certified vault infrastructure with biometric access, AI-powered surveillance, and immutable digital audit trails for cash, bullion, minerals, and documents.",
    statistics: [
        {
            value: "100",
            label: "zero-compromise asset protection",
            icon: Vault
        },
        {
            value: "60",
            label: "faster audits & inspections",
            icon: Zap
        },
        {
            value: "40",
            label: "reduced insurance premiums",
            icon: TrendingDown
        },
        {
            value: "100",
            label: "regulatory compliance",
            icon: FileCheck
        }
    ],
    portfolioCards: [
        {
            icon: Building2,
            title: "Vault Infrastructure",
            features: ["BIS-certified construction", "Modular multi-asset vaulting", "Seismic & fire resistant", "Intrusion protection"]
        },
        {
            icon: Eye,
            title: "Access & Surveillance",
            features: ["Biometric + MFA access", "AI-powered CCTV", "Behavior detection", "Time-bound access control"]
        },
        {
            icon: FileText,
            title: "Audit & Traceability",
            features: ["Immutable digital logs", "Automated audit reports", "Insurance evidence packs", "Regulator-aligned trails"]
        },
        {
            icon: Database,
            title: "Multi-Asset Support",
            features: ["Cash vaulting", "Bullion storage", "Mineral custody", "Document preservation"]
        }
    ],
    verticalTabs: [
        {
            title: "Cash Vaults",
            description: "Secure cash storage with automated counting, sorting, and reconciliation. Real-time inventory tracking, aging analysis, and seamless integration with banking systems."
        },
        {
            title: "Bullion & Precious Metals",
            description: "Climate-controlled vaults for gold, silver, and precious metals with weight verification, purity testing, and insurance-grade documentation for institutional and retail clients."
        },
        {
            title: "Mineral & Gemstone Storage",
            description: "Specialized custody for diamonds, gemstones, and high-value minerals with regulatory compliance, export readiness, and secure access protocols."
        },
        {
            title: "Document & Legal Custody",
            description: "Secure preservation of sensitive documents, contracts, legal instruments, and records with climate control, fire protection, and audit-ready retrieval systems."
        }
    ],
    cta: {
        text: "Experience bank-grade security for your valuable assets",
        buttonText: "Explore Vault Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: VIP & EXECUTIVE LOGISTICS
// ============================================================================

export const section4_VIPLogistics: SecureLogisticsSection = {
    id: "vip-logistics",
    badgeLabel: "Discreet VIP Movement",
    title: "VIP & Executive Logistics",
    subtitle: "Discreet, High-Security Movement for Individuals & Sensitive Cargo. Risk-assessed planning, secure escort coordination, and confidentiality-first protocols for VIP, VVIP, diplomatic, and high-profile movements.",
    statistics: [
        {
            value: "100",
            label: "zero-exposure movement",
            icon: ShieldCheck
        },
        {
            value: "0",
            label: "incident-free operations",
            icon: CheckCircle2
        },
        {
            value: "100",
            label: "discretion & confidentiality",
            icon: Lock
        },
        {
            value: "95",
            label: "client trust rating",
            icon: Award
        }
    ],
    portfolioCards: [
        {
            icon: MapPin,
            title: "Risk-Assessed Planning",
            features: ["Route & time risk analysis", "Threat intelligence integration", "Alternative route planning", "Real-time risk updates"]
        },
        {
            icon: UserCheck,
            title: "Secure Escort Coordination",
            features: ["Trained security personnel", "Armed escort when required", "Multi-vehicle coordination", "Emergency response protocols"]
        },
        {
            icon: MonitorDot,
            title: "Real-Time Monitoring",
            features: ["Live GPS tracking", "Command center oversight", "Emergency escalation", "Incident response teams"]
        },
        {
            icon: Lock,
            title: "Confidentiality Protocols",
            features: ["NDA-bound operations", "Encrypted communications", "Discreet vehicle selection", "Privacy-first approach"]
        }
    ],
    verticalTabs: [
        {
            title: "VIP & VVIP Movement",
            description: "Secure transport for high-profile individuals, executives, and dignitaries with discreet routing, trained personnel, and real-time command center monitoring for complete safety and privacy."
        },
        {
            title: "Diplomatic Consignments",
            description: "Protocol-compliant logistics for diplomatic cargo, sensitive government materials, and international consignments with customs coordination and security clearances."
        },
        {
            title: "Corporate Transfers",
            description: "Confidential movement of sensitive corporate materials, prototypes, trade secrets, and executive documents with tamper-proof handling and audit trails."
        },
        {
            title: "Event Logistics",
            description: "High-security logistics for conferences, summits, exhibitions, and high-profile events with coordinated security, access control, and emergency preparedness."
        }
    ],
    cta: {
        text: "Experience world-class discretion and security",
        buttonText: "Request VIP Services",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: HIGH-VALUE AUTOMOBILE LOGISTICS
// ============================================================================

export const section5_Automobiles: SecureLogisticsSection = {
    id: "automobile-logistics",
    badgeLabel: "Luxury Vehicle Security",
    title: "High-Value Automobile & Prototype Logistics",
    subtitle: "Specialized Transport for Luxury & High-Value Vehicles. Enclosed transport, GPS monitoring, condition tracking, and reverse logistics for luxury vehicles, armored vehicles, prototypes, and auction automobiles.",
    statistics: [
        {
            value: "100",
            label: "asset integrity preservation",
            icon: ShieldCheck
        },
        {
            value: "50",
            label: "faster dealer operations",
            icon: Zap
        },
        {
            value: "0",
            label: "transit damage incidents",
            icon: CheckCircle2
        },
        {
            value: "100",
            label: "condition monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Car,
            title: "Enclosed Transport",
            features: ["Climate-controlled carriers", "Multi-vehicle capacity", "Scratch & damage prevention", "Premium vehicle handling"]
        },
        {
            icon: MapPin,
            title: "GPS & Motion Monitoring",
            features: ["Real-time location tracking", "Motion & tilt sensors", "Route adherence monitoring", "Unauthorized movement alerts"]
        },
        {
            icon: Eye,
            title: "Condition Monitoring",
            features: ["Pre & post-transport inspection", "Photo documentation", "Damage detection", "Insurance compliance"]
        },
        {
            icon: ArrowLeftRight,
            title: "Reverse Logistics",
            features: ["Post-event returns", "Auction transport", "Dealer-to-dealer transfers", "Prototype recalls"]
        }
    ],
    verticalTabs: [
        {
            title: "Luxury Vehicles",
            description: "Premium transport for high-end automobiles including supercars, luxury sedans, and exotic vehicles with white-glove handling and comprehensive insurance coverage."
        },
        {
            title: "Armored Vehicles",
            description: "Specialized logistics for armored vehicles and security transport with trained personnel, secure routes, and confidential handling protocols."
        },
        {
            title: "Prototypes & Pre-Launch Models",
            description: "Discreet transport for automotive prototypes, pre-launch models, and concept vehicles with NDA compliance and maximum security to prevent leaks."
        },
        {
            title: "Auction & Exhibition Vehicles",
            description: "Event logistics for auction houses, auto shows, and exhibitions with coordinated pickup, display transport, and post-event returns."
        }
    ],
    cta: {
        text: "Protect your premium automotive assets",
        buttonText: "Secure Vehicle Transport",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 6: COMMAND & CONTROL PLATFORM
// ============================================================================

export const section6_CommandCenter: SecureLogisticsSection = {
    id: "command-control",
    badgeLabel: "Digital Nerve Center",
    title: "Centralized Command & Control Platform",
    subtitle: "Real-Time Monitoring, Predictive Intelligence & Total Control. The digital nerve center orchestrating vehicles, assets, people, vaults, and compliance in real time with AI-powered risk analytics.",
    statistics: [
        {
            value: "100",
            label: "real-time operational visibility",
            icon: Eye
        },
        {
            value: "60",
            label: "faster incident response",
            icon: Zap
        },
        {
            value: "95",
            label: "SLA compliance rate",
            icon: Target
        },
        {
            value: "100",
            label: "AI-powered predictions",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: MonitorDot,
            title: "Real-Time Monitoring",
            features: ["Live vehicle & asset tracking", "Route deviation detection", "Geo-fencing enforcement", "Unauthorized stop alerts"]
        },
        {
            icon: BarChart3,
            title: "Intelligence Dashboards",
            features: ["Unified asset visibility", "Location-wise inventory", "Asset aging & history", "Client-wise dashboards"]
        },
        {
            icon: Cpu,
            title: "AI Risk & Analytics",
            features: ["Predictive risk scoring", "Anomaly detection", "Risk heatmaps", "Demand forecasting"]
        },
        {
            icon: Bell,
            title: "Incident Management",
            features: ["Automated alerts", "Escalation workflows", "Digital evidence capture", "SLA breach management"]
        }
    ],
    verticalTabs: [
        {
            title: "Operations View",
            description: "Live monitoring of all CIT vehicles, high-value consignments, and asset movements with real-time GPS tracking, route adherence, and operational health dashboards."
        },
        {
            title: "Asset Intelligence",
            description: "Comprehensive visibility into cash, bullion, minerals, and high-value assets across locations, vaults, and transit with inventory management and aging analysis."
        },
        {
            title: "Risk Analytics",
            description: "AI-powered predictive risk engine with route-time heatmaps, personnel behavior analytics, incident forecasting, and preventive recommendations."
        },
        {
            title: "Compliance Cockpit",
            description: "Automated compliance checks, regulator-ready audit dashboards, immutable logs for forensic investigations, and one-click regulatory reports."
        }
    ],
    cta: {
        text: "Experience total control with AI-driven intelligence",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 7: BANKING VERTICAL - DEEP DIVE
// ============================================================================

export const section7_Banking: SecureLogisticsSection = {
    id: "banking-vertical",
    badgeLabel: "Banking Excellence",
    title: "Banking Vertical - Comprehensive Solutions",
    subtitle: "Solving Traditional Banking Challenges in Cash & Reverse Logistics. AI-driven solutions for ATM optimization, cash reconciliation, reverse logistics visibility, and regulatory compliance.",
    statistics: [
        {
            value: "40",
            label: "reduced cash float & idle inventory",
            icon: TrendingDown
        },
        {
            value: "50",
            label: "faster ATM uptime",
            icon: Activity
        },
        {
            value: "60",
            label: "lower operational costs",
            icon: TrendingDown
        },
        {
            value: "100",
            label: "improved regulatory confidence",
            icon: Award
        }
    ],
    portfolioCards: [
        {
            icon: AlertTriangle,
            title: "Traditional Challenges",
            features: ["Manual route planning", "High manpower dependency", "Limited transit visibility", "Cash leakage & shrinkage"]
        },
        {
            icon: Cpu,
            title: "AI-Driven Solutions",
            features: ["Predictive ATM forecasting", "Dynamic route optimization", "Risk-based prioritization", "Automated reconciliation"]
        },
        {
            icon: ArrowLeftRight,
            title: "Reverse Logistics",
            features: ["Automated surplus detection", "AI abnormal flow alerts", "Real-time vault reconciliation", "Exception management"]
        },
        {
            icon: CheckCircle2,
            title: "Banking Outcomes",
            features: ["Reduced idle cash", "Faster settlements", "Lower audit costs", "Higher compliance"]
        }
    ],
    verticalTabs: [
        {
            title: "Retail Banking",
            description: "Branch cash management, ATM replenishment, cash collection from retail outlets, and reverse cash logistics with real-time reconciliation and RBI compliance."
        },
        {
            title: "Corporate Banking",
            description: "Large-value cash movements, corporate cash pickups, treasury operations, and high-security transport for institutional banking clients."
        },
        {
            title: "ATM Networks",
            description: "Predictive cash forecasting, optimized FLM/SLM schedules, surplus detection, downtime reduction, and automated reverse cash reconciliation."
        },
        {
            title: "Treasury Operations",
            description: "Inter-bank transfers, currency distribution, vault management, and regulatory reporting with audit-ready documentation and compliance dashboards."
        }
    ],
    cta: {
        text: "Transform your banking operations with AI intelligence",
        buttonText: "Transform Banking Logistics",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 8: COMMAND-CENTER DASHBOARDS
// ============================================================================

export const section8_Dashboards: SecureLogisticsSection = {
    id: "command-dashboards",
    badgeLabel: "Dashboard Intelligence",
    title: "Command-Center Dashboards",
    subtitle: "Real-Time, Predictive & Audit-Ready Intelligence. 8 specialized dashboards providing executive oversight, operational control, risk analytics, and compliance management.",
    statistics: [
        {
            value: "8",
            label: "specialized dashboards",
            icon: MonitorDot
        },
        {
            value: "50",
            label: "real-time widgets",
            icon: Gauge
        },
        {
            value: "100",
            label: "live operational metrics",
            icon: Activity
        },
        {
            value: "10",
            label: "user role types",
            icon: Users
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Executive Overview",
            features: ["Live operations snapshot", "Risk index panel", "Financial exposure", "SLA health metrics"]
        },
        {
            icon: Truck,
            title: "Operations Monitoring",
            features: ["Live vehicle tracking", "Cash load panel", "Reverse movements", "Vehicle health"]
        },
        {
            icon: Cpu,
            title: "Risk Analytics",
            features: ["Predictive risk engine", "Behavioral analytics", "Incident forecasting", "Prevention recommendations"]
        },
        {
            icon: FileCheck,
            title: "Compliance Cockpit",
            features: ["Audit timeline", "Insurance readiness", "Regulatory reports", "Evidence completeness"]
        }
    ],
    verticalTabs: [
        {
            title: "Executive Command Overview",
            description: "Board-level visibility with live operations snapshot, risk index panel, financial exposure tracking, and SLA health for faster executive decision-making."
        },
        {
            title: "Live Cash & Vehicle Operations",
            description: "Real-time monitoring of every CIT vehicle with GPS tracking, route adherence, vehicle health, cash load panels, and reverse cash movements."
        },
        {
            title: "High-Value Asset Monitoring",
            description: "Full lifecycle tracking of bullion, jewellery, minerals with asset ledger, custody chain timeline, risk intelligence, and reverse logistics visibility."
        },
        {
            title: "Vault Intelligence",
            description: "Complete vault security with occupancy tracking, access control logs, AI-powered surveillance alerts, and audit readiness dashboards."
        },
        {
            title: "Banking Cash Intelligence",
            description: "ATM forecasting, branch cash health, cheque logistics tracking, and RBI-compliant reporting for banking operations optimization."
        },
        {
            title: "AI Risk & Predictive Analytics",
            description: "Predictive risk engine, behavioral analytics, incident forecasting, and proactive security recommendations for prevention-first operations."
        },
        {
            title: "Incident & Escalation Center",
            description: "Live incident queue, automated escalation workflows, digital evidence capture, and resolution tracking for faster incident management."
        },
        {
            title: "Compliance & Audit Cockpit",
            description: "One-click audit readiness with asset movement logs, insurance evidence packs, regulatory reports, and compliance dashboards."
        }
    ],
    cta: {
        text: "Experience intelligent command and control",
        buttonText: "Request Dashboard Demo",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 9: INDUSTRY-SPECIFIC SOLUTIONS
// ============================================================================

export const section9_Industries: SecureLogisticsSection = {
    id: "industry-solutions",
    badgeLabel: "Industry Expertise",
    title: "Industry-Specific Solutions",
    subtitle: "Tailored Solutions Across Multiple Sectors. Specialized logistics solutions for retail, banking, bullion & jewellery, mining & minerals, government & PSU, and corporate enterprises.",
    statistics: [
        {
            value: "15",
            label: "industries served",
            icon: Globe
        },
        {
            value: "100",
            label: "use cases deployed",
            icon: Briefcase
        },
        {
            value: "95",
            label: "client satisfaction rate",
            icon: Award
        },
        {
            value: "100",
            label: "regulatory compliance",
            icon: FileCheck
        }
    ],
    portfolioCards: [
        {
            icon: Building2,
            title: "Retail & Enterprises",
            features: ["Daily cash collection", "Reverse logistics", "Store reconciliation", "Multi-location support"]
        },
        {
            icon: Gem,
            title: "Bullion & Jewellery",
            features: ["Secure forward logistics", "Reverse asset returns", "Audit-ready traceability", "Insurance compliance"]
        },
        {
            icon: Package,
            title: "Mining & Minerals",
            features: ["High-value mineral transport", "Regulatory compliance", "Export documentation", "Secure custody"]
        },
        {
            icon: Landmark,
            title: "Government & PSU",
            features: ["Currency distribution", "Document custody", "High audit standards", "Transparent operations"]
        }
    ],
    verticalTabs: [
        {
            title: "Retail & FMCG",
            description: "Daily cash collection from stores, reverse end-of-day pickups, faster reconciliation, reduced pilferage, and improved store-level accountability."
        },
        {
            title: "Banking & Financial Services",
            description: "ATM replenishment, branch cash management, cheque logistics, vault operations, and regulatory compliance with RBI-aligned processes."
        },
        {
            title: "Bullion, Jewellery & Precious Assets",
            description: "Secure bullion movement, retail-to-vault reverse logistics, audit and valuation transport, and full lifecycle traceability for HNI clients."
        },
        {
            title: "Mining, Minerals & Export",
            description: "Specialized transport for diamonds, gemstones, and minerals with customs coordination, export compliance, and secure vault-to-port logistics."
        }
    ],
    cta: {
        text: "Discover solutions tailored to your industry",
        buttonText: "Explore Industry Solutions",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "Built for Zero-Loss, Predictive & Audit-Ready Operations",
    subtitle: "Replace manual, manpower-heavy security models with AI-driven intelligence. Technology-first logistics that scales from city to national operations with measurable business impact.",
    buttonText: "Book a Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allSecureLogisticsSections = [
    section1_CashMonetary,
    section2_HighValue,
    section3_Vaults,
    section4_VIPLogistics,
    section5_Automobiles,
    section6_CommandCenter,
    section7_Banking,
    section8_Dashboards,
    section9_Industries
];

