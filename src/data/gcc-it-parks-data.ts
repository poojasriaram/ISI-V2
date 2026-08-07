import {
    ShieldCheck, Activity, Zap, Eye, Database, BarChart3, 
    ShieldAlert, Globe, Camera, Search, ShieldX, Users, 
    Lock as LockIcon, Clock, Building2, Bell, Phone, Radio, 
    Cpu, Scan, Landmark, MapPin, Heart, Wifi, MonitorDot,
    AlertTriangle, Server, Fingerprint, Key, Shield
} from "lucide-react";

export interface GCCStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface GCCCard {
    icon: any  ;
    title: string;
    features: string[];
}

export interface GCCTab {
    title: string;
    description: string;
}

export interface GCCSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: GCCStatistic[];
    portfolioCards: GCCCard[];
    verticalTabs: GCCTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const gccHero = {
    badge: "GCC / IT Parks Security Platform",
    title: "AI-Driven Workplace Security, Infrastructure Intelligence & Digital Ecosystem Protection",
    subtitle: "Enterprise-grade security platform designed to protect Global Capability Centers (GCCs), IT parks, technology campuses, and digital innovation hubs through AI-powered monitoring, operational intelligence, and integrated command centers."
};

export const gccHeroSlides = [
    {
        title: "AI-Driven Workplace Security & Campus Safety",
        subtitle: "Protecting employees, high-value assets, and global operations teams through AI-powered real-time monitoring."
    },
    {
        title: "Integrated Campus Operational Intelligence",
        subtitle: "A unified AI ecosystem for managing facility efficiency, workforce flow, and corporate safety protocols."
    },
    {
        title: "Mission-Critical IT Infrastructure Protection",
        subtitle: "Continuous monitoring for data centers, server rooms, and digital communication networks."
    },
    {
        title: "Corporate Security Command Centers",
        subtitle: "Centralized C4I platform for seamless multi-site visibility and rapid incident response coordination."
    }
];

// ============================================================================
// SECTION 1: WORKPLACE INTELLIGENCE PLATFORM
// ============================================================================

