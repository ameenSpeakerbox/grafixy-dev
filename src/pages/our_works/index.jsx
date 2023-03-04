import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import GetDemo from '../../components/GetDemo';
import Layout from '../../components/layout/layout';
import MainParts from '../../components/our_works/MainParts';
import headerImg from '../../images/our_works/ourWorks_heder.png';

const index = () => {
  return (
    <div className="mx-auto grid w-full max-w-[2560px] bg-[#1A0143] ">
      <Layout>
        <div className="relative z-10 flex h-[420px] w-full flex-col items-center justify-end px-8 text-center sm:h-[450px] hight600:max-h-[80vh]">
          <MainImage
            src={headerImg}
            alt="header"
            className="absolute -z-10 h-full w-full object-cover"
          />
          <h1 className="text-3xl font-medium leading-none text-[#D5BAFF] sm:text-4xl lg:text-5xl ">
            A perfect fit for <br /> <span>agencies</span> &{' '}
            <span className="text-white">brands</span>
          </h1>
          <p className="mt-5 mb-16 w-[90%] text-lg leading-[125%] text-white sm:w-[50%] sm:text-xl">
            Invite team members and clients to help you make and manage designs
            at no extra cost. Easy integration into slack and microsoft teams.
          </p>
        </div>
        <MainParts />
        <GetDemo />
      </Layout>
    </div>
  );
};

export default index;
