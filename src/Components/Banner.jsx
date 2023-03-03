import React from "react";
import img from "../Assets/ant-rozetsky-SLIFI67jv5k-unsplash.jpg";
import logo from "../Assets/banner-logo.png";

const Banner = () => {
  return (
    <div
      className="h-screen mb-[100px] flex flex-col justify-center items-center"
      style={{ background: `url(${img})`, backgroundSize: "cover" }}
    >
      <img className="w-20 my-10" src={logo} alt="" />
      <h1 className="text-[#fff] text-xl lg:text-5xl font-bold">
        Helping Industrial Organizations <br />& Businesses Lead the Waves
      </h1>
      <button className="bg-[#fff] px-8 py-4 my-5 text-sm font-bold hover:bg-[#D0041B] hover:text-[#fff]">
        OUR SERVICES
      </button>
    </div>
  );
};

export default Banner;
