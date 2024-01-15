import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex item justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  const skillsData = [
    { name: "CSS", x: "-5vw", y: "-11vw" },
    { name: "HTML", x: "-19vw", y: "2vw" },
    { name: "JavaScript", x: "23vw", y: "6vw" },
    { name: "ReactJS", x: "0vw", y: "11.5vw" },
    { name: "NextJS", x: "-20vw", y: "-15vw" },
    { name: "PHP", x: "15vw", y: "-12vw" },
    { name: "Laravel", x: "-31vw", y: "-5vw" },
    { name: "Tailwind", x: "0vw", y: "-19vw" },
    { name: "Bootstrap", x: "-25vw", y: "18vw" },
    { name: "ExpressJS", x: "18vw", y: "16vw" }
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex item justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
}

export default Skills;+++++++++++++++++++++++++++++++