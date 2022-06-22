import { Footer, Header } from "@components/common";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <meta name="descraiption" content={AppConstant.meta.description} />
      </Head>

      <Footer />
    </Layout>
  );
};

export default Home;
