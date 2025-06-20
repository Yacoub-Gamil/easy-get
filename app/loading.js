"use client";
import { BounceLoader } from "react-spinners";

function loading() {
  return (
    <div className=" flex justify-center items-center w-full h-[90vh] text-4xl">
      <BounceLoader color="#2d3a4b" />
    </div>
  );
}

export default loading;
