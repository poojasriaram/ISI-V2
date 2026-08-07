import { Layout } from "@/components/Layout";
import { useContentProtection } from "@/hooks/useContentProtection";
import { Copyright, Shield, AlertTriangle, Eye, Server, Globe } from "lucide-react";

const CopyrightPolicy = () => {
    useContentProtection();
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-10 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Copyright Policy</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">
                        {/* Ownership */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Copyright className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Ownership of Content</h2>
                                <p className="text-muted-foreground">
                                    All materials on <a href="https://www.isisecurity.in/" className="text-primary hover:underline">https://www.isisecurity.in/</a> including text, images, graphics, logos, videos, layouts, and software are the exclusive property of ISIS Security, unless otherwise stated.
                                </p>
                            </div>
                        </div>

                        {/* Authorized Use */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Authorized Use</h2>
                                <p className="text-muted-foreground">
                                    Content may be accessed for personal and non-commercial use only.
                                </p>
                            </div>
                        </div>

                        {/* Restrictions */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <AlertTriangle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Restrictions</h2>
                                <p className="text-muted-foreground mb-4">You may not:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Copy or reproduce Website content</li>
                                    <li>Redistribute or commercially exploit content</li>
                                    <li>Use trademarks or logos without permission</li>
                                </ul>
                            </div>
                        </div>

                        {/* Monitoring */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Monitoring & IP Address Logging</h2>
                                <p className="text-muted-foreground mb-4">
                                    To safeguard intellectual property and prevent misuse, Website activity is monitored.
                                </p>
                                <p className="text-muted-foreground">
                                    IP addresses are recorded and retained for three (3) years for security and legal enforcement.
                                </p>
                            </div>
                        </div>

                        {/* Legal Action */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Server className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Legal Action</h2>
                                <p className="text-muted-foreground">
                                    Unauthorized use may result in civil or criminal action under applicable Indian laws.
                                </p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Governing Law & Jurisdiction</h2>
                                <p className="text-muted-foreground">
                                    This Policy is governed by Indian law, with disputes subject to Madurai District courts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CopyrightPolicy;
