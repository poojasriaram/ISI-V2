import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
    hideHeaderFooter?: boolean;
}

export const Layout = ({ children, className, noPadding = false, hideHeaderFooter = false }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-[100vw]">

            {!hideHeaderFooter && <Header />}
            <main className={cn(
                "flex-grow overflow-x-hidden w-full",
                !noPadding && "pt-24 md:pt-32", // Default top padding for fixed header
                className
            )}>
                {children}
            </main>
            {!hideHeaderFooter && <FloatingCTA />}
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};
