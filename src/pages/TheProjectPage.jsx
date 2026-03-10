import React, { useRef, Suspense } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Header2 from "../layout/Header2";
import ImageSlider2 from "../components/ImageSlider2";
import { useParams } from "react-router-dom";

function TheProjectPage() {
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
  let { productId } = useParams();
  return (
    <div className="font-lato">
      <Suspense
        fallback={
          <div className="bg-[#98B8DF] w-screen h-screen flex justify-center items-center text-[#FFFFFF] font-montserrat text-3xl">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
            Loading...
          </div>
        }
      >
        <Header2
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
          info={info}
        />
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <ImageSlider2 />
      </section>

      </Suspense>
    </div>
  );
}

export default TheProjectPage;
