import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/component/Skills";

const AnimetedNumber = ({value}) => {
const ref = useRef(null)

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Izaditya | About</title>
        <meta name="description" content="Welcome to Izaditya Portofolio" />
      </Head>
      <main className="w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion For Web Development" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, Im Aditya Imam Zuhdi, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field, I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>
              <p className="font-medium mt-2">
                I believe that design is about more than just making things look
                pretty its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium mt-2">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
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
                <span className="inline-block text-7xl font-bold "><AnimetedNumber value={50}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold "><AnimetedNumber value={40}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold "> <AnimetedNumber value={4}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Years of experience</h2>
              </div>
            </div>
          </div>
          <Skills/>
        </Layout>
      </main>
    </>
  );
};

export default About;
