import * as React from "react";
import { Header, Footer } from "../components";
import HeroSection from "../components/home/HeroSection";
import Layout from "../components/layout/layout";
import "../style/global.css";

const IndexPage = ({ children }) => {
  return (
    <main className="">
      <Layout>
        <HeroSection />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
