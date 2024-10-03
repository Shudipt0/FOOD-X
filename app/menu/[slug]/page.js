

import SingleItem from '@/app/component/SingleItem';
import fetchData from '@/app/utils/dataFetch';
import Link from 'next/link';
import Image from 'next/image';



async function fetchDetails(currentId) {
  const details = await fetch(`https://dummyjson.com/recipes/${currentId}`);
  const data = await details.json();
  return data;
}

export default async function Menupage({params}) {
  const getDetails = await fetchDetails(params?.slug)
  return (
    <div className=' flex flex-col items-center w-full'>
               
                <Link href={'/menu'} className='mt-5 underline text-[15px] md:text-[20px] font-semibold '>Go back</Link>

    <SingleItem getDetails={getDetails} />
     
    </div>
  
  )
}

 
