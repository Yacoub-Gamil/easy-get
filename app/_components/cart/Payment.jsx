"use client";

import { useCartContext } from "@/app/_context/CartContext";
import { authOptions } from "@/app/_lib/nextAuth";
import { signIn, useSession } from "next-auth/react";


function Payment() {
  const { totalPrice, setIsCheckout } = useCartContext();
  const estimatedTaxes = totalPrice * 0.14;
  const price = totalPrice + estimatedTaxes;

  const { data } = useSession(authOptions);

  return (
    <div className=" sticky top-[15rem] z-40">
      <div className=" mt-4 p-4 flex flex-col gap-4 border-[0.1px] rounded-2xl w-[100%]">
        <h1 className="text-xl font-bold text-[#2d3a4b]">Summary</h1>
        <p className="flex  justify-between">
          Subtotal:{" "}
          <strong className=" text-[1.1rem] text-red-600">
            ${totalPrice.toFixed(2)}
          </strong>
        </p>
        <p className="flex justify-between capitalize">
          estimated delivery and handling:{" "}
          <span className=" underline font-semibold">Free</span>
        </p>
        <p className="flex justify-between capitalize">
          estimated taxes:
          <strong className="">${estimatedTaxes.toFixed(2)}</strong>
        </p>
        <div className=" flex justify-between text-xl">
          <strong>Total:</strong>
          <strong className=" text-red-600">${price.toFixed(2)}</strong>
        </div>
        {data?.user.name ? (
          <button
            onClick={() => setIsCheckout(true)}
            className=" w-[80%] mx-auto capitalize cursor-pointer bg-[#2d3a4b] text-white p-1 hover:rounded-tl-2xl hover:rounded-br-2xl duration-150"
          >
            checkout
          </button>
        ) : (
          <div className=" w-full flex justify-center">
            <button
              onClick={() => signIn()}
              className=" bg-[#2d3a4b] text-white text-[0.9rem] rounded-xs hover:scale-[1.1] duration-300 cursor-pointer w-fit px-2 py-1 "
            >
              Please login to checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
