import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { graphql, Link } from "gatsby";

const navLink = [
  {
    id: 1,
    name: "why grafixy?",
  },
  {
    id: 2,
    name: "how it's works",
  },
  {
    id: 3,
    name: "pricing",
  },
  {
    id: 4,
    name: "our work",
  },
];

const Header = () => {
  return (
    <nav className="relative h-[.1px] flex items-center  w-full ">
      <div className="px-[147px] flex absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 mt-[90px]">
        <StaticImage
          src="../../images/logo.png"
          alt="logo"
          layout="fullWidth"
          objectFit="contain"
          className="w-[205px]"
        />
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-[50px] mr-[35px] ">
            {navLink.map((nav) => (
              <Link key={nav.id} to="" className="text-white font-bold text-lg">
                {nav.name}
              </Link>
            ))}
          </div>
          <Button
            className="h-[67px] bg-[#19013F] mr-[10px] drop-shadow-lg text-white px-[31px] py-[10px] rounded-full"
            name="CLIENT LOGIN"
          />
          <Button
            className="h-[67px] bg-white text-[#19013F] drop-shadow-lg px-[31px] py-[10px] rounded-full"
            name="SCHEDULE A DEMO"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
