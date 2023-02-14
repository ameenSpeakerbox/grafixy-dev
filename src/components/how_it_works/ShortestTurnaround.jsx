import { MainImage } from "gatsby-plugin-image";
import React from "react";
import shortestTurnaroundTime from "../../images/how_it_works/Shortest Turnaround Time.webp";

const ShortestTurnaround = () => {
  return (
    <div className="bg-[#18003F] w-screen 2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10">
       <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 place-content-center gap-10">

      <div className="grid place-content-center justify-start">
        <h1 className="sm:text-4xl text-[28px]  font-medium leading-[120%] tracking-[-2%] text-white ">
          Shortest <br /> Turnaround Time
        </h1>

        {/* mobile picture */}
        <div className="w-full h-full items-center justify-center flex sm:hidden mt-7">
          <MainImage
            src={shortestTurnaroundTime}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className=" w-full object-contain h-full"
            />
        </div>
        {/*  */}
        <p className="font-nunito text-lg leading-[150%] text-[#E0CCFF] max-w-[490px]  sm:mt-5 mt-10">
          Grafixy also offers a short turnaround time, with most designs
          delivered in 4-12 working hours. This fast turnaround time ensures
          that our clients can quickly and efficiently move forward with their
          projects and achieve their goals. With a dedicated team of designers
          and fast turnaround times, Grafixy is the ideal choice for businesses
          that need exceptional design services.
        </p>
      </div>
      <div className="w-full h-full sm:flex hidden items-center justify-center">
        <MainImage
          src={shortestTurnaroundTime}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className="max-h-[260px] w-auto object-contain h-full"
          />
      </div>
          </div>
    </div>
  );
};

export default ShortestTurnaround;
