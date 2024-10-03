'use client'

import React, { useMemo } from "react";
import CartItems from "../component/CartItems";
import { useSelector } from "react-redux";
import Link from "next/link";
import OrderButton from "../component/OrderButton";



function Cart() {
  const {cartItems} = useSelector((state) => state.cart);
  const subTotal = useMemo(()=> {
    return cartItems.reduce((total, val) => total + val.price, 0)
  },[cartItems])
  
  return (
    <div className="min-h-[40vh] max-h-fit flex flex-col items-center w-full mb-10">
      <Link href={'/menu'} className="my-10 underline underline-offset-2 text-sm font-semibold lg:text-base">Back to menu</Link>
      <div className=" text-[24px] md:text-[30px] mb-5 font-semibold leading-tight ">
        Shopping Cart
      </div>
      {cartItems.length > 0 && (
        <>
      <div className="w-[80%] flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
        {/* left site start */}
        <div className="md:w-[70%] px-2">
          <div className="text-[18px] md:text-[22px] py-3 lg:py-5  font-bold text-black/[0.8] ">
            Cart Items
          </div>
          {cartItems.map((item) => (<CartItems key={item.id} data={item} />))}
                    {/* <CartItems key={cartItems.id}  data={cartItems}  /> */}
        
        </div>
        {/* left site end */}

        {/* right site start */}

        <div className="md:w-[30%] ">
          <div className="text-[18px] md:text-[22px] py-3 lg:py-5 font-bold text-black/[0.8] mx-5">
            Summary
          </div>

          <div className="w-full bg-blue-100 rounded-md p-5 ">
            <div className="flex md:flex-col lg:flex-row items-center justify-between ">
              <div className="text-[14px] md:text-[16px] py-3 lg:py-5 font-bold text-black/[0.8] uppercase ">
                subtotal
              </div>
              <div className="text-[14px] md:text-[16px] py-3 lg:py-5 font-bold text-black/[0.8] uppercase ">
                $ {subTotal}
              
              </div>
            </div>
            <div className="text-[12px]  py-3 lg:py-5 font-bold text-black/[0.8]  ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
          </div>
          <div className="pt-4">
            {/* <button className="w-full py-2 rounded-full bg-black text-white text-sm font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75">
             Order Now
            </button> */}
            <OrderButton/>
          </div>
        </div>

        {/* right site end */}
      </div>
      </>
     )} 

    {cartItems.length < 1 && (
      <div className="h-screen">
        No items added
      </div>
    )}
      
    </div>
  );
}

export default Cart;
