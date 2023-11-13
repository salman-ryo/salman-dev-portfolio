"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { useSectionInView } from "../_lib/hooks";
import Scroll from 'react-scroll';
import dynamic from "next/dynamic";
const ScrollLink = Scroll.Link;


  function NoSSRComponent() {
  //use custom hook takes tab, threshold as props
  const {ref} = useSectionInView('Home',0.75);

  return (
    <section ref={ref} className="mb-28 sm:mb-0 w-full sm:max-w-[50rem] px-6 mx-auto text-center scroll-mt-24" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type:'tween', duration:0.5}}>
            <Image
              // src={"https://avatars.githubusercontent.com/u/113068910?v=4"}
              src={'/newdp.png'}
              alt="Salman Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-32 w-32 object-cover rounded-full border-[0.2rem] border-white  dark:bg-[#050133] dark:border-black dark:brightness-90"
              id="profilePhoto"
            />
          <span
            className="text-5xl absolute bottom-0 right-0 cursor-pointer"
            id="handEmoji"
          >
            👋
          </span>
          </motion.div>
        </div>
      </div>
      <motion.h1 className="mb-10 mt-6 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type:'just', duration:0.5}}>
        <span className="font-semibold dark:text-yellow-400 ">Hello, I'm Salman.</span> I'm a {" "} <span className="font-semibold dark:text-cyan-100">Full-Stack </span>developer. I love building <span className="font-semibold dark:text-cyan-100">efficient web applications</span>. My focus is <span className="font-semibold dark:text-cyan-100">MERN Stack </span>& <span className="font-semibold dark:text-cyan-100">Next.js</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
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
        <Link href={"#contact"} className="group bg-slate-800 text-white dark:bg-black dark:border-x-cyan-300 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition border-2 border-black/10">
            Contact me here <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition"/>
        </Link>
        </ScrollLink>

        <a href="/CV.pdf" download={true} className="group bg-white dark:bg-black dark:hover:bg-black dark:border-x-cyan-300 dark:text-gray-200 dark:hover:text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border-2 border-black/10">
          Download CV <HiDownload className="opacity-80 group-hover:translate-y-1 transition"/>
        </a>

        <a href="https://www.linkedin.com/in/salman-khan-a2957925b/" target="_blank" className="bg-white dark:bg-black text-slate-700 dark:text-slate-100 dark:border-x-cyan-300 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border border-black/10">
          <BsLinkedin/>
        </a>
        <a href="https://github.com/Salman-at-github" target="_blank" className="bg-white dark:bg-black dark:text-slate-100 dark:border dark:border-x-cyan-300 dark:hover:animate-spin text-slate-700 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border border-black/10">
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  );
}

const Intro = dynamic(()=>Promise.resolve(NoSSRComponent),{ssr:false});
export default Intro;