"use client"

import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex w-screen flex-row bg-[#3D6663] font-['Poppins'] px-8 py-4 justify-between relative z-40">
        <a
          className="w-fit flex items-center justify-start"
          href="/">
        <img
          className="w-36 h-auto sm:w-64 sm:h-16"
          src="/images/svg/seventy-eight-logo.svg"
          alt="Seventy-Eight Collection Logo"
        />
        </a>
        
        <section 
          className="flex items-center gap-x-2 sm:gap-x-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            <path
              d="M0.811035 11.4242V10.3574H17.8804V11.4242H0.811035ZM0.811035 6.33543V5.2686H17.8804V6.33543H0.811035ZM0.811035 1.24664V0.17981H17.8804V1.24664H0.811035Z"
              fill="white"
            />
          </svg>
          <p className="text-center justify-start text-white text-2xl">
            Menu
          </p>
        </section>
      </nav>

      {/* menu overlay */}
      <div
        className={`fixed inset-0 bg-[#3D6663] z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full font-['Poppins'] text-white">
          {/* close button */}
          <button
            onClick={toggleMenu}
            className="absolute cursor-pointer top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ×
          </button>

          {/* menu items */}
          <div className="flex flex-col items-center space-y-8 text-center">
            <a
              href="/"
              className="text-4xl md:text-6xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/community"
              className="text-4xl md:text-6xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Community
            </a>
            <a
              href="/residences"
              className="text-4xl md:text-6xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Residences
            </a>
            <a
              href="/register"
              className="text-4xl md:text-6xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;