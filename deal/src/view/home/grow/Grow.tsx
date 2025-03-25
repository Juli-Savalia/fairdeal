import React from "react";

import Image from "next/image";

// import bg1 from '../../../assets/images/Group 2223.png'
import bg2 from "../../../assets/images/705 1.svg";
const Grow = () => {
  const no = [
    {
      number: "70+",
      title: "Cities 🏙️",
    },
    {
      number: "50k+",
      title: "Retailers 🛍️",
    },
    {
      number: "20+",
      title: "Brands 📢",
    },
  ];
  return (
    <section className="py-3 bg-cover bg-no-repeat grow-bg">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-[50%]">
            <h2 className="z-10 text-[44px] font-bold">Grow with  <span className='z-20 relative after:absolute after:content-[""] after:bg-[#288cd54a] after:w-full after:h-[20px] after:rounded-[30px] after:top-[30px] after:left-0 after:-z-10'>FairDeal</span> </h2>
            <p className="py-3 text-[16px] font-normal w-[69%] text-[#5C5C5C]">
              We offer customised strategies, a wide retail network, convenient
              outlet servicing, and insights based on data to help you succeed.
              When you choose us, you get expertise, efficiency, flexibility,
              and a track record of success.
            </p>
            <ul className="flex">
              {no.map((val) => {
                return (
                  <li className="text-[64px] pr-[52px] font-bold 
  bg-[linear-gradient(180deg,#D57028_0%,#FFCE95_52%)] 
  bg-clip-text text-transparent">
                    {val.number}
                    <span className="text-black text-2xl font-normal block">
                      {val.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[40%]">
            <Image src={bg2} alt="bg2"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;
