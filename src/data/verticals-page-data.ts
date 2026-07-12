import {
    Building2, Landmark, GraduationCap, Factory, Hospital, Plane,
    Users, Shield, BadgeCheck, MonitorDot, Fingerprint, ShieldCheck,
    Lock, Camera, Smartphone, Wifi, Eye, Network, Target, Database,
    CheckCircle2, TrendingUp, Clock, Award, Zap, Activity, Globe, Cpu,
    Settings, AlertTriangle, Truck, ShoppingBag, Map, Train, Car,
    Warehouse, Server, ShieldAlert, Radio, Briefcase, Landmark as Bank,
    Cloud, MapPin, Search, ShieldX, Package, Heart
} from "lucide-react";

// ============================================================================
// INTERFACES (Reuse from secure-value-logistics-data.ts)
// ============================================================================

export interface VerticalStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface VerticalCard {
    icon: any  ;
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
            value: "95%",
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
            label: "hotels & venues protected",
            icon: Building2
        },
        {
            value: "Zero",
            label: "security incidents on record",
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
            description: "Premium security for luxury hotels with discreet guarding, biometric access control, VIP protection, and 24/7 command center monitoring for guest safety and asset protection. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Event Venues",
            description: "Comprehensive event security with crowd management, access control, emergency response protocols, and real-time monitoring for conferences, weddings, and large gatherings. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Conference Centers",
            description: "Professional security for business events with delegate management, secure zones, AV equipment protection, and coordinated security for high-profile corporate events. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Multi-Property Management",
            description: "Centralized security management across multiple hotel properties with unified dashboards, standardized protocols, and coordinated incident response. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
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
            value: "100%",
            label: "RBI compliance rate",
            icon: CheckCircle2
        },
        {
            value: "500",
            label: "branches under active protection",
            icon: Landmark
        },
        {
            value: "Zero",
            label: "security breaches on record",
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
            description: "Comprehensive branch security with RBI-compliant guarding, biometric access control, cash handling monitoring, and real-time incident management for customer and staff safety. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Corporate Banking",
            description: "High-security solutions for corporate banking centers with vault protection, executive security, secure meeting rooms, and advanced access control systems. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "ATM Networks",
            description: "24/7 ATM security with cash replenishment escorts, surveillance monitoring, anti-skimming protection, and rapid incident response for unattended banking points. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Insurance Offices",
            description: "Professional security for insurance offices with document security, visitor management, employee safety protocols, and compliance-ready audit trails. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
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
            label: "campuses actively protected",
            icon: GraduationCap
        },
        {
            value: "Zero",
            label: "major incidents on record",
            icon: ShieldCheck
        },
        {
            value: "94%",
            label: "parent trust score",
            icon: Award
        },
        {
            value: "100%",
            label: "regulatory compliance",
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
            description: "Child-safe security for schools with POCSO-compliant protocols, parent communication systems, student tracking, and emergency response procedures for safe learning environments. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Colleges & Universities",
            description: "Campus-wide security for higher education with hostel monitoring, library security, examination hall protection, and 24/7 command center oversight. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Hostels & Dormitories",
            description: "Residential security with gender-specific protocols, visitor management, night patrols, emergency response systems, and parent notification capabilities. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Multi-Campus Management",
            description: "Centralized security management across multiple campuses with unified dashboards, standardized protocols, and coordinated incident response for educational institutions. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        }
    ],
    cta: {
        text: "Create a safe learning environment for your students",
        buttonText: "Secure Your Campus",
        link: "/verticals/education"
    }
};

// ============================================================================
// VERTICAL 4: MANUFACTURING (Industrial & Critical Infrastructure)
// ============================================================================

