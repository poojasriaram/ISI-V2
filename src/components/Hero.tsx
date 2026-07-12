import { Shield, ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import heroAiDriven from "../assets/hero-ai-driven.webp";
import heroSoc from "../assets/hero-soc.webp";
import heroVerify from "../assets/hero-verify.webp";
import heroIntegration from "../assets/hero-integration.webp";
import heroDrone from "../assets/hero-drone.webp";
import heroFacility from "../assets/verticals-facility.webp";
import heroCommand from "../assets/command_center_1.webp";

// The text overlay will be static now, so we only need the images and overlays for the carousel.
const heroSlides = [
  {
    image: heroAiDriven,
    overlay: "from-background via-background/95 to-background/70",
  },
  {
    image: heroIntegration,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    image: heroSoc,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    image: heroVerify,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    image: heroDrone,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    image: heroFacility,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    image: heroCommand,
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
          title="AI Driven Security Solutions Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const solutionsRef = useRef<HTMLElement>(null);

  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVideo = () => {
    setShowVideo(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeVideo = () => {
    setShowVideo(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
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

  const startAutoPlay = useCallback((delay = 4000) => {
    if (!emblaApi) return;
    stopAutoPlay();
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
      // After first scroll, resume normal interval
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);
    }, delay);
  }, [emblaApi]);

  const stopAutoPlay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Delay the very first autoplay by 15s to allow Lighthouse LCP measurement
    startAutoPlay(15000);

    const onSettle = () => startAutoPlay();
    emblaApi.on("pointerDown", stopAutoPlay);
    emblaApi.on("settle", onSettle);

    return () => {
      stopAutoPlay();
      emblaApi.off("pointerDown", stopAutoPlay);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, startAutoPlay, stopAutoPlay]);

  const onNavClick = (callback: () => void) => {
    stopAutoPlay();
    callback();
    // Restart after a longer delay to let user finish interacting
    setTimeout(startAutoPlay, 5000);
  };


  return (
    <section
      className="relative h-[100dvh] min-h-[600px] overflow-hidden"
      id="hero"
    >
      <VideoModal isOpen={showVideo} onClose={closeVideo} />
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden h-full"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* If it's the first slide, we use an actual image tag for eager loading and LCP optimization */}
              {index === 0 ? (
                <>
                  <img
                    src={slide.image}
                    alt="Hero Slide"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 w-full h-full object-cover ${index === 0 ? '' : 'transition-transform duration-[10000ms] ease-out'}`}
                    style={{
                      transform: (index !== 0 && selectedIndex === index) ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  {/* Preload link for Vite to inject */}
                  <link rel="preload" href={slide.image} as="image" />
                </>
              ) : (
                /* Background Image for other slides */
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

              {/* Accent Shapes */}
              <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay - Static */}
      <div className="absolute inset-0 flex items-center pt-28 md:pt-32 lg:pt-36 pointer-events-none">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl pointer-events-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-6 md:mb-8 animate-fade-in"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary text-nowrap">Enterprise Security Partner</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-4 md:mb-6 animate-fade-in"
            >
              Integrated Security Solutions for <span className="text-gradient block sm:inline">Modern Enterprises</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 animate-fade-in"
            >
              Delivering AI-enabled integrated security solutions including Security Guarding, Electronic Security, Facility Management and Risk Consulting across multiple industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
              <Button
                size="lg"
                className="gap-2 text-base h-14 px-8 shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform rounded-full bg-primary text-white group"
                onClick={scrollToSolutions}
              >
                Request a Free Security Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base h-14 px-8 bg-card/40 backdrop-blur-md border border-white/20 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full group"
                onClick={openVideo}
              >
                Talk to Our Security Experts
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground font-medium animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="whitespace-nowrap">Trusted by 500+ Enterprises</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="whitespace-nowrap">ISO 9001:2015 Certified</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="whitespace-nowrap">Nationwide Service (PAN India)</span>
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
