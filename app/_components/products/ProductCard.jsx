"use client";

import { useCartContext } from "@/app/_context/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

function ProductCard({ id, image, title, price, description }) {
  const router = useRouter();
  const item = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const { items, dispatch } = useCartContext();

  const addedItem = items?.map((el) => el.id);
  const isAdded = addedItem?.includes(id);

  const handleNavigation = () => {
    if (isLeaving) return;
    setIsLeaving(true);

    // Animate out
    gsap.to(item.current, {
      opacity: 0,
      y: -150,
      duration: 0.4,
      onComplete: () => {
        router.push(`/collections/${id}`);
      },
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      item.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div ref={item} className="relative cursor-pointer ">
      <div
        onClick={handleNavigation}
        className={` group relative hover:scale-[1.1] duration-150 flex flex-col justify-center gap-4 h-[20rem] `}
      >
        {isAdded && (
          <div className="bg-stone-600/5 w-full rounded-2xl h-full flex justify-center items-center absolute z-40" />
        )}

        <div className="relative w-[10rem] mx-auto  aspect-square rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="Eastpak Padded Pak'R Backpack"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className=" rounded-lg object-contain"
          />
        </div>
        <div className=" p-2 flex gap-4 justify-center items-center ">
          <strong className="  text-red-600">${price}</strong>
          <div className=" w-[1px] h-[5rem] bg-black" />
          <div className=" text-[#2d3a4b]">
            <h1 className=" opacity-90 text-[0.9rem]">{title}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 ">
        {!isAdded ? (
          <button
            onClick={() =>
              dispatch({
                type: "addProduct",
                payload: { id, image, price, title },
              })
            }
            className=" cursor-pointer capitalize w-[70%] bg-[#2d3a4b] text-[0.8rem] text-white py-1 px-2 font-semibold "
          >
            add to cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "removeProduct",
                payload: id,
              })
            }
            className=" cursor-pointer capitalize w-[70%] rounded-tl-2xl rounded-br-2xl  bg-red-600 text-[0.8rem] text-white py-1 px-2 font-semibold "
          >
            remove
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
