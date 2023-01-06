import React from "react";
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

  const [isCategory, setIsCategory] = React.useState('Featured"');

  return (
    <div className="mt-20">
      <MainParts_head
        category={category}
        isCategory={isCategory}
        setIsCategory={setIsCategory}
      />
      <PhotoGrid setIsGalleryOpen={setIsGalleryOpen} />
      <PictureChanger
        isGalleryOpen={isGalleryOpen}
        setIsGalleryOpen={setIsGalleryOpen}
      />
    </div>
  );
};

export default MainParts;
