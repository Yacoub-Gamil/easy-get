"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "collection",
    href: "/collections",
  },
];

function NavBar() {
  const pathName = usePathname();

  return (
    <div className=" flex gap-4 md:text-[1.1rem] font-semibold text-[#2d3a4b] capitalize">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            link.href === pathName
              ? " duration-300 bg-[#2d3a4b] rounded-xl shadow-2xl text-white"
              : ""
          } py-2 px-3 hover:bg-[#2d3a4b] hover:text-white duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
