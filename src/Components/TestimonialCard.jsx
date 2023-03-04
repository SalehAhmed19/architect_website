import { Rating } from "@mui/material";
import React from "react";

const TestimonialCard = ({ d }) => {
  return (
    <div className="flex bg-[#fff] p-5 my-5">
      <div>
        <img className="rounded-full w-40" src={d.img} alt="" />
      </div>
      <div className="mx-10">
        <div className="flex items-center my-5">
          <h3 className="font-bold text-xl">{d.name}</h3>
          <p className="text-sm italic mx-2 text-[#888888]">{d.founder}</p>
        </div>
        <Rating name="simple-controlled" value={d.ratings} />
        <p className="my-5">{d.message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
