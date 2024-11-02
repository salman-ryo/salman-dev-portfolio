"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../_lib/hooks";

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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m a dedicated and passionate <span className="font-medium dark:text-yellow-300 text-cyan-700">Full Stack Developer</span> with a strong foundation in the{" "}
        <span className="font-medium dark:text-yellow-300 text-cyan-700">MERN</span> and <span className="font-medium dark:text-yellow-300 text-cyan-700">Python</span> stacks. My journey in the tech world began in 2019, driven by an insatiable curiosity and a love for problem-solving. Over the past few years, I have honed my skills through rigorous self-study, hands-on projects, and professional experiences.
      </p>
      <p className="mb-3">
        I recently completed an internship as a <span className="font-medium dark:text-yellow-300 text-cyan-700">MERN Stack Developer</span>, where I collaborated with a talented team to build scalable web applications. During this internship, I developed and optimized features using <span className="font-medium dark:text-yellow-300 text-cyan-700">React, Next.js</span>, <span className="font-medium dark:text-yellow-300 text-cyan-700">Node.js</span>, <span className="font-medium dark:text-yellow-300 text-cyan-700">Express</span>, and <span className="font-medium dark:text-yellow-300 text-cyan-700">MongoDB</span>. This experience not only strengthened my technical abilities but also enhanced my teamwork and project management skills.
      </p>
      <p className="mb-3">
        Currently, I am working full-time as a <span className="font-medium dark:text-yellow-300 text-cyan-700">Full Stack Developer</span>, where I design and implement robust solutions that drive business success. My role involves leveraging technologies such as <span className="font-medium dark:text-yellow-300 text-cyan-700">Next.js</span>, <span className="font-medium dark:text-yellow-300 text-cyan-700">Tailwind CSS</span>, <span className="font-medium dark:text-yellow-300 text-cyan-700">TypeScript</span>, <span className="font-medium dark:text-yellow-300 text-cyan-700">Flask</span>,<span className="font-medium dark:text-yellow-300 text-cyan-700"> Express</span>, and <span className="font-medium dark:text-yellow-300 text-cyan-700">Django</span> to create seamless and efficient user experiences. I am also proficient in using <span className="font-medium dark:text-yellow-300 text-cyan-700">Redux Toolkit</span> for state management and have cloud computing experience on cloud platforms like <span className="font-medium dark:text-yellow-300 text-cyan-700">AWS</span>.
      </p>
      <p className="mb-3">
        My core expertise lies in the <span className="font-medium dark:text-yellow-300 text-cyan-700">MERN</span> stack, complemented by my proficiency in <span className="font-medium dark:text-yellow-300 text-cyan-700">Next.js</span>. I am continually expanding my knowledge and staying updated with the latest industry trends to deliver high-quality and innovative solutions.
      </p>
      <p>
        I am eager to take on new challenges and contribute to impactful projects. Whether it’s developing cutting-edge web applications, optimizing performance, or exploring new technologies, I am committed to leveraging my skills to create meaningful and effective solutions.
      </p>
    </motion.section>
  );
}
