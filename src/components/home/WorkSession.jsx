import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Work_Session_InstagramPost } from '../../lib/dummyData';
import { Button } from '../../ui/Button';
import { BookmarkIcon, CommentIcon, LikeIcon, ShareIcon } from '../../ui/Icon';
import { fadeAnim } from '../../lib/motions';
import { MainImage } from 'gatsby-plugin-image';

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
    <div className="grid h-min w-full sm:max-h-screen sm:grid-cols-2 hightUt900:h-full ">
      <div className="flex flex-col items-center justify-center bg-[#6019CE] from-[#220058] to-[#100028] py-10 px-8 pt-11 sm:bg-gradient-to-l sm:py-14  sm:px-9 sm:pt-0 md:px-10 lg:px-[100px] lg:py-20 2xl:px-[160px] 2xl:pl-[147px]">
        <React.Fragment>
          <motion.span
            initial="hide"
            animate="show"
            exit="hide"
            variants={fadeAnim}
            className={`animateInst flex max-h-[50vh] max-w-[625px] flex-col items-center justify-center`}
          >
            <MainImage
              src={Work_Session_InstagramPost[autoCount]?.post}
              alt={'item.subtitle'}
              width={100}
              height={100}
              loading="eager"
              className="h-full max-h-[420px] w-full object-contain"
            />
            <span className={`mt-5 flex w-full justify-between `}>
              <div className="flex items-center justify-center gap-6">
                <LikeIcon
                  style={{
                    fill: `${Work_Session_InstagramPost[autoCount]?.color}`,
                  }}
                  className="h-[22px] w-[22px] lg:h-[38px] lg:w-[38px] "
                />
                <CommentIcon className="h-[22px] w-[22px] lg:h-[38px] lg:w-[38px] " />
                <ShareIcon className="h-[22px] w-[22px] lg:h-[38px] lg:w-[38px] " />
              </div>
              <BookmarkIcon
                style={{
                  fill: `${Work_Session_InstagramPost[autoCount]?.color}`,
                }}
                className="h-[22px] w-[22px] lg:h-[38px] lg:w-[38px] "
              />
            </span>
          </motion.span>
          <h2
            className={`block pt-7 
             text-center text-2xl font-semibold text-white sm:pt-[50px] lg:text-4xl `}
          >
            We Design
          </h2>
          <h2
            style={{ color: `${Work_Session_InstagramPost[autoCount]?.color}` }}
            className="
              block
            text-center 
            text-2xl font-medium  lg:text-4xl"
          >
            {Work_Session_InstagramPost[autoCount]?.subtitle}
          </h2>
        </React.Fragment>
      </div>
      <div className="flex h-full flex-col justify-center gap-10 px-8 py-8 sm:px-9 sm:py-12 sm:pb-[64px] md:px-10 lg:gap-16 lg:px-[60px] 2xl:gap-[74px] 2xl:px-[82px]">
        <div>
          <h2 className="text-3xl font-medium  leading-none text-[#1D0149] lg:text-4xl">
            A perfect fit for <br />{' '}
            <span className="text-[#6019CE]">agencies</span> &{' '}
            <span className="text-[#6019CE]">brands</span>
          </h2>
          <p className="mt-2 w-[70%] font-nunito text-base  leading-[120%] text-[#1E014C] lg:text-lg 2xl:text-xl">
            Grafixy makes it incredibly easy to set up or scale your design
            team. Stress-free outsourcing. Create unlimited projects for just a
            flat monthly rate.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-medium  leading-none text-[#1D0149] lg:text-4xl">
            {' '}
            <span className="text-[#6019CE]">
              Easy collaboration <br />
            </span>{' '}
            with your team.
          </h2>
          <p className="mt-2 w-[70%] font-nunito text-base leading-[120%] text-[#1E014C] lg:text-xl 2xl:text-2xl">
            Invite team members and clients to help you make and manage designs
            at no extra cost. Easy integration into slack and microsoft teams.
          </p>
          <div className="mt-7 flex items-center gap-3  ">
            <Button
              name="SEE OUR WORK"
              link="our_works"
              className="relative z-10 inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#6019CE] px-5 text-sm text-white after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#19013F] after:duration-300 after:ease-in hover:after:left-0 sm:w-auto sm:px-8 lg:h-16 lg:text-lg"
            />
            <Button
              name="SEE PRICING"
              link="pricing"
              className="relative z-10 flex h-12 shrink-0 items-center justify-center  overflow-hidden rounded-full bg-[#19013F] px-5 text-sm text-white after:absolute after:-left-[100%] after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#6019CE] after:duration-300 after:ease-in hover:after:left-0 sm:w-auto sm:px-8 lg:h-16 lg:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSession;
