import React from "react";
import facebookIcon from "../images/elements/facebook.svg";
import whatsappIcon from "../images/elements/whatsapp.svg";
import instagramIcon from "../images/elements/instagram.svg";
import linkedinIcon from "../images/elements/linkedin.svg";
import { MainImage } from "gatsby-plugin-image";

export const ShareItOn = ({ location, blog }) => {
  return (
    <div className="inline-flex items-center justify-center text-[22px] leading-[122%] tracking-[-1%] text-white mt-12 gap-4">
      Share it on:&nbsp;&nbsp;
      <a
        type="button"
        href={`whatsapp://send?text=${location.href}`}
        data-action="share/whatsapp/share"
        target="_blank"
        className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
      >
        <MainImage src={whatsappIcon} alt="whats app" loading="lazy" />
      </a>
      <a
        type="button"
        href={`https://linkedin.com/shareArticle?${location.href}`}
        data-action="share/whatsapp/share"
        target="_blank"
        className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
      >
        <MainImage src={linkedinIcon} alt="whats app" loading="lazy" />
      </a>
      <a
        type="button"
        href={`https://www.facebook.com/sharer.php?u=${location.href}?imageurl=${blog.onePicture.file.url}`}
        data-action="share/whatsapp/share"
        target="_blank"
        className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
      >
        <MainImage src={facebookIcon} alt="whats app" loading="lazy" />
      </a>
      <button
        type="button"
        onClick={() => {
          window.confirm(`Copied the link: ${location.href}`) &&
            navigator.clipboard.writeText(location.href);
        }}
        className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
      >
        <MainImage src={instagramIcon} alt="whats app" loading="lazy" />
      </button>
    </div>
  );
};
