"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination({ allRecipes }) {
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = curPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = allRecipes.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = allRecipes.length;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => {
    setCurPage(pageNumber);
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-center ">
        {currentItem.map((data) => (
          <FoodCard recipe={data} />
        ))}
      </div>

      <ul className="flex gap-3 mt-10 items-center ">
        <li className=" rounded-full p-1 hover:bg-red-500 hover:text-white">
          <Link
            href="#"
            onClick={() => {
              if (curPage < pageNumber.length) {
                paginate(curPage - 1);
              }
            }}
          >
            {" "}
            <IoIosArrowBack />
          </Link>
        </li>

        {pageNumber.map((num) => (
          <li
            key={num}
            className={`px-2 bg-white rounded-full ${
              num === curPage ? "text-white bg-red-500 " : ""
            }`}
          >
            <button onClick={() => paginate(num)} className="">
              {num}
            </button>
          </li>
        ))}

        <li className=" rounded-full p-1 hover:bg-red-500 hover:text-white">
          <Link
            href="#"
            onClick={() => {
              if (curPage < pageNumber.length) {
                paginate(curPage + 1);
              }
            }}
          >
            {" "}
            <IoIosArrowForward />
          </Link>
        </li>
      </ul>
    </div>
  );
}
