import React from "react";
import { servicesData } from "../../../lib/dummyData";

const Service = () => {
  return (
    <div className="2xl:px-[147px] sm:px-[80px] px-8 grid lg:grid-cols-3 sm:grid-cols-2  py-16 w-full place-items-center sm:gap-y-10 gap-y-6 gap-x-20 max-w-7xl mx-auto">
      {servicesData.map((item) => (
        <ul key={item.id} className="grid w-full place-content-start place-items-start h-full">
          <h2 className="text-[28px] tracking-[-2%] text-[#28075A] font-medium">
            {item.title}
          </h2>
          {item.service.map((text) => (
            <li key={text.id} className='font-nunito font-normal text-[#6E3CBC] text-lg'>{text.item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Service;
