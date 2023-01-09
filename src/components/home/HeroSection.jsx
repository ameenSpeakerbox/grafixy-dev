import { MainImage } from "gatsby-plugin-image";
import React from "react";
import hero_textImage from "../../images/home/hero-section_text.png";
import heroPic from "../../images/home/hero-section.webp";
import HeroSectionFeatures from "./HeroSectionFeatures";

const HeroSection = () => {
  return (
    <div className="hight900:h-[1117px]  hightUt900:h-screen overflow-hidden bg-gradient-to-r from-[#100028] to-[#220058] flex flex-col items-center justify-center w-full relative">
      {/* main section */}
      <div className="grid grid-cols-2 h-full w-full ">
        <div className="2xl:text-[65px] text-5xl leading-[110%] font-medium text-white flex flex-col items-start justify-center w-full 2xl:px-[147px] px-[100px] 2xl:pt-60 pt-40">
          Your Design <br />
          <span className="inline-flex items-center">
            Team{" "}
            <img
              alt="textImage"
              src={hero_textImage}
              className="object-contain ml-2 -mb-4 2xl:h-[42px] h-[36px]"
            />
          </span>
          <span className="text-[#E0CCFF]">
            Unlimited <br /> Designs! <br />{" "}
          </span>
          Monthly <br /> Flat Fee
          <span className="bg-white px-[36px] py-[15px] mt-5 rounded-[12px] flex drop-shadow-xl ">
            <p className="text-[22px] font-extrabold text-[#1D014A] leading-[110%] text-center">
              BLACK FRIDAY SALE{" "}
              <p className="text-[#FD0503]">
                30% OFF{" "}
                <span className="font-semibold text-[#1D014A]">
                  ON ALL PLANS!
                </span>
              </p>
            </p>
          </span>
        </div>

        <div className="h-full relative grid w-full">
          <MainImage
            alt="hero-pic"
            src={heroPic}
            className="w-full hight900:h-[1117px]   hightUt900:h-screen absolute right-0 object-cover"
          />
        </div>
      </div>

      {/* heroSection feature */}

      <HeroSectionFeatures />
    </div>
  );
};

export default HeroSection;
