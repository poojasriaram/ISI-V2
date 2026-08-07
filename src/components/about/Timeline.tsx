import { timelineData } from "@/data/about-data";

export const Timeline = () => {
    return (
        <div className="py-8 bg-secondary/5 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">A Legacy of Trust</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Over two decades of setting industry standards and exceeding client expectations.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

                    <div className="space-y-16">
                        {timelineData.map((item, idx) => (
                            <div key={idx} className={`flex items-center justify-between md:flex-row ${idx % 2 === 0 ? 'flex-col' : 'flex-col-reverse md:flex-row-reverse'}`}>
                                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right pr-0 md:pr-12' : 'md:text-left pl-0 md:pl-12'} mb-8 md:mb-0`}>
                                    <span className="text-6xl font-black text-primary/80 block mb-2">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 hidden md:block shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
                                <div className="w-full md:w-5/12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
