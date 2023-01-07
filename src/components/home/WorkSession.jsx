import React, { useEffect, useState } from "react";
import { Work_Session_InstagramPost } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { BookmarkIcon, CommentIcon, LikeIcon, ShareIcon } from "../../ui/Icon";

const WorkSession = () => {
  const [autoCount, setAutoCount] = useState(1);

  useEffect(() => {
    if (autoCount > 0 && autoCount < Work_Session_InstagramPost.length) {
      setTimeout(() => {
        setAutoCount(autoCount + 1);
      }, 5000);
    } else {
      setTimeout(() => {
        setAutoCount(1);
      }, 5000);
    }
  }, [autoCount]);

  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="bg-gradient-to-l to-[#100028] from-[#220058]  pt-[93px] pb-14 2xl:px-[160px] 2xl:pl-[147px] px-[100px] py-[140px] items-center justify-center flex flex-col">
        {Work_Session_InstagramPost.map((item) => (
          <React.Fragment key={item.id}>
            <span className={`${item.id === autoCount ? "flex" : 'hidden'} flex-col items-center justify-center max-w-[525px] animateInst`}>
              <img
                src={item.post}
                alt={item.subtitle}
                loading="lazy"
                className="object-cover"
              />
              <span className={`${item.id === autoCount ? "flex" : 'hidden'} justify-between w-full mt-5 `}>
                <div className="flex gap-6 items-center justify-center">
                  <LikeIcon style={{ fill: `${item.color}` }} />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <BookmarkIcon style={{ fill: `${item.color}` }} />
              </span>
            </span>
            <h2 className={`${item.id === autoCount ? "block" : 'hidden'} font-semibold text-5xl text-center text-white mt-8 leading-none `}>
              {item.title}
            </h2>
            <h2
              style={{ color: `${item.color}` }}
              className={`${item.id === autoCount ? "block" : 'hidden'} font-medium text-5xl text-center leading-none animateInst`}
            >
              {item.subtitle}
            </h2>
          </React.Fragment>
        ))}
      </div>
      <div className="px-[82px] py-[102px] flex flex-col justify-between gap-[74px]">
        <div>
          <h2 className="font-medium text-[#1D0149] text-[65px] leading-none">
            A perfect fit for <br />{" "}
            <span className="text-[#6019CE]">agencies</span> &{" "}
            <span className="text-[#6019CE]">brands</span>
          </h2>
          <p className="font-nunito text-2xl text-[#1E014C] leading-none mt-7 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-[#1D0149] text-[65px] leading-none">
            {" "}
            <span className="text-[#6019CE]">
              Easy collaboration <br />
            </span>{" "}
            with your team.
          </h2>
          <p className="font-nunito text-2xl text-[#1E014C] leading-none mt-7 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
          <div className="gap-3 flex  mt-7 ">
            <Button
              name="SEE OUR WORK"
              className="bg-[#6019CE] rounded-full text-white h-16"
            />
            <Button
              name="SEE PRICING"
              className="bg-[#19013F] rounded-full px-8 py-[10px] text-white h-16"
            />
            `
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSession;
