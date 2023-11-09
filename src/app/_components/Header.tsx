"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import { links } from "../_lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full bg-white border border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop:blur-[0.5rem] "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      {/* create a separate nav as we cannot add another motion inside motion.div which is required for our Links anymation */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-1 sm:gap-5 w-[22rem] sm:w-[initial] text-[0.9rem] font-medium text-gray-600">
          {links.map((link)=>{
            return(
              <motion.li key={link.hash} className="h-3/4 flex justify-center items-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}>
                <Link href={link.hash} className="w-full flex justify-center items-center p-3 hover:text-gray-950 transition">
                  {link.name}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}
