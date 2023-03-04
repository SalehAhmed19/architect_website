import React from "react";
import hero from "../Assets/hero-img.jpeg";
import { BsCheckLg } from "react-icons/bs";
import { Fade } from "react-reveal";

const Strategies = () => {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Fade left>
          <img className="h-[500px]" src={hero} alt="" />
        </Fade>
      </div>
      <div className="px-5 lg:px-20 lg:pt-14">
        <Fade right>
          <h2 className="text-4xl font-bold my-5">
            International & Global <br />
            <span className="text-[#D0041B]">Strategies.</span>
          </h2>
          <h4 className="text-xl text-[#878787] my-5">
            The internationalization of USA, Asian and Indian firms—trends,
            motivations, and strategy researches
          </h4>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#D0041B]" />
            Satisfaction Value for Money Solutions
          </p>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#D0041B]" />
            Business Accounting Management
          </p>
          <p className="my-5 flex items-center">
            <BsCheckLg className="mr-5 text-[#D0041B]" />
            Inventory Management Tracking System
          </p>
          <button className="bg-[#D0041B] hover-effect px-8 py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
            MORE ABOUT US
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Strategies;
