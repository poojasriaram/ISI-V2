import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const Layout = ({ children, className, noPadding = false }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-[100vw]">

            <Header />
            <main className={cn(
                "flex-grow overflow-x-hidden w-full",
                !noPadding && "pt-32", // Default top padding for fixed header (approx 120px)
                className
            )}>
                {children}
            </main>
            <Footer />
        </div>
    );
};
