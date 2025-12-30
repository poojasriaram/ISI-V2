import { useEffect } from 'react';
import { Layout } from "@/components/Layout";
import { Contact } from "@/components/Contact";

export const ContactPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;

