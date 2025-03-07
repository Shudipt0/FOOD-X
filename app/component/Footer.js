import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-black text-white pt-12 pb-10'>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center  md:items-start px-12 sm:px-6 md:px-10  gap-6 md:gap-2 ">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0 items-center md:items-start">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-mono uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-mono uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-mono uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-mono uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    
                        
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                       

                        {/* MENU START */}
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About FOODX
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    
                    {/* NORMAL MENU END */}
                
                {/* social menu start*/}
                <div className='flex flex-col items-center gap-4 '>
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                   <div>
                   <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 FOOD-X, Inc. All Rights Reserved
                </div>
                   </div>
                   <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                    </div>
                </div>
                {/* social menu end */}
                </div>
              
    </div>
  )
}

export default Footer
