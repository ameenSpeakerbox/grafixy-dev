import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "../ui/Button";
import image_of_demo from "../../images/our_works/getADemo.png";


const GetDemo = () => {
  return (
    <div className=" flex w-full sm:mb-20   h-auto 2xl:px-[147px] sm:px-[80px] px-0">
      <div className="w-full py-[70px] 2xl:px-[122px] lg:px-[80px] sm:px-[50px] px-[30px]  bg-gradient-to-l from-[#6019CE] to-[#41118C] sm:rounded-[50px] relative Z-40 sm:overflow-visible overflow-hidden">
        <h1 className="font-medium sm:text-4xl text-3xl  text-white z-30 relative leading-[100%] ">
          <span className="opacity-[.65] text-[#E0CCFF]"> Ready to try <br className="lg:hidden sm:block hidden "/></span> Grafixy?
        </h1>
        <p className="font-nunito font-semibold  sm:text-xl text-lg text-[#E0CCFF] lg:max-w-[50%] sm:max-w-[60%] sm:mt-[30px] mt-[21px] z-20 relative">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly. Grafixy makes it incredibly.
        </p>
        <div className="flex sm:gap-[26px] gap-[22px] mt-[30px] z-50 relative ">
          <Button
            className="text-white px-[11px] sm:py-[32px] bg-[#6019CE] rounded-[33px] drop-shadow-lg sm:h-[67px] h-[50px] flex items-center justify-center sm:w-[180px] font-bold sm:text-lg shrink-0 text-sm relative after:absolute after:w-full after:h-full after:bg-[#19013F] after:-left-[100%] after:top-0 after:-z-10 z-10 overflow-hidden hover:after:left-0 after:duration-300 after:ease-in shadow-xl"
            name="GET A DEMO" link="https://calendly.com/grafixy-demo/grafixy-demo-session" target="_blank"
          />
          <Button  className="text-white px-[11px] sm:py-[32px] bg-[#19013F] rounded-[33px] drop-shadow-lg sm:h-[67px] h-[50px] flex items-center justify-center sm:w-[180px] shrink-0 sm:text-lg text-sm relative after:absolute after:w-full after:h-full after:bg-[#6019CE] after:-left-[100%] after:top-0 after:-z-10 z-10 overflow-hidden hover:after:left-0 after:duration-300 after:ease-in shadow-xl"
            name="SEE PRICING" />
        </div>
          <MainImage src={image_of_demo} 
          alt='image of demo'
          className="absolute bottom-0 sm:block hidden lg:right-16 sm:right-0 -right-[20%] lg:h-auto h-full object-contain object-right-bottom" />
      </div>
    </div>
  );
};

export default GetDemo;
