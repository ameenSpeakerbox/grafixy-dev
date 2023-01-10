import { MainImage } from "gatsby-plugin-image";
import React from "react";
import hero_textImage from "../../images/home/hero-section_text.png";
import heroPic from "../../images/home/hero-section.webp";
import HeroSectionFeatures from "./HeroSectionFeatures";
import { Button } from "../../ui/Button";

const HeroSection = () => {
  return (
    <div className="sm:hight900:h-[1117px]  sm:hightUt900:h-full h-full bg-[#1E014B] sm:bg-gradient-to-r from-[#100028] to-[#220058] flex flex-col w-full relative  overflow-hidden">
      {/* main section */}
      <div className="grid sm:grid-cols-2 w-full h-full">
        <div className="2xl:text-[65px] sm:text-[42px] text-[35px] leading-[110%] font-medium text-white flex flex-col items-start justify-center w-full 2xl:px-[147px] sm:px-[100px] px-8 2xl:mt-60 sm:mt-32 mt-11 mb-14">
          Your Design <br />
          <span className="inline-flex items-center">
            Team{" "}
            <img
              alt="textImage"
              src={hero_textImage}
              className="object-contain ml-2 sm:-mb-4 -mb-3 2xl:h-[42px] sm:h-[36px] h-[22px]"
            />
          </span>
          <span className="text-[#E0CCFF]">
            Unlimited <br /> Designs! <br />{" "}
          </span>
          Monthly <br /> Flat Fee
          <span className="bg-white 2xl:px-10 2xl:py-4 px-4 py-1 mt-5 rounded-[12px] sm:flex hidden drop-shadow-xl ">
            <p className="2xl:text-[22px] lg:text-base text-sm font-extrabold text-[#1D014A] 2xl:leading-[110%] text-center leading-3">
              BLACK FRIDAY SALE{" "}
              <p className="text-[#FD0503]">
                30% OFF{" "}
                <span className="font-semibold text-[#1D014A]">
                  ON ALL PLANS!
                </span>
              </p>
            </p>
          </span>
          <Button
            name="SCHEDULE A DEMO"
            className="text-[#6E3CBC] px-5 py-2 bg-white rounded-full mt-5 text font-bold text-sm sm:hidden flex"
          />
        </div>

        <div className="h-full relative grid w-full place-items-center">
          <MainImage
            alt="hero-pic"
            src={heroPic}
            className="w-full sm:hight900:h-[1117px] min-[430px]   hightUt900:h-screen sm:absolute right-0 object-cover"
          />

          <span className="bg-white h-[60px] w-[270px] items-center justify-center  rounded-[9px] flex sm:hidden drop-shadow-xl absolute bottom-10">
            <p className="2xl:text-[22px] lg:text-base sm:text-sm text-base  font-extrabold text-[#1D014A] 2xl:leading-[110%] text-center sm:leading-3 leading-[110%]">
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
      </div>

      {/* heroSection feature */}


      <HeroSectionFeatures />
    </div>
  );
};

export default HeroSection;
