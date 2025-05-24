"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const aciveFilter = searchparams.get("category") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchparams);
    params.set("category", filter.replace("-", " "));
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    console.log(filter);
  }

  return (
    <div className=" flex bg-stone-50 rounded-full p-1 justify-between">
      <button
        className={`${
          aciveFilter === "all"
            ? " bg-[#2d3a4b] text-white shadow-xl duration-300 "
            : ""
        } py-2 px-6 rounded-2xl cursor-pointer capitalize  `}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className={`${
          aciveFilter === "women's clothing"
            ? "bg-[#2d3a4b] text-white shadow-xl duration-300 "
            : ""
        } py-2 px-6 rounded-2xl cursor-pointer capitalize `}
        onClick={() => handleFilter("women's-clothing")}
      >
        women
      </button>

      <button
        className={`${
          aciveFilter === "men's clothing"
            ? "bg-[#2d3a4b] text-white shadow-xl duration-300  "
            : ""
        } py-2 px-6 rounded-2xl cursor-pointer capitalize `}
        onClick={() => handleFilter("men's-clothing")}
      >
        men
      </button>
      <button
        className={`${
          aciveFilter === "jewelery"
            ? "bg-[#2d3a4b] text-white shadow-xl duration-300 "
            : ""
        } py-2 px-6 rounded-2xl cursor-pointer capitalize `}
        onClick={() => handleFilter("jewelery")}
      >
        jewelery
      </button>
      <button
        className={`${
          aciveFilter === "electronics"
            ? "bg-[#2d3a4b] text-white shadow-xl duration-300 "
            : ""
        } py-2 px-6 rounded-2xl cursor-pointer capitalize `}
        onClick={() => handleFilter("electronics")}
      >
        {" "}
        electronics
      </button>
    </div>
  );
}

export default Filter;
