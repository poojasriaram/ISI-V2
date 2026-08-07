import {
    Building2, Users, Eye, ShieldCheck, Zap, Activity, ShieldAlert,
    Camera, Search, ShieldX, Cpu, MapPin, Car, Network, Train,
    Phone, Radio, BarChart3, Bell, Globe, Database, HelpCircle,
    Info, MessageSquare, Briefcase, Landmark, CheckCircle2, Clock, 
    Package, Heart, AlertTriangle, Wifi, MonitorDot, FileCheck, 
    Smartphone, Lock as LockIcon, Map as MapIcon, Zap as ZapIcon, AlertTriangle as AlertIcon, 
    Clock as ClockIcon, Building2 as BuildingIcon
} from "lucide-react";

export interface SmartCityStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface SmartCityCard {
    icon: any  ;
    title: string;
    features: string[];
}

export interface SmartCityTab {
    title: string;
    description: string;
}

export interface SmartCitySection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: SmartCityStatistic[];
    portfolioCards: SmartCityCard[];
    verticalTabs: SmartCityTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const smartCityHero = {
    badge: "Smart Cities Platform",
    title: "AI-Driven Urban Safety, Infrastructure Intelligence & City Operations",
    subtitle: "Enterprise-grade Smart City platform designed to help governments, municipalities, and infrastructure operators manage urban safety, mobility, utilities, and citizen services through a unified AI-powered command ecosystem."
};

export const smartCityHeroSlides = [
    {
        title: "AI-Driven Urban Safety & City Operations",
        subtitle: "Enterprise-grade platform for governments and municipalities to manage urban safety and citizen services."
    },
    {
        title: "Integrated Command & Control Centers",
        subtitle: "A unified AI-powered ecosystem for real-time monitoring and holistic city management."
    },
    {
        title: "Infrastructure Intelligence & Utilities",
        subtitle: "Predictive monitoring for city infrastructure, smart utilities, and public asset protection."
    },
    {
        title: "Citizen-First Urban Safety Framework",
        subtitle: "Advanced AI surveillance and emergency response systems designed for public welfare."
    }
];

// ============================================================================
// SECTION 1: URBAN INTELLIGENCE PLATFORM
// ============================================================================

