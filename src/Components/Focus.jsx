import React from "react";
import img from "../Assets/power-plant.jpg";
import { BsPlayFill } from "react-icons/bs";

const Focus = () => {
  return (
    <div
      className="py-56"
      style={{ background: `url(${img})`, backgroundSize: "cover" }}
    >
      <h2 className="text-[#fff] text-4xl text-center font-bold">
        Focusing on strategic decisions & <br /> practical actions
      </h2>
      <div className="my-10 mx-auto cursor-pointer hover:scale-125 hover:transition-all hover:duration-150 w-20 h-20 flex justify-center items-center border-2 rounded-full">
        <BsPlayFill className="text-2xl text-[#fff]" />
      </div>
    </div>
  );
};

export default Focus;
