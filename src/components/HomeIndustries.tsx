import { Factory, HeartPulse, GraduationCap, Server, Landmark, ShoppingBag, Package, ShieldCheck, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Securing plants and critical industrial infrastructure.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Protecting hospitals, clinics, and medical facilities.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Safe learning environments for schools and universities.",
  },
  {
    icon: Server,
    name: "IT Parks",
    description: "Tech-enabled security for large commercial campuses.",
  },
  {
    icon: Landmark,
    name: "Banking",
    description: "High-level protection for financial institutions.",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Loss prevention and mall security operations.",
  },
  {
    icon: Package,
    name: "Warehousing",
    description: "24/7 monitoring for logistics and supply chains.",
  },
  {
    icon: ShieldCheck,
    name: "Government",
    description: "Compliance-driven security for public sectors.",
  },
];

export const HomeIndustries = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tailored Security by Sector
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide specialized integrated security solutions built for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-semibold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
