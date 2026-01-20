import {
    Building2, Landmark, GraduationCap, Factory, Hospital, Plane,
    Users, Shield, BadgeCheck, MonitorDot, Fingerprint, ShieldCheck,
    Lock, Camera, Smartphone, Wifi, Eye, Network, Target, Database,
    CheckCircle2, TrendingUp, Clock, Award, Zap, Activity, Globe, Cpu,
    Settings, AlertTriangle
} from "lucide-react";

// ============================================================================
// INTERFACES (Reuse from secure-value-logistics-data.ts)
// ============================================================================

export interface VerticalStatistic {
    value: string;
    label: string;
    icon: any;
}

export interface VerticalCard {
    icon: any;
    title: string;
    features: string[];
}

export interface VerticalTab {
    title: string;
    description: string;
}

export interface VerticalSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: VerticalStatistic[];
    portfolioCards: VerticalCard[];
    verticalTabs: VerticalTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// VERTICAL 1: HOSPITALITY (Hotels & Event Management)
// ============================================================================

export const vertical1_Hospitality: VerticalSection = {
    id: "hospitality",
    badgeLabel: "Hospitality Excellence",
    title: "Smart Physical Security for Large Conventional Hotels & Event Management",
    subtitle: "Where Human Vigilance Meets Intelligent Technology. Biometric tracking, AI sensors, and unified command centers for premium venues.",
    statistics: [
        {
            value: "95",
            label: "guest satisfaction score",
            icon: Award
        },
        {
            value: "24/7",
            label: "continuous monitoring",
            icon: Eye
        },
        {
            value: "50",
            label: "hotels & venues secured",
            icon: Building2
        },
        {
            value: "0",
            label: "major security incidents",
            icon: ShieldCheck
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Core Guarding Services",
            features: ["Biometric tracking", "GPS-enabled patrols", "Hospitality-trained personnel", "Instant incident alerts"]
        },
        {
            icon: Shield,
            title: "Perimeter & Premises Protection",
            features: ["Thermal cameras", "AI sensors", "Visitor management", "Anti-ram bollards for 5-star venues"]
        },
        {
            icon: BadgeCheck,
            title: "Guest Areas & Event Security",
            features: ["Zoned access control", "Crowd density monitoring", "VIP protection", "Emergency response coordination"]
        },
        {
            icon: MonitorDot,
            title: "Central Command Centre",
            features: ["Unified dashboard for guards", "Incident management", "Parking & compliance", "Multi-property management"]
        }
    ],
    verticalTabs: [
        {
            title: "5-Star Hotels",
            description: "Premium security for luxury hotels with discreet guarding, biometric access control, VIP protection, and 24/7 command center monitoring for guest safety and asset protection."
        },
        {
            title: "Event Venues",
            description: "Comprehensive event security with crowd management, access control, emergency response protocols, and real-time monitoring for conferences, weddings, and large gatherings."
        },
        {
            title: "Conference Centers",
            description: "Professional security for business events with delegate management, secure zones, AV equipment protection, and coordinated security for high-profile corporate events."
        },
        {
            title: "Multi-Property Management",
            description: "Centralized security management across multiple hotel properties with unified dashboards, standardized protocols, and coordinated incident response."
        }
    ],
    cta: {
        text: "Elevate your hospitality security with intelligent solutions",
        buttonText: "Secure Your Hospitality Operations",
        link: "/verticals/hospitality"
    }
};

// ============================================================================
// VERTICAL 2: BFSI (Banking, Financial Services & Insurance)
// ============================================================================

