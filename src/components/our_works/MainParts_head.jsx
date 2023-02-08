import React from "react";

const MainPartsHead = ({ category, isCategory, setIsCategory }) => {
  return (
    <div className="w-full flex bg-white items-center lg:justify-center justify-start  2xl:gap-[100px] lg:gap-[40px] sm:gap-[30px] gap-[20px] lg:overflow-auto overflow-scroll sm:px-[80px] px-8 sm:h-[90px] h-[80px]">
      {category.map((item) => (
        <p
          onClick={() => setIsCategory(item.title)}
          role="button"
          tabIndex={0}
          key={item.id}
          className={`font-medium lg:text-2xl text-xl
        text-[#6E3CBC] cursor-pointer hover:text-[#210153]  px-4 py-2 rounded-[10px] duration-300 ${
          isCategory === item.title && "bg-[#874ce618] text-[#210153]"
        }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default MainPartsHead;
