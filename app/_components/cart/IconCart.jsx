"use client";

import { useCartContext } from "@/app/_context/CartContext";
import Link from "next/link";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

function IconCart() {
  const { items } = useCartContext();
  return (
    <Link href={"/cart"} className=" relative ">
      <PiShoppingCartSimpleThin className="text-xl md:text-2xl" />
      <p className="absolute top-[-1rem] flex items-center justify-center left-[1rem] w-4 h-4 text-white rounded-xl md:h-5 md:w-5 bg-red-600">
        <span className="md:text-xl">{items.length}</span>
      </p>
    </Link>
  );
}

export default IconCart;
