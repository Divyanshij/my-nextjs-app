"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';

const LandingPagePage = () => {

  return (
    <main className="min-h-screen bg-white text-white px-4 sm:px-6 md:px-12 lg:px-20">
      <ProjectNavbar />
      <div className="flex flex-col items-center justify-center bg-white py-25">
        {/* Hero Section */}
        
        <div className="relative">
          {/* Hero Title */}
          <motion.h1 
            className="absolute left-0 top-10 -translate-y-1/2 text-[200px] md:text-[300px] font-bold text-black opacity-90 z-0 -ml-20"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: -50, opacity: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            AIONIX
          </motion.h1>
          {/* Hero Image */}
          <div className="relative z-10 ">
            <Image src="/Images/Aionix1.png" alt="Landing Page" width={800} height={1000} className="  h-auto" />
          </div>
          </div>
        </div>
        {/* About Project Section */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center w-full px-4 sm:px-6 md:px-12 lg:px-6 xl:px-50 mb-16 sm:mb-20 md:mb-24 lg:mb-32 gap-6 sm:gap-8 lg:gap-10">
          {/* About Project Title */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5 xl:gap-2">
            <h1 className="text-[40px] sm:text-[42px] md:text-[44px] lg:text-[46px] font-semibold text-gray-300">01</h1>
            <h2 className="text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] font-semibold text-left leading-tight px-4 sm:px-6 md:px-8 lg:px-10">
              <span className="block text-gray-300">About</span>
              <span className="block text-black">Project</span>
            </h2>
            <div className="hidden md:block lg:block bg-gray-200 w-1 h-20 md:h-24 lg:h-30"></div>
          </div>
          {/* About Project Description */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] text-black max-w-xl text-center md:text-center lg:ml-0 xl:ml-50">
            An interactive landing page for a global technology holding group to present its portfolio companies, business focus areas,
            and leadership team in a modern and engaging way. The design focuses on clarity, brand credibility, and user engagement.
          </p>
        </div>
      {/* Image or video section*/}
      <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 order-1 lg:order-2">
        <div className="w-full max-w-6xl bg-[#E0F0F5]  rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-2 flex items-center justify-center">
      <video
            src="/Images/Aionix_video_clip.mp4"
            width={600}
            height={700}
            className="w-[85%] sm:w-[80%] md:w-[75%] h-auto  h-auto lg:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 order-1 lg:order-2"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center w-full px-4 sm:px-6 md:px-12 lg:px-6 xl:px-50 mt-6 sm:mt-8 md:mt-10 lg:mt-10 gap-4 sm:gap-6 lg:gap-6 rounded-2xl">
        {/* Objective Title */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5 xl:gap-2">
          <h1 className="text-[40px] sm:text-[42px] md:text-[44px] lg:text-[46px] font-semibold text-gray-300">02</h1>
          <h2 className="text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] font-semibold text-left text-gray-400 px-4 sm:px-6 md:px-8 lg:px-10">
            Objective
          </h2>
          <div className="hidden md:block lg:block bg-gray-200 w-1 h-20 md:h-24 lg:h-30"></div>
          {/* Objective Description */}
          <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] text-black text-center md:text-center lg:ml-0 xl:ml-50 max-w-xl'>The objective was to showcase  the holding group&apos;s diverse technology businesses and build trust with a clean, interactive , professional design. It highlights business focus areas and leadership.</p>
        </div>
          </div>
          <div> 
          <Image src="/Images/Aionix_company_interaction.png" alt="Landing Page" width={800} height={1000} className="flex justify-center item-center  w-full x-4 sm:px-10 md:px-20 lg:px-40 py-60 " />
 
          </div> 
          <div className="flex flex-col md:flex-row lg:flex-row items-center w-full px-4 sm:px-6 md:px-12 lg:px-6 xl:px-50 mt-6 sm:mt-8 md:mt-10 lg:mt-10 gap-4 sm:gap-6 lg:gap-6">
        {/* Research & Inspiration Title */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5 xl:gap-2">
          <h1 className="text-[40px] sm:text-[42px] md:text-[44px] lg:text-[46px] font-semibold text-gray-300">03</h1>
          <h2 className="text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] font-semibold text-left text-gray-400 px-4 sm:px-6 md:px-8 lg:px-10">
            <span className='text-gray-300'>Research&</span><br/>
            <span className='text-black'>Inspiration</span>
          </h2>
          <div className="hidden md:block lg:block bg-gray-200 w-1 h-20 md:h-24 lg:h-30"></div>
          {/* Research & Inspiration Description */}
          <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] text-black text-center md:text-center lg:ml-0 xl:ml-50 max-w-xl'>Studied modern corporate sites like Meta Platforms, Alphabet, and Tata Group and identified common patterns: hero sections with a bold statement, companies overviews, leadership highlights .</p> 
        </div>
          </div> 
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="hidden md:block lg:block bg-gray-200 w-full max-w-7xl lg:w-300 h-1 mx-auto justify-center my-4 lg:my-0 "></div>
          <div className="flex flex-col md:flex-col lg:flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-6 xl:px-50 mt-6 sm:mt-8 md:mt-10 lg:mt-19 gap-4 sm:gap-6 lg:gap-6">
        {/* Development & Implementation Title */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5 xl:gap-2">
          <h1 className="text-[40px] sm:text-[42px] md:text-[44px] lg:text-[46px] font-semibold text-gray-300">04</h1>
         
          <h2 className="text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] font-semibold text-left text-gray-400 px-4 sm:px-6 md:px-8 lg:px-10">
            <span className='text-gray-300'>Development &</span><br/>
            <span className='text-black'>Implementation</span>
          </h2>
          </div>
          {/* Development & Implementation Description */}
          <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] text-black text-center md:text-left lg:text-center xl:md-text-left max-w-2xl'>Moving from design to implementation, I focused on translating the Figma prototype into clean, maintainable code using React and Tailwind CSS, ensuring that the final product reflected both aesthetic , precision and technical efficiency.</p>
      </div> 
      <br/>
      <br/>
      <br/>
      
      {/* Icons of Software used */}
      <div className="flex flex-row items-center justify-center gap-40">
        <Image src="/Images/ReactLogo.png" alt="Landing Page" width={60} height={50} />
        <Image src="/Images/logostailwindcss.png" alt="Landing Page" width={150} height={100} />
        <Image src="/Images/cursor logo.png" alt="Landing Page" width={60} height={50} /> 
      </div>
      <br/>
      <br/>
      <br/>
      
      <ProjectFooter />
    </main>
  );
};
export default LandingPagePage;
