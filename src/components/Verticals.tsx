import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionPanel } from "@/components/cash-logistics/SectionPanel";
import { allVerticalsPageSections } from "@/data/verticals-page-data";

// Hero slides for verticals
const verticalsHeroSlides = [
    {
        badge: "Cash & High-Value Assets",
        title: "Secure Value",
        highlight: "Logistics",
        titleEnd: "Solutions",
        description: "Tech-led platform for cash, bullion, and critical assets with smart CIT vehicles, RFID vaulting, and real-time tracking.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "5-Star Hotels & Events",
        title: "Smart Physical Security for",
        highlight: "Hospitality",
        titleEnd: "",
        description: "Where human vigilance meets intelligent technology - biometric tracking, AI sensors, and unified command centers for premium venues.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Banking & Financial Services",
        title: "Tech-Integrated Security for",
        highlight: "BFSI Sector",
        titleEnd: "",
        description: "RBI-compliant personnel, biometric access, AI video analytics, and multi-location oversight for banks and financial institutions.",
        image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Schools, Colleges & Universities",
        title: "Safe Learning Environments for",
        highlight: "Education",
        titleEnd: "Sector",
        description: "Campus protection with autonomous drone patrols, AI perimeter sensors, POCSO-compliant protocols, and multi-campus management.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Industrial & Defence Operations",
        title: "Elite Security for",
        highlight: "Manufacturing",
        titleEnd: "",
        description: "Ex-defence personnel, thermal drones, AI fence sensors, RFID tracking, and cyber-physical security fusion for high-stakes operations.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Hospitals & Medical Facilities",
        title: "Always-On Protection for",
        highlight: "Healthcare",
        titleEnd: "",
        description: "24/7 smart hospital protection with ICU/pharmacy security, visitor management, infection control, and IoT-enabled facility management.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Autonomous Aerial Intelligence",
        title: "Enterprise",
        highlight: "Drone Services",
        titleEnd: "",
        description: "Security monitoring, logistics delivery, infrastructure inspection, and real-time analytics with AI-powered autonomous drones.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    }
];

interface VerticalsProps {
    isSidebar?: boolean;
}

export const Verticals = ({ isSidebar = false }: VerticalsProps) => {
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        if (sectionRefs.current[id]) {
            sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const timer = setTimeout(() => {
                scrollToSection(id);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    return (
        <section
            id="verticals"
            className={`${isSidebar ? 'h-full overflow-y-auto' : 'overflow-x-hidden'} bg-background relative`}
        >
            {/* ===== HERO CAROUSEL ===== */}
            {!isSidebar && <PageHero slides={verticalsHeroSlides} />}

            {/* ===== VERTICAL SECTIONS (5-Panel Structure) ===== */}
            {allVerticalsPageSections.map((vertical, index) => (
                <div
                    key={vertical.id}
                    id={vertical.id}
                    ref={(el) => (sectionRefs.current[vertical.id] = el)}
                >
                    <SectionPanel section={vertical} index={index} />
                </div>
            ))}

            {/* ===== BOTTOM CTA SECTION ===== */}
            <div className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 lg:px-8 max-w-full relative z-10 text-center">
                    <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/10 border-white/20 text-white mb-6">
                        <Zap className="w-3 h-3 mr-2" />
                        Contact Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Secure Your Operations?
                    </h2>
                    <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Our industry specialists are ready to design a customized security solution
                        that meets your specific needs and regulatory requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/5 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 rounded-xl transition-all duration-300"
                        >
                            Download Brochure
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
