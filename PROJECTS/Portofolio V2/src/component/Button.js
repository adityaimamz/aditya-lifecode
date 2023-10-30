import React from "react";
import Link from "next/link";
import { LinkArrow } from "@/component/Icon";

export const ButtonResume = () => {
  return (
    <Link
      href="/dummy.pdf"
      target="_blank"
      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg  text=lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      download={true}
    >
      Resume <LinkArrow className="w-6 ml-1" />{" "}
    </Link>
  );
};

export const ButtonContact = () => {
  return (
    <Link
      href="mailto:adityaimam8@gmail.com"
      className="ml-4 text-lg font-medium capitalize text-dark underline "
    >
      Contact
    </Link>
  );
};
