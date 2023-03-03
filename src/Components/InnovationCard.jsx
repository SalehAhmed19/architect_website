import React from "react";

const InnovationCard = ({ d }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <img className="w-14" src={d.icon} alt="" />
      <h4 className="text-xl font-bold mt-10">{d.des1}</h4>
      <h4 className="text-xl font-bold">{d.des2}</h4>
    </div>
  );
};

export default InnovationCard;
