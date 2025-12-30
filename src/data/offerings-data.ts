import { Shield, Building, Database, Zap, Server, Activity, Lock, Eye, Factory, Truck, ShoppingBag, HeartPulse, Users, Plane, Map, Layers, User, CheckCircle2 } from "lucide-react";

export const coreSecurityData = [
    {
        title: "Guarding & On-Site Security",
        icon: User,
        levels: "L1-L4",
        description: "Tech-enabled supervision with body-worn cameras and AI-attendance systems.",
    },
    {
        title: "Electronic Security Systems",
        icon: Zap,
        levels: "L2-L4",
        description: "IP CCTV, Access Control, Intrusion & Fire Detection integrated with IoT sensors.",
    },
    {
        title: "Remote Monitoring & SOC",
        icon: Eye,
        levels: "L3-L5",
        description: "24/7 Command Centre with Cloud VMS, AI analytics, and rapid incident response.",
    },
    {
        title: "Cyber-Physical Convergence",
        icon: Lock,
        levels: "L4-L5",
        description: "Unified platform for IT/OT security, ISO 27001 ready & regulatory compliant.",
    },
    {
        title: "Secure Logistics",
        icon: Shield,
        levels: "L2-L4",
        description: "GPS-tracking, route analytics, and tamper-proof monitoring for high-value assets.",
    },
    {
        title: "Risk Consulting",
        icon: Activity,
        levels: "L4-L5",
        description: "Expert audits, threat modeling, and red-teaming for critical infrastructure.",
    },
    {
        title: "Background Verification",
        icon: CheckCircle2,
        levels: "L3-L4",
        description: "AI-driven identity checks and continuous screening with seamless HRIS API integration.",
    },
    {
        title: "Residential Security",
        icon: Building,
        levels: "L2-L4",
        description: "Visitor management, ANPR, and community safety apps for RWAs and townships.",
    },
    {
        title: "Industrial Security",
        icon: Factory,
        levels: "L3-L4",
        description: "Perimeter intrusion detection, drone surveillance, and fire zone monitoring.",
    },
    {
        title: "Logistics & Warehousing",
        icon: Truck,
        levels: "L3-L4",
        description: "RFID, yard management, and vehicle tracking for E-commerce and 3PL providers.",
    },
    {
        title: "Retail Security",
        icon: ShoppingBag,
        levels: "L2-L4",
        description: "AI-driven loss prevention, EAS gates, and behavioral analytics for retail chains.",
    },
    {
        title: "Healthcare Security",
        icon: HeartPulse,
        levels: "L3-L4",
        description: "Access-controlled labs, compliance logging, and temperature integrity monitoring.",
    },
    {
        title: "Energy & Utilities",
        icon: Zap,
        levels: "L4-L5",
        description: "Thermal drones, perimeter radars, and SCADA-aware monitoring for critical infrastructure.",
    },
    {
        title: "Public Spaces & Hospitality",
        icon: Users,
        levels: "L4-L5",
        description: "Biometrics, ANPR, behavioral analytics, and sterile zone protocols for transport sectors.",
    },
    {
        title: "Robotics & Drones",
        icon: Plane,
        levels: "L5",
        description: "Autonomous perimeter patrols with LIDAR defense and aerial surveillance.",
    },
    {
        title: "Smart City Surveillance",
        icon: Map,
        levels: "L4-L5",
        description: "City-wide AI analytics, C4I command centres, and integrated emergency response systems.",
    },
    {
        title: "Large Scale Integration",
        icon: Layers,
        levels: "L4-L5",
        description: "End-to-end integration of disparate security systems into a unified command and control framework.",
    }
];

export const facilityEvolutionData = [
    {
        level: "L1",
        title: "Basic FM",
        desc: "Reactive maintenance and manual logs for small offices and Tier-2 buildings.",
        tags: ["Manual Logs", "Reactive Maintenance", "Basic Cleaning"]
    },
    {
        level: "L2",
        title: "Digitized FM",
        desc: "CMMS implementation, digital work orders, and utility dashboards for corporate offices.",
        tags: ["CMMS", "Digital Work Orders", "Utility Dashboards"]
    },
    {
        level: "L3",
        title: "Smart Building Integration",
        desc: "IoT-enabled HVAC & Lighting, Occupancy sensors, and centralized tenant apps for Grade-A offices.",
        tags: ["IoT Sensors", "Smart HVAC", "Tenant App"]
    },
    {
        level: "L4",
        title: "AI-Driven Facility Intelligence",
        desc: "Predictive maintenance, ESG reporting, and ERP/HR integration for Global HQs and REITs.",
        tags: ["Predictive Maint.", "ESG Reporting", "ERP Integration"]
    },
    {
        level: "L5",
        title: "Autonomous Facility Ecosystem",
        desc: "Digital twin, self-optimizing systems, and facility robotics for smart cities and innovation districts.",
        tags: ["Digital Twin", "Self-Optimizing", "Facility Robotics"]
    }
];

export const dcimData = [
    {
        level: "L3",
        title: "Foundational",
        desc: "Rack monitoring, Power & Cooling tracking, Basic security integration.",
        features: ["Rack Sensors", "Power Stats"]
    },
    {
        level: "L4",
        title: "Integrated Platform",
        desc: "Real-time PUE optimization, Thermal mapping, Compliance reporting.",
        features: ["Thermal Maps", "PUE Ops", "Compliance"]
    },
    {
        level: "L5",
        title: "Autonomous AI",
        desc: "Predictive failure analytics, Self-healing systems, Full cyber-physical orchestration.",
        features: ["Predictive AI", "Self-Healing", "Orchestration"]
    }
];
