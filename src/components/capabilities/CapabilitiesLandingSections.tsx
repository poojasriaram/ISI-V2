
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import {
    CapabilitiesSection,
    CapabilitiesStatistic,
    CapabilitiesCard,
    CapabilitiesTab
} from "@/data/capabilities-landing-data";

// --- Sub-components (Local to this file to keep it self-contained) ---

const StatisticsGrid = ({ statistics }: { statistics: CapabilitiesStatistic[] }) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statistics.map((stat, index) => (
            <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-snug">
                        {stat.label}
                    </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>
        ))}
    </div>
);

const PortfolioGrid = ({ cards }: { cards: CapabilitiesCard[] }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
            <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <card.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-4 group-hover:text-foreground transition-colors">
                        {card.title}
                    </h3>
                    <ul className="space-y-2">
                        {card.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="leading-snug">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>
        ))}
    </div>
);

const VerticalTabsSection = ({ tabs }: { tabs: CapabilitiesTab[] }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
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
                <div className="lg:w-2/3">
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 min-h-[250px] flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                            {tabs[activeTab].title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {tabs[activeTab].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CTAPanel = ({ text, buttonText, link }: { text: string; buttonText: string; link: string }) => (
    <div className="text-center mb-8">
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto italic">
            "{text}"
        </p>
        <Link to={link}>
            <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
                {buttonText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </Link>
    </div>
);

// --- Main Section Component ---

interface LandingSectionProps {
    section: CapabilitiesSection;
    index: number;
}

export const CapabilitiesLandingSection = ({ section, index }: LandingSectionProps) => {
    const bgClass = index % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-primary/5 to-primary/10";

    return (
        <section id={section.id} className={`py-8 relative overflow-hidden scroll-mt-10 ${bgClass}`}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Panel 1: Section Title */}
                <div className="text-center mb-8">
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
