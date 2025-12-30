import { Landmark, Heart, Factory, Droplets, Building2, Plane, ShoppingBag, Home, Monitor, Wrench, Shield, Activity, Zap, Layers, Server, Truck, Lock, CreditCard, HardHat, Leaf, Database, Wifi, FileCheck, AlertTriangle, Network, Users, Globe, Smartphone, AlertOctagon } from "lucide-react";

// Image imports will need to be handled by the component or passed as strings/imported here if possible. 
// For now, we will replace the imported image variables with string paths or keep them as imports if we move the assets or use dynamic imports.
// Since we are moving this to a data file, it is better to use string paths or keep the imports if the build system supports it.
// Assuming Vite aliases or relative paths. The previous file had:
// import verticalsHealthcare from "../assets/verticals-healthcare.jpg";
// ... etc.

// We will use string placeholders or relative paths for now, and the component will need to resolve them or we can import them here if we change the file extension to .tsx or .ts with loaders.
// Better approach for data files: Use string paths and let the component import or use dynamic require/import.
// However, given the current setup, I will supply the data structure. The image variables will be treated as strings or added as imports if I can.
// Let's rely on standard image paths or imports.
// To keep it simple and working: I'll use imports here as well, assuming this file is processed by Vite.

import verticalsHealthcare from "../assets/verticals-healthcare.jpg";
import verticalsFacility from "../assets/verticals-facility.jpg";
import verticalsSurveillance from "../assets/verticals-surveillance.jpg";
import verticalsMep from "../assets/hero-soc.jpg";

export const verticalsList = [
    { icon: Landmark, name: "BFSI", description: "Banking, Financial Services & Insurance", stats: "120+ Banks" },
    { icon: Heart, name: "Healthcare", description: "Hospitals, Pharma & Life Sciences", stats: "85+ Hospitals" },
    { icon: Factory, name: "Industrial", description: "Manufacturing & Heavy Industries", stats: "200+ Plants" },
    { icon: Droplets, name: "Energy", description: "Energy & Natural Resources", stats: "45+ Sites" },
    { icon: Building2, name: "Smart Cities", description: "Urban Infrastructure & Governance", stats: "12 Cities" },
    { icon: Plane, name: "Transport", description: "Airports, Ports & Logistics Hubs", stats: "30+ Hubs" },
    { icon: ShoppingBag, name: "Retail", description: "Malls, Stores & E-commerce", stats: "500+ Stores" },
    { icon: Home, name: "Residential", description: "Townships & Gated Communities", stats: "150+ Communities" },
    { icon: Monitor, name: "IT / ITES", description: "Tech Parks, Corporate Workspaces", stats: "50+ Parks" },
    { icon: Wrench, name: "Manufacturing", description: "Automotive, Electronics & Production", stats: "100+ Units" },
];

