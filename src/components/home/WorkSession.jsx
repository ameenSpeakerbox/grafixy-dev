import { motion } from "framer-motion";
import { MainImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Work_Session_InstagramPost } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { BookmarkIcon, CommentIcon, LikeIcon, ShareIcon } from "../../ui/Icon";
import { fadeAnim } from "../../lib/motions";

const WorkSession = () => {
  const [autoCount, setAutoCount] = useState(1);

  useEffect(() => {
    if (autoCount > 0 && autoCount < Work_Session_InstagramPost.length) {
      setTimeout(() => {
        setAutoCount(autoCount + 1);
      }, 2000);
    } else {
      setTimeout(() => {
        setAutoCount(1);
      }, 2000);
    }
  }, [autoCount]);

  return (
    <div className="grid sm:grid-cols-2 w-full h-min hightUt900:h-full max-h-screen">
      <div className="bg-gradient-to-l to-[#100028] from-[#220058]  lg:pt-[93px] sm:pt-12  2xl:px-[160px] 2xl:pl-[147px] lg:px-[100px] lg:py-[140px] md:px-10 sm:px-9 px-8 py-14 items-center justify-center flex flex-col sm:pb-14 pb-8">
        {Work_Session_InstagramPost.map((item) => (
          <React.Fragment key={item.id}>
            <motion.span
              initial="hide"
              animate="show"
              exit="hide"
              variants={fadeAnim}
              className={`${
                item.id === 1 ? "flex" : "hidden"
              } flex-col items-center justify-center max-w-[525px] max-h-[40vh] animateInst`}
            >
              <img
                src={Work_Session_InstagramPost[autoCount].post}
                alt={item.subtitle}
                width={512}
                height={512}
                className="object-cover w-full h-full"
              />
            
            </motion.span>
              <span
                className={`${
                  item.id === autoCount ? "flex" : "hidden"
                } justify-between w-full mt-5 `}
              >
                <div className="flex gap-6 items-center justify-center">
                  <LikeIcon
                    style={{ fill: `${item.color}` }}
                    className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] "
                  />
                  <CommentIcon className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] " />
                  <ShareIcon className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] " />
                </div>
                <BookmarkIcon
                  style={{ fill: `${item.color}` }}
                  className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] "
                />
              </span>
            <h2
              className={`${
                item.id === autoCount ? "block" : "hidden"
              } font-semibold lg:text-5xl text-4xl text-center text-white pt-[50px] leading-none `}
            >
              {item.title}
            </h2>
            <h2
              style={{ color: `${item.color}` }}
              className={`${
                item.id === autoCount ? "block" : "hidden"
              } font-medium lg:text-5xl text-4xl  text-center leading-none `}
            >
              {item.subtitle}
            </h2>
          </React.Fragment>
        ))}
      </div>
      <div className="2xl:px-[82px] lg:px-[60px] md:px-10 sm:px-9 px-8 py-[48px] flex flex-col justify-center 2xl:gap-[74px] lg:gap-16 gap-10 pb-[64px]">
        <div>
          <h2 className="font-medium text-[#1D0149] 2xl:text-[65px] lg:text-5xl text-4xl leading-none">
            A perfect fit for <br />{" "}
            <span className="text-[#6019CE]">agencies</span> &{" "}
            <span className="text-[#6019CE]">brands</span>
          </h2>
          <p className="font-nunito 2xl:text-2xl lg:text-xl text-sm  text-[#1E014C] leading-none mt-2 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-[#1D0149] 2xl:text-[65px] lg:text-5xl text-4xl leading-none">
            {" "}
            <span className="text-[#6019CE]">
              Easy collaboration <br />
            </span>{" "}
            with your team.
          </h2>
          <p className="font-nunito 2xl:text-2xl lg:text-xl text-sm text-[#1E014C] leading-none mt-2 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
          <div className="gap-3 flex  mt-7 flex-wrap ">
            <Button
              name="SEE OUR WORK"
              className="bg-[#6019CE] rounded-full text-white lg:h-16 h-10 inline-flex items-center justify-center shrink-0 lg:text-lg text-[10px] sm:w-auto w-[150px]"
            />
            <Button
              name="SEE PRICING"
              className="bg-[#19013F] rounded-full px-8 py-[10px] text-white lg:h-16 h-10  shrink-0 lg:text-lg text-[10px] flex items-center justify-center sm:w-auto w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSession;
