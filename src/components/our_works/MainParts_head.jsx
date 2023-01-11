import React from "react";

const MainParts_head = ({ category, isCategory, setIsCategory }) => {
  const id = "Featured";
  return (
    <div className="w-full flex bg-white items-center lg:justify-center justify-start  2xl:gap-[100px] lg:gap-[40px] sm:gap-[30px] gap-[20px] lg:overflow-auto overflow-scroll sm:px-[80px] px-8 sm:h-[110px] h-[94px]">
      {category.map((item) => (
        <p
          onClick={() => setIsCategory(item.title)}
          key={item.id} role="button"
          className={`font-medium 2xl:text-4xl lg:text-3xl sm:text-2xl text-xl  
        text-[#6E3CBC] cursor-pointer hover:text-[#210153]  px-[15px] py-[10px] rounded-[10px] duration-300 ${
          isCategory === item.title && "bg-[#874ce618] text-[#210153]"
        }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default MainParts_head;
