import { Shield, Camera, MapPin, Truck, Search, Users, Building, FileCheck, ArrowRight, Cpu, LineChart, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import comprehensiveImg from "@/assets/comprehensive solution.png";

import img1 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-1.png";
import img2 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-2.png";
import img3 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-3.png";
import img4 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-4.png";
import img5 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-5.png";
import img6 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-6.png";
import img7 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-7.png";
import img8 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-8.png";
import img9 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-9.png";
import img10 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-10.png";
import img11 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-11.png";
import img12 from "@/assets/COMPREHENSIVE SOLUTIONS/solution-img-12.png";

const services = [
  {
    icon: Shield,
    title: "Guarding & On-Site Security",
    description: "Trained personnel with digital attendance, GPS patrol tracking, and 24/7 multi-site management.",
    color: "from-blue-500/20 to-blue-600/5",
    image: img1,
  },
  {
    icon: Camera,
    title: " AI Driven Tech Solutions Systems",
    description: "IP CCTV, access control, intrusion detection, fire systems with AI-powered video analytics.",
    color: "from-violet-500/20 to-violet-600/5",
    image: img2,
  },
  {
    icon: MapPin,
    title: "Remote Monitoring & SOC",
    description: "24/7 Security Operations Centre with cloud-based VMS and real-time incident response.",
    color: "from-emerald-500/20 to-emerald-600/5",
    image: img3,
  },
  {
    icon: Truck,
    title: "Secure Cash Logistics",
    description: "ATM replenishment, cash-in-transit with GPS tracking and tamper-proof monitoring.",
    color: "from-amber-500/20 to-amber-600/5",
    image: img4,
  },
  {
    icon: Search,
    title: "Risk Assessment & Consulting",
    description: "Security audits, threat modeling, red-teaming for BFSI, Pharma, and critical infrastructure.",
    color: "from-rose-500/20 to-rose-600/5",
    image: img5,
  },
  {
    icon: Users,
    title: "Background Verification",
    description: "AI-driven identity checks, continuous screening with HRIS API integration.",
    color: "from-cyan-500/20 to-cyan-600/5",
    image: img6,
  },
  {
    icon: Building,
    title: "Residential Security",
    description: "Smart township management with visitor systems, ANPR, and community safety apps.",
    color: "from-indigo-500/20 to-indigo-600/5",
    image: img7,
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "RBI audit readiness, regulatory compliance, and certified security protocols.",
    color: "from-teal-500/20 to-teal-600/5",
    image: img8,
  },
  {
    icon: Building,
    title: "Large Scale Security Systems Integration & Operations",
    description: "End-to-end enterprise security integration including multi-site CCTV, access control, command centres, IoT security, and unified SOC operations.",
    color: "from-orange-500/20 to-red-500/10",
    image: img9,
  },
  {
    icon: Cpu,
    title: "AI Based Security System Integration",
    description: "Next-gen security architecture integrating AI sensors, IoT devices, and automated response protocols.",
    color: "from-purple-500/20 to-purple-600/5",
    image: img10,
  },
  {
    icon: LineChart,
    title: "Security Consultancy & Risk Analytics",
    description: "Data-driven threat analysis, security audits, and strategic consulting for resilient risk management.",
    color: "from-rose-500/20 to-pink-600/5",
    image: img11,
  },
  {
    icon: Plane,
    title: "Drone Surveillance Services",
    description: "Advanced aerial monitoring with thermal imaging, AI threat detection, and autonomous perimeter security for large-scale facilities.",
    color: "from-sky-500/20 to-blue-600/5",
    image: img12,
  },
];

export const Services = () => {
  const location = useLocation();
  const isIntegratedServices = location.pathname === '/integratedservices';

  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[var(--section-gradient)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end security services designed to protect your assets, people, and operations with precision.
          </p>
        </div>

        {isIntegratedServices ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Section */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col items-center text-center justify-center min-h-[5rem]">
                  <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary hover:shadow-[0_0_25px_rgba(var(--primary),0.3)] transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center h-full text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {service.description}
                  </p>

                  {/* Card CTAs */}
                  <div className="mt-auto flex items-center justify-center gap-6 w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <Link to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors z-20 relative">
                      Contact Us
                    </Link>
                    <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary z-20 relative">
                      Explore Solutions <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">Need a tailored approach?</h4>
            <Link to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }}>
                <Button size="lg" className="gap-2 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform group px-8 h-12">
                    Schedule an Expert Consultation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};
