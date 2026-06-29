import React, { useRef } from "react";
import SERRAMENTO_LOGO from "../images/Serramento/SERRAMENTO_LOGO.png";
import Header2 from "../layout/Header2";
import ATAKUMBUYUKOYUMCA1 from "../images/Projects/ATAKUMBUYUKOYUMCA1.png";
import ATAKUMBUYUKOYUMCA2 from "../images/Projects/ATAKUMBUYUKOYUMCA2.png";
import ATAKUM1 from "../images/Projects/ATAKUM1.png";
import ATAKUM2 from "../images/Projects/ATAKUM2.png";
import ATAKUM3 from "../images/Projects/ATAKUM3.png";
import ATAKUM4 from "../images/Projects/ATAKUM4.png";
import CAKIRLAR1 from "../images/Projects/CAKIRLAR1.png";
import CAKIRLAR2 from "../images/Projects/CAKIRLAR2.png";
import CAKIRLAR3 from "../images/Projects/CAKIRLAR3.png";
import DOKAP1 from "../images/Projects/DOKAP1.png";
import DOKAP2 from "../images/Projects/DOKAP2.png";
import DOKAP3 from "../images/Projects/DOKAP3.png";
import EKINCIK1 from "../images/Projects/EKINCIK1.png";
import EKINCIK2 from "../images/Projects/EKINCIK2.png";
import EKINCIK3 from "../images/Projects/EKINCIK3.png";
import EKINCIK4 from "../images/Projects/EKINCIK4.png";
import GROZNI1 from "../images/Projects/GROZNI1.png";
import GROZNI2 from "../images/Projects/GROZNI2.png";
import GROZNI3 from "../images/Projects/GROZNI3.png";
import GROZNI4 from "../images/Projects/GROZNI4.png";
import GROZNI5 from "../images/Projects/GROZNI5.png";
import INCESU1 from "../images/Projects/INCESU1.png";
import INCESU2 from "../images/Projects/INCESU2.png";
import INCESU3 from "../images/Projects/INCESU3.png";
import INCESU4 from "../images/Projects/INCESU4.png";
import INCESUIC1 from "../images/Projects/INCESUIC1.png";
import INCESUIC2 from "../images/Projects/INCESUIC2.png";
import INCESUIC3 from "../images/Projects/INCESUIC3.png";
import INCESUIC4 from "../images/Projects/INCESUIC4.png";
import INCESUIC5 from "../images/Projects/INCESUIC5.png";
import NILUFER1 from "../images/Projects/NILUFER1.png";
import NILUFER2 from "../images/Projects/NILUFER2.png";
import NILUFER3 from "../images/Projects/NILUFER3.png";
import SUBE1 from "../images/Projects/SUBE1.png";
import SUBE2 from "../images/Projects/SUBE2.png";
import SUBE3 from "../images/Projects/SUBE3.png";
import SUBE4 from "../images/Projects/SUBE4.png";
import SUBE5 from "../images/Projects/SUBE5.png";
import SUBE6 from "../images/Projects/SUBE6.png";
import SULUOVA1 from "../images/Projects/SULUOVA1.png";
import SULUOVA2 from "../images/Projects/SULUOVA2.png";
import SULUOVA3 from "../images/Projects/SULUOVA3.png";
import SULUOVA4 from "../images/Projects/SULUOVA4.png";
import SULUOVA5 from "../images/Projects/SULUOVA5.png";
import SULUOVA6 from "../images/Projects/SULUOVA6.png";
import ConstructionDocuments from "../images/Projects/ConstructionDocuments.png";
import { Link } from "react-router-dom";

