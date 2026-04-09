import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionPanel } from "@/components/cash-logistics/SectionPanel";
import {
    gccHero,
    gccHeroSlides,
    allGCCSections,
    finalCTA
} from "@/data/gcc-it-parks-data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import city1 from "../assets/command_center_3.jpg"; // Workplace command center
import city2 from "../assets/hero-ai-driven.jpg"; // General tech
import city3 from "../assets/verticals-surveillance.jpg"; // Surveillance
import city4 from "../assets/about-hero-bg.jpg"; // Campus

const heroSlides = [
    { image: city1, ...gccHeroSlides[0] },
    { image: city2, ...gccHeroSlides[1] },
    { image: city3, ...gccHeroSlides[2] },
    { image: city4, ...gccHeroSlides[3] }
];

import { useContentProtection } from "@/hooks/useContentProtection";

const GccItParksPage = () => {
    useContentProtection();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<any>(null);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollPrev();
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollNext();
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) {
            stopAutoPlay();
            emblaApi.scrollTo(index);
            setTimeout(startAutoPlay, 5000);
        }
    }, [emblaApi]);

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

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden">
                {/* Hero Section with Carousel */}
                <section className="relative min-h-[85vh] overflow-hidden" id="hero">
                    <div ref={emblaRef} className="overflow-hidden h-[85vh]" onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
                        <div className="flex h-full">
                            {heroSlides.map((slide, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full transition-opacity duration-50 ease-out">
                                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out" style={{ backgroundImage: `url(${slide.image})`, transform: selectedIndex === index ? 'scale(1.05)' : 'scale(1)' }} />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
                                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-start md:items-center pt-32 md:pt-0">
                        <div className="container mx-auto px-4 lg:px-8 relative z-10">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 animate-fade-in">
                                    <span className="text-sm font-medium text-primary">{gccHero.badge}</span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-in">{heroSlides[selectedIndex].title}</h1>
                                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 md:mb-8 animate-fade-in">{heroSlides[selectedIndex].subtitle}</p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Link to="/contact"><Button size="lg" className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20">Secure Digital Workplaces<ArrowRight className="w-5 h-5" /></Button></Link>
                                    <Link to="#workplace-intelligence"><Button variant="outline" size="lg" className="gap-2 text-base px-8 py-6 bg-card/60 backdrop-blur-md border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">Explore Campus Intelligence</Button></Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-2xl text-xs sm:text-sm text-muted-foreground/80 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
                                        <span>AI-Powered Campus Surveillance</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
                                        <span>Workforce Safety & Access Control</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
                                        <span>IT Infrastructure Protection</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
                                        <span>Integrated Security Command Centers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                        {heroSlides.map((_, index) => (<button key={index} onClick={() => scrollTo(index)} className={`relative h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-10 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"}`} aria-label={`Go to slide ${index + 1}`}>{selectedIndex === index && <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />}</button>))}
                    </div>
                </section>

                {/* All Sections */}
                {allGCCSections.map((section, index) => (
                    <SectionPanel key={section.id} section={section as any} index={index} />
                ))}

                {/* Final CTA Section */}
                <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
                    <div className="absolute inset-0 bg-[var(--section-gradient)]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{finalCTA.title}</h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">{finalCTA.subtitle}</p>
                            <Link to={finalCTA.link}><Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 text-lg">{finalCTA.buttonText}<ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default GccItParksPage;
