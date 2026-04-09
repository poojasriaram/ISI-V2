import { Layout } from "@/components/Layout";
import { Career } from "@/components/Career";
import { useContentProtection } from "@/hooks/useContentProtection";
import { JobMap } from "@/components/JobMap";
import { homeLocations } from "@/data/locations-data";

const CareersPage = () => {
    useContentProtection();
    return (
        <Layout>
            <Career />
        </Layout>
    );
};

export default CareersPage;

