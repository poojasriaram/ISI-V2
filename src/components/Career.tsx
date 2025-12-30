import { CareerHero } from "./career/CareerHero";
import { OpenPositions } from "./career/OpenPositions";

export const Career = () => {
  return (
    <section id="career" className="min-h-screen bg-background pt-0 pb-20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-in fade-in duration-1000" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <CareerHero />
        <OpenPositions />
      </div>
    </section>
  );
};
