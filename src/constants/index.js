import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gamehub,
  alxse,
  alxai,
  go2cod,
  forge
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Go2Cod",
    icon: go2cod,
    iconBg: "#383E56",
    date: "Cct 2024 - currently working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Forge",
    icon: forge,
    iconBg: "#383E56",
    date: "Cct 2024 - currently working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amanuel is good at delivering quality work efficiently, and his ability to work on complex tax is impressive.",
    name: "Mugabushaka Jules",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGR5JKhNH02Qw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691865560699?e=1734566400&v=beta&t=LZ5Y7HOi7nfELRfd0qP0T-qkW2Pe2MdsveVi2_UNePQ+",
  },
];

const projects = [
  {
    name: "Game Hub",
    description: "Web-based platform that allows users to search, Filter Game.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rawg.io API",
        color: "green-text-gradient",
      },
      {
        name: "Chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/amanueldemirew/gamehub.git",
  },
];
const Certifications = [
  {
    image: alxse,
    source_code_link: "https://intranet.alxswe.com/certificates/BHzRM6en97",
  },
  {
    image: alxai,
    source_code_link: "https://intranet.alxswe.com/certificates/c8NmMpCPf2",
  },
];

export { services, Certifications, technologies, experiences, testimonials, projects };
