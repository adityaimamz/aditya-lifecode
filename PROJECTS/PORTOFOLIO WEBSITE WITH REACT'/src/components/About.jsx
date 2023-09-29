/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div className="bg-tertiary rounded-[20px] py-2 px-13 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText} pl-4`}>Introduction</p>
        <h2 className={`${styles.heroHeadText} pl-4`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
      >
        As a dedicated student of Informatics at Institute Technology Telkom
        Purwokerto, I am specializing in web development. I have a strong
        interest in creating user-friendly websites and constantly expand my
        knowledge and skills in this field. My foundation in programming
        languages such as JavaScript and PHP allows me to utilize frameworks
        like Next.js and Laravel effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
