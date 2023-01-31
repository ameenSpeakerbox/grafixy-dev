import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { GradientBtn } from "../../ui/Button";
import questionMark from "../../images/home/question mark.svg";

const HeroSection = () => {
  return (
    <div
      className="sm:hight900:h-[850px]  sm:hight600:h-screen  h-full bg-[#1E014B] sm:bg-gradient-to-br from-[#100028] to-[#220058] flex flex-col w-full relative  overflow-hidden items-center justify-end py-24  "
    >
      {/* main section */}

      {/* center designs */}
      <div className="gap-3 grid w-full -rotate-[10.22deg] sm:hight600:mb-12 mb-6 place-items-center">


      <div
        className="w-[140%] bg-[#6019CE] max-h-[90px]
        h-full flex items-center justify-center text-[#1D0149] font-semibold 2xl:text-5xl text-4xl leading-[100%] "
        >
        <p className="h-full bg-white px-4 grid place-items-center py-4">
          On Demand Graphic Design
        </p>
      </div>
      <div
        className="w-[140%] bg-[#FF5E3A] max-h-[90px]
        h-full flex items-center justify-center text-[#1D0149] font-semibold 2xl:text-5xl text-4xl leading-[100%]"
      >
        <p className="h-full bg-white px-4 grid place-items-center py-4">
          One Flat Monthly Rate
        </p>
      </div>
      <div
        className="w-[140%] bg-[#FFE600] max-h-[90px]
        h-full flex items-center justify-center text-[#1D0149] font-semibold 2xl:text-5xl text-4xl leading-[100%]"
        >
        <p className="h-full bg-white px-4 grid place-items-center py-4">
          Unlimited Requests
        </p>
      </div>

        </div>
      {/* center designs */}

      <div className="w-full flex justify-between items-end z-20 2xl:px-[147px] 
    sm:px-[80px] 
    px-8 gap-10">
        <div>
          <h3 className="text-xl leading-[110%] font-bold text-white">
            READY TO GET STARTED? <br />
            <span className="text-[#FFE600]">TRY 14 DAYS RISK FREE!</span>
          </h3>
          <div className="flex items-center justify-center gap-5 mt-5">
            <GradientBtn text="SEE PRICING" />
            <GradientBtn text="GET A DEMO" />
          </div>
        </div>

        <div className="grid place-items-end gap-4">
          <MainImage
            alt="question mark"
            src={questionMark}
            width={60.17}
            height={90.25}
            className="object-contain"
          />
          <p className="font-nunito text-lg text-right leading-[140%] text-white max-w-[737px]">
            Grafixy is a service that can accelerate your growth with a fully
            remote team of vetted designers. Unlimited design projects. Fast
            turnaround. No hourly billing, all at a fixed monthly rate. You can
            submit as many projects as you want, get your completed designs back
            in under 24 hours. It’s just like hiring a designer, just more
            efficient and cost effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
