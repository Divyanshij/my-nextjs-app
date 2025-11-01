"use client";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-16 py-40  text-white">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <div className="md:w-2/3 flex flex-col gap-10 px-20">
        <h1 className="text-7xl font-light text-teal-400 leading-tight">
          UI UX | Product <br/> Designer
        </h1>

        <p className="text-xl leading-relaxed max-w-5xl" >       
           Hi, I &apos;m Divyanshi Jangid, a BSc Computer Mathematics graduate passionate about UI/UX design.
           I blend technical skills with creative thinking to craft user-friendly, visually appealing
          interfaces using tools like <span className="text-teal-400">Figma</span> and
          <span className="text-teal-400"> Visily</span>. I &apos;m eager to join a dynamic team where I can
          grow and contribute to impactful design solutions.
        </p>
      </div>
      </motion.div>

      {/* Right Section */}
      <div className="md:w-1/3 flex flex-col gap-20 mt-12 md:mt-0">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      > 
        {/* Interactive Section */}
        <div className="flex items-start gap-4">
          <div className="w-1 bg-white hover:bg-teal-500 h-30 md:h-30"></div>
          <div>
            <h2 className="font-bold text-xl mb-2 py-1">Interactive</h2>
            <p className="text-gray-300 py-3">
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
          <div className="w-1 bg-white hover:bg-teal-500 h-30 md:h-30"></div>
          <div>
            <h2 className="font-bold text-xl mb-2 py-1">Branding & Web</h2>
            <p className="text-gray-300 py-3">
              Web design, handcrafted logo design <br /> and overall branding efforts.
            </p>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About ;