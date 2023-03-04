import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonial } from '../../lib/dummyData';
import apostropheIcon from '../../images/elements/apostrophe Icon.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper';

const Testimonial = () => {
  return (
    <div className="grid w-full sm:grid-cols-2 ">
      <div className="w-full bg-white py-8  pl-8 pr-4 sm:py-20 sm:pl-12   lg:py-28 lg:pl-20 2xl:pl-24">
        <h1 className="max-w-[420px] text-3xl font-medium leading-none text-[#1D0149] lg:text-4xl 2xl:text-5xl">
          A <span className="text-[#6019CE]">trusted choice</span> for <br />{' '}
          expanding teams worldwide
        </h1>
        <p className=" mt-6 hidden max-w-[340px] font-nunito text-base font-semibold leading-[130%] text-[#1E014C] sm:block lg:max-w-[469px] lg:text-lg ">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly.
        </p>
      </div>
      <div className="grid items-center justify-center overflow-hidden bg-[#1A0143]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          className="w-full"
        >
          {testimonial.map((item) => (
            <SwiperSlide virtualIndex={item.id} key={item.id}>
              <div className="flex flex-col px-8 py-10 sm:px-12 lg:px-20 lg:py-14 2xl:py-16 2xl:px-24">
                <MainImage
                  alt="icon"
                  src={apostropheIcon}
                  className="h-12 w-min object-contain"
                  loading="lazy"
                  width={100}
                  height={100}
                />

                {item.text}
                <span className="mt-10 flex items-center justify-start gap-[27px]">
                  <div>
                    <MainImage
                      alt={item.userName}
                      src={item.image}
                      className="h-14 w-full object-contain sm:h-10"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-nunito text-base  font-semibold leading-[100%] text-white sm:text-lg ">
                      {item.userName}
                    </p>
                    <p className="font-nunito text-base font-light leading-[110%] text-[#884CE6] sm:text-lg sm:leading-[110%]">
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
