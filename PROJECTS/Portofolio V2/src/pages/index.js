import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/component/Fragments/Layout";
import { useRouter } from "next/router";
import Transition from "@/component/Fragments/Transition";
import Welcome from "@/component/Layouts/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Izaditya Portofolio" />
      </Head>
      <Transition/>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
          <Welcome/>
        </Layout>
      </main>
    </>
  );
}
