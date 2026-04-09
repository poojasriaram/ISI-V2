import {
    ShieldCheck, Activity, Zap, Eye, Database, BarChart3, 
    ShieldAlert, Globe, Camera, Search, ShieldX, Users, 
    Lock as LockIcon, Clock, Bus, Route as RouteIcon, 
    Navigation, HardHat, Building2, Bell, Phone, Radio, 
    Cpu, Scan, Landmark, MapPin, Heart, Wifi, MonitorDot, AlertTriangle
} from "lucide-react";

export interface TourismStatistic {
    value: string;
    label: string;
    icon: any;
}

export interface TourismCard {
    icon: any;
    title: string;
    features: string[];
}

export interface TourismTab {
    title: string;
    description: string;
}

export interface TourismSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: TourismStatistic[];
    portfolioCards: TourismCard[];
    verticalTabs: TourismTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const tourismHero = {
    badge: "Travel & Tourism Platform",
    title: "AI-Driven Visitor Safety, Destination Intelligence & Tourism Infrastructure Protection",
    subtitle: "Enterprise-grade safety and operational intelligence platform designed to protect tourist destinations, heritage sites, hotels, resorts, transport hubs, and large visitor ecosystems through AI-powered monitoring, crowd analytics, and centralized command centers."
};

export const tourismHeroSlides = [
    {
        title: "AI-Driven Visitor Safety & Destination Intelligence",
        subtitle: "Protecting tourist destinations and heritage sites through AI-powered real-time monitoring and crowd analytics."
    },
    {
        title: "Smart Destination Management & Experience",
        subtitle: "Optimizing visitor flow and capacity management to prevent overcrowding and enhance tourism experiences."
    },
    {
        title: "Tourism Infrastructure & Asset Protection",
        subtitle: "Continuous monitoring for hotels, resorts, cruise terminals, and critical tourism infrastructure."
    },
    {
        title: "Integrated Tourism Command Centers",
        subtitle: "Unified C4I platform for seamless destination-wide coordination and rapid emergency response."
    }
];

// ============================================================================
// SECTION 1: TOURISM INTELLIGENCE PLATFORM
// ============================================================================

