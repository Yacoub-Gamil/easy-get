"use client";

import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import gsap from "gsap";
import MenuNav from "./MenuNav";
import IconCart from "../cart/IconCart";

function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      {
        y: -100,
      },
      {
        delay: 2,
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);
  
  return (
    <header
      id="header"
      className=" container sticky opacity-0 top-0 bg-white z-50 mx-auto p-6"
    >
      <div className=" max-w-[90%] mx-auto flex justify-between items-center">
        <Logo />
        <div>
          <div className=" hidden md:block">
            <NavBar />
          </div>
          <div className=" md:hidden flex items-center gap-5 ">
            <IconCart />
            <MenuNav />
          </div>
        </div>
        <div className=" hidden md:block">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}

export default Header;
