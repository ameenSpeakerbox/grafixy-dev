import { MainImage } from "gatsby-plugin-image";
import React from "react";
import texture from "../../images/why_grafixy/bg texture.webp";
import { Button } from "../../ui/Button";
import ai from "../../images/why_grafixy/ai.svg";
import figma from "../../images/why_grafixy/figma.svg";
import ppt from "../../images/why_grafixy/ppt.svg";
import ps from "../../images/why_grafixy/ps.svg";
import slide from "../../images/why_grafixy/slide.svg";
import word from "../../images/why_grafixy/word.svg";
import { WeDesign__whyGrafixy } from "../../lib/dummyData";
import tickIcon from "../../images/elements/tick mark in green.svg";

const ServicesInWhyGrafixy = () => {
  const software = [
    {
      id: 1,
      icon: ai,
      name: "adobe illustration",
    },
    {
      id: 2,
      icon: figma,
      name: "figma",
    },
    {
      id: 3,
      icon: ppt,
      name: "powerpoint",
    },
    {
      id: 4,
      icon: ps,
      name: "adobe photoshop",
    },
    {
      id: 5,
      icon: word,
      name: "microsoft word",
    },
    {
      id: 6,
      icon: slide,
      name: "google slide",
    },
  ];
  return (
    <div className="2xl:px-[147px] sm:px-[80px] sm:bg-[#28075A]  2xl:py-32 sm:py-16 sm:hight700:max-h-screen h-full relative ">
     <span
          className="-z-[1] object-cover w-full h-full absolute top-40 left-0 sm:hidden block bg-gradient-to-l from-[#6019CE] to-[#41118C]"
          loading="lazy"
        />
      <div className="w-full h-full flex items-start  relative  justify-center z-0 sm:rounded-[14px] rounded-[60px] overflow-hidden sm:max-h-[825px] lg:pl-24 sm:pl-14 pt-14 flex-col gap-8 max-w-5xl mx-auto sm:my-auto sm:pb-0 pb-14">
        <MainImage
          src={texture}
          alt="pattern"
          className="-z-10 object-cover w-full h-full absolute top-0 left-0 min-w-[1380px]"
          loading="lazy"
        />
        <div className="flex w-full items-center sm:justify-between justify-center">
          {/* head part starts */}
          <div className="grid sm:place-items-start gap-2 shrink-0 ">
            <h2 className="text-3xl font-semibold text-[#210153] leading-[115%] sm:text-left text-center">
              150+ Design <br /> Services <br />1 Subscription
            </h2>
            <Button
              name="See complete list"
              link="scope_of_service"
              className="bg-[#19013F] px-[14px] py-3 rounded-full text-white  text-xs leading-[95%] shadow-xl"
            />
          </div>
          <div className="sm:grid hidden bg-[#F3ECFF] py-4 px-10 rounded-l-[15px] overflow-hidden w-max lg:pr-36 pr-20 gap-4">
            <h3 className="text-2xl font-medium text-[#210153]">
              Softwares we use
            </h3>
            <div className="grid grid-cols-3 gap-4 w-max">
              {software.map((item) => (
                <span key={item.id}>
                  <MainImage
                    src={item.icon}
                    alt={item.name}
                    title={item.name}
                    loading="lazy"
                    className="h-8 w-auto object-contain "
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* head part ends  */}

        {/* bottom part start */}
        <div className="grid sm:rounded-t-[15px] bg-[#F3ECFF] overflow-hidden sm:w-max w-full px-10 pt-5 sm:pb-[76px] pb-5 shrink-0 sm:gap-4 gap-7">
          <h1 className=" text-2xl text-[#210153] leading-[95%] font-medium sm:text-left text-center">
            We Design
          </h1>

          <div className="grid grid-cols-2 hight1100:gap-y-5 gap-y-1 gap-x-[50px]">
            {WeDesign__whyGrafixy.map((item) => (
              <span key={item.id} className="flex items-center gap-3">
                <MainImage
                  src={tickIcon}
                  alt="tick icon"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="object-contain w-3 h-3"
                />
                <p className="text-sm text-[#6138A3] font-nunito font-semibold leading-[120%] ">
                  {item.text}
                </p>
              </span>
            ))}
            <span className="flex items-center gap-3 cursor-pointer">
              <MainImage
                src={tickIcon}
                alt="tick icon"
                loading="lazy"
                width={100}
                height={100}
                className="object-contain w-3 h-3"
              />
              <p className="text-sm text-[#19013F] font-nunito font-semibold leading-[120%] underline ">
                more services
              </p>
            </span>
          </div>

        </div>
          {/* software we use for mobile */}

          <div className="grid sm:hidden px-10 rounded-l-[15px] h-full w-full py-10 gap-4 place-content-center">
            <h3 className="text-2xl font-medium text-[#210153]">
              Softwares we use
            </h3>
            <div className="grid grid-cols-3 gap-4 w-full">
              {software.map((item) => (
                <span key={item.id}>
                  <MainImage
                    src={item.icon}
                    alt={item.name}
                    title={item.name}
                    loading="lazy"
                    className="h-11 w-auto object-contain "
                  />
                </span>
              ))}
            </div>
          </div>
        {/* bottom parts ends */}
      </div>

      {/*  */}
    </div>
  );
};

export default ServicesInWhyGrafixy;