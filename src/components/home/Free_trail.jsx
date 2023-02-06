import { MainImage } from "gatsby-plugin-image";
import React from "react";
import manThinking from "../../images/home/manThinking.webp";
import manThinkingMob from "../../images/home/manThinkingMob.webp";
import { isMobileSafari } from "../../lib/helpers";

const FreeTrail = () => {
  return (
    <div className="flex h-full sm:flex-row flex-col relative z-[10] sm:overflow-visible overflow-hidden">
      <div className="bg-white pl-[100px] sm:flex hidden flex-col items-end  justify-end w-[35%] relative shrink-0">
        <img
          src={manThinking}
          className={`-mr-14 z-30 object-contain min-w-max  h-[110%] absolute right-0 bottom-0 object-bottom`}
          alt="manThinking"
          loading="lazy"
        />
      </div>
      <div className="lg:py-24 sm:bg-[#6019CE]  flex lg:px-20 sm:px-16 px-8 py-10 flex-col z-20 2xl:pl-[150px] sm:pl-[40px] w-full">
        <h1 className="font-semibold 2xl:text-5xl lg:text-4xl text-3xl text-white leading-10">
          What if <br className="sm:hidden block" />{" "}
          <span className="text-[#FF5E3A]">I don’t like it?</span>
        </h1>
        <h2 className="text-[#FFE600] font-semibold 2xl:text-4xl lg:text-3xl sm:text-2xl text-2xl sm:mt-[14px] mt-3 font-nunito tracking-[-2%] ">
          7 Day Free Trial
        </h2>
        <p className="font-nunito 2xl:text-lg lg:text-base sm:text-sm text-base mt-2 text-white 2xl:max-w-[646px]">
          If you feel like our services are not the right fit for your business,
          you can cancel within first 7 days. You get billed only after day 7
          and you don’t have to sign any contracts to continue with Grafixy. Our
          service is delivered month-to-month for a flat monthly rate.
        </p>
      </div>
      <div
        className="bg-[#6019CE]
      after:bg-[#6019CE] after:w-[1000vh] after:h-full after:top-0 after:-left-[200%] after:-z-10 after:absolute absolute right-0 h-full sm:hidden block"
      >
        <MainImage
          src={manThinkingMob}
          alt="manThinking"
          loading="lazy"
          width={100}
          height={100}
          className="w-full h-full object-right object-contain"
        />
      </div>
    </div>
  );
};

export default FreeTrail;
