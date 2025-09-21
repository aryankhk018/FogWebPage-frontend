import React, { useState } from "react";
import LogoIcon from "../assets/Logo.svg?react";
import UserIcon from "../assets/user.svg?react";
import SearchIcon from "../assets/search.svg?react";
import HeartIcon from "../assets/heart.svg?react";
import CartIcon from "../assets/cart.svg?react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-8 flex justify-between items-center py-6">
        {/* Logo with Montserrat font */}
        <div className="flex items-center gap-x-2">
          <LogoIcon />
          <div className="font-['Montserrat'] text-[34px] font-bold text-black">
            Furniro
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-12 font-['Poppins'] text-[16px] font-medium">
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Action Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-6">
          {/* Mobile Menu Button - Hamburger / Close Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Conditional rendering for Hamburger vs. Close icon */}
              {isMenuOpen ? (
                // Close Icon (X)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 transition-transform duration-300 pl-1 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* User account icon - Always visible */}
          <button aria-label="User account" className="hidden sm:block">
            <UserIcon className="h-7 w-7 text-black hover:text-gray-500 transition-colors" />
          </button>

          {/* Search icon - Hidden on small screens (e.g., width < 640px) */}
          <button aria-label="Search" className="hidden sm:block">
            <SearchIcon className="h-7 w-7 text-black hover:text-gray-500 transition-colors" />
          </button>

          {/* Wishlist icon - Hidden on small screens */}
          <button aria-label="Wishlist" className="hidden sm:block">
            <HeartIcon className="h-7 w-7 text-black hover:text-gray-500 transition-colors" />
          </button>

          {/* Shopping cart icon - Always visible */}
          <button aria-label="Shopping cart  " className="hidden sm:block">
            <CartIcon className="h-7 w-7 text-black hover:text-gray-500 transition-colors" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-22
         left-0 w-full bg-white shadow-md z-40 animate-slide-down pt-4 ml-4"
        >
          <div className="flex flex-col items-center py-4 space-y-4 font-['Poppins'] text-[16px] font-medium">
            <a
              href="#"
              className="text-black hover:text-gray-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            {/* Action Icons inside the mobile menu for a cleaner header */}
            <div className="flex space-x-6 mt-4 pt-4 border-t border-gray-200">
              <button
                aria-label="Search"
                className="flex items-center space-x-2"
              >
                <SearchIcon className="h-6 w-6" />
                <span>Search</span>
              </button>
              <button
                aria-label="Wishlist"
                className="flex items-center space-x-2"
              >
                <HeartIcon className="h-6 w-6" />
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
