import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


export default function Header2(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="" ref={props.homeRef}>
      {/* Navbar */}
      <section className="w-screen">
        <nav className="fixed w-full top-0 left-0 bg-white/10 backdrop-blur-md z-50">
          <div className="px-4 md:px-20">
            <div className="flex justify-between h-28">
              <div className="flex items-center">
                <Link to="/">
                  <img src={props.info.logo} alt="Serramento Logo" className="w-56" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <ul className="flex flex-row justify-between w-[28rem]">
                    <li>
                      <Link to="/">
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.home}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.aboutUs}
                        </div>
                      </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.services}
                        </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {props.info.contact}
                        </div>
                      </Link>
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
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50">
                  {props.info.home}
                </Link>
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50">
                  {props.info.aboutUs}
                </Link>
                <Link to="/projects"
                  className="block px-3 py-2 rounded-md text-left font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"                  
                >
                  {props.info.services}
                </Link>
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50">
                  {props.info.contact}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>
    </div>
  );
}
