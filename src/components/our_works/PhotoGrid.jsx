import { motion } from 'framer-motion';
import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { fadeAnim } from '../../lib/motions';

const PhotoGrid = ({ setIsGalleryOpen, data, setSwiperPosition }) => {
  const handleClick = (id) => {
    setSwiperPosition(id);
    setIsGalleryOpen(true);
  };

  return (
    <div className="my-10 mx-auto grid   max-w-[1800px] grid-cols-2 gap-3 px-8 sm:my-12 sm:grid-cols-3 sm:gap-3 sm:px-[80px] lg:my-16 lg:gap-4 xl:grid-cols-4 xl:gap-12 2xl:my-20 2xl:px-[147px]">
      {data?.map((item, i) => (
        <div className="grid">
          <motion.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={fadeAnim}
            onClick={() => handleClick(i)}
            role="button"
            tabIndex={i}
            key={item.id}
            className=" group relative z-10 h-full w-full cursor-pointer  overflow-hidden rounded-xl sm:rounded-[20px]"
          >
            <MainImage
              src={item.picture}
              alt={item.title}
              className="-z-10 h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 hidden h-full w-full items-end justify-center bg-[rgba(0,0,0,0.30)] p-4 opacity-0 duration-300 ease-in group-hover:opacity-100 lg:flex ">
              <p className="font-nunito text-xl font-semibold text-white">
                Project name
              </p>
            </div>
          </motion.div>
          <div className=" flex items-start justify-start py-2 lg:hidden">
            <p className="font-nunito text-lg font-semibold leading-[130%] text-white">
              Project name
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
