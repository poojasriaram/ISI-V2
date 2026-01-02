import { Shield } from "lucide-react";
import { coreSecurityData } from "@/data/offerings-data";

export const CoreSecurity = () => {
    return (
        <section id="core-security" className="py-12 relative bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-16 gap-8">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
                            <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                                <Shield className="w-6 h-6" />
                            </span>
                            Core Security
                        </h2>
                        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                            Integrated physical and digital security layers ensuring comprehensive protection coverage.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreSecurityData.map((item, index) => (
                        <div key={index} className="group relative bg-background border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                            <div className="flex flex-col items-center mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-center">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
