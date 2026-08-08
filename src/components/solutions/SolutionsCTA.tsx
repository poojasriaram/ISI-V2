import { useState } from "react";
import { toast } from "sonner";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Button } from "@/components/ui/button";
import { CTAPanel } from "@/components/school-safety/CTAPanel";
import { useNavigate } from "react-router-dom";

export const SolutionsCTA = () => {
    const { trackFormSubmission } = useAnalytics();
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: '',
        companyType: '',
        email: '',
        phone: '',
        message: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        trackFormSubmission('ContactForm', {
            ...form,
            source: 'Solutions Page Landing'
        });
        
        const data = {
            sheetName: "SalesInquiries",
            "Full Name": form.name,
            "Phone Number": form.phone,
            "Work Email": form.email,
            "Company Name": form.companyType,
            "Message": form.message,
            timestamp: new Date().toISOString()
        };

        try {
            const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Consultation Request Received!', {
                    description: 'Our senior security consultant will contact you shortly.'
                });
                const submittedName = form.name;
                setForm({ name: '', companyType: '', email: '', phone: '', message: '' });
                navigate('/integratedservices/thank-you', { state: { name: submittedName } });
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            toast.error("Submission Failed", {
                description: "There was an error submitting your request. Please try again later.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const ctaData = {
        title: "Ready to Secure Your Operations?",
        subtitle: "Schedule a personalized consultation with our industry experts to design a security architecture tailored to your precise needs.",
        points: [
            "Comprehensive Risk Assessment",
            "Tailored Technology Integration",
            "Rapid Response Protocols",
            "Continuous 24/7 Monitoring"
        ],
        buttonText: "Request Private Demo"
    };

    return (
        <section id="consultation" className="py-20 bg-primary px-4 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <CTAPanel
                        title={ctaData.title}
                        subtitle={ctaData.subtitle}
                        points={ctaData.points}
                        buttonText={ctaData.buttonText}
                    />

                    <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                                    <input 
                                        required
                                        className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Ex: John Doe"
                                        value={form.name}
                                        onChange={(e) => setForm({...form, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Industry / Sector</label>
                                    <select 
                                        required
                                        className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        value={form.companyType}
                                        onChange={(e) => setForm({...form, companyType: e.target.value})}
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="Enterprise">Corporate / Enterprise</option>
                                        <option value="Industrial">Industrial & Manufacturing</option>
                                        <option value="Logistics">Logistics & Supply Chain</option>
                                        <option value="Education">Education</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                                    <input 
                                        type="email"
                                        required
                                        className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="admin@company.com"
                                        value={form.email}
                                        onChange={(e) => setForm({...form, email: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Phone Number</label>
                                    <input 
                                        required
                                        className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="+91 XXXX XXX XXX"
                                        value={form.phone}
                                        onChange={(e) => setForm({...form, phone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Additional Requirements</label>
                                <textarea 
                                    className="w-full h-32 p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your specific security challenges..."
                                    value={form.message}
                                    onChange={(e) => setForm({...form, message: e.target.value})}
                                />
                            </div>

                            <Button type="submit" disabled={submitting} className="w-full h-16 text-lg rounded-xl mt-6 shadow-xl shadow-primary/20 bg-background text-primary hover:bg-background/90 hover:text-primary transition-colors">
                                {submitting ? "Processing..." : "Discuss Your Security Needs"}
                            </Button>
                            <p className="text-[10px] text-center text-primary-foreground/70 mt-4 font-bold tracking-widest uppercase">
                                End-to-end encryption active • DPDP compliant
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
