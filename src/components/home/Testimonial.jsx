import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from "../../lib/dummyData";
import apostropheIcon from "../../images/elements/apostrophe Icon.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className="grid sm:grid-cols-2 w-full ">
      <div className="w-full bg-white 2xl:pl-24 2xl:py-44 2xl:pr-20 lg:pl-20 lg:py-40 lg:pr-16 sm:pl-12 sm:py-36 sm:pr-5  pl-8 py-6 pr-4">
        <h1 className="text-[#1D0149] font-medium 2xl:text-5xl lg:text-4xl text-3xl leading-none">
          Trusted by the worlds <br />
          <span className="text-[#6019CE]">largest </span>&{" "}
          <span className="text-[#6019CE]">
            fastest growing <br />
          </span>{" "}
          companies
        </h1>
        <p className="2xl:text-2xl lg:text-xl text-base font-semibold font-nunito leading-[130%] text-[#1E014C] mt-6 lg:max-w-[469px] hidden sm:block ">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly.
        </p>
      </div>
      <div className="bg-[#1A0143] grid items-center justify-center overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          className="w-full"
          pagination
        >
          {testimonial.map((item) => (
            <SwiperSlide virtualIndex={item.id} key={item.id}>
              <div className="flex flex-col 2xl:py-16 2xl:px-24 lg:px-20 lg:py-14 sm:px-12 px-8 py-10">
                <MainImage
                  alt="icon"
                  src={apostropheIcon}
                  className="object-contain  2xl:w-24 lg:w-20 w-16 2xl:h-24 lg:h-20 h-16"
                  loading="lazy"
                  width={100}
                  height={100}
                />

                {item.text}
                <span className="flex mt-10 gap-[27px]">
                  <div>
                    <MainImage
                      alt={item.userName}
                      src={item.image}
                      className="object-contain w-full h-full"
                      loading="lazy"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="2xl:text-2xl lg:text-xl sm:text-base text-sm  text-white leading-[100%] font-nunito font-semibold ">
                      {item.userName}
                    </h4>
                    <i className="text-[#884CE6] lg:text-lg text-sm leading-[1px] font-nunito mt-[1px] font-light">
                      {item.position}
                    </i>
                    <p className="2xl:text-xl lg:text-lg sm:text-base text-xs font-semibold font-nunito text-[#E0CCFF]">
                      {item.company}
                    </p>
                  </div>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
