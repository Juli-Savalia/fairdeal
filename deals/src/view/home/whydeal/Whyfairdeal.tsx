"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import img1 from '../../../assets/images/🏬.png'
import img2 from '../../../assets/images/💰.png'
import img3 from '../../../assets/images/📦.png'

import element1 from '../../../assets/images/element.png'
const Whyfairdeal = () => {
  return (
    <section className='py-40 relative overflow-hidden'>
        <Image src={element1} alt="element1" className='absolute top-0'></Image>
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-[50%]">
                    <h2 className='text-[44px] font-bold'>Why FairDeal ?</h2>
                    <p className='py-6 text-[16px] font-normal w-[84%] text-[#5C5C5C]'>At Fairdeal. market, we understand the distinctive challenges businesses encounter when expanding into offline markets. Our passion lies in simplifying this journey, offering a friendly and supportive solution to ensure your success.</p>
                    <button className='text-[16px] font-normal flex items-center'>
                        Learn More <ArrowRight className='pl-[2.5px]'/>
                    </button>
                </div>
                <div className="w-[40%] justify-center">
                    <div className='bg-[#20222F1A] rounded-2xl py-6 px-4 w-[450px] flex items-center'>
                        <div className="bg-white rounded-full h-[72px] w-[72px] text-center p-3.5">
                            <Image src={img1} alt='img1' className='!h-11 !w-11 mx-auto'></Image>
                        </div>
                        <div className='pl-3'>
                            <h6 className='text-[20px] font-semibold'>Largest Retailers Network</h6>
                            <p className='text-[14px] font-normal pt-[6px] text-[#5C5C5C]'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, </p>
                        </div>
                    </div>
                    <div className='bg-[#20222F] rounded-2xl py-6 my-6 px-4 w-[450px] flex items-center ml-24'>
                        <div className="bg-white rounded-full h-[72px] w-[72px] text-center p-3.5">
                            <Image src={img2} alt='img1' className='!h-11 !w-11 mx-auto'></Image>
                        </div>
                        <div className='pl-3'>
                            <h6 className='text-[20px] font-semibold text-white'>Sales</h6>
                            <p className='text-[14px] font-normal pt-[6px] text-white'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, </p>
                        </div>
                    </div>
                    <div className='bg-[#20222F1A] rounded-2xl py-6 px-4 w-[450px] flex items-center'>
                        <div className="bg-white rounded-full h-[72px] w-[72px] text-center p-3.5">
                            <Image src={img3} alt='img1' className='!h-11 !w-11 mx-auto'></Image>
                        </div>
                        <div className='pl-3'>
                            <h6 className='text-[20px] font-semibold'>Storage</h6>
                            <p className='text-[14px] font-normal pt-[6px] text-[#5C5C5C]'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whyfairdeal
