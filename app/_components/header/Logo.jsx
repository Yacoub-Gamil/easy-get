import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} className=" flex items-center gap-2">
      <Image src={"/logo.svg"} alt="" width={35} height={30} />
      <h1 className=" uppercase text-white  px-2 rounded-tl-2xl rounded-br-2xl bg-red-600  md:text-xl font-semibold">
        easy-get
      </h1>
    </Link>
  );
}

export default Logo;
