"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { BiZoomIn } from "react-icons/bi";
import { useActiveTab } from "../_context/ActiveTabContext";
import Link from "next/link";
import { skillsData } from "../_lib/data";
import CarouselCard from "./CarouselCard";
import { ProjectProps } from "../_lib/types";

const Project : React.FC<ProjectProps> = ({ project, index,zoomImages, setZoomImages, setSelectedProjectUrl }) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "450px end"], //animation starts when START of the proj touches END of viewport, and complete by when 500px touches end of vp
  });

  const Pxis = useTransform(scrollYProgress, [0, 1], [600, 0]);
  const Nxis = useTransform(scrollYProgress, [0, 1], [-600, 0]);
  const opacityScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const { theme } = useActiveTab();

  const skillTags = project.tags.map((tagName) => {
    const skill = skillsData.find((skill) => skill.name === tagName);
    return skill;
  });

  return (
      <div
        className={`overflow-hidden my-16 h-fit flex items-center justify-center md:justify-evenly flex-col-reverse ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "
        }`}
        key={index}
        ref={projectRef}
      >
        <motion.div
          className="w-2/3 text-center md:w-1/3 flex items-center justify-center flex-col"
          style={{
            x: index % 2 === 0 ? Nxis : Pxis,
            opacity:opacityScale
          }}
        >
          <h3 className="text-2xl font-medium flex  items-center justify-center gap-2  dark:text-yellow-400">
            {project.title}
            {project.hostedUrl && (
              <span title="Visit Live Site">
                <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                  <BiLinkExternal className=" text-blue-400 hover:text-cyan-300 hover:scale-110 font-bold cursor-pointer" />
                </a>
              </span>
            )}
          </h3>
          <p className="mt-2 leading-relaxed">{project.description}</p>
          <ul className="flex flex-wrap items-center justify-center mt-4 gap-2 p-2 rounded-xl">
            <h2 className="font-bold text-xl shine">Stack :</h2>
            {skillTags.map((skill, index) => (
              <li key={index}>
                <Link href="#skills" aria-label="Navigate to Skills section">
                {skill &&
                  <img src={theme === 'light' ? skill.url.light : skill.url.dark} alt={"Skill"} className="h-10 w-10 cursor-pointer hover:scale-125 transition" title={skill.name} />
                }
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 h-fit px-6 mb-6 md:mb-0 relative"
          style={{
            x: index % 2 === 0 ? Pxis : Nxis,
            opacity: opacityScale
          }}
        >
          {!zoomImages && (
            <BiZoomIn title="View Fullscreen"
              className="absolute top-0 right-0 sm:top-0  sm:right-0 z-[998] dark:text-cyan-100 text-2xl hover:scale-110 cursor-pointer"
              onClick={() => {
                setZoomImages(true);
                setSelectedProjectUrl(project.imageUrl);
              }}
            />
          )}
          <CarouselCard images={project.imageUrl} />
        </motion.div>
      </div>
  );
};

export default Project;
