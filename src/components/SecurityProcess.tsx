import { MessageSquare, ShieldAlert, PenTool, Rocket, Headset } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Understanding your unique security needs and challenges.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Assessment",
    description: "Thorough site audits and vulnerability identification.",
  },
  {
    icon: PenTool,
    title: "Solution Design",
    description: "Custom architecting of integrated security plans.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Swift onboarding of personnel and tech installation.",
  },
  {
    icon: Headset,
    title: "Support & Monitoring",
    description: "24/7 oversight via our central Command Center.",
  },
];

export const SecurityProcess = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Secure Your Enterprise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A systematic, five-step approach to deploying world-class security solutions.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group relative">
                {/* Mobile/Tablet Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-primary/20 my-4" />
                )}

                <div className="w-24 h-24 rounded-full bg-card border-2 border-border/50 shadow-sm flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300 relative bg-background">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                    {index + 1}
                  </div>
                  
                  <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-bold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
