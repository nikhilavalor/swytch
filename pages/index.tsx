import { Footer, Header } from "@components/common";
<<<<<<< HEAD
import Products from "@components/Home/Products";
import Swytch from "@components/Home/Swytch";
import Team from "@components/Home/Team";
=======
import GetInTouch from "@components/GetInTouch";
import Swytch from "@components/Home/Swytch";
import News from "@components/News";
import Partners from "@components/Partners";
>>>>>>> 63d283f72b466b622395a219223d432064459f09
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

<<<<<<< HEAD
      <Swytch/> 
      <Team/>
      <Products/>
=======
      <Swytch />
      <Partners/>
      <GetInTouch />
      <News />
>>>>>>> 63d283f72b466b622395a219223d432064459f09
      <Footer />
    </Layout>
  );
};

export default Home;
