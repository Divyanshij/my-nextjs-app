import React from 'react';
import Image from "next/image";

import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';

const CryptoAppPage = () => {
  return (
    <div>
      <ProjectNavbar />

      <div className='relative bg-white text-black min-h-screen'>
        {/* Hero Section */}
        <div className='relative bg-[#50488D] flex flex-col items-center text-center text-white min-h-[500px] sm:min-h-[600px] md:min-h-[750px] lg:h-150 pt-12 sm:pt-16 md:pt-20 lg:pt-20 overflow-visible mt-[-98px] pb-24'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-[1.5] px-4 sm:px-8 md:px-12 lg:px-40 py-6 sm:py-8 lg:py-29'>
            A modern, intuitive cryptocurrency app that helps youtrack real-time prices,
            and trade with confidence — all in one seamless experience.
          </h2>
          {/* Images of the Crypto App */}
          <div className='absolute left-1/2 bottom-0 flex w-full max-w-5xl translate-y-2/5 -translate-x-1/2 justify-between items-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 lg:px-0'>
            <Image src="/Images/cryptoscreen1.png" alt="Crypto App screen 1" width={250} height={250} className='w-20 sm:w-32 md:w-40 lg:w-[260] h-auto drop-shadow-2xl rounded-2xl' />
            <Image src="/Images/cryptoscreen2.png" alt="Crypto App screen 2" width={250} height={240} className='w-20 sm:w-32 md:w-40 lg:w-[260] h-auto drop-shadow-2xl rounded-2xl -translate-y-[-40px] sm:-translate-y-[-60px] md:-translate-y-[-80px] lg:-translate-y-[-90px]'/>
            <Image src="/Images/cryptoscreen3.png" alt="Crypto App screen 3" width={250} height={250} className='w-20 sm:w-32 md:w-40 lg:w-[260] h-auto drop-shadow-2xl rounded-2xl' />
          </div>
        </div>

        {/* About Project Section */}
        <div className='flex flex-col item-align-left px-4 sm:px-8 md:px-12 lg:px-40 pt-32 sm:pt-48 md:pt-60 lg:pt-72 pb-12 sm:pb-16 lg:pb-20'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-align-left py-6 sm:py-8 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-30'>About Project</h2>
          <p className='text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-4 sm:px-8 md:px-12 lg:px-40'>
            Cryptocurrency apps are often packed with features but lack simplicity and clarity .Through user interviews and competitor analysis, I <br className="hidden lg:block"/>
            found that many users feel overwhelmed by complex interfaces and technical jargon. Most rely on word-of-mouth or social media to <br className="hidden lg:block"/>
            figure out how to get started. Crypto Fest was designed on Figma to solve this — offering a clean, intuitive experience that makes tracking and trading crypto feel easy and approachable for everyone.
          </p>
        </div>

        {/* Skills Section */}
        <div className='px-4 sm:px-8 md:px-12 lg:px-100 flex flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-50 justify-center lg:justify-start'>
          <div className='inline-block bg-[#7767AB] rounded-xl px-4 sm:px-10 py-2 sm:py-3 text-white text-sm sm:text-base'>UI Design</div>
          <div className='inline-block bg-[#7767AB] rounded-xl px-4 sm:px-10 py-2 sm:py-3 text-white text-sm sm:text-base'>UX Design</div>
          <div className='inline-block bg-[#7767AB] rounded-xl px-4 sm:px-10 py-2 sm:py-3 text-white text-sm sm:text-base'>User Interview</div>
        </div>

        <div className='px-4 sm:px-8 md:px-12 lg:px-140 flex flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-50 py-6 sm:py-8 lg:py-10 justify-center lg:justify-start'>
          <div className='inline-block bg-[#7767AB] rounded-xl px-4 sm:px-10 py-2 sm:py-3 text-white text-sm sm:text-base'>Wireframing</div>
          <div className='inline-block bg-[#7767AB] rounded-xl px-4 sm:px-10 py-2 sm:py-3 text-white text-sm sm:text-base'>Prototyping</div>
        </div>

        <div className='flex flex-col item-align-left px-4 sm:px-8 md:px-12 lg:px-40 py-4 sm:py-6 lg:py-5'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-align-left py-6 sm:py-8 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-30'>User Persona</h2>
          <p className='text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-4 sm:px-8 md:px-12 lg:px-40'>
            To gain deeper insights into user behavior and expectations, 
            I interviewed 2 participants via Google Meet — a mix of Intermediate<br className="hidden lg:block"/>
            crypto traders and beginners who recently started using crypto platforms.
          </p>
        </div>

        {/* User Persona Images Section */}
        <div className='flex flex-col px-4 sm:px-8 md:px-12 lg:px-90 relative'>
          <Image src="/Images/FemaleUserPersona.png" alt="User Persona" width={600} height={300} className='w-full max-w-full lg:max-w-[650px] h-auto self-start relative z-10'/>
          <Image src="/Images/MaleUserPersona.png" alt="User Persona" width={600} height={300} className='w-full max-w-full lg:max-w-[650px] h-auto self-end -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 relative z-20'/>
        </div>

        {/* Secondary Research Section */}
       
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-align-left py-6 sm:py-8 lg:py-30 px-4 sm:px-8 md:px-12 lg:px-70'>Secondary Research</h2>    
        

        {/* Where's the opportunity? Section */}
        <div className='flex flex-col lg:flex-row flex-wrap gap-4 sm:gap-5 lg:gap-5 px-4 sm:px-8 md:px-12 lg:px-70'>
          <div className='border-2 border-[#7767AB] w-full lg:w-90 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-60 rounded-2xl px-4 py-4'>
            <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-align-left text-underline'>Where&apos;s the opportunity?</h2>
            <p className="text-sm sm:text-base">
              1. Design a clean, beginner-friendly UI.<br/>
              2. Provide smart onboarding that explains features simply.<br/>
              3. Include real-time updates, custom alerts, and a minimal dashboard showing only essential info.<br/>
            </p>
          </div>
          {/* What challenges do beginners face? */}
          <div className='border-2 border-[#7767AB] w-full lg:w-100 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-60 rounded-2xl px-4 py-4'>
            <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-align-left text-underline'>What challenges do beginners face?</h2>
            <p className="text-sm sm:text-base">
              A Finder.com study found that 36% of crypto users are beginners — many feel overwhelmed by complex platforms and drop out early.
            </p>
          </div>
          {/* Who's using crypto, and how? Section */}
          <div className='border-2 border-[#7767AB] w-full lg:w-90 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-60 rounded-2xl px-4 py-4'>
            <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-align-left text-underline'>Who&apos;s using crypto, and how?</h2>
            <p className="text-sm sm:text-base">
              In 2024, over 562–659 million people globally own cryptocurrency —
              a sharp rise from 420 million in 2023. The majority are aged 24–35, and mobile apps remain the 
              preferred tool for real-time tracking and quick access.                 
            </p>
          </div>
        </div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-align-left py-6 sm:py-8 lg:py-30 px-4 sm:px-8 md:px-12 lg:px-70'>Wireframe</h2>
        <div className='items-center px-4 sm:px-8 md:px-12 lg:px-40'>
          <div className='flex flex-row gap-25 justify-center '>
            <Image src="/Images/Cryptowireframe1.png" alt="Crypto App" width={300} height={500} />
            <Image src="/Images/CryptoWireframe2.png" alt="Crypto App" width={300} height={500} />
            <Image src="/Images/CryptoWireframe3.png" alt="Crypto App" width={300} height={500} />
          </div>
          <div className='flex flex-row gap-25 justify-center py-12 sm:py-16 lg:py-10'>
            <Image src="/Images/CryptoWireframe4.png" alt="Crypto App" width={300} height={500} />
            <Image src="/Images/CryptoWireframe5.png" alt="Crypto App" width={300} height={500} />
            <Image src="/Images/CryptoWireframe6.png" alt="Crypto App" width={300} height={500} />
          </div>
        </div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-align-left py-6 sm:py-8 lg:py-30 px-4 sm:px-8 md:px-12 lg:px-70'>Prototype</h2>
        <div className='items-center px-4 sm:px-8 md:px-12 lg:px-40'>
          <div className='flex flex-row gap-20  justify-center '>
            <Image src="/Images/CryptoPrototype.png" alt="Crypto App" width={900} height={500} />
          </div>
        </div>
        {/* Footer Section */}
        <div className='pt-20'>
          <ProjectFooter />
        </div>
      </div>
    </div>
  );
};

export default CryptoAppPage;