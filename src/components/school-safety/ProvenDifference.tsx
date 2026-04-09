import { motion } from "framer-motion";
import { schoolSafetyV2Data } from "@/data/school-safety-v2-data";
import { TrendingUp, Lightbulb } from "lucide-react";

export const ProvenDifference = () => {
    return (
        <section className="py-10 bg-background relative overflow-hidden border-b border-border/50">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        The Proven Difference
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">Why ISI India?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schoolSafetyV2Data.provenDifference.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <TrendingUp className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <div className="text-4xl font-bold text-foreground mb-4">{item.value}</div>
                            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{item.metric}</div>
                            <div className="text-sm text-muted-foreground leading-relaxed font-medium">{item.context}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
