"use client";
import { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import Image from "next/image";
import { CirclePlay, ArrowRight } from "lucide-react";

import Header from "@/layout/Header";
import ParticlesBackground from "@/components/particlejs/Particlebg";
import Brandsection from "@/view/home/brandsection/Brandsection";
import Whyfairdeal from "@/view/home/whydeal/Whyfairdeal";
import Working from "@/view/home/working/Working";
import Footer from "@/layout/Footer";
import Grow from "@/view/home/grow/Grow";
import Form from "@/view/home/form/Form";
import Button from "@/components/particlejs/common/Button";
import bannerv1 from "@/assets/images/icon.png";
import bannerv2 from "@/assets/images/element (1).png";
import bannerimg from "@/assets/images/hero graphic.png";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: "ease-in-out",
        delay: 50,
      });

      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="[@media(max-width:1366px)]:py-28 relative bg-[#f4faff83] py-64 md:pt-[156px] md:pb-[176px] hero-section !overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <ParticlesBackground /></div>
        <Image
          src={bannerv1}
          alt="banner-vector1"
          className="absolute h-[685px] w-[347px] -top-[1%] hidden lg:block"
          data-aos="fade-up" />
        <Image
          src={bannerv2}
          alt="banner-vector2"
          className="absolute h-[100%] w-[347px] -top-[1%] right-0 -z-10 hidden lg:block"
          data-aos="fade-left" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full lg:w-[50%] text-center lg:text-left mt-6 lg:mt-0">
              <h1
                className="text-[22px] sm:text-[27px] md:text-[34px] lg:text-[44px] w-full lg:w-[90%] leading-tight"
                data-aos="fade-right"  >
                Unlock 🔓 the Power of Offline Commerce With Our
                <span className="font-semibold block">
                  All-In-One Retail Solution
                </span>
              </h1>
              <div className="pt-4">
                <p
                  className="text-[14px] sm:text-[16px] font-light"
                  data-aos="fade-up">
                  Seamlessly sell your products direct to Offline Retailers.
                </p>
                <div
                  className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4"
                  data-aos="zoom-in" >
                  <Button variant="primary" className="flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Connect <ArrowRight className="w-5 h-5"/>
                    </span>
                  </Button>
                  <button
                    className="btn-outline px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[16px] rounded-[30px] flex items-center"
                    data-aos="fade-up">
                    <CirclePlay className="mr-2" /> Know More </button>
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0"
              data-aos="fade-up">
              <Image
                src={bannerimg}
                alt="banner-img"
                className="h-auto w-[80%] sm:w-[60%] md:w-[50%] lg:w-[505px] [@media(max-width:768px)]:h-[298px] [@media(max-width:768px)]:w-[304px]" />
            </div>
          </div>
        </div>
      </div>
      {/* <Brandsection />
<Whyfairdeal />
<Working />
<Grow />
<Form />
<Footer /> */}
    </>
  );
}
// ctrl f for search
// ctrl p for file search 
// ctrl shift p for refresh