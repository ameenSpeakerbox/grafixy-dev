import * as React from "react";
import {
  HeroSection,
  WorkSession,
  Why_grafixy,
  Collaboration,
  Free_trail,
  HomeFAQ,
  Testimonial ,
} from "../components";
import Layout from "../components/layout/layout";
import "../style/global.css";

const IndexPage = ({ children }) => {
  return (
    <main className="">
      <Layout>
        <HeroSection />
        <WorkSession />
        <Why_grafixy />
        <Collaboration />
        <Free_trail/>
        <HomeFAQ />
        <Testimonial />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
