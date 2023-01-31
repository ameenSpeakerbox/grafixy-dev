import React from "react";

export const Button = ({ className, name }) => (
  <button className={`px-[31px] py-[10px] font-bold text-lg ${className}`}>
    {name}
  </button>
);

export const GradientBtn = ({text}) => (
  <span className="py-[.7px] px-[.4px] grid w-max rounded-full gradientBtn__gradientBorder place-items-center">
    <button
      name="button"
      type="button"
      className="px-6 py-4 rounded-full bg-[#1B034B] w-full h-full"
    >
      <p className="gradientBtn__gradientText">{text}</p>
    </button>
  </span>
);
