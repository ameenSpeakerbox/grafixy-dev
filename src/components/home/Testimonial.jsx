import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from "../../lib/dummyData";
import apostropheIcon from "../../images/elements/apostrophe Icon.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper";

const Testimonial = () => {
  return (
    <div className="grid sm:grid-cols-2 w-full ">
      <div className="w-full bg-white 2xl:pl-24  lg:pl-20 lg:py-28 sm:pl-12 sm:py-20   pl-8 py-8 pr-4">
        <h1 className="text-[#1D0149] font-medium 2xl:text-5xl lg:text-4xl text-3xl leading-none max-w-[420px]">
          A <span className="text-[#6019CE]">trusted choice</span> for <br /> expanding
          teams worldwide
        </h1>
        <p className="2xl:text-2xl lg:text-xl text-base font-semibold font-nunito leading-[130%] text-[#1E014C] mt-6 lg:max-w-[469px] hidden sm:block max-w-[340px] ">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly.
        </p>
      </div>
      <div className="bg-[#1A0143] grid items-center justify-center overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          className="w-full"
        >
          {testimonial.map((item) => (
            <SwiperSlide virtualIndex={item.id} key={item.id}>
              <div className="flex flex-col 2xl:py-16 2xl:px-24 lg:px-20 lg:py-14 sm:px-12 px-8 py-10">
                <MainImage
                  alt="icon"
                  src={apostropheIcon}
                  className="object-contain h-12 w-min"
                  loading="lazy"
                  width={100}
                  height={100}
                />

                {item.text}
                <span className="flex mt-10 gap-[27px] items-center justify-start">
                  <div>
                    <MainImage
                      alt={item.userName}
                      src={item.image}
                      className="object-contain w-full sm:h-10 h-14"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h4 className="sm:text-lg text-base  text-white leading-[100%] font-nunito font-semibold ">
                      {item.userName}
                    </h4>
                    <p className="sm:text-lg text-base font-light font-nunito text-[#884CE6] sm:leading-[110%] leading-[110%]">
                      {item.position}, {item.company}
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
