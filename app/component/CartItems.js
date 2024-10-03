'use client'

import React from "react";
import Image from "next/image";
// import pic1 from "../../public/product-1.webp";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, removeFromCart } from "../store/CartSlice";


function CartItems({data}) {

  // const {cartItems} = useSelector((state)=> state.cart)

  const dispatch = useDispatch();


  return (
    <div className="flex items-center  py-2 md:py-4 gap-3 md:gap-5 border-b border-black bg-black/[0.8] rounded">
      <div className="shrink-0 aspect-square w-[50px] md:w-[90px] lg:w-[110px] pl-4 ">
             
         <Image src={data?.image} width={500} height={500} className="rounded-full"/>
              
      </div>
      {/* details */}
      <div className="w-full flex flex-col pr-4">
        <div className="flex flex-col md:flex-row justify-between ">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-white ">
            {data?.name}
          </div>
          {/* sub title */}
          <div className="text-sm md:text-md font-medium text-white/[0.6] block md:hidden">
          {data?.mealType}
          </div>
          {/* price */}
          <div className="text-sm md:text-md font-bold text-white/[0.6] mt-2 ">
            MRP : $ {data.price}.00
          </div>
        </div>
        {/* sub title */}
        <div className="text-sm md:text-md font-medium text-white/[0.6] hidden md:block">
        {data?.cuisine}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
              <button className="px-2 text-white/[0.6] border-white/[0.6] border rounded-md " onClick={()=> dispatch(decrement(data))}  >-</button>
               <div className="px-2 text-white/[0.6] border-white/[0.6] border rounded-md ">{data?.quantity}</div>
              <button className="px-2 text-white/[0.6] border-white/[0.6] border rounded-md " onClick={() => dispatch(addToCart(data))} >+</button>

          </div>
          <MdOutlineDeleteForever onClick={()=> dispatch(removeFromCart({id: data?.id}))} className="cursor-pointer text-white/[0.7] hover:text-red-500 text-[18px] md:text-[24px] " />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
