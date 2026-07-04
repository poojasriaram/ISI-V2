import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HomeCustomers } from "@/components/HomeCustomers";
import { HomeStats } from "@/components/HomeStats";
import { CorePhilosophy } from "@/components/CorePhilosophy";
import { Services } from "@/components/Services";
import { HomeIndustries } from "@/components/HomeIndustries";
import { SecurityProcess } from "@/components/SecurityProcess";
import { CommandCenters } from "@/components/CommandCenters";
import { Certifications } from "@/components/Certifications";
import { LogisticsSection } from "@/components/LogisticsSection";
import { Testimonials } from "@/components/Testimonials";
import { JobMap } from "@/components/JobMap";
import { FinalCTA } from "@/components/FinalCTA";

import { homeLocations, activeLocations } from "@/data/locations-data";

import { useContentProtection } from "@/hooks/useContentProtection";

const Index = () => {
  useContentProtection();
  return (
    <Layout noPadding={true}>
      <Hero />
      <HomeCustomers />
      <TrustBar />
      <HomeStats />
      <CorePhilosophy />
      <Services />
      <HomeIndustries />
      <SecurityProcess />
      <CommandCenters />
      <Certifications />
      <LogisticsSection />
      <Testimonials />

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
      <FinalCTA />
    </Layout>
  );
};

export default Index;
