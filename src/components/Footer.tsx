import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import isiLogo from "@/assets/isi-logo.png";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  verticals: [
    { name: "Secure Value Logistics", href: "/verticals#logistics" },
    { name: "Hospitality & Events", href: "/verticals#hospitality" },
    { name: "BFSI Sector", href: "/verticals#bfsi" },
    { name: "Education Sector", href: "/verticals#education" },
    { name: "Manufacturing & Defence", href: "/verticals#manufacturing" },
    { name: "Healthcare Security", href: "/verticals#healthcare" },
    { name: "Drone Services", href: "/verticals#drones" },
  ],
  services: [
    { name: "Core Security", href: "/offerings#core-security" },
    { name: "Facility Evolution", href: "/offerings#facility-evolution" },
    { name: "DCIM & Optimization", href: "/offerings#dcim" },
  ],
  solutions: [
    { name: "Integrated Security & Technology-Driven Protection", href: "/solutions" },
    { name: "Tailored Solutions", href: "/solutions#tailored-solutions" },
  ],
  landingPages: [
    { name: "School Safety Solutions", href: "/school-safety" },
    { name: "Cash Logistics Platform", href: "/cash-logistics" },
    { name: "Secure Value Logistics", href: "/secure-value-logistics" },
    { name: "Command Center Platform", href: "/command-center" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Capabilities", href: "/capabilities" },
    { name: "Our Customers", href: "/customers" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ],
  contact: [
    { name: "Gandhi Nagar, Madurai – 625 020", href: "/contact", icon: "MapPin" },
    { name: "+91 98949 99955", href: "tel:+919894999955", icon: "Phone" },
    { name: "mdu@isisecurity.in", href: "mailto:mdu@isisecurity.in", icon: "Mail" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Industry Verticals */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">
              Industry Verticals
            </h4>
            <ul className="space-y-3">
              {footerLinks.verticals.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Solutions Combined */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-background mb-4 mt-8 text-lg">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-background mb-4 mt-8 text-lg">
              Landing Pages
            </h4>
            <ul className="space-y-3">
              {footerLinks.landingPages.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-6 text-lg">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block flex items-start gap-2">
                    {link.icon === "MapPin" && <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    {link.icon === "Phone" && <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    {link.icon === "Mail" && <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Sitemap */}
            <h4 className="font-bold text-background mb-4 mt-8 text-lg">
              Sitemap
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/sitemap" className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Logo & Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:pl-8 lg:border-l lg:border-background/20">
            <img
              src={isiLogo}
              alt="ISI Logo"
              className="brightness-0 invert mb-4"
              style={{ width: '230px', height: '70px' }}
            />
            <p className="text-background/80 text-sm font-medium mb-4" style={{ letterSpacing: '0.040em' }}>
              Your Trusted Shield Since 1985
            </p>
            <p className="text-background/70 mb-6 leading-relaxed text-sm">
              Industrial Security & Intelligence (I) Pvt. Ltd. - India's trusted partner for
              comprehensive security solutions since 1985.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-bold text-background mb-3 text-base">
                Signup for Updates
              </h4>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your mail..."
                  className="w-full px-4 py-2.5 rounded-lg bg-background/10 border border-background/20 text-background text-sm placeholder:text-background/40 focus:outline-none focus:border-primary"
                />
                <Button className="w-full gap-2 shadow-lg shadow-primary/30">
                  Submit
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 mb-6">
              <a
                href="https://www.linkedin.com/company/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/isiguards/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-background/10">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Industrial Security & Intelligence (I) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="/cookie-policy" className="hover:text-background transition-colors">Cookie Policy</a>
            <a href="/copyright-policy" className="hover:text-background transition-colors">Copyright Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
