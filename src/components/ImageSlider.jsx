import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.imageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (
    !Array.isArray(props.imageSliderData) ||
    props.imageSliderData.length <= 0
  ) {
    return null;
  }

  const ArrowButton = ({ direction, handleClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      size="xl"
      className="text-[#A37A55] hover:text-white mr-5"
      onClick={handleClick}
    />
  );

  return (
    <section className="">
      {props.imageSliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="w-60 mt-5 md:w-[26rem] md:mr-10 md:text-left md:mt-10">
                  <h5 className={props.css}>{props.title}</h5>
                  <div className={props.css2}>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#D8D3CB] italic">
                      {slide.title}
                    </h2>
                    <h4 className="mt-4 text-lg text-[#C0BABA]">
                      {slide.description}
                    </h4>
                  </div>
                  <div className="ml-5 mb-6">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>
                </div>
                <div className="h-[15rem] w-[15rem] md:h-[18rem] md:w-[18rem] mb-20 md:mb-10 md:mt-20">
                  <img
                    src={slide.src}
                    alt="travel image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
