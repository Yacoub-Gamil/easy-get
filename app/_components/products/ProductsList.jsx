import { PiShoppingCartSimpleThin } from "react-icons/pi";
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
    <div className=" p-4">
      <div className=" flex flex-col gap-8">
        <h1 className=" text-center mt-[6rem] mb-[2rem] font-semibold uppercase text-[#2d3a4b] text-4xl">
          We make you awesome
        </h1>
        <div className="flex items-center justify-between  max-w-[80%] bg-amber-200  mb-[4rem]">
          <div className="relative cursor-pointer ">
            <PiShoppingCartSimpleThin className=" text-2xl" />
            <span className=" absolute -right-2 top-[-0.8rem] bg-red-600 text-white w-4 h-4 flex justify-center items-center rounded-full">
              0
            </span>
          </div>
          <Filter />
        </div>
      </div>

      <div className=" grid lg:grid-cols-4 lg:max-w-[80%] mx-auto place-items-center gap-[4rem] p-4">
        {productAfterFilter?.map((product) => (
          <ProductCard
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
