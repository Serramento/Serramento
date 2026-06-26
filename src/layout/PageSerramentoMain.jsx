import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Kayan1 from "../images/KayanFotolar/Kayan1.png";
import Kayan2 from "../images/KayanFotolar/Kayan2.png";
import Kayan3 from "../images/KayanFotolar/Kayan3.png";
import Kayan4 from "../images/KayanFotolar/Kayan4.png";
import Kayan5 from "../images/KayanFotolar/Kayan5.png";
import Kayan7 from "../images/KayanFotolar/Kayan7.png";
import Kayan8 from "../images/KayanFotolar/Kayan8.png";
import Kayan9 from "../images/KayanFotolar/Kayan9.png";
import Kayan10 from "../images/KayanFotolar/Kayan10.png";
import Kayan11 from "../images/KayanFotolar/Kayan11.png";
import InstagramContent from "../components/InstagramContent";
import ImageSlider from "../components/ImageSlider";
import Architecture from "../images/WhatWeOffer/Architecture.png";
import Interior from "../images/WhatWeOffer/Interior.png";
import ProjectManagement from "../images/WhatWeOffer/ProjectManagement.png";
import ContactForm2 from "../components/ContactForm2";
import SERRA from "../images/WhoWeAre/SERRA.jpeg";

const InstagramData = [
  {
    title: "Grozni Mosque",
    description:
      "Concept Architectural Design",
    href: "https://www.instagram.com/p/B72zBStHXXY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Ekincik Villa",
    description:
      "Architectural Housing Project",
    href: "https://www.instagram.com/p/B7A7y1THROm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Incesu Villa",
    description:
      "Interior Residential Design",
    href: "https://www.instagram.com/p/CQLKFXkHd-K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const imageSliderData = [
  {
    title: "Architecture",
    description:
      "Thoughtfully designed spaces that combine functionality, context, and timeless aesthetics.",
    src: Architecture,
  },
  {
    title: "Interior Design",
    description:
      "Refined interior environments shaped through materiality, detail, and user experience.",
    src: Interior,
  },
  {
    title: "Project Management",
    description:
      "Comprehensive coordination from concept to completion, ensuring quality and efficiency throughout the process.",
    src: ProjectManagement,
  },
];

export default function PageSerramentoMain(props) {
  return (
    <div className="max-w-md md:max-w-7xl">
      {/* About Us */}
      <section
        className="w-screen bg-[#FAFAFA] md:bg-white"
        ref={props.aboutUsRef}
      >
        <div className="px-7 md:px-36 ">
          <div className="text-center px-4 pb-12 py-20 md:pb-24 bg-white md:bg-[#FAFAFA]">
            <h5 className="text-lg font-bold pb-3 text-[#A37A55] md:text-center">
              ABOUT US
            </h5>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
              Founded by Serra Hancıoğlu in 2016, Serramento Architecture is a design studio dedicated to creating thoughtful, timeless, and functional spaces. We believe that every project is a unique opportunity to transform ideas into meaningful environments. By combining creativity, technical precision, and a deep understanding of our clients' needs, we develop architectural and interior design solutions that balance aesthetics, functionality, and long-term value.Our work spans residential, commercial, and institutional projects, with a commitment to delivering tailored designs that respond to both context and purpose. From concept development to project execution, we approach every stage with attention to detail, clarity, and professionalism. At Serramento Architecture, we see design as more than the creation of spaces—it is the creation of experiences that enrich everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Kayan Fotolar */}
      <section className="w-screen">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={Kayan1} alt="Kayan1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan2} alt="Kayan2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan3} alt="Kayan3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan4} alt="Kayan4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan5} alt="Kayan5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan7} alt="Kayan7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan8} alt="Kayan8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan9} alt="Kayan9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan10} alt="Kayan10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan11} alt="Kayan11" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* What We Offer */}
      <section className="w-screen" ref={props.servicesRef}>
        <div className="md:bg-[#FAFAFA] md:flex md:justify-center md:items-center md:mx-auto md:w-[70rem] md:py-20 px-4 sm:px-6 text-center">
          <ImageSlider
            imageSliderData={imageSliderData}
            title="SERVICES"
            css="text-lg font-bold mt-12 text-[#A37A55] mb-3"
            css2="flex flex-col h-60 md:items-left"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#D8D3CB] w-screen">
        <div className="md:flex md:flex-row md:items-center md:justify-center">
          <img
            src={SERRA}
            alt="Serra"
            className="md:h-[20rem] object-contain"
          />
          <div className="sm:w-[20rem] md:w-[32rem]">
            <h5 className="text-lg font-bold pb-3 text-[#A37A55] pt-10">
              WHY CHOOSE US?
            </h5>
            <div className="text-md font-semibold md:mx-10 text-[#A37A55] md:mt-2 px-5 sm:px-8 pb-10 sm:pb-16 md:px-0 text-left">
              • Tailored Design<br />
              Every project is developed around its unique context, requirements, and aspirations.
              <br />
              ​• Attention to Detail<br />
              We believe that exceptional spaces are defined by thoughtful details and precise execution.
              <br />
              • End-to-End Involvement<br />
              From concept design to project completion, we remain actively engaged throughout the process.
              <br />
              • Timeless Approach<br />
              We create spaces that prioritize longevity, functionality, and lasting aesthetic value.
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-20 flex w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold mb-3 text-[#A37A55]">FOLLOW US</h2>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center md:flex-row">
            {InstagramData.slice(0, 2).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Learn More"
              />
            ))}
          </div>
          <div className="hidden md:flex flex-row items-center justify-center">
            {InstagramData.slice(0, 3).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="flex flex-col md:flex-row items-center justify-center w-screen md:ml-0.5"
        ref={props.contactRef}
      >
        <div className="hidden md:flex flex-col mt-40 bottom-0">
          <h2 className="text-lg font-bold text-[#A37A55] -rotate-90">
            CONTACT US
          </h2>
        </div>
        <ContactForm2 />
        <h2 className="md:hidden mb-3 text-lg font-bold text-[#98B8DF]">
          CONTACT US
        </h2>
        <div className="md:hidden vertical-line2"></div>
      </section>
    </div>
  );
}
