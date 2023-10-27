import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icon";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  ;
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] inline-block  bg-dark absolute left-0 top-full -mt-0.6 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="h-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/About" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/Contact" title="Contact" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-w">
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 mr-3" whileTap={{ scale: 0.9 }}>
          <TwitterIcon />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 mx-3" whileTap={{ scale: 0.9 }}>
          <GithubIcon/>
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 mx-3" whileTap={{ scale: 0.9 }}>
          <LinkedInIcon/>
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 ml-3" whileTap={{ scale: 0.9 }}>
          <PinterestIcon/>
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
