import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useRef } from "react";
import { toast } from "sonner";
import { EbookFormData, ConsultationFormData } from "@/types/schoolSafety";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

import schoolSafety1 from "../assets/school_safety_1.jpg";
import schoolSafety2 from "../assets/school_safety_2.jpg";
import schoolSafety3 from "../assets/school_safety_3.jpg";
import schoolSafety4 from "../assets/school_safety_4.jpg";
import schoolSafety5 from "../assets/school_safety_5.jpg";

const heroSlides = [
    {
        image: schoolSafety1,
        title: "Campus Security Operations",
        description: "Advanced monitoring systems ensuring safe and secure educational environments"
    },
    {
        image: schoolSafety2,
        title: "AI-Powered Access Control",
        description: "Modern security infrastructure with intelligent surveillance and access management"
    },
    {
        image: schoolSafety3,
        title: "Emergency Response Systems",
        description: "Rapid alert and response protocols for comprehensive school safety"
    },
    {
        image: schoolSafety4,
        title: "Professional Security Personnel",
        description: "Trained security teams dedicated to protecting students and staff"
    },
    {
        image: schoolSafety5,
        title: "24/7 Monitoring",
        description: "Round-the-clock surveillance and command center operations"
    }
];

export default function SchoolSafetyLanding() {
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

    // Carousel state
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

        const stopAutoPlay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const startAutoPlay = useCallback(() => {
        if (autoplayRef.current) return;
        autoplayRef.current = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 4000);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollPrev();
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollNext();
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollTo(index);
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        startAutoPlay();

        emblaApi.on('pointerDown', stopAutoPlay);
        emblaApi.on('pointerUp', startAutoPlay);

        return () => {
            stopAutoPlay();
            emblaApi.off("select", onSelect);
            emblaApi.off('pointerDown', stopAutoPlay);
            emblaApi.off('pointerUp', startAutoPlay);
        };
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    // Disable body scroll when E-Book widget is open
    useEffect(() => {
        if (isEbookWidgetOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isEbookWidgetOpen]);


    // E-Book form handler
    const handleEbookSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEbookSubmitting(true);
        try {
            // Track submission to Google Sheets
            trackFormSubmission('EbookDownloads', {
                ...ebookForm,
                followUpStatus: 'New',
                source: 'School Safety Landing'
            });

            toast.success('E-Book request submitted!', {
                description: 'Check your email for the School Safety Blueprint e-book.',
                duration: 5000,
            });
            setEbookForm({ schoolName: '', role: '', email: '', phone: '' });
            setIsEbookWidgetOpen(false);
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
            // Track submission to Google Sheets
            trackFormSubmission('ConsultationReqs', {
                ...consultationForm,
                status: 'New'
            });

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

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden">
                <div className="font-sans text-gray-900 bg-gray-50">


                    {/* ================= HERO SECTION WITH CAROUSEL ================= */}
                    <section className="relative min-h-screen overflow-hidden" id="hero">
                        {/* Carousel */}
                        <div
                            ref={emblaRef}
                            className="overflow-hidden h-screen"
                            onMouseEnter={stopAutoPlay}
                            onMouseLeave={startAutoPlay}
                        >
                            <div className="flex h-full">
                                {heroSlides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="flex-[0_0_100%] min-w-0 relative h-full transition-opacity duration-50 ease-out"
                                    >
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out"
                                            style={{
                                                backgroundImage: `url(${slide.image})`,
                                                transform: selectedIndex === index ? 'scale(1.05)' : 'scale(1)'
                                            }}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

                                        {/* Accent Shapes */}
                                        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-start md:items-center pt-48 md:pt-32">
                            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                                <div className="max-w-4xl">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 animate-fade-in">
                                        <span className="text-sm font-medium text-primary">India's Most Trusted School Safety Ecosystem</span>
                                    </div>

                                    {/* Main Heading */}
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
                                        Designing Schools Where <br className="hidden md:block" />
                                        Safety, Dignity & Trust Co-Exist
                                    </h1>

                                    {/* Subheading */}
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in">
                                        Intelligence-led, privacy-first School Safety Ecosystem trusted by 500+ schools across India.

                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                        <Button size="lg" className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20">
                                            Get Free Risk Assessment
                                        </Button>
                                        <Button variant="outline" size="lg" className="gap-2 text-base px-8 py-6 bg-card/60 backdrop-blur-md border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                            Download Blueprint
                                        </Button>
                                    </div>

                                    {/* Trust Indicators */}
                                    <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">500+ Schools Secured</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">Zero Major Incidents</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">100% Compliance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Slide Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`relative h-2 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? "w-10 bg-primary"
                                        : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    {selectedIndex === index && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/50 z-20">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${((selectedIndex + 1) / heroSlides.length) * 100}%` }}
                            />
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
                    <section className="max-w-7xl mx-auto px-6 py-10">
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
                        <div className="max-w-7xl mx-auto px-6 py-10">
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
                    <section className="max-w-7xl mx-auto px-6 py-10">
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
                        <div className="max-w-7xl mx-auto px-6 py-10">
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
                    <section className="max-w-7xl mx-auto px-6 py-10">
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

                    {/* ================= FLOATING E-BOOK WIDGET ================= */}
                    {/* Floating Trigger Button */}
                    <button
                        onClick={() => setIsEbookWidgetOpen(true)}
                        className="fixed bottom-6 right-28 z-40 h-16 bg-gradient-to-br from-indigo-600 to-blue-500 text-white px-6 rounded-full shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 font-semibold"
                        style={{ display: isEbookWidgetOpen ? 'none' : 'flex' }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Free E-Book
                    </button>

                    {/* Floating Widget */}
                    <div
                        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isEbookWidgetOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="h-full overflow-hidden p-8">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsEbookWidgetOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content */}
                            <div className="mt-8">
                                <h2 className="text-3xl font-bold mb-4">
                                    Free E-Book: The Blueprint for School Safety
                                </h2>
                                <p className="text-gray-300 mb-6">What You'll Learn:</p>
                                <ul className="space-y-3 text-gray-300 mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✔</span>
                                        <span>15-day campus risk assessment framework</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✔</span>
                                        <span>Guarding vs Intelligent Guarding explained</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✔</span>
                                        <span>Privacy-first AI & DPDP compliance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✔</span>
                                        <span>18-month implementation roadmap</span>
                                    </li>
                                </ul>

                                <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
                                    <h3 className="font-bold text-xl mb-4">Download the Free Blueprint</h3>
                                    <form onSubmit={handleEbookSubmit} className="space-y-4">
                                        <input
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                            placeholder="School Name"
                                            value={ebookForm.schoolName}
                                            onChange={(e) => setEbookForm(prev => ({ ...prev, schoolName: e.target.value }))}
                                            required
                                            disabled={ebookSubmitting}
                                        />
                                        <input
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                            placeholder="Your Role"
                                            value={ebookForm.role}
                                            onChange={(e) => setEbookForm(prev => ({ ...prev, role: e.target.value }))}
                                            required
                                            disabled={ebookSubmitting}
                                        />
                                        <input
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                            placeholder="Email Address"
                                            type="email"
                                            value={ebookForm.email}
                                            onChange={(e) => setEbookForm(prev => ({ ...prev, email: e.target.value }))}
                                            required
                                            disabled={ebookSubmitting}
                                        />
                                        <input
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
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
                                            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {ebookSubmitting ? 'Sending...' : 'Get the E-Book'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backdrop */}
                    {isEbookWidgetOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                            onClick={() => setIsEbookWidgetOpen(false)}
                        />
                    )}

                    {/* ================= CUSTOMER REGISTRATION ================= */}
                    <section className="bg-white">
                        <div className="max-w-4xl mx-auto px-6 py-10">
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
                        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
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
