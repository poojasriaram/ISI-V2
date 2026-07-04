import { Clock, Briefcase, Star, ShieldAlert, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
    {
        icon: Briefcase,
        value: "500",
        suffix: "+",
        label: "Projects Delivered",
        desc: "Successfully Executed"
    },
    {
        icon: Star,
        value: "98",
        suffix: "%",
        label: "Client Satisfaction",
        desc: "Trusted by Enterprises"
    },
    {
        icon: Clock,
        value: "20",
        suffix: "+",
        label: "Years Experience",
        desc: "Industry Leadership"
    },
    {
        icon: ShieldAlert,
        value: "24",
        suffix: "×7",
        label: "Security Operations",
        desc: "Always Monitoring"
    },
];

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const targetValue = parseInt(value, 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const start = 0;
                    const duration = 2000;
                    const startTime = Date.now();

                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(easeOut * targetValue));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(targetValue);
                        }
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [targetValue]);

    return (
        <div ref={ref} className="text-3xl lg:text-4xl font-bold mb-1 tabular-nums tracking-tight">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
};

export const HomeStats = () => {
    return (
        <section className="relative z-30 py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="group relative bg-card border border-border/50 rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            <div className="relative mb-4 p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="relative">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            </div>
                            <div className="relative text-sm font-semibold text-foreground uppercase tracking-wider mt-2 opacity-90">{stat.label}</div>
                            <div className="relative text-sm text-muted-foreground mt-2">{stat.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Inline CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-muted/30 border border-border/50 p-6 rounded-2xl w-full max-w-3xl mx-auto shadow-sm">
                        <div className="flex-1 text-left sm:text-center md:text-left">
                            <h4 className="text-lg font-bold text-foreground">Join 500+ Secure Enterprises</h4>
                            <p className="text-sm text-muted-foreground mt-1">Discover how our integrated solutions can protect your operations.</p>
                        </div>
                        <Link to="/contact">
                            <Button className="gap-2 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform group">
                                Get a Customized Security Solution
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
