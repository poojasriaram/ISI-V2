import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Truck, Building2, Landmark, GraduationCap, Factory, Hospital, Plane,
  Wallet, Package, Shield, MonitorDot, Lock, Camera, Users, Bell,
  Radio, Eye, Target, MapPin, Fingerprint, ShieldCheck, Smartphone,
  AlertTriangle, BadgeCheck, Zap, Activity, Settings, Wifi, Database,
  Cpu, BarChart3, Network, Layers, CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";

// Hero slides for verticals
const verticalsHeroSlides = [
  {
    badge: "Cash & High-Value Assets",
    title: "Secure Value",
    highlight: "Logistics",
    titleEnd: "Solutions",
    description: "Tech-led platform for cash, bullion, and critical assets with smart CIT vehicles, RFID vaulting, and real-time tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "5-Star Hotels & Events",
    title: "Smart Physical Security for",
    highlight: "Hospitality",
    titleEnd: "",
    description: "Where human vigilance meets intelligent technology - biometric tracking, AI sensors, and unified command centers for premium venues.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "Banking & Financial Services",
    title: "Tech-Integrated Security for",
    highlight: "BFSI Sector",
    titleEnd: "",
    description: "RBI-compliant personnel, biometric access, AI video analytics, and multi-location oversight for banks and financial institutions.",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "Schools, Colleges & Universities",
    title: "Safe Learning Environments for",
    highlight: "Education",
    titleEnd: "Sector",
    description: "Campus protection with autonomous drone patrols, AI perimeter sensors, POCSO-compliant protocols, and multi-campus management.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "Industrial & Defence Operations",
    title: "Elite Security for",
    highlight: "Manufacturing",
    titleEnd: "& Defence",
    description: "Ex-defence personnel, thermal drones, AI fence sensors, RFID tracking, and cyber-physical security fusion for high-stakes operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "Hospitals & Medical Facilities",
    title: "Always-On Protection for",
    highlight: "Healthcare",
    titleEnd: "",
    description: "24/7 smart hospital protection with ICU/pharmacy security, visitor management, infection control, and IoT-enabled facility management.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  },
  {
    badge: "Autonomous Aerial Intelligence",
    title: "Enterprise",
    highlight: "Drone Services",
    titleEnd: "",
    description: "Security monitoring, logistics delivery, infrastructure inspection, and real-time analytics with AI-powered autonomous drones.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
    overlay: "from-background via-background/95 to-background/60"
  }
];

// Verticals Data
const verticalsData = [
  {
    id: "logistics",
    title: "Secure Value Logistics",
    subtitle: "A Unified, Tech-Led Platform for Cash, Bullion, and Critical Assets",
    icon: Truck,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bgPattern: "from-amber-500/10 via-orange-500/5 to-transparent",
    cards: [
      {
        title: "Cash & Retail Cash Logistics",
        icon: Wallet,
        features: ["Smart CIT vehicles", "ATM replenishment", "Retail collections", "Digital proofs of delivery"]
      },
      {
        title: "High-Value Logistics",
        icon: Package,
        features: ["Discreet transport", "RFID vaulting", "Jewellery & bullion security", "Compliance documentation"]
      },
      {
        title: "Strong Room & Vault Services",
        icon: Lock,
        features: ["Certified BIS construction", "Biometric access", "24/7 CCTV", "Audit-ready traceability"]
      },
      {
        title: "Central Command Platform",
        icon: MonitorDot,
        features: ["Real-time tracking", "Inventory dashboards", "Unified data ecosystem", "Scalable operations"]
      }
    ]
  },
  {
    id: "hospitality",
    title: "Smart Physical Security for Large Conventional Hotels & Event Management",
    subtitle: "Where Human Vigilance Meets Intelligent Technology",
    icon: Building2,
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    bgPattern: "from-violet-500/10 via-purple-500/5 to-transparent",
    cards: [
      {
        title: "Core Guarding Services",
        icon: Users,
        features: ["Biometric tracking", "GPS-enabled patrols", "Hospitality-trained personnel", "Instant incident alerts"]
      },
      {
        title: "Perimeter & Premises Protection",
        icon: Shield,
        features: ["Thermal cameras", "AI sensors", "Visitor management", "Anti-ram bollards for 5-star venues"]
      },
      {
        title: "Guest Areas & Event Security",
        icon: BadgeCheck,
        features: ["Zoned access control", "Crowd density monitoring", "VIP protection", "Emergency response coordination"]
      },
      {
        title: "Central Command Centre",
        icon: MonitorDot,
        features: ["Unified dashboard for guards", "Incident management", "Parking & compliance", "Multi-property management"]
      }
    ]
  },
  {
    id: "bfsi",
    title: "Smart Physical Security for BFSI Sector",
    subtitle: "Tech-Integrated Security for Banking, Financial Services, and Insurance",
    icon: Landmark,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgPattern: "from-emerald-500/10 via-teal-500/5 to-transparent",
    cards: [
      {
        title: "Core Guarding Services",
        icon: Fingerprint,
        features: ["Biometric/facial recognition", "RBI-compliant personnel", "GPS tracking", "Ex-paramilitary training"]
      },
      {
        title: "Branch & Customer Area Integrity",
        icon: ShieldCheck,
        features: ["Teller counter protection", "AI video analytics", "Zoned access", "Silent panic alarms"]
      },
      {
        title: "Strong Room & Vault Security",
        icon: Lock,
        features: ["Multi-layer vault access", "Cash handling monitoring", "Armored CIT escorts", "ATM protection"]
      },
      {
        title: "Central Command Centre",
        icon: MonitorDot,
        features: ["Multi-location oversight", "Real-time alerts", "Compliance reporting", "Automated audit trails"]
      }
    ]
  },
  {
    id: "education",
    title: "Smart Physical Security for Education & Higher Education Sector",
    subtitle: "Safe Learning Environments for Schools, Colleges, and Universities",
    icon: GraduationCap,
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    bgPattern: "from-blue-500/10 via-sky-500/5 to-transparent",
    cards: [
      {
        title: "Core Guarding Services",
        icon: Users,
        features: ["Biometric attendance", "AI patrols", "Specially trained personnel", "Mobile app alerts for staff/students"]
      },
      {
        title: "Campus Boundary Protection",
        icon: Plane,
        features: ["Autonomous drone patrols", "AI perimeter sensors", "QR visitor management", "Anti-climb fencing"]
      },
      {
        title: "Campus & Building Integrity",
        icon: AlertTriangle,
        features: ["Zoned access", "AI analytics", "Panic buttons", "Hostel monitoring, POCSO-compliant protocols"]
      },
      {
        title: "Central Command Centre",
        icon: MonitorDot,
        features: ["Unified dashboard for guards", "Transport tracking", "Intrusion alerts", "Multi-campus management"]
      }
    ]
  },
  {
    id: "manufacturing",
    title: "Smart Physical Security for Manufacturing & Defence Sectors",
    subtitle: "Elite Security for High-Stakes Industrial and Defence Operations",
    icon: Factory,
    gradient: "from-slate-500 via-gray-600 to-zinc-700",
    bgPattern: "from-slate-500/10 via-gray-600/5 to-transparent",
    cards: [
      {
        title: "Core Guarding Services",
        icon: ShieldCheck,
        features: ["Ex-defence/paramilitary personnel", "Biometric/facial recognition", "AI-optimized patrols", "Tamper-proof audits"]
      },
      {
        title: "Perimeter & Asset Protection",
        icon: Plane,
        features: ["Autonomous thermal drones", "AI fence sensors", "RFID tracking", "K9 units, anti-drone integration"]
      },
      {
        title: "Production Floor & Supply Chain",
        icon: Settings,
        features: ["Multi-factor access control", "AI video analytics", "Secure logistics", "ANPR gate verification"]
      },
      {
        title: "Central Command Centre",
        icon: Cpu,
        features: ["Multi-site intelligence", "Predictive risk analytics", "Digital twin mapping", "Cyber-physical security fusion"]
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Security & Facility Management",
    subtitle: "Always-On Protection for Patients, Staff, and Critical Assets",
    icon: Hospital,
    gradient: "from-rose-500 via-pink-500 to-red-500",
    bgPattern: "from-rose-500/10 via-pink-500/5 to-transparent",
    cards: [
      {
        title: "24/7 Smart Hospital Protection",
        icon: Camera,
        features: ["Integrated CCTV", "Access control", "Digital guard tours", "ICU/pharmacy security"]
      },
      {
        title: "Digital Guard Operations",
        icon: Smartphone,
        features: ["Mobile apps for post orders", "Patrol logging", "Incident reporting", "Live management visibility"]
      },
      {
        title: "Patient & Staff Safety",
        icon: Users,
        features: ["Visitor registration", "Badge management", "De-escalation trained guards", "Emergency lockdown systems"]
      },
      {
        title: "Facility Management & IoT",
        icon: Wifi,
        features: ["Building automation", "Predictive maintenance", "Infection control", "Energy optimization, asset tracking"]
      }
    ]
  },
  {
    id: "drones",
    title: "Aerial Intelligence & Drone Services",
    subtitle: "Autonomous Aerial Intelligence You Can Trust",
    icon: Plane,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    bgPattern: "from-cyan-500/10 via-blue-500/5 to-transparent",
    cards: [
      {
        title: "Enterprise Drone Services",
        icon: Eye,
        features: ["Security & crowd monitoring", "Logistics & express delivery", "Medical drone services", "Municipal mapping"]
      },
      {
        title: "Infrastructure & Governance",
        icon: Network,
        features: ["Rail corridor monitoring", "Bridge inspections", "Pipeline surveillance", "Dam & canal monitoring"]
      },
      {
        title: "Private Security & Events",
        icon: Target,
        features: ["Private security operations", "Crowd management", "Event security, VIP protection", "Real-time analytics"]
      },
      {
        title: "Central Command Platform",
        icon: Database,
        features: ["Unified drone operations", "AI analytics", "Secure integration", "Scalable fleet management"]
      }
    ]
  }
];

interface VerticalsProps {
  isSidebar?: boolean;
}

export const Verticals = ({ isSidebar = false }: VerticalsProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (sectionRefs.current[id]) {
      sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToSection(id);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <section
      id="verticals"
      className={`${isSidebar ? 'h-full overflow-y-auto' : 'overflow-x-hidden'} bg-background relative`}
    >
      {/* ===== HERO CAROUSEL ===== */}
      {!isSidebar && <PageHero slides={verticalsHeroSlides} />}

      {/* ===== VERTICAL SECTIONS ===== */}
      {verticalsData.map((vertical, index) => (
        <div
          key={vertical.id}
          id={vertical.id}
          ref={(el) => (sectionRefs.current[vertical.id] = el)}
          className={`py-20 relative scroll-mt-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          {/* Background Pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br ${vertical.bgPattern}`} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/4" />

          <div className="container mx-auto px-4 lg:px-8 max-w-full relative z-10">
            {/* Section Header */}
            <div className="text-center mb-14">
              {/* Icon Badge */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${vertical.gradient} shadow-lg mb-6`}>
                <vertical.icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
                {vertical.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {vertical.subtitle}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vertical.cards.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  {/* Gradient Top Bar */}
                  <div className={`h-1 bg-gradient-to-r ${vertical.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${vertical.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group/item">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity" />
                          <span className="group-hover/item:text-foreground transition-colors leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button
                variant="outline"
                className={`group border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300`}
              >
                Learn More About {vertical.id === "bfsi" ? "BFSI Security" :
                  vertical.id === "drones" ? "Drone Services" :
                    vertical.id === "logistics" ? "Logistics Solutions" :
                      vertical.id === "hospitality" ? "Hotel Security" :
                        vertical.id === "education" ? "Campus Security" :
                          vertical.id === "manufacturing" ? "Industrial Security" :
                            vertical.id === "healthcare" ? "Healthcare Security" : vertical.title}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* ===== BOTTOM CTA SECTION ===== */}
      <div className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 max-w-full relative z-10 text-center">
          <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/10 border-white/20 text-white mb-6">
            <Zap className="w-3 h-3 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Operations?
          </h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our industry specialists are ready to design a customized security solution
            that meets your specific needs and regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 rounded-xl transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
