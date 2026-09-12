import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall, Mail, FileText, Send, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { FloatingLeadForm } from "@/components/FloatingLeadForm";

export const FloatingCTA = () => {
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setIsFormOpen(true);
    window.addEventListener("open-lead-form", handleOpenForm);
    return () => window.removeEventListener("open-lead-form", handleOpenForm);
  }, []);

  const pathname = location.pathname.toLowerCase();

  // ═══════════════════════════════════════════════════════════════════════════
  // FORM EXCEPTIONS:
  // The global floating form must NOT appear on:
  // A. ISI Academy (/academy)
  // B. Career (/career)
  // C. Training (/courses)
  // D. Integrated Services (/lp/facility-management and aliases)
  // ═══════════════════════════════════════════════════════════════════════════
  const isAcademy = pathname.startsWith('/academy');
  const isCareer = pathname.startsWith('/career');
  const isTraining = pathname.startsWith('/courses');
  const isIntegratedServices = 
    pathname.startsWith('/lp/facility-management') ||
    pathname.startsWith('/integratedservices') ||
    pathname.startsWith('/integrated-services') ||
    pathname.startsWith('/salesinquiry') ||
    pathname.startsWith('/sales-inquiry');

  if (isAcademy || isCareer || isTraining || isIntegratedServices) {
    return null;
  }

  return (
    <>
      {/* Desktop Floating CTA Button (Bottom Right, Left of ChatBot) */}
      <div className="hidden md:flex fixed bottom-6 right-24 z-40 items-center gap-3">
        {/* Get in Touch Button (Opens Global Floating Lead Form) */}
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="group relative flex items-center gap-2.5 px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-white/20"
        >
          <Mail className="w-4 h-4 text-primary-foreground" />
          <span className="font-semibold text-sm tracking-wide">Get in Touch</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Mobile Sticky CTA (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border/60 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe">
        <div className="flex h-16 items-center">
          {/* Call */}
          <a 
            href="tel:+917708887878" 
            className="flex-1 flex flex-col items-center justify-center gap-1 h-full hover:bg-muted/50 transition-colors border-r border-border/50"
          >
            <PhoneCall className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-semibold text-foreground">Call Us</span>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 h-full hover:bg-muted/50 transition-colors border-r border-border/50"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-[11px] font-semibold text-foreground">WhatsApp</span>
          </a>

          {/* Enquire Now (Opens Compact Floating Lead Form) */}
          <button 
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 h-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[11px] font-semibold">Enquire Now</span>
          </button>
        </div>
      </div>

      {/* Global Compact Lead Form Modal */}
      <FloatingLeadForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};