export const vertical2_BFSI: VerticalSection = {
    id: "bfsi",
    badgeLabel: "Banking Security",
    title: "Smart Physical Security for BFSI Sector",
    subtitle: "Tech-Integrated Security for Banking, Financial Services, and Insurance. RBI-compliant personnel, biometric access, AI video analytics, and multi-location oversight.",
    statistics: [
        {
            value: "100",
            label: "RBI compliance rate",
            icon: CheckCircle2
        },
        {
            value: "500",
            label: "branches secured nationwide",
            icon: Landmark
        },
        {
            value: "0",
            label: "security breaches",
            icon: ShieldCheck
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: MonitorDot
        }
    ],
    portfolioCards: [
        {
            icon: Fingerprint,
            title: "Core Guarding Services",
            features: ["Biometric/facial recognition", "RBI-compliant personnel", "GPS tracking", "Ex-paramilitary training"]
        },
        {
            icon: ShieldCheck,
            title: "Branch & Customer Area Integrity",
            features: ["Teller counter protection", "AI video analytics", "Zoned access", "Silent panic alarms"]
        },
        {
            icon: Lock,
            title: "Strong Room & Vault Security",
            features: ["Multi-layer vault access", "Cash handling monitoring", "Armored CIT escorts", "ATM protection"]
        },
        {
            icon: MonitorDot,
            title: "Central Command Centre",
            features: ["Multi-location oversight", "Real-time alerts", "Compliance reporting", "Automated audit trails"]
        }
    ],
    verticalTabs: [
        {
            title: "Retail Banking",
            description: "Comprehensive branch security with RBI-compliant guarding, biometric access control, cash handling monitoring, and real-time incident management for customer and staff safety."
        },
        {
            title: "Corporate Banking",
            description: "High-security solutions for corporate banking centers with vault protection, executive security, secure meeting rooms, and advanced access control systems."
        },
        {
            title: "ATM Networks",
            description: "24/7 ATM security with cash replenishment escorts, surveillance monitoring, anti-skimming protection, and rapid incident response for unattended banking points."
        },
        {
            title: "Insurance Offices",
            description: "Professional security for insurance offices with document security, visitor management, employee safety protocols, and compliance-ready audit trails."
        }
    ],
    cta: {
        text: "Protect your financial institution with RBI-compliant security",
        buttonText: "Protect Your Financial Institution",
        link: "/verticals/bfsi"
    }
};

// ============================================================================
// VERTICAL 3: EDUCATION (Schools, Colleges & Universities)
// ============================================================================

export const vertical3_Education: VerticalSection = {
    id: "education",
    badgeLabel: "Campus Safety",
    title: "Smart Physical Security for Education & Higher Education Sector",
    subtitle: "Safe Learning Environments for Schools, Colleges, and Universities. Campus protection with autonomous drone patrols, AI perimeter sensors, POCSO-compliant protocols, and multi-campus management.",
    statistics: [
        {
            value: "500",
            label: "schools & campuses secured",
            icon: GraduationCap
        },
        {
            value: "0",
            label: "major incidents reported",
            icon: ShieldCheck
        },
        {
            value: "94",
            label: "parent trust score",
            icon: Award
        },
        {
            value: "100",
            label: "compliance with regulations",
            icon: CheckCircle2
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Core Guarding Services",
            features: ["Biometric attendance", "AI patrols", "Specially trained personnel", "Mobile app alerts for staff/students"]
        },
        {
            icon: Plane,
            title: "Campus Boundary Protection",
            features: ["Autonomous drone patrols", "AI perimeter sensors", "QR visitor management", "Anti-climb fencing"]
        },
        {
            icon: AlertTriangle,
            title: "Campus & Building Integrity",
            features: ["Zoned access", "AI analytics", "Panic buttons", "Hostel monitoring, POCSO-compliant protocols"]
        },
        {
            icon: MonitorDot,
            title: "Central Command Centre",
            features: ["Unified dashboard for guards", "Transport tracking", "Intrusion alerts", "Multi-campus management"]
        }
    ],
    verticalTabs: [
        {
            title: "K-12 Schools",
            description: "Child-safe security for schools with POCSO-compliant protocols, parent communication systems, student tracking, and emergency response procedures for safe learning environments."
        },
        {
            title: "Colleges & Universities",
            description: "Campus-wide security for higher education with hostel monitoring, library security, examination hall protection, and 24/7 command center oversight."
        },
        {
            title: "Hostels & Dormitories",
            description: "Residential security with gender-specific protocols, visitor management, night patrols, emergency response systems, and parent notification capabilities."
        },
        {
            title: "Multi-Campus Management",
            description: "Centralized security management across multiple campuses with unified dashboards, standardized protocols, and coordinated incident response for educational institutions."
        }
    ],
    cta: {
        text: "Create a safe learning environment for your students",
        buttonText: "Secure Your Campus",
        link: "/verticals/education"
    }
};

