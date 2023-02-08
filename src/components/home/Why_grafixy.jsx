import React from "react";
import { GrafixyWhiteIcon, GrafixyQuestionIcon } from "../../ui/Icon";

const WhyGrafixy = () => {
  const TextContainer = ({ className, text }) => (
    <span
      className={`flex items-start justify-start 2xl:text-3xl lg:text-2xl  sm:text-xl text-lg leading-[110%] font-bold text-white  sm:-rotate-6 w-full ${className}`}
    >
      <div className="2xl:mr-3 xl:mr-3 sm:mr-[12px] mr-[12px] mt-2">
        <GrafixyWhiteIcon className="2xl:h-[44px] h-[38px] w-auto shrink-0" />
      </div>
      {text}
    </span>
  );
  return (
    <div className="2xl:px-[147px] 2xl:py-[122px] lg:px-[100px] lg:py-[80px] sm:py-[73px] sm:px-11 px-8 py-8   md:px-[90px] bg-[#6019CE] grid md:grid-cols-3 sm:grid-cols-2 2xl:gap-[86px] lg:gap-16 gap-10 w-full">
      <span className="flex sm:flex-nowrap flex-wrap items-center justify-start 2xl:text-6xl lg:text-5xl text-4xl font-medium text-white leading-[.1] xs:mt-0">
        why&nbsp; <br className="sm:hidden  block"/>
        <GrafixyQuestionIcon className="2xl:h-[90px] lg:h-[80px] sm:h-[50px] h-[60px] shrink-0  w-auto" />
      </span>

      <TextContainer
        text={
          <h3>
            MAKE{" "}
            <span className="text-[#FFE600]">
              UNLIMITED <br />
            </span>{" "}
            DESIGN REQUESTS <br />& REVISIONS
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            NO STRESS OF <br /> <span className="text-[#FFE600]">HIRING </span>A{" "}
            <br /> DESIGNER
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            INCREDIBLY{" "}
            <span className="text-[#FFE600]">
              FAST <br />
            </span>{" "}
            TURNAROUNDS
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            <span className="text-[#FFE600]">
              DEDICATED <br />
            </span>{" "}
            PROJECT MANAGER <br /> & TEAM
          </h3>
        }
      />

      <TextContainer
        text={
          <h3>
            NO{" "}
            <span className="text-[#FFE600]">
              {" "}
              CONTRACTS, <br />
            </span>{" "}
            CANCEL ANYTIME.
          </h3>
        }
      />
    </div>
  );
};

export default WhyGrafixy;
