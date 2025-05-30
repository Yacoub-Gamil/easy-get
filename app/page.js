import HeroSection from "./_components/heroSection/HeroSection";
import PopularProducts from "./_components/heroSection/PopularProducts";

async function page() {
  return (
    <div>
      <HeroSection />
      <PopularProducts />
    </div>
  );
}

export default page;
