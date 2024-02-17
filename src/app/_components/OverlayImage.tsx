import React from 'react'
import CarouselCardB from './CarouselB'

type OverlayImagePropType = {
    urls: string[];
    setZoomImages: React.Dispatch<React.SetStateAction<boolean>>
}
export default function OverlayImage({urls, setZoomImages}: OverlayImagePropType ) {
  return (
    <div className="bg-yellow-400 dark:bg-black overflow-hidden  fixed top-0 right-0 z-[998] inset-0 flex justify-center items-center p-2 sm:rounded-2xl sm:p-8">
        <button className='absolute z-[998]  top-2 right-2 bg-red-500 hover:opacity-100 px-4 py-2 opacity-70 rounded-full' onClick={()=>{setZoomImages(false)}}>
            X
        </button>
           <CarouselCardB images={urls}/>
        </div>
  )
}
