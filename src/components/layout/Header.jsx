import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="relative lg:h-[.1px] h-full flex items-center  w-full bg-slate-400">
      <div className="2xl:px-[147px] px-[100px]  flex lg:absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 2xl:mt-[90px] lg:mt-6 overflow-hidden">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            layout="fullWidth"
            objectFit="contain"
            className="2xl:w-[205px] w-[170px]"
          />
        </Link>
        <div className="flex items-center justify-center w-full">
          <div className=" lg:flex hidden items-center 2xl:gap-[50px] justify-end mr-[35px] gap-10 w-full">
            {navLink.map((nav) => (
              <Link
                key={nav.id}
                to={`/${nav.slug}`}
                className="text-white font-bold xl:text-lg lg:text-base text-[10px]"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <Button
            className="xl:h-[67px] h-[40px] bg-[#19013F] mr-[10px] drop-shadow-lg text-white xl:px-[31px] xl:py-[10px] px-5 py-3 rounded-full shrink-0 xl:text-lg lg:text-base text-[10px] grid place-content-center"
            name="CLIENT LOGIN"
          />
          <Button
            className="xl:h-[67px] h-[40px] grid place-content-center  bg-white text-[#19013F] drop-shadow-lg xl:px-[31px] xl:py-[10px] px-5 py-3 rounded-full shrink-0 xl:text-lg lg:text-base text-[10px"
            name="SCHEDULE A DEMO"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
