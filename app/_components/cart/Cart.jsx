"use client";
import { useCartContext } from "@/app/_context/CartContext";
import CartProducts from "./CartProducts";
import Payment from "./Payment";
import { FaTruckArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Cart() {
  const { items } = useCartContext();
  const refCart = useRef(null);

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
        className=" bg-white xl:w-[50rem] sx:w-[20rem] sx:h-[10rem] xl:h-[15rem] flex justify-center border border-[#ffd28d] items-center rounded-2xl  p-4"
      >
        <div className=" ">
          <p className="xl:text-[1.8rem] xs:text-[1rem] font-serif">
            Your cart is empty 😊
          </p>
          <div className="flex justify-center">
            <Link
              href="/collections"
              role="button"
              className="bg-black italic text-[#ffd28d] hover:scale-105 duration-300 border px-4 py-1 rounded-md mt-[1rem] text-center sx:text-[.8rem] xl:text-[1.4rem] flex items-center gap-6"
            >
              <span>Go fill it </span>
              <FaTruckArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <section ref={refCart} className="mt-8">
      <div className=" flex flex-col items-center justify-center gap-4 text-[#2d3a4b]">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold ">
          Your Cart
        </h1>
        <p className=" text-center max-w-[80%] md:text-xl lg:text-[1.2rem]">
          Review your selected items below before proceeding to checkout.
          make sure everything looks good!
        </p>
      </div>
      <div className=" w-full md:flex gap-4 justify-between p-4 lg:max-w-[80%] mx-auto mt-10">
        <div className="w-full">
          <CartProducts />
        </div>
        <div className=" md:w-[60%] lg:w-[40%]">
          <Payment />
        </div>
      </div>
    </section>
  );
}

export default Cart;
