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
    imageUrl: ['/FitWear1.png','/FitWear2.png','/FitWear3.png'],
    hostedUrl: 'https://fit-wear.vercel.app'
  },
  {
    title: "MyNotes",
    description:
      "Crafted a dynamic MERN stack cloud application for seamless note storage and management. Leveraged React.js, Express.js, MongoDB, and Json Web Token for robust authentication and authorization. Implemented the Context API and Restful API along with React Bootstrap, custom components, and icons. Ensured security with bcryptJS and salts for user password encryption. Implemented an email verification system using nodemailer's OTP function to enhance account security.",
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API", "Bootstrap"],
    imageUrl: ['/MyNotes1.png','/MyNotes2.png'],
    hostedUrl: 'https://my-notes-dev.vercel.app/'
  },
  {
    title: "NewsGuy",
    description:
      "Developed a user-friendly front-end React news application that seamlessly fetches news from a backend using a News API. Showcased a polished UI crafted with Bootstrap for a clean and intuitive design. Users can stay informed and navigate through the latest news effortlessly, making it an engaging platform for accessing up-to-date information.",
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API", "Bootstrap"],
    imageUrl: ['/NewsGuy1.png','/NewsGuy2.png'],
  },
  {
    title: "BingeWatch",
    description:
      "Designed a sleek front-end NextJS application that leverages a Rapid API (Netflix) to dynamically fetch and display movie/show details. Implemented dynamic routing for a seamless and intuitive user experience. Provided an immersive platform for users to discover and explore their favorite movies and shows.",
    tags: ["Next.js", "React", "Rapid API", "MongoDB", "NodeJS"],
    imageUrl: ['/BingeWatch1.png','/BingeWatch2.png'],
  },
  {
    title: "MyChat",
    description:
      "Introduced 'MyChat', a real-time chat application utilizing React and Socket.IO to facilitate seamless message sharing among participants within the same room. This interactive platform enhances communication through instant updates, providing a dynamic and engaging environment for users. The combination of React and Socket.IO in the context of Node.js creates a robust foundation for real-time chat functionality.",
    tags: ["React", "Socket.io", "Node.js"],
    imageUrl: ['/MyChat1.png','/MyChat2.png'],
  },
];

// this is my data, i want you adjust my tags and skills in a way that when i show the tags below my project, it should show the relevant icon from skills, show only the icons rather than the 
export const skillsData = [
  { name: "HTML", url: { light: '/skills/light/html.svg', dark: '/skills/dark/html.svg' } },
  { name: "CSS", url: { light: '/skills/light/css.svg', dark: '/skills/dark/css.svg' } },
  { name: "JavaScript", url: { light: '/skills/light/js.svg', dark: '/skills/dark/js.svg' } },
  { name: "TypeScript", url: { light: '/skills/light/ts.svg', dark: '/skills/dark/ts.svg' } },
  { name: "React", url: { light: '/skills/light/react.svg', dark: '/skills/dark/react.svg' } },
  { name: "Next.js", url: { light: '/skills/light/nextjs.svg', dark: '/skills/dark/nextjs.svg' } },
  { name: "Node.js", url: { light: '/skills/light/node.svg', dark: '/skills/dark/node.svg' } },
  { name: "Git", url: { light: '/skills/light/git.svg', dark: '/skills/dark/git.svg' } },
  { name: "Tailwind", url: { light: '/skills/light/tailwind.svg', dark: '/skills/dark/tailwind.svg' } },
  { name: "MongoDB", url: { light: '/skills/light/mongo.png', dark: '/skills/dark/mongo.png' } },
  { name: "Redux Toolkit", url: { light: '/skills/light/redux.png', dark: '/skills/dark/redux.png' } },
  { name: "Express", url: { light: '/skills/light/express.svg', dark: '/skills/dark/express.svg' } },
  { name: "Python", url: { light: '/skills/light/python.svg', dark: '/skills/dark/python.svg' } },
  { name: "REST API", url: { light: '/skills/light/api.png', dark: '/skills/dark/api.png' } },
  { name: "Framer Motion", url: { light: '/skills/light/framermotion.png', dark: '/skills/dark/framermotion.png' } },
  { name: "Django REST", url: { light: '/skills/light/django.png', dark: '/skills/dark/django.svg' } },
  { name: "Flask", url: { light: '/skills/light/flask.svg', dark: '/skills/dark/flask.svg' } },
];
