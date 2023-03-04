import React from 'react';
import { MainImage } from 'gatsby-plugin-image';
import one from '../../images/how_it_works/1.svg';
import second from '../../images/how_it_works/2.svg';
import third from '../../images/how_it_works/3.svg';
import download from '../../images/how_it_works/download.svg';
import mouseClick from '../../images/how_it_works/mouse click.svg';
const HeroSection = () => {
  const HeadTask = ({ heading, number, mainImg, bottomText }) => (
    <div>
      <span className="inline-flex items-center gap-3 text-xl font-semibold leading-none tracking-[-3%] text-white 2xl:gap-4 2xl:text-[28px]">
        <MainImage
          src={number}
          alt="one"
          loading="lazy"
          className="h-6 w-6 rounded-full  bg-white object-contain p-[6px] 2xl:h-[45px] 2xl:w-[45px] 2xl:p-3"
        />
        {heading}
      </span>
      <div className="ml-8 mt-2 grid place-content-center 2xl:ml-14 2xl:mt-4">
        <MainImage
          src={mainImg}
          alt=""
          loading="lazy"
          className=" h-full max-h-28 w-auto object-contain 2xl:max-h-[165px]  "
        />
        <h2 className="-mt-3 font-nunito text-base font-semibold leading-[120%] text-[#E0CCFF] sm:text-sm sm:text-white 2xl:-mt-6 2xl:text-lg ">
          {bottomText}
        </h2>
      </div>
    </div>
  );
  return (
    <div className="heroSection__hight-homePage  heroSection__hight-homePage mx-auto  grid h-full place-content-end place-items-center px-8 pb-10 pt-7 sm:px-[80px] sm:pt-80 2xl:px-[147px] 2xl:pb-16 sm:hight600:h-full sm:hight600:pt-40">
      <h1 className="text-center text-[28px] font-semibold leading-[134%] tracking-[-1%] text-white sm:text-3xl 2xl:text-4xl">
        Spend less time on your designers and <br /> scale your business faster.
      </h1>
      <div className="mt-10 grid w-full gap-8 sm:grid-cols-2 sm:place-content-center sm:gap-10 2xl:mt-16">
        <HeadTask
          number={one}
          heading="Submit a Design Request"
          mainImg={mouseClick}
          bottomText={
            <p className="font-nunito">
              Tell us what and how you <br /> need it designed.
            </p>
          }
        />
        <HeadTask
          number={second}
          heading="Give Feedback, Get Revisions"
          mainImg={mouseClick}
          bottomText={
            <p className="font-nunito">
              Give feedback and suggest <br /> changes to design.
            </p>
          }
        />
      </div>
      <div className="mt-8 grid w-full sm:mt-6 2xl:mt-10 ">
        <HeadTask
          number={third}
          heading="Approve and Download"
          mainImg={download}
          bottomText={
            <p className="font-nunito">
              Approve design and <br /> download source files.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default HeroSection;
