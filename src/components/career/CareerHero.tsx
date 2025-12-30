import { Briefcase } from "lucide-react";

export const CareerHero = () => {
    return (
        <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 animate-in slide-in-from-bottom-4">
                <Briefcase className="w-4 h-4" />
                <span>Join Our Network</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Shape the Future of Security
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover opportunities across our 10+ locations in India. From field operations to corporate strategy, find where you belong.
            </p>
        </div>
    );
};
