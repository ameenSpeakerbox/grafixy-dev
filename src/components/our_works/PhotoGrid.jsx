import { MainImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const PhotoGrid = ({ setIsGalleryOpen, data, setSwiperPosition }) => {

  const handleClick = (id) => {
    setSwiperPosition(id);
    setIsGalleryOpen(true);
  };

  return (
    <div className="2xl:px-[147px] sm:px-[80px] px-8   2xl:my-20 lg:my-16 sm:my-12 my-10 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-12 lg:gap-4 sm:gap-3 gap-2 max-w-[1800px] mx-auto">
      {data?.map((item, i) => (
        <div
          onClick={() => handleClick(i)}
          role="button"
          tabIndex={i}
          key={item.id}
          className=" rounded-[20px] overflow-hidden cursor-pointer w-full h-full"
        >
          <MainImage
            src={item.picture}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
