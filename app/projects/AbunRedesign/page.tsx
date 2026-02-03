import React from 'react';
import Image from "next/image";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';
const Project4Page = () => {
  return (
    <main className="min-h-screen  text-black ">
      <ProjectNavbar />
      <div>
        <div className='bg-gradient-to-b from-[#61C3DB] to-[#FFFFFF] w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-400 border border- flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-40 gap-6 lg:gap-0'>
          <div className='flex flex-col justify-left items-center px-4 sm:px-8 md:px-12 lg:px-40 py-4 sm:py-8 md:py-12 lg:py-40'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-underline text-align-left px-4 sm:px-8 md:px-12 lg:px-30 mb-4 lg:mb-0'>Before</h2>
            <Image src="/Images/abun before.png" alt="Abun Website Redesign" width={500} height={1000} className='w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto lg:w-[550px] px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10' />
          </div>
          <div className='flex flex-col justify-end items-center px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-4 md:py-6 lg:py-10'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-underline text-align-left px-4 sm:px-8 md:px-12 lg:px-30 mb-4 lg:mb-0'>After</h2>
            <Image src="/Images/abun after.png" alt="Abun Website Redesign" width={500} height={1000} className='w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto lg:w-[460px] px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 lg:py-5' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row item-align-left gap-4 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-40'>
          <h2 className='text-xl sm:text-2xl lg:text-4xl font-semibold text-underline text-align-left px-4 sm:px-8 md:px-12 lg:px-30'>About Project</h2>
          <p className='text-base sm:text-lg lg:text-2xl text-[#464646] text-align-left px-4 sm:px-8 md:px-12 lg:px-40'>Abun website helps to generate SEO-optimized blogs using AI . Redesigned the website to improve user engagement, visual hierarchy,
             and overall brand appeal. The new design focuses on better color contrast, modern typography, and an inspiring layout to reflect the 
             brand&apos;s vision.</p>
        </div>
        <div className='flex flex-col lg:flex-row flex-wrap justify-between items-center gap-6 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-80 py-6 lg:py-0'>
            <Image src="/Images/abun problem.png" alt="Abun Website Redesign" width={400} height={1000} className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto lg:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10' />
          <div className='block w-full max-w-md lg:w-120 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:h-80 bg-[#37DDDB] rounded-lg lg:rounded-none'>
          <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold text-underline text-center px-4 sm:px-6 md:px-8 lg:px-30 py-4 sm:py-6 md:py-8 lg:py-6'>Problem</h2>
          <p className='text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-4 sm:px-6 md:px-8 lg:px-10 pb-4 lg:pb-0'>Abun website helps to generate SEO-optimized blogs using AI . Redesigned the website to improve user engagement, visual hierarchy,
             and overall brand appeal. The new design focuses on better color contrast, modern typography, and an inspiring layout to reflect the 
             brand&apos;s vision.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row flex-wrap justify-between items-center gap-6 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-80 py-6 lg:py-0'>
            
          <div className='block w-full max-w-md lg:w-120 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:h-80 bg-[#8FFFFD] rounded-lg lg:rounded-none order-2 lg:order-1'>
          <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold text-underline text-center px-4 sm:px-6 md:px-8 lg:px-30 py-4 sm:py-6 md:py-8 lg:py-10'>Solution</h2>
          <p className='text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-4 sm:px-6 md:px-8 lg:px-10 pb-4 lg:pb-0'>
            1. Enhance clarity by simplifying layout and content structure.<br/>
            2. Improve typography and color contrast for better readability and accessibility.<br/>
            3. Increase user engagement through interactive and intuitive elements.<br/>
          </p>
          </div>
          
          <Image src="/Images/abun solution.png" alt="Abun Website Redesign" width={600} height={700} className='w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none h-auto lg:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 order-1 lg:order-2' />
          
          <video
            src="/Images/abun_video_clip.mp4"
            width={600}
            height={700}
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none h-auto lg:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-28 order-1 lg:order-2"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
     <ProjectFooter />
    </main>
  );
};

export default Project4Page;

