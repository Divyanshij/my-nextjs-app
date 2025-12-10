import React from 'react';
import Image from "next/image";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';
const Project4Page = () => {
  return (
    <main className="min-h-screen bg-white text-black ">
      <ProjectNavbar />
      <div>
        <div className='bg-gradient-to-b from-[#61C3DB] to-[#FFFFFF] w-full h-400 border border- flex flex-row justify-between items-center px-40 py-40'>
          <div className='flex flex-col justify-left items-center px-40 py-40'>
            <h2 className='text-4xl font-semibold text-underline text-align-left px-30'>Before</h2>
            <Image src="/Images/abun before.png" alt="Abun Website Redesign" width={500} height={1000} className='px-10 py-10' />
          </div>
          <div className='flex flex-col justify-end items-center px-10 py-10'>
            <h2 className='text-4xl font-semibold text-underline text-align-left px-30'>After</h2>
            <Image src="/Images/abun after.png" alt="Abun Website Redesign" width={500} height={1000} className='px-5 py-5' />
          </div>
        </div>
        <div className='flex flex-row item-align-left  px-40 py-40'>
          <h2 className='text-2xl font-semibold text-underline text-align-left px-30'>About Project</h2>
          <p className='text-lg text-[#464646] text-align-left px-40'>Abun website helps to generate SEO-optimized blogs using AI . Redesigned the website to improve user engagement, visual hierarchy,
             and overall brand appeal. The new design focuses on better color contrast, modern typography, and an inspiring layout to reflect the 
             brand&apos;s vision.</p>
        </div>
        <div className='flex flex-row flex-wrap justify-between items-center px-80 '>
            <Image src="/Images/abun problem.png" alt="Abun Website Redesign" width={400} height={1000} className='px-10 py-10' />
          <div className='block w-120 h-80 bg-[#37DDDB] '>
          <h2 className='text-2xl font-semibold text-underline text-center px-30 py-10'>Problem</h2>
          <p className='text-lg text-[#464646] text-align-left px-10'>Abun website helps to generate SEO-optimized blogs using AI . Redesigned the website to improve user engagement, visual hierarchy,
             and overall brand appeal. The new design focuses on better color contrast, modern typography, and an inspiring layout to reflect the 
             brand&apos;s vision.</p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between items-center px-80 '>
            
          <div className='block w-120 h-80 bg-[#8FFFFD] '>
          <h2 className='text-2xl font-semibold text-underline text-center px-30 py-10'>Solution</h2>
          <p className='text-lg text-[#464646] text-align-left px-10'>
            1. Enhance clarity by simplifying layout and content structure.<br/>
            2. Improve typography and color contrast for better readability and accessibility.<br/>
            3. Increase user engagement through interactive and intuitive elements.<br/>
          </p>
          </div><Image src="/Images/abun solution.png" alt="Abun Website Redesign" width={600} height={700} className='px-10 py-10' />
          
        </div>
      </div>
     <ProjectFooter />
    </main>
  );
};

export default Project4Page;

