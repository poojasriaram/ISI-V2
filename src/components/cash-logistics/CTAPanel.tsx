import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAPanelProps {
    text: string;
    buttonText: string;
    link: string;
}

export const CTAPanel = ({ text, buttonText, link }: CTAPanelProps) => {
    return (
        <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                {text}
            </p>
            <Link to={link}>
                <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
    );
};