export const verticalsData: Record<string, any> = {
    "Healthcare": {
        title: "AI-Based Central Facilities Command Center",
        subtitle: "Healthcare Security & Facilities Intelligence",
        icon: Heart,
        video: "https://videos.pexels.com/video-files/8539744/8539744-hd_1920_1080_25fps.mp4",
        poster: verticalsHealthcare,
        partners: [
            { name: "Apollo Hospitals", logo: "/logos/apollo.png" },
            { name: "Fortis", logo: "/logos/fortis.svg" },
            { name: "Manipal Hospitals", logo: "/logos/manipal.png" },
            { name: "Max Healthcare", logo: "/logos/max.png" }
        ],
        sections: [
            {
                title: "Tech-Enabled Healthcare Security Services",
                icon: Shield,
                image: verticalsHealthcare,
                description: "Deliver always-on protection for patients, staff, visitors, and critical assets with a connected security workforce and smart hospital infrastructure.",
                features: [
                    { title: "24/7 Smart Hospital Protection", desc: "Integrated CCTV, access control, and alarm systems with real-time monitoring, incident alerts, and digital guard tours to prevent theft, violence, and unauthorized access in sensitive areas like ICUs, maternity, and pharmacies." },
                    { title: "Digital Guard Operations & Compliance", desc: "Mobile apps for guards to receive post orders, log patrols, record incidents, and file reports instantly, giving hospital management live visibility of risks, response times, and guard performance." },
                    { title: "Patient, Visitor, and Staff Safety Management", desc: "Tech-enabled visitor registration, badge management, and digital visitor logs, combined with trained guards skilled in de-escalation, conflict management, and high-risk patient transfers." },
                    { title: "Emergency Response & Incident Command", desc: "Centralized dashboards to coordinate emergency codes, evacuations, and critical incidents with automated notifications, geo-tagged incident reports, and post-event analytics to improve protocols." },
                    { title: "Risk Analytics & Regulatory Readiness", desc: "Security data consolidated into dashboards and reports that support audits, licensing renewals, and policy updates while helping leadership identify high-risk zones and patterns of aggressive behavior." }
                ]
            },
            {
                title: "Tech-Enabled Healthcare Facility Management",
                icon: Building2,
                image: verticalsFacility,
                description: "Use IoT, CMMS, and AI-driven insights to ensure safe, reliable, and efficient hospital environments that support world-class clinical care.",
                features: [
                    { title: "Smart Building & Asset Management", desc: "Connected equipment, BMS, and sensors feeding into a Computerised Maintenance Management System (CMMS) to monitor asset health, plan preventive maintenance, and extend the life of critical infrastructure." },
                    { title: "IoT-Based Soft & Hard Services", desc: "Tech-enabled housekeeping, engineering, and support services with digital work orders, SLA tracking, and real-time status for tasks such as cleaning, waste management, HVAC, and utilities." },
                    { title: "Infection Control & Indoor Air Quality", desc: "UVGI and IAQ solutions integrated with monitoring systems to reduce airborne pathogens, improve air quality, and support infection control standards in high-risk areas." },
                    { title: "Patient-Centric Service Delivery", desc: "App- or kiosk-based request systems for portering, housekeeping, and maintenance, reducing response times, lowering patient wait times, and improving overall experience." },
                    { title: "Data-Driven Governance & Reporting", desc: "Central dashboards and automated reports that give hospital leadership real-time visibility into energy use, space utilization, asset uptime, and service performance across all facilities." }
                ]
            },
            {
                title: "AI-Powered Video Surveillance & Analytics",
                icon: Activity,
                image: verticalsSurveillance,
                description: "Real-time monitoring with behavior detection, intrusion alerts, and automated incident tagging to reduce blind spots and false alarms.",
                features: [
                    { title: "Smart Access Control for Sensitive Areas", desc: "Biometric and card-based access control for ICUs, OT, maternity, pharmacy, labs, and data rooms with detailed audit trails." },
                    { title: "Digital Visitor Management & Badge System", desc: "App- or kiosk-based visitor registration, ID verification, and badge printing with watchlist checks and real-time occupancy visibility." },
                    { title: "Integrated Command & Control Center", desc: "Central dashboard that unifies CCTV, access control, alarms, and guard dispatch to coordinate response and manage sitewide lockdowns." },
                    { title: "Mobile Guard Operations & e-Patrols", desc: "Guard smartphones for route management, QR/NFC checkpoint scans, live incident reporting, and photo/video evidence capture." },
                    { title: "Emergency & Code Response Management", desc: "Tech-enabled workflows for fire, disaster, code alerts and evacuations with automated notifications, escalation, and post-incident reports." },
                    { title: "Asset & Vehicle Tracking (RTLS/LPR)", desc: "Real-time location tracking for high-value equipment and license plate recognition for ambulances and suspicious or banned vehicles." },
                    { title: "Environment & Safety Sensors", desc: "Smart sensors for smoke, vape, air quality, noise, and tampering events integrated into security alerts for proactive risk mitigation." },
                    { title: "Security Compliance & Reporting Suite", desc: "Automated logs, audit-ready reports, and dashboards for incident trends, response times, and access history to support healthcare regulations." },
                    { title: "Cybersecurity for Hospital Systems & IoMT", desc: "Protection for clinical networks, medical devices, and hospital applications, integrated with Security Operations platforms for unified threat detection and response." }
                ]
            },
            {
                title: "Intelligent Hospital Infrastructure & MEP Management",
                icon: Zap,
                image: verticalsMep,
                description: "Unified monitoring and control of electrical, HVAC, plumbing, oxygen, medical gas, lifts, and fire systems from a single healthcare-focused dashboard.",
                features: [
                    { title: "Predictive Maintenance for Critical MEP Assets", desc: "Machine-learning models that predict failures in chillers, AHUs, pumps, elevators, generators, and UPS, triggering auto-created work orders and priority alerts for clinical areas." },
                    { title: "Intelligent HVAC & Air Quality for OTs, ICUs & Wards", desc: "AI-optimized temperature, humidity, airflow, and pressure regimes to support infection control and comfort while reducing energy consumption in critical zones." },
                    { title: "Smart Oxygen & Medical Gas Plant Management", desc: "Real-time monitoring of oxygen generation, tank levels, and pipeline pressures with anomaly detection for leaks, abnormal usage, and backup readiness." },
                    { title: "Energy Optimization & Load Prioritization", desc: "Advanced analytics to optimize power usage, prioritize loads for OT/ICU/emergency, and balance grid, DG, and backup sources for resilience and cost efficiency." },
                    { title: "IoT-Enabled Plumbing & Water Safety", desc: "Sensors for water quality, levels, and flow in critical circuits, with automated alerts and failsafes to prevent contamination, shortages, or flooding incidents." },
                    { title: "Connected Fire & Life Safety Systems", desc: "Integrated fire detection, alarm, sprinkler, smoke control, and evacuation support linked to the building automation system for faster, data-driven response." },
                    { title: "Lifts & Vertical Transport Intelligence", desc: "Monitoring and prioritization of patient, service, and emergency lifts to ensure availability for critical transfers and code situations." },
                    { title: "AI-Driven SLA & Tier Management (L1–L2–L3)", desc: "Automated SLA tracking and escalation mapped to L1 (non-critical), L2 (patient care areas), and L3 (critical & high-security zones) for facilities uptime and response." },
                    { title: "Analytics & Compliance Reporting for Hospital Leadership", desc: "KPI dashboards and audit-ready reports on uptime, alarms, response times, energy use, and life-safety events to support accreditation and governance." }
                ]
            }
        ]
    },
    "BFSI": {
        title: "Secure Banking & Financial Operations",
        subtitle: "BFSI Security Intelligence",
        icon: Landmark,
        video: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4",
        poster: verticalsSurveillance,
        partners: [
            { name: "HDFC Bank", logo: "/logos/hdfc.svg" },
            { name: "SBI", logo: "/logos/sbi.svg" },
            { name: "ICICI Bank", logo: "/logos/icici.png" },
            { name: "Axis Bank", logo: "/logos/axis.png" }
        ],
        sections: [
            {
                title: "Cash Logistics & Supply Chain Security",
                icon: Truck,
                image: verticalsFacility,
                description: "End-to-end protection for cash-in-transit, ATM replenishment, and vault storage.",
                features: [
                    { title: "Armored Vehicle Tracking", desc: "Real-time GPS monitoring with remote immobilization." },
                    { title: "Vault & Strongroom Security", desc: "Biometric access and seismic sensors for high-value storage." },
                    { title: "Route Optimization", desc: "AI-driven route planning to minimize risk exposure." }
                ]
            },
            {
                title: "Branch & ATM Surveillance",
                icon: Monitor,
                image: verticalsSurveillance,
                description: "Centralized monitoring of thousands of branches and ATMs to prevent theft and vandalism.",
                features: [
                    { title: "e-Surveillance of ATMs", desc: "24/7 remote monitoring with two-way audio deterrence." },
                    { title: "Intrusion Detection", desc: "Motion sensors and glass break detectors integrated with local police." },
                    { title: "Staff Safety Protocols", desc: "Panic buttons and duress codes for branch staff." }
                ]
            },
            {
                title: "Cyber-Physical Convergence",
                icon: Database,
                image: verticalsMep,
                description: "Unified command center for physical security and cybersecurity threats.",
                features: [
                    { title: "Identity Access Management", desc: "Single sign-on for physical doors and digital systems." },
                    { title: "Fraud Investigation", desc: "Video correlation with transaction logs." },
                    { title: "Audit & Compliance", desc: "Automated reporting for RBI and regulatory standards." }
                ]
            }
        ]
    },
    "Industrial": {
        title: "Industrial Safety & Asset Protection",
        subtitle: "Manufacturing & Heavy Industries",
        icon: Factory,
        video: "https://videos.pexels.com/video-files/2048259/2048259-hd_1920_1080_30fps.mp4",
        poster: verticalsMep,
        partners: [
            { name: "Tata Steel", logo: "/logos/tata.svg" },
            { name: "Reliance Industries", logo: "/logos/ril.png" },
            { name: "L&T", logo: "/logos/larsentoubro.png" },
            { name: "JSW", logo: "/logos/jsw.png" }
        ],
        sections: [
            {
                title: "Perimeter & Access Control",
                icon: Lock,
                image: verticalsHealthcare,
                description: "Robust perimeter defense and biometric access for large-scale industrial complexes.",
                features: [
                    { title: "Intelligent Fencing", desc: "Fiber-optic sensors detecting cuts and climbs." },
                    { title: "Vehicle Inspection", desc: "Under-vehicle scanning and ANPR for trucks." },
                    { title: "Visitor Management", desc: "Kiosks for contractor and visitor passes." }
                ]
            },
            {
                title: "HSE & Process Safety",
                icon: HardHat,
                image: verticalsFacility,
                description: "Ensuring compliance with Health, Safety, and Environment (HSE) protocols.",
                features: [
                    { title: "PPE Detection", desc: "AI cameras detecting missing helmets or vests." },
                    { title: "Hazard Monitoring", desc: "Sensors for gas leaks, smoke, and fire." },
                    { title: "Emergency Evacuation", desc: "Automated mustering and headcounts." }
                ]
            },
            {
                title: "Asset & Inventory Protection",
                icon: Layers,
                image: verticalsSurveillance,
                description: "preventing theft and pilferage of raw materials and finished goods.",
                features: [
                    { title: "Inventory Tracking", desc: "RFID tagging of high-value assets." },
                    { title: "Dock Management", desc: "Video verification of loading/unloading." },
                    { title: "Internal Theft Prevention", desc: "Analytics to detect suspicious behavior." }
                ]
            }
        ]
    },
    "Energy": {
        title: "Critical Energy Infrastructure Defense",
        subtitle: "Energy & Natural Resources",
        icon: Droplets,
        video: "https://videos.pexels.com/video-files/2161457/2161457-hd_1920_1080_30fps.mp4",
        poster: verticalsMep,
        partners: [
            { name: "Adani Green", logo: "/logos/adani.png" },
            { name: "NTPC", logo: "/logos/ntpc.svg" },
            { name: "Tata Power", logo: "/logos/tata.svg" },
            { name: "Power Grid", logo: "/logos/powergrid.png" }
        ],
        sections: [
            {
                title: "Remote Site Monitoring",
                icon: Zap,
                image: verticalsMep,
                description: "Securing unmanned solar parks, wind farms, and transmission lines.",
                features: [
                    { title: "Drone Patrols", desc: "Autonomous drones for perimeter and line inspection." },
                    { title: "Thermal Imaging", desc: "Detecting overheating components and intruders at night." },
                    { title: "Off-Grid Security", desc: "Solar-powered CCTV and comms units." }
                ]
            },
            {
                title: "Cybersecurity for OT/ICS",
                icon: Server,
                image: verticalsSurveillance,
                description: "Protecting SCADA systems and operational technology from cyber threats.",
                features: [
                    { title: "Network Segmentation", desc: "Isolating critical control networks." },
                    { title: "Threat Detection", desc: "Monitoring traffic for anomalies." },
                    { title: "Incident Response", desc: "Rapid remediation of cyber breaches." }
                ]
            },
            {
                title: "Safety & Compliance",
                icon: Leaf,
                image: verticalsFacility,
                description: "Maintaining rigorous safety standards in hazardous environments.",
                features: [
                    { title: "Lone Worker Safety", desc: "Wearables for man-down detection." },
                    { title: "Environmental Monitoring", desc: "Sensors for emission levels." },
                    { title: "Regulatory Reporting", desc: "Automated logs for audits." }
                ]
            }
        ]
    },
    "Smart Cities": {
        title: "Integrated Urban Command & Control",
        subtitle: "Urban Infrastructure & Governance",
        icon: Building2,
        video: "https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_25fps.mp4",
        poster: verticalsSurveillance,
        partners: [
            { name: "Siemens", logo: "/logos/siemens.svg" },
            { name: "Cisco", logo: "/logos/cisco.svg" },
            { name: "Honeywell", logo: "/logos/honeywell.png" },
            { name: "Schneider", logo: "/logos/schneider.svg" }
        ],
        sections: [
            {
                title: "Intelligent Traffic Management",
                icon: Activity,
                image: verticalsMep,
                description: "AI-driven traffic flow optimization and violation detection.",
                features: [
                    { title: "Adaptive Traffic Signals", desc: "Dynamic timing based on real-time congestion." },
                    { title: "E-Challan System", desc: "Automated red-light and speed enforcement." },
                    { title: "Incident Detection", desc: "Immediate alerts for accidents or stalled vehicles." }
                ]
            },
            {
                title: "Public Safety Surveillance",
                icon: Shield,
                image: verticalsSurveillance,
                description: "City-wide CCTV network for crime prevention and emergency response.",
                features: [
                    { title: "Facial Recognition", desc: "Identifying suspects in crowded areas." },
                    { title: "Crowd Analytics", desc: "Monitoring gathering density to prevent stampedes." },
                    { title: "Emergency Call Boxes", desc: "Direct citizen-to-police communication points." }
                ]
            },
            {
                title: "Smart Infrastructure Mgmt",
                icon: Wifi,
                image: verticalsFacility,
                description: "IoT monitoring of utilities, waste, and lighting.",
                features: [
                    { title: "Smart Streetlights", desc: "Energy-saving dimming and fault reporting." },
                    { title: "Waste Management", desc: "Sensors for bin fill-levels." },
                    { title: "Utility Monitoring", desc: "Detecting water leaks and power outages." }
                ]
            }
        ]
    },
    "Transport": {
        title: "Aviation & Logistics Security",
        subtitle: "Airports, Ports & Logistics",
        icon: Plane,
        video: "https://videos.pexels.com/video-files/3052123/3052123-hd_1920_1080_25fps.mp4",
        poster: verticalsMep,
        partners: [
            { name: "New Delhi Airport", logo: "/logos/delhiairport.png" },
            { name: "Adani Ports", logo: "/logos/adani.png" },
            { name: "DHL", logo: "/logos/dhl.png" },
            { name: "Blue Dart", logo: "/logos/bluedart.svg" }
        ],
        sections: [
            {
                title: "Passenger & Cargo Screening",
                icon: Users,
                image: verticalsHealthcare,
                description: "High-throughput screening for safety and compliance.",
                features: [
                    { title: "Advanced X-Ray", desc: "AI-assisted threat detection in baggage." },
                    { title: "Biometric Boarding", desc: "Seamless paperless travel experience." },
                    { title: "Perimeter Intrusion", desc: "Radar and thermal cameras for runways." }
                ]
            },
            {
                title: "Supply Chain Visibility",
                icon: Globe,
                image: verticalsFacility,
                description: "Tracking goods from origin to destination.",
                features: [
                    { title: "Container Tracking", desc: "IoT seals for tamper evidence." },
                    { title: "Cold Chain Monitoring", desc: "Temperature logging for sensitive cargo." },
                    { title: "Fleet Management", desc: "Driver behavior and fuel monitoring." }
                ]
            },
            {
                title: "Hub Operations Center",
                icon: Network,
                image: verticalsSurveillance,
                description: "Centralized coordination of ground handling and security.",
                features: [
                    { title: "Resource Allocation", desc: "Dynamic staff deployment based on load." },
                    { title: "Incident Management", desc: "Unified response to delays or breaches." },
                    { title: "Predictive Maintenance", desc: "Keeping conveyor belts and vehicles running." }
                ]
            }
        ]
    },
    "Retail": {
        title: "Loss Prevention & Customer Safety",
        subtitle: "Malls, Stores & E-commerce",
        icon: ShoppingBag,
        video: "https://videos.pexels.com/video-files/1005638/1005638-hd_1920_1080_30fps.mp4",
        poster: verticalsFacility,
        partners: [
            { name: "Reliance Retail", logo: "/logos/relianceretail.png" },
            { name: "Titan", logo: "/logos/titan.png" },
            { name: "Shoppers Stop", logo: "/logos/shoppersstop.png" },
            { name: "DMart", logo: "/logos/dmart.png" }
        ],
        sections: [
            {
                title: "Loss Prevention",
                icon: AlertTriangle,
                image: verticalsSurveillance,
                description: "Reducing shrinkage from shoplifting and internal theft.",
                features: [
                    { title: "AI Video Analytics", desc: "Detecting suspicious movements and concealment." },
                    { title: "POS Integration", desc: "Flagging void transactions and sweethearting." },
                    { title: "EAS Systems", desc: "Tagging merchandise to prevent exit." }
                ]
            },
            {
                title: "Store Operations & Analytics",
                icon: Activity,
                image: verticalsFacility,
                description: "Using security cameras for business intelligence.",
                features: [
                    { title: "Heatmaps", desc: "Analyzing customer dwell time and flow." },
                    { title: "Queue Management", desc: "Alerting when lines get too long." },
                    { title: "Planogram Compliance", desc: "Ensuring shelves are stocked correctly." }
                ]
            },
            {
                title: "Supply Chain & warehouse",
                icon: Truck,
                image: verticalsMep,
                description: "Securing the backend of retail operations.",
                features: [
                    { title: "Warehouse Security", desc: "Access control and CCTV for stockrooms." },
                    { title: "Delivery Tracking", desc: "Ensuring last-mile delivery integrity." },
                    { title: "Vendor Management", desc: "Screening suppliers and staff." }
                ]
            }
        ]
    },
    "Residential": {
        title: "Smart Township & Gated Community Security",
        subtitle: "Townships & Gated Communities",
        icon: Home,
        video: "https://videos.pexels.com/video-files/7578546/7578546-hd_1920_1080_30fps.mp4",
        poster: verticalsHealthcare, // Friendly vibe
        partners: [
            { name: "DLF", logo: "/logos/dlf.png" },
            { name: "Lodha", logo: "/logos/lodha.png" },
            { name: "Godrej", logo: "/logos/godrej.svg" },
            { name: "Prestige", logo: "/logos/prestige.png" }
        ],
        sections: [
            {
                title: "Visitor & Access Management",
                icon: Users,
                image: verticalsFacility,
                description: "Seamless and secure entry for residents and guests.",
                features: [
                    { title: "App-Based Entry", desc: "Residents approve guests via mobile." },
                    { title: "ANPR Gates", desc: "Automatic boom barriers for resident vehicles." },
                    { title: "Delivery Management", desc: "Designated zones for package drop-offs." }
                ]
            },
            {
                title: "Premise Surveillance",
                icon: Shield,
                image: verticalsSurveillance,
                description: "24/7 monitoring of common areas and perimeters.",
                features: [
                    { title: "Kid's Play Area", desc: "Safe zones with active monitoring." },
                    { title: "Perimeter Defense", desc: "Sensors preventing unauthorized wall scaling." },
                    { title: "Patrol Tracking", desc: "QR code checkpoints for guard rounds." }
                ]
            },
            {
                title: "Smart Home Integration",
                icon: Smartphone,
                image: verticalsHealthcare,
                description: "Connecting individual units to community security.",
                features: [
                    { title: "Video Door Phones", desc: "Integrated with main gate intercom." },
                    { title: "Panic Alarms", desc: "Emergency response for medical or fire." },
                    { title: "Leak Detectors", desc: "Gas and water leak alerts for safety." }
                ]
            }
        ]
    },
    "IT / ITES": {
        title: "Tech Park & Corporate Campus Security",
        subtitle: "Tech Parks & Workspaces",
        icon: Monitor,
        video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4",
        poster: verticalsSurveillance,
        partners: [
            { name: "Infosys", logo: "/logos/infosys.svg" },
            { name: "TCS", logo: "/logos/tata.svg" },
            { name: "Wipro", logo: "/logos/wipro.svg" },
            { name: "HCL Tech", logo: "/logos/hcl.svg" }
        ],
        sections: [
            {
                title: "Identity & Access Management",
                icon: CreditCard,
                image: verticalsSurveillance,
                description: "Strict control over physical and digital entry points.",
                features: [
                    { title: "Biometric Turnstiles", desc: "Touchless facial recognition entry." },
                    { title: "Visitor Kiosks", desc: "Self-service registration with NDA signing." },
                    { title: "Tailgating Detection", desc: "AI preventing unauthorized follow-ins." }
                ]
            },
            {
                title: "Asset & IP Protection",
                icon: Server,
                image: verticalsMep,
                description: "Safeguarding server rooms and intellectual property.",
                features: [
                    { title: "Server Room Security", desc: "Multi-factor authentication for data centers." },
                    { title: "Laptop Tracking", desc: "Tags preventing unauthorized asset removal." },
                    { title: "Clean Desk Policy", desc: "Audits ensuring no sensitive papers left." }
                ]
            },
            {
                title: "Employee Transport Safety",
                icon: Truck,
                image: verticalsFacility,
                description: "Ensuring safe commute for night-shift employees.",
                features: [
                    { title: "Cab Tracking", desc: "Real-time location of employee shuttles." },
                    { title: "Safe Boarding", desc: "Auth codes for boarding cabs." },
                    { title: "Route Deviation", desc: "Alerts for unauthorized stops or routes." }
                ]
            }
        ]
    },
    "Manufacturing": {
        title: "Plant & Production Line Security",
        subtitle: "Automotive & Electronics",
        icon: Wrench,
        video: "https://videos.pexels.com/video-files/2516335/2516335-hd_1920_1080_30fps.mp4",
        poster: verticalsMep,
        partners: [
            { name: "Maruti Suzuki", logo: "/logos/maruti.png" },
            { name: "Hyundai", logo: "/logos/hyundai.png" },
            { name: "Samsung", logo: "/logos/samsung.png" },
            { name: "Foxconn", logo: "/logos/foxconn.png" }
        ],
        sections: [
            {
                title: "Supply Chain & Logistics",
                icon: Truck,
                image: verticalsFacility,
                description: "Securing the flow of parts and finished products.",
                features: [
                    { title: "Gate Automation", desc: "RFID for seamless truck entry/exit." },
                    { title: "Weighbridge Integration", desc: "Preventing material theft via weight checks." },
                    { title: "Yard Management", desc: "Optimizing parking and dock usage." }
                ]
            },
            {
                title: "Operational Continuity",
                icon: Factory,
                image: verticalsMep,
                description: "Preventing downtime from security or safety incidents.",
                features: [
                    { title: "Machine Guarding", desc: "Ensuring safety interlocks are effective." },
                    { title: "Fire Safety", desc: "Early detection systems for industrial fires." },
                    { title: "Predictive Maintenance", desc: "Sensors detecting motor faults early." }
                ]
            },
            {
                title: "Intellectual Property",
                icon: FileCheck,
                image: verticalsSurveillance,
                description: "Protecting R&D and prototype areas.",
                features: [
                    { title: "Zoning", desc: "Strict access control for R&D labs." },
                    { title: "Camera Restrictions", desc: "Preventing unauthorized photography." },
                    { title: "Data Loss Prevention", desc: "Monitoring digital egress points." }
                ]
            }
        ]
    }
};
