"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import pic1 from "@/public/food-1.jpg";
import pic2 from "@/public/food-2.jpg";
import pic3 from "@/public/food-3.jpg";
import Link from "next/link";

function HeroBanner() {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360 mx-auto]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0  bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg rotate-180" />
          </div>
        )}
      >
        <div>
          <Image
            src={pic1}
            className="oaspect-[16/10] md:aspect-auto object-cover  "
          />
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[20px] text-[15px] md:text-[30px] bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white uppercase font-medium cursor-pointer hover:opacity-90  ">
            <Link href={"/menu"}> Order now </Link>
          </div>
        </div>
        <div>
          <Image
            src={pic2}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[20px] text-[15px] md:text-[30px] bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white uppercase font-medium cursor-pointer hover:opacity-90">
            <Link href={"/menu"}> Order now </Link>
          </div>
        </div>
        <div>
          <Image
            src={pic3}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[20px] text-[15px] md:text-[30px] bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white uppercase font-medium cursor-pointer hover:opacity-90">
            <Link href={"/menu"}> Order now </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroBanner;
