import InfoCard from "@/app/_components/products/InfoCard";

async function page({ params }) {
  const { productId } = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();
  const { id, image, price, title, description } = product;

  return (
    <div>
      <InfoCard
        id={id}
        image={image}
        price={price}
        title={title}
        description={description}
      />
    </div>
  );
}

export default page;
