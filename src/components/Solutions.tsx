import {
  Users, Target, Radio, Search, Building2, ShoppingBag,
  Globe, Activity, UserCheck, Truck, Siren, Stethoscope,
  ArrowRight, Quote, Lightbulb, Check
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComprehensiveSolutions } from "./solutions/ComprehensiveSolutions";


const solutions = [
  {
    icon: Users,
    problem: "“My guards miss patrols, lack accountability, or can’t cover remote zones.”",
    title: "Intelligent Guarding with Digital Oversight",
    features: [
      "GPS-enabled patrol tracking & biometric attendance",
      "Mobile incident reporting with photo/video",
      "Optional drone-augmented patrols",
      "Real-time command center escalation"
    ],
    segments: "Guarding Services (L1–L3) + Robotics (L5)",
    growth: "Moderate, but transforming via tech"
  },
  {
    icon: Target,
    problem: "“Trespassers enter our plant, warehouse, or border undetected.”",
    title: "Drone-Based Perimeter Security",
    features: [
      "Autonomous thermal/LIDAR drone patrols",
      "Geo-fenced intrusion alerts → auto dispatch",
      "K9 response for contraband/explosives",
      "Integrated with fence sensors & cameras"
    ],
    segments: "Industrial (L3–L4), Oil & Gas (L4–L5)",
    growth: "18–20% (Industrial), 25–35% (Robotics)"
  },
  {
    icon: Radio,
    problem: "“We need eyes in the sky during emergencies or large events.”",
    title: "On-Demand Drone Security Response",
    features: [
      "4K/thermal streaming with AI object recognition",
      "Deployable for festivals, fires, elections",
      "Auto-alert to police/fire command",
      "DGCA & airspace compliant"
    ],
    segments: "Smart City (L5), Transport (L4–L5)",
    growth: "18–24% (Airports), 25–35% (Robotics)"
  },
  {
    icon: Search,
    problem: "“We operate in high-risk zones where hidden threats are a concern.”",
    title: "K9 + Tech Threat Detection Unit",
    features: [
      "Certified sniffer dog teams (narcotics/explosives)",
      "Handheld scanners & drone gas sensors",
      "Digital sweep logs for compliance",
      "On-call deployment for VIP/audits"
    ],
    segments: "Airports (L5), BFSI, Gov Facilities",
    growth: "Very High in regulated sectors"
  },
  {
    icon: Building2,
    problem: "“We manage a large residential community but lack integrated security.”",
    title: "Smart Township Management Suite",
    features: [
      "ANPR + mobile visitor check-in",
      "Resident app with panic button & CCTV",
      "Drone surveillance for common areas",
      "Unified dashboard for utilities/waste"
    ],
    segments: "Residential (L2–L4), Smart City (L5)",
    growth: "12–15%, accelerating with mandates"
  },
  {
    icon: ShoppingBag,
    problem: "“We’re losing stock—but don’t know how or where.”",
    title: "AI-Powered Loss Prevention Suite",
    features: [
      "Smart EAS gates + weight-sensing shelves",
      "Video analytics for POS fraud",
      "Drone spot-checks in warehouses",
      "Real-time alerts to managers"
    ],
    segments: "Retail (L2–L4), Logistics (L3–L4)",
    growth: "14–17% (Retail), 15–18% (Logistics)"
  },
  {
    icon: Globe,
    problem: "“We operate 50+ sites—but have no unified visibility.”",
    title: "Unified Command Platform",
    features: [
      "Cloud VMS with AI analytics across sites",
      "Role-based dashboards (CISO, COO)",
      "RPA-driven incident response",
      "Scalable from 10 to 10,000 sites"
    ],
    segments: "Remote Monitoring (L3–L5)",
    growth: "20–25% — fastest-growing segment"
  },
  {
    icon: Activity,
    problem: "“We were hacked—and didn’t realize our access logs were part of the attack.”",
    title: "Cyber-Physical Fusion Security",
    features: [
      "Unified SIEM + access control + video",
      "Behavioral anomaly detection (IT/OT)",
      "Automated incident timeline reconstruction",
      "ISO 27001 & DPDP compliance"
    ],
    segments: "Cyber-Physical Convergence (L4–L5)",
    growth: "22–28% — driven by regulation"
  },
  {
    icon: UserCheck,
    problem: "“Onboarding takes weeks due to paper-based verification.”",
    title: "TrustID: Instant Identity & Risk",
    features: [
      "AI-driven document verification",
      "Continuous screening for violations",
      "API integration with HRIS",
      "GDPR/DPDP-compliant workflows"
    ],
    segments: "Background Verification (L3–L4)",
    growth: "22–25% — very high"
  },
  {
    icon: Truck,
    problem: "“Cash-in-transit remains our biggest liability.”",
    title: "SecureCash Integrity Network",
    features: [
      "Tamper-proof smart vaults with GPS",
      "Route deviation & stop-time alerts",
      "Real-time reconciliation with banks",
      "SLA-backed liability coverage"
    ],
    segments: "Cash Management (L2–L4)",
    growth: "4–5%, critical for BFSI"
  },
  {
    icon: Siren,
    problem: "“We need real-time crowd control and coordinated response.”",
    title: "Urban Sentinel: Smart City Suite",
    features: [
      "AI-powered crowd & anomaly detection",
      "Integrated C4I command systems",
      "Interoperability with police/fire",
      "Deployable for metro, elections"
    ],
    segments: "Smart City (L4–L5), Transport",
    growth: "18–24%"
  },
  {
    icon: Stethoscope,
    problem: "“We must protect labs, patient data, and sensitive medicines.”",
    title: "Healthcare Security & Compliance",
    features: [
      "Role-based access control for labs",
      "Temperature & chain-of-custody monitoring",
      "Visitor + staff verification trails",
      "Integrated with hospital ERP"
    ],
    segments: "Healthcare & Pharma (L3–L4)",
    growth: "18–22% — very high"
  }
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-28 relative overflow-hidden bg-background scroll-mt-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      {/* Comprehensive Solutions Section */}
      <ComprehensiveSolutions />

      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Problem-Based Solutions */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Lightbulb className="w-3 h-3" />
            Tailored Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Solving Real-World <span className="text-primary">Security Challenges</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't just sell services; we solve problems. Explore our purpose-built solutions designed for critical pain points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col h-[420px] bg-card/40 backdrop-blur-md border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Hover Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-blue-600/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 p-6 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">
                      View Details
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-tight">
                    {solution.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/90 font-bold text-xs uppercase tracking-wider">
                    <div className="h-px flex-1 bg-white/30" />
                    <span>Features</span>
                    <div className="h-px flex-1 bg-white/30" />
                  </div>

                  <ul className="space-y-2.5">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="text-sm text-white/90 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1.5">Target For</p>
                    <p className="text-xs font-semibold text-white leading-snug">{solution.segments}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1.5">Growth</p>
                    <p className="text-xs font-semibold text-white leading-snug">{solution.growth}</p>
                  </div>
                </div>
              </div>

              {/* Default Card Content */}
              <CardHeader className="space-y-4 pb-3 relative z-0">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                    <solution.icon className="w-7 h-7" />
                  </div>
                  <Badge variant="outline" className="text-[10px] opacity-60 group-hover:opacity-0 transition-opacity">
                    Hover to explore
                  </Badge>
                </div>

                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors pr-4">
                  {solution.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 pt-2 relative z-0">
                {/* Problem Statement Box */}
                <div className="bg-secondary/30 rounded-xl p-4 relative group-hover:bg-secondary/50 transition-colors">
                  <Quote className="w-8 h-8 text-primary/10 absolute -top-3 -left-2 transform -scale-x-100" />
                  <p className="text-sm font-medium text-foreground/90 italic relative z-10 pl-2 line-clamp-4">
                    {solution.problem}
                  </p>
                </div>

                {/* Quick Preview */}
                <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Features Preview
                  </p>
                  <ul className="space-y-1.5">
                    {solution.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {solution.features.length > 3 && (
                    <p className="text-xs text-primary/70 font-medium pt-1">
                      +{solution.features.length - 3} more features
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
