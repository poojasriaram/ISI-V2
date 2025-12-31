import { commandIntelligence } from "@/data/capabilities-data";

export const CommandCenter = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Technology Backbone
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {commandIntelligence.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {commandIntelligence.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {commandIntelligence.features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decoration */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-[80px] -mr-6 -mb-6 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
