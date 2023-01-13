import React from "react";

const TypoFAQ = ({ question, ans }) => (
  <div className="">
    <div className="grid gap-2">
      <h4 className="font-nunito 2xl:text-[30px] lg:text-[28px] sm:text-2xl text-xl font-bold text-white 2xl:leading-10 leading-[24px] 2xl:mb-[10px] lg:mb-[9px] sm:mb-[8px] mb-[7px]">
        {question}
      </h4>
      <p className="2xl:text-2xl lg:text-xl sm:text-lg text-base font-semibold font-nunito text-[rgba(255,255,255,0.7)] lg:w-[60%]">
        {ans}
      </p>
    </div>
  </div>
);

export default TypoFAQ;
