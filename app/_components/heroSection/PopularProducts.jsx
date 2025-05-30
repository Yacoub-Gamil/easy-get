"use client";

import Image from "next/image";
import Link from "next/link";

const linksAndImages = [
  {
    src: "/mostP/img-bag-1.jpg",
    name: "casual bag",
  },
  {
    src: "/mostP/img-wa-2.jpg",
    name: "watch",
  },
  {
    src: "/mostP/img-sh-3.jpg",
    name: "shoe",
  },
  {
    src: "/mostP/img-te-4.jpg",
    name: "gray toper",
  },
];
function PopularProducts() {
  return (
    <section className="p-4 ">
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" text-3xl font-semibold text-[#2d3a4b] uppercase">
          popular products
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 max-w-[80%] mx-auto mt-8 gap-4">
        {linksAndImages.map((link) => (
          <div key={link.name} className=" hover:scale-[1.1] duration-300">
            <div className=" relative aspect-square">
              <Image
                src={link.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className=" object-contain"
              />
            </div>
            <h1 className=" text-center font-semibold text-2xl uppercase mt-2">
              {link.name}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full mt-10 text-center">
        <Link
          href={"/collections"}
          className="w-full uppercase border hover:bg-[#2d3a4b] duration-300 hover:text-white  border-[#2d3a4b] py-2 px-4 "
        >
          go check
        </Link>
      </div>
    </section>
  );
}

export default PopularProducts;
