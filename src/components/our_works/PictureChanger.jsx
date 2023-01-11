import { MainImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import { ArrowLeftIcon, CloseIcon } from "../../ui/Icon";
import { Swiper, SwiperSlide } from "swiper/react";

const PictureChanger = ({ isGalleryOpen, setIsGalleryOpen, data }) => {
  const swiperRef = useRef();

  return (
    <div
      className={`bg-black bg-opacity-70  fixed   inset-0  place-content-center w-full h-full flex items-center justify-center  ${
        isGalleryOpen ? "opacity-100 z-[100]" : "opacity-0 -z-[500]"
      } duration-500`}
    >
      <div className="w-full h-full relative flex items-center sm:justify-center justify-between sm:flex-row flex-col">
        <CloseIcon
          role="button"
          tabIndex={0}
          onClick={() => setIsGalleryOpen(false)}
          className="absolute right-8 top-8 cursor-pointer hover:rotate-90 duration-300 2xl:w-24 lg:w-20 sm:w-16 w-10 2xl:h-24 lg:h-20 sm:h-16 h-10 z-50"
        />
        <div
          role="button"
          tabIndex={0}
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[20%] cursor-pointer sm:flex hidden items-center justify-center hover:bg-[#0000004f] h-full shrink-0"
        >
          <ArrowLeftIcon className="cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8" />
        </div>
        <div className="sm:w-[60%] w-full flex items-center justify-center sm:px-[74px] px-8 sm:py-[74px] h-full relative">
          <Swiper
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            className="w-full h-full flex items-center justify-center"
          >
            {data?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full h-full flex items-center justify-center "
              >
                <MainImage
                  src={item.picture}
                  className="object-contain h-full "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          onClick={() => swiperRef.current?.slideNext()}
          role="button"
          tabIndex={0}
          className="w-[20%] cursor-pointer sm:flex hidden items-center justify-center hover:bg-[#0000004f] h-full shrink-0"
        >
          <ArrowLeftIcon className="rotate-180 cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8" />
        </div>

        {/* mobile slider */}
        <div className="w-full flex items-center justify-center">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            role="button"
            tabIndex={0}
            className="w-[90px] h-[90px] rounded-full cursor-pointer  flex sm:hidden items-center justify-center hover:bg-[#0000004f]"
          >
            <ArrowLeftIcon className="cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8 2xl:h-20 lg:h-16 sm:h-12 h-8" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            role="button"
            tabIndex={0}
            className="w-[90px] h-[90px] rounded-full cursor-pointer flex sm:hidden items-center justify-center hover:bg-[#0000004f]"
          >
            <ArrowLeftIcon className="rotate-180 cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8  2xl:h-20 lg:h-16 sm:h-12 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureChanger;
