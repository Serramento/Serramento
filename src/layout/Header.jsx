import { useState, Suspense } from "react";
import { Menu, X } from "lucide-react";
import ImageSlider2 from "../components/ImageSlider2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import INCESU from "../images/Serramento/INCESU.png";
import ATAKUM from "../images/Serramento/ATAKUM.png";

const ImageSliderData2 = [
  {
    title: "Incesu Summer House Project",
    src: INCESU,
    alt: "INCESU",
  },
  {
    title: "Atakum Interior Housing Project",
    src: ATAKUM,
    alt: "ATAKUM",
  }
];

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA]" ref={props.homeRef}>
      {/* Navbar */}
      <section className="w-screen">
        <nav className="fixed w-full top-0 left-0 bg-black/10 backdrop-blur-md z-50">
          <div className="px-4 md:px-20">
            <div className="flex justify-between h-28">
              <div className="flex items-center">
                <button
                  className="w-56"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={props.info.logo} alt="Serramento Logo" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <ul className="flex flex-row justify-between w-[28rem]">
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.homeRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.home}
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.aboutUsRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.aboutUs}
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.servicesRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.services}
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.contactRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.contact}
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  {props.info.home}
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.aboutUsRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  {props.info.aboutUs}
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.servicesRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  {props.info.services}
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.contactRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  {props.info.contact}
                </button>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* Carousel */}
      <section className="relative w-screen h-screen md:h-[46rem]">
                <Suspense
                  fallback={
                    <div className="bg-[#98B8DF] w-screen h-screen flex justify-center items-center text-[#FFFFFF] font-montserrat text-3xl">
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
                      Loading...
                    </div>
                  }
                >
                  <ImageSlider2 imageSlider={ImageSliderData2} />
                </Suspense>
      </section>
    </div>
  );
}
