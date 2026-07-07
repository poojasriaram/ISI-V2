import { MessageCircle, PhoneCall, Mail, CalendarPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingCTA = () => {
  return (
    <>
      {/* Desktop Floating CTA (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* Request Consultation */}
        <Link
          to="/contact"
          className="group relative flex items-center gap-3 px-6 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.03]"
        >
          <CalendarPlus className="w-5 h-5" />
          <span className="font-semibold text-sm">Request Consultation</span>
        </Link>
        
      </div>

      {/* Mobile Sticky CTA (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex h-16 items-center">
          {/* Call */}
          <a href="tel:+917708887878" className="flex-1 flex flex-col items-center justify-center gap-1 h-full hover:bg-muted/50 transition-colors border-r border-border/50">
            <PhoneCall className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-semibold text-foreground">Call</span>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 h-full hover:bg-muted/50 transition-colors border-r border-border/50"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="text-[10px] font-semibold text-foreground">WhatsApp</span>
          </a>

          {/* Enquire Now */}
          <Link to="/contact" className="flex-1 flex flex-col items-center justify-center gap-1 h-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Enquire Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};
