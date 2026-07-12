import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { toast } from "sonner";
import { useAnalytics } from "@/hooks/useAnalytics";
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
    { name: "Manufacturing & Industrial", href: "/verticals#manufacturing" },
    { name: "Healthcare Security", href: "/verticals#healthcare" },
    { name: "Drone Services", href: "/verticals#drones" },
  ],
  solutions: [
    { name: "Integrated Security", href: "/solutions" },
    { name: "Tailored Solutions", href: "/solutions#tailored-solutions" },
  ],
  landingPages: [
    { name: "School Safety Solutions", href: "/school-safety" },
    { name: "Campus Safety Solutions", href: "/campus-safety" },
    { name: "Cash Logistics Platform", href: "/cash-logistics" },
    { name: "Secure Value Logistics", href: "/secure-value-logistics" },
    { name: "Command Center Platform", href: "/command-center" },
    { name: "Smart City Platform", href: "/smart-city" },
    { name: "Mass Transportation Platform", href: "/mass-transportation" },
    { name: "Travel & Tourism Platform", href: "/travel-tourism" },
    { name: "GCC / IT Parks Security", href: "/gcc-it-parks" },
    { name: "Event Management Security", href: "/event-management" },
    { name: "Modern Living & Business", href: "/modern-living" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Offerings", href: "/offerings" },
    { name: "Our Capabilities", href: "/capabilities" },
    { name: "Our Customers", href: "/customers" },
    { name: "Partners", href: "/partners" },
    { name: "Tenders & RFQ", href: "/partners#tenders" },
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
  const { trackFormSubmission } = useAnalytics();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsNewsletterSubmitting(true);
    try {
      // Send Subscription via Node.js Server
      await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      toast.success('Subscribed successfully!', {
        description: 'You will now receive our latest security updates directly in your inbox.',
      });
      setNewsletterEmail('');
    } catch (error) {
      toast.error('Failed to subscribe', {
        description: 'Please try again later.',
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-12 gap-y-10">
          {/* Desktop Links Grid - Hidden on Mobile */}
          <div className="hidden lg:contents">
            {/* Pillar 1: Industry Verticals */}
            <div>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Industry Verticals</h4>
              <ul className="space-y-4">
                {footerLinks.verticals.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Solutions & Hubs */}
            <div>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Solutions</h4>
              <ul className="space-y-4 mb-10">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Specialized Hubs</h4>
              <ul className="space-y-4">
                {footerLinks.landingPages.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Company */}
            <div>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 4: Contact & Sitemap */}
            <div>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Contact</h4>
              <ul className="space-y-5 mb-10">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-background/70 hover:text-primary transition-all flex items-start gap-4 group">
                      {link.icon === "MapPin" && <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />}
                      {link.icon === "Phone" && <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />}
                      {link.icon === "Mail" && <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />}
                      <span className="leading-relaxed">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-background mb-8 tracking-wider text-sm uppercase">Navigation</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/sitemap" className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-block">
                    Site Directory
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion - Hidden on Desktop */}
          <div className="lg:hidden col-span-1 space-y-4 mb-8">
            <Accordion type="single" collapsible className="w-full border-none">
              <AccordionItem value="verticals" className="border-b border-background/10">
                <AccordionTrigger className="text-background hover:no-underline font-bold py-4">Industry Verticals</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-2">
                    {footerLinks.verticals.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-background/60 hover:text-primary block py-1">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="solutions" className="border-b border-background/10">
                <AccordionTrigger className="text-background hover:no-underline font-bold py-4">Solutions & Hubs</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-2 mb-6">
                    {footerLinks.solutions.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-background/60 hover:text-primary block py-1">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 mt-4 text-sm uppercase tracking-wider text-background font-bold">Specialized Hubs</div>
                  <ul className="space-y-4">
                    {footerLinks.landingPages.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-background/60 hover:text-primary block py-1">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="company" className="border-b border-background/10">
                <AccordionTrigger className="text-background hover:no-underline font-bold py-4">Company</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-2">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-background/60 hover:text-primary block py-1">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border-b border-background/10">
                <AccordionTrigger className="text-background hover:no-underline font-bold py-4">Contact & Navigation</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-5 pt-2 mb-6">
                    {footerLinks.contact.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-background/60 hover:text-primary flex items-start gap-3">
                          {link.icon === "MapPin" && <MapPin className="w-4 h-4 mt-1 text-primary" />}
                          {link.icon === "Phone" && <Phone className="w-4 h-4 mt-1 text-primary" />}
                          {link.icon === "Mail" && <Mail className="w-4 h-4 mt-1 text-primary" />}
                          <span className="leading-relaxed">{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 mt-4 text-sm uppercase tracking-wider text-background font-bold">Navigation</div>
                  <a href="/sitemap" className="text-sm text-background/60 hover:text-primary block py-1">Site Directory</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Logo & Newsletter */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 pt-10 lg:pt-0 lg:pl-10 border-t border-background/10 lg:border-t-0 lg:border-l lg:border-background/20 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img loading="lazy"
              src={isiLogo}
              alt="ISI Security"
              className="mb-4 w-[240px] h-auto object-contain"
            />
            <p className="text-background/80 text-sm font-semibold mb-4 uppercase tracking-[0.2em]">
              Your Trusted Shield Since 1985
            </p>
            <p className="text-background/70 mb-8 leading-relaxed text-sm max-w-sm">
              Industrial Security & Intelligence (I) Pvt. Ltd. - India's trusted partner for
              comprehensive security solutions since 1985.
            </p>

            {/* Newsletter Signup */}
            <div className="w-full max-w-sm mb-8">
              <h4 className="font-bold text-background mb-4 text-base">
                Signup for Updates
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  disabled={isNewsletterSubmitting}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-background/10 border border-background/20 text-background text-sm placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <Button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="w-full py-6 rounded-xl gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold"
                >
                  {isNewsletterSubmitting ? "Subscribing..." : "Subscribe Now"} <ArrowRight size={16} />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 mt-8 border-t border-background/10">
          <p className="text-sm text-background/50 text-center lg:text-left order-2 lg:order-1">
            © {new Date().getFullYear()} Industrial Security & Intelligence (I) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-background/50 order-1 lg:order-2">
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
