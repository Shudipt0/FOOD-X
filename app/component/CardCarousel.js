'use client'

import FoodCard from "./FoodCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CardCarousel({ allRecipes }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
   
      <div className="  ">
        <Carousel responsive={responsive} containerClass='my-[10px]' itemClass=" mx-[10px] rounded-md  bg-black/[0.7] "  >
          {allRecipes.map((data) => (
            <FoodCard recipe={data}  />
          ))}
        </Carousel>
        
      </div>
   
  );
}
