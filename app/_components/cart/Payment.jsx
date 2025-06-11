"use client";

import { useCartContext } from "@/app/_context/CartContext";

function Payment() {
  const { totalPrice } = useCartContext();
  const estimatedTaxes = totalPrice * 0.14;
  const price = totalPrice + estimatedTaxes;

  return (
    <div className=" w-full sticky top-[15rem] z-40">
      <div className=" mt-4 p-4 flex flex-col gap-4 border-[0.1px] rounded-2xl w-[100%]">
        <h1 className="text-xl font-bold text-[#2d3a4b]">Summary</h1>
        <p className="flex  justify-between">
          Subtotal:{" "}
          <strong className=" text-[1.1rem] text-red-600">
            ${totalPrice.toFixed(2)}
          </strong>
        </p>
        <p className="flex justify-between capitalize">
          estimated delivery and handling: <span>Free</span>
        </p>
        <p className="flex justify-between capitalize">
          estimated taxes:
          <strong className="">${estimatedTaxes.toFixed(2)}</strong>
        </p>
        <div className=" flex justify-between text-xl">
          <strong>Total:</strong>
          <strong className=" text-red-600">${price.toFixed(2)}</strong>
        </div>
        <button className=" bg-black text-white p-2 rounded-2xl">
          checkout
        </button>
      </div>
    </div>
  );
}

export default Payment;
