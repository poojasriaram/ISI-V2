import { motion } from "framer-motion";
import { Home, ShieldCheck, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ModernLiving = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                            <Sparkles className="w-3 h-3" />
                            Specialized Offering
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Intelligent Protection for <br />
                            <span className="text-primary">Modern Living & Business.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
                            From small offices to luxury residences and elderly care environments—ISI Security delivers intelligent, 
                            always-on protection powered by AI, real-time monitoring, and automation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {[
                                { title: "HNI Residential", icon: Home, desc: "Discreet protection for luxury estates." },
                                { title: "SOHO & Branch", icon: ShieldCheck, desc: "Enterprise security for small offices." },
                                { title: "Elderly Care", icon: HeartPulse, desc: "AI-driven wellness & safety monitoring." },
                                { title: "Vacant Property", icon: ShieldCheck, desc: "Remote guarding for secondary homes." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/modern-living">
                            <Button size="lg" className="gap-2 group shadow-xl shadow-primary/20">
                                Explore Modern Living Solutions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80" 
                                alt="Modern Living Security"
                                className="w-full h-auto aspect-[4/3] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">AI-Driven Monitoring</div>
                                        <div className="text-white/70 text-sm">24/7 Vigilance for Peace of Mind</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[60px] animate-pulse delay-1000" />
                    </div>
                </div>
            </div>
        </section>
    );
};
