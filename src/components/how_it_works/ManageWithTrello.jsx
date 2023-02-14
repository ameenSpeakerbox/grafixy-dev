import { MainImage } from "gatsby-plugin-image";
import React from "react";
import mangeTrello from '../../images/how_it_works/mange with trello.webp'
import mangeTrelloMobile from '../../images/how_it_works/mange with trello mobile.webp'

const ManageWithTrello = () => {
  return (
    <div className="bg-[#18003F]  2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10 w-screen ">
      <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 place-content-center gap-10">

     <div className="grid place-content-center justify-start">
        <h1 className="sm:text-4xl text-[28px] font-medium leading-[120%] tracking-[-2%] text-white ">Manage your projects <br /> easily with trello</h1>

        {/* mobile picture */}
        <div className="w-full h-full items-center justify-center flex sm:hidden mt-7">
        <MainImage
          src={mangeTrelloMobile}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className=" w-full object-contain h-full max-h-[320px]"
        />
      </div>
      {/*  */}
        <p className="font-nunito sm:text-lg text-base sm:leading-[150%] leading-[150%] text-[#E0CCFF] max-w-[675px] sm:mt-5 mt-10">
          At Grafixy, we use Trello to manage all of our clients' design
          projects, ensuring that every project runs smoothly and efficiently.
          Trello is a versatile project management tool that allows us to keep
          track of the progress of each project and stay organized. With Trello,
          we can create boards for each project, add tasks, set deadlines, and
          assign team members to specific tasks. <br />
          <br />
          Our clients can access their project boards at any time and see the
          progress of their designs. This helps them to stay involved and
          informed about the status of their project, and provides a convenient
          way for them to communicate with us and provide feedback. Trello also
          allows us to keep all project-related information and files in one
          place, making it easy to reference and retrieve as needed.
        </p>
      </div>
      <div className="w-full h-full items-center justify-center sm:flex hidden">
        <MainImage
          src={mangeTrello}
          alt="pic"
          loading="lazy"
          width={100}
          height={100}
          className="max-h-[425px] w-auto object-contain h-full"
        />
      </div>
          </div>
    </div>
  );
};

export default ManageWithTrello;
