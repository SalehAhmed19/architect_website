import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BusinessInnovationCard = ({ d }) => {
  return (
    <div className="shadow-lg pb-7">
      <img src={d.img} alt="" />
      <div className="px-5">
        <p className="font-bold flex justify-between text-sm my-5">
          <span className="text-[#B6B6B6]">{d.date}</span>
          <span className="text-[#D0011C]">{d.topic}</span>
        </p>
        <h3 className="text-xl font-bold my-5">{d.title}</h3>
        <hr />
        <p className="text-[#878787] my-5 text-sm">{d.des}</p>
      </div>
      <div className="h-14 w-14 rounded-full border-2 flex justify-center items-center border-[#D0011C] mx-auto bg-[#F7F7F7] cursor-pointer">
        <BsArrowRight className="text-[#D0011C] text-xl" />
      </div>
    </div>
  );
};

export default BusinessInnovationCard;
