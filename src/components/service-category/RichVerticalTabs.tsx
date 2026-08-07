
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface TabDetail {
    title: string;
    items: string[];
}

export interface RichTabPayload {
    id: string;
    title: string;
    description: string;
    icon: any  ;
    details: TabDetail[];
}

interface RichVerticalTabsProps {
    tabs: RichTabPayload[];
}

export const RichVerticalTabs = ({ tabs }: RichVerticalTabsProps) => {
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
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeTab === index ? "bg-white/20" : "bg-primary/10"}`}>
                                        <tab.icon className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-primary"}`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">{tab.title}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="lg:w-2/3">
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[400px]">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                            {tabs[activeTab].title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {tabs[activeTab].description}
                        </p>

                        <div className="space-y-6">
                            {tabs[activeTab].details.map((detail, idx) => (
                                <div key={idx} className="bg-background/50 rounded-xl p-5 border border-border/50">
                                    <h5 className="font-semibold text-primary mb-3 text-lg">{detail.title}</h5>
                                    <ul className="grid md:grid-cols-1 gap-2">
                                        {detail.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-foreground/80">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
