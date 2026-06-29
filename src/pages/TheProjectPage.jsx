import React, { useRef, useState, useEffect } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Header2 from "../layout/Header2";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../pages/ProjectsPage";

function TheProjectPage() {
  const { id } = useParams();

  const project = ProjectsData.find((p) => p.id === Number(id));
  const imageSlider = project ? project.imageSlider : [];

  const [current, setCurrent] = useState(0);
  const length = imageSlider.length;

  useEffect(() => {
    setCurrent(0);
  }, [id]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageSlider) || imageSlider.length === 0) {
    return <div>Project not found</div>;
  }

  const ArrowButton = ({ direction, handleClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      className="text-[#A37A55] hover:text-[#D8D3CB] fa-3x cursor-pointer"
      onClick={handleClick}
    />
  );

  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const info = {
    logo: SERRAMENTO_LOGO,
    home: "HOME",
    aboutUs: "ABOUT US",
    services: "PROJECTS",
    contact: "CONTACT",
    videoText: "Travel Dreams Come True",
    contactInfo: "Contact Info",
    mailtoHref:
      "mailto:info@earthlighttravel.com?subject=SendMail&body=Description",
    mail1: "info@earthlighttravel.com",
    turkiye: "TURKIYE",
  };

  return (
    <div className="font-lato">
      <Header2
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        info={info}
      />
      <section>
        {imageSlider.map((image, index) => (
          <div key={index}>
            {index === current && (
              <div>
                <div className="w-full max-w-[70rem] relative mx-auto mt-28 group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block w-full h-auto md:h-[40rem] object-cover"
                  />

                  <div   className="hidden md:block absolute bottom-0 left-0 w-full bg-[#A37A55]/60 text-[#D8D3CB] p-6 opacity-0 group-hover:opacity-100 transition">
                    {project.comment}
                  </div>

                  <div className="absolute inset-0 z-10">
                    <div className="flex h-full items-center justify-between px-4">
                      <ArrowButton direction="left" handleClick={prevSlide} />
                      <ArrowButton direction="right" handleClick={nextSlide} />
                    </div>
                  </div>
                </div>
                <div className="md:hidden w-full bg-[#A37A55]/60 text-[#D8D3CB] p-6">
                  {project.comment}
                </div>
              </div>
            )}
          </div>
      ))}
      </section>
    </div>
  );
}

export default TheProjectPage;
