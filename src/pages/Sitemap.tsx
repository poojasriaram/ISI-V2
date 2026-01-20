import { Layout } from "@/components/Layout";
import { Home, Building2, Shield, Briefcase, FileText, Mail, ArrowRight } from "lucide-react";

const Sitemap = () => {
    const sitemapSections = [
        {
            title: "Main Pages",
            icon: Home,
            links: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
            ]
        },
        {
            title: "Our Services",
            icon: Shield,
            links: [
                { name: "Capabilities", href: "/capabilities" },
                { name: "Offerings", href: "/offerings" },
                { name: "Solutions", href: "/solutions" },
            ]
        },
        {
            title: "Industry Verticals",
            icon: Building2,
            links: [
                { name: "All Verticals", href: "/verticals" },
                { name: "Hospitality & Events", href: "/verticals/hospitality" },
                { name: "BFSI Sector", href: "/verticals/bfsi" },
                { name: "Education Sector", href: "/verticals/education" },
                { name: "Manufacturing & Defence", href: "/verticals/manufacturing" },
                { name: "Healthcare Security", href: "/verticals/healthcare" },
                { name: "Drone Services", href: "/verticals/drones" },
            ]
        },
        {
            title: "Company",
            icon: Briefcase,
            links: [
                { name: "Our Customers", href: "/customers" },
                { name: "Partners", href: "/partners" },
                { name: "Careers", href: "/career" },
            ]
        },
        {
            title: "Legal & Policies",
            icon: FileText,
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Copyright Policy", href: "/copyright-policy" },
            ]
        },
    ];

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sitemap</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Navigate through all pages and sections of our website
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-7xl">
                    {/* Sitemap Sections in Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {sitemapSections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                            </div>
                                            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {section.title}
                                            </h2>
                                        </div>

                                        {/* Links */}
                                        <ul className="space-y-3">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href={link.href}
                                                        className="group/link flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
                                                    >
                                                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover/link:translate-x-1 transition-transform" />
                                                        <span className="text-sm text-muted-foreground group-hover/link:text-primary transition-colors font-medium">
                                                            {link.name}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="group text-center p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">13+</div>
                            <div className="text-sm text-muted-foreground font-semibold">Main Pages</div>
                        </div>
                        <div className="group text-center p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">6</div>
                            <div className="text-sm text-muted-foreground font-semibold">Industry Verticals</div>
                        </div>
                        <div className="group text-center p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">3</div>
                            <div className="text-sm text-muted-foreground font-semibold">Service Categories</div>
                        </div>
                        <div className="group text-center p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">4</div>
                            <div className="text-sm text-muted-foreground font-semibold">Legal Policies</div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20">
                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Need Help Finding Something?
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        If you can't find what you're looking for, please don't hesitate to contact us. Our team is here to help you navigate our services and find the perfect security solution for your needs.
                                    </p>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Contact Us
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Sitemap;
