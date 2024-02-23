import React from 'react'
import OverlayCarousel from './OverlayCarousel'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { OverlayImagePropType } from '../_lib/types';




export default function OverlayImage({urls, setZoomImages}: OverlayImagePropType ) {
  return (
    <div className="bg-[#00AAF9] dark:bg-black overflow-hidden  fixed top-0 right-0 z-[998] inset-0 flex justify-center items-center p-2 sm:rounded-2xl sm:px-8 py-4">
        <button className='absolute z-[998]  top-3 right-3 transition-transform duration-300 text-white hover:opacity-100 hover:scale-110 opacity-80 text-5xl' onClick={()=>{setZoomImages(false)}}>
            <IoIosCloseCircleOutline title='Minimize'/>
        </button>
           <OverlayCarousel images={urls}/>
        </div>
  )
}
