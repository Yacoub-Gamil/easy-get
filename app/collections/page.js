import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Link from "next/link";
import ProductsList from "../_components/products/ProductsList";

async function page({ searchParams }) {
  const searParams = await searchParams;
  const active = (await searParams?.category) ?? "all";

  return (
    <section className=" mb-[6rem]">
      <ProductsList active={active} />
    </section>
  );
}

export default page;
