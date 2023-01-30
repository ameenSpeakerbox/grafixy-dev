import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { getGrafixy } from "../../lib/dummyData";

const WhyGetGrafixy = () => {
  return (
    <div className="2xl:px-[147px] sm:px-[80px] px-8 py-20 flex items-center justify-center flex-col ">
      <div className="gap-1 grid items-center justify-center text-center">
        <h1 className="font-semibold 2xl:text-[45px] text-4xl tracking-[-2%] text-[#210153]">
          Why get grafixy?
        </h1>
        <p className="text-[#6E3CBC] font-nunito 2xl:text-2xl text-xl max-w-[837px]">
          Maybe its time to stop hiring designers that are unreliable and
          expensive. Get your own design team at just a fraction of the cost.
        </p>
      </div>
      <div className="grid grid-cols-2 2xl:mt-20 mt-16 2xl:gap-16 gap-14">
        {getGrafixy.map((item) => (
          <div key={item.id} className="flex items-center justify-start 2xl:gap-6 gap-5">
            <div className="grid place-content-center w-24 h-24">
              <MainImage
                src={item.icon}
                alt="icon"
                width={90}
                height={90}
                className="object-contain w-full h-full 2xl:max-h-20 max-h-16"
              />
            </div>
            <div className="grid place-content-start gap-1">
              <h3 className="font-medium 2xl:text-[28px] text-2xl tracking-[-2%] text-[#28075A] ">{item.title}</h3>
              <p className="font-nunito 2xl:text-lg text-base font-normal text-[#6E3CBC] max-w-[310px]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyGetGrafixy;
