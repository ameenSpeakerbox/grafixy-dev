import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Free_trail = () => {
  return (
    <div className="flex h-full">
      <div className="bg-white pl-[100px] flex flex-col items-end  justify-end w-[35%] relative shrink-0">
        <div className="absolute bottom-0 right-0  flex items-end justify-end ">

        <StaticImage
          src="../../images/home/Free_trail/manThinking.png"
          className="-mr-24 w-full h-full "
          objectFit="cover "
          layout="constrained"
          />
          </div>
      </div>
      <div className="py-24 bg-[#6019CE] flex px-20 flex-col">
        <h1 className="font-semibold text-7xl text-white ">
          What if <span className="text-[#FF5E3A]">I don’t like it?</span>
        </h1>
        <span className="pl-[150px]">
          <h2 className="text-[#FFE600] font-semibold text-[55px]">
            7 Day Free Trial
          </h2>
          <p className="font-nunito text-lg text-white">
            If you feel like our services are not the right fit for your
            business, you can cancel within first 7 days. You get billed only
            after day 7 and you don’t have to sign any contracts to continue
            with Grafixy. Our service is delivered month-to-month for a flat
            monthly rate.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Free_trail;
