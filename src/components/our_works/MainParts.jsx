import React from "react";
import { gallery } from "../../lib/dummyData";
import MainPartsHead from "./MainParts_head";
import PhotoGrid from "./PhotoGrid";
import PictureChanger from "./PictureChanger";

const category = [
  { id: 1, title: "Featured" },
  { id: 2, title: "Brochures" },
  { id: 3, title: "Branding" },
  { id: 4, title: "Logos" },
  { id: 5, title: "Websites" },
  { id: 6, title: "Prints" },
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

  const swiperData = [...galleryFiltered()].sort((a) => a.id >= swiperPosition ? 1: -1)

  return (
    <div className=" w-full grid overflow-hidden">
      <MainPartsHead
        category={category}
        isCategory={isCategory}
        setIsCategory={setIsCategory}
      />
      <PhotoGrid
        setIsGalleryOpen={setIsGalleryOpen}
        data={galleryFiltered()}
        setSwiperPosition={setSwiperPosition}
      />
      <PictureChanger
        isGalleryOpen={isGalleryOpen}
        setIsGalleryOpen={setIsGalleryOpen}
        data={swiperData}
      />
    </div>
  );
};

export default MainParts;
