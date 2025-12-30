import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { HomeStats } from "@/components/HomeStats";
import { Services } from "@/components/Services";
import { CommandCenters } from "@/components/CommandCenters";
import { Partners } from "@/components/Partners";
import { Solutions } from "@/components/Solutions";
import { Customers } from "@/components/Customers";
import { JobMap } from "@/components/JobMap";

const homeLocations = [
  { id: "1", title: "Corporate Office", city: "Chennai", region: "South", lat: 13.0368, lng: 80.2116, address: ["No. 9, First Floor, Kamarajar Salai", "Ashok Nagar, Chennai – 600 083"] },
  { id: "2", title: "Administrative Office", city: "Madurai", region: "South", lat: 9.9252, lng: 78.1198, address: ["12-9, Santhosh Raj Plaza", "Gandhi Nagar, Madurai – 625 020"] },
  { id: "3", title: "Delhi", city: "Noida", region: "North", lat: 28.5823, lng: 77.3871, address: ["B-702, Grand Ajnara Heritage", "Sector-74, Noida, New Delhi"] },
  { id: "4", title: "Andhra Pradesh", city: "Nagari", region: "South", lat: 13.3320, lng: 79.5842, address: ["No 2 Akn Layout", "Chennai–Tirupathi Bye Pass, Nagari"] },
  { id: "5", title: "Karnataka", city: "Bangalore", region: "South", lat: 12.9015, lng: 77.6225, address: ["No. 36, First Main Road", "Kodichikkanahalli, Bangalore – 560 076"] },
  { id: "6", title: "Telangana", city: "Hyderabad", region: "South", lat: 17.3392, lng: 78.5688, address: ["H.No. B-1228, NGO Colony", "Vanasthalipuram, Hyderabad – 500 070"] },
  { id: "7", title: "Kerala", city: "Kannur", region: "South", lat: 11.8745, lng: 75.3704, address: ["No.12/498, K.V. Building", "Kannur Post, Kannur – 670 005"] },
  { id: "8", title: "Tamil Nadu", city: "Thoothukudi", region: "South", lat: 8.7642, lng: 78.1348, address: ["No. 16J/3, JP Dhanam Complex", "Jeyalani Colony, Thoothukudi – 628 008"] },
  { id: "9", title: "Tamil Nadu", city: "Coimbatore", region: "South", lat: 10.9984, lng: 77.0163, address: ["No: 5, Kakkan Nagar", "Singanallur, Coimbatore – 641005"] },
  { id: "10", title: "Puducherry", city: "Karaikal", region: "South", lat: 10.9254, lng: 79.8380, address: ["No. 43, Ambuthital Thirupattinam", "Polagam, Karaikal – 609606"] }
];

const Index = () => {
  return (
    <Layout noPadding={true}>
      <Hero />
      <HomeStats />
      <Services />
      <CommandCenters />
      <Solutions />
      <Customers />

      {/* Map Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 left-10 p-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl max-w-sm">
            <h3 className="text-2xl font-bold mb-2">Pan-India Presence</h3>
            <p className="text-muted-foreground">
              Strategic hubs and operational centers covering every major region, ensuring rapid response and local expertise.
            </p>
          </div>
        </div>
        <JobMap locations={homeLocations} activeCity={null} />
      </section>

      <Partners />
    </Layout>
  );
};

export default Index;
