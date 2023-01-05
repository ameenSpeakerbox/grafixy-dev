import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import hero_textImage from "../../images/home/hero-section_text.png";
import { heroSection_features } from "../../lib/dummyData";
import { MessageIcon } from "../../ui/Icon";

const HeroSection = () => {
  return (
    <div className="hight900:h-[1117px]  hightUt900:h-screen overflow-hidden bg-gradient-to-r from-[#100028] to-[#220058] flex flex-col items-center justify-center w-full ">
      {/* main section */}
      <div className="grid grid-cols-2 h-full w-full">
        <div className="text-[65px] leading-[110%] font-medium text-white flex flex-col items-start justify-center w-full px-[147px] mt-40">
          Your Design <br />
          <span className="inline-flex items-center">
            Team{" "}
            <img
            alt="textImage"
              src={hero_textImage}
              className="object-contain ml-2 -mb-4 h-[42px]"
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
          <StaticImage
            alt="hero-pic"
            src="../../images/home/hero-section.webp"
            objectFit="cover"
            className="w-full hight900:h-[1117px]   hightUt900:h-screen absolute right-0 "
          />
        </div>
      </div>
      {/* heroSection feature */}
      <div className="flex w-full  items-end justify-center z-10">
        <div className="flex">
          {heroSection_features.map((item) => (
            <div
              style={{ backgroundColor: item.bgColor }}
              key={item.id}
              className="grid gap-[2px] py-[51px] px-[76px] border-l border-black  border-t"
            >
              <h2
                className={`font-bold text-2xl ${
                  item.id === 3 ? "text-white" : "text-[#160137]"
                }  `}
              >
                {item.title}
              </h2>
              <p
                className={`font-nunito font-light leading-[110%] ${
                  item.id === 3 ? "text-white" : "text-[#160137]"
                }`}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#1D014A] py-[51px] px-[76px] border-t border-l border-black pb-[35px]">
          <h2 className="text-white text-2xl font-bold inline-flex relative ">
            <MessageIcon className="absolute -left-14 -top-4" />
            NEED TO KNOW MORE? LET’S HAVE A CHAT
          </h2>
          <div className="flex justify-end">
            <StaticImage
              src="../../images/home/AJID.png"
              layout="fixed"
              width={145}
              height={145}
              objectFit="cover"
              alt="ajid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
