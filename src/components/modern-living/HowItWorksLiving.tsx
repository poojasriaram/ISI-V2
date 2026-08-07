import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { modernLivingData } from "@/data/modern-living-data";

export const HowItWorksLiving = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        Operational Excellence
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">How It Works.</h3>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto mt-6 font-medium">
                        Our structured process ensures a seamless transition to a fully automated, AI-driven security environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
                    {/* Connection Line with improved visibility */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary to-primary/5 -translate-y-1/2 hidden md:block opacity-50" />

                    {modernLivingData.howItWorks.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center p-6 group"
                        >
                            <div className={cn(
                                "w-20 h-20 rounded-full flex items-center justify-center mb-8 border-4 border-background shadow-2xl transition-all duration-500 group-hover:scale-110",
                                step.color === "blue" ? "bg-blue-600 shadow-blue-500/30" :
                                step.color === "emerald" ? "bg-emerald-600 shadow-emerald-500/30" :
                                step.color === "indigo" ? "bg-indigo-600 shadow-indigo-500/30" :
                                step.color === "purple" ? "bg-purple-600 shadow-purple-500/30" :
                                "bg-amber-600 shadow-amber-500/30"
                            )}>
                                <span className="text-2xl font-black text-white">{i + 1}</span>
                            </div>

                            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 group-hover:border-primary/50 group-hover:shadow-xl transition-all duration-300">
                                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
};
