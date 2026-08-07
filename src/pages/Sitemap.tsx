import { Layout } from "@/components/Layout";
import { useContentProtection } from "@/hooks/useContentProtection";
import { Home, Building2, Shield, Briefcase, FileText, Mail, ArrowRight, Clock, ExternalLink, ChevronRight } from "lucide-react";

const Sitemap = () => {
    useContentProtection();
    const sitemapSections = [
        {
            title: "Main Pages",
            description: "Essential pages for understanding ISI India",
            icon: Home,
            links: [
                {
                    name: "Home",
                    href: "/",
                    description: "Discover our comprehensive security solutions and industry-leading expertise",
                    type: "Landing Page"
                },
                {
                    name: "About Us",
                    href: "/about",
                    description: "Learn about our mission, values, and commitment to excellence in security services",
                    type: "Company Info"
                },
                {
                    name: "Contact Us",
                    href: "/contact",
                    description: "Connect with our team for consultations, inquiries, and partnership opportunities",
                    type: "Contact"
                },
            ]
        },
        {
            title: "Our Services",
            description: "Comprehensive security solutions tailored to your needs",
            icon: Shield,
            links: [
                {
                    name: "Capabilities",
                    href: "/capabilities",
                    description: "Explore our core competencies in physical security, technology integration, and risk management",
                    type: "Service Overview"
                },
                {
                    name: "Offerings",
                    href: "/offerings",
                    description: "Browse our complete portfolio of security services and specialized solutions",
                    type: "Service Catalog"
                },
                {
                    name: "Solutions",
                    href: "/solutions",
                    description: "Discover customized security solutions designed for your specific requirements",
                    type: "Solutions"
                },
            ]
        },
        {
            title: "Specialized Solutions",
            description: "Advanced security systems for critical operations",
            icon: Shield,
            links: [
                {
                    name: "School Safety Solutions",
                    href: "/school-safety",
                    description: "Comprehensive safety ecosystem for educational institutions with AI-powered monitoring",
                    type: "Vertical Solution"
                },
                {
                    name: "Cash Logistics",
                    href: "/cash-logistics",
                    description: "Secure cash-in-transit and value logistics with real-time tracking and armed protection",
                    type: "Vertical Solution"
                },
                {
                    name: "Command Center",
                    href: "/command-center",
                    description: "24/7 centralized security operations with advanced monitoring and rapid response",
                    type: "Vertical Solution"
                },
            ]
        },
        {
            title: "Industry Verticals",
            description: "Specialized security for every sector",
            icon: Building2,
            links: [
                {
                    name: "All Verticals",
                    href: "/verticals",
                    description: "Comprehensive overview of all industry-specific security solutions we offer",
                    type: "Directory"
                },
                {
                    name: "Hospitality & Events",
                    href: "/verticals/hospitality",
                    description: "Premium security for hotels, resorts, and large-scale events with guest safety focus",
                    type: "Industry"
                },
                {
                    name: "BFSI Sector",
                    href: "/verticals/bfsi",
                    description: "Banking and financial institution security with compliance and risk mitigation",
                    type: "Industry"
                },
                {
                    name: "Education Sector",
                    href: "/verticals/education",
                    description: "Campus security solutions ensuring safe learning environments for students",
                    type: "Industry"
                },
                {
                    name: "Manufacturing & Industrial",
                    href: "/verticals/manufacturing",
                    description: "Industrial facility protection with perimeter security and access control",
                    type: "Industry"
                },
                {
                    name: "Healthcare Security",
                    href: "/verticals/healthcare",
                    description: "Medical facility protection ensuring patient safety and asset security",
                    type: "Industry"
                },
                {
                    name: "Drone Services",
                    href: "/verticals/drones",
                    description: "Aerial intelligence and surveillance for comprehensive site monitoring",
                    type: "Technology"
                },
            ]
        },
        {
            title: "Company",
            description: "Learn more about ISI India and join our team",
            icon: Briefcase,
            links: [
                {
                    name: "Our Customers",
                    href: "/customers",
                    description: "Trusted by leading organizations across India for their security needs",
                    type: "Portfolio"
                },
                {
                    name: "Partners",
                    href: "/partners",
                    description: "Strategic partnerships and technology alliances driving innovation",
                    type: "Network"
                },
                {
                    name: "Careers",
                    href: "/career",
                    description: "Join our growing team and build a rewarding career in security services",
                    type: "Opportunities"
                },
            ]
        },
        {
            title: "Facility Management Excellence",
            description: "Autonomous asset reliability and predictive maintenance solutions",
            icon: Building2,
            links: [
                {
                    name: "Hard FM Excellence",
                    href: "/services/facility-management/hard-fm",
                    description: "Autonomous asset reliability and predictive maintenance for critical infrastructure",
                    type: "Category"
                },
                {
                    name: "Soft FM Intelligence",
                    href: "/services/facility-management/soft-fm",
                    description: "AI-powered workforce orchestration and premium experience management",
                    type: "Category"
                },
                {
                    name: "ESG & Energy Intelligence",
                    href: "/services/facility-management/energy-sustainability",
                    description: "Data-driven sustainability and energy optimization for zero-carbon operations",
                    type: "Category"
                },
                {
                    name: "DCIM & Smart Infrastructure",
                    href: "/services/facility-management/space-workplace",
                    description: "Intelligent DCIM and autonomous infrastructure management",
                    type: "Category"
                },
                {
                    name: "Digital Twin & Autonomous FM",
                    href: "/services/facility-management/compliance-risk",
                    description: "Next-generation facility management with real-time digital twins",
                    type: "Category"
                },
                {
                    name: "Vendor & Supply Chain Intelligence",
                    href: "/services/facility-management/vendor-supply-chain",
                    description: "Securing global supply chains through autonomous vendor intelligence",
                    type: "Category"
                },
            ]
        },
        {
            title: "Security Intelligence Services",
            description: "AI-augmented security and tactical intelligence for enterprise protection",
            icon: Shield,
            links: [
                {
                    name: "Manned Guarding Intelligence",
                    href: "/services/security-services/manned-guarding",
                    description: "AI-augmented physical protection and elite tactical guarding",
                    type: "Category"
                },
                {
                    name: "Electronic Security Intelligence",
                    href: "/services/security-services/electronic-security",
                    description: "Autonomous threat detection, video intelligence, and sensor fusion",
                    type: "Category"
                },
                {
                    name: "Smart Command & Control",
                    href: "/services/security-services/command-control",
                    description: "Centralized intelligence hubs for multi-site security orchestration",
                    type: "Category"
                },
                {
                    name: "Specialized Protection",
                    href: "/services/security-services/specialized-protection",
                    description: "High-risk asset logistics and specialized personnel protection",
                    type: "Category"
                },
                {
                    name: "Risk Intelligence & Advisory",
                    href: "/services/security-services/risk-advisory",
                    description: "Strategic risk modeling and geopolitical intelligence for global enterprise",
                    type: "Category"
                },
                {
                    name: "Emerging Threat & Technology Intelligence",
                    href: "/services/security-services/emerging-threat-tech",
                    description: "Future-ready security innovation covering drones, robotics, and neuro-security",
                    type: "Category"
                },
            ]
        },
        {
            title: "Legal & Policies",
            description: "Terms, privacy, and compliance information",
            icon: FileText,
            links: [
                {
                    name: "Privacy Policy",
                    href: "/privacy-policy",
                    description: "How we collect, use, and protect your personal information",
                    type: "Legal"
                },
                {
                    name: "Terms of Service",
                    href: "/terms-of-service",
                    description: "Terms and conditions governing the use of our services",
                    type: "Legal"
                },
                {
                    name: "Cookie Policy",
                    href: "/cookie-policy",
                    description: "Information about cookies and how we use them on our website",
                    type: "Legal"
                },
                {
                    name: "Copyright Policy",
                    href: "/copyright-policy",
                    description: "Intellectual property rights and content usage guidelines",
                    type: "Legal"
                },
            ]
        },
    ];

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Enhanced Hero Section */}
                <div className="relative py-8 md:py-10 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

                    {/* Gradient Orbs */}
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 shadow-lg">
                                <ExternalLink className="w-4 h-4 text-white" />
                                <span className="text-sm font-semibold text-white">Complete Website Navigation</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                                Site Map
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                                Explore our complete website structure and quickly find the information you need
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <div className="text-3xl font-bold text-white mb-1">35</div>
                                    <div className="text-xs text-white/80 font-medium">Total Pages</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <div className="text-3xl font-bold text-white mb-1">7</div>
                                    <div className="text-xs text-white/80 font-medium">Verticals</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <div className="text-3xl font-bold text-white mb-1">12</div>
                                    <div className="text-xs text-white/80 font-medium">Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-10 md:py-12 max-w-7xl">
                    {/* Page Categories */}
                    <div className="space-y-12">
                        {sitemapSections.map((section, sectionIndex) => {
                            const Icon = section.icon;
                            return (
                                <div key={sectionIndex} className="group">
                                    {/* Section Header */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-foreground mb-1">{section.title}</h2>
                                            <p className="text-muted-foreground">{section.description}</p>
                                        </div>
                                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
                                            <span className="text-sm font-semibold text-primary">{section.links.length} pages</span>
                                        </div>
                                    </div>

                                    {/* Links Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.links.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.href}
                                                className="group/card relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                                            >
                                                {/* Gradient Background on Hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                                <div className="relative z-10">
                                                    {/* Page Type Badge */}
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                                            <Clock className="w-3 h-3" />
                                                            {link.type}
                                                        </span>
                                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover/card:text-primary group-hover/card:translate-x-1 transition-all" />
                                                    </div>

                                                    {/* Page Title */}
                                                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover/card:text-primary transition-colors">
                                                        {link.name}
                                                    </h3>

                                                    {/* Page Description */}
                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                        {link.description}
                                                    </p>
                                                </div>

                                                {/* Shine Effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    {sectionIndex < sitemapSections.length - 1 && (
                                        <div className="mt-12 border-t border-border/50" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 md:p-8 rounded-3xl border border-primary/20">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl shadow-primary/30 mx-auto mb-8">
                                <Mail className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Can't Find What You're Looking For?
                            </h3>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                Our team is here to help you navigate our services and find the perfect security solution for your needs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 text-lg group"
                                >
                                    <Mail className="w-6 h-6" />
                                    Contact Our Team
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-border hover:border-primary/50 text-foreground rounded-2xl font-bold transition-all duration-300 hover:bg-card/80 text-lg group"
                                >
                                    About ISI India
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Sitemap;
