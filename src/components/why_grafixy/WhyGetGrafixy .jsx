import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { getGrafixy } from '../../lib/dummyData';

const WhyGetGrafixy = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-8 sm:px-[80px] sm:py-10 lg:py-14 2xl:px-[147px] 2xl:py-20">
      <div className="grid items-center justify-center gap-2 text-center">
        <h1 className="text-3xl font-semibold tracking-[-2%] text-[#210153] sm:text-4xl 2xl:text-[45px]">
          Why get grafixy?
        </h1>
        <p className="max-w-[837px] font-nunito text-lg leading-[120%] text-[#6E3CBC] lg:text-xl 2xl:text-2xl">
          Maybe its time to stop hiring designers that are unreliable and
          expensive. Get your own design team at just a fraction of the cost.
        </p>
      </div>
      <div className="mt-10 grid w-full place-items-start gap-8 lg:mt-16 lg:w-max lg:grid-cols-2 lg:gap-14 2xl:mt-20 2xl:gap-16">
        {getGrafixy.map((item) => (
          <div
            key={item.id}
            className="grid grid-flow-col items-center justify-start gap-2 lg:gap-5 2xl:gap-6"
          >
            <div className="flex h-24 w-24 items-center justify-center">
              <MainImage
                src={item.icon}
                alt="icon"
                width={90}
                height={90}
                className={`h-full max-h-16 w-max object-contain 2xl:max-h-20 ${
                  item.id === 2 && 'mr-8'
                }`}
              />
            </div>
            <div className="grid place-content-start gap-1">
              <h3 className="text-xl font-medium tracking-[-2%] text-[#28075A] lg:text-2xl 2xl:text-[28px] ">
                {item.title}
              </h3>
              <p className="max-w-[310px] font-nunito text-sm font-normal leading-[120%] text-[#6E3CBC] lg:text-base 2xl:text-lg">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyGetGrafixy;
