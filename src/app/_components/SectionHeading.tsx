import React from 'react';
import { SectionHeadingProps } from '../_lib/types';



export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium mb-8 capitalize text-center'>{children}</h2>
  )
}
