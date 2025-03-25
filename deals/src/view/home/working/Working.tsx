"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ArrowRight } from 'lucide-react';

import e1 from "../../../assets/images/1 (1).png";
import e2 from "../../../assets/images/1 (2).png";
import e3 from "../../../assets/images/1 (3).png";
const Working = () => {
  const faq = [
    {
      id: 1,
      title: "Retail Penetration",
    },
    {
      id: 2,
      title: "Outlet Servicing",
    },
    {
      id: 3,
      title: "Wider consumer reach",
    },
  ];
  return (
    <section className="pt-[84px] pb-[151px] relative overflow-hidden bg-gray-50">
      <Image src={e3} alt="e1" className="absolute top-0 -z-10"></Image>
      <div className="container mx-auto">
        <h2 className="text-[44px] font-bold text-center">How its work?</h2>
        <div className="flex flex-wrap items-center pt-24 justify-around">
          <div className="w-[60%]">
            <div className="p-6 rounded-[20px] bg-[#20222F] z-20 w-[601px]">
              <h2 className="flex justify-between items-center">
                <span className="text-red-600 px-4 py-1.5 border-2 border-red-600 rounded-[30px]">
                  Step 1
                </span>
                <ArrowDown className="text-white" />
              </h2>
              <div className="pt-[18px]">
                <h3 className="text-2xl font-semibold pb-2 text-white">
                  Go to market (GTM)
                </h3>
                <p className="text-[#F9F9F9] text-[16px] font-normal">
                  We leverage our industry expertise to craft tailored
                  go-to-market strategies for your products, ensuring they shine
                  on the shelves of offline retail stores.
                </p>
              </div>
           
            </div>
            <ul className="w-[601px] pt-3">
                {faq.map((f) => {
                  return (
                    <li className="flex justify-between items-center p-6 text-2xl text-[#5C5C5C]">
                        {f.title} <ArrowRight/>
                    </li>
                  );
                })}
              </ul>
          </div>
          <div className="w-[40%]">
            <Image src={e1} alt="e1"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
