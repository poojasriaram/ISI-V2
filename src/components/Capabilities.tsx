import { CapabilitiesHero } from "./capabilities/CapabilitiesHero";
import { CapabilityPhilosophy } from "./capabilities/CapabilityPhilosophy";
import { MultiDomainCoverage } from "./capabilities/MultiDomainCoverage";
import { CapabilitiesGrid } from "./capabilities/CapabilitiesGrid";
import { CommandCenter } from "./capabilities/CommandCenter";
import { ValueProposition } from "./capabilities/ValueProposition";

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-12 bg-background relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

      {/* Hero Section */}
      <CapabilitiesHero />

      {/* Capability Philosophy */}
      <div id="philosophy" className="scroll-mt-12">
        <CapabilityPhilosophy />
      </div>

      {/* Multi-Domain Security Coverage */}
      <div id="coverage" className="scroll-mt-12">
        <MultiDomainCoverage />
      </div>

      {/* Core Operational Pillars (Existing) */}
      <div id="pillars" className="container mx-auto px-4 lg:px-8 relative z-10 pt-8 scroll-mt-12">
        <CapabilitiesGrid />
      </div>

      {/* Command & Intelligence Backbone */}
      <div id="command-center" className="scroll-mt-12">
        <CommandCenter />
      </div>

      {/* Value Proposition */}
      <div id="value-proposition" className="scroll-mt-12">
        <ValueProposition />
      </div>
    </section>
  );
};
