import { MainImage } from "gatsby-plugin-image";
import React from "react";
import heroPic from "../../../images/why_grafixy/scope of service hero picture.webp";

const HeroSection = () => {
  return (
    <div className=" bg-[#6E3CBC] scope_of_service--heroSection flex-col w-full relative  overflow-hidden justify-end z-0 flex items-center  2xl:px-[147px] 
    sm:px-[80px] 
    px-8  ">
      <MainImage
        src={heroPic}
        alt="heroPic"
        width={100}
        height={100}
        className="object-cover origin-bottom-left w-full h-full absolute -z-10 opacity-[30%]"
      />
      <span className="bg-[#1A0143] absolute inset-0 bg-opacity-95 -z-20" />
      <p className="leading-[134%] 2xl:text-[40px] text-3xl font-semibold  text-white max-w-[867px] text-center">
      Scope of service
      </p>
      <div className="inline-flex text-white font-semibold 2xl:text-[28px] text-2xl leading-[134%] tracking-[3px] gap-[47px] mt-[14px] mb-14 text-center">
        <p>Over 150+ design services covered</p>
      </div>
    </div>
  );
};

export default HeroSection;
