import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight, MessageCircle, Shield, Briefcase, Building2, UserCheck, ShieldCheck, HeartPulse, GraduationCap, Banknote, Plane, Truck, Zap, Laptop, Activity, Cog, Users, Search, Target, HeadphonesIcon, Network, ShieldAlert, Key } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  { name: "School & Education", id: "education", desc: "Campus security & safety", icon: GraduationCap },
  { name: "Banking & Finance", id: "bfsi", desc: "Asset & branch protection", icon: Banknote },
  { name: "Manufacturing", id: "manufacturing", desc: "Industrial facility security", icon: Cog },
  { name: "Healthcare", id: "healthcare", desc: "Hospital & clinic safety", icon: HeartPulse },
  { name: "Cash Logistics", id: "cash-logistics", desc: "Secure transit solutions", icon: Truck },
  { name: "GCC / IT Parks", id: "gcc-it-parks", desc: "Tech park access control", icon: Laptop },
  { name: "Aerospace", id: "aerospace", desc: "High-security facility ops", icon: Plane },
  { name: "Smart Cities", id: "smart-cities", desc: "Urban surveillance", icon: Activity },
  { name: "Event Management", id: "event-management", desc: "Crowd control & safety", icon: Users },
  { name: "Retail", id: "retail", desc: "Loss prevention", icon: Building2 },
];

const offeringsList = [
  // Facility Management Group
  { name: "Hard FM (Engineering)", href: "/services/facility-management/hard-fm", category: "Facility Management", desc: "Technical maintenance & engineering", icon: Cog },
  { name: "Soft FM (Sanitation)", href: "/services/facility-management/soft-fm", category: "Facility Management", desc: "Cleaning, housekeeping & hygiene", icon: Briefcase },
  { name: "Energy & Sustainability", href: "/services/facility-management/energy-sustainability", category: "Facility Management", desc: "Green initiatives & energy mgmt", icon: Zap },
  { name: "Space & Workplace", href: "/services/facility-management/space-workplace", category: "Facility Management", desc: "Office layout & environment", icon: Building2 },
  { name: "Compliance & Risk", href: "/services/facility-management/compliance-risk", category: "Facility Management", desc: "Regulatory adherence & auditing", icon: ShieldCheck },

  // Security Services Group
  { name: "Manned Guarding", href: "/services/security-services/manned-guarding", category: "Security Services", desc: "Trained security personnel", icon: UserCheck },
  { name: "Electronic Security", href: "/services/security-services/electronic-security", category: "Security Services", desc: "CCTV, access & alarms", icon: Network },
  { name: "Command & Control", href: "/services/security-services/command-control", category: "Security Services", desc: "Centralized monitoring hub", icon: Activity },
  { name: "Specialized Protection", href: "/services/security-services/specialized-protection", category: "Security Services", desc: "Executive & VIP guarding", icon: Shield },
  { name: "Risk Intelligence", href: "/services/security-services/risk-advisory", category: "Security Services", desc: "Threat assessment & consulting", icon: Search },
];

const capabilitiesList = [
  { name: "Physical Operations", id: "physical-ops", desc: "On-ground deployment force", icon: Users },
  { name: "Rapid Mobilization", id: "rapid-mobilization", desc: "Quick incident response", icon: Zap },
  { name: "Fleet & Field Ops", id: "fleet-ops", desc: "Mobile patrol units", icon: Truck },
  { name: "Event & VIP Protection", id: "event-vip", desc: "High-profile security", icon: ShieldAlert },
  { name: "Systems Integration", id: "systems-integration", desc: "Unified tech platforms", icon: Network },
  { name: "Critical Infrastructure", id: "critical-infra", desc: "Protecting vital assets", icon: Building2 },
  { name: "Strategic Advisory", id: "advisory-services", desc: "Expert security consulting", icon: Target },
  { name: "Emergency Response", id: "emergency-response", desc: "24/7 crisis management", icon: HeadphonesIcon },
];

