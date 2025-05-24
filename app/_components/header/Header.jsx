"use client";

import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import gsap from "gsap";
import MenuNav from "./MenuNav";

function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      {
        y: -100,
      },
      {
        delay: 2.5,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  return (
    <header
      id="header"
      className=" container sticky top-0 bg-white z-50 mx-auto p-6"
    >
      <div className=" flex justify-between items-center">
        <Logo />
        <div>
          <div className=" hidden md:block">
            <NavBar />
          </div>
          <div className=" md:hidden ">
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
