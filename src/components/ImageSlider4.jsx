import React, { useState } from "react";
import Karakoy from "../images/Feedback/Karakoy.jpeg";
import Arnavutkoy from "../images/Feedback/Arnavutkoy.jpeg";
import Dolmabahce from "../images/Feedback/Dolmabahce.jpeg";

const ImageSliderData4 = [
  {
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  },
    {
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  },
    {
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  }
];

const ImageSlider4 = () => {
  

  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col items-center justify-center md:items-start">
        <h2 className="text-lg font-bold text-[#98B8DF] mb-3">
          OUR HAPPY CLIENTS
        </h2>
        <div className="vertical-line2 mb-1 md:ml-20"></div>
        <h2 className="text-5xl font-bold mx-5 mt-1 text-[#39405A] mb-12 md:w-64 md:mx-0 md:text-left">
          Travelers Notes
        </h2>
      </div>

      {ImageSliderData4.map((slide) => {
        return (
              <div className="flex flex-row md:ml-10">
                <div className="shadow-md sm:w-96 w-72 md:w-[20rem] bg-[#FAFAFA]">
                  <div className="h-48 md:h-64 relative">
                    <img
                      src={slide.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-7 text-left sm:h-[12rem] h-[12rem] md:h-36 flex flex-col justify-between">
                    <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
                      {slide.comment}
                    </p>
                    <div className="flex flex-row justify-between mt-7">
                      <div className="flex flex-row text-[#98B8DF]">
                        <i className="fa-solid fa-chart-line"></i>
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1 text-right">
                          {slide.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider4;
