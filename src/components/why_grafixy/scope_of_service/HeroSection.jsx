import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import heroPic from '../../../images/why_grafixy/scope of service hero picture.webp';

const HeroSection = () => {
  return (
    <div
      className=" scope_of_service--heroSection relative z-0 flex w-full  flex-col items-center justify-end overflow-hidden bg-[#6E3CBC]  px-8 
    sm:px-[80px] 
    2xl:px-[147px]  "
    >
      <MainImage
        src={heroPic}
        alt="heroPic"
        width={100}
        height={100}
        className="absolute left-0 -z-10 h-full  w-full origin-top-left object-cover opacity-[30%] "
      />
      <span className="absolute inset-0 -z-20 bg-[#1A0143] bg-opacity-95" />
      <p className="max-w-[867px] text-center  text-[30px]  font-semibold leading-[134%] text-white">
        Scope of service
      </p>
      <div className="mt-1 mb-10 gap-[47px] text-center font-nunito text-base font-semibold leading-[134%] tracking-[-2%] text-white 2xl:text-xl">
        Over 150+ design services covered
      </div>
    </div>
  );
};

export default HeroSection;
