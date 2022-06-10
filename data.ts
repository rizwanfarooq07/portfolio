import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineCode } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { BsCircleFill } from "react-icons/bs";
import { SiWheniwork } from "react-icons/si";
import { VscSymbolInterface } from "react-icons/vsc";
import { RiRefreshFill } from "react-icons/ri";
import { ProjectsInterface, ServiceInterface, SkillsInterface } from "./type";

export const services: ServiceInterface[] = [
  {
    title: "Frontend Development",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    Icon: FaServer,
  },
  {
    title: "API Development",
    Icon: AiOutlineApi,
  },
  {
    title: "Managing Workflow",
    Icon: SiWheniwork,
  },
  {
    title: "Optimize UI/UX",
    Icon: VscSymbolInterface,
  },
  {
    title: "Scalable Projects",
    Icon: AiOutlineCode,
  },
  {
    title: "Responsive Websites",
    Icon: DiResponsive,
  },
  {
    title: "Reusable Codes",
    Icon: RiRefreshFill,
  },
];

export const languages: SkillsInterface[] = [
  {
    name: "ReactJS",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJS",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Node",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "PHP",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Express",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const hobbies: SkillsInterface[] = [
  {
    name: "Football",
    level: "95%",
    Icon: BsCircleFill,
  },
  {
    name: "Sketching",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Reading",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Video Games",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: ProjectsInterface[] = [
  {
    id: 1,
    name: "ProShop",
    description:
      "A full stack shopping application that allows user to create their personal account, add items to cart and checkout after filling all the shipping details.",
    image_path: "/images/proshop.png",
    deployed_url: "",
    github_url: "https://github.com/rizwanfarooq07/ProShop-FullStackMurn",
    category: ["react", "node", "express", "mongo"],
    key_techs: ["React", "Bootstrap", "Nodejs", "Redux"],
  },
  {
    id: 2,
    name: "Hulu 2.0",
    description:
      "A demo hulu application that let's you browse through different categories of movies that are fetched using TMDb api.",
    image_path: "/images/hulu.png",
    deployed_url: "https://hulu-demo-one.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/hulu-demo",
    category: ["next"],
    key_techs: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    id: 3,
    name: "Finding Queen",
    description:
      "King Shan has received intelligence that Al Falcone is hiding in one of six neighbouring planets. In this problem you need to build a UI through which King Shan can choose the planets to search, and the vehicles to use in Finding Falcone.",
    image_path: "/images/falcon.png",
    deployed_url: "https://finding-queen.netlify.app",
    github_url: "https://github.com/rizwanfarooq07/finding_falcone",
    category: ["react"],
    key_techs: ["React", "CSS"],
  },
  {
    id: 4,
    name: "TeeRexStore",
    description:
      "A front-end teeshirts shopping store that let's you search, filter(price, color, gender, type) and add products to cart then go to cart to see the order details like total amount, quantity etc.",
    image_path: "/images/teerex.png",
    deployed_url: "https://teerexstore.netlify.app",
    github_url: "https://github.com/rizwanfarooq07/teerexstore",
    category: ["react"],
    key_techs: ["React", "Material UI", "React-router V6"],
  },
  {
    id: 5,
    name: "CineBucket",
    description:
      "A frontend movie and shows browsing application that allows users to search shows, movies or both simultaneously using OMDb api",
    image_path: "/images/cinebucket.png",
    deployed_url: "https://cinebucket.netlify.app",
    github_url: "https://github.com/rizwanfarooq07/cinebucket",
    category: ["react"],
    key_techs: ["React", "SCSS", "Redux-toolkit"],
  },
  {
    id: 6,
    name: "Facebook Clone App",
    description:
      "A facebook clone application that let's users to login using their google account and post pictures with cations",
    image_path: "/images/fb.png",
    deployed_url: "https://facebook-clone-8b7b3.web.app/",
    github_url: "https://github.com/rizwanfarooq07/Facebook-clone",
    category: ["react"],
    key_techs: ["React", "TailwindCSS", "Google Firebase"],
  },
  {
    id: 7,
    name: "MeetUps",
    description:
      "A full stack application that allows users to post thier meeting place in order to keep their precious memories safe.",
    image_path: "/images/meetups.png",
    deployed_url:
      "https://next-meetup-app-cxp71ijnl-rizwanfarooq07.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/next-meetup-app",
    category: ["next", "node", "express", "mongo"],
    key_techs: ["React", "Nodejs", "CSS"],
  },
  {
    id: 8,
    name: "Quotes for Thought",
    description:
      "A full stack application that allows users to convert thier thoughts into valuable quotes",
    image_path: "/images/qof.png",
    deployed_url: "https://quotes-for-thought.netlify.app/quotes",
    github_url: "https://github.com/rizwanfarooq07/QuoteApp",
    category: ["react", "node", "express", "mongo"],
    key_techs: ["React", "CSS", "Nodejs"],
  },
];

export const skills: string[] = [
  "ReactJS",
  "NodeJS",
  "Javascript",
  "Typescript",
  "HTML 5",
  "CSS",
  "TailwindCSS",
  "Mongo",
  "NextJS",
  "REST Api",
  "Github",
  "es5/es6/es7",
  "Shopify Polaris",
  "Express",
  "Redux",
  "Redux toolkit",
  "PHP",
  "Google Firebase",
  "MongoDb",
"Shopify", "npm", "jQuery"
];
