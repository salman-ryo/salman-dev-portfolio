"use client"
import React from "react";
import { motion } from "framer-motion";
import { links } from "../_lib/data";
import Scroll from 'react-scroll';
import Link from "next/link";
import dynamic from "next/dynamic";
import { useActiveTab } from "../_context/ActiveTabContext";

const ScrollLink = Scroll.Link;

 function ClientSideHeader() {
  const {activeTab, setActiveTab, setLastClickTime} = useActiveTab();
  
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none sm:top-6 sm:h-[3.25rem] sm:w-[29rem] sm:rounded-full bg-white dark:bg-gradient-to-tr from-[#040269] to-[#420178] sm:border border-white dark:border-gray-300 border-opacity-40 bg-opacity-80 filter shadow-lg shadow-black/[0.03] dark:shadow-cyan-300/[0.5] backdrop-blur-sm "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-1 sm:gap-5 w-[22rem] sm:w-[initial] text-[0.9rem] font-medium text-gray-600 dark:text-gray-100">
          {links.map((link) => (
            <ScrollLink
              key={link.hash}
              to={link.hash.slice(1)}
              spy
              smooth
              duration={800}
              offset={-100}
              
              onClick={()=>{setActiveTab(link.name);
                            setLastClickTime(Date.now())
              }}
            >
                <motion.li
                  className="relative h-3/4 flex justify-center items-center"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
              <Link href={link.hash} className={`${activeTab === link.name? "text-gray-950 font-bold hover:text-black transition dark:hover:text-black" : "dark:hover:text-cyan-300"} w-full flex justify-center items-center p-3  transition cursor-pointer`}>
                  {link.name}
                  {link.name === activeTab &&(
                    <motion.span className="-z-10 bg-gray-300 dark:bg-cyan-300 rounded-full absolute inset-0"
                    layoutId="activeTab"
                    transition={{
                      type:'sping',
                      stiffness:400,
                      damping:30
                    }}
                    ></motion.span>
                  )}
              </Link>
                </motion.li>
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

//export it as no ssr to prevent prerender and hence prevent hydration error due to using Link inside ScrollLink
const Header = dynamic(()=>Promise.resolve(ClientSideHeader), {ssr:false})
export default Header;