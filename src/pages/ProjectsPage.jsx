import React, { useRef } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import Header2 from "../layout/Header2";
import Karakoy from "../images/Feedback/Karakoy.jpeg";
import Arnavutkoy from "../images/Feedback/Arnavutkoy.jpeg";
import Dolmabahce from "../images/Feedback/Dolmabahce.jpeg";
import { Link } from "lucide-react";

const ProjectsData = [
  {
    id:1,
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    id:2,
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    id:3,
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  },
    {
      id:4,
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    id:5,
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    id:6,
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  },
    {
      id:7,
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    id:8,
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    id:9,
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
  }
];

function ProjectsPage() {
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
      <section className="flex flex-wrap m-20 justify-between items-center">

      {ProjectsData.map((project) => {
        return (
              <Link key={project.id} to={`/projects/${project.id}`} className="flex flex-row mb-20 md:ml-10">
                <div className="shadow-md sm:w-96 w-72 md:w-[20rem] bg-[#FAFAFA]">
                  <div className="h-48 md:h-64 relative">
                    <img
                      src={project.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-7 text-left sm:h-[12rem] h-[12rem] md:h-36 flex flex-col justify-between">
                    <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
                      {project.comment}
                    </p>
                    <div className="flex flex-row justify-between mt-7">
                      <div className="flex flex-row text-[#98B8DF]">
                        <i className="fa-solid fa-chart-line"></i>
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1 text-right">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </Link>
        );
      })}
    </section>
    </div>
  );
}

export default ProjectsPage;
