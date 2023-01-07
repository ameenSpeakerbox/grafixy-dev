import React from "react";
import {
  GrafixyWhiteIcon,
  Grafixy_questionIcon,
  QuestionIcon,
} from "../../ui/Icon";

const Why_grafixy = () => {
  return (
    <div className="px-[147px] py-[122px] bg-[#6019CE] grid grid-cols-3 gap-[86px]">
      <span className="flex items-center justify-center text-6xl font-medium text-white ">
        why&nbsp;
        <Grafixy_questionIcon />
      </span>

      <span className="flex items-start justify-center text-[34px] leading-[110%] font-bold text-white  -rotate-6">
        <div className="mr-2">
          <GrafixyWhiteIcon />
        </div>
        <h3>
          MAKE <span className="text-[#FFE600]">UNLIMITED <br /></span> DESIGN REQUESTS <br />
          & REVISIONS
        </h3>
      </span>
      <span className="flex items-start justify-center text-[34px] leading-[110%] font-bold text-white  -rotate-6">
        <div className="mr-2">
          <GrafixyWhiteIcon />
        </div>
        <h3>
          NO STRESS OF <br /> <span className="text-[#FFE600]">HIRING </span>A <br /> DESIGNER
        </h3>
      </span>
      <span className="flex items-start justify-center text-[34px] leading-[110%] font-bold text-white  -rotate-6">
        <div className="mr-2">
          <GrafixyWhiteIcon />
        </div>
        <h3>
          INCREDIBLY <span className="text-[#FFE600]">FAST <br /></span> TURNAROUNDS
        </h3>
      </span>
      <span className="flex items-start justify-center text-[34px] leading-[110%] font-bold text-white  -rotate-6">
        <div className="mr-2">
          <GrafixyWhiteIcon />
        </div>
        <h3>
          <span className="text-[#FFE600]">DEDICATED <br /></span> PROJECT MANAGER <br /> &
          TEAM
        </h3>
      </span>
      <span className="flex items-start justify-center text-[34px] leading-[110%] font-bold text-white  -rotate-6">
        <div className="mr-2">
          <GrafixyWhiteIcon />
        </div>
        <h3>
          NO <span className="text-[#FFE600]"> CONTRACTS, <br /></span> CANCEL ANYTIME.
        </h3>
      </span>
    </div>
  );
};

export default Why_grafixy;
