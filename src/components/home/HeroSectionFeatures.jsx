import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { heroSection_features } from "../../lib/dummyData";
import { MessageIcon } from "../../ui/Icon";

const HeroSectionFeatures = () => (
  <div className="grid grid-flow-col  w-full  items-end justify-center z-10">
    <div className="grid grid-flow-col w-full">
      {heroSection_features.map((item) => (
        <div
          style={{ backgroundColor: item.bgColor }}
          key={item.id}
          className="flex flex-col  gap-[2px] 2xl:py-[51px]  2xl:px-[76px] lg:py-5 lg:px-10 py-5 px-10 border-l border-black  border-t"
        >
          <h2
            className={`font-bold 2xl:text-2xl lg:text-xl text-sm 2xl:leading-[110%] leading-5 ${
              item.id === 3
                ? "text-white"
                : "text-[#160137] 2xl:w-[80%] w-[90%]"
            }  `}
          >
            {item.title}
          </h2>
          <p
            className={`font-nunito font-light lg:text-base text-[10px] 2xl:leading-[110%] leading-3 ${
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

    <div className="bg-[#1D014A] 2xl:py-[51px]  2xl:px-[76px] py-5 px-10 border-t border-l border-black 2xl:pb-[35px] pb-[20px] relative grid h-[110%]">
      <h2 className="font-bold 2xl:text-2xl lg:text-xl text-sm 2xl:leading-[110%] leading-5 text-white  flex shrink-0 w-max pl-10">
        <MessageIcon className="absolute 2xl:left-[24px] left-[14px] 2xl:top-[51px] top-[30px] 2xl:w-[48px] 2xl:h-[48px] w-[28px] h-[28px]" />
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
          className="lg:w-[135px] lg:h-[135px] w-[80px] h-[80px]"
        />
      </div>
    </div>
  </div>
);

export default HeroSectionFeatures;
