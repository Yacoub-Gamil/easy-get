import ProductsList from "../_components/products/ProductsList";

export const metadata = {
  title: "Collection",
};

async function page({ searchParams }) {
  const active = searchParams?.category ?? "all";

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; VercelBot/1.0)",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch:", await res.text());
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  const filter = active.replace("-", " ");

  const productAfterFilter =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="relative mb-[6rem]">
      <ProductsList active={active} data={productAfterFilter} />
    </section>
  );
}

export default page;
