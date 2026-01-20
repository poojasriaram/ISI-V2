import { CashLogisticsSection } from "@/data/cash-logistics-data";
import { StatisticsGrid } from "./StatisticsGrid";
import { PortfolioGrid } from "./PortfolioGrid";
import { VerticalTabsSection } from "./VerticalTabsSection";
import { CTAPanel } from "./CTAPanel";
import { Lightbulb } from "lucide-react";

interface SectionPanelProps {
    section: CashLogisticsSection;
    index: number;
}

export const SectionPanel = ({ section, index }: SectionPanelProps) => {
    // Alternate background colors for visual separation with stronger contrast
    const bgClass = index % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-primary/5 to-primary/10";

    return (
        <section id={section.id} className={`py-8 relative overflow-hidden scroll-mt-32 ${bgClass}`}>
            {/* Background Elements */}
            {index % 2 === 1 && (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                </>
            )}

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Panel 1: Section Title */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-6 border border-primary/20">
                        <Lightbulb className="w-3 h-3" />
                        {section.badgeLabel}
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {section.title}
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                        {section.subtitle}
                    </p>
                </div>

                {/* Panel 2: Statistics Cards */}
                <StatisticsGrid statistics={section.statistics} />

                {/* Panel 3: Portfolio Cards */}
                <PortfolioGrid cards={section.portfolioCards} />

                {/* Panel 4: Vertical Tabs */}
                <VerticalTabsSection tabs={section.verticalTabs} />

                {/* Panel 5: CTA */}
                <CTAPanel
                    text={section.cta.text}
                    buttonText={section.cta.buttonText}
                    link={section.cta.link}
                />
            </div>
        </section>
    );
};
