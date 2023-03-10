import React from 'react';
import Layout from '../../components/layout/layout';
import GetDemo from '../../components/GetDemo';
import HeroSection from '../../components/why_grafixy/HeroSection';
import ServicesInWhyGrafixy from '../../components/why_grafixy/ServicesInWhyGrafixy';
import WhyGetGrafixy from '../../components/why_grafixy/WhyGetGrafixy ';

const index = () => {
  return (
    <main className=" mx-auto grid w-full max-w-[2560px] ">
      <Layout>
        <HeroSection />
        <WhyGetGrafixy />
        <ServicesInWhyGrafixy />
        <div className="flex w-full sm:mt-20">
          <GetDemo />
        </div>
      </Layout>
    </main>
  );
};

export default index;
