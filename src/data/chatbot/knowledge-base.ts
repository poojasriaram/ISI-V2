import { KnowledgeBase } from '@/types/chatbot';

export const isiKnowledgeBase: KnowledgeBase = {
    locations: [
        { city: "Chennai", state: "Tamil Nadu", type: "HQ" },
        { city: "Bangalore", state: "Karnataka", type: "Branch" },
        { city: "Delhi NCR", state: "Delhi", type: "Branch" },
        { city: "Hyderabad", state: "Telangana", type: "Branch" },
        { city: "Mumbai", state: "Maharashtra", type: "Branch" },
        { city: "Pune", state: "Maharashtra", type: "Branch" },
        { city: "Ahmedabad", state: "Gujarat", type: "Branch" },
        { city: "Kolkata", state: "West Bengal", type: "Branch" }
    ],
    services: [
        {
            id: 'manned_guarding',
            name: "Manned Guarding",
            keywords: ["guard", "security guard", "manned guarding", "personnel", "officer", "physical security"],
            description: "We deploy L1-L4 professional, police-verified security personnel equipped with digital attendance and GPS tracking. Our teams undergo rigorous tactical and behavioral training."
        },
        {
            id: 'electronic_security',
            name: "Electronic Security Systems",
            keywords: ["cctv", "camera", "access control", "electronic", "alarm", "surveillance", "biometric"],
            description: "Our Electronic Security Systems integrate advanced IP CCTV, access control, AI-powered video analytics, and intrusion detection to provide robust, automated protection."
        },
        {
            id: 'secure_logistics',
            name: "Secure Value Logistics",
            keywords: ["cash", "transit", "atm", "armored", "value logistics", "transport", "money"],
            description: "Our Secure Value Logistics division handles secure cash-in-transit, ATM replenishment, and high-value asset transport via a modern fleet of armored vehicles under continuous SOC monitoring."
        },
        {
            id: 'school_safety',
            name: "School & Campus Safety",
            keywords: ["school", "college", "campus", "student", "child", "university"],
            description: "Our School & Campus Safety model uses a 'Child-First' framework across a 36-month transformation journey. It features specialized School Marshals, AI video intelligence, and rapid emergency response protocols to ensure a secure learning environment."
        },
        {
            id: 'command_center',
            name: "Command Center (SOC)",
            keywords: ["soc", "command center", "remote monitoring", "vms", "response", "monitoring"],
            description: "Our 24/7 Command Center provides remote monitoring using cloud-based VMS. We integrate intelligent alerts allowing for real-time incident response to active threats."
        },
        {
            id: 'facility_management',
            name: "Facility Management",
            keywords: ["facility", "housekeeping", "maintenance", "cleaning", "building management", "ifm"],
            description: "Our Integrated Facility Management services include comprehensive maintenance, professional housekeeping, and the deployment of AI-driven smart building ecosystems for optimal efficiency."
        },
        {
            id: 'advanced_tech',
            name: "Advanced Tech & Consulting",
            keywords: ["drone", "thermal", "background", "bgv", "consulting", "audit", "risk"],
            description: "We offer Advanced Security Technologies like Drone Surveillance (Thermal/AI), API-integrated Background Verification, and expert Risk Consulting & Audits."
        }
    ],
    rules: [
        {
            triggers: ["home", "house", "apartment", "flat", "villa", "society", "resident", "tower", "societies", "penthouse", "bungalow", "gatekeeper", "chowkidar", "watchman", "parking", "intercom", "delivery", "swiggy", "zomato", "guest", "tenant", "owner", "main gate", "lift", "lobby"],
            domain: "Premium Residential Security",
            acknowledgment: "Securing your home and family is a deeply personal requirement. At ISI, we provide discreet yet uncompromised protection for premier residential complexes and private bungalows.",
            targetServiceId: "residential",
            quickReplies: [
                { label: "Book Home Audit", value: "site survey", type: "contact" },
                { label: "Society Security", value: "manned guarding", type: "quickReply" }
            ]
        },
        {
            triggers: ["cow", "buffalo", "livestock", "farm", "plantation", "crops", "harvest", "tractor", "barn", "orchard", "shed", "agri", "cattle", "field", "village", "land", "fencing", "wire", "thieves", "night watch", "motor", "pump", "well", "harvesting", "storage"],
            domain: "Agricultural & Asset Protection",
            acknowledgment: "Managing a farm or rural assets requires specialized perimeter control and active monitoring to prevent theft and encroachment, especially during harvest seasons.",
            targetServiceId: "industrial",
            quickReplies: [
                { label: "Request Farm Protocol", value: "callback", type: "contact" },
                { label: "Perimeter Solutions", value: "electronic security", type: "quickReply" }
            ]
        },
        {
            triggers: ["vault", "locker", "atms", "branch", "cash chest", "currency", "gold loan", "bank", "rbi", "safes", "shroffing", "custodian", "escorting", "valuable", "bullion", "transit", "armored", "gps", "money", "atm machine"],
            domain: "BFSI & Vault Security",
            acknowledgment: "High-stakes environments like banks and vaults require 100% reliability and RBI-compliant logistics. We've been securing leading financial institutions since 1994.",
            targetServiceId: "secure_logistics",
            quickReplies: [
                { label: "Specialist Callback", value: "callback", type: "contact" },
                { label: "View Fleet", value: "fleet", type: "quickReply" }
            ]
        },
        {
            triggers: ["factory", "plant", "unit", "warehouse", "shop floor", "machinery", "labor", "strike", "inventory", "loading dock", "raw material", "production", "manufacturing", "entry gate", "unrest", "pilferage", "theft"],
            domain: "Industrial Risk Management",
            acknowledgment: "Industrial sites face unique risks from pilferage to labor unrest. Our integrated guarding and AI surveillance models are designed for 24/7 site integrity.",
            targetServiceId: "industrial",
            quickReplies: [
                { label: "Schedule Site Survey", value: "site survey", type: "contact" },
                { label: "AI Surveillance", value: "electronic security", type: "quickReply" }
            ]
        },
        {
            triggers: ["school", "college", "kids", "students", "campus", "university", "playground", "hostel", "classroom", "teacher", "principal", "marshals", "child safety", "education", "institute"],
            domain: "School & Campus Safety",
            acknowledgment: "Our 'Child-First' framework goes beyond just guarding—it creates a safe, nurturing environment for students through specialized training and tech transformation.",
            targetServiceId: "school_safety",
            quickReplies: [
                { label: "See Safety Roadmap", value: "safety audit", type: "contact" },
                { label: "Training Standards", value: "guard training", type: "quickReply" }
            ]
        },
        {
            triggers: ["wedding", "marriage", "function", "concert", "crowd", "celebrity", "guest list", "vvip", "protection", "event", "bouncers", "bodyguard", "escort", "protocol", "security guys", "valet"],
            domain: "Event & VIP Protection",
            acknowledgment: "For major events and VIP movements, we deploy elite personnel trained in discreet protection, crowd management, and high-level protocol.",
            targetServiceId: "manned_guarding",
            quickReplies: [
                { label: "Request VIP Detail", value: "callback", type: "contact" },
                { label: "Event Security", value: "manned guarding", type: "quickReply" }
            ]
        },
        {
            triggers: ["hospital", "clinic", "patient", "doctor", "emergency", "ward", "icu", "medical", "pharmacy", "medicine", "violence", "mob", "healthcare"],
            domain: "Healthcare Security Solutions",
            acknowledgment: "Hospitals require a sensitive yet firm security approach. We specialize in managing high-pressure environments like casualty wards and ensuring doctor-patient safety.",
            targetServiceId: "manned_guarding",
            quickReplies: [
                { label: "Healthcare Audit", value: "site survey", type: "contact" },
                { label: "Systems Demo", value: "electronic security", type: "quickReply" }
            ]
        },
        {
            triggers: ["office", "it park", "cubicle", "employee", "transport", "pickup", "drop", "background check", "document", "id card", "badge", "reception", "entry", "corporate"],
            domain: "Corporate & Tech Park Security",
            acknowledgment: "Our corporate security models integrate smart technology and professional front-desk personnel to protect both your physical assets and your employees' safety.",
            targetServiceId: "facility_management",
            quickReplies: [
                { label: "Corporate Consult", value: "callback", type: "contact" },
                { label: "Facility IFM", value: "facility management", type: "quickReply" }
            ]
        }
    ],
    salesScripts: {
        followUps: {
            manned_guarding: "Manned guarding is a core strength of ours. Every site has unique requirements—shall we schedule a quick call to discuss the specific profile of personnel you need?",
            electronic_security: "A precise technical audit is usually the best starting point for a system upgrade or new installation. Would you be open to a brief system discussion?",
            secure_logistics: "Handling high-value transit requires zero margin for error. We can provide a secure route analysis or a fleet capability overview. Should I have a logistics specialist contact you?",
            school_safety: "For institutions, securing the campus without creating a 'prison-like' environment is key. I'd love to show you how our 'Child-First' framework achieves this. Can we set up a short intro call?",
            command_center: "Continuous remote monitoring fundamentally shifts security from reactive to proactive. Let's arrange a demonstration of our SOC capabilities—would you prefer a call later today or tomorrow?",
            facility_management: "Managing a large facility effectively is all about integration and consistency. Would you like to speak with an IFM specialist about optimizing your current setup?",
            advanced_tech: "Advanced tech deployments need tailored solutions. Let me arrange a 5-minute technical consultation with our specialist to review your specific requirements. Can I get your number?",
            general: "Every organization has unique risks. Honestly, for a project of this scale, a 5-minute chat with one of our specialists would be much more helpful than me typing here. Can I get your first name?"
        },
        objectionHandlers: {
            "expensive": "I completely understand that budget is a critical factor. Our clients usually find that investing in a robust, integrated security ecosystem actually reduces long-term operational costs and liabilities. Let me connect you with an expert who can walk you through the ROI.",
            "price": "I completely understand that budget is a critical factor. Our clients usually find that investing in a robust, integrated security ecosystem actually reduces long-term operational costs and liabilities. Let me connect you with an expert who can walk you through the ROI.",
            "cost": "I completely understand that budget is a critical factor. Our clients usually find that investing in a robust, integrated security ecosystem actually reduces long-term operational costs and liabilities. Let me connect you with an expert who can walk you through the ROI.",
            "already have": "That's great to hear. Even if you have a system in place, many clients ask us to perform an independent Risk Audit to identify blind spots. Shall we schedule a brief, no-obligation audit?",
            "competitor": "That's great to hear. Even if you have a system in place, many clients ask us to perform an independent Risk Audit to identify blind spots. Shall we schedule a brief, no-obligation audit?",
            "just looking": "Absolutely. Feel free to browse around. If you come across any questions about our specific capabilities or verticals, just let me know. I'm right here."
        }
    },
    verticals: [
        { id: "banking", name: "Banking & Financial Services", description: "Security for vaults, currency chests, and corporate branches under RBI regulatory compliance." },
        { id: "retail", name: "Retail Operations", description: "Comprehensive loss prevention, crowd management, and integrated surveillance across multi-site retail chains." },
        { id: "logistics", name: "Logistics & Warehousing", description: "End-to-end supply chain security, access control for distribution centers, and high-value asset tracking." },
        { id: "industrial", name: "Heavy Industrial", description: "Securing critical infrastructure, manufacturing plants, and enforcing stringent EHS and safety protocols." },
        { id: "commercial", name: "Commercial & Tech Parks", description: "Corporate security integrating smart building technology, visitor management, and professional front-desk personnel." },
        { id: "residential", name: "Premium Residential", description: "Discreet luxury security models tailored for upscale townships and gated communities." }
    ],
    capabilities: [
        { name: "Threat Intelligence", description: "Our threat intelligence feeds monitor ongoing geo-political and localized risks to fortify client operations proactively." },
        { name: "Risk Audits", description: "We conduct exhaustive, independent security audits to identify vulnerabilities before they are exploited." },
        { name: "Drone Surveillance", description: "Deploying enterprise-grade drones equipped with thermal and AI capabilities for expansive perimeter monitoring." }
    ],
    company: {
        founded: "1994",
        founder: "Mr. S. Vijayakumar (ex-Air Force)",
        deployments: "500+ successful deployments",
        offices: "12 Global/Regional Offices across 18 States",
        workforce: "5,000+ Certified Security Experts",
        mission: "To deliver peace of mind through unified guarding and cutting-edge electronic security integration."
    },
    faqs: [],
    intents: {}
};
