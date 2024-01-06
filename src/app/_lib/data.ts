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
      "Engineered a comprehensive NextJS e-commerce application, where both the front end and backend are seamlessly built on NextJS. The user interface boasts a modern aesthetic thanks to Tailwind CSS and Tail Blocks, while the strategic implementation of Server Side Rendering and Client Side Rendering optimizes performance. Notably, the application features a dedicated admin dashboard facilitating efficient product management. The dashboard offers both light and dark themes for user customization, enhancing the overall user experience.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "JWT","Context API", ],
    imageUrl: ['/FitWear1.png','/FitWear2.png','/FitWear3.png'],
    hostedUrl: 'https://fit-wear.vercel.app'
  },
  {
    title: "MyNotes",
    description:`Crafted a dynamic MERN stack cloud application with full responsiveness, designed to seamlessly store and manage notes. Leveraging the power of React.js, Express.js, MongoDB, and Json Web Token, the application ensures robust authentication and authorization. Employing the Context API and Restful API, in combination with React Bootstrap, custom components, and icons, the user interface offers an intuitive experience.

    Security is paramount, with user passwords securely encrypted using bcryptJS and salts before being stored in the database. Implemented an email verification system through nodemailer's OTP function, enhancing account security.`,
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API","Bootstrap"],
    imageUrl: ['/MyNotes1.png','/MyNotes2.png'],
    hostedUrl: 'https://my-notes-dev.vercel.app/'

  },
  {
    title: "NewsGuy",
    description:`Developed a user-friendly front-end React news application that seamlessly fetches news from a backend using a News API. The application showcases a polished UI crafted with Bootstrap, ensuring a clean and intuitive design. Users can stay informed and navigate through the latest news effortlessly, making it an engaging platform for accessing up-to-date information.`,
    tags: ["React", "Express", "MongoDB", "NodeJS", "Context API","Bootstrap"],
    imageUrl: ['/NewsGuy1.png','/NewsGuy2.png'],
  },
  {
    title: "BingeWatch",
    description:`Designed a sleek front-end NextJS application that leverages a Rapid API (Netflix) to dynamically fetch and display movie/show details. The implementation of dynamic routing ensures a seamless and intuitive user experience when exploring specific show details. The application provides an immersive platform for users to discover and explore their favorite movies and shows.`,
    tags: ["NextJS","React", "Rapid API", "MongoDB", "NodeJS",],
    imageUrl: ['/BingeWatch1.png','/BingeWatch2.png'],
  },
  {
    title: "MyChat",
    description:`Introduced 'MyChat', a real-time chat application utilizing React and Socket.IO to facilitate seamless message sharing among participants within the same room. This interactive platform enhances communication through instant updates, providing a dynamic and engaging environment for users. The combination of React and Socket.IO in the context of Node.js creates a robust foundation for real-time chat functionality.`,
    tags: ["React", "Socket.io", "NodeJS",],
    imageUrl: ['/MyChat1.png','/MyChat2.png'],
  },
];

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
] as const;
