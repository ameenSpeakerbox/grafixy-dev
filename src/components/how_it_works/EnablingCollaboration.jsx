import { MainImage } from 'gatsby-plugin-image';
import React, { useMemo, useState } from 'react';
import trello from '../../images/how_it_works/trello.webp';
import slack from '../../images/how_it_works/slack.webp';

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

  useMemo(() => {
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
    <div className="w-screen bg-white px-8 py-10 sm:px-[80px] sm:py-16 2xl:px-[147px] 2xl:py-20">
      <div className="mx-auto grid max-w-[1440px] place-content-center gap-10 sm:grid-cols-2">
        <div className="grid place-content-center justify-start">
          <h1 className="text-[28px] font-medium leading-[120%] tracking-[-2%] text-[#381471] sm:text-4xl ">
            Enabling Easy <br /> Collaboration
          </h1>
          {/* mobile picture */}
          <div className="mt-7 flex h-full w-full items-center justify-center sm:hidden">
            <MainImage
              src={picData[autoChange]?.pic}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className="h-full min-h-[204px] w-auto object-contain"
            />
          </div>
          {/*  */}
          <p className="mt-10 max-w-[488px] font-nunito text-base leading-[150%] text-[#381471] sm:mt-5 sm:text-lg sm:leading-[150%]">
            With Microsoft Teams or Slack, clients can communicate with our
            designers in realtime, share files, and provide feedback on designs.
            This helps to streamline the design process and ensures that all
            parties are on the same page. The platforms also allow us to keep
            track of all conversations and design iterations in one place,
            making it easy to reference and retrieve information as needed.
          </p>
        </div>
        <div className="hidden h-full w-full items-center justify-center sm:flex">
          <MainImage
            src={picData[autoChange]?.pic}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className="h-full max-h-[425px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EnablingCollaboration;
