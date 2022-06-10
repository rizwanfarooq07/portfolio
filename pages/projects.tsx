import Head from "next/head";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";
import { projects } from "../data";
import { Category, ProjectsInterface } from "../type";

import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Project = () => {
  const [selectedProjects, setSelectedProjects] =
    useState<ProjectsInterface[]>(projects);
  const [active, setActive] = useState<Category | "all">("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setSelectedProjects(projects);
      setActive(category);
      return;
    }
    const updatedProjects = projects.filter((project) =>
      project.category.includes(category)
    );
    setSelectedProjects(updatedProjects);
    setActive(category);
  };

  return (
    <motion.div
      className="p-4"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Rizwan Farooqui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "85vh" }}>
        <ProjectNavBar
          handleFilterCategory={handleFilterCategory}
          active={active}
          setShowDetails={setShowDetails}
        />
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {selectedProjects.map((project: ProjectsInterface, i: number) => (
            <motion.div
              variants={fadeInUp}
              key={i}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard
                project={project}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
