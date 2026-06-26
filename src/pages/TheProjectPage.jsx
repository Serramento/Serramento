import React, { useRef, useState, useEffect } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header2 from "../layout/Header2";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../pages/ProjectsPage";

function TheProjectPage() {
  const { id } = useParams();

  const project = ProjectsData.find(p => p.id === Number(id));
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
      className="text-[#FFFFFF] hover:text-[#737373] fa-3x opacity-50 cursor-pointer"
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
        {imageSlider.map((project, index) => (
          <div key={index}>
            {index === current && (
              <div className="flex justify-center w-screen relative h-screen md:h-[46rem]">
                <div className="flex flex-col absolute sm:w-[23rem] w-[18rem] mt-24 md:w-[74rem] md:text-left md:mt-60">
                  <div className="flex justify-between">
                    <ArrowButton direction="left" handleClick={prevSlide} />
                    <ArrowButton direction="right" handleClick={nextSlide} />
                  </div>
                </div>
                <img
                  src={project.src}
                  alt={project.alt}
                  className="md:w-[70rem] md:h-[40rem] w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
        <div>{project.comment}</div>
      </section>
    </div>
  );
}

export default TheProjectPage;