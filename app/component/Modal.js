
import { ImCross } from "react-icons/im";


export default function Modal({open, onClose, children}){
    return(
        <div  className={`fixed inset-0 flex justify-center items-center transition-colors ${open? "visible bg-black/20 z-50":"invisible"} `} >

            <div className={`bg-white rounded xl shadow p-6 transition-all ${open? 'scale-100 opacity-100' : 'scale-125 opacity-0'} w-[600px] h-[600px] `}>
            <div className="w-full flex justify-end cursor-pointer"><ImCross onClick={ onClose} className=""/></div>

            {children}
            </div>
            
             </div>
    )
}