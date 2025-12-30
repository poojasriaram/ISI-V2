import { Shield, ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import heroAiDriven from "../assets/hero-ai-driven.jpg";
import heroSoc from "../assets/hero-soc.jpg";
import heroVerify from "../assets/hero-verify.jpg";
import heroIntegration from "../assets/hero-integration.jpg";
import heroDrone from "../assets/hero-drone.jpg";

const heroSlides = [
  {
    badge: "ISO 9001:2015 Certified",
    title: "AI Driven",
    highlight: "Intelligence",
    titleEnd: "Solutions",
    description: "Since 1985, ISI has been SECURING INDIA'S 55 Trillion  ECONOMY with Advanced Techlogy Driven Security Solutions and Operaton.",
    image: heroAiDriven,
    overlay: "from-background via-background/95 to-background/70",
  },
  {
    badge: "24/7 Security Operations",
    title: "Advanced SOC Services for",
    highlight: "Real-Time",
    titleEnd: "Protection",
    description: "Our state-of-the-art Security Operations Center provides round-the-clock monitoring, threat detection, and rapid incident response.",
    image: heroSoc,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    badge: "Trusted by 500+ Enterprises",
    title: "Background",
    highlight: "Verification",
    titleEnd: "Services",
    description: "Protect your organization with our thorough pre-employment screening, vendor verification, and continuous monitoring solutions.",
    image: heroVerify,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    badge: "Securing India's ₹55 Trillion Economy",
    title: "Large-Scale ",
    highlight: "Integration",
    titleEnd: "& Operations",
    description:
      "Delivering mission-critical, technology-driven security solutions engineered to safeguard India’s largest infrastructures with precision, reliability, and advanced intelligence.",
    image: heroIntegration,
    overlay: "from-background via-background/95 to-background/60",
  },
  {
    badge: "Next-Gen Technology",
    title: "Drone Surveillance &",
    highlight: "AI-Powered",
    titleEnd: "Monitoring",
    description: "Leverage cutting-edge drone technology and artificial intelligence for perimeter security, asset protection, and critical infrastructure monitoring.",
    image: heroDrone,
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

    // Stop autoplay when user interacts with carousel
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
    // Restart after a longer delay to let user finish interacting
    setTimeout(startAutoPlay, 5000);
  };


  return (
    <section
      className="relative min-h-screen overflow-hidden"
      id="hero"
    >
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
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

              {/* Accent Shapes */}
              <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-start md:items-center pt-40 md:pt-32">
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
                onClick={scrollToSolutions}
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base px-8 py-6 bg-card/60 backdrop-blur-md border-white/20 hover:bg-[rgb(23,84,207)] hover:text-white transition-all duration-300"
                onClick={openVideo}
              >
                <Play className="w-4 h-4" />
                Watch Overview
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">40+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Pan-India Coverage</span>
              </div>
            </div>
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
