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
  ExternalLink,
  Calendar,
  CheckSquare,
  Compass,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ISIAcademyProps {
  onEnquireClick?: (programTitle?: string) => void;
}

export const ISIAcademy: React.FC<ISIAcademyProps> = ({ onEnquireClick }) => {
  const [programTab, setProgramTab] = useState<string>("certificates");

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
    { domain: "BFSI (Banking, Financial Services & Insurance)", categories: "Core Banking IT, Insurance Tech, Payment Infrastructure", partners: "Major BFSI IT divisions with SOC/NOC operations" },
    { domain: "EV & Automotive", categories: "OEMs, Charging Infra Providers, Battery Recyclers", partners: "Tata Motors (EV Division), Ather Energy, Ola Electric, ABB E-Mobility" },
    { domain: "Healthcare", categories: "Hospital Networks, Medical Device OEMs, Health-Tech Startups", partners: "Apollo Hospitals, Fortis Healthcare, leading IoMT device manufacturers" },
    { domain: "Infrastructure & MEP", categories: "Conglomerates, Facility Management Firms, DC Operators", partners: "L&T (Construction & Technology), Godrej Interio, JLL, CBRE, Schneider Electric Partners" },
    { domain: "Drone & Geospatial", categories: "AgriTech, Mining, Surveying, Defense-Adjacent Startups", partners: "DGCA-approved Remote Pilot Training Organizations (RPTOs)" }
  ];

  const labs = [
    { title: "EV Powertrain & Battery Labs", desc: "Functional EV battery packs, BMS diagnostic tools, high-voltage safety training rigs, AC/DC charger simulators compliant with IS 17017 and AIS-156 standards." },
    { title: "Cyber Ranges", desc: "Isolated, air-gapped environments for live penetration testing, malware analysis, digital forensics, and SOC operations — equipped with Wireshark, Nmap, Metasploit, Burp Suite, Splunk, and ELK Stack." },
    { title: "DCIM Simulation Labs", desc: "Full-scale rack mock-ups, environmental monitoring sensor arrays, BMS dashboards, and TIA-942 compliance reference architectures." },
    { title: "Biomedical Equipment Labs", desc: "Calibration stations, patient monitor test benches, ventilator simulation units, and IoMT security testing environments." },
    { title: "IoT & Embedded Systems Labs", desc: "Arduino, ESP32, Raspberry Pi, STM32 kits; sensor arrays (temperature, humidity, accelerometer, gas); MQTT/CoAP protocol analyzers; AWS IoT Core & Azure IoT Hub sandboxes." },
    { title: "Drone & Robotics Labs", desc: "Multi-rotor and fixed-wing training drones, flight simulation software, LiDAR sensors, photogrammetry workstations, ROS (Robot Operating System) environments." }
  ];

  const nationalTalentGaps = [
    { domain: "Cybersecurity", count: "500,000+", source: "DSCI, 2023" },
    { domain: "IoT & Embedded Systems", count: "300,000+", source: "NASSCOM estimate" },
    { domain: "Data Center Operations", count: "50,000+", source: "JLL 2025 Projection" },
    { domain: "EV Technology", count: "100,000+", source: "EV Industry Bodies" },
    { domain: "Medical Device Engineering", count: "75,000+", source: "AiMeD estimate" },
    { domain: "Drone Operations", count: "100,000+", source: "FICCI-EY Report" }
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* 🌟 HERO & PREAMBLE */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
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
              Engineering industry-ready professionals through a deliberately architected three-phase academic model embedded into every Diploma, Degree, and Post-Graduate Diploma program.
            </p>
          </div>

          {/* Preamble Card */}
          <div className="mt-12 bg-card/70 backdrop-blur-md border border-border/60 rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-primary font-bold text-lg md:text-xl">
              <BookOpen className="w-6 h-6" />
              <span>Preamble: Why This Model Exists</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              India's higher education system graduates over 3.5 million STEM students annually — yet industry reports from NASSCOM, FICCI, and the National Skill Development Corporation (NSDC) consistently flag a <strong>50–70% employability gap</strong> in emerging technology sectors. The root cause is structural: most institutions deliver theory-heavy curricula with minimal exposure to real-world tools, live systems, or production-grade environments. Graduates can describe a subnet mask but have never configured one under pressure. They can explain BMS architecture but have never opened a battery enclosure.
            </p>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-foreground space-y-3">
              <div className="font-bold text-base md:text-lg text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ISI Academy was built to eliminate this gap entirely.</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                We do not issue degrees and hope for the best. We engineer industry-ready professionals through a three-phase academic model — <strong>Learn → Build → Deploy</strong>. At its core is a non-negotiable commitment: every scholar completes a <strong>Mandatory 3-Month Industry Residency</strong> before graduation. Not an optional elective. Not a "placement assistance" promise buried in a brochure footnote. A structured, mentored deployment in a live operational environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ THE PEDAGOGICAL PHILOSOPHY */}
      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
            Pedagogical Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">Experiential, Not Transactional</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From Passive Consumption to Active Construction. Rooted in Kolb's Experiential Learning Cycle and Dewey's philosophy of learning-by-doing.
          </p>
        </div>

        <div className="mb-12 bg-card p-6 md:p-8 rounded-2xl border border-border/60 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-foreground">From Passive Consumption to Active Construction</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Traditional Indian technical education operates on a transmission model — the lecturer delivers, the student receives, the exam assesses recall. ISI Academy operates on a constructionist model. Every concept introduced in a classroom is designed to be immediately applied in a lab, a simulation, or a live system within the same week. This is a curriculum architected from the ground up around the question: <em>What will this scholar need to do on Day 1 of their first job — and how do we make them competent at it before they leave our campus?</em>
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center mb-8">Experiential Learning: Where It Happens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl">
                  <Network className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Tier-4 NOCs & SOCs</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Scholars monitor live network traffic, triage real security alerts, and execute incident response playbooks under the supervision of certified analysts with operational exposure and real stakes.
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-600 rounded-xl">
                  <Server className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Hyperscale Data Centers</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Scholars walk live raised-floor environments, interact with CRAC/CRAH cooling systems, understand PDU configurations, and learn DCIM platforms used by global colocation providers.
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                  <Globe className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Smart City & Municipal IoT</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Working alongside civic tech partners, scholars engage with sensor telemetry, LoRaWAN gateways, and real-time dashboarding deployed in Indian Smart Cities under the 100 Smart Cities Mission.
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-red-500/10 text-red-600 rounded-xl">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Healthcare IT Networks</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Embedded in hospital environments, scholars interact with Hospital Information Systems (HIS), Electronic Health Records (EHR), and the Ayushman Bharat Digital Mission (ABDM) compliance stack.
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all shadow-sm md:col-span-2 lg:col-span-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">EV Manufacturing Floors & Testing Facilities</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Scholars witness — and participate in — battery pack assembly, BMS firmware flashing, high-voltage safety protocol execution (AIS-156 compliance), and AC/DC charging station installation and commissioning.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🤝 INDUSTRY PLACEMENT PIPELINE & STIPEND PATHWAYS */}
      <section className="py-16 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
              Placement Architecture
            </Badge>
            <h2 className="text-3xl font-bold">Industry Placement Pipeline: Structured & Actionable</h2>
            <p className="text-muted-foreground">
              Built on institutional Memoranda of Understanding (MoUs) establishing recurring, year-round deployment slots, specific roles, batch sizes, and stipend rubrics.
            </p>
          </div>

          {/* MoU Network Table */}
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-lg mb-12">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/60 text-foreground font-bold uppercase text-xs">
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

          {/* Stipends & PPO Pathways */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/60 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-foreground">Stipend & PPO Pathways: Incentivizing Excellence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The industry residency is not unpaid labor. Every deployed scholar receives a performance-backed monthly stipend calibrated to the domain and partner organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/30 rounded-xl border border-border/40 space-y-2">
                <div className="font-bold text-foreground flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  1. Financial Accessibility
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Scholars from Tier-2 and Tier-3 cities across Tamil Nadu can participate without financial hardship, ensuring the program is meritocratic, not socioeconomically gated.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-xl border border-border/40 space-y-2">
                <div className="font-bold text-foreground flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  2. Performance Signaling & Earned PPOs
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The stipend is tied to milestone-based evaluations. Scholars demonstrating technical competence enter a high-probability trajectory toward Pre-Placement Offers (PPOs). Employers extend offers based on observed performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 CAMPUS NETWORK & LAB INFRASTRUCTURE */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        {/* Standardized Lab Infrastructure */}
        <div className="bg-card p-6 md:p-10 rounded-3xl border border-border/60 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-foreground">Lab Infrastructure: Every Campus, Every Standard</h3>
            <p className="text-sm text-muted-foreground">Purpose-built labs equipped with production-grade hardware and software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab, i) => (
              <div key={i} className="p-5 bg-muted/20 rounded-2xl border border-border/40 space-y-2">
                <div className="font-bold text-foreground text-base flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  {lab.title}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎓 PROGRAM PORTFOLIO (TABS) */}
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

          <Tabs defaultValue="certificates" className="w-full" onValueChange={setProgramTab}>
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
              <div className="mb-4 text-sm text-muted-foreground font-medium">
                <strong>Duration:</strong> 90 Days (3 Months) | <strong>Pedagogy:</strong> Rapid upskilling, tool-specific training, and intensive lab immersions.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🔌 EV Fundamentals & Battery Technology</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Li-ion cell chemistry (NMC/LFP), BMS architecture & CAN bus, EV powertrain mechanics (PMSM/inverters), AC/DC charging (IS 17017 / AIS-156), LOTO high-voltage safety.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 15, 2024</div>
                      <div><strong>Batch Size:</strong> 60 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Hosur, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in EV Fundamentals")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🔐 Cybersecurity Essentials & DPDPA Compliance</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Network defense, Nmap, Wireshark, Metasploit, Nikto, DPDPA 2023 compliance frameworks, IT Act 2000, SOC log analysis & SIEM alert triage.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 01, 2024</div>
                      <div><strong>Batch Size:</strong> 60 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Madurai, Coimbatore, Salem</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Cybersecurity Essentials")} className="w-full">Enquire Now</Button>
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
                    <p>Arduino, Raspberry Pi, ESP32, MQTT/CoAP/BLE protocols, AWS IoT Core & Azure IoT Hub cloud dashboards, edge computing gateways.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 20, 2024</div>
                      <div><strong>Batch Size:</strong> 50 Seats</div>
                      <div><strong>Campuses:</strong> Coimbatore, Madurai, Sivagangai</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in IoT & Edge Computing")} className="w-full">Enquire Now</Button>
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
                    <p>Municipal IoT adoption (water/air/streetlights), 5G network slicing & MEC, V2X communication, urban system data analytics, Smart Cities Mission alignment.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 15, 2024</div>
                      <div><strong>Batch Size:</strong> 50 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Madurai, Salem</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Smart City & 5G IoT")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🚁 Drone Operations & Aerial Data Analytics</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>DGCA Drone Rules 2021/2022, Digital Sky, photogrammetry, QGIS/Pix4D, agricultural NDVI, mining & infrastructure surveying.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> December 01, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats</div>
                      <div><strong>Campuses:</strong> Sivagangai, Coimbatore, Salem</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Drone Operations")} className="w-full">Enquire Now</Button>
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
                    <p>Forward/inverse kinematics, ROS nodes & topics, Gazebo simulation, RViz, PLC ladder logic, SCADA, sensor & actuator calibration.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 10, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Coimbatore, Hosur</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Robotics & Automation")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">⚛️ Quantum Computing Fundamentals for IT</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Qubits & gates, Shor's/Grover's algorithms, NIST Post-Quantum Cryptography (PQC), BB84 QKD simulation, IBM Quantum Cloud.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> January 10, 2025</div>
                      <div><strong>Batch Size:</strong> 35 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Madurai</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Quantum Computing")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🏥 Medical IT & Health Informatics Basics</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Hospital Information Systems (HIS), EHR standards (HL7/FHIR R4), ABDM compliance & ABHA creation, health data security, IoMT basics.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 25, 2024</div>
                      <div><strong>Batch Size:</strong> 50 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Madurai, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Certificate in Medical IT")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🖥️ Cisco Networking Essentials (CCNA Prep)</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>IPv4/IPv6 subnetting, VLANs, STP, OSPF routing, ACLs, wireless security (WPA3), Cisco Packet Tracer hands-on simulation.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> Rolling Intakes (Monthly)</div>
                      <div><strong>Batch Size:</strong> 60 Seats</div>
                      <div><strong>Campuses:</strong> All 6 Campuses</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Cisco Networking Essentials")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🏢 Data Center Facility Operations (Basic)</CardTitle>
                      <Badge className="bg-primary/10 text-primary">90 Days</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Rack & stack, Cat6/fiber cabling (TIA-568), environmental sensors, BMS fire suppression & CRAC monitoring, PDU/RPP power distribution.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 20, 2024</div>
                      <div><strong>Batch Size:</strong> 45 Seats</div>
                      <div><strong>Campuses:</strong> Chennai, Hosur, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Data Center Facility Operations")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 2️⃣ DIPLOMA PROGRAMS */}
            <TabsContent value="diplomas" className="space-y-6">
              <div className="mb-4 text-sm text-muted-foreground font-medium">
                <strong>Duration:</strong> 6 Months (3 Months Academic + 3 Months Mandatory Industry Residency) | <strong>Pedagogy:</strong> Job-oriented deep technical training.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">⚡ Diploma in EV Technology & Maintenance</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>EV Powertrain Oscilloscope diagnostics, CAN bus message decoding, cell-level BMS troubleshooting, AIS-156 safety, charging station deployment & OCPP configuration.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> September 30, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats | <strong>Campuses:</strong> Chennai, Hosur, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in EV Technology")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">⚙️ Advanced Diploma in MEP & Smart Building HVAC</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>AutoCAD/Revit MEP 3D BIM, Carrier HAP heat load calculations, VRV/VRF layout, Data Center cooling & PUE optimization, IoT-based BMS integration.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 10, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats | <strong>Campuses:</strong> Chennai, Coimbatore, Madurai</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in MEP & HVAC Design")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">📡 Diploma in IoT & Embedded Systems Development</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Embedded C/C++, ARM Cortex-M (STM32), FreeRTOS, Modbus, OPC UA, PROFINET, C-DAC PG-DESD aligned curriculum.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 15, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats | <strong>Campuses:</strong> Coimbatore, Madurai, Chennai</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in IoT & Embedded Systems")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🛡️ Diploma in Cyber Security & Digital Forensics</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Ghidra malware analysis, NIST Incident Response, Splunk/QRadar SOC Ops, Volatility memory forensics, C-DAC PG-DCSF pathway.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 05, 2024</div>
                      <div><strong>Batch Size:</strong> 40 Seats | <strong>Campuses:</strong> Chennai, Madurai, Salem</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in Cyber Security & Forensics")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🏥 Diploma in Medical Instrumentation & Maintenance</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>Ventilator/patient monitor calibration, MRI/CT scanner maintenance, IoMT security, CDSCO Medical Device Rules 2017 & ISO 13485.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> October 20, 2024</div>
                      <div><strong>Batch Size:</strong> 35 Seats | <strong>Campuses:</strong> Chennai, Madurai, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in Medical Instrumentation")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🏢 Diploma in Data Center Infrastructure Management</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>TIA-942 standards, N+1/2N redundancy, precision cooling (CRAC/CRAH), ITIL NOC management, DCIM monitoring dashboards.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> November 15, 2024</div>
                      <div><strong>Batch Size:</strong> 35 Seats | <strong>Campuses:</strong> Chennai, Hosur</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in DCIM")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🚁 Diploma in Commercial Drone Tech & Surveying</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>BVLOS operations, LiDAR point-cloud classification, DEM generation, agri NDVI mapping, infrastructure inspection, fleet logs.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> December 05, 2024</div>
                      <div><strong>Batch Size:</strong> 30 Seats | <strong>Campuses:</strong> Sivagangai, Salem, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in Drone Surveying")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-bold text-foreground">🆕 Diploma in Cloud Security & DevSecOps</CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-600 font-bold">6 Months</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm space-y-3 text-muted-foreground">
                    <p>AWS/Azure/GCP IAM, Docker/Kubernetes security (Falco/Trivy), CI/CD pipeline SAST/DAST, Terraform Security (Checkov, OPA).</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Cohort:</strong> January 08, 2025</div>
                      <div><strong>Batch Size:</strong> 40 Seats | <strong>Campuses:</strong> Chennai, Coimbatore, Madurai</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("Diploma in Cloud Security")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 3️⃣ UNDERGRADUATE DEGREES */}
            <TabsContent value="degrees" className="space-y-6">
              <div className="mb-4 text-sm text-muted-foreground font-medium">
                <strong>Duration:</strong> 3 to 4 Years | <strong>Pedagogy:</strong> University-affiliated online/blended academic theory + ISI Academy offline labs, mentorship & mandatory 3-month residency.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🚗 B.Tech in EV Engineering & Sustainable Mobility</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3">
                    <p>Vehicle dynamics, FOC motor algorithms, AUTOSAR & CAN/LIN firmware, BMS Kalman filtering, V2X security, battery second-life LCA.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Academic Session:</strong> July 2025 (Early Enrollment Open)</div>
                      <div><strong>Batch Size:</strong> 120 Seats (20 per campus) | <strong>Campuses:</strong> All 6 Campuses</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech EV Engineering")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">💻 B.Tech / B.Sc in Robotics, Drones & AI</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3">
                    <p>Mathematics for robotics, Deep Learning (CNNs/Transformers), Computer Vision (YOLO/SLAM), path planning (A*/RRT), autonomous drone control.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Academic Session:</strong> July 2025</div>
                      <div><strong>Batch Size:</strong> 120 Seats | <strong>Campuses:</strong> Chennai, Coimbatore, Madurai, Hosur</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech Robotics & AI")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏥 B.Tech / B.Sc in Medical Instrumentation & Healthcare Tech</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3">
                    <p>Biosignal processing, ISO 13485 design controls, CDSCO/FDA 510(k) regulations, HL7/FHIR interoperability, IoMT clinical security.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Academic Session:</strong> July 2025</div>
                      <div><strong>Batch Size:</strong> 60 Seats | <strong>Campuses:</strong> Chennai, Madurai, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech Medical Instrumentation")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🔐 B.Sc in Cybersecurity, IoT & Quantum Information Sciences</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3">
                    <p>Tri-disciplinary convergence: enterprise penetration testing, secure IoT firmware, quantum key distribution & post-quantum cryptographic migration.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Academic Session:</strong> July 2025</div>
                      <div><strong>Batch Size:</strong> 60 Seats | <strong>Campuses:</strong> Chennai, Madurai, Salem</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Sc Cybersecurity IoT Quantum")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60 md:col-span-2">
                  <CardHeader><CardTitle className="text-base font-bold">🏢 B.Tech in Data Center & Critical Infrastructure Engineering</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3">
                    <p>Medium-voltage electrical UPS/generators, chilled water HVAC psychrometrics, spine-leaf SDN networking, TIA-942 compliance & PUE optimization.</p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Next Academic Session:</strong> July 2025</div>
                      <div><strong>Batch Size:</strong> 60 Seats | <strong>Campuses:</strong> Chennai, Hosur, Coimbatore</div>
                    </div>
                    <Button size="sm" onClick={() => onEnquireClick?.("B.Tech Data Center Engineering")} className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>

                {/* IIT Support Banner */}
                <Card className="bg-card border-primary/40 md:col-span-2 shadow-lg">
                  <CardHeader className="bg-primary/5 rounded-t-xl">
                    <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                      <GraduationCap className="w-6 h-6" />
                      Blended B.Sc/B.S Support — IIT Madras & IIT Kanpur
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-3 pt-4">
                    <p>
                      ISI Academy serves as an official physical support center for IIT Madras (Data Science) & IIT Kanpur (AI) online degrees. We bridge the practical gap by providing physical lab access across Chennai, Madurai, and Coimbatore, localized offline mentorship, peer hackathons, and a Mandatory 3-Month Industry Residency.
                    </p>
                    <div className="p-3 bg-muted/30 rounded-xl space-y-1 text-xs">
                      <div><strong>Mentorship Batch Starting:</strong> August 2024</div>
                      <div><strong>Batch Size:</strong> 30 Seats per program | <strong>Campuses:</strong> Chennai, Madurai, Coimbatore</div>
                    </div>
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
                  <div className="text-xs text-muted-foreground">Official MeitY Government of India Affiliated Programs (Admission via C-CAT)</div>
                </div>
                <Badge className="bg-primary text-primary-foreground">MeitY Govt of India</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PGCP-ITISS (Infrastructure, Systems & Security)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Enterprise networking (OSPF/BGP/MPLS), Linux/Windows Admin, DevOps (Docker, K8s, Ansible, Terraform), DPDPA data governance, ITIL v4.</p>
                    <div className="text-xs font-semibold text-foreground">Next Cohort: August 2024 | 30 Seats | Madurai (Hub), Chennai</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PGCP-ITISS")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DCSF (Cyber Security & Forensics)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Disk/memory forensics, Ghidra reverse engineering, APT threat hunting, IT Act 2000 & court testimony preparation.</p>
                    <div className="text-xs font-semibold text-foreground">Next Cohort: August 2024 | 30 Seats | Madurai (Hub), Chennai</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DCSF")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DIoT (Internet of Things)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Perception-Network-Application architecture, AWS/Azure/GCP IoT Core, edge computing, end-to-end IoT solution deployment.</p>
                    <div className="text-xs font-semibold text-foreground">Next Cohort: August 2024 | 30 Seats | Coimbatore (Hub), Chennai</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DIoT")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/60">
                  <CardHeader><CardTitle className="text-base font-bold">🏛️ PG-DESD (Embedded Systems Design)</CardTitle></CardHeader>
                  <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <p>Embedded C, ARM Cortex-M, RISC-V, FreeRTOS, Zephyr, Linux kernel & device drivers, hardware-software co-design.</p>
                    <div className="text-xs font-semibold text-foreground">Next Cohort: August 2024 | 30 Seats | Coimbatore (Hub), Chennai</div>
                    <Button size="sm" onClick={() => onEnquireClick?.("C-DAC PG-DESD")} className="w-full mt-2">Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Proprietary Advanced PG Diplomas */}
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">ISI Academy Advanced Proprietary PG Diplomas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card border-border/60">
                    <CardHeader><CardTitle className="text-base font-bold">⚡ PG Diploma in Advanced EV Systems & Automotive Cybersecurity</CardTitle></CardHeader>
                    <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                      <p>Model-based BMS algorithms, V2X security, secure OTA update architecture (code signing, A/B partitioning), ISO/SAE 21434 threat modeling, CAN bus penetration testing.</p>
                      <div className="text-xs font-semibold text-foreground">Next Cohort: September 15, 2024 | 25 Seats | Chennai, Hosur</div>
                      <Button size="sm" onClick={() => onEnquireClick?.("PG Diploma EV Systems & Cybersecurity")} className="w-full mt-2">Enquire Now</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border/60">
                    <CardHeader><CardTitle className="text-base font-bold">⚛️ Advanced PG Diploma in Quantum Cryptography & Secure Communications</CardTitle></CardHeader>
                    <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                      <p>NIST PQC standards (ML-KEM/ML-DSA), BB84 & E91 Quantum Key Distribution (QKD), cryptographic agility frameworks, post-quantum enterprise security.</p>
                      <div className="text-xs font-semibold text-foreground">Next Cohort: January 2025 | 20 Seats | Chennai, Madurai</div>
                      <Button size="sm" onClick={() => onEnquireClick?.("PG Diploma Quantum Cryptography")} className="w-full mt-2">Enquire Now</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border/60">
                    <CardHeader><CardTitle className="text-base font-bold">🏥 Advanced PG Diploma in Medical IT Systems & Healthcare Data Analytics</CardTitle></CardHeader>
                    <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                      <p>HL7 FHIR R4 API development, AI radiology diagnostics (CNNs), health data de-identification, ABDM UHI & Health Claims Exchange (HCX) integration.</p>
                      <div className="text-xs font-semibold text-foreground">Next Cohort: October 10, 2024 | 25 Seats | Chennai, Madurai, Coimbatore</div>
                      <Button size="sm" onClick={() => onEnquireClick?.("PG Diploma Medical IT")} className="w-full mt-2">Enquire Now</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border/60">
                    <CardHeader><CardTitle className="text-base font-bold">🆕 PG Diploma in Data Center Energy Efficiency & Green Infrastructure</CardTitle></CardHeader>
                    <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2">
                      <p>Sub-1.2 PUE analysis, liquid immersion cooling, renewable solar PPAs, Scope 1/2/3 carbon accounting, BEE & ISO 50001 compliance.</p>
                      <div className="text-xs font-semibold text-foreground">Next Cohort: November 01, 2024 | 25 Seats | Chennai, Hosur</div>
                      <Button size="sm" onClick={() => onEnquireClick?.("PG Diploma DC Energy Efficiency")} className="w-full mt-2">Enquire Now</Button>
                    </CardContent>
                  </Card>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-extrabold">The 3-Month Industry Residency Framework</h2>
          <p className="text-muted-foreground">
            The capstone of the ISI Academy pedagogical model where academic knowledge, lab skills, and professional readiness converge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 font-bold flex items-center justify-center">Phase I</div>
            <h3 className="font-bold text-lg">Foundation (Months 1–3)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Domain-certified faculty instruction, software mastery (Packet Tracer, Wireshark, HAP, Revit, CANalyzer, ROS, Pix4D), weekly assessments, and soft skills integration.
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 font-bold flex items-center justify-center">Phase II</div>
            <h3 className="font-bold text-lg">Advanced Application (Months 4–6)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              72-hour design sprints & domain hackathons, industry-evaluated portfolio capstone projects, mock interview panels, and résumé/GitHub curation.
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 font-bold flex items-center justify-center">Phase III</div>
            <h3 className="font-bold text-lg">Industry Residency (Months 7–9)</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              On-site deployment in corporate/industrial environments, joint experience certification, structured mentor evaluations, and high-probability PPO conversion.
            </p>
          </div>
        </div>

        {/* Residency Deliverables */}
        <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/60 space-y-4">
          <h3 className="text-xl font-bold text-foreground">Residency Deliverables</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Joint Experience Certificate:</strong> Issued jointly by ISI Academy and the host organization — a credible, verifiable credential for scholars' résumés.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Industry Mentor Evaluation:</strong> Structured assessment covering technical competence, initiative, and team collaboration.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Earned PPO Trajectory:</strong> Top-performing scholars enter the Pre-Placement Offer pipeline based on observed performance.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 🏆 ACCREDITATION & NATIONAL ALIGNMENTS */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-bold uppercase tracking-widest">
              Institutional Credibility
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">Accreditation, Policy & National Impact</h2>
            <p className="text-muted-foreground">
              Addressing India's structural talent deficit through recognized credentials and national policy mapping.
            </p>
          </div>

          {/* National Initiatives & Policy Mapping */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "DPDPA 2023", desc: "Data protection & compliance modules" },
              { title: "Smart Cities Mission", desc: "5G & municipal IoT deployment alignment" },
              { title: "PLI Scheme", desc: "EV, Medical Devices & IT Hardware" },
              { title: "FAME II", desc: "EV technical standards & charging mandates" },
              { title: "Industry 4.0", desc: "Robotics, IoT & automation stack" },
              { title: "National Quantum Mission", desc: "₹6,003 crore quantum tech alignment" },
              { title: "Ayushman Bharat (ABDM)", desc: "ABHA, HIE & FHIR clinical stack" },
              { title: "Drone Rules 2021", desc: "DGCA-compliant flight & aerial analytics" }
            ].map((policy, i) => (
              <div key={i} className="bg-card p-4 rounded-xl border border-border/50 text-center space-y-1">
                <div className="font-bold text-foreground text-sm">{policy.title}</div>
                <div className="text-xs text-muted-foreground">{policy.desc}</div>
              </div>
            ))}
          </div>

          {/* National Talent Gap Grid */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/60 space-y-6">
            <h3 className="text-xl font-bold text-foreground text-center">Addressing the National Talent Gap</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {nationalTalentGaps.map((gap, i) => (
                <div key={i} className="text-center space-y-1 p-3 bg-muted/20 rounded-xl">
                  <div className="text-2xl font-extrabold text-primary">{gap.count}</div>
                  <div className="text-xs font-bold text-foreground">{gap.domain}</div>
                  <div className="text-[10px] text-muted-foreground">{gap.source}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to Build Your Future?</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Admissions are now open for upcoming cohorts across Chennai, Coimbatore, Madurai, Hosur, Salem, and Sivagangai. Your future is not a degree. It is a deployment.
            </p>
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
