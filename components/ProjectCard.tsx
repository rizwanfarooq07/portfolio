import Image from "next/image";
import React, { FunctionComponent } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ProjectsInterface } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: ProjectsInterface;
  showDetails: null | number;
  setShowDetails: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({
  project: {
    name,
    description,
    category,
    deployed_url,
    github_url,
    image_path,
    key_techs,
    id,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
     {showDetails === null && <> <Image
        src={image_path}
        alt={name}
        width={300}
        height={150}
        layout="responsive"
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      /> */}
      <p className="my-2 text-center">{name}</p></>}
      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name} /> */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-400"
            >
              <Image
                src={image_path}
                alt={name}
                width={300}
                height={150}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              {name === "ProShop" ? null : (
                <a
                  href={deployed_url}
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiOutlineLink />
                  <span>Visit</span>
                </a>
              )}
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium mdtext-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
