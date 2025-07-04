"use client";
import { useCartContext } from "@/app/_context/CartContext";
import CartProducts from "./CartProducts";
import Payment from "./Payment";
import { FaTruckArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function Cart() {
  const { dispatch, items, isCheckout, setIsCheckout } = useCartContext();
  const refCart = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isCheckout) return;
      setIsCheckout(false); // Hide the message after 3 seconds
      dispatch({ type: "checkedout" });
      router.push("/");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [isCheckout]);

  useGSAP(() => {
    if (items.length === 0) {
      gsap.from("#empty", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        delay: 1,
      });
    } else {
      gsap.from(refCart.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        delay: 1,
      });
    }
  }, []);

  return items.length == 0 ? (
    <div className=" xl:w-full h-[90vh] flex justify-center items-center">
      <div
        id="empty"
        className=" bg-white xl:w-[50rem] sx:w-[20rem] sx:h-[10rem] xl:h-[15rem] flex justify-center border border-[#2d3a4b] items-center rounded-2xl  p-4"
      >
        <div className=" ">
          <p className="xl:text-[1.8rem] xs:text-[1rem] font-serif">
            Your cart is empty 🛒
          </p>
          <div className="flex justify-center">
            <Link
              href="/collections"
              role="button"
              className="bg-black italic text-[#2d3a4b] hover:scale-105 duration-300 border px-4 py-1 rounded-md mt-[1rem] text-center sx:text-[.8rem] xl:text-[1.4rem] flex items-center gap-6"
            >
              <span className=" text-white">Go fill it </span>
              <FaTruckArrowRight className=" text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <section ref={refCart} className="mt-8 w-full">
      <div className=" flex flex-col items-center justify-center gap-4 text-[#2d3a4b]">
        <h1 className=" text-3xl md:text-4xl font-bold ">
          Your <span className=" text-red-600 italic">Cart</span>
        </h1>
        <p className=" text-center max-w-[80%] md:text-xl lg:text-[1.2rem]">
          Review your selected items below before <br /> proceeding to checkout.
          <span className=" text-red-600 font-semibold">
            make sure everything looks good!
          </span>
        </p>
      </div>
      <div className=" w-full md:flex gap-10 justify-between p-4 lg:max-w-[70%] mx-auto mt-10">
        <div className="w-full">
          <CartProducts />
        </div>
        <div className=" md:w-[60%] lg:w-[35%]">
          <Payment />
        </div>
      </div>
      {isCheckout && (
        <div className="w-full h-full z-40 bg-white opacity-90 absolute top-0 flex flex-col justify-center items-center">
          <h1 className=" text-2xl mb-8 font-bold">
            We appreciate your purchase — thank you!
          </h1>
          <span className=" text-lg font-semibold">Processing Checkout...</span>
        </div>
      )}
    </section>
  );
}

export default Cart;
