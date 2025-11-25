import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';
const CryptoAppPage = () => {
  return (
    <div>
      <ProjectNavbar />
      <div className='relative bg-white text-black min-h-screen'>
        <div className='bg-[#50488D] w-full h-100 flex items-center justify-center'>
          <h2 className='text-4xl font-semibold text-white text-center'>A modern, intuitive app for <br/> tracking and trading <br/>
          Cryptocurrencies.</h2>
          <div className='relative flex flex-row gap-10'>
          <Image src="/Images/cryptoscreen1.png" alt="Crypto App" width={200} height={200} className='' />
          <Image src="/Images/cryptoscreen2.png" alt="Crypto App" width={200} height={200} className='' />
          <Image src="/Images/cryptoscreen3.png" alt="Crypto App" width={200} height={200} className='' />
          </div>
        </div>
      <div className='flex flex-col item-align-left px-40 py-40'>
        <h2 className='text-4xl font-semibold text-black text-align-left py-10 px-30'>About Project</h2>
        <p className='text-lg text-[#464646] text-align-left px-40'>
          Cryptocurrency apps are often packed with features but lack simplicity and clarity .Through user interviews and competitor analysis, I <br/>
          found that many users feel overwhelmed by complex interfaces and technical jargon. Most rely on word-of-mouth or social media to <br/>
          figure out how to get started. Crypto Fest was designed on Figma to solve this — offering a clean, intuitive experience that makes tracking and trading crypto feel easy and approachable for everyone.</p>
      </div>
      <div className='px-100 flex flex-row gap-50'>
        <div className='inline-block bg-[#7767AB] rounded-lg px-6 py-1 text-white'>UI Design</div>
        <div className='inline-block bg-[#7767AB] rounded-lg px-6 py-1 text-white'>User Research</div>
        <div className='inline-block bg-[#7767AB] rounded-lg px-6 py-1 text-white'>User Testing</div>
      </div>
      <div className='px-150 flex flex-row gap-50'>
        <div className='inline-block bg-[#7767AB] rounded-lg px-6 py-1 text-white'>UI Design</div>
        <div className='inline-block bg-[#7767AB] rounded-lg px-6 py-1 text-white'>User Research</div>
        </div>
        <div className='flex flex-col item-align-left px-40 py-40'>
        <h2 className='text-4xl font-semibold text-black text-align-left py-10 px-30'>User Persona</h2>
        <p className='text-lg text-[#464646] text-align-left px-40'>
        To gain deeper insights into user behavior and expectations, I interviewed 2 participants via Google Meet — a mix of Intermediate <br/>crypto traders and beginners who recently started using crypto platforms.
        </p>
      </div>
      <div>
        <Image src="/Images/FemaleUserPersona.png" alt="User Persona" width={1000} height={1000} className=''/>
        <Image src="/Images/MaleUserPersona.png" alt="User Persona" width={1000} height={1000} className=''/>
      </div>
      <div className='flex flex-col item-align-left px-40 py-40'>
        <h2 className='text-4xl font-semibold text-black text-align-left py-10 px-30'>Secondary Research</h2>
        <p className='text-lg text-[#464646] text-align-left px-40'>
        To gain deeper insights into user behavior and expectations, I interviewed 2 participants via Google Meet — a mix of Intermediate <br/>crypto traders and beginners who recently started using crypto platforms.
        </p>
      </div>
     
        </div>
        <ProjectFooter />
      </div>
  );
};

export default CryptoAppPage;

