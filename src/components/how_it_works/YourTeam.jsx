import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import it_works from "../../images/how_it_works/it's your team.webp";
const YourTeam = () => {
  return (
    <div className="w-screen bg-[#E0CCFF] px-8 py-10 sm:px-[80px] sm:py-16 2xl:px-[147px] 2xl:py-20">
      <div className="mx-auto grid max-w-[1440px] place-content-center gap-10 sm:grid-cols-2">
        <div className="grid place-content-center justify-start">
          <h1 className="text-[28px] font-medium leading-[120%] tracking-[-2%] text-[#381471] sm:text-4xl ">
            It’s Your Team!
          </h1>

          {/* mobile picture */}
          <div className="flex h-full w-full items-center justify-center sm:hidden">
            <MainImage
              src={it_works}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className=" h-full w-full object-contain"
            />
          </div>
          {/*  */}
          <p className="mt-10 max-w-[490px] font-nunito text-base leading-[150%] text-[#381471] sm:mt-5 sm:text-lg sm:leading-[150%]">
            Our clients receive a dedicated team of highly skilled designers who
            are fully dedicated to their projects. Our designers bring a wealth
            of experience and expertise to the table, and are committed to
            delivering the highest quality designs that meet the needs of our
            clients.
          </p>
        </div>
        <div className="hidden h-full w-full items-center justify-center sm:flex">
          <MainImage
            src={it_works}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className="h-full max-h-[510px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default YourTeam;
