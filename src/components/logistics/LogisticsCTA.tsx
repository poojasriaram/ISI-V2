import { logisticsCTAContent } from "@/data/logistics-data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const LogisticsCTA = () => {
    return (
        <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl" />

            <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
                <div className="text-center">
                    {/* Heading */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Ready to Secure Your Valuable Assets?
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Experience the future of secure logistics with our technology-enabled precision,
                        trust-earned reliability, and end-to-end peace of mind.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {logisticsCTAContent.trustIndicators.map((indicator, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-background/50 border border-border/30 rounded-full"
                            >
                                <indicator.icon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">
                                    {indicator.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to={logisticsCTAContent.primaryCTA.link}>
                            <Button
                                size="lg"
                                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                            >
                                {logisticsCTAContent.primaryCTA.text}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        <Link to={logisticsCTAContent.secondaryCTA.link}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                {logisticsCTAContent.secondaryCTA.text}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
