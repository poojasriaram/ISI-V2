import { Briefcase } from "lucide-react";

export const CareerHero = () => {
    return (
        <div className="text-center mb-6 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3 animate-in slide-in-from-bottom-4">
                <Briefcase className="w-4 h-4" />
                <span>Join Our Network</span>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-[900] tracking-tight mb-4 text-[#003B95] max-w-3xl mx-auto leading-snug">
                Be Part of Next Generation Tech Company for Securing India's Future
            </h2>
            <p className="text-xs md:text-base text-muted-foreground/90 max-w-xl mx-auto leading-relaxed font-semibold">
                Empowering India with AI-driven intelligence. Discover <span className="text-[#003B95] font-extrabold underline-offset-4 decoration-2 decoration-[#ED1C24]/30 underline">PAN India</span> opportunities across field operations and corporate strategy.
            </p>
        </div>
    );
};
