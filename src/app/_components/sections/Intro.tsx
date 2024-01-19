"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { useSectionInView } from "../../_lib/hooks";
import Scroll from 'react-scroll';
import dynamic from "next/dynamic";
const ScrollLink = Scroll.Link;


  function NoSSRComponent() {
  //use custom hook takes tab, threshold as props
  const {ref} = useSectionInView('Home',0.75);

  return (
    <section ref={ref} className="mb-28 sm:mb-6 w-full sm:max-w-[80rem] px-6 mx-auto text-center scroll-mt-24" id="home">
      <div className="flex items-center justify-center flex-col sm:flex-row">
        <div className="relative sm:w-1/3 sm:ml-2 flex items-center justify-center sm:self-start sm:mt-8 md:mt-6">
          <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type:'tween', duration:0.5}}>
            <img
              // src={"https://avatars.githubusercontent.com/u/113068910?v=4"}
              src={'/newdp.png'}
              alt="Salman Portrait"
              className="h-32 w-32 sm:h-60 sm:w-60 md:h-[16rem] md:w-[16rem] object-cover rounded-full border-[0.2rem] border-white  dark:bg-[#050133] dark:border-black dark:brightness-90"
              id="profilePhoto"
            />
          <span
            className="text-5xl sm:hidden absolute bottom-0 right-0 cursor-pointer"
            id="handEmoji"
          >
            👋
          </span>
          </motion.div>
        </div>
       <div className="sm:w-2/3 sm:px-3"> 
      <motion.h1 className="mb-10 md:mb-32 text-gray-700 dark:text-gray-200 mt-6 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type:'just', duration:0.5}}>
        <span className="font-semibold dark:text-yellow-400 ">Hello, I'm Salman.</span> I'm a {" "} <span className="font-semibold dark:text-cyan-100">Full-Stack </span>developer. I love building <span className="font-semibold dark:text-cyan-100">performance optimized web applications</span>. My focus is <span className="font-semibold dark:text-cyan-100">MERN Stack, Next.js </span>& <span className="font-semibold dark:text-cyan-100">Python</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 items-center text-lg font-medium"
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay: 0.15}}>
        <ScrollLink
          to={"contact"}
          spy
          smooth
          duration={800}
          offset={-100}
        >
        <Link href={"#contact"} className="group bg-purple-900 text-white dark:bg-black dark:border-x-cyan-300 px-7 md:py-3 py-2 sm:py-1 sm:px-3 lg:px-7 sm:text-sm lg:text-lg flex items-center md:gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-purple-950 active:scale-105 transition border-2 border-black/10">
            Contact me <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition"/>
        </Link>
        </ScrollLink>

        <a href="/SalmanResume.pdf" download={true} className="group bg-white text-black dark:bg-black dark:text-white dark:border-x-cyan-300 px-7 md:py-3 py-2 sm:py-1 sm:px-3 lg:px-7 sm:text-sm lg:text-lg flex items-center md:gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border-2 border-black/10">
          Download CV <HiDownload className="opacity-80 group-hover:translate-y-1 transition"/>
        </a>

        <a href="https://www.linkedin.com/in/dev-salman1508/" target="_blank" className="bg-white dark:bg-black text-slate-700 dark:text-slate-100 dark:border-x-cyan-300 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border-[1.5px] border-black/10">
          <BsLinkedin/>
        </a>
        <a href="https://github.com/Salman-at-github" target="_blank" className="bg-white dark:bg-black dark:text-slate-100 dark:border-x-cyan-300 dark:hover:animate-spin text-slate-700 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border-[1.5px] border-black/10">
          <BsGithub/>
        </a>
      </motion.div>
      </div>

      </div>
    </section>
  );
}

const Intro = dynamic(()=>Promise.resolve(NoSSRComponent),{ssr:false});
export default Intro;