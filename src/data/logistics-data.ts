import { Truck, Wallet, Package, Lock, MonitorDot, Shield, Eye, TrendingUp, FileCheck, Zap, Database, CheckCircle2, Users, Clock, MapPin, Award } from "lucide-react";

export interface LogisticsStatistic {
    value: string;
    label: string;
    icon: any;
    suffix?: string;
}

export interface LogisticsServiceCard {
    icon: any;
    title: string;
    description: string;
    features: string[];
}

export interface LogisticsTabContent {
    id: string;
    title: string;
    icon: any;
    description: string;
    offerings: {
        title: string;
        items: string[];
    };
    benefits: {
        title: string;
        description: string;
        icon: any;
    }[];
    keyMetric?: string;
}

// Panel 2: Statistics Data
export const logisticsStatistics: LogisticsStatistic[] = [
    {
        value: "40",
        label: "Years of Excellence",
        icon: Award,
        suffix: "+"
    },
    {
        value: "10000",
        label: "Secure Deliveries Monthly",
        icon: Truck,
        suffix: "+"
    },
    {
        value: "99.9",
        label: "On-Time Delivery Rate",
        icon: Clock,
        suffix: "%"
    },
    {
        value: "50",
        label: "Cities Covered",
        icon: MapPin,
        suffix: "+"
    }
];

// Panel 3: Portfolio/Service Cards
export const logisticsServiceCards: LogisticsServiceCard[] = [
    {
        icon: Wallet,
        title: "Cash & Retail Cash Logistics",
        description: "End-to-end cash movement with GPS-tracked vehicles and digital verification",
        features: [
            "Smart CIT vehicles with live tracking",
            "ATM replenishment & branch services",
            "Retail collections with smart safes",
            "Digital proofs of delivery"
        ]
    },
    {
        icon: Package,
        title: "High-Value Logistics",
        description: "Discreet secure transport for jewellery, bullion, and luxury goods",
        features: [
            "Discreet transport with armed escorts",
            "RFID-enabled vaulting systems",
            "Jewellery & bullion security",
            "Compliance documentation"
        ]
    },
    {
        icon: Lock,
        title: "Strong Room & Vault Services",
        description: "Bank-grade storage with certified construction and 24/7 monitoring",
        features: [
            "BIS-certified strong rooms",
            "Biometric access control",
            "24/7 CCTV surveillance",
            "Audit-ready traceability"
        ]
    },
    {
        icon: MonitorDot,
        title: "Central Command Platform",
        description: "Unified oversight with real-time tracking and analytics",
        features: [
            "Real-time asset tracking",
            "Inventory dashboards",
            "Unified data ecosystem",
            "Scalable operations"
        ]
    }
];

