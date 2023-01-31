import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { GradientBtn } from "../../ui/Button";
import questionMark from "../../images/home/question mark.svg";

const HeroSection = () => {
  const ColorLine = ({ heading, bgColor }) => (
    <div
      className="w-[140%] lg:max-h-[80px] sm:max-h-[54px] max-h-[40px]
    h-full flex items-center justify-center text-[#1D0149] font-semibold 2xl:text-5xl sm:text-4xl
    text-2xl leading-[100%] "
      style={{ backgroundColor: bgColor }}
    >
      <p className="h-full bg-white px-4 grid place-items-center sm:py-3 py-2 heroSection__textShadow-homePage">
        {heading}
      </p>
    </div>
  );

  return (
    <div className="heroSection__hight-homePage sm:hight900:h-[850px]  sm:hight600:h-screen h-full  heroSection__hight-homePage bg-[#1E014B] sm:bg-gradient-to-br from-[#100028] to-[#220058] flex flex-col w-full relative  overflow-hidden items-center justify-end sm:py-14 py-8">
      {/* main section */}

      {/* center designs */}
      <div className="gap-3 grid w-full -rotate-[10.22deg] sm:hight600:mb-12 mb-6 place-items-center sm:mt-10">
        <ColorLine heading="On Demand Graphic Design" bgColor="#6019CE" />
        <ColorLine heading="One Flat Monthly Rate" bgColor="#FF5E3A" />
        <ColorLine heading="Unlimited Requests" bgColor="#FFE600" />
      </div>
      {/* center designs */}

      <div
        className="w-full flex sm:justify-between justify-center sm:items-end z-20 2xl:px-[147px] 
    sm:px-[80px] 
    px-8 gap-10 sm:flex-row flex-col sm:mt-0 mt-16"
      >
        <div className="grid sm:place-content-center place-content-start">
          <h3 className="lg:text-xl text-lg lg:leading-[110%] leading-[110%] font-bold text-white">
            READY TO GET STARTED? <br />
            <span className="text-[#FFE600]">TRY 14 DAYS RISK FREE!</span>
          </h3>
          <div className="flex items-center justify-center gap-5 lg:mt-5 mt-4">
            <GradientBtn text="SEE PRICING" />
            <GradientBtn text="GET A DEMO" className=''/>
          </div>
        </div>

        <div className="grid place-items-end gap-4">
          <MainImage
            alt="question mark"
            src={questionMark}
            width={60.17}
            height={90.25}
            className="object-contain lg:max-w-[60.17px] sm:max-w-[45.12px] max-w-[33.69px]"
          />
          <p className="font-nunito lg:text-lg text-base sm:text-right leading-[140%] text-white max-w-[737px]">
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
