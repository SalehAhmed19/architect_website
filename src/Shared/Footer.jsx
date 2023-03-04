import React from "react";
import logo from "../Assets/footer-logo.png";
import { BsArrowRightShort, BsTelephoneFill } from "react-icons/bs";
import { MdMap, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#222222] text-[#666666] lg:p-20 p-5">
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/4">
          <img src={logo} alt="" />
          <p className="my-10">
            Tractor is a premium WordPress theme embracing predominant features,
            outstanding pre-designed demos, custom page layouts, and responsive
            page building plugins.
          </p>
          <button className="text-[#fff] font-bold text-sm flex items-center">
            SEE MORE <BsArrowRightShort className="text-xl text-[#D0011C]" />
          </button>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">CONTACT US</h5>
          <hr className="border border-[#3D3D3D] mb-5" />
          <p className="flex items-center">
            <MdMap className="text-xl mr-3 my-4 text-[#D0011C]" />
            183 Donato Parkways CA, US
          </p>
          <p className="flex items-center">
            <BsTelephoneFill className="text-xl mr-3 my-4 text-[#D0011C]" />
            (+880)000.000.000
          </p>
          <p className="flex items-center">
            <MdMail className="text-xl mr-3 my-4 text-[#D0011C]" />
            home@businext.com
          </p>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">EXTRA LINKS</h5>
          <hr className="border border-[#3D3D3D] mb-9" />
          <p className="my-3 hover:underline cursor-pointer">Features</p>
          <p className="my-3 hover:underline cursor-pointer">Support</p>
          <p className="my-3 hover:underline cursor-pointer">Services</p>
          <p className="my-3 hover:underline cursor-pointer">History</p>
          <p className="my-3 hover:underline cursor-pointer">Dealers</p>
        </div>
        <div className="lg:w-2/4 mx-5">
          <h5 className="text-[#fff] font-bold mb-5">NEWS LETTER</h5>
          <hr className="border border-[#3D3D3D] mb-9" />
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              className="py-3 px-5 w-full"
            />
            <button
              className="bg-[#D0011C] hover-effect px-10 py-4 my-5 text-sm font-bold text-[#fff] hover:bg-[#fff] hover:text-[#000]"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <p className="mt-10">
        &copy; 2023 All Rights Reserved by Saleh Ahmed Mahin
      </p>
    </div>
  );
};

export default Footer;
