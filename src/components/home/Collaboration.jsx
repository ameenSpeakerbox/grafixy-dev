import { Link } from "gatsby";
import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { trialPlan } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { TickIcon } from "../../ui/Icon";

const Collaboration = () => {
  return (
    <div className="flex  w-full tab:flex-row flex-col">
      <div className="bg-[#210153] xl:pl-[100px] lg:pl-[70px] md:pl-[50px] sm:pl-14 pl-8 flex flex-col items-start justify-center tab:w-[35%] pr-16 shrink-0 tab:py-0 py-11  pb-0 ">
        <h2 className="font-medium  leading-[110%] 2xl:text-5xl sm:text-4xl text-3xl text-white ">
          Easy collab
          <br className="lg:hidden sm:block hidden" />
          oration <br />
          <span className="text-[#D4BFF4]">with your team.</span>{" "}
        </h2>
        <p className="2xl:text-2xl lg:text-xl sm:text-lg 2xl:leading-[35px] leading-6 text-white tracking-[1px] mt-[15px] font-nunito">
          For Individuals, Small Businesses & Freelancers For Individuals, Small
          Businesses & Freelancers
        </p>
      </div>
      <div className="tab:py-14 tab:pb-11 pb-11 py-5  flex flex-col items-center justify-center flex-1 2xl:px-32 lg:px-20 sm:px-14 px-8 tab:bg-white bg-[#210153]">
        <div className="flex justify-center w-full tab:mt-0">
          <h2 className="font-semibold 2xl:text-3xl lg:text-3xl tab:text-2xl text-xl lg:leading-[42px] leading-[100%]  uppercase text-center tab:text-[#9C66F0] text-white">
            Start Your <br />
            <span className="tab:text-[#210153] text-[#9C66F0]">
              7 Day Free Trial
            </span>
          </h2>
        </div>

        <div
          className="flex items-center sm:flex-row flex-col justify-center 2xl:gap-11 xl:gap-8 gap-7 h-full w-full lg:mt-8 sm:mt-[40px] mt-[25px] 
        "
        >
          {trialPlan.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#E0CCFF] rounded-[15px] 2xl:px-[62px] 2xl:py-8 xl:px-[50px]  xl:py-7 px-[36px] py-[30px] items-center duration-500 justify-center max-w-[458px] h-full  relative overflow-hidden  group z-10 collaboration-hover grid"
            >
              <div className="flex items-center justify-center">
                <MainImage
                  alt="toy_car"
                  src={item.picture}
                  loading="lazy"
                  className="object-cover 2xl:w-[195px] lg:w-[150px] sm:w-[110px] w-[136px]"
                />
              </div>
              <h2 className="w-full  flex items-center justify-between 2xl:text-4xl lg:text-3xl sm:text-2xl text-4xl font-bold text-[#210153] lg:flex-nowrap flex-wrap group-hover:lg:text-white">
                <span>{item.title}</span>
                <span className="flex items-center gap-1 font-semibold">
                  <small className="sm:text-2xl text-xl font-extrabold">
                    $
                  </small>
                  {item.price}
                </span>
              </h2>
              <h5 className="mt-3 text-[rgba(32,1,83,0.80)] font-semibold 2xl:text-xl lg:text-lg text-base lg:leading-[24px] leading-[140%] group-hover:lg:text-white font-nunito">
                {item.subtitle}
              </h5>
              <ul className="grid gap-1 2xl:mt-5 lg:mt-3 mt-3">
                {item.point.map((point) => (
                  <li
                    key={point.id}
                    className="inline-flex items-center gap-[10px] text-[#210153] lg:text-base font-nunito font-medium  text-sm group-hover:lg:text-white duration-300 ease-linear"
                  >
                    <TickIcon className="lg:h-[9px] sm:h-[5px] lg:w-[9px] sm:w-[5px] h-[7px] w-[7px] group-hover:lg:fill-white duration-300 ease-linear" />{" "}
                    {point.title}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center flex-col">
                <Button
                  name="Start your free trial!"
                  className="bg-[#210153] rounded-full 2xl:h-16 h-12 text-white font-bold 2xl:text-lg lg:text-sm sm:text-[10px] text-sm lg:mt-8 mt-7 drop-shadow-2xl shrink-0 flex items-center justify-center lg:px-[30px] px-5 leading-3 group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] duration-300 ease-linear"
                />
                <Link
                  to=""
                  className="mt-[10px] font-nunito font-bold text-sm text-[#210153] group-hover:lg:text-white duration-300 ease-linear"
                >
                  More details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="font-semibold text-[#6E3CBC] sm:text-2xl text-xl leading-7 uppercase block text-center w-full mt-8">
          Do you need
          <br className="tab:hidden block" />{" "}
          <span className="tab:text-[#210153]  text-white">a custom plan?</span>{" "}
          <br />
          <Button
            className="text-white font-medium mt-[10px] leading-10 tab:bg-[#210153] bg-[#6019CE] rounded-full py-1 px-6 relative after:absolute after:w-full after:h-full after:bg-[#6E3CBC] after:-left-[100%] after:top-0 after:-z-10 z-10 overflow-hidden hover:after:left-0 after:duration-300 after:ease-in shadow-xl h-12 grid place-content-center text-sm"
            name="TALK TO SALES"
          />
        </p>
      </div>
    </div>
  );
};

export default Collaboration;
