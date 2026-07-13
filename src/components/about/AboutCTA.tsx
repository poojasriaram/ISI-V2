import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const AboutCTA = () => {
    return (
        <div className="py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.webp')] opacity-10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Secure Your Future?</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
                    Join the hundreds of industry leaders who trust us with their most valuable assets.
                </p>
                <Button variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-full group" onClick={() => window.open('https://wa.me/917708887878?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20security%20solutions.', '_blank')}>
                    Contact Us Today
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Button>
            </div>
        </div>
    );
};
