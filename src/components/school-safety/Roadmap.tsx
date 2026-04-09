import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapStep {
    phase: string;
    title: string;
    desc: string;
    color: string;
}

interface RoadmapProps {
    steps: RoadmapStep[];
}

export const Roadmap = ({ steps }: RoadmapProps) => {
    return (
        <section className="py-10 bg-background relative overflow-hidden border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        Implementation Roadmap
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">Your 36-Month Transformation Journey</h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        A structured, phased approach from baseline readiness to global excellence.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center",
                                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Dot on the line */}
                                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-20 hidden md:block" />

                                <div className="flex-1 w-full md:w-1/2">
                                    <div className={cn(
                                        "p-6 md:p-10 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all group",
                                        i % 2 === 1 ? "md:text-left text-left" : "md:text-right text-left"
                                    )}>
                                        <div className={cn(
                                            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6",
                                            `bg-${step.color}-500/10 text-${step.color}-500 border border-${step.color}-500/20`
                                        )}>
                                            <Calendar size={12} />
                                            {step.phase}
                                        </div>
                                        <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
