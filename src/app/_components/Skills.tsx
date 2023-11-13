"use client"
import Image from "next/image";
import React from "react";
import { skillsData } from "../_lib/data";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../_lib/hooks";
import { useActiveTab } from "../_context/ActiveTabContext";

export default function Skills() {

    const {theme} = useActiveTab();

    const OneByOneVariant ={
        initial: {
            opacity: 0,
            y:200
        },
        animate: {
            opacity: 1,
            y:0
        },
    }

    const {ref} = useSectionInView('Skills',0.5);
  return (
    <section id="skills" ref={ref} className=" mb-28 sm:mb-48 text-center mx-auto max-w-[53rem] sm:pt-10">
      <SectionHeading>my skills</SectionHeading>
        <ul className=" flex flex-wrap justify-center gap-5 sm:gap-8 px-4 sm:px-0">
          {skillsData.map((skill, index) => {
            return (
              <motion.li key={index} className="w-fit h-fit flex justify-center items-center flex-col"
              variants={OneByOneVariant}
              initial='initial'
              whileInView='animate'
              transition={{delay: 0.05*index }}
              >
                <Image
                  src={theme ==='light'? skill.url.light : skill.url.dark}
                  alt={skill.name}
                  height={64}
                  width={64}
                  className="cursor-pointer hover:scale-125 transition"
                />
                <h2 className="font-semibold">{skill.name}</h2>
              </motion.li>
            );
          })}
        </ul>
    </section>
  );
}
