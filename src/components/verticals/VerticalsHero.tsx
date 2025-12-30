import { MousePointerClick } from "lucide-react";

interface VerticalsHeroProps {
    isSidebar: boolean;
}

export const VerticalsHero = ({ isSidebar }: VerticalsHeroProps) => {
    return (
        <div className={`text-center ${isSidebar ? 'mb-8' : 'mb-20'}`}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
                Industry Verticals
            </span>
            <h2 className={`${isSidebar ? 'text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-bold text-foreground mb-6`}>
                Specialized Security
            </h2>
            {!isSidebar && (
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Tailored security frameworks designed for the unique challenges of each industry vertical.
                </p>
            )}
        </div>
    );
};
