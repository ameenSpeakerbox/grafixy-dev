import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { GradientBtn } from '../../ui/Button';
import questionMark from '../../images/home/question mark.svg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const ColorLine = ({ heading, bgColor, animationDelay }) => (
    <div
      className="flex h-min max-h-[40px] w-[200%] items-center
     justify-center text-xl font-semibold leading-[100%] text-[#1D0149] sm:max-h-[54px] sm:justify-end sm:pr-[80%] sm:text-4xl
    lg:max-h-[80px] 2xl:text-5xl "
      style={{ backgroundColor: bgColor }}
    >
      <span
        className={
          'heroSection__textShadow-homePage grid h-full place-items-center overflow-hidden bg-white px-4 py-2 sm:py-3'
        }
      >
        <motion.p
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.5, delay: animationDelay }}
        >
          {heading}
        </motion.p>
      </span>
    </div>
  );

  return (
    <div className="heroSection__hight-homePage heroSection__hight-homePage  relative flex  h-full w-full flex-col items-center justify-end overflow-hidden bg-[#1E014B] from-[#100028] to-[#220058]  py-8 sm:bg-gradient-to-br sm:py-14 sm:hight600:h-screen sm:hight1100:h-[850px]">
      {/* main section */}
      <div className="flex h-full w-full flex-col items-center justify-evenly pt-5 lg:pt-[150px]">
        {/* center designs */}
        <div className="mb-6 flex w-full -rotate-[10.22deg] flex-col place-items-center gap-3 sm:hight600:mb-8">
          <ColorLine
            heading="On Demand Graphic Design"
            bgColor="#6019CE"
            animationDelay=".3"
          />
          <ColorLine
            heading="One Flat Monthly Rate"
            bgColor="#FF5E3A"
            animationDelay=".5"
          />
          <ColorLine
            heading="Unlimited Requests"
            bgColor="#FFE600"
            animationDelay=".7"
          />
        </div>
        {/* center designs */}

        <div
          className="z-20 mt-16 flex w-full flex-col justify-center gap-10 
        px-8 
        sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:px-[80px] 2xl:px-[147px]"
        >
          <div className="grid place-content-start sm:place-content-center">
            <h3 className="text-lg font-bold leading-[110%] text-white lg:text-xl lg:leading-[110%]">
              READY TO GET STARTED? <br />
              <span className="text-[#FFE600]">TRY 7 DAYS RISK FREE!</span>
            </h3>
            <div className="mt-4 flex items-center justify-center gap-5 lg:mt-5">
              <GradientBtn text="SEE PRICING" link="pricing" />
              <GradientBtn
                text="GET A DEMO"
                link="https://calendly.com/grafixy-demo/grafixy-demo-session"
                target="_blank"
              />
            </div>
          </div>

          <div className="grid place-items-end gap-4">
            <MainImage
              alt="question mark"
              src={questionMark}
              width={60.17}
              height={90.25}
              className="max-w-[33.69px] object-contain sm:max-w-[45.12px] lg:max-w-[60.17px]"
            />
            <p className="max-w-[737px] font-nunito text-base leading-[140%] text-white sm:text-right lg:text-lg">
              Grafixy is a service that can accelerate your growth with a fully
              remote team of vetted designers. Unlimited design projects. Fast
              turnaround. No hourly billing, all at a fixed monthly rate. You
              can submit as many projects as you want, get your completed
              designs back in under 24 hours. It’s just like hiring a designer,
              just more efficient and cost effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
