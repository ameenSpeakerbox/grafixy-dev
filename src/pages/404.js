import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/layout/Header";
import bg from "../images/not fond.svg";
import { MainImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <main className="relative h-screen overflow-hidden notFoundPageBgGradient z-0" >
     
      <Header />
      <div className="2xl:px-[147px] sm:px-[80px] px-8 lg:pt-40 sm:pt-32 pt-20 flex items-start justify-center h-full ">
        <h1 className="font-medium text-4xl text-[#9C66F0] text-center">
          This page is <span className="text-white">under construction</span>
        </h1>

        <MainImage
        alt="bg"
        src={bg}
        width={100}
        height={100}
        className="absolute max-w-[600px] object-center object-contain w-full h-auto lg:bottom-10 sm:bottom-20 bottom-40 -z-10"
      />
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
