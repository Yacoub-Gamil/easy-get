import Image from "next/image";
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
    <div className="p-4 relative ">
      <div className=" flex flex-col gap-8 justify-center items-center">
        <div className=" mb-[1.8rem]">
          <Filter />
        </div>
      </div>

      <div className=" grid lg:grid-cols-4 lg:max-w-[75%] mx-auto place-items-center gap-[2rem] p-4">
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
