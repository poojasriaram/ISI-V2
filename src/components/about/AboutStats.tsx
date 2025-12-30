import { aboutStats } from "@/data/about-data";

export const AboutStats = () => {
    return (
        <div className="container mx-auto px-4 -mt-20 relative z-20 mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                {aboutStats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 border-r border-white/5 last:border-0">
                        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
