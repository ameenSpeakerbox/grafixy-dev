import * as React from "react";
import {FitForBusinesses, FreeTrail,HeroSection, HomeFAQ, Testimonial, WhyGrafixy, WorkSession
} from "../components/home";
import Layout from "../components/layout/layout";
import { SEO } from "../components/seo";



const IndexPage = () => {
  return (
    <main className="max-w-[2560px] mx-auto grid w-full ">
      <Layout>
        <HeroSection />
        <WorkSession />
        <WhyGrafixy />
        <FitForBusinesses />
        <FreeTrail />
        <HomeFAQ />
        <Testimonial />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO title='Grafixy | On-demand graphic design | Flat monthly Rate'/>;
