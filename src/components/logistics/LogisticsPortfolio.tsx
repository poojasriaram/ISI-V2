import { logisticsServiceCards } from "@/data/logistics-data";
import { CheckCircle2 } from "lucide-react";

export const LogisticsPortfolio = () => {
    return (
        <div className="mb-16">
            {/* Section Subtitle */}
            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Comprehensive Logistics Services
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Integrated solutions for secure movement and storage of high-value assets
                </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {logisticsServiceCards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <card.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-foreground transition-colors">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {card.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {card.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
