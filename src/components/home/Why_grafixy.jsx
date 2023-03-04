import React from 'react';
import { GrafixyWhiteIcon, GrafixyQuestionIcon } from '../../ui/Icon';

const WhyGrafixy = () => {
  const TextContainer = ({ className, text }) => (
    <span
      className={`flex w-full items-start justify-start text-lg  font-bold leading-[110%] text-white sm:-rotate-6 sm:text-xl  lg:text-2xl 2xl:text-3xl ${className}`}
    >
      <div className="mr-[12px] mt-2 sm:mr-[12px] xl:mr-3 2xl:mr-3">
        <GrafixyWhiteIcon className="h-[38px] w-auto shrink-0 2xl:h-[44px]" />
      </div>
      {text}
    </span>
  );
  return (
    <div className="grid w-full gap-10 bg-[#6019CE] px-8 py-8 sm:grid-cols-2 sm:py-[73px]   sm:px-11 md:grid-cols-3 md:px-[90px] lg:gap-16 lg:px-[100px] lg:py-[80px] 2xl:gap-[86px] 2xl:px-[147px] 2xl:py-[122px]">
      <span className="flex flex-wrap items-center justify-start text-4xl font-medium leading-[.1] text-white sm:flex-nowrap lg:text-5xl 2xl:text-6xl xs:mt-0">
        why&nbsp; <br className="block  sm:hidden" />
        <GrafixyQuestionIcon className="h-[60px] w-auto shrink-0 sm:h-[50px] lg:h-[80px]  2xl:h-[90px]" />
      </span>

      <TextContainer
        text={
          <h3>
            MAKE{' '}
            <span className="text-[#FFE600]">
              UNLIMITED <br />
            </span>{' '}
            DESIGN REQUESTS <br />& REVISIONS
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            NO STRESS OF <br /> <span className="text-[#FFE600]">HIRING </span>A{' '}
            <br /> DESIGNER
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            INCREDIBLY{' '}
            <span className="text-[#FFE600]">
              FAST <br />
            </span>{' '}
            TURNAROUNDS
          </h3>
        }
      />
      <TextContainer
        text={
          <h3>
            <span className="text-[#FFE600]">
              DEDICATED <br />
            </span>{' '}
            PROJECT MANAGER <br /> & TEAM
          </h3>
        }
      />

      <TextContainer
        text={
          <h3>
            NO{' '}
            <span className="text-[#FFE600]">
              {' '}
              CONTRACTS, <br />
            </span>{' '}
            CANCEL ANYTIME.
          </h3>
        }
      />
    </div>
  );
};

export default WhyGrafixy;
