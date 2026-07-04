import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Looking for a Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Security Partner?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Schedule a consultation with our experts and discover the right integrated security solution for your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform rounded-full group"
              onClick={() => navigate("/contact")}
            >
              Get Your Free Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base h-16 px-10 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full group"
              onClick={() => navigate("/contact")}
            >
              <PhoneCall className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call for Immediate Support
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
            <span>No obligation.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span>100% Confidential.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
