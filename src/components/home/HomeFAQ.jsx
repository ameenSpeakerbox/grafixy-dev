import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { faq_home } from "../../lib/dummyData";
import QuotationOpener from "../../ui/QuotationOpener";

const HomeFAQ = () => {
  const [questionToggle, setQuestionToggle] = useState("");

  return (
    <div className="flex w-full ">
      <div className="bg-[#1A0143] flex flex-col items-start justify-center w-full px-32 place-content-center gap-9 py-52">
        <h2 className="font-semibold text-6xl text-[#6E3CBC]">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="w-full grid gap-10 duration-300">
          {faq_home.map((item) => (
            <QuotationOpener
              key={item.id}
              questionToggle={questionToggle}
              setQuestionToggle={setQuestionToggle}
              answer={item.answer}
              question={item.question}
            />
          ))}
        </div>
        <Link
          to=""
          className="font-semibold text-[35px] text-[#6E3CBC] underline"
        >
          More from <span className="text-[#E0CCFF] underline">FAQs</span>{" "}
        </Link>
      </div>
      <div className="bg-[#6019CE] pl-[100px] flex flex-col items-end  justify-end w-[35%] relative shrink-0 ">
        <StaticImage src="../../images/home/homeFaq.png" alt="homeFaq" />
      </div>
    </div>
  );
};

export default HomeFAQ;
