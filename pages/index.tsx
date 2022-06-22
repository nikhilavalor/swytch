import { Footer, Header } from "@components/common";
import Swytch from "@components/Home/Swytch";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
<<<<<<< HEAD
      <Head>
        <meta name="descraiption" content={AppConstant.meta.description} />
      </Head>
=======
      {/* <Head> */}
        {/* <title>{AppConstant.meta.title}</title> */}
        {/* <meta name="descraiption" content={AppConstant.meta.description} /> */}
      {/* </Head> */}
      {/* <Header /> */}
>>>>>>> 77e006903156960c585703c1a1668639bb4f1950

      <Swytch/> 
      <Footer />
      
    </Layout>
  );
};

export default Home;
