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
  company: [
    { name: "About Us", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "News & Media", href: "#" },
    { name: "CSR Initiatives", href: "#" },
  ],
  services: [
    { name: "Guarding Services", href: "#services" },
    { name: "Electronic Security", href: "#services" },
    { name: "Risk Consulting", href: "#services" },
    { name: "Background Verification", href: "#services" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

const certifications = ["ISO 9001:2015", "PSARA Licensed", "RBI Empanelled", "DGCA Approved"];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

      {/* Newsletter Section */}
      <div className="border-b border-background/10 relative">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-background mb-2">
                Stay Updated on Security Insights
              </h3>
              <p className="text-background/60">Get the latest news, trends, and best practices delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary"
              />
              <Button className="gap-2 px-6 shadow-lg shadow-primary/30">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={isiLogo}
              alt="ISI Logo"
              className="brightness-0 invert mb-6"
              style={{ width: '174.356px', height: '56px' }}
            />
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Industrial Security & Intelligence (I) Pvt. Ltd. - India's trusted partner for
              comprehensive security solutions since 1985.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/70 mb-6">
              <div className="flex items-center gap-3 hover:text-background transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Gandhi Nagar, Madurai – 625 020</span>
              </div>
              <div className="flex items-center gap-3 hover:text-background transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98949 99955</span>
              </div>
              <div className="flex items-center gap-3 hover:text-background transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>mdu@isisecurity.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/isiguards/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/isiguards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded" />
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

          <div>
            <h4 className="font-semibold text-background mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded" />
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
          </div>

          <div>
            <h4 className="font-semibold text-background mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-background/10">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-background/70">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Industrial Security & Intelligence (I) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
