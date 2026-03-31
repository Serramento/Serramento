import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Kayan1 from "../images/KayanFotolar/Kayan1.jpeg";
import Kayan2 from "../images/KayanFotolar/Kayan2.jpeg";
import Kayan3 from "../images/KayanFotolar/Kayan3.jpeg";
import Kayan4 from "../images/KayanFotolar/Kayan4.jpeg";
import Kayan5 from "../images/KayanFotolar/Kayan5.jpeg";
import Kayan7 from "../images/KayanFotolar/Kayan7.jpeg";
import Kayan8 from "../images/KayanFotolar/Kayan8.jpeg";
import Kayan9 from "../images/KayanFotolar/Kayan9.jpeg";
import Kayan10 from "../images/KayanFotolar/Kayan10.jpeg";
import Kayan11 from "../images/KayanFotolar/Kayan11.jpeg";
import InstagramContent from "../components/InstagramContent";
import ImageSlider from "../components/ImageSlider";
import FamilyVacation from "../images/WhatWeOffer/FamilyVacation.jpeg";
import ArtCulture from "../images/WhatWeOffer/ArtCulture.jpeg";
import ConciergeServices from "../images/WhatWeOffer/ConciergeServices.jpeg";
import ContactForm2 from "../components/ContactForm2";
import FotoMehmetGuray from "../images/WhoWeAre/FotoMehmetGuray.jpeg";
import FotoMehmet from "../images/WhoWeAre/FotoMehmet.png";
import FotoGuray from "../images/WhoWeAre/FotoGuray.png";

const InstagramData = [
  {
    title: "Grozni Cami Mimari",
    description:
      "Konsept Mimari Cami Projemiz...",
    href: "https://www.instagram.com/p/B72zBStHXXY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Ekincik Villa Mimari",
    description:
      "Mimari Konut Tasarımımız...",
    href: "https://www.instagram.com/p/B7A7y1THROm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "İncesu Villa İç Mimari",
    description:
      "İç Mimari Konut Tasarımımız...",
    href: "https://www.instagram.com/p/CQLKFXkHd-K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const imageSliderData = [
  {
    title: "Family Vacations",
    description:
      "Family vacations are ideal to get together and spend some quality of time together with the other family members. We would like you to leave your family traveling arrangements to hands of our experienced team members who will create extraordinary travel experiences will exceed everyone’s expectations.",
    src: FamilyVacation,
  },
  {
    title: "Concierge Services",
    description:
      "Our luxury concierge services is operated by huge network of trusted global suppliers in order to provide you the best solutions as well as bespoke travel experiences. Arranging a restaurant reservation, luxurious car service or even a helicopter tour&transfer is only a phone call or text away.",
    src: ConciergeServices,
  },
  {
    title: "Arts& Culture& History",
    description:
      "Our approach to historic and cultural places is private custom tours. All of these tours are individually guided with small groups of people. All our unique itineraries are handcrafted by our professional team and you will have a memorable experience from the moment your are greeted by your guide until you return to your hotel.",
    src: ArtCulture,
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
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-center">
              ABOUT US
            </h5>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
              We continue to work in the fields of architectural design, construction projects, 3d visuals and project management in our Serramento Architecture office, which we established in 2016. <br />​ We strive to create original, aesthetically pleasing, and functional project designs. We are here to advise you throughout every aspect of your project management process.
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
            css="text-lg font-bold mt-12 md:mt-0 text-[#98B8DF] mb-3 md:ml-10"
            css2="flex flex-col h-96 md:items-left"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#98B8DF] w-screen">
        <div className="md:flex md:flex-row md:items-center md:justify-center">
          <img
            src={FotoMehmetGuray}
            alt="MehmetGuray"
            className="md:h-[34rem] object-contain"
          />
          <div className="md:mr-20">
            <h5 className="text-lg font-bold pb-3 text-[#FFFFFF] pt-10">
              WHY CHOOSE US?
            </h5>
            <div className="text-md font-semibold md:mx-10 text-[#FFFFFF] md:mt-2 px-5 sm:px-8 pb-10 sm:pb-16 md:px-0 text-left">
              • Professional, dedicated and passionate travel advisors have an
              extensive background in luxury hotel industry
              <br />
              ​• Personalised and exclusive service
              <br />
              • 7/24 reachable and flexible team
              <br />
              • Great connections with luxury hotel chains worldwide
              <br />• Attention to each and every single details
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-20 flex w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold mb-3 text-[#98B8DF]">FOLLOW US</h2>
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
          <h2 className="text-lg font-bold text-[#98B8DF] -rotate-90">
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
