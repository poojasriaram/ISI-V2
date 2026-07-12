import { Globe, Award, Shield, Star, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
    {
        icon: Globe,
        value: "28",
        suffix: "+",
        label: "STATES COVERED",
        desc: "Pan-India Presence"
    },
    {
        icon: Award,
        value: "10,000",
        suffix: "+",
        label: "SECURITY PROS",
        desc: "Highly Trained Force"
    },
    {
        icon: Shield,
        value: "500",
        suffix: "+",
        label: "ENTERPRISE CLIENTS",
        desc: "Trusted Partners"
    },
    {
        icon: Star,
        value: "98",
        suffix: "%",
        label: "CUSTOMER SATISFACTION",
        desc: "Trusted by Enterprises"
    },
    {
        icon: Clock,
        value: "15",
        prefix: "<",
        suffix: "min",
        label: "RESPONSE TIME",
        desc: "Rapid Mobilization"
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
        <section className="relative z-30 py-16 bg-[#1855c2] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col items-center text-center px-4 ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''}`}
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                <stat.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                            </div>
                            <div className="relative mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            </div>
                            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/90 mb-1">{stat.label}</div>
                            <div className="text-[10px] sm:text-xs text-white/70">{stat.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Inline CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 border border-white/20 p-6 rounded-2xl w-full max-w-3xl mx-auto backdrop-blur-sm">
                        <div className="flex-1 text-left sm:text-center md:text-left">
                            <h2 className="text-lg font-bold text-white">Join 500+ Secure Enterprises</h2>
                            <p className="text-sm text-white/80 mt-1">Discover how our integrated solutions can protect your operations.</p>
                        </div>
                        <Link to="/contact">
                            <Button className="gap-2 rounded-full bg-white text-[#1855c2] hover:bg-white/90 shadow-lg hover:scale-[1.02] transition-transform group">
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
