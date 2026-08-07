
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServiceStatisticsGrid } from "@/components/service-category/ServiceStatisticsGrid";
import { ServicePortfolioGrid } from "@/components/service-category/ServicePortfolioGrid";
import { CTAPanel } from "@/components/cash-logistics/CTAPanel";
import { RichVerticalTabs, RichTabPayload } from "@/components/service-category/RichVerticalTabs";
import { serviceCategories } from "@/data/service-categories";
import { Lightbulb, Layers } from "lucide-react";
import { useEffect } from "react";
import { useContentProtection } from "@/hooks/useContentProtection";

const ServiceCategoryPage = () => {
    useContentProtection();
    const { categoryId } = useParams<{ categoryId: string }>();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId]);

    const categoryData = serviceCategories.find(c => c.id === categoryId);

    if (!categoryData) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden pt-32">
                {/* Hero Section */}
                <PageHero
                    slides={categoryData.heroSlides}
                />

                {/* Render ALL Offerings as Separate 5-Panel Sections */}
                {categoryData.offerings.map((offering, index) => {
                    // Alternate background colors for visual separation
                    const bgClass = index % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-primary/5 to-primary/10";

                    // Convert Offering Tabs to RichVerticalTabs format
                    const tabsData: RichTabPayload[] = offering.tabs.map(tab => ({
                        id: tab.title, // using title as id
                        title: tab.title,
                        description: tab.description,
                        icon: Layers, // Generic icon for now since tabs in data didn't have icons
                        details: [{ title: "Key Details", items: tab.items || [] }]
                    }));

                    return (
                        <section key={offering.id} id={offering.id} className={`py-12 relative overflow-hidden ${bgClass}`}>
                            {/* Background Elements for odd sections */}
                            {index % 2 !== 0 && (
                                <>
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                                </>
                            )}

                            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                                {/* Panel 1: Offering Title */}
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full mb-4 border border-primary/20">
                                        <offering.icon className="w-3 h-3" />
                                        Service Solution
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                        {offering.title}
                                    </h2>
                                    <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
                                        {offering.subtitle}
                                    </p>
                                </div>

                                {/* Panel 2: Statistics */}
                                <div className="mb-12">
                                    <ServiceStatisticsGrid statistics={offering.stats} />
                                </div>

                                <div className="mb-12">
                                    <ServicePortfolioGrid cards={offering.portfolio} />
                                </div>

                                <div className="mb-12">
                                    <RichVerticalTabs tabs={tabsData} />
                                </div>

                                {/* Panel 5: CTA */}
                                <CTAPanel
                                    text={offering.cta.text}
                                    buttonText={offering.cta.buttonText}
                                    link={offering.cta.link}
                                />
                            </div>
                        </section>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
};

export default ServiceCategoryPage;
