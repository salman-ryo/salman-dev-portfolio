"use client";
import React, { useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import { projectsData } from "../../_lib/data";
import { useScroll } from "framer-motion";
import { useSectionInView } from "../../_lib/hooks";
import OverlayImage from "../OverlayImage";
import { useActiveTab } from "../../_context/ActiveTabContext";
import Link from "next/link";
import Project from "../Project";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const [zoomImages, setZoomImages] = useState(false);
  const [selectedProjectUrl, setSelectedProjectUrl] = useState<string[]>([]);

  return (
    <section ref={ref} className=" py-6 relative scroll-mt-20" id="projects">
      {zoomImages && (
        <OverlayImage setZoomImages={setZoomImages} urls={selectedProjectUrl} />
      )}
      <SectionHeading>my projects</SectionHeading>

      {projectsData.map((project, index) => {
        return (
          <div key={index}>
            <Project project={project} index={index} zoomImages={zoomImages} setZoomImages={setZoomImages} setSelectedProjectUrl={setSelectedProjectUrl} />
          </div>
        );
      })}
    </section>
  );
}
