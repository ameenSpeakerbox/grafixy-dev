import React from "react";
import { TickIn_circleIcon } from "./Icon";

const QuotationOpener = ({
  questionToggle,
  setQuestionToggle,
  question,
  answer,
}) => {
  const handleToggle = (props) => {
    if (questionToggle === props) return setQuestionToggle("");
    else setQuestionToggle(props);
  };

  return (
    <div
      onClick={() => handleToggle(question)}
      className="px-10 py-6 bg-[#1D004E] rounded-[10px] w-full duration-300 ease-in transition-all "
    >
      <span className=" inline-flex justify-between items-center w-full cursor-pointer">
        <h4 className="font-nunito font-semibold text-2xl text-[#E0CCFF]">
          {question}
        </h4>
        <TickIn_circleIcon
          className={`${
            questionToggle === question ? "rotate-180" : "rotate-0"
          }  duration-300 ease-out `}
        />
      </span>
      <p
        className={`${
          questionToggle === question
            ? "opacity-100 h-auto "
            : "-translate-y-9 opacity-0 h-0"
        } duration-300 transition-all mt-[10px] text-base font-nunito text-white cursor-default`}
      >
        {answer}
      </p>
    </div>
  );
};

export default QuotationOpener;
