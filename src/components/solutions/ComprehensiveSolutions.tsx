import { Shield, Bot, Plane, Brain, Truck, UserCheck, Factory, Scale, Check } from "lucide-react";

interface SolutionCategory {
    icon: any;
    emoji: string;
    title: string;
    description: string;
    sections: {
        title: string;
        items: string[];
    }[];
    value: string;
}

const comprehensiveSolutions: SolutionCategory[] = [
    {
        icon: Shield,
        emoji: "🛡️",
        title: "Physical Security Solutions",
        description: "Reliable human presence, layered defense, and deterrence for real-world threats",
        sections: [
            {
                title: "Security Guarding Services",
                items: [
                    "Armed & Unarmed Guarding — professional and regulated personnel for facilities, critical sites, and events",
                    "Mobile Patrols — scheduled and random patrols with real-time tracking",
                    "Rapid Response Teams — fully trained quick reaction units for incident escalation"
                ]
            },
            {
                title: "Access & Perimeter Protection",
                items: [
                    "Man-guarded checkpoints and entry screening",
                    "Physical barrier enforcement and visitor vetting",
                    "Gate control operations with digital logs"
                ]
            },
            {
                title: "K9 & Specialized Units",
                items: [
                    "Explosive detection and canine support",
                    "Crowd control and specialized task forces"
                ]
            }
        ],
        value: "Reliable human presence, layered defense, and deterrence for real-world threats"
    },
    {
        icon: Bot,
        emoji: "🤖",
        title: "Robotic & Autonomous Security Solutions",
        description: "Scalable perimeter enforcement, reduced human fatigue, and extended coverage",
        sections: [
            {
                title: "Autonomous Security Robots",
                items: [
                    "AI-driven robots with patrol routines",
                    "Obstacle avoidance and multi-sensor detection",
                    "24×7 operations with low manpower overhead"
                ]
            },
            {
                title: "Human + Machine Teaming",
                items: [
                    "Robots act as force multipliers alongside guards",
                    "Real-time data feeds for rapid decision making",
                    "Automated intruder follow-ups"
                ]
            },
            {
                title: "Sensor Fusion & Analytics",
                items: [
                    "LiDAR, thermal, cameras, PIR sensors for robust detection",
                    "AI classification to reduce false alarms"
                ]
            }
        ],
        value: "Scalable perimeter enforcement, reduced human fatigue, and extended coverage"
    },
    {
        icon: Plane,
        emoji: "🚁",
        title: "Drone-Enabled Security & Aerial Intelligence",
        description: "Enhanced situational awareness, faster threat confirmation, and broadened coverage",
        sections: [
            {
                title: "Autonomous Aerial Patrols",
                items: [
                    "Automated drone patrols for large perimeters, remote areas",
                    "Infrared, thermal, and night vision capabilities",
                    "Geo-fencing with automated mission routing"
                ]
            },
            {
                title: "Real-Time AI Threat Detection",
                items: [
                    "Object classification (people, vehicles, suspicious items)",
                    "Behavior analytics for loitering and intrusion",
                    "Instant alert escalation to command center"
                ]
            },
            {
                title: "Incident Support & Reconnaissance",
                items: [
                    "Live video streaming to security operations",
                    "Target tracking and geolocation feeds",
                    "Drone-guided ground team deployments"
                ]
            }
        ],
        value: "Enhanced situational awareness, faster threat confirmation, and broadened coverage"
    },
    {
        icon: Brain,
        emoji: "🤖",
        title: "AI-Powered Security Command & Intelligence",
        description: "Data-driven decisions, reduced response times, and intelligent risk prioritization",
        sections: [
            {
                title: "Integrated Security Operations Platform",
                items: [
                    "Unified dashboard for personnel, devices, drones, and robots",
                    "Alerts, logs, and event timelines in one place"
                ]
            },
            {
                title: "Predictive Threat Intelligence",
                items: [
                    "AI risk scoring and anomaly detection",
                    "Historical pattern analysis",
                    "Early warning indicators"
                ]
            },
            {
                title: "Automated Response Workflows",
                items: [
                    "AI-triggered dispatch for incidents",
                    "Escalation paths for critical events",
                    "Command center control with response recommendations"
                ]
            }
        ],
        value: "Data-driven decisions, reduced response times, and intelligent risk prioritization"
    },
    {
        icon: Truck,
        emoji: "🚚",
        title: "Logistics Security & Asset Protection",
        description: "Comprehensive protection for goods, people, and financial assets",
        sections: [
            {
                title: "Fleet & Cargo Security",
                items: [
                    "Real-time tracking and supervised routes",
                    "Escorted convoys with drone support",
                    "Predictive risk alerts for high-risk corridors"
                ]
            },
            {
                title: "Cash-In-Transit (CIT) & High-Value Logistics",
                items: [
                    "Tamper-proof transit systems",
                    "Chain-of-custody logs and secure handovers",
                    "Incident reporting and forensic capture"
                ]
            },
            {
                title: "Supply Chain Resilience",
                items: [
                    "End-to-end visibility",
                    "Risk scoring for logistical stops and zones"
                ]
            }
        ],
        value: "Comprehensive protection for goods, people, and financial assets"
    },
    {
        icon: UserCheck,
        emoji: "🎤",
        title: "VIP, Close Protection & Event Security",
        description: "Seamless personal protection and event safety through layered defense",
        sections: [
            {
                title: "VIP & Executive Protection",
                items: [
                    "Advance work and route risk planning",
                    "Close protection officers with integrated support",
                    "Secure travel & motorcade operations"
                ]
            },
            {
                title: "Event & Crowd Management",
                items: [
                    "Pre-event risk assessment",
                    "Access control zones and crowd analytics",
                    "Emergency planning and ground support"
                ]
            },
            {
                title: "Integrated Alerting & Evacuation",
                items: [
                    "Live monitoring with drones and cameras",
                    "Rapid escalation procedures and SOP enforcement"
                ]
            }
        ],
        value: "Seamless personal protection and event safety through layered defense"
    },
    {
        icon: Factory,
        emoji: "🏭",
        title: "Industrial Safety & Workforce Risk Solutions",
        description: "Safety assurance, risk prevention, and continuity under challenging conditions",
        sections: [
            {
                title: "Industrial Safety Monitoring",
                items: [
                    "AI for unsafe behavior and hazard detection",
                    "Facility surveillance for maintenance risks",
                    "Live alarms for escalation"
                ]
            },
            {
                title: "Labour Unrest & Dispute Support",
                items: [
                    "Early detection of gathering formation",
                    "Crowd behavior analytics",
                    "Coordination with compliance teams"
                ]
            }
        ],
        value: "Safety assurance, risk prevention, and continuity under challenging conditions"
    },
    {
        icon: Scale,
        emoji: "⚖️",
        title: "Compliance, Legal & Investigative Support",
        description: "Defensible operations and regulatory confidence",
        sections: [
            {
                title: "Forensic & Audit-Ready Security",
                items: [
                    "Secure evidence capture (video, telemetry, logs)",
                    "Incident reconstruction",
                    "Legal and compliance documentation"
                ]
            },
            {
                title: "Regulatory Alignment",
                items: [
                    "PSARA and regional compliance",
                    "Labour and industrial safety legal support",
                    "Insurance-grade reporting"
                ]
            }
        ],
        value: "Defensible operations and regulatory confidence"
    }
];

