import { motion } from "framer-motion";
import { schoolSafetyV2Data } from "@/data/school-safety-v2-data";

export const ExecutiveSummary = () => {
    const data = schoolSafetyV2Data.executiveSummary;

    return (
        <section className="py-10 bg-background border-b border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <span className="inline-block px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                                {data.heading}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                {data.title}
                            </h2>
                            <div className="w-12 h-1.5 bg-primary rounded-full mt-8" />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            {data.highlights.map((text, i) => (
                                <p key={i} className={i === 0 ? "text-2xl text-foreground font-semibold" : ""}>
                                    {text}
                                </p>
                            ))}
                            <div className="p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl mt-12 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">A Message from ISI Leadership</p>
                                <blockquote className="text-foreground font-medium italic mb-8 relative">
                                    <span className="text-6xl text-primary/10 absolute -top-8 -left-4 font-serif">"</span>
                                    {data.leadershipMessage}
                                    <span className="text-6xl text-primary/10 absolute -bottom-12 -right-4 font-serif">"</span>
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 overflow-hidden border border-primary/20 shadow-lg">
                                        <img loading="lazy"
                                            src={data.leader.image}
                                            alt={data.leader.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground text-lg leading-tight">{data.leader.name}</div>
                                        <div className="text-xs font-semibold text-primary uppercase tracking-widest mt-1">{data.leader.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
