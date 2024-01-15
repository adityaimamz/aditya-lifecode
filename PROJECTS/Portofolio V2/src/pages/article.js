import React from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
import Transition from "@/component/Transition";

// const FeaturedArticle = (img,title,time,summary,link) => {
//     return (

//     )
// }

const Article = () => {
  return (
    <>
      <Head>
        <title>Izaditya | Article </title>
        <meta name="description" content="Welcome to Izaditya Portofolio" />
      </Head>
      <Transition/>
      <main className="w-full mb-16 flex flex-col justify-center items-center overflow-hidden">
        <Layout>
          <AnimatedText text="Word Can Change The World" className="mb-16" />
          <ul className="grid grid-gap-16 grid-cols-2">
            <li>FeaturedArticle</li>
            <li>FeaturedArticle</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Article;
