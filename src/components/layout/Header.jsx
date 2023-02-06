import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";

const Header = () => {
  
  return (
    <nav className="relative h-[.1px] flex items-center  w-full ">
      <div className="px-[147px] flex absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 mt-[90px]">
        <Link to="/">
        <StaticImage
          src="../../images/logo.png"
          alt="logo"
          layout="fullWidth"
          objectFit="contain"
          className="w-[205px]"
          />
          </Link>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-[50px] mr-[35px] ">
            {navLink.map((nav) => (
              <Link key={nav.id} to={`/${nav.slug}`} className="text-white font-bold text-lg">
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
