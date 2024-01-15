import React from "react";
import Link from "next/link";
import { LinkArrow } from "@/component/Elements/Icon";
import { useRouter } from "next/router";


export const ButtonResume = () => {
  return (
    <Link
    href="/resume.pdf"
    target="_blank"
    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
    download={true}
  >
    CV <LinkArrow className={"w-6 ml-1"} />
  </Link>
  );
};

export const  ButtonContact = () => {
  const router = useRouter();

  return (
    <Link
    href="adityaimam8@gmail.com"
    className="relative group ml-4 text-lg font-medium capitalize text-dark dark:text-light md:text-base"
  >
    Contact
    <span
      className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === "adityaimam8@gmail.com"
          ? "w-full"
          : "w-0"
      }`}
    ></span>
  </Link>
  );
};
