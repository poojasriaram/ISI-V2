import { Layout } from "@/components/Layout";
import { Cookie, Settings, Info, MousePointerClick, Shield, FileText } from "lucide-react";

const CookiePolicy = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Understanding how we use cookies to improve your experience.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="prose prose-slate max-w-none dark:prose-invert">

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Info className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">1. What Are Cookies</h2>
                                <p className="text-muted-foreground">
                                    Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Cookie className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">2. How We Use Cookies</h2>
                                <p className="text-muted-foreground mb-4">
                                    When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li><strong>Essential Cookies:</strong> To enable certain functions of the Service, such as authentication and preventing fraudulent accounts.</li>
                                    <li><strong>Analytics Cookies:</strong> To track information on how the Service is used so that we can make improvements.</li>
                                    <li><strong>Preferences Cookies:</strong> To store your preferences and various settings.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">3. Third-Party Cookies</h2>
                                <p className="text-muted-foreground">
                                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <MousePointerClick className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-foreground">4. Your Choices Regarding Cookies</h2>
                                <p className="text-muted-foreground">
                                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-6 rounded-xl border border-border mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                More Information
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Hopefully that has clarified things for you. If you are still looking for more information, you can contact us through one of our preferred contact methods.
                            </p>
                            <div className="text-sm">
                                <p><strong>Email:</strong> info@isi-india.com</p>
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

export default CookiePolicy;
