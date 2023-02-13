import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import trello from '../../images/how_it_works/trello.webp'
import slack from '../../images/how_it_works/slack.webp'

const EnablingCollaboration = () => {
  return (
    <div className="bg-white grid grid-cols-2 w-full place-content-center gap-10 2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10">
      <div>
        <h1 className="text-4xl font-medium leading-[120%] tracking-[-2%] text-[#381471] ">
          Enabling Easy <br /> Collaboration
        </h1>
        <p className="font-nunito text-lg leading-[150%] text-[#381471] max-w-[675px] mt-5">
          With Microsoft Teams or Slack, clients can communicate with our
          designers in realtime, share files, and provide feedback on designs.
          This helps to streamline the design process and ensures that all
          parties are on the same page. The platforms also allow us to keep
          track of all conversations and design iterations in one place, making
          it easy to reference and retrieve information as needed.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          modules={[Autoplay]}
          autoplay
          className="mySwiper"
        >
          <SwiperSlide>
            <MainImage
              src={slack}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className="max-h-[425px] w-auto object-contain h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainImage
              src={trello}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className="max-h-[425px] w-auto object-contain h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EnablingCollaboration;
