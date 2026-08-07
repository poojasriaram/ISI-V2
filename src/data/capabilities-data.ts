import { Shield, Users, Truck, Star, Network, Server, ShieldCheck, AlertTriangle, Leaf, Brain, Globe, Plane, Ship, Train, TruckIcon, UserCheck, Users2, Building2, Factory, Radio } from "lucide-react";

export const statsData = [
    {
        icon: Brain,
        title: "AI-Powered Analytics",
        stat: "92",
        suffix: "%",
        description: "Detection accuracy with machine learning models",
    },
    {
        icon: Network,
        title: "Tech Integration",
        stat: "50",
        suffix: "+",
        description: "Third-party system integrations supported",
    },
    {
        icon: Globe,
        title: "National Coverage",
        stat: "28",
        suffix: "",
        description: "States with operational presence",
    },
];

export interface CapabilityTopic {
    title: string;
    capabilities: string[];
    scenarios: string[];
}

export interface CapabilityPillar {
    icon: any  ;
    title: string;
    punchline: string;
    topics: CapabilityTopic[];
}

export const capabilityPillars: CapabilityPillar[] = [
    {
        icon: Shield,
        title: "Integrated Physical Security Operations",
        punchline: "Comprehensive protection architectures for enterprises, critical infrastructure, and high-consequence environments",
        topics: [
            {
                title: "Security Personnel Management & Tactical Operations",
                capabilities: [
                    "Elite Personnel: Certified security professionals with specialized training in threat assessment, crisis management, and de-escalation techniques. All personnel undergo continuous professional development and psychological fitness evaluations.",
                    "Specialized Units: Tactical response teams, armed security details, explosive detection K9 units, and covert surveillance operators for high-threat environments.",
                    "AI-Powered Workforce Optimization: Machine learning algorithms for predictive scheduling, skills-based deployment, fatigue monitoring, and real-time resource reallocation based on threat intelligence.",
                    "Performance Analytics: Biometric monitoring, incident response time tracking, and behavioral analysis to ensure peak operational readiness."
                ],
                scenarios: [
                    "Fortune 500 corporate headquarters and industrial complexes requiring multi-layered 24/7/365 protection",
                    "High-consequence facilities (semiconductor fabs, pharmaceutical R&D, classified government installations, nuclear facilities)",
                    "Crisis surge scenarios demanding immediate deployment of 500+ trained personnel within 6 hours",
                    "Executive protection details for C-suite leaders in hostile environments"
                ]
            },
            {
                title: "Next-Generation Access Control & Intelligent Surveillance",
                capabilities: [
                    "Zero-Trust Physical Access: Multi-factor biometric authentication combining facial recognition, iris scanning, fingerprint analysis, and behavioral gait recognition with liveness detection to prevent spoofing.",
                    "AI-Powered Video Analytics: Deep learning systems for real-time threat detection including weapon identification, aggressive behavior patterns, unauthorized access attempts, tailgating detection, and crowd anomaly analysis with 99.7% accuracy.",
                    "Advanced Sensor Fusion: Integration of thermal imaging, millimeter-wave radar, LiDAR scanning, acoustic sensors, and infrared systems for complete environmental awareness in all conditions.",
                    "Predictive Security Intelligence: Pattern recognition algorithms that identify suspicious behavioral sequences before threats materialize."
                ],
                scenarios: [
                    "Zero-trust environments in defense contractors and intelligence agencies",
                    "Pharmaceutical manufacturing requiring FDA 21 CFR Part 11 compliance",
                    "Data centers housing sovereign data or classified information",
                    "Unmanned facilities in extreme climates or hostile territories"
                ]
            },
            {
                title: "Intelligent Perimeter Protection Systems",
                capabilities: [
                    "Multi-Layer Intrusion Detection: Integrated sensing using ground-based radar, fiber optic cables, microwave barriers, seismic sensors, and autonomous drone patrols with 360° coverage.",
                    "Physical Barrier Systems: Crash-rated bollards (K12/M50 rated), reinforced gates, electrified fencing, and deployable anti-vehicle barriers with remote activation.",
                    "Autonomous Response: AI-driven automated lighting, audio warnings, and coordinated drone swarms for immediate threat interdiction."
                ],
                scenarios: [
                    "Critical national infrastructure (power generation, water treatment, telecommunications hubs)",
                    "Facilities in terrorism-prone regions or politically unstable areas",
                    "Temporary high-security zones for diplomatic summits or international events",
                    "Border installations and strategic military assets"
                ]
            }
        ]
    },
    {
        icon: Users,
        title: "Rapid Security Force Mobilization",
        punchline: "Agile, scalable deployment capabilities for dynamic threat environments",
        topics: [
            {
                title: "Large-Scale Event Security Operations",
                capabilities: [
                    "Rapid Deployment Protocols: Mobilization of 1,000+ trained personnel within 12-24 hours with pre-staged equipment and command infrastructure.",
                    "Aerial Intelligence Platform: Autonomous drone fleets with thermal imaging, license plate recognition, and real-time crowd density mapping.",
                    "Smart Screening Technology: AI-enhanced weapon detection systems, non-intrusive scanning, and biometric pre-clearance for VIP fast-tracking.",
                    "Integrated Communications: Encrypted mesh networks, body-worn cameras with live streaming, and instant incident escalation protocols."
                ],
                scenarios: [
                    "International sporting events (Olympics, World Cup) with 100,000+ attendees",
                    "Political conventions, state visits, and diplomatic summits",
                    "Religious pilgrimages and cultural festivals with complex crowd dynamics",
                    "Product launches and shareholder meetings for publicly traded companies"
                ]
            },
            {
                title: "Emergency Crisis Response Teams",
                capabilities: [
                    "Tactical Response Units: Certified armed personnel with active threat neutralization training, medical trauma response, and tactical vehicle operations.",
                    "Mobile Command Centers: Self-sufficient field headquarters with satellite communications, real-time intelligence fusion, and multi-agency coordination capabilities.",
                    "Disaster Response Integration: Collaboration protocols with fire, EMS, law enforcement, and military units."
                ],
                scenarios: [
                    "Active shooter incidents and terror attack response",
                    "Natural disaster security (post-hurricane looting prevention, earthquake relief security)",
                    "Civil unrest and riot containment operations",
                    "Hostage situations and kidnapping response"
                ]
            }
        ]
    },
    {
        icon: Truck,
        title: "Secure Fleet & Field Operations Management",
        punchline: "Intelligence-driven logistics and mobile asset protection",
        topics: [
            {
                title: "Advanced Fleet Security Management",
                capabilities: [
                    "Predictive Route Intelligence: AI-powered risk scoring using crime statistics, geopolitical intelligence, traffic patterns, and weather data with dynamic rerouting.",
                    "Armored Transport Solutions: Level B6/B7 armored vehicles with GPS tracking, panic buttons, remote immobilization, and tamper-evident cargo monitoring.",
                    "Driver Verification: Biometric authentication, fatigue monitoring, and continuous behavioral analysis to prevent insider threats."
                ],
                scenarios: [
                    "Cash-in-transit for banking institutions and ATM servicing",
                    "Pharmaceutical cold chain transportation for high-value biologics",
                    "Precious metals, gemstones, and artwork transportation",
                    "High-risk deliveries in conflict zones or areas with organized crime"
                ]
            },
            {
                title: "Centralized Field Operations Command",
                capabilities: [
                    "Global Operations Center: 24/7 staffed facility with video walls displaying real-time feeds from all field assets, satellite imagery, and predictive analytics dashboards.",
                    "Autonomous Surveillance Systems: Long-endurance drones, fixed-wing UAVs, and tethered aerial platforms for persistent monitoring of remote installations.",
                    "Remote Intervention: Two-way audio communication, remote door locking, and emergency protocol activation from centralized control."
                ],
                scenarios: [
                    "Oil and gas pipeline monitoring across thousands of kilometers",
                    "Border security operations in remote terrain",
                    "Mining operations in politically unstable regions",
                    "Telecommunications tower networks in high-theft areas"
                ]
            },
            {
                title: "Field Personnel Safety & Support",
                capabilities: [
                    "Advanced Communication Systems: Satellite phones, encrypted messaging, mesh radios, and emergency beacon activation with automatic location sharing.",
                    "Personal Protection Equipment: Ballistic vests, tactical medical kits, chemical agent protection, and environmental survival gear.",
                    "Wellness Monitoring: Biometric sensors tracking heart rate, body temperature, and stress indicators with automatic alert generation."
                ],
                scenarios: [
                    "Security details in conflict zones or post-conflict environments",
                    "Remote installations with limited medical infrastructure",
                    "Hazardous material facilities with chemical/radiological exposure risks",
                    "Extreme climate operations (desert, arctic, jungle environments)"
                ]
            }
        ]
    },
    {
        icon: Star,
        title: "Enterprise Event Management & VIP Protection",
        punchline: "Comprehensive security lifecycle management for high-stakes gatherings",
        topics: [
            {
                title: "Intelligence-Driven Pre-Event Planning",
                capabilities: [
                    "Threat Intelligence Integration: Analysis of social media chatter, dark web monitoring, geopolitical risk assessments, and historical incident data.",
                    "Digital Twin Modeling: 3D venue simulation with crowd flow analysis, emergency egress testing, and chokepoint identification.",
                    "Vulnerability Assessments: Red team penetration testing, CCTV blind spot analysis, and structural security audits.",
                    "Stakeholder Coordination: Liaison with local law enforcement, emergency services, venue management, and intelligence agencies."
                ],
                scenarios: [
                    "International conferences with heads of state attendance",
                    "Corporate annual meetings for controversial industries",
                    "Award ceremonies and entertainment events with high-profile celebrities",
                    "Sporting events in areas with hooliganism history"
                ]
            },
            {
                title: "On-Site Security Command & Control",
                capabilities: [
                    "Multi-Layer Screening: Walk-through metal detectors, millimeter-wave scanners, explosive trace detection, and K9 units with biometric credential verification.",
                    "Real-Time Threat Detection: AI video analytics identifying abandoned objects, aggressive behaviors, unauthorized access, and crowd crush risks with sub-second alerting.",
                    "Incident Response Protocols: Coordinated lockdown procedures, medical emergency response, evacuation management, and media containment strategies."
                ],
                scenarios: [
                    "Airports and transportation hubs with high passenger volumes",
                    "Convention centers hosting controversial speakers or topics",
                    "Stadiums during high-rivalry matches or championship events",
                    "Exhibition halls displaying high-value merchandise or technology"
                ]
            },
            {
                title: "Post-Event Intelligence & Continuous Improvement",
                capabilities: [
                    "Comprehensive Incident Analysis: Forensic video review, timeline reconstruction, root cause analysis, and lessons learned documentation.",
                    "Regulatory Reporting: Automated compliance reports for insurance, law enforcement, and regulatory authorities.",
                    "Performance Metrics: Response time analysis, personnel effectiveness ratings, and system uptime statistics."
                ],
                scenarios: [
                    "ISO certification and insurance audit requirements",
                    "Legal proceedings requiring evidence chain of custody",
                    "Future event planning and risk mitigation strategy development",
                    "Client executive briefings and board presentations"
                ]
            }
        ]
    },
    {
        icon: Network,
        title: "Enterprise Security Systems Integration",
        punchline: "Converged cyber-physical security platforms for intelligent threat management",
        topics: [
            {
                title: "Unified Security Operations Center (SOC/NOC)",
                capabilities: [
                    "Single-Pane Intelligence Platform: Integrated dashboard consolidating CCTV feeds, access control logs, intrusion alerts, cyber threat intelligence, and IoT sensor data with AI-powered correlation.",
                    "Automated Response Orchestration: Rule-based and machine learning-driven incident response including automatic lockdowns, evacuation announcements, law enforcement notification, and evidence preservation.",
                    "Predictive Analytics: Historical pattern analysis to forecast security incidents and optimize resource allocation."
                ],
                scenarios: [
                    "Global enterprises with 50+ locations requiring centralized oversight",
                    "Critical infrastructure operators managing distributed assets",
                    "Highly regulated industries requiring audit trails (healthcare, finance, defense)",
                    "Smart city initiatives integrating municipal security systems"
                ]
            },
            {
                title: "Enterprise Identity & Access Management",
                capabilities: [
                    "Universal Credentialing: Single biometric identity enabling access across multiple sites, buildings, and zones with role-based permissions and time-based restrictions.",
                    "Mobile Access Solutions: Smartphone-based credentials using Bluetooth Low Energy, NFC, and dynamic QR codes with anti-tailgating algorithms.",
                    "Visitor Management: Pre-registration portals, background check integration, temporary credential issuance, and escort protocols."
                ],
                scenarios: [
                    "Corporate campuses with 10,000+ employees and contractors",
                    "Multi-tenant commercial buildings with diverse security requirements",
                    "Healthcare facilities requiring HIPAA-compliant access logging",
                    "Government agencies with classified area segmentation"
                ]
            },
            {
                title: "AI-Enhanced Video Management Systems (VMS)",
                capabilities: [
                    "Cloud-Native Architecture: Scalable storage, edge computing for bandwidth optimization, and AI inference at the camera level for real-time analysis.",
                    "Behavioral Analytics: Loitering detection, unusual route identification, crowd counting, social distancing monitoring, and dwell time analysis.",
                    "Forensic Search: Natural language queries like 'show me all people wearing red jackets near the loading dock yesterday' with object and attribute recognition."
                ],
                scenarios: [
                    "Retail chains combating organized retail crime and shrinkage",
                    "Transportation hubs monitoring for suspicious packages or behaviors",
                    "Industrial facilities tracking safety compliance and unauthorized area access",
                    "Urban surveillance networks supporting law enforcement investigations"
                ]
            },
            {
                title: "Cyber-Physical Security Convergence",
                capabilities: [
                    "Integrated SIEM/SOAR Platform: Security Information and Event Management correlating IT security logs with physical security events to detect coordinated attacks.",
                    "OT/IT Network Segmentation: Industrial control system (ICS) and SCADA network isolation with anomaly detection preventing cyber-triggered physical incidents.",
                    "Supply Chain Security: Vendor risk management, firmware integrity verification, and secure update mechanisms for IoT devices."
                ],
                scenarios: [
                    "Smart manufacturing facilities vulnerable to industrial sabotage",
                    "Energy sector SCADA systems controlling power generation and distribution",
                    "Water treatment plants with networked control systems",
                    "Data centers where cyber breaches can trigger physical security failures"
                ]
            }
        ]
    },
    {
        icon: Server,
        title: "Mission-Critical Infrastructure Protection",
        punchline: "Hardened security architectures for zero-failure environments",
        topics: [
            {
                title: "Strategic Asset Protection Systems",
                capabilities: [
                    "Perimeter to Core Defense: Layered security from outer perimeter (radar, long-range thermal) through facility envelope (hardened barriers) to asset-level protection (vault security, ballistic enclosures).",
                    "Autonomous Patrol Systems: Ground robots, aerial drones, and marine vessels conducting scheduled patrols with anomaly reporting and automated threat response.",
                    "SCADA/ICS Cybersecurity: Industrial firewall deployment, network monitoring, zero-trust architecture, and air-gapped critical systems."
                ],
                scenarios: [
                    "Petroleum refineries and chemical plants with explosion risks",
                    "Electrical substations and transmission facilities",
                    "International airports and seaports with terrorism vulnerabilities",
                    "Nuclear facilities requiring NRC-compliant security programs"
                ]
            },
            {
                title: "Business Continuity & Resilience Engineering",
                capabilities: [
                    "Redundant Systems Architecture: N+1 power supplies, failover communication networks, backup command centers, and geographically distributed data replication.",
                    "Disaster Recovery Protocols: Documented incident response plans, regular drills and simulations, mutual aid agreements, and crisis communication frameworks.",
                    "Supply Chain Resilience: Dual sourcing for critical components, strategic stockpiling, and vendor alternate identification."
                ],
                scenarios: [
                    "Financial institutions requiring 99.999% uptime for trading operations",
                    "Healthcare systems where downtime impacts patient care",
                    "Manufacturing facilities with just-in-time production dependencies",
                    "Regions prone to hurricanes, earthquakes, floods, or wildfires"
                ]
            },
            {
                title: "Classified & High-Security Zone Management",
                capabilities: [
                    "Compartmented Access Control: SCIF-compliant spaces with multi-person access rules, mantrap vestibules, and Faraday cage RF shielding.",
                    "Behavioral Biometrics: Keystroke dynamics, mouse movement patterns, and gait analysis detecting compromised credentials or insider threats.",
                    "Continuous Monitoring: 24/7 guard presence, visual observation requirements, and two-person integrity protocols."
                ],
                scenarios: [
                    "Defense contractors handling classified programs (Top Secret/SCI)",
                    "Government agencies with national security responsibilities",
                    "Legal firms protecting attorney-client privileged materials",
                    "Research institutions developing proprietary intellectual property"
                ]
            }
        ]
    },
    {
        icon: ShieldCheck,
        title: "Strategic Security Consulting & Advisory Services",
        punchline: "C-suite guidance for enterprise-wide security transformation",
        topics: [
            {
                title: "Threat Intelligence & Risk Advisory",
                capabilities: [
                    "Geopolitical Risk Analysis: Country risk ratings, political instability forecasting, sanctions compliance, and supply chain vulnerability mapping.",
                    "Cyber-Physical Threat Modeling: Attack tree analysis, threat actor profiling (nation-state, organized crime, hacktivists), and scenario-based planning.",
                    "Competitive Intelligence: Dark web monitoring for credential leaks, brand impersonation, and intellectual property theft.",
                    "Red Team Assessments: Authorized penetration testing of physical and cyber defenses with executive-level debriefings."
                ],
                scenarios: [
                    "M&A due diligence uncovering target company security liabilities",
                    "International expansion into emerging markets with corruption risks",
                    "Organizations facing nation-state espionage or advanced persistent threats",
                    "High-profile companies with increased attack surface from public visibility"
                ]
            },
            {
                title: "Regulatory Compliance & Governance",
                capabilities: [
                    "Framework Implementation: ISO 27001, NIST Cybersecurity Framework, NERC CIP, HIPAA, GDPR, PCI DSS, and SOC 2 certification support.",
                    "Ethical AI Governance: Bias detection in AI systems, explainability frameworks, and privacy-preserving analytics.",
                    "Policy Development: Comprehensive security policies, standard operating procedures, and incident response playbooks.",
                    "Audit Readiness: Gap assessments, remediation planning, and continuous compliance monitoring."
                ],
                scenarios: [
                    "Healthcare organizations protecting electronic health records",
                    "Financial services firms handling payment card data",
                    "Cloud service providers seeking SOC 2 Type II attestation",
                    "Government contractors requiring CMMC certification"
                ]
            },
            {
                title: "Enterprise Security Architecture & Transformation",
                capabilities: [
                    "Security Master Planning: Multi-year roadmaps aligning security investments with business strategy and risk appetite.",
                    "Smart Campus Design: Integrated building management systems, IoT sensor networks, and occupant experience optimization balanced with security requirements.",
                    "Technology Evaluation: Vendor selection, proof-of-concept testing, and total cost of ownership analysis."
                ],
                scenarios: [
                    "Smart city initiatives integrating public safety, transportation, and utilities",
                    "New construction projects embedding security by design principles",
                    "Digital transformation programs modernizing legacy security systems",
                    "Post-merger integration harmonizing disparate security platforms"
                ]
            },
            {
                title: "Executive Protection & Close Protection Services",
                capabilities: [
                    "Threat Assessment: Social media monitoring, background checks on potential threats, and travel risk analysis for domestic and international itineraries.",
                    "Close Protection Teams: Armed and unarmed executive protection specialists with defensive driving, medical response, and tactical evacuation training.",
                    "Secure Transportation: Armored vehicles, advance route reconnaissance, counter-surveillance detection, and decoy vehicle tactics.",
                    "Digital Security: Personal device hardening, secure communication platforms, and identity theft monitoring."
                ],
                scenarios: [
                    "Fortune 500 CEOs with high public profiles or controversial business positions",
                    "Diplomats and government officials in hostile or high-crime environments",
                    "Celebrities and entertainers facing stalking or credible threats",
                    "Family security for ultra-high-net-worth individuals during international travel"
                ]
            }
        ]
    },
    {
        icon: AlertTriangle,
        title: "All-Hazards Emergency Response Capabilities",
        punchline: "Rapid mobilization for crisis situations threatening life safety and business continuity",
        topics: [
            {
                title: "Physical Threat & Active Violence Response",
                capabilities: [
                    "Immediate Action Teams: Armed responders trained in active shooter response, hostage rescue, and medical trauma care arriving on-site within minutes.",
                    "Evacuation Management: Predetermined assembly points, personnel accountability systems, and transportation coordination for mass evacuation.",
                    "Safe Room Protocols: Hardened refuge areas with communications, emergency supplies, and reinforced doors for shelter-in-place scenarios."
                ],
                scenarios: [
                    "Workplace violence incidents including active shooters or armed intruders",
                    "Terror attacks on soft targets (shopping malls, hotels, entertainment venues)",
                    "Natural disasters requiring immediate evacuation (floods, wildfires, tornados)",
                    "Chemical spills or industrial accidents with hazardous material exposure"
                ]
            },
            {
                title: "Cyber Incident Response & Digital Forensics",
                capabilities: [
                    "24/7 Incident Response Hotline: Immediate triage, threat containment, and forensic evidence preservation within 1 hour of notification.",
                    "Ransomware Remediation: Network isolation, malware analysis, decryption support, and negotiation coordination with threat actors.",
                    "Forensic Investigation: Chain of custody evidence collection, memory capture, log analysis, and expert witness testimony support.",
                    "Recovery Operations: System restoration, backup validation, and lessons learned documentation."
                ],
                scenarios: [
                    "Data breaches exposing customer personally identifiable information",
                    "Ransomware attacks encrypting critical business systems",
                    "Insider threat investigations involving data exfiltration",
                    "Business email compromise resulting in fraudulent wire transfers"
                ]
            },
            {
                title: "Coordinated Hybrid Threat Management",
                capabilities: [
                    "Unified Command Structure: Integration of physical security, IT security, legal, communications, and executive leadership during complex incidents.",
                    "Scenario-Based Playbooks: Pre-planned response procedures for cyber-enabled physical attacks such as compromised access control or surveillance systems.",
                    "Cross-Domain Analysis: Correlation of physical and cyber indicators to detect coordinated multi-vector attacks."
                ],
                scenarios: [
                    "Nation-state attacks targeting critical infrastructure (Stuxnet-style incidents)",
                    "Terrorist use of cyber capabilities to disable security systems before physical attack",
                    "Extortion schemes threatening both data release and physical harm",
                    "Insider threats with access to both IT systems and sensitive physical areas"
                ]
            }
        ]
    },
    {
        icon: Leaf,
        title: "Emerging Security Domains & Future-Ready Capabilities",
        punchline: "Next-generation solutions for evolving threats and opportunities",
        topics: [
            {
                title: "Environmental & Climate Security",
                capabilities: [
                    "Renewable Energy Security: Solar-powered surveillance systems, wind turbine anti-theft protection, and microgrid monitoring for energy-independent installations.",
                    "Wildfire Detection: AI-powered smoke and heat detection with early warning systems enabling 15-30 minute advance notification.",
                    "Climate Risk Modeling: Flood zone mapping, sea level rise projections, and extreme weather impact assessments."
                ],
                scenarios: [
                    "Remote mining operations in water-scarce or environmentally sensitive areas",
                    "Forestry operations with wildfire risks and illegal logging threats",
                    "Coastal facilities vulnerable to hurricanes and storm surge",
                    "Agricultural operations facing climate-driven security challenges"
                ]
            },
            {
                title: "Supply Chain Security & Anti-Counterfeiting",
                capabilities: [
                    "Blockchain Track-and-Trace: Immutable ledgers recording custody transfers, temperature excursions, and tampering attempts from manufacture through delivery.",
                    "Authentication Technologies: RFID tags, DNA markers, holographic seals, and smartphone-readable verification enabling consumers to validate product authenticity.",
                    "Supplier Risk Management: Financial health monitoring, geopolitical risk scoring, and alternative source identification."
                ],
                scenarios: [
                    "Pharmaceutical supply chains preventing counterfeit drug infiltration",
                    "Luxury goods authentication combating grey market diversion",
                    "Electronics manufacturing preventing component substitution",
                    "E-commerce platforms ensuring marketplace seller legitimacy"
                ]
            },
            {
                title: "Advanced Crowd Analytics & Mass Gathering Safety",
                capabilities: [
                    "Real-Time Density Mapping: Overhead cameras and mobile device signals creating heat maps identifying dangerous crowd concentrations.",
                    "Predictive Evacuation Modeling: Agent-based simulations optimizing exit routes and identifying bottlenecks before emergencies occur.",
                    "Sentiment Analysis: Audio monitoring detecting changes in crowd mood indicating potential violence or panic."
                ],
                scenarios: [
                    "Religious pilgrimages with millions of participants in confined spaces",
                    "Music festivals and outdoor concerts with general admission standing areas",
                    "Political demonstrations with potential for escalation",
                    "Stadium evacuations following threats or medical emergencies"
                ]
            }
        ]
    },
    {
        icon: Plane,
        title: "Autonomous Systems & Robotics Security",
        punchline: "Next-generation unmanned security solutions for comprehensive aerial and ground-based protection",
        topics: [
            {
                title: "Advanced Drone Surveillance Operations",
                capabilities: [
                    "Autonomous Aerial Patrols: AI-powered drones with thermal imaging, night vision, and long-range zoom capabilities conducting scheduled perimeter sweeps with automatic anomaly detection.",
                    "Swarm Intelligence: Coordinated multi-drone operations with distributed sensing, collaborative threat tracking, and redundant coverage ensuring no blind spots.",
                    "Real-Time Analytics: Edge computing on drones for instant threat classification, license plate recognition, and facial identification without cloud latency.",
                    "Weather-Resistant Operations: All-weather capable platforms with wind resistance, rain protection, and temperature-hardened components for 24/7 deployment."
                ],
                scenarios: [
                    "Large industrial complexes requiring perimeter monitoring across hundreds of acres",
                    "Border security operations in remote or difficult terrain",
                    "Critical infrastructure protection for power plants and refineries",
                    "Event security providing aerial oversight of mass gatherings"
                ]
            },
            {
                title: "Ground-Based Robotics & Autonomous Patrol",
                capabilities: [
                    "Mobile Security Robots: Autonomous ground vehicles with 360° cameras, thermal sensors, and two-way communication for indoor and outdoor patrols.",
                    "Intelligent Navigation: SLAM (Simultaneous Localization and Mapping) technology enabling autonomous navigation in complex environments with obstacle avoidance.",
                    "Threat Response: Integrated sirens, strobe lights, and automated alert systems with remote human intervention capabilities.",
                    "Continuous Operation: Self-charging stations enabling 24/7 autonomous patrols with minimal human supervision."
                ],
                scenarios: [
                    "Warehouse and logistics facilities requiring overnight security",
                    "Corporate campuses with large outdoor areas and parking structures",
                    "Data centers needing continuous interior monitoring",
                    "Manufacturing facilities with hazardous areas limiting human access"
                ]
            },
            {
                title: "Integrated Autonomous Security Ecosystem",
                capabilities: [
                    "Unified Command Platform: Single interface controlling both aerial and ground autonomous systems with coordinated response protocols.",
                    "AI-Driven Deployment: Machine learning algorithms optimizing patrol routes, scheduling, and resource allocation based on historical threat data.",
                    "Human-Robot Collaboration: Seamless handoff between autonomous systems and human security personnel for threat escalation.",
                    "Regulatory Compliance: FAA Part 107 certified operations, privacy-preserving analytics, and comprehensive audit logging."
                ],
                scenarios: [
                    "Smart city initiatives integrating municipal security infrastructure",
                    "Multi-site enterprises requiring centralized autonomous security management",
                    "High-security facilities combining manned and unmanned security layers",
                    "Emergency response scenarios requiring rapid autonomous reconnaissance"
                ]
            }
        ]
    }
];

