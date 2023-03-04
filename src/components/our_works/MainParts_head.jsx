import React from 'react';

const MainPartsHead = ({ category, isCategory, setIsCategory }) => {
  return (
    <div className="flex h-[80px] w-full items-center justify-start gap-[20px]  overflow-scroll bg-white px-8 sm:h-[90px] sm:gap-[30px] sm:px-[80px] lg:justify-center lg:gap-[40px] lg:overflow-auto 2xl:gap-[100px]">
      {category.map((item) => (
        <p
          onClick={() => setIsCategory(item.title)}
          role="button"
          tabIndex={0}
          key={item.id}
          className={`cursor-pointer rounded-[10px] px-4
        py-2 text-xl font-medium  text-[#6E3CBC] duration-300 hover:text-[#210153] lg:text-2xl ${
          isCategory === item.title && 'bg-[#874ce618] text-[#210153]'
        }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default MainPartsHead;
