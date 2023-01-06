import { GatsbyImage, MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { gallery } from "../../lib/dummyData";

const PhotoGrid = ({ setIsGalleryOpen}) => {
  return (
    <div className="px-[122px] mt-20 grid grid-cols-3 gap-12 ">
      {gallery.map((item) => (
        <div
        onClick={() => setIsGalleryOpen(true)}
          key={item.id}
          className="h-[440px] w-[440px] rounded-[20px] overflow-hidden cursor-pointer"
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
