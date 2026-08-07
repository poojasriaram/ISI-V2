import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SmallCTAProps {
    text: string;
    buttonText: string;
    link: string;
}

export const SmallCTA = ({ text, buttonText, link }: SmallCTAProps) => {
    const handleClick = () => {
        if (link.startsWith("#")) {
            document.getElementById(link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ButtonContent = (
        <Button
            size="lg"
            className="px-10 py-7 text-lg group-hover:scale-105 transition-transform shadow-xl shadow-primary/20"
        >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
    );

    return (
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group mt-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 relative z-10">{text}</h3>

            <div className="relative z-10 inline-block">
                {link.startsWith("#") ? (
                    <div onClick={handleClick} className="cursor-pointer">
                        {ButtonContent}
                    </div>
                ) : (
                    <Link to={link || "/contact"}>
                        {ButtonContent}
                    </Link>
                )}
            </div>
        </div>
    );
};
