import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Button from "@/components/particlejs/common/Button";

import v1 from '../../../assets/images/Group 2218.png'
import v2 from '../../../assets/images/Frame 75.png'
import v3 from '../../../assets/images/growth 1.png'

export default function Form() {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100 pb-24">
      <div className="w-full bg-gradient-to-b from-[#288CD5] to-[#1A71B0] text-white py-28 px-[150px] flex flex-col items-center relative">
        <Image src={v1} alt='v1' className='absolute  left-[11%] top-[6%]'/>
        <Image src={v1} alt='v1' className='absolute left-[17%] top-[6%]'/>
        <Image src={v2} alt='v1' className='absolute left-[60%] -top-[1%]'/>
        <Image src={v3} alt='v1' className='absolute left-[58%] top-[31%]'/>
        <h1 className="text-[64px]  text-left font-bold text-[#F9F9F9] me-auto">
          Build. Operate. <span className="text-gray-200">Grow</span>
        </h1>
        <p className="max-w-2xl pt-[26px] text-left pb-10 me-auto">
          We craft your initial identity, streamline your operations, and ignite your brand’s<br></br>  potential for sustained growth.
        </p>

      </div>

      <div className=" max-w-[1066px] !px-[86px] pb-24 bg-white shadow-lg rounded-lg w-full relative z-10 -mt-[8%]">
        <h2 className="text-center pt-[52px] pb-11 text-[32px] font-bold">
          Get started with us <span className="font-bold text-gray-800">today</span>
        </h2>

        {/* Form */}
        <form >
          <div className="flex flex-wrap items-center max-w-[894px] justify-between">
            <input type="text" placeholder="Name" className="py-[18px] px-4 mb-7  w-[432px] bg-[#F3F3F3] rounded-[12px] " />
            <input type="text" placeholder="Brand Name" className="py-[18px] px-4 mb-7  w-[432px] bg-[#F3F3F3] rounded-[12px] " />
            <input type="text" placeholder="Brand Website" className="py-[18px] px-4 mb-7  w-[432px] bg-[#F3F3F3] rounded-[12px] " />
            <input type="email" placeholder="E-mail ID" className="py-[18px] px-4 mb-7  w-[432px] bg-[#F3F3F3] rounded-[12px] " />
            <input type="tel" placeholder="Phone Number" className="py-[18px] px-4 mb-7  w-[432px] bg-[#F3F3F3] rounded-[12px] " />
          </div>

          {/* Submit Button */}
          <Button variant="primary" className="flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2">
              Submit <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
