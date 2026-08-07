import { Shield, ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import schoolSafety1 from "../assets/school_safety_1.jpg";
import schoolSafety2 from "../assets/school_safety_2.jpg";
import schoolSafety3 from "../assets/school_safety_3.jpg";
import schoolSafety4 from "../assets/school_safety_4.jpg";
import schoolSafety5 from "../assets/school_safety_5.jpg";

const heroSlides = [
    {
        badge: "Institutional Safety",
        title: "School Safety",
        highlight: "Reimagined",
        titleEnd: "for Future",
        description: "Blending child-first psychology with military-grade intelligence to create the world's most secure learning ecosystems.",
        image: schoolSafety1,
        overlay: "from-background via-background/95 to-background/70",
    },
    {
        badge: "24/7 Monitoring",
        title: "Advanced",
        highlight: "Campus Watch",
        titleEnd: "Systems",
        description: "Round-the-clock surveillance and rapid response protocols tailored for educational environments, ensuring peace of mind.",
        image: schoolSafety2,
        overlay: "from-background via-background/95 to-background/60",
    },
    {
        badge: "Verified Personnel",
        title: "Cognitive",
        highlight: "Physical Guarding",
        titleEnd: "",
        description: "Moving beyond traditional watchmen to Intelligent Safety Marshals (ISM) equipped with situational AI overlays.",
        image: schoolSafety3,
        overlay: "from-background via-background/95 to-background/60",
    },
    {
        badge: "Digital Security",
        title: "Enterprise",
        highlight: "ICT & Cybersecurity",
        titleEnd: "",
        description: "A unified NOC-SOC approach to campus infrastructure, ensuring 99.99% uptime for digital learning.",
        image: schoolSafety4,
        overlay: "from-background via-background/95 to-background/60",
    },
    {
        badge: "Health & Transport",
        title: "Safety",
        highlight: "In Motion",
        titleEnd: "Protocols",
        description: "Comprehensive oversight of everything that moves, from school buses to student medical records with AI tracking.",
        image: schoolSafety5,
        overlay: "from-background via-background/95 to-background/60",
    },
];

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
                aria-label="Close video"
            >
                <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                    title="School Safety Solutions Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export const SchoolSafetyHero = ({ onOpenEbook }: { onOpenEbook: () => void }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    const scrollToConsultation = (e: React.MouseEvent) => {
        e.preventDefault();
        const section = document.getElementById('consultation');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openVideo = () => {
        setShowVideo(true);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setShowVideo(false);
        document.body.style.overflow = 'auto';
    };

    const scrollPrev = useCallback(() => {
        if (emblaApi) onNavClick(() => emblaApi.scrollPrev());
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) onNavClick(() => emblaApi.scrollNext());
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) onNavClick(() => emblaApi.scrollTo(index));
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = useCallback(() => {
        if (autoplayRef.current) return;
        autoplayRef.current = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 4000);
    }, [emblaApi]);

    const stopAutoPlay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        startAutoPlay();
        emblaApi.on('pointerDown', stopAutoPlay);
        emblaApi.on('pointerUp', startAutoPlay);
        return () => {
            stopAutoPlay();
            emblaApi.off('pointerDown', stopAutoPlay);
            emblaApi.off('pointerUp', startAutoPlay);
        };
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    const onNavClick = (callback: () => void) => {
        stopAutoPlay();
        callback();
        setTimeout(startAutoPlay, 5000);
    };

    return (
        <section className="relative min-h-screen overflow-hidden" id="hero">
            <VideoModal isOpen={showVideo} onClose={closeVideo} />

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
                            className="flex-[0_0_100%] min-w-0 relative h-full"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    transform: selectedIndex === index ? 'scale(1.05)' : 'scale(1)'
                                }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
                            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-start md:items-center pt-40 md:pt-10">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 animate-fade-in"
                            key={`badge-${selectedIndex}`}
                        >
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{heroSlides[selectedIndex].badge}</span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
                            key={`title-${selectedIndex}`}
                        >
                            {heroSlides[selectedIndex].title}{" "}
                            <span className="text-gradient">{heroSlides[selectedIndex].highlight}</span>{" "}
                            {heroSlides[selectedIndex].titleEnd}
                        </h1>

                        {/* Subheading */}
                        <p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
                            key={`desc-${selectedIndex}`}
                        >
                            {heroSlides[selectedIndex].description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button
                                size="lg"
                                className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20"
                                onClick={scrollToConsultation}
                            >
                                Secure My Campus
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 text-base px-8 py-6 bg-card/60 backdrop-blur-md border-white/20 hover:bg-primary hover:text-white transition-all duration-300"
                                onClick={onOpenEbook}
                            >
                                <FileText className="w-4 h-4" />
                                View Blueprint
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-medium">Police Verified Teams</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-medium">500+ Schools Safe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-medium">DPDP Compliant</span>
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
    );
};
