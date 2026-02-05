import Image from "next/image";
import ProjectNavbar from '@/app/components/ProjectNavbar';
import ProjectFooter from "@/app/components/ProjectFooter";

const UniEventApp = () => {
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
        <div className="bg-white rounded-t-lg shadow-lg px-4 sm:px-8 md:px-12 lg:px-40 py-12 sm:py-16 lg:py-20">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">University Event App</h2>
          </div>
          <div className="mt-6 sm:mt-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-500 text-center">
              The University Event App brings all campus happenings into one place.
              It helps students discover events, connect with peers,<br className="hidden lg:block"/>
              and navigate activities easily using a user-friendly interface.
            </p>
          </div>
        </div>

        {/* Transparent Window Space - background image visible here */}
        <div className="mt-0 mb-0 h-64 sm:h-80 md:h-96 lg:h-96 bg-transparent relative z-0"></div>
        
        {/* Content Section - All content below the window - White background */}
        <div className="bg-white rounded-b-lg shadow-lg px-4 sm:px-8 md:px-12 lg:px-40">
          {/* About Section */}
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-0 py-12 sm:py-16 lg:py-20 gap-4 lg:gap-0">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold">About</h2>
            <p className="text-base sm:text-lg lg:text-2xl text-[#464646] text-left px-0 sm:px-4 md:px-8 lg:px-40">
              The University Event App is a centralized platform designed on Visily to enhance student engagement and 
              simplify campus life. It serves as a digital companion for students to stay updated, connect, and explore 
              everything happening around their university. Built with a focus on real-time updates, social interaction, 
              and campus navigation, the app provides a smooth experience for both new and returning students.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-0 py-12 sm:py-16 lg:py-20 gap-4 lg:gap-0">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold">Mission</h2>
            <p className="text-base sm:text-lg lg:text-2xl text-[#464646] text-left px-0 sm:px-4 md:px-8 lg:px-40">
              The mission behind this app is to eliminate the confusion around campus activities and bring students closer
              to opportunities that matter.
            </p>
          </div>

          {/* User Survey Section */}
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-0 py-12 sm:py-16 lg:py-20 gap-4 lg:gap-0">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold">User Survey</h2>
            <div className="flex flex-row px-0 sm:px-4 md:px-8 lg:px-40 gap-4 sm:gap-6 md:gap-8 lg:gap-30">
              <div className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">19</h2>
                <p className="text-sm sm:text-base">responses</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">13</h2>
                <p className="text-sm sm:text-base">questions</p>
              </div>
            </div>
          </div>

          {/* User Survey Images Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 lg:px-0 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-4">
              <Image src="/Images/EventApp/image 63.png" width={600} height={375} alt="User Survey" className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto" />
              <Image src="/Images/EventApp/image 65.png" width={600} height={375} alt="User Survey" className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src="/Images/EventApp/piechart.png" width={900} height={500} alt="User Survey" className="w-[700px] sm:w-[750px] md:w-[800px] lg:w-[850px] xl:w-[800px] h-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <Image src="/Images/EventApp/image 67.png" width={600} height={375} alt="User Survey" className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto" />
              <Image src="/Images/EventApp/image 71.png" width={600} height={375} alt="User Survey" className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto" />
            </div>
          </div>

          {/* Design Screens Section */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-0 py-12 sm:py-16 lg:py-20">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-8 sm:mb-10 lg:mb-12">Design Screens</h2>
            <Image src="/Images/EventApp/designImage.png" width={1500} height={100} alt="Design Screens" className="w-full h-auto" />
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-12 sm:pt-16 lg:pt-0">
          <ProjectFooter />
        </div>
      </div>
    </main>
  );
};

export default UniEventApp;
