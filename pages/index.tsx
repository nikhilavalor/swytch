import { Footer, Header } from "@components/common";
import GetInTouch from "@components/GetInTouch";
import Swytch from "@components/Home/Swytch";
import Team from "@components/Home/Team";
import News from "@components/News";
import Partners from "@components/Partners";
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

      <Swytch />
      <Partners />
      <Team />
      <GetInTouch />
      <News />
      <Footer />
    </Layout>
  );
};

export default Home;
