import {
    ShieldCheck, Activity, Zap, Eye, Database, BarChart3, 
    ShieldAlert, Globe, Camera, Search, ShieldX, Users, 
    Lock as LockIcon, Clock, Building2, Bell, Phone, Radio, 
    Cpu, Scan, Landmark, MapPin, Heart, Wifi, MonitorDot,
    AlertTriangle, Mic2, Ticket, Trophy, Speaker
} from "lucide-react";

export interface EventStatistic {
    value: string;
    label: string;
    icon: any  ;
}

export interface EventCard {
    icon: any  ;
    title: string;
    features: string[];
}

export interface EventTab {
    title: string;
    description: string;
}

export interface EventSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: EventStatistic[];
    portfolioCards: EventCard[];
    verticalTabs: EventTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const eventHero = {
    badge: "Event Management Security Platform",
    title: "AI-Driven Crowd Safety, Event Intelligence & Venue Security",
    subtitle: "Enterprise-grade event security platform designed to protect large public events, exhibitions, concerts, sports venues, and conferences through AI-powered monitoring, operational intelligence, and integrated command centers."
};

export const eventHeroSlides = [
    {
        title: "AI-Driven Crowd Safety & Event Intelligence",
        subtitle: "Protecting large-scale public events and sports venues through real-time AI crowd monitoring."
    },
    {
        title: "Integrated Venue & Event Operations",
        subtitle: "Unified platform for managing logistics, access control, and rapid incident response coordination."
    },
    {
        title: "Critical Venue Infrastructure Protection",
        subtitle: "Continuous monitoring for stages, electrical systems, and communications networks."
    },
    {
        title: "Unified Event Security Command Centers",
        subtitle: "Centralized C4I platform for seamless multi-agency coordination and real-time situational awareness."
    }
];

// ============================================================================
// SECTION 1: EVENT INTELLIGENCE PLATFORM
// ============================================================================

