"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ConnectSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    initial: (isEntering: boolean) => ({
      y: isEntering ? 50 : -50,
      opacity: 0
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: (isLeaving: boolean) => ({
      y: isLeaving ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  const arrowVariants = {
    initial: (isEntering: boolean) => ({
      x: isEntering ? -50 : 50,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: (isLeaving: boolean) => ({
      x: isLeaving ? 50 : -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <section 
      className="bg-black text-white px-6 sm:px-10 md:px-16 py-12 flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Text */}
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.h2
            key={isHovered ? "email" : "connect"}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={isHovered}
            className="text-3xl sm:text-4xl font-semibold"
          >
            {isHovered ? "divyanshijangid.2004@gmail.com" : "Let's Connect"}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <motion.div
        animate={{ backgroundColor: isHovered ? "#14b8a6" : "#e5e5e5" }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isHovered ? "arrow-teal" : "arrow-gray"}
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={isHovered}
            className="flex justify-center items-center"
          >
            <ArrowRightIcon className="text-black w-6 h-6" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ConnectSection;