
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CategoryNavigation from "@/components/CategoryNavigation";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductSection from "@/components/ProductSection";
import TrendingSection from "@/components/TrendingSection";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { tshirts, hoodies } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <CategoryNavigation />
        <FeaturedCollections />
        <ProductSection title="T-Shirts" products={tshirts} category="tshirts" />
        <TrendingSection />
        <ProductSection title="Hoodies" products={hoodies} category="hoodies" />
        <NewsletterBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
