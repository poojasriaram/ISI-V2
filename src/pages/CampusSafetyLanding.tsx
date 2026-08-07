import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback, useRef } from "react";
import { toast } from "sonner";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EbookFormData, ConsultationFormData } from "@/types/schoolSafety";
import {
    Shield,
    Lock,
    Users,
    Zap,
    Wifi,
    Server,
    Monitor,
    Globe,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    HandHeart,
    Eye,
    Bot,
    Smartphone,
    Network,
    Cpu,
    Clock,
    Truck,
    Stethoscope,
    FileText,
    Target,
    HeartPulse,
    Home,
    Award,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { CampusSafetyHero } from "@/components/CampusSafetyHero";
import { SectionPanel } from "@/components/school-safety/SectionPanel";
import { CTAPanel } from "@/components/school-safety/CTAPanel";
import { schoolSafetyV2Data } from "@/data/school-safety-v2-data";
import { Pillars } from "@/components/school-safety/Pillars";
import { Roadmap } from "@/components/school-safety/Roadmap";
import { ExecutiveSummary } from "@/components/school-safety/ExecutiveSummary";
import { ProvenDifference } from "@/components/school-safety/ProvenDifference";
import { StandardsAlignment } from "@/components/school-safety/StandardsAlignment";


import schoolSafety1 from "../assets/school_safety_1.jpg";
import schoolSafety2 from "../assets/school_safety_2.jpg";
import schoolSafety3 from "../assets/school_safety_3.jpg";


export default function CampusSafetyLanding() {
    const { trackFormSubmission } = useAnalytics();
    // E-Book form state
    const [ebookForm, setEbookForm] = useState<EbookFormData>({
        schoolName: '',
        role: '',
        email: '',
        phone: '',
    });
    const [ebookSubmitting, setEbookSubmitting] = useState(false);

    // Consultation form state
    const [consultationForm, setConsultationForm] = useState<ConsultationFormData>({
        name: '',
        schoolName: '',
        board: '',
        numberOfStudents: '',
        primaryConcern: '',
        email: '',
        phone: '',
        city: '',
    });
    const [consultationSubmitting, setConsultationSubmitting] = useState(false);

    // Floating E-Book widget state
    const [isEbookWidgetOpen, setIsEbookWidgetOpen] = useState(false);


    const handleEbookSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEbookSubmitting(true);
        // Track submission to Google Sheets
        trackFormSubmission('EbookDownloads', {
            ...ebookForm,
            followUpStatus: 'New',
            source: 'Campus Safety Landing'
        });
        setTimeout(() => {
            toast.success('Campus Safety Blueprint request submitted!', {
                description: 'Check your email for the implementation guide.',
            });
            setIsEbookWidgetOpen(false);
            setEbookForm({ schoolName: '', role: '', email: '', phone: '' });
            setEbookSubmitting(false);
        }, 1000);
    };

    const handleConsultationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setConsultationSubmitting(true);
        // Track submission to Google Sheets
        trackFormSubmission('ConsultationReqs', {
            ...consultationForm,
            status: 'New'
        });
        setTimeout(() => {
            toast.success('Consultation Request Received!', { description: 'Our security team will contact you within 24 hours.' });
            setConsultationForm({
                name: '',
                schoolName: '',
                board: '',
                numberOfStudents: '',
                primaryConcern: '',
                email: '',
                phone: '',
                city: '',
            });
            setConsultationSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden selection:bg-primary/20">
            <Header />
            <main className="flex-grow">
                <CampusSafetyHero onOpenEbook={() => setIsEbookWidgetOpen(true)} />

                {/* ================= EXECUTIVE SUMMARY ================= */}
                <ExecutiveSummary />

                {/* ================= PHILOSOPHY PILLARS ================= */}
                <Pillars />

                {/* ================= PROVEN DIFFERENCE ================= */}
                <ProvenDifference />

                {/* ================= MODULAR SECTIONS (PANELS 1-4) ================= */}
                {schoolSafetyV2Data.sections.map((section, index) => (
                    <SectionPanel key={section.id} section={section} index={index} />
                ))}

                {/* ================= IMPLEMENTATION ROADMAP ================= */}
                <Roadmap steps={schoolSafetyV2Data.roadmap} />

                {/* ================= STANDARDS ALIGNMENT ================= */}
                <StandardsAlignment />

                {/* ================= PANEL 5: FINAL CTA & CONSULTATION ================= */}
                <section id="consultation" className="py-12 bg-primary px-4 md:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px]" />

                    <div className="container mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <CTAPanel
                                title={schoolSafetyV2Data.cta.title}
                                subtitle={schoolSafetyV2Data.cta.subtitle}
                                points={schoolSafetyV2Data.cta.points}
                                buttonText={schoolSafetyV2Data.cta.buttonText}
                            />

                            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                                <form onSubmit={handleConsultationSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormInput label="Full Name" placeholder="Ex: Rahul Sharma" value={consultationForm.name} onChange={(v) => setConsultationForm(p => ({ ...p, name: v }))} />
                                        <FormInput label="Institution Name" placeholder="School/College Name" value={consultationForm.schoolName} onChange={(v) => setConsultationForm(p => ({ ...p, schoolName: v }))} />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">{"Affiliation Board"}</label>
                                            <select
                                                className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                value={consultationForm.board}
                                                onChange={(e) => setConsultationForm(p => ({ ...p, board: e.target.value }))}
                                                required
                                            >
                                                <option value="">Select Board</option>
                                                <option value="CBSE">CBSE</option>
                                                <option value="ICSE">ICSE</option>
                                                <option value="IB">IB</option>
                                                <option value="Cambridge">Cambridge</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <FormInput label="Primary Goal" placeholder="Ex: ICT, Security, Medical" value={consultationForm.primaryConcern} onChange={(v) => setConsultationForm(p => ({ ...p, primaryConcern: v }))} />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormInput label="Email" type="email" placeholder="admin@school.com" value={consultationForm.email} onChange={(v) => setConsultationForm(p => ({ ...p, email: v }))} />
                                        <FormInput label="Phone" placeholder="+91 XXXX XXX XXX" value={consultationForm.phone} onChange={(v) => setConsultationForm(p => ({ ...p, phone: v }))} />
                                    </div>
                                    <Button type="submit" disabled={consultationSubmitting} className="w-full h-16 text-lg rounded-xl mt-6 shadow-xl shadow-primary/20">
                                        {consultationSubmitting ? "Initiating protocol..." : "Request Tactical Consultation"}
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground mt-4 font-bold tracking-widest uppercase">
                                        End-to-end encryption active • DPDP compliant
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

            {/* Floating Trigger */}
            <button
                onClick={() => setIsEbookWidgetOpen(true)}
                className="fixed bottom-6 right-28 z-40 h-16 bg-primary text-primary-foreground px-6 rounded-full shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 font-semibold"
                style={{ display: isEbookWidgetOpen ? 'none' : 'flex' }}
            >
                <FileText className="w-5 h-5" />
                Free Blueprint
            </button>

            {/* E-Book Drawer */}
            <div className={`fixed inset-y-0 right-0 w-full md:w-[500px] bg-background shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out ${isEbookWidgetOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    <div className="p-6 bg-primary text-primary-foreground flex justify-between items-center">
                        <div className="font-bold text-lg">Campus Safety Blueprint</div>
                        <button onClick={() => setIsEbookWidgetOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex-grow overflow-y-auto p-8">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-foreground mb-4">Download the 18-Month Implementation Guide</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                A comprehensive strategic document detailing the transition from reactive to intelligence-led school safety.
                                Includes budget-phased recommendations and compliance checklists.
                            </p>
                            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-4 mb-8">
                                <h4 className="font-bold text-primary">What's Inside:</h4>
                                {[
                                    "15-day risk assessment framework",
                                    "Guarding vs Intelligent Guarding deep-dive",
                                    "Privacy-first AI implementation metrics",
                                    "Cybersecurity maturity roadmap"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <form onSubmit={handleEbookSubmit} className="space-y-4">
                            <FormInput label="Institution Name" placeholder="School Name" value={ebookForm.schoolName} onChange={(v) => setEbookForm(p => ({ ...p, schoolName: v }))} />
                            <FormInput label="Designation" placeholder="e.g. Director, Principal, IT Head" value={ebookForm.role} onChange={(v) => setEbookForm(p => ({ ...p, role: v }))} />
                            <FormInput label="Official Email" type="email" placeholder="name@school.com" value={ebookForm.email} onChange={(v) => setEbookForm(p => ({ ...p, email: v }))} />
                            <FormInput label="Contact Number" placeholder="+91 ..." value={ebookForm.phone} onChange={(v) => setEbookForm(p => ({ ...p, phone: v }))} />
                            <Button type="submit" className="w-full h-14 text-lg mt-4 shadow-xl shadow-primary/20" disabled={ebookSubmitting}>
                                {ebookSubmitting ? "Processing..." : "Receive Blueprint via Email"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            {isEbookWidgetOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsEbookWidgetOpen(false)} />}
        </div>
    );
}

// Helper Components
function FormInput({ label, type = 'text', placeholder, value, onChange }: { label: string, type?: string, placeholder: string, value: string, onChange: (v: string) => void }) {
    return (
        <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">{label}</label>
            <input
                type={type}
                className="w-full h-14 px-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    );
}
