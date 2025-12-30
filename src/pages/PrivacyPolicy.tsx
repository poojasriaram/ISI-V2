import { Layout } from "@/components/Layout";
import { Shield, Lock, FileText, Eye, Database, Server } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            We are committed to protecting your personal information and your right to privacy.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">1. Commitment to Privacy</h2>
                                <p className="text-muted-foreground">
                                    At ISI India, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information in connection with our website, security services, and operations. By accessing our services, you consent to the data practices described in this statement.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Database className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">2. Information We Collect</h2>
                                <p className="text-muted-foreground mb-4">
                                    We collect information to provide better services to all our users. This includes:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you contact us or request a quote.</li>
                                    <li><strong>Operational Data:</strong> Data related to security incidents, visitor logs, and access control records processed on behalf of our clients.</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, and usage data when you visit our website.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">3. How We Use Your Information</h2>
                                <p className="text-muted-foreground">
                                    We use the information we collect for various purposes, including:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                                    <li>To provide, maintain, and improve our security services.</li>
                                    <li>To process transactions and send related information.</li>
                                    <li>To respond to your comments, questions, and requests.</li>
                                    <li>To monitor and analyze trends, usage, and activities.</li>
                                    <li>To comply with legal obligations and regulatory requirements.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">4. Data Security</h2>
                                <p className="text-muted-foreground">
                                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized processing, accidental loss, disclosure, or destruction. We use industry-standard encryption, firewalls, and secure access controls to safeguard your information.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Server className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">5. Data Sharing & Third Parties</h2>
                                <p className="text-muted-foreground">
                                    We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential. We may also release information when we believe release is appropriate to comply with the law.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-6 rounded-xl border border-border mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Contact Us
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="text-sm">
                                <p><strong>Email:</strong> info@isi-india.com</p>
                                <p><strong>Phone:</strong> +91 77088 86868</p>
                                <p><strong>Address:</strong> No. 9, First Floor, Kamarajar Salai, Ashok Nagar, Chennai – 600 083</p>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-8 text-center italic">
                            Last updated: December 2024
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
