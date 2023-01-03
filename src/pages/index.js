import * as React from "react";
import { Header, Footer } from "../components";
import Layout from "../components/layout/layout";
import "../style/global.css";

const IndexPage = ({ children }) => {
  return (
    <main className="mx-[147px]">
      <Layout>{children}</Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