export const section1_UrbanIntelligence: SmartCitySection = {
    id: "urban-intelligence",
    badgeLabel: "Urban Intelligence Platform",
    title: "AI-Powered Smart City Operations",
    subtitle: "Modern cities operate as complex ecosystems where transport systems, utilities, public infrastructure, and citizen services must function seamlessly together. Our Smart City platform integrates AI analytics, IoT monitoring, predictive risk intelligence, and centralized command centers to transform urban environments into safe, efficient, and resilient cities.",
    statistics: [
        {
            value: "45%",
            label: "reduction in incident response time",
            icon: Zap
        },
        {
            value: "99.9%",
            label: "city infrastructure monitoring uptime",
            icon: Activity
        },
        {
            value: "35%",
            label: "faster emergency coordination",
            icon: Radio
        },
        {
            value: "100%",
            label: "visibility across city assets",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Database,
            title: "Predictive Intelligence",
            features: ["Urban risk scoring", "Crime hotspot analysis", "Infra health predictions", "Traffic forecasting"]
        },
        {
            icon: BarChart3,
            title: "Data-Driven Governance",
            features: ["City dashboards", "Public safety analytics", "Resource optimization", "Utilization metrics"]
        },
        {
            icon: ShieldCheck,
            title: "Safety Framework",
            features: ["AI surveillance", "Integrated command", "Infra monitoring", "Citizen safety first"]
        },
        {
            icon: Globe,
            title: "Resilient Operations",
            features: ["IoT monitoring", "Predictive risk intel", "Centralized control", "Urban transformation"]
        }
    ],
    verticalTabs: [
        {
            title: "Municipal Corporations",
            description: "Citywide infrastructure management with AI surveillance, smart traffic systems, environmental monitoring, and integrated command centers that improve governance, safety, and operational efficiency. Municipal leaders gain real-time insights into city operations, enabling faster decision-making, improved resource allocation, and proactive public safety management."
        },
        {
            title: "Traffic Authorities",
            description: "AI-powered transportation monitoring helps authorities optimize traffic flow, manage public transit systems, detect violations, and respond to road incidents faster. Our intelligent mobility solutions ensure safe, efficient, and congestion-free urban transportation networks."
        },
        {
            title: "Utility Operators",
            description: "Critical infrastructure such as power grids, water supply networks, and smart utilities require continuous monitoring and predictive maintenance. Our infrastructure intelligence platform enables operators to detect failures early, prevent outages, and maintain reliable city services."
        },
        {
            title: "Public Safety",
            description: "Law enforcement and emergency agencies benefit from real-time situational awareness, predictive analytics, and integrated emergency coordination systems. Through centralized command centers, authorities can monitor threats, manage crises, and maintain urban safety at scale."
        }
    ],
    cta: {
        text: "Build a safer future for your citizens",
        buttonText: "Explore Urban Intelligence",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: INTELLIGENT CITY SURVEILLANCE
// ============================================================================

export const section2_CitySurveillance: SmartCitySection = {
    id: "city-surveillance",
    badgeLabel: "Intelligent City Surveillance",
    title: "AI-Enabled Public Safety Monitoring",
    subtitle: "Smart city surveillance systems detect potential risks, manage crowd density, and help city authorities respond quickly to security incidents.",
    statistics: [
        {
            value: "40%",
            label: "faster threat detection",
            icon: ShieldAlert
        },
        {
            value: "95%",
            label: "incident detection accuracy",
            icon: ShieldCheck
        },
        {
            value: "30%",
            label: "crime hotspot reduction",
            icon: BarChart3
        },
        {
            value: "24/7",
            label: "real-time monitoring capability",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "AI Surveillance Infra",
            features: ["High-definition cameras", "Behavioral detection AI", "Crowd monitoring", "Suspicious activity detection"]
        },
        {
            icon: Bell,
            title: "Smart Incident Detection",
            features: ["Aggression detection", "Abandoned object alerts", "Perimeter intrusion", "Emergency event alerts"]
        },
        {
            icon: ShieldCheck,
            title: "Privacy-First Monitoring",
            features: ["Edge processing", "Encrypted transmission", "Consent-aware systems", "DPDP-compliant ops"]
        },
        {
            icon: Network,
            title: "Unified Command",
            features: ["Live video feeds", "Centralized NOC", "Multi-agency alerts", "Incident archiving"]
        }
    ],
    verticalTabs: [
        {
            title: "Public Areas",
            description: "Protection for parks, squares, and public walkways using intelligent sensors to detect anomalies and ensure citizen well-being. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. Our dedicated command centers orchestrate seamless coordination, ensuring that every individual remains secure around the clock."
        },
        {
            title: "Critical Hubs",
            description: "Advanced surveillance for sensitive city installations, government buildings, and iconic landmarks with multi-layer threat detection. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to evolving challenges."
        },
        {
            title: "Event Monitoring",
            description: "Dynamic surveillance deployment for festivals, rallies, and large urban gatherings with real-time crowd analytics. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency."
        },
        {
            title: "Safety Escorts",
            description: "Digital escort systems for citizens in high-risk zones, integrating mobile alerts with live city monitoring. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        }
    ],
    cta: {
        text: "Enhance city-wide safety with AI surveillance",
        buttonText: "View Surveillance Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: SMART URBAN MOBILITY
// ============================================================================

export const section3_UrbanMobility: SmartCitySection = {
    id: "urban-mobility",
    badgeLabel: "Smart Urban Mobility",
    title: "AI-Driven Traffic & Transportation Intelligence",
    subtitle: "Urban mobility systems require real-time intelligence to reduce congestion and improve road safety.",
    statistics: [
        {
            value: "50%",
            label: "congestion resolution speed",
            icon: Zap
        },
        {
            value: "35%",
            label: "reduction in traffic violations",
            icon: AlertTriangle
        },
        {
            value: "25%",
            label: "shorter emergency routes",
            icon: MapPin
        },
        {
            value: "100%",
            label: "real-time traffic visibility",
            icon: Car
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Traffic Intelligence",
            features: ["AI monitoring", "Accident detection", "Vehicle flow analytics", "Violation alerts"]
        },
        {
            icon: MapPin,
            title: "Intersection Control",
            features: ["Adaptive signals", "Emergency prioritization", "Pedestrian safety", "Congestion mgmt"]
        },
        {
            icon: Train,
            title: "Public Transport",
            features: ["Bus fleet tracking", "Metro analytics", "Route optimization", "Transit safety"]
        },
        {
            icon: Network,
            title: "V2X Integration",
            features: ["Vehicle-to-city comms", "Infrastructure sync", "Road alerts", "Smart signage"]
        }
    ],
    verticalTabs: [
        {
            title: "Traffic Signals",
            description: "Smart signal controllers that adjust timing based on real-time traffic volume to minimize wait times and reduce idle emissions. Through the deployment of industry-leading protocols and state-of-the-art systems, we guarantee an elite level of efficiency. Our dedicated command centers orchestrate seamless coordination, ensuring that city traffic remains fluid around the clock."
        },
        {
            title: "Fleet Management",
            description: "Enterprise-grade tracking for municipal fleets, including waste management and public works vehicles with route optimization. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks to adapt to evolving urban challenges."
        },
        {
            title: "Pedestrian Safety",
            description: "AI-enabled Crosswalk monitoring and signal prioritization for vulnerable road users at busy city intersections. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions seamlessly blend into your existing infrastructure, ensuring elite protection without compromising on operational efficiency."
        },
        {
            title: "Parking Solutions",
            description: "City-wide smart parking platforms that guide drivers to available spots, reducing unnecessary cruising and congestion. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence to optimize urban space utilization and enhance the citizen experience."
        }
    ],
    cta: {
        text: "Optimize city traffic flow today",
        buttonText: "Explore Mobility Tech",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: INFRASTRUCTURE INTELLIGENCE
// ============================================================================

export const section4_InfraIntelligence: SmartCitySection = {
    id: "infra-intelligence",
    badgeLabel: "Infrastructure Intelligence",
    title: "Monitoring Critical City Infrastructure",
    subtitle: "Smart cities rely on interconnected infrastructure systems including power, water, utilities, and public facilities.",
    statistics: [
        {
            value: "99.7%",
            label: "infra monitoring uptime",
            icon: Activity
        },
        {
            value: "60%",
            label: "faster fault detection",
            icon: Zap
        },
        {
            value: "30%",
            label: "reduction in downtime",
            icon: Clock
        },
        {
            value: "100%",
            label: "visibility across city assets",
            icon: Building2
        }
    ],
    portfolioCards: [
        {
            icon: Zap,
            title: "Infrastructure Monitoring",
            features: ["Smart grid analytics", "Water supply monitoring", "Street lighting mgmt", "Waste sensors"]
        },
        {
            icon: Globe,
            title: "Environmental Monitoring",
            features: ["Air quality sensors", "Flood detection alerts", "Weather monitoring", "Climate analytics"]
        },
        {
            icon: Building2,
            title: "Asset Protection",
            features: ["Govt building security", "Utility protection", "Public asset monitoring", "Tamper detection"]
        },
        {
            icon: Wifi,
            title: "IoT Connectivity",
            features: ["Urban sensor networks", "LoRaWAN deployment", "Remote sensing", "Real-time telemetry"]
        }
    ],
    verticalTabs: [
        {
            title: "Smart Grids",
            description: "Intelligent monitoring for city-wide power networks, detecting leaks, outages, and load imbalances before they affect citizens. By integrating advanced technological solutions, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire grid without causing friction."
        },
        {
            title: "Water Systems",
            description: "Telemetry and leak detection for urban water supply, ensuring equitable distribution and preventing precious resource loss. We prioritize continuous monitoring and predictive analytics to stay ahead of potential failures. Our tailored solutions seamlessly blend into your existing utility operations, ensuring elite protection and operational efficiency."
        },
        {
            title: "Street Lighting",
            description: "Energy-efficient lighting networks that adjust brightness based on occupancy and ambient light levels, integrated with city C4I. Through the deployment of industry-leading protocols, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every street remains well-lit and secure."
        },
        {
            title: "Waste Management",
            description: "Sensor-enabled garbage collection that optimizes bin pick-up routes based on fill-levels, improving urban hygiene. This deeply integrated methodology not only safeguards public health but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks to keep your environment decisively safe and future-proof."
        }
    ],
    cta: {
        text: "Secure your city's critical utilities",
        buttonText: "Protect City Infrastructure",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: EMERGENCY RESPONSE
// ============================================================================

export const section5_EmergencyResponse: SmartCitySection = {
    id: "emergency-response",
    badgeLabel: "Emergency Response Platform",
    title: "Integrated City Emergency Management",
    subtitle: "Coordinate police, fire departments, ambulance services, and disaster management authorities through a unified emergency response system.",
    statistics: [
        {
            value: "50%",
            label: "faster emergency dispatch",
            icon: Zap
        },
        {
            value: "40%",
            label: "improved coordination",
            icon: Users
        },
        {
            value: "30%",
            label: "reduction in response delays",
            icon: Clock
        },
        {
            value: "24/7",
            label: "citywide monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Radio,
            title: "Emergency Management",
            features: ["Centralized dispatch", "Real-time dashboards", "Multi-agency coordination", "Crisis workflows"]
        },
        {
            icon: Activity,
            title: "Disaster Preparedness",
            features: ["Flood monitoring", "Earthquake integration", "Fire networks", "Evacuation coordination"]
        },
        {
            icon: Users,
            title: "Public Response",
            features: ["SOS app integration", "Panic station networks", "Public address sync", "Volunteer coordination"]
        },
        {
            icon: Bell,
            title: "Early Warning",
            features: ["Mass notification", "Siren integration", "Mobile broadcast", "Digital signage alerts"]
        }
    ],
    verticalTabs: [
        {
            title: "Police Services",
            description: "CAD (Computer Aided Dispatch) systems for law enforcement with real-time unit tracking and situational awareness maps. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind."
        },
        {
            title: "Fire & Rescue",
            description: "Integrated fire sensor alerts with hydrant location mapping and optimal route planning for fire tenders. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem."
        },
        {
            title: "Medical Emergency",
            description: "Unified ambulance dispatch with patient vitals telemetry and emergency room preparation alerts for hospitals. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency."
        },
        {
            title: "Disaster Control",
            description: "Multi-agency collaboration platforms for handling large-scale urban disasters, floods, or structural failures. Through the deployment of industry-leading protocols and state-of-the-art systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination, ensuring that every individual remains secure."
        }
    ],
    cta: {
        text: "Ready to coordinate city-wide emergencies?",
        buttonText: "Deploy Response Platform",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 6: SMART CITY COMMAND CENTER
// ============================================================================

export const section6_CommandCenter: SmartCitySection = {
    id: "command-center",
    badgeLabel: "City Command Center",
    title: "Unified Urban Operations & Intelligence",
    subtitle: "The Smart City Command Center acts as the central operational hub for urban safety, mobility, infrastructure, and emergency response.",
    statistics: [
        {
            value: "60%",
            label: "faster incident escalation",
            icon: Zap
        },
        {
            value: "100%",
            label: "citywide visibility",
            icon: Eye
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Clock
        },
        {
            value: "AI",
            label: "predictive risk intelligence",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: MonitorDot,
            title: "Unified Dashboards",
            features: ["Surveillance analytics", "Traffic monitoring", "Infra health status", "Emergency response sync"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Engine",
            features: ["Crime prediction", "Infrastructure failure alerts", "Disaster risk modeling", "Urban analytics"]
        },
        {
            icon: MapPin,
            title: "Situational Mapping",
            features: ["Digital twin modelling", "Interactive city maps", "Nodal asset tracking", "Resource hotspots"]
        },
        {
            icon: FileCheck,
            title: "Operational Audits",
            features: ["Response time tracking", "Governance compliance", "Audit-ready logs", "Citizen feedback sync"]
        }
    ],
    verticalTabs: [
        {
            title: "Operational Hubs",
            description: "Central command interfaces that unify disjointed city departments into a single collaborative workspace. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind and uninterrupted continuity. This deeply integrated methodology not only safeguards critical assets but also drives strategic value."
        },
        {
            title: "Executive View",
            description: "High-level performance dashboards for city leaders, summarizing urban health, safety, and efficiency metrics. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our experts continuously optimize security frameworks to adapt to evolving challenges, keeping your environment decisively safe."
        },
        {
            title: "Field Intelligence",
            description: "Mobile command tools for field officers, pushing real-time intelligence and tasks to ground personnel. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency, productivity, or user experience."
        },
        {
            title: "Public Dashboards",
            description: "Citizen-facing data portals for transparency on air quality, traffic status, and public service availability. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire ecosystem."
        }
    ],
    cta: {
        text: "Unify your city operations today",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Smart Cities Is Predictive, Secure & Citizen-Centric",
    subtitle: "Replace fragmented city systems with AI-powered urban intelligence built for safety, resilience, and scale.",
    buttonText: "Book a Smart City Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allSmartCitySections = [
    section1_UrbanIntelligence,
    section2_CitySurveillance,
    section3_UrbanMobility,
    section4_InfraIntelligence,
    section5_EmergencyResponse,
    section6_CommandCenter
];
