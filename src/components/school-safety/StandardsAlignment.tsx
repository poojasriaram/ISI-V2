import { motion } from "framer-motion";
import { schoolSafetyV2Data } from "@/data/school-safety-v2-data";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const StandardsAlignment = () => {
    return (
        <section className="py-10 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                                Regulatory Compliance
                            </span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                                Global & National Standards Alignment.
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Our ecosystem is engineered to meet and exceed the most rigorous safety mandates from global child rights organizations and national educational boards.
                            </p>
                            <div className="flex items-center gap-6 p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm font-bold text-foreground">Certified Excellence</div>
                                    <div className="text-xs text-muted-foreground font-medium mt-1">Verified by independent auditors & legal experts.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {schoolSafetyV2Data.standardsAlignment.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {item.standard}
                                            </h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.alignment}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
