"use client";

import Link from "next/link";

import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo-3.png";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const data = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Menu", url: "/menu" },
  { id: 4, name: "Contact", url: "/contact" },
];


function NavBar() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[90px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // active link
  const pathName = usePathname();
  

  return (
    <div
      className={`w-full h-[60px] md:h-[90px] bg-black/[0.8] flex items-center justify-between px-6 md:px-14 z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div className="w-12 sm:w-14 md:w-20">
        <Link href="/home" >
          <Image src={logo} />
         
        </Link>
        
      </div>
      <ul className="hidden md:flex items-center gap-10 font-medium text-white hover:text-amber-500">
        {data.map((item) => {
          const isActive = pathName.startsWith(item.url);
     return  ( <li key={item.id} className={isActive? 'md:text-lg font-bold  text-amber-500': 'md:text-lg font-bold  text-white hover:text-amber-500' }>
            <Link href={item.url}>{item.name}</Link>
          </li>)
})}
      </ul>

      {/* for mobile device */}

      <div className="flex items-center gap-4 ">
        {/* icons start */}
        <div className="flex items-center">
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md-12 rounded-full flex justify-center items-center  relative ">
              <TiShoppingCart size={25} className="text-white hover:text-amber-500" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
        </div>
        {/* icons end */}
        <div
          onClick={() => setMenu(!menu)}
          className="cursor-pointer pr-3 md:hidden "
        >
          {menu ? (
            <FaRegTimesCircle size={15} className="text-white hover:text-amber-500"/>
          ) : (
            <FaBarsStaggered size={15} className="text-white hover:text-amber-500" />
          )}
        </div>
      </div>

      <ul
        className={`flex flex-col md:hidden font-bold absolute top-[50px] ml-[-1000px] w-full max-h-screen bg-black border-t z-50  ${
          menu ? "ml-[-24px] duration-500" : " duration-500"
        }`}
      >
        {data.map((item) => {
          const isActive = pathName.startsWith(item.url)
          return (
            <li
              key={item.id}
              onClick={() => setMenu(!menu)}
              className={isActive? "py-4 px-5 border-b text-amber-500": "py-4 px-5 border-b text-white hover:text-amber-500"}
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default NavBar;
