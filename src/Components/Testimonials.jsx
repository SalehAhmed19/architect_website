import React, { useState } from "react";
import { TbMessages } from "react-icons/tb";
import avatar1 from "../Assets/avatar1.jpeg";
import avatar2 from "../Assets/avatar2.jpeg";
import avatar3 from "../Assets/avatar3.jpeg";
import avatar4 from "../Assets/avatar4.jpeg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { Fade, Zoom } from "react-reveal";

const Testimonials = () => {
  const data = [
    {
      _id: 1,
      name: "Justin Biber",
      founder: "- Founder Xamarin",
      message:
        "Their services are among the best to be honest. Making everything simple and easy, even for beginners and novices like me and my wife.",
      ratings: 4,
      img: avatar1,
    },
    {
      _id: 2,
      name: "Bryan Freeman",
      founder: "- Founder Xamarin",
      message:
        "Working with @Tractor is like an ever-before experience when people knows what your problem is right when you start to mention it.",
      ratings: 4,
      img: avatar2,
    },
    {
      _id: 3,
      name: "Milanda Moses",
      founder: "- Founder Xamarin",
      message:
        "Here at @Tractor center, you have professional staff to look at your business. All solutions are prompt, precise and accurate.",
      ratings: 4,
      img: avatar3,
    },
    {
      _id: 4,
      name: "David James",
      founder: "- Founder Xamarin",
      message:
        "You know that you have put your business in the hand of the right people when you come to see them at the consultation meeting.",
      ratings: 4,
      img: avatar4,
    },
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
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div className="bg-[#F7F7F7] p-20 py-24" id="testimonials">
      <Fade left>
        <h1 className="text-4xl font-bold flex items-center my-10">
          <TbMessages className="mr-3 text-[#C9C9C9] text-5xl" />
          Happy Customers Said
        </h1>
      </Fade>
      <Fade down>
        <hr />
      </Fade>
      <div className="mt-14 mb-5">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {data.map((d) => (
              <div key={d._id} className="keen-slider__slide">
                <Zoom>
                  <TestimonialCard d={d} />
                </Zoom>
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
        {loaded && instanceRef.current && (
          <div className="dots my-10">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
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
