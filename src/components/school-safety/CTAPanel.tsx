import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface CTAPanelProps {
    title: string;
    subtitle: string;
    points: string[];
    buttonText: string;
    onSubmit?: () => void;
}

export const CTAPanel = ({ title, subtitle, points, buttonText, onSubmit }: CTAPanelProps) => {
    return (
        <div className="text-white">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 opacity-60">Final Protocol</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9]">{title}</h3>
            <p className="text-xl text-blue-100/80 mb-12 max-w-md leading-relaxed">
                {subtitle}
            </p>
            <div className="space-y-4">
                {points.map(point => (
                    <div key={point} className="flex items-center gap-4 py-4 border-b border-white/10">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <CheckCircle2 size={16} className="text-blue-200" />
                        </div>
                        <span className="font-bold text-lg">{point}</span>
                    </div>
                ))}
            </div>
            {onSubmit && (
                <div className="mt-12 lg:hidden">
                    <Button onClick={onSubmit} size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100 h-16 rounded-2xl text-lg font-bold">
                        {buttonText}
                    </Button>
                </div>
            )}
        </div>
    );
};
