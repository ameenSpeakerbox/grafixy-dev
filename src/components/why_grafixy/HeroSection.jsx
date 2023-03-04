import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import heroPic from '../../images/why_grafixy/why grafixy head.webp';

const HeroSection = () => {
  return (
    <div
      className=" why_grafixy--heroSection relative z-0 flex w-full  flex-col items-center justify-end overflow-hidden bg-[#6E3CBC]  px-8 
    py-6 
    sm:px-[80px] sm:py-14 2xl:px-[147px]"
    >
      <MainImage
        src={heroPic}
        alt="heroPic"
        loading="lazy"
        className="absolute top-0 left-0 -z-10 h-full w-full origin-center object-cover opacity-[25%]"
      />
      <span className="absolute inset-0 -z-20 bg-[#1A0143] bg-opacity-95" />
      <p className=" max-w-[867px]  text-center text-2xl font-semibold leading-[134%] text-white sm:text-3xl  sm:leading-[134%] lg:text-4xl lg:leading-[134%]">
        Accelerate your growth with a fully remote team of vetted designers.
        Unlimited design projects. Fast turnaround. All at a fixed monthly rate.
      </p>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 text-lg font-semibold leading-[134%] tracking-normal text-[#FFE600] sm:mt-16 sm:flex-row sm:gap-[47px] sm:text-xl 2xl:text-[28px]">
        <p>NO HR</p>
        <p>NO HIRING</p>
        <p>NO HOURLY BILLING</p>
      </div>
    </div>
  );
};

export default HeroSection;
