import { Layers, Award, Cpu, Zap, Settings, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Layers,
    title: "Integrated Security Solutions",
    description: "End-to-end physical and digital security ecosystems tailored for your enterprise needs.",
  },
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "Highly trained personnel with rigorous background checks and specialized sector expertise.",
  },
  {
    icon: Cpu,
    title: "Technology Driven Operations",
    description: "State-of-the-art AI, IoT sensors, and automated workflows powering our unified command centers.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Rapid mobilization of security teams and rapid installation of electronic systems across India.",
  },
  {
    icon: Settings,
    title: "Customized Security Plans",
    description: "Bespoke risk assessment and consulting to align security protocols with your business goals.",
  },
  {
    icon: Activity,
    title: "24×7 Monitoring",
    description: "Continuous oversight from our specialized Security Operations Center to ensure zero downtime.",
  },
];

export const CorePhilosophy = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Why Choose ISI
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The ISI Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We go beyond traditional security by integrating elite personnel with cutting-edge technology to deliver comprehensive, enterprise-grade protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">Experience the ISI Difference</h4>
            <Link to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }}>
                <Button size="lg" className="gap-2 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform group px-8 h-12">
                    Speak with a Specialist
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};