export const ProjectsData = [
  {
    id:1,
    comment:
      "This four-story mixed-use residential building was designed to combine commercial activity with comfortable urban living. The ground floor was allocated for retail spaces to enhance street-level vitality, while the upper floors accommodate thoughtfully planned residential apartments. The project emphasizes efficient space utilization, clear circulation, and a contemporary architectural language that integrates seamlessly with the surrounding urban context. The scope of work included architectural design, official permit documentation, detailed implementation drawings, and comprehensive BOQ lists.",
    name: "Buyukoyumca Apartment Project, Atakum/Samsun",
    src: ATAKUMBUYUKOYUMCA1,
    imageSlider: [
    { src: ATAKUMBUYUKOYUMCA1, alt: "ATAKUMBUYUKOYUMCA1" },
    { src: ATAKUMBUYUKOYUMCA2, alt: "ATAKUMBUYUKOYUMCA2" },
  ]
  },
  {
    id:2,
    comment:
      "This interior design project was developed for the living room, open-plan kitchen, and terrace of a penthouse apartment overlooking the sea. The design embraces the panoramic views by creating a seamless transition between the interior and outdoor living spaces, resulting in a bright and spacious atmosphere. A contemporary material palette, carefully selected finishes, and a refined layout were combined to enhance both functionality and visual harmony, offering a comfortable living environment centered around the open kitchen and expansive terrace.",
    name: "Interior House Design, Atakum/Samsun",
    src: ATAKUM1,
    imageSlider: [
    { src: ATAKUM1, alt: "ATAKUM1" },
    { src: ATAKUM2, alt: "ATAKUM2" },
    { src: ATAKUM3, alt: "ATAKUM3" },
    { src: ATAKUM4, alt: "ATAKUM4" }
  ]
  },
  {
    id:3,
    comment:
      "This 200 m² private villa was designed with a focus on simplicity, spatial clarity, and everyday comfort. The layout was carefully developed to create fluid connections between the living areas while maximizing natural daylight and views of the surrounding landscape. Every aspect of the project, from the initial concept to the technical documentation, was coordinated to ensure both aesthetic quality and construction efficiency. The scope included architectural design, 3D visualizations, official permit documentation, implementation drawings, and detailed BOQ lists.",
    name: "Villa Design, Cakirlar/Samsun",
    src: CAKIRLAR1,
    imageSlider: [
    { src: CAKIRLAR1, alt: "CAKIRLAR1" },
    { src: CAKIRLAR2, alt: "CAKIRLAR2" },
    { src: CAKIRLAR3, alt: "CAKIRLAR3" }
  ]
  },
    {
      id:4,
    comment:
      "This concept project was commissioned by the local municipality as a visitor and promotional center to showcase the traditional architecture of the Eastern Black Sea region in the highlands. The design reinterprets the distinctive character of regional houses through a contemporary architectural approach while preserving their cultural identity. A solid stone base forms the ground floor, reflecting the traditional construction methods of the region, while the upper level combines timber and adobe to create a warm and authentic architectural expression. Both the architectural and interior design were developed to celebrate the area's rich heritage and provide visitors with an immersive introduction to the region's vernacular architecture.",
    name: "Traditional Eastern Black Sea Concept House Design",
    src: DOKAP1,
    imageSlider: [
    { src: DOKAP1, alt: "DOKAP1" },
    { src: DOKAP2, alt: "DOKAP2" },
    { src: DOKAP3, alt: "DOKAP3" }
  ]
  },
      {
      id:5,
    comment:
      "A contemporary 350 m² private villa was designed to provide a balance between modern aesthetics, functional planning, and comfortable living. The project was developed with carefully organized living spaces, strong indoor–outdoor connections, and an emphasis on natural light to create bright and inviting interiors. The scope of work included architectural design, 3D visualizations, official permit documentation, detailed implementation drawings, and comprehensive BOQ lists, ensuring a seamless transition from concept to construction.",
    name: "Villa Design, Ekincik/ Mugla",
    src: EKINCIK1,
    imageSlider: [
    { src: EKINCIK1, alt: "EKINCIK1" },
    { src: EKINCIK2, alt: "EKINCIK2" },
    { src: EKINCIK3, alt: "EKINCIK3" },
    { src: EKINCIK4, alt: "EKINCIK4" }
  ]
  },
      {
      id:6,
    comment:
      "This concept mosque project was developed through an integrated architectural and interior design approach, aiming to create a contemporary place of worship with a strong spiritual identity. The design emphasizes serenity, light, and symbolism, incorporating reliefs of prayers as architectural elements that reinforce the spiritual atmosphere. Blue stained-glass windows were introduced to represent the sky, allowing natural light to filter through the space and create a calm, contemplative environment. Every design decision was guided by the intention to balance modern architectural expression with the timeless values of Islamic worship.",
    name: "Grozni Concept Mosque Design",
    src: GROZNI1,
    imageSlider: [
    { src: GROZNI1, alt: "GROZNI1" },
    { src: GROZNI2, alt: "GROZNI2" },
    { src: GROZNI3, alt: "GROZNI3" },
    { src: GROZNI4, alt: "GROZNI4" },
    { src: GROZNI5, alt: "GROZNI5" }
  ]
  },
      {
      id:7,
    comment:
      "Designed for a hillside site with panoramic sea views, this 320 m² private villa was carefully planned to maximize its unique location and natural surroundings. The architectural concept emphasizes the connection between indoor and outdoor living, with a swimming pool positioned to take full advantage of the elevated setting and uninterrupted views. The project included the architectural design, 3D visualizations, official permit documentation, detailed implementation drawings, and comprehensive BOQ lists.",
    name: "Villa Design, Incesu/ Samsun",
    src: INCESU1,
    imageSlider: [
    { src: INCESU1, alt: "INCESU1" },
    { src: INCESU2, alt: "INCESU2" },
    { src: INCESU3, alt: "INCESU3" },
    { src: INCESU4, alt: "INCESU4" }
  ]
  },
  {
      id:8,
    comment:
      "A bespoke interior design concept was developed for the living room of this 320 m² private villa, with a focus on enhancing the panoramic sea views and creating a refined, contemporary living space. The design carefully balances aesthetics, comfort, and functionality through the selection of materials, finishes, furniture layouts, and lighting, resulting in a warm and elegant interior that complements the villa's architectural character.",
    name: "Interior House Design, Incesu/ Samsun",
    src: INCESUIC1,
    imageSlider: [
    { src: INCESUIC1, alt: "INCESUIC1" },
    { src: INCESUIC2, alt: "INCESUIC2" },
    { src: INCESUIC3, alt: "INCESUIC3" },
    { src: INCESUIC4, alt: "INCESUIC4" },
    { src: INCESUIC5, alt: "INCESUIC5" }
  ]
  },
  {
      id:9,
    comment:
      "A complete architectural service was provided for this 280 m² private villa project, from concept design to construction documentation. The scope included architectural design development, high-quality 3D visualizations, preparation of official permit drawings for regulatory approvals, detailed implementation drawings, and comprehensive BOQ lists. The project was developed to combine functional planning, contemporary design, and efficient construction execution.",
    name: "Villa Design, Nilufer/ Bursa",
    src: NILUFER1,
    imageSlider: [
    { src: NILUFER1, alt: "NILUFER1" },
    { src: NILUFER2, alt: "NILUFER2" },
    { src: NILUFER3, alt: "NILUFER3" }
  ]
  },
  {
      id:10,
    comment:
      "Architectural implementation projects were prepared for six different branches based on a standard concept design. Each branch was surveyed on-site, with detailed measurements taken to accurately adapt the concept to the existing conditions. Following the site assessments, architectural implementation drawings and BOQ lists were prepared for each location, ensuring consistency while addressing the unique requirements of every branch.",
    name: "Çorum Arinna, Derebahçe/Samsun, Akkuş/Ordu, Amasya, Çatalca, Ortaköy Branch Interior Design",
    src: SUBE1,
    imageSlider: [
    { src: SUBE1, alt: "SUBE1" },
    { src: SUBE2, alt: "SUBE2" },
    { src: SUBE3, alt: "SUBE3" },
    { src: SUBE4, alt: "SUBE4" },
    { src: SUBE5, alt: "SUBE5" },
    { src: SUBE6, alt: "SUBE6" }
  ]
  },
  {
      id:11,
    comment:
      "Architectural implementation drawings and detailed BOQ lists were prepared for this mixed-use life center, comprising office spaces and retail units in a prominent city-center location. The documentation was developed to support the construction process, ensuring accurate coordination, technical compliance, and precise quantity calculations for efficient project execution.",
    name: "Life Center, Suluova/ Amasya",
    src: SULUOVA1,
    imageSlider: [
    { src: SULUOVA1, alt: "SULUOVA1" },
    { src: SULUOVA2, alt: "SULUOVA2" },
    { src: SULUOVA3, alt: "SULUOVA3" },
    { src: SULUOVA4, alt: "SULUOVA4" },
    { src: SULUOVA5, alt: "SULUOVA5" },
    { src: SULUOVA6, alt: "SULUOVA6" }
  ]
  },
  {
      id:12,
    comment:
      "Bursa Akçalar/ Küçükkumla/ Nilüfer, Bursa Gemlik/ Kurşunlu/ Mudanya, Gürcistan Kasleti, Aydın OSB, Trabzon Akçaabat, Manisa OSB, Aydın Karacasu/ Sultanhisar/ Yenipazar, Azerbaycan Khudat, Balıkesir Bandırma, Tokat Niksar Waste Water Treatment Plants Construction Documents. Türkmenistan Zerger Power Plant Construction Documents.  Kocaeli İzmit, Kocaeli İzmit Tavşancıl, Balıkesir Erdek, Kocaeli İzmit Kullar Drinking Water Treatment Plants Construction Documents. Şiteks Factory Working Drawings. Ivory Coast Hospital Interior Working Drawings. Bodrum/A. Hotel Interior Working Drawings. Gaziantep/ Nizip Solid Waste Treatment Plant Construction Documents. Adana Sunar Corn Factory Waste Water Treatment Plant.",
    name: "Completed Construction Documents",
    src: ConstructionDocuments,
    imageSlider: [
    { src: ConstructionDocuments, alt: "ConstructionDocuments" }
  ]
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
    <div className="font-lato w-screen">
        <Header2
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
          info={info}
        />
      <section className="flex flex-wrap mt-36 m-3 justify-center items-center">

      {ProjectsData.map((project) => {
        return (
              <Link key={project.id} to={`/projects/${project.id}`} className="flex flex-row mb-10 md:ml-10">
                <div className="shadow-md sm:w-96 w-72 md:w-[20rem] bg-[#FAFAFA]">
                  <div className="h-48 md:h-64 relative">
                    <img
                      src={project.src}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left sm:h-[3rem] md:h-20 flex flex-col justify-center">
                    <p className="text-[#A37A55] text-sm font-semibold text-left m-3">
                      {project.name}
                    </p>
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
