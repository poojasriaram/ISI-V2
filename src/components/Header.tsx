import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import isiLogo from "@/assets/isi-logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Verticals", href: "/verticals", hasDropdown: true },
  { name: "Offerings", href: "/offerings", hasDropdown: true },
  { name: "Capabilities", href: "/capabilities", hasDropdown: true },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Customers", href: "/customers" },
  { name: "Partners", href: "/partners" },
  { name: "Careers", href: "/career" },
];

// New industry verticals list for the dropdown
const verticalsList = [
  { name: "School & Higher Education", id: "education" },
  { name: "Banking & Finance", id: "bfsi" },
  { name: "Manufacturing", id: "manufacturing" },
  { name: "Healthcare", id: "healthcare" },
  { name: "Cash Logistics", id: "cash-logistics" },
  { name: "GCC / IT Parks", id: "gcc-it-parks" },
  { name: "Aerospace", id: "aerospace" },
  { name: "Logistics", id: "logistics" },
  { name: "Smart Cities", id: "smart-cities" },
  { name: "Event Management", id: "event-management" },
  { name: "Mass Transportation", id: "mass-transportation" },
  { name: "Retail", id: "retail" },
  { name: "Travel & Tourism", id: "travel-tourism" },
];

const offeringsList = [
  // Facility Management Group
  { name: "Hard FM (Engineering)", href: "/services/facility-management/hard-fm", category: "Facility Management" },
  { name: "Soft FM (Sanitation)", href: "/services/facility-management/soft-fm", category: "Facility Management" },
  { name: "Energy & Sustainability", href: "/services/facility-management/energy-sustainability", category: "Facility Management" },
  { name: "Space & Workplace", href: "/services/facility-management/space-workplace", category: "Facility Management" },
  { name: "Compliance & Risk", href: "/services/facility-management/compliance-risk", category: "Facility Management" },
  { name: "Vendor & Supply Chain", href: "/services/facility-management/vendor-supply-chain", category: "Facility Management" },

  // Security Services Group
  { name: "Manned Guarding", href: "/services/security-services/manned-guarding", category: "Security Services" },
  { name: "Electronic Security", href: "/services/security-services/electronic-security", category: "Security Services" },
  { name: "Command & Control", href: "/services/security-services/command-control", category: "Security Services" },
  { name: "Specialized Protection", href: "/services/security-services/specialized-protection", category: "Security Services" },
  { name: "Risk Intelligence", href: "/services/security-services/risk-advisory", category: "Security Services" },
  { name: "Emerging Tech Intel", href: "/services/security-services/emerging-threat-tech", category: "Security Services" },

  // Modern Living Group
  { name: "Modern Living & Business", href: "/modern-living", category: "Modern Living" },
];

const capabilitiesList = [
  { name: "Physical Operations", id: "physical-ops" },
  { name: "Rapid Mobilization", id: "rapid-mobilization" },
  { name: "Fleet & Field Ops", id: "fleet-ops" },
  { name: "Event & VIP Protection", id: "event-vip" },
  { name: "Systems Integration", id: "systems-integration" },
  { name: "Critical Infrastructure", id: "critical-infra" },
  { name: "Strategic Advisory", id: "advisory-services" },
  { name: "Emergency Response", id: "emergency-response" },
  { name: "Future-Ready Tech", id: "future-ready" },
];

const solutionsList: { name: string; id?: string; href?: string }[] = [
  { name: "Comprehensive Solutions", id: "solutions-comprehensive" },
  { name: "Tailored Solutions", id: "tailored-solutions" },
  { name: "Modern Living & Business", href: "/modern-living" },
];

