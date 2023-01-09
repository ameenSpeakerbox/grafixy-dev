import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";
import logo from "../../images/logo.png";
import { Arrow_withLineIcon } from "../../ui/Icon";

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState(false);

  return (
    <>
      <nav
        className="relative sm:h-[.1px] h-[110px] flex items-center  w-full bg-[#1E014B] sm:border-none border-b
    border-[#5A3D85] "
      >
        <div className="2xl:px-[147px] sm:px-[80px] px-8  flex sm:absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 2xl:mt-[90px] sm:mt-6 overflow-hidden">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              layout="fullWidth"
              objectFit="contain"
              className="2xl:w-[205px] lg:w-[150px] w-[120px]"
            />
          </Link>
          <div className="lg:flex hidden items-center justify-center w-full">
            <div className=" lg:flex hidden items-center 2xl:gap-[50px] justify-end mr-[35px] lg:gap-10 gap-4 w-full">
              {navLink.map((nav) => (
                <Link
                  key={nav.id}
                  to={`/${nav.slug}`}
                  className="text-white font-bold 2xl:text-lg xl:text-base text-[10px]"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
            <Button
              className="2xl:h-[67px] xl:h-[50px] h-[40px] bg-[#19013F] mr-[10px] drop-shadow-lg text-white 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg xl:text-base text-[10px] grid place-content-center"
              name="CLIENT LOGIN"
            />
            <Button
              className="2xl:h-[67px] xl:h-[50px] h-[40px] grid place-content-center  bg-white text-[#19013F] drop-shadow-lg 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg xl:text-base text-[10px]"
              name="SCHEDULE A DEMO"
            />
          </div>

          {/* mobile menu */}

          <div
            onClick={() => setIsMenuClick(!isMenuClick)}
            className={`w-[40px] h-[40px] border-[3px] border-[#6019CE] rounded-md lg:hidden flex flex-col justify-evenly p-1 cursor-pointer relative ${
              isMenuClick && "items-center justify-center p-2"
            }`}
          >
            <span
              className={`h-[0px] border border-[#5A3D85] w-full bg-[#5A3D85] duration-300  ${
                isMenuClick && "rotate-45 absolute"
              }`}
            />
            <span
              className={`h-[0px] border-2 border-[#5A3D85] duration-300 ${
                isMenuClick && "hidden"
              }`}
            />
            <span
              className={`h-[0px] border border-[#5A3D85] w-full bg-[#5A3D85] duration-300 ${
                isMenuClick && "-rotate-45 absolute"
              }`}
            />
          </div>
        </div>
        {/* toggleMenu */}

        <nav
          className={`w-full  h-screen bg-[#1E014B] fixed top-0 z-50 ${
            isMenuClick ? "block lg:hidden" : "hidden"
          }`}
        >
          <div className="h-[110px] flex items-center  w-full bg-[#1E014B] border-b border-[#5A3D85] sm:px-[80px] px-8 justify-between">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                layout="fullWidth"
                objectFit="contain"
                className="2xl:w-[205px] lg:w-[150px] w-[120px]"
              />
            </Link>

            <div
              onClick={() => setIsMenuClick(!isMenuClick)}
              className={`w-[40px] h-[40px] border-[3px] border-[#6019CE] rounded-md lg:hidden flex flex-col justify-evenly p-1 cursor-pointer relative ${
                isMenuClick && "items-center justify-center p-2"
              }`}
            >
              <span
                className={`h-[0px] border border-[#5A3D85] w-full bg-[#5A3D85] duration-300  ${
                  isMenuClick && "rotate-45 absolute"
                }`}
              />
              <span
                className={`h-[0px] border-2 border-[#5A3D85] duration-300 ${
                  isMenuClick && "hidden"
                }`}
              />
              <span
                className={`h-[0px] border border-[#5A3D85] w-full bg-[#5A3D85] duration-300 ${
                  isMenuClick && "-rotate-45 absolute"
                }`}
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            {navLink.map((nav) => (
              <Link
                key={nav.id}
                to={`/${nav.slug}`}
                className="h-[110px] flex items-center border-b border-[#5A3D85] text-2xl font-semibold text-white px-8 w-full"
              >
                {nav.name}
              </Link>
            ))}
            <div className="px-8 w-full grid sm:place-content-start ">
              <Button
                className="mt-10 w-full bg-white rounded-full text-sm text-[#6E3CBC] px-[22px] py-[9px] h-[50px]"
                name="SCHEDULE A DEMO"
              />
            </div>

            <button
              onClick={() => setIsMenuClick(false)}
              className="inline-flex sm:hidden items-center justify-center text-lg text-white gap-2 mt-5 "
            >
              Back to home
            </button>
          </div>

          <button
            onClick={() => setIsMenuClick(false)}
            className="sm:inline-flex hidden items-center justify-center text-lg text-white gap-2 absolute bottom-12 right-8 "
          >
            <Arrow_withLineIcon />
            back to home
          </button>
        </nav>
      </nav>
    </>
  );
};

export default Header;
