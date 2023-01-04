import * as React from "react";
import {
  Header,
  Footer,
  HeroSection,
  WorkSession,
  Why_grafixy,
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
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
