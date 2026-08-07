import {
    Shield, Home, Building2, HeartPulse, 
    Monitor, Brain, MessageSquare, ShieldCheck, 
    Clock, Zap, LayoutPanelTop, Search, 
    Activity, Smartphone, Users, Eye,
    CheckCircle2, ArrowRight, Lightbulb,
    Lock, Mic, Radio, Network, UserCheck,
    Store, Landmark, ShieldAlert, Database
} from "lucide-react";

export interface ModernLivingStatistic {
    label: string;
    value: string;
    sub: string;
    icon: any  ;
}

export interface ModernLivingPortfolioCard {
    title: string;
    icon: any  ;
    features: string[];
}

export interface ModernLivingTab {
    id: string;
    label: string;
    icon: any  ;
    title: string;
    desc: string;
    items: string[];
}

export interface ModernLivingSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: ModernLivingStatistic[];
    portfolioCards: ModernLivingPortfolioCard[];
    verticalTabs: ModernLivingTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// SECTION 1: SOHO & BRANCH OFFICES
// ============================================================================
export const sohoSection: ModernLivingSection = {
    id: "soho-offices",
    badgeLabel: "Business Security",
    title: "Smart Security for SOHO & Branch Offices",
    subtitle: "Enterprise-grade protection, simplified for growing businesses. Secure your operations without the complexity of traditional infrastructure.",
    statistics: [
        { label: "Monitoring", value: "24/7", sub: "Remote Video Support", icon: Monitor },
        { label: "Detection", value: "AI-Based", sub: "Intrusion & Access", icon: Brain },
        { label: "Visibility", value: "Cloud", sub: "Multi-branch Dashboard", icon: LayoutPanelTop },
        { label: "Alerts", value: "Real-time", sub: "Instant Notifications", icon: Zap },
    ],
    portfolioCards: [
        {
            title: "Access Control",
            icon: Lock,
            features: [
                "Unauthorized access detection",
                "Employee & Visitor tracking",
                "After-hours activity alerts",
                "Biometric & RFID integration"
            ]
        },
        {
            title: "Operational Intelligence",
            icon: Activity,
            features: [
                "Multi-branch visibility",
                "Automated incident reporting",
                "Compliance monitoring",
                "Remote operations audit"
            ]
        },
        {
            title: "Remote Video Monitoring",
            icon: Monitor,
            features: [
                "Live link to SOC",
                "Virtual perimeter patrol",
                "Smart intrusion alerts",
                "Two-way audio deterrents"
            ]
        },
        {
            title: "Asset Protection",
            icon: ShieldCheck,
            features: [
                "High-value zone monitoring",
                "Unauthorized removal alerts",
                "Environmental protection",
                "Remote vault management"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "soho-features",
            label: "Small Offices",
            icon: Shield,
            title: "Comprehensive Office Protection",
            desc: "A unified platform to manage security across all your branch locations.",
            items: [
                "24/7 Remote Video Monitoring (RVM)",
                "AI-based intrusion detection",
                "Cloud-based centralized dashboards",
                "Automated incident alerts"
            ]
        },
        {
            id: "soho-retail",
            label: "Retail Outlets",
            icon: Store,
            title: "Retail Intelligence",
            desc: "Loss prevention and operational intelligence for multi-store retail brands.",
            items: [
                "Theft & loitering detection",
                "Footfall & heatmap analytics",
                "Employee compliance tracking",
                "Remote store opening/closing"
            ]
        },
        {
            id: "soho-branches",
            label: "Bank Branches",
            icon: Landmark,
            title: "Banking Security Support",
            desc: "Enhancing traditional bank security with AI and remote monitoring.",
            items: [
                "Atm zone surveillance",
                "Vault area activity alerts",
                "Queue management insights",
                "Emergency panic response"
            ]
        },
        {
            id: "soho-service",
            label: "Service Centers",
            icon: Users,
            title: "Service Hub Intelligence",
            desc: "Maintaining safety and order in high-traffic customer service environments.",
            items: [
                "Crowd density monitoring",
                "Workforce attendance tracking",
                "Aggression detection alerts",
                "Remote policy enforcement"
            ]
        }
    ],
    cta: {
        text: "Protect your assets and ensure compliance remotely.",
        buttonText: "Secure Your Office",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: HNI RESIDENTIAL SECURITY
// ============================================================================
export const hniResidentialSection: ModernLivingSection = {
    id: "hni-residential",
    badgeLabel: "Luxury Protection",
    title: "HNI Residential Security & Lifestyle Protection",
    subtitle: "Discreet, high-end security tailored for luxury homes, villas, and estates. A seamless blend of privacy, luxury, and uncompromised safety.",
    statistics: [
        { label: "Perimeter", value: "360°", sub: "AI-Powered Fence", icon: ShieldCheck },
        { label: "Recognition", value: "Facial", sub: "Watchlist Alerts", icon: Eye },
        { label: "Control", value: "Smart", sub: "Gate & Home Sync", icon: Smartphone },
        { label: "Privacy", value: "100%", sub: "Discreet Operations", icon: Lock },
    ],
    portfolioCards: [
        {
            title: "Advanced Detection",
            icon: Brain,
            features: [
                "AI-powered perimeter security",
                "Intrusion & loitering alerts",
                "Unusual activity detection",
                "Vulnerability assessments"
            ]
        },
        {
            title: "Smart Access",
            icon: Users,
            features: [
                "Facial recognition watchlist",
                "Smart gate integration",
                "Owner & Family monitoring",
                "Smart home ecosystem sync"
            ]
        },
        {
            title: "Cyber Security",
            icon: Radio,
            features: [
                "Home network protection",
                "IoT device hardening",
                "Privacy-first data storage",
                "Encrypted communication"
            ]
        },
        {
            title: "Panic Response",
            icon: Zap,
            features: [
                "Silent alarm triggers",
                "Direct SOC escalation",
                "Authority coordination",
                "Family notification sync"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "hni-villas",
            label: "Villas & Estates",
            icon: Home,
            title: "Comprehensive Estate Safety",
            desc: "Full-spectrum protection for large properties and family estates.",
            items: [
                "AI-radar perimeter control",
                "Virtual concierge service",
                "High-res property mapping",
                "Estate staff monitoring"
            ]
        },
        {
            id: "hni-apartments",
            label: "Luxury Penthouses",
            icon: Building2,
            title: "High-Rise Intelligence",
            desc: "Vertical security for premium urban residences with restricted access.",
            items: [
                "Elevator access integration",
                "Private lobby monitoring",
                "Service staff tracking",
                "Smart intercom & video"
            ]
        },
        {
            id: "hni-travel",
            label: "Safe Travel Sync",
            icon: Plane,
            title: "Executive Protection Sync",
            desc: "Security details that follow you from home to your travel destinations.",
            items: [
                "Real-time location sharing",
                "Destination risk alerts",
                "Secure transport coordination",
                "Global SOC monitoring"
            ]
        },
        {
            id: "hni-lifestyle",
            label: "Lifestyle Sync",
            icon: Smartphone,
            title: "Intelligent Living",
            desc: "Security that enhances your lifestyle without intruding on your privacy.",
            items: [
                "Real-time mobile monitoring",
                "Event-based activity alerts",
                "Family office security sync",
                "Discreet sensor placement"
            ]
        }
    ],
    cta: {
        text: "Experience the ultimate in residential safety.",
        buttonText: "Consult for Your Villa",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: ELDERLY & ASSISTED LIVING
// ============================================================================
export const elderlyCareSection: ModernLivingSection = {
    id: "elderly-care",
    badgeLabel: "Compassionate Care",
    title: "Aged Care & Elderly Safety Monitoring",
    subtitle: "Protecting lives with proactive, intelligent care systems. Continuous monitoring and rapid response for senior safety and well-being.",
    statistics: [
        { label: "Fall Detection", value: "AI", sub: "Automatic Alerts", icon: Activity },
        { label: "Response", value: "Instant", sub: "Panic Button Sync", icon: Zap },
        { label: "Support", value: "24/7", sub: "Live Video Support", icon: HeartPulse },
        { label: "Insights", value: "Daily", sub: "Well-being Tracker", icon: Search },
    ],
    portfolioCards: [
        {
            title: "Safety Systems",
            icon: ShieldCheck,
            features: [
                "AI-based fall detection",
                "Emergency panic buttons",
                "Proactive intervention",
                "Live monitoring support"
            ]
        },
        {
            title: "Care Insights",
            icon: Users,
            features: [
                "Home nursing support",
                "Family notification alerts",
                "Activity & well-being tracking",
                "Caregiver coordination"
            ]
        },
        {
            title: "Wellness Monitoring",
            icon: Activity,
            features: [
                "Vital signs tracking",
                "Sleep pattern analysis",
                "Medication reminders",
                "Mobility assessment"
            ]
        },
        {
            title: "Family Connect",
            icon: MessageSquare,
            features: [
                "Video call integration",
                "Status update feeds",
                "Emergency conferencing",
                "Shared care calendar"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "care-home",
            label: "At-Home Care",
            icon: Home,
            title: "Safe Independent Living",
            desc: "Empowering seniors to live independently with AI-powered safety nets.",
            items: [
                "Non-intrusive sensor array",
                "24/7 emergency response",
                "Motion-based activity logs",
                "Virtual companion checks"
            ]
        },
        {
            id: "care-facility",
            label: "Assisted Living",
            icon: Building2,
            title: "Institutional Safety",
            desc: "Enterprise-grade protection for senior living communities and hospitals.",
            items: [
                "Resident location tracking",
                "Nurse call system sync",
                "Dementia ward loitering",
                "Staff response analytics"
            ]
        },
        {
            id: "care-nursing",
            label: "Daily Nursing",
            icon: UserCheck,
            title: "Medical Oversight",
            desc: "Integrating professional nursing care with real-time health telemetry.",
            items: [
                "Vitals monitoring sync",
                "Nurse attendance tracking",
                "Medical emergency alerts",
                "Health trend reporting"
            ]
        },
        {
            id: "care-monitoring",
            label: "Remote Support",
            icon: HeartPulse,
            title: "Proactive Well-being",
            desc: "AI-driven insights that help families stay connected to their elderly loved ones' safety.",
            items: [
                "24/7 live video support",
                "Emergency response systems",
                "Caregiver activity alerts",
                "Automated well-being reports"
            ]
        }
    ],
    cta: {
        text: "Ensure peace of mind for your family.",
        buttonText: "Learn About Aged Care",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: VACANT PROPERTY PROTECTION
// ============================================================================
export const vacantPropertySection: ModernLivingSection = {
    id: "vacant-property",
    badgeLabel: "Asset Protection",
    title: "Vacant Property & Secondary Home Protection",
    subtitle: "Secure luxury homes, farmhouses, and unoccupied properties. Ensure your assets remain protected—even in your absence.",
    statistics: [
        { label: "Surveillance", value: "Remote", sub: "Live Access Anytime", icon: Monitor },
        { label: "Patrols", value: "Virtual", sub: "Scheduled Monitoring", icon: Shield },
        { label: "Detection", value: "Multi", sub: "Fire, Intrusion, Env", icon: Radio },
        { label: "Assets", value: "Secured", sub: "Farmhouses & Villas", icon: Home },
    ],
    portfolioCards: [
        {
            title: "Remote Guarding",
            icon: Monitor,
            features: [
                "Remote live video access",
                "Scheduled virtual patrols",
                "Suspicious activity alerts",
                "Asset verification"
            ]
        },
        {
            title: "Safety Sensors",
            icon: Activity,
            features: [
                "Intrusion detection systems",
                "Fire & smoke monitoring",
                "Environmental flood sensors",
                "Power status alerts"
            ]
        },
        {
            title: "Perimeter Shield",
            icon: ShieldCheck,
            features: [
                "AI-fencing technology",
                "Cross-line detection",
                "Intelligent floodlights",
                "Audio warning system"
            ]
        },
        {
            title: "Utility Tracking",
            icon: Zap,
            features: [
                "Power outage monitoring",
                "Water leak detection",
                "Temperature thresholds",
                "HVAC status integration"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "remote-vacation",
            label: "Holiday Homes",
            icon: Plane,
            title: "Vacation Property Safety",
            desc: "Worry-free ownership of your vacation properties and secondary residences.",
            items: [
                "Seasonal occupancy modes",
                "Maintenance crew tracking",
                "Smart lock access logs",
                "Remote climate control"
            ]
        },
        {
            id: "remote-farm",
            label: "Farmhouses",
            icon: Building2,
            title: "Rural Asset Shield",
            desc: "Protecting wide perimeters and remote assets in rural environments.",
            items: [
                "Long-range AI detection",
                "Solar-powered security",
                "Unauthorized vehicle alerts",
                "Livestock area monitoring"
            ]
        },
        {
            id: "remote-rental",
            label: "Rental Units",
            icon: Users,
            title: "Short-Term Rental Guard",
            desc: "Managing safety and access for guest-occupied or listing-ready units.",
            items: [
                "Guest access management",
                "Noise level monitoring",
                "Property damage alerts",
                "Check-out verification"
            ]
        },
        {
            id: "remote-ownership",
            label: "Total Control",
            icon: Smartphone,
            title: "Remote-First Asset Control",
            desc: "Maintain constant visibility over your holiday homes and farmhouses.",
            items: [
                "Anytime-anywhere video access",
                "Automated security alerts",
                "Virtual patrol schedules",
                "Environmental factor monitoring"
            ]
        }
    ],
    cta: {
        text: "Keep your secondary homes safe 24/7.",
        buttonText: "Secure Your Property",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: AI INTELLIGENCE LAYER
// ============================================================================
export const aiIntelligenceSection: ModernLivingSection = {
    id: "ai-intelligence",
    badgeLabel: "Risk Analytics",
    title: "AI Intelligence & Risk Analytics Layer",
    subtitle: "Move from simple visibility to intelligence-driven security. Anticipate risks before they become incidents.",
    statistics: [
        { label: "Analysis", value: "Pattern", sub: "Behavioral Insights", icon: Brain },
        { label: "Scoring", value: "Risk", sub: "Predictive Analytics", icon: Activity },
        { label: "Tracking", value: "Identity", sub: "Watchlist Generation", icon: UserCheck },
        { label: "Dashboards", value: "Central", sub: "Centralized Reporting", icon: LayoutPanelTop },
    ],
    portfolioCards: [
        {
            title: "Risk Engine",
            icon: Brain,
            features: [
                "Behavioral analytics",
                "Pattern detection engine",
                "Predictive risk scoring",
                "Identity tracking workflows"
            ]
        },
        {
            title: "Anomaly Detection",
            icon: Search,
            features: [
                "Unusual activity flags",
                "Non-compliant move alerts",
                "Crowd density analysis",
                "Vulnerability heatmaps"
            ]
        },
        {
            title: "Visual Intelligence",
            icon: Eye,
            features: [
                "Facial recognition sync",
                "Object categorization",
                "License plate logging",
                "Dwell-time monitoring"
            ]
        },
        {
            title: "Risk Dashboard",
            icon: BarChart3,
            features: [
                "Live threat scores",
                "Historical trend logs",
                "Compliance auditing",
                "Executive risk reports"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "analytics-behavior",
            label: "Behavior Analysis",
            icon: Brain,
            title: "Understanding intent",
            desc: "AI that separates normal activity from suspicious behavior patterns.",
            items: [
                "Loitering detection",
                "Erratic movement alerts",
                "After-hours access flags",
                "Sentiment & sound analysis"
            ]
        },
        {
            id: "analytics-predictive",
            label: "Predictive Risk",
            icon: Zap,
            title: "Anticipating Threats",
            desc: "Probability-based forecasting to prevent incidents before they occur.",
            items: [
                "Vulnerability scoring",
                "Time-based risk models",
                "Intrusion probability",
                "Asset damage forecast"
            ]
        },
        {
            id: "analytics-identity",
            label: "Identity Logic",
            icon: Users,
            title: "Smart Personnel Tracking",
            desc: "Managing access and visibility for multiple tiers of individuals.",
            items: [
                "Whitelist authorized entry",
                "Blacklist threat alerts",
                "Staff efficiency tracking",
                "Visitor journey mapping"
            ]
        },
        {
            id: "analytics-view",
            label: "Data Visibility",
            icon: LayoutPanelTop,
            title: "Data-Driven Security",
            desc: "Leveraging AI to identify threats that human eyes might miss.",
            items: [
                "Centralized incident dashboards",
                "Historical risk trend analysis",
                "Automated watchlist alerts",
                "Pre-incident behavioral flags"
            ]
        }
    ],
    cta: {
        text: "See the future of intelligent security.",
        buttonText: "Explore AI Analytics",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 6: AUTOMATION & AI ASSISTANT
// ============================================================================
export const automationSection: ModernLivingSection = {
    id: "automation",
    badgeLabel: "ChatOps & AI",
    title: "Automation & AI Security Assistant (ChatOps)",
    subtitle: "Smarter security operations with minimal effort. Faster response, reduced manual dependency, and always-on control.",
    statistics: [
        { label: "Assistant", value: "AI", sub: "Chat + Voice Control", icon: Mic },
        { label: "Integration", value: "Mobile", sub: "WhatsApp Support", icon: MessageSquare },
        { label: "Workflows", value: "Auto", sub: "Incident Resolution", icon: Zap },
        { label: "Escalation", value: "Smart", sub: "Automated Routing", icon: Network },
    ],
    portfolioCards: [
        {
            title: "ChatOps Control",
            icon: MessageSquare,
            features: [
                "AI-powered security assistant",
                "WhatsApp & Mobile integration",
                "Voice command support",
                "Automated status reports"
            ]
        },
        {
            title: "Auto-Workflows",
            icon: Network,
            features: [
                "Self-healing security nets",
                "Automated lock triggers",
                "Smart siren activation",
                "Cloud backup orchestration"
            ]
        },
        {
            title: "Mobile Command",
            icon: Smartphone,
            features: [
                "One-tap lockdown",
                "Security pulse checks",
                "Incident approval flow",
                "Remote staff briefing"
            ]
        },
        {
            title: "Integration Hub",
            icon: Zap,
            features: [
                "Smart home sync",
                "ERP & CRM connection",
                "Attendance log sync",
                "Access gateway bridge"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "automation-mobile",
            label: "Mobile Edge",
            icon: Smartphone,
            title: "Security in Your Pocket",
            desc: "Full command over your security systems through intuitive mobile interfaces.",
            items: [
                "Universal remote access",
                "Biometric secure login",
                "Live feed on-demand",
                "Custom notification logic"
            ]
        },
        {
            id: "automation-voice",
            label: "Voice AI",
            icon: Mic,
            title: "Conversational Security",
            desc: "Interact with your security system using natural language as an assistant.",
            items: [
                "Status check voice commands",
                "Incident reporting logs",
                "Secure identity voice-sync",
                "Hands-free emergency calls"
            ]
        },
        {
            id: "automation-bots",
            label: "Auto-Bots",
            icon: Brain,
            title: "Self-Operating Systems",
            desc: "Robotic process automation applied to physical security and monitoring.",
            items: [
                "Automated system health checks",
                "Self-optimizing AI filters",
                "Smart data rotation",
                "Autonomous threat triaging"
            ]
        },
        {
            id: "smart-workflows",
            label: "Workflows",
            icon: Zap,
            title: "Automated Incident Handling",
            desc: "Let AI handle the repetitive tasks while you focus on what matters.",
            items: [
                "Auto-resolution workflows",
                "Escalation hierarchy sync",
                "Incident tracking & logging",
                "Real-time command integration"
            ]
        }
    ],
    cta: {
        text: "Automate your security operations today.",
        buttonText: "Try AI Assistant",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 7: SOC MANAGED SERVICES
// ============================================================================
export const socSection: ModernLivingSection = {
    id: "soc-managed",
    badgeLabel: "Command Center",
    title: "SOC (Security Operations Center) – Managed Services",
    subtitle: "Your remote security command center. Enterprise-grade monitoring without building your own control center.",
    statistics: [
        { label: "Personnel", value: "Elite", sub: "Trained Analysts", icon: Users },
        { label: "Response", value: "SLA", sub: "Guaranteed Times", icon: Clock },
        { label: "Monitoring", value: "24/7", sub: "Centralized Support", icon: Monitor },
        { label: "Coverage", value: "Global", sub: "Homes & Offices", icon: Plane },
    ],
    portfolioCards: [
        {
            title: "Remote Monitoring",
            icon: Monitor,
            features: [
                "24/7 centralized monitoring",
                "Real-time incident detection",
                "Multi-location visibility",
                "Professional triaging"
            ]
        },
        {
            title: "Incident Response",
            icon: ShieldAlert,
            features: [
                "SLA-based response",
                "Authority coordination",
                "Direct field intervention",
                "Crisis management support"
            ]
        },
        {
            title: "Managed Intelligence",
            icon: Database,
            features: [
                "Continuous security audits",
                "Vulnerability patches",
                "Configuration management",
                "Data forensic support"
            ]
        },
        {
            title: "Concierge Security",
            icon: UserCheck,
            features: [
                "VIP arrival notification",
                "Delivery verification",
                "Staff identity checks",
                "Smart gate assistance"
            ]
        }
    ],
    verticalTabs: [
        {
            id: "soc-enterprise",
            label: "Enterprise Level",
            icon: Building2,
            title: "Industrial Grade Monitoring",
            desc: "Leveraging the same infrastructure used to protect global factories for your smaller branches.",
            items: [
                "ISO certified operations",
                "Redundant backup servers",
                "Multi-lingual support team",
                "Digital evidence vault"
            ]
        },
        {
            id: "soc-executive",
            label: "Executive Focus",
            icon: Search,
            title: "HNI Dedicated Analysts",
            desc: "Specialized analysts who understand the unique privacy needs of high-value individuals.",
            items: [
                "Private event monitoring",
                "Family travel tracking",
                "Escort coordination",
                "Privacy-first data policy"
            ]
        },
        {
            id: "soc-audit",
            label: "Audit & Risk",
            icon: LayoutPanelTop,
            title: "Continuous Assessment",
            desc: "Moving from static security to a dynamic, audited security posture.",
            items: [
                "Weekly vulnerability logs",
                "System health diagnostics",
                "Compliance gap analysis",
                "Remote hardware updates"
            ]
        },
        {
            id: "managed-security",
            label: "Managed Support",
            icon: ShieldCheck,
            title: "Enterprise Monitoring for SOHO",
            desc: "Access professional security analysts who watch over your property around the clock.",
            items: [
                "SLA-driven response frameworks",
                "Active incident escalation",
                "Emergency authorities coordination",
                "Comprehensive security audits"
            ]
        }
    ],
    cta: {
        text: "Get enterprise-level security for your business.",
        buttonText: "Connect to SOC",
        link: "/contact"
    }
};


// ============================================================================
// FINAL EXPORT
// ============================================================================
export const modernLivingData = {
    heroSlides: [
        {
            badge: "Premium Living",
            title: "AI Security for Luxury Residences",
            subtitle: "Unobtrusive, high-end protection for villas and estates with AI-powered perimeter defense.",
            image: "hero-ai-driven.jpg"
        },
        {
            badge: "Smart Business",
            title: "Intelligent SOHO & Branch Security",
            subtitle: "Enterprise-grade safety for small offices and branch locations, managed remotely via SOC.",
            image: "hero-drone.jpg"
        },
        {
            badge: "Compassionate Care",
            title: "Aged Care & Senior Safety Systems",
            subtitle: "AI-driven fall detection and wellness monitoring for peace of mind and rapid response.",
            image: "hero-soc.jpg"
        },
        {
            badge: "Remote Control",
            title: "Vacant Property & Farmhouse Shield",
            subtitle: "Ensuring secondary homes remain secure 24/7 with virtual patrols and smart alerts.",
            image: "hero-integration.jpg"
        }
    ],
    serve: [
        {
            title: "SOHO & Branch Offices",
            desc: "Secure your business operations without the complexity of enterprise infrastructure.",
            icon: Building2,
            color: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            title: "HNI Residences & Premium Properties",
            desc: "Discreet, high-end security tailored for luxury homes, villas, and estates.",
            icon: Home,
            color: "bg-emerald-50",
            iconColor: "text-emerald-600"
        },
        {
            title: "Elderly & Assisted Living Care",
            desc: "Continuous monitoring and rapid response systems for senior safety and well-being.",
            icon: HeartPulse,
            color: "bg-purple-50",
            iconColor: "text-purple-600"
        }
    ],
    sections: [
        sohoSection,
        hniResidentialSection,
        elderlyCareSection,
        vacantPropertySection,
        aiIntelligenceSection,
        automationSection,
        socSection
    ],
    whyISI: [
        {
            title: "Tailored for SOHO & HNI Needs",
            desc: "Purpose-built solutions—not one-size-fits-all systems.",
            icon: Lightbulb
        },
        {
            title: "Discreet & Premium Experience",
            desc: "Security that blends seamlessly into lifestyle and operations.",
            icon: ShieldCheck
        },
        {
            title: "AI-First & Future-Ready",
            desc: "Predictive, intelligent, and continuously improving systems.",
            icon: Brain
        },
        {
            title: "Remote-First Control",
            desc: "Monitor and manage everything from anywhere in the world.",
            icon: Monitor
        },
        {
            title: "End-to-End Integration",
            desc: "From cameras to analytics to response—all in one platform.",
            icon: LayoutPanelTop
        }
    ],
    howItWorks: [
        {
            step: "1. Consult",
            title: "Personalized security assessment",
            desc: "We analyze your specific property or business vulnerabilities.",
            color: "blue"
        },
        {
            step: "2. Design",
            title: "Tailored solution for your home or office",
            desc: "Optimized placement of AI sensors and integration hooks.",
            color: "emerald"
        },
        {
            step: "3. Deploy",
            title: "Rapid installation & AI system activation",
            desc: "Quick setup with minimal disruption to your daily life.",
            color: "indigo"
        },
        {
            step: "4. Monitor",
            title: "24/7 intelligent surveillance",
            desc: "Continuous oversight by our AI and SOC managed services.",
            color: "purple"
        },
        {
            step: "5. Respond",
            title: "Instant alerts & managed intervention",
            desc: "Rapid escalation to you or authorities during incidents.",
            color: "amber"
        }
    ],
    cta: {
        title: "Smarter Security. Safer Living.",
        subtitle: "Schedule a personalized security consultation for your home or office.",
        points: ["Advanced AI Threat Detection", "Discreet Luxury Integration", "24/7 Professional Managed Service"],
        buttonText: "Secure Your Space Today"
    }
};

import { Plane, BarChart3 } from "lucide-react";
