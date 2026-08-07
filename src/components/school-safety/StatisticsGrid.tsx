import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SchoolSafetyStatistic } from "@/data/school-safety-v2-data";

interface StatisticsGridProps {
    statistics: SchoolSafetyStatistic[];
}

export const StatisticsGrid = ({ statistics }: StatisticsGridProps) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statistics.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-default"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>

                        {/* Value */}
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                            {stat.value}
                        </div>

                        {/* Label */}
                        <p className="text-sm text-muted-foreground font-medium leading-snug">
                            {stat.label}
                        </p>
                        {stat.sub && (
                            <p className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-tight mt-1">
                                {stat.sub}
                            </p>
                        )}
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
