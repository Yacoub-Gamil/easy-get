"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

function InfoCard({ image, price, title, description }) {
  const router = useRouter();
  return (
    <div className=" relative">
      <div className="w-full flex justify-center items-center gap-8 h-[85vh]">
        <button
          className=" absolute right-[20%] top-[10%] hover:scale-105 duration-300 cursor-pointer font-semibold text-red-600 flex items-center"
          onClick={() => router.back()}
        >
          <IoIosArrowRoundBack className=" text-2xl" /> Go Back
        </button>
        <div className=" relative w-[20rem] h-[30rem]">
          <Image src={image} alt="" fill className=" object-contain" />
        </div>
        <div className=" max-w-[30%] flex flex-col gap-6">
          <strong className=" text-2xl text-red-600">${price}</strong>
          <h1 className=" text-2xl font-semibold">{title}</h1>
          <p className="">{description}</p>
          <button className=" max-w-[50%] hover:scale-105 duration-300 py-2 px-4 rounded-full bg-red-600 text-white text-xl cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
