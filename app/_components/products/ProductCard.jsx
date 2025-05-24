"use client";

import Image from "next/image";
import { CiCircleInfo, CiCirclePlus } from "react-icons/ci";

function ProductCard({ id, image, title, price, description }) {
  return (
    <div className=" group relative flex flex-col justify-center gap-4 h-[20rem] ">
      <div className="relative aspect-square  rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt="Eastpak Padded Pak'R Backpack"
          fill
          className=" rounded-lg object-contain"
        />

        <div className=" w-full h-full transition-all duration-300 absolute top-0 group-hover:opacity-60 z-30 bg-stone-200 opacity-0 flex justify-center items-center"></div>

        <div className=" flex justify-end gap-2 group-hover:left-[-1rem] top-[1rem] duration-300 left-[5rem]  z-40 text-white absolute w-full text-[2.1rem]">
          <CiCircleInfo className="bg-red-600 rounded-l-2xl cursor-pointer hover:scale-[1.1] duration-300" />
          <CiCirclePlus className="bg-red-600 rounded-r-2xl  hover:scale-[1.1] duration-300 cursor-pointer" />
        </div>
      </div>

      <div className=" flex gap-4 justify-center items-center ">
        <strong className="  text-red-600">${price}</strong>
        <div className=" w-[1px] h-[5rem] bg-black" />
        <div className=" text-[#2d3a4b]">
          <h1 className=" font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
