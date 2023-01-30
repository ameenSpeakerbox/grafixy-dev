import { MainImage } from "gatsby-plugin-image";
import React from "react";
import heroPic from "../../images/why_grafixy/why grafixy head.webp";

const HeroSection = () => {
  return (
    <div className=" bg-[#6E3CBC] why_grafixy--heroSection flex-col w-full relative  overflow-hidden justify-end z-0 flex items-center  2xl:px-[147px] 
    sm:px-[80px] 
    px-8  ">
      <MainImage
        src={heroPic}
        alt="heroPic"
        width={100}
        height={100}
        className="object-cover origin-center w-full h-full absolute -z-10 opacity-[25%]"
      />
      <span className="bg-[#1A0143] absolute inset-0 bg-opacity-95 -z-20" />
      <p className="leading-[134%] 2xl:text-[40px] text-3xl font-semibold  text-white max-w-[867px] text-center">
        Accelerate your growth with a fully remote team of vetted designers.
        Unlimited design projects. Fast turnaround. All at a fixed monthly rate.
      </p>
      <div className="inline-flex text-white font-semibold 2xl:text-[28px] text-2xl leading-[134%] tracking-[3px] gap-[47px] mt-20 mb-14">
        <p>NO HR</p>
        <p>NO HIRING</p>
        <p>NO HOURLY BILLING</p>
      </div>
    </div>
  );
};

export default HeroSection;
