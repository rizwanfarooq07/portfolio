import Image from "next/image";
import React, {useEffect} from "react";
import rizwan from "../public/rizwan.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changedTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {setTheme("dark")},[])

  return (
    <div>
      <Image
        height={128}
        width={128}
        src={rizwan}
        alt="User avatar"
        className="object-cover w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-bold tracking-wider font-kaushan">
        Farooqui <span className="text-green">Rizwan</span> Ahmed
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <p>
        <a
          href="/assets/Rizwan Farooqui Resume.pdf"
          download="Rizwan Farooqui Resume.pdf"
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        >
          <GiTie className="w-6 h-6" />
          Download Resume
        </a>
      </p>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <AiFillYoutube className="w-8 h-8 cursor-pointer" />

        <a href="https://github.com/rizwanfarooq07" target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/rizwan-farooqui/" target="_blank">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-5 bg-gray-200 dark:bg-dark-200 my--5"
        style={{ margin: "0 -1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Lucknow, India</span>
        </div>
        <p className="break-all">rizwanfarooqui07@gmail.com</p>
        <p>9140178817</p>
      </div>
      {/* Email button icons */}
      <button
        className="w-9/12 px-5 py-2 my-2 mt-5 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:rizwanfarooqui07@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={changedTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
