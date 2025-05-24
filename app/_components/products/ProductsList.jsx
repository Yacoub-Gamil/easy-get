import Filter from "./Filter";
import ProductCard from "./ProductCard";

async function ProductsList({ active }) {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  const filter = active.replace("-", " ");
  const productAfterFilter = products.filter((product) =>
    filter === "all" ? product : product.category === filter
  );

  return (
    <div className="p-4">
      <div className=" flex flex-col gap-8 justify-center items-center">
        <h1 className=" text-center mt-[6rem] mb-[2rem] font-semibold uppercase text-[#2d3a4b] text-4xl">
          We make you awesome
        </h1>
        <div className=" mb-[4rem]">
          <Filter />
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 lg:max-w-[80%] mx-auto place-items-center gap-[4rem] p-4">
        {productAfterFilter?.map((product) => (
          <ProductCard
            active={productAfterFilter}
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
