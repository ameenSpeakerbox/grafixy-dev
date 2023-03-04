import React from 'react';
import { TickInCircleIcon } from './Icon';

const QuotationOpener = ({
  questionToggle,
  setQuestionToggle,
  question,
  answer,
}) => {
  const handleToggle = () => {
    if (questionToggle === question) return setQuestionToggle('');
    else return setQuestionToggle(question);
  };

  return (
    <div
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      className="z-10 w-full rounded-[10px] bg-[#1D004E] px-10 py-6 transition-all duration-300 ease-in"
    >
      <span className=" inline-flex w-full cursor-pointer items-center justify-between">
        <h4 className="font-nunito text-2xl font-semibold text-[#E0CCFF]">
          {question}
        </h4>
        <TickInCircleIcon
          className={`${
            questionToggle === question ? 'rotate-180' : 'rotate-0'
          }  duration-300 ease-out `}
        />
      </span>
      <p
        className={`${
          questionToggle === question
            ? 'h-auto opacity-100 '
            : 'h-0 -translate-y-9 opacity-0'
        } -z-10 mt-[10px] cursor-default font-nunito text-base text-white transition-all duration-300`}
      >
        {answer}
      </p>
    </div>
  );
};

export default QuotationOpener;
