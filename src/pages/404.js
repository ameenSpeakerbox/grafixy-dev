import * as React from 'react';
import Header from '../components/layout/Header';
import bg from '../images/not fond.svg';
import { MainImage } from 'gatsby-plugin-image';

const NotFoundPage = () => {
  return (
    <main className="notFoundPageBgGradient relative z-0 h-screen overflow-hidden">
      <Header />
      <div className="flex h-full items-start justify-center px-8 pt-20 sm:px-[80px] sm:pt-32 lg:pt-40 2xl:px-[147px] ">
        <h1 className="text-center text-4xl font-medium text-[#9C66F0]">
          This page is <span className="text-white">under construction</span>
        </h1>

        <MainImage
          alt="bg"
          src={bg}
          width={100}
          height={100}
          className="absolute bottom-40 -z-10 h-auto w-full max-w-[600px] object-contain object-center sm:bottom-20 lg:bottom-10"
        />
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
