import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import shortestTurnaroundTime from '../../images/how_it_works/Shortest Turnaround Time.webp';

const ShortestTurnaround = () => {
  return (
    <div className="w-screen bg-[#18003F] px-8 py-10 sm:px-[80px] sm:py-16 2xl:px-[147px] 2xl:py-20">
      <div className="mx-auto grid max-w-[1440px] place-content-center gap-10 sm:grid-cols-2">
        <div className="grid place-content-center justify-start">
          <h1 className="text-[28px] font-medium  leading-[120%] tracking-[-2%] text-white sm:text-4xl ">
            Shortest <br /> Turnaround Time
          </h1>

          {/* mobile picture */}
          <div className="mt-7 flex h-full w-full items-center justify-center sm:hidden">
            <MainImage
              src={shortestTurnaroundTime}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className=" h-full w-full object-contain"
            />
          </div>
          {/*  */}
          <p className="mt-10 max-w-[490px] font-nunito text-lg leading-[150%]  text-[#E0CCFF] sm:mt-5">
            Grafixy also offers a short turnaround time, with most designs
            delivered in 4-12 working hours. This fast turnaround time ensures
            that our clients can quickly and efficiently move forward with their
            projects and achieve their goals. With a dedicated team of designers
            and fast turnaround times, Grafixy is the ideal choice for
            businesses that need exceptional design services.
          </p>
        </div>
        <div className="hidden h-full w-full items-center justify-center sm:flex">
          <MainImage
            src={shortestTurnaroundTime}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className="h-full max-h-[260px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ShortestTurnaround;
