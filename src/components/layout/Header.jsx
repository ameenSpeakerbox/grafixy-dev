import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Link, Script } from 'gatsby';
import logo from '../../images/logo.png';
import { ArrowWithLineIcon } from '../../ui/Icon';
import { motion } from 'framer-motion';

const navLink = [
  {
    id: 1,
    name: 'why grafixy?',
    slug: 'why_grafixy',
  },
  {
    id: 2,
    name: 'how it works',
    slug: 'how_it_works',
  },
  {
    id: 3,
    name: 'pricing',
    slug: 'pricing',
  },
  {
    id: 4,
    name: 'our work',
    slug: 'our_works',
  },
];

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState(false);

  return (
    <>
      <nav className="relative z-[500] flex h-[110px] w-full  items-center bg-[#1E014B] sm:h-[.1px]">
        <div className="left-0 top-0 z-50  flex h-[67px] w-full items-center justify-between overflow-hidden px-8 sm:absolute sm:mt-6 sm:px-[80px] 2xl:mt-[50px] 2xl:px-[147px]">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              loading="eager"
              layout="fullWidth"
              className="h-[35px] object-contain sm:h-full"
            />
          </a>
          <div className="hidden w-full items-center justify-center lg:flex">
            <div className=" mr-[35px] hidden w-full items-center justify-end gap-4 lg:flex lg:gap-10 2xl:gap-[50px]">
              {navLink.map((nav) => (
                <>
                  {' '}
                  {nav.slug !== 'pricing' ? (
                    <Link
                      key={nav.id}
                      to={`/${nav.slug}`}
                      className="text-base font-bold text-white 2xl:text-lg"
                    >
                      {nav.name}
                    </Link>
                  ) : (
                    <a
                      key={nav.id}
                      href={`/${nav.slug}`}
                      className="text-base font-bold text-white 2xl:text-lg"
                    >
                      {nav.name}
                    </a>
                  )}
                </>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <a
                href="javascript:void(0)"
                data-cb-type="portal"
                className="relative z-10 mr-[10px] grid h-[40px] w-max shrink-0 cursor-pointer place-content-center overflow-hidden rounded-full bg-[#6019CE] px-5 py-3 text-base font-bold text-white shadow-xl drop-shadow-lg after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-white after:duration-300 after:ease-in hover:text-[#6019CE] hover:after:left-0 xl:h-[50px] 2xl:h-[67px] 2xl:px-[31px] 2xl:py-[10px] 2xl:text-lg"
              >
                LOGIN
              </a>
              <Button
                className="relative z-10 grid h-[40px] w-max  shrink-0 place-content-center overflow-hidden rounded-full bg-white px-5 py-3 text-base text-[#19013F] shadow-xl drop-shadow-lg after:absolute after:-left-[110%] after:top-0 after:-z-10 after:h-full after:w-[110%] after:bg-[#6019CE] after:duration-300 after:ease-in hover:text-white hover:after:-left-4 xl:h-[50px] 2xl:h-[67px] 2xl:px-[31px] 2xl:py-[10px] 2xl:text-lg"
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
            className={`relative flex h-[40px] w-[40px] cursor-pointer flex-col justify-evenly overflow-hidden rounded-md border-[3px] border-[#6019CE] p-1 lg:hidden ${
              isMenuClick && 'items-center justify-center p-2'
            }`}
          >
            <span
              className={`absolute right-1 left-1 h-[0px] border border-white bg-white transition-all duration-300 ${
                isMenuClick ? 'rotate-45 ' : 'top-2 rotate-0'
              }`}
            />
            <span
              className={`h-[0px] border border-white bg-white duration-300 ${
                isMenuClick ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-1 right-1  h-[0px] border border-white bg-white duration-300 ${
                isMenuClick ? '-rotate-45 ' : 'bottom-2 rotate-0'
              }`}
            />
          </div>
        </div>
        {/* toggleMenu */}

        <motion.nav
          initial={false}
          animate={isMenuClick ? 'true' : 'false'}
          variants={{
            true: (height = 1000) => ({
              clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
              transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
              },
              display: 'block',
            }),
            false: {
              clipPath: 'circle(30px at 40px 40px)',
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
              display: 'none',
            },
          }}
          className={`fixed  top-0 z-50 h-screen w-full bg-[#1E014B]`}
        >
          <div className="flex h-[110px] w-full  items-center justify-between border-b border-[#5A3D85] bg-[#1E014B] px-8 sm:px-[80px]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                loading="eager"
                layout="fullWidth"
                className="h-[35px] object-contain sm:h-full"
              />
            </Link>

            <button
              onClick={() => setIsMenuClick(!isMenuClick)}
              role="button"
              name="button"
              tabIndex={0}
              className={`relative flex h-[40px] w-[40px] cursor-pointer flex-col justify-evenly rounded-md border-[3px] border-[#6019CE] p-1 lg:hidden ${
                isMenuClick && 'items-center justify-center p-2'
              }`}
            >
              <span
                className={`absolute right-1 left-1 h-[0px] border border-white bg-white duration-300 ${
                  isMenuClick ? 'rotate-45 ' : 'top-2 rotate-0'
                }`}
              />
              <span
                className={`h-[0px] border border-white bg-white ${
                  isMenuClick ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-1 right-1  h-[0px] border border-white bg-white duration-300 ${
                  isMenuClick ? '-rotate-45 ' : 'bottom-2 rotate-0'
                }`}
              />
            </button>
          </div>

          <div className=" flex flex-col items-center justify-center">
            {navLink.map((nav, idx) => (
              <motion.p
                key={nav.id}
                initial={false}
                animate={isMenuClick ? 'true' : 'false'}
                variants={{
                  true: {
                    y: '0%',
                    opacity: 1,
                  },
                  false: {
                    y: '50%',
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
                  to={`/${nav.slug}`}
                  className="flex h-[80px] w-full items-center border-b border-[#5A3D85] px-8 text-xl font-semibold text-white sm:h-[110px] sm:px-[80px]"
                >
                  {nav.name}
                </Link>
              </motion.p>
            ))}
            <motion.div
              initial={false}
              animate={isMenuClick ? 'true' : 'false'}
              variants={{
                true: {
                  y: '0%',
                  opacity: 1,
                },
                false: {
                  y: '50%',
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
              className="grid w-full px-8 sm:place-content-start sm:px-[80px] "
            >
              <Button
                className="mt-10 h-[50px] w-full rounded-full bg-[#6019CE] px-[22px] py-[9px] text-sm text-white"
                name="LOGIN"
                link="https://speakerbox.chargebeeportal.com/portal/v2/login?forward=portal_main"
              />
              <Button
                className="mt-5 h-[50px] w-full rounded-full bg-white px-[22px] py-[9px] text-sm text-[#6E3CBC]"
                name="SCHEDULE A DEMO"
                link="https://calendly.com/grafixy-demo/grafixy-demo-session"
                target="_blank"
              />
            </motion.div>

            <motion.button
              initial={false}
              animate={isMenuClick ? 'true' : 'false'}
              variants={{
                true: {
                  y: '0%',
                  opacity: 1,
                },
                false: {
                  y: '50%',
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
              className="mt-5 inline-flex items-center justify-center gap-2 text-lg text-white sm:hidden "
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
            className="absolute bottom-12 right-8 hidden items-center justify-center gap-2 text-lg text-white sm:right-[80px] sm:inline-flex "
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
