import { motion } from 'framer-motion';
import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { fadeAnim } from '../../lib/motions';
import { ArrowLeftIcon, CloseIcon } from '../../ui/Icon';

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
      className={`fixed inset-0  flex   h-full  w-full place-content-center items-center justify-center bg-black bg-opacity-70   ${
        isGalleryOpen ? 'z-[600] opacity-100' : '-z-[500] opacity-0'
      } duration-500`}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-evenly sm:flex-row sm:justify-between">
        <CloseIcon
          role="button"
          tabIndex={0}
          onClick={() => setIsGalleryOpen(false)}
          className="absolute right-8 top-8 z-50 h-10 w-10 cursor-pointer duration-300 hover:rotate-90 sm:h-16 sm:w-16 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24"
        />
        <div
          role="button"
          tabIndex={0}
          onClick={prevSlide}
          className="hidden h-full w-[20%] shrink-0 cursor-pointer items-center justify-center hover:bg-[#0000004f] sm:flex"
        >
          <ArrowLeftIcon className="w-8 cursor-pointer sm:w-12 lg:w-16 2xl:w-20" />
        </div>
        <motion.div
          initial="hide"
          animate="show"
          exit="hide"
          variants={fadeAnim}
          className="relative flex h-min shrink-0 items-center justify-center px-8 sm:w-[60%] sm:px-[74px] sm:py-[74px]"
        >
          <MainImage
            alt="slider Pics"
            src={data[swiperPosition].picture}
            className="flex h-full w-full items-center justify-center object-contain"
          />
        </motion.div>

        <div
          onClick={nextSlide}
          role="button"
          tabIndex={0}
          className="hidden h-full w-[20%] shrink-0 cursor-pointer items-center justify-center hover:bg-[#0000004f] sm:flex"
        >
          <ArrowLeftIcon className="w-8 rotate-180 cursor-pointer sm:w-12 lg:w-16 2xl:w-20" />
        </div>

        {/* mobile slider */}
        <div className="flex w-full items-center justify-center">
          <div
            onClick={prevSlide}
            role="button"
            tabIndex={0}
            className="flex h-[90px] w-[90px] cursor-pointer  items-center justify-center rounded-full hover:bg-[#0000004f] sm:hidden"
          >
            <ArrowLeftIcon className="h-8 w-8 cursor-pointer sm:h-12 sm:w-12 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" />
          </div>
          <div
            onClick={nextSlide}
            role="button"
            tabIndex={0}
            className="flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full hover:bg-[#0000004f] sm:hidden"
          >
            <ArrowLeftIcon className="h-8 w-8 rotate-180 cursor-pointer sm:h-12 sm:w-12  lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureChanger;
