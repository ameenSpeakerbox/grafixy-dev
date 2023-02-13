import { MainImage } from "gatsby-plugin-image";
import React from "react";
import mangeTrello from '../../images/how_it_works/mange with trello.webp'

const ManageWithTrello = () => {
  return (
    <div className="bg-[#E0CCFF] grid grid-cols-2 w-full place-content-center gap-10 2xl:px-[147px] sm:px-[80px] px-8 2xl:py-20 sm:py-16 py-10">
      <div>
        <h1 className="text-4xl font-medium leading-[120%] tracking-[-2%] text-[#381471] ">Manage your projects <br /> easily with trello</h1>
        <p className="font-nunito text-lg leading-[150%] text-[#381471] max-w-[675px] mt-5">
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
      <div className="w-full h-full flex items-center justify-center">
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
  );
};

export default ManageWithTrello;