const scrollToSection = (hash: string) => {
  const element = document.getElementById(hash.substring(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface NavDropdownProps {
  label: string;
  href: string;
  items: { name: string; href: string; category?: string }[];
  onItemClick: (href: string) => void;
  onMainClick: (e: React.MouseEvent, href: string) => void;
}

const NavDropdown = ({ label, href, items, onItemClick, onMainClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  // Group items by category if any category exists
  const hasCategories = items.some(item => item.category);
  const categories = hasCategories
    ? Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[]
    : [];

  const isMultiColumn = items.length > 6 || hasCategories;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
        <DropdownMenuTrigger
          asChild
          className="outline-none"
        >
          <a
            href={href}
            onClick={(e) => onMainClick(e, href)}
            className="relative px-1.5 xl:px-2 2xl:px-3 py-2 text-sm xl:text-sm 2xl:text-base font-medium text-black hover:text-primary transition-colors duration-200 group cursor-pointer flex items-center outline-none"
          >
            {label}
            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`${isMultiColumn ? 'w-[450px] md:w-[500px] lg:w-[650px]' : 'w-56'} max-h-[600px] overflow-y-auto p-3`}
          align="start"
          sideOffset={8}
        >
          {hasCategories ? (
            <div className="grid grid-cols-2 gap-6">
              {categories.map(category => (
                <div key={category} className="flex flex-col gap-1">
                  <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-primary/70 border-b border-primary/10 pb-1">
                    {category}
                  </h3>
                  {items
                    .filter(item => item.category === category)
                    .map(item => (
                      <DropdownMenuItem
                        key={item.name}
                        onClick={() => onItemClick(item.href)}
                        className="cursor-pointer py-1.5 px-3 rounded-lg hover:bg-primary/5 focus:bg-primary/5 focus:text-primary transition-colors"
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                      </DropdownMenuItem>
                    ))
                  }
                </div>
              ))}
            </div>
          ) : (
            <div className={`${isMultiColumn ? 'grid grid-cols-2 gap-x-2' : 'flex flex-col'}`}>
              {items.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  onClick={() => onItemClick(item.href)}
                  className="cursor-pointer py-2 px-3 rounded-lg hover:bg-primary/5 focus:bg-primary/5 focus:text-primary transition-colors"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </DropdownMenuItem>
              ))}
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div >
  );
};

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        scrollToSection(href);
      } else {
        // Otherwise, navigate to home and then scroll after a short delay
        navigate('/');
        setTimeout(() => scrollToSection(href), 100);
      }
    } else {
      // Normal navigation
      setMobileMenuOpen(false);
      navigate(href);
    }
  };

  const handleDropdownItemClick = (href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      navigate(path);
      setTimeout(() => scrollToSection('#' + hash), 300);
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden ${scrolled || mobileMenuOpen
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-border/50 transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 max-w-full overflow-hidden">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="hidden md:flex items-center gap-3 lg:gap-6 text-black">
              <span className="whitespace-nowrap">ISO 9001:2015 Certified</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="whitespace-nowrap">Your Trusted Shield Since 1985</span>
            </div>
            <a href="tel:+917708887878" className="flex items-center gap-2 text-black ml-auto hover:text-primary transition-colors">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap text-[10px] sm:text-xs">+91 77088 87878</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-8 max-w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          <Link to="/" className="flex flex-col items-center gap-0.5 sm:gap-1 shrink-0">
            <img
              src={isiLogo}
              alt="ISI Security"
              className="transition-transform duration-300 group-hover:scale-105 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[180px] 2xl:w-[215px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1 shrink-0">
            {navItems.map((item) => {
              if (item.name === "Verticals") {
                return (
                  <NavDropdown
                    key={item.name}
                    label={item.name}
                    href={item.href}
                    items={verticalsList.map(v => ({ name: v.name, href: `/verticals#${v.id}` }))}
                    onItemClick={handleDropdownItemClick}
                    onMainClick={handleNavClick}
                  />
                )
              }
              if (item.name === "Offerings") {
                return (
                  <NavDropdown
                    key={item.name}
                    label={item.name}
                    href={item.href}
                    items={offeringsList}
                    onItemClick={handleDropdownItemClick}
                    onMainClick={handleNavClick}
                  />
                )
              }
              if (item.name === "Capabilities") {
                return (
                  <NavDropdown
                    key={item.name}
                    label={item.name}
                    href={item.href}
                    items={capabilitiesList.map(c => ({ name: c.name, href: `/capabilities#${c.id}` }))}
                    onItemClick={handleDropdownItemClick}
                    onMainClick={handleNavClick}
                  />
                )
              }
              if (item.name === "Solutions") {
                return (
                  <NavDropdown
                    key={item.name}
                    label={item.name}
                    href={item.href}
                    items={solutionsList.map(s => ({ 
                        name: s.name, 
                        href: s.href || `/solutions#${s.id}` 
                    }))}
                    onItemClick={handleDropdownItemClick}
                    onMainClick={handleNavClick}
                  />
                )
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-1.5 xl:px-2 2xl:px-3 py-2 text-sm xl:text-sm 2xl:text-base font-medium text-black hover:text-primary transition-colors duration-200 group cursor-pointer whitespace-nowrap block"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            })}
          </div>

          <div className="hidden xl:flex items-center gap-1.5 xl:gap-2 2xl:gap-3 shrink-0">
            <Link to="/contact">
              <Button size="sm" className="gap-1.5 xl:gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 whitespace-nowrap text-sm xl:text-sm 2xl:text-base px-3 xl:px-3 2xl:px-4 py-2">
                Contact Us
                <ArrowRight className="w-3 h-3 xl:w-3 2xl:w-4 xl:h-3 2xl:h-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 2xl:px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-md shadow-lg shadow-green-600/20 transition-colors text-sm xl:text-sm 2xl:text-base font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 xl:w-3 2xl:w-4 xl:h-3 2xl:h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
          <div className="py-3 sm:py-4 border-t border-border">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {navItems.map((item, index) => (
                <div key={item.name} style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-black hover:text-primary hover:bg-muted rounded-lg transition-all block flex justify-between items-center"
                  >
                    {item.name}
                  </a>
                  {/* Render simplified nested list for mobile */}
                  {item.name === "Offerings" && (
                    <div className="pl-4 sm:pl-6 bg-muted/20 border-l-2 border-primary/20 my-1">
                      {Array.from(new Set(offeringsList.map(off => off.category).filter(Boolean))).map(cat => (
                        <div key={cat} className="mb-2 last:mb-0">
                          <div className="px-3 py-1 text-[10px] font-bold text-primary/60 uppercase tracking-widest">{cat}</div>
                          {offeringsList.filter(off => off.category === cat).map(off => (
                            <a key={off.name} href="#" onClick={(e) => { e.preventDefault(); handleDropdownItemClick(off.href); }} className="block py-1.5 sm:py-2 px-3 sm:px-4 text-xs text-muted-foreground hover:text-primary transition-colors">
                              {off.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.name === "Capabilities" && (
                    <div className="pl-4 sm:pl-6 bg-muted/20 border-l-2 border-primary/20 my-1 grid grid-cols-2 gap-0.5 sm:gap-1 max-h-60 overflow-y-auto">
                      {capabilitiesList.map((c) => (
                        <a key={c.name} href="#" onClick={(e) => { e.preventDefault(); handleDropdownItemClick(`/capabilities#${c.id}`); }} className="block py-1.5 sm:py-2 px-3 sm:px-4 text-xs text-muted-foreground hover:text-primary transition-colors">
                          {c.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {item.name === "Solutions" && (
                    <div className="pl-4 sm:pl-6 bg-muted/20 border-l-2 border-primary/20 my-1 grid grid-cols-2 gap-0.5 sm:gap-1 max-h-60 overflow-y-auto">
                      {solutionsList.map((s) => (
                        <a key={s.name} href="#" onClick={(e) => { e.preventDefault(); handleDropdownItemClick(s.href || `/solutions#${s.id}`); }} className="block py-1.5 sm:py-2 px-3 sm:px-4 text-xs text-muted-foreground hover:text-primary transition-colors">
                          {s.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {item.name === "Verticals" && (
                    <div className="pl-4 sm:pl-6 bg-muted/20 border-l-2 border-primary/20 my-1 grid grid-cols-2 gap-0.5 sm:gap-1 max-h-60 overflow-y-auto">
                      {verticalsList.map(v => (
                        <a key={v.name} href="#" onClick={(e) => { e.preventDefault(); handleDropdownItemClick(`/verticals#${v.id}`); }} className="block py-1.5 sm:py-2 px-3 sm:px-4 text-xs text-muted-foreground hover:text-primary transition-colors">
                          {v.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4 px-3 sm:px-4 pb-3 sm:pb-4">
                <Link to="/contact" className="flex-1">
                  <Button size="sm" className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button size="sm" className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
