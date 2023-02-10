import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import heroPic from "../../images/why_grafixy/why grafixy head.webp";

const HeroSection = () => {
  return (
    <div className=" bg-[#6E3CBC] why_grafixy--heroSection flex-col w-full relative  overflow-hidden justify-end z-0 flex items-center  2xl:px-[147px] 
    sm:px-[80px] 
    px-8 sm:py-14 py-6">
      <MainImage
        src={heroPic}
        alt="heroPic"
        loading="lazy"
        objectFit="cover"
        className="object-cover origin-center w-full h-full absolute -z-10 opacity-[25%] top-0 left-0"
      />
      <span className="bg-[#1A0143] absolute inset-0 bg-opacity-95 -z-20" />
      <p className=" lg:leading-[134%]  sm:leading-[134%] leading-[134%] lg:text-4xl sm:text-3xl text-2xl font-semibold  text-white max-w-[867px] text-center">
        Accelerate your growth with a fully remote team of vetted designers.
        Unlimited design projects. Fast turnaround. All at a fixed monthly rate.
      </p>
      <div className="flex text-[#FFE600] font-semibold 2xl:text-[28px] sm:text-xl text-lg leading-[134%] sm:gap-[47px] gap-3 sm:mt-16 mt-10 flex-wrap sm:flex-row flex-col items-center justify-center tracking-normal">
        <p>NO HR</p>
        <p>NO HIRING</p>
        <p>NO HOURLY BILLING</p>
      </div>
    </div>
  );
};

export default HeroSection;
