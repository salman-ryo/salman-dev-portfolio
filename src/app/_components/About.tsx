"use client"
import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useActiveTab } from '../_context/ActiveTabContext';

export default function About() {
  const {ref, inView} = useInView({threshold:0.75});

  const {setActiveTab} = useActiveTab();

  useEffect(()=>{
    if(inView){
      setActiveTab('About')
    }
  },[inView])
  return (
    <motion.section ref={ref} className='mb-8 sm:mb-40 max-w-[45rem] text-center leading-8 mx-auto'
    initial={{y:100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{delay:0.175}} id='about'>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        I'm a passionate learner and aspiring <span className='font-medium'>Web Developer</span> on a journey to turn my coding enthusiasm into a fulfilling career. While my professional journey has led me through various non-technical fields since 2019, my heart and mind have always been captivated by the world of technology. A year of dedicated practice and learning has equipped me with a robust skill set in the <span className='font-medium'>MERN</span> stack—covering <span className='font-medium'>HTML</span> , <span className='font-medium'>CSS</span> , <span className='font-medium'>JavaScript</span> , <span className='font-medium'>React</span> , <span className='font-medium'>Node.js</span> , <span className='font-medium'>Express</span> , <span className='font-medium'>MongoDB</span> , <span className='font-medium'>Tailwind CSS</span> , <span className='font-medium'>TypeScript</span> ,<span className='font-medium'> Redux Toolkit</span> , and more. My core stack is <span className='font-medium'>MERN</span> with <span className='font-medium'>Next.js</span>.
        </p>
        <p>
        I'm currently on the lookout for opportunities to apply my knowledge and skills in a professional setting. I believe that sometimes all it takes is the right opportunity to showcase what one is truly capable of.
        </p>
    </motion.section>
    )
}
