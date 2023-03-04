import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/Innovation.css";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import icon4 from "../Assets/icon4.png";
import InnovationCard from "./InnovationCard";
import { Fade, Zoom } from "react-reveal";

const Innovation = () => {
  const data = [
    { _id: 1, icon: icon1, des1: "Automotive", des2: "Manufacturing" },
    { _id: 2, icon: icon2, des1: "Industrial", des2: "Constructions" },
    { _id: 3, icon: icon3, des1: "Chemical", des2: "Research Industry" },
    { _id: 4, icon: icon4, des1: "Metropolitan", des2: "Constructions" },
    { _id: 5, icon: icon1, des1: "Automotive", des2: "Manufacturing" },
    { _id: 6, icon: icon2, des1: "Industrial", des2: "Constructions" },
    { _id: 7, icon: icon3, des1: "Chemical", des2: "Research Industry" },
    { _id: 8, icon: icon4, des1: "Metropolitan", des2: "Constructions" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div className="bg-[#F7F7F7] p-24">
      <Fade down>
        <h2 className="text-center font-bold text-4xl">
          Delivering Innovation{" "}
          <span className="text-[#D0041D]">Sustainability.</span>
        </h2>
      </Fade>
      <div className="my-10 lg:mx-10">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {data.map((d) => (
              <div
                key={d._id}
                className="keen-slider__slide bg-[#fff] relative hover-effect"
              >
                <Zoom>
                  <InnovationCard d={d} />
                </Zoom>
                <div className="h-[5px] w-full hover-active absolute bottom-0"></div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
      <Fade up>
        <p className="text-center lg:mx-64 text-[#878787]">
          Our industry professionals are able to deliver better ideas and
          solutions embedded with a deep understanding of each client’ business
          and industry. The industry focus of our experts allows us to offer
          comprehensive solutions
        </p>
      </Fade>
    </div>
  );
};

export default Innovation;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
