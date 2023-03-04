import React from "react";
import img1 from "../Assets/card-img3.jpeg";
import img2 from "../Assets/card-img4.jpeg";
import img3 from "../Assets/card-img5.jpeg";
import img4 from "../Assets/card-img6.jpeg";
import BICard from "./BICard";
import BusinessInnovationCard from "./BusinessInnovationCard";

const BusinessInnovation = () => {
  const data = [
    {
      _id: 1,
      date: "AUG 04, 2018",
      topic: "MATERIAL ENGINEERING",
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      des: "The commerce ministry is in favour of hiking import duty on aluminium…",
      img: img1,
    },
    {
      _id: 2,
      date: "AUG 04, 2018",
      topic: "POWER AND ENERGY",
      title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
      des: "New Delhi: India has challenged the WTO dispute panel's ruling that …",
      img: img2,
    },
  ];
  const data2 = [
    {
      _id: 1,
      date: "AUG 04, 2018",
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      img: img1,
    },
    {
      _id: 2,
      date: "AUG 04, 2018",
      title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
      img: img2,
    },
    {
      _id: 3,
      date: "AUG 04, 2018",
      title: "Default Interest Rate in Small Loans Now is Lowest",
      img: img3,
    },
    {
      _id: 4,
      date: "AUG 04, 2018",
      title: "Why Trump is so clumsy about fighting for ‘Free Trade’",
      img: img4,
    },
  ];
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center">
        360° Business <span className="text-[#D0011C]">Innovation.</span>
      </h2>
      <p className="text-[#878787] lg:mx-40 mx-5 text-center my-5 text-xl">
        It is imperative that everyone follows the policies and guidelines to
        ensure their own <br /> safety and the safety of others around them.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:ml-20 mx-5">
          {data.map((d) => (
            <div className="py-10">
              <BusinessInnovationCard key={d._id} d={d} />
            </div>
          ))}
        </div>
        <div>
          {data2.map((d2) => (
            <BICard key={d2._id} d2={d2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessInnovation;