export const competitiveDifferentiators = [
    {
        title: "Integrated Intelligence Platform",
        description: "Proprietary AI systems correlating physical, cyber, and human intelligence sources for predictive threat management that keeps you 3-5 steps ahead of adversaries."
    },
    {
        title: "Global Response Network",
        description: "Rapid deployment capabilities to 180+ countries with pre-positioned equipment, local partnerships, and 24/7 multilingual operations center."
    },
    {
        title: "Proven Mission-Critical Track Record",
        description: "Trusted by Fortune 100 enterprises, national governments, and critical infrastructure operators protecting assets valued at $500B+."
    },
    {
        title: "Technology Leadership",
        description: "Continuous R&D investment in autonomous systems, quantum-resistant cryptography, and next-generation biometrics ensuring future-proof security architectures."
    },
    {
        title: "Compliance-First Approach",
        description: "Certified compliance with international standards (ISO 27001, SOC 2, NIST 800-53) and ethics-by-design AI governance preventing regulatory penalties."
    },
    {
        title: "Human-Machine Teaming",
        description: "Optimized balance of elite human expertise enhanced by AI decision support—not replacement—ensuring judgment and context remain central."
    }
];

export const industriesServed = [
    {
        title: "Critical Infrastructure",
        items: "Energy, Oil & Gas, Utilities, Water Treatment, Telecommunications, Transportation"
    },
    {
        title: "Government & Defense",
        items: "Federal Agencies, Military Installations, Law Enforcement, Intelligence Services, Diplomatic Missions"
    },
    {
        title: "Financial Services",
        items: "Banking, Insurance, Investment Management, Cryptocurrency Exchanges, Payment Processors"
    },
    {
        title: "Healthcare & Life Sciences",
        items: "Hospitals, Pharmaceutical Manufacturing, Research Laboratories, Clinical Trials"
    },
    {
        title: "Technology & Innovation",
        items: "Data Centers, Cloud Providers, Semiconductor Fabs, R&D Facilities, AI Companies"
    },
    {
        title: "Retail & Hospitality",
        items: "Shopping Centers, Hotels, Casinos, Entertainment Venues, E-commerce Logistics"
    },
    {
        title: "Manufacturing & Industrial",
        items: "Automotive, Aerospace, Chemicals, Food & Beverage, Electronics"
    },
    {
        title: "Real Estate & Smart Cities",
        items: "Commercial Properties, Mixed-Use Developments, Urban Infrastructure, Public Spaces"
    }
];

