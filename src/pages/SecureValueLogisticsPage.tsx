import { Layout } from "@/components/Layout";
import { SectionPanel } from "@/components/cash-logistics/SectionPanel";
import {
    secureLogisticsHero,
    allSecureLogisticsSections,
    finalCTA
} from "@/data/secure-value-logistics-data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContentProtection } from "@/hooks/useContentProtection";

const SecureValueLogisticsPage = () => {
    useContentProtection();
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-24 overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-500">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[130px]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <span className="inline-block px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider bg-white/20 rounded-full mb-6">
                            {secureLogisticsHero.badge}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {secureLogisticsHero.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-indigo-100 leading-relaxed mb-10">
                            {secureLogisticsHero.subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    className="group bg-white text-indigo-700 hover:bg-white/90 font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="#cash-monetary-logistics">
                                <Button
                                    size="lg"
                                    className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                                >
                                    Explore Solutions
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* All 9 Sections */}
            {allSecureLogisticsSections.map((section, index) => (
                <SectionPanel key={section.id} section={section} index={index} />
            ))}

            {/* Final CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[var(--section-gradient)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            {finalCTA.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                            {finalCTA.subtitle}
                        </p>

                        {/* CTA Button */}
                        <Link to={finalCTA.link}>
                            <Button
                                size="lg"
                                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 text-lg"
                            >
                                {finalCTA.buttonText}
                                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SecureValueLogisticsPage;
