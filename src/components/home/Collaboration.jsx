import { Link } from "gatsby";
import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { trialPlan } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { TickIcon } from "../../ui/Icon";

const Collaboration = () => {
  return (
    <div className="flex  w-full ">
      <div className="bg-[#210153] pl-[100px] flex flex-col items-start justify-center w-[35%] pr-16 shrink-0">
        <h2 className="font-medium  leading-[110%] text-6xl text-white ">
          Easy collaboration <br />
          <span className="text-[#D4BFF4]">with your team.</span>{" "}
        </h2>
        <p className="text-[22px] leading-[35px] text-white tracking-[1px] mt-[15px] w-3/4">
          For Individuals, Small Businesses & Freelancers For Individuals, Small
          Businesses & Freelancers
        </p>
      </div>
      <div className="py-16 flex flex-col items-center justify-center flex-1 px-32">
        <div className="flex justify-between w-full">
          <h2 className="font-semibold text-4xl leading-[42px] text-[#210153] uppercase">
            Start Your <br />
            <span className="text-[#9C66F0]">7 Day Free Trial</span>
          </h2>
          <p className="font-semibold text-[#6E3CBC] text-2xl leading-7 text-right uppercase">
            Do you need a custom plan? <br />
            <span className="underline text-[#210153] font-medium">
              Talk to sales
            </span>
          </p>
        </div>

        <div
          className="flex items-center justify-center gap-11 w-full mt-[63px]
        "
        >
          {trialPlan.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#E0CCFF] rounded-[15px] px-[62px] py-12 items-center justify-center max-w-[458px]"
            >
              <div className="flex items-center justify-center">
                <MainImage
                  alt="toy_car"
                  src={item.picture}
                  loading="lazy"
                  className="object-cover w-[195px]"
                />
              </div>
              <h2 className="w-full  flex items-center justify-between text-5xl font-bold text-[#210153] ">
                <span>{item.title}</span>
                <span className="flex items-center gap-1 font-semibold">
                  <small className="text-2xl font-extrabold">$</small>
                  {item.price}
                </span>
              </h2>
              <h5 className="mt-4 text-[rgba(32,1,83,0.50)] font-semibold text-[22px] leading-[24px]">
                {item.subtitle}
              </h5>
              <ul className="grid gap-1 mt-7">
                {item.point.map((point) => (
                  <li
                    key={point.id}
                    className="inline-flex items-center gap-[10px] text-[#210153]"
                  >
                    <TickIcon /> {point.title}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center flex-col">
                <Button
                  name="Start your free trial!"
                  className="bg-[#210153] rounded-full h-16 text-white font-bold text-lg mt-8 drop-shadow-2xl"
                />
                <Link className="mt-[10px] font-nunito font-bold text-base">
                  More details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
