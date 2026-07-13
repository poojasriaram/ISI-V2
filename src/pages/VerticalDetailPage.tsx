import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from "@/components/Layout";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { verticalsDetailData } from "@/data/verticals-detail-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useContentProtection } from "@/hooks/useContentProtection";

export const VerticalDetailPage = () => {
    useContentProtection();
    const { verticalId } = useParams<{ verticalId: string }>();
    const navigate = useNavigate();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the vertical data
    const vertical = verticalsDetailData.find(v => v.id === verticalId);

    // If vertical not found, redirect to verticals page
    useEffect(() => {
        if (!vertical) {
            navigate('/verticals');
        }
    }, [vertical, navigate]);

    if (!vertical) {
        return null;
    }

    const Icon = vertical.icon;

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-10 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    {/* Back Button - Absolute top-left */}
                    <div className="absolute top-6 left-4 z-20">
                        <Link to="/verticals">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to All Verticals
                            </Button>
                        </Link>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Centered content */}
                        <div className="text-center">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{vertical.title}</h1>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{vertical.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">

                        {/* Overview */}
                        <div className="bg-muted/30 p-6 rounded-xl border border-border mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">{vertical.description}</p>
                        </div>

                        {/* Sections */}
                        {vertical.sections.map((section, sectionIndex) => {
                            const SectionIcon = section.icon;
                            return (
                                <div key={section.id} className="mb-8">
                                    {/* Section Header */}
                                    <div className="flex items-start gap-4 mb-8">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <SectionIcon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Offerings */}
                                    {section.offerings.map((offering, offeringIndex) => (
                                        <div key={offeringIndex} className="mb-8">
                                            <h3 className="text-xl font-bold text-foreground mb-3">{offering.title}</h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">{offering.description}</p>
                                            <ul className="space-y-3">
                                                {offering.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Benefits */}
                                    {section.benefits.length > 0 && (
                                        <div className="mt-8">
                                            <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {section.benefits.map((benefit, benefitIndex) => {
                                                    const BenefitIcon = benefit.icon;
                                                    return (
                                                        <div key={benefitIndex} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                                                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                                                <BenefitIcon className="w-6 h-6 text-primary" />
                                                            </div>
                                                            <h4 className="text-base font-bold text-foreground mb-2">{benefit.title}</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Divider between sections */}
                                    {sectionIndex < vertical.sections.length - 1 && (
                                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />
                                    )}
                                </div>
                            );
                        })}

                        {/* Closing Statement */}
                        {vertical.closingStatement && (
                            <div className="bg-muted/30 p-6 rounded-xl border border-border mt-12">
                                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Summary</Badge>
                                <p className="text-muted-foreground leading-relaxed italic">{vertical.closingStatement}</p>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <Link
                                to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-colors shadow-lg"
                            >
                                Get Started with {vertical.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default VerticalDetailPage;
