import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { Button } from '../ui/Button';
import image_of_demo from '../images/our_works/getADemo.png';

const GetDemo = () => {
  return (
    <div className=" flex h-auto w-full   px-0 sm:mb-20 sm:px-[80px] 2xl:px-[147px]">
      <div className="Z-40 relative w-full overflow-hidden bg-gradient-to-l from-[#6019CE]  to-[#41118C] py-[70px] px-[30px] sm:overflow-visible sm:rounded-[50px] sm:px-[50px] lg:px-[80px] 2xl:px-[122px]">
        <h1 className="relative z-30 text-3xl  font-medium leading-[100%] text-white sm:text-4xl ">
          <span className="text-[#E0CCFF] opacity-[.65]">
            {' '}
            Ready to try <br className="hidden sm:block lg:hidden " />
          </span>{' '}
          Grafixy?
        </h1>
        <p className="relative z-20  mt-[21px] font-nunito text-lg font-semibold text-[#E0CCFF] sm:mt-[30px] sm:max-w-[60%] sm:text-xl lg:max-w-[50%]">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly. Grafixy makes it incredibly.
        </p>
        <div className="relative z-50 mt-[30px] flex gap-[22px] sm:gap-[26px] ">
          <Button
            className="relative z-10 flex h-[50px] shrink-0 items-center justify-center overflow-hidden rounded-[33px] bg-[#6019CE] px-[11px] text-sm font-bold text-white shadow-xl drop-shadow-lg after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#19013F] after:duration-300 after:ease-in hover:after:left-0 sm:h-[67px] sm:w-[180px] sm:py-[32px] sm:text-lg"
            name="GET A DEMO"
            link="https://calendly.com/grafixy-demo/grafixy-demo-session"
            target="_blank"
          />
          <Button
            className="relative z-10 flex h-[50px] shrink-0 items-center justify-center overflow-hidden rounded-[33px] bg-[#19013F] px-[11px] text-sm text-white shadow-xl drop-shadow-lg after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#6019CE] after:duration-300 after:ease-in hover:after:left-0 sm:h-[67px] sm:w-[180px] sm:py-[32px] sm:text-lg"
            name="SEE PRICING"
          />
        </div>
        <MainImage
          src={image_of_demo}
          alt="image of demo"
          className="absolute bottom-0 -right-[20%] hidden h-full object-contain object-right-bottom sm:right-0 sm:block lg:right-16 lg:h-auto"
        />
      </div>
    </div>
  );
};

export default GetDemo;
