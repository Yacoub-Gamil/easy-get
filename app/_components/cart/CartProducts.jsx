"use client";
import { useCartContext } from "@/app/_context/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

function CartProducts() {
  const { items, dispatch } = useCartContext();
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5, // Each card animates one after the other
      ease: "power2.out",
    });
  }, []);

  function onRemoveProduct(id, index) {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5, // Each card animates one after the other
      ease: "power2.out",
      onComplete: () => {
        dispatch({ type: "removeProduct", payload: id });
      },
    });
  }

  return (
    <div className="flex flex-col gap-8 mt-10">
      {items?.map((producet, index) => (
        <div
          ref={(el) => (cardsRef.current[index] = el)}
          key={producet.title}
          className="grid grid-cols-2 place-items-center gap-8 mb-2"
        >
          <div className=" relative aspect-square h-[12rem] lg:h-[20rem]">
            <Image
              src={producet.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-contain"
            />
          </div>
          <div className="flex flex-col  gap-4">
            <h1 className=" font-semibold md:text-xl">
              {producet.title.slice(0, 50)}
            </h1>
            <strong className=" text-red-600 text-xl">${producet.price}</strong>
            <p className=" opacity-80">{producet.description?.slice(0, 50)}</p>
            <div className=" flex justify-evenly">
              <div className=" flex gap-4 items-center">
                <button className=" cursor-pointer bg-[#2d3a4b] text-white text-xl w-8 h-8 rounded-xl">
                  +
                </button>
                <p>1</p>
                <button className=" cursor-pointer bg-[#2d3a4b] text-white text-xl w-8 h-8 rounded-xl">
                  -
                </button>
              </div>
              <button
                onClick={() => onRemoveProduct(producet.id, index)}
                className="cursor-pointer text-red-600 text-xl border-b"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;
