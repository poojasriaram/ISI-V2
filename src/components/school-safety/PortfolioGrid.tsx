import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { SchoolSafetyPortfolioCard } from "@/data/school-safety-v2-data";

interface PortfolioGridProps {
    cards: SchoolSafetyPortfolioCard[];
}

export const PortfolioGrid = ({ cards }: PortfolioGridProps) => {
    if (!cards || !Array.isArray(cards)) return null;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card, index) => {
                if (!card) return null;
                const IconComponent = card.icon || AlertCircle;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-foreground text-lg mb-4 group-hover:text-foreground transition-colors">
                                {card.title}
                            </h3>

                            {/* Features */}
                            <ul className="space-y-2">
                                {(card.features || []).map((feature, i) => (
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
                    </motion.div>
                );
            })}
        </div>
    );
};
