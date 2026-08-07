import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { modernLivingData } from "@/data/modern-living-data";

export const WhoWeServe = () => {
    return (
        <section id="features" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        Target Segments
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        Who We Serve.
                    </h3>
                    <p className="text-muted-foreground text-lg mt-4 max-w-2xl font-medium">
                        Tailored security frameworks for the specific needs of modern business owners and high-value lifestyles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modernLivingData.serve.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 text-center">
                                <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm transition-transform group-hover:scale-110", item.color)}>
                                    <item.icon className={cn("w-10 h-10", item.iconColor)} />
                                </div>
                                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
};
