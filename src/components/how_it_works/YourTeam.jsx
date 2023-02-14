import { MainImage } from "gatsby-plugin-image";
import React from "react";
import it_works from "../../images/how_it_works/it's your team.webp"
const YourTeam = () => {
  return (
    <div className="bg-[#E0CCFF] w-screen 2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10">
       <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 place-content-center gap-10">

      <div className="grid place-content-center justify-start">
        <h1 className="sm:text-4xl text-[28px] font-medium leading-[120%] tracking-[-2%] text-[#381471] ">
          It’s Your Team!
        </h1>

        {/* mobile picture */}
        <div className="w-full h-full items-center justify-center flex sm:hidden">
        <MainImage
          src={it_works}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className=" w-full object-contain h-full"
          />
      </div>
      {/*  */}
        <p className="font-nunito sm:text-lg text-base sm:leading-[150%] leading-[150%] text-[#381471] max-w-[490px] sm:mt-5 mt-10">
          Our clients receive a dedicated team of highly skilled designers who
          are fully dedicated to their projects. Our designers bring a wealth of
          experience and expertise to the table, and are committed to delivering
          the highest quality designs that meet the needs of our clients.
        </p>
      </div>
      <div className="w-full h-full sm:flex hidden items-center justify-center">
        <MainImage
          src={it_works}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className="max-h-[510px] w-auto object-contain h-full"
          />
      </div>
          </div>
    </div>
  );
};

export default YourTeam;
