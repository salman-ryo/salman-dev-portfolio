"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../_lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-8 sm:mb-40 max-w-[45rem] text-center leading-8 mx-auto px-10 sm:px-0"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate learner and aspiring{" "}
        <span className="font-medium dark:text-yellow-200">Web Developer</span>{" "}
        on a journey to turn my coding enthusiasm into a fulfilling career.
        While my professional journey has led me through various non-technical
        fields since 2019, my heart and mind have always been captivated by the
        world of technology. A year of dedicated practice and learning has
        equipped me with a robust skill set in the{" "}
        <span className="font-medium dark:text-yellow-200">MERN</span>{" "}
        stack—covering{" "}
        <span className="font-medium dark:text-yellow-200">HTML</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">CSS</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">JavaScript</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">React</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">Node.js</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">Express</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">MongoDB</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">Tailwind CSS</span> ,{" "}
        <span className="font-medium dark:text-yellow-200">TypeScript</span> ,
        <span className="font-medium dark:text-yellow-200"> Redux Toolkit</span>{" "}
        , and more. My core stack is{" "}
        <span className="font-medium dark:text-yellow-200">MERN</span> with{" "}
        <span className="font-medium dark:text-yellow-200">Next.js</span>.
      </p>
      <p>
        I'm currently on the lookout for opportunities to apply my knowledge and
        skills in a professional setting. I believe that sometimes all it takes
        is the right opportunity to showcase what one is truly capable of.
      </p>
    </motion.section>
  );
}
