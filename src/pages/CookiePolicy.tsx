import { Layout } from "@/components/Layout";
import { useContentProtection } from "@/hooks/useContentProtection";
import { Cookie, Shield, Settings, Eye, Server, FileText } from "lucide-react";

const CookiePolicy = () => {
    useContentProtection();
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-10 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">
                        {/* Introduction */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Cookie className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <p className="text-muted-foreground">
                                    This Cookie Policy explains the use of cookies on <a href="https://www.isisecurity.in/" className="text-primary hover:underline">https://www.isisecurity.in/</a>.
                                </p>
                            </div>
                        </div>

                        {/* What Are Cookies */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. What Are Cookies</h2>
                                <p className="text-muted-foreground">
                                    Cookies are small data files placed on your device to enable Website functionality and enhance user experience.
                                </p>
                            </div>
                        </div>

                        {/* Types of Cookies */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Types of Cookies Used</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong>Essential Cookies:</strong> Required for Website operation</li>
                                    <li><strong>Analytics Cookies:</strong> Used to analyze Website traffic and performance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Data Collection */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Server className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Collection & IP Retention</h2>
                                <p className="text-muted-foreground mb-4">
                                    Cookies may collect technical data including IP address, browser type, and usage metrics.
                                </p>
                                <p className="text-muted-foreground">
                                    Your IP address is logged and retained for three (3) years for security, analytics, and compliance purposes.
                                </p>
                            </div>
                        </div>

                        {/* Third-Party Cookies */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Third-Party Cookies</h2>
                                <p className="text-muted-foreground">
                                    We may use third-party analytics tools. Such providers may place cookies in accordance with their privacy policies.
                                </p>
                            </div>
                        </div>

                        {/* Managing Cookies */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Settings className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Managing Cookies</h2>
                                <p className="text-muted-foreground">
                                    You may disable cookies via browser settings. Disabling cookies may affect Website functionality.
                                </p>
                            </div>
                        </div>

                        {/* Updates */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Updates</h2>
                                <p className="text-muted-foreground">
                                    This Cookie Policy may be updated periodically. Changes will be reflected on this page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CookiePolicy;
