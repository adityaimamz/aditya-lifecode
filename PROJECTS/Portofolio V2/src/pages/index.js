import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/component/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Izaditya" className="h-full" />
            </div>
            <div className="w-1/2 flex-col items-center self-center"> 
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div>
                <Link href="/dummy.pdf" target="_blank">Resume</Link>
                <Link href="mailto:adityaimam8@gmail.com">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
