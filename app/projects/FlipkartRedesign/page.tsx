import React from 'react';
import Image from 'next/image';
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from '@/app/components/ProjectFooter';

const FlipkartRedesignPage = () => {
  return (
    <div className="bg-white text-black px-6 py-16 md:px-16">
      <ProjectNavbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-5xl font-semibold mb-6 text-center">
          Modernizing a Trusted <br /> Platform with Fresh Design <br /> Thinking
        </h1>
        <div>
          <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-center text-underline">Overview</h2>
          <p className="text-lg text-gray-500 mb-4 text-center max-w-3xl leading-relaxed">
            If you&apos;ve ever tried to buy anything online in India, chances are you&apos;ve used Flipkart. From books to Bluetooth earphones, from washing machines to weirdly specific kitchen gadgets, it&apos;s everywhere. <br/>
            &quot;Flipkart is a large Indian e-commerce company founded in 2007 by Sachin Bansal and Binny Bansal&quot;<br/>
            While Flipkart is a giant in terms of selection and delivery, the user experience? Let&apos;s just say it hasn&apos;t exactly aged like fine wine.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-center text-underline mt-10">HOW I REDESIGN IT</h2>
        </div>
      <div className="flex flex-row gap-40 py-10">
        <div className="w-96 flex flex-col py-8 px-2 shadow-[0_4px_12px_rgba(4,45,250,0.3)]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <Image src="/Images/ProblemDiscovery.png" alt="Problem Discovery" width={100} height={100} />
            <h2 className="text-2xl md:text-2xl font-semibold text-underline">Problem Discovery</h2>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl">
            1. The design feels visually congested — too many products displayed in a small space, making it difficult to find what you need.<br/>
            <br/>
            2. The layout overwhelms instead of guiding the user, making the overall experience cluttered and less engaging.<br/>
          </p>
        </div>
        <div className="w-96 flex flex-col py-8 px-2 shadow-[0_4px_12px_rgba(4,45,250,0.3)]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <Image src="/Images/Define.png" alt="Define" width={100} height={100} />
            <h2 className="text-2xl md:text-2xl font-semibold text-underline">Define</h2>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl">
          1. Flipkart&apos;s design feels cluttered and hard to navigate due to dense layouts and poor spacing.
          <br/>
          <br/>
          2. The redesign brings clarity with cleaner hierarchy, better spacing, and smoother flow. </p>
        </div>
      </div>
      <div className="flex flex-row gap-40 py-10"> 
        <div className="w-96 flex flex-col py-8 px-2 shadow-[0_4px_12px_rgba(4,45,250,0.3)]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <Image src="/Images/Ideate.png" alt="Ideate" width={100} height={100} />
            <h2 className="text-2xl md:text-2xl font-semibold text-underline">Ideate</h2>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl">
          1. Flipkart&apos;s design feels cluttered and hard to navigate due to dense layouts and poor spacing.
          <br/>
          <br/>
          2. The redesign brings clarity with cleaner hierarchy, better spacing, and smoother flow. </p>
        </div>
        <div className="w-96 flex flex-col py-8 px-2 shadow-[0_4px_12px_rgba(4,45,250,0.3)]">
          <div className="flex flex-row items-center gap-4 mb-4">
            <Image src="/Images/Redesign.png" alt="Redesign" width={100} height={100} />
            <h2 className="text-2xl md:text-2xl font-semibold text-underline">Redesign</h2>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl">
          1. Flipkart&apos;s design feels cluttered and hard to navigate due to dense layouts and poor spacing.
          <br/>
          <br/>
          2. The redesign brings clarity with cleaner hierarchy, better spacing, and smoother flow. </p>
        </div>  
      </div>
      </div>
      <div className='flex flex-row items-center justify-center gap-10'>
        <h2 className='text-2xl md:text-2xl font-semibold mb-6 text-center text-underline'> Why to Redesign ?</h2>
        <Image src="/Images/why to redesign.png" alt="Why Redesign" width={200} height={100} />
      </div>
      <div className=" gap-10 w-7xl h-110 mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-3xl py-8 px-4 my-10">
        <h2 className='flex text-2xl md:text-2xl font-semibold mb-6 text-top-left text-underline py-5 px-14'>The design is visually congested</h2>
        <Image src="/Images/Redesign1.png" alt="The design is visually congested" width={1000} height={1000} className='justify-center px-14 py-2' />
        <p className='text-lg text-gray-700  px-54 py-5'>
           Oversized images takes up space without adding value
        <br/>
        <br/>
          Limited hover effects reduces interactivity and user engagement.</p>
      </div>
        <div className="flex flex-row gap-10 max-w-7xl mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-3xl py-8 px-4 my-10 items-center">
          <div className="flex flex-col flex-1">
            <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-underline py-5 px-14">Aesthetics and spacing</h2>
            <p className="text-lg text-gray-700 py-5 px-5">
              Lack of color variation. Makes the design feel flat and less visually appealing<br/>
              <br/>
              No dedicated section for top offers. Important deals are hard to find
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image src="/Images/Redesign2.png" alt="The design is visually congested" width={700} height={800} className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-row gap-10 max-w-7xl mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-3xl py-5 px-4 my-10 items-center">
          <div className="flex flex-col flex-1">
            <p className="text-lg text-gray-700 py-1 px-5">
              Product name includes unnecessary details , options like color and storage should be selectable separately.
              <br/>
              <br/>
              <br/>
              <br/>
              Bank offers appear cluttered and lack visual emphasis beyond bold text.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image src="/Images/Redesign3a.png" alt="The design is visually congested" width={700} height={800} className="rounded-lg" />
            <Image src="/Images/Redesign3b.png" alt="The design is visually congested" width={700} height={800} className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-row gap-10 max-w-7xl mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-3xl py-5 px-4 my-10 items-center">
          <div className="flex flex-col flex-1">
            <p className="text-lg text-gray-700 py-1 px-5">
            Buttons lack hover transitions and the color scheme feels visually unappealing.
            <br/>
            <br/>
            <br/>
            Color & Storage  selection should appear right after the product name, but currently it's placed too far down after bank offers and other sections.
            </p>
          </div>
          <div className="flex-shrink-0 ">
            <Image src="/Images/Redesign4a.png" alt="The design is visually congested" width={700} height={800} className="rounded-lg " />
            <Image src="/Images/Redesign4b.png" alt="The design is visually congested" width={700} height={800} className="rounded-lg " />
          </div>
        </div>
        <ProjectFooter />
      </div>
  );
};

export default FlipkartRedesignPage;