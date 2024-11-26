import  { useState } from "react";
import {Link} from "@tanstack/react-router"
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-r from-orange-700 to-orange-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold leading-snug tracking-wide ">
          <Link href="/">Canopy</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
      
          <Link href="/" className="text-white hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-700">
            About
          </Link>
        <a href="/services" className="text-white hover:text-gray-700">
            Services
          </a>
          <Link href="/contact" className="text-white hover:text-gray-700">
            Contact
          </Link> 
           <ModeToggle/>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <div className="flex items-center gap-2">
          <ModeToggle/>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#home" className="block py-2 px-4 text-white hover:bg-gray-700/20">
            Home
          </a>
          <a href="#about" className="block py-2 px-4 text-white hover:bg-gray-700/20">
            About
          </a>
          <a href="#services" className="block py-2 px-4 text-white hover:bg-gray-700/20">
            Services
          </a>
          <a href="#contact" className="block py-2 px-4 text-white hover:bg-gray-700/20">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
