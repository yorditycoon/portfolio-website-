import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HighlightReel } from "@/components/HighlightReel";
import { CTASection } from "@/components/CTASection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mickey GHiwot </title>
        <meta
          name="description"
          content="Professional videography and video editing services for weddings, events, model shoots, and digital marketing content. Based in Tigray, Mekelle."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HighlightReel />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
