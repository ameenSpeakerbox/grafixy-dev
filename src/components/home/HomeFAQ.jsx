import { Link } from "gatsby";
import { MainImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { faq_home } from "../../lib/dummyData";
import { TickIn_circleIcon } from "../../ui/Icon";
import QuotationOpener from "../../ui/QuotationOpener";
import faqPic from "../../images/home/homeFaq.png";


const HomeFAQ = () => {
  const [questionToggle, setQuestionToggle] = useState("");

  const handleToggle = (question) => {
    if (questionToggle === question) return setQuestionToggle("");
    else return setQuestionToggle(question);
  };
  return (
    <div className="flex w-full ">
      <div className="bg-[#1A0143] flex flex-col items-start justify-center w-full px-32 place-content-center gap-9 py-52">
        <h2 className="font-semibold text-6xl text-[#6E3CBC]">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="w-full grid gap-10 duration-300">
          {faq_home.map((item) => (
            // <QuotationOpener
            //   key={item.id}
            //   questionToggle={questionToggle}
            //   setQuestionToggle={setQuestionToggle}
            //   answer={item.answer}
            //   question={item.question}
            // />

            <div
              key={item.id}
              onClick={() => handleToggle(item.question)}
              className="px-10 py-6 bg-[#1D004E] rounded-[10px] w-full duration-300 ease-in transition-all z-10"
            >
              <span className=" inline-flex justify-between items-center w-full cursor-pointer">
                <h4 className="font-nunito font-semibold text-2xl text-[#E0CCFF]">
                  {item.question}
                </h4>
                <TickIn_circleIcon
                  className={`${
                    questionToggle === item.question ? "rotate-180" : "rotate-0"
                  }  duration-300 ease-out `}
                />
              </span>
              <p
                className={`${
                  questionToggle === item.question
                    ? "opacity-100 h-auto "
                    : "-translate-y-9 opacity-0 h-0"
                } duration-300 transition-all mt-[10px] text-base font-nunito text-white cursor-default -z-10`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <Link
          to=""
          className="font-semibold text-[35px] text-[#6E3CBC] underline"
        >
          More from <span className="text-[#E0CCFF] underline">FAQs</span>{" "}
        </Link>
      </div>
      <div className="bg-[#6019CE] flex flex-col items-end  justify-end w-[35%] shrink-0  relative">
        <img  src={faqPic} alt="homeFaq" className="h-full  absolute object-cover  object-left-bottom right-0 w-[1355px]" />
      </div>
    </div>
  );
};

export default HomeFAQ;
