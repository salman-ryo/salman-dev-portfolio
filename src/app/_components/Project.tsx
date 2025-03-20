"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal, BiZoomIn } from "react-icons/bi";
import { useActiveTab } from "../_context/ActiveTabContext";
import Link from "next/link";
import { skillsData } from "../_lib/data";
import CarouselCard from "./CarouselCard";
import { ProjectProps } from "../_lib/types";


const Project: React.FC<ProjectProps> = ({
  project,
  index,
  zoomImages,
  setZoomImages,
  setSelectedProjectUrl,
}) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "450px end"],
  });

  const Pxis = useTransform(scrollYProgress, [0, 1], [600, 0]);
  const Nxis = useTransform(scrollYProgress, [0, 1], [-600, 0]);
  const opacityScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const { theme } = useActiveTab();
const DEFAULT_SKILL_IMAGE = theme === "light" ? "/skills/light/default.png" : "/skills/dark/default.png";


  return (
    <div
      className={`overflow-hidden my-16 h-fit flex items-center justify-center md:justify-evenly flex-col-reverse ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      ref={projectRef}
    >
      <motion.div
        className="w-2/3 text-center md:w-1/3 flex items-center justify-center flex-col"
        style={{
          x: index % 2 === 0 ? Nxis : Pxis,
          opacity: opacityScale,
        }}
      >
        <div className="text-2xl hover:text-gray-600 transition-colors duration-300 dark:text-yellow-400 dark:hover:text-yellow-200 w-full mb-1">
          {project.hostedUrl ? (
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href={project.hostedUrl}
              className="font-medium flex items-center justify-center gap-2"
            >
              <span>{project.title}</span>
              <span>
                <BiLinkExternal className="text-blue-400 hover:text-cyan-300 hover:scale-110 font-bold cursor-pointer" />
              </span>
            </Link>
          ) : (
            project.title
          )}
        </div>
        {project.subTitle && (
          <h2 className="text-lg text-gray-600 dark:text-cyan-400">
            ({project.subTitle})
          </h2>
        )}
        <p className="mt-2 leading-relaxed whitespace-pre-wrap">
          {project.description}
        </p>
        <ul className="flex flex-wrap items-center justify-center mt-4 gap-2 p-2 rounded-xl">
          <h2 className="font-bold text-xl shine">Stack :</h2>
          {project.tags.map((tagName, index) => {
            const skill = skillsData.find((skill) => skill.name === tagName);
            const imageUrl =
              skill && ((theme === "light" && skill.url.light) || (theme === "dark" && skill.url.dark))
                ? theme === "light"
                  ? skill.url.light
                  : skill.url.dark
                : DEFAULT_SKILL_IMAGE;
            const displayName = skill ? skill.name : tagName;
            return (
              <li key={index} className="flex flex-col items-center">
                <Link href="#skills" aria-label="Navigate to Skills section">
                  <img
                    src={imageUrl}
                    alt={displayName}
                    className="h-5 w-5 cursor-pointer hover:scale-125 transition"
                    title={displayName}
                  />
                </Link>
                <span className="text-xs mt-1">{displayName}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 h-fit px-6 mb-6 md:mb-0 relative"
        style={{
          x: index % 2 === 0 ? Pxis : Nxis,
          opacity: opacityScale,
        }}
      >
        {!zoomImages && (
          <BiZoomIn
            title="View Fullscreen"
            className="absolute top-0 right-0 sm:top-0 sm:right-0 z-[998] dark:text-cyan-100 text-2xl hover:scale-110 cursor-pointer"
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
