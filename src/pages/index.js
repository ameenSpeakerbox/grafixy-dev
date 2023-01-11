import * as React from "react";
import {
  HeroSection,
  WorkSession,
  WhyGrafixy,
  Collaboration,
  FreeTrail,
  HomeFAQ,
  Testimonial,
} from "../components";
import Layout from "../components/layout/layout";


const IndexPage = () => {
  return (
    <main className=" max-w-[2560px] mx-auto grid w-full ">
      <Layout>
        <HeroSection />
        <WorkSession />
        <WhyGrafixy />
        <Collaboration />
        <FreeTrail />
        <HomeFAQ />
        <Testimonial />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
