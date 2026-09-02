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
  Shield,
  HelpCircle,
  BarChart3,
  Lightbulb,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ISIAcademyProps {
  onEnquireClick?: (programTitle?: string) => void;
}

export const ISIAcademy: React.FC<ISIAcademyProps> = ({ onEnquireClick }) => {
  const [activeTab, setActiveTab] = useState<string>("certificates");

  const campuses = [
    { name: "Chennai", city: "📍 Chennai", rationale: "IT corridor (OMR/Sholinganallur), EV manufacturing hub (Hosur-Sriperumbudur belt), major hospital networks, hyperscale DC clusters" },
    { name: "Coimbatore", city: "📍 Coimbatore", rationale: "'Manchester of South India' — industrial automation, textile-tech, emerging IT parks, strong engineering college ecosystem" },
    { name: "Madurai", city: "📍 Madurai", rationale: "Southern Tamil Nadu's education and healthcare hub, C-DAC's regional PG diploma delivery anchor, growing Smart City infrastructure" },
    { name: "Hosur", city: "📍 Hosur", rationale: "India's emerging EV capital — Tata Motors, Ather Energy, TVS Motors manufacturing within a 30 km radius; ideal for EV residency deployments" },
    { name: "Salem", city: "📍 Salem", rationale: "Industrial corridor node, steel/metals manufacturing, emerging smart city, strategic for MEP and infrastructure engineering placements" },
    { name: "Sivagangai", city: "📍 Sivagangai", rationale: "Deep rural Tamil Nadu — ISI Academy's commitment to democratizing access; positioned for agricultural drone technology, rural IoT, and agri-tech innovation" }
  ];

  const mouPartners = [
    { domain: "IT & Cloud", categories: "IT Conglomerates, Global Capability Centers, Cloud Providers", partners: "Cisco Partners, HCL, Infosys BPM, TCS iON ecosystem firms" },
    { domain: "BFSI", categories: "Core Banking IT, Insurance Tech, Payment Infrastructure", partners: "Major BFSI IT divisions with SOC/NOC operations" },
    { domain: "EV & Automotive", categories: "OEMs, Charging Infra Providers, Battery Recyclers", partners: "Tata Motors (EV Division), Ather Energy, Ola Electric, ABB E-Mobility" },
    { domain: "Healthcare", categories: "Hospital Networks, Medical Device OEMs, Health-Tech Startups", partners: "Apollo Hospitals, Fortis Healthcare, leading IoMT device manufacturers" },
    { domain: "Infrastructure & MEP", categories: "Conglomerates, Facility Management Firms, DC Operators", partners: "L&T (Construction & Technology), Godrej Interio, JLL, CBRE, Schneider Electric Partners" },
    { domain: "Drone & Geospatial", categories: "AgriTech, Mining, Surveying, Defense-Adjacent Startups", partners: "DGCA-approved Remote Pilot Training Organizations (RPTOs)" }
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* 🌟 HERO & PREAMBLE */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-xs md:text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              The "Learn → Build → Deploy" Model
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              The ISI Academic Advantage
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Engineering industry-ready professionals through an experiential three-phase academic framework embedded into every Certificate, Diploma, and Degree program.
            </p>
          </div>

          {/* Preamble Card */}
          <div className="mt-12 bg-card/60 backdrop-blur-md border border-border/60 rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <BookOpen className="w-6 h-6" />
              <span>Why This Model Exists</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              India's higher education system graduates over 3.5 million STEM students annually — yet industry reports from NASSCOM, FICCI, and the NSDC consistently flag a <strong>50–70% employability gap</strong> in emerging technology sectors. The root cause is structural: most institutions deliver theory-heavy curricula with minimal exposure to real-world tools, live systems, or production-grade environments.
            </p>
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-foreground font-semibold text-sm md:text-base leading-relaxed">
              ISI Academy was built to eliminate this gap entirely. Every scholar completes a <strong>Mandatory 3-Month Industry Residency</strong> before graduation — a structured, mentored deployment in a live operational environment.
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ PEDAGOGICAL PHILOSOPHY & EXPERIENTIAL LEARNING */}
      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
            Pedagogical Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">Experiential, Not Transactional</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From passive consumption to active construction. Rooted in Kolb's Experiential Learning Cycle and Dewey's philosophy of learning-by-doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl">
                <Network className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Tier-4 NOCs & SOCs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Scholars monitor live network traffic, triage real security alerts, and execute incident response playbooks under supervision of certified analysts with real operational stakes.
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 rounded-xl">
                <Server className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Hyperscale Data Centers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Scholars interact with CRAC/CRAH cooling systems, understand PDU configurations, raised-floor environments, and DCIM platforms used by global providers.
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Smart City & Municipal IoT</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Engage with sensor telemetry, LoRaWAN gateways, and real-time dashboarding deployed under Government of India's 100 Smart Cities Mission.
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-red-500/10 text-red-600 rounded-xl">
                <HeartPulse className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Healthcare IT Networks</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Interact with Hospital Information Systems (HIS), Electronic Health Records (EHR), and Ayushman Bharat Digital Mission (ABDM) compliance stacks.
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">EV Manufacturing & Testing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Participate in battery pack assembly, BMS firmware flashing, high-voltage safety protocol execution (AIS-156 compliance), and charging station commissioning.
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/50 hover:border-primary/50 transition-all shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl">
                <Radio className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Drone & Robotics Labs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Multi-rotor and fixed-wing training, flight simulation, LiDAR sensors, photogrammetry, and ROS (Robot Operating System) environments.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🤝 INDUSTRY PLACEMENT PIPELINE & STIPEND PATHWAYS */}
      <section className="py-16 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
              Industry Placement Pipeline
            </Badge>
            <h2 className="text-3xl font-bold">MoU Network & Stipend Pathways</h2>
            <p className="text-muted-foreground">
              Built on institutional Memoranda of Understanding (MoUs) establishing recurring, year-round deployment slots and performance-backed stipends.
            </p>
          </div>

          {/* MoU Network Table */}
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-lg mb-12">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-foreground font-bold uppercase text-xs">
                <tr>
                  <th className="p-4">Domain</th>
                  <th className="p-4">Partner Categories</th>
                  <th className="p-4">Representative Partners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-muted-foreground">
                {mouPartners.map((p, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-foreground whitespace-nowrap">{p.domain}</td>
                    <td className="p-4">{p.categories}</td>
                    <td className="p-4 font-medium text-primary">{p.partners}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-3">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Financial Accessibility</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Stipends calibrated to partner orgs enable scholars from Tier-2 and Tier-3 cities across Tamil Nadu to participate without financial hardship, keeping programs meritocratic.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-3">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Performance-backed PPO Trajectory</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Scholars demonstrating technical competence and maturity during residency enter a high-probability trajectory toward Pre-Placement Offers (PPOs) from employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 CAMPUS NETWORK ACROSS TAMIL NADU */}
      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
            Standardized Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">Six Strategic Campus Locations</h2>
          <p className="text-muted-foreground">
            Standardized education across Tamil Nadu with identical lab infrastructure in every campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((c, i) => (
            <Card key={i} className="bg-card/60 border-border/60 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {c.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {c.rationale}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🎓 COMPLETE ACADEMIC PROGRAM CATALOG */}
      <section className="py-20 bg-muted/10 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
              Program Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">Academic Programs & Certifications</h2>
            <p className="text-muted-foreground">
              Select a tier below to explore certificate, diploma, undergraduate, and post-graduate offerings.
            </p>
          </div>

          <Tabs defaultValue="certificates" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-1.5 bg-muted/60 rounded-2xl mb-10">
              <TabsTrigger value="certificates" className="py-3 text-xs md:text-sm font-bold rounded-xl">
                1️⃣ Certificates (90 Days)
              </TabsTrigger>
              <TabsTrigger value="diplomas" className="py-3 text-xs md:text-sm font-bold rounded-xl">
                2️⃣ Diplomas (6 Months)
              </TabsTrigger>
              <TabsTrigger value="degrees" className="py-3 text-xs md:text-sm font-bold rounded-xl">
                3️⃣ Degrees (B.Tech / B.Sc)
              </TabsTrigger>
              <TabsTrigger value="pgdiplomas" className="py-3 text-xs md:text-sm font-bold rounded-xl">
                4️⃣ PG Diplomas (C-DAC / ISI)
              </TabsTrigger>
            </TabsList>

            {/* 1️⃣ CERTIFICATE PROGRAMS */}
            <TabsContent value="certificates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🔌 EV Fundamentals & Battery Tech</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Li-ion chemistry, BMS architecture, EV powertrain mechanics, AC/DC charging (IS 17017 / AIS-156), high-voltage safety.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Chennai, Hosur, Coimbatore</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in EV Fundamentals")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🔐 Cybersecurity & DPDPA Compliance</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Network defense, Nmap, Wireshark, Metasploit, DPDPA 2023 compliance frameworks, IT Act 2000, SOC basics.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Chennai, Madurai, Coimbatore, Salem</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Cybersecurity & DPDPA")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🌐 Introduction to IoT & Edge Computing</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Arduino/ESP32/Raspberry Pi, MQTT, CoAP, BLE, AWS IoT Core & Azure IoT Hub cloud dashboards, Edge gateways.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Coimbatore, Madurai, Sivagangai</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in IoT & Edge Computing")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🏭 Smart City & 5G IoT Fundamentals</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Municipal IoT adoption (water/air/streetlights), 5G network slicing, V2X communication, urban system data analytics.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Chennai, Madurai, Salem</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Smart City & 5G IoT")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🚁 Drone Operations & Aerial Analytics</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>DGCA Rules 2021/2022, Digital Sky, photogrammetry, QGIS/Pix4D, agricultural NDVI, mining & infrastructure surveying.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Sivagangai, Coimbatore, Salem</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Drone Operations")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🤖 Fundamentals of Robotics & Automation</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Kinematics, ROS (Robot Operating System), Gazebo, RViz, PLC ladder logic, SCADA, sensors & actuators.</p>
                    <div className="text-xs font-semibold text-foreground">Campuses: Chennai, Coimbatore, Hosur</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Robotics & Automation")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 2️⃣ DIPLOMA PROGRAMS */}
            <TabsContent value="diplomas" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">⚡ Diploma in EV Technology & Maintenance</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months (3M Academic + 3M Residency)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>EV Powertrain Oscilloscope diagnostics, CAN bus message decoding, cell-level BMS troubleshooting, AIS-156 safety, charging station deployment.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in EV Technology")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">⚙️ Advanced Diploma in MEP & HVAC Design</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months (3M Academic + 3M Residency)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>AutoCAD/Revit MEP 3D BIM, Carrier HAP heat load calculations, VRV/VRF layout, Data Center cooling & PUE optimization.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in MEP & HVAC Design")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">📡 Diploma in IoT & Embedded Systems</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months (3M Academic + 3M Residency)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Embedded C/C++, ARM Cortex-M (STM32), FreeRTOS, Modbus, OPC UA, PROFINET, C-DAC PG-DESD aligned curriculum.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in IoT & Embedded Systems")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🛡️ Diploma in Cyber Security & Forensics</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months (3M Academic + 3M Residency)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Ghidra malware analysis, NIST Incident Response, Splunk/QRadar SOC Ops, Volatility memory forensics, C-DAC PG-DCSF pathway.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in Cyber Security & Forensics")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 3️⃣ UNDERGRADUATE DEGREES */}
            <TabsContent value="degrees" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-foreground">🚗 B.Tech in EV Engineering & Sustainable Mobility</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Automotive engineering, Field-Oriented Control (FOC) motor algorithms, AUTOSAR architecture, BMS Kalman filtering, V2X security.</p>
                    <div className="text-xs font-semibold text-foreground">Duration: 3 to 4 Years (All 6 Campuses)</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech EV Engineering")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-foreground">💻 B.Tech / B.Sc in Robotics, Drones & AI</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Deep learning (CNN/RNN/Transformers), Computer Vision (YOLO/SLAM), path planning (A*/RRT), autonomous drone controllers.</p>
                    <div className="text-xs font-semibold text-foreground">Duration: 3 to 4 Years (Chennai, Coimbatore, Madurai, Hosur)</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech Robotics & AI")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60 md:col-span-2">
                  <CardHeader className="bg-primary/5 rounded-t-xl">
                    <CardTitle className="text-base font-bold text-primary flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Blended B.Sc/B.S Support — IIT Madras & IIT Kanpur
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground pt-4">
                    <p>ISI Academy provides physical lab access across campuses, localized offline faculty mentorship, hands-on hardware labs, and a 3-Month Industry Residency for students enrolled in IIT Madras (Data Science) & IIT Kanpur (AI) online degrees.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("IIT Blended Learning Support")} className="w-auto">Learn About IIT Support</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 4️⃣ POST GRADUATE DIPLOMAS */}
            <TabsContent value="pgdiplomas" className="space-y-6">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground text-sm">🏆 C-DAC Authorized Training Partner</div>
                  <div className="text-xs text-muted-foreground">Admission via C-CAT (C-DAC's Common Admission Test)</div>
                </div>
                <Badge className="bg-primary text-primary-foreground">MeitY Govt of India</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PGCP-ITISS (Infrastructure, Systems & Security)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Enterprise networking, Linux/Windows Server, DevOps (Docker, K8s, Ansible, Terraform), DPDPA governance.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PGCP-ITISS")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DCSF (Cyber Security & Forensics)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Digital forensics, Ghidra reverse engineering, threat hunting, APT analysis, IT Act 2000 & court testimony.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DCSF")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DIoT (Internet of Things)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Perception-Network-Application architecture, AWS/Azure/GCP IoT Core, edge computing, end-to-end IoT solutions.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DIoT")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DESD (Embedded Systems Design)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Embedded C, ARM Cortex-M, RISC-V, FreeRTOS, Zephyr, Linux kernel & device drivers, SoC co-design.</p>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DESD")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 🔄 THE 3-MONTH INDUSTRY RESIDENCY FRAMEWORK */}
      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
            3-Phase Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">The 3-Month Industry Residency</h2>
          <p className="text-muted-foreground">
            The capstone of the ISI Academy pedagogical model where academic knowledge and lab skills converge in a live operational environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 font-bold flex items-center justify-center">Phase 1</div>
            <h3 className="font-bold text-lg">Foundation (Months 1–3)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Rigorous theoretical foundation & software mastery using industry tools (Packet Tracer, Wireshark, HAP, Revit, CANalyzer, ROS, Pix4D).
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 font-bold flex items-center justify-center">Phase 2</div>
            <h3 className="font-bold text-lg">Application & Capstone (Months 4–6)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Domain hackathons, 72-hour design sprints, portfolio capstones evaluated by industry panels, and mock interview prep.
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 font-bold flex items-center justify-center">Phase 3</div>
            <h3 className="font-bold text-lg">Industry Residency (Months 7–9)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Deployment in live corporate & industrial environments, joint experience certification, and entry into PPO pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* 🏆 ACCREDITATION & NATIONAL ALIGNMENTS */}
      <section className="py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Aligned with National Priorities & Policy</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["DPDPA 2023", "Smart Cities Mission", "PLI Scheme", "FAME II", "Industry 4.0", "National Quantum Mission", "ABDM", "Drone Rules 2021"].map((policy, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1.5 text-xs font-semibold">
                {policy}
              </Badge>
            ))}
          </div>

          <div className="pt-8">
            <Button size="lg" onClick={() => onEnquireClick?.("General ISI Academy Inquiry")} className="gap-2 px-10 py-6 text-base font-bold rounded-full shadow-xl">
              Speak to an Academic Counselor
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