// Panel 4: Vertical Tabs Content
export const logisticsTabsContent: LogisticsTabContent[] = [
    {
        id: "cash-logistics",
        title: "Cash & Retail Cash Logistics",
        icon: Wallet,
        description: "End-to-end cash movement and management, powered by GPS-tracked, sensor-enabled vehicles, digital trip sheets, and seamless cash vaulting integration.",
        offerings: {
            title: "Our Offerings",
            items: [
                "Smart Cash-in-Transit (CIT): Armoured or reinforced vehicles equipped with live GPS tracking, geo-fencing, panic alarms, and round-the-clock command centre monitoring.",
                "ATM & Branch Services: Predictive, SLA-driven replenishment and cassette swaps, with every handover digitally captured, time-stamped, and verified.",
                "Retail Cash Management: Scheduled collections from stores, fuel outlets, and micro-merchants, paired with on-site smart safes that automatically count, validate, and secure currency while offering provisional credit."
            ]
        },
        benefits: [
            {
                title: "Unmatched Visibility",
                description: "Real-time tracking of vehicles, routes, and consignments via a secure client portal, with instant automated alerts for any deviations or delays.",
                icon: Eye
            },
            {
                title: "Seamless Reconciliation",
                description: "Digital proofs of delivery, barcode/cassette scanning, and automated systems eliminate ambiguities, minimising disputes and shrinkage.",
                icon: CheckCircle2
            },
            {
                title: "Robust Compliance",
                description: "Standard Operating Procedures (SOPs) aligned with industry-leading cash logistics and banking regulations, supported by rigorous governance, independent audits, and comprehensive insurance coverage.",
                icon: FileCheck
            }
        ],
        keyMetric: "99.9% On-Time Delivery"
    },
    {
        id: "high-value-logistics",
        title: "High-Value Logistics",
        icon: Package,
        description: "Specialised, discreet secure logistics for jewellery, bullion, luxury goods, and sensitive cargo, ensuring high-assurance custody from origin to destination.",
        offerings: {
            title: "Our Offerings",
            items: [
                "Discreet Secure Transport: Unbranded or decoy vehicles, tamper-evident sealing, armed escorts, and optimised, geo-fenced routes for maximum discretion.",
                "Tech-Enabled Vaulting: State-of-the-art vaults linked to an advanced inventory platform, tracking every item via barcodes or RFID for precise accountability.",
                "Compliance-Ready Processes: Detailed documentation, route logs, and digital custody trails designed to streamline customs clearance, audits, and insurance claims."
            ]
        },
        benefits: [
            {
                title: "Single Source of Truth",
                description: "Intuitive online dashboards deliver near real-time insights into stock levels, movements, and access history across multiple cities and facilities.",
                icon: Database
            },
            {
                title: "Minimised Risk, Maximised Confidence",
                description: "Bank-grade physical security combined with unbreakable digital chain-of-custody enhances insurer trust and significantly reduces exposure to loss.",
                icon: Shield
            },
            {
                title: "Streamlined Operations",
                description: "A single integrated partner for transport, storage, and documentation simplifies even the most complex multi-jurisdictional workflows.",
                icon: TrendingUp
            }
        ],
        keyMetric: "Zero Loss Record"
    },
    {
        id: "strong-room-vault",
        title: "Strong Room & Vault Services",
        icon: Lock,
        description: "Next-generation strong rooms and vaults designed for superior physical resilience and full digital traceability — perfectly suited for cash, bullion, jewellery, and high-value documents.",
        offerings: {
            title: "Our Offerings",
            items: [
                "Certified Strong Rooms: Construction adhering to Bureau of Indian Standards (BIS) guidelines, including graded strong room doors with certified fire and burglary resistance for enduring asset protection.",
                "Smart Access Controls: Biometric and PIN authentication, time locks, dual-control mechanisms, and role-based zoning across vault, document, and operational areas.",
                "Advanced Environmental Monitoring: 24/7 CCTV surveillance, intrusion and seismic sensors, integrated fire detection and suppression systems, plus climate controls for preserving sensitive documents."
            ]
        },
        benefits: [
            {
                title: "Instant Audit Readiness",
                description: "Every access, movement, and operation is automatically logged, time-stamped, and video-correlated for complete, indisputable traceability.",
                icon: FileCheck
            },
            {
                title: "Independent Custodian Assurance",
                description: "Professionally managed, neutral third-party storage that meets the stringent requirements of regulators, auditors, law firms, and insurers.",
                icon: Shield
            },
            {
                title: "Scalable Flexibility",
                description: "Effortlessly expand vault and document storage capacity without capital expenditure, maintaining consistent controls and visibility at every scale.",
                icon: Zap
            }
        ],
        keyMetric: "BIS Certified Facilities"
    },
    {
        id: "command-platform",
        title: "Central Command Platform",
        icon: MonitorDot,
        description: "Unified technology backbone providing real-time visibility, predictive analytics, and seamless integration across all logistics operations.",
        offerings: {
            title: "Our Offerings",
            items: [
                "Real-Time Tracking: Live GPS monitoring of all vehicles and consignments with geo-fencing and automated deviation alerts.",
                "Inventory Management: Comprehensive dashboards showing stock levels, movements, and access history across all facilities.",
                "Unified Data Ecosystem: Single platform integrating CIT operations, vault management, and client reporting for complete transparency.",
                "Scalable Operations: Cloud-based infrastructure that grows with your business, supporting multi-location and multi-service deployments."
            ]
        },
        benefits: [
            {
                title: "Complete Visibility",
                description: "Single dashboard providing real-time insights into all operations, from vehicle locations to vault inventory levels.",
                icon: Eye
            },
            {
                title: "Proactive Management",
                description: "Predictive analytics and automated alerts enable proactive intervention before issues impact operations.",
                icon: TrendingUp
            },
            {
                title: "Seamless Integration",
                description: "API-based connectivity allows integration with your existing ERP, banking, and inventory management systems.",
                icon: Database
            }
        ],
        keyMetric: "24/7 Command Centre"
    }
];

// Panel 5: CTA Content
export const logisticsCTAContent = {
    primaryCTA: {
        text: "Explore Logistics Solutions",
        link: "/verticals/logistics"
    },
    secondaryCTA: {
        text: "Request a Quote",
        link: "/contact"
    },
    trustIndicators: [
        { icon: Shield, text: "Bank-Grade Security" },
        { icon: Award, text: "ISO Certified" },
        { icon: Users, text: "500+ Clients" }
    ]
};
