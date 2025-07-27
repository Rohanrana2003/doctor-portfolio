import React, { useState } from "react";
import { Stethoscope, Menu, X, Phone, Calendar } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md py-0 md:py-4 shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="w-20 h-20 cursor-pointer md:w-32 md:h-32 rounded-full flex items-center justify-center"
            >
              <img
                className="w-full h-full"
                src="/assets/logo.png"
                alt="logo"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm lg:text-xl font-medium hover:text-blue-600 transition-colors duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            <NavLink
              to="/Doctor-Divanshee"
              className={({ isActive }) =>
                `text-sm lg:text-xl font-medium hover:text-blue-600 transition-colors duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              Dr. Divanshee
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            <NavLink
              to="/Doctor-Sachin"
              className={({ isActive }) =>
                `text-sm lg:text-xl font-medium hover:text-blue-600 transition-colors duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              Dr. Sachin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            {/* <NavLink
              to=""
              className={({ isActive }) =>
                `text-sm lg:text-xl font-medium hover:text-blue-600 transition-colors duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink> */}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:7302204937"
              className="flex items-center space-x-2 cursor-pointer text-sm lg:text-xl text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <a
              href="#appointment"
              className="flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-0 border-t border-blue-100">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-sm font-medium  hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/Doctor-Divanshee"
              className={({ isActive }) =>
                `block text-sm font-medium  hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Dr. Divanshee
            </NavLink>
            <NavLink
              to="/Doctor-Sachin"
              className={({ isActive }) =>
                `block text-sm font-medium  hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Dr. Sachin
            </NavLink>
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-sm font-medium  hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink> */}

            {/* Mobile CTA Buttons */}
            <div className="pt-1 px-14 space-y-2 border-t border-blue-100">
              <a
                href="tel:7302204937"
                className="flex items-center justify-center space-x-2 w-full text-sm text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="#appointment"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg text-sm font-medium"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
