import { missionVisionValues } from "@/data/about-data";

export const MissionVision = () => {
    return (
        <div className="py-8 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-12">
                        <div className="relative pl-8 border-l-2 border-primary/30 space-y-4">
                            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                To empower organizations with resilient security architectures that adapt to evolving threats, ensuring business continuity and peace of mind.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-blue-500/30 space-y-4">
                            <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                To be the undisputed global benchmark for integrated security solutions, where technology meets human vigilance to create safer environments for all.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {missionVisionValues.map((val, idx) => (
                            <div key={idx} className="flex items-start gap-6 p-6 bg-secondary/5 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-secondary/10 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <val.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{val.title}</h3>
                                    <p className="text-muted-foreground">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
