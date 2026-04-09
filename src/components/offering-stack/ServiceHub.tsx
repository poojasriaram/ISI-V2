
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Shield,
    Settings,
    Zap,
    Maximize,
    FileCheck,
    Truck,
    UserCheck,
    Monitor,
    Terminal,
    ShieldAlert,
    Globe,
    Plane,
    ArrowRight,
    Store,
    Home,
    HeartPulse,
    ShieldCheck,
    Sparkles
} from "lucide-react";

const fmServices = [
    { id: "hard-fm", title: "Hard FM", subtitle: "Engineering & Technical Intelligence", icon: Settings, type: "facility-management" },
    { id: "soft-fm", title: "Soft FM", subtitle: "Sanitation & Soft Services Intelligence", icon: Maximize, type: "facility-management" },
    { id: "energy-sustainability", title: "Energy & ESG", subtitle: "Energy & Sustainability Intelligence", icon: Zap, type: "facility-management" },
    { id: "space-workplace", title: "Space & Workplace", subtitle: "Space & Workplace Intelligence", icon: Globe, type: "facility-management" },
    { id: "compliance-risk", title: "Compliance & Risk", subtitle: "Compliance & Risk Intelligence", icon: FileCheck, type: "facility-management" },
    { id: "vendor-supply-chain", title: "Vendor & Supply Chain", subtitle: "Autonomous Ecosystem Orchestration", icon: Truck, type: "facility-management" },
];

const securityServices = [
    { id: "manned-guarding", title: "Manned Guarding", subtitle: "AI-Augmented Human Protection", icon: UserCheck, type: "security-services" },
    { id: "electronic-security", title: "Electronic Security", subtitle: "Autonomous Threat Detection", icon: Monitor, type: "security-services" },
    { id: "command-control", title: "Command & Control", subtitle: "Autonomous Security Operations", icon: Terminal, type: "security-services" },
    { id: "specialized-protection", title: "Specialized Protection", subtitle: "High-Risk Asset & Personnel Security", icon: ShieldAlert, type: "security-services" },
    { id: "risk-advisory", title: "Risk Advisory", subtitle: "Predictive Security Strategy", icon: Globe, type: "security-services" },
    { id: "emerging-threat-tech", title: "Emerging Tech Intel", subtitle: "Future-Ready Security Innovation", icon: Plane, type: "security-services" },
];

const livingServices = [
    { id: "soho-branch", title: "SOHO & Branch", subtitle: "Enterprise security for small offices", icon: Store, type: "modern-living" },
    { id: "hni-residences", title: "HNI Residential", subtitle: "Discreet protection for luxury estates", icon: Home, type: "modern-living" },
    { id: "elderly-care", title: "Elderly Care", subtitle: "AI-driven wellness & safety monitoring", icon: HeartPulse, type: "modern-living" },
    { id: "vacant-property", title: "Vacant Property", subtitle: "Remote guarding for secondary homes", icon: ShieldCheck, type: "modern-living" },
];

export const ServiceHub = () => {
    return (
        <section className="py-10 relative overflow-hidden bg-background">
            {/* Elegant Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                {/* Main Heading Section */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground"
                    >
                        Intelligence per <span className="text-primary italic">Square Foot.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8 shadow-lg shadow-primary/20"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Our Strategic Evolution integrates robust Security Intelligence with advanced Facility Management, creating 24/7 autonomous ecosystems of protection and efficiency.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {/* Facility Management Section */}
                    <div className="relative">
                        <div className="flex flex-col items-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-foreground">
                                <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/30">
                                    <Settings className="w-6 h-6" />
                                </span>
                                Facility Management
                            </h3>
                            <div className="mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fmServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Security Services Section */}
                    <div className="relative pt-8">
                        <div className="flex flex-col items-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-foreground">
                                <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/30">
                                    <Shield className="w-6 h-6" />
                                </span>
                                Security Intelligence
                            </h3>
                            <div className="mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {securityServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Modern Living & Business Section */}
                    <div className="relative pt-8">
                        <div className="flex flex-col items-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-foreground">
                                <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/30">
                                    <Sparkles className="w-6 h-6" />
                                </span>
                                Modern Living & Business
                            </h3>
                            <div className="mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {livingServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative h-full"
        >
            <Link
                to={service.type === "modern-living" ? "/modern-living" : `/services/${service.type}/${service.id}`}
                className="flex flex-col h-full bg-card border border-border/50 rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group-hover:border-primary/40 overflow-hidden"
            >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-8 group-hover:bg-primary/10 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                        <service.icon className="w-7 h-7" />
                    </div>

                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h4>
                    <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed flex-grow">
                        {service.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors">
                        Exploration
                        <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