export const section1_WorkplaceIntelligence: GCCSection = {
    id: "workplace-intelligence",
    badgeLabel: "Workplace Intelligence Platform",
    title: "Smart Security & Operations for Technology Ecosystems",
    subtitle: "GCCs and IT parks host high-value intellectual property, global operations teams, and mission-critical IT infrastructure. Ensuring workforce safety, infrastructure reliability, and operational continuity is essential. Our GCC / IT Parks platform integrates AI surveillance, access control systems, infrastructure monitoring, and predictive risk intelligence to create secure and resilient technology workplaces.",
    statistics: [
        {
            value: "45%",
            label: "reduction in workplace security incidents",
            icon: ShieldCheck
        },
        {
            value: "99.9%",
            label: "technology campus monitoring uptime",
            icon: Activity
        },
        {
            value: "35%",
            label: "faster incident response coordination",
            icon: Zap
        },
        {
            value: "100%",
            label: "visibility across IT park operations",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Database,
            title: "Predictive Security",
            features: ["Workplace risk prediction", "Infrastructure failure alerts", "Employee safety analytics", "Disruption forecasting"]
        },
        {
            icon: BarChart3,
            title: "Workplace Governance",
            features: ["Campus safety dashboards", "Performance analytics", "Compliance monitoring", "Security audit tracking"]
        },
        {
            icon: ShieldAlert,
            title: "Safety Hub Ops",
            features: ["AI surveillance", "Workforce flow tracking", "Infrastructure alerts", "Crisis coordination"]
        },
        {
            icon: Globe,
            title: "Global Compliance",
            features: ["Multi-site integration", "International safety standards", "Privacy-first processing", "Audit-ready reporting"]
        }
    ],
    verticalTabs: [
        {
            title: "Global Capability Centers (GCCs)",
            description: "GCCs require secure monitoring of corporate operations, executive offices, and global operations teams. Our platform enables enterprises to maintain secure, compliant, and highly monitored digital workplaces. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        },
        {
            title: "IT Parks & Tech Campuses",
            description: "Large IT parks require centralized monitoring of multiple corporate offices, shared infrastructure, and workforce environments. Our solutions enable operators to maintain secure and efficient technology ecosystems. This deeply integrated methodology drive strategic value by minimizing operational disruptions."
        },
        {
            title: "Data Centers & Cloud Facilities",
            description: "Technology campuses hosting data centers require strict monitoring of restricted zones, server environments, and digital infrastructure. Our platform ensures secure access control and infrastructure protection for mission-critical data environments. Our experts continuously optimize security frameworks."
        },
        {
            title: "Innovation Hubs & R&D Centers",
            description: "Innovation hubs require protection of intellectual property, sensitive equipment, and restricted laboratories. Our systems enable organizations to maintain secure research environments and protect critical innovation assets. We prioritize continuous monitoring and predictive analytics."
        }
    ],
    cta: {
        text: "Build a secure and resilient digital workplace",
        buttonText: "Explore Workplace Intelligence",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: WORKFORCE & FACILITY SAFETY
// ============================================================================

export const section2_WorkforceSafety: GCCSection = {
    id: "workforce-safety",
    badgeLabel: "Workforce & Facility Safety Monitoring",
    title: "AI-Powered Campus Surveillance",
    subtitle: "Advanced monitoring systems designed to protect employees, visitors, executives, and workplace facilities across large technology campuses.",
    statistics: [
        {
            value: "40%",
            label: "faster threat detection",
            icon: Zap
        },
        {
            value: "95%",
            label: "security alert accuracy",
            icon: ShieldCheck
        },
        {
            value: "30%",
            label: "reduction in unauthorized access",
            icon: ShieldX
        },
        {
            value: "24×7",
            label: "real-time campus monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "AI Campus Surveillance",
            features: ["HD office surveillance", "Campus perimeter monitoring", "Parking & gate tracking", "Workspace monitoring"]
        },
        {
            icon: ShieldAlert,
            title: "Behavioral Risk Detection",
            features: ["Suspicious activity detection", "Unauthorized access alerts", "Tailgating detection", "Workspace safety alerts"]
        },
        {
            icon: Users,
            title: "Employee Safety Tracking",
            features: ["Late-night shift monitoring", "Emergency distress alerts", "Visitor activity tracking", "Workplace analytics"]
        },
        {
            icon: LockIcon,
            title: "Privacy-First Ops",
            features: ["Edge AI processing", "Encrypted data monitoring", "Privacy-aware policies", "DPDP-compliant systems"]
        }
    ],
    verticalTabs: [
        {
            title: "Employee Well-being",
            description: "Ensuring 24/7 safety for workforce teams, especially during late-night shifts and transit between campus facilities. By integrating advanced technological solutions, we create a robust safety architecture. Our dedicated command centers orchestrate seamless coordination."
        },
        {
            title: "Access Integrity",
            description: "Preventing tailgating and unauthorized entry into corporate offices through AI-driven facial recognition and badge sync. This deeply integrated methodology not only safeguards assets but also drives strategic value. Our experts continuously optimize security frameworks."
        },
        {
            title: "Visitor Management",
            description: "Automated tracking and monitoring of visitors, contractors, and vendors within secure corporate environments. We prioritize continuous monitoring and predictive analytics to stay ahead of potential security threats. Our tailored solutions ensure elite protection."
        },
        {
            title: "Perimeter Guard",
            description: "Securing large technology park perimeters using smart fencing, AI cameras, and rapid response deployment teams. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards."
        }
    ],
    cta: {
        text: "Enhance your workforce safety infrastructure",
        buttonText: "View Surveillance Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: SMART WORKPLACE OPERATIONS
// ============================================================================

export const section3_WorkplaceOps: GCCSection = {
    id: "workplace-operations",
    badgeLabel: "Smart Workplace Operations",
    title: "Intelligent Campus & Workforce Management",
    subtitle: "Technology campuses require continuous monitoring of employee movement, facility operations, and corporate workspace activity.",
    statistics: [
        {
            value: "50%",
            label: "faster operational anomaly detection",
            icon: Zap
        },
        {
            value: "35%",
            label: "improvement in security efficiency",
            icon: BarChart3
        },
        {
            value: "25%",
            label: "reduction in facility disruptions",
            icon: Activity
        },
        {
            value: "100%",
            label: "real-time visibility across campus",
            icon: MonitorDot
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Workforce Flow Analytics",
            features: ["Entry and exit monitoring", "Movements analytics", "Visitor flow management", "Congestion insights"]
        },
        {
            icon: Fingerprint,
            title: "Smart Access Control",
            features: ["Biometric authentication", "Data center access", "Visitor management", "Restricted zone monitoring"]
        },
        {
            icon: Building2,
            title: "Campus Facility Monitoring",
            features: ["Smart building systems", "Parking facility monitoring", "Conference security", "Shared workspace security"]
        },
        {
            icon: Key,
            title: "Asset Stewardship",
            features: ["Equipment location tracking", "Inventory protection", "Digital asset guarding", "High-value zone control"]
        }
    ],
    verticalTabs: [
        {
            title: "Operational Resilience",
            description: "Integrating facility management with security data to prevent operational outages and ensure business continuity. By integrating advanced technological solutions, we create a robust protection architecture. This proactive strategy dramatically reduces disruption times."
        },
        {
            title: "Space Optimization",
            description: "Analyzing workspace utilization and crowd density to optimize real estate footprint and employee comfort. We prioritize continuous monitoring and predictive analytics to stay ahead of operational needs. Our tailored solutions seamlessly blend into your existing operations."
        },
        {
            title: "Access Automation",
            description: "Streamlining employee and visitor entry through touchless biometric systems and digital badge authorization. Through the deployment of industry-leading protocols, we guarantee an elite level of operational intelligence. Our command centers orchestrate seamless flow."
        },
        {
            title: "Facility Guard",
            description: "24/7 monitoring of HVAC, elevators, and electrical systems synchronized with security response teams for rapid hazard control. This deeply integrated methodology not only safeguards critical assets but also drives strategic value."
        }
    ],
    cta: {
        text: "Optimize your corporate workplace operations",
        buttonText: "Explore Operations Tech",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: IT INFRASTRUCTURE PROTECTION
// ============================================================================

export const section4_ITInfraProtection: GCCSection = {
    id: "it-infrastructure",
    badgeLabel: "IT Infrastructure Protection",
    title: "Monitoring Critical Technology Infrastructure",
    subtitle: "GCCs and IT parks rely on critical infrastructure including data centers, IT networks, server rooms, and digital communication systems.",
    statistics: [
        {
            value: "99.7%",
            label: "infrastructure monitoring uptime",
            icon: Activity
        },
        {
            value: "60%",
            label: "faster infrastructure fault detection",
            icon: Zap
        },
        {
            value: "30%",
            label: "reduction in infrastructure downtime",
            icon: Clock
        },
        {
            value: "100%",
            label: "visibility across technology assets",
            icon: Server
        }
    ],
    portfolioCards: [
        {
            icon: Server,
            title: "Data Center Monitoring",
            features: ["Data center monitoring", "Server room environmental", "Electrical infrastructure", "Network facility tracking"]
        },
        {
            icon: ShieldCheck,
            title: "Digital Asset Protection",
            features: ["IT hardware monitoring", "Server room access control", "IP protection zones", "Equipment security"]
        },
        {
            icon: Radio,
            title: "Connectivity Guard",
            features: ["Network path monitoring", "Fiber conduit security", "Signal integrity alerts", "Communication redundancy"]
        },
        {
            icon: AlertTriangle,
            title: "Environmental Monitoring",
            features: ["Temperature monitoring", "Fire detection alerts", "Intrusion sensors", "Facility hazard monitoring"]
        }
    ],
    verticalTabs: [
        {
            title: "Server Room Security",
            description: "Multi-layered physical security for server rooms, including biometric access and 360-degree AI surveillance. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous security standards. We leverage real-time intelligence to neutralize risks."
        },
        {
            title: "Uptime Maintenance",
            description: "Predictive alerts for hardware failure or environmental risks (heat/moisture) to prevent IT system downtime. By integrating advanced technological solutions, we create a robust protection architecture. This proactive strategy virtually eliminates vulnerabilities."
        },
        {
            title: "IP Zone Protection",
            description: "Specific security protocols for R&D labs and innovation centers hosting sensitive intellectual property and prototypes. We prioritize continuous monitoring and predictive analytics to stay ahead of potential theft. Our tailored solutions ensure elite protection."
        },
        {
            title: "Disaster Readiness",
            description: "Synchronizing physical security with digital disaster recovery protocols to ensure 24/7 operational continuity. Through the deployment of industry-leading protocols and state-of-the-art systems, we guarantee an elite level of protection."
        }
    ],
    cta: {
        text: "Protect the backbone of your digital operations",
        buttonText: "Secure IT Infrastructure",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: CORPORATE SECURITY COMMAND CENTER
// ============================================================================

export const section5_CommandCenter: GCCSection = {
    id: "gcc-command",
    badgeLabel: "Corporate Security Command Center",
    title: "Unified Workplace Security & Operations Intelligence",
    subtitle: "Centralized monitoring hub integrating campus surveillance, workforce analytics, infrastructure monitoring, and incident response systems.",
    statistics: [
        {
            value: "60%",
            label: "faster incident escalation",
            icon: Zap
        },
        {
            value: "100%",
            label: "campus-wide operational visibility",
            icon: Eye
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Clock
        },
        {
            value: "AI",
            label: "predictive workplace intelligence",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Unified Operations Dashboard",
            features: ["Campus surveillance feeds", "Workforce analytics", "Infrastructure health", "Incident coordination"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Intelligence",
            features: ["Workplace risk detection", "Infra failure alerts", "Security threat prediction", "Disruption analytics"]
        },
        {
            icon: Radio,
            title: "Incident Escalation Manager",
            features: ["Automated security alerts", "Response coordination", "Compliance monitoring", "Performance tracking"]
        },
        {
            icon: Scan,
            title: "Crisis C4I Interface",
            features: ["Emergency broadcast sync", "Building evacuation control", "Stakeholder comms hub", "Audit-ready logging"]
        }
    ],
    verticalTabs: [
        {
            title: "Centralized Mastery",
            description: "Consolidating multiple campuses and GCC locations into a single, global security operations 'cockpit'. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate. Our command centers orchestrate seamless coordination."
        },
        {
            title: "Incident Orchestration",
            description: "Automated workflows that guide security teams through standard operating procedures (SOPs) during threat events. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous safety standards. This strategy dramatically reduces response times."
        },
        {
            title: "Executive View",
            description: "High-level risk dashboards for corporate leadership to monitor global site security and compliance status. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions ensure elite protection."
        },
        {
            title: "Compliance Auditing",
            description: "Automated generation of safety reports and compliance audits for corporate governance and regulatory requirements. By integrating advanced technological solutions, we create a robust defense architecture. Our dedicated command centers ensure seamless reporting."
        }
    ],
    cta: {
        text: "Bring your workplace intelligence to life",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Workplace Security Is Secure, Intelligent & Digital-First",
    subtitle: "Replace fragmented workplace security systems with AI-powered corporate intelligence built for safety, innovation, and operational excellence.",
    buttonText: "Book a Workplace Security Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allGCCSections = [
    section1_WorkplaceIntelligence,
    section2_WorkforceSafety,
    section3_WorkplaceOps,
    section4_ITInfraProtection,
    section5_CommandCenter
];
