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

const clientLogos = [
  { name: "Bosch", abbr: "Bosch", color: "#22409A", image: "/logos/Bosch_Global_Software_Tech._Pvt_Ltd-removebg-preview.png" },
  { name: "Ramco Group", abbr: "Ramco", color: "#004C8F", image: "/logos/Ramco_Group-removebg-preview.png" },
  { name: "Ramco Cements Limited", abbr: "Ramco Cements", color: "#0052B4", image: "/logos/Ramco_Cements_Limited-removebg-preview.png" },
  { name: "Murugappa Group", abbr: "Murugappa", color: "#486AAA", image: "/logos/Murugappa Group.png" },
  { name: "Tubes Investment of India Limited", abbr: "TII", color: "#007CC3", image: "/logos/Tubes_Investment_ot_India_Limited-removebg-preview.png" },
  { name: "Carborundum Universal Limited", abbr: "CUMI", color: "#341C53", image: "/logos/Carborundum_UniversalLimited-removebg-preview.png" },
  { name: "EID Parry (India) Limited", abbr: "EID Parry", color: "#002855", image: "/logos/EID_Parry__India__Limited-removebg-preview.png" },
  { name: "Zoho", abbr: "Zoho", color: "#003087", image: "/logos/Zoho_Corporation-removebg-preview.png" },
  { name: "Gofrugal Technologies Private Limited", abbr: "Gofrugal", color: "#F37021", image: "/logos/Gofrugal_Technologies_Private_Limited-removebg-preview.png" },
  { name: "Aardhraa Technologies", abbr: "Aardhraa", color: "#800000", image: "/logos/Aardhraa_Technologies-removebg-preview.png" },
  { name: "ITC Limited", abbr: "ITC", color: "#ED1C24", image: "/logos/ITC Limited.png" },
  { name: "VinFast", abbr: "VinFast", color: "#0066B2", image: "/logos/VInfast.png" },
  { name: "BYD India Pvt Ltd", abbr: "BYD", color: "#0066B2", image: "/logos/BYD_INDIA_PVT_LTD-removebg-preview.png" },
  { name: "Britannia Industries Limited", abbr: "Britannia", color: "#ED1C24", image: "/logos/BRITANNIA_INDUSTRIES_LIMITED-removebg-preview.png" },
  { name: "Taj Group", abbr: "Taj", color: "#ED1C24", image: "/logos/Taj_Group-removebg-preview.png" },
  { name: "CMC", abbr: "CMC", color: "#E60000", image: "/logos/CMC.png" },
  { name: "Marriott Bonvoy", abbr: "Marriott", color: "#006838", image: "/logos/Marriott Bonvoy.png" },
  { name: "HDFC Bank", abbr: "HDFC", color: "#0066B2", image: "/logos/HDFC.png" },
  { name: "State Bank of India", abbr: "SBI", color: "#000000", image: "/logos/SBI-removebg-preview.png" },
  { name: "Canara Bank", abbr: "Canara", color: "#0066B2", image: "/logos/Canara Bank.png" },
  { name: "Indian Bank", abbr: "Indian Bank", color: "#0066B2", image: "/logos/Indian Bank.png" },
  { name: "MTC Group", abbr: "MTC", color: "#ED1C24", image: "/logos/MTC_GROUP-removebg-preview.png" },
  { name: "Tata Group", abbr: "TATA", color: "#ED1C24", image: "/logos/TATA.png" },
  { name: "Sanmar Group", abbr: "Sanmar", color: "#0066B2", image: "/logos/Sanmar_Group-removebg-preview.png" },
  { name: "Sanmar Matrix Metals Limited", abbr: "Sanmar Matrix", color: "#ED1C24", image: "/logos/Sanmar_Matrix_Metals_Limited-removebg-preview.png" },
  { name: "XOMOX Sanmar Ltd", abbr: "XOMOX", color: "#0066B2", image: "/logos/XOMOX_Sanmar_Ltd-removebg-preview.png" },
  { name: "Anderson Greenwood Crosby Sanmar Limited", abbr: "AGC Sanmar", color: "#006838", image: "/logos/Anderson_Green_Wood_Crosby_Sanmar_Limited-removebg-preview.png" },
  { name: "Intersnack Group", abbr: "Intersnack", color: "#FFD700", image: "/logos/Intersnack Group.png" },
  { name: "Velammal Institutions", abbr: "Velammal", color: "#0066B2", image: "/logos/Velammal_Medical_College_b_Research_Centre-removebg-preview.png" },
  { name: "TZMO Global", abbr: "TZMO", color: "#ED1C24", image: "/logos/TZMO-Global-removebg-preview.png" },
  { name: "LGB Group", abbr: "LGB", color: "#0066B2", image: "/logos/LGB___Brothers_Limited-removebg-preview.png" },
  { name: "Marico Limited", abbr: "Marico", color: "#006838", image: "/logos/MARICO_LIMITED-removebg-preview.png" },
  { name: "Chinmaya School", abbr: "Chinmaya", color: "#ED1C24", image: "/logos/CHINMAYA_SCHOOL-removebg-preview.png" },
  { name: "Thangamayil Jewellery", abbr: "Thangamayil", color: "#0066B2", image: "/logos/Thangamayil_Jewellery-removebg-preview.png" },
  { name: "Zamil Steels", abbr: "Zamil", color: "#ED1C24", image: "/logos/Zamil Steels.png" },
  { name: "Vikram Solar", abbr: "Vikram Solar", color: "#0066B2", image: "/logos/Vikram Solar.png" },
  { name: "Aravind Eye Hospital", abbr: "Aravind", color: "#006838", image: "/logos/Aravind_Eye_Hospital-removebg-preview.png" },
  { name: "Amar Seva Sangam", abbr: "Amar Seva", color: "#0066B2", image: "/logos/Amar_Seva_Sangam-removebg-preview.png" },
];

export const Customers = () => {
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

        {/* Client Logos Grid */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by 500+ organizations including</p>

          <div className="space-y-6">
            {/* Row 1 - 7 logos */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
              {clientLogos.slice(0, 7).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - 7 logos */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
              {clientLogos.slice(7, 14).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 3 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              {clientLogos.slice(14, 20).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 4 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              {clientLogos.slice(20, 26).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 5 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              {clientLogos.slice(26, 32).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 6 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              {clientLogos.slice(32, 38).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3 w-full h-[80px]"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[60px] w-auto max-w-full object-contain"
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
