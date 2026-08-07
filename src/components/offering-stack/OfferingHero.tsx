import { PageHero } from "../PageHero";

const offeringsHeroSlides = [
    {
        badge: "Core Security Solutions",
        title: "Integrated Physical &",
        highlight: "Digital Security",
        titleEnd: "",
        description: "From guarding to cyber-physical convergence - comprehensive protection with AI-driven monitoring, access control, and 24/7 SOC services.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Facility Evolution",
        title: "Smart Building",
        highlight: "Intelligence",
        titleEnd: "",
        description: "Transform traditional maintenance into autonomous AI-driven ecosystems with IoT sensors, predictive analytics, and digital twin technology.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "DCIM & Optimization",
        title: "Data Center",
        highlight: "Infrastructure",
        titleEnd: "Management",
        description: "Next-gen management for hyperscalers with real-time PUE optimization, thermal mapping, and self-healing AI systems.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    }
];

export const OfferingHero = () => {
    return <PageHero slides={offeringsHeroSlides} />;
};
