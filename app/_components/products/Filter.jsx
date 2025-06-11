"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const aciveFilter = searchparams.get("category") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchparams);
    params.set("category", filter.replace("-", " "));
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const filter = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      filter.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div ref={filter}>
      <h1 className=" italic text-center mt-[2rem] md:mt-[2rem] mb-[2rem] font-bold uppercase text-[#2d3a4b] text-2xl lg:text-4xl">
        We make you awesome
      </h1>
      <div className=" text-[0.8rem] sm:text-xl flex bg-stone-50 rounded-full p-1 justify-between">
        <button
          className={`${
            aciveFilter === "all"
              ? " bg-[#2d3a4b] text-white shadow-xl duration-300 "
              : ""
          } py-2 px-3  lg:px-6  rounded-2xl cursor-pointer capitalize  `}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            aciveFilter === "women's clothing"
              ? "bg-[#2d3a4b] text-white active:bg-amber-300 shadow-xl duration-300 "
              : ""
          } py-2 px-3  lg:px-6  rounded-2xl cursor-pointer capitalize `}
          onClick={() => handleFilter("women's-clothing")}
        >
          women
        </button>

        <button
          className={`${
            aciveFilter === "men's clothing"
              ? "bg-[#2d3a4b] text-white shadow-xl duration-300  "
              : ""
          } py-2 px-3  lg:px-6  rounded-2xl cursor-pointer capitalize `}
          onClick={() => handleFilter("men's-clothing")}
        >
          men
        </button>
        <button
          className={`${
            aciveFilter === "jewelery"
              ? "bg-[#2d3a4b] text-white shadow-xl duration-300 "
              : ""
          } py-2 px-3  lg:px-6  rounded-2xl cursor-pointer capitalize `}
          onClick={() => handleFilter("jewelery")}
        >
          jewelery
        </button>
        <button
          className={`${
            aciveFilter === "electronics"
              ? "bg-[#2d3a4b] text-white shadow-xl duration-300 "
              : ""
          } py-2 px-3  lg:px-6  rounded-2xl cursor-pointer capitalize `}
          onClick={() => handleFilter("electronics")}
        >
          {" "}
          electronics
        </button>
      </div>
    </div>
  );
}

export default Filter;
