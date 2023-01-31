import React from "react";
import Layout from "../../components/layout/layout";
import GetDemo from "../../components/our_works/GetDemo";
import HeroSection from "../../components/why_grafixy/HeroSection";
import WhyGetGrafixy from "../../components/why_grafixy/WhyGetGrafixy ";

const index = () => {
  return (
    <main className=" max-w-[2560px] mx-auto grid w-full ">
      <Layout>
        <HeroSection />
        <WhyGetGrafixy />
        <GetDemo />
      </Layout>
    </main>

  );
};

export default index;