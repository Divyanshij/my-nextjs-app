"use client";
import React from 'react';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Landing Webpage",
    img: "/Images/Frame 132/Project 5/Default.png",
    href: "/projects/LandingPage",
  },
  {
    id: 2,
    title: "Crypto App",
    img: "/Images/Frame 133/Project 4/Default.png",
    href: "/projects/CryptoApp",
  },
  {
    id: 3,
    title: "University Event App",
    img: "/Images/Project 2/Variant2.png",
    href: "/projects/UniversityEventApp",
  },
  {
    id: 4,
    title: "Abun Website Redesign",
    img: "/Images/Frame 2692/Project 6/Default.png",
    href: "/projects/AbunRedesign",
  },
  {
    id: 5,
    title: "Flipkart Website Redesign",
    img: "/Images/Project 3/Variant2.png",
    href: "/projects/FlipkartRedesign",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white px-16 py-20">
      <h2 className="text-4xl font-semibold mb-10 text-center ">Projects</h2>

      <div className="mb-10 px-10 py-10">
        <Link
          href={projects[0].href}
          className="group block relative overflow-hidden rounded-3xl border border-transparent transition-all duration-500 hover:border-white w-full h-4xl p-4 bg-black"
        >
          <Image
            src={projects[0].img}
            alt={projects[0].title}
            width={1600}
            height={800}
            className="rounded-3xl object-cover w-full h-[500px]"
          />

          <div className="mt-4 flex items-center gap-10">
            <p className="text-xl">{projects[0].title}</p>
            <div className="p-2  transition-transform duration-200 rotate-[41deg] group-hover:rotate-0">
              <ArrowUpRightIcon className="w-7 h-7" />
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-7 px-10">
        {projects.slice(1).map((project) => {
          
          const colSpan = project.id === 2 ? 'col-span-5' : project.id === 3 ? 'col-span-7' : project.id === 4 ? 'col-span-7' : 'col-span-5';
          
          return (
          
            <Link
              key={project.id}
              href={project.href}
              className={`group flex justify-center ${colSpan}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-transparent transition-all duration-500 group-hover:border-white h-4xl p-4 bg-black w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-3xl object-cover w-full h-[350px]"
                />
            
                <div className="mt-4 flex items-center gap-10">
                  <p className="text-lg">{project.title}</p>
                  <div className="p-2  transition-transform duration-200 rotate-[41deg] group-hover:rotate-0">
                    <ArrowUpRightIcon className="w-7 h-7" />
                  </div>
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      </section>
    );
  };

export default Projects;
