import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import manThinking from "../../images/home/manThinking.png";
import manThinkingMob from "../../images/home/manThinkingMob.png";

const Free_trail = () => {
  return (
    <div className="flex h-full sm:flex-row flex-col relative z-[10] sm:overflow-visible overflow-hidden">
      <div className="bg-white pl-[100px] sm:flex hidden flex-col items-end  justify-end w-[35%] relative shrink-0">
        <img
          src={manThinking}
          className="-mr-14 z-30  object-cover  min-w-max  h-[110%]    absolute right-0 bottom-0 object-bottom"
          alt="manThinking"
        />
      </div>
      <div className="lg:py-24 sm:bg-[#6019CE]  flex lg:px-20 sm:px-16 px-8 py-20 flex-col z-20">
        <h1 className="font-semibold 2xl:text-7xl lg:text-6xl sm:text-5xl text-4xl text-white leading-10">
          What if <br className="sm:hidden block"/> <span className="text-[#FF5E3A]">I don’t like it?</span>
        </h1>
        <span className="2xl:pl-[150px] sm:pl-[40px]">
          <h2 className="text-[#FFE600] font-semibold 2xl:text-[55px] lg:text-5xl sm:text-4xl text-2xl mt-[14px]">
            7 Day Free Trial
          </h2>
          <p className="font-nunito 2xl:text-lg lg:text-base sm:text-sm text-base mt-2 text-white 2xl:w-[60%]">
            If you feel like our services are not the right fit for your
            business, you can cancel within first 7 days. You get billed only
            after day 7 and you don’t have to sign any contracts to continue
            with Grafixy. Our service is delivered month-to-month for a flat
            monthly rate.
          </p>
        </span>
      </div>
      <div className="bg-[#6019CE] after:content-[' ']
      after:bg-[#6019CE] after:w-[1000vh] after:h-full after:top-0 after:-left-[200%] after:-z-10 after:absolute absolute right-0 h-full sm:hidden block">


      <img src={manThinkingMob} alt="manThinking" className="w-full h-full object-right object-contain" />
      </div>
    </div>
  );
};

export default Free_trail;
