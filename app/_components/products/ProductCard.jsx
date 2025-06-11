"use client";

import { useCartContext } from "@/app/_context/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";
import { CiCircleInfo, CiCirclePlus } from "react-icons/ci";

function ProductCard({ id, image, title, price, description }) {
  const router = useRouter();
  const item = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const { dispatch } = useCartContext();

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
    <div ref={item} className=" w-full relative cursor-pointer">
      <div
        onClick={handleNavigation}
        className={` group relative flex flex-col justify-center gap-4 h-[20rem] `}
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="Eastpak Padded Pak'R Backpack"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className=" rounded-lg object-contain"
          />
        </div>
        <div className=" flex gap-4 justify-center items-center ">
          <strong className="  text-red-600">${price}</strong>
          <div className=" w-[1px] h-[5rem] bg-black" />
          <div className=" text-[#2d3a4b]">
            <h1 className=" font-semibold">{title}</h1>
          </div>
        </div>
      </div>
      <div className="  flex justify-center mt-8 ">
        <button
          onClick={() =>
            dispatch({
              type: "addProduct",
              payload: { id, image, price, title },
            })
          }
          className=" cursor-pointer capitalize w-full  bg-[#2d3a4b] text-[1rem] text-white py-1 px-2 font-semibold "
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
