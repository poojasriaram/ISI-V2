import {
    Globe, Shield, HeartPulse, Zap,
    Monitor, Server, Award, ChevronRight,
    CheckCircle2, ArrowRight, FileText,
    Users, Lock, Wifi, Smartphone,
    Network, Cpu, Clock, Truck,
    Stethoscope, Target, Eye, Activity,
    ShieldCheck, Radio, Database, HardDrive,
    MessageSquare, GraduationCap, BarChart3,
    Search, SmartphoneNfc, Fingerprint,
    LifeBuoy, Cloud, Mail, AlertCircle,
    UserCheck, Brain, Mic2, LayoutPanelTop,
    Droplets, Settings, ShieldAlert, Computer,
    RefreshCw, Home, SearchCode, ShieldHalf
} from "lucide-react";

export interface SchoolSafetyStatistic {
    label: string;
    value: string;
    sub: string;
    icon: any;
}

export interface SchoolSafetyPortfolioCard {
    title: string;
    icon: any;
    features: string[];
}

export interface SchoolSafetyTab {
    id: string;
    label: string;
    icon: any;
    title: string;
    desc: string;
    items: string[];
}

export interface SchoolSafetySection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: SchoolSafetyStatistic[];
    portfolioCards: SchoolSafetyPortfolioCard[];
    verticalTabs: SchoolSafetyTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// SECTION 1: RISK INTELLIGENCE & STRATEGIC BLUEPRINTING
// ============================================================================

