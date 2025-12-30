import { benefits } from "@/data/career-data";

export const Benefits = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {benefits.map((item, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};
