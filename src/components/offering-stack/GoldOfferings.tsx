import { motion } from "framer-motion";
import { goldOfferingsData } from "@/data/gold-offerings-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Coins, Sparkles, Building2, Shield, Layers, Lock } from "lucide-react";

export const GoldOfferings = () => {
    const { overview, ourServices, industriesWeServe, keyCapabilities, businessBenefits, cta } = goldOfferingsData;

    return (
        <section id="gold-offerings" className="py-20 bg-background relative overflow-hidden border-t border-border/40">
            {/* Background Accent Elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8">
                {/* 1. OVERVIEW SECTION */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-4 border border-primary/20"
                    >
                        <Coins className="w-3.5 h-3.5 text-primary" />
                        {overview.badge}
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight"
                    >
                        {overview.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-lg md:text-xl font-semibold text-primary mb-6"
                    >
                        {overview.subtitle}
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6 shadow-lg shadow-primary/20"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        {overview.description}
                    </motion.p>
                </div>

                {/* 2. OUR SERVICES SECTION */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-foreground mb-3">
                            <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <Shield className="w-5 h-5" />
                            </span>
                            Our Services
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                            Targeted security, facility management, and risk consulting solutions for gold and jewellery operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ourServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/40 space-y-2">
                                    {service.highlights.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. INDUSTRIES WE SERVE SECTION */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-foreground mb-3">
                            <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <Building2 className="w-5 h-5" />
                            </span>
                            Industries We Serve
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                            Custom-designed operational protection across key segments of the Gem & Jewellery domain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industriesWeServe.map((ind, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="flex gap-4 p-5 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card hover:shadow-lg transition-all"
                            >
                                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                                    <ind.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-base mb-1">{ind.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. KEY CAPABILITIES SECTION */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-foreground mb-3">
                            <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <Lock className="w-5 h-5" />
                            </span>
                            Key Capabilities
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                            Advanced technological and operational capabilities securing high-density valuable assets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keyCapabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <cap.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-foreground text-lg mb-2">{cap.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 5. BUSINESS BENEFITS SECTION */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-foreground mb-3">
                            <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <Layers className="w-5 h-5" />
                            </span>
                            Business Benefits
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                            Measurable value and risk mitigation delivered through specialized security governance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businessBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 bg-secondary/10 border border-border/40 rounded-2xl hover:bg-secondary/20 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <benefit.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 6. CTA CONTENT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center bg-gradient-to-r from-primary/95 via-primary to-primary/90 text-primary-foreground shadow-2xl shadow-primary/20"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            Gem & Jewellery Security Consultation
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                            {cta.title}
                        </h3>
                        
                        <p className="text-primary-foreground/90 text-base md:text-lg mb-8 leading-relaxed">
                            {cta.description}
                        </p>

                        <a
                            href={cta.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Button
                                size="lg"
                                className="bg-background text-foreground hover:bg-background/90 font-bold px-8 py-6 rounded-full text-base shadow-xl gap-3 group"
                            >
                                {cta.buttonText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
