import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import manThinking from '../../images/home/manThinking.webp';
import manThinkingMob from '../../images/home/manThinkingMob.webp';

const FreeTrail = () => {
  return (
    <div className="relative z-[10] flex h-full flex-col overflow-hidden sm:flex-row sm:overflow-visible">
      <div className="relative hidden w-[35%] shrink-0 flex-col items-end  justify-end bg-white pl-[100px] sm:flex">
        <img
          src={manThinking}
          className={`absolute right-0 bottom-0 z-30 -mr-4  h-[110%] min-w-max object-contain object-bottom lg:-mr-14`}
          alt="manThinking"
          loading="lazy"
        />
      </div>
      <div className="z-20 flex  w-full flex-col px-8 py-10 sm:bg-[#6019CE] sm:px-16 sm:pl-[40px] lg:py-24 lg:px-20 2xl:pl-[150px]">
        <h1 className="text-3xl font-semibold leading-10 text-white lg:text-4xl">
          What if <br className="block sm:hidden" />{' '}
          <span className="text-[#FF5E3A]">I don’t like it?</span>
        </h1>
        <h2 className="mt-3 font-nunito text-2xl font-semibold tracking-[-2%] text-[#FFE600] sm:mt-[14px] ">
          7 Day Free Trial
        </h2>
        <p className="mt-2 max-w-[646px] font-nunito text-base text-white sm:text-sm lg:text-base 2xl:text-lg">
          At Grafixy, we understand that finding the right fit for your business
          is important. That's why we offer a 7-day trial period, during which
          you can cancel with no obligation. Our services are billed on a
          month-to-month basis and there are no contracts to sign, ensuring that
          you can enjoy the flexibility you need for your business.
        </p>
      </div>
      <div
        className="absolute
      right-0 block h-full bg-[#6019CE] after:absolute after:top-0 after:-left-[200%] after:-z-10 after:h-full after:w-[1000vh] after:bg-[#6019CE] sm:hidden"
      >
        <MainImage
          src={manThinkingMob}
          alt="manThinking"
          loading="lazy"
          width={100}
          height={100}
          className="h-full w-full object-contain object-right"
        />
      </div>
    </div>
  );
};

export default FreeTrail;
