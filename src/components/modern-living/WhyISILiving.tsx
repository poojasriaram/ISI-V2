import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { modernLivingData } from "@/data/modern-living-data";

export const WhyISILiving = () => {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] -z-0" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-white uppercase tracking-widest bg-white/10 rounded-full mb-6 border border-white/20">
                        The ISI Edge
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">Why ISI Security?</h3>
                    <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                        Beyond just monitoring—we provide a comprehensive, intelligent ecosystem that adapts to your environment and life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {modernLivingData.whyISI.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all group h-full flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all mx-auto">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                            <p className="text-primary-foreground/70 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
