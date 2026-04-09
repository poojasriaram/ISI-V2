import {
    Train, Bus, Plane, ShieldCheck, Zap, Activity, Eye,
    Camera, Search, ShieldX, Cpu, MapPin, Network, 
    Phone, Radio, BarChart3, Bell, Globe, Database, 
    Users, Building2, Landmark, Clock, AlertTriangle,
    ShieldAlert, HardHat, Navigation, Route as RouteIcon, Scan, Lock as LockIcon
} from "lucide-react";

export interface TransitStatistic {
    value: string;
    label: string;
    icon: any;
}

export interface TransitCard {
    icon: any;
    title: string;
    features: string[];
}

export interface TransitTab {
    title: string;
    description: string;
}

export interface TransitSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: TransitStatistic[];
    portfolioCards: TransitCard[];
    verticalTabs: TransitTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const transitHero = {
    badge: "Mass Transportation Platform",
    title: "AI-Driven Passenger Safety, Transit Intelligence & Infrastructure Protection",
    subtitle: "Enterprise-grade transportation security platform designed to protect metros, railways, bus networks, airports, and transit hubs through AI-powered monitoring, intelligent mobility analytics, and centralized command centers."
};

export const transitHeroSlides = [
    {
        title: "AI-Driven Passenger Safety & Transit Intelligence",
        subtitle: "Protecting metros, railways, and transit hubs through AI-powered real-time monitoring."
    },
    {
        title: "Intelligent Mobility & Flow Analytics",
        subtitle: "Optimizing passenger movement and vehicle scheduling through predictive mobility data."
    },
    {
        title: "Critical Infrastructure Protection",
        subtitle: "Continuous monitoring for stations, tunnels, depots, and signaling systems."
    },
    {
        title: "Unified Transit Command Centers",
        subtitle: "Centralized C4I platform integrating surveillance, fleet tracking, and emergency response."
    }
];

// ============================================================================
// SECTION 1: TRANSIT INTELLIGENCE PLATFORM
// ============================================================================

