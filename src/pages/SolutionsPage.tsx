import { useEffect } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Solutions } from "@/components/Solutions";

export const SolutionsPage = () => {
    useContentProtection();
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Solutions />
        </Layout>
    );
};

export default SolutionsPage;