export const engagementModels = [
    {
        title: "Managed Services",
        description: "Fully outsourced security operations with dedicated personnel, technology, and management"
    },
    {
        title: "Staff Augmentation",
        description: "Certified security professionals integrated into client teams filling capability gaps"
    },
    {
        title: "Consulting Projects",
        description: "Time-bound advisory engagements for strategy, assessment, and transformation initiatives"
    },
    {
        title: "Technology Solutions",
        description: "Platform licensing, integration services, and managed detection and response"
    },
    {
        title: "Hybrid Models",
        description: "Customized combinations addressing unique organizational requirements"
    }
];

// ============================================================================
// NEW: Comprehensive Multi-Domain Security Capabilities
// ============================================================================

export const capabilityPhilosophy = {
    title: "Our Capability Philosophy",
    description: "We deliver integrated, intelligence-led, AI-driven private security services designed to protect people, assets, infrastructure, logistics, and reputation across Land, Air, Rail, and Maritime domains. Our operating model seamlessly scales from regional deployments to nationwide and cross-border operations, combining trained security personnel, autonomous systems, drones, analytics, and legal-grade compliance frameworks."
};

export interface SecurityDomain {
    icon: any  ;
    title: string;
    description: string;
    services: {
        title: string;
        items: string[];
    }[];
}

