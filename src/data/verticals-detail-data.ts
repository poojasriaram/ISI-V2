import { Truck, Wallet, Package, Lock, Shield, Eye, TrendingUp, FileCheck, Zap, Database, CheckCircle2, Building2, Users, BadgeCheck, Activity, MonitorDot, Network, BarChart3, Landmark, Fingerprint, ShieldCheck, GraduationCap, Camera, Bell, Sparkles, Target, Factory, Plane, Settings, Cpu, MapPin, Radio, Wifi, Layers, Globe, AlertTriangle, HardHat } from "lucide-react";

export interface VerticalDetailOffering {
    title: string;
    description: string;
    features: string[];
}

export interface VerticalDetailBenefit {
    title: string;
    description: string;
    icon: any;
}

export interface VerticalDetailSection {
    id: string;
    title: string;
    icon: any;
    offerings: VerticalDetailOffering[];
    benefits: VerticalDetailBenefit[];
}

export interface VerticalDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    gradient: string;
    icon: any;
    sections: VerticalDetailSection[];
    closingStatement?: string;
}

export const verticalsDetailData: VerticalDetail[] = [
    {
        id: "logistics",
        title: "Secure Value Logistics",
        subtitle: "A Unified, Tech-Led Platform for Cash, Bullion, and Critical Assets",
        description: "Our Cash & High-Value Logistics and Strong Room services provide a single, technology-driven, trust-first platform for the secure movement and storage of high-value assets — including cash, bullion, jewellery, luxury goods, and sensitive documents — delivering bank-grade security, real-time visibility, and unwavering reliability.",
        gradient: "from-amber-500 via-orange-500 to-red-500",
        icon: Truck,
        sections: [
            {
                id: "cash-logistics",
                title: "Cash & Retail Cash Logistics",
                icon: Wallet,
                offerings: [
                    {
                        title: "Our Offerings",
                        description: "End-to-end cash movement and management, powered by GPS-tracked, sensor-enabled vehicles, digital trip sheets, and seamless cash vaulting integration.",
                        features: [
                            "Smart Cash-in-Transit (CIT): Armoured or reinforced vehicles equipped with live GPS tracking, geo-fencing, panic alarms, and round-the-clock command centre monitoring.",
                            "ATM & Branch Services: Predictive, SLA-driven replenishment and cassette swaps, with every handover digitally captured, time-stamped, and verified.",
                            "Retail Cash Management: Scheduled collections from stores, fuel outlets, and micro-merchants, paired with on-site smart safes that automatically count, validate, and secure currency while offering provisional credit."
                        ]
                    }
                ],
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
                ]
            },
            {
                id: "high-value-logistics",
                title: "High-Value Logistics",
                icon: Package,
                offerings: [
                    {
                        title: "Our Offerings",
                        description: "Specialised, discreet secure logistics for jewellery, bullion, luxury goods, and sensitive cargo, ensuring high-assurance custody from origin to destination.",
                        features: [
                            "Discreet Secure Transport: Unbranded or decoy vehicles, tamper-evident sealing, armed escorts, and optimised, geo-fenced routes for maximum discretion.",
                            "Tech-Enabled Vaulting: State-of-the-art vaults linked to an advanced inventory platform, tracking every item via barcodes or RFID for precise accountability.",
                            "Compliance-Ready Processes: Detailed documentation, route logs, and digital custody trails designed to streamline customs clearance, audits, and insurance claims."
                        ]
                    }
                ],
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
                ]
            },
            {
                id: "strong-room-vault",
                title: "Strong Room & Vault Services",
                icon: Lock,
                offerings: [
                    {
                        title: "Our Offerings",
                        description: "Next-generation strong rooms and vaults designed for superior physical resilience and full digital traceability — perfectly suited for cash, bullion, jewellery, and high-value documents.",
                        features: [
                            "Certified Strong Rooms: Construction adhering to Bureau of Indian Standards (BIS) guidelines, including graded strong room doors with certified fire and burglary resistance for enduring asset protection.",
                            "Smart Access Controls: Biometric and PIN authentication, time locks, dual-control mechanisms, and role-based zoning across vault, document, and operational areas.",
                            "Advanced Environmental Monitoring: 24/7 CCTV surveillance, intrusion and seismic sensors, integrated fire detection and suppression systems, plus climate controls for preserving sensitive documents."
                        ]
                    }
                ],
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
                ]
            }
        ],
        closingStatement: "Unifying cash logistics, high-value transport, and strong room services under a single technology backbone, our clients benefit from one central command centre, one unified data ecosystem, and one accountable partner — ensuring seamless protection for value in motion and at rest. Experience the future of secure logistics: technology-enabled precision, trust-earned reliability, and end-to-end peace of mind."
    },
    {
        id: "hospitality",
        title: "Smart Physical Security for Large Conventional Hotels & Event Management",
        subtitle: "Where Human Vigilance Meets Intelligent Technology",
        description: "Hotels and event venues face unique security challenges — from guest safety and VIP protection to theft prevention and regulatory compliance. Traditional guarding lacks the scalability needed for dynamic hospitality environments. ISI India delivers Smart Physical Security: professionally trained personnel enhanced with AI monitoring, real-time analytics, and guest-centric protocols that ensure safety without compromising the hospitality experience.",
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
        icon: Building2,
        sections: [
            {
                id: "core-guarding",
                title: "Core Guarding Services",
                icon: Users,
                offerings: [
                    {
                        title: "Discreet & Tech-Enhanced Security",
                        description: "Professional security that blends seamlessly with your hospitality environment.",
                        features: [
                            "Biometric Attendance + Discreet Wearable GPS Tracking: Real-time guard location monitoring without visible registers",
                            "AI-Optimized Patrol Routes: Silent time-stamped photo/video proof replacing subjective manual rounds",
                            "Mobile Duress Alerts: Instant notifications to supervisors, management, and emergency services for rapid response",
                            "Hospitality-Trained Personnel: Groomed, multilingual, de-escalation certified guards uniformed to match your brand"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "50% Fewer Unauthorized Entries",
                        description: "Advanced monitoring and trained personnel significantly reduce security breaches and unauthorized access to guest areas.",
                        icon: Shield
                    },
                    {
                        title: "4x Faster Discreet Response",
                        description: "Instant alert systems and optimized protocols enable rapid, non-intrusive incident response without alarming guests.",
                        icon: Zap
                    },
                    {
                        title: "Complete Digital Audit Trails",
                        description: "Comprehensive documentation for insurance claims, compliance verification, and incident investigation.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "perimeter-premises",
                title: "Perimeter & Premises Protection",
                icon: Shield,
                offerings: [
                    {
                        title: "For Hotels and Event Venues",
                        description: "Comprehensive protection against trespassing, vehicle theft, after-hours intrusion, and perimeter breaches during events.",
                        features: [
                            "Thermal & AI Camera Surveillance: 24/7 coverage for parking lots, gardens, and rooftops with intelligent threat detection",
                            "Smart Intrusion Sensors: Vibration and beam detection with AI reducing false alarms by 80%",
                            "Vehicle & Visitor Management: ANPR integration with pre-registered guest/event lists for seamless access control",
                            "Anti-Ram Bollards & Barriers: Physical security for driveways and loading zones during high-profile events"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "80% Reduction in False Alarms",
                        description: "AI-powered sensors distinguish real threats from environmental factors, reducing unnecessary responses and maintaining guest comfort.",
                        icon: Eye
                    },
                    {
                        title: "Seamless Guest Experience",
                        description: "Pre-registered access lists and automated systems ensure smooth entry for legitimate guests while maintaining security.",
                        icon: CheckCircle2
                    },
                    {
                        title: "Multi-Venue Scalability",
                        description: "Ideal for 5-star hotels, resorts, convention centres, banquet halls, and large event spaces with unified oversight.",
                        icon: TrendingUp
                    }
                ]
            },
            {
                id: "guest-areas",
                title: "Guest Areas & Floor Integrity",
                icon: BadgeCheck,
                offerings: [
                    {
                        title: "Protecting Guests and Maintaining Privacy",
                        description: "Advanced security measures addressing room theft, harassment, inebriation-related incidents, lost children, and unauthorized floor access.",
                        features: [
                            "Zoned Access Control: Keycard/biometric elevators and floor restrictions for staff/guest separation",
                            "AI Video Analytics: Detects loitering, fights, fallen persons, overcrowding, or abandoned luggage in real-time",
                            "Panic Buttons in Rooms & Public Areas: Discreet activation linked to front desk and security for immediate response",
                            "Lost & Found Protocol: Digital tagging and real-time tracking of valuables with automated notifications"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Guest Privacy Maintained",
                        description: "Non-intrusive surveillance systems that maintain the luxury feel and privacy expectations of premium hospitality.",
                        icon: Eye
                    },
                    {
                        title: "Instant Emergency Response",
                        description: "Panic button integration ensures immediate assistance for guests in distress without public alarm.",
                        icon: Zap
                    },
                    {
                        title: "AI-Powered Safety",
                        description: "Automated detection of security incidents, medical emergencies, and safety hazards for proactive intervention.",
                        icon: Activity
                    }
                ]
            },
            {
                id: "event-security",
                title: "Event-Specific & Back-of-House Security",
                icon: Users,
                offerings: [
                    {
                        title: "Comprehensive Event Protection",
                        description: "Specialized security for crowd management, VIP protection, vendor oversight, and cash handling during events and daily operations.",
                        features: [
                            "Temporary Crowd Analytics: Real-time density monitoring and flow alerts for ballrooms/convention halls to prevent crushes",
                            "VIP & Celebrity Protection: Close-protection trained personnel with advance route planning and discrete security",
                            "Kitchen & Service Area Monitoring: Hygiene-compliant cameras and access control for F&B zones",
                            "Cash & Valuables Transit: Secure escorts for event collections and hotel cashiers with digital documentation"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Crowd Safety Assurance",
                        description: "Real-time monitoring prevents dangerous overcrowding and ensures safe evacuation routes during large events.",
                        icon: Users
                    },
                    {
                        title: "VIP Confidence",
                        description: "Professional close-protection services ensure high-profile guests feel secure without intrusive security presence.",
                        icon: Shield
                    },
                    {
                        title: "Operational Integrity",
                        description: "Back-of-house monitoring ensures staff compliance, hygiene standards, and prevents internal theft.",
                        icon: CheckCircle2
                    }
                ]
            },
            {
                id: "back-of-house",
                title: "Back-of-House & Critical Area Protection",
                icon: Lock,
                offerings: [
                    {
                        title: "Internal Security & Asset Protection",
                        description: "Comprehensive solutions for staff theft prevention, inventory management, and unauthorized access to critical areas.",
                        features: [
                            "Role-Based Zoning: Biometric access for housekeeping stores, engineering rooms, and admin offices",
                            "Inventory & Liquor Stock Monitoring: RFID tagging with automated discrepancy alerts and audit trails",
                            "Employee Locker Surveillance: Privacy-compliant oversight preventing theft while respecting staff dignity",
                            "Critical Area Access Logs: Time-stamped entry/exit records for cellars, cash rooms, and sensitive zones"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Inventory Shrinkage Prevention",
                        description: "RFID tracking and access control reduce inventory losses, particularly high-value liquor and supplies.",
                        icon: Package
                    },
                    {
                        title: "Staff Accountability",
                        description: "Biometric systems and access logs create clear accountability without creating a hostile work environment.",
                        icon: FileCheck
                    },
                    {
                        title: "Compliance Ready",
                        description: "Automated documentation meets tourism guidelines, fire safety norms, and local licensing requirements.",
                        icon: BadgeCheck
                    }
                ]
            },
            {
                id: "command-centre",
                title: "Central Command Centre",
                icon: MonitorDot,
                offerings: [
                    {
                        title: "Unified Property Oversight",
                        description: "Single intelligent dashboard for single or multi-property operations providing complete visibility and control.",
                        features: [
                            "Live Guard Locations and Patrol Status: Real-time tracking of all security personnel across the property",
                            "Guest Area and Event Crowd Alerts: Instant notifications for security incidents, overcrowding, or emergencies",
                            "Parking and Perimeter Monitoring: Unified view of all entry points, parking areas, and property boundaries",
                            "Incident and Response Time Analytics: Performance metrics and automated compliance/insurance reports"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Single Source of Truth",
                        description: "Unified dashboard eliminates information silos and enables coordinated response across all security systems.",
                        icon: Database
                    },
                    {
                        title: "Multi-Property Scalability",
                        description: "Seamlessly manage standalone hotels or entire chains with convention facilities from one platform.",
                        icon: Network
                    },
                    {
                        title: "Data-Driven Optimization",
                        description: "Analytics reveal patterns, optimize guard deployment, and demonstrate ROI to stakeholders.",
                        icon: BarChart3
                    }
                ]
            }
        ],
        closingStatement: "ISI India's Smart Physical Security transforms traditional hotel and event security into an intelligent, guest-centric ecosystem. By combining professionally trained personnel with AI-powered monitoring, real-time analytics, and unified command centres, we deliver uncompromising safety without sacrificing the hospitality experience. From intimate boutique hotels to sprawling convention centres, our scalable solutions ensure every guest, asset, and event is protected with precision, discretion, and care."
    },
    {
        id: "bfsi",
        title: "Smart Physical Security for BFSI Sector",
        subtitle: "Tech-Integrated Security for Banking, Financial Services, and Insurance",
        description: "The BFSI sector faces critical security risks: high-value cash holdings, sensitive data, robbery threats, insider collusion, ATM attacks, vault breaches, and stringent RBI compliance requirements. Traditional guarding alone cannot mitigate these evolving threats. ISI India offers Smart Physical Security — combining elite trained personnel with AI-driven monitoring, real-time alerts, and cyber-physical convergence to protect assets, ensure operational continuity, and maintain regulatory compliance.",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        icon: Landmark,
        sections: [
            {
                id: "core-guarding-bfsi",
                title: "Core Guarding Services",
                icon: Fingerprint,
                offerings: [
                    {
                        title: "Tech-Enhanced & RBI-Compliant Security",
                        description: "Elite security personnel equipped with advanced technology and compliance-ready protocols for BFSI environments.",
                        features: [
                            "Biometric/Facial Recognition Attendance: Real-time GPS tracking replacing manual registers and visual checks",
                            "AI-Optimized Patrol Routes: Geofenced time-stamped photo/video proof ensuring verifiable security rounds",
                            "Mobile Duress Alarms: Instant alerts to supervisors, control room, and police for immediate incident response",
                            "Ex-Paramilitary Trained Personnel: RBI-compliant background checks and cash-handling certification"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "50% Reduction in Unauthorized Access",
                        description: "Advanced biometric systems and trained personnel significantly reduce security breaches and unauthorized entry.",
                        icon: Shield
                    },
                    {
                        title: "4x Faster Response Times",
                        description: "Instant mobile alerts and optimized protocols enable rapid response to security incidents and emergencies.",
                        icon: Zap
                    },
                    {
                        title: "RBI Audit-Ready Documentation",
                        description: "Comprehensive digital logs and compliance reports for regulatory audits and insurance requirements.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "perimeter-premises-bfsi",
                title: "Perimeter & Premises Protection",
                icon: Shield,
                offerings: [
                    {
                        title: "For HQs and Branches",
                        description: "Comprehensive protection against robbery, forced entry, after-hours intrusion, and vehicle-borne threats.",
                        features: [
                            "Thermal & AI Camera Surveillance: Day/night coverage with anomaly detection for large premises",
                            "Smart Intrusion Sensors: Vibration/seismic detection with AI reducing false alarms by 80%",
                            "Visitor Management Systems: Digital registration with ID verification and escorted access",
                            "Anti-Ram Bollards + Vehicle Barriers: Integrated with ANPR for controlled entry at critical points"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "80% Reduction in False Alarms",
                        description: "AI-powered sensors distinguish real threats from environmental factors, improving response efficiency.",
                        icon: Eye
                    },
                    {
                        title: "Comprehensive Perimeter Control",
                        description: "Multi-layered physical and digital barriers prevent unauthorized access to sensitive banking facilities.",
                        icon: Shield
                    },
                    {
                        title: "Scalable for All Locations",
                        description: "Tailored solutions for bank headquarters, regional offices, and high-footfall branches.",
                        icon: TrendingUp
                    }
                ]
            },
            {
                id: "branch-customer-area",
                title: "Branch & Customer Area Integrity",
                icon: ShieldCheck,
                offerings: [
                    {
                        title: "Protecting Operations and Customers",
                        description: "Advanced security measures addressing hold-ups, customer disputes, counterfeit detection, and insider threats.",
                        features: [
                            "Teller Counter Protection: Bullet-resistant glazing and under-counter duress buttons for staff safety",
                            "AI Video Analytics: Detects loitering, aggressive behavior, mask usage, or abandoned objects in real-time",
                            "Zoned Access Control: Multi-factor (biometric + PIN) authentication for staff-only areas",
                            "Panic & Emergency Integration: Silent alarms linked to local police and central command for rapid response"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "RBI Guideline Compliance",
                        description: "Security measures align with RBI requirements for branch security and customer safety protocols.",
                        icon: FileCheck
                    },
                    {
                        title: "Staff and Customer Safety",
                        description: "Multi-layered protection ensures safety for both employees and customers during operations.",
                        icon: Users
                    },
                    {
                        title: "Real-Time Threat Detection",
                        description: "AI analytics identify suspicious behavior and potential threats before incidents escalate.",
                        icon: Eye
                    }
                ]
            },
            {
                id: "vault-cash-management",
                title: "Strong Room, Vault & Cash Management",
                icon: Lock,
                offerings: [
                    {
                        title: "Maximum Security for High-Value Assets",
                        description: "Comprehensive protection against vault breaches, cash-in-transit theft, and collusion during cash handling operations.",
                        features: [
                            "Multi-Layer Vault Access: Time-delay locks, dual-control biometrics, and video-verified entry logs",
                            "Cash Handling Monitoring: AI object detection for tamper-proof surveillance in strong rooms",
                            "Armored CIT Escorts: GPS-tracked vehicles with route deviation alerts and armed guards",
                            "ATM & CDM Protection: Anti-skimming devices, vibration alarms, and remote monitoring systems"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Vault Breach Prevention",
                        description: "Multi-factor authentication and time-delay systems prevent unauthorized access to high-value storage.",
                        icon: Lock
                    },
                    {
                        title: "Cash Transit Security",
                        description: "GPS tracking and armed escorts ensure safe transport of cash between locations with real-time monitoring.",
                        icon: Truck
                    },
                    {
                        title: "ATM Network Protection",
                        description: "Comprehensive monitoring and anti-tampering systems protect ATMs from skimming and physical attacks.",
                        icon: Shield
                    }
                ]
            },
            {
                id: "back-office-data-center",
                title: "Back Office & Data Center Security",
                icon: Database,
                offerings: [
                    {
                        title: "Protecting Sensitive Information Assets",
                        description: "Advanced security for unauthorized access prevention, sabotage protection, and data leakage mitigation.",
                        features: [
                            "Role-Based Access Control: Biometric zoning for server rooms and record storage areas",
                            "Environmental Monitoring: Integrated fire/smoke detection with auto-suppression alerts",
                            "Insider Threat Detection: AI analytics for unusual access patterns and suspicious activities",
                            "Secure Document Handling: Tamper-evident tracking for physical records and sensitive documents"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Data Security Assurance",
                        description: "Multi-layered access control and monitoring protect sensitive customer and financial data from breaches.",
                        icon: Database
                    },
                    {
                        title: "Insider Threat Mitigation",
                        description: "AI-powered analytics detect unusual patterns and prevent internal security compromises.",
                        icon: Eye
                    },
                    {
                        title: "Environmental Protection",
                        description: "Integrated systems protect critical infrastructure from fire, flooding, and environmental hazards.",
                        icon: Shield
                    }
                ]
            },
            {
                id: "command-centre-bfsi",
                title: "Central Command Centre",
                icon: MonitorDot,
                offerings: [
                    {
                        title: "Unified Oversight Across Network",
                        description: "Single intelligent dashboard for multi-location BFSI operations including HQs, branches, ATMs, and vaults.",
                        features: [
                            "Live Guard and Asset Tracking: Real-time monitoring of security personnel and critical assets across all locations",
                            "Vault/Strong Room Breach Alerts: Instant notifications for unauthorized access attempts or security breaches",
                            "Branch Incident Monitoring: Real-time customer flow analysis and incident response coordination",
                            "Cash Transit Visibility: GPS tracking and route monitoring for all cash-in-transit operations"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Centralized Multi-Location Control",
                        description: "Single dashboard provides complete visibility and control across entire banking network.",
                        icon: Network
                    },
                    {
                        title: "Instant Incident Response",
                        description: "Real-time alerts enable immediate coordination with local authorities and security teams.",
                        icon: Zap
                    },
                    {
                        title: "Compliance and Reporting",
                        description: "Automated reports for RBI compliance, insurance claims, and operational audits.",
                        icon: BarChart3
                    }
                ]
            }
        ],
        closingStatement: "ISI India's Smart Physical Security for BFSI delivers bank-grade protection through the convergence of elite personnel, AI-driven intelligence, and real-time monitoring. From headquarters to the smallest branch, from vaults to ATMs, our integrated platform ensures asset protection, operational continuity, and unwavering RBI compliance. Experience security that evolves with threats while maintaining the trust your customers place in you."
    },
    {
        id: "education",
        title: "Smart Physical Security for Education & Higher Education Sector",
        subtitle: "Creating Safe Spaces for Learning and Growth",
        description: "Educational institutions face unique security challenges: open campuses, vulnerable student populations, unauthorized access risks, bullying, harassment, ragging, theft, vandalism, and compliance with CBSE/UGC guidelines, POCSO Act, and campus safety mandates. Traditional guarding struggles to provide proactive protection in these welcoming yet high-risk environments. ISI India delivers Smart Physical Security — combining trained personnel with AI technology, real-time monitoring, and rapid response to create safe, nurturing spaces for learning.",
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        icon: GraduationCap,
        sections: [
            {
                id: "core-guarding-education",
                title: "Core Guarding Services",
                icon: Users,
                offerings: [
                    {
                        title: "Tech-Enhanced & Student-Focused Security",
                        description: "Specially trained security personnel equipped with advanced technology and student-safety protocols.",
                        features: [
                            "Biometric/Facial Recognition: Automated attendance for staff/students with GPS tracking for security guards",
                            "AI-Optimized Patrol Routes: Time-stamped photo/video proof with geofencing for verifiable campus rounds",
                            "Mobile App Alerts: Instant notifications to supervisors, administration, and parents for rapid incident response",
                            "Specially Trained Personnel: Women guards for girls' sections, child-safety certified staff, soft skills for student interaction"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "50% Reduction in Unauthorized Entries",
                        description: "Advanced biometric systems and trained personnel significantly reduce security breaches and unauthorized campus access.",
                        icon: Shield
                    },
                    {
                        title: "4x Faster Incident Response",
                        description: "Instant mobile alerts and optimized protocols enable rapid response to safety incidents and emergencies.",
                        icon: Zap
                    },
                    {
                        title: "Parent Reassurance & Compliance",
                        description: "Full digital audit trails for regulatory compliance and transparent communication with parents.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "perimeter-campus",
                title: "Perimeter & Campus Boundary Protection",
                icon: Shield,
                offerings: [
                    {
                        title: "Comprehensive Campus Security",
                        description: "Advanced protection against unauthorized entry, trespassing, vandalism, and after-hours intrusions.",
                        features: [
                            "Autonomous Drone & Thermal Camera Patrols: Day/night surveillance for large campuses and hostel areas",
                            "AI-Enhanced Perimeter Sensors: Intrusion detection with machine learning minimizing false alarms by 80%",
                            "Visitor Management Integration: QR-based registration with photo ID and real-time approval workflows",
                            "Anti-Climb Fencing + Vibration Alerts: Linked to central control for immediate security response"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "80% Reduction in False Alarms",
                        description: "AI-powered sensors distinguish real threats from environmental factors, improving response efficiency.",
                        icon: Eye
                    },
                    {
                        title: "24/7 Campus Monitoring",
                        description: "Continuous surveillance ensures safety during school hours, after-hours activities, and hostel operations.",
                        icon: Camera
                    },
                    {
                        title: "Multi-Campus Scalability",
                        description: "Ideal for schools (K-12), colleges, universities, residential campuses, and coaching institutes.",
                        icon: TrendingUp
                    }
                ]
            },
            {
                id: "campus-building-integrity",
                title: "Campus & Building Integrity",
                icon: BadgeCheck,
                offerings: [
                    {
                        title: "Safe Learning Environments",
                        description: "Comprehensive measures addressing bullying, harassment, ragging, theft, and unsafe behavior in educational settings.",
                        features: [
                            "Zoned Access Control: Biometric/role-based entry for hostels, labs, libraries, and administrative areas",
                            "Advanced AI Video Analytics: Detects loitering, crowd formation, unusual activity, fights, or abandoned objects",
                            "Panic Buttons & Duress Alarms: Wearable/mobile devices for staff/students with instant alerts to security",
                            "Hostel Shift Monitoring: Digital handovers with verification ensuring 24/7 coverage and accountability"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "POCSO & CBSE Compliance",
                        description: "Security measures aligned with POCSO Act, CBSE safety guidelines, UGC anti-ragging norms, and fire safety standards.",
                        icon: FileCheck
                    },
                    {
                        title: "Student Safety Assurance",
                        description: "Multi-layered protection prevents bullying, harassment, and ragging while maintaining a welcoming campus environment.",
                        icon: Shield
                    },
                    {
                        title: "Real-Time Threat Detection",
                        description: "AI analytics identify unsafe situations and potential threats before incidents escalate.",
                        icon: Eye
                    }
                ]
            },
            {
                id: "transport-visitor-security",
                title: "Transport & Visitor Security",
                icon: Truck,
                offerings: [
                    {
                        title: "Comprehensive Transport & Access Management",
                        description: "Advanced solutions for school bus safety, visitor verification, and preventing unauthorized access to students.",
                        features: [
                            "GPS-Tracked School Vehicles: Live tracking with geo-fence alerts for route deviations and over-speeding",
                            "ANPR + RFID Student Tagging: Automatic attendance tracking on boarding/exiting buses with parent notifications",
                            "Visitor Verification: Digital logs with background cross-checks and mandatory escorted access",
                            "Emergency Broadcast Integration: Mass notifications to parents via SMS/app during incidents or emergencies"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Student Transport Safety",
                        description: "Real-time tracking and automated attendance ensure student safety during commute with complete parent visibility.",
                        icon: Truck
                    },
                    {
                        title: "Stranger Danger Prevention",
                        description: "Rigorous visitor verification and escorted access protocols prevent unauthorized contact with students.",
                        icon: Shield
                    },
                    {
                        title: "Parent Communication",
                        description: "Instant notifications keep parents informed about student arrivals, departures, and any incidents.",
                        icon: Bell
                    }
                ]
            },
            {
                id: "command-centre-education",
                title: "Central Command Centre",
                icon: MonitorDot,
                offerings: [
                    {
                        title: "Unified Campus Oversight",
                        description: "Single intelligent dashboard for single or multi-campus institutions providing complete visibility and control.",
                        features: [
                            "Live Guard and Student Transport Tracking: Real-time monitoring of security personnel and school vehicles",
                            "Intrusion and Anomaly Alerts: Instant notifications for perimeter breaches, unusual activities, or safety incidents",
                            "Hostel/Classroom Safety Monitoring: Continuous oversight of student areas with AI-powered threat detection",
                            "Visitor and Vehicle Movement Logs: Complete audit trails with automated compliance reports and incident analytics"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Single-Campus to Network Management",
                        description: "Effortless scalability from one school to nationwide university networks with unified oversight.",
                        icon: Network
                    },
                    {
                        title: "Proactive Incident Prevention",
                        description: "Real-time monitoring and AI analytics enable intervention before situations escalate into serious incidents.",
                        icon: Eye
                    },
                    {
                        title: "Compliance Automation",
                        description: "Automated reports for regulatory compliance, parent communication, and administrative oversight.",
                        icon: BarChart3
                    }
                ]
            },
            {
                id: "advanced-offerings-education",
                title: "Advanced Offerings for Premium Institutions",
                icon: Sparkles,
                offerings: [
                    {
                        title: "Next-Generation Campus Security",
                        description: "Cutting-edge technologies for premium education and higher education institutions seeking the highest level of protection.",
                        features: [
                            "Predictive Safety Intelligence: AI analysis of patterns and incidents enabling proactive interventions (~30% reduction in incidents)",
                            "Emergency Lockdown Systems: One-touch remote door locking for rapid response to active threats",
                            "Integrated Crisis Management: Coordinated response protocols linking security, administration, local authorities, and parents",
                            "Advanced Analytics Dashboard: Predictive insights, trend analysis, and performance metrics for continuous improvement"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Proactive Threat Prevention",
                        description: "AI-powered predictive analytics identify patterns and enable intervention before incidents occur.",
                        icon: Target
                    },
                    {
                        title: "Rapid Emergency Response",
                        description: "One-touch lockdown and integrated crisis protocols ensure fastest possible response to active threats.",
                        icon: Zap
                    },
                    {
                        title: "Continuous Improvement",
                        description: "Advanced analytics provide insights for optimizing security operations and demonstrating ROI to stakeholders.",
                        icon: TrendingUp
                    }
                ]
            }
        ],
        closingStatement: "ISI India's Smart Physical Security for Education creates safe, nurturing environments where students can focus on learning and growth. By combining specially trained personnel with AI-powered monitoring, real-time parent communication, and comprehensive compliance, we protect what matters most — your students. From kindergarten to university, from day schools to residential campuses, our scalable solutions ensure every student, staff member, and visitor is protected with care, vigilance, and intelligence."
    },
    {
        id: "manufacturing",
        title: "Smart Physical Security for Manufacturing & Industrial Sectors",
        subtitle: "Where Human Vigilance Meets Intelligent Technology",
        description: "Manufacturing and industrial facilities in India confront elevated security risks: vast perimeters, high-value assets and sensitive technologies, threats to production/IP continuity, insider risks, sabotage, espionage, and rigorous compliance (Factories Act, ISO 45001, DDP guidelines, ITAR-like controls, and offset requirements). Traditional approaches often lack the integration needed for these high-stakes environments. ISI India provides Smart Physical Security — a unified, tech-augmented solution merging elite trained personnel with real-time AI intelligence, predictive analytics, and cyber-physical convergence to protect people, assets, intellectual property, and operational resilience.",
        gradient: "from-slate-500 via-gray-600 to-zinc-700",
        icon: Factory,
        sections: [
            {
                id: "core-guarding-manufacturing",
                title: "Core Guarding Services – Tech-Enhanced & Specialized",
                icon: ShieldCheck,
                offerings: [
                    {
                        title: "Elite Security Personnel with Advanced Technology",
                        description: "Professional security that combines ex-military/paramilitary expertise with cutting-edge monitoring systems.",
                        features: [
                            "Biometric + Facial Recognition Attendance: Real-time GPS/location tracking replacing manual logs and paper attendance",
                            "AI-Optimized Digital Patrol Routes: Time-stamped photo/video/geofence proof ensuring verifiable, tamper-proof rounds",
                            "Mobile App Incident Reporting: Instant AI-prioritized alerts to supervisors, clients, and emergency response teams",
                            "Ex-Military/Paramilitary Trained Personnel: Sector-specific SOPs covering GMP, OSHA, and classified material handling protocols"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "40% Fewer Missed Patrols",
                        description: "AI-optimized routes and digital verification ensure consistent, verifiable security coverage across all shifts.",
                        icon: CheckCircle2
                    },
                    {
                        title: "3x Faster Response Times",
                        description: "Mobile alerts and instant communication enable rapid coordination with emergency teams and management.",
                        icon: Zap
                    },
                    {
                        title: "Tamper-Proof Audit Trails",
                        description: "Complete digital documentation for regulatory compliance, insurance claims, and incident investigation.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "perimeter-asset-protection",
                title: "Perimeter & Asset Protection – Fortified Against Advanced Threats",
                icon: Plane,
                offerings: [
                    {
                        title: "Multi-Layered Perimeter Defense",
                        description: "Comprehensive protection against unauthorized intrusion, material/IP theft, sabotage, drone incursions, and border proximity risks.",
                        features: [
                            "Autonomous Thermal Drone Patrols: Day/night coverage for expansive perimeters (up to 10 km²) with anti-drone detection/integration",
                            "AI-Enhanced Fence Sensors: Vibration/seismic/laser detection with machine learning reducing false alarms by 70–80%",
                            "RFID/IoT + Video Analytics Correlation: Real-time tracking of critical tools, dies, WIP, and classified components",
                            "On-Call Specialized K9 Units: Explosives/narcotics/drone countermeasure detection for sensitive shipments and sites"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Comprehensive Perimeter Coverage",
                        description: "Autonomous drones and AI sensors provide 24/7 monitoring of vast industrial perimeters without blind spots.  Next-generation autonomous capabilities successfully operate in flawless synchronization alongside top-tier human intelligence to exponentially scale our defensive footprint. These highly sophisticated tools implement real-time systemic anomaly detection, dramatically accelerating threat interdiction protocols and drastically reducing overall human error. With relentless round-the-clock remote monitoring and sophisticated N+1 physical redundancy designs, optimal and enduring continuity is unconditionally guaranteed.",
                        icon: Eye
                    },
                    {
                        title: "70-80% Reduction in False Alarms",
                        description: "Machine learning algorithms distinguish real threats from environmental factors, improving response efficiency.",
                        icon: Activity
                    },
                    {
                        title: "Critical Asset Protection",
                        description: "RFID tracking and video correlation prevent theft and unauthorized movement of high-value materials and IP.",
                        icon: Lock
                    }
                ]
            },
            {
                id: "production-floor-security",
                title: "Production Floor & Critical Area Integrity",
                icon: Settings,
                offerings: [
                    {
                        title: "Integrated Production Security",
                        description: "Advanced measures addressing internal theft, process sabotage, safety/IP violations, and technology leakage.",
                        features: [
                            "Multi-Factor Zoned Access Control: Biometric/role-based entry for clean rooms, R&D labs, SCIF-equivalent zones, and server rooms",
                            "Advanced AI Video Analytics: Detects loitering, unauthorized access, PPE non-compliance, unusual behavior, and anomaly patterns",
                            "Integrated Emergency Systems: Panic buttons/duress alarms with immediate alerts to EHS, control room, and rapid response teams",
                            "Secure Shift Handover Protocols: Digital protocols with biometric/photo verification and comprehensive audit logging"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "GMP & ISO 45001 Compliance",
                        description: "Security measures aligned with GMP, ISO 45001, DDP security protocols, and export control standards.",
                        icon: BadgeCheck
                    },
                    {
                        title: "IP & Technology Protection",
                        description: "Multi-layered access control and monitoring prevent industrial espionage and technology leakage.",
                        icon: Shield
                    },
                    {
                        title: "Safety Integration",
                        description: "AI analytics detect PPE violations and unsafe behaviors, supporting EHS compliance and worker safety.",
                        icon: HardHat
                    }
                ]
            },
            {
                id: "logistics-supply-chain",
                title: "Logistics, Yard & Supply Chain Security",
                icon: Truck,
                offerings: [
                    {
                        title: "End-to-End Supply Chain Protection",
                        description: "Comprehensive security against cargo tampering, vehicle collusion, and supply chain espionage.",
                        features: [
                            "ANPR + Biometric Guard Verification: Real-time gate cross-checking with automated deviation alerts",
                            "Loading Bay & Yard Monitoring: AI tamper-detection cameras preventing unauthorized access and removals",
                            "GPS-Enabled Secure Transit: Armored/escorted valuables movement with live tracking, route locks, and geo-fencing",
                            "Comprehensive Digital Yard Management: Real-time visibility of vehicles, containers, personnel, and material flows"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Supply Chain Integrity",
                        description: "End-to-end tracking and verification prevent cargo theft, tampering, and unauthorized diversions.",
                        icon: CheckCircle2
                    },
                    {
                        title: "Real-Time Visibility",
                        description: "Digital yard management provides complete oversight of all vehicle and material movements.",
                        icon: Eye
                    },
                    {
                        title: "Automated Compliance",
                        description: "Digital logs and verification systems ensure audit-ready documentation for regulatory requirements.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "command-centre-manufacturing",
                title: "Central Command Centre – Multi-Site Unified Intelligence",
                icon: Cpu,
                offerings: [
                    {
                        title: "Unified Operations Dashboard",
                        description: "Single intelligent dashboard for factories, warehouses, depots, and high-security installations with complete visibility.",
                        features: [
                            "Live Personnel Tracking and Patrol Analytics: Real-time monitoring of all security personnel across multiple sites",
                            "Real-Time Perimeter/Intrusion Alerts with AI Triage: Intelligent prioritization of security incidents and threats",
                            "Production Safety and Compliance Monitoring: Continuous oversight of safety protocols and regulatory compliance",
                            "Supply Chain/Yard Movement Oversight: Complete visibility of logistics operations and material flows",
                            "Automated SLA Reporting and Predictive Maintenance: Performance metrics and proactive system health monitoring"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Multi-Site Scalability",
                        description: "Seamless management from single sites to 50+ locations with centralized supervision for dispersed networks.",
                        icon: Network
                    },
                    {
                        title: "Predictive Intelligence",
                        description: "AI-powered analytics enable proactive threat detection and resource optimization across all facilities.",
                        icon: BarChart3
                    },
                    {
                        title: "Unified Command",
                        description: "Single dashboard integrates all security systems for coordinated response and operational efficiency.",
                        icon: MonitorDot
                    }
                ]
            },
            {
                id: "advanced-manufacturing-security",
                title: "Advanced Offerings for High-Security Manufacturing & Industrial Clients",
                icon: Sparkles,
                offerings: [
                    {
                        title: "Next-Generation Security Intelligence",
                        description: "Cutting-edge technologies for high-stakes manufacturing and critical infrastructure operations requiring maximum protection.",
                        features: [
                            "Predictive Risk Intelligence: AI/ML analysis of incidents, threats, and patterns enabling proactive guard optimization (~25–30% risk reduction)",
                            "Digital Twin & 3D Mapping: Virtual plant models with live sensor/data overlays for remote audits, scenario planning, and emergency simulations",
                            "Cyber-Physical Security Fusion: Integration with SIEM/OT networks detecting converged threats (e.g., physical access + data exfiltration)",
                            "Classified Compliance Reporting: Secure ESG/safety/IP protection metrics supporting sustainability, audit, and government offset requirements",
                            "Counter-Drone & Electronic Warfare Basics: Compliant jamming/detection systems protecting against aerial surveillance and threats"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "25-30% Risk Reduction",
                        description: "Predictive analytics and AI-powered optimization significantly reduce security incidents and operational risks.",
                        icon: TrendingUp
                    },
                    {
                        title: "Cyber-Physical Convergence",
                        description: "Integrated security platform detects and responds to combined physical and digital threats in real-time.",
                        icon: Cpu
                    },
                    {
                        title: "Military-Grade Protection",
                        description: "Counter-drone systems and classified compliance reporting meet the highest security standards.",
                        icon: Shield
                    }
                ]
            }
        ],
        closingStatement: "ISI India's Smart Physical Security evolves manned guarding into a resilient, intelligence-driven fortress — delivering proactive protection, unbreakable compliance, and uninterrupted operations for India's vital manufacturing and industrial ecosystems. Trusted by global leaders in automotive, chemicals, electronics, and high-stakes critical infrastructure operations, we provide elite expertise, stringent compliance, and future-ready scalability that decouples costs from headcount while integrating emerging threats like cyber-physical attacks."
    },
    {
        id: "drones",
        title: "Aerial Intelligence & Drone Services",
        subtitle: "Autonomous Aerial Intelligence. Real-Time Decisions. Trusted Outcomes.",
        description: "We deliver AI-powered, autonomous drone operations that transform how organizations secure assets, move critical goods, monitor infrastructure, and govern cities. Our services integrate seamlessly with Command & Control Centres, SOCs, GIS platforms, ERP/HIS systems, and municipal platforms, delivering actionable intelligence—not just imagery. From public safety and healthcare to industrial corridors and smart cities, we provide mission-critical aerial intelligence you can rely on.",
        gradient: "from-cyan-500 via-blue-500 to-indigo-600",
        icon: Plane,
        sections: [
            {
                id: "drone-security-crowd",
                title: "Drone Security & Crowd Monitoring",
                icon: Eye,
                offerings: [
                    {
                        title: "Autonomous Aerial Security Operations",
                        description: "AI-powered drone surveillance for large-scale events, critical infrastructure, and high-security environments.",
                        features: [
                            "Autonomous Perimeter Patrols: AI-guided patrol routes and event-triggered drone dispatch integrated with alarms, access control, and surveillance systems",
                            "AI-Powered Crowd Intelligence: Overhead crowd counting, density heatmaps, flow analysis, and early-warning alerts for congestion or stampede-risk patterns",
                            "Incident Overwatch & Command Support: Rapid aerial deployment during fires, industrial incidents, or public safety emergencies with live unified aerial view",
                            "Seamless SOC Integration: Encrypted communications, role-based access, and privacy-by-design analytics integrated with VMS and incident-management platforms"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Real-Time Situational Awareness",
                        description: "Live aerial intelligence enables commanders to make informed decisions and coordinate response effectively.",
                        icon: Eye
                    },
                    {
                        title: "Crowd Safety Assurance",
                        description: "AI-powered density monitoring and flow analysis prevent dangerous overcrowding and stampede situations.",
                        icon: Users
                    },
                    {
                        title: "Rapid Incident Response",
                        description: "Event-triggered drone dispatch provides immediate aerial oversight for emergency situations.",
                        icon: Zap
                    }
                ]
            },
            {
                id: "drone-logistics",
                title: "Drone Logistics & Express Delivery",
                icon: Package,
                offerings: [
                    {
                        title: "Autonomous Aerial Delivery Solutions",
                        description: "Time-critical, high-value shipments with route-optimized autonomous flights and smart payload management.",
                        features: [
                            "Middle- & Last-Mile Drone Delivery: Route-optimised autonomous flights with smart payload pods featuring tamper detection and electronic locks",
                            "Campus Drone Logistics: Scheduled and on-demand drone missions between fixed landing pads for intra-facility movement",
                            "Control Tower Integration: APIs integrated with WMS, TMS, and OMS for automated dispatch, real-time tracking, and digital proof of delivery",
                            "Predictive Fleet Management: Centralized fleet operations with predictive health monitoring and complete flight logs"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Traffic-Independent Delivery",
                        description: "Aerial routes bypass ground congestion, floods, and terrain obstacles for guaranteed delivery times.",
                        icon: Plane
                    },
                    {
                        title: "Complete Traceability",
                        description: "Digital proof of delivery and complete audit trails ensure accountability and compliance.",
                        icon: FileCheck
                    },
                    {
                        title: "Scalable Operations",
                        description: "Automated dispatch and fleet management enable efficient scaling across multiple sites and routes.",
                        icon: Network
                    }
                ]
            },
            {
                id: "healthcare-medical-drones",
                title: "Healthcare & Medical Drone Services",
                icon: Activity,
                offerings: [
                    {
                        title: "Life-Saving Aerial Medical Logistics",
                        description: "Validated cold-chain delivery for medicines, vaccines, blood, organs, and diagnostic samples to remote and emergency locations.",
                        features: [
                            "Medical Supply Distribution: On-demand and scheduled delivery of medicines, vaccines, and consumables to PHCs, clinics, and mobile health camps",
                            "Blood & Diagnostic Sample Transport: Validated cold-chain drone pods for blood, organs, and lab samples meeting strict turnaround and temperature SLAs",
                            "Emergency Medical Logistics: Rapid aerial deployment of PPE, test kits, and life-saving medicines during floods, pandemics, or natural disasters",
                            "HIS/LIS Integration: Integration with Hospital Information Systems and Laboratory Information Systems for order capture and real-time tracking"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Life-Saving Speed",
                        description: "Aerial delivery overcomes poor road connectivity in rural, hilly, coastal, or flood-prone regions.",
                        icon: Zap
                    },
                    {
                        title: "Cold-Chain Integrity",
                        description: "Validated temperature-controlled pods ensure sample and medicine quality throughout transport.",
                        icon: Shield
                    },
                    {
                        title: "Regulatory Compliance",
                        description: "Audit-ready traceability and regulatory-aligned workflows meet healthcare standards.",
                        icon: BadgeCheck
                    }
                ]
            },
            {
                id: "municipal-revenue",
                title: "Municipal Revenue & Property Intelligence",
                icon: Building2,
                offerings: [
                    {
                        title: "AI-Powered Urban Mapping & Revenue Intelligence",
                        description: "High-resolution aerial mapping and AI analytics for property tax optimization and urban planning.",
                        features: [
                            "Citywide Aerial Mapping: High-resolution orthomosaic and 3D mapping at ward and zone level for complete, current urban visibility",
                            "AI-Based Property & Encroachment Analytics: Detection of unassessed properties, additional floors, land-use changes, and boundary encroachments",
                            "Revenue Intelligence Dashboards: Actionable dashboards for tax and planning teams to prioritise inspections, validate findings, and track revenue uplift",
                            "Municipal ERP Integration: Secure data governance with integration to property-tax platforms and full audit trails"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Revenue Uplift",
                        description: "AI-powered detection of unassessed properties and unauthorized construction increases tax collection.",
                        icon: TrendingUp
                    },
                    {
                        title: "Data-Driven Planning",
                        description: "Current, accurate urban mapping supports informed decision-making for city development.",
                        icon: BarChart3
                    },
                    {
                        title: "Legal Defensibility",
                        description: "Audit-ready analytics and secure data governance withstand legal and regulatory scrutiny.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "infrastructure-monitoring",
                title: "Rail, Bridges & Infrastructure Monitoring",
                icon: Layers,
                offerings: [
                    {
                        title: "Automated Infrastructure Inspection",
                        description: "AI-assisted defect detection for rail corridors, bridges, dams, pipelines, and critical infrastructure.",
                        features: [
                            "Rail Corridor Patrol Flights: Automated inspections of tracks, ballast, embankments, OHE, bridges, and level crossings using RGB and thermal sensors",
                            "Bridge & Structural Health Monitoring: High-resolution imaging of decks, piers, bearings, joints, and cables without scaffolding or traffic closures",
                            "AI Defect Detection: Early identification of cracks, spalling, corrosion, obstructions, vegetation overgrowth, and waterlogging",
                            "Digital Twin Integration: Time-stamped, repeatable missions creating digital defect records for BIM and asset-management platforms"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Safety & Cost Efficiency",
                        description: "Drone inspections eliminate dangerous manual work and reduce costs associated with scaffolding and closures.",
                        icon: Shield
                    },
                    {
                        title: "Predictive Maintenance",
                        description: "Early defect detection enables proactive repairs before failures occur, preventing costly downtime.",
                        icon: Activity
                    },
                    {
                        title: "Inspection-Grade Documentation",
                        description: "High-resolution imagery and consistent datasets support engineering analysis and regulatory compliance.",
                        icon: FileCheck
                    }
                ]
            },
            {
                id: "private-security-drones",
                title: "Private Security Drone Operations & Event Management",
                icon: Shield,
                offerings: [
                    {
                        title: "AI-Enabled Aerial Security for High-Risk Environments",
                        description: "Autonomous drone surveillance extending ground security forces for corporate campuses, events, and VIP protection.",
                        features: [
                            "Aerial Guarding & Perimeter Surveillance: Autonomous and on-demand drone patrols covering large perimeters, rooftops, and blind zones with live video/thermal feeds",
                            "Alarm-Triggered Drone Response: Instant drone dispatch linked to intrusion alarms, access-control events, or SOS triggers providing live aerial view",
                            "Event Security & Crowd Management: Real-time crowd density analytics, flow monitoring, and early warning alerts for overcrowding and stampede risks",
                            "VIP Protection & High-Threat Monitoring: Aerial route/venue surveillance with suspicious activity detection for close-protection operations",
                            "Night & Low-Visibility Operations: Thermal and low-light imaging for night patrols, power outages, fog, or adverse weather conditions"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Extended Security Coverage",
                        description: "Drones complement manned guarding by covering vast areas, blind spots, and inaccessible zones cost-effectively.",
                        icon: Eye
                    },
                    {
                        title: "Rapid Threat Response",
                        description: "Alarm-triggered deployment provides security supervisors immediate aerial intelligence before ground teams arrive.",
                        icon: Zap
                    },
                    {
                        title: "Event Safety Assurance",
                        description: "Real-time crowd analytics prevent dangerous overcrowding and enable coordinated emergency response.",
                        icon: Users
                    }
                ]
            },
            {
                id: "unified-drone-platform",
                title: "Unified Aerial Intelligence Platform",
                icon: Cpu,
                offerings: [
                    {
                        title: "Enterprise-Grade Drone Operations Centre",
                        description: "Single platform for safe, compliant, AI-powered drone operations across all use cases and industries.",
                        features: [
                            "Central Drone Operations Centre: Fleet management, mission planning, and live monitoring for multi-site operations",
                            "AI & Analytics Engine: Sector-tuned algorithms for crowds, defects, encroachments, and anomalies across security, healthcare, infrastructure, and governance",
                            "Secure Data & Integration Layer: Encrypted communications and APIs into SOCs, GIS, ERP, HIS, and project management systems",
                            "Compliance & Audit Framework: Complete flight logs, audit trails, and regulatory-aligned workflows for aviation and operational safety standards"
                        ]
                    }
                ],
                benefits: [
                    {
                        title: "Unified Operations",
                        description: "Single platform manages all drone services across security, logistics, healthcare, and infrastructure applications.",
                        icon: Network
                    },
                    {
                        title: "Actionable Intelligence",
                        description: "AI-powered analytics deliver insights and recommendations, not just raw imagery and data.",
                        icon: BarChart3
                    },
                    {
                        title: "Enterprise Integration",
                        description: "Seamless connectivity with existing command centres, SOCs, and enterprise systems for unified operations.",
                        icon: Wifi
                    }
                ]
            }
        ],
        closingStatement: "ISI India's Aerial Intelligence & Drone Services platform delivers autonomous, AI-powered drone operations you can trust. From private security and event management to healthcare logistics, infrastructure monitoring, and smart city governance, we provide mission-critical aerial intelligence that transforms how organizations protect assets, save lives, and optimize operations. With enterprise-grade security, regulatory compliance, and seamless integration, we're the single platform for all your aerial intelligence needs."
    }
];

export const getVerticalDetailById = (id: string): VerticalDetail | undefined => {
    return verticalsDetailData.find(vertical => vertical.id === id);
};
