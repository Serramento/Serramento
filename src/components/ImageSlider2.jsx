import { useState } from "react";
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
      className="text-[#FFFFFF] hover:text-[#737373] fa-3x opacity-50"
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
                <div className="flex flex-col absolute sm:w-[23rem] w-[18rem] mt-24 md:w-[74rem] md:text-left md:mt-60 index-0">
                  <div className="flex justify-between index-0">
                    <ArrowButton direction="left" handleClick={prevSlide} />
                    <ArrowButton direction="right" handleClick={nextSlide} />
                  </div>
                  <div>
                    <h2 className="text-3xl text-[#FFFFFF] opacity-75 mt-24 md:text-4xl md:mt-48">
                      {slide.title}
                    </h2>
                  </div>
                </div>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="md:w-[80rem] md:h-[40rem] w-full h-full object-cover"
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
