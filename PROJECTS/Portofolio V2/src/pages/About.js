import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/component/Elements/AnimatedText";
import Layout from "@/component/Fragments/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/component/Layouts/Skills";
import Experience from "@/component/Layouts/Experience";
import Education from "@/component/Layouts/Education";
import Transition from "@/component/Fragments/Transition";

const AnimetedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Izaditya | About</title>
        <meta name="description" content="Welcome to Izaditya Portofolio" />
      </Head>
      <Transition/>
      <main className="w-full flex-col items-center justify-center">
        <Layout className="pt-5">
          <AnimatedText text="Passion For Web Development" className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start dark:text-light xl:col-span-4 md:order-2 md:col-span-8" >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-justify">
                Hi, Im Aditya Imam Zuhdi, a dedicated web developer currently
                pursuing my studies in Informatics at the Institute Technology
                Telkom Purwokerto. With a keen focus on web development, I am
                enthusiastic about crafting user-friendly websites and
                consistently expanding my knowledge in this dynamic field.
                Proficient in programming languages such as JavaScript and PHP,
                I leverage frameworks like Next.js and Laravel to create
                effective and efficient web solutions.
              </p>
              <p className="font-medium mt-2 text-justify">
                Throughout my academic journey, I have successfully completed
                various web development projects, sharpening my skills in
                front-end and back-end development, database management, and
                responsive design. Keeping abreast of the latest trends and best
                practices in web development is a priority for me, ensuring that
                I can deliver cutting-edge and high-quality websites.
              </p>
              <p className="font-medium mt-2 text-justify">
                I am always open to discussions about potential collaborations
                or opportunities. Feel free to reach out, and lets explore how
                we can work together to bring innovative and impactful web
                solutions to life.
              </p>
            </div>

            <div
              className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:inset-1
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="Izaditya"
                className="h-auto w-full rounded-2xl "
                priority 
                sizes="( max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimetedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimetedNumber value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light  md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimetedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
