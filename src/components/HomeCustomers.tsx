import React from "react";

const allLogos = [
  { name: "Bosch", image: "/logos/Bosch_Global_Software_Tech._Pvt_Ltd-removebg-preview.png" },
  { name: "Ramco Group", image: "/logos/Ramco_Group-removebg-preview.png" },
  { name: "Ramco Cements Limited", image: "/logos/Ramco_Cements_Limited-removebg-preview.png" },
  { name: "Murugappa Group", image: "/logos/Murugappa Group.png" },
  { name: "Tubes Investment of India Limited", image: "/logos/Tubes_Investment_ot_India_Limited-removebg-preview.png" },
  { name: "Carborundum Universal Limited", image: "/logos/Carborundum_UniversalLimited-removebg-preview.png" },
  { name: "EID Parry (India) Limited", image: "/logos/EID_Parry__India__Limited-removebg-preview.png" },
  { name: "TATA", image: "/logos/TATA.png" },
  { name: "Sanmar Group", image: "/logos/Sanmar_Group-removebg-preview.png" },
  { name: "VinFast", image: "/logos/VInfast.png" },
  { name: "BYD India Pvt Ltd", image: "/logos/BYD_INDIA_PVT_LTD-removebg-preview.png" },
  { name: "Britannia", image: "/logos/BRITANNIA_INDUSTRIES_LIMITED-removebg-preview.png" },
  { name: "Marico", image: "/logos/MARICO_LIMITED-removebg-preview.png" },
  { name: "Zamil Steels", image: "/logos/Zamil Steels.png" },
  { name: "Zoho", image: "/logos/Zoho_Corporation-removebg-preview.png" },
  { name: "ITC Limited", image: "/logos/ITC Limited.png" },
  { name: "Taj Group", image: "/logos/Taj_Group-removebg-preview.png" },
  { name: "CMC", image: "/logos/CMC.png" },
  { name: "HDFC", image: "/logos/HDFC.png" },
  { name: "SBI", image: "/logos/SBI-removebg-preview.png" },
];

export const HomeCustomers = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-background border-b border-border/50">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted by India's Leading Organizations
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...allLogos, ...allLogos].map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center w-40 sm:w-48 mx-4 sm:mx-8 grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={company.image}
                alt={company.name}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
