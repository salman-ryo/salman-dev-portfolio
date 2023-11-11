"use client";
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type CarouselProps ={
    firstUrl: string;
    secondUrl: string
}

export default function CarouselCard ({firstUrl,secondUrl}: CarouselProps) {
    const settings = {
        showArrows: false,
        interval: 5000,
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
    <div>
        <Carousel {...settings} >
        <img src={firstUrl} alt='project' className='rounded-2xl object-cover '/>
        <img src={secondUrl} alt='project' className='rounded-2xl object-cover '/>
        </Carousel>
    </div>
  )
}
