import { directorsData, executiveManagementData } from "@/data/about-data";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, ShieldCheck, HeartPulse, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LeadershipGrid = () => {
    // Combine all leaders into one array
    const allLeaders = [...directorsData, ...executiveManagementData];

    return (
        <div id="board-of-directors" className="py-12 scroll-mt-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Board of Directors</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Meet the experienced professionals guiding ISI's strategic vision and operational excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                {/* Blogs & Insights by Board of Directors Section */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700/50">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 border-b border-slate-700/60 pb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full mb-3">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Executive Thought Leadership</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Blogs & Insights by our Board</h3>
                            <p className="text-slate-300 text-sm sm:text-base mt-1">
                                Operational frameworks and strategic resilience guides authored by ISI Executive Directors.
                            </p>
                        </div>
                        <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-6 gap-2">
                            <Link to="/blog">
                                View All Blogs & Insights <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link 
                            to="/blog/disaster-vulnerability-management-in-healthcare" 
                            className="group p-6 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <img src="/leaders/Rajkumar ED.jpeg" alt="Rajkumar Sankaran" className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/50" />
                                    <div>
                                        <div className="text-xs font-bold text-white">Rajkumar Sankaran</div>
                                        <div className="text-[10px] text-blue-400 font-medium">Executive Director</div>
                                    </div>
                                </div>
                                <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                    Disaster Vulnerability Management in Healthcare
                                </h4>
                                <p className="text-xs text-slate-300 line-clamp-2">
                                    A Comprehensive Guide for Hospital Leadership, Security Professionals & Emergency Planners.
                                </p>
                            </div>
                            <div className="mt-4 text-xs font-bold text-blue-400 inline-flex items-center gap-1">
                                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link 
                            to="/blog/cybersecurity-risks-in-healthcare" 
                            className="group p-6 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <img src="/leaders/Varshithkumar ED.jpg" alt="V. Varshithkumar" className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/50" />
                                    <div>
                                        <div className="text-xs font-bold text-white">V. Varshithkumar</div>
                                        <div className="text-[10px] text-blue-400 font-medium">Executive Director</div>
                                    </div>
                                </div>
                                <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                    Cybersecurity Risks in Healthcare & Cyber-Physical Safety
                                </h4>
                                <p className="text-xs text-slate-300 line-clamp-2">
                                    A Comprehensive Guide to Cyber-Physical Security, Patient Safety & Hospital Operational Resilience.
                                </p>
                            </div>
                            <div className="mt-4 text-xs font-bold text-blue-400 inline-flex items-center gap-1">
                                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

