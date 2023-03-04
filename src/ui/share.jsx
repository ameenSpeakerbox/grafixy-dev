import React from 'react';
import facebookIcon from '../images/elements/facebook.svg';
import whatsappIcon from '../images/elements/whatsapp.svg';
import instagramIcon from '../images/elements/instagram.svg';
import linkedinIcon from '../images/elements/linkedin.svg';
import { MainImage } from 'gatsby-plugin-image';

export const ShareItOn = ({ location, blog }) => {
  return (
    <div className="mt-12 inline-flex items-center justify-center gap-4 text-[22px] leading-[122%] tracking-[-1%] text-white">
      Share it on:&nbsp;&nbsp;
      <a
        type="button"
        href={`whatsapp://send?text=${location.href}`}
        data-action="share/whatsapp/share"
        rel="noreferrer"
        target="_blank"
        className="grid h-[35px] w-[35px] place-content-center rounded-md border-none bg-[#9C66F0]"
      >
        <MainImage src={whatsappIcon} alt="whats app" loading="lazy" />
      </a>
      <a
        type="button"
        href={`https://linkedin.com/shareArticle?${location.href}`}
        data-action="share/whatsapp/share"
        rel="noreferrer"
        target="_blank"
        className="grid h-[35px] w-[35px] place-content-center rounded-md border-none bg-[#9C66F0]"
      >
        <MainImage src={linkedinIcon} alt="whats app" loading="lazy" />
      </a>
      <a
        type="button"
        href={`https://www.facebook.com/sharer.php?u=${location.href}?imageurl=${blog?.onePicture.file.url}`}
        data-action="share/whatsapp/share"
        rel="noreferrer"
        target="_blank"
        className="grid h-[35px] w-[35px] place-content-center rounded-md border-none bg-[#9C66F0]"
      >
        <MainImage src={facebookIcon} alt="whats app" loading="lazy" />
      </a>
      <button
        type="button"
        onClick={() => {
          window.confirm(`Copied the link: ${location.href}`) &&
            navigator.clipboard.writeText(location.href);
        }}
        className="grid h-[35px] w-[35px] place-content-center rounded-md border-none bg-[#9C66F0]"
      >
        <MainImage src={instagramIcon} alt="whats app" loading="lazy" />
      </button>
    </div>
  );
};
