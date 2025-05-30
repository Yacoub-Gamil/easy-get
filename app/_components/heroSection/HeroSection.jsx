"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import HeroImages from "./HeroImages";
import Link from "next/link";

function HeroSection() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      "#heroTitle",
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 0.5,
        delay: 2,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      "#easy-get",
      {
        opacity: 0,
      },
      {
        delay: 2.5,
        duration: 0.5,
        opacity: 1,
      }
    );
  }, []);

  return (
    <>
      <section className=" h-[65vh] lg:h-[90vh] relative">
        <div id="hero" className=" opacity-0 container ">
          <div
            id="heroTitle"
            className=" text-[#2d3a4b] w-[40%] z-40 absolute top-[30%] left-[70%] -translate-x-1/2 transform "
          >
            <p className=" md:text-2xl capitalize font-semibold">
              {" "}
              The Latest Product from{" "}
              <span
                id="easy-get"
                className=" md:text-3xl font-bold text-[#e9654c]"
              >
                EASY-GET
              </span>
            </p>
            <h1 className=" text-xl md:text-4xl lg:text-6xl xl:text-8xl uppercase font-bold ">
              look hot with style
            </h1>
            <div className=" flex justify-end">
              <Link
                href={"/collections"}
                className=" md:text-xl font-semibold hover:bg-[#2d3a4b] hover:text-white duration-300 uppercase border border-[#2d3a4b] py-2 px-4 rounded-3xl cursor-pointer mt-[1.2rem]"
              >
                Shop Now
              </Link>
            </div>
            <div className=" hidden xl:block w-[2px] h-[150%]  bg-[#2d3a4b] absolute top-[-30%]  left-1/2 -translate-x-1/2 rotate-60 "></div>
          </div>
          <div className=" relative w-full lg:h-[90vh] h-[60vh]">
            <Image
              src={"/hero-bg-3.jpg"}
              alt=""
              quality={100}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              priority
              className=""
            />
          </div>
        </div>
      </section>
      <HeroImages />
    </>
  );
}

export default HeroSection;
