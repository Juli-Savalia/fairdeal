import React from 'react'

import Image from 'next/image'

import footerlogo from '../assets/images/Frame 56.png'
import social from '../assets/images/Social.png'
import { Twitter } from 'lucide-react';


const Footer = () => {
    return (
        <>
            <section className='bg-[#20222F] pt-16 px-24 pb-9'>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-[50%]">
                            <Image src={footerlogo} alt='flogo'></Image>
                            <div className='flex pt-10'>
                                <div className="w-[30%]">
                                    <h6 className='text-[18px] font-[600px] text-white'>Comapny</h6>
                                    <ul className='pt-4'>
                                        <li className='text-[16px] font-normal text-white '>About us</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Contact us</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Careers</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Buy on fairdeal</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Sell on fairdeal</li>
                                    </ul>
                                </div>
                                <div className="w-[30%]">
                                    <h6 className='text-[18px] font-[600px] text-white'>Services</h6>
                                    <ul className='pt-4'>
                                        <li className='text-[16px] font-normal text-white '>Retail Network</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Distribution</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Retail analytics</li>
                                    </ul>
                                </div>
                                <div className="w-[30%]">
                                    <h6 className='text-[18px] font-[600px] text-white'>Comapny</h6>
                                    <ul className='pt-4'>
                                        <li className='text-[16px] font-normal text-white '>Privacy Policy</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Terms & Conditions</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Return Policy</li>
                                        <li className='text-[16px] font-normal text-white pt-1'>Refund and cancellation policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <h6 className='text-[18px] font-[600px] text-white'>Office</h6>
                            <p className='text-[16px] font-normal pb-6 pt-3 text-white w-[87%]'>FDM Digital Solutions Pvt. Ltd.First Floor,1448, Landmark Corporate Centre, Landpark Cyber Park, Sector 67, Manesar, Gurugram, Haryana - 122101</p>
                            <h6 className='text-[18px] font-[600px] text-white pb-3'>Contact Us</h6>
                            <p className='text-[15px] font-normal pb-6 text-white w-[97%]'>innovation@fairdeal.market  |  011 90886753</p>
                            <h6 className='text-[18px] font-[600px] text-white pb-3'>Follow Us</h6>
                            <Image src={social} alt='social'></Image>
                        </div>
                    </div>

                </div>

            </section>
            {/* copyright */}
            <div className="bg-black p-6">
                <div className="container mx-auto">
                <div className="flex justify-between">
                    <p className='text-white text-[18px] font-normal'>Privacy Policy | Terms & Condition</p>
                    <p className='text-white text-[18px] font-normal'>Copyright © Fairdeal.market</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer