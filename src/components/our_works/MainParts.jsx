import { interpolateAs } from "next/dist/shared/lib/router/router";
import React, { useMemo } from "react";
import { gallery } from "../../lib/dummyData";
import MainParts_head from "./MainParts_head";
import PhotoGrid from "./PhotoGrid";
import PictureChanger from "./PictureChanger";

const category = [
  { id: 1, title: "Featured" },
  { id: 1, title: "Brochures" },
  { id: 1, title: "Branding" },
  { id: 1, title: "Logos" },
  { id: 1, title: "Websites" },
  { id: 1, title: "Prints" },
];
const MainParts = () => {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [swiperPosition, setSwiperPosition] = React.useState(0);

  const [isCategory, setIsCategory] = React.useState("Featured");

  const galleryFiltered = () => {
    if (isCategory === "Featured") return gallery;
    else if (isCategory !== "Featured") {
      return gallery.filter((item) => item.category === isCategory && item);
    }
  };
  
  return (
    <div className="mt-20">
      <MainParts_head
        category={category}
        isCategory={isCategory}
        setIsCategory={setIsCategory}
      />
      <PhotoGrid setIsGalleryOpen={setIsGalleryOpen} data={galleryFiltered()} setSwiperPosition={setSwiperPosition}/>
      <PictureChanger
        isGalleryOpen={isGalleryOpen}
        setIsGalleryOpen={setIsGalleryOpen}
        swiperPosition={swiperPosition}
      />
    </div>
  );
};

export default MainParts;
