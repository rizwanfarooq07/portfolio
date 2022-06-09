import Head from "next/head";
import React from "react";
import Bar from "../components/Bar";
import { hobbies, languages } from "../data";
import { SkillsInterface } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Resume = () => {
  return (
    <motion.div
      className="px-4 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Rizwan Farooqui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Master of Technology(2019-2021)
            </h5>
            <p className="font-semibold">
              APJ Abdul Kalam Technical University
            </p>
            <p className="my-3">
              Completed my masters degree from AKTU with 8.7 CGPA
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer (SDE)</h5>
            <p className="font-semibold">CEDCOSS (11-2021 to present)</p>
            <p className="my-3">
              Working as a software developer engineer (SDE) since november 2021
            </p>
          </div>
        </motion.div>
      </div>
      {/* Languages & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 font-bold text-2-xi">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language: SkillsInterface) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 font-bold text-2-xi">Interests & Hobbies</h5>
          <div className="my-2">
            {hobbies.map((hobby: SkillsInterface) => (
              <Bar key={hobby.name} data={hobby} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
