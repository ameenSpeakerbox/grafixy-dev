import { MainImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import trello from "../../images/how_it_works/trello.webp";
import slack from "../../images/how_it_works/slack.webp";

const EnablingCollaboration = () => {
  const [autoChange, setAutoChange] = useState(0);

  const picData = [
    {
      id: 1,
      pic: slack,
    },
    {
      id: 2,
      pic: trello,
    },
  ];

  useEffect(() => {
    if (autoChange === 0 && autoChange !== picData.length) {
      setTimeout(() => {
        setAutoChange(autoChange + 1);
      }, 2500);
    } else
      setTimeout(() => {
        setAutoChange(0);
      }, 2500);
  }, [autoChange, picData]);

  return (
    <div className="bg-white w-screen 2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10">
      <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 place-content-center gap-10">

      <div className="grid place-content-center justify-start">
        <h1 className="sm:text-4xl text-[28px] font-medium leading-[120%] tracking-[-2%] text-[#381471] ">
          Enabling Easy <br /> Collaboration
        </h1>
        {/* mobile picture */}
        <div className="w-full h-full sm:hidden flex items-center justify-center mt-7">
          <MainImage
            src={picData[autoChange]?.pic}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className="min-h-[204px] w-auto object-contain h-full"
          />
        </div>
        {/*  */}
        <p className="font-nunito sm:text-lg text-base sm:leading-[150%] leading-[150%] text-[#381471] max-w-[488px] sm:mt-5 mt-10">
          With Microsoft Teams or Slack, clients can communicate with our
          designers in realtime, share files, and provide feedback on designs.
          This helps to streamline the design process and ensures that all
          parties are on the same page. The platforms also allow us to keep
          track of all conversations and design iterations in one place, making
          it easy to reference and retrieve information as needed.
        </p>
      </div>
      <div className="w-full h-full sm:flex hidden items-center justify-center">
        <MainImage
          src={picData[autoChange]?.pic}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className="max-h-[425px] w-auto object-contain h-full"
          />
      </div>
          </div>
    </div>
  );
};

export default EnablingCollaboration;
