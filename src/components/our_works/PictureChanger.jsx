import { motion } from "framer-motion";
import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { ArrowLeftIcon, CloseIcon } from "../../ui/Icon";

const fadeAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

const PictureChanger = ({
  isGalleryOpen,
  setIsGalleryOpen,
  data,
  swiperPosition,
  setSwiperPosition,
}) => {
  const prevSlide = () => {
    swiperPosition === 0
      ? setSwiperPosition(data.length - 1)
      : setSwiperPosition(swiperPosition - 1);
  };
  const nextSlide = () => {
    swiperPosition + 1 === data.length
      ? setSwiperPosition(0)
      : setSwiperPosition(swiperPosition + 1);
  };

  return (
    <div
      className={`bg-black bg-opacity-70  fixed   inset-0  place-content-center w-full h-full flex items-center justify-center   ${
        isGalleryOpen ? "opacity-100 z-[100]" : "opacity-0 -z-[500]"
      } duration-500`}
    >
      <div className="w-full h-full relative flex items-center sm:justify-between justify-evenly sm:flex-row flex-col">
        <CloseIcon
          role="button"
          tabIndex={0}
          onClick={() => setIsGalleryOpen(false)}
          className="absolute right-8 top-8 cursor-pointer hover:rotate-90 duration-300 2xl:w-24 lg:w-20 sm:w-16 w-10 2xl:h-24 lg:h-20 sm:h-16 h-10 z-50"
        />
        <div
          role="button"
          tabIndex={0}
          onClick={prevSlide}
          className="w-[20%] cursor-pointer sm:flex hidden items-center justify-center hover:bg-[#0000004f] h-full shrink-0"
        >
          <ArrowLeftIcon className="cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8" />
        </div>
        <motion.div
          initial="hide"
          animate="show"
          exit="hide"
          variants={fadeAnim}
          className="sm:w-[60%] shrink-0 flex items-center justify-center sm:px-[74px] px-8 sm:py-[74px] h-min relative"
        >
          <MainImage alt='slider Pics'
            src={data[swiperPosition].picture}
            className="object-contain h-full w-full flex items-center justify-center"
          />
        </motion.div>

        <div
          onClick={nextSlide}
          role="button"
          tabIndex={0}
          className="w-[20%] cursor-pointer sm:flex hidden items-center justify-center hover:bg-[#0000004f] h-full shrink-0"
        >
          <ArrowLeftIcon className="rotate-180 cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8" />
        </div>

        {/* mobile slider */}
        <div className="w-full flex items-center justify-center">
          <div
            onClick={prevSlide}
            role="button"
            tabIndex={0}
            className="w-[90px] h-[90px] rounded-full cursor-pointer  flex sm:hidden items-center justify-center hover:bg-[#0000004f]"
          >
            <ArrowLeftIcon className="cursor-pointer 2xl:w-20 lg:w-16 sm:w-12 w-8 2xl:h-20 lg:h-16 sm:h-12 h-8" />
          </div>
          <div
            onClick={nextSlide}
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
