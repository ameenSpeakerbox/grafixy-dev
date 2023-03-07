import { LocationIcon, MailIcon } from '../../ui/Icon';
import React from 'react';
import { footerLinks } from '../../lib/dummyData';
import { Link } from 'gatsby';
import logo from '../../images/logo-dark.png';

const Footer = () => {
  return (
    <footer className="grid w-full overflow-hidden">
      <div className="flex flex-col flex-wrap items-center justify-between  gap-4 gap-y-8 bg-[#E0CCFF]  px-8 pt-8 pb-8 sm:gap-y-12 sm:pt-10 sm:pb-11 lg:flex-row lg:pt-16 lg:pb-[50px] 2xl:pt-[73px]">
        <div className=" grid w-full flex-1 place-content-start place-items-center sm:place-content-center">
          <img
            src={logo}
            alt="logo"
            loading="eager"
            className="h-[37px] object-contain sm:h-[43px] lg:h-[75px]"
          />
        </div>
        <div className="flex  w-full flex-1  flex-wrap justify-between gap-8 sm:flex-nowrap sm:justify-around sm:gap-[98px]">
          {footerLinks.map((link) => (
            <p key={link.id} className="flex flex-col gap-3 sm:gap-5">
              <h3 className="font-nunito text-base font-extrabold text-[#6E3CBC] sm:text-lg">
                {link.title}
              </h3>
              <p className="grid gap-1 sm:gap-2">
                {link?.subtitle.map((text) => (
                  <>
                    {text?.slug !== 'pricing' ? (
                      <Link
                        key={text.id}
                        to={`/${text?.slug}`}
                        className="cursor-pointer font-nunito text-base font-semibold text-[#6E3CBC]"
                      >
                        {text.title}
                      </Link>
                    ) : (
                      <a
                        key={text.id}
                        href={`/${text?.slug}`}
                        className="cursor-pointer font-nunito text-base font-semibold text-[#6E3CBC]"
                      >
                        {text.title}
                      </a>
                    )}
                  </>
                ))}
              </p>
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-2 bg-[#41118C] py-5 px-8 sm:gap-4 lg:justify-center lg:gap-[100px]">
        <a
          href=""
          className="inline-flex items-center gap-3 font-nunito text-base font-semibold text-white"
        >
          <MailIcon className="shrink-0" />
          hello@grafixy.io
        </a>
        <p className="inline-flex items-center gap-3 font-nunito text-base font-semibold text-white sm:text-lg">
          <LocationIcon className="shrink-0" /> 43/359 H, 2nd Floor, Sabu Plaza,
          Calicut Road, Thurakkal, Manjeri
        </p>
      </div>

      <div className="flex items-center justify-center bg-[#27065A] px-8 py-4 font-nunito text-[80%] text-white sm:text-xs">
        <p>© By Speakerbox Media LLP. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
