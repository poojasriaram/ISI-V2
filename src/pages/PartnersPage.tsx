import { useEffect } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Partners } from "@/components/Partners";
import { TenderRFQ } from "@/components/partners/TenderRFQ";

export const PartnersPage = () => {
    useContentProtection();
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Partners />
            <TenderRFQ />
        </Layout>
    );
};

export default PartnersPage;
