import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
    badge: string;
    title: string;
    highlight: string;
    titleEnd?: string;
    description: string;
    image: string;
    overlay?: string;
}

interface PageHeroProps {
    slides: HeroSlide[];
    autoplayDelay?: number;
}

export const PageHero = ({ slides, autoplayDelay = 5000 }: PageHeroProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

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
        }, autoplayDelay);
    }, [emblaApi, autoplayDelay]);

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
        <section className="relative min-h-[70vh] overflow-hidden">
            {/* Carousel */}
            <div
                ref={emblaRef}
                className="overflow-hidden h-[70vh]"
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
            >
                <div className="flex h-full">
                    {slides.map((slide, index) => (
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
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay || 'from-background via-background/95 to-background/70'}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-6 animate-fade-in"
                            key={`badge-${selectedIndex}`}
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-medium text-primary">{slides[selectedIndex].badge}</span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
                            key={`title-${selectedIndex}`}
                        >
                            {slides[selectedIndex].title}{" "}
                            <span className="text-gradient">{slides[selectedIndex].highlight}</span>
                            {slides[selectedIndex].titleEnd && ` ${slides[selectedIndex].titleEnd}`}
                        </h1>

                        {/* Description */}
                        <p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in"
                            key={`desc-${selectedIndex}`}
                        >
                            {slides[selectedIndex].description}
                        </p>

                        {/* Above-the-fold Hero CTAs */}
                        <div className="flex flex-wrap items-center gap-4 animate-fade-in mb-4">
                            <Button
                                size="lg"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-lead-form'))}
                                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/25 px-6 h-12 text-sm sm:text-base cursor-pointer"
                            >
                                Get Enterprise Quote
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.open('https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.', '_blank')}
                                className="gap-2 bg-card/60 backdrop-blur-md border-white/20 hover:bg-primary/10 hover:text-primary rounded-full px-6 h-12 text-sm sm:text-base cursor-pointer"
                            >
                                Speak to an Expert
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, index) => (
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
        </section>
    );
};
