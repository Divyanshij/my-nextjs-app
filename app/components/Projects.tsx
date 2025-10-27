"use client";
import React from 'react'
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const projects = [
  { id: 1, title: "Landing Webpage", img: "/Images/Frame 132/Project 5/Default.png" },
  { id: 2, title: "Crypto App", img: "/Images/Frame 133/Project 4/Default.png" },
  { id: 3, title: "University Event App", img: "/Images/Project 2/Variant2.png" },
  { id: 4, title: "Abun Website Redesign", img: "/Images/Frame 2692/Project 6/Default.png" },
  { id: 5, title: "Flipkart Website Redesign", img: "/Images/Project 3/Variant2.png" },
];

const Projects = () => {
  return (
    <section className="bg-black text-white px-16 py-20">
      <h2 className="text-4xl font-semibold mb-10">Projects</h2>

      {/* Full Width First Project */}
      <div className="group mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-transparent transition-all duration-500 group-hover:border-white">
          <Image
            src={projects[0].img}
            alt={projects[0].title}
            width={1600}
            height={800}
            className="rounded-3xl object-cover w-full h-[500px]"
          />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <p className="text-xl">{projects[0].title}</p>
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 41 }}
            transition={{ duration: 0.3 }}
            className="p-2 border border-white rounded-full"
          >
            <ArrowUpRightIcon className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* 2 + 2 Grid for Remaining Projects */}
      <div className="grid grid-cols-2 gap-10">
        {projects.slice(1).map((project) => (
          <div key={project.id} className="group">
            <div className="relative overflow-hidden rounded-3xl border border-transparent transition-all duration-500 group-hover:border-white">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={500}
                className="rounded-3xl object-cover w-full h-[350px]"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-lg">{project.title}</p>
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 41 }}
                transition={{ duration: 0.3 }}
                className="p-2 border border-white rounded-full"
              >
                <ArrowUpRightIcon className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;