export const ComprehensiveSolutions = () => {
    return (
        <div className="py-8 relative">
            {/* Header */}
            <div className="container mx-auto px-4 lg:px-8 mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Integrated Security & Technology-Driven Protection
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Trusted Security Solutions for the Modern World
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        We deliver a full spectrum of security and technology solutions that combine physical guarding, intelligent automation, robotics, drones, and AI decision systems — designed for regional, national, and enterprise-level protection across all domains: land, infrastructure, logistics, events, and VIP services.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Our approach is <span className="text-primary font-semibold">modular, scalable, and integrated</span> — seamlessly combining humans and machines to deliver predictive, proactive, and preventative security intelligence.
                    </p>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {comprehensiveSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative bg-card/40 backdrop-blur-md border-border/40 border rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            {/* Icon & Title */}
                            <div className="flex flex-col items-center text-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm mx-auto">
                                    <solution.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                                        {solution.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Sections */}
                            <div className="space-y-6">
                                {solution.sections.map((section, sectionIdx) => (
                                    <div key={sectionIdx} className="space-y-3">
                                        <div className="flex items-center gap-2 justify-center">
                                            <div className="h-px w-8 bg-border" />
                                            <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider">
                                                {section.title}
                                            </h4>
                                            <div className="h-px w-8 bg-border" />
                                        </div>
                                        <ul className="space-y-2 pl-20">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                                                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Value Delivered */}
                            <div className="mt-6 pt-6 border-t border-border/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-px flex-1 bg-border" />
                                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                                        Value Delivered
                                    </p>
                                    <div className="h-px flex-1 bg-border" />
                                </div>
                                <p className="text-sm text-foreground/90 font-medium leading-relaxed text-center">
                                    {solution.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
