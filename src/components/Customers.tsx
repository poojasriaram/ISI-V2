import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "ISI transformed our security infrastructure with their integrated SOC solution. We've achieved full compliance and real-time visibility across all branches.",
    author: "Chief Security Officer",
    company: "Leading Private Bank",
    sector: "BFSI",
    rating: 5,
  },
  {
    quote: "Their background verification system reduced our hiring risks by 40%. The API integration with our HRIS was seamless.",
    author: "HR Director",
    company: "Fortune 500 IT Company",
    sector: "Technology",
    rating: 5,
  },
  {
    quote: "The drone surveillance for our refinery perimeter is exceptional. Response times have improved dramatically.",
    author: "Operations Head",
    company: "Major Oil & Gas Corporation",
    sector: "Energy",
    rating: 5,
  },
];

const clientLogos = [
  { name: "State Bank of India", abbr: "SBI", color: "#22409A", image: "/logos/sbi.svg" },
  { name: "HDFC Bank", abbr: "HDFC", color: "#004C8F", image: "/logos/hdfc.svg" },
  { name: "Reliance Industries", abbr: "RIL", color: "#0052B4", image: "/logos/ril.png" },
  { name: "Tata Group", abbr: "TATA", color: "#486AAA", image: "/logos/tata.svg" },
  { name: "Infosys", abbr: "Infosys", color: "#007CC3", image: "/logos/infosys.svg" },
  { name: "Wipro", abbr: "Wipro", color: "#341C53", image: "/logos/wipro.svg" },
  { name: "L&T", abbr: "L&T", color: "#002855", image: "/logos/larsentoubro.png" },
  { name: "Adani Group", abbr: "Adani", color: "#003087", image: "/logos/adani.png" },
];

export const Customers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="customers" className="py-28 relative overflow-hidden scroll-mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--section-gradient)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Our Customers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by India's Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From banking giants to industrial leaders, we secure what matters most.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="pt-6 border-t border-border/50">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mb-3">{testimonial.company}</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by 500+ organizations including</p>

          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 min-w-[200px] h-[100px] group cursor-pointer"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[80px] w-auto max-w-[200px] object-contain transition-all duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
