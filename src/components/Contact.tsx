import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "./ui/button";
import isiLogo from "@/assets/isi-logo.png";

export const Contact = () => {
  const offices = [
    {
      title: "CORPORATE OFFICE",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 9, First Floor, Kamarajar Salai,",
        "Ashok Nagar, Chennai – 600 083"
      ],
      contacts: [
        { type: "mobile", value: "+91 77088 87878 / 77088 86868" },
        { type: "email", value: "info@isisecurity.in" }
      ]
    },
    {
      title: "ADMINISTRATIVE OFFICE",
      address: [
        "ISI (India) Pvt. Ltd.",
        "12-9, Santhosh Raj Plaza,",
        "Gandhi Nagar, Madurai – 625 020."
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99955 / 95009 59004" },
        { type: "email", value: "mdu@isisecurity.in" }
      ]
    },
    {
      title: "DELHI",
      address: [
        "ISI (India) Pvt. Ltd.",
        "Flat no. B-702, Grand Ajnara Heritage,",
        "Sector-74, Noida, New Delhi"
      ],
      contacts: [
        { type: "mobile", value: "+91 96555 99988" }
      ]
    },
    {
      title: "ANDHRA PRADESH",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No 2 Akn Layout, Chennai – Tirupathi Bye Pass Road,",
        "Bharath Petrol Bunk Side, Nagari,",
        "Chittoor, AP – 517590"
      ],
      contacts: [
        { type: "mobile", value: "+91 99444 99988" }
      ]
    },
    {
      title: "KARNATAKA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 36, First Main Road,",
        "Kodichikkanahalli Main Road,",
        "Bangalore – 560 076"
      ],
      contacts: [
        { type: "mobile", value: "+91 99803 41711 / 78929 22511" }
      ]
    },
    {
      title: "TELANGANA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "H.No. B-1228, NGO Colony,",
        "Vanasthalipuram,",
        "Hyderabad – 500 070"
      ],
      contacts: [
        { type: "mobile", value: "+91 77088 87878 / 77088 86868" }
      ]
    },
    {
      title: "KERALA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No.12/498, K.V. Building,",
        "Kannur post,",
        "Kannur – 670 005"
      ],
      contacts: [
        { type: "mobile", value: "+91 99947 31166" }
      ]
    },
    {
      title: "TAMIL NADU (Thoothukudi)",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 16J/3, Third Floor, JP Dhanam Complex",
        "Jeyalani Colony,",
        "Thoothukudi – 628 008"
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99955 / 98949 99422" }
      ]
    },
    {
      title: "TAMIL NADU (Coimbatore)",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No: 5, Kakkan Nagar,",
        "4th street, Singanallur,",
        "Coimbatore – 641005"
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99488 / 73388 55544" }
      ]
    },
    {
      title: "PUDUCHERRY",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 43, Ambuthital Thirupattinam,",
        "Polagam, Karaikal,",
        "Puducherry – 609606"
      ],
      contacts: [
        { type: "mobile", value: "+91 73587 99937 / 73388 55577" }
      ]
    }
  ];

  return (

    <section className="min-h-screen bg-background relative overflow-hidden pt-20 pb-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full opacity-20" />

      <div className="container mx-auto px-4">

        {/* Top Section: Hero + Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">

          {/* Left Column: Hero Content */}
          <div className="space-y-8 lg:sticky lg:top-24 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              We're here to help
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Conversation
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ready to upgrade your security infrastructure? Our expert team is standing by to design a custom solution tailored specifically to your needs.
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-card/50 p-4 rounded-xl transition-all border border-transparent hover:border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:info@isisecurity.in" className="text-sm text-muted-foreground group-hover:text-primary transition-colors">info@isisecurity.in</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-card/50 p-4 rounded-xl transition-all border border-transparent hover:border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+917708887878" className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+91 77088 87878</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Form */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-blue-600/30 blur-lg opacity-50" />

            <div className="relative bg-card/80 backdrop-blur-2xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <div className="mb-6">
                <img src={isiLogo} alt="ISI Logo" className="h-12 w-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service Interest</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-muted-foreground"
                  >
                    <option value="">Select a service...</option>
                    <option value="security">Manned Guarding</option>
                    <option value="facility">Electronic Security</option>
                    <option value="consulting">Cash Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section: Our Offices */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a strong presence across India, we are always within reach to serve your security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{office.title}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="pl-13 text-muted-foreground leading-relaxed">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  <div className="border-t border-border/50 pt-4 mt-4 space-y-3">
                    {office.contacts.map((contact, i) => (
                      <div key={i} className="flex items-start gap-3 text-muted-foreground">
                        {contact.type === 'mobile' ? (
                          <Phone className="w-4 h-4 mt-1 text-primary/70" />
                        ) : (
                          <Mail className="w-4 h-4 mt-1 text-primary/70" />
                        )}
                        <span className="flex-1 font-medium hover:text-primary transition-colors cursor-pointer">
                          {contact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
