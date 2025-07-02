"use client";

import Logo from "./header/Logo";
import { TiSocialFacebook } from "react-icons/ti";
import { PiInstagramLogoLight } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className=" bg-[#2d3a4b] p-2 mt-10 ">
      <div className="w-full flex flex-col justify-center gap-4 items-center mt-[2rem] mb-10">
        <h1 className=" text-white text-xl uppercase font-semibold">
          Contact us
        </h1>
        <div className="w-full justify-center text-white flex gap-4 text-2xl md:text-2xl">
          <TiSocialFacebook />
          <PiInstagramLogoLight />
          <SiMinutemailer />
        </div>
        <form className="w-full flex-col md:flex-row flex gap-4 justify-center ">
          <input
            type="email"
            required
            placeholder=" Enter your email address"
            className="bg-white rounded-4xl md:w-[30%] py-2 px-4"
          />
          <button
            type="submit"
            className=" cursor-pointer uppercase py-2 px-6 border font-semibold text-white border-white rounded-4xl"
          >
            send me
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
