"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';

const LandingPagePage = () => {
  return (
    <div className="bg-white text-white px-6 sm:px-10 md:px-20">
      <ProjectNavbar />
      <div className="flex flex-col items-center justify-center bg-white py-25">
        <div className="relative">
          <motion.h1 
            className="absolute left-0 top-10 -translate-y-1/2 text-[200px] md:text-[300px] font-bold text-black opacity-90 z-0 -ml-10"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            AIONIX
          </motion.h1>
          <div className="relative z-10">
            <Image src="/Images/Aionix1.png" alt="Landing Page" width={1000} height={1000} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-50 mt-10 gap-6">
          <div className="flex items-center gap-5 md:gap-2">
            <h1 className="text-5xl font-semibold text-gray-300">01</h1>
            <h2 className="text-3xl font-semibold text-left leading-tight px-10">
              <span className="block text-gray-300">About</span>
              <span className="block text-black">Project</span>
            </h2>
            <div className="hidden md:block bg-gray-200 w-1 h-30 "></div>
          </div>
          <p className="text-lg text-black max-w-xl text-center md:text-center md:ml-50">
            An interactive landing page for a global technology holding group to present its portfolio companies, business focus areas,
            and leadership team in a modern and engaging way. The design focuses on clarity, brand credibility, and user engagement.
          </p>
        </div>
      </div>
      <div className="w-80 h-50 items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] py-8 px-4 mx-auto">
      </div>
      <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-50 mt-10 gap-6">
        <div className="flex items-center gap-5 md:gap-2">
          <h1 className="text-5xl font-semibold text-gray-300">02</h1>
          <h2 className="text-3xl font-semibold text-left text-gray-400 px-10">
            Objective
          </h2>
          <div className="md-block bg-gray-200 w-1 h-30"></div>
          <p className='text-lg text-black text-center md:text-center md:ml-50 max-w-xl'>The objective was to showcase  the holding group&apos;s diverse technology businesses and build trust with a clean, interactive , professional design. It highlights business focus areas and leadership.</p>
        </div>
          </div> 
          <div className="w-80 h-50 items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] mx-auto"></div>
          <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-50 mt-10 gap-6">
        <div className="flex items-center gap-5 md:gap-2">
          <h1 className="text-5xl font-semibold text-gray-300">02</h1>
          <h2 className="text-3xl font-semibold text-left text-gray-400 px-10">
            <span className='text-gray-300'>Research&</span><br/>
            <span className='text-black'>Inspiration</span>
          </h2>
          <div className="md-block bg-gray-200 w-1 h-30"></div>
          <p className='text-lg text-black text-center md:text-center md:ml-50 max-w-xl'>Studied modern corporate sites like Meta Platforms, Alphabet, and Tata Group and identified common patterns: hero sections with a bold statement, companies overviews, leadership highlights .</p>
        </div>
          </div> 
          <div className="md:block bg-gray-200 w-300 h-1 mx-auto justify-center"></div>
          <div className="flex flex-col md:flex-col items-center w-full px-6 md:px-50 mt-10 gap-6">
        <div className="flex items-center gap-5 md:gap-2 ">
          <h1 className="text-5xl font-semibold text-gray-300 ">04</h1>
         
          <h2 className="text-3xl font-semibold text-left text-gray-400 px-10">
            <span className='text-gray-300'>Development &</span><br/>
            <span className='text-black'>Implementation</span>
          </h2>
          </div>
          <p className='text-lg text-black text-center  md-text-left max-w-2xl '>Moving from design to implementation, I focused on translating the Figma prototype into clean, maintainable code using React and Tailwind CSS, ensuring that the final product reflected both aesthetic , precision and technical efficiency.</p>
      </div> 
      <br/>
      <div className="flex flex-row items-center justify-center gap-10">
        <Image src="/Images/ReactLogo.png" alt="Landing Page" width={50} height={50} />
        <Image src="/Images/logostailwindcss.png" alt="Landing Page" width={100} height={100} />
        <Image src="/Images/cursor logo.png" alt="Landing Page" width={50} height={50} /> 
      </div>
      <br/>
      
      <ProjectFooter />
    </div>
  );
};
export default LandingPagePage;
