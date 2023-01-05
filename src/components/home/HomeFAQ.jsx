import { Link } from "gatsby";
import React from "react";
import { faq_home } from "../../lib/dummyData";
import { TickIn_circleIcon } from "../../ui/Icon";

const HomeFAQ = () => {
  return (
    <div className="flex w-full ">
      <div className="bg-[#1A0143] flex flex-col items-start justify-center w-full px-32 place-content-center gap-9 py-52">
        <h2 className="font-semibold text-6xl text-[#6E3CBC]">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="w-full grid gap-10">
          {faq_home.map((item) => (
            <React.Fragment key={item.id}>
              <span className="px-10 py-6 bg-[#1D004E] rounded-[10px] w-full inline-flex justify-between items-center">
                <h4 className="font-nunito font-semibold text-2xl text-[#E0CCFF]">
                  {item.question}
                </h4>
                <TickIn_circleIcon />
              </span>
            </React.Fragment>
          ))}
        </div>
        <Link
          to=""
          className="font-semibold text-[35px] text-[#6E3CBC] underline"
        >
          More from <span className="text-[#E0CCFF] underline">FAQs</span>{" "}
        </Link>
      </div>
      <div className="bg-[#6019CE] pl-[100px] flex flex-col items-end  justify-end w-[35%] relative shrink-0 "></div>
    </div>
  );
};

export default HomeFAQ;
