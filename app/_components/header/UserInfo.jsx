"use client";
import { LiaUser } from "react-icons/lia";
import IconCart from "../cart/IconCart";
import { signIn, signOut, useSession } from "next-auth/react";
import { authOptions } from "@/app/_lib/nextAuth";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function UserInfo() {
  const { data, status } = useSession(authOptions);
  const [isOpen, setIsOpen] = useState(false);

  const infoRef = useRef(null);

  useGSAP(() => {
    gsap.from(infoRef.current, {
      x: 10,
      opacity: 0,
      duration: 0.5,
    });
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(infoRef.current, {
      x: 10,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

  return (
    <div className=" flex items-center gap-4">
      <IconCart />
      <div className=" flex text-xl items-center">
        {data?.user?.name ? (
          <div
            onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
            className=" relative"
          >
            <div className=" cursor-pointer hover:shadow-[0px_0px_4px_0px_#2d3a4b] duration-300 flex items-center border px-2 py-1 border-stone-300 rounded-full">
              <h1 className=" text-[0.6rem] md:text-[0.8rem] font-semibold capitalize">
                {data.user.name}{" "}
              </h1>
              <IoMdArrowDropdown className=" mt-1 text-[1rem] text-stone-400" />
            </div>
            {isOpen && (
              <div
                ref={infoRef}
                className=" bg-[#2d3a4b] absolute top-[2.2rem] right-0 rounded-2xl p-8"
              >
                <div className=" w-full flex flex-col gap-4 justify-center items-center ">
                  <Image
                    src={data.user?.image}
                    alt="user image"
                    width={55}
                    height={50}
                    className=" rounded-full border border-white"
                  />
                  <div className=" text-white text-xl flex flex-col items-center">
                    <h1 className=" capitalize font-semibold">
                      {data.user.name}
                    </h1>
                    <h2 className="text-[0.8rem]">{data.user.email}</h2>
                  </div>
                  <Link
                    href={"/cart"}
                    className=" duration-150 hover:bg-[#37475c] text-[0.9rem] text-white border hover:rounded-2xl  rounded-xs border-stone-200 py-1 px-4"
                  >
                    Check Your Cart
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className=" cursor-pointer text-white text-[0.9rem] font-semibold border-b"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={() => signIn()}
              className=" cursor-pointer flex flex-col justify-center items-center"
            >
              <LiaUser className=" text-[0.8rem] md:text-[1rem]" />
              <h1 className=" text-[0.6rem] md:text-[0.8rem]">Login</h1>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
