import { CashLogisticsCard } from "@/data/cash-logistics-data";
import { CheckCircle2 } from "lucide-react";

interface PortfolioGridProps {
    cards: CashLogisticsCard[];
}

export const PortfolioGrid = ({ cards }: PortfolioGridProps) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card, index) => (
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
                        <h3 className="font-semibold text-foreground text-lg mb-4 group-hover:text-foreground transition-colors">
                            {card.title}
                        </h3>

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
    );
};
