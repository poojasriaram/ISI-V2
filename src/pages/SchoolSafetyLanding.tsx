import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { EbookFormData, ConsultationFormData } from "@/types/schoolSafety";
import { submitEbookDownload, submitConsultationRequest } from "@/services/airtable";
import { useContentProtection } from "@/hooks/useContentProtection";

export default function SchoolSafetyLanding() {
    // Enable content protection
    useContentProtection();
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

    // E-Book form handler
    const handleEbookSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEbookSubmitting(true);
        try {
            await submitEbookDownload(ebookForm);
            toast.success('E-Book request submitted!', {
                description: 'Check your email for the School Safety Blueprint e-book.',
                duration: 5000,
            });
            setEbookForm({ schoolName: '', role: '', email: '', phone: '' });
        } catch (error) {
            console.error('E-Book form error:', error);
            toast.error('Failed to submit request', {
                description: error instanceof Error ? error.message : 'Please try again later.',
                duration: 7000,
            });
        } finally {
            setEbookSubmitting(false);
        }
    };

    // Consultation form handler
    const handleConsultationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setConsultationSubmitting(true);
        try {
            await submitConsultationRequest(consultationForm);
            toast.success('Consultation request submitted!', {
                description: 'Our school safety team will contact you within 24 hours.',
                duration: 5000,
            });
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
        } catch (error) {
            console.error('Consultation form error:', error);
            toast.error('Failed to submit request', {
                description: error instanceof Error ? error.message : 'Please try again later.',
                duration: 7000,
            });
        } finally {
            setConsultationSubmitting(false);
        }
    };

    // Override header to be static on this page only
    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.remove('fixed');
            header.classList.add('static');
            // Force white background and shadow for visibility
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1)';
        }

        return () => {
            // Cleanup: restore fixed positioning when leaving the page
            const header = document.querySelector('header');
            if (header) {
                header.classList.remove('static');
                header.classList.add('fixed');
                // Remove inline styles
                header.style.backgroundColor = '';
                header.style.boxShadow = '';
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden">
                <div className="font-sans text-gray-900 bg-gray-50">

                    {/* ================= HERO SECTION ================= */}
                    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-500 text-white pt-28">
                        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                            <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                                India's Most Trusted School Safety Ecosystem
                            </span>

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                                Designing Schools Where <br className="hidden md:block" />
                                Safety, Dignity & Trust Co-Exist
                            </h1>

                            <p className="max-w-3xl mx-auto text-lg text-indigo-100 mb-10">
                                ISI India delivers an intelligence-led, privacy-first School Safety
                                Ecosystem integrating certified guarding, ethical AI, and 24/7
                                command intelligence — trusted by 500+ schools across India.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow hover:scale-105 transition">
                                    Get Free 15-Day Risk Assessment
                                </button>
                                <button className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
                                    Download Safety Blueprint
                                </button>
                            </div>

                            <div className="mt-10 text-sm text-indigo-200">
                                500+ Schools Secured • Zero Major Incidents • 100% Compliance
                            </div>
                        </div>
                    </section>

                    {/* ================= TRUST METRICS ================= */}
                    <section className="bg-white">
                        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                ["500+", "Schools Secured"],
                                ["0", "Major Incidents"],
                                ["94%", "Parent Trust Score"],
                                ["100%", "Compliance Alignment"],
                            ].map(([value, label]) => (
                                <div key={label} className="p-6 rounded-xl bg-gray-50 shadow-sm">
                                    <div className="text-3xl font-extrabold text-indigo-600">{value}</div>
                                    <div className="mt-2 text-sm text-gray-600">{label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= CHALLENGES ================= */}
                    <section className="max-w-7xl mx-auto px-6 py-20">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            The Safety Challenges Schools Face Today
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "Reactive security & untrained guards",
                                "CCTV without real-time response",
                                "Privacy concerns from parents",
                                "Uncoordinated emergency drills",
                                "Compliance gaps & audit risks",
                                "Leadership stress & liability exposure",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                                >
                                    <p className="font-semibold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= SOLUTION OVERVIEW ================= */}
                    <section className="bg-indigo-50">
                        <div className="max-w-7xl mx-auto px-6 py-20">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                The ISI India Safety Ecosystem
                            </h2>

                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div className="space-y-4">
                                    <p>
                                        Traditional security relies on isolated measures — guards,
                                        cameras, registers, drills.
                                    </p>
                                    <p className="font-semibold text-indigo-700">
                                        ISI India replaces fragmentation with a single accountable,
                                        intelligent safety architecture.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Risk Intelligence & Safety Blueprinting</li>
                                        <li>Certified, child-safe guarding</li>
                                        <li>Privacy-first AI video intelligence</li>
                                        <li>24/7 Remote Command Center</li>
                                        <li>Authority-integrated emergency response</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow">
                                    <h3 className="font-bold text-lg mb-4">Outcome</h3>
                                    <p>
                                        Predictable prevention, rapid response, full compliance, and
                                        visible trust — without compromising child dignity or privacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= PHILOSOPHY: 4 PILLARS ================= */}
                    <section className="max-w-7xl mx-auto px-6 py-20">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            The 4 Pillars of Ethical School Safety
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Child-First Design",
                                    description: "All safety decisions follow the Best Interest of the Child principle (UN CRC Article 3)."
                                },
                                {
                                    title: "Human + AI Synergy",
                                    description: "AI detects risk. Humans apply empathy, judgment, and care."
                                },
                                {
                                    title: "Privacy by Default",
                                    description: "No private-zone surveillance. No raw data offsite. Consent-led intelligence."
                                },
                                {
                                    title: "Continuous Improvement",
                                    description: "Safety performance is measured, audited, and refined every quarter."
                                }
                            ].map((pillar) => (
                                <div
                                    key={pillar.title}
                                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                                >
                                    <h3 className="font-bold text-lg mb-3 text-indigo-700">{pillar.title}</h3>
                                    <p className="text-sm text-gray-600">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= COMPREHENSIVE OFFERINGS ================= */}
                    <section className="bg-gradient-to-br from-gray-50 to-indigo-50">
                        <div className="max-w-7xl mx-auto px-6 py-20">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Comprehensive Offerings Suite
                            </h2>

                            <div className="space-y-8">
                                {[
                                    {
                                        number: "1",
                                        title: "Risk Intelligence & Strategic Safety Blueprinting",
                                        subtitle: "The foundation of every successful deployment",
                                        items: [
                                            "15-Day Campus Risk Intelligence Assessment",
                                            "Drone mapping & thermal blind-spot analysis",
                                            "Access control & visitor flow audits",
                                            "CBSE, ICSE, NCERT, Fire, RPWD & DPDP compliance gap analysis",
                                            "Stakeholder co-creation workshops"
                                        ],
                                        outcome: "A custom Risk Intelligence Report with color-coded risk zones, phased roadmap, and budget-aligned recommendations."
                                    },
                                    {
                                        number: "2",
                                        title: "Certified, Child-Safe Physical Guarding",
                                        items: [
                                            "100% police-verified, psychologically screened guards",
                                            "Minimum 40% women guards in student-facing roles",
                                            "Training in child safety, trauma-informed response, CPR & POSH",
                                            "AI-informed dynamic patrols"
                                        ],
                                        outcome: "Consistent, trusted human presence with an average tenure of 24+ months."
                                    },
                                    {
                                        number: "3",
                                        title: "Privacy-First AI Video Intelligence",
                                        items: [
                                            "Edge-based AI (on-premise, no cloud)",
                                            "Aggression, intrusion, fall & crowd detection",
                                            "Zero cameras in classrooms, restrooms, dorms",
                                            "90-day auto-deletion of non-incident footage"
                                        ],
                                        outcome: "Faster response, 78% fewer false alerts, full privacy compliance."
                                    },
                                    {
                                        number: "4",
                                        title: "24/7 Remote Command Center (RCC)",
                                        items: [
                                            "Live monitoring by trained safety analysts",
                                            "Unified dashboard for AI, guards, panic alerts",
                                            "Automated multi-stage emergency response",
                                            "Optional parent notifications"
                                        ],
                                        outcome: "<60-second verified response to critical incidents."
                                    },
                                    {
                                        number: "5",
                                        title: "Emergency Preparedness & Authority Integration",
                                        items: [
                                            "Panic buttons & wearable pendants",
                                            "Quarterly joint drills",
                                            "Pre-linked police, fire & medical responders"
                                        ],
                                        outcome: "Predictable, rehearsed, authority-aligned crisis management."
                                    },
                                    {
                                        number: "6",
                                        title: "Compliance, Transparency & Community Trust",
                                        items: [
                                            "DPDP-compliant data governance",
                                            "Parent transparency portal (opt-in)",
                                            "Annual safety impact & compliance reports"
                                        ],
                                        outcome: "Audit-ready schools and confident parent communities."
                                    }
                                ].map((offering) => (
                                    <div
                                        key={offering.number}
                                        className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-600"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                                {offering.number}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                                                {offering.subtitle && (
                                                    <p className="text-sm text-indigo-600 font-semibold mb-4">{offering.subtitle}</p>
                                                )}
                                                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                                    {offering.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                                <div className="bg-indigo-50 p-4 rounded-lg">
                                                    <p className="text-sm font-semibold text-indigo-900">
                                                        <span className="text-indigo-600">Outcome:</span> {offering.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= BENEFITS ================= */}
                    <section className="max-w-7xl mx-auto px-6 py-20">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Tangible Benefits for Schools
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                "Zero major incidents post-deployment",
                                "Faster emergency response",
                                "Audit-ready compliance",
                                "Higher parent confidence & enrolment trust",
                            ].map((benefit) => (
                                <div
                                    key={benefit}
                                    className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
                                >
                                    <p className="font-semibold">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= MEASURABLE OUTCOMES ================= */}
                    <section className="bg-indigo-50">
                        <div className="max-w-7xl mx-auto px-6 py-14">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Measurable Outcomes
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                {[
                                    ["<60 sec", "Average aggression response"],
                                    ["<90 sec", "Panic alert resolution"],
                                    ["94%", "Parent satisfaction score"],
                                    ["100%", "Regulatory compliance"],
                                ].map(([value, label]) => (
                                    <div key={label} className="p-6 rounded-xl bg-white shadow-sm">
                                        <div className="text-3xl font-extrabold text-indigo-600">{value}</div>
                                        <div className="mt-2 text-sm text-gray-600">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= IMPLEMENTATION ROADMAP ================= */}
                    <section className="max-w-7xl mx-auto px-6 py-20">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Implementation Roadmap
                        </h2>
                        <p className="text-center text-gray-600 mb-12">An 18-Month Transformation Journey</p>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 hidden md:block"></div>

                            <div className="space-y-8">
                                {[
                                    { phase: "Phase 0", title: "Risk Intelligence Sprint", duration: "2–3 weeks" },
                                    { phase: "Phase 1", title: "Certified Guarding + Essential Tech", duration: "" },
                                    { phase: "Phase 2", title: "AI Intelligence Pilot", duration: "" },
                                    { phase: "Phase 3", title: "24/7 RCC Launch", duration: "" },
                                    { phase: "Phase 4", title: "Full Intelligent Guarding", duration: "" },
                                    { phase: "Phase 5", title: "Authority Integration", duration: "" },
                                    { phase: "Phase 6", title: "Optimization & Trust Building", duration: "" },
                                ].map((item, index) => (
                                    <div key={item.phase} className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                                            {index}
                                        </div>
                                        <div className="flex-1 bg-white p-6 rounded-xl shadow">
                                            <h3 className="font-bold text-lg text-indigo-700">{item.phase}</h3>
                                            <p className="text-gray-900 font-semibold">{item.title}</p>
                                            {item.duration && (
                                                <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= LEAD MAGNET ================= */}
                    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">
                                    Free E-Book: The Blueprint for School Safety in India
                                </h2>
                                <p className="text-gray-300 mb-6">What You'll Learn:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>✔ 15-day campus risk assessment framework</li>
                                    <li>✔ Guarding vs Intelligent Guarding explained</li>
                                    <li>✔ Privacy-first AI & DPDP compliance</li>
                                    <li>✔ 18-month implementation roadmap</li>
                                </ul>
                            </div>

                            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow">
                                <h3 className="font-bold mb-4">Download the Free Blueprint</h3>
                                <form onSubmit={handleEbookSubmit} className="space-y-4">
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="School Name"
                                        value={ebookForm.schoolName}
                                        onChange={(e) => setEbookForm(prev => ({ ...prev, schoolName: e.target.value }))}
                                        required
                                        disabled={ebookSubmitting}
                                    />
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="Your Role"
                                        value={ebookForm.role}
                                        onChange={(e) => setEbookForm(prev => ({ ...prev, role: e.target.value }))}
                                        required
                                        disabled={ebookSubmitting}
                                    />
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="Email Address"
                                        type="email"
                                        value={ebookForm.email}
                                        onChange={(e) => setEbookForm(prev => ({ ...prev, email: e.target.value }))}
                                        required
                                        disabled={ebookSubmitting}
                                    />
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="Phone Number"
                                        type="tel"
                                        value={ebookForm.phone}
                                        onChange={(e) => setEbookForm(prev => ({ ...prev, phone: e.target.value }))}
                                        required
                                        disabled={ebookSubmitting}
                                    />
                                    <button
                                        type="submit"
                                        disabled={ebookSubmitting}
                                        className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                                    >
                                        {ebookSubmitting ? 'Sending...' : 'Get the E-Book'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* ================= CUSTOMER REGISTRATION ================= */}
                    <section className="bg-white">
                        <div className="max-w-4xl mx-auto px-6 py-20">
                            <h2 className="text-3xl font-bold text-center mb-6">
                                Request a Personalized Safety Consultation
                            </h2>
                            <p className="text-center text-gray-600 mb-10">
                                Get expert guidance tailored to your school's unique needs
                            </p>

                            <div className="bg-gray-50 p-8 rounded-2xl shadow">
                                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            className="w-full border p-3 rounded"
                                            placeholder="Name"
                                            value={consultationForm.name}
                                            onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                                            required
                                            disabled={consultationSubmitting}
                                        />
                                        <input
                                            className="w-full border p-3 rounded"
                                            placeholder="School Name"
                                            value={consultationForm.schoolName}
                                            onChange={(e) => setConsultationForm(prev => ({ ...prev, schoolName: e.target.value }))}
                                            required
                                            disabled={consultationSubmitting}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <select
                                            className="w-full border p-3 rounded text-gray-600"
                                            value={consultationForm.board}
                                            onChange={(e) => setConsultationForm(prev => ({ ...prev, board: e.target.value }))}
                                            required
                                            disabled={consultationSubmitting}
                                        >
                                            <option value="">Board (CBSE / ICSE / IB / Other)</option>
                                            <option value="CBSE">CBSE</option>
                                            <option value="ICSE">ICSE</option>
                                            <option value="IB">IB</option>
                                            <option value="Cambridge">Cambridge</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <input
                                            className="w-full border p-3 rounded"
                                            placeholder="Number of Students"
                                            type="number"
                                            value={consultationForm.numberOfStudents}
                                            onChange={(e) => setConsultationForm(prev => ({ ...prev, numberOfStudents: e.target.value }))}
                                            required
                                            disabled={consultationSubmitting}
                                        />
                                    </div>
                                    <select
                                        className="w-full border p-3 rounded text-gray-600"
                                        value={consultationForm.primaryConcern}
                                        onChange={(e) => setConsultationForm(prev => ({ ...prev, primaryConcern: e.target.value }))}
                                        required
                                        disabled={consultationSubmitting}
                                    >
                                        <option value="">Primary Concern</option>
                                        <option value="Physical Security">Physical Security</option>
                                        <option value="Compliance & Audit">Compliance & Audit</option>
                                        <option value="Emergency Preparedness">Emergency Preparedness</option>
                                        <option value="Technology Integration">Technology Integration</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="Email Address"
                                        type="email"
                                        value={consultationForm.email}
                                        onChange={(e) => setConsultationForm(prev => ({ ...prev, email: e.target.value }))}
                                        required
                                        disabled={consultationSubmitting}
                                    />
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="Phone Number"
                                        type="tel"
                                        value={consultationForm.phone}
                                        onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                                        required
                                        disabled={consultationSubmitting}
                                    />
                                    <input
                                        className="w-full border p-3 rounded"
                                        placeholder="City"
                                        value={consultationForm.city}
                                        onChange={(e) => setConsultationForm(prev => ({ ...prev, city: e.target.value }))}
                                        required
                                        disabled={consultationSubmitting}
                                    />
                                    <button
                                        type="submit"
                                        disabled={consultationSubmitting}
                                        className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                                    >
                                        {consultationSubmitting ? 'Submitting...' : 'Request Consultation'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* ================= FINAL CTA ================= */}
                    <section className="bg-gradient-to-br from-indigo-700 to-blue-500 text-white">
                        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                            <h2 className="text-3xl font-bold mb-6">
                                Start Your School Safety Transformation Today
                            </h2>
                            <p className="text-indigo-100 mb-8">
                                Join 500+ schools that chose proactive, ethical, intelligence-led
                                safety.
                            </p>
                            <button className="bg-white text-indigo-700 px-10 py-4 rounded-xl font-semibold shadow hover:scale-105 transition">
                                Schedule Free 15-Day Risk Assessment
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
