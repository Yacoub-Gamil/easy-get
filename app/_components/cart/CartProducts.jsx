"use client";
import { useCartContext } from "@/app/_context/CartContext";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

function CartProducts() {
  const { items, dispatch } = useCartContext();
  const cardsRef = useRef([]);

  const onRemoveProduct = (id, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        dispatch({ type: "removeProduct", payload: id });
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      {items?.map((product, index) => (
        <div
          key={product.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="grid grid-cols-2 place-items-center gap-8 mb-2 relative"
        >
          <div className="relative aspect-square h-[10rem] lg:h-[15rem]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="font-semibold md:text-xl">
              {product.title.slice(0, 50)}
            </h1>
            <strong className="text-red-600 text-xl">${product.price}</strong>
            <p className="opacity-80">{product.description?.slice(0, 50)}</p>
          </div>
          <div className=" absolute bottom-0 right-[4rem]">
            <button
              onClick={() => onRemoveProduct(product.id, index)}
              className="cursor-pointer text-red-600 border-b"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;
