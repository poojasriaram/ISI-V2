import { useEffect } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Solutions } from "@/components/Solutions";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";

export const SolutionsPage = () => {
    useContentProtection();
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <SolutionsHero />
            <Solutions />
        </Layout>
    );
};

export default SolutionsPage;
