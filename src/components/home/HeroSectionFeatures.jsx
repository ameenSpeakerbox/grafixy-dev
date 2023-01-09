import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { heroSection_features } from "../../lib/dummyData";
import { MessageIcon } from "../../ui/Icon";

const HeroSectionFeatures = () => (
  <div className="grid sm:grid-flow-col  w-full  items-end justify-center z-10">
    <div className="grid sm:grid-flow-col w-full">
      {heroSection_features.map((item) => (
        <div
          style={{ backgroundColor: item.bgColor }}
          key={item.id}
          className="flex flex-col  gap-[2px] 2xl:py-[51px]  2xl:px-[76px] lg:py-5 lg:px-10 sm:py-5 sm:px-10 px-8 py-10 border-l border-black  border-t"
        >
          <h2
            className={`font-bold 2xl:text-2xl lg:text-xl sm:text-sm text-[22px] 2xl:leading-[110%] leading-5 sm:w-auto w-[60%] ${
              item.id === 3
                ? "text-white"
                : "text-[#160137] 2xl:w-[80%] w-[90%]"
            }  `}
          >
            {item.title}
          </h2>
          <p
            className={`font-nunito font-light lg:text-base sm:text-[10px] text-lg 2xl:leading-[110%] sm:leading-3 mt-2 sm:w-auto w-[60%] ${
              item.id === 3
                ? "text-white"
                : "text-[#160137] 2xl:w-[80%] w-[90%]"
            }`}
          >
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>

    <div className="bg-[#4600B2] 2xl:py-[51px]  2xl:px-[76px] sm:py-5 sm:px-10 px-8 py-10 border-t border-l border-black 2xl:pb-[35px] pb-[20px] relative grid h-[110%]">
      <h2 className="font-bold 2xl:text-2xl lg:text-xl sm:text-sm text-[22px] 2xl:leading-[110%] leading-5 text-white  flex shrink-0 w-max pl-10">
        <MessageIcon className="absolute 2xl:left-[24px] sm:left-[14px] left-7 2xl:top-[51px] top-[30px] 2xl:w-[48px] 2xl:h-[48px] sm:w-[28px] sm:h-[28px] w-[40px] h-[40px]" />
        NEED TO KNOW MORE? <br />
        LET’S HAVE A CHAT
      </h2>
      <div className="flex justify-end">
        <StaticImage
          src="../../images/home/AJID.png"
          layout="fullWidth"
          width={135}
          height={135}
          objectFit="cover"
          alt="ajid"
          className="lg:w-[135px] lg:h-[135px] sm:w-[80px] sm:h-[80px] h-[135px] w-[135px]"
        />
      </div>
    </div>
  </div>
);

export default HeroSectionFeatures;
