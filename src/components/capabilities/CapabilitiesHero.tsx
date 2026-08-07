import { PageHero } from "../PageHero";

const capabilitiesHeroSlides = [
    {
        badge: "Technology-Driven Security",
        title: "Advanced",
        highlight: "Capabilities",
        titleEnd: "for Modern Threats",
        description: "Comprehensive security solutions powered by AI, IoT, and cutting-edge technology to protect your business in an evolving threat landscape.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "AI & Analytics",
        title: "Intelligent",
        highlight: "Monitoring",
        titleEnd: "& Response",
        description: "AI-powered video analytics, predictive threat detection, and real-time incident response with 24/7 Security Operations Center.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "IoT & Integration",
        title: "Connected",
        highlight: "Security",
        titleEnd: "Ecosystem",
        description: "Seamless integration of access control, CCTV, sensors, and building management systems into a unified command platform.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    },
    {
        badge: "Compliance & Governance",
        title: "Regulatory",
        highlight: "Excellence",
        titleEnd: "",
        description: "ISO 9001:2015 certified operations with RBI compliance, POCSO protocols, and comprehensive audit trails for complete regulatory adherence.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
        overlay: "from-background via-background/95 to-background/60"
    }
];

export const CapabilitiesHero = () => {
    return <PageHero slides={capabilitiesHeroSlides} />;
};
