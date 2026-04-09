import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { HomeStats } from "@/components/HomeStats";
import { CorePhilosophy } from "@/components/CorePhilosophy";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { CommandCenters } from "@/components/CommandCenters";
import { LogisticsSection } from "@/components/LogisticsSection";
import { JobMap } from "@/components/JobMap";

import { homeLocations, activeLocations } from "@/data/locations-data";

import { useContentProtection } from "@/hooks/useContentProtection";

const Index = () => {
  useContentProtection();
  return (
    <Layout noPadding={true}>
      <Hero />
      <HomeStats />
      <CorePhilosophy />
      <Services />
      <Certifications />
      <CommandCenters />
      <LogisticsSection />

      {/* Map Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 left-10 p-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl max-w-sm">
            <h3 className="text-2xl font-bold mb-2">Pan-India Presence</h3>
            <p className="text-muted-foreground">
              Strategic hubs and operational centers covering every major region, ensuring rapid response and local expertise.
            </p>
          </div>
        </div>
        <JobMap locations={homeLocations} activeCity={null} />
      </section>
    </Layout>
  );
};

export default Index;
