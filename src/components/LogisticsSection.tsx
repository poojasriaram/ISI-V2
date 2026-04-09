import { LogisticsStats } from "@/components/logistics/LogisticsStats";
import { LogisticsPortfolio } from "@/components/logistics/LogisticsPortfolio";
import { LogisticsVerticalTabs } from "@/components/logistics/LogisticsVerticalTabs";
import { LogisticsCTA } from "@/components/logistics/LogisticsCTA";

export const LogisticsSection = () => {
    return (
        <section id="logistics" className="pt-0 pb-8 relative overflow-hidden scroll-mt-10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[var(--section-gradient)]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Panel 1: Section Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
                        Secure Value Logistics
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        A Unified, Tech-Led Platform
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        For Cash, Bullion, and Critical Assets with real-time tracking and bank-grade security
                    </p>
                </div>

                {/* Panel 2: Statistics Cards */}
                <LogisticsStats />

                {/* Panel 3: Portfolio/Service Cards */}
                <LogisticsPortfolio />

                {/* Panel 4: Vertical Tabs */}
                <LogisticsVerticalTabs />

                {/* Panel 5: CTA Section */}
                <LogisticsCTA />
            </div>
        </section>
    );
};
