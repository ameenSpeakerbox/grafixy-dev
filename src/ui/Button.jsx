import { Link } from "gatsby";
import React from "react";

export const Button = ({ className, name, link, target }) => (
  <Link to={link} target={target} className="flex">
    <button className={`px-[31px] py-[10px] font-bold text-lg ${className}`}>
      {name}
    </button>
  </Link>
);

export const GradientBtn = ({ text, link, target }) => (
  <span className="py-[.7px] px-[.4px] grid w-max rounded-full gradientBtn__gradientBorder place-items-center ">
    <Link
      to={link}
      target={target}
      name="button"
      type="button"
      className="px-6 py-4 rounded-full bg-[#1B034B] w-full h-full relative overflow-hidden group z-10"
    >
      <span className="absolute w-full h-full bg-[#6019CE] top-0 right-0 group-hover:translate-x-0 -translate-x-48 duration-300 ease-in -z-10" />
      <p className="gradientBtn__gradientText group-hover:hidden">{text}</p>
      <p className="hidden group-hover:flex z-20 gradientBtn__normalText">
        {text}
      </p>
    </Link>
  </span>
);
