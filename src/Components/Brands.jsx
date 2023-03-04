import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/Brands.css";

const Brands = () => {
  const data = [
    {
      _id: 1,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-05.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-05-b.png",
    },
    {
      _id: 2,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-06.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-06-b.png",
    },
    {
      _id: 3,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-09.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-09-b.png",
    },
    {
      _id: 4,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-01.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-01-b.png",
    },
    {
      _id: 5,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-02.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-02-b.png",
    },
    {
      _id: 6,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-03.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-03-b.png",
    },
    {
      _id: 7,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-04.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-04-b.png",
    },
    {
      _id: 8,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-08.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-08-b.png",
    },
    {
      _id: 9,
      img: "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-07.png",
      hover_img:
        "https://tractor.thememove.com/wp-content/uploads/2018/08/cl-07-b.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 5,
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
  return (
    <div className="bg-[#F7F7F7] pb-20 px-14">
      <div ref={sliderRef} className="keen-slider">
        {data.map((d) => (
          <div className="keen-slider__slide flex justify-center items-center">
            <img src={d.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
