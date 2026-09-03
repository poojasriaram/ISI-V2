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
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  const [selectedTierTab, setSelectedTierTab] = useState<string>("certificates");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProgramModal, setActiveProgramModal] = useState<any | null>(null);

  // Active slide index state for each of the 8 course sliders
  const [carouselIndices, setCarouselIndices] = useState<{ [key: number]: number }>({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  });

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

  // 8 COURSES WITH INDIVIDUAL IMAGE CAROUSELS (Academy Material Aligned)
  const eightCoursePortfolio = [
    {
      id: 0,
      title: "AI & Advanced Computing",
      badge: "C-DAC PG-DAC Aligned",
      images: [enterpriseImg, cyberRangeImg, academyHeroImg],
      captions: ["AI Research Lab", "SOC Machine Learning Analytics", "High Performance Cluster"],
      desc: "Master Enterprise Java Spring Boot microservices, Python AI models, CNN diagnostics, React.js, PostgreSQL/MongoDB, and secure SDLC practices.",
      modules: ["Spring Boot & React", "TensorFlow & PyTorch", "Deep Learning", "PostgreSQL & MongoDB"],
      outcome: "Full-Stack AI Developer / Software Engineer",
      labs: "C-DAC Aligned High Performance Computing & Software Security Suite"
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
      labs: "Air-Gapped Cyber Range & Splunk Security Operations Simulation Center"
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
      labs: "Hardware Interfacing & Industrial Protocol Calibration Facility"
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
      labs: "High-Voltage EV Powertrain & CAN Bus Vulnerability Analysis Lab"
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
      labs: "Autonomous Flight Testing Enclosure & Photogrammetry Analytics Suite"
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
      labs: "Municipal IoT Telemetry Sandbox & 5G Edge Computing Command Center"
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
      labs: "Quantum Optics Simulation Bench & Commercial QKD Hardware Sandbox"
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
      labs: "Full-Scale Raised Floor Data Center Mock-up & DCIM Command Platform"
    }
  ];

  // 5 EXPERIENTIAL LEARNING LOCATIONS
  const experientialLocations = [
    {
      title: "Tier-4 NOCs & SOCs",
      desc: "Scholars monitor live network traffic, triage real alerts, and execute incident response playbooks under certified analyst supervision.",
      icon: Network,
      image: cyberRangeImg
    },
    {
      title: "Hyperscale Data Centers",
      desc: "Scholars walk live raised-floor environments, interact with CRAC/CRAH cooling systems, and master DCIM platforms used by global colocation providers.",
      icon: Server,
      image: academyHeroImg
    },
    {
      title: "Smart City Grids & Municipal IoT",
      desc: "Working alongside civic technology partners, scholars engage with sensor telemetry, LoRaWAN gateways, and 100 Smart Cities dashboards.",
      icon: Globe,
      image: smartCityImg
    },
    {
      title: "Healthcare IT Networks",
      desc: "Embedded in hospital environments interacting with Hospital Information Systems (HIS), Electronic Health Records (EHR), and ABDM compliance stacks.",
      icon: HeartPulse,
      image: healthcareItImg
    },
    {
      title: "EV Manufacturing Floors & Testing",
      desc: "Participate in battery pack assembly, BMS firmware flashing, high-voltage safety protocol execution (AIS-156), and AC/DC charger commissioning.",
      icon: Zap,
      image: evLabImg
    }
  ];

  // INSTITUTIONAL MOU PARTNERS
  const mouDomains = [
    { domain: "IT & Cloud", categories: "IT Conglomerates, GCCs, Cloud Providers", partners: "Cisco Partners, HCL, Infosys BPM, TCS iON ecosystem firms" },
    { domain: "BFSI (Banking & Finance)", categories: "Core Banking IT, Insurance Tech, Payment Infra", partners: "Major BFSI IT divisions with SOC/NOC operations" },
    { domain: "EV & Automotive", categories: "OEMs, Charging Infra Providers, Battery Recyclers", partners: "Tata Motors (EV Div), Ather Energy, Ola Electric, ABB E-Mobility" },
    { domain: "Healthcare", categories: "Hospital Networks, Medical Device OEMs, Health-Tech", partners: "Apollo Hospitals, Fortis Healthcare, leading IoMT device OEMs" },
    { domain: "Infrastructure & MEP", categories: "Conglomerates, Facility Management, DC Operators", partners: "L&T, Godrej Interio, JLL, CBRE, Schneider Electric Partners" },
    { domain: "Drone & Geospatial", categories: "AgriTech, Mining, Surveying, Defense-Adjacent", partners: "DGCA-approved Remote Pilot Training Organizations (RPTOs)" }
  ];

  // REDESIGNED 4 ACADEMIC PROGRAM TIERS (Image-Driven Cards)
  const programTiersData = [
    {
      id: "certificates",
      title: "Certificate Programs",
      duration: "90 Days (3 Months)",
      image: cyberRangeImg,
      badge: "Targeted Skill Acceleration",
      desc: "Targeted 90-day intensive technical certificates designed for fast-track skill acquisition in specialized domain areas.",
      highlights: ["EV Battery Tech & BMS", "Cybersecurity & DPDPA", "IoT Edge Computing", "Smart City & 5G IoT", "Drone Ops & Analytics", "Robotics & Automation", "Quantum Computing", "Medical IT & Health Informatics", "Cisco CCNA Prep", "DC Facility Operations"],
      count: "10 Programs Available"
    },
    {
      id: "diplomas",
      title: "Diploma Programs",
      duration: "6 Months (3M Academic + 3M Residency)",
      image: evLabImg,
      badge: "Comprehensive Mastery + Residency",
      desc: "Deep 6-month hands-on diplomas culminating in a mandatory 3-Month Guaranteed Industry Residency deployment.",
      highlights: ["EV Tech & Maintenance", "MEP & Smart Building HVAC", "IoT Embedded Systems (C-DAC)", "Cyber Security & Forensics (C-DAC)", "Medical Instrumentation", "Data Center DCIM Ops", "Commercial Drone Surveying", "Cloud Security DevSecOps"],
      count: "8 Programs Available"
    },
    {
      id: "degrees",
      title: "Undergraduate Degrees",
      duration: "3-4 Years (Blended + Residency)",
      image: academyHeroImg,
      badge: "B.Tech & B.Sc Degree Pathways",
      desc: "Blended degree programs providing physical lab access, localized mentorship, and official support for IIT Madras & IIT Kanpur online degrees.",
      highlights: ["B.Tech EV Engineering", "B.Tech/B.Sc Robotics & AI", "B.Tech/B.Sc Medical Instrumentation", "B.Sc Cybersecurity & Quantum", "B.Tech Data Center Engineering", "IIT Madras & IIT Kanpur Offline Support"],
      count: "6 Degree Options"
    },
    {
      id: "pg-diplomas",
      title: "Postgraduate Programs",
      duration: "24 Weeks to 1 Year",
      image: quantumImg,
      badge: "C-DAC Official & Proprietary PG Diplomas",
      desc: "Official C-DAC affiliated PG Diplomas (delivering PGCP-ITISS, PG-DCSF, PG-DIoT, PG-DESD, PG-DAC via C-CAT) & Advanced Proprietary PG Diplomas.",
      highlights: ["Official C-DAC PG-DCSF", "Official C-DAC PG-DESD", "Official C-DAC PG-DIoT", "Official C-DAC PG-DAC", "Advanced EV Systems & Auto Cyber", "Quantum Cryptography & Secure Comms", "Medical IT Systems Analytics", "DC Green Infrastructure"],
      count: "9 PG Diplomas"
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-100/80 border border-blue-200 rounded-full text-blue-700 font-bold text-xs md:text-sm uppercase tracking-wider shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>The ISI Academic Advantage</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Build Security Expertise. <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  Build Safer Organizations.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                ISI Academy develops the skills, knowledge and capabilities required to build the next generation of security professionals and enterprise security teams.
              </p>

              {/* Positioning Badges */}
              <div className="pt-2 pb-4 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> LEARN
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> PRACTICE
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" /> CERTIFY
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> DEPLOY
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> GROW
                </span>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button 
                  onClick={() => scrollToSection("course-sliders")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-lg shadow-blue-500/20 transition-all gap-2 hover:-translate-y-0.5"
                >
                  <span>Explore Course Portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <Button 
                  onClick={() => handleEnquire("Hero Advisor Consultation Request")}
                  size="lg"
                  variant="outline"
                  className="border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-8 py-6 rounded-2xl transition-all gap-2"
                >
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Talk to an Academy Advisor</span>
                </Button>
              </div>

              {/* Micro Stats Bar */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">6 Campuses</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Tamil Nadu Network</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">3-Month</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Guaranteed Residency</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">C-DAC & Cisco</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Authorized Partner</div>
                </div>
              </div>

            </div>

            {/* Right Visual Concept */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-[2.2rem] bg-white border border-slate-200 overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-shadow">
                  <img 
                    src={academyHeroImg} 
                    alt="ISI Academy Security Command Center and Learning Lab" 
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-4 text-slate-900">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Security + Technology + Enterprise</div>
                      <div className="text-xs text-slate-600">Targeting the 500,000+ national security talent gap</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. HERO-LEVEL ACADEMY PHILOSOPHY STATEMENT                                */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-center space-y-8 relative z-10">
          
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 font-bold uppercase tracking-widest text-xs">
            Hero Academy Philosophy
          </Badge>

          {/* MAJOR VISUAL STATEMENT */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase">
            LEARN. PRACTICE. LEARN. PRACTICE. GROW.
          </h2>

          {/* SUPPORTING COPY */}
          <p className="text-base sm:text-xl lg:text-2xl text-blue-100 font-normal max-w-4xl mx-auto leading-relaxed italic">
            "Learning that moves beyond the classroom. Build the knowledge. Practice it in real environments. Apply it to real problems. Learn from the experience. Practice again. Grow into the professional industry needs."
          </p>

          {/* Experiential Real-Environment Cards Grid */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {experientialLocations.map((loc, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-left space-y-2 hover:border-blue-400/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-400/30">
                  <loc.icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white leading-tight">{loc.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-3 leading-normal">{loc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. 8 COURSE SLIDERS / CARDS SECTION (MOVED HIGHER)                       */}
      {/* ========================================================================= */}
      <section id="course-sliders" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Domain Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              8 Core Technology Domain Portfolios
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our 8 specialized domain areas. Each portfolio features live multi-image lab carousels, target career outcomes, and industry-standard toolchains.
            </p>
          </div>

          {/* 8 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {eightCoursePortfolio.map((course) => {
              const currentSlide = carouselIndices[course.id] || 0;
              const totalSlides = course.images.length;

              return (
                <div 
                  key={course.id}
                  className="bg-slate-50/90 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* INDIVIDUAL IMAGE CAROUSEL FOR EACH COURSE CARD */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img 
                      src={course.images[currentSlide]} 
                      alt={`${course.title} ${currentSlide + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 bg-blue-600 text-white rounded-full shadow-xs">
                      {course.badge}
                    </span>

                    {/* Carousel Prev/Next Buttons */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevSlide(course.id, totalSlides); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white hover:bg-blue-600 flex items-center justify-center transition-colors"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); nextSlide(course.id, totalSlides); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white hover:bg-blue-600 flex items-center justify-center transition-colors"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                      {course.images.map((_, iIdx) => (
                        <div 
                          key={iIdx}
                          onClick={() => setCarouselIndices(prev => ({ ...prev, [course.id]: iIdx }))}
                          className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all ${iIdx === currentSlide ? 'bg-blue-400 w-4' : 'bg-white/60'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Course Details Content */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {course.desc}
                      </p>
                    </div>

                    {/* Key Modules Tags */}
                    <div className="space-y-2 pt-2 border-t border-slate-200/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Modules
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.modules.map((mod, mIdx) => (
                          <span key={mIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Career Outcome & CTA */}
                    <div className="space-y-3 pt-2">
                      <div className="text-[11px] text-slate-500">
                        Outcome: <strong className="text-blue-700 font-bold">{course.outcome}</strong>
                      </div>
                      <Button 
                        onClick={() => setActiveProgramModal({
                          title: course.title,
                          duration: "Certificates, Diplomas & Degree Options",
                          batch: "Cohort Intake Open",
                          campuses: "Chennai, Coimbatore, Madurai, Hosur, Salem, Sivagangai",
                          desc: course.desc,
                          labs: course.labs
                        })}
                        variant="outline"
                        className="w-full justify-between rounded-xl text-xs font-bold border-slate-200 text-blue-700 hover:bg-blue-600 hover:text-white transition-all"
                      >
                        <span>Explore Domain</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. LEARNING PATHWAYS (CAREER & ROLE PROGRESSION)                          */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Target Candidates
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Tailored Career Pathways
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether entering as a graduate, upgrading as a lateral professional, or scaling as an enterprise security team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center border border-blue-200">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">Beginners & STEM Graduates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bridge the 50-70% STEM graduate employability gap. Transition from theoretical textbook knowledge to physical lab mastery, certified toolchains, and a mandatory 3-Month Guaranteed Industry Residency.
              </p>
              <Button 
                onClick={() => handleEnquire("Graduate Career Pathway Consultation")}
                variant="link" className="p-0 text-blue-700 font-bold text-xs"
              >
                View Graduate Pathways →
              </Button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center border border-indigo-200">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lateral Tech Professionals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reskill into high-demand domain specializations: Automotive Cyber Security (ISO 21434), DevSecOps, Quantum Cryptography, Biomedical IT, or Hyperscale DC Infrastructure Management.
              </p>
              <Button 
                onClick={() => handleEnquire("Lateral Reskilling Pathway Consultation")}
                variant="link" className="p-0 text-indigo-700 font-bold text-xs"
              >
                View Reskilling Pathways →
              </Button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center border border-emerald-200">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">Enterprise Security Teams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customized workforce development programs for corporate security teams, NOC/SOC analysts, and critical infrastructure engineers. Aligned with DPDPA 2023 and enterprise compliance rules.
              </p>
              <Button 
                onClick={() => handleEnquire("Enterprise Workforce Development Consultation")}
                variant="link" className="p-0 text-emerald-700 font-bold text-xs"
              >
                View Enterprise Training →
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. STRONGER INDUSTRY POSITIONING & MOU PLACEMENT PIPELINE                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Industry Deployment Engine
            </Badge>
            
            {/* MAJOR POSITIONING HEADLINE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Don't just learn technology. <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Learn how technology is deployed.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our placement pipeline is supported by contractual MoUs and defined deployment roles, establishing year-round operational slots.
            </p>
          </div>

          {/* VISUAL CONNECTION FLOW (5 NODES) */}
          <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-blue-50/60 border border-blue-200 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-6">
              The 5-Stage Career Deployment Engine
            </span>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-bold text-slate-900">
              <span className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" /> 1. LEARNING
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-600" /> 2. LABS
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
                <Workflow className="w-4 h-4 text-purple-600" /> 3. PROJECTS
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" /> 4. INDUSTRY EXPOSURE
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-sky-600" /> 5. PLACEMENT
              </span>
            </div>
          </div>

          {/* MoU Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {mouDomains.map((dom, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 lg:p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 px-3 py-1 bg-blue-100 rounded-full border border-blue-200">
                    MoU Partner Network
                  </span>
                  <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {dom.domain}
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold block">Partner Categories:</span>
                    <span className="text-slate-800 font-medium">{dom.categories}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Representative Partners:</span>
                    <span className="text-blue-700 font-bold">{dom.partners}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stipend & PPO Pathways Card */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-8 space-y-4">
              <Badge className="bg-white/20 text-white border border-white/30 font-bold uppercase text-xs">
                Stipend & PPO Pathways
              </Badge>
              <h3 className="text-2xl sm:text-4xl font-black text-white">Incentivizing Excellence & Accessibility</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                The industry residency is not unpaid labor. Every deployed scholar receives a performance-backed monthly stipend calibrated to the domain and partner organization. This ensures <strong>Financial Accessibility</strong> for scholars from Tier-2/Tier-3 cities and serves as <strong>Performance Signaling</strong> toward Pre-Placement Offers (PPOs).
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Button 
                onClick={() => handleEnquire("Corporate Placement MoU Partnership")}
                size="lg"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-2xl shadow-xl gap-2"
              >
                <span>Partner as MoU Employer</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. REDESIGNED ACADEMIC PROGRAM TIERS (IMAGE-DRIVEN CARDS)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-widest text-xs">
              Academic Program Structure
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Program Tier Hierarchy
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our structured academic hierarchy from 90-day targeted certificates to C-DAC PG Diplomas and blended undergraduate degrees.
            </p>
          </div>

          {/* 4 IMAGE-DRIVEN CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {programTiersData.map((tier) => (
              <div 
                key={tier.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* IMAGE TOP */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={tier.image} 
                    alt={tier.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 bg-blue-600 text-white rounded-full shadow-xs">
                    {tier.duration}
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    {tier.count}
                  </span>
                </div>

                {/* CONTENT BOTTOM */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                      {tier.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tier.highlights.slice(0, 4).map((hl, hIdx) => (
                        <span key={hIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleEnquire(`Program Tier Category: ${tier.title}`)}
                    className="w-full rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white text-xs py-5"
                  >
                    <span>Explore {tier.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. FINAL ACADEMY ADVISOR & COUNSELOR CTA                                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Build Capability?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Ready to Become an Industry-Ready Professional?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Admissions are open across our Chennai, Coimbatore, Madurai, Hosur, Salem, and Sivagangai campuses. Speak to an Academic Counselor today. Your future is not a degree. It is a deployment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={() => scrollToSection("course-sliders")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-9 py-6 rounded-2xl shadow-xl shadow-blue-600/30 gap-2"
            >
              <span>Explore 8 Course Portfolios</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button 
              onClick={() => handleEnquire("Final CTA Counselor Consultation")}
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
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Program Overview</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{activeProgramModal.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeProgramModal.desc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium block">Program Types</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{activeProgramModal.duration}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium block">Intake Status</span>
                <span className="font-bold text-blue-700 text-sm mt-0.5 block">{activeProgramModal.batch}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-slate-900 space-y-2 mb-6 text-xs">
              <div className="text-blue-800 font-bold">Campus Availability & Labs</div>
              <div className="text-slate-800 font-semibold">{activeProgramModal.campuses}</div>
              {activeProgramModal.labs && (
                <div className="text-slate-600 mt-1">Lab Facility: <strong className="text-blue-700">{activeProgramModal.labs}</strong></div>
              )}
            </div>

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
