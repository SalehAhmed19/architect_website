import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurMissionCard = ({ d }) => {
  return (
    <div className="lg:w-[400px] hover:mt-[-10px] hover-effect">
      <img src={d.img} alt="" />
      <h4 className="font-bold my-5">{d.title}</h4>
      <p className="text-[#878787]">{d.des}</p>
      <button className="flex items-center text-[#D0011C] text-xs font-bold border-b-2 my-5">
        SEE MORE <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default OurMissionCard;
