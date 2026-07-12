import {
    Divide, Globe, ShieldCheck, Clock, Brain, Settings, Database, Activity, Server, Zap, RotateCcw, TrendingUp, CheckCircle2, BarChart, Target, AlertTriangle, MonitorDot, Microscope, Factory, Syringe, TreePine, FileCheck, Truck, Lock, Utensils, Users, Droplets, Recycle, Leaf, Sprout, Layout, MessageSquare, Mic2, Wifi, Building2, RefreshCw, Eye, ShoppingCart, Map, Thermometer, Network, Fingerprint, Camera, Video, Radio, MapPin, Home, UserCheck, Siren, Heart, Radar, Flame, Smartphone, ShieldAlert, Cpu, HardDrive, Bell, Phone, Search, Gavel, History, Terminal, Package, Gem, FileText, Trash2, Plane, Shield, Bug, Coins, Briefcase, FileSignature, Scale, Bot
} from "lucide-react";

export interface ServiceOfferingSection {
    id: string;
    title: string;
    subtitle: string;
    icon: any  ;
    stats: {
        value: string;
        label: string;
        icon: any  ;
        suffix?: string;
        prefix?: string;
    }[];
    portfolio: {
        title: string;
        features: string[];
        icon: any  ;
        link?: string;
    }[];
    tabs: {
        title: string;
        description: string;
        items?: string[];
        details?: { title: string, items: string[] }[];
    }[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

export interface ServiceCategory {
    id: string;
    type: string;
    title: string;
    subtitle: string;
    heroSlides: {
        badge: string;
        title: string;
        highlight: string;
        description: string;
        image: string;
    }[];
    offerings: ServiceOfferingSection[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        id: "hard-fm",
        type: "facility-management",
        title: "Hard FM Excellence",
        subtitle: "Autonomous Asset Reliability & Predictive Maintenance",
        heroSlides: [
            {
                badge: "Integrated Engineering",
                title: "Hard FM",
                highlight: "Excellence",
                description: "Autonomous asset reliability and predictive maintenance powered by AI.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            },
            {
                badge: "Predictive Analytics",
                title: "Asset",
                highlight: "Reliability",
                description: "Identify degradation 45 days in advance with 94% accuracy.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            },
            {
                badge: "Digital Twin",
                title: "Virtual",
                highlight: "Operations",
                description: "Real-time asset virtualization for seamless stress optimization.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 1.1
            {
                id: "1.1",
                title: "AI-Powered Predictive Maintenance Engine (AIP-PME)",
                subtitle: "Machine learning models analyze multi-dimensional asset signatures to predict component failures 7-45 days in advance with 94% accuracy.",
                icon: Brain,
                stats: [
                    { value: "45", suffix: "%", prefix: "↓", label: "Unplanned Downtime", icon: Activity },
                    { value: "22", suffix: "%", prefix: "↓", label: "Maintenance OPEX", icon: Settings },
                    { value: "25", suffix: "%", prefix: "↑", label: "Asset Useful Life", icon: Clock },
                    { value: "18", suffix: "-24 mo", label: "ROI Period", icon: TrendingUp }
                ],
                portfolio: [
                    {
                        title: "Bearing Failure Prevented",
                        features: ["Identified degradation 18 days early", "Auto-ordered spare parts", "Scheduled off-hours repair"],
                        icon: Settings
                    },
                    {
                        title: "Load Optimization",
                        features: ["Reduced chiller stress by 15%", "Dynamic capacity adjustment", "Extended component life"],
                        icon: Zap
                    },
                    {
                        title: "Inventory Intelligence",
                        features: ["Real-time spare parts query", "Vendor lead time integration", "Safety threshold alerts"],
                        icon: Database
                    },
                    {
                        title: "Risk Visualization",
                        features: ["Mobile alerts for managers", "Probability scoring (87%)", "Digital twin updates"],
                        icon: MonitorDot
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of AI-Powered Predictive Maintenance Engine (AIP-PME) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Hard FM Excellence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing AI-Powered Predictive Maintenance Engine (AIP-PME) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Hard FM Excellence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within AI-Powered Predictive Maintenance Engine (AIP-PME).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of AI-Powered Predictive Maintenance Engine (AIP-PME). We deploy sophisticated remote monitoring and local site management aligned with Hard FM Excellence best practices. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of AI-Powered Predictive Maintenance Engine (AIP-PME).",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Hard FM Excellence disruptions.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of AI-Powered Predictive Maintenance Engine (AIP-PME) by leveraging our customized assessment and strategic blueprinting. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Hard FM Excellence. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale AI-Powered Predictive Maintenance Engine (AIP-PME) deployment.",
                            "Change Management: Ensuring your workforce is prepared for Hard FM Excellence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to AI-Powered Predictive Maintenance Engine (AIP-PME).",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced AI-Powered Predictive Maintenance Engine (AIP-PME) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving AI-Powered Predictive Maintenance Engine (AIP-PME) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Hard FM Excellence environment. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated AI-Powered Predictive Maintenance Engine (AIP-PME) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Hard FM Excellence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to AI-Powered Predictive Maintenance Engine (AIP-PME). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Hard FM Excellence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within AI-Powered Predictive Maintenance Engine (AIP-PME).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Hard FM Excellence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures AI-Powered Predictive Maintenance Engine (AIP-PME) interventions happen at machine speed, autonomously. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Hard FM Excellence networks. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for AI-Powered Predictive Maintenance Engine (AIP-PME) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Hard FM Excellence.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Hard FM Excellence components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of AI-Powered Predictive Maintenance Engine (AIP-PME). Our experts lead intense, hands-on training regimens to completely upskill your internal Hard FM Excellence teams. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the AI-Powered Predictive Maintenance Engine (AIP-PME) ecosystem.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying AI-Powered Predictive Maintenance Engine (AIP-PME) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Standard Operating Procedures become living digital documents, evolving alongside your Hard FM Excellence infrastructure. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to AI-Powered Predictive Maintenance Engine (AIP-PME) into digital libraries.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent AI-Powered Predictive Maintenance Engine (AIP-PME) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Hard FM Excellence problems in natural language for exact solutions.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Stop Reacting to Failures.",
                    buttonText: "Deploy Predictive Engine",
                    link: "/contact"
                }
            },
            // OFFERING 1.2
            {
                id: "1.2",
                title: "Digital Twin & Asset Virtualization Platform (DT-AVP)",
                subtitle: "High-fidelity virtual replicas enabling scenario simulation, optimization testing, and predictive stress analysis without operational disruption.",
                icon: Database,
                stats: [
                    { value: "40", suffix: "%", prefix: "↓", label: "Capital Project Risk", icon: AlertTriangle },
                    { value: "15", suffix: "%", prefix: "↓", label: "Energy Costs", icon: Zap },
                    { value: "30", suffix: "%", prefix: "↑", label: "Renovation Accuracy", icon: Target },
                    { value: "1", suffix: "sec", prefix: "<", label: "Update Latency", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Heatwave Simulation",
                        features: ["Modeled 45°C peak load", "Optimized pre-cooling", "Validated thermal comfort"],
                        icon: Activity
                    },
                    {
                        title: "Renovation Planning",
                        features: ["Pre-construction conflict check", "Disruption minimization", "Cost impact analysis"],
                        icon: Settings
                    },
                    {
                        title: "Emergency Drills",
                        features: ["Virtual fire evacuation", "Pathway optimization", "Safety protocol validation"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Lifecycle Modeling",
                        features: ["20-year degradation view", "Replacement optimization", "Budget forecasting"],
                        icon: TrendingUp
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Digital Twin & Asset Virtualization Platform (DT-AVP) implementation. We rigorously select and continuously train our staff to align with the advanced requirements of the Hard FM Excellence sector. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Digital Twin & Asset Virtualization Platform (DT-AVP) deployments.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Hard FM Excellence.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Digital Twin & Asset Virtualization Platform (DT-AVP)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Digital Twin & Asset Virtualization Platform (DT-AVP). We deploy sophisticated remote monitoring and local site management aligned with Hard FM Excellence best practices. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Digital Twin & Asset Virtualization Platform (DT-AVP).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Digital Twin & Asset Virtualization Platform (DT-AVP) into your legacy enterprise. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Hard FM Excellence workflows. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Hard FM Excellence technological transitions.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Digital Twin & Asset Virtualization Platform (DT-AVP) deployment.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Compliance Auditing: Ensuring your Hard FM Excellence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Digital Twin & Asset Virtualization Platform (DT-AVP) with your wider network. We harmonize legacy applications with modern cloud-native architectures prevalent in Hard FM Excellence operations. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Hard FM Excellence network.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Digital Twin & Asset Virtualization Platform (DT-AVP) modules.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Middleware Orchestration: Advanced translation layers handling complex Hard FM Excellence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Digital Twin & Asset Virtualization Platform (DT-AVP). The platform autonomously identifies hidden optimization pathways within your broader Hard FM Excellence operational footprint. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Hard FM Excellence assets.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Digital Twin & Asset Virtualization Platform (DT-AVP). It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Hard FM Excellence ecosystem. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Hard FM Excellence.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Hard FM Excellence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Digital Twin & Asset Virtualization Platform (DT-AVP) with our comprehensive implementation and handover framework. We establish robust governance models and audit trails that serve as your permanent Hard FM Excellence operational foundation. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Digital Twin & Asset Virtualization Platform (DT-AVP).",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Digital Twin & Asset Virtualization Platform (DT-AVP) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Our systems allow technicians to query complex Hard FM Excellence issues in natural language and receive instant, exact procedures. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "NLP-Driven Search Architectures: Querying complex Hard FM Excellence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Hard FM Excellence database.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Digital Twin & Asset Virtualization Platform (DT-AVP) into digital libraries."
                        ]
                    }
                ],


                cta: {
                    text: "Simulate Before You Build.",
                    buttonText: "Create Your Digital Twin",
                    link: "/contact"
                }
            },
            // OFFERING 1.3
            {
                id: "1.3",
                title: "Autonomous Building Systems Integration (ABSI)",
                subtitle: "AI-orchestrated coordination across HVAC, electrical, plumbing, and fire safety systems achieving holistic building optimization.",
                icon: Settings,
                stats: [
                    { value: "28", suffix: "%", prefix: "↓", label: "Total Energy Use", icon: Zap },
                    { value: "35", suffix: "%", prefix: "↓", label: "System Conflicts", icon: AlertTriangle },
                    { value: "50", suffix: "%", prefix: "↑", label: "Comfort Score", icon: CheckCircle2 },
                    { value: "100", suffix: "ms", prefix: "<", label: "Control Latency", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Peak Demand Shaving",
                        features: ["Electrical load forecasting", "30% demand reduction", "Automated shedding"],
                        icon: TrendingUp
                    },
                    {
                        title: "Comfort Optimization",
                        features: ["CO2 based damper control", "Daylight harvesting", "Pre-cooling zones"],
                        icon: Globe
                    },
                    {
                        title: "Conflict Resolution",
                        features: ["Detected simultaneous heat/cool", "Auto-corrected actuation", "Prevented energy waste"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Water Conservation",
                        features: ["Pressure optimization", "Leak prediction", "20% water savings"],
                        icon: Activity
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Autonomous Building Systems Integration (ABSI) requires a workforce possessing highly specialized technical acumen. Our teams act as an extension of your own, filling critical knowledge gaps within your Hard FM Excellence initiatives. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Autonomous Building Systems Integration (ABSI).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Autonomous Building Systems Integration (ABSI) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Hard FM Excellence.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Building Systems Integration (ABSI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Autonomous Building Systems Integration (ABSI). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Hard FM Excellence footprint. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Hard FM Excellence expectations.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Hard FM Excellence disruptions.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Autonomous Building Systems Integration (ABSI)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Autonomous Building Systems Integration (ABSI) advisory tier. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Hard FM Excellence portfolio. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Hard FM Excellence.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Autonomous Building Systems Integration (ABSI) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Autonomous Building Systems Integration (ABSI) data streams. Every integration point is rigorously stress-tested against the operational parameters of your Hard FM Excellence environment. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Autonomous Building Systems Integration (ABSI) modules.",
                            "Middleware Orchestration: Advanced translation layers handling complex Hard FM Excellence data flows.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Autonomous Building Systems Integration (ABSI).",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Hard FM Excellence network."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Autonomous Building Systems Integration (ABSI). The platform autonomously identifies hidden optimization pathways within your broader Hard FM Excellence operational footprint. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Hard FM Excellence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Hard FM Excellence assets.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Autonomous Building Systems Integration (ABSI)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Autonomous Building Systems Integration (ABSI) are completed with absolute zero latency. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Hard FM Excellence safety thresholds. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Hard FM Excellence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Autonomous Building Systems Integration (ABSI).",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Autonomous Building Systems Integration (ABSI) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Autonomous Building Systems Integration (ABSI). We craft intricate operating playbooks, meticulously documenting every procedure required for Hard FM Excellence success. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Hard FM Excellence.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Hard FM Excellence success.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Autonomous Building Systems Integration (ABSI) are permanently codified. Our systems allow technicians to query complex Hard FM Excellence issues in natural language and receive instant, exact procedures. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Autonomous Building Systems Integration (ABSI) into digital libraries.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "NLP-Driven Search Architectures: Querying complex Hard FM Excellence problems in natural language for exact solutions."
                        ]
                    }
                ],


                cta: {
                    text: "Unify Your Building Systems.",
                    buttonText: "Integrate Now",
                    link: "/contact"
                }
            },
            // OFFERING 1.4
            {
                id: "1.4",
                title: "Critical Environment Management (CEM)",
                subtitle: "Specialized autonomous control for mission-critical environments: data centers, cleanrooms, labs, and healthcare.",
                icon: Server,
                stats: [
                    { value: "99.99", suffix: "%", label: "Reliability", icon: ShieldCheck },
                    { value: "60", suffix: "%", prefix: "↓", label: "Audit Effort", icon: FileCheck },
                    { value: "100", suffix: "%", label: "Compliance Auto", icon: CheckCircle2 },
                    { value: "0.1", suffix: "°C", prefix: "±", label: "Precision", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Cleanroom Contamination",
                        features: ["Detected particle spike", "Auto-isolation triggered", "Production halted safely"],
                        icon: Microscope
                    },
                    {
                        title: "Data Center Cooling",
                        features: ["PUE < 1.3 achieved", "Thermal mapping optimization", "IT load balancing"],
                        icon: Server
                    },
                    {
                        title: "Pharma Compliance",
                        features: ["FDA 21 CFR Part 11 logs", "Sterilization cycle opt", "Audit-ready reports"],
                        icon: Syringe
                    },
                    {
                        title: "Hospital Infection Control",
                        features: ["Pressure cascade maintained", "Surgical schedule sync", "Air change rate boost"],
                        icon: Activity
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Critical Environment Management (CEM) implementation. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Hard FM Excellence. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Hard FM Excellence critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Hard FM Excellence.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Critical Environment Management (CEM).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Hard FM Excellence industry curves."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Critical Environment Management (CEM) to our team with a robust, outcome-based partnership. We ensure complete compliance with international standards relevant to the Hard FM Excellence domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Critical Environment Management (CEM).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Critical Environment Management (CEM).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Hard FM Excellence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Critical Environment Management (CEM) by leveraging our customized assessment and strategic blueprinting. By developing bespoke maturity models, we ensure your organization scales effectively within the Hard FM Excellence sector. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Hard FM Excellence technological transitions.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Critical Environment Management (CEM) capabilities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Critical Environment Management (CEM) data streams. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Hard FM Excellence data requirements. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Hard FM Excellence data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Critical Environment Management (CEM). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Hard FM Excellence intervention. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Hard FM Excellence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Hard FM Excellence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Critical Environment Management (CEM).",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Critical Environment Management (CEM) are completed with absolute zero latency. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Hard FM Excellence networks. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Hard FM Excellence components.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Hard FM Excellence.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Critical Environment Management (CEM). We establish robust governance models and audit trails that serve as your permanent Hard FM Excellence operational foundation. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Critical Environment Management (CEM) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Critical Environment Management (CEM). We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Hard FM Excellence expertise. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Hard FM Excellence problems in natural language for exact solutions.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Video Process Documentation: High-quality visual recordings of critical Hard FM Excellence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your Critical Operations.",
                    buttonText: "Secure Environment",
                    link: "/contact"
                }
            },
            // OFFERING 1.5
            {
                id: "1.5",
                title: "Infrastructure Resilience & Business Continuity (IRBC)",
                subtitle: "AI-driven infrastructure hardening ensuring operational continuity during grid failures, disasters, and cyber-attacks.",
                icon: ShieldCheck,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Event Downtime", icon: Clock },
                    { value: "50", suffix: "%", prefix: "↓", label: "Insurance Premium", icon: Settings },
                    { value: "100", suffix: "%", label: "Ops Protection", icon: ShieldCheck },
                    { value: "2", suffix: "sec", label: "Islanding Time", icon: Zap }
                ],
                portfolio: [
                    {
                        title: "Grid Instability Response",
                        features: ["Detected frequency drop", "Microgrid islanding (2s)", "Zero critical load loss"],
                        icon: Zap
                    },
                    {
                        title: "Flood Pre-emption",
                        features: ["72hr weather warning", "Equipment elevation alerts", "Barrier deployment"],
                        icon: Globe
                    },
                    {
                        title: "Cyber Defense",
                        features: ["Ransomware pattern detected", "Network segmentation", "Manual override activated"],
                        icon: Lock
                    },
                    {
                        title: "Fuel Supply Chain",
                        features: ["Predicted shortage", "Alt supplier activated", "Load prioritized"],
                        icon: Truck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Infrastructure Resilience & Business Continuity (IRBC) is made seamless by our fully trained and certified deployment teams. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Hard FM Excellence strategy. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Hard FM Excellence critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Infrastructure Resilience & Business Continuity (IRBC) deployments.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Infrastructure Resilience & Business Continuity (IRBC)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Infrastructure Resilience & Business Continuity (IRBC). Through transparent digital dashboards, you maintain total visibility over all Hard FM Excellence operations without the daily hassle. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Infrastructure Resilience & Business Continuity (IRBC).",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Infrastructure Resilience & Business Continuity (IRBC).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Hard FM Excellence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Infrastructure Resilience & Business Continuity (IRBC), ensuring your technological investments are future-proof. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Hard FM Excellence goals. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Compliance Auditing: Ensuring your Hard FM Excellence infrastructure meets stringent regulatory frameworks.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Infrastructure Resilience & Business Continuity (IRBC) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Infrastructure Resilience & Business Continuity (IRBC) into the complex fabric of your enterprise IT and OT layers. Our process encompasses zero-trust security postures, ensuring data integrity across the Hard FM Excellence spectrum. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Hard FM Excellence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Infrastructure Resilience & Business Continuity (IRBC).",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Middleware Orchestration: Advanced translation layers handling complex Hard FM Excellence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Infrastructure Resilience & Business Continuity (IRBC). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Hard FM Excellence intervention. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Hard FM Excellence contexts.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Hard FM Excellence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Infrastructure Resilience & Business Continuity (IRBC)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Infrastructure Resilience & Business Continuity (IRBC) are completed with absolute zero latency. They continuously negotiate with external APIs and internal databases to dynamically route Hard FM Excellence resources. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Hard FM Excellence.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Infrastructure Resilience & Business Continuity (IRBC).",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Infrastructure Resilience & Business Continuity (IRBC). We craft intricate operating playbooks, meticulously documenting every procedure required for Hard FM Excellence success. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Hard FM Excellence success.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Infrastructure Resilience & Business Continuity (IRBC).",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Infrastructure Resilience & Business Continuity (IRBC), preventing institutional memory loss. Our systems allow technicians to query complex Hard FM Excellence issues in natural language and receive instant, exact procedures. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Infrastructure Resilience & Business Continuity (IRBC) into digital libraries.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Infrastructure Resilience & Business Continuity (IRBC) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Hard FM Excellence problems in natural language for exact solutions.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Ensure Business Continuity.",
                    buttonText: "Build Resilience",
                    link: "/contact"
                }
            },
            // OFFERING 1.6
            {
                id: "1.6",
                title: "Sustainable Asset Lifecycle Management (SALM)",
                subtitle: "Comprehensive decarbonization and circular economy management integrating carbon accounting and asset valorization.",
                icon: TreePine,
                stats: [
                    { value: "35", suffix: "%", prefix: "↓", label: "Carbon Emissions", icon: Globe },
                    { value: "15", suffix: "%", prefix: "↑", label: "Residual Value", icon: TrendingUp },
                    { value: "60", suffix: "%", prefix: "↓", label: "Reporting Effort", icon: FileCheck },
                    { value: "100", suffix: "%", label: "Compliance", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Chiller Replacement",
                        features: ["Analyzed 3 options", "Selected heat recovery unit", "Reduced CO2 by 85 tons"],
                        icon: Settings
                    },
                    {
                        title: "E-Waste Harvesting",
                        features: ["UPS battery segregation", "Inverter reuse", "Certified recycling"],
                        icon: RotateCcw
                    },
                    {
                        title: "Elevator Modernization",
                        features: ["Refurbishment vs Replacement", "40% cost reduction", "Extended life"],
                        icon: TrendingUp
                    },
                    {
                        title: "Global Compliance",
                        features: ["Automated GRI reports", "CBAM readiness", "Science-Based Targets"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Sustainable Asset Lifecycle Management (SALM) is made seamless by our fully trained and certified deployment teams. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Hard FM Excellence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Sustainable Asset Lifecycle Management (SALM).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Hard FM Excellence industry curves.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Hard FM Excellence critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Sustainable Asset Lifecycle Management (SALM) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Sustainable Asset Lifecycle Management (SALM) guarantees strict adherence to performance metrics. We deploy sophisticated remote monitoring and local site management aligned with Hard FM Excellence best practices. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Hard FM Excellence expectations.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Sustainable Asset Lifecycle Management (SALM).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Sustainable Asset Lifecycle Management (SALM)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Sustainable Asset Lifecycle Management (SALM), ensuring your technological investments are future-proof. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Hard FM Excellence. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Hard FM Excellence.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Sustainable Asset Lifecycle Management (SALM) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Hard FM Excellence technological transitions.",
                            "Compliance Auditing: Ensuring your Hard FM Excellence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Sustainable Asset Lifecycle Management (SALM) communicates natively with your central platforms. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Hard FM Excellence data requirements. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Hard FM Excellence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Sustainable Asset Lifecycle Management (SALM).",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Hard FM Excellence requirements.",
                            "Middleware Orchestration: Advanced translation layers handling complex Hard FM Excellence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Sustainable Asset Lifecycle Management (SALM) with our AI backbone, we enable predictive forecasting rather than historical reporting. The platform autonomously identifies hidden optimization pathways within your broader Hard FM Excellence operational footprint. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Hard FM Excellence workflows instantly.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Hard FM Excellence contexts.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Sustainable Asset Lifecycle Management (SALM)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Sustainable Asset Lifecycle Management (SALM) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Hard FM Excellence. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Hard FM Excellence.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Hard FM Excellence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Sustainable Asset Lifecycle Management (SALM)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Sustainable Asset Lifecycle Management (SALM). We establish robust governance models and audit trails that serve as your permanent Hard FM Excellence operational foundation. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Hard FM Excellence."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Sustainable Asset Lifecycle Management (SALM) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Hard FM Excellence facilities. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Hard FM Excellence database.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Achieve Net Zero Assets.",
                    buttonText: "Start Sustainability Journey",
                    link: "/contact"
                }
            }
        ]
    },
    {
        id: "soft-fm",
        type: "facility-management",
        title: "Soft FM Intelligence",
        subtitle: "Autonomous Workforce & Experience Orchestration",
        heroSlides: [
            {
                badge: "Hygiene Intelligence",
                title: "Soft FM",
                highlight: "Innovation",
                description: "AI-driven sanitation and workspace hygiene monitoring systems.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
            },
            {
                badge: "Adaptive Cleaning",
                title: "Dynamic",
                highlight: "Sanitation",
                description: "Autonomous cleaning cycles based on real-time occupancy data.",
                image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
            },
            {
                badge: "Eco-Friendly",
                title: "Sustainable",
                highlight: "Service",
                description: "Zero-chemical protocols and automated resource waste reduction.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 2.1
            {
                id: "2.1",
                title: "Intelligent Workforce Orchestration Platform (IWOP)",
                subtitle: "Real-time labor optimization combining attendance intelligence, skill-based dispatch, predictive workload balancing, and automated performance management.",
                icon: Users,
                stats: [
                    { value: "25", suffix: "%", prefix: "↑", label: "Labor Productivity", icon: TrendingUp },
                    { value: "18", suffix: "%", prefix: "↓", label: "Overtime Costs", icon: Database },
                    { value: "30", suffix: "%", prefix: "↓", label: "Attrition", icon: Users },
                    { value: "99.7", suffix: "%", label: "Attendance Accuracy", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Event Peak Management",
                        features: ["Predicted 2500 visitors", "Auto-deployed 10 extra staff", "Zero service delays"],
                        icon: Users
                    },
                    {
                        title: "Fatigue Prevention",
                        features: ["Wearable HR monitor alert", "Auto-scheduled improved break", "Safety incident prevented"],
                        icon: Activity
                    },
                    {
                        title: "Skill Dispatch",
                        features: ["Verified electrician certification", "Matched to complex task", "First-time fix achieved"],
                        icon: Settings
                    },
                    {
                        title: "Absenteeism Response",
                        features: ["Detected 12% absence", "Auto-dispatched gig backup", "Shift coverage maintained"],
                        icon: AlertTriangle
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Intelligent Workforce Orchestration Platform (IWOP) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Soft FM Intelligence initiatives. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Intelligent Workforce Orchestration Platform (IWOP) deployments.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Intelligent Workforce Orchestration Platform (IWOP).",
                            "Process Adherence: Meticulous execution of standard operating procedures for Soft FM Intelligence.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Soft FM Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Intelligent Workforce Orchestration Platform (IWOP). Through transparent digital dashboards, you maintain total visibility over all Soft FM Intelligence operations without the daily hassle. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Preventative Incident Management: Identifying anomalies before they mature into Soft FM Intelligence disruptions.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Intelligent Workforce Orchestration Platform (IWOP) advisory tier. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Soft FM Intelligence. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Compliance Auditing: Ensuring your Soft FM Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Intelligent Workforce Orchestration Platform (IWOP) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Intelligent Workforce Orchestration Platform (IWOP) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Soft FM Intelligence operations. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Intelligent Workforce Orchestration Platform (IWOP).",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Soft FM Intelligence network.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Soft FM Intelligence requirements."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Intelligent Workforce Orchestration Platform (IWOP). Our neural networks simulate thousands of permutations instantly to solve complex Soft FM Intelligence scheduling and resource issues. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Intelligent Workforce Orchestration Platform (IWOP).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Soft FM Intelligence assets.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Intelligent Workforce Orchestration Platform (IWOP). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Soft FM Intelligence. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Intelligent Workforce Orchestration Platform (IWOP).",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Intelligent Workforce Orchestration Platform (IWOP). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Soft FM Intelligence. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Intelligent Workforce Orchestration Platform (IWOP).",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Intelligent Workforce Orchestration Platform (IWOP) are permanently codified. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Soft FM Intelligence expertise. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Soft FM Intelligence maintenance procedures.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Soft FM Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Optimize Your Workforce.",
                    buttonText: "Deploy Intelligent Staffing",
                    link: "/contact"
                }
            },
            // OFFERING 2.2
            {
                id: "2.2",
                title: "Autonomous Cleaning & Hygiene Excellence (ACHE)",
                subtitle: "Self-optimizing sanitation operations combining robotic automation, AI quality verification, and predictive contamination prevention.",
                icon: CheckCircle2,
                stats: [
                    { value: "40", suffix: "%", prefix: "↑", label: "Cleaning Consistency", icon: TrendingUp },
                    { value: "22", suffix: "%", prefix: "↓", label: "Chemical Usage", icon: Zap },
                    { value: "95", suffix: "%", label: "Hygiene Scores", icon: ShieldCheck },
                    { value: "100", suffix: "%", label: "Audit Readiness", icon: FileCheck }
                ],
                portfolio: [
                    {
                        title: "Pandemic Response",
                        features: ["Detected CO2 spike", "Boosted ventilation", "Deployed disinfection bots"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Precision Dosing",
                        features: ["IoT dispenser control", "Reduced chemical waste", "Verified sanitization"],
                        icon: Microscope
                    },
                    {
                        title: "Robotic Deployment",
                        features: ["2000 m²/hr autonomous scrubbing", "Overnight deep clean", "Zero labor cost"],
                        icon: Settings
                    },
                    {
                        title: "Event Hygiene",
                        features: ["Predictive restroom stocking", "Real-time attendant dispatch", "No complaints recorded"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Autonomous Cleaning & Hygiene Excellence (ACHE) is made seamless by our fully trained and certified deployment teams. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Soft FM Intelligence. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Cleaning & Hygiene Excellence (ACHE).",
                            "Process Adherence: Meticulous execution of standard operating procedures for Soft FM Intelligence.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Soft FM Intelligence critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Autonomous Cleaning & Hygiene Excellence (ACHE) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Autonomous Cleaning & Hygiene Excellence (ACHE). We ensure complete compliance with international standards relevant to the Soft FM Intelligence domain, maintaining strict audit trails. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Preventative Incident Management: Identifying anomalies before they mature into Soft FM Intelligence disruptions.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Autonomous Cleaning & Hygiene Excellence (ACHE) requires deep insight and careful architectural planning. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Soft FM Intelligence portfolio. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Autonomous Cleaning & Hygiene Excellence (ACHE) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Soft FM Intelligence technological transitions.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Autonomous Cleaning & Hygiene Excellence (ACHE) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Soft FM Intelligence environment. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Middleware Orchestration: Advanced translation layers handling complex Soft FM Intelligence data flows.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Autonomous Cleaning & Hygiene Excellence (ACHE)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Autonomous Cleaning & Hygiene Excellence (ACHE). Our neural networks simulate thousands of permutations instantly to solve complex Soft FM Intelligence scheduling and resource issues. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Soft FM Intelligence contexts.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Soft FM Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Autonomous Cleaning & Hygiene Excellence (ACHE) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Soft FM Intelligence ecosystem. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Soft FM Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Autonomous Cleaning & Hygiene Excellence (ACHE) peak states.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Autonomous Cleaning & Hygiene Excellence (ACHE). Our experts lead intense, hands-on training regimens to completely upskill your internal Soft FM Intelligence teams. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Autonomous Cleaning & Hygiene Excellence (ACHE).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Autonomous Cleaning & Hygiene Excellence (ACHE) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Autonomous Cleaning & Hygiene Excellence (ACHE). Standard Operating Procedures become living digital documents, evolving alongside your Soft FM Intelligence infrastructure. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Soft FM Intelligence maintenance procedures.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Autonomous Cleaning & Hygiene Excellence (ACHE) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Achieve Hospital-Grade Hygiene.",
                    buttonText: "Automate Cleaning",
                    link: "/contact"
                }
            },
            // OFFERING 2.3
            {
                id: "2.3",
                title: "Intelligent Workplace Experience (IWE)",
                subtitle: "Occupant-centric environment personalization combining space optimization, service request automation, and wellness integration.",
                icon: Globe,
                stats: [
                    { value: "30", suffix: "%", prefix: "↑", label: "Employee Sat", icon: TrendingUp },
                    { value: "15", suffix: "%", prefix: "↓", label: "Space Wasted", icon: Database },
                    { value: "20", suffix: "%", prefix: "↑", label: "Productivity", icon: Zap },
                    { value: "0", suffix: "min", label: "Meeting Setup", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Meeting Preparation",
                        features: ["Auto-booked room", "Pre-set lighting/temp", "Beverage ready on arrival"],
                        icon: Users
                    },
                    {
                        title: "Wellness Support",
                        features: ["posture alerts sent", "Circadian lighting adjusted", "Stress resources suggested"],
                        icon: Activity
                    },
                    {
                        title: "Visitor Management",
                        features: ["Pre-registered badge", "Wayfinding via app", "Host notified instantly"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Space Optimization",
                        features: ["Released unused rooms", "Consolidated low occupancy", "Saved energy"],
                        icon: Database
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Intelligent Workplace Experience (IWE) requires a workforce possessing highly specialized technical acumen. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Soft FM Intelligence strategy. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Soft FM Intelligence.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Intelligent Workplace Experience (IWE) deployments.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Soft FM Intelligence industry curves.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Intelligent Workplace Experience (IWE). We ensure complete compliance with international standards relevant to the Soft FM Intelligence domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Soft FM Intelligence disruptions.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Intelligent Workplace Experience (IWE), ensuring your technological investments are future-proof. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Soft FM Intelligence. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Intelligent Workplace Experience (IWE) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Intelligent Workplace Experience (IWE).",
                            "Compliance Auditing: Ensuring your Soft FM Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Change Management: Ensuring your workforce is prepared for Soft FM Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Intelligent Workplace Experience (IWE) into the complex fabric of your enterprise IT and OT layers. Through advanced middleware development, we translate disparate protocols into a unified Soft FM Intelligence language. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Soft FM Intelligence network.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Intelligent Workplace Experience (IWE) with our AI backbone, we enable predictive forecasting rather than historical reporting. Our neural networks simulate thousands of permutations instantly to solve complex Soft FM Intelligence scheduling and resource issues. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Soft FM Intelligence assets.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Intelligent Workplace Experience (IWE)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Intelligent Workplace Experience (IWE) interventions happen at machine speed, autonomously. They continuously negotiate with external APIs and internal databases to dynamically route Soft FM Intelligence resources. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Soft FM Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Intelligent Workplace Experience (IWE) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Intelligent Workplace Experience (IWE) with our comprehensive implementation and handover framework. We craft intricate operating playbooks, meticulously documenting every procedure required for Soft FM Intelligence success. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Intelligent Workplace Experience (IWE).",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Soft FM Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Intelligent Workplace Experience (IWE). Using intelligent ontologies, we structure vast amounts of raw documentation generated by Soft FM Intelligence facilities. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "NLP-Driven Search Architectures: Querying complex Soft FM Intelligence problems in natural language for exact solutions.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Intelligent Workplace Experience (IWE) updates instantly across the grid.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Create a Workplace People Love.",
                    buttonText: "Elevate Experience",
                    link: "/contact"
                }
            },
            // OFFERING 2.4
            {
                id: "2.4",
                title: "Smart Pantry & Food Services (SPFS)",
                subtitle: "Autonomous food service management integrating inventory intelligence, predictive catering, dietary personalization, and waste minimization.",
                icon: Utensils,
                stats: [
                    { value: "25", suffix: "%", prefix: "↓", label: "Food Waste", icon: RotateCcw },
                    { value: "18", suffix: "%", prefix: "↓", label: "Procurement Cost", icon: Database },
                    { value: "40", suffix: "%", prefix: "↑", label: "Satisfaction", icon: CheckCircle2 },
                    { value: "0", suffix: "", label: "Stockouts", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Waste Reduction",
                        features: ["Dynamic discounting", "Donated unsold items", "Saved 15kg food/day"],
                        icon: RotateCcw
                    },
                    {
                        title: "Predictive Prep",
                        features: ["Forecasted sandwich demand", "Pre-staged production", "Zero stockout"],
                        icon: Brain
                    },
                    {
                        title: "Dietary Safety",
                        features: ["Auto-flagged allergens", "Vegan options verified", "Safe labeling"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Cost Control",
                        features: ["Optimized serving sizes", "Reduced spoilage", "Bulk order timing"],
                        icon: TrendingUp
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Smart Pantry & Food Services (SPFS) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Soft FM Intelligence initiatives. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Soft FM Intelligence critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Smart Pantry & Food Services (SPFS) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Smart Pantry & Food Services (SPFS).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Smart Pantry & Food Services (SPFS) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Soft FM Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Smart Pantry & Food Services (SPFS) requires deep insight and careful architectural planning. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Soft FM Intelligence. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Smart Pantry & Food Services (SPFS) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Change Management: Ensuring your workforce is prepared for Soft FM Intelligence technological transitions.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Smart Pantry & Food Services (SPFS) data streams. We harmonize legacy applications with modern cloud-native architectures prevalent in Soft FM Intelligence operations. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Smart Pantry & Food Services (SPFS).",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Soft FM Intelligence network.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Soft FM Intelligence requirements.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Smart Pantry & Food Services (SPFS) with our AI backbone, we enable predictive forecasting rather than historical reporting. It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Soft FM Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Soft FM Intelligence assets.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Soft FM Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Smart Pantry & Food Services (SPFS). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Soft FM Intelligence networks. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Smart Pantry & Food Services (SPFS)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Smart Pantry & Food Services (SPFS). We establish robust governance models and audit trails that serve as your permanent Soft FM Intelligence operational foundation. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Smart Pantry & Food Services (SPFS) ecosystem.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Soft FM Intelligence success.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Smart Pantry & Food Services (SPFS)."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Smart Pantry & Food Services (SPFS). Integrated learning management tools continuously certify your staff on the latest Soft FM Intelligence methodologies. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Smart Pantry & Food Services (SPFS) updates instantly across the grid.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Smart Pantry & Food Services (SPFS) into digital libraries.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Soft FM Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Soft FM Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Zero-Waste Corporate Dining.",
                    buttonText: "Modernize Food Service",
                    link: "/contact"
                }
            },
            // OFFERING 2.5
            {
                id: "2.5",
                title: "Integrated Pest Management Intelligence (IPMI)",
                subtitle: "Predictive pest prevention combining ecological monitoring, behavioral AI, and precision intervention minimizing chemical usage.",
                icon: Microscope,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Complaints", icon: CheckCircle2 },
                    { value: "60", suffix: "%", prefix: "↓", label: "Chemical Use", icon: Zap },
                    { value: "100", suffix: "%", label: "Audit Readiness", icon: FileCheck },
                    { value: "0", suffix: "", label: "Infestations", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Rodent Prevention",
                        features: ["Detected entry gap", "Auto-ticketed repair", "Ultrasonic deterrent active"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Chemical Reduction",
                        features: ["Precision baiting only", "70% less pesticide", "Eco-friendly site"],
                        icon: TreePine
                    },
                    {
                        title: "Seasonal Defense",
                        features: ["Monsoon alert generated", "Prevention intensity up", "No seasonal spike"],
                        icon: Activity
                    },
                    {
                        title: "Audit Compliance",
                        features: ["Digital trap logs", "HACCP reports ready", "Instant regulator approval"],
                        icon: FileCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Integrated Pest Management Intelligence (IPMI) is made seamless by our fully trained and certified deployment teams. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Soft FM Intelligence strategy. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Integrated Pest Management Intelligence (IPMI).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Soft FM Intelligence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Soft FM Intelligence critical events.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Integrated Pest Management Intelligence (IPMI). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Soft FM Intelligence footprint. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Integrated Pest Management Intelligence (IPMI) requires deep insight and careful architectural planning. By developing bespoke maturity models, we ensure your organization scales effectively within the Soft FM Intelligence sector. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Integrated Pest Management Intelligence (IPMI) capabilities.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Integrated Pest Management Intelligence (IPMI).",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Integrated Pest Management Intelligence (IPMI) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Integrated Pest Management Intelligence (IPMI) data streams. We harmonize legacy applications with modern cloud-native architectures prevalent in Soft FM Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Soft FM Intelligence data flows.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Soft FM Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Integrated Pest Management Intelligence (IPMI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Soft FM Intelligence assets. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Soft FM Intelligence contexts.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Soft FM Intelligence workflows instantly.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Integrated Pest Management Intelligence (IPMI). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Soft FM Intelligence networks. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Soft FM Intelligence components.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Integrated Pest Management Intelligence (IPMI), ensuring it is fully optimized before you take over. Our experts lead intense, hands-on training regimens to completely upskill your internal Soft FM Intelligence teams. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Integrated Pest Management Intelligence (IPMI) ecosystem.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Integrated Pest Management Intelligence (IPMI). Using intelligent ontologies, we structure vast amounts of raw documentation generated by Soft FM Intelligence facilities. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Integrated Pest Management Intelligence (IPMI) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Soft FM Intelligence problems in natural language for exact solutions.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Soft FM Intelligence database.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Smarter, Safer Pest Control.",
                    buttonText: "Secure Perimeter",
                    link: "/contact"
                }
            },
            // OFFERING 2.6
            {
                id: "2.6",
                title: "Fabric & Interior Asset Care (FIAC)",
                subtitle: "Intelligent maintenance of soft assets (furnishings, carpets, curtains, artwork) extending aesthetic life and preserving capital investment.",
                icon: Factory,
                stats: [
                    { value: "40", suffix: "%", prefix: "↑", label: "Asset Lifespan", icon: Clock },
                    { value: "25", suffix: "%", prefix: "↓", label: "CapEx", icon: Database },
                    { value: "100", suffix: "%", label: "Brand Standard", icon: CheckCircle2 },
                    { value: "0", suffix: "", label: "Unexpected Fails", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Upholstery Rescue",
                        features: ["Detected fading early", "UV film applied", "Replacement deferred 2 yrs"],
                        icon: Settings
                    },
                    {
                        title: "Carpet Restoration",
                        features: ["Deep extraction scheduled", "Wear pattern analyzed", "Life extended 30%"],
                        icon: RotateCcw
                    },
                    {
                        title: "Artwork Protection",
                        features: ["Humidity control verified", "Vibration sensors active", "Value preserved"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Sustainable Refresh",
                        features: ["Reupholstery selected", "Avoided landfill", "Cost efficient update"],
                        icon: TreePine
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Fabric & Interior Asset Care (FIAC). They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Soft FM Intelligence. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Fabric & Interior Asset Care (FIAC).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Fabric & Interior Asset Care (FIAC).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Fabric & Interior Asset Care (FIAC)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Fabric & Interior Asset Care (FIAC), operational risks are shifted away from your balance sheet. We deploy sophisticated remote monitoring and local site management aligned with Soft FM Intelligence best practices. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Soft FM Intelligence expectations.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Soft FM Intelligence.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Fabric & Interior Asset Care (FIAC)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Fabric & Interior Asset Care (FIAC) requires deep insight and careful architectural planning. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Soft FM Intelligence. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Fabric & Interior Asset Care (FIAC) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Fabric & Interior Asset Care (FIAC) deployment. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Soft FM Intelligence data requirements. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Fabric & Interior Asset Care (FIAC) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Soft FM Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Soft FM Intelligence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Fabric & Interior Asset Care (FIAC). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Soft FM Intelligence intervention. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Fabric & Interior Asset Care (FIAC).",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Fabric & Interior Asset Care (FIAC).",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Soft FM Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Fabric & Interior Asset Care (FIAC). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Soft FM Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Fabric & Interior Asset Care (FIAC) peak states.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Fabric & Interior Asset Care (FIAC).",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Soft FM Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Fabric & Interior Asset Care (FIAC). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Soft FM Intelligence. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Fabric & Interior Asset Care (FIAC).",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Soft FM Intelligence success.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Soft FM Intelligence.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Fabric & Interior Asset Care (FIAC), preventing institutional memory loss. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Soft FM Intelligence facilities. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Soft FM Intelligence maintenance procedures.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Soft FM Intelligence database.",
                            "NLP-Driven Search Architectures: Querying complex Soft FM Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Preserve Your Interior Assets.",
                    buttonText: "Start Asset Care",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "energy-sustainability",
        type: "facility-management",
        title: "Energy & Sustainability Intelligence",
        subtitle: "Self-Optimizing Decarbonization Platform",
        heroSlides: [
            {
                badge: "ESG Intelligence",
                title: "Energy &",
                highlight: "Sustainability",
                description: "Autonomous energy harvesting and carbon footprint optimization.",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            },
            {
                badge: "Cloud-Grid Sync",
                title: "Renewable",
                highlight: "Integration",
                description: "Machine-learning driven grid management and battery storage optimization.",
                image: "https://images.unsplash.com/photo-1466611653911-95282fc365d5?auto=format&fit=crop&q=80"
            },
            {
                badge: "Net Zero",
                title: "Decarbonization",
                highlight: "Pathways",
                description: "Real-time scope 1, 2, and 3 emissions tracking and active reduction.",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 3.1
            {
                id: "3.1",
                title: "AI-Native Energy Optimization Engine (AI-EOE)",
                subtitle: "Real-time energy system optimization achieving continuous efficiency improvement through machine learning-driven control strategies.",
                icon: Zap,
                stats: [
                    { value: "23", suffix: "%", prefix: "↓", label: "Energy Savings", icon: Activity },
                    { value: "40", suffix: "%", prefix: "↓", label: "Peak Demand", icon: TrendingUp },
                    { value: "15", suffix: "%", prefix: "↑", label: "Renewable Usage", icon: Globe },
                    { value: "12", suffix: "%", prefix: "↓", label: "Plug Loads", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Peak Saving",
                        features: ["Discharged battery 6-10PM", "Pre-cooled building", "Saved ₹3/kWh"],
                        icon: Activity
                    },
                    {
                        title: "Load Shifting",
                        features: ["Charged EVs 10AM-2PM", "Maximized solar self-use", "Reduced grid drift"],
                        icon: Zap
                    },
                    {
                        title: "HVAC Optimization",
                        features: ["MPC control strategy", "29% consumption cut", "Comfort maintained"],
                        icon: Settings
                    },
                    {
                        title: "Lighting Control",
                        features: ["Daylight harvesting", "Occupancy dimming", "33% energy reduction"],
                        icon: Brain
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of AI-Native Energy Optimization Engine (AI-EOE) requires a workforce possessing highly specialized technical acumen. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Energy & Sustainability Intelligence strategy. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Energy & Sustainability Intelligence industry curves.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within AI-Native Energy Optimization Engine (AI-EOE).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Energy & Sustainability Intelligence critical events.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Energy & Sustainability Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering AI-Native Energy Optimization Engine (AI-EOE). Our proactive diagnostic frameworks identify anomalies within your Energy & Sustainability Intelligence infrastructure before they cause downtime. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Energy & Sustainability Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Energy & Sustainability Intelligence.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of AI-Native Energy Optimization Engine (AI-EOE) by leveraging our customized assessment and strategic blueprinting. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Energy & Sustainability Intelligence goals. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced AI-Native Energy Optimization Engine (AI-EOE) capabilities.",
                            "Compliance Auditing: Ensuring your Energy & Sustainability Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to AI-Native Energy Optimization Engine (AI-EOE).",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Energy & Sustainability Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your AI-Native Energy Optimization Engine (AI-EOE) deployment. We harmonize legacy applications with modern cloud-native architectures prevalent in Energy & Sustainability Intelligence operations. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Energy & Sustainability Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Middleware Orchestration: Advanced translation layers handling complex Energy & Sustainability Intelligence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge AI-Native Energy Optimization Engine (AI-EOE). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Energy & Sustainability Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Energy & Sustainability Intelligence workflows instantly.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage AI-Native Energy Optimization Engine (AI-EOE). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Energy & Sustainability Intelligence safety thresholds. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Energy & Sustainability Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for AI-Native Energy Optimization Engine (AI-EOE) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of AI-Native Energy Optimization Engine (AI-EOE). Our experts lead intense, hands-on training regimens to completely upskill your internal Energy & Sustainability Intelligence teams. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Energy & Sustainability Intelligence.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning AI-Native Energy Optimization Engine (AI-EOE). Using intelligent ontologies, we structure vast amounts of raw documentation generated by Energy & Sustainability Intelligence facilities. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent AI-Native Energy Optimization Engine (AI-EOE) updates instantly across the grid.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Video Process Documentation: High-quality visual recordings of critical Energy & Sustainability Intelligence maintenance procedures.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to AI-Native Energy Optimization Engine (AI-EOE) into digital libraries.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Energy & Sustainability Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Stop Wasting Energy.",
                    buttonText: "Optimize Energy Now",
                    link: "/contact"
                }
            },
            // OFFERING 3.2
            {
                id: "3.2",
                title: "Carbon Intelligence & Climate Risk Platform (CICRP)",
                subtitle: "Comprehensive carbon accounting, climate risk assessment, and decarbonization pathway management aligned with global standards.",
                icon: Globe,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Reporting Effort", icon: FileCheck },
                    { value: "14", suffix: "%", prefix: "↓", label: "Emissions Gap", icon: TrendingUp },
                    { value: "100", suffix: "%", label: "Compliance", icon: ShieldCheck },
                    { value: "15", suffix: "%", prefix: "↓", label: "Cost of Capital", icon: Database }
                ],
                portfolio: [
                    {
                        title: "Scope 3 Tracking",
                        features: ["Automated procurement scan", "Supplier engagement", "1250 tCO2e mapped"],
                        icon: Database
                    },
                    {
                        title: "Gap Analysis",
                        features: ["Identified 14% target gap", "Chiller retrofit plan", "PPA sourcing started"],
                        icon: Target
                    },
                    {
                        title: "Risk Mapping",
                        features: ["Flood risk quantified", "Heat stress modeled", "Adaptation plan ready"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Project Finance",
                        features: ["Internal carbon price set", "RoI recalculated", "Green capex approved"],
                        icon: TrendingUp
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Carbon Intelligence & Climate Risk Platform (CICRP) is made seamless by our fully trained and certified deployment teams. We rigorously select and continuously train our staff to align with the advanced requirements of the Energy & Sustainability Intelligence sector. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Carbon Intelligence & Climate Risk Platform (CICRP).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Energy & Sustainability Intelligence industry curves.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Carbon Intelligence & Climate Risk Platform (CICRP) deployments.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Carbon Intelligence & Climate Risk Platform (CICRP) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Energy & Sustainability Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Energy & Sustainability Intelligence expectations.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Carbon Intelligence & Climate Risk Platform (CICRP).",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Carbon Intelligence & Climate Risk Platform (CICRP) requires deep insight and careful architectural planning. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Energy & Sustainability Intelligence goals. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Energy & Sustainability Intelligence.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Carbon Intelligence & Climate Risk Platform (CICRP) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Energy & Sustainability Intelligence technological transitions.",
                            "Compliance Auditing: Ensuring your Energy & Sustainability Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Carbon Intelligence & Climate Risk Platform (CICRP) deployment. We harmonize legacy applications with modern cloud-native architectures prevalent in Energy & Sustainability Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Energy & Sustainability Intelligence requirements.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Carbon Intelligence & Climate Risk Platform (CICRP). Our neural networks simulate thousands of permutations instantly to solve complex Energy & Sustainability Intelligence scheduling and resource issues. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Carbon Intelligence & Climate Risk Platform (CICRP).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Energy & Sustainability Intelligence workflows instantly.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Energy & Sustainability Intelligence contexts.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Carbon Intelligence & Climate Risk Platform (CICRP). It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Energy & Sustainability Intelligence ecosystem. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Carbon Intelligence & Climate Risk Platform (CICRP).",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Energy & Sustainability Intelligence components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Energy & Sustainability Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Carbon Intelligence & Climate Risk Platform (CICRP). We craft intricate operating playbooks, meticulously documenting every procedure required for Energy & Sustainability Intelligence success. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Energy & Sustainability Intelligence.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Carbon Intelligence & Climate Risk Platform (CICRP), preventing institutional memory loss. Our systems allow technicians to query complex Energy & Sustainability Intelligence issues in natural language and receive instant, exact procedures. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Energy & Sustainability Intelligence maintenance procedures.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Carbon Intelligence & Climate Risk Platform (CICRP) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Energy & Sustainability Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Master Your Carbon Footprint.",
                    buttonText: "Start Decarbonization",
                    link: "/contact"
                }
            },
            // OFFERING 3.3
            {
                id: "3.3",
                title: "Renewable Energy & Microgrid Intelligence (REMI)",
                subtitle: "Autonomous renewable energy system management integrating generation forecasting, storage optimization, and grid-interactive controls.",
                icon: Zap,
                stats: [
                    { value: "25", suffix: "%", prefix: "↑", label: "RE Ratio", icon: Globe },
                    { value: "35", suffix: "%", prefix: "↓", label: "Diesel Usage", icon: Droplets },
                    { value: "12", suffix: "%", prefix: "↑", label: "Battery Life", icon: Activity },
                    { value: "100", suffix: "%", label: "Uptime", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Forecast Integration",
                        features: ["Predicted cloud cover", "Deferred morning loads", "Avoided grid spike"],
                        icon: Clock
                    },
                    {
                        title: "Battery Health",
                        features: ["Cycle life optimized", "Degradation slowed", "Second-life planning"],
                        icon: Activity
                    },
                    {
                        title: "Grid Services",
                        features: ["Frequency regulation bid", "Revenue generation", "Auto-dispatch"],
                        icon: TrendingUp
                    },
                    {
                        title: "Hybrid Control",
                        features: ["Solar-Diesel sync", "Min-loading avoided", "Fuel saved"],
                        icon: Settings
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Renewable Energy & Microgrid Intelligence (REMI) implementation. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Energy & Sustainability Intelligence strategy. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Renewable Energy & Microgrid Intelligence (REMI).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Renewable Energy & Microgrid Intelligence (REMI) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Renewable Energy & Microgrid Intelligence (REMI).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Energy & Sustainability Intelligence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Renewable Energy & Microgrid Intelligence (REMI) guarantees strict adherence to performance metrics. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Energy & Sustainability Intelligence footprint. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Energy & Sustainability Intelligence.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Energy & Sustainability Intelligence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Renewable Energy & Microgrid Intelligence (REMI) requires deep insight and careful architectural planning. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Energy & Sustainability Intelligence goals. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Energy & Sustainability Intelligence.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Renewable Energy & Microgrid Intelligence (REMI).",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Renewable Energy & Microgrid Intelligence (REMI) communicates natively with your central platforms. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Energy & Sustainability Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Renewable Energy & Microgrid Intelligence (REMI) modules.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Renewable Energy & Microgrid Intelligence (REMI).",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Energy & Sustainability Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Energy & Sustainability Intelligence data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Renewable Energy & Microgrid Intelligence (REMI). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Energy & Sustainability Intelligence. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Energy & Sustainability Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Energy & Sustainability Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Renewable Energy & Microgrid Intelligence (REMI) are completed with absolute zero latency. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Energy & Sustainability Intelligence safety thresholds. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Renewable Energy & Microgrid Intelligence (REMI).",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Renewable Energy & Microgrid Intelligence (REMI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Energy & Sustainability Intelligence. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Energy & Sustainability Intelligence.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Energy & Sustainability Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Renewable Energy & Microgrid Intelligence (REMI). Our systems allow technicians to query complex Energy & Sustainability Intelligence issues in natural language and receive instant, exact procedures. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Energy & Sustainability Intelligence database.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Maximize Your Renewables.",
                    buttonText: "Optimize Microgrid",
                    link: "/contact"
                }
            },
            // OFFERING 3.4
            {
                id: "3.4",
                title: "Water Intelligence & Aquatic Sustainability (WIAS)",
                subtitle: "Comprehensive water stewardship combining demand optimization, quality assurance, and circular water management.",
                icon: Droplets,
                stats: [
                    { value: "30", suffix: "%", prefix: "↓", label: "Consumption", icon: TrendingUp },
                    { value: "45", suffix: "%", prefix: "↓", label: "Leakage Loss", icon: AlertTriangle },
                    { value: "100", suffix: "%", label: "Compliance", icon: FileCheck },
                    { value: "94", suffix: "%", label: "Leak ID Rate", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Leak Pinpointed",
                        features: ["Night flow anomaly", "Acoustic sensor deployed", "Found 2.3m deep leak"],
                        icon: Target
                    },
                    {
                        title: "Quality Control",
                        features: ["Real-time turbidity check", "Chlorine dosing auto-adjusted", "Safety assured"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Circular Water",
                        features: ["Greywater recycled", "Zero liquid discharge", "Aquifer recharged"],
                        icon: Recycle
                    },
                    {
                        title: "Drought Defense",
                        features: ["Supply risk modeled", "Restrictions automated", "Reserves managed"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Water Intelligence & Aquatic Sustainability (WIAS) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Energy & Sustainability Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Water Intelligence & Aquatic Sustainability (WIAS).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Water Intelligence & Aquatic Sustainability (WIAS).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Water Intelligence & Aquatic Sustainability (WIAS) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Water Intelligence & Aquatic Sustainability (WIAS) to our team with a robust, outcome-based partnership. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Energy & Sustainability Intelligence footprint. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Water Intelligence & Aquatic Sustainability (WIAS).",
                            "Preventative Incident Management: Identifying anomalies before they mature into Energy & Sustainability Intelligence disruptions.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Energy & Sustainability Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Water Intelligence & Aquatic Sustainability (WIAS) requires deep insight and careful architectural planning. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Energy & Sustainability Intelligence. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Energy & Sustainability Intelligence.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Water Intelligence & Aquatic Sustainability (WIAS) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Water Intelligence & Aquatic Sustainability (WIAS) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Water Intelligence & Aquatic Sustainability (WIAS) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Energy & Sustainability Intelligence data requirements. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Energy & Sustainability Intelligence requirements.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Water Intelligence & Aquatic Sustainability (WIAS). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Energy & Sustainability Intelligence intervention. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Energy & Sustainability Intelligence assets.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Energy & Sustainability Intelligence workflows instantly.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Water Intelligence & Aquatic Sustainability (WIAS)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Water Intelligence & Aquatic Sustainability (WIAS) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Energy & Sustainability Intelligence. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Energy & Sustainability Intelligence components.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Water Intelligence & Aquatic Sustainability (WIAS) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Water Intelligence & Aquatic Sustainability (WIAS) with our comprehensive implementation and handover framework. Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Energy & Sustainability Intelligence. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Water Intelligence & Aquatic Sustainability (WIAS) ecosystem.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Energy & Sustainability Intelligence success.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Water Intelligence & Aquatic Sustainability (WIAS). We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Energy & Sustainability Intelligence expertise. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Energy & Sustainability Intelligence problems in natural language for exact solutions.",
                            "Video Process Documentation: High-quality visual recordings of critical Energy & Sustainability Intelligence maintenance procedures.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Water Intelligence & Aquatic Sustainability (WIAS) updates instantly across the grid.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Every Drop Counts.",
                    buttonText: "Start Water Stewardship",
                    link: "/contact"
                }
            },
            // OFFERING 3.5
            {
                id: "3.5",
                title: "Waste Intelligence & Circular Economy (WICE)",
                subtitle: "AI-driven waste valorization transforming cost center into revenue stream through precision segregation, process optimization, and marketplace integration.",
                icon: Recycle,
                stats: [
                    { value: "40", suffix: "%", prefix: "↓", label: "Mgmt Costs", icon: Database },
                    { value: "15", suffix: "%", prefix: "↑", label: "Revenue Recovery", icon: TrendingUp },
                    { value: "90", suffix: "%", prefix: "↓", label: "Landfill Use", icon: TreePine },
                    { value: "99.2", suffix: "%", label: "Sort Accuracy", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Logistics Optimization",
                        features: ["Route optimization", "Skipped empty pickups", "Saved ₹3200/mo"],
                        icon: Truck
                    },
                    {
                        title: "Revenue Generation",
                        features: ["Purity improved 5%", "Matched with buyer", "Available premium price"],
                        icon: TrendingUp
                    },
                    {
                        title: "Regulatory Compliance",
                        features: ["EPR credits tracked", "Audit trail generated", "Fines avoided"],
                        icon: FileCheck
                    },
                    {
                        title: "Industrial Symbiosis",
                        features: ["Byproduct mapped", "Local partner found", "Disposal cost zeroed"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Waste Intelligence & Circular Economy (WICE) implementation. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Energy & Sustainability Intelligence strategy. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Energy & Sustainability Intelligence industry curves.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Waste Intelligence & Circular Economy (WICE).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Waste Intelligence & Circular Economy (WICE) guarantees strict adherence to performance metrics. Our proactive diagnostic frameworks identify anomalies within your Energy & Sustainability Intelligence infrastructure before they cause downtime. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Energy & Sustainability Intelligence disruptions.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Energy & Sustainability Intelligence.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Waste Intelligence & Circular Economy (WICE) advisory tier. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Energy & Sustainability Intelligence portfolio. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Compliance Auditing: Ensuring your Energy & Sustainability Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Waste Intelligence & Circular Economy (WICE).",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Waste Intelligence & Circular Economy (WICE) capabilities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Waste Intelligence & Circular Economy (WICE) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Waste Intelligence & Circular Economy (WICE) with your wider network. Every integration point is rigorously stress-tested against the operational parameters of your Energy & Sustainability Intelligence environment. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Energy & Sustainability Intelligence requirements.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Middleware Orchestration: Advanced translation layers handling complex Energy & Sustainability Intelligence data flows.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Waste Intelligence & Circular Economy (WICE) modules."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Waste Intelligence & Circular Economy (WICE) with our AI backbone, we enable predictive forecasting rather than historical reporting. The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Energy & Sustainability Intelligence. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Waste Intelligence & Circular Economy (WICE).",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Energy & Sustainability Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Waste Intelligence & Circular Economy (WICE) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Energy & Sustainability Intelligence. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Waste Intelligence & Circular Economy (WICE) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Waste Intelligence & Circular Economy (WICE). Our experts lead intense, hands-on training regimens to completely upskill your internal Energy & Sustainability Intelligence teams. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Energy & Sustainability Intelligence success.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Waste Intelligence & Circular Economy (WICE) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Our systems allow technicians to query complex Energy & Sustainability Intelligence issues in natural language and receive instant, exact procedures. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Energy & Sustainability Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Energy & Sustainability Intelligence maintenance procedures.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Waste Intelligence & Circular Economy (WICE) into digital libraries.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Turn Waste into Revenue.",
                    buttonText: "Enable Circular Economy",
                    link: "/contact"
                }
            },
            // OFFERING 3.6
            {
                id: "3.6",
                title: "Biodiversity & Ecosystem Intelligence (BEI)",
                subtitle: "Technology-enabled biodiversity management integrating ecological monitoring, habitat optimization, and nature-based solution quantification.",
                icon: Leaf,
                stats: [
                    { value: "100", suffix: "%", prefix: "↑", label: "Net Gain", icon: Sprout },
                    { value: "15", suffix: "%", prefix: "↓", label: "Landscape Cost", icon: Database },
                    { value: "127", suffix: "", label: "Species Tracked", icon: Microscope },
                    { value: "2", suffix: " notches", prefix: "↑", label: "ESG Rating", icon: TrendingUp }
                ],
                portfolio: [
                    {
                        title: "Pollinator Pathway",
                        features: ["Native plants planted", "Hotel placed optimally", "Abundance up 35%"],
                        icon: Sprout
                    },
                    {
                        title: "Cost Saving",
                        features: ["No-mow zone set", "Maintenance reduced", "Saved ₹1.8L/yr"],
                        icon: Database
                    },
                    {
                        title: "Invasive Alert",
                        features: ["Bioacoustic detection", "Early warning sent", "Spread prevented"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Wellness Impact",
                        features: ["Biophilic design", "Stress reduction linked", "Employee sat up"],
                        icon: Activity
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Biodiversity & Ecosystem Intelligence (BEI) is made seamless by our fully trained and certified deployment teams. We rigorously select and continuously train our staff to align with the advanced requirements of the Energy & Sustainability Intelligence sector. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Biodiversity & Ecosystem Intelligence (BEI).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Energy & Sustainability Intelligence critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Energy & Sustainability Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Biodiversity & Ecosystem Intelligence (BEI), operational risks are shifted away from your balance sheet. We deploy sophisticated remote monitoring and local site management aligned with Energy & Sustainability Intelligence best practices. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Biodiversity & Ecosystem Intelligence (BEI).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Biodiversity & Ecosystem Intelligence (BEI)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Biodiversity & Ecosystem Intelligence (BEI) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Energy & Sustainability Intelligence workflows. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Energy & Sustainability Intelligence.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Biodiversity & Ecosystem Intelligence (BEI).",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Biodiversity & Ecosystem Intelligence (BEI) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Biodiversity & Ecosystem Intelligence (BEI) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Biodiversity & Ecosystem Intelligence (BEI) communicates natively with your central platforms. Through advanced middleware development, we translate disparate protocols into a unified Energy & Sustainability Intelligence language. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Biodiversity & Ecosystem Intelligence (BEI)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Biodiversity & Ecosystem Intelligence (BEI) with our AI backbone, we enable predictive forecasting rather than historical reporting. It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Energy & Sustainability Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Biodiversity & Ecosystem Intelligence (BEI).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Energy & Sustainability Intelligence contexts.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Biodiversity & Ecosystem Intelligence (BEI) are completed with absolute zero latency. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Energy & Sustainability Intelligence networks. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Biodiversity & Ecosystem Intelligence (BEI) peak states.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Biodiversity & Ecosystem Intelligence (BEI). We craft intricate operating playbooks, meticulously documenting every procedure required for Energy & Sustainability Intelligence success. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Energy & Sustainability Intelligence success.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Biodiversity & Ecosystem Intelligence (BEI).",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Biodiversity & Ecosystem Intelligence (BEI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Integrated learning management tools continuously certify your staff on the latest Energy & Sustainability Intelligence methodologies. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "NLP-Driven Search Architectures: Querying complex Energy & Sustainability Intelligence problems in natural language for exact solutions.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Biodiversity & Ecosystem Intelligence (BEI) updates instantly across the grid."
                        ]
                    }
                ],


                cta: {
                    text: "Invest in Nature.",
                    buttonText: "Enhance Biodiversity",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "space-workplace",
        type: "facility-management",
        title: "Space & Workplace Intelligence",
        subtitle: "Autonomous Environment Adaptation",
        heroSlides: [
            {
                badge: "Occupancy Intelligence",
                title: "Space &",
                highlight: "Workplace",
                description: "Dynamic layout optimization using real-time employee behavioral flows.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            },
            {
                badge: "Smart Desking",
                title: "Adaptive",
                highlight: "Workspaces",
                description: "IoT-linked booking and personalized environmental controls.",
                image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
            },
            {
                badge: "Community Flow",
                title: "Social",
                highlight: "Analytics",
                description: "Measure and enhance workplace culture through spatial interaction data.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 4.1
            {
                id: "4.1",
                title: "Dynamic Space Optimization Platform (DSOP)",
                subtitle: "Real-time space reconfiguration based on occupancy patterns, activity-based working needs, and organizational rhythm intelligence.",
                icon: Layout,
                stats: [
                    { value: "45", suffix: "%", prefix: "↑", label: "Utilization", icon: TrendingUp },
                    { value: "30", suffix: "%", prefix: "↓", label: "RE Cost/Emp", icon: Database },
                    { value: "25", suffix: "%", prefix: "↑", label: "Emp Satisfaction", icon: Users },
                    { value: "100", suffix: "%", label: "Space Agility", icon: Activity }
                ],
                portfolio: [
                    {
                        title: "Town Hall Flex",
                        features: ["Walls auto-retracted", "Capacity boosted to 350", "HVAC pre-cooled"],
                        icon: Layout
                    },
                    {
                        title: "Focus Protection",
                        features: ["Detected noise spike", "Relocated quiet work", "Maintained productivity"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Peak Management",
                        features: ["Cafeteria queue alert", "Signage redirected flow", "Wait time < 5min"],
                        icon: Clock
                    },
                    {
                        title: "Cost Avoidance",
                        features: ["Lease expansion avoided", "Restacked existing floor", "Saved ₹4.2Cr"],
                        icon: Database
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Dynamic Space Optimization Platform (DSOP). By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Space & Workplace Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Space & Workplace Intelligence critical events.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Space & Workplace Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Dynamic Space Optimization Platform (DSOP). We deploy sophisticated remote monitoring and local site management aligned with Space & Workplace Intelligence best practices. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Dynamic Space Optimization Platform (DSOP).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Space & Workplace Intelligence disruptions.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Dynamic Space Optimization Platform (DSOP) into your legacy enterprise. By developing bespoke maturity models, we ensure your organization scales effectively within the Space & Workplace Intelligence sector. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Space & Workplace Intelligence technological transitions.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Dynamic Space Optimization Platform (DSOP).",
                            "Compliance Auditing: Ensuring your Space & Workplace Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Dynamic Space Optimization Platform (DSOP) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Space & Workplace Intelligence data requirements. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Dynamic Space Optimization Platform (DSOP) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Space & Workplace Intelligence network.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Dynamic Space Optimization Platform (DSOP) with our AI backbone, we enable predictive forecasting rather than historical reporting. Our neural networks simulate thousands of permutations instantly to solve complex Space & Workplace Intelligence scheduling and resource issues. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Dynamic Space Optimization Platform (DSOP).",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Dynamic Space Optimization Platform (DSOP) interventions happen at machine speed, autonomously. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Space & Workplace Intelligence. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Dynamic Space Optimization Platform (DSOP) peak states.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Space & Workplace Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Dynamic Space Optimization Platform (DSOP). We craft intricate operating playbooks, meticulously documenting every procedure required for Space & Workplace Intelligence success. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Space & Workplace Intelligence success.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Space & Workplace Intelligence.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Dynamic Space Optimization Platform (DSOP) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Dynamic Space Optimization Platform (DSOP) is only half the battle; ensuring your team has instantaneous access to solutions is the other. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Space & Workplace Intelligence expertise. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Space & Workplace Intelligence database.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Dynamic Space Optimization Platform (DSOP) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Space & Workplace Intelligence problems in natural language for exact solutions."
                        ]
                    }
                ],


                cta: {
                    text: "Make Your Space Adaptive.",
                    buttonText: "Optimize Real Estate",
                    link: "/contact"
                }
            },
            // OFFERING 4.2
            {
                id: "4.2",
                title: "Smart Meeting & Collaboration Ecosystem (SMCE)",
                subtitle: "Intelligent meeting space management integrating technology orchestration, service automation, and collaboration analytics.",
                icon: MessageSquare,
                stats: [
                    { value: "35", suffix: "%", prefix: "↑", label: "Productivity", icon: TrendingUp },
                    { value: "50", suffix: "%", prefix: "↓", label: "AV Support", icon: Settings },
                    { value: "20", suffix: "%", prefix: "↓", label: "Catering Waste", icon: Recycle },
                    { value: "0", suffix: "min", label: "Setup Time", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Autonomous Setup",
                        features: ["Room pre-configured", "Teams join ready", "Lighting presentation-mode"],
                        icon: Zap
                    },
                    {
                        title: "Friction Free",
                        features: ["Detected bad mic", "Auto-switched backup", "Meeting uninterrupted"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Smart Services",
                        features: ["Coffee staged to pref", "Dietary restrictions met", "Waste eliminated"],
                        icon: Utensils
                    },
                    {
                        title: "Post-Meeting AI",
                        features: ["Minutes auto-generated", "Action items extracted", "Room reset scheduled"],
                        icon: FileCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Smart Meeting & Collaboration Ecosystem (SMCE) requires a workforce possessing highly specialized technical acumen. We rigorously select and continuously train our staff to align with the advanced requirements of the Space & Workplace Intelligence sector. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Smart Meeting & Collaboration Ecosystem (SMCE) deployments.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Smart Meeting & Collaboration Ecosystem (SMCE).",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Smart Meeting & Collaboration Ecosystem (SMCE).",
                            "Process Adherence: Meticulous execution of standard operating procedures for Space & Workplace Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Smart Meeting & Collaboration Ecosystem (SMCE). We deploy sophisticated remote monitoring and local site management aligned with Space & Workplace Intelligence best practices. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Space & Workplace Intelligence disruptions.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Smart Meeting & Collaboration Ecosystem (SMCE).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Smart Meeting & Collaboration Ecosystem (SMCE)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Smart Meeting & Collaboration Ecosystem (SMCE) by leveraging our customized assessment and strategic blueprinting. By developing bespoke maturity models, we ensure your organization scales effectively within the Space & Workplace Intelligence sector. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Smart Meeting & Collaboration Ecosystem (SMCE) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Smart Meeting & Collaboration Ecosystem (SMCE) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Space & Workplace Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Smart Meeting & Collaboration Ecosystem (SMCE) communicates natively with your central platforms. Our process encompasses zero-trust security postures, ensuring data integrity across the Space & Workplace Intelligence spectrum. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Space & Workplace Intelligence requirements.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Space & Workplace Intelligence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Smart Meeting & Collaboration Ecosystem (SMCE)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Smart Meeting & Collaboration Ecosystem (SMCE). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Space & Workplace Intelligence intervention. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Smart Meeting & Collaboration Ecosystem (SMCE).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Smart Meeting & Collaboration Ecosystem (SMCE). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Space & Workplace Intelligence. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Smart Meeting & Collaboration Ecosystem (SMCE) peak states.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Smart Meeting & Collaboration Ecosystem (SMCE).",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Smart Meeting & Collaboration Ecosystem (SMCE). Our experts lead intense, hands-on training regimens to completely upskill your internal Space & Workplace Intelligence teams. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Space & Workplace Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Smart Meeting & Collaboration Ecosystem (SMCE) are permanently codified. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Space & Workplace Intelligence expertise. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Space & Workplace Intelligence problems in natural language for exact solutions.",
                            "Video Process Documentation: High-quality visual recordings of critical Space & Workplace Intelligence maintenance procedures.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Smart Meeting & Collaboration Ecosystem (SMCE) updates instantly across the grid.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "End Unproductive Meetings.",
                    buttonText: "Upgrade Collaboration",
                    link: "/contact"
                }
            },
            // OFFERING 4.3
            {
                id: "4.3",
                title: "Acoustic & Environmental Comfort Intelligence (AECI)",
                subtitle: "Precision environmental control optimizing acoustic comfort, air quality, lighting, and thermal conditions for cognitive performance.",
                icon: Mic2,
                stats: [
                    { value: "20", suffix: "%", prefix: "↑", label: "Cognitive Perf", icon: Brain },
                    { value: "30", suffix: "%", prefix: "↓", label: "Complaints", icon: MessageSquare },
                    { value: "15", suffix: "%", prefix: "↓", label: "Sick Leave", icon: Activity },
                    { value: "100", suffix: "%", label: "Wellness", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Focus Protection",
                        features: ["Sound masking active", "Speech privacy secured", "Distractions reduced"],
                        icon: Lock
                    },
                    {
                        title: "Thermal Comfort",
                        features: ["Complaint trend detected", "Set point adjusted -1°C", "Feedback positive"],
                        icon: Activity
                    },
                    {
                        title: "Air Quality Boost",
                        features: ["CO2 spike detected", "Ventilation increased", "Alertness maintained"],
                        icon: Zap
                    },
                    {
                        title: "Circadian Rhythm",
                        features: ["Afternoon light boosted", "Melanopic lux optimized", "Energy slump avoided"],
                        icon: Clock
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Acoustic & Environmental Comfort Intelligence (AECI) is made seamless by our fully trained and certified deployment teams. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Space & Workplace Intelligence. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Acoustic & Environmental Comfort Intelligence (AECI) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Space & Workplace Intelligence industry curves.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Space & Workplace Intelligence.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Acoustic & Environmental Comfort Intelligence (AECI).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Acoustic & Environmental Comfort Intelligence (AECI). Our proactive diagnostic frameworks identify anomalies within your Space & Workplace Intelligence infrastructure before they cause downtime. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Space & Workplace Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Acoustic & Environmental Comfort Intelligence (AECI) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Space & Workplace Intelligence workflows. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Compliance Auditing: Ensuring your Space & Workplace Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Space & Workplace Intelligence.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Acoustic & Environmental Comfort Intelligence (AECI) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Acoustic & Environmental Comfort Intelligence (AECI) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Acoustic & Environmental Comfort Intelligence (AECI) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Space & Workplace Intelligence environment. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Space & Workplace Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Space & Workplace Intelligence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Acoustic & Environmental Comfort Intelligence (AECI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Space & Workplace Intelligence assets. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Space & Workplace Intelligence contexts.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Space & Workplace Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Acoustic & Environmental Comfort Intelligence (AECI). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Space & Workplace Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Space & Workplace Intelligence.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Space & Workplace Intelligence components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Acoustic & Environmental Comfort Intelligence (AECI)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Acoustic & Environmental Comfort Intelligence (AECI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Space & Workplace Intelligence. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Acoustic & Environmental Comfort Intelligence (AECI) ecosystem.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Acoustic & Environmental Comfort Intelligence (AECI). Standard Operating Procedures become living digital documents, evolving alongside your Space & Workplace Intelligence infrastructure. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Space & Workplace Intelligence database.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Acoustic & Environmental Comfort Intelligence (AECI) updates instantly across the grid.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Boost Human Performance.",
                    buttonText: "Optimize Comfort",
                    link: "/contact"
                }
            },
            // OFFERING 4.4
            {
                id: "4.4",
                title: "Workplace Technology Orchestration (WTO)",
                subtitle: "Unified management of workplace technology ecosystem ensuring seamless user experience and proactive issue resolution.",
                icon: Wifi,
                stats: [
                    { value: "99.5", suffix: "%", label: "Tech Uptime", icon: Server },
                    { value: "40", suffix: "%", prefix: "↓", label: "Tech Complaints", icon: AlertTriangle },
                    { value: "25", suffix: "%", prefix: "↓", label: "IT Workload", icon: Settings },
                    { value: "100", suffix: "%", label: "User Exp", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Proactive Fix",
                        features: ["Lamp failure predicted", "Replacement scheduled", "Zero downtime"],
                        icon: Server
                    },
                    {
                        title: "WiFi Optimization",
                        features: ["Latency spike detected", "Channels balanced", "User notification sent"],
                        icon: Wifi
                    },
                    {
                        title: "Smart Procurement",
                        features: ["Toner low forecast", "Auto-order placed", "Arrived just-in-time"],
                        icon: Truck
                    },
                    {
                        title: "Onboarding Ease",
                        features: ["New hire automated", "Access & Tech ready", "Day 1 productivity"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Workplace Technology Orchestration (WTO) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Space & Workplace Intelligence initiatives. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Workplace Technology Orchestration (WTO).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Space & Workplace Intelligence industry curves.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Workplace Technology Orchestration (WTO).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Space & Workplace Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Workplace Technology Orchestration (WTO) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Space & Workplace Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Workplace Technology Orchestration (WTO).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Workplace Technology Orchestration (WTO).",
                            "Preventative Incident Management: Identifying anomalies before they mature into Space & Workplace Intelligence disruptions.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Workplace Technology Orchestration (WTO), ensuring your technological investments are future-proof. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Space & Workplace Intelligence. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Compliance Auditing: Ensuring your Space & Workplace Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Change Management: Ensuring your workforce is prepared for Space & Workplace Intelligence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Workplace Technology Orchestration (WTO) with your wider network. We harmonize legacy applications with modern cloud-native architectures prevalent in Space & Workplace Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Workplace Technology Orchestration (WTO).",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Workplace Technology Orchestration (WTO) with our AI backbone, we enable predictive forecasting rather than historical reporting. The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Space & Workplace Intelligence. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Space & Workplace Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Workplace Technology Orchestration (WTO).",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Space & Workplace Intelligence assets.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Workplace Technology Orchestration (WTO). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Space & Workplace Intelligence. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Workplace Technology Orchestration (WTO) peak states.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Space & Workplace Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Workplace Technology Orchestration (WTO) with our comprehensive implementation and handover framework. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Space & Workplace Intelligence adoption. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Workplace Technology Orchestration (WTO) ecosystem.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Space & Workplace Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Workplace Technology Orchestration (WTO), preventing institutional memory loss. Our systems allow technicians to query complex Space & Workplace Intelligence issues in natural language and receive instant, exact procedures. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Space & Workplace Intelligence problems in natural language for exact solutions.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Workplace Technology Orchestration (WTO) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Space & Workplace Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Space & Workplace Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Seamless Workplace Tech.",
                    buttonText: "Orchestrate Technology",
                    link: "/contact"
                }
            },
            // OFFERING 4.5
            {
                id: "4.5",
                title: "Real Estate Portfolio Intelligence (REPI)",
                subtitle: "Strategic real estate optimization combining utilization analytics, financial modeling, and workplace strategy advisory.",
                icon: Building2,
                stats: [
                    { value: "35", suffix: "%", prefix: "↑", label: "Portfolio Util", icon: TrendingUp },
                    { value: "20", suffix: "%", prefix: "↓", label: "RE Cost/Emp", icon: Database },
                    { value: "50", suffix: "%", prefix: "↓", label: "Lease Cycle", icon: Clock },
                    { value: "100", suffix: "%", label: "Strategic Fit", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Consolidation Wins",
                        features: ["modeled 3 scenarios", "Selected expansion opt", "Saved ₹1.4Cr/yr"],
                        icon: TrendingUp
                    },
                    {
                        title: "Hybrid Strategy",
                        features: ["Hub-and-spoke design", "Co-working integrated", "Flexibility achieved"],
                        icon: Globe
                    },
                    {
                        title: "ESG Roadmap",
                        features: ["Green retrofit plan", "Embodied carbon audit", "Certification path"],
                        icon: Leaf
                    },
                    {
                        title: "Employee Centric",
                        features: ["Commute impact analyzed", "Amenity value scored", "Retention supported"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Real Estate Portfolio Intelligence (REPI) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Space & Workplace Intelligence umbrella. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Real Estate Portfolio Intelligence (REPI).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Real Estate Portfolio Intelligence (REPI).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Space & Workplace Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Real Estate Portfolio Intelligence (REPI), operational risks are shifted away from your balance sheet. Through transparent digital dashboards, you maintain total visibility over all Space & Workplace Intelligence operations without the daily hassle. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Real Estate Portfolio Intelligence (REPI).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Space & Workplace Intelligence.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Real Estate Portfolio Intelligence (REPI) by leveraging our customized assessment and strategic blueprinting. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Space & Workplace Intelligence portfolio. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Real Estate Portfolio Intelligence (REPI) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Space & Workplace Intelligence technological transitions.",
                            "Compliance Auditing: Ensuring your Space & Workplace Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Real Estate Portfolio Intelligence (REPI) deployment.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Real Estate Portfolio Intelligence (REPI) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Space & Workplace Intelligence environment. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Real Estate Portfolio Intelligence (REPI).",
                            "Middleware Orchestration: Advanced translation layers handling complex Space & Workplace Intelligence data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Real Estate Portfolio Intelligence (REPI). The platform autonomously identifies hidden optimization pathways within your broader Space & Workplace Intelligence operational footprint. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Real Estate Portfolio Intelligence (REPI).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Space & Workplace Intelligence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Space & Workplace Intelligence assets.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Real Estate Portfolio Intelligence (REPI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Space & Workplace Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Real Estate Portfolio Intelligence (REPI).",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Space & Workplace Intelligence components.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Real Estate Portfolio Intelligence (REPI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Space & Workplace Intelligence. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Space & Workplace Intelligence success.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Real Estate Portfolio Intelligence (REPI) ecosystem.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Real Estate Portfolio Intelligence (REPI) environment. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Space & Workplace Intelligence expertise. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Space & Workplace Intelligence database.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "NLP-Driven Search Architectures: Querying complex Space & Workplace Intelligence problems in natural language for exact solutions.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Real Estate Portfolio Intelligence (REPI) into digital libraries."
                        ]
                    }
                ],


                cta: {
                    text: "Optimize Your Portfolio.",
                    buttonText: "Transform Real Estate",
                    link: "/contact"
                }
            },
            // OFFERING 4.6
            {
                id: "4.6",
                title: "Move & Change Management Intelligence (MCMI)",
                subtitle: "AI-orchestrated facility relocations and reconfigurations minimizing business disruption and employee friction.",
                icon: RefreshCw,
                stats: [
                    { value: "30", suffix: "%", prefix: "↓", label: "Move Duration", icon: Clock },
                    { value: "25", suffix: "%", prefix: "↓", label: "Relocation Cost", icon: Database },
                    { value: "85", suffix: "%", prefix: "↑", label: "Emp Satisfaction", icon: CheckCircle2 },
                    { value: "95", suffix: "%", label: "Biz Continuity", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Flawless Move",
                        features: ["400 staff relocated", "Zero IT downtime", "Weekend execution"],
                        icon: Truck
                    },
                    {
                        title: "Change Success",
                        features: ["Communication automated", "Anxiety managed", "Positive feedback"],
                        icon: MessageSquare
                    },
                    {
                        title: "Cost Containment",
                        features: ["Inventory reuse opt", "Waste minimized", "Budget under-run"],
                        icon: Database
                    },
                    {
                        title: "Lab Relocation",
                        features: ["Sensitive gear tracked", "Vendor managed", "Calibration verified"],
                        icon: Microscope
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Move & Change Management Intelligence (MCMI) implementation. Our teams act as an extension of your own, filling critical knowledge gaps within your Space & Workplace Intelligence initiatives. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Move & Change Management Intelligence (MCMI) deployments.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Move & Change Management Intelligence (MCMI).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Space & Workplace Intelligence critical events.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Move & Change Management Intelligence (MCMI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Move & Change Management Intelligence (MCMI). Through transparent digital dashboards, you maintain total visibility over all Space & Workplace Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Space & Workplace Intelligence disruptions.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Move & Change Management Intelligence (MCMI).",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Move & Change Management Intelligence (MCMI) into your legacy enterprise. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Space & Workplace Intelligence. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Space & Workplace Intelligence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Move & Change Management Intelligence (MCMI).",
                            "Compliance Auditing: Ensuring your Space & Workplace Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Move & Change Management Intelligence (MCMI) into the complex fabric of your enterprise IT and OT layers. Through advanced middleware development, we translate disparate protocols into a unified Space & Workplace Intelligence language. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Space & Workplace Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Space & Workplace Intelligence requirements."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Move & Change Management Intelligence (MCMI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Space & Workplace Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Space & Workplace Intelligence assets.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Move & Change Management Intelligence (MCMI). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Space & Workplace Intelligence networks. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Move & Change Management Intelligence (MCMI) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Space & Workplace Intelligence.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Move & Change Management Intelligence (MCMI).",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Move & Change Management Intelligence (MCMI). We establish robust governance models and audit trails that serve as your permanent Space & Workplace Intelligence operational foundation. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Move & Change Management Intelligence (MCMI).",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Space & Workplace Intelligence success.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Move & Change Management Intelligence (MCMI), preventing institutional memory loss. Integrated learning management tools continuously certify your staff on the latest Space & Workplace Intelligence methodologies. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Move & Change Management Intelligence (MCMI) into digital libraries.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Space & Workplace Intelligence database.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "NLP-Driven Search Architectures: Querying complex Space & Workplace Intelligence problems in natural language for exact solutions."
                        ]
                    }
                ],


                cta: {
                    text: "Move Without Disruption.",
                    buttonText: "Manage Relocation",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "compliance-risk",
        type: "facility-management",
        title: "Compliance & Risk Intelligence",
        subtitle: "Continuous Regulatory Surveillance",
        heroSlides: [
            {
                badge: "Risk Intelligence",
                title: "Compliance &",
                highlight: "Operational Risk",
                description: "Real-time regulatory tracking and automated risk mitigation workflows.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
            },
            {
                badge: "Legal Guard",
                title: "Regulatory",
                highlight: "Sentry",
                description: "24/7 scanning of statutory updates and automatic policy alignment.  Rigorous adherence to the strictest international security standards forms the immutable core of our comprehensive risk mitigation strategy. ",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
            },
            {
                badge: "Audit Ready",
                title: "Continuous",
                highlight: "Verification",
                description: "Blockchain-validated audit trails for multi-jurisdictional compliance.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 5.1
            {
                id: "5.1",
                title: "Autonomous Regulatory Compliance Engine (ARCE)",
                subtitle: "Real-time compliance monitoring across all regulatory domains with automated gap detection, remediation workflow, and audit-ready documentation.",
                icon: FileCheck,
                stats: [
                    { value: "70", suffix: "%", prefix: "↓", label: "Violation Risk", icon: AlertTriangle },
                    { value: "60", suffix: "%", prefix: "↓", label: "Audit Effort", icon: CheckCircle2 },
                    { value: "40", suffix: "%", prefix: "↓", label: "Penalty Exposure", icon: Database },
                    { value: "100", suffix: "%", label: "Audit Readiness", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Amendment Tracking",
                        features: ["Detected Fire Safety rule", "Identified 12 buildings", "Auto-scheduled testing"],
                        icon: FileCheck
                    },
                    {
                        title: "Vendor Qualification",
                        features: ["3 NABL labs found", "RFP auto-generated", "Cost estimated"],
                        icon: Users
                    },
                    {
                        title: "Obligation Mgmt",
                        features: ["Register updated", "Owner assigned", "Review date set"],
                        icon: Clock
                    },
                    {
                        title: "Board Reporting",
                        features: ["Status dashboard", "Investment timeline", "Risk ranked"],
                        icon: BarChart
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Autonomous Regulatory Compliance Engine (ARCE) requires a workforce possessing highly specialized technical acumen. Our teams act as an extension of your own, filling critical knowledge gaps within your Compliance & Risk Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Compliance & Risk Intelligence.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Compliance & Risk Intelligence industry curves.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Autonomous Regulatory Compliance Engine (ARCE) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Regulatory Compliance Engine (ARCE)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Autonomous Regulatory Compliance Engine (ARCE), operational risks are shifted away from your balance sheet. Through transparent digital dashboards, you maintain total visibility over all Compliance & Risk Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Autonomous Regulatory Compliance Engine (ARCE).",
                            "Preventative Incident Management: Identifying anomalies before they mature into Compliance & Risk Intelligence disruptions.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Autonomous Regulatory Compliance Engine (ARCE) requires deep insight and careful architectural planning. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Compliance & Risk Intelligence portfolio. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Compliance & Risk Intelligence.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Compliance Auditing: Ensuring your Compliance & Risk Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Autonomous Regulatory Compliance Engine (ARCE) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Compliance & Risk Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Autonomous Regulatory Compliance Engine (ARCE).",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Autonomous Regulatory Compliance Engine (ARCE). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Compliance & Risk Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Compliance & Risk Intelligence assets.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Compliance & Risk Intelligence workflows instantly.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Autonomous Regulatory Compliance Engine (ARCE)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Autonomous Regulatory Compliance Engine (ARCE) interventions happen at machine speed, autonomously. They continuously negotiate with external APIs and internal databases to dynamically route Compliance & Risk Intelligence resources. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Autonomous Regulatory Compliance Engine (ARCE) peak states.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Compliance & Risk Intelligence.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Compliance & Risk Intelligence components.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Autonomous Regulatory Compliance Engine (ARCE). We craft intricate operating playbooks, meticulously documenting every procedure required for Compliance & Risk Intelligence success. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Autonomous Regulatory Compliance Engine (ARCE).",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Autonomous Regulatory Compliance Engine (ARCE) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Integrated learning management tools continuously certify your staff on the latest Compliance & Risk Intelligence methodologies. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Autonomous Regulatory Compliance Engine (ARCE) updates instantly across the grid.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Autonomous Regulatory Compliance Engine (ARCE) into digital libraries.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Video Process Documentation: High-quality visual recordings of critical Compliance & Risk Intelligence maintenance procedures.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Compliance & Risk Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Automate Your Compliance.",
                    buttonText: "Deploy Regulatory Engine",
                    link: "/contact"
                }
            },
            // OFFERING 5.2
            {
                id: "5.2",
                title: "Fire & Life Safety Intelligence (FLSI)",
                subtitle: "Comprehensive fire safety management integrating prevention, detection, response optimization, and continuous compliance.  We deploy sophisticated crowd-management methodologies alongside real-time digital threat assessments to maintain absolute environmental control. Our unobtrusive yet ubiquitous tactical presence ensures a remarkably safe, streamlined experience for all attendees without ever compromising rigorous protection standards. With relentless round-the-clock remote monitoring and sophisticated N+1 physical redundancy designs, optimal and enduring continuity is unconditionally guaranteed.",
                icon: AlertTriangle,
                stats: [
                    { value: "85", suffix: "%", prefix: "↓", label: "Incident Prob", icon: ShieldCheck },
                    { value: "60", suffix: "%", prefix: "↓", label: "False Alarms", icon: Zap },
                    { value: "40", suffix: "%", prefix: "↓", label: "Evacuation Time", icon: Clock },
                    { value: "100", suffix: "%", label: "Compliance", icon: FileCheck }
                ],
                portfolio: [
                    {
                        title: "Electrical Risk",
                        features: ["Detected thermal anomaly", "Predicted 12% fire prob", "Dispatched verification"],
                        icon: Zap
                    },
                    {
                        title: "Load Shedding",
                        features: ["30% reduction auto-triggered", "Non-critical circuits off", "Risk mitigated"],
                        icon: Settings
                    },
                    {
                        title: "Evacuation Drill",
                        features: ["Simulated egress path", "Digital signage integrated", "Assembly point prep"],
                        icon: Users
                    },
                    {
                        title: "Post-Incident",
                        features: ["Root cause analysis", "Reconstruction sim", "Protocol improved"],
                        icon: Microscope
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Fire & Life Safety Intelligence (FLSI) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Compliance & Risk Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Fire & Life Safety Intelligence (FLSI) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Compliance & Risk Intelligence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Fire & Life Safety Intelligence (FLSI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Fire & Life Safety Intelligence (FLSI). We deploy sophisticated remote monitoring and local site management aligned with Compliance & Risk Intelligence best practices. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Compliance & Risk Intelligence.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Compliance & Risk Intelligence disruptions.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Fire & Life Safety Intelligence (FLSI) advisory tier. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Compliance & Risk Intelligence workflows. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Fire & Life Safety Intelligence (FLSI) deployment.",
                            "Compliance Auditing: Ensuring your Compliance & Risk Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Change Management: Ensuring your workforce is prepared for Compliance & Risk Intelligence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Fire & Life Safety Intelligence (FLSI)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Fire & Life Safety Intelligence (FLSI) with your wider network. Our process encompasses zero-trust security postures, ensuring data integrity across the Compliance & Risk Intelligence spectrum. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Compliance & Risk Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Compliance & Risk Intelligence data flows.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Fire & Life Safety Intelligence (FLSI). The platform autonomously identifies hidden optimization pathways within your broader Compliance & Risk Intelligence operational footprint. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Compliance & Risk Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Compliance & Risk Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Fire & Life Safety Intelligence (FLSI). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Compliance & Risk Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Compliance & Risk Intelligence.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Fire & Life Safety Intelligence (FLSI).",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Fire & Life Safety Intelligence (FLSI). During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Compliance & Risk Intelligence adoption. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Fire & Life Safety Intelligence (FLSI) ecosystem.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Fire & Life Safety Intelligence (FLSI) are permanently codified. Integrated learning management tools continuously certify your staff on the latest Compliance & Risk Intelligence methodologies. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Compliance & Risk Intelligence maintenance procedures.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Fire & Life Safety Intelligence (FLSI) into digital libraries.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Fire & Life Safety Intelligence (FLSI) updates instantly across the grid.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Prevent Fire Incidents.",
                    buttonText: "Enhance Fire Safety",
                    link: "/contact"
                }
            },
            // OFFERING 5.3
            {
                id: "5.3",
                title: "Occupational Health & Safety Intelligence (OHSI)",
                subtitle: "AI-driven workplace safety management achieving zero-harm operations through predictive hazard control and behavioral optimization.",
                icon: ShieldCheck,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Incident Rate", icon: Activity },
                    { value: "50", suffix: "%", prefix: "↓", label: "Comp Costs", icon: Database },
                    { value: "100", suffix: "%", label: "OSHA Compliant", icon: FileCheck },
                    { value: "0", suffix: "", label: "Harm Goal", icon: Target }
                ],
                portfolio: [
                    {
                        title: "PPE Detection",
                        features: ["Identified missing harness", "Audio warning sent", "Supervisor alerted"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Behavior Correction",
                        features: ["Pattern analysis", "Targeted training", "Schedule adjusted"],
                        icon: Brain
                    },
                    {
                        title: "Ergonomics",
                        features: ["Wearable analysis", "MSD risk scored", "Workstation fixed"],
                        icon: Activity
                    },
                    {
                        title: "Chemical Safety",
                        features: ["Exposure monitored", "Substitution recommended", "Emergency auto-response"],
                        icon: Microscope
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Occupational Health & Safety Intelligence (OHSI), we provide elite personnel tailored to your specific ecosystem. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Compliance & Risk Intelligence. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Compliance & Risk Intelligence industry curves.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Compliance & Risk Intelligence critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Occupational Health & Safety Intelligence (OHSI) deployments.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Occupational Health & Safety Intelligence (OHSI).",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Occupational Health & Safety Intelligence (OHSI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Occupational Health & Safety Intelligence (OHSI) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Compliance & Risk Intelligence domain, maintaining strict audit trails. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Compliance & Risk Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Compliance & Risk Intelligence.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Compliance & Risk Intelligence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Occupational Health & Safety Intelligence (OHSI) into your legacy enterprise. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Compliance & Risk Intelligence portfolio. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Compliance & Risk Intelligence technological transitions.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Occupational Health & Safety Intelligence (OHSI) deployment.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Occupational Health & Safety Intelligence (OHSI) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Compliance & Risk Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Middleware Orchestration: Advanced translation layers handling complex Compliance & Risk Intelligence data flows.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Occupational Health & Safety Intelligence (OHSI) modules."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Occupational Health & Safety Intelligence (OHSI). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Compliance & Risk Intelligence intervention. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Occupational Health & Safety Intelligence (OHSI).",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Occupational Health & Safety Intelligence (OHSI).",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Compliance & Risk Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Occupational Health & Safety Intelligence (OHSI). They continuously negotiate with external APIs and internal databases to dynamically route Compliance & Risk Intelligence resources. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Occupational Health & Safety Intelligence (OHSI).",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Compliance & Risk Intelligence.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Occupational Health & Safety Intelligence (OHSI), ensuring it is fully optimized before you take over. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Compliance & Risk Intelligence adoption. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Occupational Health & Safety Intelligence (OHSI).",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Compliance & Risk Intelligence.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Occupational Health & Safety Intelligence (OHSI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Compliance & Risk Intelligence facilities. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Compliance & Risk Intelligence maintenance procedures.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Compliance & Risk Intelligence database.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Occupational Health & Safety Intelligence (OHSI) updates instantly across the grid."
                        ]
                    }
                ],


                cta: {
                    text: "Achieve Zero Harm.",
                    buttonText: "Optimize Safety",
                    link: "/contact"
                }
            },
            // OFFERING 5.4
            {
                id: "5.4",
                title: "Environmental Compliance Intelligence (ECI)",
                subtitle: "Automated environmental regulatory management ensuring air, water, waste, and noise compliance with proactive violation prevention.",
                icon: Leaf,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Violation Risk", icon: AlertTriangle },
                    { value: "60", suffix: "%", prefix: "↓", label: "Reporting Labor", icon: FileCheck },
                    { value: "30", suffix: "%", prefix: "↓", label: "Penalty Risk", icon: Database },
                    { value: "100", suffix: "%", label: "Consent Met", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Effluent Prediction",
                        features: ["Predicted COD exceedance", "Process opt recommended", "Avoided violation"],
                        icon: Droplets
                    },
                    {
                        title: "Production Shift",
                        features: ["Delayed high-COD batch", "Equalization tank used", "Compliance maintained"],
                        icon: Settings
                    },
                    {
                        title: "Reporting Auto",
                        features: ["SPCB upload ready", "Consent tracked", "Amendment prepared"],
                        icon: FileCheck
                    },
                    {
                        title: "Water Stewardship",
                        features: ["ZLD achieved", "Aquifer recharged", "Groundwater protected"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Environmental Compliance Intelligence (ECI), we provide elite personnel tailored to your specific ecosystem. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Compliance & Risk Intelligence umbrella. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Compliance & Risk Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Environmental Compliance Intelligence (ECI).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Compliance & Risk Intelligence industry curves.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Environmental Compliance Intelligence (ECI).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Environmental Compliance Intelligence (ECI) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Compliance & Risk Intelligence domain, maintaining strict audit trails. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Compliance & Risk Intelligence.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Environmental Compliance Intelligence (ECI).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Environmental Compliance Intelligence (ECI) advisory tier. By developing bespoke maturity models, we ensure your organization scales effectively within the Compliance & Risk Intelligence sector. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Environmental Compliance Intelligence (ECI).",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Compliance & Risk Intelligence.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Environmental Compliance Intelligence (ECI) capabilities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Environmental Compliance Intelligence (ECI) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Environmental Compliance Intelligence (ECI) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Compliance & Risk Intelligence operations. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Compliance & Risk Intelligence data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Compliance & Risk Intelligence requirements.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Environmental Compliance Intelligence (ECI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Compliance & Risk Intelligence assets. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Compliance & Risk Intelligence workflows instantly.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Environmental Compliance Intelligence (ECI).",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Compliance & Risk Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Environmental Compliance Intelligence (ECI). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Compliance & Risk Intelligence safety thresholds. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Compliance & Risk Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Environmental Compliance Intelligence (ECI).",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Environmental Compliance Intelligence (ECI). We craft intricate operating playbooks, meticulously documenting every procedure required for Compliance & Risk Intelligence success. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Compliance & Risk Intelligence.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Environmental Compliance Intelligence (ECI) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Environmental Compliance Intelligence (ECI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Our systems allow technicians to query complex Compliance & Risk Intelligence issues in natural language and receive instant, exact procedures. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Ensure Environmental Compliance.",
                    buttonText: "Manage Environment",
                    link: "/contact"
                }
            },
            // OFFERING 5.5
            {
                id: "5.5",
                title: "Labor Law & Statutory Intelligence (LLSI)",
                subtitle: "Comprehensive labor compliance automation covering all statutory requirements with proactive risk detection and dispute prevention.",
                icon: Users,
                stats: [
                    { value: "100", suffix: "%", prefix: "↓", label: "Statutory Risk", icon: ShieldCheck },
                    { value: "70", suffix: "%", prefix: "↓", label: "Litigation", icon: MessageSquare },
                    { value: "50", suffix: "%", prefix: "↓", label: "Mgmt Cost", icon: Database },
                    { value: "0", suffix: "", label: "Penalties", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Wage Revision",
                        features: ["Detected Delhi update", "Calculated ₹4.2L impact", "Payroll reconfigured"],
                        icon: TrendingUp
                    },
                    {
                        title: "Contract Labor",
                        features: ["License tracked", "Threshold monitored", "Principal liability managed"],
                        icon: FileCheck
                    },
                    {
                        title: "Grievance Mgmt",
                        features: ["Pattern analyzed", "Settlement optimized", "Strike risk lowered"],
                        icon: MessageSquare
                    },
                    {
                        title: "POSH Compliance",
                        features: ["Committee auto-formed", "Training tracked", "Annual report done"],
                        icon: ShieldCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Labor Law & Statutory Intelligence (LLSI) is made seamless by our fully trained and certified deployment teams. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Compliance & Risk Intelligence. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Compliance & Risk Intelligence industry curves.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Labor Law & Statutory Intelligence (LLSI).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Labor Law & Statutory Intelligence (LLSI) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Compliance & Risk Intelligence.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Labor Law & Statutory Intelligence (LLSI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Labor Law & Statutory Intelligence (LLSI) guarantees strict adherence to performance metrics. Our proactive diagnostic frameworks identify anomalies within your Compliance & Risk Intelligence infrastructure before they cause downtime. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Labor Law & Statutory Intelligence (LLSI).",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Compliance & Risk Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Compliance & Risk Intelligence.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Labor Law & Statutory Intelligence (LLSI) requires deep insight and careful architectural planning. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Compliance & Risk Intelligence goals. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Labor Law & Statutory Intelligence (LLSI) capabilities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Labor Law & Statutory Intelligence (LLSI) deployment.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Labor Law & Statutory Intelligence (LLSI).",
                            "Change Management: Ensuring your workforce is prepared for Compliance & Risk Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Labor Law & Statutory Intelligence (LLSI) communicates natively with your central platforms. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Compliance & Risk Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Labor Law & Statutory Intelligence (LLSI).",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Labor Law & Statutory Intelligence (LLSI) with our AI backbone, we enable predictive forecasting rather than historical reporting. The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Compliance & Risk Intelligence. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Labor Law & Statutory Intelligence (LLSI).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Compliance & Risk Intelligence assets.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Labor Law & Statutory Intelligence (LLSI) interventions happen at machine speed, autonomously. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Compliance & Risk Intelligence safety thresholds. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Compliance & Risk Intelligence components.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Labor Law & Statutory Intelligence (LLSI) peak states.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Labor Law & Statutory Intelligence (LLSI).",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Labor Law & Statutory Intelligence (LLSI), ensuring it is fully optimized before you take over. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Compliance & Risk Intelligence adoption. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Labor Law & Statutory Intelligence (LLSI).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Compliance & Risk Intelligence."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Labor Law & Statutory Intelligence (LLSI) environment. Integrated learning management tools continuously certify your staff on the latest Compliance & Risk Intelligence methodologies. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Labor Law & Statutory Intelligence (LLSI) updates instantly across the grid.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Compliance & Risk Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Simplify Labor Compliance.",
                    buttonText: "Automate Labor Law",
                    link: "/contact"
                }
            },
            // OFFERING 5.6
            {
                id: "5.6",
                title: "Data Privacy & Information Security (DPIS)",
                subtitle: "Comprehensive information protection integrating physical security, cybersecurity, and privacy compliance for holistic risk management.",
                icon: Lock,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Breach Risk", icon: ShieldCheck },
                    { value: "60", suffix: "%", prefix: "↓", label: "Compliance Effort", icon: FileCheck },
                    { value: "40", suffix: "%", prefix: "↓", label: "Ins Premium", icon: Database },
                    { value: "100", suffix: "%", label: "DPDP Ready", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Insider Threat",
                        features: ["Unauthorized device found", "Network isolated", "Guard dispatched"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Privacy Masking",
                        features: ["CCTV faces blurred", "Consent managed", "DPO supported"],
                        icon: Eye
                    },
                    {
                        title: "Audit Trail",
                        features: ["Physical-digital correlation", "Timeline reconstructed", "Evidence preserved"],
                        icon: FileCheck
                    },
                    {
                        title: "Compliance Check",
                        features: ["DPDP Act aligned", "ISO 27001 monitored", "Gap assessment done"],
                        icon: ShieldCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Data Privacy & Information Security (DPIS) requires a workforce possessing highly specialized technical acumen. We rigorously select and continuously train our staff to align with the advanced requirements of the Compliance & Risk Intelligence sector. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Data Privacy & Information Security (DPIS) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Compliance & Risk Intelligence.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Data Privacy & Information Security (DPIS).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Compliance & Risk Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Data Privacy & Information Security (DPIS) guarantees strict adherence to performance metrics. We deploy sophisticated remote monitoring and local site management aligned with Compliance & Risk Intelligence best practices. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Data Privacy & Information Security (DPIS).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Data Privacy & Information Security (DPIS)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Data Privacy & Information Security (DPIS) into your legacy enterprise. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Compliance & Risk Intelligence workflows. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Data Privacy & Information Security (DPIS) capabilities.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Compliance & Risk Intelligence.",
                            "Compliance Auditing: Ensuring your Compliance & Risk Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Data Privacy & Information Security (DPIS) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Compliance & Risk Intelligence operations. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Compliance & Risk Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Middleware Orchestration: Advanced translation layers handling complex Compliance & Risk Intelligence data flows.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Data Privacy & Information Security (DPIS)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Data Privacy & Information Security (DPIS). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Compliance & Risk Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Data Privacy & Information Security (DPIS).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Data Privacy & Information Security (DPIS). It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Compliance & Risk Intelligence ecosystem. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Compliance & Risk Intelligence components.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Data Privacy & Information Security (DPIS) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Data Privacy & Information Security (DPIS). We craft intricate operating playbooks, meticulously documenting every procedure required for Compliance & Risk Intelligence success. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Compliance & Risk Intelligence success.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Data Privacy & Information Security (DPIS) environment. Integrated learning management tools continuously certify your staff on the latest Compliance & Risk Intelligence methodologies. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "NLP-Driven Search Architectures: Querying complex Compliance & Risk Intelligence problems in natural language for exact solutions.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Video Process Documentation: High-quality visual recordings of critical Compliance & Risk Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your Information.",
                    buttonText: "Secure Data Now",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "vendor-supply-chain",
        type: "facility-management",
        title: "Vendor & Supply Chain Intelligence",
        subtitle: "Autonomous Ecosystem Orchestration",
        heroSlides: [
            {
                badge: "Ecosystem Orchestration",
                title: "Vendor &",
                highlight: "Supply Chain",
                description: "Autonomous vendor lifecycle management and predictive procurement.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            },
            {
                badge: "Smart Logistics",
                title: "Just-In-Time",
                highlight: "Inventory",
                description: "AI-linked demand forecasting and seamless logistics integration.",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
            },
            {
                badge: "Network Reliability",
                title: "Partner",
                highlight: "Performance",
                description: "Real-time SLA tracking and automated vendor risk assessment.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 6.1
            {
                id: "6.1",
                title: "Intelligent Vendor Ecosystem Platform (IVEP)",
                subtitle: "Comprehensive supplier management integrating risk intelligence, performance optimization, and autonomous procurement execution.  By leveraging advanced cyber-physical intelligence, we provide continuous situational awareness across all operational vectors. Furthermore, our state-of-the-art predictive analytics models actively anticipate complex vulnerabilities before they can be exploited by malicious actors or systemic failures. Utmost discretion is seamlessly blended with elite-tier defensive parameters to comfortably facilitate executive mobility and complete reputational protection.",
                icon: Globe,
                stats: [
                    { value: "25", suffix: "%", prefix: "↓", label: "Disruption Risk", icon: AlertTriangle },
                    { value: "12", suffix: "%", prefix: "↓", label: "Procurement Costs", icon: Database },
                    { value: "40", suffix: "%", prefix: "↑", label: "Vendor Performance", icon: TrendingUp },
                    { value: "100", suffix: "%", label: "Risk Visibility", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Financial Health",
                        features: ["Credit scoring automated", "Liquidity stress alerts", "Payment delay tracking"],
                        icon: Activity
                    },
                    {
                        title: "ESG Risk",
                        features: ["Carbon footprint tracking", "Ethical sourcing verified", "Diversity monitoring"],
                        icon: Leaf
                    },
                    {
                        title: "Market Intelligence",
                        features: ["Price benchmarking", "Volatility forecasting", "Alternative scouting"],
                        icon: Network
                    },
                    {
                        title: "Performance AI",
                        features: ["SLA tracking real-time", "Quality prediction", "Innovation scoring"],
                        icon: BarChart
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Intelligent Vendor Ecosystem Platform (IVEP). Our teams act as an extension of your own, filling critical knowledge gaps within your Vendor & Supply Chain Intelligence initiatives. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Intelligent Vendor Ecosystem Platform (IVEP) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Vendor & Supply Chain Intelligence industry curves.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Intelligent Vendor Ecosystem Platform (IVEP).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Vendor & Supply Chain Intelligence critical events.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Vendor & Supply Chain Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Intelligent Vendor Ecosystem Platform (IVEP) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Vendor & Supply Chain Intelligence domain, maintaining strict audit trails. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Vendor & Supply Chain Intelligence expectations.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Intelligent Vendor Ecosystem Platform (IVEP).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Vendor & Supply Chain Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Intelligent Vendor Ecosystem Platform (IVEP) by leveraging our customized assessment and strategic blueprinting. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Vendor & Supply Chain Intelligence. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Intelligent Vendor Ecosystem Platform (IVEP) capabilities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Intelligent Vendor Ecosystem Platform (IVEP) communicates natively with your central platforms. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Vendor & Supply Chain Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Vendor & Supply Chain Intelligence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Vendor & Supply Chain Intelligence requirements.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Intelligent Vendor Ecosystem Platform (IVEP)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Intelligent Vendor Ecosystem Platform (IVEP). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Vendor & Supply Chain Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Vendor & Supply Chain Intelligence assets.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Vendor & Supply Chain Intelligence workflows instantly.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Intelligent Vendor Ecosystem Platform (IVEP). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Vendor & Supply Chain Intelligence safety thresholds. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Intelligent Vendor Ecosystem Platform (IVEP).",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Intelligent Vendor Ecosystem Platform (IVEP). We establish robust governance models and audit trails that serve as your permanent Vendor & Supply Chain Intelligence operational foundation. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Intelligent Vendor Ecosystem Platform (IVEP) ecosystem.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Vendor & Supply Chain Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Intelligent Vendor Ecosystem Platform (IVEP)."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Intelligent Vendor Ecosystem Platform (IVEP), preventing institutional memory loss. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Vendor & Supply Chain Intelligence facilities. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Vendor & Supply Chain Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Video Process Documentation: High-quality visual recordings of critical Vendor & Supply Chain Intelligence maintenance procedures.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Orchestrate Your Ecosystem.",
                    buttonText: "Deploy Vendor Platform",
                    link: "/contact"
                }
            },
            // OFFERING 6.2
            {
                id: "6.2",
                title: "Autonomous Procurement Intelligence (API)",
                subtitle: "Self-executing procurement combining demand prediction, market timing, and automated transaction execution.",
                icon: ShoppingCart,
                stats: [
                    { value: "15", suffix: "%", prefix: "↓", label: "Material Costs", icon: TrendingUp },
                    { value: "40", suffix: "%", prefix: "↓", label: "Procure Cycle Time", icon: Clock },
                    { value: "60", suffix: "%", prefix: "↓", label: "Maverick Spend", icon: CheckCircle2 },
                    { value: "3.2", prefix: "₹", suffix: "L", label: "Avg Timing Savings", icon: Database }
                ],
                portfolio: [
                    {
                        title: "Demand Prediction",
                        features: ["Consumption pattern learning", "Predicted 8% price drop", "Seasonal adjustment"],
                        icon: Brain
                    },
                    {
                        title: "Transaction Auto",
                        features: ["RFP auto-generated", "PO execution automated", "Invoice matching"],
                        icon: Zap
                    },
                    {
                        title: "Market Timing",
                        features: ["Optimal window found", "Hedging strategy set", "Lead time correlation"],
                        icon: Clock
                    },
                    {
                        title: "Sourcing Strategy",
                        features: ["Global supplier qual", "Currency hedging", "Spot market buy"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Autonomous Procurement Intelligence (API) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Vendor & Supply Chain Intelligence initiatives. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Vendor & Supply Chain Intelligence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Autonomous Procurement Intelligence (API).",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Procurement Intelligence (API).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Autonomous Procurement Intelligence (API) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Autonomous Procurement Intelligence (API). We deploy sophisticated remote monitoring and local site management aligned with Vendor & Supply Chain Intelligence best practices. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Autonomous Procurement Intelligence (API)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Autonomous Procurement Intelligence (API), ensuring your technological investments are future-proof. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Vendor & Supply Chain Intelligence. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Autonomous Procurement Intelligence (API) capabilities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Autonomous Procurement Intelligence (API)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Autonomous Procurement Intelligence (API) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Vendor & Supply Chain Intelligence data requirements. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Vendor & Supply Chain Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Vendor & Supply Chain Intelligence network."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Autonomous Procurement Intelligence (API). The platform autonomously identifies hidden optimization pathways within your broader Vendor & Supply Chain Intelligence operational footprint. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Autonomous Procurement Intelligence (API).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Vendor & Supply Chain Intelligence assets.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Vendor & Supply Chain Intelligence workflows instantly.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Autonomous Procurement Intelligence (API). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Vendor & Supply Chain Intelligence networks. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Autonomous Procurement Intelligence (API) peak states.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Vendor & Supply Chain Intelligence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Autonomous Procurement Intelligence (API). We establish robust governance models and audit trails that serve as your permanent Vendor & Supply Chain Intelligence operational foundation. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Vendor & Supply Chain Intelligence success.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Autonomous Procurement Intelligence (API).",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Vendor & Supply Chain Intelligence."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Autonomous Procurement Intelligence (API). Standard Operating Procedures become living digital documents, evolving alongside your Vendor & Supply Chain Intelligence infrastructure. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Vendor & Supply Chain Intelligence problems in natural language for exact solutions.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Autonomous Procurement Intelligence (API) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Vendor & Supply Chain Intelligence database.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Automate Your Procurement.",
                    buttonText: "Enable Procurement AI",
                    link: "/contact"
                }
            },
            // OFFERING 6.3
            {
                id: "6.3",
                title: "Contract Intelligence & Lifecycle Management (CILM)",
                subtitle: "AI-driven contract management ensuring obligation fulfillment, risk mitigation, and value extraction.",
                icon: FileCheck,
                stats: [
                    { value: "20", suffix: "%", prefix: "↓", label: "Value Leakage", icon: Database },
                    { value: "50", suffix: "%", prefix: "↓", label: "Renewal Cycle", icon: Clock },
                    { value: "30", suffix: "%", prefix: "↑", label: "Negotiated Savings", icon: CheckCircle2 },
                    { value: "100", suffix: "%", label: "SLA Fulfillment", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "NLP Extraction",
                        features: ["SLA terms extracted", "Pricing clauses mapped", "Renewal alerts set"],
                        icon: MessageSquare
                    },
                    {
                        title: "Obligation Mgmt",
                        features: ["Milestone tracking", "Deliverable verification", "Payment conditioning"],
                        icon: Clock
                    },
                    {
                        title: "Performance",
                        features: ["SLA attainment scores", "Incident trend analysis", "Innovation contribution"],
                        icon: BarChart
                    },
                    {
                        title: "Risk Scoring",
                        features: ["Indemnification check", "Termination risk score", "Force majeure eval"],
                        icon: ShieldCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Contract Intelligence & Lifecycle Management (CILM) is made seamless by our fully trained and certified deployment teams. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Vendor & Supply Chain Intelligence umbrella. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Vendor & Supply Chain Intelligence industry curves.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Vendor & Supply Chain Intelligence critical events.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Contract Intelligence & Lifecycle Management (CILM).",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Contract Intelligence & Lifecycle Management (CILM).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Contract Intelligence & Lifecycle Management (CILM) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Contract Intelligence & Lifecycle Management (CILM), operational risks are shifted away from your balance sheet. We ensure complete compliance with international standards relevant to the Vendor & Supply Chain Intelligence domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Vendor & Supply Chain Intelligence expectations.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Contract Intelligence & Lifecycle Management (CILM).",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Contract Intelligence & Lifecycle Management (CILM) into your legacy enterprise. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Vendor & Supply Chain Intelligence goals. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Contract Intelligence & Lifecycle Management (CILM).",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Vendor & Supply Chain Intelligence.",
                            "Change Management: Ensuring your workforce is prepared for Vendor & Supply Chain Intelligence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Contract Intelligence & Lifecycle Management (CILM) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Contract Intelligence & Lifecycle Management (CILM) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Vendor & Supply Chain Intelligence environment. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Vendor & Supply Chain Intelligence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Contract Intelligence & Lifecycle Management (CILM).",
                            "Middleware Orchestration: Advanced translation layers handling complex Vendor & Supply Chain Intelligence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Contract Intelligence & Lifecycle Management (CILM). Our neural networks simulate thousands of permutations instantly to solve complex Vendor & Supply Chain Intelligence scheduling and resource issues. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Vendor & Supply Chain Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Contract Intelligence & Lifecycle Management (CILM).",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Contract Intelligence & Lifecycle Management (CILM) interventions happen at machine speed, autonomously. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Vendor & Supply Chain Intelligence. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Contract Intelligence & Lifecycle Management (CILM) peak states.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Contract Intelligence & Lifecycle Management (CILM). We craft intricate operating playbooks, meticulously documenting every procedure required for Vendor & Supply Chain Intelligence success. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Contract Intelligence & Lifecycle Management (CILM).",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Contract Intelligence & Lifecycle Management (CILM) ecosystem.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Vendor & Supply Chain Intelligence."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Contract Intelligence & Lifecycle Management (CILM) are permanently codified. Our systems allow technicians to query complex Vendor & Supply Chain Intelligence issues in natural language and receive instant, exact procedures. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Vendor & Supply Chain Intelligence problems in natural language for exact solutions.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Contract Intelligence & Lifecycle Management (CILM) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Vendor & Supply Chain Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Recover Your Contract Value.",
                    buttonText: "Deploy Contract AI",
                    link: "/contact"
                }
            },
            // OFFERING 6.4
            {
                id: "6.4",
                title: "Logistics & Distribution Intelligence (LDI)",
                subtitle: "Optimized material movement combining route intelligence, carrier optimization, and autonomous execution.  By leveraging advanced cyber-physical intelligence, we provide continuous situational awareness across all operational vectors. Furthermore, our state-of-the-art predictive analytics models actively anticipate complex vulnerabilities before they can be exploited by malicious actors or systemic failures. Utmost discretion is seamlessly blended with elite-tier defensive parameters to comfortably facilitate executive mobility and complete reputational protection.",
                icon: Truck,
                stats: [
                    { value: "18", suffix: "%", prefix: "↓", label: "Logistics Costs", icon: Database },
                    { value: "40", suffix: "%", prefix: "↓", label: "Exceptions", icon: AlertTriangle },
                    { value: "25", suffix: "%", prefix: "↑", label: "Carrier Perf", icon: CheckCircle2 },
                    { value: "100", suffix: "%", label: "Real-time Visibility", icon: Wifi }
                ],
                portfolio: [
                    {
                        title: "Route Optimization",
                        features: ["Traffic prediction", "Fuel efficiency modeling", "Carbon calculation"],
                        icon: Map
                    },
                    {
                        title: "Visibility",
                        features: ["IoT tracking real-time", "ETA prediction", "Exception alerts"],
                        icon: Wifi
                    },
                    {
                        title: "Cold Chain",
                        features: ["Temperature integrity", "2-8°C maintenance", "Excursion prediction"],
                        icon: Thermometer
                    },
                    {
                        title: "Hazmat",
                        features: ["Route restriction check", "Emergency positioning", "Safety coordination"],
                        icon: AlertTriangle
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Logistics & Distribution Intelligence (LDI) requires a workforce possessing highly specialized technical acumen. We rigorously select and continuously train our staff to align with the advanced requirements of the Vendor & Supply Chain Intelligence sector. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Logistics & Distribution Intelligence (LDI).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Logistics & Distribution Intelligence (LDI) deployments.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Vendor & Supply Chain Intelligence critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Logistics & Distribution Intelligence (LDI). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Vendor & Supply Chain Intelligence footprint. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Logistics & Distribution Intelligence (LDI).",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Vendor & Supply Chain Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Logistics & Distribution Intelligence (LDI), ensuring your technological investments are future-proof. By developing bespoke maturity models, we ensure your organization scales effectively within the Vendor & Supply Chain Intelligence sector. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Logistics & Distribution Intelligence (LDI) capabilities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Vendor & Supply Chain Intelligence.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Logistics & Distribution Intelligence (LDI)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Logistics & Distribution Intelligence (LDI) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Vendor & Supply Chain Intelligence environment. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Vendor & Supply Chain Intelligence requirements.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Logistics & Distribution Intelligence (LDI) with our AI backbone, we enable predictive forecasting rather than historical reporting. The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Vendor & Supply Chain Intelligence. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Vendor & Supply Chain Intelligence contexts.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Vendor & Supply Chain Intelligence workflows instantly.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Logistics & Distribution Intelligence (LDI)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Logistics & Distribution Intelligence (LDI) interventions happen at machine speed, autonomously. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Vendor & Supply Chain Intelligence ecosystem. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Vendor & Supply Chain Intelligence.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Logistics & Distribution Intelligence (LDI) peak states.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Vendor & Supply Chain Intelligence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Logistics & Distribution Intelligence (LDI) with our comprehensive implementation and handover framework. Our experts lead intense, hands-on training regimens to completely upskill your internal Vendor & Supply Chain Intelligence teams. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Logistics & Distribution Intelligence (LDI) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Logistics & Distribution Intelligence (LDI). Our systems allow technicians to query complex Vendor & Supply Chain Intelligence issues in natural language and receive instant, exact procedures. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Logistics & Distribution Intelligence (LDI) into digital libraries.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Vendor & Supply Chain Intelligence database.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Logistics & Distribution Intelligence (LDI) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Streamline Your Logistics.",
                    buttonText: "Optimize Distribution",
                    link: "/contact"
                }
            },
            // OFFERING 6.5
            {
                id: "6.5",
                title: "Quality Assurance & Inspection Intelligence (QAII)",
                subtitle: "AI-augmented quality verification ensuring material and service conformance through automated inspection.",
                icon: ShieldCheck,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Inspection Labor", icon: Users },
                    { value: "45", suffix: "%", prefix: "↓", label: "Defect Escape", icon: AlertTriangle },
                    { value: "30", suffix: "%", prefix: "↓", label: "Supplier Issues", icon: CheckCircle2 },
                    { value: "95", suffix: "%", label: "Confidence Score", icon: Brain }
                ],
                portfolio: [
                    {
                        title: "Vision Inspection",
                        features: ["Defect detection", "Dimensional verification", "Visual conformance"],
                        icon: Eye
                    },
                    {
                        title: "IoT Quality",
                        features: ["Transit vibration monitoring", "Integrity confirmation", "Property verification"],
                        icon: Activity
                    },
                    {
                        title: "Compliance",
                        features: ["Mill cert verification", "Traceability mapping", "Mill test certificate"],
                        icon: FileCheck
                    },
                    {
                        title: "Service Quality",
                        features: ["Cleaning verification", "Patrol validation", "Maintenance QA"],
                        icon: CheckCircle2
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Quality Assurance & Inspection Intelligence (QAII) implementation. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Vendor & Supply Chain Intelligence umbrella. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Vendor & Supply Chain Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Quality Assurance & Inspection Intelligence (QAII).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Vendor & Supply Chain Intelligence industry curves.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Vendor & Supply Chain Intelligence.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Quality Assurance & Inspection Intelligence (QAII). We ensure complete compliance with international standards relevant to the Vendor & Supply Chain Intelligence domain, maintaining strict audit trails. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Quality Assurance & Inspection Intelligence (QAII).",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Vendor & Supply Chain Intelligence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Quality Assurance & Inspection Intelligence (QAII) advisory tier. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Vendor & Supply Chain Intelligence goals. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Compliance Auditing: Ensuring your Vendor & Supply Chain Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Quality Assurance & Inspection Intelligence (QAII) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Quality Assurance & Inspection Intelligence (QAII) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Vendor & Supply Chain Intelligence technological transitions.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Quality Assurance & Inspection Intelligence (QAII) into the complex fabric of your enterprise IT and OT layers. Through advanced middleware development, we translate disparate protocols into a unified Vendor & Supply Chain Intelligence language. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Quality Assurance & Inspection Intelligence (QAII) modules.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Vendor & Supply Chain Intelligence requirements.",
                            "Middleware Orchestration: Advanced translation layers handling complex Vendor & Supply Chain Intelligence data flows.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Vendor & Supply Chain Intelligence network.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Quality Assurance & Inspection Intelligence (QAII). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Vendor & Supply Chain Intelligence. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Vendor & Supply Chain Intelligence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Vendor & Supply Chain Intelligence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Quality Assurance & Inspection Intelligence (QAII)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Quality Assurance & Inspection Intelligence (QAII). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Vendor & Supply Chain Intelligence safety thresholds. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Vendor & Supply Chain Intelligence.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Vendor & Supply Chain Intelligence components.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Quality Assurance & Inspection Intelligence (QAII) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Quality Assurance & Inspection Intelligence (QAII). During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Vendor & Supply Chain Intelligence adoption. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Vendor & Supply Chain Intelligence success.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Vendor & Supply Chain Intelligence.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Quality Assurance & Inspection Intelligence (QAII)."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Quality Assurance & Inspection Intelligence (QAII) environment. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Vendor & Supply Chain Intelligence expertise. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Quality Assurance & Inspection Intelligence (QAII) updates instantly across the grid.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Quality Assurance & Inspection Intelligence (QAII) into digital libraries.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Vendor & Supply Chain Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Guarantee Your Quality.",
                    buttonText: "Enable Quality AI",
                    link: "/contact"
                }
            },
            // OFFERING 6.6
            {
                id: "6.6",
                title: "Financial & Performance Intelligence (FPI)",
                subtitle: "Integrated financial management combining spend analytics, budget optimization, and value realization.",
                icon: BarChart,
                stats: [
                    { value: "15", suffix: "%", prefix: "↓", label: "Total Cost/TCO", icon: Database },
                    { value: "25", suffix: "%", prefix: "↑", label: "Budget Accuracy", icon: CheckCircle2 },
                    { value: "30", suffix: "%", prefix: "↓", label: "Close Cycle Time", icon: Clock },
                    { value: "100", suffix: "%", label: "Spend Visibility", icon: BarChart }
                ],
                portfolio: [
                    {
                        title: "Spend Intelligence",
                        features: ["Classification automation", "Anomaly detection", "Benchmarking"],
                        icon: BarChart
                    },
                    {
                        title: "Budget AI",
                        features: ["Forecasting variance", "Reallocation optimization", "Scenario modeling"],
                        icon: TrendingUp
                    },
                    {
                        title: "Strategic Finance",
                        features: ["Should-cost engineering", "Make-vs-buy analysis", "NPV/IRR optimization"],
                        icon: Database
                    },
                    {
                        title: "Value Tracking",
                        features: ["ROI calculation", "Benefit tracking", "Cost avoidance"],
                        icon: Target
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Financial & Performance Intelligence (FPI) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Vendor & Supply Chain Intelligence umbrella. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Vendor & Supply Chain Intelligence critical events.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Financial & Performance Intelligence (FPI).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Financial & Performance Intelligence (FPI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Financial & Performance Intelligence (FPI) to our team with a robust, outcome-based partnership. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Vendor & Supply Chain Intelligence footprint. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Vendor & Supply Chain Intelligence expectations.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Financial & Performance Intelligence (FPI).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Vendor & Supply Chain Intelligence.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Financial & Performance Intelligence (FPI) advisory tier. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Vendor & Supply Chain Intelligence. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Financial & Performance Intelligence (FPI) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Change Management: Ensuring your workforce is prepared for Vendor & Supply Chain Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Financial & Performance Intelligence (FPI) communicates natively with your central platforms. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Vendor & Supply Chain Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Vendor & Supply Chain Intelligence requirements.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Financial & Performance Intelligence (FPI) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Financial & Performance Intelligence (FPI)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Financial & Performance Intelligence (FPI) with our AI backbone, we enable predictive forecasting rather than historical reporting. Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Vendor & Supply Chain Intelligence intervention. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Financial & Performance Intelligence (FPI).",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Financial & Performance Intelligence (FPI). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Vendor & Supply Chain Intelligence networks. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Financial & Performance Intelligence (FPI) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Vendor & Supply Chain Intelligence.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Vendor & Supply Chain Intelligence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Financial & Performance Intelligence (FPI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Vendor & Supply Chain Intelligence. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Vendor & Supply Chain Intelligence.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Vendor & Supply Chain Intelligence success.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Financial & Performance Intelligence (FPI).",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Financial & Performance Intelligence (FPI) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Financial & Performance Intelligence (FPI) are permanently codified. Standard Operating Procedures become living digital documents, evolving alongside your Vendor & Supply Chain Intelligence infrastructure. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Vendor & Supply Chain Intelligence database.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Financial & Performance Intelligence (FPI) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Vendor & Supply Chain Intelligence problems in natural language for exact solutions.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Optimize Your ROI.",
                    buttonText: "Manage Performance",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "manned-guarding",
        type: "security-services",
        title: "Manned Guarding Intelligence",
        subtitle: "AI-Augmented Human Protection",
        heroSlides: [
            {
                badge: "Guard Intelligence",
                title: "Manned",
                highlight: "Guarding",
                description: "AI-augmented security personnel with real-time tactical overlays.",
                image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
            },
            {
                badge: "Elite Protection",
                title: "Tactical",
                highlight: "Resilience",
                description: "Highly trained teams integrated with field-command mobile platforms.",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            },
            {
                badge: "24/7 Watch",
                title: "Vigilant",
                highlight: "Response",
                description: "Strategic placement and patrol optimization driven by predictive heatmaps.",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 1.1
            {
                id: "1.1",
                title: "AI-Augmented Guarding Excellence (AAGE)",
                subtitle: "Technology-enhanced manned guarding combining biometric verification, behavioral analytics, and real-time cognitive support.",
                icon: UserCheck,
                stats: [
                    { value: "40", suffix: "%", prefix: "↑", label: "Detection Efficiency", icon: ShieldCheck },
                    { value: "25", suffix: "%", prefix: "↓", label: "Security Incidents", icon: AlertTriangle },
                    { value: "15", suffix: "%", prefix: "↓", label: "Guarding Costs", icon: Database },
                    { value: "100", suffix: "%", label: "Cognitive Awareness", icon: Brain }
                ],
                portfolio: [
                    {
                        title: "Guard Augmentation",
                        features: ["Wearable smart glasses", "AR-based situational awareness", "Body camera integration"],
                        icon: Video
                    },
                    {
                        title: "Behavioral AI",
                        features: ["Visitor stress detection", "Anomaly recognition", "De-escalation guidance"],
                        icon: Brain
                    },
                    {
                        title: "Performance Intel",
                        features: ["Fatigue monitoring (HRV)", "Eye tracking analysis", "Patrol optimization"],
                        icon: Activity
                    },
                    {
                        title: "Companion AI",
                        features: ["VIP arrival recognition", "Threat briefing auto-gen", "Emergency contact sync"],
                        icon: ShieldCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of AI-Augmented Guarding Excellence (AAGE) is made seamless by our fully trained and certified deployment teams. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Manned Guarding Intelligence. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Manned Guarding Intelligence industry curves.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in AI-Augmented Guarding Excellence (AAGE).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within AI-Augmented Guarding Excellence (AAGE).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Manned Guarding Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of AI-Augmented Guarding Excellence (AAGE) to our team with a robust, outcome-based partnership. We ensure complete compliance with international standards relevant to the Manned Guarding Intelligence domain, maintaining strict audit trails. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for AI-Augmented Guarding Excellence (AAGE).",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Manned Guarding Intelligence expectations.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Manned Guarding Intelligence disruptions.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of AI-Augmented Guarding Excellence (AAGE) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Manned Guarding Intelligence workflows. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Manned Guarding Intelligence.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving AI-Augmented Guarding Excellence (AAGE) into the complex fabric of your enterprise IT and OT layers. Our process encompasses zero-trust security postures, ensuring data integrity across the Manned Guarding Intelligence spectrum. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated AI-Augmented Guarding Excellence (AAGE) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing AI-Augmented Guarding Excellence (AAGE). The platform autonomously identifies hidden optimization pathways within your broader Manned Guarding Intelligence operational footprint. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of AI-Augmented Guarding Excellence (AAGE)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within AI-Augmented Guarding Excellence (AAGE) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Manned Guarding Intelligence ecosystem. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Manned Guarding Intelligence.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Manned Guarding Intelligence components.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for AI-Augmented Guarding Excellence (AAGE), ensuring it is fully optimized before you take over. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Manned Guarding Intelligence adoption. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of AI-Augmented Guarding Excellence (AAGE).",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Manned Guarding Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying AI-Augmented Guarding Excellence (AAGE) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Our systems allow technicians to query complex Manned Guarding Intelligence issues in natural language and receive instant, exact procedures. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "NLP-Driven Search Architectures: Querying complex Manned Guarding Intelligence problems in natural language for exact solutions.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Manned Guarding Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Upgrade Your Physical Protection.",
                    buttonText: "Deploy Augmented Guarding",
                    link: "/contact"
                }
            },
            // OFFERING 1.2
            {
                id: "1.2",
                title: "Smart Patrol & Perimeter Intelligence (SPPI)",
                subtitle: "Autonomous patrol optimization combining robotics, sensor fusion, and intelligent route management.",
                icon: Camera,
                stats: [
                    { value: "300", suffix: "%", prefix: "↑", label: "Patrol Density", icon: TrendingUp },
                    { value: "60", suffix: "%", prefix: "↓", label: "Breach Response", icon: Clock },
                    { value: "30", suffix: "%", prefix: "↓", label: "Patrol Labor", icon: Database },
                    { value: "100", suffix: "%", label: "Perimeter Visibility", icon: Globe }
                ],
                portfolio: [
                    {
                        title: "Robotic Patrol",
                        features: ["UGV autonomous patrols", "Drone surveillance mesh", "Auto-charging systems"],
                        icon: Settings
                    },
                    {
                        title: "Sensor Fusion",
                        features: ["Radar & LiDAR pairing", "Seismic intrusion sensors", "Fence vibration detection"],
                        icon: Zap
                    },
                    {
                        title: "Route Intelligence",
                        features: ["Risk-based scheduling", "Incident pathfinding", "Guard location tracking"],
                        icon: MapPin
                    },
                    {
                        title: "Autonomous Agent",
                        features: ["Intrusion pattern matching", "Drone/Robot redirection", "Control center escalation"],
                        icon: Siren
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Smart Patrol & Perimeter Intelligence (SPPI) requires a workforce possessing highly specialized technical acumen. We rigorously select and continuously train our staff to align with the advanced requirements of the Manned Guarding Intelligence sector. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Manned Guarding Intelligence.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Smart Patrol & Perimeter Intelligence (SPPI).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Smart Patrol & Perimeter Intelligence (SPPI).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Smart Patrol & Perimeter Intelligence (SPPI) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Manned Guarding Intelligence operations without the daily hassle. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Manned Guarding Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Manned Guarding Intelligence.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Smart Patrol & Perimeter Intelligence (SPPI) into your legacy enterprise. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Manned Guarding Intelligence workflows. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Smart Patrol & Perimeter Intelligence (SPPI).",
                            "Change Management: Ensuring your workforce is prepared for Manned Guarding Intelligence technological transitions.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Smart Patrol & Perimeter Intelligence (SPPI) communicates natively with your central platforms. Every integration point is rigorously stress-tested against the operational parameters of your Manned Guarding Intelligence environment. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Manned Guarding Intelligence network.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Manned Guarding Intelligence requirements.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Smart Patrol & Perimeter Intelligence (SPPI). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Manned Guarding Intelligence intervention. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Manned Guarding Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Smart Patrol & Perimeter Intelligence (SPPI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Manned Guarding Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Manned Guarding Intelligence components.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Manned Guarding Intelligence.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Smart Patrol & Perimeter Intelligence (SPPI) peak states.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Smart Patrol & Perimeter Intelligence (SPPI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Manned Guarding Intelligence. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Manned Guarding Intelligence.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Manned Guarding Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Smart Patrol & Perimeter Intelligence (SPPI) environment. Our systems allow technicians to query complex Manned Guarding Intelligence issues in natural language and receive instant, exact procedures. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Manned Guarding Intelligence database.",
                            "NLP-Driven Search Architectures: Querying complex Manned Guarding Intelligence problems in natural language for exact solutions.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Smart Patrol & Perimeter Intelligence (SPPI) updates instantly across the grid.",
                            "Video Process Documentation: High-quality visual recordings of critical Manned Guarding Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Secure Your Boundaries.",
                    buttonText: "Enable Perimeter AI",
                    link: "/contact"
                }
            },
            // OFFERING 1.3
            {
                id: "1.3",
                title: "Access Control & Identity Intelligence (ACII)",
                subtitle: "Frictionless, secure access management combining multi-factor biometric verification and behavioral authentication.",
                icon: Fingerprint,
                stats: [
                    { value: "80", suffix: "%", prefix: "↓", label: "Unauthorized Access", icon: Lock },
                    { value: "60", suffix: "%", prefix: "↓", label: "Reception Labor", icon: Users },
                    { value: "95", suffix: "%", prefix: "↑", label: "User Satisfaction", icon: CheckCircle2 },
                    { value: "100", suffix: "%", label: "Identity Verified", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Biometric Fusion",
                        features: ["Face recognition 99.7%", "Iris & Palm vein match", "Gait analysis"],
                        icon: Eye
                    },
                    {
                        title: "Behavioral Auth",
                        features: ["Typing rhythm analysis", "Walking pattern match", "Device proximity check"],
                        icon: Brain
                    },
                    {
                        title: "Dynamic Auth",
                        features: ["Risk-based access levels", "Time-limited permissions", "Escort requirements"],
                        icon: Clock
                    },
                    {
                        title: "Identity Agent",
                        features: ["Frictionless gate open", "Elevator pre-calling", "Health screening sync"],
                        icon: UserCheck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Access Control & Identity Intelligence (ACII) requires a workforce possessing highly specialized technical acumen. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Manned Guarding Intelligence. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Access Control & Identity Intelligence (ACII) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Manned Guarding Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Access Control & Identity Intelligence (ACII) to our team with a robust, outcome-based partnership. We deploy sophisticated remote monitoring and local site management aligned with Manned Guarding Intelligence best practices. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Manned Guarding Intelligence disruptions.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Manned Guarding Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Access Control & Identity Intelligence (ACII), ensuring your technological investments are future-proof. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Manned Guarding Intelligence workflows. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Compliance Auditing: Ensuring your Manned Guarding Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Access Control & Identity Intelligence (ACII) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Manned Guarding Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Access Control & Identity Intelligence (ACII) data streams. We harmonize legacy applications with modern cloud-native architectures prevalent in Manned Guarding Intelligence operations. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Manned Guarding Intelligence data flows.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Manned Guarding Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Access Control & Identity Intelligence (ACII) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Access Control & Identity Intelligence (ACII). Our neural networks simulate thousands of permutations instantly to solve complex Manned Guarding Intelligence scheduling and resource issues. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Access Control & Identity Intelligence (ACII) interventions happen at machine speed, autonomously. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Manned Guarding Intelligence. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Access Control & Identity Intelligence (ACII) peak states.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Manned Guarding Intelligence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Access Control & Identity Intelligence (ACII).",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Access Control & Identity Intelligence (ACII). Our experts lead intense, hands-on training regimens to completely upskill your internal Manned Guarding Intelligence teams. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Manned Guarding Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Access Control & Identity Intelligence (ACII).",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Access Control & Identity Intelligence (ACII) ecosystem.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Access Control & Identity Intelligence (ACII). Integrated learning management tools continuously certify your staff on the latest Manned Guarding Intelligence methodologies. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Manned Guarding Intelligence maintenance procedures.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Manned Guarding Intelligence database.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Eliminate Unauthorized Access.",
                    buttonText: "Deploy Identity AI",
                    link: "/contact"
                }
            },
            // OFFERING 1.4
            {
                id: "1.4",
                title: "Event Security & Crowd Intelligence (ESCI)",
                subtitle: "Large-scale event protection combining predictive crowd analytics and dynamic resource deployment.",
                icon: Users,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Crowd Safety Incid", icon: AlertTriangle },
                    { value: "40", suffix: "%", prefix: "↓", label: "Security Staffing", icon: Database },
                    { value: "100", suffix: "%", prefix: "↑", label: "Response Readiness", icon: Siren },
                    { value: "500", suffix: "+", label: "Managed Events", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Crowd Analytics",
                        features: ["Density mapping (8p/m²)", "Flow prediction", "Panic precursor detection"],
                        icon: Activity
                    },
                    {
                        title: "Risk Monitoring",
                        features: ["Sentiment analysis", "Stress geolocating", "Aggression detection"],
                        icon: MessageSquare
                    },
                    {
                        title: "Resource Prep",
                        features: ["Guard redeployment sync", "Barrier adjustment", "Emergency lane prep"],
                        icon: Layout
                    },
                    {
                        title: "Commander AI",
                        features: ["Entry throttling", "PA announcement auto", "Response orchestration"],
                        icon: Radio
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Event Security & Crowd Intelligence (ESCI) implementation. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Manned Guarding Intelligence. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Event Security & Crowd Intelligence (ESCI).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Manned Guarding Intelligence industry curves.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Event Security & Crowd Intelligence (ESCI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Event Security & Crowd Intelligence (ESCI). We deploy sophisticated remote monitoring and local site management aligned with Manned Guarding Intelligence best practices. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Event Security & Crowd Intelligence (ESCI).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Event Security & Crowd Intelligence (ESCI).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Event Security & Crowd Intelligence (ESCI), ensuring your technological investments are future-proof. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Manned Guarding Intelligence portfolio. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Manned Guarding Intelligence.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Manned Guarding Intelligence technological transitions.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Event Security & Crowd Intelligence (ESCI) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Event Security & Crowd Intelligence (ESCI) deployment. Through advanced middleware development, we translate disparate protocols into a unified Manned Guarding Intelligence language. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Manned Guarding Intelligence data flows.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Manned Guarding Intelligence requirements.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Event Security & Crowd Intelligence (ESCI)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Event Security & Crowd Intelligence (ESCI) with our AI backbone, we enable predictive forecasting rather than historical reporting. Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Manned Guarding Intelligence intervention. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Event Security & Crowd Intelligence (ESCI).",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Event Security & Crowd Intelligence (ESCI).",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Event Security & Crowd Intelligence (ESCI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Manned Guarding Intelligence. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Manned Guarding Intelligence.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Event Security & Crowd Intelligence (ESCI).",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Event Security & Crowd Intelligence (ESCI). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Manned Guarding Intelligence. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Manned Guarding Intelligence success.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Manned Guarding Intelligence.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Event Security & Crowd Intelligence (ESCI) environment. Integrated learning management tools continuously certify your staff on the latest Manned Guarding Intelligence methodologies. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Manned Guarding Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Event Security & Crowd Intelligence (ESCI) updates instantly across the grid.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Event Security & Crowd Intelligence (ESCI) into digital libraries.",
                            "Video Process Documentation: High-quality visual recordings of critical Manned Guarding Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Ensure Safe Events.",
                    buttonText: "Enable Event AI",
                    link: "/contact"
                }
            },
            // OFFERING 1.5
            {
                id: "1.5",
                title: "Executive Protection & VIP Intelligence (EPVI)",
                subtitle: "Intelligence-driven protection for VIPs combining preparation and autonomous response.",
                icon: ShieldCheck,
                stats: [
                    { value: "99", suffix: "%", prefix: "↓", label: "Security Incidents", icon: Lock },
                    { value: "50", suffix: "%", prefix: "↓", label: "Protection Cost", icon: Database },
                    { value: "100", suffix: "%", label: "Peace of Mind", icon: Heart },
                    { value: "24", suffix: "/7", label: "Active Monitoring", icon: Activity }
                ],
                portfolio: [
                    {
                        title: "Intelligence Fusion",
                        features: ["OSINT monitoring", "Social media vulnerability", "Travel risk score"],
                        icon: Globe
                    },
                    {
                        title: "Protection Tech",
                        features: ["Armored vehicle sync", "Secure tracking beacon", "Drone surveillance"],
                        icon: Truck
                    },
                    {
                        title: "Orchestration",
                        features: ["Route planning auto", "Hotel secure isolation", "Extraction signaling"],
                        icon: MapPin
                    },
                    {
                        title: "Digital Defense",
                        features: ["Identity masking", "Cyber threat monitor", "Family safety extension"],
                        icon: Lock
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Executive Protection & VIP Intelligence (EPVI) requires a workforce possessing highly specialized technical acumen. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Manned Guarding Intelligence strategy. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Manned Guarding Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Executive Protection & VIP Intelligence (EPVI).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Executive Protection & VIP Intelligence (EPVI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Executive Protection & VIP Intelligence (EPVI) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Manned Guarding Intelligence operations without the daily hassle. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Manned Guarding Intelligence expectations.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Executive Protection & VIP Intelligence (EPVI).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Executive Protection & VIP Intelligence (EPVI)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Executive Protection & VIP Intelligence (EPVI), ensuring your technological investments are future-proof. By developing bespoke maturity models, we ensure your organization scales effectively within the Manned Guarding Intelligence sector. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Manned Guarding Intelligence.",
                            "Change Management: Ensuring your workforce is prepared for Manned Guarding Intelligence technological transitions.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Executive Protection & VIP Intelligence (EPVI) capabilities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Executive Protection & VIP Intelligence (EPVI) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Executive Protection & VIP Intelligence (EPVI) into the complex fabric of your enterprise IT and OT layers. Our process encompasses zero-trust security postures, ensuring data integrity across the Manned Guarding Intelligence spectrum. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Manned Guarding Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Manned Guarding Intelligence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Executive Protection & VIP Intelligence (EPVI). Our neural networks simulate thousands of permutations instantly to solve complex Manned Guarding Intelligence scheduling and resource issues. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Manned Guarding Intelligence workflows instantly.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Executive Protection & VIP Intelligence (EPVI)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Executive Protection & VIP Intelligence (EPVI) interventions happen at machine speed, autonomously. They continuously negotiate with external APIs and internal databases to dynamically route Manned Guarding Intelligence resources. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Executive Protection & VIP Intelligence (EPVI) peak states.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Executive Protection & VIP Intelligence (EPVI).",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Executive Protection & VIP Intelligence (EPVI). Our experts lead intense, hands-on training regimens to completely upskill your internal Manned Guarding Intelligence teams. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Executive Protection & VIP Intelligence (EPVI) ecosystem.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Manned Guarding Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Executive Protection & VIP Intelligence (EPVI).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Executive Protection & VIP Intelligence (EPVI), preventing institutional memory loss. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Manned Guarding Intelligence expertise. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "NLP-Driven Search Architectures: Querying complex Manned Guarding Intelligence problems in natural language for exact solutions.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Executive Protection & VIP Intelligence (EPVI) updates instantly across the grid.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Secure Your Principals.",
                    buttonText: "Enable VIP Protection",
                    link: "/contact"
                }
            },
            // OFFERING 1.6
            {
                id: "1.6",
                title: "Industrial & Critical Infrastructure Protection (ICIP)",
                subtitle: "Sector-specific security for manufacturing, energy, and utilities integrating terrorism protection.",
                icon: Factory,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Safety-Security Inc", icon: Activity },
                    { value: "80", suffix: "%", prefix: "↓", label: "Insider Risk", icon: Users },
                    { value: "60", suffix: "%", prefix: "↓", label: "Reg Violation", icon: FileCheck },
                    { value: "100", suffix: "%", label: "Operational Uptime", icon: CheckCircle2 }
                ],
                portfolio: [
                    {
                        title: "Process Safety",
                        features: ["SIS system correlation", "Hazardous area tracking", "Emergency shutdown sync"],
                        icon: Settings
                    },
                    {
                        title: "Insider Threat",
                        features: ["Access pattern anomaly", "Data exfiltration detection", "Sabotage precursor AI"],
                        icon: Lock
                    },
                    {
                        title: "Terrorism Def",
                        features: ["IED detection sensors", "Blast modeling tools", "CBRN monitoring"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Infrastructure",
                        features: ["Pipeline security mesh", "Grid hardening audit", "Water contamination AI"],
                        icon: Building2
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Industrial & Critical Infrastructure Protection (ICIP) requires a workforce possessing highly specialized technical acumen. Our teams act as an extension of your own, filling critical knowledge gaps within your Manned Guarding Intelligence initiatives. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Industrial & Critical Infrastructure Protection (ICIP).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Manned Guarding Intelligence industry curves.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Industrial & Critical Infrastructure Protection (ICIP) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Manned Guarding Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Industrial & Critical Infrastructure Protection (ICIP) guarantees strict adherence to performance metrics. We deploy sophisticated remote monitoring and local site management aligned with Manned Guarding Intelligence best practices. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Manned Guarding Intelligence.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Manned Guarding Intelligence disruptions.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Industrial & Critical Infrastructure Protection (ICIP) advisory tier. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Manned Guarding Intelligence goals. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Industrial & Critical Infrastructure Protection (ICIP) capabilities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Manned Guarding Intelligence.",
                            "Change Management: Ensuring your workforce is prepared for Manned Guarding Intelligence technological transitions.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Industrial & Critical Infrastructure Protection (ICIP).",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Industrial & Critical Infrastructure Protection (ICIP) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Manned Guarding Intelligence data requirements. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Industrial & Critical Infrastructure Protection (ICIP).",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Manned Guarding Intelligence requirements.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Industrial & Critical Infrastructure Protection (ICIP). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Manned Guarding Intelligence assets. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Manned Guarding Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Manned Guarding Intelligence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Manned Guarding Intelligence assets.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Industrial & Critical Infrastructure Protection (ICIP) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Manned Guarding Intelligence ecosystem. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Industrial & Critical Infrastructure Protection (ICIP).",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Industrial & Critical Infrastructure Protection (ICIP) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Manned Guarding Intelligence.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Industrial & Critical Infrastructure Protection (ICIP) with our comprehensive implementation and handover framework. We craft intricate operating playbooks, meticulously documenting every procedure required for Manned Guarding Intelligence success. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Manned Guarding Intelligence.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Industrial & Critical Infrastructure Protection (ICIP) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Industrial & Critical Infrastructure Protection (ICIP) are permanently codified. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Manned Guarding Intelligence expertise. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Manned Guarding Intelligence database.",
                            "NLP-Driven Search Architectures: Querying complex Manned Guarding Intelligence problems in natural language for exact solutions.",
                            "Video Process Documentation: High-quality visual recordings of critical Manned Guarding Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your Critical Assets.",
                    buttonText: "Secure Infrastructure",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "electronic-security",
        type: "security-services",
        title: "Electronic Security Intelligence",
        subtitle: "Autonomous Threat Detection & Response",
        heroSlides: [
            {
                badge: "Autonomous Sentry",
                title: "Electronic",
                highlight: "Security",
                description: "Self-healing sensor networks and AI-powered perimeter defense.",
                image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
            },
            {
                badge: "IoT Fortress",
                title: "Next-Gen",
                highlight: "Access Control",
                description: "Biometric and contactless identity management with zero-trust architecture.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
            },
            {
                badge: "Visual AI",
                title: "Smart",
                highlight: "Surveillance",
                description: "Cloud-VMS with behavioral analytics and instant threat categorization.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 2.1
            {
                id: "2.1",
                title: "AI-Powered Video Intelligence Platform (AIP-VIP)",
                subtitle: "Advanced video analytics transforming passive cameras into active threat detection sensors with behavioral understanding.",
                icon: MonitorDot,
                stats: [
                    { value: "400", suffix: "%", prefix: "↑", label: "Threat Detection", icon: Video },
                    { value: "85", suffix: "%", prefix: "↓", label: "False Alarm Rate", icon: ShieldCheck },
                    { value: "60", suffix: "%", prefix: "↓", label: "Control Room Labor", icon: Users },
                    { value: "99.2", suffix: "%", label: "Object Accuracy", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Computer Vision",
                        features: ["Facial recognition (NIST)", "Aggression detection", "Crowd dynamics AI"],
                        icon: Camera
                    },
                    {
                        title: "Edge AI",
                        features: ["NVIDIA Jetson processing", "Bandwidth optimization", "Privacy preservation"],
                        icon: Cpu
                    },
                    {
                        title: "Visual Sentinel",
                        features: ["Abandoned bag detection", "Driver tracking mesh", "Auto-evacuation prep"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Operational Intel",
                        features: ["Heat mapping insights", "Speed estimation AI", "Conversion analysis"],
                        icon: BarChart
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of AI-Powered Video Intelligence Platform (AIP-VIP) is made seamless by our fully trained and certified deployment teams. We rigorously select and continuously train our staff to align with the advanced requirements of the Electronic Security Intelligence sector. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Electronic Security Intelligence.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Electronic Security Intelligence industry curves.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing AI-Powered Video Intelligence Platform (AIP-VIP) deployments.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Electronic Security Intelligence critical events.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in AI-Powered Video Intelligence Platform (AIP-VIP)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of AI-Powered Video Intelligence Platform (AIP-VIP) to our team with a robust, outcome-based partnership. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Electronic Security Intelligence footprint. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Electronic Security Intelligence expectations.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Electronic Security Intelligence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of AI-Powered Video Intelligence Platform (AIP-VIP) requires deep insight and careful architectural planning. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Electronic Security Intelligence goals. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale AI-Powered Video Intelligence Platform (AIP-VIP) deployment.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Electronic Security Intelligence.",
                            "Change Management: Ensuring your workforce is prepared for Electronic Security Intelligence technological transitions.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to AI-Powered Video Intelligence Platform (AIP-VIP)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving AI-Powered Video Intelligence Platform (AIP-VIP) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Electronic Security Intelligence operations. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Middleware Orchestration: Advanced translation layers handling complex Electronic Security Intelligence data flows.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated AI-Powered Video Intelligence Platform (AIP-VIP) modules.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Electronic Security Intelligence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with AI-Powered Video Intelligence Platform (AIP-VIP)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing AI-Powered Video Intelligence Platform (AIP-VIP). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Electronic Security Intelligence assets. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Electronic Security Intelligence assets.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Electronic Security Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within AI-Powered Video Intelligence Platform (AIP-VIP) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Electronic Security Intelligence. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Electronic Security Intelligence.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Electronic Security Intelligence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for AI-Powered Video Intelligence Platform (AIP-VIP), ensuring it is fully optimized before you take over. We craft intricate operating playbooks, meticulously documenting every procedure required for Electronic Security Intelligence success. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the AI-Powered Video Intelligence Platform (AIP-VIP) ecosystem.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Electronic Security Intelligence.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying AI-Powered Video Intelligence Platform (AIP-VIP) is only half the battle; ensuring your team has instantaneous access to solutions is the other. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Electronic Security Intelligence expertise. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Electronic Security Intelligence maintenance procedures.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent AI-Powered Video Intelligence Platform (AIP-VIP) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Transform Your Video Assets.",
                    buttonText: "Deploy Video AI",
                    link: "/contact"
                }
            },
            // OFFERING 2.2
            {
                id: "2.2",
                title: "Perimeter Intrusion Detection Intelligence (PIDI)",
                subtitle: "Multi-layer perimeter protection combining physical barriers, sensor fusion, and autonomous response.",
                icon: Radar,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Breach Success", icon: ShieldCheck },
                    { value: "70", suffix: "%", prefix: "↓", label: "Nuisance Alarms", icon: CheckCircle2 },
                    { value: "40", suffix: "%", prefix: "↓", label: "Perimeter Labor", icon: Database },
                    { value: "150", suffix: "m", label: "Radar Range", icon: Radar }
                ],
                portfolio: [
                    {
                        title: "Sensor Fusion",
                        features: ["Fiber optic fence detection", "Ground radar (150m)", "LiDAR precision ranging"],
                        icon: Wifi
                    },
                    {
                        title: "Physical Barriers",
                        features: ["Anti-ram bollards", "Crash-rated fencing", "Mantraps / Turnstiles"],
                        icon: Lock
                    },
                    {
                        title: "Perimeter Brain",
                        features: ["Fence vibration analysis", "Threat intent inference", "Observational response"],
                        icon: Brain
                    },
                    {
                        title: "Deterrence",
                        features: ["Audio challenge systems", " deterrent lighting", "Smoke screen deployment"],
                        icon: Siren
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Perimeter Intrusion Detection Intelligence (PIDI). Our teams act as an extension of your own, filling critical knowledge gaps within your Electronic Security Intelligence initiatives. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Perimeter Intrusion Detection Intelligence (PIDI) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Perimeter Intrusion Detection Intelligence (PIDI).",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Perimeter Intrusion Detection Intelligence (PIDI).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Perimeter Intrusion Detection Intelligence (PIDI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Perimeter Intrusion Detection Intelligence (PIDI). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Electronic Security Intelligence footprint. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Electronic Security Intelligence expectations.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Perimeter Intrusion Detection Intelligence (PIDI).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Perimeter Intrusion Detection Intelligence (PIDI) into your legacy enterprise. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Electronic Security Intelligence portfolio. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Electronic Security Intelligence technological transitions.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Electronic Security Intelligence.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Perimeter Intrusion Detection Intelligence (PIDI) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Perimeter Intrusion Detection Intelligence (PIDI) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Perimeter Intrusion Detection Intelligence (PIDI) communicates natively with your central platforms. We harmonize legacy applications with modern cloud-native architectures prevalent in Electronic Security Intelligence operations. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Perimeter Intrusion Detection Intelligence (PIDI).",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Perimeter Intrusion Detection Intelligence (PIDI) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Perimeter Intrusion Detection Intelligence (PIDI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Electronic Security Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Perimeter Intrusion Detection Intelligence (PIDI).",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Electronic Security Intelligence assets.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Electronic Security Intelligence workflows instantly.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Electronic Security Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Perimeter Intrusion Detection Intelligence (PIDI) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Electronic Security Intelligence ecosystem. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Perimeter Intrusion Detection Intelligence (PIDI) peak states.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Perimeter Intrusion Detection Intelligence (PIDI)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Perimeter Intrusion Detection Intelligence (PIDI), ensuring it is fully optimized before you take over. Our experts lead intense, hands-on training regimens to completely upskill your internal Electronic Security Intelligence teams. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Electronic Security Intelligence success.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Perimeter Intrusion Detection Intelligence (PIDI). Standard Operating Procedures become living digital documents, evolving alongside your Electronic Security Intelligence infrastructure. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Perimeter Intrusion Detection Intelligence (PIDI) into digital libraries.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Electronic Security Intelligence database.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Deter Perimeter Breaches.",
                    buttonText: "Enable Perimeter Intel",
                    link: "/contact"
                }
            },
            // OFFERING 2.3
            {
                id: "2.3",
                title: "Integrated Access & Intrusion Management (IAIM)",
                subtitle: "Unified physical security platform combining access, intrusion, and identity management with AI risk adaptation.",
                icon: ShieldAlert,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Unauthorized Access", icon: Lock },
                    { value: "50", suffix: "%", prefix: "↓", label: "Admin Labor", icon: Users },
                    { value: "100", suffix: "%", label: "Audit Traceability", icon: FileCheck },
                    { value: "24", suffix: "/7", label: "Event Correlation", icon: Activity }
                ],
                portfolio: [
                    {
                        title: "Access Control",
                        features: ["Multimodal biometrics", "Mobile credentials", "Anti-passback logic"],
                        icon: Fingerprint
                    },
                    {
                        title: "Intrusion Detect",
                        features: ["Glass break detection", "Safe/Vault monitoring", "Duress alarms"],
                        icon: AlertTriangle
                    },
                    {
                        title: "Access Intel",
                        features: ["Anomalous pattern flags", "HR system correlation", "Silent officer dispatch"],
                        icon: UserCheck
                    },
                    {
                        title: "Risk Adaptation",
                        features: ["Frictionless low-risk entry", "Escort requirement AI", "Time-based restrictions"],
                        icon: Settings
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Integrated Access & Intrusion Management (IAIM) implementation. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Electronic Security Intelligence. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Electronic Security Intelligence.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Integrated Access & Intrusion Management (IAIM).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Electronic Security Intelligence industry curves."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Integrated Access & Intrusion Management (IAIM) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Electronic Security Intelligence domain, maintaining strict audit trails. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Preventative Incident Management: Identifying anomalies before they mature into Electronic Security Intelligence disruptions.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Electronic Security Intelligence expectations.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Integrated Access & Intrusion Management (IAIM).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Integrated Access & Intrusion Management (IAIM) by leveraging our customized assessment and strategic blueprinting. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Electronic Security Intelligence workflows. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Integrated Access & Intrusion Management (IAIM).",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Integrated Access & Intrusion Management (IAIM) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Electronic Security Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Integrated Access & Intrusion Management (IAIM) with your wider network. We harmonize legacy applications with modern cloud-native architectures prevalent in Electronic Security Intelligence operations. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Integrated Access & Intrusion Management (IAIM) modules.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Electronic Security Intelligence requirements.",
                            "Middleware Orchestration: Advanced translation layers handling complex Electronic Security Intelligence data flows.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Integrated Access & Intrusion Management (IAIM)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Integrated Access & Intrusion Management (IAIM). Our neural networks simulate thousands of permutations instantly to solve complex Electronic Security Intelligence scheduling and resource issues. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Integrated Access & Intrusion Management (IAIM).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Integrated Access & Intrusion Management (IAIM). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Electronic Security Intelligence safety thresholds. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Integrated Access & Intrusion Management (IAIM).",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Integrated Access & Intrusion Management (IAIM) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Integrated Access & Intrusion Management (IAIM) with our comprehensive implementation and handover framework. Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Electronic Security Intelligence. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Electronic Security Intelligence success.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Integrated Access & Intrusion Management (IAIM).",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Integrated Access & Intrusion Management (IAIM) environment. Standard Operating Procedures become living digital documents, evolving alongside your Electronic Security Intelligence infrastructure. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Integrated Access & Intrusion Management (IAIM) into digital libraries.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Integrated Access & Intrusion Management (IAIM) updates instantly across the grid."
                        ]
                    }
                ],


                cta: {
                    text: "Unify Your Access Security.",
                    buttonText: "Deploy Unified Access",
                    link: "/contact"
                }
            },
            // OFFERING 2.4
            {
                id: "2.4",
                title: "Fire & Life Safety Intelligence (FLSI-ES)",
                subtitle: "Intelligent fire detection and emergency response combining sensor fusion and autonomous evacuation.",
                icon: Flame,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Detection Time", icon: Clock },
                    { value: "40", suffix: "%", prefix: "↓", label: "Evacuation Time", icon: Activity },
                    { value: "90", suffix: "%", prefix: "↓", label: "False Alarms", icon: CheckCircle2 },
                    { value: "100", suffix: "%", label: "Zoned Notification", icon: Radio }
                ],
                portfolio: [
                    {
                        title: "Detect Intel",
                        features: ["Video flame detection", "Aspiration sensing", "Linear heat cables"],
                        icon: Microscope
                    },
                    {
                        title: "Voice Alarm",
                        features: ["Zoned multilingual messaging", "Firefighter comms mesh", "Accessibility alerts"],
                        icon: Mic2
                    },
                    {
                        title: "Fire Intelligence",
                        features: ["Pre-combustion alerts", "Fire type inference", "Auto-suppression sync"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Advanced Response",
                        features: ["Digital twin orienting", "Assembly point mgmt", "Hotspot thermal tracking"],
                        icon: Layout
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Fire & Life Safety Intelligence (FLSI-ES) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Electronic Security Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Fire & Life Safety Intelligence (FLSI-ES).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Electronic Security Intelligence.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Fire & Life Safety Intelligence (FLSI-ES).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Fire & Life Safety Intelligence (FLSI-ES) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Fire & Life Safety Intelligence (FLSI-ES) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Electronic Security Intelligence domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Fire & Life Safety Intelligence (FLSI-ES).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Electronic Security Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Electronic Security Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Fire & Life Safety Intelligence (FLSI-ES) by leveraging our customized assessment and strategic blueprinting. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Electronic Security Intelligence portfolio. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Electronic Security Intelligence.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Fire & Life Safety Intelligence (FLSI-ES) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Fire & Life Safety Intelligence (FLSI-ES) deployment. Our process encompasses zero-trust security postures, ensuring data integrity across the Electronic Security Intelligence spectrum. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Fire & Life Safety Intelligence (FLSI-ES).",
                            "Middleware Orchestration: Advanced translation layers handling complex Electronic Security Intelligence data flows.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Electronic Security Intelligence requirements.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Fire & Life Safety Intelligence (FLSI-ES). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Electronic Security Intelligence. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Fire & Life Safety Intelligence (FLSI-ES).",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Electronic Security Intelligence assets.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Electronic Security Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Fire & Life Safety Intelligence (FLSI-ES) are completed with absolute zero latency. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Electronic Security Intelligence safety thresholds. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Fire & Life Safety Intelligence (FLSI-ES) peak states.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Electronic Security Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Fire & Life Safety Intelligence (FLSI-ES). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Electronic Security Intelligence. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Fire & Life Safety Intelligence (FLSI-ES).",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Electronic Security Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Our advanced knowledge architectures capture, organize, and distribute critical data concerning Fire & Life Safety Intelligence (FLSI-ES). We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Electronic Security Intelligence expertise. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Fire & Life Safety Intelligence (FLSI-ES) into digital libraries.",
                            "NLP-Driven Search Architectures: Querying complex Electronic Security Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Fire & Life Safety Intelligence (FLSI-ES) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Life and Assets.",
                    buttonText: "Enable Fire Safety AI",
                    link: "/contact"
                }
            },
            // OFFERING 2.5
            {
                id: "2.5",
                title: "Security Communication & Command Intelligence (SCCI)",
                subtitle: "Unified security communication platform ensuring seamless coordination between guards and responders.",
                icon: Smartphone,
                stats: [
                    { value: "50", suffix: "%", prefix: "↓", label: "Coordination Time", icon: Clock },
                    { value: "100", suffix: "%", label: "Comms Reliability", icon: Wifi },
                    { value: "30", suffix: "%", prefix: "↓", label: "Command Labor", icon: Users },
                    { value: "94", suffix: "%", label: "Incident Accuracy", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Unified Comms",
                        features: ["LTE/TETRA integration", "Body cam streaming", "AR info overlay"],
                        icon: Smartphone
                    },
                    {
                        title: "Command Center",
                        features: ["Video wall intelligence", "GIS incident mapping", "Decision support AI"],
                        icon: Layout
                    },
                    {
                        title: "Command Intel",
                        features: ["Attack pattern discovery", "Tac-formation recommendations", "Lockdown automation"],
                        icon: Siren
                    },
                    {
                        title: "Crisis Mgmt",
                        features: ["Active shooter simulation", "Media management AI", "Trauma counseling sync"],
                        icon: MessageSquare
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Security Communication & Command Intelligence (SCCI) requires a workforce possessing highly specialized technical acumen. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Electronic Security Intelligence strategy. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Security Communication & Command Intelligence (SCCI).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Security Communication & Command Intelligence (SCCI) deployments.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Security Communication & Command Intelligence (SCCI)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Security Communication & Command Intelligence (SCCI), operational risks are shifted away from your balance sheet. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Electronic Security Intelligence footprint. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Electronic Security Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Electronic Security Intelligence expectations.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Electronic Security Intelligence disruptions.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Security Communication & Command Intelligence (SCCI)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Security Communication & Command Intelligence (SCCI) into your legacy enterprise. Our seasoned experts bring decades of relevant exposure across the diverse landscape of Electronic Security Intelligence. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Electronic Security Intelligence.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Security Communication & Command Intelligence (SCCI) deployment.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Security Communication & Command Intelligence (SCCI) deployment. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Electronic Security Intelligence data requirements. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Electronic Security Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Middleware Orchestration: Advanced translation layers handling complex Electronic Security Intelligence data flows.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Security Communication & Command Intelligence (SCCI). The platform autonomously identifies hidden optimization pathways within your broader Electronic Security Intelligence operational footprint. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Electronic Security Intelligence assets.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Security Communication & Command Intelligence (SCCI) interventions happen at machine speed, autonomously. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Electronic Security Intelligence safety thresholds. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Electronic Security Intelligence components.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Security Communication & Command Intelligence (SCCI). Our experts lead intense, hands-on training regimens to completely upskill your internal Electronic Security Intelligence teams. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Electronic Security Intelligence.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Security Communication & Command Intelligence (SCCI)."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Security Communication & Command Intelligence (SCCI) environment. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Electronic Security Intelligence facilities. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Security Communication & Command Intelligence (SCCI) into digital libraries.",
                            "Video Process Documentation: High-quality visual recordings of critical Electronic Security Intelligence maintenance procedures.",
                            "NLP-Driven Search Architectures: Querying complex Electronic Security Intelligence problems in natural language for exact solutions.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Unify Your Command.",
                    buttonText: "Deploy Command AI",
                    link: "/contact"
                }
            },
            // OFFERING 2.6
            {
                id: "2.6",
                title: "Cyber-Physical Security Integration (CPSI)",
                subtitle: "Protection against converged threats targeting both digital and physical infrastructure.",
                icon: Network,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Incident Success", icon: ShieldCheck },
                    { value: "60", suffix: "%", prefix: "↓", label: "Detection Time", icon: Activity },
                    { value: "40", suffix: "%", prefix: "↓", label: "Response Cost", icon: Database },
                    { value: "100", suffix: "%", label: "Network Integrity", icon: Lock }
                ],
                portfolio: [
                    {
                        title: "Convergence",
                        features: ["IT/OT segmentation AI", "Access correlation logs", "Supply chain vetting"],
                        icon: HardDrive
                    },
                    {
                        title: "Threat Intel",
                        features: ["Dark web monitoring", "Attack surface mapping", "Vulnerability tracking"],
                        icon: Globe
                    },
                    {
                        title: "Convergence Gard",
                        features: ["Exfiltration presumption", "Network isolation sync", "Forensic imaging"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Infrastructure",
                        features: ["SCADA/ICS protection", "Grid security hardening", "Authenticity verification"],
                        icon: Building2
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Cyber-Physical Security Integration (CPSI) implementation. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Electronic Security Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Cyber-Physical Security Integration (CPSI).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Electronic Security Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Cyber-Physical Security Integration (CPSI).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Cyber-Physical Security Integration (CPSI). Our proactive diagnostic frameworks identify anomalies within your Electronic Security Intelligence infrastructure before they cause downtime. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Cyber-Physical Security Integration (CPSI).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Electronic Security Intelligence disruptions.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Cyber-Physical Security Integration (CPSI) by leveraging our customized assessment and strategic blueprinting. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Electronic Security Intelligence portfolio. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Electronic Security Intelligence.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Cyber-Physical Security Integration (CPSI) deployment.",
                            "Compliance Auditing: Ensuring your Electronic Security Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Cyber-Physical Security Integration (CPSI) communicates natively with your central platforms. We harmonize legacy applications with modern cloud-native architectures prevalent in Electronic Security Intelligence operations. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Cyber-Physical Security Integration (CPSI) modules.",
                            "Middleware Orchestration: Advanced translation layers handling complex Electronic Security Intelligence data flows.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Electronic Security Intelligence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Cyber-Physical Security Integration (CPSI)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Cyber-Physical Security Integration (CPSI). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Electronic Security Intelligence intervention. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Cyber-Physical Security Integration (CPSI).",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Cyber-Physical Security Integration (CPSI).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Electronic Security Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Cyber-Physical Security Integration (CPSI) interventions happen at machine speed, autonomously. They continuously negotiate with external APIs and internal databases to dynamically route Electronic Security Intelligence resources. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Electronic Security Intelligence components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Cyber-Physical Security Integration (CPSI) peak states.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Cyber-Physical Security Integration (CPSI), ensuring it is fully optimized before you take over. We craft intricate operating playbooks, meticulously documenting every procedure required for Electronic Security Intelligence success. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Electronic Security Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Cyber-Physical Security Integration (CPSI) ecosystem.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Cyber-Physical Security Integration (CPSI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Integrated learning management tools continuously certify your staff on the latest Electronic Security Intelligence methodologies. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Electronic Security Intelligence database.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Defend Your Infrastructure.",
                    buttonText: "Integrate Cybersecurity",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "command-control",
        type: "security-services",
        title: "Smart Command & Control Intelligence",
        subtitle: "Autonomous Security Operations Centers",
        heroSlides: [
            {
                badge: "Strategic Command",
                title: "Command &",
                highlight: "Control",
                description: "Consolidated security operations center with unified incident orchestration.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            },
            {
                badge: "Global Ops",
                title: "Mission",
                highlight: "Critical",
                description: "Managing enterprise-scale security assets from a single pane of glass.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            },
            {
                badge: "AI Orchestrator",
                title: "Joint",
                highlight: "Response",
                description: "Automating 80% of routine alerts through dynamic SOP execution.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 3.1
            {
                id: "3.1",
                title: "AI-Security Intelligence Command Center (AI-SICC)",
                subtitle: "Fully autonomous security operations center where AI filters noise, predicts threats, and orchestrates response.",
                icon: Terminal,
                stats: [
                    { value: "70", suffix: "%", prefix: "↓", label: "Staffing Needs", icon: Users },
                    { value: "300", suffix: "%", prefix: "↑", label: "Threat Detection", icon: ShieldCheck },
                    { value: "90", suffix: "%", prefix: "↓", label: "Response Time", icon: Clock },
                    { value: "85", suffix: "%", label: "AI Resolution", icon: Brain }
                ],
                portfolio: [
                    {
                        title: "AI Brain",
                        features: ["Neural threat assessment", "Predictive risk modeling", "Autonomous decision trees"],
                        icon: Brain
                    },
                    {
                        title: "Data Fusion",
                        features: ["Video & IoT integration", "Cyber-Physical data link", "Social media ingestion"],
                        icon: Network
                    },
                    {
                        title: "Security Brain",
                        features: ["50k daily event processing", "Critical alert auto-gen", "VIP extraction routing"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Automation",
                        features: ["Workflow orchestration", "Resource dispatch AI", "Outcome learning loops"],
                        icon: Settings
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of AI-Security Intelligence Command Center (AI-SICC). They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Smart Command & Control Intelligence. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within AI-Security Intelligence Command Center (AI-SICC).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing AI-Security Intelligence Command Center (AI-SICC) deployments.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in AI-Security Intelligence Command Center (AI-SICC).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of AI-Security Intelligence Command Center (AI-SICC). Our proactive diagnostic frameworks identify anomalies within your Smart Command & Control Intelligence infrastructure before they cause downtime. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for AI-Security Intelligence Command Center (AI-SICC).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Smart Command & Control Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Smart Command & Control Intelligence expectations.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Smart Command & Control Intelligence disruptions.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of AI-Security Intelligence Command Center (AI-SICC) requires deep insight and careful architectural planning. By developing bespoke maturity models, we ensure your organization scales effectively within the Smart Command & Control Intelligence sector. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Smart Command & Control Intelligence technological transitions.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Smart Command & Control Intelligence.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced AI-Security Intelligence Command Center (AI-SICC) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your AI-Security Intelligence Command Center (AI-SICC) deployment. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Smart Command & Control Intelligence data requirements. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Smart Command & Control Intelligence data flows.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Smart Command & Control Intelligence network.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated AI-Security Intelligence Command Center (AI-SICC) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to AI-Security Intelligence Command Center (AI-SICC). The platform autonomously identifies hidden optimization pathways within your broader Smart Command & Control Intelligence operational footprint. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Smart Command & Control Intelligence contexts.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of AI-Security Intelligence Command Center (AI-SICC). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Smart Command & Control Intelligence. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for AI-Security Intelligence Command Center (AI-SICC).",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Smart Command & Control Intelligence.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of AI-Security Intelligence Command Center (AI-SICC). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Smart Command & Control Intelligence. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Smart Command & Control Intelligence success.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the AI-Security Intelligence Command Center (AI-SICC) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Smart Command & Control Intelligence.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding AI-Security Intelligence Command Center (AI-SICC), preventing institutional memory loss. Standard Operating Procedures become living digital documents, evolving alongside your Smart Command & Control Intelligence infrastructure. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Smart Command & Control Intelligence database.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent AI-Security Intelligence Command Center (AI-SICC) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Orchestrate Your Security Operations.",
                    buttonText: "Deploy Security Brain",
                    link: "/contact"
                }
            },
            // OFFERING 3.2
            {
                id: "3.2",
                title: "Predictive Threat Intelligence & Risk Analytics (PTIRA)",
                subtitle: "Anticipatory security management using AI to predict threats through pattern analysis and intelligence fusion.",
                icon: Target,
                stats: [
                    { value: "40", suffix: "%", prefix: "↓", label: "Security Incidents", icon: AlertTriangle },
                    { value: "25", suffix: "%", prefix: "↓", label: "Security Costs", icon: Database },
                    { value: "100", suffix: "%", label: "Readiness Score", icon: CheckCircle2 },
                    { value: "78", suffix: "%", label: "Prediction Accuracy", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Data Sources",
                        features: ["Crime stat ingestion", "Social sentiment analysis", "Geopolitical mapping"],
                        icon: Globe
                    },
                    {
                        title: "Risk Scoring",
                        features: ["Dynamic threat levels", "Impact modeling", "Vulnerability assessment"],
                        icon: BarChart
                    },
                    {
                        title: "Threat Oracle",
                        features: ["Theft probability modeling", "Resource surge triggers", "Target hardening alerts"],
                        icon: Brain
                    },
                    {
                        title: "Outcome Learn",
                        features: ["Model accuracy updates", "Feature importance tuning", "Refinement loops"],
                        icon: History
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Predictive Threat Intelligence & Risk Analytics (PTIRA) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Smart Command & Control Intelligence umbrella. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Smart Command & Control Intelligence critical events.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Smart Command & Control Intelligence.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Predictive Threat Intelligence & Risk Analytics (PTIRA) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Predictive Threat Intelligence & Risk Analytics (PTIRA) guarantees strict adherence to performance metrics. Through transparent digital dashboards, you maintain total visibility over all Smart Command & Control Intelligence operations without the daily hassle. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Smart Command & Control Intelligence disruptions.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Smart Command & Control Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Predictive Threat Intelligence & Risk Analytics (PTIRA) by leveraging our customized assessment and strategic blueprinting. By developing bespoke maturity models, we ensure your organization scales effectively within the Smart Command & Control Intelligence sector. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Smart Command & Control Intelligence.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Predictive Threat Intelligence & Risk Analytics (PTIRA) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Predictive Threat Intelligence & Risk Analytics (PTIRA) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Smart Command & Control Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Smart Command & Control Intelligence requirements.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Predictive Threat Intelligence & Risk Analytics (PTIRA) modules.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Smart Command & Control Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Predictive Threat Intelligence & Risk Analytics (PTIRA). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Smart Command & Control Intelligence intervention. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Smart Command & Control Intelligence workflows instantly.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Smart Command & Control Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Predictive Threat Intelligence & Risk Analytics (PTIRA) are completed with absolute zero latency. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Smart Command & Control Intelligence networks. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Predictive Threat Intelligence & Risk Analytics (PTIRA) peak states.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Predictive Threat Intelligence & Risk Analytics (PTIRA) with our comprehensive implementation and handover framework. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Smart Command & Control Intelligence adoption. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Smart Command & Control Intelligence.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Predictive Threat Intelligence & Risk Analytics (PTIRA) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Predictive Threat Intelligence & Risk Analytics (PTIRA).",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Smart Command & Control Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Predictive Threat Intelligence & Risk Analytics (PTIRA) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Standard Operating Procedures become living digital documents, evolving alongside your Smart Command & Control Intelligence infrastructure. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Predictive Threat Intelligence & Risk Analytics (PTIRA) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "NLP-Driven Search Architectures: Querying complex Smart Command & Control Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Anticipate Security Risks.",
                    buttonText: "Enable Predictive Intel",
                    link: "/contact"
                }
            },
            // OFFERING 3.3
            {
                id: "3.3",
                title: "Autonomous Incident Response Orchestration (AIRO)",
                subtitle: "Self-executing incident management from detection to resolution with AI-driven coordination.",
                icon: Zap,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Resolution Time", icon: Clock },
                    { value: "40", suffix: "%", prefix: "↓", label: "Biz Disruption", icon: Activity },
                    { value: "30", suffix: "%", prefix: "↓", label: "Incident Costs", icon: Database },
                    { value: "100", suffix: "%", label: "SOP Compliance", icon: FileCheck }
                ],
                portfolio: [
                    {
                        title: "Orchestration",
                        features: ["Automatic dispatch AI", "Route optimization", "Skill-proximity match"],
                        icon: MapPin
                    },
                    {
                        title: "Conductor AI",
                        features: ["Fire-Occupancy analytics", "Multi-stakeholder sync", "Utility isolation auto"],
                        icon: Siren
                    },
                    {
                        title: "Response Opt",
                        features: ["Dynamic skill allocation", "Fatigue management", "Backup prep AI"],
                        icon: Users
                    },
                    {
                        title: "Post-Incident",
                        features: ["Evidence preservation", "Regulatory auto-reporting", "Lessons learned gen"],
                        icon: History
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Autonomous Incident Response Orchestration (AIRO). Our teams act as an extension of your own, filling critical knowledge gaps within your Smart Command & Control Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Autonomous Incident Response Orchestration (AIRO) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Incident Response Orchestration (AIRO).",
                            "Process Adherence: Meticulous execution of standard operating procedures for Smart Command & Control Intelligence.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Smart Command & Control Intelligence critical events."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Autonomous Incident Response Orchestration (AIRO). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Smart Command & Control Intelligence footprint. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Smart Command & Control Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Smart Command & Control Intelligence expectations.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Autonomous Incident Response Orchestration (AIRO).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Autonomous Incident Response Orchestration (AIRO)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Autonomous Incident Response Orchestration (AIRO) advisory tier. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Smart Command & Control Intelligence goals. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Autonomous Incident Response Orchestration (AIRO) deployment.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Smart Command & Control Intelligence.",
                            "Compliance Auditing: Ensuring your Smart Command & Control Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Autonomous Incident Response Orchestration (AIRO) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Autonomous Incident Response Orchestration (AIRO) communicates natively with your central platforms. We harmonize legacy applications with modern cloud-native architectures prevalent in Smart Command & Control Intelligence operations. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Autonomous Incident Response Orchestration (AIRO) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Smart Command & Control Intelligence network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Autonomous Incident Response Orchestration (AIRO)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Autonomous Incident Response Orchestration (AIRO) with our AI backbone, we enable predictive forecasting rather than historical reporting. The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Smart Command & Control Intelligence. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Autonomous Incident Response Orchestration (AIRO).",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Smart Command & Control Intelligence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Autonomous Incident Response Orchestration (AIRO).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Autonomous Incident Response Orchestration (AIRO) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Smart Command & Control Intelligence ecosystem. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Smart Command & Control Intelligence.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Autonomous Incident Response Orchestration (AIRO). During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Smart Command & Control Intelligence adoption. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Autonomous Incident Response Orchestration (AIRO)."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Autonomous Incident Response Orchestration (AIRO), preventing institutional memory loss. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Smart Command & Control Intelligence expertise. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Autonomous Incident Response Orchestration (AIRO) into digital libraries.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "NLP-Driven Search Architectures: Querying complex Smart Command & Control Intelligence problems in natural language for exact solutions.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Respond with Autonomy.",
                    buttonText: "Deploy Response AI",
                    link: "/contact"
                }
            },
            // OFFERING 3.4
            {
                id: "3.4",
                title: "Digital Evidence & Investigation Intelligence (DEII)",
                subtitle: "AI-enhanced video analysis and forensic preservation for comprehensive investigation support.",
                icon: Gavel,
                stats: [
                    { value: "45", suffix: "%", prefix: "↑", label: "Case Resolution", icon: Search },
                    { value: "70", suffix: "%", prefix: "↓", label: "Investigation Time", icon: Clock },
                    { value: "30", suffix: "%", prefix: "↓", label: "Claim Processing", icon: FileCheck },
                    { value: "100", suffix: "%", label: "Evidence Integrity", icon: ShieldCheck }
                ],
                portfolio: [
                    {
                        title: "Video Forensics",
                        features: ["Resolution enhancement", "Suspect tracking mesh", "Behavior reconstruction"],
                        icon: Video
                    },
                    {
                        title: "Detective AI",
                        features: ["Cross-incident correlation", "MO analysis pattern", " accomplice ID"],
                        icon: Search
                    },
                    {
                        title: "Evidence Mgmt",
                        features: ["Chain of custody auto", "Tamper-proof storage", "Admissibility assurance"],
                        icon: Lock
                    },
                    {
                        title: "Legal Support",
                        features: ["Evidence package gen", "Police submission auto", "Insurance documentation"],
                        icon: Gavel
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Digital Evidence & Investigation Intelligence (DEII), we provide elite personnel tailored to your specific ecosystem. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Smart Command & Control Intelligence strategy. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Smart Command & Control Intelligence industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Digital Evidence & Investigation Intelligence (DEII).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Digital Evidence & Investigation Intelligence (DEII) deployments."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Digital Evidence & Investigation Intelligence (DEII) to our team with a robust, outcome-based partnership. Through transparent digital dashboards, you maintain total visibility over all Smart Command & Control Intelligence operations without the daily hassle. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Digital Evidence & Investigation Intelligence (DEII).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Smart Command & Control Intelligence.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Digital Evidence & Investigation Intelligence (DEII) by leveraging our customized assessment and strategic blueprinting. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Smart Command & Control Intelligence goals. Ultimately, our guidance accelerates your digital transition and prevents costly architectural missteps.",
                        "items": [
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Digital Evidence & Investigation Intelligence (DEII) deployment.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Smart Command & Control Intelligence.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Smart Command & Control Intelligence technological transitions.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Digital Evidence & Investigation Intelligence (DEII)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Digital Evidence & Investigation Intelligence (DEII) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Smart Command & Control Intelligence data requirements. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Middleware Orchestration: Advanced translation layers handling complex Smart Command & Control Intelligence data flows.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Smart Command & Control Intelligence requirements.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Digital Evidence & Investigation Intelligence (DEII) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Digital Evidence & Investigation Intelligence (DEII). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Smart Command & Control Intelligence intervention. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Smart Command & Control Intelligence workflows instantly.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Smart Command & Control Intelligence contexts.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Digital Evidence & Investigation Intelligence (DEII).",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Digital Evidence & Investigation Intelligence (DEII) are completed with absolute zero latency. Our system applies strict compliance safeguards, ensuring autonomous actions never violate Smart Command & Control Intelligence safety thresholds. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Digital Evidence & Investigation Intelligence (DEII)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Digital Evidence & Investigation Intelligence (DEII) with our comprehensive implementation and handover framework. Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Smart Command & Control Intelligence. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Digital Evidence & Investigation Intelligence (DEII) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Digital Evidence & Investigation Intelligence (DEII) are permanently codified. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Smart Command & Control Intelligence facilities. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Digital Evidence & Investigation Intelligence (DEII) into digital libraries.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Digital Evidence & Investigation Intelligence (DEII) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Smart Command & Control Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Smart Command & Control Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Resolve Cases Faster.",
                    buttonText: "Enable Detective AI",
                    link: "/contact"
                }
            },
            // OFFERING 3.5
            {
                id: "3.5",
                title: "Security Operations Analytics & Optimization (SOAO)",
                subtitle: "AI-driven analysis of security operations identifying efficiency gains and optimization opportunities.",
                icon: BarChart,
                stats: [
                    { value: "20", suffix: "%", prefix: "↓", label: "Operations Cost", icon: Database },
                    { value: "35", suffix: "%", prefix: "↑", label: "KPI Achievement", icon: Target },
                    { value: "40", suffix: "%", prefix: "↓", label: "System Downtime", icon: AlertTriangle },
                    { value: "12", prefix: "₹", suffix: "L", label: "Annual Benefit", icon: TrendingUp }
                ],
                portfolio: [
                    {
                        title: "Performance",
                        features: ["Response time tracking", "Root cause analytics", "KPI benchmarking"],
                        icon: Activity
                    },
                    {
                        title: "Optimizer AI",
                        features: ["Labor deployment modeling", "Post relocation ROI", "Route modification AI"],
                        icon: Settings
                    },
                    {
                        title: "System Health",
                        features: ["Device failure prediction", "Preventive scheduling", "Lifecycle management"],
                        icon: Server
                    },
                    {
                        title: "Process Imp",
                        features: ["Standardization AI", "Waste activity removal", "Workflow streamlining"],
                        icon: RefreshCw
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Security Operations Analytics & Optimization (SOAO) is made seamless by our fully trained and certified deployment teams. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Smart Command & Control Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Smart Command & Control Intelligence industry curves.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Security Operations Analytics & Optimization (SOAO) deployments.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Smart Command & Control Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Security Operations Analytics & Optimization (SOAO) guarantees strict adherence to performance metrics. We ensure complete compliance with international standards relevant to the Smart Command & Control Intelligence domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Security Operations Analytics & Optimization (SOAO).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Security Operations Analytics & Optimization (SOAO).",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Security Operations Analytics & Optimization (SOAO), ensuring your technological investments are future-proof. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Smart Command & Control Intelligence goals. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Smart Command & Control Intelligence technological transitions.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Security Operations Analytics & Optimization (SOAO) capabilities.",
                            "Compliance Auditing: Ensuring your Smart Command & Control Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Smart Command & Control Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Security Operations Analytics & Optimization (SOAO) communicates natively with your central platforms. Through advanced middleware development, we translate disparate protocols into a unified Smart Command & Control Intelligence language. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Security Operations Analytics & Optimization (SOAO) modules.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Smart Command & Control Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Security Operations Analytics & Optimization (SOAO). Our neural networks simulate thousands of permutations instantly to solve complex Smart Command & Control Intelligence scheduling and resource issues. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Smart Command & Control Intelligence workflows instantly.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Security Operations Analytics & Optimization (SOAO).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Smart Command & Control Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Security Operations Analytics & Optimization (SOAO). It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Smart Command & Control Intelligence ecosystem. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Smart Command & Control Intelligence components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Security Operations Analytics & Optimization (SOAO) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Security Operations Analytics & Optimization (SOAO). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Smart Command & Control Intelligence. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Smart Command & Control Intelligence success.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Security Operations Analytics & Optimization (SOAO) ecosystem.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Security Operations Analytics & Optimization (SOAO) are permanently codified. Standard Operating Procedures become living digital documents, evolving alongside your Smart Command & Control Intelligence infrastructure. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Security Operations Analytics & Optimization (SOAO) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Smart Command & Control Intelligence database.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Security Operations Analytics & Optimization (SOAO) into digital libraries.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Optimize Your ROI.",
                    buttonText: "Enable Optimizer AI",
                    link: "/contact"
                }
            },
            // OFFERING 3.6
            {
                id: "3.6",
                title: "Stakeholder Communication & Experience Intelligence (SCEI)",
                subtitle: "Intelligent security communication ensuring appropriate information flow for routine and crisis situations.",
                icon: MessageSquare,
                stats: [
                    { value: "50", suffix: "%", prefix: "↑", label: "Stakeholder Sat", icon: Heart },
                    { value: "60", suffix: "%", prefix: "↓", label: "Complaints", icon: AlertTriangle },
                    { value: "100", suffix: "%", label: "Crisis Comms Eff", icon: Radio },
                    { value: "24", suffix: "/7", label: " Rumor Control", icon: Wifi }
                ],
                portfolio: [
                    {
                        title: "Concierge AI",
                        features: ["Pre-arrival guidance", "Frictionless wayfinding", "Feedback requests"],
                        icon: Layout
                    },
                    {
                        title: "Crisis Comms",
                        features: ["Rapid SMS/App alerts", "Sentiment monitoring", "Holding statement gen"],
                        icon: Siren
                    },
                    {
                        title: "Experience Opt",
                        features: ["Friction reduction mesh", "Brand-Security alignment", "Trust-building educational"],
                        icon: CheckCircle2
                    },
                    {
                        title: "Multi-channel",
                        features: ["Digital signage sync", " personalized messaging", "Stakeholder personaliz."],
                        icon: Wifi
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Stakeholder Communication & Experience Intelligence (SCEI). Our teams act as an extension of your own, filling critical knowledge gaps within your Smart Command & Control Intelligence initiatives. Leave the operational heavy lifting to us, enabling faster scaling and assured compliance across the board.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Smart Command & Control Intelligence.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Smart Command & Control Intelligence critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Stakeholder Communication & Experience Intelligence (SCEI) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Smart Command & Control Intelligence industry curves.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Stakeholder Communication & Experience Intelligence (SCEI) guarantees strict adherence to performance metrics. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Smart Command & Control Intelligence footprint. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Smart Command & Control Intelligence expectations.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Stakeholder Communication & Experience Intelligence (SCEI) advisory tier. By developing bespoke maturity models, we ensure your organization scales effectively within the Smart Command & Control Intelligence sector. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Change Management: Ensuring your workforce is prepared for Smart Command & Control Intelligence technological transitions.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Stakeholder Communication & Experience Intelligence (SCEI) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Stakeholder Communication & Experience Intelligence (SCEI) deployment. Through advanced middleware development, we translate disparate protocols into a unified Smart Command & Control Intelligence language. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Stakeholder Communication & Experience Intelligence (SCEI) modules.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Smart Command & Control Intelligence network."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Stakeholder Communication & Experience Intelligence (SCEI) with our AI backbone, we enable predictive forecasting rather than historical reporting. It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Smart Command & Control Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Stakeholder Communication & Experience Intelligence (SCEI).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Smart Command & Control Intelligence workflows instantly.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Smart Command & Control Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Stakeholder Communication & Experience Intelligence (SCEI). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Smart Command & Control Intelligence. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Stakeholder Communication & Experience Intelligence (SCEI) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Smart Command & Control Intelligence.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Stakeholder Communication & Experience Intelligence (SCEI). We establish robust governance models and audit trails that serve as your permanent Smart Command & Control Intelligence operational foundation. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Smart Command & Control Intelligence success.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Stakeholder Communication & Experience Intelligence (SCEI).",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Smart Command & Control Intelligence.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Stakeholder Communication & Experience Intelligence (SCEI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Our systems allow technicians to query complex Smart Command & Control Intelligence issues in natural language and receive instant, exact procedures. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Smart Command & Control Intelligence database.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Stakeholder Communication & Experience Intelligence (SCEI) updates instantly across the grid.",
                            "Video Process Documentation: High-quality visual recordings of critical Smart Command & Control Intelligence maintenance procedures.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Improve Your Stakeholder Experience.",
                    buttonText: "Deploy Concierge AI",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "specialized-protection",
        type: "security-services",
        title: "Specialized Protection Intelligence",
        subtitle: "High-Risk Asset & Personnel Security",
        heroSlides: [
            {
                badge: "High-Value Asset Protection",
                title: "Specialized",
                highlight: "Protection",
                description: "Customized solutions for ultra-high-risk transportation and environments.",
                image: "https://images.unsplash.com/photo-1508343319395-92718105d15c?auto=format&fit=crop&q=80"
            },
            {
                badge: "Close Protection",
                title: "Executive",
                highlight: "Safety",
                description: "Elite escort services with integrated advanced threat intelligence.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            },
            {
                badge: "Asset Sentry",
                title: "Bullion &",
                highlight: "Currency",
                description: "IoT-shielded logistics for global banking and financial sectors.",
                image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 4.1
            {
                id: "4.1",
                title: "Cash & Valuable Logistics Intelligence (CVLI)",
                subtitle: "Intelligent cash management and transport combining predictive risk assessment and dynamic routing.",
                icon: Truck,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "CIT Loss Rate", icon: Lock },
                    { value: "30", suffix: "%", prefix: "↓", label: "Logistics Costs", icon: TrendingUp },
                    { value: "99.9", suffix: "%", label: "Delivery Reliability", icon: Clock },
                    { value: "2.5", prefix: "₹", suffix: "Cr", label: "Single Load Cap", icon: Database }
                ],
                portfolio: [
                    {
                        title: "Route Intel",
                        features: ["Real-time traffic sync", "Crime hotspot avoidance", "Alternative pathing"],
                        icon: Map
                    },
                    {
                        title: "Vehicle Protect",
                        features: ["Remote immobilization", "Armored fleet sync", "Auto-lockdown duress"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Vault Guardian",
                        features: ["₹2.5Cr load risk assess", "Aerial drone standby", "Corridor clearance sync"],
                        icon: Lock
                    },
                    {
                        title: "Logistics",
                        features: ["ATM forecasting", "Inventory optimization", "Skimming detection"],
                        icon: Truck
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Cash & Valuable Logistics Intelligence (CVLI), we provide elite personnel tailored to your specific ecosystem. Our teams act as an extension of your own, filling critical knowledge gaps within your Specialized Protection Intelligence initiatives. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Specialized Protection Intelligence industry curves.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Specialized Protection Intelligence.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Cash & Valuable Logistics Intelligence (CVLI).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Cash & Valuable Logistics Intelligence (CVLI) guarantees strict adherence to performance metrics. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Specialized Protection Intelligence footprint. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Cash & Valuable Logistics Intelligence (CVLI).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Specialized Protection Intelligence.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Specialized Protection Intelligence disruptions.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Cash & Valuable Logistics Intelligence (CVLI).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Cash & Valuable Logistics Intelligence (CVLI), ensuring your technological investments are future-proof. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Specialized Protection Intelligence goals. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Cash & Valuable Logistics Intelligence (CVLI) deployment.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Cash & Valuable Logistics Intelligence (CVLI).",
                            "Change Management: Ensuring your workforce is prepared for Specialized Protection Intelligence technological transitions.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Cash & Valuable Logistics Intelligence (CVLI) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Cash & Valuable Logistics Intelligence (CVLI) into the complex fabric of your enterprise IT and OT layers. Our process encompasses zero-trust security postures, ensuring data integrity across the Specialized Protection Intelligence spectrum. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Specialized Protection Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Cash & Valuable Logistics Intelligence (CVLI).",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Cash & Valuable Logistics Intelligence (CVLI) with our AI backbone, we enable predictive forecasting rather than historical reporting. Our neural networks simulate thousands of permutations instantly to solve complex Specialized Protection Intelligence scheduling and resource issues. Uncover hidden value in your data and stay permanently ahead of the operational curve.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Specialized Protection Intelligence assets.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Cash & Valuable Logistics Intelligence (CVLI).",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Specialized Protection Intelligence contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Cash & Valuable Logistics Intelligence (CVLI). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Specialized Protection Intelligence safety thresholds. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Cash & Valuable Logistics Intelligence (CVLI).",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Specialized Protection Intelligence components.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Cash & Valuable Logistics Intelligence (CVLI) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Cash & Valuable Logistics Intelligence (CVLI). We establish robust governance models and audit trails that serve as your permanent Specialized Protection Intelligence operational foundation. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Cash & Valuable Logistics Intelligence (CVLI).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Specialized Protection Intelligence.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Cash & Valuable Logistics Intelligence (CVLI) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Cash & Valuable Logistics Intelligence (CVLI) environment. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Specialized Protection Intelligence expertise. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Cash & Valuable Logistics Intelligence (CVLI) updates instantly across the grid.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Specialized Protection Intelligence database.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Secure Your Financial Assets.",
                    buttonText: "Deploy Transit AI",
                    link: "/contact"
                }
            },
            // OFFERING 4.2
            {
                id: "4.2",
                title: "High-Value Asset Protection Intelligence (HVAPI)",
                subtitle: "Comprehensive protection for precious goods and IP combining physical and technical security.",
                icon: Gem,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Asset Loss Incid", icon: ShieldCheck },
                    { value: "50", suffix: "%", prefix: "↓", label: "Insurance Prem", icon: Database },
                    { value: "100", suffix: "%", label: "Traceability", icon: FileCheck },
                    { value: "2-8", suffix: "°C", label: "Temp Control", icon: Thermometer }
                ],
                portfolio: [
                    {
                        title: "Asset Tracking",
                        features: ["Blockchain provenance", "RFID sensor mesh", "Environmental monitoring"],
                        icon: Package
                    },
                    {
                        title: "Vault Intel",
                        features: ["Multi-factor access", "Time-lock automation", "Duress protocol AI"],
                        icon: Lock
                    },
                    {
                        title: "Asset Protector",
                        features: ["Temp excursion alerts", "Route deviation verify", "Process improvement AI"],
                        icon: Activity
                    },
                    {
                        title: "Domains",
                        features: ["Luxury goods transit", "IP prototype protection", "Grid component security"],
                        icon: Building2
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of High-Value Asset Protection Intelligence (HVAPI) is made seamless by our fully trained and certified deployment teams. We rigorously select and continuously train our staff to align with the advanced requirements of the Specialized Protection Intelligence sector. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing High-Value Asset Protection Intelligence (HVAPI) deployments.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Specialized Protection Intelligence.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Specialized Protection Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of High-Value Asset Protection Intelligence (HVAPI).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of High-Value Asset Protection Intelligence (HVAPI). We deploy sophisticated remote monitoring and local site management aligned with Specialized Protection Intelligence best practices. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Specialized Protection Intelligence disruptions.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of High-Value Asset Protection Intelligence (HVAPI).",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Specialized Protection Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized High-Value Asset Protection Intelligence (HVAPI) advisory tier. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Specialized Protection Intelligence portfolio. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Compliance Auditing: Ensuring your Specialized Protection Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale High-Value Asset Protection Intelligence (HVAPI) deployment."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting High-Value Asset Protection Intelligence (HVAPI) with your wider network. Through advanced middleware development, we translate disparate protocols into a unified Specialized Protection Intelligence language. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Specialized Protection Intelligence requirements.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with High-Value Asset Protection Intelligence (HVAPI).",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated High-Value Asset Protection Intelligence (HVAPI) modules.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Specialized Protection Intelligence network."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to High-Value Asset Protection Intelligence (HVAPI). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Specialized Protection Intelligence intervention. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within High-Value Asset Protection Intelligence (HVAPI).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Specialized Protection Intelligence workflows instantly.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Specialized Protection Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within High-Value Asset Protection Intelligence (HVAPI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Specialized Protection Intelligence. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Specialized Protection Intelligence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for High-Value Asset Protection Intelligence (HVAPI).",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of High-Value Asset Protection Intelligence (HVAPI). We establish robust governance models and audit trails that serve as your permanent Specialized Protection Intelligence operational foundation. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of High-Value Asset Protection Intelligence (HVAPI).",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Specialized Protection Intelligence.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by High-Value Asset Protection Intelligence (HVAPI) are permanently codified. Our systems allow technicians to query complex Specialized Protection Intelligence issues in natural language and receive instant, exact procedures. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to High-Value Asset Protection Intelligence (HVAPI) into digital libraries.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent High-Value Asset Protection Intelligence (HVAPI) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Specialized Protection Intelligence problems in natural language for exact solutions.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Specialized Protection Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your High-Value Goods.",
                    buttonText: "Enable Asset AI",
                    link: "/contact"
                }
            },
            // OFFERING 4.3
            {
                id: "4.3",
                title: "Sensitive Information & Document Intelligence (SIDI)",
                subtitle: "Protection for confidential information and classified documents throughout their lifecycle.",
                icon: ShieldCheck,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Info Sec Incid", icon: Lock },
                    { value: "70", suffix: "%", prefix: "↓", label: "Audit Findings", icon: FileCheck },
                    { value: "100", suffix: "%", label: "Breach Prevention", icon: ShieldCheck },
                    { value: "0", label: "Physical Vector", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Doc Security",
                        features: ["RFID tracking", "Need-to-know enforcement", "Access logging"],
                        icon: FileText
                    },
                    {
                        title: "Destruction",
                        features: ["Video verified shred", "Chain of custody auto", "Certificate generation"],
                        icon: Trash2
                    },
                    {
                        title: "Info Guardian",
                        features: ["After-hours desk check", "Cleaning crew hold", "Violation pattern AI"],
                        icon: Brain
                    },
                    {
                        title: "Lifecycle",
                        features: ["Secure template sync", "Cabinet monitoring", "Audit automation"],
                        icon: Server
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Sensitive Information & Document Intelligence (SIDI) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Specialized Protection Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Specialized Protection Intelligence critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Specialized Protection Intelligence industry curves.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Specialized Protection Intelligence.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Sensitive Information & Document Intelligence (SIDI) guarantees strict adherence to performance metrics. Our proactive diagnostic frameworks identify anomalies within your Specialized Protection Intelligence infrastructure before they cause downtime. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Sensitive Information & Document Intelligence (SIDI).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Specialized Protection Intelligence.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Specialized Protection Intelligence disruptions.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Specialized Protection Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Sensitive Information & Document Intelligence (SIDI) by leveraging our customized assessment and strategic blueprinting. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Specialized Protection Intelligence workflows. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Specialized Protection Intelligence.",
                            "Compliance Auditing: Ensuring your Specialized Protection Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Sensitive Information & Document Intelligence (SIDI)."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Sensitive Information & Document Intelligence (SIDI) into the complex fabric of your enterprise IT and OT layers. Through advanced middleware development, we translate disparate protocols into a unified Specialized Protection Intelligence language. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Specialized Protection Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Specialized Protection Intelligence data flows.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Sensitive Information & Document Intelligence (SIDI). Our neural networks simulate thousands of permutations instantly to solve complex Specialized Protection Intelligence scheduling and resource issues. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Specialized Protection Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Sensitive Information & Document Intelligence (SIDI).",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Specialized Protection Intelligence contexts.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Sensitive Information & Document Intelligence (SIDI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Specialized Protection Intelligence. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Specialized Protection Intelligence.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Sensitive Information & Document Intelligence (SIDI) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Sensitive Information & Document Intelligence (SIDI). Our experts lead intense, hands-on training regimens to completely upskill your internal Specialized Protection Intelligence teams. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Sensitive Information & Document Intelligence (SIDI) ecosystem.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Sensitive Information & Document Intelligence (SIDI).",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Sensitive Information & Document Intelligence (SIDI) is only half the battle; ensuring your team has instantaneous access to solutions is the other. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Specialized Protection Intelligence expertise. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Sensitive Information & Document Intelligence (SIDI) updates instantly across the grid.",
                            "Video Process Documentation: High-quality visual recordings of critical Specialized Protection Intelligence maintenance procedures.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Secure Your Confidentiality.",
                    buttonText: "Deploy Information AI",
                    link: "/contact"
                }
            },
            // OFFERING 4.4
            {
                id: "4.4",
                title: "Critical Personnel & Family Protection (CPFP)",
                subtitle: "Comprehensive protection extending beyond the principal to family and residences.",
                icon: Heart,
                stats: [
                    { value: "100", suffix: "%", prefix: "↓", label: "Family Incidents", icon: ShieldCheck },
                    { value: "30", suffix: "%", prefix: "↓", label: "Protection Cost", icon: Database },
                    { value: "24", suffix: "/7", label: "Residential Guard", icon: Home },
                    { value: "100", suffix: "%", label: "Principal Peace", icon: Users }
                ],
                portfolio: [
                    {
                        title: "Family Intel",
                        features: ["Social threat monitoring", "School route risk assess", "Staff vetting"],
                        icon: Users
                    },
                    {
                        title: "Residence",
                        features: ["Perimeter hardening", "Smart home security sync", "Privacy protection"],
                        icon: Home
                    },
                    {
                        title: "Family Guardian",
                        features: ["School route adjustment", "Digital safety review", "Emergency protocol"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Travel",
                        features: ["Vacation vetting", "Medical preparedness", "Extraction standby"],
                        icon: Map
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Empower your operations with dedicated experts trained in the intricacies of Critical Personnel & Family Protection (CPFP). We rigorously select and continuously train our staff to align with the advanced requirements of the Specialized Protection Intelligence sector. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Critical Personnel & Family Protection (CPFP) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Critical Personnel & Family Protection (CPFP).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Critical Personnel & Family Protection (CPFP)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Critical Personnel & Family Protection (CPFP). Through transparent digital dashboards, you maintain total visibility over all Specialized Protection Intelligence operations without the daily hassle. Our commitment to excellence means you always receive peak performance without the administrative overhead.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Specialized Protection Intelligence disruptions.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Specialized Protection Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Critical Personnel & Family Protection (CPFP) into your legacy enterprise. By developing bespoke maturity models, we ensure your organization scales effectively within the Specialized Protection Intelligence sector. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Critical Personnel & Family Protection (CPFP) deployment.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Compliance Auditing: Ensuring your Specialized Protection Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Critical Personnel & Family Protection (CPFP) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Specialized Protection Intelligence environment. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Critical Personnel & Family Protection (CPFP).",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Specialized Protection Intelligence requirements."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Critical Personnel & Family Protection (CPFP). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Specialized Protection Intelligence. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Critical Personnel & Family Protection (CPFP).",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Specialized Protection Intelligence assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Critical Personnel & Family Protection (CPFP). They continuously negotiate with external APIs and internal databases to dynamically route Specialized Protection Intelligence resources. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Specialized Protection Intelligence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Critical Personnel & Family Protection (CPFP)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Critical Personnel & Family Protection (CPFP). Our experts lead intense, hands-on training regimens to completely upskill your internal Specialized Protection Intelligence teams. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Critical Personnel & Family Protection (CPFP).",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Specialized Protection Intelligence.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Critical Personnel & Family Protection (CPFP), preventing institutional memory loss. Our systems allow technicians to query complex Specialized Protection Intelligence issues in natural language and receive instant, exact procedures. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Video Process Documentation: High-quality visual recordings of critical Specialized Protection Intelligence maintenance procedures.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your Loved Ones.",
                    buttonText: "Enable Family Protection",
                    link: "/contact"
                }
            },
            // OFFERING 4.5
            {
                id: "4.5",
                title: "Secure Communications & Digital Protection (SCDP)",
                subtitle: "Digital security for high-risk individuals combining encrypted comms and surveillance detection.",
                icon: Smartphone,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Surveillance Succ", icon: ShieldAlert },
                    { value: "90", suffix: "%", prefix: "↓", label: "Interception Risk", icon: Lock },
                    { value: "100", suffix: "%", label: "Conversation Prot", icon: Wifi },
                    { value: "24", suffix: "/7", label: "Hygiene Tracking", icon: Activity }
                ],
                portfolio: [
                    {
                        title: "Secure Comms",
                        features: ["E2E encryption mesh", "Hardened devices", "Faraday protection"],
                        icon: Smartphone
                    },
                    {
                        title: "Surveillance Det",
                        features: ["TSCM technical sweeps", "Residence debugging", "Vehicle sweeps"],
                        icon: Search
                    },
                    {
                        title: "Digital Guardian",
                        features: ["IMSI catcher alerts", "Bluetooth anomaly det", "Sat-com redirection"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Privacy",
                        features: ["Social media scrubbing", "Identity obfuscation", "Reputation management"],
                        icon: Lock
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Secure Communications & Digital Protection (SCDP) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Specialized Protection Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Secure Communications & Digital Protection (SCDP) deployments.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Specialized Protection Intelligence industry curves.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Specialized Protection Intelligence."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Secure Communications & Digital Protection (SCDP). Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Specialized Protection Intelligence footprint. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Secure Communications & Digital Protection (SCDP).",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Specialized Protection Intelligence expectations.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Specialized Protection Intelligence disruptions.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Secure Communications & Digital Protection (SCDP) requires deep insight and careful architectural planning. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Specialized Protection Intelligence portfolio. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Secure Communications & Digital Protection (SCDP).",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Secure Communications & Digital Protection (SCDP) deployment.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Secure Communications & Digital Protection (SCDP) capabilities."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Secure Communications & Digital Protection (SCDP) into the complex fabric of your enterprise IT and OT layers. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Specialized Protection Intelligence data requirements. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Secure Communications & Digital Protection (SCDP) modules.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Specialized Protection Intelligence network.",
                            "Middleware Orchestration: Advanced translation layers handling complex Specialized Protection Intelligence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Secure Communications & Digital Protection (SCDP). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Specialized Protection Intelligence assets. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Secure Communications & Digital Protection (SCDP).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Secure Communications & Digital Protection (SCDP).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Secure Communications & Digital Protection (SCDP). These intelligent agents can dynamically triage software anomalies, effectively self-healing your Specialized Protection Intelligence networks. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Secure Communications & Digital Protection (SCDP) peak states.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Specialized Protection Intelligence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Secure Communications & Digital Protection (SCDP)."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Secure Communications & Digital Protection (SCDP), ensuring it is fully optimized before you take over. Our experts lead intense, hands-on training regimens to completely upskill your internal Specialized Protection Intelligence teams. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Secure Communications & Digital Protection (SCDP) ecosystem.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Specialized Protection Intelligence.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Secure Communications & Digital Protection (SCDP), preventing institutional memory loss. Integrated learning management tools continuously certify your staff on the latest Specialized Protection Intelligence methodologies. Troubleshooting times are slashed dramatically when the right information is served precisely at the point of need.",
                        "items": [
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Secure Communications & Digital Protection (SCDP) into digital libraries.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Secure Communications & Digital Protection (SCDP) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Specialized Protection Intelligence database."
                        ]
                    }
                ],


                cta: {
                    text: "Harden Your Digital Life.",
                    buttonText: "Deploy Digital Guard",
                    link: "/contact"
                }
            },
            // OFFERING 4.6
            {
                id: "4.6",
                title: "Emergency Extraction & Crisis Response (EECR)",
                subtitle: "Rapid response capability for kidnapping, extortion, and political instability scenarios.",
                icon: Plane,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Crisis Duration", icon: Clock },
                    { value: "60", suffix: "%", prefix: "↓", label: "Extraction Costs", icon: Database },
                    { value: "100", suffix: "%", label: "Principal Recovery", icon: ShieldCheck },
                    { value: "24", suffix: "/7", label: "Global Standby", icon: Globe }
                ],
                portfolio: [
                    {
                        title: "Global Network",
                        features: ["Crisis negotiators", "Liaison network", "International partners"],
                        icon: Globe
                    },
                    {
                        title: "Response Assets",
                        features: ["Extraction aircraft", "Armored transport", "Medical teams"],
                        icon: Plane
                    },
                    {
                        title: "Crisis Commander",
                        features: ["Check-in anomaly alerts", "Team mobilization AI", "Legal assessment"],
                        icon: Siren
                    },
                    {
                        title: "Scenarios",
                        features: ["Kidnap negotiation", "Political extraction", "Medical medevac"],
                        icon: Shield
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Emergency Extraction & Crisis Response (EECR) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Specialized Protection Intelligence initiatives. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Specialized Protection Intelligence critical events.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Emergency Extraction & Crisis Response (EECR).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Specialized Protection Intelligence industry curves.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Emergency Extraction & Crisis Response (EECR)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Emergency Extraction & Crisis Response (EECR). We ensure complete compliance with international standards relevant to the Specialized Protection Intelligence domain, maintaining strict audit trails. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Specialized Protection Intelligence.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Emergency Extraction & Crisis Response (EECR)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Emergency Extraction & Crisis Response (EECR) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Specialized Protection Intelligence workflows. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Specialized Protection Intelligence.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Compliance Auditing: Ensuring your Specialized Protection Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Emergency Extraction & Crisis Response (EECR) into the complex fabric of your enterprise IT and OT layers. Our process encompasses zero-trust security postures, ensuring data integrity across the Specialized Protection Intelligence spectrum. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Specialized Protection Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Specialized Protection Intelligence network.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Emergency Extraction & Crisis Response (EECR)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Emergency Extraction & Crisis Response (EECR). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Specialized Protection Intelligence. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Emergency Extraction & Crisis Response (EECR).",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Specialized Protection Intelligence assets.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Specialized Protection Intelligence contexts.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Specialized Protection Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Emergency Extraction & Crisis Response (EECR) are completed with absolute zero latency. It handles multi-step work orders—from vendor dispatch to inventory adjustment—across the Specialized Protection Intelligence ecosystem. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Emergency Extraction & Crisis Response (EECR).",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Specialized Protection Intelligence components.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Emergency Extraction & Crisis Response (EECR) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Specialized Protection Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Emergency Extraction & Crisis Response (EECR), ensuring it is fully optimized before you take over. Our experts lead intense, hands-on training regimens to completely upskill your internal Specialized Protection Intelligence teams. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Emergency Extraction & Crisis Response (EECR).",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Specialized Protection Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Emergency Extraction & Crisis Response (EECR), preventing institutional memory loss. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Specialized Protection Intelligence expertise. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Specialized Protection Intelligence database.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Emergency Extraction & Crisis Response (EECR) into digital libraries.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Video Process Documentation: High-quality visual recordings of critical Specialized Protection Intelligence maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Ensure Safety in Crisis.",
                    buttonText: "Enable Crisis AI",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "risk-advisory",
        type: "security-services",
        title: "Risk Intelligence & Advisory",
        subtitle: "Predictive Security Strategy",
        heroSlides: [
            {
                badge: "Predictive Intelligence",
                title: "Risk Advisory &",
                highlight: "Intelligence",
                description: "Future-proofing operations through deep-web scanning and geopolitical risk modeling.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            },
            {
                badge: "Red Teaming",
                title: "Vulnerability",
                highlight: "Analysis",
                description: "Aggressive stress testing of physical and digital infrastructure.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            },
            {
                badge: "Strategy Guard",
                title: "Crisis",
                highlight: "Management",
                description: "Expert-led continuity planning and automated incident playbooks.",
                image: "https://images.unsplash.com/photo-1507679799987-c7377gh14d45?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 5.1
            {
                id: "5.1",
                title: "Geopolitical & Market Risk Intelligence (GMRI)",
                subtitle: "Strategic intelligence combining geopolitical analysis and market risk assessment for enterprise protection.",
                icon: Globe,
                stats: [
                    { value: "40", suffix: "%", prefix: "↓", label: "SC Disruption Impact", icon: TrendingUp },
                    { value: "30", suffix: "%", prefix: "↓", label: "Entry Failures", icon: AlertTriangle },
                    { value: "100", suffix: "%", label: "Risk Awareness", icon: ShieldCheck },
                    { value: "24", suffix: "/7", label: "Global Monitoring", icon: Globe }
                ],
                portfolio: [
                    {
                        title: "Fusion Intel",
                        features: ["OSINT/HUMINT mesh", "Satellite imagery AI", "Social media sentiment"],
                        icon: Network
                    },
                    {
                        title: "Risk Modeling",
                        features: ["Monte Carlo simulations", "Scenario planning", "Early warning indicators"],
                        icon: BarChart
                    },
                    {
                        title: "Advisory",
                        features: ["Strategic Intel Officer", "Alternative sourcing", "Executive briefings"],
                        icon: Briefcase
                    },
                    {
                        title: "Domains",
                        features: ["Political stability", "Economic security", "International relations"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Geopolitical & Market Risk Intelligence (GMRI) is made seamless by our fully trained and certified deployment teams. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Risk Intelligence & Advisory strategy. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Geopolitical & Market Risk Intelligence (GMRI) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Risk Intelligence & Advisory industry curves.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Risk Intelligence & Advisory."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Geopolitical & Market Risk Intelligence (GMRI), operational risks are shifted away from your balance sheet. Our proactive diagnostic frameworks identify anomalies within your Risk Intelligence & Advisory infrastructure before they cause downtime. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Geopolitical & Market Risk Intelligence (GMRI).",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Risk Intelligence & Advisory disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "We demystify the deployment of Geopolitical & Market Risk Intelligence (GMRI), ensuring your technological investments are future-proof. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Risk Intelligence & Advisory goals. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Geopolitical & Market Risk Intelligence (GMRI).",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Geopolitical & Market Risk Intelligence (GMRI) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Risk Intelligence & Advisory technological transitions.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Geopolitical & Market Risk Intelligence (GMRI) deployment. Our process encompasses zero-trust security postures, ensuring data integrity across the Risk Intelligence & Advisory spectrum. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Risk Intelligence & Advisory network.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Middleware Orchestration: Advanced translation layers handling complex Risk Intelligence & Advisory data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Geopolitical & Market Risk Intelligence (GMRI). The platform autonomously identifies hidden optimization pathways within your broader Risk Intelligence & Advisory operational footprint. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Geopolitical & Market Risk Intelligence (GMRI).",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Geopolitical & Market Risk Intelligence (GMRI). They continuously negotiate with external APIs and internal databases to dynamically route Risk Intelligence & Advisory resources. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Risk Intelligence & Advisory components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Geopolitical & Market Risk Intelligence (GMRI).",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Geopolitical & Market Risk Intelligence (GMRI) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Geopolitical & Market Risk Intelligence (GMRI) with our comprehensive implementation and handover framework. During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Risk Intelligence & Advisory adoption. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Geopolitical & Market Risk Intelligence (GMRI) ecosystem.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Geopolitical & Market Risk Intelligence (GMRI).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Geopolitical & Market Risk Intelligence (GMRI) are permanently codified. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Risk Intelligence & Advisory facilities. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Geopolitical & Market Risk Intelligence (GMRI) updates instantly across the grid.",
                            "Video Process Documentation: High-quality visual recordings of critical Risk Intelligence & Advisory maintenance procedures.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Navigate Global Complexity.",
                    buttonText: "Deploy Strategy AI",
                    link: "/contact"
                }
            },
            // OFFERING 5.2
            {
                id: "5.2",
                title: "Corporate Investigation & Due Diligence (CIDD)",
                subtitle: "Comprehensive investigative services for fraud detection and integrity due diligence.",
                icon: Search,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Fraud Loss Recovery", icon: Coins },
                    { value: "90", suffix: "%", prefix: "↓", label: "High-Risk Engagement", icon: ShieldCheck },
                    { value: "40", suffix: "%", prefix: "↓", label: "Litigation Cost", icon: Scale },
                    { value: "0.2", prefix: "₹", suffix: "Cr", label: "Detection Unit", icon: FileText }
                ],
                portfolio: [
                    {
                        title: "Investigation AI",
                        features: ["Relationship mapping", "Communication anomaly", "Financial record check"],
                        icon: Search
                    },
                    {
                        title: "Automation",
                        features: ["Sanctions/PEP vetting", "Adverse media monitoring", "Red flag identification"],
                        icon: FileCheck
                    },
                    {
                        title: "Remediation",
                        features: ["Control redesign", "Ethics training loops", "Ongoing AI surveillance"],
                        icon: RefreshCw
                    },
                    {
                        title: "Litigation",
                        features: ["Evidence curation", "Chain of custody auto", "Expert testimony prep"],
                        icon: Gavel
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Corporate Investigation & Due Diligence (CIDD) is made seamless by our fully trained and certified deployment teams. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Risk Intelligence & Advisory umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Risk Intelligence & Advisory industry curves.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Corporate Investigation & Due Diligence (CIDD).",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Corporate Investigation & Due Diligence (CIDD).",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Corporate Investigation & Due Diligence (CIDD).",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Corporate Investigation & Due Diligence (CIDD) to our team with a robust, outcome-based partnership. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Risk Intelligence & Advisory footprint. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Corporate Investigation & Due Diligence (CIDD).",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Risk Intelligence & Advisory.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Corporate Investigation & Due Diligence (CIDD) requires deep insight and careful architectural planning. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Risk Intelligence & Advisory goals. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Corporate Investigation & Due Diligence (CIDD).",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Corporate Investigation & Due Diligence (CIDD) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Corporate Investigation & Due Diligence (CIDD) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Corporate Investigation & Due Diligence (CIDD) data streams. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Risk Intelligence & Advisory data requirements. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Corporate Investigation & Due Diligence (CIDD) modules.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Middleware Orchestration: Advanced translation layers handling complex Risk Intelligence & Advisory data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "We embed deep machine learning capabilities directly into the core workflows of Corporate Investigation & Due Diligence (CIDD). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Risk Intelligence & Advisory intervention. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Corporate Investigation & Due Diligence (CIDD).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Corporate Investigation & Due Diligence (CIDD). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Risk Intelligence & Advisory safety thresholds. This represents the pinnacle of modern operational scaling, breaking the limits of human reaction times.",
                        "items": [
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Corporate Investigation & Due Diligence (CIDD) peak states.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Corporate Investigation & Due Diligence (CIDD).",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Corporate Investigation & Due Diligence (CIDD). During the operational phase, we stabilize the technology, smoothing out the volatile early stages of Risk Intelligence & Advisory adoption. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Corporate Investigation & Due Diligence (CIDD) ecosystem.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Risk Intelligence & Advisory success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Corporate Investigation & Due Diligence (CIDD) are permanently codified. Using intelligent ontologies, we structure vast amounts of raw documentation generated by Risk Intelligence & Advisory facilities. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Video Process Documentation: High-quality visual recordings of critical Risk Intelligence & Advisory maintenance procedures.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Risk Intelligence & Advisory database.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Corporate Investigation & Due Diligence (CIDD) updates instantly across the grid."
                        ]
                    }
                ],


                cta: {
                    text: "Uncover Hidden Risks.",
                    buttonText: "Enable Investigation AI",
                    link: "/contact"
                }
            },
            // OFFERING 5.3
            {
                id: "5.3",
                title: "Cyber Threat Intelligence & Response (CTIR)",
                subtitle: "Intelligence-led cyber defense combining threat actor tracking and incident response.",
                icon: ShieldAlert,
                stats: [
                    { value: "70", suffix: "%", prefix: "↓", label: "Successful Attack", icon: ShieldCheck },
                    { value: "50", suffix: "%", prefix: "↓", label: "Detection Time", icon: Clock },
                    { value: "40", suffix: "%", prefix: "↓", label: "Response Cost", icon: Database },
                    { value: "89", suffix: "%", label: "Credential Validity", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Threat Intel",
                        features: ["Dark web monitoring", "Malware analysis", "Attack surface mgmt"],
                        icon: Bug
                    },
                    {
                        title: "Cyber Guardian",
                        features: ["Credential reset auto", "Actor engagement prep", "Vulnerability patching"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Fusion Center",
                        features: ["Cyber-Physical sync", "Insider threat detect", "Brand protection"],
                        icon: Network
                    },
                    {
                        title: "Response",
                        features: ["Digital forensics", "Regulatory notification", "Business recovery AI"],
                        icon: Activity
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Cyber Threat Intelligence & Response (CTIR), we provide elite personnel tailored to your specific ecosystem. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Risk Intelligence & Advisory umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Risk Intelligence & Advisory industry curves.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Risk Intelligence & Advisory.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Risk Intelligence & Advisory critical events.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Cyber Threat Intelligence & Response (CTIR) deployments.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Cyber Threat Intelligence & Response (CTIR)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Cyber Threat Intelligence & Response (CTIR). We ensure complete compliance with international standards relevant to the Risk Intelligence & Advisory domain, maintaining strict audit trails. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Preventative Incident Management: Identifying anomalies before they mature into Risk Intelligence & Advisory disruptions.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Risk Intelligence & Advisory."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Cyber Threat Intelligence & Response (CTIR) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Risk Intelligence & Advisory workflows. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Cyber Threat Intelligence & Response (CTIR).",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Cyber Threat Intelligence & Response (CTIR) deployment.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Cyber Threat Intelligence & Response (CTIR) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We eliminate isolated data silos by ensuring Cyber Threat Intelligence & Response (CTIR) communicates natively with your central platforms. Our process encompasses zero-trust security postures, ensuring data integrity across the Risk Intelligence & Advisory spectrum. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Cyber Threat Intelligence & Response (CTIR).",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Middleware Orchestration: Advanced translation layers handling complex Risk Intelligence & Advisory data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Cyber Threat Intelligence & Response (CTIR). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Risk Intelligence & Advisory. The result is absolute peak operational efficiency and the elimination of wasteful resource allocation.",
                        "items": [
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Risk Intelligence & Advisory assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Move beyond simple recommendations with autonomous AI agents that actively manage Cyber Threat Intelligence & Response (CTIR). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Risk Intelligence & Advisory. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Risk Intelligence & Advisory components.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Cyber Threat Intelligence & Response (CTIR) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Cyber Threat Intelligence & Response (CTIR) with our comprehensive implementation and handover framework. Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Risk Intelligence & Advisory. This ensures zero disruption to your business continuity while radically upgrading your technological capabilities.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Risk Intelligence & Advisory success.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Risk Intelligence & Advisory.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Cyber Threat Intelligence & Response (CTIR), preventing institutional memory loss. Our systems allow technicians to query complex Risk Intelligence & Advisory issues in natural language and receive instant, exact procedures. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Cyber Threat Intelligence & Response (CTIR) into digital libraries.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Cyber Threat Intelligence & Response (CTIR) updates instantly across the grid.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Risk Intelligence & Advisory database.",
                            "Video Process Documentation: High-quality visual recordings of critical Risk Intelligence & Advisory maintenance procedures."
                        ]
                    }
                ],


                cta: {
                    text: "Defend Your Digital Frontier.",
                    buttonText: "Deploy Cyber Intel",
                    link: "/contact"
                }
            },
            // OFFERING 5.4
            {
                id: "5.4",
                title: "Business Continuity & Resilience Intelligence (BCRI)",
                subtitle: "Organizational resilience combining threat anticipation and continuity planning.",
                icon: RotateCcw,
                stats: [
                    { value: "60", suffix: "%", prefix: "↓", label: "Interruption Dur", icon: Clock },
                    { value: "40", suffix: "%", prefix: "↓", label: "Recovery Cost", icon: Database },
                    { value: "100", suffix: "%", label: "Critical Function", icon: Target },
                    { value: "15", suffix: "%", label: "Resilience Prem", icon: TrendingUp }
                ],
                portfolio: [
                    {
                        title: "Modeling",
                        features: ["Business impact analysis", "Dependency mapping", "SPOF identification"],
                        icon: Layout
                    },
                    {
                        title: "Resilience Arch",
                        features: ["Vulnerability assess", "Dual sourcing design", "Inventory buffering"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Recovery",
                        features: ["Workforce reconstitution", "Alternative site mgmt", "Failover automation"],
                        icon: Server
                    },
                    {
                        title: "Testing",
                        features: ["Tabletop simulations", "Maturity benchmarking", "Compound event modeling"],
                        icon: History
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Our certified professionals bring unparalleled domain knowledge directly to your Business Continuity & Resilience Intelligence (BCRI) implementation. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Risk Intelligence & Advisory. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Business Continuity & Resilience Intelligence (BCRI).",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Business Continuity & Resilience Intelligence (BCRI) deployments.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Risk Intelligence & Advisory critical events.",
                            "Process Adherence: Meticulous execution of standard operating procedures for Risk Intelligence & Advisory."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Business Continuity & Resilience Intelligence (BCRI). Our proactive diagnostic frameworks identify anomalies within your Risk Intelligence & Advisory infrastructure before they cause downtime. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Business Continuity & Resilience Intelligence (BCRI).",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Risk Intelligence & Advisory expectations.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Business Continuity & Resilience Intelligence (BCRI) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Risk Intelligence & Advisory workflows. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Business Continuity & Resilience Intelligence (BCRI) deployment.",
                            "Compliance Auditing: Ensuring your Risk Intelligence & Advisory infrastructure meets stringent regulatory frameworks.",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Business Continuity & Resilience Intelligence (BCRI) capabilities.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Business Continuity & Resilience Intelligence (BCRI) data streams. Our process encompasses zero-trust security postures, ensuring data integrity across the Risk Intelligence & Advisory spectrum. Your enterprise becomes agile, capable of scaling and adding new tech layers without integration friction.",
                        "items": [
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Business Continuity & Resilience Intelligence (BCRI) modules.",
                            "Middleware Orchestration: Advanced translation layers handling complex Risk Intelligence & Advisory data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Business Continuity & Resilience Intelligence (BCRI)."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Business Continuity & Resilience Intelligence (BCRI). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Risk Intelligence & Advisory assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Risk Intelligence & Advisory assets.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Business Continuity & Resilience Intelligence (BCRI).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Business Continuity & Resilience Intelligence (BCRI). They continuously negotiate with external APIs and internal databases to dynamically route Risk Intelligence & Advisory resources. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Risk Intelligence & Advisory components.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Business Continuity & Resilience Intelligence (BCRI) with our comprehensive implementation and handover framework. Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Risk Intelligence & Advisory. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Business Continuity & Resilience Intelligence (BCRI) ecosystem.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Risk Intelligence & Advisory success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Ensure that the profound operational insights generated by Business Continuity & Resilience Intelligence (BCRI) are permanently codified. Our systems allow technicians to query complex Risk Intelligence & Advisory issues in natural language and receive instant, exact procedures. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Risk Intelligence & Advisory database.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "NLP-Driven Search Architectures: Querying complex Risk Intelligence & Advisory problems in natural language for exact solutions.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning."
                        ]
                    }
                ],


                cta: {
                    text: "Ensure Business Continuity.",
                    buttonText: "Enable Resilience AI",
                    link: "/contact"
                }
            },
            // OFFERING 5.5
            {
                id: "5.5",
                title: "Reputation & Brand Protection Intelligence (RBPI)",
                subtitle: "Proactive reputation management combining threat monitoring and crisis response.",
                icon: MessageSquare,
                stats: [
                    { value: "50", suffix: "%", prefix: "↓", label: "Crisis Duration", icon: Clock },
                    { value: "30", suffix: "%", prefix: "↓", label: "Brand Value Risk", icon: TrendingUp },
                    { value: "100", suffix: "%", label: "Stakeholder Trust", icon: Heart },
                    { value: "45", suffix: "min", label: "Initial Response", icon: Zap }
                ],
                portfolio: [
                    {
                        title: "Sentiment Intel",
                        features: ["Social perception map", "Influencer analysis", "Trend prediction"],
                        icon: MessageSquare
                    },
                    {
                        title: "Reputation Gard",
                        features: ["Spike detection AI", "Validity analysis", "Immediate acknowledge"],
                        icon: ShieldCheck
                    },
                    {
                        title: "Response Orchest",
                        features: ["Stakeholder notify", "Meme/Containment strategy", "Influencer engagement"],
                        icon: Zap
                    },
                    {
                        title: "ESG Protection",
                        features: ["Claim verification", "Greenwashing monitor", "Social impact comms"],
                        icon: Leaf
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Reputation & Brand Protection Intelligence (RBPI), we provide elite personnel tailored to your specific ecosystem. Our teams act as an extension of your own, filling critical knowledge gaps within your Risk Intelligence & Advisory initiatives. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Risk Intelligence & Advisory.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Reputation & Brand Protection Intelligence (RBPI) deployments.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Risk Intelligence & Advisory critical events.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Reputation & Brand Protection Intelligence (RBPI) guarantees strict adherence to performance metrics. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Risk Intelligence & Advisory footprint. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Reputation & Brand Protection Intelligence (RBPI).",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Reputation & Brand Protection Intelligence (RBPI)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Reputation & Brand Protection Intelligence (RBPI) requires deep insight and careful architectural planning. We actively identify vendor lock-in risks, compliance gaps, and optimization opportunities spanning your Risk Intelligence & Advisory portfolio. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Risk Intelligence & Advisory.",
                            "Compliance Auditing: Ensuring your Risk Intelligence & Advisory infrastructure meets stringent regulatory frameworks.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Reputation & Brand Protection Intelligence (RBPI).",
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Reputation & Brand Protection Intelligence (RBPI) capabilities.",
                            "Change Management: Ensuring your workforce is prepared for Risk Intelligence & Advisory technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Reputation & Brand Protection Intelligence (RBPI) deployment. Through advanced middleware development, we translate disparate protocols into a unified Risk Intelligence & Advisory language. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Middleware Orchestration: Advanced translation layers handling complex Risk Intelligence & Advisory data flows.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Risk Intelligence & Advisory network.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Reputation & Brand Protection Intelligence (RBPI).",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Elevate your basic digitisation efforts into true intelligence with our AI platform governing Reputation & Brand Protection Intelligence (RBPI). The platform autonomously identifies hidden optimization pathways within your broader Risk Intelligence & Advisory operational footprint. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Risk Intelligence & Advisory assets."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Reputation & Brand Protection Intelligence (RBPI) are completed with absolute zero latency. By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Risk Intelligence & Advisory. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Risk Intelligence & Advisory.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Bounded Autonomous Authority: Strict rule-sets ensuring AI actions never violate safety boundaries."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We assume the capital and structural risks associated with the initial deployment phase of Reputation & Brand Protection Intelligence (RBPI). We craft intricate operating playbooks, meticulously documenting every procedure required for Risk Intelligence & Advisory success. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Risk Intelligence & Advisory success.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Risk Intelligence & Advisory.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Reputation & Brand Protection Intelligence (RBPI), preventing institutional memory loss. Our systems allow technicians to query complex Risk Intelligence & Advisory issues in natural language and receive instant, exact procedures. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Risk Intelligence & Advisory database.",
                            "NLP-Driven Search Architectures: Querying complex Risk Intelligence & Advisory problems in natural language for exact solutions."
                        ]
                    }
                ],


                cta: {
                    text: "Protect Your Brand Value.",
                    buttonText: "Deploy Reputation AI",
                    link: "/contact"
                }
            },
            // OFFERING 5.6
            {
                id: "5.6",
                title: "Insurance & Risk Transfer Optimization (IRTO)",
                subtitle: "Intelligent risk financing combining coverage optimization and claims management.",
                icon: Briefcase,
                stats: [
                    { value: "20", suffix: "%", prefix: "↓", label: "Total Cost of Risk", icon: Coins },
                    { value: "30", suffix: "%", prefix: "↓", label: "Claims Settlement", icon: Clock },
                    { value: "25", suffix: "%", prefix: "↑", label: "Recovery Rate", icon: TrendingUp },
                    { value: "15", suffix: "%", label: "Claim Cost Red", icon: BarChart }
                ],
                portfolio: [
                    {
                        title: "Coverage Intel",
                        features: ["Gap analysis AI", "Limit optimization", "Market benchmarking"],
                        icon: FileSignature
                    },
                    {
                        title: "Optimizer AI",
                        features: ["Captive feasibility", "Parametric solutions", "Risk retention analysis"],
                        icon: Settings
                    },
                    {
                        title: "Claims AI",
                        features: ["Loss quantification", "Subrogation ID auto", "Settlement optimization"],
                        icon: FileText
                    },
                    {
                        title: "Advocacy",
                        features: ["Dispute resolution", "Recovery maximization", "Climate exposure mapping"],
                        icon: Scale
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Insurance & Risk Transfer Optimization (IRTO) is made seamless by our fully trained and certified deployment teams. They manage day-to-day oversight, preventative interventions, and strategic optimizations unique to Risk Intelligence & Advisory. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Risk Intelligence & Advisory.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Insurance & Risk Transfer Optimization (IRTO).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Risk Intelligence & Advisory industry curves.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Insurance & Risk Transfer Optimization (IRTO) guarantees strict adherence to performance metrics. Our proactive diagnostic frameworks identify anomalies within your Risk Intelligence & Advisory infrastructure before they cause downtime. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Risk Intelligence & Advisory disruptions.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Risk Intelligence & Advisory.",
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Insurance & Risk Transfer Optimization (IRTO)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Insurance & Risk Transfer Optimization (IRTO) requires deep insight and careful architectural planning. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Risk Intelligence & Advisory workflows. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Insurance & Risk Transfer Optimization (IRTO).",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Risk Intelligence & Advisory.",
                            "Change Management: Ensuring your workforce is prepared for Risk Intelligence & Advisory technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Insurance & Risk Transfer Optimization (IRTO) into the complex fabric of your enterprise IT and OT layers. Every integration point is rigorously stress-tested against the operational parameters of your Risk Intelligence & Advisory environment. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Insurance & Risk Transfer Optimization (IRTO) modules.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Insurance & Risk Transfer Optimization (IRTO). Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Risk Intelligence & Advisory intervention. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Insurance & Risk Transfer Optimization (IRTO).",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Risk Intelligence & Advisory contexts.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Risk Intelligence & Advisory workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Insurance & Risk Transfer Optimization (IRTO). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Risk Intelligence & Advisory. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Risk Intelligence & Advisory components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Insurance & Risk Transfer Optimization (IRTO).",
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Insurance & Risk Transfer Optimization (IRTO) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Insurance & Risk Transfer Optimization (IRTO), ensuring it is fully optimized before you take over. Our experts lead intense, hands-on training regimens to completely upskill your internal Risk Intelligence & Advisory teams. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Insurance & Risk Transfer Optimization (IRTO) ecosystem.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Insurance & Risk Transfer Optimization (IRTO) is only half the battle; ensuring your team has instantaneous access to solutions is the other. Integrated learning management tools continuously certify your staff on the latest Risk Intelligence & Advisory methodologies. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Risk Intelligence & Advisory database.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Insurance & Risk Transfer Optimization (IRTO) updates instantly across the grid.",
                            "NLP-Driven Search Architectures: Querying complex Risk Intelligence & Advisory problems in natural language for exact solutions."
                        ]
                    }
                ],


                cta: {
                    text: "Optimize Your Risk Cost.",
                    buttonText: "Enable Financing AI",
                    link: "/contact"
                }
            }
        ]
    }, {
        id: "emerging-threat-tech",
        type: "security-services",
        title: "Emerging Threat & Technology Intelligence",
        subtitle: "Future-Ready Security Innovation",
        heroSlides: [
            {
                badge: "Future Ready",
                title: "Emerging Threat",
                highlight: "& Tech Intel",
                description: "Protecting against Quantum-threats and autonomous drone swarms.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            },
            {
                badge: "Cognitive Shield",
                title: "Neuro-Security",
                highlight: "Protocols",
                description: "Next-gen protection for intellectual assets and cognitive flows.",
                image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
            },
            {
                badge: "Sky Guard",
                title: "Counter-Drone",
                highlight: "Systems",
                description: "AI-layered airspace monitoring and selective signal inhibition.",
                image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80"
            }
        ],
        offerings: [
            // OFFERING 6.1
            {
                id: "6.1",
                title: "Drone & Counter-UAS Intelligence (DCUI)",
                subtitle: "Comprehensive drone ecosystem management combining aerial surveillance, threat detection, and counter-measure deployment.",
                icon: Plane,
                stats: [
                    { value: "200", suffix: "%", prefix: "↑", label: "Perimeter Coverage", icon: Radar },
                    { value: "60", suffix: "%", prefix: "↓", label: "Inspection Costs", icon: Database },
                    { value: "90", suffix: "%", prefix: "↓", label: "Unauthorized UAS", icon: AlertTriangle },
                    { value: "2", suffix: "km", label: "Detection Range", icon: Radar }
                ],
                portfolio: [
                    {
                        title: "Aerial Patrol",
                        features: ["Visual/thermal surveillance", "Delivery of security equipment", "Infrastructure inspection"],
                        icon: Plane
                    },
                    {
                        title: "Counter-UAS",
                        features: ["Radar/RF/Optical detection", "Intent assessment", "Neutralization (Jamming)"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Airspace Mgmt",
                        features: ["Dynamic geofencing", "Collision avoidance", "Weather integration"],
                        icon: Globe
                    },
                    {
                        title: "Applications",
                        features: ["Pipeline monitoring", "Crowd flow analysis", "VIP protection support"],
                        icon: Layout
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Drone & Counter-UAS Intelligence (DCUI) is made seamless by our fully trained and certified deployment teams. We rigorously select and continuously train our staff to align with the advanced requirements of the Emerging Threat & Technology Intelligence sector. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Emerging Threat & Technology Intelligence critical events.",
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Drone & Counter-UAS Intelligence (DCUI).",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Drone & Counter-UAS Intelligence (DCUI) deployments.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Secure absolute peace of mind with our financially backed performance guarantees covering Drone & Counter-UAS Intelligence (DCUI). We deploy sophisticated remote monitoring and local site management aligned with Emerging Threat & Technology Intelligence best practices. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Emerging Threat & Technology Intelligence expectations.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Strategic adoption of Drone & Counter-UAS Intelligence (DCUI) requires deep insight and careful architectural planning. By developing bespoke maturity models, we ensure your organization scales effectively within the Emerging Threat & Technology Intelligence sector. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Drone & Counter-UAS Intelligence (DCUI).",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Change Management: Ensuring your workforce is prepared for Emerging Threat & Technology Intelligence technological transitions.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "We specialize in weaving Drone & Counter-UAS Intelligence (DCUI) into the complex fabric of your enterprise IT and OT layers. We harmonize legacy applications with modern cloud-native architectures prevalent in Emerging Threat & Technology Intelligence operations. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Emerging Threat & Technology Intelligence network.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Middleware Orchestration: Advanced translation layers handling complex Emerging Threat & Technology Intelligence data flows.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Drone & Counter-UAS Intelligence (DCUI). Our neural networks simulate thousands of permutations instantly to solve complex Emerging Threat & Technology Intelligence scheduling and resource issues. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Drone & Counter-UAS Intelligence (DCUI).",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Drone & Counter-UAS Intelligence (DCUI)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Drone & Counter-UAS Intelligence (DCUI) interventions happen at machine speed, autonomously. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Emerging Threat & Technology Intelligence networks. Achieve radically shortened resolution windows ranging from milliseconds instead of traditional hours.",
                        "items": [
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Drone & Counter-UAS Intelligence (DCUI).",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Drone & Counter-UAS Intelligence (DCUI) peak states."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "We deliver a turnkey foundation for Drone & Counter-UAS Intelligence (DCUI), ensuring it is fully optimized before you take over. We establish robust governance models and audit trails that serve as your permanent Emerging Threat & Technology Intelligence operational foundation. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Emerging Threat & Technology Intelligence success.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Drone & Counter-UAS Intelligence (DCUI) ecosystem.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Drone & Counter-UAS Intelligence (DCUI), preventing institutional memory loss. Our systems allow technicians to query complex Emerging Threat & Technology Intelligence issues in natural language and receive instant, exact procedures. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff.",
                            "NLP-Driven Search Architectures: Querying complex Emerging Threat & Technology Intelligence problems in natural language for exact solutions.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Drone & Counter-UAS Intelligence (DCUI) into digital libraries.",
                            "Gamified Learning Paths: Increasing workforce engagement through competitive training milestones."
                        ]
                    }
                ],


                cta: {
                    text: "Secure Your Airspace.",
                    buttonText: "Deploy Drone Intel",
                    link: "/contact"
                }
            },
            // OFFERING 6.2
            {
                id: "6.2",
                title: "Autonomous Robotics & Ground Systems (ARGS)",
                subtitle: "Ground-based robotic systems for security patrol, inspection, and response in challenging environments.",
                icon: Bot,
                stats: [
                    { value: "70", suffix: "%", prefix: "↓", label: "Human Exposure", icon: Users },
                    { value: "40", suffix: "%", prefix: "↓", label: "Patrol Costs", icon: Database },
                    { value: "100", suffix: "%", prefix: "↑", label: "Task Extension", icon: TrendingUp },
                    { value: "24", suffix: "/7", label: "Automated Patrol", icon: Clock }
                ],
                portfolio: [
                    {
                        title: "Robotic Patrol",
                        features: ["UGV autonomous routes", "360° thermal imaging", "Obstacle avoidance"],
                        icon: Bot
                    },
                    {
                        title: "Confined Space",
                        features: ["Tank/Sewer monitoring", "Toxic atmosphere patrol", "Hazardous mapping"],
                        icon: Microscope
                    },
                    {
                        title: "Specialized Ops",
                        features: ["Explosive assessment", "CBRN reconnaissance", "Manipulator arm utility"],
                        icon: Settings
                    },
                    {
                        title: "Interactions",
                        features: ["Human-robot interaction", "Audio challenge protocol", "Back-up coordination"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Autonomous Robotics & Ground Systems (ARGS) requires a workforce possessing highly specialized technical acumen. Every technician is extensively vetted to ensure they can drive meaningful outcomes for your Emerging Threat & Technology Intelligence strategy. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Autonomous Robotics & Ground Systems (ARGS).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Emerging Threat & Technology Intelligence industry curves.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Emerging Threat & Technology Intelligence critical events.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Autonomous Robotics & Ground Systems (ARGS)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Autonomous Robotics & Ground Systems (ARGS) guarantees strict adherence to performance metrics. We deploy sophisticated remote monitoring and local site management aligned with Emerging Threat & Technology Intelligence best practices. The result is a seamless business environment where infrastructure acts as an enabler, not a bottleneck.",
                        "items": [
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Vendor Agnostic Management: Independent oversight of third-party SLAs to ensure total compliance.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Emerging Threat & Technology Intelligence disruptions.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Emerging Threat & Technology Intelligence.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Emerging Threat & Technology Intelligence expectations."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Autonomous Robotics & Ground Systems (ARGS) advisory tier. Our consulting methodology involves extensive stakeholder interviews to align technology with your overarching Emerging Threat & Technology Intelligence goals. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Autonomous Robotics & Ground Systems (ARGS) deployment.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Autonomous Robotics & Ground Systems (ARGS).",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Compliance Auditing: Ensuring your Emerging Threat & Technology Intelligence infrastructure meets stringent regulatory frameworks."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Creating a unified operational environment means seamlessly interconnecting Autonomous Robotics & Ground Systems (ARGS) with your wider network. We ensure that bi-directional synchronization happens in real-time, fulfilling stringent Emerging Threat & Technology Intelligence data requirements. This unified architecture radically reduces latency and provides a single source of truth for all workflows.",
                        "items": [
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Emerging Threat & Technology Intelligence network.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "Automated Failover Architectures: Designing interconnected systems that degrade gracefully during outages.",
                            "Unified Architecture Design: Blueprinting ecosystems that bridge legacy technologies with Autonomous Robotics & Ground Systems (ARGS).",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Autonomous Robotics & Ground Systems (ARGS) modules."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Autonomous Robotics & Ground Systems (ARGS). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Emerging Threat & Technology Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Emerging Threat & Technology Intelligence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Autonomous Robotics & Ground Systems (ARGS).",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Emerging Threat & Technology Intelligence contexts.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Autonomous Robotics & Ground Systems (ARGS)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our Agentic AI systems are programmed to independently execute complex workflows related to Autonomous Robotics & Ground Systems (ARGS). Our system applies strict compliance safeguards, ensuring autonomous actions never violate Emerging Threat & Technology Intelligence safety thresholds. Embrace the ultimate operational advantage with systems that practically run, heal, and optimize themselves.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Autonomous Robotics & Ground Systems (ARGS).",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Emerging Threat & Technology Intelligence components."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "Our Build-Operate-Transfer model is the safest pathway to internalize the extreme capabilities of Autonomous Robotics & Ground Systems (ARGS). We establish robust governance models and audit trails that serve as your permanent Emerging Threat & Technology Intelligence operational foundation. It is the ultimate bridge between buying an external service and building a world-class internal capability.",
                        "items": [
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Autonomous Robotics & Ground Systems (ARGS) ecosystem.",
                            "Risk-Mitigated Operation: We absorb operational challenges during the volatile stabilization phase of Emerging Threat & Technology Intelligence.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Autonomous Robotics & Ground Systems (ARGS).",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "Deploying Autonomous Robotics & Ground Systems (ARGS) is only half the battle; ensuring your team has instantaneous access to solutions is the other. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Emerging Threat & Technology Intelligence expertise. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Emerging Threat & Technology Intelligence database.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Version Controlled Engineering Bulletins: Disseminating urgent Autonomous Robotics & Ground Systems (ARGS) updates instantly across the grid.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Autonomous Robotics & Ground Systems (ARGS) into digital libraries."
                        ]
                    }
                ],


                cta: {
                    text: "Extend Your Security Force.",
                    buttonText: "Enable Robotic Patrol",
                    link: "/contact"
                }
            },
            // OFFERING 6.3
            {
                id: "6.3",
                title: "Biometric & Identity Intelligence (BII)",
                subtitle: "Next-generation identity verification combining multi-modal biometrics and continuous authentication.",
                icon: Fingerprint,
                stats: [
                    { value: "95", suffix: "%", prefix: "↓", label: "Identity Fraud", icon: ShieldCheck },
                    { value: "80", suffix: "%", prefix: "↓", label: "Admin Overhead", icon: Settings },
                    { value: "90", suffix: "%", prefix: "↑", label: "User Satisfaction", icon: CheckCircle2 },
                    { value: "99.7", suffix: "%", label: "Match Accuracy", icon: Target }
                ],
                portfolio: [
                    {
                        title: "Multi-Modal",
                        features: ["3D/Thermal/Iris fusion", "Palm vein live detect", "Gait analysis"],
                        icon: Fingerprint
                    },
                    {
                        title: "Behavioral",
                        features: ["Keystroke dynamics", "Walking pattern match", "Mouse movement AI"],
                        icon: Brain
                    },
                    {
                        title: "Continuous Auth",
                        features: ["Risk-based re-verify", "Step-up protocols", "Frictionless experience"],
                        icon: Lock
                    },
                    {
                        title: "Applications",
                        features: ["Forensic identification", "Border screening", "Contactless stadium entry"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "The successful deployment of Biometric & Identity Intelligence (BII) requires a workforce possessing highly specialized technical acumen. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Emerging Threat & Technology Intelligence umbrella. Ultimately, you achieve greater system uptime without the overhead of sourcing and retaining niche operational talent.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Emerging Threat & Technology Intelligence.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Emerging Threat & Technology Intelligence critical events.",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Emerging Threat & Technology Intelligence industry curves.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Biometric & Identity Intelligence (BII)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "By adopting an SLA-based approach to Biometric & Identity Intelligence (BII), operational risks are shifted away from your balance sheet. Through transparent digital dashboards, you maintain total visibility over all Emerging Threat & Technology Intelligence operations without the daily hassle. You can finally transition from reactive firefighting to a strategic, forecastable operational model.",
                        "items": [
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Biometric & Identity Intelligence (BII).",
                            "Preventative Incident Management: Identifying anomalies before they mature into Emerging Threat & Technology Intelligence disruptions.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Biometric & Identity Intelligence (BII)."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Biometric & Identity Intelligence (BII) into your legacy enterprise. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Emerging Threat & Technology Intelligence workflows. Empower your leadership with actionable intelligence to make high-stakes infrastructure decisions confidently.",
                        "items": [
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Change Management: Ensuring your workforce is prepared for Emerging Threat & Technology Intelligence technological transitions.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Compliance Auditing: Ensuring your Emerging Threat & Technology Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Emerging Threat & Technology Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Biometric & Identity Intelligence (BII) data streams. Our process encompasses zero-trust security postures, ensuring data integrity across the Emerging Threat & Technology Intelligence spectrum. The final delivery is a cohesive 'single pane of glass' that centralizes your operational command.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Emerging Threat & Technology Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Biometric & Identity Intelligence (BII) modules.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Biometric & Identity Intelligence (BII). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Emerging Threat & Technology Intelligence assets. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Emerging Threat & Technology Intelligence contexts.",
                            "Edge AI Deployment: Running predictive models directly on hardware endpoints for zero-latency decisions.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "Our 'human-on-the-loop' paradigm ensures Biometric & Identity Intelligence (BII) interventions happen at machine speed, autonomously. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Emerging Threat & Technology Intelligence networks. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Biometric & Identity Intelligence (BII).",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds.",
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Emerging Threat & Technology Intelligence components.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "From architectural design through to daily operation, we manage the complete lifecycle of Biometric & Identity Intelligence (BII). Our seasoned engineers construct the ecosystem based on gold-standard blueprints specific to Emerging Threat & Technology Intelligence. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Emerging Threat & Technology Intelligence success.",
                            "Core Team Staffing: Initial hiring and onboarding of elite operators to run the Biometric & Identity Intelligence (BII) ecosystem."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Biometric & Identity Intelligence (BII), preventing institutional memory loss. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Emerging Threat & Technology Intelligence expertise. It converts passive documentation into an active, strategic asset that actively supports daily operations.",
                        "items": [
                            "Version Controlled Engineering Bulletins: Disseminating urgent Biometric & Identity Intelligence (BII) updates instantly across the grid.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Emerging Threat & Technology Intelligence database.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Biometric & Identity Intelligence (BII) into digital libraries.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes."
                        ]
                    }
                ],


                cta: {
                    text: "Verify with Certainty.",
                    buttonText: "Deploy Identity Oracle",
                    link: "/contact"
                }
            },
            // OFFERING 6.4
            {
                id: "6.4",
                title: "Smart City & Critical Infrastructure Protection (SCIP)",
                subtitle: "Scaled security solutions for urban environments and national critical infrastructure.",
                icon: Building2,
                stats: [
                    { value: "50", suffix: "%", prefix: "↓", label: "Urban Crime Rate", icon: TrendingUp },
                    { value: "30", suffix: "%", prefix: "↓", label: "Response Time", icon: Clock },
                    { value: "40", suffix: "%", prefix: "↓", label: "Infra Downtime", icon: Database },
                    { value: "100", suffix: "%", label: "Coordination", icon: Globe }
                ],
                portfolio: [
                    {
                        title: "Urban Monitoring",
                        features: ["City-wide video mesh", "Multi-agency integration", "Citizen engagement"],
                        icon: Globe
                    },
                    {
                        title: "Infrastructure",
                        features: ["Energy grid protection", "Water system security", "Transportation safety"],
                        icon: Building2
                    },
                    {
                        title: "City Operations",
                        features: ["Signal adjustment auto", "Public alert management", "Gridlock prediction"],
                        icon: Zap
                    },
                    {
                        title: "Analysis",
                        features: ["Joint ops coordination", "Information sharing center", "Crisis recovery"],
                        icon: Users
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Smart City & Critical Infrastructure Protection (SCIP), we provide elite personnel tailored to your specific ecosystem. Our teams act as an extension of your own, filling critical knowledge gaps within your Emerging Threat & Technology Intelligence initiatives. This strategic deployment of talent guarantees that your systems function at absolute peak performance around the clock.",
                        "items": [
                            "Certified Domain Experts: Deployment of technicians and operators with verified credentials in Smart City & Critical Infrastructure Protection (SCIP).",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Emerging Threat & Technology Intelligence industry curves.",
                            "Specialized Tooling Proficiency: Workers expertly trained on the specific diagnostic and operational tools of Smart City & Critical Infrastructure Protection (SCIP).",
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Smart City & Critical Infrastructure Protection (SCIP)."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "We offer a fully accountable managed service tier tailored exactly to the nuances of Smart City & Critical Infrastructure Protection (SCIP). Our proactive diagnostic frameworks identify anomalies within your Emerging Threat & Technology Intelligence infrastructure before they cause downtime. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Transparent Dashboards: Real-time analytics portals providing complete visibility into SLA compliance.",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Smart City & Critical Infrastructure Protection (SCIP).",
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Unlock the true ROI of Smart City & Critical Infrastructure Protection (SCIP) by leveraging our customized assessment and strategic blueprinting. By developing bespoke maturity models, we ensure your organization scales effectively within the Emerging Threat & Technology Intelligence sector. This ensures a smooth cultural and technological transition, maximizing adoption rates across your workforce.",
                        "items": [
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Smart City & Critical Infrastructure Protection (SCIP).",
                            "Compliance Auditing: Ensuring your Emerging Threat & Technology Intelligence infrastructure meets stringent regulatory frameworks.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Vendor Evaluation: Independent, unbiased assessments of third-party ecosystems."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Smart City & Critical Infrastructure Protection (SCIP) data streams. We harmonize legacy applications with modern cloud-native architectures prevalent in Emerging Threat & Technology Intelligence operations. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Emerging Threat & Technology Intelligence requirements.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Smart City & Critical Infrastructure Protection (SCIP) modules.",
                            "Zero-Trust Implementation: Secure integration endpoints verified continuously across the Emerging Threat & Technology Intelligence network."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "Our proprietary predictive algorithms are trained on petabytes of data relevant to Smart City & Critical Infrastructure Protection (SCIP). It continuously ingests complex telemetry data, adapting to the unique environmental variables of your Emerging Threat & Technology Intelligence assets. Experience a paradigm shift where your systems actively learn and improve their performance over time.",
                        "items": [
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Emerging Threat & Technology Intelligence contexts.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Smart City & Critical Infrastructure Protection (SCIP).",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Emerging Threat & Technology Intelligence workflows instantly.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Unstructured Data Parsing: Extracting value from logs, videos, and texts using natural language processing."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Smart City & Critical Infrastructure Protection (SCIP). They continuously negotiate with external APIs and internal databases to dynamically route Emerging Threat & Technology Intelligence resources. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Dynamic Supply Negotiation: AI interacting with vendor APIs to auto-procure necessary Emerging Threat & Technology Intelligence components.",
                            "Autonomous Workflow Execution: AI agents capable of initiating complex sequences for Smart City & Critical Infrastructure Protection (SCIP).",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Smart City & Critical Infrastructure Protection (SCIP) peak states.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Emerging Threat & Technology Intelligence.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Smart City & Critical Infrastructure Protection (SCIP) with our comprehensive implementation and handover framework. We craft intricate operating playbooks, meticulously documenting every procedure required for Emerging Threat & Technology Intelligence success. You receive a mature, battle-tested asset along with a highly capable workforce ready to manage it.",
                        "items": [
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Smart City & Critical Infrastructure Protection (SCIP).",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Seamless Ownership Transition: A phased, heavily audited handover ensuring zero business disruption.",
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Smart City & Critical Infrastructure Protection (SCIP), preventing institutional memory loss. Standard Operating Procedures become living digital documents, evolving alongside your Emerging Threat & Technology Intelligence infrastructure. Every new hire can immediately perform at the level of a seasoned veteran via access to this centralized brain trust.",
                        "items": [
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Emerging Threat & Technology Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Emerging Threat & Technology Intelligence maintenance procedures.",
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "NLP-Driven Search Architectures: Querying complex Emerging Threat & Technology Intelligence problems in natural language for exact solutions.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Protect the Public Sphere.",
                    buttonText: "Enable Urban Guardian",
                    link: "/contact"
                }
            },
            // OFFERING 6.5
            {
                id: "6.5",
                title: "Quantum-Safe & Next-Gen Cryptography (QSGC)",
                subtitle: "Future-proof security preparing for quantum computing threats and next-gen protection.",
                icon: ShieldAlert,
                stats: [
                    { value: "100", suffix: "%", prefix: "↓", label: "Quantum Risk", icon: ShieldCheck },
                    { value: "100", suffix: "%", prefix: "↑", label: "Crypto Agility", icon: Zap },
                    { value: "60", suffix: "%", prefix: "↓", label: "Migration Cost", icon: Database },
                    { value: "25", suffix: "yr", label: "Retention Saf", icon: Lock }
                ],
                portfolio: [
                    {
                        title: "Quantum-Safe",
                        features: ["Post-quantum algorithms", "Lattice-based encryption", "PQC implementation"],
                        icon: Lock
                    },
                    {
                        title: "Key Distribution",
                        features: ["QKD networks", "Quantum random numbers", "Unconditional security"],
                        icon: Zap
                    },
                    {
                        title: "Crypto-Agility",
                        features: ["Algorithm flexibility", "Rapid replacement", "Standards compliance"],
                        icon: Settings
                    },
                    {
                        title: "Quantum Sensing",
                        features: ["Quantum radar/imaging", "Subsurface detection", "GPS-denied navigation"],
                        icon: Radar
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "To maximize the potential of Quantum-Safe & Next-Gen Cryptography (QSGC), we provide elite personnel tailored to your specific ecosystem. By bridging deep industry experience with hands-on technical skills, they ensure smooth operations under the Emerging Threat & Technology Intelligence umbrella. As a result, your organization benefits from risk-free operational excellence and immediate deployment capabilities.",
                        "items": [
                            "Process Adherence: Meticulous execution of standard operating procedures for Emerging Threat & Technology Intelligence.",
                            "Safety & Compliance Rigor: Stringent adherence to local and international protocols governing Quantum-Safe & Next-Gen Cryptography (QSGC) deployments.",
                            "Continuous Skill Upgradation: Mandatory ongoing training programs ensuring our personnel stay ahead of Emerging Threat & Technology Intelligence industry curves.",
                            "On-site Supervision: Experienced foremen providing daily leadership to maintain the highest standards.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Transfer the operational burden of Quantum-Safe & Next-Gen Cryptography (QSGC) to our team with a robust, outcome-based partnership. Our dedicated command centers manage 24/7 triaging, escalation, and resolution for your entire Emerging Threat & Technology Intelligence footprint. Enjoy true operational freedom knowing that every KPI is strictly managed and independently verified.",
                        "items": [
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Emerging Threat & Technology Intelligence expectations.",
                            "Dedicated Account Leadership: A single point of contact overseeing the strategic direction of Quantum-Safe & Next-Gen Cryptography (QSGC).",
                            "Guaranteed Outcomes: Iron-clad SLAs ensuring maximum uptime specifically for Quantum-Safe & Next-Gen Cryptography (QSGC).",
                            "Penalty Clauses: Financially backed assurances that shift operational risk firmly onto us.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Emerging Threat & Technology Intelligence disruptions."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Our consultants guide you through the complexities of integrating Quantum-Safe & Next-Gen Cryptography (QSGC) into your legacy enterprise. By developing bespoke maturity models, we ensure your organization scales effectively within the Emerging Threat & Technology Intelligence sector. We formulate a phased approach that mitigates rollout risks while demonstrating rapid time-to-value.",
                        "items": [
                            "Change Management: Ensuring your workforce is prepared for Emerging Threat & Technology Intelligence technological transitions.",
                            "Strategic Roadmapping: Designing multi-year adoption strategies dedicated to Quantum-Safe & Next-Gen Cryptography (QSGC).",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Quantum-Safe & Next-Gen Cryptography (QSGC) deployment.",
                            "Executive Workshops: Aligning board-level vision with ground-level technical realities.",
                            "Operational Maturity Assessments: Evaluating your readiness and identifying gaps within Emerging Threat & Technology Intelligence."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Maximize data velocity by developing bespoke API gateways dedicated to Quantum-Safe & Next-Gen Cryptography (QSGC) data streams. Our process encompasses zero-trust security postures, ensuring data integrity across the Emerging Threat & Technology Intelligence spectrum. Seamless connectivity drives faster decisions, higher reliability, and a significantly lower total cost of ownership.",
                        "items": [
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Identity & Access Management: Unifying security perimeters across the newly integrated Quantum-Safe & Next-Gen Cryptography (QSGC) modules.",
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Emerging Threat & Technology Intelligence requirements.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations.",
                            "Middleware Orchestration: Advanced translation layers handling complex Emerging Threat & Technology Intelligence data flows."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "At the heart of our offering is a sophisticated AI engine specifically tailored to supercharge Quantum-Safe & Next-Gen Cryptography (QSGC). The AI engine creates high-fidelity digital models to accurately forecast degradation and performance drops in Emerging Threat & Technology Intelligence. Your management gains access to actionable, forward-looking insights that drive proactive strategic adjustments.",
                        "items": [
                            "Proprietary ML Libraries: Utilizing custom-built algorithms heavily optimized for Emerging Threat & Technology Intelligence contexts.",
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Emerging Threat & Technology Intelligence assets.",
                            "Continuous Model Training: AI modules that autonomously ingest new data to refine their accuracy.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Emerging Threat & Technology Intelligence workflows instantly.",
                            "Scalable Cloud Computing: Elastic processing power adapting to the dynamic loads of Quantum-Safe & Next-Gen Cryptography (QSGC)."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "We deploy specialized software agents that negotiate, decide, and act upon the parameters of Quantum-Safe & Next-Gen Cryptography (QSGC). By constantly monitoring system equilibrium, the agents act instantly to prevent cascading failures in Emerging Threat & Technology Intelligence. Your human capital is freed from repetitive micro-management, elevated to focus on overarching strategy.",
                        "items": [
                            "Automated Compliance Logging: Every autonomous action is meticulously recorded for audit purposes.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Quantum-Safe & Next-Gen Cryptography (QSGC) peak states.",
                            "Zero-Latency Responsiveness: Eliminating human bottlenecks for time-sensitive adjustments.",
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Emerging Threat & Technology Intelligence."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Quantum-Safe & Next-Gen Cryptography (QSGC) with our comprehensive implementation and handover framework. We craft intricate operating playbooks, meticulously documenting every procedure required for Emerging Threat & Technology Intelligence success. The final transfer of ownership only occurs when your team demonstrates absolute competence and confidence.",
                        "items": [
                            "Customised Playbook Generation: Documenting standard operating procedures and emergency protocols.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Quantum-Safe & Next-Gen Cryptography (QSGC).",
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Structured Knowledge Transfer: Documented training programs designed to upskill your workforce."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We construct dynamic operational wikis and NLP-driven search tools specifically for your Quantum-Safe & Next-Gen Cryptography (QSGC) environment. Our systems allow technicians to query complex Emerging Threat & Technology Intelligence issues in natural language and receive instant, exact procedures. The result is a continually compounding base of intellectual property that strengthens your total enterprise value.",
                        "items": [
                            "Video Process Documentation: High-quality visual recordings of critical Emerging Threat & Technology Intelligence maintenance procedures.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Emerging Threat & Technology Intelligence database.",
                            "Dynamic SOP Integration: Digital workflows that update automatically alongside system changes.",
                            "Legacy Knowledge Digitization: Capturing undocumented insights from senior staff via guided interviews.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Future-Proof Your Data.",
                    buttonText: "Secure Quantum Data",
                    link: "/contact"
                }
            },
            // OFFERING 6.6
            {
                id: "6.6",
                title: "Neuro-Security & Cognitive Protection (NSCP)",
                subtitle: "Field protecting against threats targeting human cognition and neurological systems.",
                icon: Brain,
                stats: [
                    { value: "90", suffix: "%", prefix: "↓", label: "Deepfake Fraud", icon: ShieldCheck },
                    { value: "50", suffix: "%", prefix: "↓", label: "Cognitive Manip", icon: Brain },
                    { value: "100", suffix: "%", prefix: "↑", label: "Decision Integrity", icon: Target },
                    { value: "12", suffix: "%", label: "Linguis Diverge", icon: MessageSquare }
                ],
                portfolio: [
                    {
                        title: "Cognitive Sec",
                        features: ["Deepfake detection", "Misinformation inoculation", "Decision hardening"],
                        icon: MessageSquare
                    },
                    {
                        title: "Neuro-Monitor",
                        features: ["Fatigue/Stress detection", "Insider behavioral indicators", "Cognitive load opt"],
                        icon: Activity
                    },
                    {
                        title: "Augmentation",
                        features: ["Exoskeleton security", "BCI protection", "Boundary enforcement"],
                        icon: ShieldAlert
                    },
                    {
                        title: "Intelligence",
                        features: ["Collective protection", "Social manipulation defense", "Bias prevention"],
                        icon: Globe
                    }
                ],
                tabs: [
                    {
                        "title": "Skilled Manpower Services",
                        "description": "Navigating the complexities of Neuro-Security & Cognitive Protection (NSCP) is made seamless by our fully trained and certified deployment teams. Our teams act as an extension of your own, filling critical knowledge gaps within your Emerging Threat & Technology Intelligence initiatives. This ensures robust reliability while allowing your core team to pivot towards strategic growth.",
                        "items": [
                            "Scalable Resourcing: Flexible workforce allocation that dynamically scales up or down based on specific project demands.",
                            "Rapid Field Intervention: Dedicated rapid response squads ready to deploy immediately for Emerging Threat & Technology Intelligence critical events.",
                            "Cross-functional Expertise: Personnel capable of bridging mechanical, electrical, and software disciplines within Neuro-Security & Cognitive Protection (NSCP).",
                            "Process Adherence: Meticulous execution of standard operating procedures for Emerging Threat & Technology Intelligence.",
                            "Seamless Team Integration: Professionals trained not just in technical execution, but in cohesive collaboration."
                        ]
                    },
                    {
                        "title": "SLA Based Managed Services",
                        "description": "Our SLA-bound managed model for Neuro-Security & Cognitive Protection (NSCP) guarantees strict adherence to performance metrics. Our proactive diagnostic frameworks identify anomalies within your Emerging Threat & Technology Intelligence infrastructure before they cause downtime. This translates to predictable budgets, zero unexpected capex shocks, and guaranteed operational continuity.",
                        "items": [
                            "Predictable Cost Structures: Transition from reactive capex to a stable operational expenditure model.",
                            "Customized Reporting: Deep-dive monthly analytics on the health and efficiency of your systems.",
                            "Preventative Incident Management: Identifying anomalies before they mature into Emerging Threat & Technology Intelligence disruptions.",
                            "Continuous Optimization: Iterative refinements made monthly to exceed baseline Emerging Threat & Technology Intelligence expectations.",
                            "Proactive 24/7 Monitoring: Continuous remote oversight using advanced diagnostic tools for Emerging Threat & Technology Intelligence."
                        ]
                    },
                    {
                        "title": "Advisory & Consulting Services",
                        "description": "Transform your operational vision into an executable roadmap with our specialized Neuro-Security & Cognitive Protection (NSCP) advisory tier. We conduct granular audits of your existing infrastructure to spot inefficiencies unique to Emerging Threat & Technology Intelligence workflows. Lay a solid, scalable foundation today that will support your business ambitions for the next decade.",
                        "items": [
                            "Process Re-engineering: Streamlining workflows to accommodate newly introduced Neuro-Security & Cognitive Protection (NSCP) capabilities.",
                            "Risk Mitigation Strategies: Identifying and neutralizing potential roadblocks early in the project lifecycle.",
                            "Architecture Blueprints: High-level design documents guiding the structural integrity of the solution.",
                            "Feasibility Studies: Rigorous cost-benefit analysis prior to full-scale Neuro-Security & Cognitive Protection (NSCP) deployment.",
                            "Change Management: Ensuring your workforce is prepared for Emerging Threat & Technology Intelligence technological transitions."
                        ]
                    },
                    {
                        "title": "Systems Integration Services",
                        "description": "Our specialized integration engineers architect robust bridges specifically for your Neuro-Security & Cognitive Protection (NSCP) deployment. Through advanced middleware development, we translate disparate protocols into a unified Emerging Threat & Technology Intelligence language. Achieve unprecedented operational synchronization, enabling cross-platform automated responses.",
                        "items": [
                            "Custom API Development: Building secure, high-throughput data pipelines specific to Emerging Threat & Technology Intelligence requirements.",
                            "Real-Time Data Synchronisation: Ensuring instantaneous state-mapping across all connected platforms.",
                            "IoT Sensor Integration: Direct telemetry pipelines from hardware endpoints into your central dashboard.",
                            "Legacy System Modernization: Strategically wrapping outdated tech-debt components.",
                            "Robust Quality Assurance: Comprehensive integration testing encompassing load and vulnerability simulations."
                        ]
                    },
                    {
                        "title": "AI Driven Tech Platform",
                        "description": "By augmenting Neuro-Security & Cognitive Protection (NSCP) with our AI backbone, we enable predictive forecasting rather than historical reporting. Dynamic parameter tuning happens in real-time, ensuring maximum efficiency without manual Emerging Threat & Technology Intelligence intervention. This delivers a level of precision and foresight that human operators alone simply cannot achieve.",
                        "items": [
                            "Dynamic Parameter Optimization: Autonomous, real-time adjustments driving efficiency across Emerging Threat & Technology Intelligence assets.",
                            "Predictive Algorithmic Modelling: Utilizing deep-learning to forecast systemic behaviors within Neuro-Security & Cognitive Protection (NSCP).",
                            "Comprehensive Data Lakes: Secure ingestion engines capably processing petabytes of operational telemetry.",
                            "Actionable Intelligence Dashboards: Translating complex AI outputs into strategic recommendations.",
                            "Anomaly Detection Algorithms: Surfacing hidden irregularities in Emerging Threat & Technology Intelligence workflows instantly."
                        ]
                    },
                    {
                        "title": "Agentic AI Automation Services",
                        "description": "By granting bounded authority to AI, routine tasks within Neuro-Security & Cognitive Protection (NSCP) are completed with absolute zero latency. These intelligent agents can dynamically triage software anomalies, effectively self-healing your Emerging Threat & Technology Intelligence networks. The continuous, autonomous micro-optimizations collectively deliver massive annual efficiency gains.",
                        "items": [
                            "Self-Healing Paradigms: Systems that automatically detect and patch configurations within Emerging Threat & Technology Intelligence.",
                            "Predictive Load Balancing: Agents independently shifting operational strain across the infrastructure.",
                            "Autonomous Calibrations: Continuous tuning of environmental controls for Neuro-Security & Cognitive Protection (NSCP) peak states.",
                            "Automated Resource Dispatching: Intelligent routing of personnel based on multi-variate urgency matrices.",
                            "Threat Neutralization: Agentic defense protocols isolating compromised nodes within microseconds."
                        ]
                    },
                    {
                        "title": "Build Operate Transfer Services",
                        "description": "De-risk your investment in Neuro-Security & Cognitive Protection (NSCP) with our comprehensive implementation and handover framework. We establish robust governance models and audit trails that serve as your permanent Emerging Threat & Technology Intelligence operational foundation. Achieve your innovation goals without overwhelming your current organizational structure during deployment.",
                        "items": [
                            "Dedicated PMO: A centralized project management office governing the entire BOT lifecycle.",
                            "Turnkey Implementation: Comprehensive end-to-end design and deployment of Neuro-Security & Cognitive Protection (NSCP).",
                            "Post-Transfer Support Window: A guaranteed 6-month advisory safety net following final handover.",
                            "Intellectual Property Handover: Complete transfer of all code repositories, blueprints, and licenses.",
                            "Governance Creation: Establishing steering committees and KPIs required for long-term Emerging Threat & Technology Intelligence success."
                        ]
                    },
                    {
                        "title": "Knowledge Management Services",
                        "description": "We digitize the undocumented expertise surrounding Neuro-Security & Cognitive Protection (NSCP), preventing institutional memory loss. We conduct detailed knowledge capture sessions with senior personnel to digitize nuanced Emerging Threat & Technology Intelligence expertise. You establish a resilient, highly trained workforce unbothered by normal staff turnover.",
                        "items": [
                            "AI-Assisted Troubleshooting Wikis: Crowdsourced diagnostic protocols augmented by machine learning.",
                            "Intelligent Ontologies: Structuring unstructured operational data relating to Neuro-Security & Cognitive Protection (NSCP) into digital libraries.",
                            "Semantic Data Tagging: Autocategorization of all new documentation entering the Emerging Threat & Technology Intelligence database.",
                            "Video Process Documentation: High-quality visual recordings of critical Emerging Threat & Technology Intelligence maintenance procedures.",
                            "Interactive Certification Modules: Built-in LMS tools assessing the competency of your operational staff."
                        ]
                    }
                ],


                cta: {
                    text: "Protect the Human Edge.",
                    buttonText: "Enable Cognitive AI",
                    link: "/contact"
                }
            }
        ]
    }
];
