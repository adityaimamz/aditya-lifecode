import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/component/Skills";
import Experience from "@/component/Experience";

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
      <main className="w-full flex-col items-center justify-center">
        <Layout className="pt-5">
          <AnimatedText text="Passion For Web Development" className="mb-10" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
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
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 
            "
            >
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark " />
              <Image
                src={profilePic}
                alt="Izaditya"
                className="h-auto w-full rounded-2xl "
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimetedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimetedNumber value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  {" "}
                  <AnimetedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience/>
        </Layout>
      </main>
    </>
  );
};

export default About;
