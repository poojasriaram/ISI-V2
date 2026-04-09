import { logisticsStatistics } from "@/data/logistics-data";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const target = parseFloat(value);
                    const duration = 2000;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, hasAnimated]);

    const displayValue = value.includes(".")
        ? count.toFixed(1)
        : Math.floor(count).toLocaleString();

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
            {displayValue}{suffix}
        </div>
    );
};

export const LogisticsStats = () => {
    return (
        <div className="mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {logisticsStatistics.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>

                            {/* Value */}
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                            {/* Label */}
                            <p className="text-sm text-muted-foreground mt-2 font-medium">
                                {stat.label}
                            </p>
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
