import { LocationIcon, MailIcon } from "../../ui/Icon";
import React from "react";
import { footerLinks } from "../../lib/dummyData";
import { Link } from "gatsby";
import logo from "../../images/logo-dark.png";


const Footer = () => {
  return (
    <footer className="grid w-full overflow-hidden">
      <div className="bg-[#E0CCFF] 2xl:pt-[73px] lg:pt-16 sm:pt-10 pt-8  lg:pb-[50px] sm:pb-11 pb-8  flex items-center lg:flex-row flex-col justify-between px-8 flex-wrap gap-4 gap-y-12">
        <div className=" grid place-content-start sm:place-content-center place-items-center flex-1 w-full">
          <img
            src={logo}
            alt="logo"
            className="lg:h-[75px] sm:h-[43px] h-[37px] object-contain"
          />
        </div>
        <div className="flex  sm:gap-[98px] gap-10 flex-1 sm:justify-around justify-between sm:flex-nowrap flex-wrap w-full">
          {footerLinks.map((link) => (
            <ul key={link.id} className="flex flex-col gap-5">
              <h3 className="text-[#6E3CBC] font-extrabold text-xl font-nunito">
                {link.title}
              </h3>
              <li className="grid gap-[10px]">
                {link.subtitle.map((text) => (
                  <Link 
                  to={`/${text.slug}`}
                    key={text.id}
                    className="font-semibold text-xl text-[#6E3CBC] cursor-pointer font-nunito"
                  >
                    {text.title}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="bg-[#41118C] flex items-center lg:justify-center justify-start lg:gap-[100px] gap-4 lg:h-[80px] px-8 flex-wrap lg:py-0 py-5 ">
        <a
          href=""
          className="inline-flex items-center gap-3 text-white font-nunito font-semibold text-xl"
        >
          <MailIcon  className='shrink-0'/>
          hello@grafixy.io
        </a>
        <p className="inline-flex items-center font-nunito font-semibold text-xl text-white gap-3">
          <LocationIcon className='shrink-0'/> 43/359 H, 2nd Floor, Sabu Plaza, Calicut Road,
          Thurakkal, Manjeri
        </p>
      </div>

      <div className="bg-[#27065A] flex items-center lg:justify-center text-white font-nunito text-xl h-[80px] px-8">
        <p>© By Speakerbox Media LLP. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
