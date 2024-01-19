"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import CarouselCard from "./CarouselCard";
import { projectsData, skillsData } from "../_lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../_lib/hooks";
import { BiLinkExternal } from "react-icons/bi";
import OverlayImage from "./OverlayImage";
import { BiZoomIn } from "react-icons/bi";
import { useActiveTab } from "../_context/ActiveTabContext";
import Link from "next/link";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const [zoomImages, setZoomImages] = useState(false);
  const [selectedProjectUrl, setSelectedProjectUrl] = useState<any>([]);
  const {theme} = useActiveTab();

  return (
    <section ref={ref} className=" py-6 relative scroll-mt-20" id="projects">
      {zoomImages && (
        <OverlayImage setZoomImages={setZoomImages} urls={selectedProjectUrl} />
      )}
      <SectionHeading>my projects</SectionHeading>

      {projectsData.map((project, index) => {
        const projectRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
          target: projectRef,

          //start of the container, end of our viewport is the initial value 0, center of container meets center of viewport is the final value 1
          offset: ["start end", "500px end"],
        });
        //convert to +ve and -ve x axis
        const Pxis = useTransform(scrollYProgress, [0, 1], [600, 0]);
        const Nxis = useTransform(scrollYProgress, [0, 1], [-600, 0]);
        const opacityScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

        const skillTags = skillsData.filter((skill)=>project.tags.includes((skill.name)))

        return (
          <div key={index}>
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
                  opacity: opacityScale,
                  scale: opacityScale,
                }}
              >
                <h3 className="text-2xl font-medium flex  items-center justify-center gap-2  dark:text-yellow-400">
                  {project.title}
                  {project.hostedUrl ? (
                    <span title="Visit live site">
                      <a href={project.hostedUrl} target="_blank">
                        <BiLinkExternal className=" text-blue-400 hover:text-cyan-300 hover:scale-110 font-bold cursor-pointer" />
                      </a>
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap items-center justify-center mt-4 gap-2 p-2 border border-white dark:border-cyan-300 rounded-xl">
                  <h2 className="font-bold text-xl shine">Tech :</h2>
                  {skillTags.map((skill, index) => {
                    return (<li key={index}>
                      <Link href="#skills">
                        <img src={theme ==='light'? skill.url.light : skill.url.dark} alt={skill.name} className="h-10 w-10 cursor-pointer hover:scale-125 transition" title="Show Skills"/>
                        </Link>
                        </li> );
                  })}
                </ul>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 h-fit px-6 mb-6 md:mb-0 relative"
                style={{
                  x: index % 2 === 0 ? Pxis : Nxis,
                  scale: opacityScale,
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
          </div>
        );
      })}
    </section>
  );
}
