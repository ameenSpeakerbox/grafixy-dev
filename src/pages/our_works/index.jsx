import { MainImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout/layout";
import GetDemo from "../../components/our_works/GetDemo";
import MainParts from "../../components/our_works/MainParts";
import headerImg from "../../images/our_works/ourWorks_heder.png";

const index = () => {
  return (
    <div className="bg-[#1A0143] max-w-[2560px] mx-auto grid w-full ">
      <Layout>
        <div className="sm:h-[450px] h-[420px] flex w-full relative items-center justify-end flex-col text-center z-10 px-8 hight600:max-h-[80vh]">
          <MainImage
            src={headerImg}
            alt="header"
            className="w-full h-full object-cover absolute -z-10"
          />
          <h1 className="font-medium lg:text-5xl sm:text-4xl text-3xl text-[#D5BAFF] leading-none ">
            A perfect fit for <br /> <span>agencies</span> &{" "}
            <span className="text-white">brands</span>
          </h1>
          <p className="text-white sm:text-xl text-lg leading-[125%] sm:w-[50%] w-[90%] mt-5 mb-16">
            Invite team members and clients to help you make and manage designs
            at no extra cost. Easy integration into slack and microsoft teams.
          </p>
        </div>
        <MainParts />
        <GetDemo />
      </Layout>
    </div>
  );
};

export default index;
