import { getServerSession } from "next-auth";
import HeroSection from "./_components/heroSection/HeroSection";
import PopularProducts from "./_components/heroSection/PopularProducts";
import { authOptions } from "./_lib/nextAuth";

async function page() {

  return (
    <>
      <HeroSection />
      <PopularProducts />
    </>
  );
}

export default page;
