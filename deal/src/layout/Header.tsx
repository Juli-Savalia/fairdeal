"use client";

import { useState } from "react";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

import Button from "@/components/particlejs/common/Button";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8 h-[70px] sm:h-[88px] flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <Image src={logo} alt="Logo" width={0} height={0} className="[@media(max-width:425px)]:w-[164px] max-[320px]:h-[34px] xs:!w-[164px] lg!:h-[48px] lg!:w-[231px]" />
          </a>
        </div>
    
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex xl:items-center">
          <ul className="flex mr-[30px]">
            {["Home", "About Us", "Services", "Careers", "Contact Us"].map((item, index) => (
              <li key={index} className="pr-[32px] flex items-center">
                <a href="#" className="text-[16px] font-medium">{item}</a>
                {item === "Services" && <ChevronDown className="pl-[2.5px]" />}
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div>
            <Button variant="secondary" onClick={() => alert("Buying!")}>Buy on a Fair deal</Button>
            <Button variant="primary" className="ml-[16px]" onClick={() => alert("Buying!")}>Sell on a Fair deal</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out xl:hidden`}
        >
          {/* Close Button */}
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

          {/* Mobile Buttons */}
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
