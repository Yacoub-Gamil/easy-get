"use client";

import Logo from "./header/Logo";
import { TiSocialFacebook } from "react-icons/ti";
import { PiInstagramLogoLight } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className=" bg-[#5b53a6] p-8 mt-10">
      <div className="w-full flex flex-col justify-center gap-4 items-center mt-[2rem]">
        <h1 className=" text-white text-2xl md:text-3xl uppercase font-semibold">
          Contact us
        </h1>
        <div className="w-full justify-center text-white flex gap-4 text-2xl md:text-3xl">
          <TiSocialFacebook />
          <PiInstagramLogoLight />
          <SiMinutemailer />
        </div>
        <form className="w-full flex gap-4 justify-center ">
          <input
            type="email"
            required
            placeholder=" Enter your email address"
            className="  bg-white rounded-4xl w-[60%]  py-2 px-4"
          />
          <button
            type=" submit "
            className=" cursor-pointer uppercase  py-2 px-10 border font-semibold text-white border-white rounded-4xl
"
          >
            send me
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
