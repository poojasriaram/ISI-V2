import { CapabilitiesHero } from "./capabilities/CapabilitiesHero";
import { CapabilitiesGrid } from "./capabilities/CapabilitiesGrid";

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-24 bg-background relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

      <CapabilitiesHero />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <CapabilitiesGrid />
      </div>
    </section>
  );
};
