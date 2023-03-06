import { Link, Script } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { trialPlan } from '../../lib/dummyData';
import { Button } from '../../ui/Button';
import { TickIcon } from '../../ui/Icon';

const FitForBusinesses = () => {
  return (
    <>
      <Script
        src="https://js.chargebee.com/v2/chargebee.js"
        data-cb-site="speakerbox"
      />
      <div className="flex  w-full flex-col tab:flex-row">
        <div className="flex shrink-0 flex-col items-start justify-center bg-[#210153] py-11 pl-8 pr-16 pb-0 sm:pl-14 md:pl-[50px] lg:pl-[70px] xl:pl-[100px] tab:w-[35%]  tab:py-0 ">
          <h2 className="shrink-0  text-3xl font-medium leading-[110%] text-white sm:text-4xl 2xl:text-5xl">
            Fit for businesses of
            <br />
            all sizes
          </h2>
          <p className="mt-[15px] font-nunito leading-6 tracking-[1px] text-white sm:text-lg lg:text-xl 2xl:text-2xl 2xl:leading-[35px]">
            For Individuals, Small Businesses & FreelancersFor Individuals,
            Small Businesses & Freelancers
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center  justify-center bg-[#210153] py-5 px-8 pb-11 sm:px-14 lg:px-20 2xl:px-32 tab:bg-white tab:py-14 tab:pb-11">
          <div className="flex w-full justify-center tab:mt-0">
            <h2 className="text-center text-xl font-semibold uppercase leading-[100%] text-white lg:text-3xl  lg:leading-[42px] 2xl:text-3xl tab:text-2xl tab:text-[#9C66F0]">
              Start Your <br />
              <span className="text-[#9C66F0] tab:text-[#210153]">
                7 Day Free Trial
              </span>
            </h2>
          </div>

          <div
            className="mt-[25px] flex h-full w-full flex-col items-center justify-center gap-7 sm:mt-[40px] sm:flex-row lg:mt-8 xl:gap-8 2xl:gap-11 
          "
          >
            {trialPlan.map((item) => (
              <div
                key={item.id}
                className="collaboration-hover group relative z-10 grid h-full  w-full max-w-[458px] items-center justify-center overflow-hidden rounded-[15px] bg-[#E0CCFF] px-[36px]  py-[30px] duration-500  xl:px-[50px] xl:py-7 2xl:px-[62px] 2xl:py-8"
              >
                <div className="flex items-center justify-center">
                  <MainImage
                    alt="toy_car"
                    src={item.picture}
                    loading="lazy"
                    className="w-[136px] object-cover sm:w-[110px] lg:w-[150px] 2xl:w-[195px]"
                  />
                </div>
                <h2 className="flex  w-full flex-wrap items-center justify-between text-4xl font-bold text-[#210153] sm:text-2xl lg:flex-nowrap lg:text-3xl group-hover:lg:text-white 2xl:text-4xl">
                  <span>{item.title}</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <small className="text-xl font-extrabold sm:text-2xl">
                      $
                    </small>
                    {item.price}
                  </span>
                </h2>
                <p className="mt-3 font-nunito text-base font-semibold leading-[140%] text-[rgba(32,1,83,0.80)] lg:text-lg lg:leading-[24px] group-hover:lg:text-white 2xl:text-xl">
                  {item.subtitle}
                </p>
                <ul className="mt-3 grid gap-1 lg:mt-3 2xl:mt-5">
                  {item.point.map((point) => (
                    <li
                      key={point.id}
                      className="inline-flex items-center gap-[10px] font-nunito text-sm font-medium text-[#210153]  duration-300 ease-linear lg:text-base group-hover:lg:text-white"
                    >
                      <TickIcon className="h-[7px] w-[7px] duration-300 ease-linear sm:h-[5px] sm:w-[5px] lg:h-[9px] lg:w-[9px] group-hover:lg:fill-white" />{' '}
                      {point.title}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center justify-center">
                  <a
                    href="javascript:void(0)"
                    data-cb-type="checkout"
                    data-cb-item-0={
                      item.title === 'Rise'
                        ? 'Grafixy-Rise-USD-Monthly'
                        : 'Grafixy-Grow-USD-Monthly'
                    }
                    data-cb-item-0-quantity="1"
                    className="mt-7 flex h-12 shrink-0 items-center justify-center rounded-full bg-[#210153] px-5 text-sm font-bold leading-3 text-white drop-shadow-2xl duration-300 ease-linear sm:text-[10px] lg:mt-8 lg:px-[30px] lg:text-sm group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] 2xl:h-16 2xl:text-lg"
                  >
                    Start your free trial
                  </a>
                  <Link
                    type="button"
                    onClick={() =>
                      window !== undefined && window.scrollTo(0, 0)
                    }
                    to="pricing"
                    className="mt-[10px] border-none bg-transparent font-nunito text-sm font-bold text-[#210153] outline-none duration-300 ease-linear group-hover:lg:text-white"
                  >
                    More details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 block w-full text-center text-xl font-semibold uppercase leading-7 text-[#6E3CBC] sm:text-2xl">
            Do you need
            <br className="block tab:hidden" />{' '}
            <span className="text-white  tab:text-[#210153]">
              a custom plan?
            </span>{' '}
            <br />
            <Button
              link="https://calendly.com/grafixy-demo/grafixy-demo-session"
              target="_blank"
              className="relative z-10 mt-[10px] grid h-12 place-content-center overflow-hidden rounded-full bg-[#6019CE] py-1 px-6 text-sm font-medium leading-10 text-white shadow-xl after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#6E3CBC] after:duration-300 after:ease-in hover:after:left-0 tab:bg-[#210153]"
              name="TALK TO SALES"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default FitForBusinesses;
