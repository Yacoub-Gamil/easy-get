import InfoCard from "@/app/_components/products/InfoCard";
import Image from "next/image";
import Link from "next/link";

async function page({ params }) {
  const { productId } = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();
  const { image, price, title, description } = product;
  return (
    <div >
      <InfoCard
        image={image}
        price={price}
        title={title}
        description={description}
      />
    </div>
  );
}

export default page;
