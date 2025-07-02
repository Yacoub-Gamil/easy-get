"use cleint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "collections", href: "/collections" },
  { name: "cart", href: "/cart" },
  { name: "contact us", href: "/contact" },
];
function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useGSAP(() => {
    if (isOpen) {
      gsap.to("#navMenu", {
        width: "100%",
        duration: 0.3,
        display: "block",
      });
      gsap.to("#links", {
        opacity: 1,
        delay: 0.2,
        duration: 0.3,
        scale: 1,
      });
    } else {
      gsap.to("#navMenu", {
        width: 0,
        display: "none",
        duration: 0.2,
        delay: 0.6,
      });
      gsap.to("#links", {
        duration: 0.4,
        opacity: 0,
        scale: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className=" cursor-pointer"
      >
        {!isOpen ? (
          <MdMenu className=" text-xl " />
        ) : (
          <MdMenu className=" text-xl" />
        )}
      </div>

      <div
        id="navMenu"
        className=" left-0 hidden h-[calc(100vh-65px)] top-[4rem] p-4 w-0 bg-white absolute"
      >
        <div className=" flex justify-center items-center h-full ">
          <div
            id="links"
            className=" flex flex-col scale-0 opacity-0 items-center justify-center gap-8 capitalize text-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathName === link.href
                    ? " py-2 px-4 border-b bg-[#2d3a4b] text-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
