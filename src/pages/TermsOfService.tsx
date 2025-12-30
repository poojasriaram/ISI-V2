import { Layout } from "@/components/Layout";
import { Scale, FileText, XCircle, AlertTriangle, Copyright, ShieldCheck } from "lucide-react";

const TermsOfService = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Scale className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">1. Agreement to Terms</h2>
                                <p className="text-muted-foreground">
                                    By accessing our website and using our security services, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not access the service.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">2. Use of Services</h2>
                                <p className="text-muted-foreground mb-4">
                                    Our services are provided for lawful security and monitoring purposes only. You agree not to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>Use the services to violate any applicable national or international law.</li>
                                    <li>Interfere with or disrupt the integrity or performance of our monitoring systems.</li>
                                    <li>Attempt to gain unauthorized access to our related systems or networks.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Copyright className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">3. Intellectual Property</h2>
                                <p className="text-muted-foreground">
                                    The service and its original content, features, and functionality are and will remain the exclusive property of ISI India and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ISI India.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <AlertTriangle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">4. Limitation of Liability</h2>
                                <p className="text-muted-foreground">
                                    In no event shall ISI India, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <XCircle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">5. Termination</h2>
                                <p className="text-muted-foreground">
                                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-6 rounded-xl border border-border mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Contact Us
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="text-sm">
                                <p><strong>Email:</strong> legally@isi-india.com</p>
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

export default TermsOfService;
