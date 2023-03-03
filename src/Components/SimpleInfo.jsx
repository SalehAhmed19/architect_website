import React from "react";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { RxClock } from "react-icons/rx";

const SimpleInfo = () => {
  const data = [
    { _id: 1, title: "home@tractor.com", des: "Send us a message", icon: "" },
    {
      _id: 2,
      title: "Mon - Fri: 09:00 - 17:00",
      des: "Support 24/7",
      icon: "",
    },
    { _id: 3, title: "183 Parkways, CA, USA", des: "Office Address", icon: "" },
    { _id: 4, title: "(+880)000.000.000", des: "Give us a call", icon: "" },
  ];
  return <div></div>;
};

export default SimpleInfo;
