import { Layout } from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You - ISI Security";
  }, []);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center pt-[96px] bg-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your inquiry has been successfully received. Our team will get back to you shortly.
          </p>
          <Link to="/">
            <Button className="bg-[#1a56db] hover:bg-[#1e40af] text-white text-base py-6 px-8 rounded-md shadow-md transition-all">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
