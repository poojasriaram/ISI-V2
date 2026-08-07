
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CapabilitiesLandingSection } from "@/components/capabilities/CapabilitiesLandingSections";
import {
    capabilitiesHero,
    allCapabilitiesSections,
    finalCapabilitiesCTA
} from "@/data/capabilities-landing-data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useContentProtection } from "@/hooks/useContentProtection";

const heroSlides = [
    { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
    { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" },
    { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" }
];

const CapabilitiesPage = () => {
    useContentProtection();
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

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden">
                {/* Hero Section with Carousel */}
                <section className="relative min-h-screen overflow-hidden" id="hero">
                    <div ref={emblaRef} className="overflow-hidden h-screen" onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
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
                    <div className="absolute inset-0 flex items-start md:items-center pt-48 md:pt-32">
                        <div className="container mx-auto px-4 lg:px-8 relative z-10">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 animate-fade-in text-primary font-bold">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    {capabilitiesHero.badge}
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6 animate-fade-in">
                                    {capabilitiesHero.title}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 animate-fade-in">
                                    {capabilitiesHero.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Link to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }}>
                                        <Button size="lg" className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20">
                                            Explore Solutions <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <Link to="#physical-ops">
                                        <Button variant="outline" size="lg" className="gap-2 text-base px-8 py-6 bg-card/60 backdrop-blur-md border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                            Our Pillars
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                        {heroSlides.map((_, index) => (<button key={index} onClick={() => scrollTo(index)} className={`relative h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-10 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"}`} aria-label={`Go to slide ${index + 1}`}>{selectedIndex === index && <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />}</button>))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/50 z-20"><div className="h-full bg-primary transition-all duration-300" style={{ width: `${((selectedIndex + 1) / heroSlides.length) * 100}%` }} /></div>
                </section>

                {/* Main Content Sections (The 5-panel structure) */}
                {allCapabilitiesSections.map((section, index) => (
                    <CapabilitiesLandingSection key={section.id} section={section} index={index} />
                ))}

                {/* Final CTA Section */}
                <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                {finalCapabilitiesCTA.title}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                {finalCapabilitiesCTA.subtitle}
                            </p>
                            <Link to={finalCapabilitiesCTA.link}>
                                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 text-lg">
                                    {finalCapabilitiesCTA.buttonText}
                                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CapabilitiesPage;
