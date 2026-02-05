import Image from "next/image";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectFooter from "@/app/components/ProjectFooter";

const SECTION_PADDING = "px-4 sm:px-8 md:px-12 lg:px-30";
const SECTION_GAP = "gap-y-0";
const CARD_BASE = "block w-full max-w-md lg:max-w-[30rem] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:h-90 rounded-lg lg:rounded-none";

const AbunRedesignPage = () => {
  return (
    <main className="min-h-screen text-black">
      <ProjectNavbar />

      <div className={`flex flex-col ${SECTION_GAP}`}>
        {/* Hero: Before / After*/}
        <div className={`bg-gradient-to-b from-[#61C3DB] to-[#FFFFFF] w-full -mt-24 pt-24 min-h-[90px] sm:min-h-[135px] md:min-h-[180px] lg:min-h-[180px] flex flex-col lg:flex-row justify-between items-center ${SECTION_PADDING} py-7 sm:py-11 md:py-14 lg:py-14 gap-6 lg:gap-0`}>
          <div className={`flex flex-col justify-start items-center ${SECTION_PADDING} py-3.5 sm:py-7 md:py-11 lg:py-36`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-left mb-4 lg:mb-0 px-4 sm:px-6 md:px-8 lg:px-[7.5rem]">Before</h2>
            <Image
              src="/Images/abun before.png"
              alt="Abun before"
              width={500}
              height={1000}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto lg:w-[550px] px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10"
            />
          </div>
          <div className="flex flex-col justify-end items-center px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-4 md:py-6 lg:py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-left mb-4 lg:mb-0 px-4 sm:px-6 md:px-8 lg:px-12 ml-[-230]">After</h2>
            <Image
              src="/Images/abun after.png"
              alt="Abun after"
              width={500}
              height={1000}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto lg:w-[460px] px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 lg:py-5 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-25"
            />
          </div>
        </div>

        {/* About Project */}
        <div className={`flex flex-col lg:flex-row items-start gap-4 lg:gap-0 ${SECTION_PADDING} py-8 sm:py-10 md:py-12 lg:py-14`}>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-left px-4 sm:px-6 md:px-8 lg:px-[7.5rem]">About Project</h2>
          <p className={`text-base sm:text-lg lg:text-2xl text-[#464646] text-left ${SECTION_PADDING}`}>
          Abun website helps to generate SEO-optimized blogs using AI. Redesigned the website to improve user engagement, visual hierarchy, and overall brand appeal. 
          The new design focuses on better color contrast, modern typography, and an inspiring layout to reflect the brand's vision.

          </p>
        </div>

        {/* Problem */}
        <div className={`flex flex-col lg:flex-row flex-wrap justify-between px-4 sm:px-6 md:px-8 lg:px-90 items-center gap-3 lg:gap-4  py-2 sm:py-3 md:py-4 lg:py-30`}>
          <Image
            src="/Images/abun problem.png"
            alt="Abun problem"
            width={500}
            height={700}
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px] h-auto object-contain px-1 sm:px-2 md:px-4 lg:px-4 py-1 sm:py-2 md:py-4 lg:py-4"
          />
          <div className={`${CARD_BASE} bg-[#37DDDB]`}>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-center py-4 sm:py-6 md:py-8 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-[7.5rem]">Problem</h2>
            <ul className="text-base sm:text-lg lg:text-lg text-[#464646] text-left px-4 sm:px-6 md:px-8 lg:px-10 pb-4 lg:pb-0 space-y-2 list-none">
              <li><strong>Lacks clarity —</strong> The overall design feels unclear and inconsistent.</li>
              <li><strong>Poor color contrast —</strong> Needs better use of contrasting colors for readability and emphasis.</li>
              <li><strong>Static UI —</strong> The interface feels flat and lacks interactivity.</li>
              <li><strong>Uninspiring design —</strong> The UI lacks creativity and modern design appeal.</li>
            </ul>
          </div>
        </div>

        {/* Solution  */}
        <div className={`flex flex-col lg:flex-row flex-wrap justify-between px-4 sm:px-6 md:px-8 lg:px-70 items-center gap-4 lg:gap-4 py-4 sm:py-6 md:py-8 lg:py-0`}>
          <div className={`${CARD_BASE} bg-[#8FFFFD] order-2 lg:order-1`}>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-center py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-[7.5rem]">Solution</h2>
            <ol className="text-base sm:text-lg lg:text-lg text-[#464646] text-left px-4 sm:px-6 md:px-8 lg:px-10 pb-4 lg:pb-0 space-y-2 list-decimal list-inside">
              <li>Enhance clarity by simplifying layout and content structure.</li>
              <li>Improve typography and color contrast for better readability and accessibility.</li>
              <li>Increase user engagement through interactive and intuitive elements.</li>
            </ol>
          </div>

          <Image
            src="/Images/abun solution.png"
            alt="Abun solution"
            width={700}
            height={700}
            className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[550px] lg:max-w-[500px] xl:max-w-[600px] h-auto object-contain order-1 lg:order-2 px-2 sm:px-4 md:px-6 lg:px-6 py-2 sm:py-4 md:py-6 lg:py-6"
          />
        </div>
        <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-40 py-4 sm:py-6 md:py-8 lg:py-30">
          <video
            src="/Images/abun_video_clip (online-video-cutter.com).mp4"
            width={600}
            height={700}
            className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] h-auto"
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

export default AbunRedesignPage;

