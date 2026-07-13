import { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Monitor, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { modernLivingData } from "@/data/modern-living-data";

import hero1 from "../../assets/hero-ai-driven.jpg";
import hero2 from "../../assets/hero-drone.jpg";
import hero3 from "../../assets/hero-soc.jpg";
import hero4 from "../../assets/hero-integration.jpg";

const slideImages = [hero1, hero2, hero3, hero4];

export const ModernLivingHero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<any>(null);

    const startAutoPlay = useCallback(() => {
        if (autoplayRef.current) return;
        autoplayRef.current = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 6000);
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
        return () => {
            stopAutoPlay();
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, startAutoPlay, stopAutoPlay]);

    const { heroSlides } = modernLivingData;

    return (
        <section className="relative min-h-screen overflow-hidden bg-background">
            {/* Carousel Background */}
            <div ref={emblaRef} className="absolute inset-0 z-0 overflow-hidden h-screen" onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
                <div className="flex h-full">
                    {slideImages.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear" 
                                style={{ 
                                    backgroundImage: `url(${image})`,
                                    transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)'
                                }} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 h-screen flex flex-col justify-center">
                <div className="max-w-4xl pt-20 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={`content-${selectedIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">
                                    {heroSlides[selectedIndex].badge}
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                                {heroSlides[selectedIndex].title}
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mb-10 leading-relaxed font-medium">
                                {heroSlides[selectedIndex].subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link to="#" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.", "_blank"); }}>
                                    <Button size="lg" className="h-16 px-10 text-lg gap-3 shadow-2xl shadow-primary/30 group">
                                        Request a Private Demo
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="#features">
                                    <Button variant="outline" size="lg" className="h-16 px-10 text-lg gap-3 bg-background/50 backdrop-blur-md hover:bg-primary/5 border-primary/20">
                                        Secure Your Space Today
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            selectedIndex === i ? "w-10 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                        )}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-1" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-1" />
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full animate-bounce" />
            </div>
        </section>
    );
};

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
