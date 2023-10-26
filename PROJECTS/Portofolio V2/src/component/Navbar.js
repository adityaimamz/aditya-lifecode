import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative`}>
      {title}
      <span className="h-[1px] inline-block w-full bg-dark absolute left-0 top-full -mt-0.6"></span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="h-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/" title="Contact" className="ml-4" />
      </nav>
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
