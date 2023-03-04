import { Link } from 'gatsby';
import React, { useState } from 'react';
import { faq_home } from '../../lib/dummyData';
import { TickInCircleIcon } from '../../ui/Icon';
import faqPic from '../../images/home/homeFaq-min.webp';
import { MainImage } from 'gatsby-plugin-image';

const HomeFAQ = () => {
  const [questionToggle, setQuestionToggle] = useState('');

  const handleToggle = (question) => {
    if (questionToggle === question) return setQuestionToggle('');
    else return setQuestionToggle(question);
  };
  return (
    <div className="relative z-10 flex w-full">
      <div className="flex w-full flex-col place-content-center items-start justify-center gap-6 bg-[#1A0143] px-8 py-8 sm:gap-9 sm:px-16 sm:py-16 lg:px-24 lg:py-20 2xl:px-32 2xl:py-24 ">
        <h2 className="z-10 text-3xl font-semibold text-[#6E3CBC] lg:text-4xl 2xl:text-5xl">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="grid w-full gap-3 duration-300 sm:gap-6 lg:gap-6 2xl:gap-10 ">
          {faq_home.map((item, i) => (
            <div
              key={item.id}
              onClick={() => handleToggle(item.question)}
              role="button"
              tabIndex={0}
              className="z-10 w-full rounded-[10px] bg-[#1D004E] px-4 py-2 transition-all duration-300 ease-in sm:px-10 lg:py-3 2xl:py-6"
            >
              <span className="inline-flex w-full cursor-pointer items-center justify-between">
                <p className="font-nunito text-sm font-semibold text-[#E0CCFF] lg:text-xl 2xl:text-2xl">
                  {item.question}
                </p>
                <TickInCircleIcon
                  className={`${
                    questionToggle === item.question ? 'rotate-180' : 'rotate-0'
                  }  w-5 duration-300 ease-out lg:w-9`}
                />
              </span>
              <p
                className={`${
                  questionToggle === item.question
                    ? 'h-22 mt-[10px] opacity-100'
                    : 'h-0 -translate-y-9 opacity-0'
                } duration-400 -z-10  w-[90%] cursor-default font-nunito text-xs text-white transition-all lg:text-base`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="faq"
          className="z-20 text-lg font-semibold text-[#E0CCFF] underline sm:text-[#6E3CBC] lg:text-2xl"
        >
          More from <span className="underline sm:text-[#E0CCFF]">FAQs</span>
        </Link>
      </div>
      <div className="relative hidden h-full w-[35%] shrink-0 flex-col items-end justify-end bg-[#6019CE]  sm:flex">
        <MainImage
          src={faqPic}
          alt="homeFaq"
          loading="lazy"
          className="absolute bottom-0 h-max max-h-[600px]  w-max object-contain  object-right-bottom lg:right-0"
        />
      </div>
    </div>
  );
};

export default HomeFAQ;
