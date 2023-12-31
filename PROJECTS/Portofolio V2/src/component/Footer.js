import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <span>Have a Nice Day!</span>
        <div>
          {" "}
          Build By{" "}
          <Link href="/">
            &copy; <span className="underline underline-offset-4">IZaditya2</span>
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