export const vertical4_Manufacturing: VerticalSection = {
    id: "manufacturing",
    badgeLabel: "Industrial Security",
    title: "Smart Physical Security for Manufacturing & Industrial Sectors",
    subtitle: "Elite Security for High-Stakes Industrial and Critical Infrastructure Operations. Ex-military personnel, thermal drones, AI fence sensors, RFID tracking, and cyber-physical security fusion.",
    statistics: [
        {
            value: "Zero",
            label: "asset loss incidents",
            icon: ShieldCheck
        },
        {
            value: "100",
            label: "facilities under active protection",
            icon: Factory
        },
        {
            value: "24/7",
            label: "perimeter protection",
            icon: Eye
        },
        {
            value: "100%",
            label: "AI-powered surveillance",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: ShieldCheck,
            title: "Core Guarding Services",
            features: ["Ex-military/Paramilitary personnel", "Biometric/facial recognition", "AI-optimized patrols", "Tamper-proof audits"]
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
            description: "Comprehensive industrial security with production floor monitoring, asset tracking, supply chain protection, and 24/7 perimeter surveillance for manufacturing facilities. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "High-Security Installations",
            description: "High-security solutions for critical installations with ex-military personnel, advanced surveillance, restricted zone management, and classified area protection. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Warehouses & Distribution",
            description: "Logistics security with inventory protection, loading dock monitoring, vehicle tracking, and automated access control for distribution centers. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Supply Chain Security",
            description: "End-to-end supply chain protection with RFID tracking, secure transport escorts, real-time monitoring, and tamper-proof documentation. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
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
            label: "hospitals & clinics protected",
            icon: Hospital
        },
        {
            value: "24/7",
            label: "patient safety monitoring",
            icon: Eye
        },
        {
            value: "Zero",
            label: "security incidents on record",
            icon: ShieldCheck
        },
        {
            value: "100%",
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
            description: "Comprehensive hospital security with ICU protection, pharmacy security, emergency room monitoring, and 24/7 command center oversight for patient and staff safety. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Clinics & Diagnostic Centers",
            description: "Professional security for outpatient facilities with visitor management, equipment protection, staff safety protocols, and emergency response systems. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Pharmacies",
            description: "Specialized pharmacy security with controlled substance monitoring, access control, inventory protection, and compliance-ready audit trails. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Medical Campuses",
            description: "Multi-building healthcare security with unified command centers, inter-building coordination, parking management, and emergency response protocols. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
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
            value: "1000+",
            label: "operational flight hours logged",
            icon: Plane
        },
        {
            value: "50+",
            label: "enterprise clients active",
            icon: Globe
        },
        {
            value: "100%",
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
            description: "Autonomous drone patrols for perimeter security, crowd monitoring, and incident response with real-time video feeds and AI-powered threat detection. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Infrastructure Inspection",
            description: "Aerial inspection services for bridges, pipelines, power lines, and industrial facilities with high-resolution imaging and predictive maintenance analytics. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Logistics & Delivery",
            description: "Express delivery services for medical supplies, documents, and small packages with autonomous navigation and secure payload handling. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Event Management",
            description: "Event security and crowd management with aerial surveillance, real-time analytics, emergency response coordination, and VIP protection. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Deploy autonomous aerial intelligence for your operations",
        buttonText: "Deploy Drone Intelligence",
        link: "/verticals/drones"
    }
};

// ============================================================================
// VERTICAL 7: GCC & IT PARKS
// ============================================================================

export const vertical7_GCC: VerticalSection = {
    id: "gcc-it-parks",
    badgeLabel: "IT & Global Centers",
    title: "Global Capability Centers (GCC) & IT Parks",
    subtitle: "Enterprise-grade security for the tech ecosystem. Secure your talent, data, and infrastructure with AI-driven access and workplace management.",
    statistics: [
        {
            value: "10M+",
            label: "sq.ft of tech space protected",
            icon: Building2
        },
        {
            value: "200k+",
            label: "employees secured daily",
            icon: Users
        },
        {
            value: "Zero",
            label: "data center downtime",
            icon: Server
        },
        {
            value: "100%",
            label: "privacy compliance",
            icon: ShieldCheck
        }
    ],
    portfolioCards: [
        {
            icon: Server,
            title: "Data Center Security",
            features: ["Multi-layer authentication", "Biometric racks", "Thermal monitoring", "Strict access protocols"]
        },
        {
            icon: Users,
            title: "Employee Safety",
            features: ["Safe-transport tracking", "Emergency SOS apps", "Workplace de-escalation", "Female employee escorts"]
        },
        {
            icon: Fingerprint,
            title: "Access Management",
            features: ["Facial recognition", "NFC-based entry", "Visitor pre-registration", "Tailgating detection"]
        },
        {
            icon: MonitorDot,
            title: "Workplace Intelligence",
            features: ["Occupancy analytics", "Smart parking", "Asset movement alerts", "Unified C4I interface"]
        }
    ],
    verticalTabs: [
        {
            title: "Tech Parks",
            description: "End-to-end security for large IT parks with perimeter AI, vehicle tracking, and multi-tenant access control systems. Our solutions ensure seamless movement while maintaining high-security standards. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Global Offices",
            description: "Tailored security for GCCs and multinational offices focusing on corporate espionage prevention, data privacy, and executive protection. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Safe Transport",
            description: "24/7 fleet monitoring for employee cabs with panic buttons, real-time GPS tracking, and route geofencing to ensure employee safety during transit. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Asset Protection",
            description: "RFID-based tracking for IT assets, prevent unauthorized hardware removal, and maintain digital logs for every asset movement. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Optimize your corporate security with tech-integrated solutions",
        buttonText: "Secure Your Tech Campus",
        link: "/verticals/gcc-it-parks"
    }
};

// ============================================================================
// VERTICAL 8: AEROSPACE & AVIATION
// ============================================================================

export const vertical8_Aerospace: VerticalSection = {
    id: "aerospace",
    badgeLabel: "Aviation Security",
    title: "Aerospace & Aviation Infrastructure",
    subtitle: "Precision security for high-stakes aviation environments. Protecting hangars, apron areas, and critical aviation assets with DGCA-compliant protocols.",
    statistics: [
        {
            value: "25+",
            label: "hangars under protection",
            icon: Warehouse
        },
        {
            value: "Zero",
            label: "safety incidents recorded",
            icon: ShieldCheck
        },
        {
            value: "24/7",
            label: "apron area surveillance",
            icon: Eye
        },
        {
            value: "100%",
            label: "regulatory compliance",
            icon: CheckCircle2
        }
    ],
    portfolioCards: [
        {
            icon: Plane,
            title: "Hangar & Apron Security",
            features: ["Intrusion detection", "High-value tool tracking", "FOD monitoring", "Ex-IAF security personnel"]
        },
        {
            icon: Search,
            title: "Screening & Airside",
            features: ["ASU trained guards", "Cargo screening", "Crew verification", "Airside access control"]
        },
        {
            icon: Radio,
            title: "Communication & Response",
            features: ["Encrypted radio comms", "Rapid response teams", "Emergency protocols", "Fire & safety integration"]
        },
        {
            icon: ShieldAlert,
            title: "Threat Management",
            features: ["Anti-drone systems", "Perimeter AI", "Bomb detection squads", "Crisis management"]
        }
    ],
    verticalTabs: [
        {
            title: "Maintenance Hangars",
            description: "Specialized security for MRO facilities, protecting expensive components and ensuring tool-room integrity through RFID and AI surveillance. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Airports & Terminals",
            description: "Comprehensive terminal security focusing on passenger flow, baggage screening, and perimeter protection using advanced AI sensors. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Cargo & Logistics",
            description: "Secure air-cargo management with end-to-end tracking, tamper-evident seals, and high-security storage for sensitive shipments. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Executive Aviation",
            description: "Private jet terminal (FBO) security with VIP handling, discreet guarding, and rapid airside-to-vehicle transitions. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        }
    ],
    cta: {
        text: "Deploy precision aviation security for your infrastructure",
        buttonText: "Secure Your Aviation Asset",
        link: "/verticals/aerospace"
    }
};

// ============================================================================
// VERTICAL 9: LOGISTICS & WAREHOUSING
// ============================================================================

export const vertical9_Logistics: VerticalSection = {
    id: "logistics",
    badgeLabel: "Supply Chain",
    title: "Logistics & Warehouse Management",
    subtitle: "Securing the backbone of commerce. Prevent pilferage, optimize flow, and Ensure 100% inventory integrity with intelligent logistics security.",
    statistics: [
        {
            value: "50+",
            label: "major hubs protected",
            icon: Truck
        },
        {
            value: "1M+",
            label: "parcels secured daily",
            icon: Package
        },
        {
            value: "Zero",
            label: "major pilferage incidents",
            icon: ShieldCheck
        },
        {
            value: "100%",
            label: "real-time transparency",
            icon: MonitorDot
        }
    ],
    portfolioCards: [
        {
            icon: Warehouse,
            title: "Warehouse Guarding",
            features: ["Trained inventory guards", "Loading dock monitoring", "Access control", "Night vision patrols"]
        },
        {
            icon: Truck,
            title: "Transit & CIT",
            features: ["Armed/Unarmed escorts", "Electronic locks", "GPS geofencing", "Panic response"]
        },
        {
            icon: ShieldX,
            title: "Loss Prevention",
            features: ["Internal theft detection", "Shortage analysis", "Surprise audits", "Staff screening"]
        },
        {
            icon: Activity,
            title: "Supply Chain Intel",
            features: ["Bottle-neck analytics", "Vehicle TAT tracking", "Pallet level tracking", "Central hub C4I"]
        }
    ],
    verticalTabs: [
        {
            title: "Distribution Centers",
            description: "Large scale warehouse security with localized command centers, perimeter protection, and high-frequency patrol management. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "E-commerce Hubs",
            description: "High-speed sorting center security focusing on parcel safety, throughput optimization, and staff accountability. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Cold Chain",
            description: "Specialized security for temperature-sensitive goods, monitoring both physical access and environmental compliance. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Last Mile Delivery",
            description: "Security solutions for local delivery centers, focusing on rider management and cash-on-delivery safety protocols. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        }
    ],
    cta: {
        text: "Minimize loss and maximize throughput with smart logistics security",
        buttonText: "Secure Your Supply Chain",
        link: "/verticals/logistics"
    }
};

// ============================================================================
// VERTICAL 10: SMART CITIES
// ============================================================================

export const vertical10_SmartCities: VerticalSection = {
    id: "smart-cities",
    badgeLabel: "Urban Security",
    title: "Smart City & Public Infrastructure",
    subtitle: "Civic safety through technology. Building resilient urban environments with integrated surveillance, emergency response, and AI traffic management.",
    statistics: [
        {
            value: "10+",
            label: "smart cities supported",
            icon: Globe
        },
        {
            value: "1000+",
            label: "AI camera nodes",
            icon: Camera
        },
        {
            value: "30%",
            label: "faster emergency response",
            icon: Zap
        },
        {
            value: "24/7",
            label: "public safety monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: MapPin,
            title: "Public Surveillance",
            features: ["AI facial recognition", "Crowd density alerts", "Unattended object detection", "Smart street lighting"]
        },
        {
            icon: Car,
            title: "Traffic Management",
            features: ["ANPR enforcement", "Traffic flow analytics", "Signal control integration", "Parking management"]
        },
        {
            icon: Radio,
            title: "Crisis Response",
            features: ["Integrated Command Center", "Panic stations", "Public address systems", "Multi-agency coordination"]
        },
        {
            icon: Network,
            title: "Data Connectivity",
            features: ["IoT sensor networks", "Digital twin modelling", "Cyber-security for infra", "Real-time dashboards"]
        }
    ],
    verticalTabs: [
        {
            title: "Municipal Safety",
            description: "City-wide surveillance focusing on high-crime areas, public parks, and government buildings to ensure citizen safety. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Smart Parking",
            description: "Automated parking solutions reducing traffic congestion and ensuring secure vehicle storage in urban hubs. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Emergency Services",
            description: "Unified platforms for police, fire, and medical services to coordinate during large-scale urban incidents. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Critical Utilities",
            description: "Protection for power grids, water supply, and communication nodes against physical and cyber threats. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        }
    ],
    cta: {
        text: "Build a safer future with smart city security solutions",
        buttonText: "Partner for Smart Cities",
        link: "/verticals/smart-cities"
    }
};

// ============================================================================
// VERTICAL 11: MASS TRANSPORTATION
// ============================================================================

export const vertical11_MassTransportation: VerticalSection = {
    id: "mass-transportation",
    badgeLabel: "Transit Security",
    title: "Metro, Rail & Bus Terminals",
    subtitle: "Keeping the nation moving safely. Comprehensive security for mass transit hubs, commuters, and critical transport infrastructure.",
    statistics: [
        {
            value: "5M+",
            label: "daily commuters protected",
            icon: Users
        },
        {
            value: "Zero",
            label: "major service disruptions",
            icon: CheckCircle2
        },
        {
            value: "24/7",
            label: "track & platform monitoring",
            icon: Train
        },
        {
            value: "100%",
            label: "AI-powered crowd analytics",
            icon: Activity
        }
    ],
    portfolioCards: [
        {
            icon: Train,
            title: "Platform & Track Safety",
            features: ["Intrusion detection", "Anti-suicide sensors", "Visual track monitoring", "Platform screen gate sync"]
        },
        {
            icon: Search,
            title: "Passenger Screening",
            features: ["Baggage scanning", "Metal detection", "Behavioral analysis", "K9 explosive detection"]
        },
        {
            icon: Users,
            title: "Crowd Management",
            features: ["Density monitoring", "One-way flow control", "Peak hour management", "Emergency evacuation"]
        },
        {
            icon: MonitorDot,
            title: "Transit C4I",
            features: ["Unified station command", "PIDS integration", "Nodal communication", "Inter-modal coordination"]
        }
    ],
    verticalTabs: [
        {
            title: "Metro Rail",
            description: "High-frequency transit security focusing on station integrity, tunnel safety, and passenger screening. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Railway Stations",
            description: "Large-scale security for major junctions, including platform management, yard security, and freight protection. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Bus Terminals (ISBT)",
            description: "Security for multi-state bus hubs focusing on passenger safety, schedule adherence, and vehicle management. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Airside Transit",
            description: "Specialized shuttles and automated people movers (APM) security within airport ecosystems. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        }
    ],
    cta: {
        text: "Ensure commuter safety with advanced transit security",
        buttonText: "Secure Transit Infrastructure",
        link: "/verticals/mass-transportation"
    }
};

// ============================================================================
// VERTICAL 12: RETAIL & SHOPPING MALLS
// ============================================================================

export const vertical12_Retail: VerticalSection = {
    id: "retail",
    badgeLabel: "Retail Loss Prevention",
    title: "Shopping Malls & Retail Chains",
    subtitle: "Enhancing guest experience through safety. Specialized loss prevention and facility management for modern retail environments.",
    statistics: [
        {
            value: "30%",
            label: "reduction in shrinkage",
            icon: TrendingUp
        },
        {
            value: "200+",
            label: "stores under protection",
            icon: ShoppingBag
        },
        {
            value: "Zero",
            label: "safety incidents on record",
            icon: ShieldCheck
        },
        {
            value: "100%",
            label: "customer safety focus",
            icon: Heart
        }
    ],
    portfolioCards: [
        {
            icon: ShoppingBag,
            title: "Loss Prevention",
            features: ["EAS system integration", "Plain-clothes loss prevention", "POS monitoring", "Bag checks"]
        },
        {
            icon: Users,
            title: "Mall Guarding",
            features: ["Customer assistance", "Parking security", "Tenant management", "Child safety protocols"]
        },
        {
            icon: Eye,
            title: "Retail Analytics",
            features: ["Footfall counting", "Heatmapping", "Queue management", "VIP customer alerts"]
        },
        {
            icon: Lock,
            title: "High-Value Retail",
            features: ["Jewelry store security", "Armed response", "Vault management", "Anti-smash protection"]
        }
    ],
    verticalTabs: [
        {
            title: "Luxury Malls",
            description: "Elite guarding and concierge services for premium shopping destinations, emphasizing visitor experience. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Retail Chains",
            description: "Standardized security protocols across multiple locations with centralized audit systems. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Hypermarkets",
            description: "Large-scale security for high-volume retail, focusing on crowd movement and checkout integrity. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Multiplexes",
            description: "Safety and security for cinema halls within malls, including evening patrol and emergency exit management. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        }
    ],
    cta: {
        text: "Protect your retail assets and enhance visitor experience",
        buttonText: "Secure Your Retail Space",
        link: "/verticals/retail"
    }
};

// ============================================================================
// VERTICAL 13: TRAVEL & TOURISM
// ============================================================================

export const vertical13_TravelTourism: VerticalSection = {
    id: "travel-tourism",
    badgeLabel: "Tourism Security",
    title: "Tourist Destinations & Heritage Sites",
    subtitle: "Protecting history and hospitality. Ensuring safe and welcoming environments for tourists at historical and cultural landmarks.",
    statistics: [
        {
            value: "50+",
            label: "heritage sites protected",
            icon: Landmark
        },
        {
            value: "Zero",
            label: "vandalism incidents",
            icon: ShieldCheck
        },
        {
            value: "24/7",
            label: "visitor assistance",
            icon: Users
        },
        {
            value: "100%",
            label: "site integrity maintained",
            icon: Award
        }
    ],
    portfolioCards: [
        {
            icon: Landmark,
            title: "Heritage Protection",
            features: ["Antique theft prevention", "Vandalism monitoring", "Fire safety for old structures", "Crowd control"]
        },
        {
            icon: Map,
            title: "Tourist Safety",
            features: ["Bilingual security", "Emergency medical support", "Lost & found management", "Area patrolling"]
        },
        {
            icon: Camera,
            title: "Surveillance Integration",
            features: ["Low-impact camera mounts", "Wireless perimeter AI", "Centralized NOC", "Dignitary protection"]
        },
        {
            icon: Briefcase,
            title: "Event Tourism",
            features: ["Festival security", "VIP lounge protection", "Temporary access control", "Traffic management"]
        }
    ],
    verticalTabs: [
        {
            title: "Historical Sites",
            description: "Careful security deployment at sensitive archaeological sites, focusing on preservation and protection. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Religious Destinations",
            description: "High-volume crowd management for shrines and temples, ensuring devotee safety and orderly movement. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Adventure Tourism",
            description: "Security and rescue support for remote tourist locations, including tracking and communication systems. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        },
        {
            title: "Recreation Hubs",
            description: "Integrated security for theme parks, gardens, and urban recreation centers. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        }
    ],
    cta: {
        text: "Create a safe and memorable experience for your visitors",
        buttonText: "Secure Your Tourism Site",
        link: "/verticals/travel-tourism"
    }
};

// ============================================================================
// VERTICAL 14: CASH LOGISTICS
// ============================================================================

export const vertical14_CashLogistics: VerticalSection = {
    id: "cash-logistics",
    badgeLabel: "Financial Logistics",
    title: "Cash-in-Transit & High-Value Asset Management",
    subtitle: "Precision logistics for the financial world. RBI-compliant cash management, bullion escorts, and secure vaulting services.",
    statistics: [
        {
            value: "50k+",
            label: "ATMs serviced monthly",
            icon: Landmark
        },
        {
            value: "₹500Cr+",
            label: "daily cash transit volume",
            icon: TrendingUp
        },
        {
            value: "100%",
            label: "GPS-enabled fleet",
            icon: MapPin
        },
        {
            value: "Zero",
            label: "unresolved discrepancies",
            icon: ShieldCheck
        }
    ],
    portfolioCards: [
        {
            icon: Car,
            title: "CIT Vehicles",
            features: ["Custom-built armored vans", "Dual-lock systems", "Panic buttons", "Live GPS & internal CCTV"]
        },
        {
            icon: Lock,
            title: "Vault Management",
            features: ["Biometric vault access", "24/7 CCTV monitoring", "Seismic sensors", "Dual-custodian control"]
        },
        {
            icon: Landmark,
            title: "ATM Replenishment",
            features: ["End-to-end cash loading", "First-line maintenance", "Cash reconciliation", "Security escorts"]
        },
        {
            icon: Briefcase,
            title: "High-Value Escorts",
            features: ["Bullion & Diamond escorts", "Armed guards", "Satellite tracking", "Emergency response sync"]
        }
    ],
    verticalTabs: [
        {
            title: "Banking Logistics",
            description: "Integrated cash management services for commercial banks, including inter-branch transfers and RBI deposits. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset and individual remains secure around the clock."
        },
        {
            title: "Retail Cash Mgmt",
            description: "Safe pick-up services for retail outlets, hypermarkets, and fuel stations with same-day credit facilities. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe and future-proof."
        },
        {
            title: "Bullion Services",
            description: "Highly specialized transport for gold, silver, and precious gems with ex-military armed personnel. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity."
        },
        {
            title: "Vaulting Solutions",
            description: "Secure storage for bank-owned currency and high-value collateral in high-security regional vaults. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem without causing friction."
        }
    ],
    cta: {
        text: "Secure your financial assets with industry-leading logistics",
        buttonText: "Partner for Cash Logistics",
        link: "/verticals/cash-logistics"
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
    vertical6_Drones,
    vertical7_GCC,
    vertical8_Aerospace,
    vertical9_Logistics,
    vertical10_SmartCities,
    vertical11_MassTransportation,
    vertical12_Retail,
    vertical13_TravelTourism,
    vertical14_CashLogistics
];
