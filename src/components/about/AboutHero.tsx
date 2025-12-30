import { PageHero } from "../PageHero";

const aboutHeroSlides = [
    {
        badge: "Since 1985",
        title: "Securing the Future of",
        highlight: "Business",
        titleEnd: "",
        description: "40+ years of excellence in security and intelligence services, protecting India's ₹55 Trillion economy with advanced technology-driven solutions.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/70"
    },
    {
        badge: "Our Leadership",
        title: "Guided by",
        highlight: "Experience",
        titleEnd: "& Expertise",
        description: "Led by decorated ex-defence professionals and industry veterans with deep expertise in security operations, governance, and strategic growth.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/70"
    },
    {
        badge: "Our Values",
        title: "Integrity,",
        highlight: "Vigilance",
        titleEnd: "& Excellence",
        description: "Honesty and transparency are the bedrock of our operations. We don't settle for 'good enough' - we aim for perfection in everything we do.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/70"
    },
    {
        badge: "Our Impact",
        title: "Trusted by",
        highlight: "500+ Enterprises",
        titleEnd: "",
        description: "Serving clients across India with ISO 9001:2015 certified services, pan-India coverage, and 24/7 security operations.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/70"
    }
];

export const AboutHero = () => {
    return <PageHero slides={aboutHeroSlides} />;
};