export const section1_TransitIntelligence: TransitSection = {
    id: "transit-intelligence",
    badgeLabel: "Transit Intelligence Platform",
    title: "Smart Security & Operations for High-Density Transport Networks",
    subtitle: "Mass transportation systems operate in high-risk, high-density environments where safety, operational efficiency, and rapid incident response are critical. Our Mass Transportation platform integrates AI surveillance, crowd analytics, infrastructure monitoring, and predictive risk intelligence to create safer, more efficient transit systems.",
    statistics: [
        {
            value: "40%",
            label: "reduction in transit security incidents",
            icon: ShieldCheck
        },
        {
            value: "99.9%",
            label: "transit system monitoring uptime",
            icon: Activity
        },
        {
            value: "35%",
            label: "faster incident response coordination",
            icon: Zap
        },
        {
            value: "100%",
            label: "visibility across transport infrastructure",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Database,
            title: "Predictive Intelligence",
            features: ["Passenger demand forecasting", "Crowd congestion prediction", "Infra maintenance alerts", "Transit disruption analysis"]
        },
        {
            icon: BarChart3,
            title: "Data-Driven Governance",
            features: ["Mobility analytics dashboards", "Passenger flow insights", "Fleet performance metrics", "Safety compliance reporting"]
        },
        {
            icon: ShieldAlert,
            title: "Transit Safety Hub",
            features: ["AI surveillance", "Passenger monitoring", "Mobility analytics", "Unified command"]
        },
        {
            icon: Globe,
            title: "Global Connectivity",
            features: ["Multi-modal integration", "Cross-agency coordination", "Urban transit sync", "Scaled deployment"]
        }
    ],
    verticalTabs: [
        {
            title: "Metro Rail Systems",
            description: "Secure metro stations and rail networks with AI surveillance, passenger flow analytics, platform monitoring, and integrated command centers. Our solutions help metro authorities manage crowd safety, operational efficiency, and incident response across large transit networks. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        },
        {
            title: "Public Transit Authorities",
            description: "Monitor bus fleets, terminals, and transit routes using GPS tracking, vehicle surveillance, and mobility analytics. Transportation agencies gain real-time insights into fleet operations, passenger demand, and route performance. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across your entire network."
        },
        {
            title: "Railway Networks",
            description: "Enhance railway safety through station monitoring, rail corridor surveillance, track infrastructure monitoring, and passenger safety systems. Our integrated solutions enable railway operators to maintain secure, efficient, and resilient transportation networks. Our experts continuously optimize security frameworks to adapt to evolving logistical challenges."
        },
        {
            title: "Airport & Transit Hubs",
            description: "Airports and multimodal transport hubs require high-level security and passenger flow management. Our AI-powered systems provide crowd monitoring, security surveillance, baggage risk detection, and emergency coordination across large transport facilities. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats."
        }
    ],
    cta: {
        text: "Modernize your transit security infrastructure",
        buttonText: "Explore Transport Intelligence",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: PASSENGER SAFETY MONITORING
// ============================================================================

export const section2_PassengerSafety: TransitSection = {
    id: "passenger-safety",
    badgeLabel: "Passenger Safety Monitoring",
    title: "AI-Powered Transit Surveillance",
    subtitle: "Advanced surveillance systems designed to monitor stations, platforms, vehicles, and public transit corridors in real time.",
    statistics: [
        {
            value: "45%",
            label: "faster threat detection",
            icon: Zap
        },
        {
            value: "95%",
            label: "incident detection accuracy",
            icon: ShieldCheck
        },
        {
            value: "30%",
            label: "reduction in security incidents",
            icon: ShieldX
        },
        {
            value: "24×7",
            label: "real-time transit monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "AI Surveillance Network",
            features: ["HD station cameras", "Platform monitoring", "Vehicle CCTV sync", "Tunnel surveillance"]
        },
        {
            icon: ShieldAlert,
            title: "Behavioral Intelligence",
            features: ["Suspicious behavior detection", "Crowd surge alerts", "Abandoned baggage detection", "Unauthorized access"]
        },
        {
            icon: Users,
            title: "Safety Framework",
            features: ["Platform crowd analytics", "Passenger movement tracking", "Emergency event detection", "Panic alert stations"]
        },
        {
            icon: LockIcon,
            title: "Privacy-First Ops",
            features: ["Edge AI processing", "Encrypted transmission", "Consent-aware monitoring", "DPDP-compliant systems"]
        }
    ],
    verticalTabs: [
        {
            title: "Platform Safety",
            description: "Real-time edge analytics for detecting track-fall incidents and platform overcrowding before they become critical. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. Our dedicated command centers orchestrate seamless coordination, ensuring that every passenger remains secure around the clock."
        },
        {
            title: "On-Board Security",
            description: "Ruggedized mobile surveillance for buses and trains with low-latency cellular backhaul for real-time monitoring. This deeply integrated methodology not only safeguards assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize security frameworks to adapt to high-vibration transit environments."
        },
        {
            title: "Baggage Analytics",
            description: "AI-driven detection of left-behind or suspicious objects in transit hubs and security checkpoints. We prioritize continuous monitoring and predictive analytics to stay ahead of potential security threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on passenger speed."
        },
        {
            title: "Behavioral Alarms",
            description: "Automated alerts for aggression detection or panic behavior within stations to guide immediate response teams. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        }
    ],
    cta: {
        text: "Make every passenger journey safer",
        buttonText: "View Surveillance Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: SMART MOBILITY OPERATIONS
// ============================================================================

export const section3_MobilityOps: TransitSection = {
    id: "mobility-operations",
    badgeLabel: "Smart Mobility Operations",
    title: "Intelligent Transit Flow Management",
    subtitle: "AI-powered mobility systems help transportation authorities optimize passenger movement, vehicle scheduling, and congestion management.",
    statistics: [
        {
            value: "50%",
            label: "faster congestion detection",
            icon: Zap
        },
        {
            value: "35%",
            label: "improvement in transit efficiency",
            icon: BarChart3
        },
        {
            value: "25%",
            label: "reduction in wait times",
            icon: Clock
        },
        {
            value: "100%",
            label: "real-time fleet visibility",
            icon: Bus
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Passenger Analytics",
            features: ["Entry monitoring", "Platform density", "Route mapping", "Rush-hour insights"]
        },
        {
            icon: RouteIcon,
            title: "Fleet Monitoring",
            features: ["Real-time bus tracking", "Metro monitoring", "Fleet GPS visibility", "Route optimization"]
        },
        {
            icon: Clock,
            title: "Transit Coordination",
            features: ["Schedule adherence", "Dynamic route planning", "Demand forecasting", "Disruption alerts"]
        },
        {
            icon: Navigation,
            title: "Smart Inter-modal Sync",
            features: ["Metro-to-bus coordination", "Last-mile visibility", "Integrated Scheduling", "Seamless passenger transfers"]
        }
    ],
    verticalTabs: [
        {
            title: "Crowd Control",
            description: "Automated crowd density assessments at transit nodes to prevent bottlenecks and manage high-volume passenger surges. By integrating advanced technological solutions with highly trained personnel, we create a robust movement architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities across the system."
        },
        {
            title: "Schedule Adherence",
            description: "Real-time verification of fleet movements against planned schedules to optimize transit reliability for commuters. We prioritize continuous monitoring and predictive analytics to stay ahead of potential delays. Our tailored solutions seamlessly blend into your existing operations, ensuring elite efficiency without compromising on user experience."
        },
        {
            title: "Route Efficiency",
            description: "Data-driven insights into passenger demand to adjust vehicle frequency and route planning dynamically. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of operational intelligence. Our dedicated command centers orchestrate seamless coordination across the network."
        },
        {
            title: "Station Visibility",
            description: "Complete visibility of station status, from ticketing kiosks to escalators, through a unified monitoring interface. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks to keep your environment future-proof."
        }
    ],
    cta: {
        text: "Eliminate transit bottlenecks with AI mobility",
        buttonText: "Explore Mobility Tech",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: INFRASTRUCTURE PROTECTION
// ============================================================================

export const section4_InfraProtection: TransitSection = {
    id: "infra-protection",
    badgeLabel: "Infrastructure Protection",
    title: "Monitoring Critical Transit Infrastructure",
    subtitle: "Mass transportation infrastructure requires continuous monitoring to protect stations, tunnels, depots, signaling systems, and transit assets.",
    statistics: [
        {
            value: "99.7%",
            label: "infrastructure monitoring uptime",
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
            label: "visibility across transit assets",
            icon: Building2
        }
    ],
    portfolioCards: [
        {
            icon: HardHat,
            title: "Infrastructure Monitoring",
            features: ["Facility monitoring", "Tunnel safety sensors", "Electrical alerts", "Signaling infra alerts"]
        },
        {
            icon: ShieldCheck,
            title: "Asset Protection",
            features: ["Depot security", "Rail track monitoring", "Depot surveillance", "Smart access control"]
        },
        {
            icon: Globe,
            title: "Environmental Info",
            features: ["Air quality monitoring", "Fire detection", "Flood detection alerts", "Temperature monitoring"]
        },
        {
            icon: Zap,
            title: "Signaling Protection",
            features: ["SCADA surveillance", "Signal cabinet security", "Communication link monitoring", "Tamper alerts"]
        }
    ],
    verticalTabs: [
        {
            title: "Tunnel Security",
            description: "Persistent monitoring of transit tunnels for intrusion detection and structural integrity alerts using optical fiber sensing. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous safety standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        },
        {
            title: "Depot Management",
            description: "Integrated security for vehicle sheds and maintenance yards, combining perimeter AI with high-value asset tracking. By integrating advanced technological solutions, we create a robust defense architecture. This proactive strategy virtually eliminates vulnerabilities across your entire ecosystem without causing friction to operations."
        },
        {
            title: "Track Monitoring",
            description: "Automated rail track inspection using vehicle-mounted cameras and trackside sensors to detect foreign objects or failures. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions seamlessly blend into your existing infrastructure, ensuring elite protection."
        },
        {
            title: "Utility Guard",
            description: "Protection for critical electrical sub-stations and signaling rooms that power the mass transit nervous system. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination 24/7."
        }
    ],
    cta: {
        text: "Secure the foundation of your transit network",
        buttonText: "Protect Transit Infrastructure",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: EMERGENCY RESPONSE
// ============================================================================

export const section5_EmergencyResponse: TransitSection = {
    id: "transit-emergency",
    badgeLabel: "Emergency Response Platform",
    title: "Rapid Incident Management for Transit Systems",
    subtitle: "Transportation networks require immediate response to emergencies such as accidents, medical incidents, crowd surges, or security threats.",
    statistics: [
        {
            value: "50%",
            label: "faster emergency response",
            icon: Zap
        },
        {
            value: "40%",
            label: "improved coordination",
            icon: Users
        },
        {
            value: "30%",
            label: "reduction in disruption impact",
            icon: BarChart3
        },
        {
            value: "24×7",
            label: "live incident monitoring",
            icon: Radio
        }
    ],
    portfolioCards: [
        {
            icon: ShieldAlert,
            title: "Incident Management",
            features: ["Real-time alerts", "Response dashboards", "Multi-agency coordination", "Escalation workflows"]
        },
        {
            icon: Bell,
            title: "Passenger Safety Alerts",
            features: ["Platform alerts", "Notification systems", "PA system integration", "Evacuation coordination"]
        },
        {
            icon: Activity,
            title: "Disaster Response",
            features: ["Accident coordination", "Fire emergency alerts", "Medical dispatch", "Threat containment"]
        },
        {
            icon: Phone,
            title: "Crisis Comms",
            features: ["Passenger SOS link", "Emergency hotline sync", "On-board intercom integration", "Centralized broadcast"]
        }
    ],
    verticalTabs: [
        {
            title: "Accident Dispatch",
            description: "Automated coordination between transit operators and local emergency services for rapid field deployment during incidents. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks to adapt to evolving urban challenges."
        },
        {
            title: "Evacuation Control",
            description: "Guided evacuation systems that use live crowd analytics to steer passengers toward safe exits during emergencies. By integrating advanced technological solutions with highly trained personnel, we create a robust safety architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities."
        },
        {
            title: "Medical Support",
            description: "Real-time communication links between on-station medical kiosks and central trauma response centers. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection for every passenger."
        },
        {
            title: "Security Inbound",
            description: "One-click deployment of rapid response security teams to specific coordinates within the transit network. Through the deployment of industry-leading protocols and state-of-the-art systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination 24/7."
        }
    ],
    cta: {
        text: "Reduce transit downtime during emergencies",
        buttonText: "Deploy Response Platform",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 6: TRANSIT COMMAND CENTER
// ============================================================================

export const section6_CommandCenter: TransitSection = {
    id: "transit-command",
    badgeLabel: "Transit Command Center",
    title: "Unified Mass Transportation Command & Control",
    subtitle: "Centralized monitoring hub integrating transit surveillance, fleet tracking, infrastructure monitoring, and emergency response systems.",
    statistics: [
        {
            value: "60%",
            label: "faster incident escalation",
            icon: Zap
        },
        {
            value: "100%",
            label: "visibility across transit networks",
            icon: Eye
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Clock
        },
        {
            value: "AI",
            label: "predictive transit intelligence",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Unified Dashboards",
            features: ["Station surveillance", "Fleet tracking maps", "Passenger flow analytics", "Incident management"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Intelligence",
            features: ["Crowd surge prediction", "Infra failure alerts", "Disruption analysis", "Threat prediction"]
        },
        {
            icon: Radio,
            title: "Incident Escalation",
            features: ["Automated alerts", "Response coordination", "Priority workflows", "Performance tracking"]
        },
        {
            icon: Scan,
            title: "Digital Twin Ops",
            features: ["Virtual station mapping", "Simulated flow testing", "Resource heatmapping", "Asset health tracking"]
        }
    ],
    verticalTabs: [
        {
            title: "Consolidated Views",
            description: "Merging video, GPS, and IoT sensor data into a single operational 'cockpit' for transit managers. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind. Our experts continuously optimize security frameworks to adapt to evolving transit challenges."
        },
        {
            title: "Inter-Agency Sync",
            description: "Collaborative platform for sharing critical data with police, fire, and municipal authorities during large-scale urban events. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. This proactive strategy dramatically reduces incident response times across multiple entities."
        },
        {
            title: "Performance Metrics",
            description: "Real-time auditing of transit performance, security response times, and infrastructure health KPIs. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection without compromising on operational efficiency."
        },
        {
            title: "Operational AI",
            description: "AI co-pilots that suggest optimal vehicle routing and resource allocation based on live passenger demand. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. Our dedicated command centers orchestrate seamless coordination, ensuring that every asset remains secure."
        }
    ],
    cta: {
        text: "Bring your transit data to life",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Mass Transportation Is Safe, Intelligent & Passenger-Centric",
    subtitle: "Replace fragmented transit systems with AI-powered transport intelligence built for safety, efficiency, and scale.",
    buttonText: "Book a Mass Transportation Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allTransitSections = [
    section1_TransitIntelligence,
    section2_PassengerSafety,
    section3_MobilityOps,
    section4_InfraProtection,
    section5_EmergencyResponse,
    section6_CommandCenter
];
