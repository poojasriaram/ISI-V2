import { Building, CheckCircle2 } from "lucide-react";
import { facilityEvolutionData } from "@/data/offerings-data";

export const FacilityEvolution = () => {
    return (
        <section id="facility-evolution" className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                            <Building className="w-6 h-6" />
                        </span>
                        Facility Evolution
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Transforming traditional maintenance into autonomous, AI-driven facility ecosystems.
                    </p>
                </div>

                <div className="space-y-8 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/20 before:to-transparent before:-z-10">
                    {facilityEvolutionData.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full">
                                <div className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-6">{item.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-md bg-primary/5 text-primary text-xs font-semibold border border-primary/10 dark:bg-primary/20 dark:text-primary-foreground/80 dark:border-primary/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="w-16 h-16 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center shrink-0 z-10">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>

                            <div className="flex-1 w-full hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
