import { Brain, Users, ArrowRight } from "lucide-react";

export const CorePhilosophy = () => {
    return (
        <section className="pt-8 pb-0 relative overflow-hidden bg-background">
            {/* Architectural Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] -mr-96 -mt-96" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px] -ml-72 -mb-72" />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0047FF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-2">

                        {/* Premium Label */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-primary/30" />
                            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] py-1 px-3 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
                                The Future of Protection
                            </span>
                            <div className="h-px w-8 bg-primary/30" />
                        </div>

                        {/* Main Statement */}
                        <div className="relative max-w-4xl">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-foreground">
                                <span className="block mb-2 text-lg md:text-xl font-medium uppercase tracking-[0.1em] text-muted-foreground">Our Strategic Evolution</span>
                                We are evolving from{" "}
                                <span className="font-bold text-foreground block md:inline-block relative pb-4">
                                    Number of Guards per Site
                                    <span className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-muted/30 rounded-full" />
                                </span>
                                <span className="mx-4 md:inline-block hidden">
                                    <ArrowRight className="w-6 h-6 text-primary inline animate-pulse" />
                                </span>
                                <span className="block md:hidden my-2">to</span>
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500 block md:inline-block relative pb-4">
                                    Intelligence per Square Foot
                                    <span className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full" />
                                </span>
                            </h2>
                        </div>

                        {/* Comparison Cards */}
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl pt-8">

                            {/* Traditional Card */}
                            <div className="group relative p-8 rounded-3xl bg-muted/30 border border-border/40 transition-all duration-500 hover:bg-muted/50 text-left overflow-hidden flex-1 w-full">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <Users size={120} />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">Traditional Model</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Reliance on sheer volume and physical presence. Static observation with high human dependency.
                                    </p>
                                </div>
                            </div>

                            {/* Modern Arrow Connector */}
                            <div className="flex-shrink-0 flex items-center justify-center z-10 px-2">
                                {/* Desktop: horizontal arrow */}
                                <div className="hidden md:flex flex-col items-center gap-1">
                                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="arrowFill" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#0047FF" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                            </filter>
                                        </defs>
                                        {/* Filled arrow shape */}
                                        <path
                                            d="M0 13 H40 V7 L62 16 L40 25 V19 H0 Z"
                                            fill="url(#arrowFill)"
                                            filter="url(#glow)"
                                            opacity="0.9"
                                        >
                                            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </div>
                                {/* Mobile: vertical arrow */}
                                <div className="flex md:hidden flex-col items-center">
                                    <svg width="32" height="64" viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="arrowFillV" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#0047FF" />
                                            </linearGradient>
                                            <filter id="glowV">
                                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                            </filter>
                                        </defs>
                                        <path
                                            d="M13 0 V40 H7 L16 62 L25 40 H19 V0 Z"
                                            fill="url(#arrowFillV)"
                                            filter="url(#glowV)"
                                            opacity="0.9"
                                        >
                                            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            {/* Next-Gen Card */}
                            <div className="group relative p-8 rounded-3xl bg-primary/5 border border-primary/10 transition-all duration-500 hover:bg-primary/[0.08] hover:border-primary/20 text-left overflow-hidden shadow-sm flex-1 w-full">
                                <div className="absolute -inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <Brain size={120} />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">Intelligence Driven</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        Powered by AI-Vision and real-time data. Proactive detection with 100% facility coverage.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
