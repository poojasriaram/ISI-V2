import { Layout } from "@/components/Layout";
import { FileText, Shield, AlertTriangle, Scale, Globe, Lock, Server } from "lucide-react";

const TermsOfService = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">
                        {/* Introduction */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <p className="text-muted-foreground">
                                    These Terms of Service ("Terms") govern access to and use of <a href="https://www.isisecurity.in/" className="text-primary hover:underline">https://www.isisecurity.in/</a>.
                                </p>
                            </div>
                        </div>

                        {/* Acceptance of Terms */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                                <p className="text-muted-foreground">
                                    By accessing or using this Website, you agree to be bound by these Terms and all applicable Indian laws.
                                </p>
                            </div>
                        </div>

                        {/* Website Usage */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <AlertTriangle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Website Usage</h2>
                                <p className="text-muted-foreground mb-4">You agree not to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Use the Website for unlawful purposes</li>
                                    <li>Attempt unauthorized access to systems</li>
                                    <li>Introduce malicious code or harmful content</li>
                                </ul>
                            </div>
                        </div>

                        {/* Services Disclaimer */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Services Disclaimer</h2>
                                <p className="text-muted-foreground">
                                    Information provided on the Website is for general informational purposes only and does not constitute a binding offer unless expressly stated.
                                </p>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property</h2>
                                <p className="text-muted-foreground">
                                    All Website content is owned by ISIS Security and protected under Indian intellectual property laws.
                                </p>
                            </div>
                        </div>

                        {/* Data Collection */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Server className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Collection & IP Logging</h2>
                                <p className="text-muted-foreground mb-4">
                                    We collect technical data including IP addresses, browser data, and access logs.
                                </p>
                                <p className="text-muted-foreground">
                                    IP addresses are retained securely for three (3) years for security, analytics, and legal compliance.
                                </p>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Scale className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
                                <p className="text-muted-foreground">
                                    To the maximum extent permitted by Indian law, ISIS Security shall not be liable for indirect, incidental, or consequential damages arising from Website use.
                                </p>
                            </div>
                        </div>

                        {/* Termination */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <AlertTriangle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Termination of Access</h2>
                                <p className="text-muted-foreground">
                                    We may suspend or terminate access to the Website without notice for violations of these Terms.
                                </p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Governing Law & Jurisdiction</h2>
                                <p className="text-muted-foreground">
                                    These Terms are governed by Indian law. All disputes shall be subject to the exclusive jurisdiction of Madurai District courts.
                                </p>
                            </div>
                        </div>

                        {/* Amendments */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Amendments</h2>
                                <p className="text-muted-foreground">
                                    We may revise these Terms at any time. Continued use of the Website constitutes acceptance of the revised Terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfService;
