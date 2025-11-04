import { DiscoveryPage } from "@/components/discovery/DiscoveryPage";
import Footer from "@/components/discovery/Footer";

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <DiscoveryPage />
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
