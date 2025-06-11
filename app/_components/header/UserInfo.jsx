"use client";
import { LiaUser } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import IconCart from "../cart/IconCart";

function UserInfo() {
  return (
    <div className=" flex gap-4 text-xl md:text-2xl">
      <IconCart />
      <Link href={""}>
        <LiaUser />
      </Link>
      <Link href={""}>
        <CiSettings />
      </Link>
    </div>
  );
}

export default UserInfo;
