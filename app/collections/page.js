import ProductsList from "../_components/products/ProductsList";

export const metadata = {
  title: "Collection",
};

async function page({ searchParams }) {
  const searParams = await searchParams;
  const active = (await searParams?.category) ?? "all";

  return (
    <section className=" relative  mb-[6rem] ">
      <ProductsList active={active} />
    </section>
  );
}

export default page;
