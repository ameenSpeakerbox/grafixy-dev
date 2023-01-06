import React from "react";
import { Button } from "../../ui/Button";

const GetDemo = () => {
  return (
    <div className=" flex w-full my-20 h-auto">
      <div className="py-[70px] px-[122px] rounded-full bg-black ">
        <h1 className="font-medium text-6xl text-white ">
          <span className="opacity-[.65] text-[#E0CCFF]"> Ready to try</span>{" "}
          Grafixy?
        </h1>
        <p className="font-nunito font-semibold  text-2xl text-[#E0CCFF]">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly. Grafixy makes it incredibly.
        </p>
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default GetDemo;
