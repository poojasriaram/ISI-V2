import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAPanelProps {
    text: string;
    buttonText: string;
    link: string;
}

export const CTAPanel = ({ text, buttonText, link }: CTAPanelProps) => {
    const isExternal = link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('https://wa.me');

    return (
        <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                {text}
            </p>
            {isExternal ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
                    >
                        {buttonText}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
            ) : (
                <Link to={link}>
                    <Button
                        size="lg"
                        className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
                    >
                        {buttonText}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            )}
        </div>
    );
};
