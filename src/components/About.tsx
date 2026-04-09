import { AboutHero } from "./about/AboutHero";
import { AboutStats } from "./about/AboutStats";
import { MissionVision } from "./about/MissionVision";
import { Timeline } from "./about/Timeline";
import { LeadershipGrid } from "./about/LeadershipGrid";
import { AboutCTA } from "./about/AboutCTA";
import { CorePhilosophy } from "./CorePhilosophy";

export const About = () => {
    return (
        <section className="bg-background relative overflow-hidden pt-12">
            <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            <AboutHero />
            <AboutStats />
            <CorePhilosophy />
            <MissionVision />
            <LeadershipGrid />
            <Timeline />
            <AboutCTA />
        </section>
    );
};
