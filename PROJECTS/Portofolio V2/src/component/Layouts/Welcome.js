import React from "react";
import Image from "next/image";
import profilePic from "../../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/component/Elements/AnimatedText";
import {
  ButtonContact,
  ButtonResume,
} from "@/component/Elements/Button/Button";

const Welcome = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full lg:flex-col">
        <div className="w-1/2 md:w-full">
          <Image
            src={profilePic}
            alt="Izaditya"
            className="w-full h-auto m-auto lg:inline-block lg:w-full"
            priority
            sizes="( max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Elevating Ideas with Expertise in Web Development."
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl  md:!text-4xl  sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js, Laravel and web
            development.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center">
            <ButtonResume />
            <ButtonContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
