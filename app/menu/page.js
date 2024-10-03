 



import Link from 'next/link';
import fetchData from '../utils/dataFetch';
import FoodCard from '../component/FoodCard';
import Pagination from '../component/Pagination';







async function Menu() {
  const allRecipes = await fetchData();



  return (
    <div className='w-full h-fit  py-10 md:py-16 flex flex-col justify-center items-center'>
      <h2 className='mb-10 text-[20px] md:text-[30px] font-bold text-black/[0.7]'>Recipes</h2>

     
      
        {/* {allRecipes.map((data)=>(
        <FoodCard recipe={data} />
      
        ))} */}
        <Pagination allRecipes={allRecipes} /> 
      

        
    </div>
  )
}

export default Menu
