import Header from "@/layout/Header";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import bannerv1 from "../assets/images/icon.png";
import bannerv2 from "../assets/images/element (1).png";
import bannerimg from "../assets/images/hero graphic.png";
import ParticlesBackground from "@/components/particlejs/Particlebg";
import Brandsection from "@/view/home/brandsection/Brandsection";
import Whyfairdeal from "@/view/home/whydeal/Whyfairdeal";
import Working from "@/view/home/working/Working";
import Grow from "@/view/home/grow/Grow";
import Form from "@/view/home/form/Form";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section  */}
      <div className="relative bg-[#f4faff83] py-16 md:pt-[156px] md:pb-[176px] hero-section !overflow-hidden">
        
        {/* ✅ Restrict particles to this section only */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* Background Elements */}
        <Image
          src={bannerv1}
          alt="banner-vector1"
          className="absolute h-[685px] w-[347px] -top-[1%] hidden lg:block"
        />
        <Image
          src={bannerv2}
          alt="banner-vector2"
          className="absolute h-[100%] w-[347px] -top-[1%] right-0 -z-10 hidden lg:block"
        />

        {/* Main Banner Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            
            <div className="w-full lg:w-[50%] text-center lg:text-left mt-6 lg:mt-0">
              <h1 className="text-[22px] sm:text-[27px] md:text-[34px] lg:text-[44px] w-full lg:w-[90%] leading-tight">
                Unlock 🔓 the Power of Offline Commerce With Our
                <span className="font-semibold block">
                  All-In-One Retail Solution
                </span>
              </h1>
              <div className="pt-4">
                <p className="text-[14px] sm:text-[16px] font-light">
                  Seamlessly sell your products direct to Offline Retailers.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                  <button className="btn-blue px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[16px] rounded-[30px] flex items-center">
                    Let's Connect <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                  </button>
                  <button className="btn-outline px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[16px] rounded-[30px] flex items-center">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0">
              <Image
                src={bannerimg}
                alt="banner-img"
                className="h-auto w-[80%] sm:w-[60%] md:w-[50%] lg:w-[505px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* brand section  */}
      <div>
        <Brandsection />
      </div>
      {/* whty fair deal */}
      <Whyfairdeal/>
      {/* how it works */}
      <Working/>
      {/* groeth */}
      <Grow/>
      {/* form  */}
      <Form/>
    </>
  );
}

