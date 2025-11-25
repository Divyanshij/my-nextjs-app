import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Project3Page = () => {
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
          src="/Images/Project 2/Variant2.png"
          alt="University Event App"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        University Event App
      </h1>

      {/* Description Placeholder */}
      <div className="max-w-3xl">
        <p className="text-lg text-gray-300 mb-4">
          Add your project description here. This is a placeholder where you can write about your university event app project.
        </p>
        <p className="text-lg text-gray-300">
          You can add more sections, images, and content as needed.
        </p>
      </div>

      {/* Add your custom content below */}
    </main>
  );
};

export default Project3Page;