export const riskIntelligenceSection: SchoolSafetySection = {
    id: "risk-intelligence",
    badgeLabel: "Strategic Foundation",
    title: "Risk Intelligence & Blueprinting",
    subtitle: "The foundation of every successful deployment. We move beyond assumptions to data-driven risk mapping.",
    statistics: [
        { label: "Audit Duration", value: "15 Days", sub: "Comprehensive campus deep-dive", icon: Clock },
        { label: "Compliance", value: "100%", sub: "CBSE/NCERT/DPDP Alignment", icon: CheckCircle2 },
        { label: "Risk Mapping", value: "Aerial", sub: "Drone & Thermal Imaging", icon: Target },
        { label: "Stakeholders", value: "All-In", sub: "Co-creation workshops", icon: Users },
    ],
    portfolioCards: [
        {
            title: "Campus Audit",
            icon: Search,
            features: [
                "Aerial drone mapping & thermal imaging",
                "Access control audit (Hostels/Gates)",
                "Visitor flow simulation",
                "Transport route risk mapping"
            ]
        },
        {
            title: "Infrastructure Audit",
            icon: Activity,
            features: [
                "Electrical panel safety audit",
                "Water storage & hygiene audit",
                "HVAC zone vulnerability check",
                "Lab chemical storage safety"
            ]
        },
        {
            title: "Digital Audit",
            icon: Network,
            features: [
                "Cabling & switch infrastructure audit",
                "WiFi coverage gap mapping",
                "Network penetration testing",
                "Cybersecurity social engineering"
            ]
        },
        {
            title: "Compliance Audit",
            icon: FileText,
            features: [
                "CBSE/ICSE/NCERT Gap Analysis",
                "BIS Water Quality Standards",
                "CERT-In & ISO 27001 Alignment",
                "DPDP Act Regulatory Review"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "blueprint",
            label: "Blueprint",
            icon: FileText,
            title: "Strategic Safety Roadmap",
            desc: "A color-coded intelligence report with budget-phased recommendations.",
            items: [
                "15-day risk assessment framework",
                "Infrastructure vulnerability mapping",
                "Regulatory gap identification",
                "Threat modeling for student zones"
            ]
        },
        {
            id: "workshops",
            label: "Workshops",
            icon: Users,
            title: "Stakeholder Co-Creation",
            desc: "Aligning leadership, parents, and authorities on a unified safety mission.",
            items: [
                "Student digital ambassador programs",
                "Parent safety feedback loops",
                "Police & fire officer coordination",
                "Age-appropriate student councils"
            ]
        }
    ],
    cta: {
        text: "Start with a 15-Day Strategic Safety Audit",
        buttonText: "Request Campus Audit",
        link: "#consultation"
    }
};

// ============================================================================
// SECTION 2: CERTIFIED CHILD-SAFE PHYSICAL GUARDING
// ============================================================================

export const physicalGuardingSection: SchoolSafetySection = {
    id: "physical-guarding",
    badgeLabel: "Verified Human Oversight",
    title: "Certified Child-Safe Guarding",
    subtitle: "Moving beyond traditional watchmen to Intelligent Safety Marshals trained in child psychology and de-escalation.",
    statistics: [
        { label: "Vetting", value: "100%", sub: "Police verified & Biometric ID", icon: UserCheck },
        { label: "Gender Diversity", value: "40%+", sub: "Female guard deployment", icon: HeartPulse },
        { label: "Training", value: "NCERT", sub: "Certified safety protocols", icon: GraduationCap },
        { label: "First Aid", value: "Red Cross", sub: "CPR & Emergency certified", icon: LifeBuoy },
    ],
    portfolioCards: [
        {
            title: "Rigorous Vetting",
            icon: ShieldCheck,
            features: [
                "Psychological screening",
                "Biometric digital identity",
                "Police verification records",
                "Specialized hostel vetting"
            ]
        },
        {
            title: "Specialized Training",
            icon: GraduationCap,
            features: [
                "Child dignity sensitization",
                "Trauma-informed de-escalation",
                "POSH compliance response",
                "Adolescent psychology"
            ]
        },
        {
            title: "Operational Rigor",
            icon: Activity,
            features: [
                "Dynamic AI-hotspot patrols",
                "Real-time mobile check-ins",
                "Dedicated shift team leads",
                "IoT-synced incident logging"
            ]
        },
        {
            title: "Residential Safety",
            icon: Lock,
            features: [
                "Segregated hostel duties",
                "Overnight security protocols",
                "Warden empowerment tools",
                "Intrusion deterrent systems"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "training",
            label: "Intelligence",
            icon: Zap,
            title: "Intelligent Guarding",
            desc: "Guards empowered by technology to handle complex institutional needs.",
            items: [
                "NCERT protocol certification",
                "Facilities emergency response",
                "Network monitoring literals",
                "First aid & CPR proficiency"
            ]
        }
    ],
    cta: {
        text: "Experience the Difference of Certified Guarding",
        buttonText: "Meet Our Security Team",
        link: "#consultation"
    }
};

// ============================================================================
// SECTION 3: PRIVACY-FIRST AI VIDEO INTELLIGENCE
// ============================================================================

export const aiVideoSection: SchoolSafetySection = {
    id: "ai-video",
    badgeLabel: "Intelligent Sight",
    title: "Privacy-First AI Intelligence",
    subtitle: "Edge-based vision trained on Indian school environments, detecting risk without compromising student privacy.",
    statistics: [
        { label: "Processing", value: "Edge", sub: "No raw data offsite", icon: Database },
        { label: "Privacy", value: "Restricted", sub: "Zero dorm/bath coverage", icon: Eye },
        { label: "Retention", value: "90 Days", sub: "Auto-deletion policy", icon: Clock },
        { label: "Alerts", value: "<3s", sub: "Gunshot/Aggression detection", icon: Zap },
    ],
    portfolioCards: [
        {
            title: "Behavioral Engine",
            icon: Brain,
            features: [
                "Aggression detection",
                "Playground fall alerts",
                "Crowd bottleneck detection",
                "Unauthorized area alerts"
            ]
        },
        {
            title: "Life Safety AI",
            icon: Mic2,
            features: [
                "Gunshot acoustics detection",
                "Night movement alerts",
                "PPE/Lab safety compliance",
                "Server room entry AI"
            ]
        },
        {
            title: "Zone Intelligence",
            icon: Target,
            features: [
                "Dynamic virtual fencing",
                "Restricted area loitering",
                "Occupancy & density mapping",
                "Tailgating detection guards"
            ]
        },
        {
            title: "Consent & Privacy",
            icon: ShieldCheck,
            features: [
                "Dynamic privacy masking",
                "Auto-deletion audit logs",
                "Encrypted edge processing",
                "DPDP-compliant access"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "privacy",
            label: "Ethical Rail",
            icon: Shield,
            title: "Strict Ethical Guardrails",
            desc: "Purpose-limited and consent-aware surveillance architecture.",
            items: [
                "Zero coverage in classrooms/dormitories",
                "No audio recording in student zones",
                "90-day auto-deletion policy",
                "DPDP Act compliant opt-in access"
            ]
        }
    ],
    cta: {
        text: "Enhance Detection while Maintaining Privacy",
        buttonText: "See AI in Action",
        link: "#consultation"
    }
};

// ============================================================================
// SECTION 4: 24/7 REMOTE COMMAND CENTER (RCC)
// ============================================================================

export const rccSection: SchoolSafetySection = {
    id: "rcc",
    badgeLabel: "Operational Hub",
    title: "24/7 Remote Command Center",
    subtitle: "The dedicated intelligence hub integrating human oversight with unified technology feeds for instantaneous response.",
    statistics: [
        { label: "Alert Triage", value: "<30s", sub: "Verification speed", icon: Monitor },
        { label: "Response", value: "Auto", sub: "Pre-linked protocols", icon: Zap },
        { label: "Integration", value: "100%", sub: "RCC-NOC-SOC Sync", icon: Network },
        { label: "Team", value: "Elite", sub: "Ex-Military/Police analysts", icon: UserCheck },
    ],
    portfolioCards: [
        {
            title: "Unified Dashboard",
            icon: LayoutPanelTop,
            features: [
                "AI video alert feed",
                "Real-time guard GPS",
                "Facilities IoT telemetry",
                "Transport & GPS tracker"
            ]
        },
        {
            title: "Response Protocol",
            icon: Zap,
            features: [
                "Automatic PA system activation",
                "Parent 'All Clear' notifications",
                "Facilities isolation lockdown",
                "Medical ambulance dispatch"
            ]
        },
        {
            title: "Elite Triage",
            icon: UserCheck,
            features: [
                "Ex-military safety analysts",
                "30-second alert verification",
                "Crisis escalation protocols",
                "Police & Fire coordination"
            ]
        },
        {
            title: "Integrated NOC-SOC",
            icon: Network,
            features: [
                "Network health monitoring",
                "Power & UPS telemetry",
                "Cyber-incident sync",
                "Redundant ISP failover"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "response",
            label: "Response",
            icon: Shield,
            title: "Multi-Stage Response",
            desc: "Trigger-based automated sequences for zero-delay safety.",
            items: [
                "Panic button verification",
                "Immediate guard dispatch",
                "Hostel warden auto-notification",
                "Cyber-containment protocols"
            ]
        }
    ],
    cta: {
        text: "Centralize Your Campus Intelligence",
        buttonText: "Tour the RCC Hub",
        link: "#consultation"
    }
};

// ============================================================================
// SECTION 5: SPECIALIZED SOLUTIONS (FACILITIES, MEDICAL, TRANSPORT)
// ============================================================================

export const specializedSolutionsSection: SchoolSafetySection = {
    id: "specialized-solutions",
    badgeLabel: "Integrated Ecosystem",
    title: "Facilities, Medical & Transportation",
    subtitle: "Safety extends to every system that touches a student—the air they breathe, the water they drink, and the buses they ride.",
    statistics: [
        { label: "Fleet Uptime", value: "99.7%", sub: "GPS tracking reliability", icon: Truck },
        { label: "Medical Response", value: "<3m", sub: "Avg response time", icon: Stethoscope },
        { label: "Facilities", value: "99.5%", sub: "Systems availability", icon: Activity },
        { label: "Water Quality", value: "BIS", sub: "Certified standards", icon: Droplets },
    ],
    portfolioCards: [
        {
            title: "Facilities FMS",
            icon: Settings,
            features: [
                "Smart HVAC/Energy management",
                "IoT Water hygiene monitoring",
                "Electrical safety auditing",
                "Lab chemical safety system"
            ]
        },
        {
            title: "Transport TMS",
            icon: Truck,
            features: [
                "AI driver behavior monitoring",
                "Student RFID attendance",
                "Route hazard identification",
                "Parent transit notifications"
            ]
        },
        {
            title: "SMART-Med Hub",
            icon: Stethoscope,
            features: [
                "Connected EMR records",
                "Specialist telemedicine link",
                "Life-saving med equipment",
                "Preventive health programs"
            ]
        },
        {
            title: "Residential Hub",
            icon: Home,
            features: [
                "24/7 Hostel safety framework",
                "Warden digital dashboards",
                "Night-patrol verification",
                "Dignity-first monitoring"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "residential",
            label: "Residential",
            icon: Home,
            title: "Education Townships",
            desc: "Large-scale safety for campuses where students live and learn.",
            items: [
                "24/7 residential framework",
                "Township-scale coordination",
                "Hostel warden digital tools",
                "Dignity-preserving monitoring"
            ]
        }
    ],
    cta: {
        text: "Ensure Safety in Every Student Touchpoint",
        buttonText: "Audit Facilities & Transport",
        link: "#consultation"
    }
};

// ============================================================================
// SECTION 6: ENTERPRISE ICT & CYBERSECURITY
// ============================================================================

export const cyberIctSection: SchoolSafetySection = {
    id: "cyber-ict",
    badgeLabel: "Digital Fortress",
    title: "Enterprise ICT & Security Management",
    subtitle: "Securing the digital learning landscape with zero-trust networks, WiFi 6 management, and 24/7 SOC operations.",
    statistics: [
        { label: "WiFi Uptime", value: "99.99%", sub: "Educational Enterprise", icon: Wifi },
        { label: "Data Breaches", value: "Zero", sub: "Across all deployments", icon: Lock },
        { label: "Threat Detection", value: "<30s", sub: "Avg identification time", icon: Search },
        { label: "Compliance", value: "DPDP", sub: "Full regulatory adherence", icon: FileText },
    ],
    portfolioCards: [
        {
            title: "Network Core (SCNM)",
            icon: Network,
            features: [
                "VLAN Academic segmentation",
                "Structured CAT7 cabling",
                "Redundant ISP failover",
                "VoIP campus-wide telephony"
            ]
        },
        {
            title: "WiFi Management",
            icon: Wifi,
            features: [
                "High-density WiFi 6/6E APs",
                "Student bandwidth fairness",
                "IoT-specific isolated SSID",
                "Heatmap coverage optimization"
            ]
        },
        {
            title: "Cyber Defense (SOC)",
            icon: ShieldCheck,
            features: [
                "Managed EDR on endpoints",
                "Ransomware rollback capability",
                "SOC threat hunting",
                "Multi-factor authentication"
            ]
        },
        {
            title: "IT Infrastructure",
            icon: Server,
            features: [
                "Biometric server entry",
                "Environmental flood sensors",
                "Clean-agent fire suppression",
                "RFID equipment asset tracking"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "cybersecurity",
            label: "Cybersecurity",
            icon: ShieldAlert,
            title: "Defense-in-Depth Strategy",
            desc: "Multi-layered protection for administrative and academic data.",
            items: [
                "Next-Gen Firewall / DDoS",
                "Identity-based Zero Trust",
                "Audit logging & flow monitoring",
                "Automated isolation protocols"
            ]
        },
        {
            id: "edtech",
            label: "EdTech",
            icon: Computer,
            title: "Learning Enablement",
            desc: "Optimizing technology for the classroom experience.",
            items: [
                "LMS/SSO platform integration",
                "Secure browser proctoring",
                "CDN for academic content",
                "Digital signage emergency sync"
            ]
        }
    ],
    cta: {
        text: "Build a High-Performance, Cyber-Resilient Campus",
        buttonText: "Request ICT Infrastructure Audit",
        link: "#consultation"
    }
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const schoolSafetyV2Data = {
    hero: {
        badge: "Trusted by 500+ Institutions Across India",
        title: "Comprehensive Campus Safety Ecosystem",
        subtitle: "Purpose-built for international campuses, K-12, and higher education. We blend certified human guarding, privacy-preserving AI, and advanced ICT into a seamless and dignified safety environment.",
        pillContent: [
            { label: "Child-First Design", value: "Safety must never compromise dignity." },
            { label: "Human + AI Synergy", value: "Humans at the center of every decision." },
            { label: "Privacy by Default", value: "Consent-aware, zone-specific monitoring." },
            { label: "Continuous Evolution", value: "We measure, learn, and improve." }
        ]
    },
    executiveSummary: {
        heading: "Executive Summary",
        title: "Securing the Future of Education.",
        highlights: [
            "In today's complex educational landscape schools cannot afford reactive or fragmented security.",
            "ISI India Solutions delivers a holistic, intelligence-led, and ethically grounded School Safety Ecosystem, purpose-built for international, IB, Cambridge, and premium K–12 schools.",
            "With integrated facilities management, medical emergency response, enterprise-grade ICT infrastructure, and comprehensive cybersecurity operations, we ensure safety extends beyond security guards to every system that touches a child's life: the air they breathe, the water they drink, the networks they connect to, and the digital spaces they explore."
        ],
        leadershipMessage: "With 500+ successful deployments, we blend certified human guarding, privacy-preserving AI, and zero-trust architecture into a seamless and dignified safety experience—where technology serves people, and every child feels seen, safe, and supported.",
        leader: {
            name: "V. Varshithkumar",
            role: "Executive Director, ISI India",
            image: "/leaders/Varshithkumar ED.jpg"
        }
    },
    pillars: [
        {
            title: "Child-First Design",
            desc: "Safety must never compromise dignity. All interventions evaluated through a child rights lens (UN CRC Article 3).",
            icon: HeartPulse,
            color: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            title: "Human + AI Synergy",
            desc: "Guards empowered by intelligence; facilities monitored by sensors; networks protected by AI—humans remain at the center.",
            icon: Users,
            color: "bg-emerald-50",
            iconColor: "text-emerald-600"
        },
        {
            title: "Privacy by Default",
            desc: "Surveillance is purpose-limited, zone-specific, and consent-aware. No audio in student areas. Traffic-pattern monitoring only.",
            icon: ShieldCheck,
            color: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            title: "Continuous Evolution",
            desc: "Safety is not a product—it's a living ecosystem. We measure, learn, and evolve with every incident and feedback loop.",
            icon: RefreshCw,
            color: "bg-amber-50",
            iconColor: "text-amber-600"
        }
    ],
    sections: [
        riskIntelligenceSection,
        physicalGuardingSection,
        aiVideoSection,
        rccSection,
        specializedSolutionsSection,
        cyberIctSection
    ],
    roadmap: [
        {
            phase: "Phase 0: Assessment (8 Weeks)",
            title: "Digital & Safety Readiness",
            desc: "Aerial drone mapping, vulnerability scanning, and ICT infrastructure audit to deliver a color-coded campus intelligence report.",
            color: "blue"
        },
        {
            phase: "Phase 1: Foundation (Months 1-6)",
            title: "Network & Physical Guarding",
            desc: "Modernizing cabling backbones, upgrading core switching, and deploying police-verified guarding teams.",
            color: "emerald"
        },
        {
            phase: "Phase 2: Connectivity (Months 7-12)",
            title: "Advanced ICT & IoT",
            desc: "WiFi 6 deployment, VoIP campus-wide comms, and integration of transport GPS with facilities IoT sensors.",
            color: "indigo"
        },
        {
            phase: "Phase 3: Security (Months 13-18)",
            title: "Managed Cybersecurity",
            desc: "SOC establishment, Zero Trust implementation, and automated ransomware-proof backups.",
            color: "purple"
        },
        {
            phase: "Phase 4: Intelligence (Months 19-24)",
            title: "Unified Command Hub",
            desc: "RCC-NOC-SOC integration for a single-pane-of-glass view for leadership and operations teams.",
            color: "cyan"
        },
        {
            phase: "Phase 5: Excellence (Months 25-36)",
            title: "Certification & Evolution",
            desc: "ISO 27001 certification, independent penetration testing, and continuous AI optimization cycles.",
            color: "amber"
        }
    ],
    provenDifference: [
        { metric: "Schools Secured", value: "500+", context: "Across 18 states" },
        { metric: "Safety Incidents", value: "Zero", context: "Post-implementation record" },
        { metric: "Guard Certification", value: "100%", context: "Police verified & certified" },
        { metric: "Parent Trust Index", value: "94%", context: "Satisfaction in surveys" },
        { metric: "Compliance Coverage", value: "100%", context: "CBSE, ICSE, NCERT, DPDP" },
        { metric: "Transport Safety", value: "99.7%", context: "GPS tracking uptime" },
        { metric: "Medical Response", value: "<3 min", context: "Avg response time" },
        { metric: "Network Uptime", value: "99.99%", context: "WiFi uptime guarantee" }
    ],
    standardsAlignment: [
        { standard: "UN Convention on the Rights of the Child (CRC)", alignment: "Dignity, privacy, and best interest principle embedded in all safety designs." },
        { standard: "NCERT School Safety Guidelines (2022)", alignment: "Full compliance in infrastructure, drills, and child-safe staffing protocols." },
        { standard: "DPDP Act, 2023", alignment: "Data minimization, purpose limitation, and consent-aware data localization." },
        { standard: "CBSE / CISCE Safety Mandates", alignment: "Visitor management, guard vetting, and emergency response plan alignment." },
        { standard: "POSH Act", alignment: "Gender-sensitive staffing and mandatory grievance redressal orientation." },
        { standard: "ISO/IEC 27001", alignment: "Information Security Management System for all institutional digital assets." }
    ],
    cta: {
        title: "Start the Transformation.",
        subtitle: "Schedule a complimentary 8-Week Comprehensive Digital Readiness Assessment for your institution.",
        points: ["Full DPDP Act & CBSE Compliance", "Zero-compromise child safety framework", "Military-grade infrastructure audit"],
        buttonText: "Request Tactical Consultation"
    }
};
