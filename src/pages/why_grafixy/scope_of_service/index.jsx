import React from "react";
import Layout from "../../../components/layout/layout";
import GetDemo from "../../../components/our_works/GetDemo";
import HeroSection from "../../../components/why_grafixy/scope_of_service/HeroSection";
import Service from "../../../components/why_grafixy/scope_of_service/Service";

const index = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Service/>
        <GetDemo />
      </Layout>
    </div>
  );
};

export default index;
