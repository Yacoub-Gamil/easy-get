import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} className=" flex items-center gap-2">
      <Image src={"/logo.svg"} alt="" width={30} height={30} />
      <h1 className=" uppercase text-[#e9654c] text-xl  md:text-2xl font-bold">
        easy-get
      </h1>
    </Link>
  );
}

export default Logo;
