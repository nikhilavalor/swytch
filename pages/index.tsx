import { Footer, Header } from "@components/common";
import Swytch from "@components/Home/Swytch";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      {/* <Head> */}
        {/* <title>{AppConstant.meta.title}</title> */}
        {/* <meta name="descraiption" content={AppConstant.meta.description} /> */}
      {/* </Head> */}
      {/* <Header /> */}

      <Swytch/> 
      <Footer />
      
    </Layout>
  );
};

export default Home;
