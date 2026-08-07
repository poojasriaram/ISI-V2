import { valueProposition } from "@/data/capabilities-data";
import { CheckCircle2 } from "lucide-react";

export const ValueProposition = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {valueProposition.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready for Regional, National & Strategic Security Engagements
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {valueProposition.points.map((point, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                {/* Check Icon */}
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>

                                <div className="flex-1">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                                        {point.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We partner with enterprises, governments, infrastructure operators, logistics firms, event organizers, and high-net-worth individuals to deliver trusted, intelligent, and future-ready security services.
                    </p>
                </div>
            </div>
        </div>
    );
};
