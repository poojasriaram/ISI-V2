import { Handshake, Award, Globe2, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  {
    icon: Handshake,
    title: "Technology Partners",
    description: "Integration partners for security hardware, software, and IoT ecosystems.",
    count: "120+",
  },
  {
    icon: Award,
    title: "Certified Vendors",
    description: "Authorized resellers and service providers across regions.",
    count: "200+",
  },
  {
    icon: Globe2,
    title: "Government Bodies",
    description: "Collaboration with regulatory and law enforcement agencies.",
    count: "15+",
  },
  {
    icon: Zap,
    title: "Innovation Partners",
    description: "Research collaborations for next-gen security solutions.",
    count: "8",
  },
];

const benefits = [
  "Access to enterprise client network",
  "Co-branded marketing support",
  "Technical training & certification",
  "Priority support channel",
  "Revenue sharing programs",
  "Joint solution development",
];

export const Partners = () => {
  return (
    <section id="partners" className="py-28 bg-background relative overflow-hidden scroll-mt-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
              Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building a Secure Ecosystem Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our partner network spans technology providers, government bodies, and industry leaders,
              enabling us to deliver comprehensive security solutions.
            </p>

            {/* Partner Types */}
            <div className="space-y-4 mb-10">
              {partnerTypes.map((partner, index) => (
                <div
                  key={index}
                  className="group flex gap-4 items-start p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <partner.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{partner.title}</h3>
                      <span className="text-2xl font-bold text-primary">{partner.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Benefits Card */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Main Card */}
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-6">
                  Partner Benefits
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Why Partner With Us?
                </h3>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Partner Retention</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-3xl font-bold text-primary">2.5x</div>
                    <div className="text-xs text-muted-foreground">Avg. Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">72hr</div>
                    <div className="text-xs text-muted-foreground">Onboarding Time</div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
