import React, { useRef } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import Header from "../layout/Header";
import PageSerramentoMain from "../layout/PageSerramentoMain";
import Footer from "../layout/Footer";



function SerramentoMainPage() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
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
        <Header
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          contactRef={contactRef}
          info={info}
        />
        <PageSerramentoMain
          aboutUsRef={aboutUsRef}
          contactRef={contactRef}
        />
        <Footer homeRef={homeRef} info={info} />
    </div>
  );
}

export default SerramentoMainPage;
