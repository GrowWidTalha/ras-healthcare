import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import Blog from "@/components/sections/Blog";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <FeaturedProducts />
        <WhyUs />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
