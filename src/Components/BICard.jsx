import React from "react";

const BICard = ({ d2 }) => {
  return (
    <div className="flex items-center ml-10 mr-40 my-10">
      <img className="w-20 mr-5" src={d2.img} alt="" />
      <div>
        <h4 className="font-bold text-xl">{d2.title}</h4>
        <p className="font-bold text-sm text-[#B6B6B6]">{d2.date}</p>
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default BICard;
