"use client";
import CartProducts from "./CartProducts";
import Payment from "./Payment";

function Cart() {
  return (
    <section className="mt-8">
      <div className=" flex flex-col items-center justify-center gap-4 text-[#2d3a4b]">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold ">
          Your Cart
        </h1>
        <p className=" text-center max-w-[60%] md:text-xl lg:text-[1.2rem]">
          Review your selected items below <br /> before proceedingto checkout.
          make sure everything looks good!
        </p>
      </div>
      <div className=" w-full md:flex gap-4 justify-between p-4  lg:max-w-[80%] mx-auto mt-10">
        <CartProducts />
        <div>
          <Payment />
        </div>
      </div>
    </section>
  );
}

export default Cart;
