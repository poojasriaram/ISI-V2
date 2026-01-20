import {
    MonitorDot, Cpu, Shield, Eye, Zap, Target, TrendingDown, Award,
    CheckCircle2, Activity, BarChart3, Network, Plane, Lock, Database,
    Landmark, Truck, Building2, Hospital, Globe, Cloud, Layers, Radio,
    Bell, FileCheck, Users, Settings, Wifi, AlertTriangle, TrendingUp
} from "lucide-react";

// ============================================================================
// INTERFACES
// ============================================================================

export interface CommandCenterStatistic {
    value: string;
    label: string;
    icon: any;
}

export interface CommandCenterCard {
    icon: any;
    title: string;
    features: string[];
}

export interface CommandCenterTab {
    title: string;
    description: string;
}

export interface CommandCenterSection {
    id: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    statistics: CommandCenterStatistic[];
    portfolioCards: CommandCenterCard[];
    verticalTabs: CommandCenterTab[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

// ============================================================================
// HERO SECTION
// ============================================================================

export const commandCenterHero = {
    badge: "Centralized Command Center",
    title: "Mission-Critical Intelligence. Quantum-Safe. Autonomous.",
    subtitle: "A unified, AI-native Command Center that integrates IoT sensors, autonomous drones, video analytics, workflows, and quantum-resilient security into a single operational brain—enabling real-time visibility, predictive control, and assured outcomes across distributed operations."
};

// ============================================================================
// SECTION 1: PLATFORM VALUE PROPOSITION
// ============================================================================

export const section1_ValueProposition: CommandCenterSection = {
    id: "value-proposition",
    badgeLabel: "Platform Excellence",
    title: "Platform Value Proposition",
    subtitle: "Why This Is Different. AI + Drone + IoT by Design with Quantum-Safe Security and Industry-Aligned SOP Engine for Proven ROI & Risk Reduction.",
    statistics: [
        {
            value: "60-85%",
            label: "faster incident detection",
            icon: Zap
        },
        {
            value: "40-70%",
            label: "reduced response time (MTTR)",
            icon: Activity
        },
        {
            value: "50-90%",
            label: "fewer false positives",
            icon: TrendingDown
        },
        {
            value: "30-60%",
            label: "autonomous resolution rate",
            icon: Cpu
        }
    ],
    portfolioCards: [
        {
            icon: Cpu,
            title: "AI + Drone + IoT by Design",
            features: ["Native architecture—not bolt-ons", "Real-time intelligence", "Closed-loop automation", "Unified operational brain"]
        },
        {
            icon: Shield,
            title: "Quantum-Safe Security Layer",
            features: ["Post-quantum cryptography readiness", "Long-term trust & compliance", "Data sovereignty", "Zero-trust architecture"]
        },
        {
            icon: FileCheck,
            title: "Industry-Aligned SOP Engine",
            features: ["Built-in regulatory workflows", "Sector-specific standards", "Automated compliance", "Audit-ready operations"]
        },
        {
            icon: TrendingUp,
            title: "Proven ROI & Risk Reduction",
            features: ["Predictive detection", "Faster response cycles", "Lower cost-to-operate", "Elastic scale capability"]
        }
    ],
    verticalTabs: [
        {
            title: "Operational Excellence",
            description: "Transform operations with 60-85% faster incident detection, 40-70% reduced response time, and 50-90% fewer false positives through AI-native architecture and autonomous decision execution."
        },
        {
            title: "Financial Impact",
            description: "Achieve 25-45% cost reduction per incident, prevent 2-6% revenue leakage, and reduce guarding costs by 20-35% through intelligent automation and predictive analytics."
        },
        {
            title: "Risk & Compliance",
            description: "Maintain always-on audit readiness, >98% SLA adherence, and 60%+ reduction in compliance breach probability with quantum-safe security and automated workflows."
        },
        {
            title: "Scalability",
            description: "Operate seamlessly from single sites to national command centers with cloud-native architecture, edge-first design, and low-bandwidth resilience."
        }
    ],
    cta: {
        text: "Experience next-generation command and control",
        buttonText: "Explore Platform Capabilities",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 2: PROFITFLOW CARDS (VALUE MONETIZATION)
// ============================================================================

export const section2_Profitflow: CommandCenterSection = {
    id: "profitflow-value",
    badgeLabel: "Value Monetization",
    title: "Profitflow Cards - Measurable Business Impact",
    subtitle: "Quantifiable Value Across Cost Elimination, Revenue Protection, Productivity Uplift, and New Revenue Enablement.",
    statistics: [
        {
            value: "20-30%",
            label: "OPEX reduction",
            icon: TrendingDown
        },
        {
            value: "2-5%",
            label: "topline protection",
            icon: Shield
        },
        {
            value: "1.8-2.5×",
            label: "operator productivity",
            icon: Users
        },
        {
            value: "10-20%",
            label: "margin expansion",
            icon: TrendingUp
        }
    ],
    portfolioCards: [
        {
            icon: TrendingDown,
            title: "Cost Elimination",
            features: ["Reduced manpower dependency", "Fewer site-level command rooms", "Lower insurance premiums", "20-30% OPEX reduction"]
        },
        {
            icon: Shield,
            title: "Revenue Protection",
            features: ["Theft, fraud, loss prevention", "SLA breach avoidance", "Predictive asset failure alerts", "2-5% topline protection"]
        },
        {
            icon: Activity,
            title: "Productivity Uplift",
            features: ["One operator manages multiple sites", "Autonomous drone patrols", "AI-driven prioritization", "1.8-2.5× productivity gain"]
        },
        {
            icon: TrendingUp,
            title: "New Revenue Enablement",
            features: ["Command Center-as-a-Service (CCaaS)", "Risk-based pricing models", "Performance-linked contracts", "10-20% margin expansion"]
        }
    ],
    verticalTabs: [
        {
            title: "Cost Optimization",
            description: "Eliminate 20-30% of operational expenses through reduced manpower dependency, consolidated command rooms, and AI-driven automation that replaces manual oversight."
        },
        {
            title: "Revenue Assurance",
            description: "Protect 2-5% of annual revenue through predictive detection of theft, fraud, downtime, and SLA breaches with real-time alerts and autonomous response."
        },
        {
            title: "Operational Efficiency",
            description: "Achieve 1.8-2.5× operator productivity by enabling single operators to manage multiple sites with autonomous drones and AI-driven incident prioritization."
        },
        {
            title: "Service Innovation",
            description: "Create new revenue streams with Command Center-as-a-Service, risk-based pricing, and performance-linked contracts for 10-20% margin expansion."
        }
    ],
    cta: {
        text: "Unlock measurable ROI with intelligent command center",
        buttonText: "Calculate Your ROI",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 3: CORE PLATFORM FEATURES
// ============================================================================

export const section3_CoreFeatures: CommandCenterSection = {
    id: "core-features",
    badgeLabel: "Platform Capabilities",
    title: "Core Platform Features",
    subtitle: "Unified Command Console, AI Intelligence Layer, Autonomous Drone Operations, Industry SOP Engine, Quantum-Safe Security, and Analytics Cockpit.",
    statistics: [
        {
            value: "100%",
            label: "unified visibility",
            icon: Eye
        },
        {
            value: "24/7",
            label: "autonomous operations",
            icon: Plane
        },
        {
            value: "100%",
            label: "quantum-safe security",
            icon: Lock
        },
        {
            value: "Real-time",
            label: "predictive analytics",
            icon: BarChart3
        }
    ],
    portfolioCards: [
        {
            icon: MonitorDot,
            title: "Unified Command Console",
            features: ["Single pane of glass", "Geo-spatial visualization", "Multi-tenant access", "Role-based controls"]
        },
        {
            icon: Cpu,
            title: "AI Intelligence Layer",
            features: ["Computer vision analytics", "Predictive risk scoring", "Event correlation", "AI-driven prioritization"]
        },
        {
            icon: Plane,
            title: "Autonomous Drone Operations",
            features: ["Patrol scheduling", "Event-triggered dispatch", "Live video streaming", "BVLOS-ready architecture"]
        },
        {
            icon: Settings,
            title: "Industry SOP & Workflow Engine",
            features: ["Pre-configured SOPs", "Automated escalation", "SLA timers", "Compliance evidence capture"]
        },
        {
            icon: Lock,
            title: "Quantum-Safe Security",
            features: ["Post-quantum encryption", "Zero-trust identity", "Secure device-to-cloud", "Tamper-proof audit trails"]
        },
        {
            icon: BarChart3,
            title: "Analytics & Decision Cockpit",
            features: ["Risk heatmaps", "Incident trend analysis", "ROI dashboards", "Predictive simulations"]
        }
    ],
    verticalTabs: [
        {
            title: "Command & Control",
            description: "Unified console with single pane of glass for video, IoT, drones, alerts, and workflows. Geo-spatial visualization, multi-tenant architecture, and role-based access for complete operational control."
        },
        {
            title: "AI & Automation",
            description: "Computer vision for intrusion and anomaly detection, predictive risk scoring, event correlation across sensors, and AI-driven incident prioritization for autonomous decision execution."
        },
        {
            title: "Drone Intelligence",
            description: "Autonomous patrol scheduling with adaptive routes, event-triggered dispatch, live video streaming with edge analytics, and BVLOS-ready architecture for perimeter security."
        },
        {
            title: "Security & Compliance",
            description: "Quantum-safe encryption, zero-trust architecture, industry-aligned SOPs, automated compliance workflows, and tamper-proof audit trails for regulatory readiness."
        }
    ],
    cta: {
        text: "Discover the power of unified intelligence",
        buttonText: "View Platform Features",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 4: INDUSTRY USE CASES
// ============================================================================

export const section4_UseCases: CommandCenterSection = {
    id: "industry-use-cases",
    badgeLabel: "Industry Solutions",
    title: "Industry Use Cases",
    subtitle: "Tailored Solutions for Banking, Logistics, Retail, Healthcare, and Government with Proven Outcomes and Measurable Impact.",
    statistics: [
        {
            value: "5",
            label: "major industries served",
            icon: Globe
        },
        {
            value: "100",
            label: "use cases deployed",
            icon: Target
        },
        {
            value: "98",
            label: "SLA adherence rate",
            icon: CheckCircle2
        },
        {
            value: "24/7",
            label: "continuous monitoring",
            icon: Eye
        }
    ],
    portfolioCards: [
        {
            icon: Landmark,
            title: "Banking & Financial Services",
            features: ["ATM & branch surveillance", "Cash movement monitoring", "Fraud detection", "Vendor oversight"]
        },
        {
            icon: Truck,
            title: "Logistics & High-Value Cargo",
            features: ["Yard & warehouse monitoring", "Route risk detection", "Cargo tamper alerts", "Drone perimeter security"]
        },
        {
            icon: Building2,
            title: "Retail & Large Campuses",
            features: ["Shrinkage prevention", "Crowd analytics", "Incident automation", "Store-to-HQ visibility"]
        },
        {
            icon: Hospital,
            title: "Healthcare & Critical Infrastructure",
            features: ["Perimeter & access control", "Asset monitoring", "Emergency response", "Compliance reporting"]
        },
        {
            icon: Globe,
            title: "Government & Smart Cities",
            features: ["City-wide surveillance", "Traffic & crowd control", "Disaster response", "Infrastructure monitoring"]
        }
    ],
    verticalTabs: [
        {
            title: "Banking & Financial Services",
            description: "Comprehensive ATM and branch surveillance, cash movement monitoring, fraud and intrusion detection, and SLA-driven vendor oversight. Outcomes: Reduced theft & fraud, lower insurance costs, improved regulatory posture."
        },
        {
            title: "Logistics & Cargo",
            description: "Yard and warehouse monitoring, route risk detection, cargo tamper alerts, and drone-based perimeter security. Outcomes: Fewer losses and delays, higher on-time delivery, improved asset utilization."
        },
        {
            title: "Retail & Campuses",
            description: "Shrinkage prevention, crowd and queue analytics, incident response automation, and centralized store-to-HQ visibility. Outcomes: Reduced shrinkage, better customer experience, centralized oversight."
        },
        {
            title: "Healthcare & Infrastructure",
            description: "Perimeter and access control, asset and equipment monitoring, emergency response orchestration, and compliance reporting. Outcomes: Patient safety assurance, zero blind spots, audit-ready operations."
        },
        {
            title: "Government & Smart Cities",
            description: "City-wide surveillance, traffic and crowd control, disaster response coordination, and infrastructure monitoring. Outcomes: Faster emergency response, improved public safety, data-driven governance."
        }
    ],
    cta: {
        text: "Explore industry-specific solutions",
        buttonText: "View Industry Solutions",
        link: "/contact"
    }
};

// ============================================================================
// SECTION 5: DEPLOYMENT MODELS
// ============================================================================

export const section5_Deployment: CommandCenterSection = {
    id: "deployment-models",
    badgeLabel: "Deployment Flexibility",
    title: "Deployment Models",
    subtitle: "Flexible Deployment Options from Centralized National Command Centers to Command Center-as-a-Service (CCaaS) and Private Cloud.",
    statistics: [
        {
            value: "4",
            label: "deployment models",
            icon: Cloud
        },
        {
            value: "100%",
            label: "cloud-native architecture",
            icon: Network
        },
        {
            value: "99.9%",
            label: "uptime guarantee",
            icon: CheckCircle2
        },
        {
            value: "Global",
            label: "scale capability",
            icon: Globe
        }
    ],
    portfolioCards: [
        {
            icon: Building2,
            title: "Centralized National Command Center",
            features: ["Single national control room", "Multi-site visibility", "Hierarchical command structure", "Disaster recovery ready"]
        },
        {
            icon: Network,
            title: "Regional + Local Hybrid Model",
            features: ["Regional command centers", "Local site integration", "Federated architecture", "Edge + cloud processing"]
        },
        {
            icon: Cloud,
            title: "Command Center-as-a-Service (CCaaS)",
            features: ["Managed service model", "Pay-as-you-grow pricing", "Zero infrastructure investment", "24/7 NOC support"]
        },
        {
            icon: Lock,
            title: "Private / Sovereign Cloud",
            features: ["On-premise deployment", "Data sovereignty compliance", "Air-gapped option", "Custom security policies"]
        }
    ],
    verticalTabs: [
        {
            title: "Centralized National",
            description: "Single national command center with multi-site visibility, hierarchical command structure, and disaster recovery readiness for large enterprises and government operations."
        },
        {
            title: "Regional + Local Hybrid",
            description: "Regional command centers with local site integration, federated architecture, and edge + cloud processing for distributed operations with local autonomy."
        },
        {
            title: "CCaaS Model",
            description: "Fully managed Command Center-as-a-Service with pay-as-you-grow pricing, zero infrastructure investment, and 24/7 NOC support for rapid deployment and scalability."
        },
        {
            title: "Private / Sovereign",
            description: "On-premise or private cloud deployment with data sovereignty compliance, air-gapped options, and custom security policies for regulated industries and government."
        }
    ],
    cta: {
        text: "Choose the deployment model that fits your needs",
        buttonText: "Discuss Deployment Options",
        link: "/contact"
    }
};

// ============================================================================
// FINAL CTA
// ============================================================================

export const finalCTA = {
    title: "Transform Fragmented Operations into a Single, Predictive Control System",
    subtitle: "A next-generation Centralized Command Center that fuses AI, autonomous drones, IoT intelligence, and quantum-safe security—transforming operations into a self-optimizing control system.",
    buttonText: "Schedule a Demo",
    link: "/contact"
};

// ============================================================================
// EXPORT ALL SECTIONS
// ============================================================================

export const allCommandCenterSections = [
    section1_ValueProposition,
    section2_Profitflow,
    section3_CoreFeatures,
    section4_UseCases,
    section5_Deployment
];
