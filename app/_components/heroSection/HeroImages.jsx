import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

function HeroImages() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#image", {
      x: 150,
    });
    gsap.to("#image", {
      scrollTrigger: {
        trigger: "#image",
        start: "top 80%",

        // toggleActions: "play reverse reverse reverse",
      },
      opacity: 1,
      x: 0,
      stagger: {
        each: 0.5,
      },
      duration: 0.5,
    });
  });
  return (
    <section className=" mt-[4rem] mx-auto gap-4 mb-[4rem]">
      <h1 className=" text-center  uppercase text-3xl tracking-wider font-semibold text-[#2d3a4b] ">
        new arrival
      </h1>
      <p className=" text-center p-4 mx-auto opacity-50 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        maximus vehicula. Sed feugiat, <br /> tellus vel tristique posuere, diam
      </p>
      <div className=" grid md:grid-cols-2 lg:max-w-[80%] p-4 overflow-hidden  mb-[2rem] gap-4 mx-auto">
        <div className=" flex flex-col gap-4">
          <div
            id="image"
            className=" opacity-0 group relative flex justify-center items-center overflow-hidden w-full h-[20rem]"
          >
            <Image
              src={"/heroImage-1.jpg"}
              alt=""
              fill
              className=" object-cover group-hover:scale-[1.1] duration-400"
            />
            <div className="absolute uppercase text-center">
              <h1 className=" text-4xl text-[#2d3a4b] font-semibold mb-8">
                Leather bag
              </h1>
              <Link
                href={"/collections?category=men%27s+clothing"}
                className=" cursor-pointer uppercase py-2 px-4  bg-[#2d3a4b] hover:scale-[1.1]  duration-300 text-white"
              >
                more
              </Link>
            </div>
          </div>
          <div
            id="image"
            className=" opacity-0 group relative flex justify-center items-center  overflow-hidden w-full h-[25rem]"
          >
            <Image
              src={"/heroImage-3.jpg"}
              alt=""
              fill
              className=" object-cover group-hover:scale-[1.1] duration-400   "
            />
            <div className="absolute uppercase text-center">
              <h1 className=" text-4xl text-[#2d3a4b] font-semibold mb-8">
                graphiti tshirt
              </h1>
              <Link
                href={"/collections?category=men%27s+clothing"}
                className=" cursor-pointer uppercase py-2 px-6 bg-[#2d3a4b] hover:scale-[1.1]  duration-300 text-white"
              >
                more
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <div
            id="image"
            className=" opacity-0 group relative flex justify-center items-center overflow-hidden w-full h-[25rem] "
          >
            <Image
              src={"/heroImage-2.jpg"}
              alt=""
              fill
              className=" object-cover group-hover:scale-[1.1]  duration-400   "
            />
            <div className="absolute uppercase text-center">
              <h1 className=" text-4xl text-[#2d3a4b] font-semibold mb-8">
                accessories
              </h1>
              <Link
                href={"/collections?category=jewelery"}
                className="  cursor-pointer uppercase py-2 px-4  bg-[#2d3a4b] hover:scale-[1.1]  duration-300 text-white"
              >
                more
              </Link>
            </div>
          </div>
          <div
            id="image"
            className=" opacity-0 group relative flex justify-center items-center  overflow-hidden w-full h-[20rem] "
          >
            <Image
              src={"/heroImage-4.jpg"}
              alt=""
              fill
              className=" object-cover group-hover:scale-[1.1] duration-400 "
            />
            <div className="absolute uppercase text-center">
              <h1 className=" text-4xl text-[#2d3a4b] font-semibold mb-8">
                female tshirt
              </h1>
              <Link
                href={"/collections?category=women%27s+clothing"}
                className=" cursor-pointer uppercase py-2 px-4  bg-[#2d3a4b] hover:scale-[1.1]  duration-300 text-white"
              >
                more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" group relative w-fit overflow-hidden mx-auto py-2 px-4 ">
        <Link
          href={"/collections"}
          className="w-full uppercase border hover:bg-[#2d3a4b] duration-300 hover:text-white  border-[#2d3a4b] py-2 px-4 "
        >
          show more
        </Link>
      </div>
    </section>
  );
}

export default HeroImages;
