import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { schoolSafetyV2Data } from "@/data/school-safety-v2-data";

export const Pillars = () => {
    return (
        <section className="py-10 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-8">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        Our Philosophy
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        The 4 Pillars of Ethical <br /> Campus Safety.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schoolSafetyV2Data.pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110", pillar.color)}>
                                    <pillar.icon className={cn("w-7 h-7", pillar.iconColor)} />
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{pillar.title}</h4>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {pillar.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
