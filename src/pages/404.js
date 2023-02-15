import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/layout/Header";
import bg from "../images/not fond.webp";
import { MainImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <main className="relative h-screen">
      <MainImage
        alt="bg"
        src={bg}
        width={100}
        height={100}
        className="absolute w-full object-center object-contain top-0 left-0 -z-10"
      />
      <Header />
      <div className="2xl:px-[147px] sm:px-[80px] px-8 lg:pt-40 sm:pt-32 pt-20 flex items-center justify-center">
        <h1 className="font-medium text-4xl text-[#9C66F0]">
          This page is <span className="text-white">under construction</span>
        </h1>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
