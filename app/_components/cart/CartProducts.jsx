"use client";
import { useCartContext } from "@/app/_context/CartContext";
import Image from "next/image";

function CartProducts() {
  const { items } = useCartContext();

  return (
    <div>
      {items?.map((producet) => (
        <div key={producet.id} className="flex items-center">
          <div className=" relative aspect-square h-[12rem]">
            <Image
              src={producet.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-contain"
            />
          </div>
          <div className=" flex flex-col justify-between p-1 gap-4">
            <h1 className=" font-semibold">{producet.title.slice(0, 50)}</h1>
            <strong className=" text-red-600 text-xl">${producet.price}</strong>
            <p className=" opacity-80">{producet.description.slice(0, 50)}</p>
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
              <button className=" cursor-pointer text-red-600  rounded-full">
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;
