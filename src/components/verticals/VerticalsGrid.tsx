import { MousePointerClick, ArrowUpRight } from "lucide-react";
import { verticalsList as verticals } from "@/data/verticals-data";

interface VerticalsGridProps {
    isSidebar: boolean;
    activeVertical: string;
    onVerticalClick: (name: string) => void;
}

export const VerticalsGrid = ({ isSidebar, activeVertical, onVerticalClick }: VerticalsGridProps) => {
    return (
        <div className={`flex flex-nowrap overflow-x-auto gap-4 p-4 custom-scrollbar ${isSidebar ? 'flex-col overflow-x-hidden overflow-y-auto' : ''}`}>
            {verticals.map((vertical, index) => (
                <div
                    key={index}
                    onClick={() => onVerticalClick(vertical.name)}
                    className={`group relative flex-shrink-0 min-w-[140px] md:min-w-[160px] ${isSidebar ? 'w-full p-3' : 'p-4'} rounded-xl bg-card/60 backdrop-blur-sm hover:bg-primary/10 border border-border/50 hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden ${activeVertical === vertical.name ? 'ring-2 ring-primary bg-primary/10' : ''}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h3 className={`font-bold text-foreground ${isSidebar ? 'text-sm' : 'text-base lg:text-lg'} text-center group-hover:text-primary transition-colors line-clamp-2`}>{vertical.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};
