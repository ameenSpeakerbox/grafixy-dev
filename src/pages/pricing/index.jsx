import React from "react";
import Layout from "../../components/layout/layout";
import GetDemo from "../../components/GetDemo";
import { pricingData } from "../../lib/dummyData";
import { MainImage } from "gatsby-plugin-image";
import { TickIcon } from "../../ui/Icon";
import { Button } from "../../ui/Button";
import toy_train from "../../images/home/toy train.webp";

const index = () => {
  return (
    <div className="bg-[#18003F]">
      <Layout>
        <div className="bg-[#18003F] w-full 2xl:px-[147px] sm:px-[80px] px-8 lg:pt-40 sm:pt-36 pt-10  flex flex-col items-center justify-center">
          <h1 className="text-[#E0CCFF] sm:text-4xl text-3xl font-bold tracking-[-2%] text-center">
            Simple Pricing, No Hidden Costs
          </h1>
          <p className="font-nunito text-white sm:text-2xl text-base sm:mt-4 mt-2">
            Always know what you’ll pay.
          </p>

          {/* pricing */}
          <div
            className="grid lg:grid-cols-3  sm:grid-cols-2 2xl:gap-11 xl:gap-8 gap-7 h-full lg:mt-[50px] sm:mt-[40px] mt-[25px] max-w-[1320px]
        "
          >
            {pricingData.map((item) => (
              <div
                key={item.id}
                className="w-full bg-[#E0CCFF] rounded-[15px] 2xl:px-[62px] 2xl:py-8 xl:px-[50px]  xl:py-7 px-[36px] py-[30px] items-center duration-500 justify-center max-w-[366px] h-full  relative overflow-hidden  group z-10 collaboration-hover grid"
              >
                <div className="flex items-center justify-center">
                  <MainImage
                    alt="toy_car"
                    src={item.picture}
                    loading="lazy"
                    className="object-cover 2xl:w-[195px] lg:w-[150px] sm:w-[110px] w-[136px]"
                  />
                </div>
                <h2 className="w-full  flex items-center justify-between 2xl:text-4xl lg:text-3xl sm:text-2xl text-4xl font-bold text-[#210153] lg:flex-nowrap flex-wrap group-hover:lg:text-white">
                  <span>{item.title}</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <small className="sm:text-2xl text-xl font-extrabold">
                      $
                    </small>
                    {item.price}
                  </span>
                </h2>
                <h5 className="mt-3 text-[rgba(32,1,83,0.80)] font-semibold 2xl:text-xl lg:text-lg text-base lg:leading-[24px] leading-[140%] group-hover:lg:text-white font-nunito">
                  {item.subtitle}
                </h5>
                <ul className="grid gap-1 2xl:mt-5 lg:mt-3 mt-3">
                  {item.point.map((point) => (
                    <li
                      key={point.id}
                      className="inline-flex items-center gap-[10px] text-[#210153] lg:text-base font-nunito font-medium  text-sm group-hover:lg:text-white duration-300 ease-linear"
                    >
                      <TickIcon className="lg:h-[9px] sm:h-[5px] lg:w-[9px] sm:w-[5px] h-[7px] w-[7px] group-hover:lg:fill-white duration-300 ease-linear" />{" "}
                      {point.title}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center flex-col">
                  {item.title === "Rise" && (
                    <Button
                      name={item.buttonName}
                      link={item.link}
                      className="bg-[#210153] rounded-full 2xl:h-16 h-12 text-white font-bold 2xl:text-lg lg:text-sm sm:text-[10px] text-sm lg:mt-8 mt-7 drop-shadow-2xl shrink-0 flex items-center justify-center lg:px-[30px] px-5 leading-3 group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] duration-300 ease-linear"
                    />
                  )}
                  {item.title === "Grow" && (
                    <a
                      href="javascript:void(0)"
                      data-cb-type="checkout"
                      data-cb-item-0="Grafixy-Grow-USD-Monthly"
                      className="bg-[#210153] rounded-full 2xl:h-16 h-12 text-white font-bold 2xl:text-lg lg:text-sm sm:text-[10px] text-sm lg:mt-8 mt-7 drop-shadow-2xl shrink-0 flex items-center justify-center lg:px-[30px] px-5 leading-3 group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] duration-300 ease-linear"
                    >
                      Start your free trial
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="w-full bg-[#E0CCFF] rounded-[15px] 2xl:px-[62px] 2xl:py-8 xl:px-[50px]  xl:py-7 px-[36px] py-[30px] items-center duration-500 justify-center max-w-[366px] h-full  relative overflow-hidden  group z-10 collaboration-hover grid">
              <div className="flex items-center justify-center">
                <MainImage
                  alt="toy_train"
                  src={toy_train}
                  loading="lazy"
                  className="object-cover 2xl:w-[195px] lg:w-[150px] sm:w-[110px] w-[136px]"
                />
              </div>
              <div className="grid">
                <h2 className="w-full  flex items-center justify-center 2xl:text-4xl lg:text-3xl sm:text-2xl text-4xl font-bold text-[#210153] lg:flex-nowrap flex-wrap group-hover:lg:text-white">
                  Enterprise
                </h2>
                <h5 className="mt-3 text-[rgba(32,1,83,0.80)] font-semibold 2xl:text-xl lg:text-lg text-base lg:leading-[24px] leading-[140%] group-hover:lg:text-white font-nunito text-center">
                  Have a specific requirement? Are you a company/agency looking
                  to outsource your design team as per your custom requirements?
                </h5>
              </div>
              <div className="flex items-center justify-center flex-col">
                <Button
                  name="Talk to sales"
                  className="bg-[#210153] rounded-full 2xl:h-16 h-12 text-white font-bold 2xl:text-lg lg:text-sm sm:text-[10px] text-sm lg:mt-8 mt-7 drop-shadow-2xl shrink-0 flex items-center justify-center lg:px-[30px] px-5 leading-3 group-hover:lg:bg-[#E0CCFF] group-hover:lg:text-[#210153] duration-300 ease-linear"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-32 pt-20 z-50 flex relative">
          <GetDemo />
        </div>
      </Layout>
    </div>
  );
};

export default index;
