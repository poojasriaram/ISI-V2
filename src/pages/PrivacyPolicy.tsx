import { Layout } from "@/components/Layout";
import { Shield, Lock, FileText, Eye, Database, Server, Users, Globe, AlertCircle, Mail } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Last Updated: December 30, 2025
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">
                        {/* Introduction */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Introduction</h2>
                                <p className="text-muted-foreground">
                                    Welcome to ISI (the "Company," "we," "us," or "our"). We operate the website located at <a href="https://isi-demo.vercel.app/" className="text-primary hover:underline">https://isi-demo.vercel.app/</a> (the "Website").
                                </p>
                                <p className="text-muted-foreground mt-2">
                                    This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our Website, submit enquiries, register as a partner, or otherwise interact with our services. We are committed to protecting your privacy and handling your personal information responsibly.
                                </p>
                                <p className="text-muted-foreground mt-2">
                                    By using the Website, you agree to the collection and use of information in accordance with this Policy.
                                </p>
                            </div>
                        </div>

                        {/* Information We Collect */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Database className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Information We Collect</h2>
                                <p className="text-muted-foreground mb-4">
                                    We collect the following types of information:
                                </p>

                                <h3 className="text-xl font-semibold mb-2 text-foreground">1. Information You Provide Directly</h3>
                                <p className="text-muted-foreground mb-2">
                                    When you submit a customer enquiry form, partner registration form, or contact us:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>Full name</li>
                                    <li>Company name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Website URL</li>
                                    <li>Company details (e.g., industry, size, location)</li>
                                    <li>Partnership interest or message describing your enquiry</li>
                                    <li>Any files or documents you upload (e.g., brochures or logos)</li>
                                    <li>Other information you voluntarily provide through communications</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">2. Automatically Collected Information</h3>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li><strong>Usage Data:</strong> Information about how you access and use the Website, including IP address, browser type, browser version, pages visited, time and date of visit, time spent on pages, and diagnostic data.</li>
                                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity on the Website and improve user experience. Cookies may include session cookies (deleted when you close your browser) and persistent cookies.</li>
                                </ul>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">How We Use Your Information</h2>
                                <p className="text-muted-foreground mb-2">
                                    We use the collected information for the following purposes:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>To respond to your enquiries, process partner registrations, and provide customer support.</li>
                                    <li>To manage and improve our partner ecosystem and business relationships.</li>
                                    <li>To operate, maintain, and improve the Website and our services.</li>
                                    <li>To analyze Website usage and optimize user experience.</li>
                                    <li>To detect, prevent, and address technical issues or security concerns.</li>
                                    <li>To comply with legal obligations.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sharing of Information */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Sharing of Information</h2>
                                <p className="text-muted-foreground mb-2">
                                    We may share your information with:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li><strong>Service Providers:</strong> Third-party vendors who assist us with hosting (e.g., Vercel), analytics, email services, or form processing. These providers are contractually obligated to protect your data.</li>
                                    <li><strong>Partners:</strong> If you register as a partner or submit related information, we may share relevant details internally or with existing partners for collaboration purposes (only as necessary).</li>
                                    <li><strong>Legal Requirements:</strong> When required by law, such as to comply with a subpoena or similar legal process, or to protect our rights, safety, or property.</li>
                                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred.</li>
                                </ul>
                                <p className="text-muted-foreground mt-2 font-semibold">
                                    We do not sell your personal information to third parties.
                                </p>
                            </div>
                        </div>

                        {/* Cookies */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Cookies</h2>
                                <p className="text-muted-foreground">
                                    You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. If you disable cookies, some parts of the Website may not function properly.
                                </p>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Data Security</h2>
                                <p className="text-muted-foreground">
                                    We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
                                </p>
                            </div>
                        </div>

                        {/* Data Retention */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Server className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Data Retention</h2>
                                <p className="text-muted-foreground">
                                    We retain personal information only as long as necessary for the purposes outlined in this Policy or as required by law. Enquiry and registration data is retained for business relationship management and follow-up.
                                </p>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <AlertCircle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Your Rights</h2>
                                <p className="text-muted-foreground mb-2">
                                    Depending on your location, you may have rights regarding your personal information, such as:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>Access, correction, or deletion of your data.</li>
                                    <li>Objection to or restriction of processing.</li>
                                    <li>Data portability.</li>
                                </ul>
                                <p className="text-muted-foreground mt-2">
                                    To exercise these rights, contact us at the details below. We will respond within a reasonable timeframe.
                                </p>
                            </div>
                        </div>

                        {/* International Data Transfers */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">International Data Transfers</h2>
                                <p className="text-muted-foreground">
                                    The Website is hosted on Vercel (United States). If you access the Website from outside the US, your information may be transferred to and processed in the US or other countries.
                                </p>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Children's Privacy</h2>
                                <p className="text-muted-foreground">
                                    Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                                </p>
                            </div>
                        </div>

                        {/* Changes to This Privacy Policy */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">Changes to This Privacy Policy</h2>
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review it periodically.
                                </p>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="bg-muted/30 p-6 rounded-xl border border-border mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary" />
                                Contact Us
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="text-sm space-y-1">
                                <p><strong>Email:</strong> info@isi-india.com</p>
                                <p><strong>Phone:</strong> +91 77088 86868</p>
                                <p><strong>Address:</strong> No. 9, First Floor, Kamarajar Salai, Ashok Nagar, Chennai – 600 083</p>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-8 text-center italic">
                            Last updated: December 30, 2025
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
