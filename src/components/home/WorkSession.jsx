import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Work_Session_InstagramPost } from "../../lib/dummyData";
import { BookmarkIcon, CommentIcon, LikeIcon, ShareIcon } from "../../ui/Icon";

const WorkSession = () => {
  const postId = 4;
  const filter = Work_Session_InstagramPost.filter(
    (item) => item.id === postId && item,
  );
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="bg-gradient-to-l to-[#100028] from-[#220058]  py-[93px] px-[160px] ">
        {filter.map((item) => (
          <>
            <span className="flex flex-col items-center justify-center">
              <img src={item.post} alt={item.subtitle} loading="lazy" height={525} width={525}/>
              <span
                className={` ${
                  item.id === postId ? "flex" : "hidden"
                } justify-between w-full mt-5 `}
              >
                <div className="flex gap-6 items-center justify-center">
                  <LikeIcon style={{ fill: `${item.color}` }} />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <BookmarkIcon style={{ fill: `${item.color}` }} />
              </span>
            </span>
            <h2 className="font-semibold text-5xl text-center text-white mt-8 leading-none">
              {item.title}
            </h2>
            <h2
              style={{ color: `${item.color}` }}
              className={`font-medium text-5xl text-center leading-none `}
            >
              {item.subtitle}
            </h2>
          </>
        ))}
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default WorkSession;
