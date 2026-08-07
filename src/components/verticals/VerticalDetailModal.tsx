import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getVerticalDetailById } from "@/data/verticals-detail-data";

interface VerticalDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    verticalId: string | null;
}

export const VerticalDetailModal = ({ isOpen, onClose, verticalId }: VerticalDetailModalProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedOfferings, setExpandedOfferings] = useState<string[]>([]);
    const [expandedBenefits, setExpandedBenefits] = useState<string[]>([]);

    if (!isOpen || !verticalId) return null;

    const verticalData = getVerticalDetailById(verticalId);
    if (!verticalData) return null;

    const toggleOfferings = (sectionId: string) => {
        setExpandedOfferings(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const toggleBenefits = (sectionId: string) => {
        setExpandedBenefits(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const currentSection = verticalData.sections[activeTab];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="bg-background/95 backdrop-blur-xl w-full max-w-5xl max-h-[90vh] rounded-3xl border border-border/50 shadow-2xl ring-1 ring-white/10 flex flex-col animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex-shrink-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b border-border/50 backdrop-blur-xl p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${verticalData.gradient} flex items-center justify-center shadow-lg`}>
                                    <verticalData.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                                    {verticalData.title}
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-sm md:text-base font-medium">
                                {verticalData.subtitle}
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="rounded-full hover:bg-black/5 flex-shrink-0"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Description */}
                <div className="flex-shrink-0 px-6 md:px-8 pt-6 pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                    <p className="text-muted-foreground leading-relaxed text-base">
                        {verticalData.description}
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex-shrink-0 px-6 md:px-8 pt-4 pb-2 border-b border-border/50 bg-background/50 backdrop-blur-sm">
                    <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                        {verticalData.sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveTab(index);
                                    setExpandedOfferings([]);
                                    setExpandedBenefits([]);
                                }}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-card/60 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
                                    }`}
                            >
                                <section.icon className="w-4 h-4" />
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
                    {/* Our Offerings Section */}
                    <div className="space-y-4">
                        <button
                            onClick={() => toggleOfferings(currentSection.id)}
                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                Our Offerings
                            </h3>
                            {expandedOfferings.includes(currentSection.id) ? (
                                <ChevronUp className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            )}
                        </button>

                        {expandedOfferings.includes(currentSection.id) && (
                            <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                                {currentSection.offerings.map((offering, idx) => (
                                    <div key={idx} className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-4">
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {offering.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {offering.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex gap-3 text-muted-foreground">
                                                    <span className="text-primary mt-1 flex-shrink-0 font-bold">•</span>
                                                    <span className="leading-relaxed text-sm md:text-base">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Key Benefits Section */}
                    <div className="space-y-4">
                        <button
                            onClick={() => toggleBenefits(currentSection.id)}
                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                Key Benefits — Powered by Technology, Built on Trust
                            </h3>
                            {expandedBenefits.includes(currentSection.id) ? (
                                <ChevronUp className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            )}
                        </button>

                        {expandedBenefits.includes(currentSection.id) && (
                            <div className="grid md:grid-cols-2 gap-4 animate-in slide-in-from-top-4 duration-300">
                                {currentSection.benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${verticalData.gradient} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                <benefit.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-foreground mb-2 text-base md:text-lg">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Closing Statement */}
                    {verticalData.closingStatement && (
                        <div className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${verticalData.gradient} flex items-center justify-center shadow-md`}>
                                    <verticalData.icon className="w-5 h-5 text-white" />
                                </div>
                                One Integrated Secure Value Management Platform
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {verticalData.closingStatement}
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 bg-background/95 backdrop-blur-xl border-t border-border/50 p-4 md:p-6">
                    <Button
                        onClick={onClose}
                        className="w-full h-12 rounded-xl font-semibold"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};
