import { lazy, Suspense } from 'react';
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { homeLocations, activeLocations } from "@/data/locations-data";
import { useContentProtection } from "@/hooks/useContentProtection";

// Lazy load below-the-fold components to improve LCP/FCP
const TrustBar = lazy(() => import("@/components/TrustBar").then(module => ({ default: module.TrustBar })));
const HomeCustomers = lazy(() => import("@/components/HomeCustomers").then(module => ({ default: module.HomeCustomers })));
const HomeStats = lazy(() => import("@/components/HomeStats").then(module => ({ default: module.HomeStats })));
const CorePhilosophy = lazy(() => import("@/components/CorePhilosophy").then(module => ({ default: module.CorePhilosophy })));
const Services = lazy(() => import("@/components/Services").then(module => ({ default: module.Services })));
const HomeIndustries = lazy(() => import("@/components/HomeIndustries").then(module => ({ default: module.HomeIndustries })));
const SecurityProcess = lazy(() => import("@/components/SecurityProcess").then(module => ({ default: module.SecurityProcess })));
const CommandCenters = lazy(() => import("@/components/CommandCenters").then(module => ({ default: module.CommandCenters })));
const Certifications = lazy(() => import("@/components/Certifications").then(module => ({ default: module.Certifications })));
const LogisticsSection = lazy(() => import("@/components/LogisticsSection").then(module => ({ default: module.LogisticsSection })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(module => ({ default: module.Testimonials })));
const JobMap = lazy(() => import("@/components/JobMap").then(module => ({ default: module.JobMap })));
const FinalCTA = lazy(() => import("@/components/FinalCTA").then(module => ({ default: module.FinalCTA })));

const Index = () => {
  useContentProtection();
  return (
    <Layout noPadding={true}>
      <Hero />
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center bg-background/50"></div>}>
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
      </Suspense>
    </Layout>
  );
};

export default Index;
