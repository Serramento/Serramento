import React, { useRef } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header2 from "../layout/Header2";

function TheProjectPage(props) {
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

    const { id } = useParams();

    useEffect(() => { src }, [id]);

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
      {props.imageSlider.map((project, id) => {
        return (
          <div key={id}>
            {index === current && (
              <div className="flex justify-center w-screen relative h-screen md:h-[46rem] index-0">
                <div className="flex flex-col absolute sm:w-[23rem] w-[18rem] mt-24 md:w-[74rem] md:text-left md:mt-60 index-0">
                  <div className="flex justify-between index-0">
                    <ArrowButton direction="left" handleClick={prevSlide} />
                    <ArrowButton direction="right" handleClick={nextSlide} />
                  </div>
                  <div>
                    <h2 className="text-3xl text-[#FFFFFF] opacity-75 mt-24 md:text-4xl md:mt-48">
                      {project.comment}
                    </h2>
                  </div>
                </div>
                <img
                  src={project.src}
                  alt={project.alt}
                  className="md:w-[90rem] md:h-[40rem] w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </section>

    </div>
  );
}

export default TheProjectPage;
