
import Link from 'next/link';
import Image from 'next/image';

// import { getDiscount } from '../utils/helper';



export default function FoodCard({recipe}) {



  return (
    <Link href={`/menu/${recipe.id}`} className='w-[150px] md:w-[220px] lg:w-[280px]  hover:scale-95 duration-200 shadow-xl rounded-md bg-black/[0.7] text-white '>
      <Image src={recipe.image} alt={recipe.name}   width={500} height={500} className='rounded-t-md' />
      <div className='p-4  '>
        <h2 className='text-sm md:text-base font-bold pb-2 '>
           {recipe.name}
        </h2>
        <div className='flex items-center justify-between '>
        <p className='mr-2 text-sm md:text-base font-thin'>{recipe.rating}</p>
        <p className='mr-2 text-sm md:text-base font-thin'>{recipe.cuisine}</p>
        </div>
        {/* <div className='flex items-center text-black/[0.5] '>
            <p className='mr-2 text-base lg:text-lg font-semibold'>&#8377;{product.price}</p>
           {product.originalPrice &&(
            <>
             <p className='text-sm lg:text-base font-medium line-through text-red-600'>&#8377;{product.originalPrice}</p>
             <p className='ml-auto text-sm lg:text-base font-bold text-green-500'>{getDiscount(product.originalPrice, product.price)}
              %off
             </p>
            </>
           )}
        </div> */}
      </div>
    </Link>
  )
}


