import { logisticsTabsContent } from "@/data/logistics-data";
import { useState } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";

export const LogisticsVerticalTabs = () => {
    const [activeTab, setActiveTab] = useState(logisticsTabsContent[0].id);

    const activeContent = logisticsTabsContent.find(tab => tab.id === activeTab) || logisticsTabsContent[0];

    return (
        <div className="mb-16">
            {/* Section Subtitle */}
            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Explore Our Solutions in Detail
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Click on each service to learn more about our offerings and benefits
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Tabs Navigation */}
                <div className="lg:w-1/3">
                    <div className="space-y-3">
                        {logisticsTabsContent.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                        : "bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeTab === tab.id
                                            ? "bg-primary-foreground/20"
                                            : "bg-primary/10"
                                        }`}>
                                        <tab.icon className={`w-5 h-5 ${activeTab === tab.id
                                                ? "text-primary-foreground"
                                                : "text-primary"
                                            }`} />
                                    </div>
                                    <span className="font-semibold text-sm">{tab.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="lg:w-2/3">
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[500px]">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <activeContent.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-2xl font-bold text-foreground">{activeContent.title}</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {activeContent.description}
                            </p>
                        </div>

                        {/* Offerings */}
                        <div className="mb-6">
                            <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                {activeContent.offerings.title}
                            </h5>
                            <ul className="space-y-3">
                                {activeContent.offerings.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                            <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-primary" />
                                Key Benefits
                            </h5>
                            <div className="grid md:grid-cols-3 gap-4">
                                {activeContent.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="bg-background/50 border border-border/30 rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                            <benefit.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h6 className="font-semibold text-sm text-foreground mb-2">
                                            {benefit.title}
                                        </h6>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Metric */}
                        {activeContent.keyMetric && (
                            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-semibold text-primary">
                                        Key Metric: {activeContent.keyMetric}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
