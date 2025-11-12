import Filter from "./Filter";
import ProductCard from "./ProductCard";

async function ProductsList({ active }) {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    // Check if the response is OK
    if (!res.ok) {
      const text = await res.text();
      console.error("Failed to fetch products:", text);
      throw new Error(`API returned status ${res.status}`);
    }

    // Make sure the response is JSON
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      console.error("Unexpected response:", text);
      throw new Error("API did not return JSON");
    }

    products = await res.json();
  } catch (err) {
    console.error("Error fetching products:", err);
    // Optionally, you can return an empty array or fallback UI here
    products = [];
  }

  const filter = active.replace("-", " ");
  const productAfterFilter = products.filter((product) =>
    filter === "all" ? true : product.category === filter
  );

  return (
    <div className="p-4 relative">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="mb-[1.8rem]">
          <Filter />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 lg:max-w-[75%] mx-auto place-items-center gap-[2rem] p-4">
        {productAfterFilter.length > 0 ? (
          productAfterFilter.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
