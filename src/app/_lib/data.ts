import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Fit-Wear",
    description:
      "A NextJS e commerce application (Full stack) built completely on NextJS for both front end and backend with tailwind CSS and tail blocks. Makes perfect use of Server Side Rendering and Client Side Rendering. Has a dedicated admin dashboard for product management, with both light and dark Theme.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "JWT","Context API", ],
    imageUrl: ['/FitWear1.png','/FitWear2.png'],
  },
  {
    title: "MyNotes",
    description:`A Fully responsive MERN stack cloud application to store notes that uses Reactjs, Expressjs, Mongodb, Json web token for authentication and authorisation, Context API, Restful API, React Bootstrap and custom components and icons.
    User password is stored in the database using bcryptJS encryption and salts
    Created an OTP function using nodemailer for email verification.
    Used environment variables for protecting important information.`,
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API","Bootstrap"],
    imageUrl: ['/MyNotes1.png','/MyNotes2.png'],
  },
  {
    title: "NewsGuy",
    description:`A simple front end React news application that uses a news api to fetch
    the news from backend
    and serve it on front end. Used bootstrap for UI.`,
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API","Bootstrap"],
    imageUrl: ['/NewsGuy1.png','/NewsGuy2.png'],
  },
  {
    title: "BingeWatch",
    description:`A simple front end NextJS application that uses a rapid api (Netflix) to
    fetch and display Movie/Show details. Uses dynamic routing for
    displaying the particular show details.`,
    tags: ["NextJS","React", "Rapid API", "MongoDB", "NodeJS",],
    imageUrl: ['/BingeWatch1.png','/BingeWatch2.png'],
  },
  {
    title: "MyChat",
    description:`A simple real-time chat application that uses React and Socket IO to
    enable message sharing among the participants inside the same room.`,
    tags: ["React", "Socket.io", "NodeJS",],
    imageUrl: ['/MyChat1.png','/MyChat2.png'],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Python",
  "Framer Motion",
] as const;