const solutionsList: { name: string; id?: string; href?: string; desc?: string; icon?: any }[] = [
  { name: "Comprehensive Solutions", id: "solutions-comprehensive", desc: "End-to-end security programs", icon: Shield },
  { name: "Tailored Solutions", id: "tailored-solutions", desc: "Industry-specific strategies", icon: Target },
  { name: "Modern Living & Business", href: "/modern-living", desc: "Residential & corporate spaces", icon: Key },
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
  items: { name: string; href: string; category?: string; desc?: string; icon?: any }[];
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
    }, 150);
  };

  const hasCategories = items.some(item => item.category);
  const categories = hasCategories
    ? Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[]
    : [];

  const [activeCategory, setActiveCategory] = useState(categories[0] || '');
  const isMultiColumn = items.length > 6 || hasCategories;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <a
        href={href}
        onClick={(e) => onMainClick(e, href)}
        className={`relative px-2 2xl:px-3 py-6 text-sm 2xl:text-base font-medium transition-colors duration-200 flex items-center outline-none ${isOpen ? 'text-primary' : 'text-black hover:text-primary'}`}
      >
        {label}
        <span className={`absolute bottom-4 left-2 right-2 h-0.5 bg-primary transition-transform duration-300 origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0'}`} />
      </a>

      {/* Mega Menu Container */}
      <div 
        className={`absolute top-full -translate-x-1/3 pt-2 transition-all duration-300 ease-out z-50 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        style={{ width: isMultiColumn ? '750px' : '280px' }}
      >
        <div className="bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex">
          
          {hasCategories ? (
            <div className="flex flex-1">
              {/* Left Sidebar (Categories) */}
              <div className="w-1/3 bg-muted/20 border-r border-border/50 flex flex-col p-4 gap-1">
                <div className="mb-4 px-3">
                  <h3 className="text-xl font-bold text-foreground">{label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">Explore our capabilities</p>
                </div>
                {categories.map(category => (
                  <button
                    key={category}
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`flex items-center justify-between text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeCategory === category 
                        ? 'bg-card shadow-sm font-semibold text-primary' 
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    <span className="text-sm">{category}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-opacity ${activeCategory === category ? 'opacity-100' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>

              {/* Right Content Area (Items) */}
              <div className="w-2/3 p-6 flex flex-col">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
                  {items
                    .filter(item => item.category === activeCategory)
                    .map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); onItemClick(item.href); }}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                           {item.icon && (
                            <div className="text-primary/70 group-hover:text-primary transition-colors">
                              <item.icon className="w-4 h-4" />
                            </div>
                           )}
                           <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ))
                  }
                </div>
                
                {/* Bottom CTA within items area */}
                <div className="mt-6 p-4 bg-muted/30 rounded-xl flex items-center justify-between border border-border/50">
                  <span className="text-sm text-muted-foreground">Need help choosing the right services?</span>
                  <Button size="sm" onClick={() => onItemClick('/contact')} className="h-8 text-xs px-4">Contact Us</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className={`p-6 flex-1 ${isMultiColumn ? 'grid grid-cols-2 gap-x-8 gap-y-6' : 'flex flex-col gap-2'}`}>
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); onItemClick(item.href); }}
                  className="group flex items-start gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  {item.icon && (
                    <div className="mt-0.5 p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                    {item.desc && <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.desc}</div>}
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Featured CTA Card Area (Only for non-categorized large menus) */}
          {isMultiColumn && !hasCategories && (
            <div className="w-[250px] bg-muted/30 p-6 border-l border-border/50 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">Need Help Choosing?</h4>
                <p className="text-sm text-muted-foreground mb-6">Our security experts can tailor a solution to fit your unique enterprise needs.</p>
              </div>
              <Button onClick={() => onItemClick('/contact')} className="w-full gap-2 relative z-10 hover:scale-[1.02] transition-transform">
                Talk to Experts
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen
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
            <img loading="lazy"
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
                    items={verticalsList.map(v => ({ name: v.name, href: `/verticals#${v.id}`, desc: v.desc, icon: v.icon }))}
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
                    items={capabilitiesList.map(c => ({ name: c.name, href: `/capabilities#${c.id}`, desc: c.desc, icon: c.icon }))}
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
                        href: s.href || `/solutions#${s.id}`,
                        desc: s.desc,
                        icon: s.icon
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
              <Button size="sm" className="gap-1.5 xl:gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 whitespace-nowrap text-sm xl:text-sm 2xl:text-base px-5 xl:px-5 2xl:px-6 py-4 rounded-full font-bold">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
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
