"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import logo1 from "@/assets/images/1.png";
import logo2 from "@/assets/images/2.png";
import logo3 from "@/assets/images/3.png";
import logo4 from "@/assets/images/4.png";
import logo5 from "@/assets/images/5.png";
import logo6 from "@/assets/images/6.png";
import logo7 from "@/assets/images/7.png";
import logo8 from "@/assets/images/8.png";
import logo9 from "@/assets/images/9.png";
import logo10 from "@/assets/images/10.png";
import logo11 from "@/assets/images/11.png";
import right from "@/assets/images/right overlay.png";
import left from "@/assets/images/left overlay.png";

const brandLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, 
  logo7, logo8, logo9, logo10, logo11
];

const BrandSection = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-6 relative">
        <Image src={right} alt="right" className="absolute right-0"></Image>
        {/* Swiper  */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            className="flex"
          >
            {brandLogos.map((logo, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center gap-7">
                <Image 
                  src={logo} 
                  alt={`Brand ${index + 1}`}  
                  className="w-[90px] sm:w-[110px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Large Screens */}
        <div className="hidden md:flex flex-wrap justify-center gap-12">
          {brandLogos.map((logo, index) => (
            <div key={index} className="w-[90px] sm:w-[110px] md:w-[135px] md:h-[39px] flex justify-center">
              <Image 
                src={logo} 
                alt={`Brand ${index + 1}`}  
                className="md:w-[135px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
