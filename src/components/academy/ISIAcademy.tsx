import React, { useState } from 'react';
import { 
  GraduationCap, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Bot, 
  Atom, 
  HeartPulse, 
  Network, 
  Server, 
  MapPin, 
  Building2, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  Check, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  Layers, 
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Shield,
  HelpCircle,
  BarChart3,
  Lightbulb,
  ExternalLink,
  Calendar,
  CheckSquare,
  Compass,
  AlertCircle,
  Target,
  Lock,
  Eye,
  Workflow,
  X,
  Send,
  Plus,
  Minus,
  School,
  FileSpreadsheet,
  Terminal,
  Activity,
  Laptop,
  ShieldAlert,
  Search,
  DollarSign,
  BriefcaseBusiness,
  UserCheck,
  Flame,
  Key,
  Coins,
  Truck,
  Building,
  Cog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import academyHeroImg from '@/assets/academy_hero_tech_security.jpg';
import enterpriseImg from '@/assets/academy_enterprise_workforce.jpg';
import cyberRangeImg from '@/assets/academy_cyber_range.jpg';
import droneLabImg from '@/assets/academy_drone_iot_lab.jpg';
import evLabImg from '@/assets/academy_ev_lab.jpg';
import healthcareItImg from '@/assets/academy_healthcare_it.jpg';
import quantumImg from '@/assets/academy_quantum_lab.jpg';
import smartCityImg from '@/assets/academy_smart_city_grid.jpg';

interface ISIAcademyProps {
  onEnquireClick?: (programTitle?: string) => void;
}

export const ISIAcademy: React.FC<ISIAcademyProps> = ({ onEnquireClick }) => {
  const [activeTrack, setActiveTrack] = useState<"technology" | "facility-management" | "guarding-security">("guarding-security");
  const [guardingFilter, setGuardingFilter] = useState<"all" | "core" | "industry" | "leadership" | "specialised">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProgramModal, setActiveProgramModal] = useState<any | null>(null);

  // Active slide index state for course sliders
  const [carouselIndices, setCarouselIndices] = useState<{ [key: number]: number }>({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0,
    101: 0, 102: 0, 103: 0,
    201: 0, 202: 0, 203: 0, 204: 0, 205: 0, 206: 0, 207: 0, 208: 0,
    209: 0, 210: 0, 211: 0, 212: 0, 213: 0, 214: 0, 215: 0, 216: 0, 217: 0, 218: 0
  });

  // Sync track with URL hash
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("facility-management") || hash.includes("facility")) {
        setActiveTrack("facility-management");
      } else if (hash.includes("guarding-security") || hash.includes("guarding") || hash.includes("security")) {
        setActiveTrack("guarding-security");
      } else if (hash.includes("technology") || hash.includes("course-sliders")) {
        setActiveTrack("technology");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const nextSlide = (courseIdx: number, totalSlides: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [courseIdx]: (prev[courseIdx] + 1) % totalSlides
    }));
  };

  const prevSlide = (courseIdx: number, totalSlides: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [courseIdx]: (prev[courseIdx] - 1 + totalSlides) % totalSlides
    }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquire = (title?: string) => {
    if (onEnquireClick) {
      onEnquireClick(title || "ISI Academy General Consultation");
    }
  };

  // =========================================================================
  // 1. TECHNOLOGY COURSES (8 DOMAINS)
  // =========================================================================
  const technologyCoursePortfolio = [
    {
      id: 0,
      title: "AI & Advanced Computing",
      badge: "C-DAC PG-DAC Aligned",
      images: [enterpriseImg, cyberRangeImg, academyHeroImg],
      captions: ["AI Research Lab", "SOC Machine Learning Analytics", "High Performance Cluster"],
      desc: "Master Enterprise Java Spring Boot microservices, Python AI models, CNN diagnostics, React.js, PostgreSQL/MongoDB, and secure SDLC practices.",
      modules: ["Spring Boot & React", "TensorFlow & PyTorch", "Deep Learning", "PostgreSQL & MongoDB"],
      outcome: "Full-Stack AI Developer / Software Engineer",
      labs: "C-DAC Aligned High Performance Computing & Software Security Suite",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Madurai",
      batch: "Admissions Open"
    },
    {
      id: 1,
      title: "Cyber Security & Digital Forensics",
      badge: "C-DAC PG-DCSF Aligned",
      images: [cyberRangeImg, academyHeroImg, enterpriseImg],
      captions: ["Air-Gapped Cyber Range", "SIEM Threat Hunting Desk", "Forensics Extraction Rig"],
      desc: "Static & dynamic malware reverse engineering (IDA Pro/Ghidra), NIST incident response lifecycle, Splunk SOC alert triage, and FTK Imager forensics.",
      modules: ["Malware Reverse Eng", "Splunk SIEM Triage", "FTK Digital Forensics", "NIST Incident Response"],
      outcome: "SOC Analyst / Digital Forensics Investigator",
      labs: "Air-Gapped Cyber Range & Splunk Security Operations Simulation Center",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Madurai",
      batch: "Admissions Open"
    },
    {
      id: 2,
      title: "IoT & Industrial Automation",
      badge: "C-DAC PG-DIoT / DESD Aligned",
      images: [droneLabImg, evLabImg, smartCityImg],
      captions: ["Embedded Systems Workbench", "PLC & SCADA Rig", "Edge IoT Gateway Sandbox"],
      desc: "Embedded C/C++, ARM Cortex-M (STM32), FreeRTOS task scheduling, Modbus RTU/TCP & PROFINET protocols, and secure boot firmware signing.",
      modules: ["Embedded C & FreeRTOS", "ARM Cortex-M (STM32)", "Modbus & PROFINET", "AWS IoT Core"],
      outcome: "Embedded Firmware Engineer / IoT Architect",
      labs: "Hardware Interfacing & Industrial Protocol Calibration Facility",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Hosur, Coimbatore",
      batch: "Admissions Open"
    },
    {
      id: 3,
      title: "Automotive Cyber Security & EV Tech",
      badge: "AIS-156 & ISO 21434 Standard",
      images: [evLabImg, enterpriseImg, cyberRangeImg],
      captions: ["EV Powertrain Dynamometer", "BMS Diagnostic Bench", "CAN Bus Hacking Simulator"],
      desc: "Oscilloscope motor controller analysis, CAN bus message decoding (CANalyzer), cell-level BMS recalibration, AIS-156 high-voltage safety, and ISO 21434 threat modeling.",
      modules: ["BMS Battery Chemistry", "CAN Bus Message Decoding", "AIS-156 Safety Rules", "ISO 21434 Threat Modeling"],
      outcome: "EV Powertrain Engineer / Automotive Security Specialist",
      labs: "High-Voltage EV Powertrain & CAN Bus Vulnerability Analysis Lab",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Hosur, Coimbatore",
      batch: "Admissions Open"
    },
    {
      id: 4,
      title: "Robotics, Drones & Aerial Analytics",
      badge: "DGCA & ROS 2 Aligned",
      images: [droneLabImg, cyberRangeImg, smartCityImg],
      captions: ["Multi-Rotor Flight Testing", "ROS 2 Gazebo Simulation", "Pix4D Mapping Desk"],
      desc: "BVLOS autonomous flight modes, LiDAR point-cloud classification, DEM photogrammetry, mining volumetric surveys, ROS 2 path planning, and DGCA RPTO rules.",
      modules: ["ROS 2 & Gazebo", "Pix4D Photogrammetry", "LiDAR Point-Cloud", "DGCA Digital Sky Rules"],
      outcome: "Drone Survey Engineer / Robotics Systems Developer",
      labs: "Autonomous Flight Testing Enclosure & Photogrammetry Analytics Suite",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Madurai, Salem",
      batch: "Admissions Open"
    },
    {
      id: 5,
      title: "Smart City & Municipal IoT",
      badge: "100 Smart Cities Mission",
      images: [smartCityImg, droneLabImg, academyHeroImg],
      captions: ["Municipal Operations Desk", "LoRaWAN Gateway Monitor", "5G Telemetry Matrix"],
      desc: "Municipal IoT adoption, 5G network slicing, MEC (Multi-Access Edge Computing), V2X communication (V2V/V2I), urban GIS analytics, and PPP governance.",
      modules: ["5G mmWave & MEC", "LoRaWAN Mesh Networks", "V2X Communication", "Municipal GIS Dashboards"],
      outcome: "Smart City Solutions Architect / Municipal Tech Specialist",
      labs: "Municipal IoT Telemetry Sandbox & 5G Edge Computing Command Center",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Madurai",
      batch: "Admissions Open"
    },
    {
      id: 6,
      title: "Quantum Computing & Cryptography",
      badge: "National Quantum Mission",
      images: [quantumImg, cyberRangeImg, academyHeroImg],
      captions: ["Quantum Optics & Cryo Rig", "QKD Node Terminal", "NIST PQC Testbed"],
      desc: "Qubits, quantum gates, Shor & Grover algorithms, NIST Post-Quantum Cryptography (ML-KEM, ML-DSA), commercial QKD systems (BB84/E91), and QRNG integration.",
      modules: ["NIST PQC Standards", "QKD Protocol Testing", "IBM Quantum Composer", "Cryptographic Agility"],
      outcome: "Quantum Cryptography Engineer / Post-Quantum Security Analyst",
      labs: "Quantum Optics Simulation Bench & Commercial QKD Hardware Sandbox",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai Central Campus",
      batch: "Admissions Open"
    },
    {
      id: 7,
      title: "Data Center & Infrastructure Technologies",
      badge: "TIA-942 Tier IV Standard",
      images: [academyHeroImg, evLabImg, smartCityImg],
      captions: ["Raised Floor DC Pod", "CRAC/CRAH HVAC Systems", "DCIM Power Monitoring"],
      desc: "TIA-942 Tier I-IV redundancy, CRAC/CRAH chilled water plants, ITIL framework NOC incident management, ATS/STS switches, sub-1.2 PUE, and 200-rack DCIM strategy.",
      modules: ["TIA-942 Architecture", "CRAC/CRAH Chilled Water", "DCIM Energy Analytics", "Sub-1.2 PUE Design"],
      outcome: "Data Center Operations Manager / Critical Infra Engineer",
      labs: "Full-Scale Raised Floor Data Center Mock-up & DCIM Command Platform",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Hosur",
      batch: "Admissions Open"
    }
  ];

  // =========================================================================
  // 2. FACILITY MANAGEMENT COURSES (4 DOMAINS)
  // =========================================================================
  const facilityManagementCoursePortfolio = [
    {
      id: 101,
      title: "Hard FM & Technical MEP Engineering",
      badge: "BMS & MEP Certified",
      images: [academyHeroImg, smartCityImg, enterpriseImg],
      captions: ["HVAC & Chiller Plant Control", "Substation & DG Operations", "Building Automation Console"],
      desc: "Master high-voltage electrical distribution, HVAC chiller plant operations, diesel generators, plumbing telemetry, and predictive maintenance protocols.",
      modules: ["HVAC & Chiller Plants", "Electrical Substations & DG", "MEP Automation & SCADA", "Predictive Maintenance"],
      outcome: "Technical MEP Operations Specialist / Building Engineer",
      labs: "Live Raised-Floor Facility & MEP Automation Testing Center",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Madurai",
      batch: "Admissions Open"
    },
    {
      id: 102,
      title: "Soft FM, Mechanized Sanitation & ESG",
      badge: "ISO 41001 Standard",
      images: [smartCityImg, enterpriseImg, academyHeroImg],
      captions: ["Mechanized Cleaning Fleet", "Chemical Dilution Matrix", "Bio-Waste Management Hub"],
      desc: "Enterprise hygiene management, mechanized cleaning machinery operations, hospital-grade sanitation, chemical dilution matrices, and green building waste compliance.",
      modules: ["Mechanized Scrubbers & Ops", "Chemical Safety & Hazmat", "Waste Segregation & ESG", "SLA Auditing & Metrics"],
      outcome: "Soft FM Executive / Facility Hygiene Manager",
      labs: "Mechanized Facility Simulation & Sanitation Standards Lab",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Madurai, Coimbatore",
      batch: "Admissions Open"
    },
    {
      id: 103,
      title: "Smart Building IoT & Energy Management",
      badge: "BEE & Green Building Aligned",
      images: [evLabImg, smartCityImg, cyberRangeImg],
      captions: ["Smart Metering Dashboard", "BMS Central Console", "Sub-1.2 PUE Energy Desk"],
      desc: "Deploy IoT telemetry across commercial real estate, smart energy metering, automated HVAC load scheduling, power quality analysis, and ESG sustainability reporting.",
      modules: ["Smart Metering IoT", "BEE Energy Audit SOPs", "BMS System Integration", "Carbon Accounting"],
      outcome: "Energy Manager / Smart Building IoT Specialist",
      labs: "Smart Building Telemetry & Energy Automation Suite",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore, Hosur",
      batch: "Admissions Open"
    },
    {
      id: 104,
      title: "Workplace Experience & ESG Governance",
      badge: "ISO 41001 & GRI Standard",
      images: [enterpriseImg, academyHeroImg, smartCityImg],
      captions: ["Corporate Concierge Hub", "EHS Compliance Desk", "Workplace Space Optimization"],
      desc: "Workplace ergonomics, vendor contract governance, health-safety compliance, EHS auditing, and ESG reporting for multinational enterprise headquarters.",
      modules: ["Corporate EHS Compliance", "Vendor SLA Management", "Space Optimization & CAFM", "ESG Carbon Reporting"],
      outcome: "Corporate Workplace Manager / ESG Facilities Lead",
      labs: "Enterprise Space Management & EHS Simulation Facility",
      duration: "90 Days + 30 Days Residency",
      campuses: "Chennai, Coimbatore",
      batch: "Admissions Open"
    }
  ];

  // =========================================================================
  // 3. COMPLETE PHYSICAL GUARDING & PRIVATE SECURITY CERTIFICATIONS (18 COURSES)
  // =========================================================================
  const guardingSecurityCoursePortfolio = [
    // --- A. Core Certification Programs (90 Days + 30 Days Internship) ---
    {
      id: 201,
      category: "core",
      title: "Certified Security Guard Professional (CSGP)",
      duration: "90 Days Training + 30 Days Internship",
      badge: "PSARA 2005 & Statutory Guarding",
      type: "Normal Course",
      images: [cyberRangeImg, enterpriseImg, academyHeroImg],
      captions: ["Access Control Checkpoint", "Perimeter Patrol Drill", "Visitor Screening Post"],
      desc: "Comprehensive physical security operations, code of conduct, visitor management systems, patrol choreography, threat recognition, and incident reporting.",
      modules: [
        "Fundamentals of Physical Security and Professional Guarding",
        "Duties, Responsibilities, and Code of Conduct of Security Personnel",
        "Access Control Procedures and Visitor Management Systems",
        "Patrol Techniques, Observation Skills, and Threat Recognition",
        "Search Procedures and Basic Screening Methods",
        "Incident Identification, Reporting, and Documentation",
        "Emergency Response Awareness and Basic First Response",
        "Professional Communication and Workplace Discipline"
      ],
      careerRoles: ["Security Guard", "Corporate Security Officer", "Residential Security Officer", "Retail Security Officer"],
      outcome: "Certified Security Guard Professional",
      labs: "High-Security Checkpoint & Tactical Gatehouse Mockup",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "10th Pass or equivalent · Age 18+",
      batch: "Admissions Open"
    },
    {
      id: 202,
      category: "core",
      title: "Certified Security Supervisor (CSS)",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Shift Management & Leadership",
      type: "Normal Course",
      images: [enterpriseImg, cyberRangeImg, academyHeroImg],
      captions: ["Shift Briefing Hub", "Incident Escalation Desk", "Guard Patrol Audit Console"],
      desc: "Supervisory skills, shift management, incident escalation protocols, client coordination, team performance monitoring, and site security planning.",
      modules: [
        "Team Leadership and Supervisory Skills",
        "Daily Security Operations and Shift Management",
        "Incident Handling and Escalation Procedures",
        "Client Coordination and Service Delivery Standards",
        "Documentation, Reporting, and Record Management",
        "Emergency Response Coordination at Site Level",
        "Performance Monitoring of Security Teams",
        "Basic Risk Awareness and Site Security Planning"
      ],
      careerRoles: ["Security Supervisor", "Site Supervisor", "Security Operations Coordinator"],
      outcome: "Certified Security Supervisor",
      labs: "Shift Briefing & Operational Command Post",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "12th Pass / Diploma (Experience preferred)",
      batch: "Admissions Open"
    },
    {
      id: 203,
      category: "core",
      title: "Certified Security Officer (CSO)",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Security Management & Technology",
      type: "Normal Course",
      images: [academyHeroImg, enterpriseImg, cyberRangeImg],
      captions: ["Vulnerability Assessment Rig", "Integrated Access Control", "Security Audit Desk"],
      desc: "Physical security management principles, vulnerability assessments, security tech systems, incident management protocols, and security audits.",
      modules: [
        "Physical Security Management Principles",
        "Risk Identification and Site Vulnerability Assessment",
        "Introduction to Security Technology Systems",
        "Fundamentals of Security Investigations",
        "Incident Management and Response Protocols",
        "Security Audits and Compliance Checks",
        "Access Control Systems and Technology Integration",
        "Coordination with Facility and Management Teams"
      ],
      careerRoles: ["Security Officer", "Corporate Security Executive", "Facility Security Officer"],
      outcome: "Certified Security Officer",
      labs: "Physical-Electronic Security Integration Rig",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "Diploma / Graduate preferred",
      batch: "Admissions Open"
    },
    {
      id: 204,
      category: "core",
      title: "Certified Industrial Security Professional (CISP)",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Plant & Factory Security",
      type: "Normal Course",
      images: [smartCityImg, enterpriseImg, academyHeroImg],
      captions: ["Material Inward/Outward Gate", "Perimeter Fence Surveillance", "Industrial Hazmat Checkpoint"],
      desc: "Factory security fundamentals, material movement control, asset protection, perimeter boundary management, and industrial safety compliance.",
      modules: [
        "Industrial and Factory Security Fundamentals",
        "Material Control and Inward-Outward Movement Procedures",
        "Asset Protection and Loss Prevention Techniques",
        "Perimeter Security and Boundary Management",
        "Critical Infrastructure Protection Basics",
        "Industrial Emergency Response Coordination",
        "Compliance with Industrial Safety and Security Standards",
        "Coordination with Plant Operations and Management"
      ],
      careerRoles: ["Industrial Security Officer", "Plant Security Executive", "Manufacturing Security Officer"],
      outcome: "Certified Industrial Security Professional",
      labs: "Industrial Inward/Outward Gate & Weighbridge Mockup",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "12th Pass / Diploma / Graduate",
      batch: "Admissions Open"
    },

    // --- B. Industry-Specific Certifications (90 Days + 30 Days Internship) ---
    {
      id: 205,
      category: "industry",
      title: "Certified Corporate Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "IT Parks & GCCs",
      type: "Normal Course",
      images: [enterpriseImg, academyHeroImg, cyberRangeImg],
      captions: ["GCC Turnstile Access Control", "Executive Floor Protocol", "Visitor Biometric Gateway"],
      desc: "Specialized for IT Parks, Corporate Offices, and GCCs. Covers corporate security operations, executive protection, workplace security, and risk mitigation.",
      modules: [
        "Corporate Campus Security Governance",
        "Visitor & Vendor Biometric Access Systems",
        "Workplace Violence Prevention & POSH Security",
        "Executive Escort & Boardroom Protection",
        "Data Leakage Physical Security Measures",
        "Emergency Evacuation in High-Rise Campuses"
      ],
      careerRoles: ["Corporate Security Officer", "Campus Security Lead", "GCC Security Specialist"],
      outcome: "Certified Corporate Security Professional",
      labs: "Corporate Turnstile Access & Executive Suite Mockup",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "Diploma / Graduate preferred",
      batch: "Admissions Open"
    },
    {
      id: 206,
      category: "industry",
      title: "Certified Healthcare Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Hospitals & Medical Facilities",
      type: "Normal Course",
      images: [healthcareItImg, enterpriseImg, academyHeroImg],
      captions: ["Emergency Room Triaging Post", "Maternity Ward Security Gate", "Pharmacy Hazmat Control"],
      desc: "Tailored for hospitals and medical centers: patient safety, ER de-escalation, infant security, hazardous medical storage, and healthcare statutory compliance.",
      modules: [
        "Hospital Security Architecture & Sensitive Zones",
        "Emergency Department Crisis De-escalation",
        "Pharmacy & Narcotic Storage Vault Security",
        "Infant Abduction Prevention Protocols",
        "Biomedical Waste Movement Governance",
        "Hospital Disaster & Mass Casualty Protocols"
      ],
      careerRoles: ["Hospital Security Officer", "Healthcare Safety Marshal", "Medical Center Security Executive"],
      outcome: "Certified Healthcare Security Professional",
      labs: "Hospital ER & Pharmacy Vault Security Mockup",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "12th Pass / Diploma / Graduate",
      batch: "Admissions Open"
    },
    {
      id: 207,
      category: "industry",
      title: "Certified Hospitality Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Hotels & Luxury Resorts",
      type: "Normal Course",
      images: [academyHeroImg, enterpriseImg, smartCityImg],
      captions: ["Hotel Lobby Concierge Post", "Baggage Scanner & Metal Detector", "VIP Guest Floor Access"],
      desc: "Discrete guest protection, high-end event security, keycard access audit, baggage screening, crisis management, and luxury hospitality etiquette.",
      modules: [
        "Five-Star Hospitality Security SOPs",
        "Discrete Guest Profiling & Threat Mitigation",
        "Hotel Fire Safety & High-Occupancy Evacuation",
        "Banquet & Celebrity Event Security Management",
        "Keycard Access Logs & Electronic Lock Audits",
        "Hospitality Customer Service & Diplomacy"
      ],
      careerRoles: ["Hotel Security Officer", "Resort Security Executive", "Hospitality Protection Lead"],
      outcome: "Certified Hospitality Security Professional",
      labs: "Hotel Lobby Concierge & Baggage Scanning Deck",
      campuses: "Chennai · Madurai · Coimbatore",
      eligibility: "12th Pass / Diploma / Graduate",
      batch: "Admissions Open"
    },
    {
      id: 208,
      category: "industry",
      title: "Certified Campus Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Schools, Colleges & Universities",
      type: "Normal Course",
      images: [smartCityImg, academyHeroImg, enterpriseImg],
      captions: ["School Bus GPS Checkpoint", "Hostel Perimeter Patrol", "Main Campus Gate Guard"],
      desc: "Student safeguarding, campus perimeter integrity, school bus route safety, emergency response drills, and anti-bullying / trespasser prevention.",
      modules: [
        "Child & Student Safeguarding Frameworks",
        "School Transport & Fleet GPS Verification",
        "Hostel & Residential Campus Security Drills",
        "Campus Anti-Intrusion & Lockdown Protocols",
        "Visitor Verification & Parent Authorization",
        "First Aid & Pediatric Emergency Handling"
      ],
      careerRoles: ["Campus Security Officer", "School Safety Officer", "University Security Executive"],
      outcome: "Certified Campus Security Professional",
      labs: "School Gate Checkpoint & Child-First Security Mockup",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "12th Pass / Diploma / Graduate",
      batch: "Admissions Open"
    },
    {
      id: 209,
      category: "industry",
      title: "Certified Logistics Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Warehouses & Supply Chain",
      type: "Normal Course",
      images: [smartCityImg, enterpriseImg, droneLabImg],
      captions: ["Cargo Seal Inspection Gate", "Loading Dock CCTV Rig", "Yard Perimeter Security"],
      desc: "Cargo protection, warehouse loss prevention, seal verification, GPS transit tracking, dock management, and supply chain security audits (TAPA/CTPAT).",
      modules: [
        "Supply Chain Security & TAPA Guidelines",
        "Loading Dock & Yard Management Protocols",
        "Tamper-Evident Cargo Seal Verification",
        "GPS Fleet & Transit Guarding Synchronization",
        "Pilferage & Shrinkage Detection Techniques",
        "Warehouse Hazmat & Fire Safety Compliance"
      ],
      careerRoles: ["Logistics Security Officer", "Warehouse Security Supervisor", "Supply Chain Loss Prevention Officer"],
      outcome: "Certified Logistics Security Professional",
      labs: "Cargo Dock Inspection & Seal Verification Station",
      campuses: "Chennai · Hosur · Coimbatore · Madurai",
      eligibility: "12th Pass / Diploma / Graduate",
      batch: "Admissions Open"
    },
    {
      id: 210,
      category: "industry",
      title: "Certified Banking Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Banks & Cash Logistics",
      type: "Normal Course",
      images: [academyHeroImg, cyberRangeImg, enterpriseImg],
      captions: ["Bank Vault Access Gate", "ATM Surveillance Console", "Cash Van Armed Escort Drill"],
      desc: "ATM booth security, branch protection, cash-in-transit armed protocols, strongroom vault security, alarm response, and banking fraud awareness.",
      modules: [
        "Banking Premises & Strongroom Vault Protection",
        "ATM Electronic Surveillance & Anti-Skimming",
        "Cash-in-Transit (CIT) Armored Escort SOPs",
        "Armed Guard Drill & Weapon Maintenance",
        "Silent Alarm & Panic Trigger Responses",
        "RBI Physical Security Compliance Benchmarks"
      ],
      careerRoles: ["Banking Security Officer", "ATM Operations Officer", "Cash Logistics Escort Commander"],
      outcome: "Certified Banking Security Professional",
      labs: "Bank Strongroom Mockup & Armored CIT Escort Rig",
      campuses: "Madurai · Coimbatore · Chennai",
      eligibility: "12th Pass / Ex-Servicemen preferred",
      batch: "Admissions Open"
    },
    {
      id: 211,
      category: "industry",
      title: "Certified Retail Security Professional",
      duration: "90 Days Training + 30 Days Internship",
      badge: "Shopping Malls & Retail Chains",
      type: "Normal Course",
      images: [enterpriseImg, smartCityImg, academyHeroImg],
      captions: ["EAS Pedestal Checkpoint", "Fitting Room Loss Prevention", "Crowd Control Post"],
      desc: "Retail loss prevention, shoplifting deterrence, Electronic Article Surveillance (EAS) pedestals, crowd control in malls, and customer conflict resolution.",
      modules: [
        "Retail Shrinkage & Shoplifting Deterrence",
        "EAS Pedestals & Tag Deactivation Systems",
        "Store Floor Patrol & Undercover Surveillance",
        "Cash Counter & POS Security Monitoring",
        "Crowd Management & Black Friday Event SOPs",
        "Customer Conflict De-escalation & Legal Rights"
      ],
      careerRoles: ["Retail Security Officer", "Mall Security Supervisor", "Loss Prevention Associate"],
      outcome: "Certified Retail Security Professional",
      labs: "Retail Store Checkout & EAS Anti-Theft Simulation",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "10th / 12th Pass / Graduate",
      batch: "Admissions Open"
    },

    // --- C. Advanced Security Leadership Certifications (180 Days + 180 Days Internship) ---
    {
      id: 212,
      category: "leadership",
      title: "Certified Security Manager (CSM)",
      duration: "180 Days Training + 180 Days Internship",
      badge: "Strategic Leadership & Operations",
      type: "Advanced Course",
      images: [enterpriseImg, cyberRangeImg, academyHeroImg],
      captions: ["Executive Security Briefing Suite", "Multi-Site Operations Dashboard", "Risk Governance Boardroom"],
      desc: "Strategic security leadership, multi-site inspection methodologies, advanced risk assessments, security budgeting, investigations management, and client relationships.",
      modules: [
        "Strategic Security Leadership and Management Principles",
        "Comprehensive Security Audit and Inspection Methodologies",
        "Advanced Risk Assessment and Threat Analysis",
        "Security Planning, Policy Development, and Implementation",
        "Investigations Management and Evidence Handling",
        "Business Continuity and Crisis Management Planning",
        "Team Leadership, Performance Management, and Budgeting",
        "Stakeholder Management and Client Relationship Leadership"
      ],
      careerRoles: ["Security Manager", "Regional Security Manager", "Operations Manager"],
      outcome: "Certified Security Manager",
      labs: "Multi-Site Operations Command & Strategic Risk Boardroom",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "Graduate / Ex-Servicemen / Working Security Professionals",
      batch: "Admissions Open"
    },
    {
      id: 213,
      category: "leadership",
      title: "Certified Risk & Security Management Professional",
      duration: "180 Days Training + 180 Days Internship",
      badge: "Enterprise Risk Management (ERM)",
      type: "Advanced Course",
      images: [cyberRangeImg, enterpriseImg, smartCityImg],
      captions: ["Enterprise Risk Matrix", "Crisis Management Command Desk", "Resilience Strategy Platform"],
      desc: "Enterprise-level threat assessment, ERM principles, crisis management, security governance frameworks, board-level communication, and physical-tech risk integration.",
      modules: [
        "Enterprise-Level Threat Assessment Frameworks",
        "Enterprise Risk Management (ERM) Principles",
        "Crisis Management and Emergency Planning",
        "Security Governance and Compliance Frameworks",
        "Business Continuity and Resilience Planning",
        "Risk Reporting and Board-Level Communication",
        "Integration of Physical and Technology Security Risks",
        "Continuous Improvement and Risk Mitigation Strategies"
      ],
      careerRoles: ["Risk Manager", "Security Risk Consultant", "Enterprise Security Governance Lead"],
      outcome: "Certified Risk & Security Management Professional",
      labs: "Crisis Management Simulation & Enterprise Risk Matrix",
      campuses: "Chennai · Coimbatore",
      eligibility: "Graduate / Security Professionals / Risk Analysts",
      batch: "Admissions Open"
    },
    {
      id: 214,
      category: "leadership",
      title: "Certified Security Operations Center Professional (SOCP)",
      duration: "180 Days Training + 180 Days Internship",
      badge: "C4i & SOC Analytics",
      type: "Advanced Course",
      images: [cyberRangeImg, academyHeroImg, enterpriseImg],
      captions: ["24/7 Multi-Site Video Wall", "AI Pattern Recognition Console", "Incident Escalation Terminal"],
      desc: "Structure and functions of modern SOCs, advanced CCTV monitoring, AI video analytics, command center SOPs, pattern recognition, and multi-site centralised control.",
      modules: [
        "Security Operations Center (SOC) Structure and Functions",
        "Advanced CCTV Monitoring and Video Analytics",
        "Command Centre Operations and Standard Operating Procedures",
        "Incident Detection, Escalation, and Coordination Protocols",
        "Security Analytics and Pattern Recognition",
        "Multi-Site Monitoring and Centralised Control",
        "Emergency Coordination with External Agencies",
        "Technology Platforms and SOC Performance Management"
      ],
      careerRoles: ["SOC Analyst", "Command Center Manager", "Surveillance Operations Lead"],
      outcome: "Certified SOC Professional",
      labs: "24/7 Physical-Electronic Security Operations Command Center",
      campuses: "Chennai Central SOC Campus",
      eligibility: "Diploma / Graduate with tech aptitude",
      batch: "Admissions Open"
    },

    // --- D. Specialised Security Programs (180 Days + 180 Days Internship) ---
    {
      id: 215,
      category: "specialised",
      title: "Executive Protection Professional",
      duration: "180 Days Training + 180 Days Internship",
      badge: "VIP & Close Protection",
      type: "Advanced Course",
      images: [enterpriseImg, cyberRangeImg, academyHeroImg],
      captions: ["Close Protection Formation", "Convoy Defensive Escort", "Threat Route Recon"],
      desc: "Protective intelligence, defensive route planning, advance threat assessments, close protection techniques, VIP etiquette, and high-risk extraction operations.",
      modules: [
        "Protective Intelligence & Advance Threat Profiling",
        "Close Protection Formations & Bodyguard Choreography",
        "Defensive & Tactical Convoy Driving Coordination",
        "High-Risk Route Reconnaissance & Safe Houses",
        "Discrete Weapons Handling & Unarmed Defense",
        "Emergency Medical Evacuation under Threat"
      ],
      careerRoles: ["Executive Protection Officer", "VIP Bodyguard", "Personal Security Officer (PSO)"],
      outcome: "Certified Executive Protection Professional",
      labs: "Tactical Convoy Mockup & Close Protection Tactical Range",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "Ex-Servicemen / Experienced Security Guards / Physical fitness qualified",
      batch: "Admissions Open"
    },
    {
      id: 216,
      category: "specialised",
      title: "Event Security Management Professional",
      duration: "180 Days Training + 180 Days Internship",
      badge: "Crowd Control & Large-Scale Events",
      type: "Advanced Course",
      images: [smartCityImg, academyHeroImg, enterpriseImg],
      captions: ["Stadium Access Turnstiles", "Crowd Density Heatmap", "Emergency Egress Route"],
      desc: "Crowd management dynamics, large-scale stadium & concert risk planning, access zoning, anti-stampede strategies, VIP backstage escort, and emergency egress.",
      modules: [
        "Large-Scale Crowd Psychology & Surge Prevention",
        "Event Venue Risk & Threat Assessment SOPs",
        "Zoning, Barrier Layouts & Access Credentials",
        "Emergency Evacuation & Stampede Mitigation",
        "Coordination with Police, Fire & Medical Teams",
        "Incident Logging & Post-Event Debriefing"
      ],
      careerRoles: ["Event Security Manager", "Crowd Safety Coordinator", "Festival Security Director"],
      outcome: "Certified Event Security Management Professional",
      labs: "Event Venue Crowd Surge Simulation & Barrier Control Rig",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "Diploma / Graduate / Event Personnel",
      batch: "Admissions Open"
    },
    {
      id: 217,
      category: "specialised",
      title: "Fire Safety & Emergency Response Professional",
      duration: "180 Days Training + 180 Days Internship",
      badge: "NBC 2016 Standards",
      type: "Advanced Course",
      images: [evLabImg, cyberRangeImg, smartCityImg],
      captions: ["Live Fire Extinguisher Range", "Smoke Chamber Evacuation Drill", "First Aid & CPR Triage"],
      desc: "Industrial fire prevention, NBC 2016 building safety compliance, fire hydrant & sprinkler testing, smoke chamber evacuation drills, disaster management, and incident command.",
      modules: [
        "National Building Code (NBC 2016) Fire Safety Regulations",
        "Fire Chemistry, Detection & Automated Suppression Systems",
        "Industrial Hydrant, Hose Reel & Extinguisher Operations",
        "High-Rise Smoke Evacuation & Search & Rescue",
        "Disaster Management & Incident Command System (ICS)",
        "Certified First Aid, BLS, and Burn Injury Triage"
      ],
      careerRoles: ["Fire Safety Officer", "Emergency Response Marshal", "Industrial Safety Coordinator"],
      outcome: "Certified Fire Safety & Emergency Response Professional",
      labs: "Live Fire Suppression Enclosure & Smoke Chamber Facility",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "10th / 12th / Diploma / Graduate",
      batch: "Admissions Open"
    },
    {
      id: 218,
      category: "specialised",
      title: "Integrated Security Technology Professional",
      duration: "180 Days Training + 180 Days Internship",
      badge: "Electronic Systems & Hardware",
      type: "Advanced Course",
      images: [academyHeroImg, droneLabImg, cyberRangeImg],
      captions: ["CCTV IP Camera Workbench", "Access Control Biometric Terminal", "Perimeter Beam Intrusion Rack"],
      desc: "Hands-on installation and commissioning of IP CCTV systems, biometric access control, perimeter intrusion detection systems (PIDS), VMS platforms, and command center hardware.",
      modules: [
        "IP CCTV Architecture, Optics & Network Bandwidth Sizing",
        "Biometric, RFID & Mobile Access Control Systems",
        "Perimeter Intrusion Detection (PIDS) & Sensor Fences",
        "Video Management Software (VMS) & Video Analytics",
        "Alarm Panel Wiring, Sensors & Power Redundancy",
        "Command Center Hardware Maintenance & SLA Audits"
      ],
      careerRoles: ["Security Systems Engineer", "Electronic Security Specialist", "CCTV & Access Control Lead"],
      outcome: "Certified Integrated Security Technology Professional",
      labs: "Electronic Security Hardware Interfacing & VMS Suite",
      campuses: "Chennai · Coimbatore · Madurai",
      eligibility: "Diploma / ITI / Graduate with technical background",
      batch: "Admissions Open"
    }
  ];

  const filteredGuardingCourses = guardingSecurityCoursePortfolio.filter(c => {
    if (guardingFilter === "all") return true;
    return c.category === guardingFilter;
  });

  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (WITH PHYSICAL GUARDING & CERTIFICATION HEADER)            */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-50/90 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-100/90 border border-blue-200 rounded-full text-blue-800 font-extrabold text-xs md:text-sm uppercase tracking-wider shadow-xs">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>India's Trusted Shield Since 1985</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Physical Guarding & Private Security <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  Professional Certification Programs
                </span>
              </h1>

              <p className="text-xs sm:text-sm font-semibold text-blue-800 uppercase tracking-wider">
                Offered by ISISecurity.in Academy · A Division of Industrial Security & Intelligence (I) Pvt. Ltd.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Drawing on more than four decades of real-world security expertise, ISISecurity.in Academy offers structured Training and Certification Programs that prepare individuals for high-growth careers in physical security, corporate security, industrial security, risk management, investigations, and security leadership.
              </p>

              {/* Programs At A Glance Snapshot */}
              <div className="bg-white/95 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Programs At A Glance</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-slate-500 font-semibold block">Normal Courses:</span>
                    <strong className="text-slate-900 font-bold">90 Days Training + 30 Days Internship</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-slate-500 font-semibold block">Advanced Courses:</span>
                    <strong className="text-slate-900 font-bold">180 Days Training + 180 Days Internship</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <span className="text-blue-700 font-semibold block">Training Centers:</span>
                    <strong className="text-blue-900 font-bold">Madurai · Coimbatore · Chennai</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                    <span className="text-emerald-700 font-semibold block">Global Opportunities:</span>
                    <strong className="text-emerald-900 font-bold">India + UAE, Saudi Arabia, Singapore, UK & 6 more</strong>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button 
                  onClick={() => scrollToSection("course-sliders")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-lg shadow-blue-500/20 transition-all gap-2 hover:-translate-y-0.5"
                >
                  <span>Explore 18 Certification Courses</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <Button 
                  onClick={() => handleEnquire("Physical Guarding & Security Career Consultation")}
                  size="lg"
                  variant="outline"
                  className="border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-8 py-6 rounded-2xl transition-all gap-2"
                >
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Talk to an Academy Advisor</span>
                </Button>
              </div>

            </div>

            {/* Right Visual Concept */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-[2.2rem] bg-white border border-slate-200 overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-shadow">
                  <img 
                    src={academyHeroImg} 
                    alt="ISI Academy Security Command Center and Learning Lab" 
                    className="w-full h-[360px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-4 text-slate-900">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">From Security Guard to Security Leader</div>
                      <div className="text-xs text-slate-600">8.9M+ workforce demand across India & Overseas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. 3 ACADEMY TRACKS & COURSE PORTFOLIOS                                   */}
      {/* ========================================================================= */}
      <section id="course-sliders" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div id="guarding-security" className="-mt-24 pt-24" />
        <div id="technology" className="-mt-24 pt-24" />
        <div id="facility-management" className="-mt-24 pt-24" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Academy Domain Tracks
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Structured Professional Certification Programs
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore specialized courses across Physical Guarding Security, High-Tech Cybersecurity & AI, and Integrated Facility Management.
            </p>
          </div>

          {/* 3 Interactive Track Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <button
              onClick={() => {
                setActiveTrack("guarding-security");
                scrollToSection("guarding-security");
              }}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all border shadow-xs cursor-pointer",
                activeTrack === "guarding-security"
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              <ShieldCheck className="w-5 h-5" />
              <span>🛡️ Guarding Security (18 Courses)</span>
            </button>

            <button
              onClick={() => {
                setActiveTrack("technology");
                scrollToSection("technology");
              }}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all border shadow-xs cursor-pointer",
                activeTrack === "technology"
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              <Laptop className="w-5 h-5" />
              <span>💻 Technology Programs (8 Domains)</span>
            </button>

            <button
              onClick={() => {
                setActiveTrack("facility-management");
                scrollToSection("facility-management");
              }}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all border shadow-xs cursor-pointer",
                activeTrack === "facility-management"
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              <Building2 className="w-5 h-5" />
              <span>🏢 Facility Management (4 Domains)</span>
            </button>
          </div>

          {/* GUARDING SECURITY TRACK FILTER SUB-BUTTONS */}
          {activeTrack === "guarding-security" && (
            <div className="flex flex-wrap justify-center gap-2 mb-10 p-2 bg-slate-100 rounded-2xl max-w-4xl mx-auto">
              <button
                onClick={() => setGuardingFilter("all")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  guardingFilter === "all" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                All 18 Courses
              </button>
              <button
                onClick={() => setGuardingFilter("core")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  guardingFilter === "core" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Core Guarding (4)
              </button>
              <button
                onClick={() => setGuardingFilter("industry")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  guardingFilter === "industry" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Industry-Specific (7)
              </button>
              <button
                onClick={() => setGuardingFilter("leadership")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  guardingFilter === "leadership" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Advanced Leadership (3)
              </button>
              <button
                onClick={() => setGuardingFilter("specialised")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  guardingFilter === "specialised" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Specialised Programs (4)
              </button>
            </div>
          )}

          {/* COURSE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTrack === "guarding-security" ? filteredGuardingCourses : (activeTrack === "facility-management" ? facilityManagementCoursePortfolio : technologyCoursePortfolio)).map((course: any) => (
              <div 
                key={course.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header / Carousel */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img 
                    src={course.images[carouselIndices[course.id] || 0]} 
                    alt={course.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Badge & Duration */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 bg-blue-600 text-white rounded-full shadow-xs">
                    {course.type || course.duration || "Certified Program"}
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white max-w-[85%] truncate">
                    {course.badge}
                  </span>

                  {/* Carousel Controls */}
                  {course.images.length > 1 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(course.id, course.images.length); }}
                        className="w-6 h-6 rounded-full bg-slate-900/70 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextSlide(course.id, course.images.length); }}
                        className="w-6 h-6 rounded-full bg-slate-900/70 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  {/* Modules Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Modules ({course.modules.length})
                    </span>
                    <ul className="space-y-1">
                      {course.modules.slice(0, 3).map((mod: string, mIdx: number) => (
                        <li key={mIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                          <span className="truncate">{mod}</span>
                        </li>
                      ))}
                      {course.modules.length > 3 && (
                        <li className="text-[10px] text-blue-600 font-semibold pl-4.5">
                          +{course.modules.length - 3} more modules in syllabus
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Outcome / Roles */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">Career Outcomes:</span>
                    <span className="font-bold text-slate-800 text-[11px] truncate block">
                      {course.careerRoles ? course.careerRoles.slice(0, 2).join(' · ') : course.outcome}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => setActiveProgramModal(course)}
                      variant="outline"
                      className="flex-1 py-4 text-xs font-bold border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl"
                    >
                      View Syllabus
                    </Button>
                    <Button
                      onClick={() => handleEnquire(`Enrollment Inquiry: ${course.title}`)}
                      className="flex-1 py-4 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-1"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. MARKET DEMAND & INDUSTRY GROWTH ANALYTICS                              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 font-bold uppercase tracking-widest text-xs">
              Industry Intelligence
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Private Security is a Multi-Billion Dollar Profession
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Private security has evolved from a low-skill, headcount-driven business into a <strong>technology-enabled, compliance-driven global industry</strong> with accelerating workforce demand.
            </p>
          </div>

          {/* Global & India Market Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Global Demand Table */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>Global Private Security Market</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Expanding across infrastructure, giga-projects & aviation</p>
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                  USD 260B–280B
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-700">
                      <th className="pb-3 font-semibold">Scope</th>
                      <th className="pb-3 font-semibold">Current Size</th>
                      <th className="pb-3 font-semibold">Forecast</th>
                      <th className="pb-3 font-semibold">CAGR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 text-slate-200">
                    <tr>
                      <td className="py-3 font-medium">Global Private Security</td>
                      <td className="py-3">USD 261.7 B (2025)</td>
                      <td className="py-3 text-blue-400 font-bold">USD 393.5 B (2034)</td>
                      <td className="py-3 font-bold text-emerald-400">5.1%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Global Security (Alt Scope)</td>
                      <td className="py-3">USD 276.8 B (2026)</td>
                      <td className="py-3 text-blue-400 font-bold">USD 455.0 B (2035)</td>
                      <td className="py-3 font-bold text-emerald-400">5.7%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Security Services (Managed/Tech)</td>
                      <td className="py-3">USD 4.6 B (2024)</td>
                      <td className="py-3 text-blue-400 font-bold">USD 8.0 B (2030)</td>
                      <td className="py-3 font-bold text-emerald-400">9.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Sources: Fortune Business Insights, Business Research Insights, Grand View Research.
              </p>
            </div>

            {/* India Demand Table */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Building className="w-5 h-5 text-indigo-400" />
                    <span>India Security Services Market</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">One of the largest & fastest-growing markets in the world</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">
                  8.9M+ Workforce
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-700">
                      <th className="pb-3 font-semibold">Metric</th>
                      <th className="pb-3 font-semibold">Growth Figure</th>
                      <th className="pb-3 font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 text-slate-200">
                    <tr>
                      <td className="py-3 font-medium">India Security Services</td>
                      <td className="py-3 text-blue-400 font-bold">USD 3,537.7 M (2025) · 4.8% CAGR</td>
                      <td className="py-3 text-slate-400">Technavio</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">India Security (Broader Scope)</td>
                      <td className="py-3 text-blue-400 font-bold">USD 9,927.2 M → USD 22,489.5 M (2033)</td>
                      <td className="py-3 text-slate-400">Grand View Research</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Physical Security Growth</td>
                      <td className="py-3 font-bold text-emerald-400">6.69% CAGR (2025–2035)</td>
                      <td className="py-3 text-slate-400">Market Research Future</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Private Security Workforce</td>
                      <td className="py-3 text-slate-200 font-bold">~8.9 Million across 22,000+ agencies</td>
                      <td className="py-3 text-slate-400">FICCI / SecurityLink</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                India employs millions of semi-skilled and skilled security personnel with immense career upward mobility.
              </p>
            </div>

          </div>

          {/* Overseas Recruitment Hotspots */}
          <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-900/90 border border-blue-500/30 rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-sky-400" />
              <span>International Recruitment Destinations for ISI Academy Certified Officers</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700 space-y-2">
                <div className="font-bold text-sky-300 text-sm">🌍 GCC / Middle East</div>
                <p className="text-slate-300 font-medium">UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman</p>
                <span className="text-[11px] text-slate-400 block">Focus: Giga-projects, luxury hospitality, oil & gas, aviation</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700 space-y-2">
                <div className="font-bold text-emerald-300 text-sm">🌏 Asia-Pacific</div>
                <p className="text-slate-300 font-medium">Singapore, Malaysia, Australia</p>
                <span className="text-[11px] text-slate-400 block">Focus: Critical infrastructure, data centers, major events</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700 space-y-2">
                <div className="font-bold text-purple-300 text-sm">🏰 Europe & UK</div>
                <p className="text-slate-300 font-medium">United Kingdom, Ireland</p>
                <span className="text-[11px] text-slate-400 block">Focus: Corporate headquarters, luxury retail, stadium security</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700 space-y-2">
                <div className="font-bold text-amber-300 text-sm">🗽 North America</div>
                <p className="text-slate-300 font-medium">Canada, United States</p>
                <span className="text-[11px] text-slate-400 block">Focus: Industrial complexes, corporate security, healthcare</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. DEMAND DRIVERS & 4 KEY PILLARS                                         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Catalysts for Growth
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Why Demand for Certified Security is Soaring
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Four powerful macro drivers are pushing the security demand curve up worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Regulatory & Compliance</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>PSARA 2005 Act</strong> mandates documented training & licensing standards.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Statutory industrial, fire safety, and workplace POSH compliance.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Insurance and client SLA contracts specify certified security officers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Infrastructure & Economy</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Rapid expansion of <strong>IT Parks, GCCs & Corporate Campuses</strong>.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Smart City missions, airports, metro, and logistics corridors.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Hyperscale data centres and critical infrastructure protection.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Technology & AI Convergence</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Shift to <strong>integrated security operations</strong> (CCTV + Access + VMS).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>AI video analytics and Security Operations Center (SOC) command desks.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Physical and cyber-physical security convergence requiring tech-literate officers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Overseas & Demographics</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Global giga-projects driving massive international talent recruitment.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ageing workforces in developed markets opening doors for certified Indian talent.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Premium compensation with accommodation and international allowances.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. SECTOR OPPORTUNITIES & COMPENSATION GUIDE                              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Where the Openings Are
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Sector-Wise Career Demand & Relevant Certifications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every industry vertical requires specialized security protocols and certified personnel.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs bg-white">
              <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 text-[11px] uppercase tracking-wider font-extrabold">
                <tr>
                  <th className="py-4 px-6">Industry Sector</th>
                  <th className="py-4 px-6">Why Demand Is Rising</th>
                  <th className="py-4 px-6">Relevant ISI Certification</th>
                  <th className="py-4 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { sector: "IT / ITES / GCCs", reason: "Mega campuses requiring integrated, tech-enabled access and executive safety", cert: "Certified Corporate Security Professional", icon: Laptop },
                  { sector: "Manufacturing & Industrial", reason: "Plant asset protection, material inward-outward control, pilferage prevention", cert: "Certified Industrial Security Professional (CISP)", icon: Cog },
                  { sector: "Data Centres", reason: "Mission-critical Tier IV infrastructure and multi-factor biometric protection", cert: "Certified SOC Professional (SOCP) & Integrated Tech", icon: Server },
                  { sector: "Healthcare & Hospitals", reason: "Patient safety, ER crisis de-escalation, maternity protection & compliance", cert: "Certified Healthcare Security Professional", icon: HeartPulse },
                  { sector: "Hospitality & Luxury Resorts", reason: "Discrete VIP protection, keycard access audit, high-profile event security", cert: "Certified Hospitality Security Professional", icon: Building2 },
                  { sector: "Retail & Shopping Malls", reason: "Loss prevention, anti-shoplifting EAS systems, crowd safety", cert: "Certified Retail Security Professional", icon: Coins },
                  { sector: "Banking & Financial Services", reason: "Strongroom vault protection, cash logistics armed escort, ATM surveillance", cert: "Certified Banking Security Professional", icon: Lock },
                  { sector: "Logistics & Warehouses", reason: "Cargo tracking, seal verification, yard access, and supply chain security", cert: "Certified Logistics Security Professional", icon: Truck },
                  { sector: "Education Campuses", reason: "Student safety, school transport verification, emergency lockdown readiness", cert: "Certified Campus Security Professional", icon: School },
                  { sector: "Events & Entertainment", reason: "Large crowd management, venue risk planning, anti-stampede coordination", cert: "Event Security Management Professional", icon: Users },
                  { sector: "Executive & VIP Protection", reason: "Protective intelligence, close protection details, convoy defensive tactics", cert: "Executive Protection Professional", icon: ShieldAlert }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <row.icon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{row.sector}</span>
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 max-w-xs">{row.reason}</td>
                    <td className="py-3.5 px-6 font-semibold text-blue-700">{row.cert}</td>
                    <td className="py-3.5 px-6">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => handleEnquire(`Sector Certification Inquiry: ${row.sector} - ${row.cert}`)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:bg-blue-100/50 h-8 px-3 rounded-lg"
                      >
                        Enquire →
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Indicative Compensation Callout */}
          <div className="p-8 rounded-3xl bg-blue-50/70 border border-blue-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">Market Salary Sample</div>
              <h3 className="text-xl font-bold text-slate-900">Indicative Compensation & Earning Potential</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As a market sample, a Security Officer at a large multinational provider (G4S / ISI) in India starts in the <strong>₹4.2–4.6 lakh per year</strong> range (source: AmbitionBox), with supervisory, management, and overseas postings paying materially higher with included accommodation and international allowances.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <Button 
                onClick={() => handleEnquire("Salary & Overseas Placement Consultation")}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-2xl shadow-md gap-2 text-xs"
              >
                <span>Check Eligibility & Salary Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. CAREER GROWTH PATH (FROM SECURITY GUARD TO SECURITY LEADER)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 font-bold uppercase tracking-widest text-xs">
              Career Roadmap
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              From Security Guard to Security Leader
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Each certification is engineered to open the next level, not just the first job.
            </p>
          </div>

          {/* Visual 5-Level Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { level: "Level 1: Entry Level", roles: "Security Guard · Security Officer · CCTV Operator · Control Room Operator", req: "CSGP / CSO Certification", icon: UserCheck, color: "border-blue-500/40 text-blue-400" },
              { level: "Level 2: Mid-Level", roles: "Security Supervisor · Security Executive · Security Coordinator · Site Supervisor", req: "CSS Certification", icon: Users, color: "border-indigo-500/40 text-indigo-400" },
              { level: "Level 3: Specialist", roles: "Security Investigator · Security Auditor · Risk Analyst · SOC Analyst", req: "CSO / SOCP / Risk Certifications", icon: Search, color: "border-purple-500/40 text-purple-400" },
              { level: "Level 4: Management", roles: "Security Manager · Operations Manager · Risk Manager · Facility Security Officer", req: "CSM / CISP Certification", icon: BriefcaseBusiness, color: "border-emerald-500/40 text-emerald-400" },
              { level: "Level 5: Leadership", roles: "Regional Security Manager · Director of Security · Chief Security Officer (CSO)", req: "CSM + Sector Specializations", icon: Award, color: "border-amber-500/40 text-amber-400" }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "bg-slate-800/90 border rounded-3xl p-6 space-y-3 flex flex-col justify-between hover:-translate-y-1 transition-all",
                  step.color
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Step 0{idx + 1}</span>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{step.level}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{step.roles}</p>
                </div>
                <div className="pt-3 border-t border-slate-700/80 text-[10px] text-slate-400">
                  Requirement: <strong className="text-white block mt-0.5">{step.req}</strong>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. TRAINING METHODOLOGY & ENTRY QUALIFICATION                             */}
      {/* ========================================================================= */}
      <section id="admissions" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Training Methodology */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
                Pedagogy & Execution
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Rigorous 6-Pillar Training Methodology
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We combine structured classroom academics with live fire drills, checkpoint simulations, and real operational internships across enterprise sites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Classroom Learning</span>
                  </div>
                  <p className="text-slate-600">Instructor-led professional theory and statutory compliance.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-indigo-600" />
                    <span>Practical Training</span>
                  </div>
                  <p className="text-slate-600">Hands-on exercises, screening, and security demonstrations.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-red-600" />
                    <span>Security Drills</span>
                  </div>
                  <p className="text-slate-600">Live emergency response, evacuation, and incident simulations.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Site Exposure</span>
                  </div>
                  <p className="text-slate-600">Field visits, industrial observation, and live deployments.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-sky-600" />
                    <span>Industry Internship</span>
                  </div>
                  <p className="text-slate-600">30 to 180 days real operational deployment with performance stipends.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span>Professional Growth</span>
                  </div>
                  <p className="text-slate-600">Workplace discipline, leadership, and communication skills.</p>
                </div>
              </div>
            </div>

            {/* Right: Entry Qualifications & Veteran Priority */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="outline" className="px-4 py-1.5 border-emerald-200 text-emerald-700 bg-emerald-50 font-bold uppercase tracking-widest text-xs">
                Admissions & Eligibility
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Low Entry Barrier, High Career Ceiling
              </h2>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-bold">
                    <tr>
                      <th className="py-3 px-4">Program Level</th>
                      <th className="py-3 px-4">Minimum Eligibility Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Security Guard Program</td>
                      <td className="py-3 px-4">10th Pass or equivalent · Age 18 years and above</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Security Supervisor Program</td>
                      <td className="py-3 px-4">12th Pass / Diploma (Experience preferred but not mandatory)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Officer & Management Programs</td>
                      <td className="py-3 px-4">Diploma / Graduate preferred · Working professionals welcome</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ex-Servicemen Callout */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0" />
                <div className="text-xs leading-relaxed">
                  <strong className="block font-bold">Ex-Servicemen & Defense Veterans:</strong>
                  Ex-Servicemen from the Indian Armed Forces and paramilitary are strongly encouraged to apply. Fast-track leadership pathways available.
                </div>
              </div>

              {/* Smart Career Move Points */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Why Private Security Is a Smart Career Move:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600" /> Large, growing employer</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600" /> Recession-resilient spend</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600" /> AI & Tech salary upside</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600" /> Overseas mobility in 10+ nations</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8. CERTIFICATION AWARDED & REFERENCES                                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Credentials & Governance
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Certifications Awarded Upon Graduation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every successful candidate receives verifiable physical and digital credentials backed by four decades of industry excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {[
              { title: "Course Completion Certificate", desc: "Verifiable professional certification in specialized domain", icon: Award },
              { title: "Industry Internship Certificate", desc: "Documenting hands-on operational hours & deployment score", icon: FileText },
              { title: "Skills Assessment Report", desc: "Detailed performance matrix across drills & inspections", icon: FileSpreadsheet },
              { title: "Career Guidance Support", desc: "1-on-1 resume optimization & placement recommendations", icon: Compass },
              { title: "Interview Preparation Support", desc: "Mock interviews & client screening coaching", icon: Users }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-3xl border border-slate-200 space-y-2 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Research References Citation Box */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs text-slate-500">
            <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Research Citations & Market Data References</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Market figures cited on this page are directional estimates from third-party research firms retrieved in 2025: (1) Fortune Business Insights — Global private security market 2025–2034; (2) Business Research Insights — Global private security 2026–2035; (3) Grand View Research — Global security services & India security market to 2033; (4) Technavio — India security services market 2026–2030; (5) Market Research Future — India physical security 2025–2035; (6) FICCI / SecurityLink India — India private security workforce (~8.9M across 22,000+ agencies); (7) AmbitionBox — Indicative Security Officer compensation in India.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 9. FINAL ENROLL TODAY CTA                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Admissions Open Across Tamil Nadu & Pan-India</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Build a Professional, Future-Ready Career in Private Security
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Normal Courses (90+30 Days) · Advanced Courses (180+180 Days) · Training Hubs in Madurai, Coimbatore & Chennai. Career opportunities across India and 10+ international nations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={() => scrollToSection("course-sliders")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-9 py-6 rounded-2xl shadow-xl shadow-blue-600/30 gap-2"
            >
              <span>Explore Course Catalogs</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button 
              onClick={() => handleEnquire("Final CTA Enrollment & Admissions Consultation")}
              size="lg"
              variant="outline"
              className="border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-9 py-6 rounded-2xl gap-2"
            >
              <Users className="w-5 h-5 text-blue-400" />
              <span>Talk to an Academic Counselor</span>
            </Button>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* PROGRAM DETAIL MODAL                                                      */}
      {/* ========================================================================= */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">
                  {activeProgramModal.badge || "Professional Certification"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{activeProgramModal.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeProgramModal.desc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium block">Duration & Format</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{activeProgramModal.duration}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium block">Training Centers</span>
                <span className="font-bold text-blue-700 text-sm mt-0.5 block">{activeProgramModal.campuses || "Madurai · Coimbatore · Chennai"}</span>
              </div>
            </div>

            {/* Modules Section */}
            {activeProgramModal.modules && activeProgramModal.modules.length > 0 && (
              <div className="mb-6 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Comprehensive Syllabus Modules ({activeProgramModal.modules.length})
                </div>
                <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 max-h-48 overflow-y-auto">
                  {activeProgramModal.modules.map((mod: string, idx: number) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Outcomes & Roles */}
            {activeProgramModal.careerRoles && (
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-slate-900 space-y-1 mb-6 text-xs">
                <div className="text-blue-800 font-bold">Target Career Roles:</div>
                <div className="text-slate-800 font-semibold">{activeProgramModal.careerRoles.join(' · ')}</div>
                {activeProgramModal.eligibility && (
                  <div className="text-slate-600 text-[11px] pt-1 border-t border-blue-200/60 mt-2">
                    Eligibility: <strong>{activeProgramModal.eligibility}</strong>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-3">
              <Button 
                variant="outline"
                onClick={() => setActiveProgramModal(null)}
                className="flex-1 py-5 rounded-xl border-slate-200 text-slate-700"
              >
                Close
              </Button>
              <Button 
                onClick={() => {
                  const title = activeProgramModal.title;
                  setActiveProgramModal(null);
                  handleEnquire(`Program Enrollment: ${title}`);
                }}
                className="flex-1 py-5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white gap-2"
              >
                <span>Apply for Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
