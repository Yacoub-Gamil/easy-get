"use client";

import Image from "next/image";
import Logo from "./header/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Contact() {
  useGSAP(() => {
    gsap.from("#contact", {
      opacity: 0,
      duration: 1,
      y: -50,
    });
  }, []);

  return (
    <div
      id="contact"
      className=" w-[95%] md:flex xl:w-[70%] rounded-2xl overflow-hidden"
    >
      <div className="md:w-[40%] md:h-[35rem] relative aspect-square ">
        <Image src={"/contact-us.jpg"} alt="" fill className=" object-cover" />
      </div>
      <form
        onClick={(e) => {
          //   e.preventDefault()/
        }}
        className=" w-full p-4 bg-stone-50 gap-4 flex flex-col items-center"
      >
        <div className="">
          <Logo />
        </div>
        <div className=" md:flex gap-4 w-full p-4 ">
          <div className=" flex flex-col gap-2 w-full ">
            <label htmlFor="firstName" className=" block font-semibold">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              placeholder="First Name"
              className=" outline-[0.2px] p-2  outline-amber-[#2d3a4b] bg-white "
            />
          </div>
          <div className=" flex flex-col gap-2  w-full">
            <label htmlFor="lastName" className=" block font-semibold">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              placeholder="Last Name"
              className=" outline-[0.2px] p-2  outline-amber-[#2d3a4b]  bg-white"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4  w-full px-4">
          <div className=" w-full flex flex-col gap-2">
            <label htmlFor="email" className=" block font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email Address"
              className=" outline-[0.2px] p-2  w-full bg-white  "
            />
          </div>
          <div className=" w-full flex flex-col gap-2">
            <label htmlFor="phone-number" className="block font-semibold">
              Phone Number
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="Phone Number"
              className=" outline-[0.2px] p-2 w-full bg-white"
            />
          </div>
        </div>
        <div className=" w-full h-full px-4 ">
          <label htmlFor="message" className=" block font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter yout main message here"
            maxLength={1000}
            minLength={100}
            className=" w-full h-[80%] outline-[0.2px] p-2 bg-white"
          />
        </div>
        <button className=" w-[50%] mt-2 py-2 text-white cursor-pointer rounded-2xl bg-[#2d3a4b]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
