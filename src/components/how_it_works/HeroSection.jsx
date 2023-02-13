import React from "react";
import { MainImage } from "gatsby-plugin-image";
import one from "../../images/how_it_works/1.svg";
import second from "../../images/how_it_works/2.svg";
import third from "../../images/how_it_works/3.svg";
import download from "../../images/how_it_works/download.svg";
import mouseClick from "../../images/how_it_works/mouse click.svg";
const HeroSection = () => {
  const HeadTask = ({ heading, number, mainImg, bottomText }) => (
    <div>
      <span className="2xl:text-[28px] text-xl font-semibold leading-none tracking-[-3%] text-white inline-flex items-center 2xl:gap-4 gap-3">
        <MainImage
          src={number}
          alt="one"
          loading="lazy"
          className="2xl:h-[45px] 2xl:w-[45px] w-6  h-6 object-contain 2xl:p-3 p-[6px] bg-white rounded-full"
        />
        {heading}
      </span>
      <div className="2xl:ml-14 ml-8 2xl:mt-4 mt-2 grid place-content-center">
        <MainImage
          src={mainImg}
          alt=""
          loading="lazy"
          className=" object-contain 2xl:max-h-[165px] max-h-28 w-auto h-full  "
        />
        <h2 className="2xl:-mt-6 -mt-3 2xl:text-lg text-sm font-nunito leading-[120%] font-semibold text-white ">
          {bottomText}
        </h2>
      </div>
    </div>
  );
  return (
    <div className="heroSection__hight-homePage sm:hight1100:h-[850px]  sm:hight600:h-screen h-full  heroSection__hight-homePage grid place-content-end place-items-center 2xl:pb-16 pb-10 sm:hight600:pt-10 pt-40 mx-auto 2xl:px-[147px] sm:px-[80px] px-8">
      <h1 className="2xl:text-4xl text-3xl font-semibold leading-[134%] tracking-[-1%] text-white text-center">
        Spend less time on your designers and <br /> scale your business faster.
      </h1>
      <div className="grid grid-cols-2 gap-10 w-full place-content-center 2xl:mt-16 mt-10">
        <HeadTask
          number={one}
          heading="Submit a Design Request"
          mainImg={mouseClick}
          bottomText={
            <p>
              Tell us what and how you <br /> need it designed.
            </p>
          }
        />
        <HeadTask
          number={second}
          heading="Give Feedback, Get Revisions"
          mainImg={mouseClick}
          bottomText={
            <p>
              Give feedback and suggest <br /> changes to design.
            </p>
          }
        />
      </div>
      <div className="2xl:mt-10 mt-6">
        <HeadTask
          number={third}
          heading="Approve and Download"
          mainImg={download}
          bottomText={
            <p>
              Approve design and <br /> download source files.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default HeroSection;
