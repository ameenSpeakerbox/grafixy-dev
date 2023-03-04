import React from 'react';

const TypoFAQ = ({ question, ans }) => (
  <div className="">
    <div className="grid gap-2">
      <h4 className="mb-[7px]  font-nunito text-xl font-bold leading-[24px] text-white sm:mb-[8px] sm:text-lg lg:mb-[9px] 2xl:mb-[10px] 2xl:leading-10">
        {question}
      </h4>
      <p className=" max-w-[810px] font-nunito text-base text-[rgba(255,255,255,0.7)]">
        {ans}
      </p>
    </div>
  </div>
);

export default TypoFAQ;
