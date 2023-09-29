/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { textVariant, fadeIn } from "../utils/motion";
import { ParticleBackground } from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="hero">
      <ParticleBackground />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5}`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <h1
              className={`font-black text-white lg:text-[50px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 pl-4`}
            >
              Hi, I'm <span className="text-[#915eff] ">Aditya Imam </span>
            </h1>
            <p
              className={`${styles.heroSubText} pl-4 text-white-100 font-medium`}
            >
              i'm A&nbsp;
              <TypeAnimation
                sequence={["Web", 2000, "Front-end", 2000, "Back-end", 2000]}
                speed={50}
                className="text-accent text-[#915eff]"
                wrapper="span"
                repeat={Infinity}
              />
              Developer
            </p>
          </motion.div>

          <p className={`text-secondary text-justify pl-4   mt-5`}>
            Welcome to my portfolio blog, where I showcase my creative journey
            and professional endeavors. Here, you'll find a collection of my
            work, insights into my creative process, and a glimpse into the
            world of my passions and projects. Feel free to explore and get to
            know more about me and my work. If you have any questions or would
            like to collaborate, don't hesitate to reach out. Thank you for
            visiting, and I hope you enjoy your time here!
          </p>
          <div className={`${styles.heroSubText} flex mt-10 pl-4 gap-3`}>
            <a href="#contact">
              <button className="rounded-full font-primary text-white font-medium btn h-[56px] px-10 text-base">
                Contact me
              </button>
            </a>

            <a
              href="#work"
              className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3] btn-link text-base items-center flex "
            >
              My Portfolio
            </a>
          </div>
          <div
            className={`${styles.sectionSubText} flex mt-10 pl-4 gap-5 xs:text-[35px] xs:text-c`}
          >
            <a
              className="hover:text-white"
              href="https://github.com/adityaimamz"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/in/izaditya"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-white"
              href="https://www.instagram.com/adityaimamz/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-7 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
