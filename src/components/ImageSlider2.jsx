import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider2 = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.imageSlider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.imageSlider) || props.imageSlider.length <= 0) {
    return null;
  }

  const ArrowButton = ({ direction, handleClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      size="3x"
      className="text-[#A37A55] hover:text-[#D8D3CB] mt-36 opacity-75"
      onClick={handleClick}
    />
  );

  return (
    <section>
      {props.imageSlider.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex items-center justify-center w-screen relative h-screen md:h-[46rem] index-0">
                <div className="flex flex-col absolute sm:w-[23rem] w-[18rem] md:w-[70rem] md:text-left md:mt-10 index-0">
                  <div className="flex justify-between index-0">
                    <ArrowButton direction="left" handleClick={prevSlide} />
                    <ArrowButton direction="right" handleClick={nextSlide} />
                  </div>
                  <div>
                    <h2 className="text-4xl text-[#D8D3CB] mt-64 md:text-5xl md:mt-48">
                      {slide.title}
                    </h2>
                  </div>
                </div>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider2;
