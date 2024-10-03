

// import FoodCard from "./component/FoodCard";

import CardCarousel from "../component/CardCarousel";
import HeroBanner from "../component/HeroBanner";
import fetchData from "../utils/dataFetch";




export default async function Home() {
  const allRecipes = await fetchData();
  return (
    <div className="h-fit flex flex-col items-center pb-[20px] ">
      <div className=" w-2/3 ">
      <HeroBanner/>
      </div>
       {/* heading and paragraph start */}
       <div className="text-center w-2/3 max-w-[800px] mx-auto  my-[30px] md:my-[60px]">
          <div className="text-[20px] md:text-[28px] mb-4 font-bold leading-tight ">
            Good Food, Good Life
          </div>
          <div className="text-center text-[10px] md:text-[14px] font-bold px-1 text-black/[0.7]">
          Healthy food refers to food that contains the right amount of nutrients to keep our body fit. We need healthy food to keep ourselves fit.
          </div>
        </div>
        {/* heading and paragraph end */}
        {/* products grid start */}
        
         {/* {allRecipes.map((data)=>(
        <FoodCard recipe={data} />
      
        ))} */}
       
         
       <div className="w-[80%]  ">
       <CardCarousel allRecipes={allRecipes}  />
       </div>
        
          
    </div>
  );
}

