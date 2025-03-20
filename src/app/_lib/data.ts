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
    title: "The Skeptic Dev",
    subTitle: "Modern Block-Based Blog Platform",
    description: `Skeptic Dev is a cutting-edge blog platform built with Next.js, inspired by the intuitive content editing experiences of Notion and Medium. Designed with a modular block-based editor, it allows users to create rich, interactive content featuring text, images, code with syntax highlighting, and embedded media. The platform leverages server-side rendering and best SEO practices to deliver optimal performance and search engine visibility. With robust authentication powered by NextAuth and an emphasis on developer experience using TypeScript, Tailwind CSS, and a component-based architecture, Skeptic Dev ensures both a seamless user experience and high-quality code maintainability. My contributions focused on integrating secure authentication flows, implementing a highly customizable editor, and optimizing SEO strategies, making the platform both scalable and efficient.`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "NextAuth",
      "SEO",
      "React",
      "Framer Motion",
      "MongoDB",
      "Shadcn",
      "Tiptap",
      "Node.js",
    ],
    imageUrl: [
      "/projects/skeptic-dev/landing.webp",
      "/projects/skeptic-dev/blogs.webp",
      "/projects/skeptic-dev/new-blog.webp",
    ],
    hostedUrl: "https://the-skeptic-dev.in",
  },
  {
    title: "PDF-Bot",
    subTitle: "Local RAG for PDFs",
    description: `PDF-Bot is a lightweight, local retrieval-augmented generation system built to index and query PDF documents using Langchain, Chroma, and Ollama. The project processes PDFs by loading them from a designated folder, splitting the content into manageable chunks using Langchain’s RecursiveCharacterTextSplitter, and indexing these chunks into a persistent Chroma vector database. It then employs an Ollama-powered LLM to generate detailed answers based on the retrieved context. With a modular architecture that separates document loading, text processing, database operations, and LLM interactions, PDF-Bot ensures efficient and accurate information retrieval. My contributions involved optimizing the document processing pipeline, refining the vector indexing strategy, and enhancing the LLM integration for more precise answer generation.`,
    tags: [
      "Python",
      "Langchain",
      "Chroma",
      "Ollama",
      "LLM",
      "RAG",
      "Vector DB",
      "Modular Architecture",
    ],
    imageUrl: ["/projects/pdf-bot/ragol-gem.webp"],
    hostedUrl: "https://github.com/salman-ryo/pdf-bot",
  },

  {
    title: "IAS Sathi",
    subTitle: "EdTech",
    description: `IAS Sathi is an innovative digital platform designed to empower civil services aspirants in India by providing comprehensive exam preparation resources. The application combines high-quality study material, interactive tools, and advanced AI-powered features to create an effective and engaging learning experience. Key features include an AI-driven chatbot offering instant answers to users' queries, stress management tools designed to help candidates maintain mental well-being throughout their preparation, and a robust task management system to optimize study plans. The app also provides simulated tests and quizzes to assess knowledge and track progress, ensuring aspirants are well-prepared for every challenge they face. My contributions involved developing core application features, focusing on user engagement through personalized stress-relief sessions powered by AI, and integrating the backend API for high performance and scalability. IAS Sathi is designed to enhance the study journey and support students in achieving their goals.`,
    tags: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Express",
      "Django REST",
      "Context API",
      "AWS",
    ],
    imageUrl: [
      "/projects/ias-sathi/ias_1.webp",
      "/projects/ias-sathi/ias_2.webp",
      "/projects/ias-sathi/ias_3.webp",
      "/projects/ias-sathi/ias_4.webp",
    ],
    hostedUrl: "https://iassathi.com",
  },
  {
    title: "Bhavishyan",
    subTitle: "EdTech",
    description: `Bhavishyan is a comprehensive student management platform designed specifically for educators. It offers tools to streamline academic counseling, manage student stress, and enhance the efficiency of classroom management. The platform includes an AI-powered counseling system that identifies and addresses student stress points, allowing teachers to better support their students' well-being. Additionally, Bhavishyan provides robust scheduling and task management features tailored to educators' needs, making classroom and workload management more effective. My role included leading the development of AI-based counseling features and building efficient task scheduling tools to provide teachers with an all-in-one solution for student success.`,
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Django REST",
      "SQL",
      "Context API",
      "AWS",
    ],
    imageUrl: [
      "/projects/bhavishyan/bhav_1.webp",
      "/projects/bhavishyan/bhav_2.webp",
      "/projects/bhavishyan/bhav_3.webp",
    ],
    hostedUrl: "https://bhavishyayaan.com/",
  },
  {
    title: "AIMEERS",
    subTitle: "EdTech",
    description: `AIMEERS is an advanced AI-driven platform focused on assisting students in their preparation for the IIT JEE exams. Built with a primary focus on student engagement, the platform combines a range of intelligent tools to support learning, including an interactive chatbot that answers questions instantly, a test management system that enables students to take and review mock exams, and stress relief features to help students manage the pressures of exam preparation. The application’s goal is to support students’ academic progress by providing AI-enabled assistance and resources to maximize their performance. I developed essential functionalities such as the chatbot, test management, and stress management modules to ensure a holistic support system for IIT JEE aspirants.`,
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Django REST",
      "SQL",
      "Context API",
    ],
    imageUrl: ["/projects/aimeers/aim_1.webp", "/projects/aimeers/aim_2.webp"],
  },
  {
    title: "Fit-Wear",
    subTitle: "E-Commerce",
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
    subTitle: "Cloud Notebook",
    description:
      "Crafted a dynamic MERN stack cloud application for seamless note storage and management. Leveraged React.js, Express.js, MongoDB, and Json Web Token for robust authentication and authorization. Implemented the Context API and Restful API along with React Bootstrap, custom components, and icons. Ensured security with bcryptJS and salts for user password encryption. Implemented an email verification system using nodemailer's OTP function to enhance account security.",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Context API",
      "Bootstrap",
    ],
    imageUrl: [
      "/projects/my-notes/AddANote.webp",
      "/projects/my-notes/Login.webp",
      "/projects/my-notes/Notes.webp",
    ],
    hostedUrl: "https://my-notes-dev.vercel.app/",
  },
  {
    title: "Block-It",
    subTitle: "Chrome Extension",
    description:
      "Developed a lightweight Chrome extension aimed at empowering users to restrict access to specified websites according to individual preferences. BlockIt is a simple yet efficient site-blocking extension (17.6KB) leveraging service workers to seamlessly block user-defined websites, stored locally for personalized control.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: [
      "/projects/blockit/ext.webp",
      "/projects/blockit/blockedpage.webp",
    ],
    hostedUrl: "https://github.com/Salman-at-github/blockit",
  },
  {
    title: "Hire Matrix",
    subTitle: "Firebase App",
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
  // {
  //   title: "NewsGuy",
  //   subTitle:"News Platform",
  //   description:
  //     "Developed a user-friendly front-end React news application that seamlessly fetches news from a backend using a News API. Showcased a polished UI crafted with Bootstrap for a clean and intuitive design. Users can stay informed and navigate through the latest news effortlessly, making it an engaging platform for accessing up-to-date information.",
  //   tags: ["React", "Express", "MongoDB", "NodeJS", "Context API", "Bootstrap"],
  //   imageUrl: [
  //     "/projects/news-guy/NewsGuy1.webp",
  //     "/projects/news-guy/NewsGuy2.webp",
  //   ],
  // },
  // {
  //   title: "BingeWatch",
  //   description:
  //     "Designed a sleek front-end NextJS application that leverages a Rapid API (Netflix) to dynamically fetch and display movie/show details. Implemented dynamic routing for a seamless and intuitive user experience. Provided an immersive platform for users to discover and explore their favorite movies and shows.",
  //   tags: ["Next.js", "React", "Rapid API", "MongoDB", "NodeJS"],
  //   imageUrl: [
  //     "/projects/binge-watch/BingeWatch1.webp",
  //     "/projects/binge-watch/BingeWatch2.webp",
  //   ],
  // },
  {
    title: "MyChat",
    subTitle: "Socket.io",
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
    name: "SQL",
    url: { light: "/skills/light/sql.png", dark: "/skills/dark/sql.png" },
    link: "https://www.w3schools.com/sql/",
  },
  {
    name: "Git",
    url: { light: "/skills/light/git.svg", dark: "/skills/dark/git.svg" },
    link: "https://git-scm.com/docs/git",
  },
  {
    name: "AWS",
    url: { light: "/skills/light/aws.svg", dark: "/skills/dark/aws.svg" },
    link: "https://docs.aws.amazon.com",
  },
  {
    name: "Tailwind",
    url: {
      light: "/skills/light/tailwind.svg",
      dark: "/skills/dark/tailwind.svg",
    },
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    name: "Redux Toolkit",
    url: { light: "/skills/light/redux.png", dark: "/skills/dark/redux.png" },
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "Express",
    url: {
      light: "/skills/light/express.svg",
      dark: "/skills/dark/express.svg",
    },
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
    url: {
      light: "/skills/light/framermotion.png",
      dark: "/skills/dark/framermotion.png",
    },
    link: "https://www.framer.com/motion/",
  },
  {
    name: "Django REST",
    url: { light: "/skills/light/django.png", dark: "/skills/dark/django.svg" },
    link: "https://www.django-rest-framework.org/",
  },
  {
    name: "Flask",
    url: { light: "/skills/light/flask.svg", dark: "/skills/dark/flask.svg" },
    link: "https://flask.palletsprojects.com/en/3.0.x/",
  },
  {
    name: "Firebase",
    url: { light: "/skills/light/fili.png", dark: "/skills/dark/fida.png" },
    link: "https://firebase.google.com/",
  },
];

export const socialLinks = {
  github: "https://github.com/salman-ryo",
  linkedin: "https://www.linkedin.com/in/dev-salm/",
  blog: "https://www.the-skeptic-dev.in",
};
