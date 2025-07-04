"use client";

import { useCartContext } from "@/app/_context/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function InfoCard({ id, image, price, title, description }) {
  const { dispatch, items } = useCartContext();

  const router = useRouter();
  const infoCard = useRef(null);
  const [leaving, setIsLeaving] = useState(false);

  const addedItem = items?.map((el) => el.id);
  const isAdded = addedItem?.includes(id);

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
    <div ref={infoCard} className="p-4 h-screen flex flex-col mt-[6rem]">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className=" relative w-[70%] md:w-[25%] aspect-square">
          <Image
            src={image}
            alt=""
            fill
            sizes="100"
            className=" object-contain"
          />
        </div>
        <div className=" md:max-w-[40%]  flex flex-col gap-2 md:text-start">
          <strong className=" text-2xl text-red-600">${price}</strong>
          <h1 className=" font-bold md:text-2xl">{title}</h1>
          <p className=" text-xl opacity-60 ">{description}</p>
          <div className="w-[60%]">
            {!isAdded ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "addProduct",
                    payload: { id, image, price, title },
                  });
                }}
                className=" w-full cursor-pointer capitalize px-4 py-2 bg-red-600  mt-8 text-white rounded-full "
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
                className=" cursor-pointer capitalize w-full rounded-xl mt-8 bg-red-600 text-[1rem] text-white py-1 px-2 font-semibold "
              >
                remove
              </button>
            )}
            <button
              onClick={handleIsleaving}
              className="  text-xl cursor-pointer  capitalize mt-8 text-red-600 rounded-full flex  items-center gap-2"
            >
              <IoIosArrowRoundBack className="" /> back shoping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
