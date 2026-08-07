import {
    Shield, Users, Truck, Network, Server, ShieldCheck, AlertTriangle,
    Brain, Globe, Plane, UserCheck, Zap, Radio, Activity, Target,
    CheckCircle2, Clock, Landmark, Building2, LayoutPanelLeft,
    MonitorDot, Cpu, BarChart3, Bell, Train, Ship, Users2, Factory,
    Star, Database, Lock, Eye, Leaf, Search, Milestone, PhoneCall,
    Scan, Cog
} from "lucide-react";

export interface CapabilitiesStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface CapabilitiesCard {
    icon: any  ;
    title: string;
    features: string[];
}

export interface CapabilitiesTab {
    title: string;
    description: string;
}

export interface CapabilitiesSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: CapabilitiesStatistic[];
    portfolioCards: CapabilitiesCard[];
    verticalTabs: CapabilitiesTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

export const capabilitiesHero = {
    badge: "Advanced Capabilities 2030",
    title: "Intelligence-Led Security for a Complex World",
    subtitle: "We combine elite human expertise with AI-powered technology to protect people, assets, and reputation across all domains."
};

// SECTION 1: PHYSICAL SECURITY OPERATIONS
export const section1_PhysicalOperations: CapabilitiesSection = {
    id: "physical-ops",
    badgeLabel: "Physical Excellence",
    title: "Integrated Physical Security Operations",
    subtitle: "Comprehensive protection architectures for enterprises, critical infrastructure, and high-consequence environments.",
    statistics: [
        { value: "99.7%", label: "detection accuracy with AI analytics", icon: Brain },
        { value: "360°", label: "multi-layer perimeter coverage", icon: Shield },
        { value: "Elite", label: "certified tactical response units", icon: UserCheck },
        { value: "Real-time", label: "AI-powered workforce auditing", icon: Activity }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Personnel Management",
            features: [
                "Elite certified personnel",
                "Psychological fitness audits",
                "Continuous dev training",
                "De-escalation mastery"
            ]
        },
        {
            icon: Target,
            title: "Tactical Operations",
            features: [
                "Tactical response teams",
                "Explosive detection units",
                "Covert surveillance ops",
                "AI workforce optimization"
            ]
        },
        {
            icon: Scan,
            title: "Access & Surveillance",
            features: [
                "Zero-Trust Physical Access",
                "AI behavior pattern sensing",
                "Advanced Sensor Fusion",
                "Predictive Intel modeling"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Perimeter Protection",
            features: [
                "Multi-layer intrusion sensing",
                "K12/M50 crash-rated barriers",
                "Autonomous drone patrols",
                "AI-driven lighting/audio response"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "High-Consequence Facilities",
            description: "Securing semiconductor fabs, pharmaceutical R&D, and nuclear facilities with multi-layered 24/7/365 protection architectures. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Defense & Classified",
            description: "Implementing SCIF-compliant zero-trust environments for defense contractors and intelligence agencies with behavioral gait recognition. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "National Infrastructure",
            description: "Protecting power plants, water treatment hubs, and telecommunications towers with seismic sensors and radar integration. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        }
    ],
    cta: {
        text: "Design your multi-layered defense strategy",
        buttonText: "Request a Risk Assessment",
        link: "/contact"
    }
};

// SECTION 2: RAPID MOBILIZATION
export const section2_RapidMobilization: CapabilitiesSection = {
    id: "rapid-mobilization",
    badgeLabel: "Agile Response",
    title: "Rapid Security Force Mobilization",
    subtitle: "Agile, scalable deployment capabilities for dynamic threat environments and large-scale asset protection.",
    statistics: [
        { value: "1,000+", label: "trained personnel ready for surge", icon: Users2 },
        { value: "12-24h", label: "mobilization for global scale", icon: Zap },
        { value: "Real-time", label: "mesh-network communication", icon: Radio },
        { value: "Unified", label: "multi-agency integration", icon: Network }
    ],
    portfolioCards: [
        {
            icon: Star,
            title: "Event Deployment",
            features: [
                "Rapid deployment protocols",
                "1,000+ personnel surge cap",
                "Pre-staged field command",
                "Mobilization in 12-24 hours"
            ]
        },
        {
            icon: Plane,
            title: "Aerial Intelligence",
            features: [
                "Autonomous drone fleets",
                "Thermal overwatch maps",
                "License plate recognition",
                "Real-time crowd monitoring"
            ]
        },
        {
            icon: Scan,
            title: "Smart Screening",
            features: [
                "AI weapon detection",
                "Non-intrusive scanning",
                "Biometric pre-clearance",
                "VIP fast-track protocols"
            ]
        },
        {
            icon: AlertTriangle,
            title: "Emergency Response",
            features: [
                "Active threat neutralization",
                "Mobile Command Centers",
                "Disaster response integration",
                "Tactical vehicle operations"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "International Events",
            description: "Providing security for Olympics, World Cup, and diplomatic summits with real-time crowd density mapping and VIP fast-tracking. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Crisis Response",
            description: "Mobilizing tactical response units for active shooter incidents, terror attacks, or hostage situations with medical trauma care. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Disaster Support",
            description: "Securing areas post-hurricane or earthquake to prevent looting and support emergency evacuation with regional coordination. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        }
    ],
    cta: {
        text: "Scale your security presence instantly",
        buttonText: "Talk to a Response Expert",
        link: "/contact"
    }
};

// SECTION 3: FLEET & FIELD OPS
export const section3_FleetFieldOps: CapabilitiesSection = {
    id: "fleet-ops",
    badgeLabel: "Logistics Intel",
    title: "Secure Fleet & Field Operations Management",
    subtitle: "Intelligence-driven logistics and mobile asset protection for high-value cargo and distributed infrastructure.",
    statistics: [
        { value: "B6/B7", label: "armored transport solutions", icon: ShieldCheck },
        { value: "24/7", label: "Global Operations Center monitoring", icon: MonitorDot },
        { value: "Auto", label: "unmanned aerial overwatch", icon: Plane },
        { value: "Active", label: "biometric driver verification", icon: UserCheck }
    ],
    portfolioCards: [
        {
            icon: Truck,
            title: "Fleet Intelligence",
            features: [
                "Predictive Route Scoring",
                "Crime/Weather risk logic",
                "Dynamic rerouting AI",
                "Geopolitical threat maps"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Armored Logistics",
            features: [
                "B6/B7 Level protection",
                "Remote immobilization",
                "Tamper-evident cargo logs",
                "GPS tracking & panic sync"
            ]
        },
        {
            icon: Server,
            title: "Field Operations",
            features: [
                "Global Operations Center",
                "Autonomous surveillance",
                "Remote asset intervention",
                "Real-time video walls"
            ]
        },
        {
            icon: Shield,
            title: "Personnel Safety",
            features: [
                "Satellite communication mesh",
                "PPE & survival gear",
                "Biometric wellness sensors",
                "Emergency beacon mesh"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Value Logistics",
            description: "Securing cash-in-transit, precious metals, and high-value pharmaceuticals with GPS tracking and panic-button equipped armored units. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Infrastructure Monitoring",
            description: "Monitoring pipelines and telecom towers across remote terrain using long-endurance drones and fixed-wing UAVs. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Hostile Environment Support",
            description: "Providing security details and ballistic protection in conflict zones or remote locations with limited medical infrastructure. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        }
    ],
    cta: {
        text: "Secure your mobile assets and critical pipelines",
        buttonText: "View Logistics Solutions",
        link: "/contact"
    }
};

// SECTION 4: EVENT & VIP
export const section4_EventVIP: CapabilitiesSection = {
    id: "event-vip",
    badgeLabel: "Premium Protection",
    title: "Enterprise Event Management & VIP Protection",
    subtitle: "Comprehensive security lifecycle management for high-stakes gatherings and executive movements.",
    statistics: [
        { value: "Sub-sec", label: "alerting on behavioral anomalies", icon: Zap },
        { value: "3D", label: "Digital Twin modeling accuracy", icon: Cpu },
        { value: "Zero", label: "incident record for protected events", icon: Target },
        { value: "Global", label: "Executive Protection footprint", icon: Globe }
    ],
    portfolioCards: [
        {
            icon: LayoutPanelLeft,
            title: "Pre-Event Strategy",
            features: [
                "Threat Intelligence sync",
                "Digital Twin 3D modeling",
                "Red team pen testing",
                "Stakeholder coordination"
            ]
        },
        {
            icon: Radio,
            title: "Command & Control",
            features: [
                "Multi-layer screening tech",
                "Sub-second AI alerting",
                "Incident response playbooks",
                "Media containment logic"
            ]
        },
        {
            icon: BarChart3,
            title: "Post-Event Analytics",
            features: [
                "Forensic video timeline",
                "Regulatory audit reports",
                "Performance benchmarks",
                "Root cause documentation"
            ]
        },
        {
            icon: UserCheck,
            title: "Executive Protection",
            features: [
                "Advanced route recon",
                "Close protection officers",
                "Secure motorcade ops",
                "Digital safety hardening"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Executive Movement",
            description: "Professional close protection for C-suite leaders, diplomats, and high-profile individuals with secure motorcade operations. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "High-Value Gatherings",
            description: "Securing shareholder meetings, product launches, and award ceremonies with discreet but effective protection models. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Public Venues",
            description: "Managing international sports venues and airports with millennium-wave scanners and biometric credentialing. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Ensure the total safety of your VIPs and high-stakes events",
        buttonText: "Schedule an Event Consultation",
        link: "/contact"
    }
};

// SECTION 5: SYSTEMS INTEGRATION
export const section5_SystemsIntegration: CapabilitiesSection = {
    id: "systems-integration",
    badgeLabel: "Converged Security",
    title: "Enterprise Security Systems Integration",
    subtitle: "Converged cyber-physical security platforms for intelligent threat management and unified visibility.",
    statistics: [
        { value: "Single", label: "pane intelligence platform", icon: LayoutPanelLeft },
        { value: "10k+", label: "employee credentialing scale", icon: Users },
        { value: "92%", label: "detection accuracy in VMS", icon: Eye },
        { value: "Converged", label: "IT/OT security monitoring", icon: Network }
    ],
    portfolioCards: [
        {
            icon: Server,
            title: "Unified SOC/NOC",
            features: [
                "Consolidated feed dash",
                "Automated response engine",
                "Predictive incident forecasting",
                "Single-pane correlation"
            ]
        },
        {
            icon: UserCheck,
            title: "Identity & Access",
            features: [
                "Universal biometric identity",
                "Mobile credentialing (BLE/NFC)",
                "Visitor automation portal",
                "Tailgating detection AI"
            ]
        },
        {
            icon: Eye,
            title: "AI Video Intelligence",
            features: [
                "Cloud-native architecture",
                "Forensic attribute search",
                "Dwell time analytics",
                "Object sequence tracking"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Security Convergence",
            features: [
                "SIEM/SOAR integration",
                "ICS/SCADA air-gapping",
                "Cyber-Physical playbooks",
                "OT anomaly detection"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Enterprise Visibility",
            description: "Consolidating CCTV, access logs, and cyber threat intelligence into a single-pane dashboard for global corporations. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Industrial OT Security",
            description: "Protecting smart manufacturing and power grids from cyber-triggered physical incidents with network segmentation. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Regulated Infrastructure",
            description: "Providing audit trails and automated compliance reports for healthcare, finance, and defense industries. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        }
    ],
    cta: {
        text: "Unify your security architecture globally",
        buttonText: "View Integration Capabilities",
        link: "/contact"
    }
};

// SECTION 6: MISSION-CRITICAL INFRA
export const section6_CriticalInfrastructure: CapabilitiesSection = {
    id: "critical-infra",
    badgeLabel: "Mission-Critical",
    title: "Mission-Critical Infrastructure Protection",
    subtitle: "Hardened security architectures for zero-failure environments and national-scale asset resilience.",
    statistics: [
        { value: "99.999%", label: "system uptime for critical ops", icon: Activity },
        { value: "Zero", label: "failure redundancy design", icon: ShieldCheck },
        { value: "SCIF", label: "compliant secure zone setups", icon: Lock },
        { value: "K12", label: "rated physical barrier systems", icon: Shield }
    ],
    portfolioCards: [
        {
            icon: Shield,
            title: "Strategic Asset Protection",
            features: [
                "Perimeter to Core defense",
                "Long-range thermal pods",
                "Hardened facility envelope",
                "Vault security systems"
            ]
        },
        {
            icon: Cog,
            title: "Autonomous Oversight",
            features: [
                "Ground patrol robots",
                "Aerial drone swarms",
                "Marine perimeter vessels",
                "Automated threat interdiction"
            ]
        },
        {
            icon: Activity,
            title: "Resilience Engineering",
            features: [
                "N+1 redundant power",
                "Failover communication nets",
                "Supply chain resilience",
                "Disaster recovery engineering"
            ]
        },
        {
            icon: Lock,
            title: "High-Security Zones",
            features: [
                "SCIF-compliant spaces",
                "Faraday RF shielding",
                "Mantrap vestibule access",
                "Two-person integrity logic"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Energy & Utilities",
            description: "Securing petroleum refineries, power plants, and water treatment facilities with SCADA cybersecurity and autonomous patrols. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "National Security",
            description: "Protecting government agencies and defense contractors with Top Secret/SCI-compliant compartmented access control. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Financial Resilience",
            description: "Ensuring zero-downtime for banking trading operations and sovereign data centers with geographically distributed replication. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        }
    ],
    cta: {
        text: "Engineer your zero-failure environment",
        buttonText: "Request an Infra Audit",
        link: "/contact"
    }
};

// SECTION 7: STRATEGIC ADVISORY
export const section7_AdvisoryServices: CapabilitiesSection = {
    id: "advisory-services",
    badgeLabel: "Strategic Intel",
    title: "Strategic Security Consulting & Advisory",
    subtitle: "C-suite guidance for enterprise-wide security transformation and geopolitical risk management.",
    statistics: [
        { value: "180+", label: "countries covered by intel network", icon: Globe },
        { value: "Strategy", label: "multi-year roadmap design", icon: LayoutPanelLeft },
        { value: "Full", label: "ISO/NIST framework compliance", icon: ShieldCheck },
        { value: "Elite", label: "Red Team penetration testing", icon: Target }
    ],
    portfolioCards: [
        {
            icon: Globe,
            title: "Risk Advisory",
            features: [
                "Geopolitical forecasting",
                "Supply chain vulnerability",
                "Scenario-based planning",
                "Dark web monitoring"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Compliance & Governance",
            features: [
                "ISO 27001 implementation",
                "Ethical AI Governance",
                "Regulatory Gap assessments",
                "Policy development"
            ]
        },
        {
            icon: Milestone,
            title: "Architecture Design",
            features: [
                "Security Master Planning",
                "Smart Campus design",
                "Tech TCO evaluation",
                "Post-merger integration"
            ]
        },
        {
            icon: Target,
            title: "Offensive Audits",
            features: [
                "Authorized Red Teaming",
                "Physical pen testing",
                "Cyber-Physical modeling",
                "Exec debriefing logs"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Market Entry Advisory",
            description: "Providing risk ratings and supply chain vulnerability mapping for organizations expanding into volatile emerging markets. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "M&A Intelligence",
            description: "Conducting security due diligence to uncover target company liabilities before high-value acquisitions. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Digital Transformation",
            description: "Modernizing legacy platforms into tech-first architectures that balance user experience with elite security needs. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        }
    ],
    cta: {
        text: "Consult with our C-suite security advisory team",
        buttonText: "Connect with an Advisor",
        link: "/contact"
    }
};

// SECTION 8: EMERGENCY RESPONSE
export const section8_EmergencyResponse: CapabilitiesSection = {
    id: "emergency-response",
    badgeLabel: "Mission-Ready",
    title: "All-Hazards Emergency Response Capabilities",
    subtitle: "Rapid mobilization for complex crisis situations threatening life safety and business continuity.",
    statistics: [
        { value: "1h", label: "forensic response time", icon: Clock },
        { value: "24/7", label: "Incident Response Hotline", icon: PhoneCall },
        { value: "Rapid", label: "Action Response Teams", icon: Zap },
        { value: "Unified", label: "Command & Control framework", icon: Network }
    ],
    portfolioCards: [
        {
            icon: AlertTriangle,
            title: "Tactical Response",
            features: [
                "Immediate Action Teams",
                "Active threat neutralizing",
                "Hostage rescue protocols",
                "Medical trauma care"
            ]
        },
        {
            icon: Users2,
            title: "Crisis Management",
            features: [
                "Mass Evacuation management",
                "Safe room protocols",
                "Personnel accounting",
                "Multi-agency coordination"
            ]
        },
        {
            icon: Network,
            title: "Cyber Resilience",
            features: [
                "Ransomware remediation",
                "Digital forensic labs",
                "Evidence preservation",
                "Recovery orchestration"
            ]
        },
        {
            icon: Shield,
            title: "Hybrid Threat Response",
            features: [
                "Unified Command structure",
                "Cyber-Physical playbooks",
                "Cross-domain correlation",
                "Strategic threat analysis"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Active Violence",
            description: "Deploying Rapid Action Teams for workplace violence or terror attacks with medical stabilization protocols. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Digital Resilience",
            description: "Remediating ransomware attacks and conducting chain-of-custody evidence collection for legal proceedings. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Industrial Accidents",
            description: "Coordinating response for chemical spills or industrial disasters with fire, EMS, and law enforcement units. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        }
    ],
    cta: {
        text: "Establish your rapid crisis response protocol",
        buttonText: "Contact Crisis Management",
        link: "/contact"
    }
};

// SECTION 9: FUTURE-READY
export const section9_FutureReady: CapabilitiesSection = {
    id: "future-ready",
    badgeLabel: "Innovation Hub",
    title: "Future-Ready Tech & Autonomous Systems",
    subtitle: "Next-generation solutions for evolving threats including climate security and autonomous security ecosystems.",
    statistics: [
        { value: "15-30m", label: "wildfire advance warning", icon: Leaf },
        { value: "Block", label: "chain track-and-trace", icon: Lock },
        { value: "Auto", label: "UAS drone surveillance", icon: Plane },
        { value: "AI-Led", label: "swarm intelligence mapping", icon: Brain }
    ],
    portfolioCards: [
        {
            icon: Leaf,
            title: "Environmental Risk",
            features: [
                "Renewable Energy Security",
                "AI Wildfire Detection",
                "Climate Risk Modeling",
                "Smoke/Heat early warning"
            ]
        },
        {
            icon: Database,
            title: "Supply Chain Safety",
            features: [
                "Blockchain track-and-trace",
                "DNA/Holographic tags",
                "Anti-counterfeit audits",
                "Supplier risk scoring"
            ]
        },
        {
            icon: Activity,
            title: "Crowd Intelligence",
            features: [
                "Real-time heat mapping",
                "Predictive egress AI",
                "Audio sentiment analysis",
                "Mass Gathering Safety"
            ]
        },
        {
            icon: Plane,
            title: "Autonomous Systems",
            features: [
                "Drone Swarm Intelligence",
                "Edge-computing UAS",
                "Mobile Security Robots",
                "Human-Robot Teaming"
            ]
        }
    ],
    verticalTabs: [
        {
            title: "Climate Resilience",
            description: "Protecting solar/wind farms and forestry operations with AI-powered hazard detection and risk modeling. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Brand Protection",
            description: "Ensuring product authenticity for pharmaceutical and luxury goods with immutable blockchain history. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Urban Safety",
            description: "Managing religious pilgrimages and concerts with crowd-crush prevention and audio anomaly detection. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Prepare your organization for 2030's threat landscape",
        buttonText: "Discuss Security Innovation",
        link: "/contact"
    }
};

export const allCapabilitiesSections = [
    section1_PhysicalOperations,
    section2_RapidMobilization,
    section3_FleetFieldOps,
    section4_EventVIP,
    section5_SystemsIntegration,
    section6_CriticalInfrastructure,
    section7_AdvisoryServices,
    section8_EmergencyResponse,
    section9_FutureReady
];

export const finalCapabilitiesCTA = {
    title: "Ready to Evolve Your Security Strategy?",
    subtitle: "Replace legacy guarding with an intelligence-led capability framework designed for modern threats.",
    buttonText: "Speak to a Security Analyst",
    link: "/contact"
};
