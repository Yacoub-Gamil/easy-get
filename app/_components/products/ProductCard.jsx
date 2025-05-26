"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { CiCircleInfo, CiCirclePlus } from "react-icons/ci";

function ProductCard({ id, image, title, price, description, active }) {
  const router = useRouter();
  const item = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);

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
    <button
      onClick={handleNavigation}
      ref={item}
      className=" relative  cursor-pointer "
    >
      <div
        className={` group relative flex flex-col justify-center gap-4 h-[20rem] `}
      >
        <div className="relative aspect-square  rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="Eastpak Padded Pak'R Backpack"
            fill
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
    </button>
  );
}

export default ProductCard;
