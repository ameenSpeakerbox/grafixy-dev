import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Work_Session_InstagramPost } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { BookmarkIcon, CommentIcon, LikeIcon, ShareIcon } from "../../ui/Icon";
import { fadeAnim } from "../../lib/motions";
import { MainImage } from "gatsby-plugin-image";

const WorkSession = () => {
  const [autoCount, setAutoCount] = useState(1);

  useEffect(() => {
    if (autoCount >= 0 && autoCount <= Work_Session_InstagramPost.length - 2) {
      setTimeout(() => {
        setAutoCount(autoCount + 1);
      }, 2000);
    } else if (autoCount > Work_Session_InstagramPost.length - 2) {
      setTimeout(() => {
        setAutoCount(0);
      }, 2000);
    }
  }, [autoCount]);

  return (
    <div className="grid sm:grid-cols-2 w-full h-min hightUt900:h-full sm:max-h-screen ">
      <div className="sm:bg-gradient-to-l to-[#100028] from-[#220058] bg-[#6019CE] 2xl:px-[160px] 2xl:pl-[147px] lg:px-[100px] lg:py-20 sm:py-14 py-10 sm:pt-0 pt-11  md:px-10 sm:px-9 px-8 items-center justify-center flex flex-col">
        <React.Fragment>
          <motion.span
            initial="hide"
            animate="show"
            exit="hide"
            variants={fadeAnim}
            className={`flex flex-col items-center justify-center max-w-[625px] max-h-[50vh] animateInst`}
          >
            <MainImage
              src={Work_Session_InstagramPost[autoCount]?.post}
              alt={"item.subtitle"}
              width={512}
              height={512}
              loading="eager"
              className="object-contain w-full h-full"
            />
            <span className={`flex justify-between w-full mt-5 `}>
              <div className="flex gap-6 items-center justify-center">
                <LikeIcon
                  style={{
                    fill: `${Work_Session_InstagramPost[autoCount]?.color}`,
                  }}
                  className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] "
                />
                <CommentIcon className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] " />
                <ShareIcon className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] " />
              </div>
              <BookmarkIcon
                style={{
                  fill: `${Work_Session_InstagramPost[autoCount]?.color}`,
                }}
                className="lg:w-[38px] lg:h-[38px] w-[22px] h-[22px] "
              />
            </span>
          </motion.span>
          <h2
            className={`block font-semibold 2xl:text-5xl
             lg:text-4xl text-2xl text-center text-white sm:pt-[50px] pt-7 `}
          >
            We Design
          </h2>
          <h2
            style={{ color: `${Work_Session_InstagramPost[autoCount]?.color}` }}
            className="
              block
            font-medium 2xl:text-5xl
            lg:text-4xl text-2xl  text-center"
          >
            {Work_Session_InstagramPost[autoCount]?.subtitle}
          </h2>
        </React.Fragment>
      </div>
      <div className="2xl:px-[82px] lg:px-[60px] md:px-10 sm:px-9 px-8 sm:py-12 py-8 flex flex-col justify-center 2xl:gap-[74px] lg:gap-16 gap-10 sm:pb-[64px] h-full">
        <div>
          <h2 className="font-medium text-[#1D0149] 2xl:text-5xl lg:text-4xl text-3xl leading-none">
            A perfect fit for <br />{" "}
            <span className="text-[#6019CE]">agencies</span> &{" "}
            <span className="text-[#6019CE]">brands</span>
          </h2>
          <p className="font-nunito 2xl:text-xl lg:text-lg text-sm  text-[#1E014C] leading-[120%] mt-2 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-[#1D0149] 2xl:text-5xl lg:text-4xl text-3xl leading-none">
            {" "}
            <span className="text-[#6019CE]">
              Easy collaboration <br />
            </span>{" "}
            with your team.
          </h2>
          <p className="font-nunito 2xl:text-2xl lg:text-xl text-sm text-[#1E014C] leading-[120%] mt-2 w-[70%]">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
          <div className="gap-3 flex  mt-7">
            <Button
              name="SEE OUR WORK"
              className="bg-[#6019CE] rounded-full text-white lg:h-16 h-10 inline-flex items-center justify-center shrink-0 lg:text-lg text-sm sm:w-auto "
            />
            <Button
              name="SEE PRICING"
              className="bg-[#19013F] rounded-full px-8 py-[10px] text-white lg:h-16 h-10  shrink-0 lg:text-lg text-sm flex items-center justify-center sm:w-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSession;
