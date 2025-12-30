import { Brain, Globe, Clock, Award, ShieldCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
    {
        icon: Globe,
        value: "28",
        suffix: "+",
        label: "States Covered",
        desc: "Pan-India Presence"
    },
    {
        icon: Award,
        value: "10000",
        suffix: "+",
        label: "Security Pros",
        desc: "Highly Trained Force"
    },
    {
        icon: ShieldCheck,
        value: "500",
        suffix: "+",
        label: "Enterprise Clients",
        desc: "Trusted Partners"
    },
    {
        icon: Brain,
        value: "92",
        suffix: "%",
        label: "AI Accuracy",
        desc: "Intelligent Detection"
    },
    {
        icon: Clock,
        value: "15",
        suffix: "min",
        prefix: "<",
        label: "Response Time",
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
                    let start = 0;
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
        <section className="py-12 bg-[rgb(23,84,207)] relative overflow-hidden text-white shadow-2xl z-20 -mt-2">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 lg:divide-x lg:divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-3 p-3 rounded-2xl bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            <div className="text-sm font-semibold uppercase tracking-wider opacity-90">{stat.label}</div>
                            <div className="text-xs text-white/70 mt-1">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
