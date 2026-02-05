"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectFooter from "@/app/components/ProjectFooter";

const SECTION_PADDING = "px-4 sm:px-6 md:px-12 lg:px-6 xl:px-[20px]";
const SECTION_GAP = "gap-4 sm:gap-6 md:gap-6";
const SECTION_CENTER = "w-full max-w-6xl mx-auto";
const HEADING_GROUP = "flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5";
const NUMBER_STYLE = "text-[40px] sm:text-[42px] md:text-[46px] lg:text-[50px] font-semibold text-gray-300";
const TITLE_STYLE = "text-[30px] sm:text-[32px] md:text-[34px] lg:text-[38px] font-semibold text-left px-4 sm:px-6 md:px-8 lg:px-10";
const BODY_STYLE = "text-[16px] sm:text-[18px] md:text-[28px] text-black max-w-4xl text-center md:text-center lg:ml-0 xl:ml-[60px]";
const DIVIDER_VERTICAL = "hidden md:block bg-gray-200 w-1 min-w-[4px] shrink-0 h-20 md:h-24 lg:h-28";

const LandingPagePage = () => {
  return (
    <main className="min-h-screen bg-white text-white px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <ProjectNavbar />

      <div className="flex flex-col items-center justify-center bg-white py-24 gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28">
        {/* Hero Section */}
        <div className="relative">
          <motion.h1
            className="absolute left-0 top-10 -translate-y-1/2 text-[200px] md:text-[300px] font-bold text-black opacity-90 z-0 -ml-20"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: -50, opacity: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            AIONIX
          </motion.h1>
          <div className="relative z-10">
            <Image
              src="/Images/Aionix1.png"
              alt="Landing Page"
              width={800}
              height={1000}
              className="h-auto"
            />
          </div>
        </div>

        {/* About Project Section */}
        <div className={`flex flex-col md:flex-row items-center ${SECTION_CENTER} ${SECTION_PADDING} gap-6 sm:gap-8 lg:gap-10`}>
          <div className={`${HEADING_GROUP} xl:gap-2`}>
            <h1 className={NUMBER_STYLE}>01</h1>
            <h2 className={`${TITLE_STYLE} leading-tight`}>
              <span className="block text-gray-300">About</span>
              <span className="block text-black">Project</span>
            </h2>
            <div className={DIVIDER_VERTICAL} />
          </div>
          <p className={BODY_STYLE}>
            An interactive landing page for a global technology holding group to present its portfolio companies, business focus areas,
            and leadership team in a modern and engaging way. The design focuses on clarity, brand credibility, and user engagement.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-5xl bg-[#E0F0F5] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-2 flex items-center justify-center">
            <video
              src="/Images/Aionix_video_clip.mp4"
              width={600}
              height={700}
              className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-auto h-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* Objective Section */}
        <div className={`flex flex-col md:flex-row items-center ${SECTION_CENTER} ${SECTION_PADDING} ${SECTION_GAP} rounded-2xl`}>
          <div className={`${HEADING_GROUP} xl:gap-2`}>
            <h1 className={NUMBER_STYLE}>02</h1>
            <h2 className={`${TITLE_STYLE} text-gray-400`}>Objective</h2>
            <div className={DIVIDER_VERTICAL} />
            <p className={BODY_STYLE}>
              The objective was to showcase the holding group&apos;s diverse technology businesses and build trust with a clean, interactive, professional design. It highlights business focus areas and leadership.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20">
          <Image
            src="/Images/Aionix_company_interaction.png"
            alt="Company interaction"
            width={500}
            height={500}
            className="w-full h-auto max-w-6xl mx-auto"
          />
        </div>

        {/* Research & Inspiration Section */}
        <div className={`flex flex-col md:flex-row items-center ${SECTION_CENTER} ${SECTION_PADDING} ${SECTION_GAP}`}>
          <div className={`${HEADING_GROUP} xl:gap-2`}>
            <h1 className={NUMBER_STYLE}>03</h1>
            <h2 className={`${TITLE_STYLE} text-gray-400`}>
              <span className="text-gray-300">Research&</span>
              <br />
              <span className="text-black">Inspiration</span>
            </h2>
            <div className={DIVIDER_VERTICAL} />
            <p className={BODY_STYLE}>
              Studied modern corporate sites like Meta Platforms, Alphabet, and Tata Group and identified common patterns: hero sections with a bold statement, companies overviews, leadership highlights.
            </p>
          </div>
        </div>

        <div className="hidden md:block w-full max-w-7xl h-1 bg-gray-200 mx-auto" />

        {/* Development & Implementation Section */}
        <div className={`flex flex-col items-center w-full ${SECTION_PADDING} ${SECTION_GAP}`}>
          <div className={`${HEADING_GROUP} xl:gap-2`}>
            <h1 className={NUMBER_STYLE}>04</h1>
            <h2 className={`${TITLE_STYLE} text-gray-400`}>
              <span className="text-gray-300">Development &</span>
              <br />
              <span className="text-black">Implementation</span>
            </h2>
          </div>
          <p className={`${BODY_STYLE} max-w-2xl text-center md:text-left lg:text-center xl:text-left`}>
            Moving from design to implementation, I focused on translating the Figma prototype into clean, maintainable code using React and Tailwind CSS, ensuring that the final product reflected both aesthetic, precision and technical efficiency.
          </p>
        </div>

        {/* Software Icons */}
        <div className="flex flex-row items-center justify-center gap-12 md:gap-24 lg:gap-40">
          <Image src="/Images/ReactLogo.png" alt="React" width={80} height={50} />
          <Image src="/Images/logostailwindcss.png" alt="Tailwind CSS" width={230} height={100} />
          <Image src="/Images/cursor logo.png" alt="Cursor" width={80} height={50} />
        </div>
      </div>

      <ProjectFooter />
    </main>
  );
};

export default LandingPagePage;
