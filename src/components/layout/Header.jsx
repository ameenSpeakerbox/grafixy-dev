import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";
import logo from "../../images/logo.png";
import { ArrowWithLineIcon } from "../../ui/Icon";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState(false);

  return (
    <>
      <nav className="relative sm:h-[.1px] h-[110px] flex items-center  w-full bg-[#1E014B] z-[500]">
        <div className="2xl:px-[147px] sm:px-[80px] px-8  flex sm:absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 2xl:mt-[50px] sm:mt-6 overflow-hidden">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              loading="eager"
              layout="fullWidth"
              className="sm:h-full h-[35px] object-contain"
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
            <div className="gap-4 flex items-center justify-center">
              <Button
                className="2xl:h-[67px] xl:h-[50px] h-[40px] bg-[#6019CE] mr-[10px] drop-shadow-lg text-white 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg xl:text-base text-[10px] grid place-content-center w-max relative after:absolute after:w-full after:h-full after:bg-white after:-left-[100%] after:top-0 after:-z-10 z-10 overflow-hidden hover:after:left-0 after:duration-300 after:ease-in shadow-xl hover:text-[#6019CE]"
                name="LOGIN"
                link="https://speakerbox.chargebeeportal.com/portal/v2/login?forward=portal_main"
              />
              <Button
                className="2xl:h-[67px] xl:h-[50px] h-[40px] grid place-content-center  bg-white text-[#19013F] hover:text-white drop-shadow-lg 2xl:px-[31px] 2xl:py-[10px] px-5 py-3 rounded-full shrink-0 2xl:text-lg xl:text-base text-[10px] w-max relative after:absolute after:w-full after:h-full after:bg-[#19013F] after:-left-[100%] after:top-0 after:-z-10 z-10 overflow-hidden hover:after:left-0 after:duration-300 after:ease-in shadow-xl"
                name="SCHEDULE A DEMO"
                link="https://calendly.com/grafixy-demo/grafixy-demo-session"
                target="_blank"
              />
            </div>
          </div>

          {/* mobile menu */}

          <div
            onClick={() => setIsMenuClick(!isMenuClick)}
            role="button"
            tabIndex={0}
            className={`w-[40px] h-[40px] border-[3px] border-[#6019CE] rounded-md lg:hidden flex flex-col justify-evenly p-1 cursor-pointer relative overflow-hidden ${
              isMenuClick && "items-center justify-center p-2"
            }`}
          >
            <span
              className={`h-[0px] border border-white right-1 left-1 bg-white duration-300 absolute transition-all ${
                isMenuClick ? "rotate-45 " : "rotate-0 top-2"
              }`}
            />
            <span
              className={`h-[0px] border border-white duration-300 bg-white ${
                isMenuClick ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[0px] border border-white  bg-white duration-300 absolute left-1 right-1 ${
                isMenuClick ? "-rotate-45 " : "rotate-0 bottom-2"
              }`}
            />
          </div>
        </div>
        {/* toggleMenu */}

        <motion.nav
          initial={false}
          animate={isMenuClick ? "true" : "false"}
          variants={{
            true: (height = 1000) => ({
              clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
              transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
              },
              display: "block",
            }),
            false: {
              clipPath: "circle(30px at 40px 40px)",
              transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
              },
              display: "none",
            },
          }}
          className={`w-full  h-screen bg-[#1E014B] fixed top-0 z-50`}
        >
          <div className="h-[110px] flex items-center  w-full bg-[#1E014B] border-b border-[#5A3D85] sm:px-[80px] px-8 justify-between">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                loading="eager"
                layout="fullWidth"
                className="sm:h-full h-[35px] object-contain"
              />
            </Link>

            <button
              onClick={() => setIsMenuClick(!isMenuClick)}
              role="button"
              tabIndex={0}
              className={`w-[40px] h-[40px] border-[3px] border-[#6019CE] rounded-md lg:hidden flex flex-col justify-evenly p-1 cursor-pointer relative ${
                isMenuClick && "items-center justify-center p-2"
              }`}
            >
              <span
                className={`h-[0px] border border-white right-1 left-1 bg-white duration-300 absolute ${
                  isMenuClick ? "rotate-45 " : "rotate-0 top-2"
                }`}
              />
              <span
                className={`h-[0px] border border-white bg-white ${
                  isMenuClick ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[0px] border border-white  bg-white duration-300 absolute left-1 right-1 ${
                  isMenuClick ? "-rotate-45 " : "rotate-0 bottom-2"
                }`}
              />
            </button>
          </div>

          <div className=" flex flex-col justify-center items-center">
            {navLink.map((nav, idx) => (
              <motion.p
                initial={false}
                animate={isMenuClick ? "true" : "false"}
                variants={{
                  true: {
                    y: "0%",
                    opacity: 1,
                  },
                  false: {
                    y: "50%",
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 * (idx + 1),
                }}
                className="w-full"
              >
                <Link
                  key={nav.id}
                  to={`/${nav.slug}`}
                  className="sm:h-[110px] h-[80px] flex items-center border-b border-[#5A3D85] text-xl font-semibold text-white px-8 sm:px-[80px] w-full"
                >
                  {nav.name}
                </Link>
              </motion.p>
            ))}
            <motion.div
              initial={false}
              animate={isMenuClick ? "true" : "false"}
              variants={{
                true: {
                  y: "0%",
                  opacity: 1,
                },
                false: {
                  y: "50%",
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
              className="sm:px-[80px] px-8 w-full grid sm:place-content-start "
            >
              <Button
                className="mt-10 w-full bg-[#6019CE] rounded-full text-sm text-white px-[22px] py-[9px] h-[50px]"
                name="LOGIN"
                link="https://speakerbox.chargebeeportal.com/portal/v2/login?forward=portal_main"
              />
              <Button
                className="mt-5 w-full bg-white rounded-full text-sm text-[#6E3CBC] px-[22px] py-[9px] h-[50px]"
                name="SCHEDULE A DEMO"
                link="https://calendly.com/grafixy-demo/grafixy-demo-session"
                target="_blank"
              />
            </motion.div>

            <motion.button
              initial={false}
              animate={isMenuClick ? "true" : "false"}
              variants={{
                true: {
                  y: "0%",
                  opacity: 1,
                },
                false: {
                  y: "50%",
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.2,
              }}
              onClick={() => setIsMenuClick(false)}
              role="button"
              tabIndex={0}
              className="inline-flex sm:hidden items-center justify-center text-lg text-white gap-2 mt-5 "
            >
              <Link to="/">Back to home</Link>
            </motion.button>
          </div>

          <button
            onClick={() => {
              setIsMenuClick(false);
            }}
            role="button"
            tabIndex={0}
            className="sm:inline-flex hidden items-center justify-center text-lg text-white gap-2 absolute bottom-12 sm:right-[80px] right-8 "
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2"
            >
              <ArrowWithLineIcon />
              back to home
            </Link>
          </button>
        </motion.nav>
      </nav>
    </>
  );
};

export default Header;
