import { Link } from 'gatsby';
import React from 'react';

export const Button = ({ className, name, link, target }) => (
  <Link to={link} target={target} className="flex items-center justify-center">
    <button className={`font-bold  ${className}`}>{name}</button>
  </Link>
);

export const GradientBtn = ({ text, link, target }) => (
  <span className="gradientBtn__gradientBorder grid w-max place-items-center rounded-full py-[.7px] px-[.4px] ">
    <Link
      to={link}
      target={target}
      name="button"
      type="button"
      className="group relative z-10 h-full w-full overflow-hidden rounded-full bg-[#1B034B] px-6 py-4"
    >
      <span className="absolute top-0 right-0 -z-10 h-full w-full -translate-x-48 bg-[#6019CE] duration-300 ease-in group-hover:translate-x-0" />
      <p className="gradientBtn__gradientText group-hover:hidden">{text}</p>
      <p className="gradientBtn__normalText z-20 hidden group-hover:flex">
        {text}
      </p>
    </Link>
  </span>
);
