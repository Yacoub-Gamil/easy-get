"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function InfoCard({ image, price, title, description }) {
  const router = useRouter();
  const infoCard = useRef(null);
  const [leaving, setIsLeaving] = useState(false);

  const handleIsleaving = () => {
    if (leaving) return; // 🛑 Prevent multiple clicks
    setIsLeaving(true); // ✅ Mark that we're leaving

    gsap.to(infoCard.current, {
      opacity: 0,
      y: 200,
      duration: 0.5,
      onComplete: () => {
        router.back();
      },
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      infoCard.current,
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div ref={infoCard} className="p-4 h-screen  flex flex-col justify-center ">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className=" relative w-[70%] md:w-[40%]  aspect-square">
          <Image
            src={image}
            alt=""
            fill
            sizes="100"
            className=" object-contain"
          />
        </div>
        <div className=" md:max-w-[60%] mt-8 flex flex-col gap-2 md:text-start p-4">
          <strong className=" text-2xl text-red-600">${price}</strong>
          <h1 className=" font-bold md:text-2xl">{title}</h1>
          <p className=" text-xl opacity-60 ">{description}</p>
          <div className="w-[60%]">
            <button className=" w-full cursor-pointer capitalize px-4 py-2 bg-red-600  mt-8 text-white rounded-full ">
              add to cart
            </button>
            <button
              onClick={handleIsleaving}
              className="  text-xl cursor-pointer  capitalize mt-8 text-red-600 rounded-full flex  items-center gap-2"
            >
              <IoIosArrowRoundBack className=" " /> back shoping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
