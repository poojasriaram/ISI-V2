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
  { name: "Capabilities", href: "/capabilities" },
  { name: "Solutions", href: "/solutions" },
  { name: "Customers", href: "/customers" },
  { name: "Partners", href: "/partners" },
  { name: "Careers", href: "/career" },
];

// New industry verticals list for the dropdown
const verticalsList = [
  { name: "Secure Value Logistics", id: "logistics" },
  { name: "Hotels & Event Management", id: "hospitality" },
  { name: "BFSI Sector", id: "bfsi" },
  { name: "Education & Higher Education", id: "education" },
  { name: "Manufacturing & Defence", id: "manufacturing" },
  { name: "Healthcare & Facility Management", id: "healthcare" },
  { name: "Aerial Intelligence & Drones", id: "drones" },
];

const offeringsList = [
  { name: "Core Security", href: "/offerings#core-security" },
  { name: "Facility Evolution", href: "/offerings#facility-evolution" },
  { name: "DCIM", href: "/offerings#dcim" },
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
  items: { name: string; href: string }[];
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
            className="relative px-3 py-2 text-sm font-medium text-black hover:text-primary transition-colors duration-200 group cursor-pointer flex items-center outline-none"
          >
            {label}
            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 max-h-[400px] overflow-y-auto"
          align="start"
          sideOffset={8}
        >
          {items.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={() => onItemClick(item.href)}
              className="cursor-pointer"
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden ${scrolled || mobileMenuOpen
        ? "bg-background shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-border/50 transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 lg:px-16 max-w-full overflow-hidden">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="hidden md:flex items-center gap-6 text-black">
              <span>ISO 9001:2015 Certified</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Since 1985</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <Phone className="w-3 h-3" />
              <span> +91 99444 99988 </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 lg:px-16 max-w-full overflow-hidden">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-center gap-1">
            <img
              src={isiLogo}
              alt="ISI Security"
              className="transition-transform duration-300 group-hover:scale-105"
              style={{ width: '215px', height: '60px' }}
            />
            <p className="text-[11px] text-[#0202fa] font-bold tracking-wide">
              Your Trusted Shield Since 1985
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
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
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-3 py-2 text-sm font-medium text-black hover:text-primary transition-colors duration-200 group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <Link to="/contact">
              <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/919944499988?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-md shadow-lg shadow-green-600/20 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={item.name} style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 text-sm font-medium text-black hover:text-primary hover:bg-muted rounded-lg transition-all block flex justify-between items-center"
                  >
                    {item.name}
                  </a>
                  {/* Render simplistic nested list for mobile if needed for Offerings/Verticals */}
                  {item.name === "Offerings" && (
                    <div className="pl-6 bg-muted/20 border-l-2 border-primary/20 my-1">
                      {offeringsList.map(off => (
                        <a key={off.name} href="#" onClick={(e) => { e.preventDefault(); handleDropdownItemClick(off.href); }} className="block py-2 px-4 text-xs text-muted-foreground hover:text-primary transition-colors">
                          {off.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-2 mt-4 px-4 pb-4">
                <Link to="/contact" className="flex-1">
                  <Button size="sm" className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919944499988?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button size="sm" className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
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
