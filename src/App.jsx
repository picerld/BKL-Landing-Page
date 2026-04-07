import BrandSection from "./components/BrandSection";
import ChoiceSection from "./components/ChoiceSection";
import ContactSection from "./components/ContactSection";
import { CTASection } from "./components/CtaSection";
import EcosystemSection from "./components/EcosystemSection";
import FAQSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import LayananSection from "./components/LayananSection";
import ProductSection from "./components/ProductSection";
import ServiceSection from "./components/ServiceSection";
import TestimoniSection from "./components/TestimoniSection";

function App() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ChoiceSection />
      <ProductSection />
      <LayananSection />
      {/* <EcosystemSection /> */}
      <TestimoniSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}

export default App;
