"use client";

import { useCartContext } from "@/app/_context/CartContext";
import Link from "next/link";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

function IconCart() {
  const { items } = useCartContext();
  return (
    <Link href={"/cart"} className=" relative ">
      <PiShoppingCartSimpleThin className="text-[1rem] md:text-xl" />
      <p className="absolute top-[-0.8rem] flex items-center justify-center left-[0.8rem] w-3 h-4 text-white rounded-xl md:h-4 md:w-4 bg-red-600">
        <span className="text-[0.8rem] md:text-xs">{items.length}</span>
      </p>
    </Link>
  );
}

export default IconCart;