export const securityDomains: SecurityDomain[] = [
    {
        icon: Shield,
        title: "Surface & Ground Security Operations",
        description: "Comprehensive protection for urban, industrial, and infrastructure environments with manned guarding, AI-enabled perimeter protection, and mobile response services.",
        services: [
            {
                title: "Manned Guarding & Patrol Services",
                items: [
                    "Trained armed and unarmed security personnel",
                    "Static guarding, mobile patrols, and rapid response units",
                    "Residential, commercial, industrial, SEZ, and infrastructure security"
                ]
            },
            {
                title: "AI-Enabled Perimeter Protection",
                items: [
                    "Smart CCTV with real-time analytics",
                    "Intrusion, loitering, and tailgating detection",
                    "Intelligent access control and visitor management"
                ]
            },
            {
                title: "Mobile Response & Escort Services",
                items: [
                    "Vehicle-mounted security teams",
                    "Route-secured movement for assets and personnel",
                    "Incident-based dynamic deployment"
                ]
            }
        ]
    },
    {
        icon: Train,
        title: "Rail, Metro & Transit Security",
        description: "Specialized security for railway stations, metro networks, and transit corridors with comprehensive surveillance and crowd management capabilities.",
        services: [
            {
                title: "Station & Yard Security",
                items: [
                    "Platform, depot, and yard guarding",
                    "Passenger flow monitoring and crowd control",
                    "Theft, vandalism, and sabotage prevention"
                ]
            },
            {
                title: "Rail Corridor Surveillance",
                items: [
                    "Drone-based aerial inspection of tracks and perimeters",
                    "AI detection of obstructions, trespassers, and anomalies",
                    "Rapid response coordination with ground teams"
                ]
            },
            {
                title: "Transit Risk Intelligence",
                items: [
                    "Peak-hour risk modeling",
                    "Event-driven surge deployment",
                    "Emergency evacuation support"
                ]
            }
        ]
    },
    {
        icon: Ship,
        title: "Maritime, Port & Ship Security",
        description: "Complete maritime security solutions for ports, harbors, vessels, and coastal installations with advanced monitoring and threat detection.",
        services: [
            {
                title: "Port & Harbor Security",
                items: [
                    "Perimeter and waterside surveillance",
                    "Access control for cargo yards and terminals",
                    "Anti-theft, smuggling, and sabotage prevention"
                ]
            },
            {
                title: "Vessel & Ship Security",
                items: [
                    "Armed and unarmed ship security officers",
                    "Voyage-based risk assessments",
                    "Onboard surveillance and incident protocols"
                ]
            },
            {
                title: "Maritime Drone & Sensor Monitoring",
                items: [
                    "Coastal and harbor drone patrols",
                    "Unauthorized vessel detection",
                    "Integration with AIS and port intelligence systems"
                ]
            }
        ]
    },
    {
        icon: Plane,
        title: "Airspace, Aviation & Aerial Security",
        description: "Advanced aerial surveillance and aviation security including autonomous drone operations, counter-drone systems, and airport protection.",
        services: [
            {
                title: "Aerial Surveillance & Monitoring",
                items: [
                    "Autonomous drone patrols for large facilities and corridors",
                    "Real-time video, thermal, and night surveillance",
                    "Rapid situational awareness for inaccessible areas"
                ]
            },
            {
                title: "Counter-Drone & Airspace Protection",
                items: [
                    "Detection of unauthorized UAVs",
                    "Risk classification and escalation workflows",
                    "Integration with counter-UAS systems where permitted"
                ]
            },
            {
                title: "Aviation Asset Protection",
                items: [
                    "Airport perimeter and landside security",
                    "Hangar, cargo, and ground operations monitoring",
                    "VIP aviation movement coordination"
                ]
            }
        ]
    },
    {
        icon: TruckIcon,
        title: "Logistics, Fleet & High-Value Asset Security",
        description: "Intelligent fleet management and secure logistics operations with real-time tracking, route intelligence, and convoy protection.",
        services: [
            {
                title: "Fleet Security Management",
                items: [
                    "Real-time vehicle tracking and route intelligence",
                    "Driver behavior and vehicle health analytics",
                    "Geo-fenced route enforcement"
                ]
            },
            {
                title: "Cash & High-Value Logistics",
                items: [
                    "Cash-in-Transit (CIT) operations",
                    "Escort and convoy security",
                    "Tamper detection and chain-of-custody assurance"
                ]
            },
            {
                title: "Drone-Assisted Convoy Protection",
                items: [
                    "Aerial overwatch for high-risk routes",
                    "Threat anticipation and rerouting",
                    "Incident response coordination"
                ]
            }
        ]
    },
    {
        icon: UserCheck,
        title: "VIP, Executive & Close Protection",
        description: "Professional personal protection services for executives, diplomats, and high-profile individuals with comprehensive threat intelligence and secure movement planning.",
        services: [
            {
                title: "Personal Protection Services",
                items: [
                    "Close protection officers for executives, diplomats, and dignitaries",
                    "Residential and workplace security",
                    "Secure travel planning and movement control"
                ]
            },
            {
                title: "Threat Intelligence & Advance Work",
                items: [
                    "Pre-event and pre-travel reconnaissance",
                    "Route risk analysis and contingency planning",
                    "Secure motorcade operations"
                ]
            },
            {
                title: "Discreet, Professional & Scalable",
                items: [
                    "Low-profile protection models",
                    "International coordination support",
                    "Event-linked VIP security integration"
                ]
            }
        ]
    },
    {
        icon: Users2,
        title: "Event, Crowd & Public Gathering Security",
        description: "Comprehensive event security management with crowd intelligence, access control, and emergency response capabilities for gatherings of all sizes.",
        services: [
            {
                title: "Event Security Planning & Execution",
                items: [
                    "Concerts, sports events, political rallies, religious gatherings",
                    "Crowd flow modeling and access zoning",
                    "Entry screening and perimeter enforcement"
                ]
            },
            {
                title: "Crowd Intelligence & Safety",
                items: [
                    "Real-time crowd density analytics",
                    "Drone-based aerial monitoring",
                    "Early detection of panic, unrest, or stampede risks"
                ]
            },
            {
                title: "Emergency & Crisis Response",
                items: [
                    "Medical and evacuation coordination",
                    "Incident containment and de-escalation",
                    "Post-event reporting and compliance documentation"
                ]
            }
        ]
    },
    {
        icon: Factory,
        title: "Industrial Safety & Labour Unrest Management",
        description: "Specialized industrial security and safety management including labor dispute handling, hazard detection, and business continuity protection.",
        services: [
            {
                title: "Industrial & Infrastructure Safety",
                items: [
                    "Factory, refinery, power plant, and campus security",
                    "Unsafe behavior and PPE compliance monitoring",
                    "Hazard detection and emergency response"
                ]
            },
            {
                title: "Labour Unrest & Dispute Management",
                items: [
                    "Early warning indicators for strikes and protests",
                    "Crowd behavior analysis and containment planning",
                    "Protection of critical assets during unrest"
                ]
            },
            {
                title: "Business Continuity Protection",
                items: [
                    "Controlled access and phased operations",
                    "Management escort and safe corridor creation",
                    "Coordination with legal and compliance teams"
                ]
            }
        ]
    }
];

export const commandIntelligence = {
    title: "Command, Intelligence & Technology Backbone",
    description: "Unified security operations powered by AI-driven decision support and scalable architecture",
    features: [
        {
            icon: Server,
            title: "Integrated Security Operations Centers (SOC)",
            description: "Regional and national command centers with unified view of people, vehicles, drones, and facilities"
        },
        {
            icon: Brain,
            title: "AI-Driven Decision Support",
            description: "Predictive risk modeling and automated escalation with response recommendations"
        },
        {
            icon: Network,
            title: "Scalable & Modular Architecture",
            description: "Regional → national → cross-border scalability with API-ready integration"
        }
    ]
};

export const valueProposition = {
    title: "Our Value Proposition",
    points: [
        {
            title: "Technology-First Security",
            description: "Advanced AI and automation, not just manpower-only guarding"
        },
        {
            title: "Proactive Risk Prevention",
            description: "Predictive intelligence and prevention, not reactive response"
        },
        {
            title: "Legally Defensible Operations",
            description: "Court-admissible documentation and auditable security outcomes"
        },
        {
            title: "Seamless Scalability",
            description: "From single site to national footprint with consistent quality"
        }
    ]
};
