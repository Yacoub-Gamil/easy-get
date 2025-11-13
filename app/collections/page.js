import ProductsList from "../_components/products/ProductsList";

export const metadata = {
  title: "Collection",
};

async function page({ searchParams }) {
  const searParams = await searchParams;
  const active = (await searParams?.category) ?? "all";

  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  const filter = active.replace("-", " ");
  const productAfterFilter = products.filter((product) =>
    filter === "all" ? product : product.category === filter
  );

  return (
    <section className=" relative mb-[6rem] ">
      <ProductsList active={active} data={productAfterFilter} />
    </section>
  );
}

export default page;
