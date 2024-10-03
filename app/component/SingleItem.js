"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const price = 59;

export default function SingleItem({ getDetails }) {
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Success! Check your cart.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: "Bounce",
    });
  };
  return (
  
    
    <div className="flex flex-col items-center w-full">
     <ToastContainer />
      <div className="h-fit my-10 w-2/3 bg-white/[0.8] rounded ">
        <div className="w-full flex flex-col lg:flex-row justify-center md:gap-6">
          {/* left side start*/}
          <div className="w-full lg:w-1/2 flex items-center ">
            <img
              src={getDetails.image}
              name={getDetails.name}
              className="p-2 rounded-full "
            />
          </div>
          {/* left side end*/}

          {/* right side start*/}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="w-[90%] mx-auto mt-10">
              {/* recipe title */}
              <div className="text-[22px] lg:text-[30px] font-semibold mb-2 ">
                {getDetails?.name}
              </div>
              {/* recipe details */}
              <p
                className="font-semibold text-base
                lg:text-lg mb-3 text-black/[0.7] "
              >
                {getDetails?.mealType[0]}
              </p>
              <p
                className="font-semibold text-base
                lg:text-lg mb-3 text-black/[0.7]"
              >
                {getDetails?.cuisine}
              </p>

              {/* ingredients */}
              <ul
                className="space-x-6 list-disc flex flex-wrap ml-4 font-semibold text-sm
                lg:text-base mb-3 text-black/[0.7]"
              >
                {getDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              {/* recipe price */}
              <div className="font-semibold lg:text-lg">MRP : $ {price}. 00</div>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-5 ">
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            {/* add to cart button start */}
            
              <button
                className="w-[90%] py-2 md:py-4 rounded-full bg-black text-white md:text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  dispatch(
                    addToCart({
                     ...getDetails,
                      oneQuantityPrice: price,
                      price,
                      // quantity: 0,
                    })
                  );
                  notify();
                }}
              >
                Add to Cart
              </button>
            
            {/* add to cart button end */}
          </div>
        </div>
        {/* right side end*/}
      </div>
    </div>
    
  );
}