export const section1_EventIntelligence: EventSection = {
    id: "event-intelligence",
    badgeLabel: "Event Intelligence Platform",
    title: "Smart Safety & Operations for Large-Scale Events",
    subtitle: "Major events involve large crowds, complex logistics, high-value assets, and strict safety requirements. Ensuring crowd safety, operational coordination, and rapid incident response is critical. Our Event Management Security platform integrates AI surveillance, crowd analytics, venue monitoring, and predictive risk intelligence to deliver safe and well-managed event environments.",
    statistics: [
        {
            value: "45%",
            label: "reduction in event security incidents",
            icon: ShieldCheck
        },
        {
            value: "99.9%",
            label: "venue monitoring uptime",
            icon: Activity
        },
        {
            value: "35%",
            label: "faster incident response coordination",
            icon: Zap
        },
        {
            value: "100%",
            label: "visibility across event operations",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Database,
            title: "Predictive Intelligence",
            features: ["Crowd surge prediction", "Security threat detection", "Infra failure alerts", "Disruption analytics"]
        },
        {
            icon: BarChart3,
            title: "Data-Driven Governance",
            features: ["Event performance dashboards", "Safety compliance analytics", "Operational efficiency insights", "Audit reporting"]
        },
        {
            icon: ShieldAlert,
            title: "Safety Hub Ops",
            features: ["AI crowd monitoring", "Venue surveillance", "Infrastructure alerts", "Incident coordination"]
        },
        {
            icon: Globe,
            title: "Multi-Agency Coordination",
            features: ["Police/Fire sync", "Health service integration", "Gov agency portal", "Volunteer tasking"]
        }
    ],
    verticalTabs: [
        {
            title: "Concerts & Entertainment",
            description: "Large concerts and entertainment events require advanced monitoring of crowd movement, stage security, and performer safety. Our solutions ensure safe and well-coordinated entertainment events. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate."
        },
        {
            title: "Sports Events & Stadiums",
            description: "Sporting events attract massive crowds and require intelligent systems to manage stadium security, spectator safety, and event logistics. Our platform enables stadium operators to maintain safe and efficient sports environments. This deeply integrated methodology drive strategic value."
        },
        {
            title: "Exhibitions & Trade Shows",
            description: "Exhibitions and business conferences require monitoring of visitor flow, exhibition booths, and event facilities. Our solutions ensure secure and smoothly managed business events. Our experts continuously optimize security frameworks to adapt to high-traffic indoor environments."
        },
        {
            title: "Government & Public Events",
            description: "Large public gatherings and national events require enhanced monitoring and coordination with public safety agencies. Our platform enables authorities to maintain secure and well-managed public events. We prioritize continuous monitoring and predictive analytics."
        }
    ],
    cta: {
        text: "Deliver world-class safety for your large-scale event",
        buttonText: "Explore Event Intelligence",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: CROWD SAFETY MONITORING
// ============================================================================

export const section2_CrowdSafety: EventSection = {
    id: "crowd-safety",
    badgeLabel: "Crowd Safety Monitoring",
    title: "AI-Powered Crowd Intelligence",
    subtitle: "Advanced monitoring systems designed to manage crowd behavior, movement patterns, and potential safety risks during large-scale events.",
    statistics: [
        {
            value: "40%",
            label: "faster crowd risk detection",
            icon: Zap
        },
        {
            value: "95%",
            label: "incident detection accuracy",
            icon: ShieldCheck
        },
        {
            value: "30%",
            label: "reduction in crowd congestion",
            icon: ShieldX
        },
        {
            value: "24×7",
            label: "real-time event monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Camera,
            title: "AI Crowd Surveillance",
            features: ["HD venue cameras", "Crowd density monitoring", "Entry gate systems", "Performance area monitoring"]
        },
        {
            icon: ShieldAlert,
            title: "Behavioral Risk Detection",
            features: ["Aggression detection", "Suspicious activity monitoring", "Restricted area alerts", "Crowd surge detection"]
        },
        {
            icon: Users,
            title: "Visitor Safety Systems",
            features: ["Emergency distress alerts", "Lost person detection", "Medical emergency alerts", "Panic alert systems"]
        },
        {
            icon: LockIcon,
            title: "Privacy-First Monitoring",
            features: ["Edge AI processing", "Encrypted surveillance data", "Privacy-aware protocols", "DPDP-compliant ops"]
        }
    ],
    verticalTabs: [
        {
            title: "Density Analytics",
            description: "Identifying real-time crowd saturation points to prevent hazardous crushing and optimize entry flow rates. By integrating advanced technological solutions, we create a robust movement architecture. Our dedicated command centers orchestrate seamless coordination."
        },
        {
            title: "Behavioral Guard",
            description: "AI-driven detection of anomalous behavior or localized distress within massive crowds to trigger precise steward deployment. This deeply integrated methodology not only safeguards spectators but also drives strategic value."
        },
        {
            title: "Evacuation Intelligence",
            description: "Guided evacuation systems synchronized with live crowd flow to prevent bottlenecks during emergency exits. We prioritize continuous monitoring and predictive analytics to stay ahead of potential hazards."
        },
        {
            title: "Stewardship Support",
            description: "Equipping ground security teams with real-time risk heatmaps to focus manpower where density is highest. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous safety standards."
        }
    ],
    cta: {
        text: "Make every large-scale gathering safer",
        buttonText: "View Crowd Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: SMART EVENT OPERATIONS
// ============================================================================

export const section3_EventOps: EventSection = {
    id: "event-operations",
    badgeLabel: "Smart Event Operations",
    title: "Intelligent Venue & Event Monitoring",
    subtitle: "Event organizers require real-time visibility into crowd movement, venue operations, and event logistics to maintain safety and efficiency.",
    statistics: [
        {
            value: "50%",
            label: "faster operational anomaly detection",
            icon: Zap
        },
        {
            value: "35%",
            label: "improvement in event coordination",
            icon: BarChart3
        },
        {
            value: "25%",
            label: "reduction in operational disruptions",
            icon: Activity
        },
        {
            value: "100%",
            label: "visibility across event operations",
            icon: MonitorDot
        }
    ],
    portfolioCards: [
        {
            icon: Users,
            title: "Crowd Flow Analytics",
            features: ["Entry and exit monitoring", "Queue management", "Crowd tracking", "Peak hour insights"]
        },
        {
            icon: Ticket,
            title: "Smart Access Control",
            features: ["Ticket verification", "Staff biometric sync", "VIP access monitoring", "Restricted zone control"]
        },
        {
            icon: Landmark,
            title: "Venue Operations",
            features: ["Stage area monitoring", "Backstage surveillance", "Vendor activity tracking", "Logistics coordination"]
        },
        {
            icon: MonitorDot,
            title: "Capacity Control",
            features: ["Real-time headcount", "Zone-based occupancy", "Automation alerts", "Digital queue integration"]
        }
    ],
    verticalTabs: [
        {
            title: "Logistic Efficiency",
            description: "Optimizing vendor and logistics movement through secure service corridors to avoid interference with visitor flow. By integrating advanced technological solutions, we create a robust protection architecture. This strategy dramatically reduces disruption times."
        },
        {
            title: "Credential Integrity",
            description: "Ensuring zero-leakage access control for high-value VIP zones and mission-critical backstage areas using biometric sync. We prioritize continuous monitoring and predictive analytics to stay ahead of potential security breaches."
        },
        {
            title: "Resource Orchestration",
            description: "Syncing cleaning, medical, and security staff deployments based on real-time event demand and occupancy data. Through the deployment of industry-leading protocols, we guarantee an elite level of operational intelligence."
        },
        {
            title: "Stage Safety",
            description: "Specific monitoring protocols for performance areas to protect high-profile individuals and mission-critical equipment. This deeply integrated methodology not only safeguards people but also drives strategic infrastructure value."
        }
    ],
    cta: {
        text: "Drive operational excellence for your next venue",
        buttonText: "Explore Operations Tech",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: EVENT INFRASTRUCTURE PROTECTION
// ============================================================================

export const section4_EventInfraProtection: EventSection = {
    id: "event-infrastructure",
    badgeLabel: "Event Infrastructure Protection",
    title: "Monitoring Critical Venue Infrastructure",
    subtitle: "Events rely on complex infrastructure including stages, lighting systems, communication networks, and public safety systems.",
    statistics: [
        {
            value: "99.7%",
            label: "venue infrastructure monitoring uptime",
            icon: Activity
        },
        {
            value: "60%",
            label: "faster fault detection",
            icon: Zap
        },
        {
            value: "30%",
            label: "reduction in operational downtime",
            icon: Clock
        },
        {
            value: "100%",
            label: "visibility across event assets",
            icon: Building2
        }
    ],
    portfolioCards: [
        {
            icon: Speaker,
            title: "Infrastructure Monitoring",
            features: ["Electrical system monitoring", "Stage equipment health", "Communication networks", "Emergency lighting"]
        },
        {
            icon: ShieldCheck,
            title: "Asset Protection",
            features: ["Stage equipment security", "AV equipment monitoring", "Vendor asset protection", "Facility surveillance"]
        },
        {
            icon: Radio,
            title: "Comms Guard",
            features: ["Signal path integrity", "Remote outpost links", "Broadcast line security", "Redundant comms sync"]
        },
        {
            icon: AlertTriangle,
            title: "Environmental Monitoring",
            features: ["Weather risk alerts", "Fire detection systems", "Safety hazard detection", "Environmental alerts"]
        }
    ],
    verticalTabs: [
        {
            title: "Critical Utility Sync",
            description: "Continuous health monitoring of power backup and fire suppression systems during live performances. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous safety standards. We leverage real-time intelligence."
        },
        {
            title: "Stage perimeter",
            description: "Environmental and structural monitoring for temporary stage setups to prevent mechanical failure during high-movement acts. By integrating advanced technological solutions, we create a robust protection architecture. This strategy virtually eliminates vulnerabilities."
        },
        {
            title: "Asset Guarding",
            description: "Protecting high-value production equipment from theft or tampering through synchronized AI-surveillance and RFID tracking. We prioritize continuous monitoring and predictive analytics to stay ahead of potential equipment loss."
        },
        {
            title: "Environmental Watch",
            description: "Specialized sensors to monitor temporary event structures for wind and weather risks during outdoor music festivals. Through the deployment of industry-leading protocols, we guarantee an elite level of protection."
        }
    ],
    cta: {
        text: "Protect the foundation of your event experience",
        buttonText: "Secure Event Assets",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: EVENT COMMAND CENTER
// ============================================================================

export const section5_CommandCenter: EventSection = {
    id: "event-command",
    badgeLabel: "Event Command Center",
    title: "Unified Event Security & Operations Intelligence",
    subtitle: "Centralized monitoring hub integrating crowd analytics, venue surveillance, infrastructure monitoring, and incident response systems.",
    statistics: [
        {
            value: "60%",
            label: "faster incident escalation",
            icon: Zap
        },
        {
            value: "100%",
            label: "venue-wide operational visibility",
            icon: Eye
        },
        {
            value: "24/7",
            label: "real-time monitoring",
            icon: Clock
        },
        {
            value: "AI",
            label: "predictive event intelligence",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: BarChart3,
            title: "Unified Operations Dashboard",
            features: ["Crowd monitoring dashboards", "Venue surveillance feeds", "Infra monitoring", "Incident coordination"]
        },
        {
            icon: Cpu,
            title: "Predictive Risk Intelligence",
            features: ["Crowd surge prediction", "Security threat detection", "Infra failure alerts", "Disruption analytics"]
        },
        {
            icon: Radio,
            title: "Incident Escalation Manager",
            features: ["Automated safety alerts", "Response coordination", "Compliance dashboards", "Performance tracking"]
        },
        {
            icon: Scan,
            title: "Digital Venue Twin",
            features: ["Virtual site mapping", "Flow simulation", "Resource heatmapping", "Asset visibility"]
        }
    ],
    verticalTabs: [
        {
            title: "Command Consolidation",
            description: "Merging video, Stewart-radio, and IoT data into a single operational 'cockpit' for event authorities. We leverage real-time intelligence and rapid deployment protocols to neutralize risks before they escalate. Our command centers orchestrate seamless coordination."
        },
        {
            title: "Stakeholder Sync",
            description: "Real-time communication bridge between organizers, local law enforcement, and private security agencies. Our comprehensive approach ensures maximum operational resilience while maintaining rigorous compliance standards. This proactive strategy reduces response times."
        },
        {
            title: "Audit Intelligence",
            description: "Live recording and archiving of incident response protocols for post-event insurance and governance audits. We prioritize continuous monitoring and predictive analytics to stay ahead of regulatory requirements. Our tailored solutions ensure elite protection."
        },
        {
            title: "AI Co-Pilot",
            description: "Intelligent decision-support systems that suggest crowd redirection based on developing congestion heatmaps. By integrating advanced technological solutions, we create a robust defense architecture. Our command centers ensure world-class responsiveness."
        }
    ],
    cta: {
        text: "Bring your event intelligence to life",
        buttonText: "View Command Center Demo",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA SECTION
// ============================================================================

export const finalCTA = {
    title: "The Future of Event Security Is Safe, Intelligent & Seamlessly Managed",
    subtitle: "Replace fragmented event security systems with AI-powered event intelligence built for safety, efficiency, and operational excellence.",
    buttonText: "Book an Event Security Strategy Session",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allEventSections = [
    section1_EventIntelligence,
    section2_CrowdSafety,
    section3_EventOps,
    section4_EventInfraProtection,
    section5_CommandCenter
];
