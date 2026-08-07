import { Quote, Star } from "lucide-react";

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

export const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from our enterprise partners about how ISI integrated security solutions are driving operational excellence and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed italic">"{testimonial.quote}"</p>

              <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
