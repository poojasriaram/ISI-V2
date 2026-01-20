import { CashLogisticsTab } from "@/data/cash-logistics-data";
import { useState } from "react";

interface VerticalTabsSectionProps {
    tabs: CashLogisticsTab[];
}

export const VerticalTabsSection = ({ tabs }: VerticalTabsSectionProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Tabs Navigation */}
                <div className="lg:w-1/3">
                    <div className="space-y-3">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${activeTab === index
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                        : "bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg"
                                    }`}
                            >
                                <span className="font-semibold text-sm">{tab.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="lg:w-2/3">
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[300px]">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                            {tabs[activeTab].title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {tabs[activeTab].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
