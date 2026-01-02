import { ArrowUpRight, X, CheckCircle2, Sparkles } from "lucide-react";
import { capabilityPillars, CapabilityPillar } from "@/data/capabilities-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface TopicModalProps {
    topic: {
        title: string;
        capabilities?: string[];
        scenarios?: string[];
    };
    isOpen: boolean;
    onClose: () => void;
    pillarTitle: string;
    pillarIcon: any;
}

const TopicModal = ({ topic, isOpen, onClose, pillarTitle, pillarIcon: Icon }: TopicModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                                {pillarTitle}
                            </Badge>
                            <DialogTitle className="text-2xl font-bold text-foreground leading-tight">
                                {topic.title}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-8 pt-4">
                    {/* Advanced Capabilities */}
                    {topic.capabilities && topic.capabilities.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-6 bg-gradient-to-b from-primary to-blue-600 rounded-full" />
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                                    Advanced Capabilities
                                </h4>
                            </div>
                            <div className="grid gap-3">
                                {topic.capabilities.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="group flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                                    >
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Critical Deployment Scenarios */}
                    {topic.scenarios && topic.scenarios.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                                    Critical Deployment Scenarios
                                </h4>
                            </div>
                            <div className="grid gap-3">
                                {topic.scenarios.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="group flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

const CapabilityCard = ({ cap }: { cap: CapabilityPillar }) => {
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

    return (
        <>
            <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-[400px]">
                {/* Header / Summary Section */}
                <div className="p-6 pb-5 relative z-10 flex-shrink-0 h-[160px] bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <cap.icon className="w-6 h-6 text-white transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight line-clamp-2">
                            {cap.title}
                        </h3>

                        <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
                            {cap.punchline}
                        </p>
                    </div>
                </div>

                {/* Topics List */}
                <div className="px-6 pt-4 pb-6 space-y-2 flex-grow overflow-y-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-primary/60" />
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Explore Topics
                        </p>
                    </div>
                    {cap.topics.map((topic, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedTopic(idx)}
                            className="w-full group/btn flex items-center justify-between p-3 rounded-xl border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-primary/5 transition-all duration-300 text-left"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover/btn:bg-primary group-hover/btn:scale-125 transition-all" />
                                <span className="text-sm font-semibold text-foreground/80 group-hover/btn:text-primary transition-colors">
                                    {topic.title}
                                </span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover/btn:text-primary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                        </button>
                    ))}
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 pointer-events-none opacity-50" />
            </div>

            {/* Modal */}
            {selectedTopic !== null && (
                <TopicModal
                    topic={cap.topics[selectedTopic]}
                    isOpen={selectedTopic !== null}
                    onClose={() => setSelectedTopic(null)}
                    pillarTitle={cap.title}
                    pillarIcon={cap.icon}
                />
            )}
        </>
    );
};

export const CapabilitiesGrid = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Operational Pillars</h3>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {capabilityPillars.map((cap, index) => (
                    <CapabilityCard key={index} cap={cap} />
                ))}
            </div>
        </>
    );
};
