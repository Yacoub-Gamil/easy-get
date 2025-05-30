"use client";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";

function UserInfo() {
  return (
    <div className=" flex gap-4 text-xl md:text-2xl">
      <Link href={""}>
        <LiaUser />
      </Link>
      <Link href={"/cart"}>
        <PiShoppingCartSimpleThin />
      </Link>
      <Link href={""}>
        <CiSettings />
      </Link>
    </div>
  );
}

export default UserInfo;
