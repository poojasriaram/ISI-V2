import { useState } from "react";
import { securityDomains, SecurityDomain } from "@/data/capabilities-data";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface DomainModalProps {
    domain: SecurityDomain | null;
    isOpen: boolean;
    onClose: () => void;
}

const DomainModal = ({ domain, isOpen, onClose }: DomainModalProps) => {
    if (!domain) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col p-0">
                {/* Static Header */}
                <DialogHeader className="p-6 pb-4 border-b border-border">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <domain.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                            <Badge variant="outline" className="text-xs mb-2">
                                Multi-Domain Security
                            </Badge>
                            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                                {domain.title}
                            </DialogTitle>
                            <p className="text-muted-foreground mt-2 leading-relaxed">
                                {domain.description}
                            </p>
                        </div>
                    </div>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 p-6 pt-4">
                    <div className="space-y-6">
                        {domain.services.map((service, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-gradient-to-b from-primary to-blue-600 rounded-full" />
                                    <h4 className="text-lg font-bold text-foreground">
                                        {service.title}
                                    </h4>
                                </div>
                                <div className="grid gap-2 pl-4">
                                    {service.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                                        >
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export const MultiDomainCoverage = () => {
    const [selectedDomain, setSelectedDomain] = useState<SecurityDomain | null>(null);

    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Multi-Domain Security Coverage
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Unified Security Across Domains
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    All operations are coordinated through a centralized command and intelligence platform with regional and national control centers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityDomains.map((domain, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedDomain(domain)}
                        className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 p-6 text-left h-full flex flex-col"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <domain.icon className="w-7 h-7 text-primary" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors text-center">
                            {domain.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow text-center">
                            {domain.description}
                        </p>

                        {/* View Details Link */}
                        <div className="flex items-center justify-center gap-2 text-primary text-sm font-semibold mt-auto">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[60px] -mr-4 -mt-4 pointer-events-none opacity-50" />
                    </button>
                ))}
            </div>

            <DomainModal
                domain={selectedDomain}
                isOpen={selectedDomain !== null}
                onClose={() => setSelectedDomain(null)}
            />
        </div>
    );
};
