import Image from "next/image";
import ProjectNavbar from '@/app/components/ProjectNavbar';

const Project3Page = () => {
  return (
    <main className="min-h-screen bg-white text-black relative">
      <div>
        <ProjectNavbar />
      </div>

      {/* Background Image - Fixed position, stays in place - Responsive */}
      <div className="flex justify-center items-center fixed left-1/2 -translate-x-1/2 top-[10%] md:top-[15%] z-0 w-full max-w-5xl px-4">
        <Image 
          src="/Images/EventApp/mobileParallelDesign.png" 
          width={1000} 
          height={500} 
          className="rounded-4xl w-full h-auto max-w-full object-contain" 
          alt="" 
        />
      </div>

      {/* White Frame Container with Window - Full height from top */}
      <div className="relative z-10 absolute top-0 left-0 right-0 min-h-screen">
        {/* Top Section with Heading and Description - White background */}
        <div className="bg-white rounded-t-lg shadow-lg px-6 py-16 md:px-16">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">University Event App</h2>
          </div>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-500 text-center">The University Event App brings all campus happenings into one place.
              It helps students discover events,connect with peers,<br className="hidden lg:block"/>
               and navigate activities easily using a user-friendly interface.</p>
          </div>
        </div>
        
        {/* Transparent Window Space - background image visible here */}
        <div className="mt-0 mb-0 h-64 sm:h-80 md:h-96 lg:h-96 bg-transparent relative z-0"></div>
        
        {/* Content Section - All content below the window - White background */}
        <div className="bg-white rounded-b-lg shadow-lg px-4 sm:px-6 py-6 sm:py-8 md:px-16 lg:px-6 lg:py-8">
        <div className="flex flex-col lg:flex-row item-align-left px-4 sm:px-8 md:px-12 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-40 gap-4 lg:gap-0">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-underline">About</h2>
          <p className="text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-0 sm:px-4 md:px-8 lg:px-40">
          The University Event App is a centralized platform designed on Visily to enhance student engagement and 
          simplify campus life. It serves as a digital companion for students to stay updated, connect, and explore 
          everything happening around their university. Built with a focus on real-time updates, social interaction, 
          and campus navigation, the app provides a smooth experience for both new and returning students.</p>
        </div>
        <div className="flex flex-col lg:flex-row item-align-left px-4 sm:px-8 md:px-12 lg:px-40 py-6 sm:py-8 lg:py-0 gap-4 lg:gap-0">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-underline">Mission</h2>
          <p className="text-base sm:text-lg lg:text-lg text-[#464646] text-align-left px-0 sm:px-4 md:px-8 lg:px-40">
          The mission behind this app is to eliminate the confusion around campus activities and bring students closer
          to opportunities that matter.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row item-align-left px-4 sm:px-8 md:px-12 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-40 gap-4 lg:gap-0">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-underline">User Survey</h2>
          <div className="flex flex-row item-align-left px-0 sm:px-4 md:px-8 lg:px-50 gap-4 sm:gap-6 md:gap-8 lg:gap-50">
            <div className="flex flex-col item-align-left px-2 sm:px-4 md:px-6 lg:px-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black">19</h2>
              <p className="text-sm sm:text-base">responses</p>
            </div>
          <div className="flex flex-col item-align-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-black">13</h2>
            <p className="text-sm sm:text-base">questions</p>
          </div>
         
          </div>
          
        </div>
        <div className="flex flex-col lg:flex-row item-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 lg:px-0">
          <div className="flex flex-col gap-4">
            <Image src="/Images/EventApp/image 63.png" width={400} height={250} alt="User Survey" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto lg:w-auto" />
            <Image src="/Images/EventApp/image 65.png" width={400} height={250} alt="User Survey" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto lg:w-auto" />
            </div>
            <Image src="/Images/EventApp/piechart.png" width={500} height={400} alt="User Survey" className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-none h-auto lg:w-auto" />
           <div className="flex flex-col gap-4"> 
            <Image src="/Images/EventApp/image 67.png" width={400} height={250} alt="User Survey" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto lg:w-auto" />
            <Image src="/Images/EventApp/image 71.png" width={400} height={250} alt="User Survey" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto lg:w-auto" />
         </div> 
         </div>
         <div className="px-4 sm:px-8 md:px-12 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-40">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-underline mb-4 sm:mb-6 lg:mb-0">Design Screens</h2>
          <Image src="/Images/EventApp/designImage.png" width={1500} height={100} alt="Design Screens" className="w-full h-auto" />
         </div>
        </div>
      </div>
    </main>
  );
};

export default Project3Page;

