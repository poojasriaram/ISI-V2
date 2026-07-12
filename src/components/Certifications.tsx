import { Award, CheckCircle2 } from "lucide-react";
import ISO from "@/assets/ISO.png";
import PSARA from "@/assets/PSARA.png";
import RBI from "@/assets/RBI.png";
import DGCA from "@/assets/DGCA.png";


const certifications = [
    {
        name: "ISO 9001:2015",
        description: "Quality Management System",
        image: ISO,
    },
    {
        name: "PSARA Licensed",
        description: "Private Security Agency",
        image: PSARA,
    },
    {
        name: "RBI Empanelled",
        description: "Reserve Bank of India",
        image: RBI,
    },
    {
        name: "DGCA Approved",
        description: "Aviation Security",
        image: DGCA,
    },
];

export const Certifications = () => {
    return (
        <section className="py-10 bg-gradient-to-br from-primary/5 via-background to-blue-50/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Accreditations & Certifications</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Trusted & Certified Excellence
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our commitment to quality and compliance is validated by leading industry certifications
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative text-center">
                                {/* Certification Image */}
                                <div className="w-full h-32 flex items-center justify-center mb-6 overflow-hidden">
                                    <img loading="lazy"
                                        src={cert.image}
                                        alt={cert.name}
                                        width="160"
                                        height="128"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {cert.description}
                                </p>

                                {/* Verified badge */}
                                <div className="flex items-center justify-center gap-2 text-xs text-primary font-medium">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Verified & Active</span>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        All certifications are regularly audited and maintained to ensure the highest standards of service delivery
                    </p>
                </div>
            </div>
        </section>
    );
};
