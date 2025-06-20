"use client";
import { LiaUser } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import IconCart from "../cart/IconCart";

function UserInfo() {
  return (
    <div className=" flex gap-4 text-xl md:text-2xl">
      <Link href={""}>
        <LiaUser />
      </Link>
      <IconCart />
    </div>
  );
}

export default UserInfo;
