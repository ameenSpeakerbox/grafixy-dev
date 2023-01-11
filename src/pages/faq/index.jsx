import React from "react";
import Layout from "../../components/layout/layout";
import { faq } from "../../lib/dummyData";

const index = () => {
  return (
    <Layout>
      <div className="w-full lg:pt-[312px] sm:pt-36 pt-11  bg-[#1A0143] flex flex-col 2xl:pl-[147px] lg:py-[140px] sm:px-[80px] px-8   h-full py-[120px]">
        <h1 className="font-medium 2xl:text-[65px] lg:text-6xl sm:text-5xl text-[45px] leading-none text-[#D5BAFF]">
          A perfect fit for <br />
          <span className="text-white">agencies</span> &{" "}
          <span className="text-white">brands</span>
        </h1>
        <p className="font-semibold sm:text-2xl text-lg text-white font-nunito lg:w-[45%] mt-5 mb-16">
          Invite team members and clients to help you make and manage designs at
          no extra cost. Easy integration into slack and microsoft teams.
        </p>
        <div className="grid w-full 2xl:gap-24 lg:gap-20 sm:gap-16 gap-14">
          {faq.map((item) => (
            <div key={item.id} className="">
              <h2 className="font-bold 2xl:text-[40px] lg:text-[36px] sm:text-3xl text-2xl leading-none text-white 2xl:mb-[30px] lg:mb-7 sm:mb-6 mb-5 uppercase">
                {item.question}
              </h2>
              <div className="grid gap-12">
                {item.answer.map((ans) => (
                  <span key={ans.id} className="">
                    <h4 className="font-nunito 2xl:text-[30px] lg:text-[28px] sm:text-2xl text-xl font-bold text-white 2xl:leading-10 leading-[24px] 2xl:mb-[10px] lg:mb-[9px] sm:mb-[8px] mb-[7px]">
                      {ans.subQuestion}
                    </h4>
                    <p className="2xl:text-2xl lg:text-xl sm:text-lg text-base font-semibold font-nunito text-[rgba(255,255,255,0.7)] lg:w-[60%]">
                      {ans.answer}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
