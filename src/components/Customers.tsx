import { Quote, Star } from "lucide-react";

// Testimonials removed to a separate file

// Categorized client data by industry sector
const clientsByIndustry = {
  "Engineering / Manufacturing": [
    { name: "Bosch", image: "/logos/Bosch_Global_Software_Tech._Pvt_Ltd-removebg-preview.png" },
    { name: "Ramco Group", image: "/logos/Ramco_Group-removebg-preview.png" },
    { name: "Ramco Cements Limited", image: "/logos/Ramco_Cements_Limited-removebg-preview.png" },
    { name: "Murugappa Group", image: "/logos/Murugappa Group.png" },
    { name: "Tubes Investment of India Limited", image: "/logos/Tubes_Investment_ot_India_Limited-removebg-preview.png" },
    { name: "Carborundum Universal Limited", image: "/logos/Carborundum_UniversalLimited-removebg-preview.png" },
    { name: "EID Parry (India) Limited", image: "/logos/EID_Parry__India__Limited-removebg-preview.png" },
    { name: "TATA", image: "/logos/TATA.png" },
    { name: "Sanmar Group", image: "/logos/Sanmar_Group-removebg-preview.png" },
    { name: "Sanmar Matrix Metals Limited", image: "/logos/Sanmar_Matrix_Metals_Limited-removebg-preview.png" },
    { name: "XOMOX Sanmar Ltd", image: "/logos/XOMOX_Sanmar_Ltd-removebg-preview.png" },
    { name: "Anderson Greenwood Crosby Sanmar Limited", image: "/logos/Anderson_Green_Wood_Crosby_Sanmar_Limited-removebg-preview.png" },
    { name: "VinFast", image: "/logos/VInfast.png" },
    { name: "BYD India Pvt Ltd", image: "/logos/BYD_INDIA_PVT_LTD-removebg-preview.png" },
    { name: "Britannia Industries Limited", image: "/logos/BRITANNIA_INDUSTRIES_LIMITED-removebg-preview.png" },
    { name: "MTC Group", image: "/logos/MTC_GROUP-removebg-preview.png" },
    { name: "Intersnack Group", image: "/logos/Intersnack Group.png" },
    { name: "TZMO Global", image: "/logos/TZMO-Global-removebg-preview.png" },
    { name: "LGB Group", image: "/logos/LGB___Brothers_Limited-removebg-preview.png" },
    { name: "Marico Limited", image: "/logos/MARICO_LIMITED-removebg-preview.png" },
    { name: "Zamil Steels", image: "/logos/Zamil Steels.png" },
    { name: "Vikram Solar", image: "/logos/Vikram Solar.png" },
    { name: "Milkymist", image: "/logos/Milkymist.png" },
    { name: "Chemplast", image: "/logos/Chemplast.png" },
  ],
};

// Smaller sections grouped for better layout
const smallSectionsRow1 = [
  {
    title: "IT & ITES Services",
    companies: [
      { name: "Zoho", image: "/logos/Zoho_Corporation-removebg-preview.png" },
      { name: "Gofrugal Technologies Private Limited", image: "/logos/Gofrugal_Technologies_Private_Limited-removebg-preview.png" },
      { name: "Aardhraa Technologies", image: "/logos/Aardhraa_Technologies-removebg-preview.png" },
    ],
  },
  {
    title: "Hospitality & Tourism",
    companies: [
      { name: "ITC Limited", image: "/logos/ITC Limited.png" },
      { name: "Taj Group", image: "/logos/Taj_Group-removebg-preview.png" },
      { name: "Marriott Bonvoy", image: "/logos/Marriott Bonvoy.png" },
    ],
  },
];

const smallSectionsRow2 = [
  {
    title: "Healthcare",
    companies: [
      { name: "CMC", image: "/logos/CMC.png" },
      { name: "Velammal", image: "/logos/Velammal_Medical_College_b_Research_Centre-removebg-preview.png" },
      { name: "Aravind Eye Hospital", image: "/logos/Aravind_Eye_Hospital-removebg-preview.png" },
    ],
  },
  {
    title: "BFSI",
    companies: [
      { name: "HDFC", image: "/logos/HDFC.png" },
      { name: "State Bank of India", image: "/logos/SBI-removebg-preview.png" },
      { name: "Canara Bank", image: "/logos/Canara Bank.png" },
      { name: "Indian Bank", image: "/logos/Indian Bank.png" },
    ],
  },
];

const smallSectionsRow3 = [
  {
    title: "Education",
    companies: [
      { name: "Chinmaya School", image: "/logos/CHINMAYA_SCHOOL-removebg-preview.png" },
    ],
  },
  {
    title: "Retail & Wholesale",
    companies: [
      { name: "Thangamayil Jewellery", image: "/logos/Thangamayil_Jewellery-removebg-preview.png" },
      { name: "Prince Jewellery", image: "/logos/Prince_Jewellery.png" },
    ],
  },
];

const smallSectionsRow4 = [
  {
    title: "NGO",
    companies: [
      { name: "Amar Seva Sangam", image: "/logos/Amar_Seva_Sangam-removebg-preview.png" },
    ],
  },
  {
    title: "Construction & Infrastructure",
    companies: [
      { name: "Estancia", image: "/logos/Estancia.png" },
    ],
  },

];

const smallSectionsRow5 = [
  {
    title: "Logistics & Transportation",
    companies: [
      { name: "Cipla", image: "/logos/Cipla.png" },
    ],
  },
];

export const Customers = () => {
  return (
    <section id="customers" className="py-24 relative overflow-hidden scroll-mt-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--section-gradient)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Our Customers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Businesses Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building long-term security partnerships with enterprises across industries.
          </p>
        </div>

        {/* Client Logos by Industry Sector - Masonry Layout */}
        <div className="space-y-16">
          {/* Engineering / Manufacturing - Large Section */}
          {Object.entries(clientsByIndustry).map(([sector, companies]) => (
            <div key={sector} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:border-primary/30 transition-all duration-500 shadow-lg">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

              {/* Sector Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {sector}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-32 transition-all duration-300" />
              </div>

              {/* Masonry Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Logo Container */}
                    <div className="relative flex items-center justify-center w-full h-full">
                      <img loading="lazy"
                        src={company.image}
                        alt={company.name}
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Row 1: IT & ITES + Hospitality - Side by Side */}
          <div className="grid md:grid-cols-2 gap-10">
            {smallSectionsRow1.map((section) => (
              <div key={section.title} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center w-[calc(50%-8px)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img loading="lazy"
                          src={company.image}
                          alt={company.name}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Healthcare + BFSI */}
          <div className="grid md:grid-cols-2 gap-10">
            {smallSectionsRow2.map((section) => (
              <div key={section.title} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center w-[calc(50%-8px)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img loading="lazy"
                          src={company.image}
                          alt={company.name}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Education + Retail */}
          <div className="grid md:grid-cols-2 gap-10">
            {smallSectionsRow3.map((section) => (
              <div key={section.title} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center w-[calc(50%-8px)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img loading="lazy"
                          src={company.image}
                          alt={company.name}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: NGO + Construction - Compact Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {smallSectionsRow4.map((section) => (
              <div key={section.title} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center w-[calc(50%-8px)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img loading="lazy"
                          src={company.image}
                          alt={company.name}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 5: Logistics - Centered Single Card */}
          <div className="flex justify-center">
            {smallSectionsRow5.map((section) => (
              <div key={section.title} className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 shadow-lg max-w-md w-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-32 flex items-center justify-center w-[calc(50%-8px)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img loading="lazy"
                          src={company.image}
                          alt={company.name}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
