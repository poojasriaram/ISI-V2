import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

                            {/* Grid Pattern Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
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
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-1/2 translate-y-1/2 left-4 lg:left-8 z-20">
                <button
                    onClick={scrollPrev}
                    className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card hover:border-primary/50 transition-all"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>
            <div className="absolute bottom-1/2 translate-y-1/2 right-4 lg:right-8 z-20">
                <button
                    onClick={scrollNext}
                    className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card hover:border-primary/50 transition-all"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
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
