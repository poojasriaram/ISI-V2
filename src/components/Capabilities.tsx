import { CapabilitiesHero } from "./capabilities/CapabilitiesHero";
import { CapabilityPhilosophy } from "./capabilities/CapabilityPhilosophy";
import { MultiDomainCoverage } from "./capabilities/MultiDomainCoverage";
import { CapabilitiesGrid } from "./capabilities/CapabilitiesGrid";
import { CommandCenter } from "./capabilities/CommandCenter";
import { ValueProposition } from "./capabilities/ValueProposition";

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-24 bg-background relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

      {/* Hero Section */}
      <CapabilitiesHero />

      {/* Capability Philosophy */}
      <CapabilityPhilosophy />

      {/* Multi-Domain Security Coverage */}
      <MultiDomainCoverage />

      {/* Core Operational Pillars (Existing) */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-8">
        <CapabilitiesGrid />
      </div>

      {/* Command & Intelligence Backbone */}
      <CommandCenter />

      {/* Value Proposition */}
      <ValueProposition />
    </section>
  );
};
