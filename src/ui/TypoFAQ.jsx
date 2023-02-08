import React from "react";

const TypoFAQ = ({ question, ans }) => (
  <div className="">
    <div className="grid gap-2">
      <h4 className="font-nunito  sm:text-lg text-xl font-bold text-white 2xl:leading-10 leading-[24px] 2xl:mb-[10px] lg:mb-[9px] sm:mb-[8px] mb-[7px]">
        {question}
      </h4>
      <p className=" text-base font-nunito text-[rgba(255,255,255,0.7)] max-w-[810px]">
        {ans}
      </p>
    </div>
  </div>
);

export default TypoFAQ;
