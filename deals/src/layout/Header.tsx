"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle drawer menu
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 md:px-8  h-[70px] sm:h-[88px] flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <Image src={logo} alt="Logo" width={0} height={0} className="xs:!h-[34px] xs:!w-[164px] lg!:h-[48px] lg!:w-[231px]"  />
          </a>
        </div>
    
        {/* Desktop Navigation - Show only on LG & XL screens */}
      
        <nav className="hidden lg:flex lg:items-center">
            <ul className="flex mr-[30px]">
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">Home</a>
              </li>
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">About Us</a>
              </li>
              <li className="pr-[32px] flex">
                <a href="#" className="text-[16px] font-medium">Services</a> 
                <ChevronDown className="pl-[2.5px]" />
              </li>
              <li className="pr-[32px]">
                <a href="#" className="text-[16px] font-medium">Careers</a>
              </li>
              <li>
                <a href="#" className="text-[16px] font-medium">Contact Us</a>
              </li>
            </ul>
            {/* Buttons */}
            <div>
              <button className="px-[16px] py-[14px] text-[16px] border-2 rounded-[30px] mr-[16px]">Buy on a Fair deal</button>
              <button className="px-[16px] py-[14px] text-[16px] border-2 rounded-[30px] btn-blue">Sell on a Fair deal</button>
            </div>
          </nav>

        {/* Mobile Menu Button - Show only on XS, SM, MD screens */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation - Right Drawer for XS, SM, MD */}
        <div
          className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          {/* Close Button (Mobile) */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
            <Image src={logo} alt="Logo" width={120} height={35} />
            <button onClick={closeMenu} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col px-6 pt-6 space-y-4 bg-white">
            {["Home", "About Us", "Services", "Careers", "Contact Us"].map((item, index) => (
              <li key={index} className="flex items-center">
                <a href="#" className="text-[16px] font-medium">{item}</a>
                {item === "Services" && <ChevronDown className="ml-1 w-4 h-4" />}
              </li>
            ))}
          </ul>

          {/* Buttons (Mobile) */}
          <div className="flex flex-col px-6 pt-6 space-y-4 bg-white">
            <button className="px-5 py-3 text-[16px] border-2 rounded-[30px]">
              Buy on a Fair Deal
            </button>
            <button className="px-5 py-3 text-[16px] border-2 rounded-[30px] bg-blue-600 text-white">
              Sell on a Fair Deal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
