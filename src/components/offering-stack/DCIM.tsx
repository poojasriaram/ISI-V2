import { Database, Server, CheckCircle2 } from "lucide-react";
import { dcimData } from "@/data/offerings-data";

export const DCIM = () => {
    return (
        <section id="dcim" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4 bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            <Database className="w-4 h-4" />
                            Infrastructure Intelligence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            DCIM <span className="text-primary">&</span> Optimization
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Next-gen management for Hyperscalers and Sovereign Clouds, integrated with your security fabric.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {dcimData.map((item, index) => (
                        <div key={index} className="group bg-card border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-end mb-6">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Server className="w-5 h-5" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground mb-8 min-h-[50px]">{item.desc}</p>

                            <div className="space-y-3 pt-6 border-t border-border/50">
                                {item.features.map(feat => (
                                    <div key={feat} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
