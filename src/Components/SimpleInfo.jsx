import React, { useState } from "react";
import {
  CiLocationOn,
  CiPhone,
  CiMail,
  CiClock2,
  CiSearch,
} from "react-icons/ci";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/SimpleInfo.css";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { Zoom } from "react-reveal";

const SimpleInfo = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 15,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const data = [
    {
      _id: 1,
      title: "home@tractor.com",
      des: "Send us a message",
      icon: <CiMail />,
    },
    {
      _id: 2,
      title: "Mon - Fri: 09:00 - 17:00",
      des: "Support 24/7",
      icon: <CiClock2 />,
    },
    {
      _id: 3,
      title: "183 Parkways, CA, USA",
      des: "Office Address",
      icon: <CiLocationOn />,
    },
    {
      _id: 4,
      title: "(+880)000.000.000",
      des: "Give us a call",
      icon: <CiPhone />,
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="flex pt-[110px] mx-20">
        <div ref={sliderRef} className="keen-slider">
          {data.map((d) => (
            <div className="keen-slider__slide p-7 flex items-center w-full">
              <Zoom>
                <h3 className="text-4xl text-[#D0011C] mx-4">{d.icon}</h3>
                <div>
                  <h4 className="font-bold">{d.title}</h4>
                  <h4 className="text-[#878787]">{d.des}</h4>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Search>
            <SearchIconWrapper>
              <CiSearch className="text-2xl" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </div>
    </div>
  );
};

export default SimpleInfo;
