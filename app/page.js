import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchCard from "@/components/SearchCard";
import FeatureStrip from "@/components/FeatureStrip";
import TopUniversities from "@/components/TopUniversities";
import HowItWorks from "@/components/HowItWorks";
import SupportBanner from "@/components/SupportBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCard />
        <FeatureStrip />
        <TopUniversities />
        <HowItWorks />
        <SupportBanner />
      </main>
      <Footer />
    </>
  );
}
