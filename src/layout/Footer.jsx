import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
  return (
    <div className="w-screen">
      {/* Contact Info */}
      <section className="flex md:flex-row sm:flex-col items-center justify-center md:py-10 text-white bg-[#D8D3CB]">
        <div className="flex flex-col text-left">
          <div className="flex flex-col">
            <Link
              href="/"
              className="w-56 sm:mt-16 md:mt-0"
              onClick={() =>
                window.scrollTo({
                  top: props.homeRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <img src={props.info.logo} />
            </Link>
            <h3 className="text-lg font-semibold text-center mt-2 md:text-left">
              {props.info.contactInfo}
            </h3>
          </div>
          <div className="flex md:flex-row sm:flex-col mb-6 mt-6">
            <ul className="space-y-2 text-white">
              <div className="flex flex-row w-64">
                <li>Samsun Merkez Ofis</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon icon={faPhone} className="h-6 mt-1 mr-2" />
                <li>+90 362 431 52 40</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  Müftü Cad. No:5
                  İlkadım/Samsun {props.info.turkiye}
                </li>
              </div>
            </ul>
            <ul className="space-y-2 text-white md:space-y-4 sm:mt-6 md:mt-0">
              <div className="flex flex-row w-64">
                <li>İstanbul Görüşme Ofisi (Randevu ile)</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon icon={faPhone} className="h-6 mt-1 mr-2" />
                <li>+90 850 346 32 91</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  Fulya Mah. Büyükdere Cad. Quasar İstanbul No:76 K:13 D:188 Şişli, İSTANBUL {props.info.turkiye}
                </li>
              </div>
            </ul>
          </div>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7449250881236!2d36.32797857605484!3d41.29265557131219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887634afef3ff7%3A0x5b2f35847648d5ba!2sSerramento%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1782388174827!5m2!1str!2str"
            className="sm:mb-10 md:mb-0 sm:ml-0 md:ml-16 w-60 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72"
          ></iframe>
      </section>

      {/* Footer */}
      <section>
        <div className="bg-[#A37A55] py-6 pl-8 md:px-20 w-screen">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2">
            <p className="text-[#FFFFFF] text-left">
              © {new Date().getFullYear()} Serramento Architecture. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.instagram.com/serramentomimarlik?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-[#FFFFFF] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/serrasarihasan"
                className="text-[#FFFFFF] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
