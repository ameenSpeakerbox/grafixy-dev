import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import hero_textImage from "../../images/home/hero-section_text.png";

const HeroSection = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#100028] to-[#220058] flex flex-col items-center justify-center w-full ">
     
     
     {/* main section */}
      <div className="grid grid-cols-2 h-full">
        <div className="text-[65px] leading-[110%] font-medium text-white flex flex-col items-start justify-center w-full px-[]">
          Your Design <br />
          <span className="inline-flex items-center">
            Team{" "}
            <img
              src={hero_textImage}
              className="object-contain ml-2 -mb-4 h-[42px]"
            />
          </span>{" "}
          <br />{" "}
          <span className="text-[#E0CCFF]">
            Unlimited <br /> Designs! <br />{" "}
          </span>
          Monthly <br /> Flat Fee
          
        <span className="bg-white px-[36px] py-[15px] mt-5 rounded-[12px] flex drop-shadow-xl ">
          <p className="text-[22px] font-extrabold text-[#1D014A]">
            BLACK FRIDAY SALE <br />
            <p className="text-[#FD0503]">30% OFF <span className="font-semibold text-[#1D014A]">ON ALL PLANS!</span></p>
          </p>
        </span>
        </div>

        <div>
          <StaticImage alt="hero-pic" src="../../images/home/hero-section.webp" objectFit="cover" className="w-full h-full" />
        </div>
      </div>
      {/* heroSection feature */}
      <div></div>
    </div>
  );
};

export default HeroSection;
