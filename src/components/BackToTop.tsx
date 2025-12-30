import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
                    aria-label="Back to top"
                >
                    <ArrowUp className="h-5 w-5" />
                </Button>
            )}
        </>
    );
};
