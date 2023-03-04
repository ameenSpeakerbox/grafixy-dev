import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import mangeTrello from '../../images/how_it_works/mange with trello.webp';
import mangeTrelloMobile from '../../images/how_it_works/mange with trello mobile.webp';

const ManageWithTrello = () => {
  return (
    <div className="w-screen  bg-[#18003F] px-8 py-10 sm:px-[80px] sm:py-16 2xl:px-[147px] 2xl:py-20 ">
      <div className="mx-auto grid max-w-[1440px] place-content-center gap-10 sm:grid-cols-2">
        <div className="grid place-content-center justify-start">
          <h1 className="text-[28px] font-medium leading-[120%] tracking-[-2%] text-white sm:text-4xl ">
            Manage your projects <br /> easily with trello
          </h1>

          {/* mobile picture */}
          <div className="mt-7 flex h-full w-full items-center justify-center sm:hidden">
            <MainImage
              src={mangeTrelloMobile}
              alt="pic"
              loading="lazy"
              width={100}
              height={100}
              className=" h-full max-h-[320px] w-full object-contain"
            />
          </div>
          {/*  */}
          <p className="mt-10 max-w-[675px] font-nunito text-base leading-[150%] text-[#E0CCFF] sm:mt-5 sm:text-lg sm:leading-[150%]">
            At Grafixy, we use Trello to manage all of our clients' design
            projects, ensuring that every project runs smoothly and efficiently.
            Trello is a versatile project management tool that allows us to keep
            track of the progress of each project and stay organized. With
            Trello, we can create boards for each project, add tasks, set
            deadlines, and assign team members to specific tasks. <br />
            <br />
            Our clients can access their project boards at any time and see the
            progress of their designs. This helps them to stay involved and
            informed about the status of their project, and provides a
            convenient way for them to communicate with us and provide feedback.
            Trello also allows us to keep all project-related information and
            files in one place, making it easy to reference and retrieve as
            needed.
          </p>
        </div>
        <div className="hidden h-full w-full items-center justify-center sm:flex">
          <MainImage
            src={mangeTrello}
            alt="pic"
            loading="lazy"
            width={100}
            height={100}
            className="h-full max-h-[425px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageWithTrello;
