import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StoreHighlight } from "@/components/StoreHighlight";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import  {FloatingContactButton}  from "@/components/FloatingContactButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedCollection />
        <WhyChooseUs />
        <StoreHighlight />
        <CTASection />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;