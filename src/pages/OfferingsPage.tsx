import { Layout } from "@/components/Layout";
import { OfferingStack } from "@/components/OfferingStack";
import { useContentProtection } from "@/hooks/useContentProtection";

const OfferingsPage = () => {
    useContentProtection();
    return (
        <Layout>
            <OfferingStack />
        </Layout>
    );
};

export default OfferingsPage;

