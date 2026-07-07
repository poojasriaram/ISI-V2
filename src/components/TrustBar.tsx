import { Award, Users, Headset, MapPin, Shield, Zap } from "lucide-react";

const trustItems = [
  { icon: Award, label: "ISO Certified" },
  { icon: Users, label: "Experienced Team" },
  { icon: Headset, label: "24×7 Support" },
  { icon: MapPin, label: "PAN India Operations" },
  { icon: Shield, label: "Enterprise Security" },
  { icon: Zap, label: "Rapid Response" },
];

export const TrustBar = () => {
  return (
    <div className="bg-card border-y border-border/50 py-6 relative z-20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-nowrap justify-start lg:justify-center gap-x-8 md:gap-x-12 lg:gap-x-16 overflow-x-auto pb-2 scrollbar-hide w-full">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-foreground text-sm sm:text-base whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
