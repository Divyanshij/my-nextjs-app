import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Project4Page = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-16">
      {/* Back Button */}
      <Link 
        href="/#projects" 
        className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors"
      >
        <span>←</span>
        <span>Back to projects</span>
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-[420px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 mb-8">
        <Image
          src="/Images/Frame 2692/Project 6/Default.png"
          alt="Abun Website Redesign"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Abun Website Redesign
      </h1>

      {/* Description Placeholder */}
      <div className="max-w-3xl">
        <p className="text-lg text-gray-300 mb-4">
          Add your project description here. This is a placeholder where you can write about your Abun website redesign project.
        </p>
        <p className="text-lg text-gray-300">
          You can add more sections, images, and content as needed.
        </p>
      </div>

      {/* Add your custom content below */}
    </main>
  );
};

export default Project4Page;

