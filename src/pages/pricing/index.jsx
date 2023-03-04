import React from 'react';
import Layout from '../../components/layout/layout';
import GetDemo from '../../components/GetDemo';
import { pricingData } from '../../lib/dummyData';
import { MainImage } from 'gatsby-plugin-image';
import { TickIcon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import toy_train from '../../images/home/toy train.webp';
import { Script } from 'gatsby';

const index = () => {
  return (
    <>
      <div className="bg-[#18003F]">
        <Layout>
          <div className="flex w-full flex-col items-center justify-center bg-[#18003F] px-8 pt-10  sm:px-[80px] sm:pt-36 lg:pt-40 2xl:px-[147px]">
            <h1 className="text-center text-3xl font-bold tracking-[-2%] text-[#E0CCFF] sm:text-4xl">
              Simple Pricing, No Hidden Costs
            </h1>
            <p className="mt-2 font-nunito text-base text-white sm:mt-4 sm:text-2xl">
              Always know what you’ll pay.
            </p>

            {/* pricing */}
            <div
              className="mt-[25px] grid  h-full max-w-[1320px] gap-7 sm:mt-[40px] sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3 xl:gap-8 2xl:gap-11
        "
            >
              {pricingData.map((item) => (
                <div
                  key={item.id}
                  className="collaboration-hover group relative z-10 grid h-full  w-full max-w-[366px] items-center justify-center overflow-hidden rounded-[15px] bg-[#E0CCFF] px-[36px]  py-[30px] duration-500  xl:px-[50px] xl:py-7 2xl:px-[62px] 2xl:py-8"
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
                    {item.title === 'Rise' && (
                      <a
                        href="javascript:void(0)"
                        data-cb-type="checkout"
                        data-cb-item-0="Grafixy-Rise-USD-Monthly"
                        data-cb-item-0-quantity="1"
                        className="mt-7 flex h-12 shrink-0 items-center justify-center rounded-full bg-[#210153] px-5 text-sm font-bold leading-3 text-white drop-shadow-2xl duration-300 ease-linear sm:text-[10px] lg:mt-8 lg:px-[30px] lg:text-sm group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] 2xl:h-16 2xl:text-lg"
                      >
                        {item.buttonName}
                      </a>
                    )}
                    {item.title === 'Grow' && (
                      <a
                        href="javascript:void(0)"
                        data-cb-type="checkout"
                        data-cb-item-0="Grafixy-Grow-USD-Monthly"
                        data-cb-item-0-quantity="1"
                        className="mt-7 flex h-12 shrink-0 items-center justify-center rounded-full bg-[#210153] px-5 text-sm font-bold leading-3 text-white drop-shadow-2xl duration-300 ease-linear sm:text-[10px] lg:mt-8 lg:px-[30px] lg:text-sm group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] 2xl:h-16 2xl:text-lg"
                      >
                        {item.buttonName}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="collaboration-hover group relative z-10 grid h-full  w-full max-w-[366px] items-center justify-center overflow-hidden rounded-[15px] bg-[#E0CCFF] px-[36px]  py-[30px] duration-500  xl:px-[50px] xl:py-7 2xl:px-[62px] 2xl:py-8">
                <div className="flex items-center justify-center">
                  <MainImage
                    alt="toy_train"
                    src={toy_train}
                    loading="lazy"
                    className="w-[136px] object-cover sm:w-[110px] lg:w-[150px] 2xl:w-[195px]"
                  />
                </div>
                <div className="grid">
                  <h2 className="flex  w-full flex-wrap items-center justify-center text-4xl font-bold text-[#210153] sm:text-2xl lg:flex-nowrap lg:text-3xl group-hover:lg:text-white 2xl:text-4xl">
                    Enterprise
                  </h2>
                  <p className="mt-3 text-center font-nunito text-base font-semibold leading-[140%] text-[rgba(32,1,83,0.80)] lg:text-lg lg:leading-[24px] group-hover:lg:text-white 2xl:text-xl">
                    Have a specific requirement? Are you a company/agency
                    looking to outsource your design team as per your custom
                    requirements?
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Button
                    link="https://calendly.com/grafixy-demo/grafixy-demo-session"
                    target="_blank"
                    name="Talk to sales"
                    className="mt-7 flex h-12 shrink-0 items-center justify-center rounded-full bg-[#210153] px-5 text-sm font-bold leading-3 text-white drop-shadow-2xl duration-300 ease-linear sm:text-[10px] lg:mt-8 lg:px-[30px] lg:text-sm group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] 2xl:h-16 2xl:text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-50 flex pt-20 sm:pt-32">
            <GetDemo />
          </div>
        </Layout>
      </div>

      <Script
        src="https://js.chargebee.com/v2/chargebee.js"
        data-cb-site="speakerbox"
      />
    </>
  );
};

export default index;
