"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';

export default function Intro() {
  return (
    <section className="mb-28 sm:mb-0 max-w-[50rem] mx-auto text-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type:'tween', duration:0.5}}>
            <Image
              src={"https://avatars.githubusercontent.com/u/113068910?v=4"}
              alt="Salman Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-32 w-32 object-cover rounded-full border-[0.2rem] border-white"
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
        <span className="font-bold">Hello, I'm Salman.</span> I'm a {" "} <span>Full-Stack developer</span>. I love building <span className="font-bold">efficient web applications</span>. My focus is <span className="underline">MERN Stack </span>& <span className="underline">Next.js</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay: 0.15}}>
        <Link href={"#contact"} className="group bg-slate-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition">
            Contact me here <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition"/>
        </Link>

        <a href="/CV.pdf" download={true} className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10">
          Download CV <HiDownload className="opacity-80 group-hover:translate-y-1 transition"/>
        </a>

        <a href="https://www.linkedin.com/in/salman-khan-a2957925b/" target="_blank" className="bg-white text-slate-700 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border border-black/10">
          <BsLinkedin/>
        </a>
        <a href="https://github.com/Salman-at-github" target="_blank" className="bg-white text-slate-700 hover:text-slate-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition border border-black/10">
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  );
}
