import { useState } from "react";
import {
    Cpu, Satellite, Plane, Shield, Lock, Zap, Radio, Eye, Target,
    Building2, ShoppingBag, Landmark, Activity, CheckCircle2, ArrowRight,
    Waves, Thermometer, MapPin, Database, Cloud, Server, Network,
    BrainCircuit, Radar, CircuitBoard, ShieldCheck, FileCheck, Clock,
    Users, Truck, Siren, Stethoscope, ChevronDown, ChevronUp, Sparkles,
    BarChart3, TrendingUp, AlertTriangle, Play, Layers, Binary
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Core Technology Stack Data
const coreTechStack = [
    {
        title: "Unified Situational Intelligence",
        icon: Radar,
        color: "from-blue-600 to-blue-700",
        features: [
            { icon: Waves, text: "IoT sensors (motion, vibration, environmental, RTLS, wearables)" },
            { icon: Eye, text: "CCTV, access control, body cams, drones (live + autonomous)" },
            { icon: MapPin, text: "GPS, telematics, SCADA, transaction & application telemetry" },
            { icon: Cloud, text: "External feeds: weather, traffic, crime, cyber & threat intel" }
        ],
        outcome: "A single, trusted operational truth."
    },
    {
        title: "AI & Autonomous Intelligence Layer",
        icon: BrainCircuit,
        color: "from-blue-600 to-blue-700",
        features: [
            { icon: Target, text: "Predictive risk, anomaly & behavior modeling" },
            { icon: Plane, text: "AI-driven drone tasking (auto-launch, patrol, overwatch)" },
            { icon: Zap, text: "Prescriptive decision support with SOP automation" },
            { icon: TrendingUp, text: "Continuous learning from incident outcomes" }
        ],
        outcome: "Intelligence that anticipates, not just reacts."
    },
    {
        title: "Quantum-Safe Security & Data Trust",
        icon: Lock,
        color: "from-blue-600 to-blue-700",
        features: [
            { icon: Binary, text: "Post-quantum cryptography (PQC) for data in motion & at rest" },
            { icon: ShieldCheck, text: "Zero-trust architecture with hardware-backed identity" },
            { icon: FileCheck, text: "Tamper-proof audit trails and forensic integrity" },
            { icon: Landmark, text: "Regulatory-grade confidentiality for BFSI & healthcare" }
        ],
        outcome: "Future-proof trust and compliance."
    },
    {
        title: "Closed-Loop Command Automation",
        icon: CircuitBoard,
        color: "from-blue-600 to-blue-700",
        features: [
            { icon: AlertTriangle, text: "Auto-generated incidents & response workflows" },
            { icon: Users, text: "Cross-team orchestration (security, ops, IT, compliance)" },
            { icon: Clock, text: "Verified closure, SLA tracking & audit readiness" },
            { icon: BarChart3, text: "Real-time dashboards with KPI monitoring" }
        ],
        outcome: "From alert to resolution—automated."
    }
];

// Specialized Command Center Solutions Data
// Specialized Command Center Solutions Data
// Specialized Command Center Solutions Data
const commandCenterSolutions = [
    {
        id: "drone",
        title: "Drone-Integrated Command Center",
        subtitle: "Aerial-Ground Unified Control",
        icon: Plane,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Smart cities & public safety", "Private security & critical infrastructure", "Industrial parks, ports, airports, SEZs", "Event security & disaster response"],
        capabilities: [
            "Autonomous drone patrols triggered by IoT alerts",
            "Live aerial overwatch fused with ground CCTV & sensors",
            "AI crowd analytics, intrusion detection, thermal scans",
            "Dynamic air-ground coordination for responders"
        ],
        useCases: [
            "Alarm triggers auto-launch drones for visual verification",
            "Crowd density alerts initiate drone redeployment",
            "Disaster zones mapped in minutes, not hours"
        ],
        impact: [
            { metric: "50–70%", label: "Faster situational awareness" },
            { metric: "↓ 80%", label: "Reduced false alarms" },
            { metric: "Safer", label: "Evidence-backed response" }
        ]
    },
    {
        id: "logistics",
        title: "Security, Cash & High-Value Logistics",
        subtitle: "Command Center",
        icon: Truck,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Banks & NBFCs", "Cash-in-Transit (CIT) operators", "Bullion, pharma, electronics logistics"],
        capabilities: [
            "GPS, IoT, panic-button & vault sensor fusion",
            "AI route-risk prediction and dynamic rerouting",
            "Drone-based convoy overwatch in high-risk zones",
            "Quantum-safe encrypted communications"
        ],
        useCases: [
            "Predictive ambush-zone detection using crime analytics",
            "Auto-dispatch of escorts and aerial surveillance",
            "Real-time deviation and tamper alerts"
        ],
        impact: [
            { metric: "30–50%", label: "Reduction in security incidents" },
            { metric: "↓ Cost", label: "Lower insurance & shrinkage" },
            { metric: "100%", label: "Audit-ready compliance" }
        ]
    },
    {
        id: "retail",
        title: "Retail Intelligence & Loss Prevention",
        subtitle: "Command Center",
        icon: ShoppingBag,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Large retail chains & malls", "Hypermarkets & warehouse retail", "Jewellery & high-value retail"],
        capabilities: [
            "AI video analytics for ORC & shoplifting detection",
            "Store-level IoT sensors (shelves, exits, panic alerts)",
            "Drone-enabled perimeter & parking surveillance",
            "Centralized multi-store intelligence dashboards"
        ],
        useCases: [
            "Detect coordinated theft across locations",
            "Auto-alert stores and security teams in real time",
            "Analyze loss patterns by region and time"
        ],
        impact: [
            { metric: "20–40%", label: "Shrinkage reduction" },
            { metric: "3x", label: "Faster incident response" },
            { metric: "Improved", label: "Customer & staff safety" }
        ]
    },
    {
        id: "banking",
        title: "Banking Command Center",
        subtitle: "Physical + Digital Security",
        icon: Landmark,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Banks, NBFCs, cooperative banks", "ATM networks & branch banking"],
        capabilities: [
            "Branch, ATM & vault security monitoring",
            "Transaction anomaly & fraud correlation",
            "IoT sensors (vaults, ATMs, panic buttons)",
            "Drone surveillance for branches & cash movement",
            "Quantum-safe data protection"
        ],
        useCases: [
            "Correlate physical breach attempts with digital fraud",
            "Drone verification of ATM tamper alerts",
            "Auto-freeze accounts and trigger response SOPs"
        ],
        impact: [
            { metric: "↓ 60%", label: "Fraud & physical risk" },
            { metric: "2x", label: "Faster compliance" },
            { metric: "Unified", label: "Branch-to-board visibility" }
        ]
    },
    {
        id: "healthcare",
        title: "Healthcare Command Center",
        subtitle: "IoT + AI + Drone-Enabled",
        icon: Stethoscope,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Hospitals & healthcare networks", "Medical campuses & research institutes", "Public health systems"],
        capabilities: [
            "IoT patient & asset tracking (RTLS, wearables)",
            "AI-driven violence & risk prediction",
            "Drone logistics for medical samples & emergencies",
            "Quantum-safe protection of patient data"
        ],
        useCases: [
            "Predict and prevent violent incidents",
            "Drone delivery of blood, samples & medicines",
            "Auto-lockdown zones during emergencies"
        ],
        impact: [
            { metric: "Safer", label: "Patients, staff & visitors" },
            { metric: "5x", label: "Faster emergency response" },
            { metric: "HIPAA", label: "Strong health data compliance" }
        ]
    },
    {
        id: "manufacturing",
        title: "Smart Manufacturing & Industrial Command Center",
        subtitle: "IoT + AI + Predictive Operations",
        icon: Building2,
        gradient: "from-blue-600 to-blue-700",
        industries: ["Manufacturing plants & factories", "Industrial parks & SEZs", "Oil & gas facilities"],
        capabilities: [
            "Real-time equipment monitoring & predictive maintenance",
            "AI-powered safety & hazard detection systems",
            "Drone-based perimeter & facility surveillance",
            "Integrated access control & workforce tracking"
        ],
        useCases: [
            "Prevent equipment failures with predictive analytics",
            "Auto-detect safety violations & hazardous conditions",
            "Monitor restricted zones with autonomous drones"
        ],
        impact: [
            { metric: "40%", label: "Reduction in downtime" },
            { metric: "↓ 60%", label: "Safety incidents prevented" },
            { metric: "24/7", label: "Continuous monitoring" }
        ]
    }
];

// Platform Assurance Features
const platformAssurance = [
    { icon: Layers, text: "AI + Drone + IoT by Design (not bolt-ons)" },
    { icon: Lock, text: "Quantum-Safe Security for Future-Proof Trust" },
    { icon: FileCheck, text: "Industry-Specific SOPs & Regulatory Alignment" },
    { icon: TrendingUp, text: "Proven ROI in Risk Reduction & Efficiency" },
    { icon: Server, text: "Scalable from Single Sites to National Operations" }
];

export const CommandCenters = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleCard = (id: string) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="command-centers" className="relative overflow-hidden scroll-mt-10">
            {/* ===== HERO SECTION ===== */}
            <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-white/90">Next-Generation Mission Control</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                        <span className="block">Intelligent</span>
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Command Centers
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto">
                        AI, IoT, Drone & Quantum-Safe Mission Control Platforms
                    </p>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white max-w-3xl mx-auto mb-12 leading-relaxed">
                        We deliver mission-critical Command Centers that fuse ground sensors, enterprise systems,
                        AI intelligence, and autonomous drones into a single, secure, quantum-resilient control layer.
                    </p>

                    {/* Key Differentiators */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            { icon: BrainCircuit, label: "Predictive Security" },
                            { icon: Zap, label: "Automated Response" },
                            { icon: Shield, label: "Quantum-Safe" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5 text-cyan-400" />
                                <span className="text-white/90 font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
                    >
                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Explore Solutions
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* ===== SPECIALIZED COMMAND CENTER SOLUTIONS ===== */}
            <div className="py-12 bg-muted/30 relative">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-primary/10 border-primary/20 text-primary mb-6">
                            <Satellite className="w-3 h-3 mr-2" />
                            Industry Solutions
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Specialized Command Centers
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Purpose-built solutions for every industry vertical
                        </p>
                    </div>

                    {/* Solutions Cards - Reimagined as "KPI First" Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {commandCenterSolutions.map((solution) => (
                            <Card
                                key={solution.id}
                                className="group relative overflow-hidden bg-card border-border/50 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full"
                            >
                                {/* Header Area */}
                                <div className="p-8 pb-4 relative">
                                    {/* Floating Icon */}
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <solution.icon className="w-6 h-6 text-blue-600" />
                                    </div>

                                    <Badge variant="secondary" className="mb-4 bg-secondary/50">
                                        {solution.industries[0].split('&')[0]}
                                    </Badge>

                                    <h3 className="text-2xl font-bold text-foreground mb-2 pr-16 leading-tight">
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {solution.subtitle}
                                    </p>

                                    {/* Mid-card Stats */}
                                    <div className="flex gap-4 py-4 border-y border-border/50">
                                        {solution.impact.slice(0, 2).map((imp, i) => (
                                            <div key={i}>
                                                <div className="text-xl font-bold text-blue-600">{imp.metric}</div>
                                                <div className="text-[10px] uppercase font-semibold text-muted-foreground/80">{imp.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="px-8 pb-8 flex-grow">
                                    <ul className="space-y-3 mt-4">
                                        {solution.capabilities.slice(0, 3).map((cap, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                                                <span className="leading-snug group-hover:text-foreground transition-colors">{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover Indicator - Bottom Bar */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== PLATFORM ASSURANCE SECTION ===== */}
            <div className="py-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-8">
                        <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/10 border-white/20 text-white mb-6">
                            <ShieldCheck className="w-3 h-3 mr-2" />
                            Platform Assurance
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Why Our Command Centers Are Different
                        </h2>
                    </div>

                    {/* Assurance Features */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                        {platformAssurance.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm font-medium text-white/90">{feature.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Positioning Statement */}
                    <div className="relative max-w-4xl mx-auto text-center p-8 md:p-12 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                            Mission Statement
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2">
                            Mission-Critical Intelligence. Quantum-Safe. Autonomous.
                        </h3>
                        <p className="text-lg text-blue-200/80 leading-relaxed">
                            A unified Command Center ecosystem that combines AI, IoT Sensors, Autonomous Drones,
                            and Quantum-Resilient Security—delivering predictive control and assured outcomes for
                            banks, retailers, healthcare, logistics, and critical infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== CORE TECHNOLOGY STACK SECTION ===== */}
            <div className="py-12 bg-background relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-primary/10 border-primary/20 text-primary mb-6">
                            <CircuitBoard className="w-3 h-3 mr-2" />
                            Technology Foundation
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Core Technology Stack
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Built on a unified architecture that powers all our Command Center solutions
                        </p>
                    </div>

                    {/* Tech Stack Grid - Reimagined as Horizontal Layers */}
                    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                        {coreTechStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-blue-800" />

                                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    {/* Icon Section */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                            <tech.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{tech.title}</h3>
                                            <div className="flex items-center gap-2 text-sm font-medium text-blue-500/80">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {tech.outcome}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-3">
                                            {tech.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600/50" />
                                                    {feature.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
