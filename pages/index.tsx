import type {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { ServiceInterface } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import WordCloud from "../components/WordCloud";
import { useState } from "react";
import AboutNavBar from "../components/AboutNavBar";

const index = () => {
  const [active, setActive] = useState<string>("Skills");

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Rizwan Farooqui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 mb-3 font-medium">
          I am a MERN stack developer located in India. I have a serious passion
          of creating beautiful, intuitive, dynamic user experience. Problem
          solver, team player, well-organised person with high attention to
          detials. Fan of football, loves to sketch.
        </h5>
        {/* <h5 className="my-3 mb-3 font-medium"></h5> */}
        <h5 className="my-3 mb-5 font-medium">
          Interested in working on ambitious projects with positive people.
        </h5>
      </motion.div>

      <div
        className="flex-grow p-4 pt-1 bg-gray-400 dark:bg-dark-100"
        style={{ margin: "0 -1.5rem" }}
      >
        <AboutNavBar active={active} setActive={setActive} />
        {/* <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6> */}

        {active === "Skills" ? (
          <div className="h-5/6">
            <WordCloud />
          </div>
        ) : active === "What I Offer" ? (
          <motion.div
            className="grid gap-6 pt-6 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service: ServiceInterface) => (
              <motion.div
                variants={fadeInUp}
                key={service.title}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                {" "}
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
