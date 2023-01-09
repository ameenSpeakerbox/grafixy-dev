import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="relative lg:h-[.1px] h-full flex items-center  w-full bg-slate-400">
      <div className="2xl:px-[147px] px-[80px]  flex lg:absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 2xl:mt-[90px] lg:mt-6 overflow-hidden">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            layout="fullWidth"
            objectFit="contain"
            className="2xl:w-[205px] lg:w-[150px] w-[120px]"
          />
        </Link>
        <div className="flex items-center justify-center w-full">
          <div className=" lg:flex hidden items-center 2xl:gap-[50px] justify-end mr-[35px] lg:gap-10 gap-4 w-full">
            {navLink.map((nav) => (
              <Link
                key={nav.id}
                to={`/${nav.slug}`}
                className="text-white font-bold 2xl:text-lg lg:text-base text-[10px]"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <Button
            className="2xl:h-[67px] h-[50px] bg-[#19013F] mr-[10px] drop-shadow-lg text-white 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg lg:text-base text-[10px] grid place-content-center"
            name="CLIENT LOGIN"
          />
          <Button
            className="2xl:h-[67px] h-[50px] grid place-content-center  bg-white text-[#19013F] drop-shadow-lg 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg lg:text-base text-[10px"
            name="SCHEDULE A DEMO"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