export const section1_TourismIntelligence: TourismSection = {
    id: "tourism-intelligence",
    badgeLabel: "Tourism Intelligence Platform",
    title: "Smart Safety & Operations for Tourism Ecosystems",
    subtitle: "Tourism destinations often experience high visitor density, seasonal surges, and complex infrastructure environments. Ensuring visitor safety while maintaining smooth operations is critical for destination authorities and tourism operators. Our Travel & Tourism platform integrates AI surveillance, visitor flow analytics, infrastructure monitoring, and predictive risk intelligence to ensure safe, efficient, and world-class tourism experiences.",
    statistics: [
        {
            value: "40%",
            label: "reduction in security incidents at tourist locations",
            icon: ShieldCheck
        },
        {
            value: "99.9%",
            label: "destination monitoring uptime",
            icon: Activity
        },
        {
            value: "35%",
            label: "faster incident response coordination",
            icon: Zap
        },
        {
            value: "100%",
            label: "visibility across tourism infrastructure",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Database,
            title: "Predictive Intelligence",
            features: ["Tourist demand forecasting", "Crowd congestion prediction", "Infra maintenance alerts", "Event tourism analytics"]
        },
        {
            icon: BarChart3,
            title: "Data-Driven Governance",
            features: ["Visitor analytics dashboards", "Tourism performance metrics", "Safety compliance monitoring", "Resource optimization"]
        },
        {
            icon: ShieldAlert,
            title: "Safety Hub Ops",
            features: ["AI surveillance", "Visitor flow tracking", "Infrastructure alerts", "Crisis coordination"]
        },
        {
            icon: Globe,
            title: "Global Standards",
            features: ["Heritage site protocols", "Multi-site integration", "International visitor safety", "Sustainable tourism monitoring"]
        }
    ],
    verticalTabs: [
        {
            title: "Tourism Boards & Authorities",
            description: "Monitor entire tourism ecosystems including heritage sites, monuments, and tourist attractions through AI-powered safety systems. Tourism authorities gain real-time insights to improve visitor safety, crowd management, and destination operations. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        },
        {
            title: "Hotels & Resort Chains",
            description: "Protect hotel properties and guests through advanced surveillance, access control, and integrated safety monitoring systems. Our platform helps hospitality operators maintain secure guest environments without compromising comfort and experience. This deeply integrated methodology drive strategic value by minimizing operational disruptions."
        },
        {
            title: "Heritage & Cultural Sites",
            description: "Heritage monuments require special protection to preserve historical assets while accommodating large tourist crowds. Our AI-powered monitoring systems help authorities protect heritage sites while ensuring safe visitor experiences. Our experts continuously optimize security frameworks to adapt to evolving environmental challenges."
        },
        {
            title: "Event & Entertainment Tourism",
            description: "Large tourism events such as festivals and concerts require advanced crowd management and safety systems. Our platform enables real-time monitoring, crowd flow analytics, and rapid emergency response for large-scale tourism events. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats."
        }
    ],
    cta: {
        text: "Build world-class tourism safety infrastructure",
        buttonText: "Explore Tourism Intelligence",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: VISITOR SAFETY MONITORING
// ============================================================================

export const section2_VisitorSafety: TourismSection = {
    id: "visitor-safety",
    badgeLabel: "Visitor Safety Monitoring",
    title: "AI-Powered Tourism Surveillance",
    subtitle: "Advanced surveillance systems designed to monitor tourist hotspots, monuments, resorts, transport hubs, and public attractions in real time.",
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
            label: "reduction in safety incidents",
            icon: ShieldX
        },
        {
            value: "24×7",
            label: "real-time monitoring capability",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "AI Surveillance Network",
            features: ["HD hotspot cameras", "Heritage site monitoring", "Resort CCTV integration", "Public area surveillance"]
        },
        {
            icon: ShieldAlert,
            title: "Behavioral Risk Detection",
            features: ["Suspicious activity detection", "Crowd surge alerts", "Unauthorized access", "Abandoned object detection"]
        },
        {
            icon: Users,
            title: "Visitor Safety Tracking",
            features: ["Tourist density monitoring", "Flow tracking", "Emergency detection", "Panic alert systems"]
        },
        {
            icon: LockIcon,
            title: "Privacy-First Monitoring",
            features: ["Edge AI processing", "Secure data encryption", "Privacy-aware policies", "DPDP-compliant monitoring"]
        }
    ],
    verticalTabs: [
        {
            title: "Hotspot Surveillance",
            description: "Intelligent monitoring of high-density tourist areas to prevent overcrowding and ensure public order. By integrating advanced technological solutions with highly trained personnel, we create a robust defense architecture. Our dedicated command centers orchestrate seamless coordination, ensuring that every visitor remains secure."
        },
        {
            title: "Monument Security",
            description: "Specialized monitoring for heritage structures with zero-impact sensor deployment to preserve historical integrity. This deeply integrated methodology not only safeguards assets but also drives strategic value by minimizing risks. Our experts continuously optimize security frameworks to adapt to high-traffic environments."
        },
        {
            title: "Resort Protection",
            description: "Integrated safety for large resorts and hotels, combining perimeter surveillance with guest area security. We prioritize continuous monitoring and predictive analytics to stay ahead of potential security threats. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection."
        },
        {
            title: "Flow Intelligence",
            description: "Real-time analysis of visitor movement to optimize entry/exit points and prevent bottlenecks at popular attractions. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. We leverage real-time intelligence to neutralize risks before they escalate."
        }
    ],
    cta: {
        text: "Make every visitor destination safer",
        buttonText: "View Surveillance Solutions",
        link: "/contact"
  }
};

// ============================================================================
// SECTION 3: SMART DESTINATION MANAGEMENT
// ============================================================================

export const section3_DestinationMgmt: TourismSection = {
    id: "destination-management",
    badgeLabel: "Smart Destination Management",
    title: "Intelligent Visitor Flow & Experience Optimization",
    subtitle: "Tourism destinations require intelligent management of visitor flow, transportation access, and attraction capacity to prevent overcrowding and improve visitor experience.",
    statistics: [
        {
            value: "50%",
            label: "faster crowd congestion detection",
            icon: Zap
        },
        {
            value: "35%",
            label: "improvement in tourist flow management",
            icon: BarChart3
        },
        {
            value: "25%",
            label: "reduction in overcrowding incidents",
            icon: ShieldX
        },
        {
            value: "100%",
            label: "real-time visibility across tourist areas",
            icon: MapPin
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Visitor Flow Analytics",
            features: ["Attraction entry monitoring", "Tourist movement analysis", "Peak hour insights", "Route optimization"]
        },
        {
            icon: Landmark,
            title: "Smart Attraction Monitoring",
            features: ["Monument capacity management", "Theme park monitoring", "Event tourism analytics", "Guided movement systems"]
        },
        {
            icon: Bus,
            title: "Tourism Mobility Intelligence",
            features: ["Shuttle bus monitoring", "Tourist transport analytics", "Smart parking systems", "Traffic optimization"]
        },
        {
            icon: MonitorDot,
            title: "Capacity Control",
            features: ["Real-time headcount", "Entry automation", "Demand-based spacing", "Digital queue management"]
        }
    ],
    verticalTabs: [
        {
            title: "Congestion Control",
            description: "Automated alerts for congestion thresholds at monuments and public spaces to trigger redirection protocols. By integrating advanced technological solutions, we create a robust movement architecture. This proactive strategy dramatically reduces response times and virtually eliminates vulnerabilities across the destination."
        },
        {
            title: "Queue Management",
            description: "Digital analysis of waiting times and visitor density at attraction entrances to optimize ticketing and scheduling. We prioritize continuous monitoring and predictive analytics to stay ahead of potential bottlenecks. Our tailored solutions seamlessly blend into your existing operations, ensuring elite efficiency."
        },
        {
            title: "Transport Sync",
            description: "Coordinating tourist transport services with real-time attraction capacity data to manage visitor arrival rates. Through the deployment of industry-leading protocols, we guarantee an elite level of operational intelligence. Our dedicated command centers orchestrate seamless coordination across the tourism network."
        },
        {
            title: "Experience Heatmaps",
            description: "Visualizing visitor dwelling patterns to improve site layout and resource distribution for destination managers. This deeply integrated methodology not only safeguards critical assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks."
        }
    ],
    cta: {
        text: "Optimize destination operations with AI intelligence",
        buttonText: "Explore Management Tech",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: TOURISM INFRASTRUCTURE PROTECTION
// ============================================================================

export const section4_InfraProtection: TourismSection = {
    id: "tourism-infrastructure",
    badgeLabel: "Tourism Infrastructure Protection",
    title: "Monitoring Critical Tourism Infrastructure",
    subtitle: "Tourism ecosystems depend on critical infrastructure including hotels, resorts, airports, cruise terminals, transport corridors, and heritage sites.",
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
            label: "reduction in operational disruptions",
            icon: Clock
        },
        {
            value: "100%",
            label: "visibility across tourism assets",
            icon: Building2
        }
    ],
    portfolioCards: [
        {
            icon: HardHat,
            title: "Infrastructure Monitoring",
            features: ["Resort facility monitoring", "Heritage monument protection", "Event venue surveillance", "Transport monitoring"]
        },
        {
            icon: ShieldCheck,
            title: "Asset Protection",
            features: ["Hotel security systems", "Heritage site access control", "Resort perimeter monitoring", "Asset protection"]
        },
        {
            icon: Radio,
            title: "Utility Guard",
            features: ["Smart energy monitoring", "Water system security", "Signaling alerts", "Tamper detection"]
        },
        {
            icon: AlertTriangle,
            title: "Environmental Monitoring",
            features: ["Weather risk alerts", "Flood detection systems", "Fire safety monitoring", "Hazard alerts"]
        }
    ],
    verticalTabs: [
        {
            title: "Resort Safety",
            description: "Continuous monitoring of resort power, fire safety, and water systems to ensure uninterrupted guest stays. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous safety standards. We leverage real-time intelligence and rapid deployment protocols to neutralize risks."
        },
        {
            title: "Heritage Guard",
            description: "Environmental and structural monitoring for historical monuments to prevent damage and unauthorized access. By integrating advanced technological solutions, we create a robust protection architecture. This proactive strategy virtually eliminates vulnerabilities across your entire ecosystem."
        },
        {
            title: "Transport Hub Security",
            description: "Protecting tourism-specific transport nodes, including cruise terminals and tourist shuttle hubs, with AI surveillance. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions ensure elite protection for critical tourism nodes."
        },
        {
            title: "Critical Site Comms",
            description: "Ensuring secure and resilient communication links for remote resorts and mountain destination outposts. Through the deployment of industry-leading protocols and state-of-the-art surveillance systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination."
        }
    ],
    cta: {
        text: "Secure the foundation of your tourism network",
        buttonText: "Protect Tourism Assets",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: EMERGENCY RESPONSE
// ============================================================================

export const section5_EmergencyResponse: TourismSection = {
    id: "tourism-emergency",
    badgeLabel: "Emergency Response Platform",
    title: "Rapid Response for Tourist Safety & Crisis Management",
    subtitle: "Tourist areas require immediate response systems for medical emergencies, accidents, security threats, and natural disasters.",
    statistics: [
        {
            value: "50%",
            label: "faster emergency response coordination",
            icon: Zap
        },
        {
            value: "40%",
            label: "improvement in crisis management",
            icon: Users
        },
        {
            value: "30%",
            label: "reduction in disruption impact",
            icon: BarChart3
        },
        {
            value: "24×7",
            label: "live destination monitoring",
            icon: Radio
        }
    ],
    portfolioCards: [
        {
            icon: ShieldAlert,
            title: "Emergency Incident Management",
            features: ["Real-time incident alerts", "Crisis response dashboards", "Multi-agency coordination", "Escalation workflows"]
        },
        {
            icon: Bell,
            title: "Visitor Safety Alerts",
            features: ["Tourist emergency notifications", "Public announcement sync", "Location-based alerts", "Evacuation systems"]
        },
        {
            icon: Activity,
            title: "Disaster Response Systems",
            features: ["Natural disaster alerts", "Evacuation planning", "Fire incident coordination", "Medical dispatch"]
        },
        {
            icon: Phone,
            title: "Crisis Comms",
            features: ["Visitor SOS link", "Emergency hotline sync", "On-site intercom integration", "Centralized broadcast"]
        }
    ],
    verticalTabs: [
        {
            title: "Rapid Dispatch",
            description: "Automated coordination between destination operators and emergency services for fast response during events. This deeply integrated methodology not only safeguards assets but also drives strategic value by minimizing operational disruptions. Our experts continuously optimize frameworks to adapt to tourism challenges."
        },
        {
            title: "Evacuation Control",
            description: "Guided evacuation systems using live crowd analytics to steer tourists toward safe exits during emergencies. By integrating advanced technological solutions, we create a robust safety architecture. This proactive strategy dramatically reduces incident response times and virtually eliminates vulnerabilities."
        },
        {
            title: "Medical Support",
            description: "Real-time communication links between tourist information kiosks and central medical response nodes. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards. Our tailored solutions seamlessly blend into your existing operations, ensuring elite protection."
        },
        {
            title: "Crisis Governance",
            description: "Unified dashboard for destination managers to orchestrate inter-agency response during large-scale urban events. Through the deployment of industry-leading protocols and state-of-the-art systems, we guarantee an elite level of protection. Our dedicated command centers orchestrate seamless coordination."
        }
    ],
    cta: {
        text: "Reduce destination downtime during crises",
        buttonText: "Deploy Response Platform",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 6: TOURISM COMMAND CENTER
// ============================================================================

export const section6_CommandCenter: TourismSection = {
    id: "tourism-command",
    badgeLabel: "Tourism Command Center",
    title: "Unified Destination Monitoring & Operations",
    subtitle: "Centralized monitoring hub integrating tourist surveillance, visitor flow analytics, infrastructure monitoring, and emergency response systems.",
    statistics: [
        {
            value: "60%",
            label: "faster incident escalation",
            icon: Zap
        },
        {
            value: "100%",
            label: "destination-wide visibility",
            icon: Eye
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Clock
        },
        {
            value: "AI",
            label: "predictive tourism intelligence",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Unified Operations Dashboard",
            features: ["Surveillance feeds", "Visitor analytics maps", "Infrastructure health", "Emergency coordination"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Intelligence",
            features: ["Crowd surge prediction", "Security risk alerts", "Infra failure alerts", "Tourism forecasting"]
        },
        {
            icon: Radio,
            title: "Incident Escalation Manager",
            features: ["Automated alerts", "Response coordination", "Reporting dashboards", "Performance tracking"]
        },
        {
            icon: Scan,
            title: "Digital Destination Twin",
            features: ["Virtual site mapping", "Simulated flow testing", "Resource heatmapping", "Asset visibility"]
        }
    ],
    verticalTabs: [
        {
            title: "Consolidated Ops",
            description: "Merging video, IoT, and visitor data into a single operational 'cockpit' for destination authorities. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate, providing complete peace of mind. Our experts continuously optimize frameworks."
        },
        {
            title: "Agency Synchronization",
            description: "Collaborative platform for sharing critical safety data with police, fire, and health authorities during peak seasons. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. This proactive strategy dramatically reduces incident response times."
        },
        {
            title: "Governance Intelligence",
            description: "Real-time auditing of destination safety performance, incident response times, and resource allocation efficiency. We prioritize continuous monitoring and predictive analytics to stay ahead of potential threats. Our tailored solutions ensure elite protection without compromising on operational efficiency."
        },
        {
            title: "Operational AI",
            description: "AI co-pilots that suggest optimal crowd management strategies and resource deployment based on live visitor demand. By integrating advanced technological solutions, we create a robust defense architecture. Our dedicated command centers orchestrate seamless coordination."
        }
    ],
    cta: {
        text: "Bring your destination intelligence to life",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Travel & Tourism Is Safe, Intelligent & Visitor-Centric",
    subtitle: "Replace fragmented tourism systems with AI-powered destination intelligence built for safety, efficiency, and global tourism growth.",
    buttonText: "Book a Travel & Tourism Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allTourismSections = [
    section1_TourismIntelligence,
    section2_VisitorSafety,
    section3_DestinationMgmt,
    section4_InfraProtection,
    section5_EmergencyResponse,
    section6_CommandCenter
];
