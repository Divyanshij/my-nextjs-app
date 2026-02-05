"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 md:py-32 lg:py-40 text-white">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="md:w-2/3 flex flex-col gap-6 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-teal-400 leading-tight">
            UI UX | Product <br /> Designer
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed max-w-5xl">
            Hi, I&apos;m Divyanshi Jangid, a BSc Computer Mathematics graduate
            passionate about UI/UX design. I blend technical skills with
            creative thinking to craft user-friendly, visually appealing
            interfaces using tools like <span className="text-teal-400">Figma</span>{" "}
            and <span className="text-teal-400">Visily</span>. I&apos;m eager to join a
            dynamic team where I can grow and contribute to impactful design
            solutions.
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="md:w-1/3 flex flex-col gap-12 sm:gap-16 md:gap-20 mt-8 sm:mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Interactive Section */}
          <div className="flex items-start gap-4">
            <div className="w-1 bg-white hover:bg-teal-500 h-20 sm:h-24 md:h-28 transition-colors duration-300" />
            <div>
              <h2 className="font-bold text-lg sm:text-xl mb-2 py-1">Interactive</h2>
              <p className="text-base sm:text-lg text-gray-300 py-3">
                UI/UX Design services for <br /> web, mobile and tablets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Branding & Web Section */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-start gap-4">
            <div className="w-1 bg-white hover:bg-teal-500 h-20 sm:h-24 md:h-28 transition-colors duration-300" />
            <div>
              <h2 className="font-bold text-lg sm:text-xl mb-2 py-1"> Design Tools</h2>
              <p className="text-base sm:text-lg text-gray-300 py-3">
              Figma, Visily , Canva , Photoshop
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
