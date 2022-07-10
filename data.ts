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
    name: "Spotify 2.0",
    description:
      "A spotify demo app that allows user to login with their spotify account browse through their favourite playlists and select different songs. Used spotiy OAuth to authenticate the users.",
    image_path: "/images/spotify.png",
    deployed_url: "https://spotify2-0-three.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/spotify2.0",
    category: ["next"],
    key_techs: ["NextJS", "Javascript", "TailwindCSS", "Recoil"],
  },
  {
    id: 2,
    name: "BoatCom",
    description:
      "A demo shopping application that allows user to browse through different categories of gadgets, add them to cart and place an order. Stripe api is used for the payment method",
    image_path: "/images/boatcom.png",
    deployed_url: "https://boatcom.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/BoatCom",
    category: ["next"],
    key_techs: ["NextJS", "CSS", "Stripe", "Sanity"],
  },
  {
    id: 3,
    name: "Twiter 2.0",
    description:
    "A demo twitter application that allows user to login, post tweets with picture and add comments to create beatifull threads.",
    image_path: "/images/twitter.png",
    deployed_url: "https://twitter-2-0-seven.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/twitter-2.0",
    category: ["next"],
    key_techs: ["NextJS", "Typescript", "TailwindCSS", "Twitter OAuth 2.0"],
  },
  {
    id: 4,
    name: "Cryptoverse",
    description:
    "A cryto currency application that allows you to search through hundreds of crypto and gives you all the details and latest news related to it",
    image_path: "/images/crypto.png",
    deployed_url: "https://cryptoplanet.netlify.app/",
    github_url: "https://github.com/rizwanfarooq07/cryptoverse",
    category: ["react"],
    key_techs: ["React", "Javascript", "CSS", "RapidApi"],
  },
  {
    id: 5,
    name: "Tell the Sky",
    description:
    "A weather application that informs the users about the current weather of any city of the user's choice.",
    image_path: "/images/tellthesky.png",
    deployed_url: "https://tell-the-sky.netlify.app",
    github_url: "https://github.com/rizwanfarooq07/tll-the-sky",
    category: ["react"],
    key_techs: ["React", "Javascript", "TailwindCSS", "Openweatherapi"],
  },
  {
    id: 6,
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
    id: 7,
    name: "Google 2.0",
    description:
      "A demo google application with the google search (all , news, images , videos ) functionality.",
    image_path: "/images/google.png",
    deployed_url: "https://sleek-search.netlify.app/search",
    github_url: "https://github.com/rizwanfarooq07/google_search",
    category: ["react"],
    key_techs: ["React", "Javascript", "TailwindCSS", "RapidApi"],
  },
  {
    id: 8,
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
    id: 9,
    name: "Realtor",
    description:
      "A real estate application that let's you browse through proprties available for rent/buy in and around UAE. You can apply different filters like rooms, locations, price, area etc. in order to find the property that suits you the most.",
    image_path: "/images/realtor.png",
    deployed_url: "https://realtor-agent.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/realtor",
    category: ["next"],
    key_techs: ["NextJS", "Javascript", "Chakra-Ui", "RapidApi"],
  },
  {
    id: 10,
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
    id: 11,
    name: "GetFit",
    description:
      "An exercise browser application built with an aim to help you achieve your fitness goals. It allows user to browse through hundreds of different exercises avaiilable related to any body part, equipments etc",
    image_path: "/images/getfit.png",
    deployed_url: "https://get-exercised.netlify.app/",
    github_url: "https://github.com/rizwanfarooq07/getfit",
    category: ["react"],
    key_techs: ["React", "Javascript", "Material UI", "RapidApi"],
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    name: "MeetUps",
    description:
      "A full stack application that allows users to post thier meeting place in order to keep their precious memories safe.",
    image_path: "/images/meetups.png",
    deployed_url:
      "https://next-meetup-app-cxp71ijnl-rizwanfarooq07.vercel.app/",
    github_url: "https://github.com/rizwanfarooq07/next-meetup-app",
    category: ["next", "node", "express", "mongo"],
    key_techs: ["NextJS", "Nodejs", "CSS"],
  },
  {
    id: 16,
    name: "Quotes for Thought",
    description:
      "A full stack application that allows users to convert thier thoughts into valuable quotes",
    image_path: "/images/qof.png",
    deployed_url: "https://quotes-for-thought.netlify.app/quotes",
    github_url: "https://github.com/rizwanfarooq07/QuoteApp",
    category: ["react", "node", "express", "mongo"],
    key_techs: ["React", "CSS", "Nodejs"],
  },
  {
    id: 17,
    name: "Admin Panel",
    description:
      "A frontend application which allows user to perform search, filter, select , delete etc. functions from a list of users",
    image_path: "/images/qof.png",
    deployed_url: "https://rizwan-panel.netlify.app/",
    github_url: "https://github.com/rizwanfarooq07/admin_panel",
    category: ["react"],
    key_techs: ["React", "CSS"],
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
