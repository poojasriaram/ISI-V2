import { BlogPost } from "@/types/blog";

export const HEALTHCARE_BLOGS: BlogPost[] = [
  {
    id: "disaster-vulnerability-management-in-healthcare",
    slug: "disaster-vulnerability-management-in-healthcare",
    title: "Disaster Vulnerability Management in Healthcare",
    subtitle: "A Comprehensive Guide for Hospital Leadership, Security Professionals & Emergency Planners",
    excerpt: "When disaster strikes a hospital, secondary security and operational breakdowns often create deadlier risks than the initial event. Discover how integrated security and emergency management build true hospital resilience.",
    category: "Disaster Management & Preparedness",
    tags: ["Healthcare Security", "Disaster Resilience", "Emergency Preparedness", "Hospital Operations", "Risk Management"],
    author: {
      name: "Rajkumar Sankaran",
      role: "Executive Director, ISI India",
      avatar: "/leaders/Rajkumar ED.jpeg",
      bio: "Executive Director leading strategic growth across manpower solutions, security services, and facility management with 25+ years experience in operations, compliance, and risk leadership."
    },
    publishedAt: "August 2026",
    readTime: "12 min read",
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    heroImageAlt: "Hospital exterior at night with emergency vehicles outside the ED entrance.",
    featured: true,
    sections: [
      {
        id: "executive-summary",
        title: "1.1 Executive Summary",
        content: [
          "At 2:15 a.m., a fire alarm activates on the third floor of a large multi-specialty hospital. Within minutes, the situation escalates beyond the affected zone. Ambulatory patients move toward exits. Relatives crowd the corridors seeking information. Nurses scramble to relocate bed-bound and ventilator-dependent patients. Ambulances continue arriving at the emergency department. Staff push critical equipment through suddenly congested routes. Security personnel must simultaneously restrict unauthorized access, protect evacuation corridors, and guide external emergency responders to the affected zone.",
          "The fire itself is one emergency. Everything that happens around it creates a second, often deadlier, layer of risk.",
          "This is the central challenge of disaster vulnerability management in healthcare. A hospital cannot treat a disaster as an isolated fire, flood, gas leak, power failure, structural collapse, or mass-casualty event. Because healthcare facilities operate 24/7 and house vulnerable patients, critical medical infrastructure, controlled clinical areas, and thousands of people at any given hour, a single disruption can rapidly cascade into a security, operational, and clinical crisis.",
          "The progression is predictable and well-documented:",
          "Professional healthcare security operations provide a critical layer of control across this entire chain. Security personnel maintain access discipline, protect critical areas, control movement, preserve emergency routes, support evacuation, manage crowds, and coordinate with hospital leadership and external emergency teams. Technology — CCTV, access-control systems, alarms, communication networks, and centralized monitoring — strengthens these capabilities. However, technology alone cannot manage the human complexity of a hospital under duress. Effectiveness ultimately depends on trained personnel, clear procedures, active supervision, and inter-departmental coordination.",
          "For hospital leadership, disaster vulnerability management must be viewed not as a compliance exercise but as an operational resilience discipline in which safety, security, facilities management, clinical operations, and business continuity function as an integrated system."
        ],
        bullets: [
          "Disaster → Operational Disruption → Crowd Movement → Access-Control Failure",
          "Patient Vulnerability → Emergency-Route Obstruction → Security Breach",
          "Clinical Disruption → Business-Continuity Risk"
        ],
        stats: [
          {
            value: "1.2%–1.7%",
            label: "of global GDP is lost annually to natural disasters — a portion falling directly on health infrastructure.",
            source: "PAHO/WHO"
          },
          {
            value: "Hundreds",
            label: "of hospitals and health facilities are damaged or destroyed by natural disasters every year.",
            source: "WHO / PMC"
          },
          {
            value: "< 4%",
            label: "of a new hospital's total construction cost is needed for disaster-resilient mitigation from the start.",
            source: "WHO Safe Hospitals Initiative"
          }
        ]
      },
      {
        id: "vulnerabilities-multiply",
        title: "1.2 When Disaster Strikes, Hospital Vulnerabilities Multiply",
        content: [
          "Consider a hospital experiencing a sudden electrical failure during heavy rainfall. The emergency department is already at capacity. Elevators stop. Access-control systems shift to fail-safe or backup modes. Visitors approach security desks in confusion. Patients on upper floors cannot be moved through normal routes. Facility teams race to restore critical systems while the ED continues receiving new patients.",
          "Then secondary problems emerge. Family members push through restricted areas trying to locate loved ones. Staff carrying emergency equipment encounter crowded corridors. A delivery vehicle blocks part of an emergency access route. Security officers must simultaneously maintain perimeter control, assist with patient movement, and prevent unauthorized access to sensitive clinical zones.",
          "The original incident was a utility failure. The resulting situation is a security, safety, patient-flow, and continuity problem.",
          "This illustrates why hospital disaster preparedness cannot stop at emergency response plans. Leadership must understand how a disruption fundamentally alters human behaviour inside the facility. During normal operations, access controls, visitor procedures, parking rules, restricted zones, and emergency routes function within predictable conditions. During a disaster, every one of those assumptions collapses.",
          "People become anxious. Movement patterns shift. Normal entrances become unavailable. Staff are reassigned. Clinical priorities change. Relatives demand access. Emergency responders require rapid entry. Critical areas need heightened protection. A hospital's security function must adapt to all of these conditions simultaneously — without obstructing the clinical response."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000",
          alt: "Infographic showing how a single disruption cascades into crowd, access, and security failures.",
          caption: "Cascading Disruption Flow: Disaster → Utility Failure → Access Failure → Security Breach"
        }
      },
      {
        id: "uniquely-vulnerable",
        title: "1.3 Why Healthcare Facilities Are Uniquely Vulnerable",
        content: [
          "Hospitals are fundamentally different from commercial buildings, warehouses, or office complexes."
        ],
        bullets: [
          "They operate 24 hours a day, 365 days a year, with no 'closing time' to evacuate.",
          "They house patients with varying levels of mobility and dependency — from ambulatory outpatients to sedated ICU patients on ventilators.",
          "They rely on interconnected clinical and utility systems: medical gas pipelines, oxygen plants, HVAC, electrical grids, data networks, pharmacy cold chains, and laboratory systems.",
          "A single campus may contain emergency departments, ICUs, operating theatres, imaging suites, pharmacies, blood banks, laboratories, kitchens, data centres, parking structures, and administrative offices — each with distinct security and safety requirements."
        ],
        callout: {
          type: "warning",
          text: "The Hospital Security Paradox: The facility must remain open and accessible to emergency arrivals while simultaneously becoming more controlled against unauthorized access and chaos."
        }
      },
      {
        id: "understanding-vulnerability",
        title: "1.4 Understanding Disaster Vulnerability in Healthcare",
        content: [
          "Disaster vulnerability is the degree to which a healthcare facility's people, infrastructure, operations, and critical services can be affected when a disruptive event occurs. Crucially, vulnerability is not determined by the disaster alone. Two hospitals may experience the same flood, fire, or power failure and suffer vastly different consequences. The difference lies in preparedness, physical design, communication systems, staff readiness, access control, emergency procedures, and inter-agency coordination.",
          "For security and operations leadership, vulnerability assessment should examine interconnected questions:"
        ],
        bullets: [
          "If an emergency entrance becomes congested, can emergency vehicles still reach the hospital?",
          "If an evacuation begins, can security personnel identify which routes are safe and which areas must remain restricted?",
          "If power fails, how will access-controlled doors, CCTV systems, and communication mechanisms operate?",
          "If hundreds of relatives arrive after a mass-casualty incident, how will the hospital prevent uncontrolled movement?",
          "If a clinical area must be isolated, who establishes and enforces the perimeter?"
        ]
      },
      {
        id: "security-situation-transition",
        title: "1.5 When a Disaster Becomes a Security Situation",
        content: [
          "The transition from disaster to security incident often happens within minutes. Consider an ICU evacuation. Clinical staff focus on moving patients safely. Relatives attempt to follow. Corridors become congested. Equipment must move between departments. External emergency responders arrive.",
          "Security personnel must answer practical questions in real time: Who is authorized to enter? Which route must remain clear? Where should visitors wait? Which areas must be isolated? How will responders reach the required department? How can staff move without obstruction?",
          "This is why security officers require healthcare-specific training. A generic guarding model focused on gates and routine access control is insufficient for disaster conditions. The security workforce must understand hospital layouts, critical departments, emergency exits, evacuation routes, restricted areas, escalation protocols, and communication chains. Their role shifts from guarding an asset to supporting the continuity of a life-saving service."
        ]
      },
      {
        id: "guarding-role",
        title: "1.6 The Role of Professional Security Guarding in Hospital Disaster Response",
        content: [
          "Trained security personnel provide the human operational layer that connects written emergency procedures with real-time activity on the ground. During a disaster, they simultaneously:"
        ],
        bullets: [
          "Establish controlled perimeters around affected areas",
          "Manage access points and protect emergency routes",
          "Guide patients, staff, and visitors toward designated safe locations",
          "Prevent unauthorized movement into critical clinical zones",
          "Maintain ambulance lanes and vehicle segregation during mass-casualty events",
          "Establish controlled waiting areas for relatives",
          "Support evacuation and assembly procedures",
          "Assist vulnerable individuals as procedures require",
          "Report emerging hazards and maintain communication with the hospital command structure"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
          alt: "Security officer guiding staff and a patient bed through a hospital corridor during an evacuation.",
          caption: "Active security response: maintaining order, clear routes, and patient safety during evacuation."
        }
      },
      {
        id: "coordinating-operations",
        title: "1.8 Coordinating Security with Hospital Operations",
        content: [
          "Security cannot operate in isolation during a hospital disaster. The most effective response requires tight coordination among security, clinical operations, facilities, administration, emergency response, and hospital leadership."
        ],
        table: {
          title: "Inter-Departmental Responsibilities During Hospital Emergencies",
          columns: [
            { key: "function", header: "Function" },
            { key: "responsibility", header: "Responsibility" }
          ],
          rows: [
            { function: "Clinical Team", responsibility: "Determines patient priorities, triage, and medical transfer needs." },
            { function: "Facilities Team", responsibility: "Addresses infrastructure, utilities, structural safety, and emergency power." },
            { function: "Emergency Responders", responsibility: "Manages the immediate hazard (fire, hazmat, structural collapse)." },
            { function: "Hospital Leadership", responsibility: "Makes operational, resource allocation, and continuity decisions." },
            { function: "Security Team", responsibility: "Maintains controlled movement, access discipline, perimeter, and emergency routes." }
          ]
        }
      },
      {
        id: "major-disasters-history",
        title: "Major Disasters That Have Struck Healthcare Facilities Worldwide",
        subtitle: "Key Historical Case Studies & Incident Analysis",
        content: [
          "Disasters directly impacting healthcare facilities highlight severe hazard vulnerabilities and critical lessons for modern hospital leadership:"
        ],
        table: {
          title: "Catastrophic Healthcare Incidents & Operational Lessons",
          columns: [
            { key: "incident", header: "Incident" },
            { key: "location", header: "Location / Year" },
            { key: "impact", header: "Impact & Key Lesson" }
          ],
          rows: [
            { incident: "Hartford Hospital Fire", location: "Hartford, CT, USA – 1961", impact: "16 deaths. Fire spread through 10th-floor surgical wing; led to mandatory sprinklers & fire-rated construction." },
            { incident: "AMRI Hospital Fire", location: "Kolkata, India – Dec 2011", impact: "93 deaths. Basement fire, toxic smoke, blocked exits, non-functional alarms, lack of evacuation training." },
            { incident: "Ibn al-Khatib Explosion", location: "Baghdad, Iraq – Apr 2021", impact: "82+ deaths. Oxygen cylinder explosion; lack of sprinklers; ventilated patients could not be evacuated in time." },
            { incident: "Hurricane Katrina", location: "New Orleans, USA – Aug 2005", impact: "Flooding destroyed basement generators; 45+ deaths. Led to global mandates placing generators above flood level." },
            { incident: "Hurricane Sandy", location: "New York City, USA – Oct 2012", impact: "Power loss forced manual evacuation of ICU & neonatal patients down darkened stairwells." },
            { incident: "Beirut Port Explosion", location: "Beirut, Lebanon – Aug 2020", impact: "6 hospitals & 20+ clinics destroyed/damaged; 3 major hospitals rendered non-operational overnight." }
          ]
        }
      },
      {
        id: "preparedness-checklist",
        title: "Quick-Reference Hospital Disaster Preparedness Checklist",
        content: [
          "Leadership should use this operational checklist to audit hospital readiness regularly:"
        ],
        table: {
          title: "Hospital Disaster Vulnerability Audit Schedule",
          columns: [
            { key: "area", header: "Area" },
            { key: "action", header: "Action Item" },
            { key: "frequency", header: "Frequency" }
          ],
          rows: [
            { area: "Risk Assessment", action: "Full hazard & vulnerability assessment", frequency: "Annually + post-incident" },
            { area: "Emergency Operations Plan", action: "Review & update EOP and HICS assignments", frequency: "Annually + after drills" },
            { area: "Security Training", action: "Healthcare-specific emergency & de-escalation training", frequency: "Quarterly refreshers" },
            { area: "Fire & Access Safety", action: "Test fail-safe/fail-secure modes, overrides & sprinklers", frequency: "Monthly" },
            { area: "Emergency Routes", action: "Inspect ambulance lanes & evacuation paths for obstacles", frequency: "Weekly" },
            { area: "After-Action Review", action: "Document & resolve corrective actions from drills", frequency: "After every drill/incident" }
          ]
        }
      },
      {
        id: "conclusion",
        title: "Conclusion — The Difference Between Preparedness and Resilience",
        content: [
          "A disaster rarely respects the boundaries drawn in an emergency plan. A fire becomes a crowd-management problem. A flood becomes an access-control problem. A gas leak becomes an evacuation problem. A power failure becomes a life-support problem. A mass-casualty event becomes a perimeter and triage problem.",
          "The strategic question for hospital leadership is not simply: 'Are we prepared for a disaster?'",
          "It is: 'When a disaster disrupts normal hospital operations, can our people, our processes, our security systems, and our coordination mechanisms keep this hospital functioning safely — protecting every patient, clinician, visitor, and life entrusted to our care?'",
          "That is the difference between disaster preparedness and true healthcare resilience."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000",
          alt: "A hospital exterior in daylight, calm and orderly, symbolizing restored resilience.",
          caption: "True Healthcare Resilience: Restoring order, safety, and operational continuity after crisis."
        }
      }
    ]
  },

  {
    id: "cybersecurity-risks-in-healthcare",
    slug: "cybersecurity-risks-in-healthcare",
    title: "Cybersecurity Risks in Healthcare",
    subtitle: "A Comprehensive Guide to Cyber-Physical Security, Patient Safety & Hospital Operational Resilience",
    excerpt: "A cyber attack on a hospital does not stay on computers. Discover how digital system failures ripple into physical access control, CCTV monitoring, patient safety, and operational security.",
    category: "Cyber-Physical Security & Resilience",
    tags: ["Cybersecurity", "Hospital Infrastructure", "Patient Safety", "Access Control", "Ransomware", "Operational Resilience"],
    author: {
      name: "V. Varshithkumar",
      role: "Executive Director, ISI India",
      avatar: "/leaders/Varshithkumar ED.jpg",
      bio: "Executive Director leading initiatives focused on strengthening systems, compliance, and scalable growth. Holds M.Sc. Transport & Logistics (TUM Germany), B.Sc. Mechanical Engineering (SUNY), and LL.B."
    },
    publishedAt: "August 2026",
    readTime: "14 min read",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    heroImageAlt: "A hospital security operations centre monitoring systems during a developing cyber incident.",
    featured: false,
    sections: [
      {
        id: "executive-summary",
        title: "1. Executive Summary",
        content: [
          "It is 8:20 a.m. in a 400-bed multi-specialty hospital. The emergency department is filling rapidly. Ambulances are arriving, outpatient registration is active, and clinical teams are moving between departments. The hospital's IT team detects ransomware activity and begins isolating affected systems.",
          "Within minutes, clinicians report that several applications are unavailable. Some staff can no longer access electronic records. The visitor-management system stops responding. Security personnel notice that several CCTV feeds are no longer visible in the central monitoring room. Then another issue emerges: an electronic access-control system supporting a restricted clinical area is no longer operating normally.",
          "The security team cannot simply wait for IT to restore the system. Patients are still arriving. Visitors are still moving through the campus. Emergency responders still require access. Restricted clinical areas still need protection.",
          "The hospital now has two connected problems: The first is digital. The second is physical.",
          "The National Audit Office's review of the 2017 WannaCry attack on the NHS demonstrated this operational reality. At least 81 of 236 NHS trusts in England were affected, thousands of appointments and operations were cancelled, and emergency departments diverted patients.",
          "A resilient hospital is not one in which technology never fails. It is one in which essential healthcare and security functions can continue safely when technology is disrupted."
        ],
        stats: [
          {
            value: "460",
            label: "ransomware incidents against U.S. Healthcare in a single year — highest of any critical sector.",
            source: "FBI IC3"
          },
          {
            value: "$7.42M",
            label: "average global cost of a healthcare data breach — highest of any industry for 15 straight years.",
            source: "IBM / HIPAA Journal"
          },
          {
            value: "34–38%",
            label: "higher in-hospital mortality observed among admitted Medicare patients during ransomware attacks.",
            source: "Peer-Reviewed Hospital Research"
          }
        ]
      },
      {
        id: "expanded-security-perimeter",
        title: "2. The Digital Hospital Has Created a New Security Perimeter",
        content: [
          "The traditional hospital security perimeter was easy to visualize: Gates → Doors → Security Guards → CCTV → Restricted Areas.",
          "Modern hospitals depend on network infrastructure, electronic access control, CCTV video-management platforms, visitor management, alarm systems, building management systems, and electronic health records. A door depends on an electronic credential. A CCTV camera depends on a network connection.",
          "This creates an expanded cyber-physical security perimeter:",
          "A cybersecurity event affecting the network can potentially affect security systems connected to that network. The hospital must ask: Which physical security and clinical operations depend on IT, and what happens when those dependencies fail?"
        ],
        bullets: [
          "Digital Identity → Network Infrastructure → Enterprise Applications",
          "Electronic Security Systems → Physical Access Infrastructure",
          "On-ground Security Personnel → Clinical Operations & Patient Care"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
          alt: "Layered diagram of the expanded hospital security perimeter.",
          caption: "Expanded Cyber-Physical Perimeter: Integrating Digital Assets with Physical Security Controls."
        }
      },
      {
        id: "cyber-to-physical",
        title: "4. When a Cyber Incident Becomes a Physical Security Problem",
        content: [
          "The transition from cyber incident to physical security problem usually occurs through a chain of dependencies:"
        ],
        bullets: [
          "CCTV Disruption: Network failure → CCTV feeds dark → Reduced situational awareness → Increased manual physical patrols required.",
          "Access Control Failure: Network segment isolated → Door authentication offline → Manual verification needed → Entrance congestion & security pressure.",
          "Visitor Management Outage: Database unreachable → Manual paper registration → Slower processing → Lobby crowding & heightened tension."
        ],
        callout: {
          type: "info",
          text: "Core Cyber-Physical Principle: Technology-assisted security must be capable of transitioning seamlessly to human-led physical verification during digital outages."
        }
      },
      {
        id: "offline-fallbacks",
        title: "6. What Happens When Security Systems Go Offline?",
        content: [
          "When the Security Operations Centre (SOC) loses CCTV feeds, access control platforms, or digital visitor logs, security operations must shift immediately into defined degraded-operation modes."
        ],
        table: {
          title: "Security Fallback Modes During Technology Outages",
          columns: [
            { key: "system", header: "Security System" },
            { key: "fallback", header: "Manual Fallback Procedure" }
          ],
          rows: [
            { system: "CCTV / Video Feeds", fallback: "Increased physical patrols at pre-defined high-priority locations & critical zones." },
            { system: "Electronic Access Control", fallback: "Manual identity and credentials verification by posted security officers." },
            { system: "Visitor Management", fallback: "Pre-designed manual paper registration kits sized for realistic hospital volume." },
            { system: "Alarm & Alert Systems", fallback: "Alternative tested alert dispatch protocols via backup radio channels." },
            { system: "SOC Central Monitoring", fallback: "Transition to distributed supervisory patrols and manual incident logbooks." }
          ]
        }
      },
      {
        id: "incidents-real-world",
        title: "11. Real-World Healthcare Cyber Incidents & Lessons",
        content: [
          "High-profile healthcare cyber attacks demonstrate how digital breaches disrupt patient care:"
        ],
        stats: [
          {
            value: "192.7 Million",
            label: "individuals impacted in the Change Healthcare cyber attack — largest healthcare breach on record.",
            source: "HIPAA Journal 2024"
          },
          {
            value: "94%",
            label: "of surveyed U.S. hospitals were affected by the Change Healthcare breach despite it targeting a single vendor.",
            source: "American Hospital Association"
          },
          {
            value: "6 Weeks",
            label: "of manual paper charting required after a 2024 ransomware attack on Ascension Health.",
            source: "Public Post-Incident Reporting"
          }
        ]
      },
      {
        id: "framework-resilience",
        title: "14. Cyber-Physical Security Resilience Framework",
        content: [
          "Hospital leadership should adopt a 7-stage cyber-physical resilience model:"
        ],
        bullets: [
          "1. Identify: Map relationships between digital systems, electronic security, physical assets, and clinical workflows.",
          "2. Protect: Hardening critical infrastructure, restricted clinical zones, access points, and medical networks.",
          "3. Detect: Recognize cyber incidents early and assess their physical security impacts.",
          "4. Respond: Coordinated response across IT, cybersecurity, physical security, guarding, and clinical leadership.",
          "5. Fallback: Rapid transition of key security functions from technology to human verification.",
          "6. Recover: Restore technical systems safely while verifying security data integrity.",
          "7. Learn: Perform after-action reviews to update SOPs, train officers, and strengthen defenses."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
          alt: "Seven-stage circular resilience framework diagram.",
          caption: "7-Stage Executive Resilience Framework for Healthcare Cyber-Physical Security."
        }
      }
    ]
  },

  {
    id: "security-situation-management-in-healthcare",
    slug: "security-situation-management-in-healthcare",
    title: "Security Situation Management in Healthcare",
    subtitle: "A Practical Framework for Recognizing, De-escalating, Containing and Resolving Security Situations in Hospitals",
    excerpt: "Hospital security requires balancing empathy for distressed visitors with strict boundary control. Learn the 10-stage framework for de-escalating and resolving hospital security incidents.",
    category: "Hospital Workplace Safety & De-escalation",
    tags: ["De-escalation", "Workplace Violence", "Hospital Security", "Staff Safety", "Crowd Management", "Incident Response"],
    author: {
      name: "Rajkumar Sankaran & V. Varshithkumar",
      role: "Executive Directors, ISI India",
      avatar: "/leaders/Rajkumar ED.jpeg",
      coAvatar: "/leaders/Varshithkumar ED.jpg",
      bio: "Authored jointly by Executive Directors Rajkumar Sankaran and V. Varshithkumar, combining 25+ years of operational governance with advanced systems engineering and de-escalation leadership."
    },
    publishedAt: "August 2026",
    readTime: "11 min read",
    coverImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200",
    heroImageAlt: "A security officer calmly speaking with a visitor at a hospital reception desk.",
    featured: false,
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        content: [
          "At 11:40 a.m., the reception area of a large multi-specialty hospital is busy. Patients are checking in. Relatives are waiting for updates. Staff are moving between departments. An ambulance has just arrived at the emergency entrance.",
          "At the reception desk, an attendant asks to enter a restricted clinical area. His family member is undergoing treatment inside the ICU, and he wants to see the patient immediately. The security officer explains that access is restricted. The attendant insists. The officer repeats the instruction. The attendant raises his voice and moves closer to the counter. A receptionist stops serving the next patient. Visitors turn toward the conversation. Another relative joins and begins arguing.",
          "No one has been physically harmed. No property has been damaged. Yet the hospital is managing a developing security situation.",
          "The officer must decide: Is the attendant simply distressed, or is his behaviour becoming threatening? Should another officer be called? How can access to the ICU be protected without escalating confrontation?",
          "Hospital security is fundamentally different from commercial security. A hospital officer cannot rely only on rigid rules. The officer must understand the situation, assess risk, communicate appropriately, maintain professional boundaries, protect people, and know when escalation is required."
        ],
        stats: [
          {
            value: "84.8%",
            label: "of hospital nurses report experiencing workplace violence in the past year.",
            source: "National Nurses United 2025–26"
          },
          {
            value: "91%",
            label: "of emergency physicians surveyed have personally been victims of violence or seen colleagues attacked.",
            source: "ACEP Survey 2024"
          },
          {
            value: "10.3 / 10k",
            label: "injuries from violent assaults among healthcare workers — higher than almost any private sector industry.",
            source: "U.S. Bureau of Labor Statistics"
          }
        ]
      },
      {
        id: "ordinary-to-incidents",
        title: "How Ordinary Situations Become Security Incidents",
        content: [
          "Many hospital security incidents do not begin with criminal intent or physical violence. They begin with ordinary human interactions:",
          "A relative asks for information. A visitor arrives outside visiting hours. A patient disputes a process. A family member becomes frustrated about waiting. A visitor attempts to photograph a restricted area.",
          "The progression is predictable when communication breaks down:"
        ],
        bullets: [
          "Normal interaction → Frustration & repeated demands → Verbal escalation",
          "Boundary testing → Crowd formation → Operational disruption → Security incident"
        ],
        callout: {
          type: "tip",
          text: "Core De-escalation Rule: Human understanding without compromising security discipline. Empathy does not mean granting unauthorized entry; it means communicating boundaries respectfully."
        }
      },
      {
        id: "de-escalation-first-line",
        title: "De-escalation: The First Line of Professional Healthcare Security",
        content: [
          "In many healthcare situations, the first security intervention should be communication. De-escalation does not mean allowing inappropriate behaviour. It means attempting to reduce tension while maintaining necessary security boundaries.",
          "A trained officer might begin by acknowledging the person's concern: 'I understand that you are worried about your family member. Let me explain what access is permitted and who can assist you.'",
          "Key factors for successful de-escalation include:"
        ],
        bullets: [
          "Tone of Voice: A calm, controlled voice prevents an interaction from becoming a shouting match.",
          "Language & Active Listening: Avoid provocative statements; allow the person to explain their immediate concern.",
          "Clear Boundaries: Empathy should not be confused with permission — restricted area boundaries remain absolute.",
          "Physical Distance & Stance: Avoid aggressive positioning; maintain open, calm body posture.",
          "Privacy Management: Move sensitive disagreements away from crowded waiting rooms when practical.",
          "Early Supervisor Support: Calling a supervisor early is a sign of proactive risk management."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
          alt: "A security officer using calm, open body language to de-escalate a tense conversation.",
          caption: "Professional De-escalation: Using calm body posture and clear communication to resolve tension."
        }
      },
      {
        id: "ten-stage-framework",
        title: "Practical 10-Stage Security Situation Management Framework",
        content: [
          "Hospitals can operationalize security situation management through a 10-stage structured framework:"
        ],
        table: {
          title: "The 10-Stage Hospital Security Management Cycle",
          columns: [
            { key: "stage", header: "Stage" },
            { key: "action", header: "Core Operational Action" }
          ],
          rows: [
            { stage: "1. Recognize", action: "Identify early changes in behaviour, crowd dynamics, or access requests." },
            { stage: "2. Assess", action: "Evaluate context, risk level, triggers, and potential operational impact." },
            { stage: "3. Communicate", action: "Engage calmly; explain access boundaries & direct to authorized contacts." },
            { stage: "4. De-escalate", action: "Use active listening, open stance, & tone control to reduce tension." },
            { stage: "5. Contain", action: "Control environment, protect clinical zones, create distance, & clear routes." },
            { stage: "6. Escalate", action: "Activate supervisor, clinical admin, or law enforcement pathways when needed." },
            { stage: "7. Resolve", action: "Restore safe operating conditions so healthcare delivery continues smoothly." },
            { stage: "8. Document", action: "Record facts, timelines, responses, and outcomes for accountability." },
            { stage: "9. Learn", action: "Review root causes — evaluate staffing, SOPs, training, & visitor policies." },
            { stage: "10. Prevent", action: "Implement corrective changes to physical layout, SOPs, or guard training." }
          ]
        }
      },
      {
        id: "security-maturity",
        title: "Hospital Security Maturity Matrix",
        content: [
          "Leadership can measure healthcare security capability across 5 levels of maturity:"
        ],
        table: {
          title: "5 Levels of Healthcare Security Maturity",
          columns: [
            { key: "level", header: "Maturity Level" },
            { key: "characteristic", header: "Operational Characteristic" }
          ],
          rows: [
            { level: "Level 1 — Reactive", characteristic: "Responds only after incidents explode into public view; focus strictly on physical force." },
            { level: "Level 2 — Controlled", characteristic: "Basic SOPs and access control established; guards know standard response steps." },
            { level: "Level 3 — Proactive", characteristic: "Officers recognize warning signs early; supervisors actively manage risk and de-escalate." },
            { level: "Level 4 — Integrated", characteristic: "Security coordinates closely with clinical teams, facilities, and hospital leadership." },
            { level: "Level 5 — Resilient", characteristic: "Continuous learning from incidents and near-misses; security is part of hospital resilience." }
          ]
        },
        image: {
          url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1000",
          alt: "A calm, well-managed hospital lobby with an attentive but unobtrusive security presence.",
          caption: "Level 5 Resilient Security: An attentive, professional presence that ensures safe patient care."
        }
      }
    ]
  }
];

export const getAllBlogs = (): BlogPost[] => HEALTHCARE_BLOGS;

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return HEALTHCARE_BLOGS.find(blog => blog.slug === slug || blog.id === slug);
};

export const getFeaturedBlog = (): BlogPost => {
  return HEALTHCARE_BLOGS.find(blog => blog.featured) || HEALTHCARE_BLOGS[0];
};

export const getRelatedBlogs = (currentSlug: string): BlogPost[] => {
  return HEALTHCARE_BLOGS.filter(blog => blog.slug !== currentSlug);
};
