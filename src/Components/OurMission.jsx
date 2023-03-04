import React from "react";
import img1 from "../Assets/card-img1.jpeg";
import img2 from "../Assets/card-img2.jpeg";
import OurMissionCard from "./OurMissionCard";

const OurMission = () => {
  const data = [
    {
      _id: 1,
      img: img1,
      title: "Industry Effectiveness Solutions",
      des: "A Company involved in servicing, maintenance and repairs of engines, prime movers…",
    },
    {
      _id: 2,
      img: img2,
      title: "Continuous Improving Approaches",
      des: "Committed to presenting & interpreting corporate organization, change, and innovation.",
    },
  ];
  return (
    <div
      className="flex flex-col lg:flex-row justify-between lg:mx-28 mx-5 py-20"
      id="mission"
    >
      <div>
        <h2 className="text-4xl font-bold">
          Extremely <br /> intellectual & <br />
          challenging <br /> <span className="text-[#D0011C]">projects.</span>
        </h2>
        <button className="bg-[#D0011C] hover-effect px-8 py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
          OUR MISSION
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {data.map((d) => (
          <OurMissionCard key={d._id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default OurMission;
