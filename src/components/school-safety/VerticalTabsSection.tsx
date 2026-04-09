import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchoolSafetyTab } from "@/data/school-safety-v2-data";

interface VerticalTabsSectionProps {
    tabs: SchoolSafetyTab[];
}

export const VerticalTabsSection = ({ tabs }: VerticalTabsSectionProps) => {
    return (
        <div className="mb-12">
            <Tabs.Root defaultValue={tabs[0].id} orientation="vertical">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Tabs Navigation */}
                    <div className="lg:w-1/3 w-full">
                        <Tabs.List className="flex flex-col gap-3 w-full">
                            {tabs.map((tab) => (
                                <Tabs.Trigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 outline-none
                                        data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25
                                        bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-data-[state=active]:bg-white/20">
                                        <tab.icon size={20} className="text-primary group-data-[state=active]:text-white" />
                                    </div>
                                    <span className="font-semibold text-sm">{tab.label || tab.title}</span>
                                    <ChevronRight className="ml-auto opacity-0 group-data-[state=active]:opacity-100 transition-opacity w-4 h-4" />
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </div>

                    {/* Tab Content */}
                    <div className="lg:w-2/3 w-full">
                        <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[400px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                            {tabs.map((tab) => (
                                <Tabs.Content key={tab.id} value={tab.id} className="w-full relative z-10 outline-none">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <h4 className="text-2xl font-bold text-foreground">{tab.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{tab.desc}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-border/50">
                                            {tab.items.map(item => (
                                                <div key={item} className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                        <CheckCircle2 size={12} className="text-primary" />
                                                    </div>
                                                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </motion.div>
                                </Tabs.Content>
                            ))}
                        </div>
                    </div>
                </div>
            </Tabs.Root>
        </div>
    );
};
