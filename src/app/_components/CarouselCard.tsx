"use client";
import Image from 'next/image';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselProps } from '../_lib/types';

export default function CarouselCard ({images}: CarouselProps) {
    const settings = {
        showArrows: false,
        interval: 3000,
        dynamicHeight: true,
        stopOnHover: true,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 500,
        showThumbs: false,
        showIndicators: true,
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
      };
  return (
    <div className='dark:border-[1.5px] dark:border-white rounded-2xl overflow-hidden
    '>
        <Carousel {...settings} >
          {images.map((url : string, index:number)=>{
            return(
              <Image key={index} width={600} height={300} src={url} alt='project' className='object-cover min-w-full min-h-full'/>
            )
          })}
        </Carousel>
    </div>
  )
}
