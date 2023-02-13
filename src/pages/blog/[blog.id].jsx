import { MainImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout/layout";
import facebookIcon from "../../images/elements/facebook.svg";
import whatsappIcon from "../../images/elements/whatsapp.svg";
import instagramIcon from "../../images/elements/instagram.svg";
import linkedinIcon from "../../images/elements/linkedin.svg";
import headerImg from "../../images/single blog header image.webp";

const index = () => {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center  2xl:px-[147px] sm:px-[80px] px-8 pt-40 flex-col bg-[#1A0143] pb-16">
        <div className="grid lg:grid-cols-2 w-full items-center justify-center lg:gap-20 gap-10 ">
          <div>
            <h1 className="font-medium text-4xl leading-[110%] text-[#E0CCFF]">
              At the heart of branding lies a journey of self-discovery.
            </h1>
            <div className="flex items-center justify-center gap-3 w-max mt-4 mb-4">
              <span className="bg-[#9C66F0] text-black text-xs px-2 py-1 rounded-md">
                #branding
              </span>
              <span className="bg-[#9C66F0] text-black text-xs px-2 py-1 rounded-md">
                #design
              </span>
              <span className="bg-[#9C66F0] text-black text-xs px-2 py-1 rounded-md">
                #agency
              </span>
            </div>
            <p className="text-2xl font-nunito leading-[120%] tracking-[-1%] text-[#EADDFF]  lg:block hidden">
              A brand’s identity is the visual expression of a brand that is
              communicated to the outside world, and includes its name, logo,
              communications, and visual appearance. A brand identity creates an
              emotional connection and reflects the brand positioning and
              desired image.
            </p>
          </div>
          <div className="grid place-content-center max-w-[753px] rounded-[27px] overflow-hidden">
            <MainImage
              src={headerImg}
              alt="img"
              width={100}
              height={100}
              loading="lazy"
              className="object-contain object-center h-full w-full"
            />
          </div>
        </div>
        <div className="blog--single__bottom">
          <p className="text-2xl font-nunito leading-[120%] tracking-[-1%] text-[#EADDFF] block lg:hidden mt-11">
            A brand’s identity is the visual expression of a brand that is
            communicated to the outside world, and includes its name, logo,
            communications, and visual appearance. A brand identity creates an
            emotional connection and reflects the brand positioning and desired
            image.
          </p> <br />
          <p className="text-2xl font-nunito leading-[120%] tracking-[-1%] text-[#EADDFF] lg:mt-11 ">
            Our branding services are tried and tested, yet flexible enough to
            accommodate your unique and optimum needs. By adopting a strong
            brand strategy and digital marketing plan, we facilitate a strong
            connect between your consumers and your brand, ultimately leading to
            a better brand experience and improved brand recall.
          </p>
          <h2 className="text-4xl font-bold leading-[100%] tracking-[-1%] text-[#9C66F0] mt-11">What you can expect from the team?</h2>
          <p className="text-2xl font-nunito leading-[120%] tracking-[-1%] text-[#EADDFF] mt-4">
            Our research team will study your brand, rediscover its core tenets,
            and reintegrate its identity. We will then repackage and reposition
            your brand in a manner that complements your company’s futuristic
            vision and strategic goals. Our strategic design and communication
            team get on the job, and rake up a series of impressive creatives
            that are bound to captivate and stimulate your consumer group.
          </p>
          <div className="inline-flex items-center justify-center text-[22px] leading-[122%] tracking-[-1%] text-white mt-12 gap-4">
            Share it on:&nbsp;&nbsp;
            <button name="button" type="button" className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md">
              <MainImage src={whatsappIcon} alt="whats app" loading="lazy" />
            </button>
            <button name="button" type="button" className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md">
              <MainImage src={linkedinIcon} alt="whats app" loading="lazy" />
            </button>
            <button name="button" type="button" className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md">
              <MainImage src={facebookIcon} alt="whats app" loading="lazy" />
            </button>
            <button name="button" type="button" className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md">
              <MainImage src={instagramIcon} alt="whats app" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
