import { useEffect } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Contact } from "@/components/Contact";
import { JobMap } from "@/components/JobMap";
import { homeLocations } from "@/data/locations-data";

export const ContactPage = () => {
  useContentProtection();
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Contact />
      {/* Map Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 left-10 p-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl max-w-sm ml-4 md:ml-0">
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

export default ContactPage;

