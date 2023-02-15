import React from "react";
import GetDemo from "../../../components/GetDemo";
import Layout from "../../../components/layout/layout";
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
