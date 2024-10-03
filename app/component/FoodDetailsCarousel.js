"use client"

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BiArrowBack} from "react-icons/bi";

import Image from 'next/image';
import p1 from '@/public/p1.png';
import p2 from '@/public/p2.png';
import p3 from '@/public/p3.png';
import p4 from '@/public/p4.png';
import p5 from '@/public/p5.png';
import p6 from '@/public/p6.png';
import p7 from '@/public/p7.png';



function ProductDetailsCarousel() {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto  '>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} showThumbs={true} className="" renderArrowPrev={(clickHandler, hasPrev)=>(
        <div onClick={clickHandler} className='absolute left-0 top-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'>
          <BiArrowBack className='text-sm md:text-lg'/>
        </div>
       )}
       renderArrowNext={(clickHandler, hasNext)=>(
        <div onClick={clickHandler} className='absolute right-0 
        top-[50%]  w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'>
          <BiArrowBack className='text-sm md:text-lg rotate-180'/>
        </div>
       )}
      >
      
      <Image src={p1} className=''/>
      <Image src={p2} className=''/>
      <Image src={p3} className=''/>
      <Image src={p4} className=''/>
      <Image src={p5} className=''/>
      <Image src={p6} className=''/>
      <Image src={p7} className=''/>
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
