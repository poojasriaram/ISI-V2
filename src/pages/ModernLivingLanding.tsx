import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CashLogisticsSection } from "@/data/cash-logistics-data";
import { ModernLivingHero } from "@/components/modern-living/ModernLivingHero";
import { WhoWeServe } from "@/components/modern-living/WhoWeServe";
import { WhyISILiving } from "@/components/modern-living/WhyISILiving";
import { HowItWorksLiving } from "@/components/modern-living/HowItWorksLiving";
import { SectionPanel } from "@/components/school-safety/SectionPanel";
import { CTAPanel } from "@/components/school-safety/CTAPanel";
import { modernLivingData } from "@/data/modern-living-data";
import { useContentProtection } from "@/hooks/useContentProtection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function ModernLivingLanding() {
    useContentProtection();
    const { trackFormSubmission } = useAnalytics();
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: '',
        propertyType: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        trackFormSubmission('ContactForm', {
            ...form,
            source: 'Modern Living Landing'
        });
        
        setTimeout(() => {
            toast.success('Consultation Request Received!', {
                description: 'Our senior security consultant will contact you shortly.'
            });
            setForm({ name: '', propertyType: '', email: '', phone: '', message: '' });
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden selection:bg-primary/20">
            <Header />
            <main className="flex-grow">
                <ModernLivingHero />
                
                <div className="bg-background">
                    <WhoWeServe />
                </div>
                
                <div className="bg-gradient-to-b from-primary/5 to-primary/10">
                    <WhyISILiving />
                </div>
                
                {/* specialized Sections with alternating backgrounds */}
                {modernLivingData.sections.map((section, index) => (
                    <SectionPanel 
                        key={section.id} 
                        section={section as unknown as CashLogisticsSection} 
                        index={index + 2} // Offset by 2 because WhoWeServe and WhyISILiving are before
                    />
                ))}
                
                <div className={modernLivingData.sections.length % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-primary/5 to-primary/10"}>
                    <HowItWorksLiving />
                </div>
                
                {/* Final CTA section */}
                <section id="consultation" className="py-20 bg-primary px-4 md:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px]" />

                    <div className="container mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <CTAPanel
                                title={modernLivingData.cta.title}
                                subtitle={modernLivingData.cta.subtitle}
                                points={modernLivingData.cta.points}
                                buttonText={modernLivingData.cta.buttonText}
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
                                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Property/Business Type</label>
                                            <select 
                                                required
                                                className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                value={form.propertyType}
                                                onChange={(e) => setForm({...form, propertyType: e.target.value})}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="SOHO">SOHO / Branch Office</option>
                                                <option value="Residential">HNI Residential</option>
                                                <option value="Elderly">Elderly Care Facility</option>
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
                                                placeholder="admin@property.com"
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
                                            placeholder="Tell us about your specific security needs..."
                                            value={form.message}
                                            onChange={(e) => setForm({...form, message: e.target.value})}
                                        />
                                    </div>

                                    <Button type="submit" disabled={submitting} className="w-full h-16 text-lg rounded-xl mt-6 shadow-xl shadow-primary/20">
                                        {submitting ? "Initiating protocol..." : "Secure Your Space Today"}
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground mt-4 font-bold tracking-widest uppercase">
                                        End-to-end encryption active • DPDP compliant
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
