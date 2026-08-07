import { directorsData, executiveManagementData } from "@/data/about-data";

export const LeadershipGrid = () => {
    // Combine all leaders into one array
    const allLeaders = [...directorsData, ...executiveManagementData];

    return (
        <div className="py-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Board of Directors</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Meet the experienced professionals guiding ISI's strategic vision and operational excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {allLeaders.map((leader, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-xl">
                            <img loading="lazy" src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                            {/* Content container - always at bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                {/* Name and role - always visible */}
                                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                <p className="text-primary font-medium mb-3">{leader.role}</p>

                                {/* Bio - hidden by default, shown on hover */}
                                <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {leader.bio}
                                    </p>
                                </div>

                                {/* Decorative line */}
                                <div className="h-1 w-12 bg-primary mt-4 rounded-full group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
