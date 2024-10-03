
'use client'
import React, {  useState } from "react";
import Modal from "../component/Modal";



export default function OrderButton(){

const [open, setOpen] = useState()
    return(
        <div> 
            <button className="w-full py-2 rounded-full bg-black text-white text-sm font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75" onClick={() => setOpen(true)}>
             Order Now
            </button>

            <Modal open={open} onClose= {()=> setOpen(false)} >

                
                </Modal>
        </div>
    )
}