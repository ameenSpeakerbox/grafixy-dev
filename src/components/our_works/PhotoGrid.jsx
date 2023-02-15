import { motion } from "framer-motion";
import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { fadeAnim } from "../../lib/motions";

const PhotoGrid = ({ setIsGalleryOpen, data, setSwiperPosition }) => {
  const handleClick = (id) => {
    setSwiperPosition(id);
    setIsGalleryOpen(true);
  };

  return (
    <div className="2xl:px-[147px] sm:px-[80px] px-8   2xl:my-20 lg:my-16 sm:my-12 my-10 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-12 lg:gap-4 sm:gap-3 gap-3 max-w-[1800px] mx-auto">
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
          className=" sm:rounded-[20px] rounded-xl overflow-hidden cursor-pointer w-full h-full  z-10 relative group"
        >
          <MainImage
            src={item.picture}
            alt={item.title}
            className="object-cover w-full h-full -z-10"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.30)] lg:flex hidden items-end justify-center p-4 duration-300 ease-in group-hover:opacity-100 opacity-0 ">
            <p className="font-nunito text-xl text-white font-semibold">
              Project name
            </p>
          </div>
        </motion.div>
          <div className=" flex lg:hidden justify-start items-start py-2">
            <p className="font-nunito text-lg leading-[130%] text-white font-semibold">
              Project name
            </p>
          </div>
      </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
