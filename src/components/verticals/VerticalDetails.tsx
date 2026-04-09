import { CheckCircle2 } from "lucide-react";
import { forwardRef } from "react";

interface VerticalDetailsProps {
    activeData: any;
}

export const VerticalDetails = forwardRef<HTMLDivElement, VerticalDetailsProps>(({ activeData }, ref) => {
    return (
        <div ref={ref} className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">

                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold w-fit mb-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                            <activeData.icon className="w-4 h-4" />
                            {activeData.subtitle}
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                            {activeData.title}
                        </h3>
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                            Comprehensive, tech-enabled ecosystem for modern critical infrastructure.
                        </p>

                        <div className="mt-12 pt-8 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Trusted By Leaders</p>
                            <div className="flex flex-wrap gap-8 items-center">
                                {activeData.partners.map((partner: any, i: number) => (
                                    <div key={i} className="group/logo relative">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            title={partner.name}
                                            className="h-20 w-auto object-contain transition-all duration-500 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-black min-h-[400px] lg:min-h-full overflow-hidden group">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={activeData.poster}
                            src={activeData.video}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 lg:opacity-60 pointer-events-none" />
                    </div>
                </div>

                <div className="p-8 lg:p-12 space-y-24 bg-background/50">
                    {activeData.sections.map((section: any, idx: number) => (
                        <div key={idx} className="scroll-mt-12">
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
                                <div className="lg:w-1/3 space-y-6 sticky top-24">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group/image">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover/image:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-lg">
                                                <section.icon className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white leading-tight">{section.title}</h4>
                                        </div>
                                    </div>
                                    <div className="text-muted-foreground text-lg leading-relaxed">{section.description}</div>
                                </div>

                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.features.map((feature: any, fIdx: number) => (
                                        <div key={fIdx} className="group p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                                            <div className="flex items-start gap-4">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                                <div>
                                                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h5>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {idx !== activeData.sections.length - 1 && (
                                <div className="h-px bg-border/50 w-full mt-12" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