// ============================================================================
// VERTICAL 4: MANUFACTURING (Industrial & Defence)
// ============================================================================

export const vertical4_Manufacturing: VerticalSection = {
    id: "manufacturing",
    badgeLabel: "Industrial Security",
    title: "Smart Physical Security for Manufacturing & Defence Sectors",
    subtitle: "Elite Security for High-Stakes Industrial and Defence Operations. Ex-defence personnel, thermal drones, AI fence sensors, RFID tracking, and cyber-physical security fusion.",
    statistics: [
        {
            value: "0",
            label: "asset loss incidents",
            icon: ShieldCheck
        },
        {
            value: "100",
            label: "facilities secured",
            icon: Factory
        },
        {
            value: "24/7",
            label: "perimeter protection",
            icon: Eye
        },
        {
            value: "100",
            label: "AI-powered surveillance",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: ShieldCheck,
            title: "Core Guarding Services",
            features: ["Ex-defence/paramilitary personnel", "Biometric/facial recognition", "AI-optimized patrols", "Tamper-proof audits"]
        },
        {
            icon: Plane,
            title: "Perimeter & Asset Protection",
            features: ["Autonomous thermal drones", "AI fence sensors", "RFID tracking", "K9 units, anti-drone integration"]
        },
        {
            icon: Settings,
            title: "Production Floor & Supply Chain",
            features: ["Multi-factor access control", "AI video analytics", "Secure logistics", "ANPR gate verification"]
        },
        {
            icon: Cpu,
            title: "Central Command Centre",
            features: ["Multi-site intelligence", "Predictive risk analytics", "Digital twin mapping", "Cyber-physical security fusion"]
        }
    ],
    verticalTabs: [
        {
            title: "Manufacturing Plants",
            description: "Comprehensive industrial security with production floor monitoring, asset tracking, supply chain protection, and 24/7 perimeter surveillance for manufacturing facilities."
        },
        {
            title: "Defence Facilities",
            description: "High-security solutions for defence installations with ex-military personnel, advanced surveillance, restricted zone management, and classified area protection."
        },
        {
            title: "Warehouses & Distribution",
            description: "Logistics security with inventory protection, loading dock monitoring, vehicle tracking, and automated access control for distribution centers."
        },
        {
            title: "Supply Chain Security",
            description: "End-to-end supply chain protection with RFID tracking, secure transport escorts, real-time monitoring, and tamper-proof documentation."
        }
    ],
    cta: {
        text: "Protect your industrial assets with military-grade security",
        buttonText: "Secure Your Industrial Operations",
        link: "/verticals/manufacturing"
    }
};

// ============================================================================
// VERTICAL 5: HEALTHCARE (Hospitals & Medical Facilities)
// ============================================================================

