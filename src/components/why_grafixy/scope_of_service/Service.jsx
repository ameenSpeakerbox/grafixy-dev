import React from 'react';
import { servicesData } from '../../../lib/dummyData';

const Service = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl place-items-center gap-y-6  gap-x-20 px-8 py-16 sm:grid-cols-2 sm:gap-y-10 sm:px-[80px] lg:grid-cols-3 2xl:px-[147px]">
      {servicesData.map((item) => (
        <ul
          key={item.id}
          className="grid h-full w-full place-content-start place-items-start"
        >
          <h2 className="text-[28px] font-medium tracking-[-2%] text-[#28075A]">
            {item.title}
          </h2>
          {item.service.map((text) => (
            <li
              key={text.id}
              className="font-nunito text-lg font-normal text-[#6E3CBC]"
            >
              {text.item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Service;
