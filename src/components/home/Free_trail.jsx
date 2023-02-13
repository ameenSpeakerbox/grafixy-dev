import { MainImage } from "gatsby-plugin-image";
import React from "react";
import manThinking from "../../images/home/manThinking.webp";
import manThinkingMob from "../../images/home/manThinkingMob.webp";

const FreeTrail = () => {
  return (
    <div className="flex h-full sm:flex-row flex-col relative z-[10] sm:overflow-visible overflow-hidden">
      <div className="bg-white pl-[100px] sm:flex hidden flex-col items-end  justify-end w-[35%] relative shrink-0">
        <img
          src={manThinking}
          className={`lg:-mr-14 -mr-4 z-30 object-contain min-w-max  h-[110%] absolute right-0 bottom-0 object-bottom`}
          alt="manThinking"
          loading="lazy"
        />
      </div>
      <div className="lg:py-24 sm:bg-[#6019CE]  flex lg:px-20 sm:px-16 px-8 py-10 flex-col z-20 2xl:pl-[150px] sm:pl-[40px] w-full">
        <h1 className="font-semibold lg:text-4xl text-3xl text-white leading-10">
          What if <br className="sm:hidden block" />{" "}
          <span className="text-[#FF5E3A]">I don’t like it?</span>
        </h1>
        <h2 className="text-[#FFE600] font-semibold text-2xl sm:mt-[14px] mt-3 font-nunito tracking-[-2%] ">
          7 Day Free Trial
        </h2>
        <p className="font-nunito 2xl:text-lg lg:text-base sm:text-sm text-base mt-2 text-white max-w-[646px]">
        At Grafixy, we understand that finding the right fit for your business is important. That's why we offer a 7-day trial period, during which you can cancel with no obligation. Our services are billed on a month-to-month basis and there are no contracts to sign, ensuring that you can enjoy the flexibility you need for your business.
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
