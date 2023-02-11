import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { getGrafixy } from "../../lib/dummyData";

const WhyGetGrafixy = () => {
  return (
    <div className="2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 lg:py-14 sm:py-10 py-8 flex items-center justify-center flex-col">
      <div className="gap-2 grid items-center justify-center text-center">
        <h1 className="font-semibold 2xl:text-[45px] sm:text-4xl text-3xl tracking-[-2%] text-[#210153]">
          Why get grafixy?
        </h1>
        <p className="text-[#6E3CBC] font-nunito 2xl:text-2xl lg:text-xl text-lg max-w-[837px] leading-[120%]">
          Maybe its time to stop hiring designers that are unreliable and
          expensive. Get your own design team at just a fraction of the cost.
        </p>
      </div>
      <div className="grid md:grid-cols-2 2xl:mt-20 lg:mt-16 mt-10 2xl:gap-16 lg:gap-14 gap-8 place-items-start md:w-max w-full">
        {getGrafixy.map((item) => (
          <div key={item.id} className="grid grid-flow-col items-center justify-start 2xl:gap-6 lg:gap-5 gap-2">
            <div className="flex items-center justify-center w-24 h-24">
              <MainImage
                src={item.icon}
                alt="icon"
                width={90}
                height={90}
                className={`object-contain w-max h-full 2xl:max-h-20 max-h-16 ${item.id === 2 && "mr-8"}`}
              />
            </div>
            <div className="grid place-content-start gap-1">
              <h3 className="font-medium 2xl:text-[28px] lg:text-2xl text-xl tracking-[-2%] text-[#28075A] ">{item.title}</h3>
              <p className="font-nunito 2xl:text-lg lg:text-base text-sm leading-[120%] font-normal text-[#6E3CBC] max-w-[310px]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyGetGrafixy;
