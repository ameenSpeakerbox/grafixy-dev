import { Link } from "gatsby";
import React, { useState } from "react";
import { faq_home } from "../../lib/dummyData";
import { TickInCircleIcon } from "../../ui/Icon";
import faqPic from "../../images/home/homeFaq.png";
import faqMobPic from "../../images/home/homeFaqMob.png";
import { MainImage } from "gatsby-plugin-image";

const HomeFAQ = () => {
  const [questionToggle, setQuestionToggle] = useState("");

  const handleToggle = (question) => {
    if (questionToggle === question) return setQuestionToggle("");
    else return setQuestionToggle(question);
  };
  return (
    <div className="flex w-full relative z-10">
      <div className="bg-[#1A0143] flex flex-col items-start justify-center w-full 2xl:px-32 lg:px-24 sm:px-16 px-8 place-content-center sm:gap-9 gap-6 2xl:py-52 lg:py-20 py-16 ">
        <h2 className="font-semibold 2xl:text-6xl lg:text-5xl text-4xl text-[#6E3CBC] z-10">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="w-full grid 2xl:gap-10 lg:gap-6 sm:gap-6 gap-3 duration-300 ">
          {faq_home.map((item, i) => (
            <div
              key={item.id}
               
              onClick={() => handleToggle(item.question)} role="button"
              tabIndex={i}
              className="px-10 2xl:py-6 lg:py-3 py-2 bg-[#1D004E] rounded-[10px] w-full duration-300 ease-in transition-all z-10"
            >
              <span className=" inline-flex justify-between items-center w-full cursor-pointer">
                <h4 className="font-nunito font-semibold 2xl:text-2xl lg:text-xl text-sm text-[#E0CCFF]">
                  {item.question}
                </h4>
                <TickInCircleIcon
                  className={`${
                    questionToggle === item.question ? "rotate-180" : "rotate-0"
                  }  duration-300 ease-out lg:w-9 w-5`}
                />
              </span>
              <p
                className={`${
                  questionToggle === item.question
                    ? "opacity-100 h-22 mt-[10px]"
                    : "-translate-y-9 opacity-0 h-0"
                } duration-500 transition-all  lg:text-base text-xs font-nunito text-white cursor-default -z-10 w-[90%]`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <Link
          to=""
          className="font-semibold 2xl:text-[35px] lg:text-[32px] text-base text-[#6E3CBC] underline"
        >
          More from <span className="text-[#E0CCFF] underline">FAQs</span>{" "}
        </Link>
      </div>
      <div className="bg-[#6019CE] sm:flex hidden flex-col items-end  justify-end w-[35%] shrink-0  relative overflow-hidden">
        <img
          src={faqPic}
          alt="homeFaq"
          className="h-max  absolute object-cover top-0  object-left-bottom lg:left-0 -left-10 2xl:min-w-[1055px] lg:min-w-[600px] min-w-[600px]"
        />
      </div>
      <MainImage
        src={faqMobPic}
        alt="homeFaq"
        loading="eager"
        width={164}
        height={467}
        className="flex sm:hidden flex-col items-end  justify-end   absolute z-[0] top-0 right-0 w-full h-full  object-contain object-right -mt-20"
      />
    </div>
  );
};

export default HomeFAQ;
