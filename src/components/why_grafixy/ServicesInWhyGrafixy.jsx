import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import texture from '../../images/why_grafixy/bg texture.webp';
import { Button } from '../../ui/Button';
import ai from '../../images/why_grafixy/ai.svg';
import figma from '../../images/why_grafixy/figma.svg';
import ppt from '../../images/why_grafixy/ppt.svg';
import ps from '../../images/why_grafixy/ps.svg';
import slide from '../../images/why_grafixy/slide.svg';
import word from '../../images/why_grafixy/word.svg';
import { WeDesign__whyGrafixy } from '../../lib/dummyData';
import tickIcon from '../../images/elements/tick mark in green.svg';

const ServicesInWhyGrafixy = () => {
  const software = [
    {
      id: 1,
      icon: ai,
      name: 'adobe illustration',
    },
    {
      id: 2,
      icon: figma,
      name: 'figma',
    },
    {
      id: 3,
      icon: ppt,
      name: 'powerpoint',
    },
    {
      id: 4,
      icon: ps,
      name: 'adobe photoshop',
    },
    {
      id: 5,
      icon: word,
      name: 'microsoft word',
    },
    {
      id: 6,
      icon: slide,
      name: 'google slide',
    },
  ];
  return (
    <div className="relative h-full sm:bg-[#28075A]  sm:px-[80px] sm:py-16 2xl:px-[147px] 2xl:py-32 sm:hight700:max-h-screen ">
      <span
        className="absolute top-40 left-0 -z-[1] block h-full w-full bg-gradient-to-l from-[#6019CE] to-[#41118C] object-cover sm:hidden"
        loading="lazy"
      />
      <div className="relative z-0 mx-auto flex  h-full  w-full max-w-5xl flex-col items-start justify-center gap-8 overflow-hidden rounded-[60px] pt-14 pb-14 sm:my-auto sm:max-h-[825px] sm:rounded-[14px] sm:pl-14 sm:pb-0 lg:pl-24">
        <MainImage
          src={texture}
          alt="pattern"
          className="absolute top-0 left-0 -z-10 h-full w-full min-w-[1380px] object-cover"
          loading="lazy"
        />
        <div className="flex w-full items-center justify-center sm:justify-between">
          {/* head part starts */}
          <div className="grid shrink-0 gap-2 sm:place-items-start ">
            <h2 className="text-center text-3xl font-semibold leading-[115%] text-[#210153] sm:text-left">
              150+ Design <br /> Services <br />1 Subscription
            </h2>
            <Button
              name="See complete list"
              link="scope_of_service"
              className="rounded-full bg-[#19013F] px-[14px] py-3 text-xs  leading-[95%] text-white shadow-xl"
            />
          </div>
          <div className="hidden w-max gap-4 overflow-hidden rounded-l-[15px] bg-[#F3ECFF] py-4 px-10 pr-20 sm:grid lg:pr-36">
            <h3 className="text-2xl font-medium text-[#210153]">
              Softwares we use
            </h3>
            <div className="grid w-max grid-cols-3 gap-4">
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
        <div className="grid w-full shrink-0 gap-7 overflow-hidden bg-[#F3ECFF] px-10 pt-5 pb-5 sm:w-max sm:gap-4 sm:rounded-t-[15px] sm:pb-[76px]">
          <h1 className=" text-center text-2xl font-medium leading-[95%] text-[#210153] sm:text-left">
            We Design
          </h1>

          <div className="grid grid-cols-2 gap-y-1 gap-x-[50px] hight1100:gap-y-5">
            {WeDesign__whyGrafixy.map((item) => (
              <span key={item.id} className="flex items-center gap-3">
                <MainImage
                  src={tickIcon}
                  alt="tick icon"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="h-3 w-3 object-contain"
                />
                <p className="font-nunito text-sm font-semibold leading-[120%] text-[#6138A3] ">
                  {item.text}
                </p>
              </span>
            ))}
            <span className="flex cursor-pointer items-center gap-3">
              <MainImage
                src={tickIcon}
                alt="tick icon"
                loading="lazy"
                width={100}
                height={100}
                className="h-3 w-3 object-contain"
              />
              <p className="font-nunito text-sm font-semibold leading-[120%] text-[#19013F] underline ">
                more services
              </p>
            </span>
          </div>
        </div>
        {/* software we use for mobile */}

        <div className="grid h-full w-full place-content-center gap-4 rounded-l-[15px] px-10 py-10 sm:hidden">
          <h3 className="text-2xl font-medium text-[#210153]">
            Softwares we use
          </h3>
          <div className="grid w-full grid-cols-3 gap-4">
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
