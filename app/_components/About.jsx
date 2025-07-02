"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

function About() {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.from(aboutRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div ref={aboutRef} className="">
      <div className=" relative h-[60vh]">
        <Image src={"/about/about-image.jpg"} alt="" fill />
      </div>
      <div className=" flex flex-col justify-center items-center gap-8 lg:max-w-[40%] mx-auto mt-10">
        <h1 className=" text-4xl font-semibold text-[#2d3a4b]">
          A Brief History
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          volutpat dui at lacus aliquet, a consequat enim aliquet. Integer
          molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae
          auctor orci fringilla eget. Pellentesque in placerat felis. Etiam
          mollis venenatis luctus. Morbi ac scelerisque mauris. Etiam sodales a
          nulla ornare viverra. Nunc at blandit neque, bibendum varius purus.
        </p>
        <p>
          Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nunc faucibus imperdiet vulputate. Morbi volutpat leo iaculis elit
          vehicula, eu convallis magna finibus. Suspendisse tristique
          ullamcorper erat a elementum. Cras eget elit non nunc aliquam
          ullamcorper quis sed metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec malesuada, erat in ullamcorper bibendum, elit
          lacus mattis lorem, quis luctus diam lorem vel ligula.
        </p>
      </div>
      <div className=" mt-8">
        <div className=" relative h-[60vh] w-[80%] mx-auto">
          <Image src={"/about/about-img2.jpg"} alt="" fill />
        </div>
        <div className=" flex justify-center flex-col lg:flex-row mx-auto gap-10 mt-8 items-center">
          <div className=" flex flex-col gap-8 ">
            <h1 className=" text-5xl">our vision</h1>
            <p className=" text-2xl lg:max-w-[40%]">
              We craft awesome stuff with great experiences
            </p>
          </div>
          <div className=" flex gap-4 flex-col lg:max-w-[40%]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              volutpat dui at lacus aliquet, a consequat enim aliquet. Integer
              molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae
              auctor orci fringilla eget. Pellentesque in placerat felis. Etiam
              mollis venenatis luctus. Morbi ac scelerisque mauris. Etiam
              sodales a nulla ornare viverra. Nunc at blandit neque, bibendum
              varius purus.
            </p>
            <p>
              Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nunc faucibus imperdiet vulputate. Morbi volutpat
              leo iaculis elit vehicula, eu convallis magna finibus. Suspendisse
              tristique ullamcorper erat a elementum. Cras eget elit non nunc
              aliquam ullamcorper quis sed metus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec malesuada, erat in ullamcorper
              bibendum, elit lacus mattis lorem, quis luctus diam lorem vel
              ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