export const vertical5_Healthcare: VerticalSection = {
    id: "healthcare",
    badgeLabel: "Healthcare Protection",
    title: "Healthcare Security & Facility Management",
    subtitle: "Always-On Protection for Patients, Staff, and Critical Assets. 24/7 smart hospital protection with ICU/pharmacy security, visitor management, infection control, and IoT-enabled facility management.",
    statistics: [
        {
            value: "100",
            label: "hospitals & clinics secured",
            icon: Hospital
        },
        {
            value: "24/7",
            label: "patient safety monitoring",
            icon: Eye
        },
        {
            value: "0",
            label: "security incidents",
            icon: ShieldCheck
        },
        {
            value: "100",
            label: "IoT-enabled facilities",
            icon: Wifi
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "24/7 Smart Hospital Protection",
            features: ["Integrated CCTV", "Access control", "Digital guard tours", "ICU/pharmacy security"]
        },
        {
            icon: Smartphone,
            title: "Digital Guard Operations",
            features: ["Mobile apps for post orders", "Patrol logging", "Incident reporting", "Live management visibility"]
        },
        {
            icon: Users,
            title: "Patient & Staff Safety",
            features: ["Visitor registration", "Badge management", "De-escalation trained guards", "Emergency lockdown systems"]
        },
        {
            icon: Wifi,
            title: "Facility Management & IoT",
            features: ["Building automation", "Predictive maintenance", "Infection control", "Energy optimization, asset tracking"]
        }
    ],
    verticalTabs: [
        {
            title: "Hospitals",
            description: "Comprehensive hospital security with ICU protection, pharmacy security, emergency room monitoring, and 24/7 command center oversight for patient and staff safety."
        },
        {
            title: "Clinics & Diagnostic Centers",
            description: "Professional security for outpatient facilities with visitor management, equipment protection, staff safety protocols, and emergency response systems."
        },
        {
            title: "Pharmacies",
            description: "Specialized pharmacy security with controlled substance monitoring, access control, inventory protection, and compliance-ready audit trails."
        },
        {
            title: "Medical Campuses",
            description: "Multi-building healthcare security with unified command centers, inter-building coordination, parking management, and emergency response protocols."
        }
    ],
    cta: {
        text: "Ensure patient safety with intelligent healthcare security",
        buttonText: "Protect Your Healthcare Facility",
        link: "/verticals/healthcare"
    }
};

// ============================================================================
// VERTICAL 6: DRONES (Aerial Intelligence & Drone Services)
// ============================================================================

export const vertical6_Drones: VerticalSection = {
    id: "drones",
    badgeLabel: "Aerial Intelligence",
    title: "Aerial Intelligence & Drone Services",
    subtitle: "Autonomous Aerial Intelligence You Can Trust. Security monitoring, logistics delivery, infrastructure inspection, and real-time analytics with AI-powered autonomous drones.",
    statistics: [
        {
            value: "1000",
            label: "flight hours completed",
            icon: Plane
        },
        {
            value: "50",
            label: "enterprise clients served",
            icon: Globe
        },
        {
            value: "100",
            label: "AI-powered analytics",
            icon: Cpu
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Eye,
            title: "Enterprise Drone Services",
            features: ["Security & crowd monitoring", "Logistics & express delivery", "Medical drone services", "Municipal mapping"]
        },
        {
            icon: Network,
            title: "Infrastructure & Governance",
            features: ["Rail corridor monitoring", "Bridge inspections", "Pipeline surveillance", "Dam & canal monitoring"]
        },
        {
            icon: Target,
            title: "Private Security & Events",
            features: ["Private security operations", "Crowd management", "Event security, VIP protection", "Real-time analytics"]
        },
        {
            icon: Database,
            title: "Central Command Platform",
            features: ["Unified drone operations", "AI analytics", "Secure integration", "Scalable fleet management"]
        }
    ],
    verticalTabs: [
        {
            title: "Security Monitoring",
            description: "Autonomous drone patrols for perimeter security, crowd monitoring, and incident response with real-time video feeds and AI-powered threat detection."
        },
        {
            title: "Infrastructure Inspection",
            description: "Aerial inspection services for bridges, pipelines, power lines, and industrial facilities with high-resolution imaging and predictive maintenance analytics."
        },
        {
            title: "Logistics & Delivery",
            description: "Express delivery services for medical supplies, documents, and small packages with autonomous navigation and secure payload handling."
        },
        {
            title: "Event Management",
            description: "Event security and crowd management with aerial surveillance, real-time analytics, emergency response coordination, and VIP protection."
        }
    ],
    cta: {
        text: "Deploy autonomous aerial intelligence for your operations",
        buttonText: "Deploy Drone Intelligence",
        link: "/verticals/drones"
    }
};

// ============================================================================
// EXPORT ALL VERTICALS
// ============================================================================

export const allVerticalsPageSections = [
    vertical1_Hospitality,
    vertical2_BFSI,
    vertical3_Education,
    vertical4_Manufacturing,
    vertical5_Healthcare,
    vertical6_Drones
];
