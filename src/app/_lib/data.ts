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
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "Fit-Wear",
    description:
      "Developed a comprehensive e-commerce application using NextJS for both the front end and backend. Achieved a modern aesthetic with Tailwind CSS and Tail Blocks. Implemented Server Side Rendering and Client Side Rendering for optimized performance. Featured a dedicated admin dashboard with light and dark themes for efficient product management.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "JWT", "Context API"],
    imageUrl: [
      "/projects/fit-wear/FitWear1.webp",
      "/projects/fit-wear/FitWear2.webp",
      "/projects/fit-wear/FitWear3.webp",
    ],
    hostedUrl: "https://fit-wear.vercel.app",
  },
  {
    title: "MyNotes",
    description:
      "Crafted a dynamic MERN stack cloud application for seamless note storage and management. Leveraged React.js, Express.js, MongoDB, and Json Web Token for robust authentication and authorization. Implemented the Context API and Restful API along with React Bootstrap, custom components, and icons. Ensured security with bcryptJS and salts for user password encryption. Implemented an email verification system using nodemailer's OTP function to enhance account security.",
    tags: ["React", "Express", "MongoDB", "Node.js", "Context API", "Bootstrap"],
    imageUrl: [
      "/projects/my-notes/MyNotes1.webp",
      "/projects/my-notes/MyNotes2.webp",
    ],
    hostedUrl: "https://my-notes-dev.vercel.app/",
  },
  {
    title: "Hire Matrix",
    description:
      "Developed a React and Firebase-powered job posting platform with real-time features. Users can login using email or Google, post jobs, and receive instant notifications for new applications. Ensured a seamless application workflow, allowing job posters to efficiently manage applications within the platform.",
    tags: ["React", "Firebase", "MongoDB", "Tailwind"],
    imageUrl: [
      "/projects/hire-matrix/login.webp",
      "/projects/hire-matrix/jobs.webp",
      "/projects/hire-matrix/details.webp",
      "/projects/hire-matrix/apps.webp",
      "/projects/hire-matrix/app.webp",
    ],
    hostedUrl: "https://hire-matrix.vercel.app",
  },
  {
    title: "NewsGuy",
    description:
      "Developed a user-friendly front-end React news application that seamlessly fetches news from a backend using a News API. Showcased a polished UI crafted with Bootstrap for a clean and intuitive design. Users can stay informed and navigate through the latest news effortlessly, making it an engaging platform for accessing up-to-date information.",
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API", "Bootstrap"],
    imageUrl: [
      "/projects/news-guy/NewsGuy1.webp",
      "/projects/news-guy/NewsGuy2.webp",
    ],
  },
  {
    title: "BingeWatch",
    description:
      "Designed a sleek front-end NextJS application that leverages a Rapid API (Netflix) to dynamically fetch and display movie/show details. Implemented dynamic routing for a seamless and intuitive user experience. Provided an immersive platform for users to discover and explore their favorite movies and shows.",
    tags: ["Next.js", "React", "Rapid API", "MongoDB", "NodeJS"],
    imageUrl: [
      "/projects/binge-watch/BingeWatch1.webp",
      "/projects/binge-watch/BingeWatch2.webp",
    ],
  },
  {
    title: "MyChat",
    description:
      "Introduced 'MyChat', a real-time chat application utilizing React and Socket.IO to facilitate seamless message sharing among participants within the same room. This interactive platform enhances communication through instant updates, providing a dynamic and engaging environment for users. The combination of React and Socket.IO in the context of Node.js creates a robust foundation for real-time chat functionality.",
    tags: ["React", "Socket.io", "Node.js"],
    imageUrl: [
      "/projects/my-chat/MyChat1.webp",
      "/projects/my-chat/MyChat2.webp",
    ],
  },
];

export const skillsData = [
  {
    name: "HTML",
    url: { light: "/skills/light/html.svg", dark: "/skills/dark/html.svg" },
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    name: "CSS",
    url: { light: "/skills/light/css.svg", dark: "/skills/dark/css.svg" },
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    url: { light: "/skills/light/js.svg", dark: "/skills/dark/js.svg" },
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    url: { light: "/skills/light/ts.svg", dark: "/skills/dark/ts.svg" },
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    url: { light: "/skills/light/react.svg", dark: "/skills/dark/react.svg" },
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    url: { light: "/skills/light/nextjs.svg", dark: "/skills/dark/nextjs.svg" },
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    url: { light: "/skills/light/node.svg", dark: "/skills/dark/node.svg" },
    link: "https://nodejs.org/docs/latest/api/",
  },
  {
    name: "MongoDB",
    url: { light: "/skills/light/mongo.png", dark: "/skills/dark/mongo.png" },
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "Git",
    url: { light: "/skills/light/git.svg", dark: "/skills/dark/git.svg" },
    link: "https://git-scm.com/docs/git",
  },
  {
    name: "Tailwind",
    url: { light: "/skills/light/tailwind.svg", dark: "/skills/dark/tailwind.svg",},
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    name: "Redux Toolkit",
    url: { light: "/skills/light/redux.png", dark: "/skills/dark/redux.png" },
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "Express",
    url: { light: "/skills/light/express.svg", dark: "/skills/dark/express.svg", },
    link: "https://expressjs.com/",
  },
  {
    name: "Python",
    url: { light: "/skills/light/python.svg", dark: "/skills/dark/python.svg" },
    link: "https://www.python.org/doc/",
  },
  {
    name: "REST API",
    url: { light: "/skills/light/api.png", dark: "/skills/dark/api.png" },
    link: "https://docs.github.com/en/rest?apiVersion=2022-11-28",
  },
  {
    name: "Framer Motion",
    url: { light: "/skills/light/framermotion.png", dark: "/skills/dark/framermotion.png",},
    link:'https://www.framer.com/motion/'
  },
  {
    name: "Django REST",
    url: { light: "/skills/light/django.png", dark: "/skills/dark/django.svg" },
    link:'https://www.django-rest-framework.org/'
  },
  {
    name: "Flask",
    url: { light: "/skills/light/flask.svg", dark: "/skills/dark/flask.svg" },
    link:'https://flask.palletsprojects.com/en/3.0.x/'
  },
  {
    name: "Firebase",
    url: { light: "/skills/light/fili.png", dark: "/skills/dark/fida.png" },
    link:'https://firebase.google.com/'
  },
];
