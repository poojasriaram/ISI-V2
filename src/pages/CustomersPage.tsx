import { useEffect } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Customers } from "@/components/Customers";

export const CustomersPage = () => {
    useContentProtection();
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Customers />
        </Layout>
    );
};

export default CustomersPage;
