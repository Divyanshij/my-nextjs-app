"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 sm:px-10 md:px-16 py-16 flex flex-col items-center text-center">
      {/* Main message */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        I’d love to create something great with your team,&nbsp;
        <Link
          href="mailto:divyanshijangid.2004@gmail.com"
          className="text-teal-600 underline hover:text-teal-500"
        >
          Say Hi !
        </Link>
      </h2>

      {/* 3-column section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-0 mt-8 max-w-4xl">
        {/* Resume */}
        <div>
          <h3 className="font-medium mb-2">Resume</h3>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="underline hover:text-teal-600"
          >
            Resume
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-2">Contact</h3>
          <p className="text-sm text-gray-600">Gmail</p>
          <p className="text-sm text-gray-600">(divyanshijangid.2004@gmail.com)</p>
          <p className="text-sm mt-1">+91-6376591601</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-medium mb-2">Social Media</h3>
          <div className="flex flex-col gap-1">
            <Link
              href="https://x.com"
              target="_blank"
              className="underline hover:text-teal-600"
            >
              X
            </Link>
            <Link
              href="https://linkedin.com/in/divyanshijangid"
              target="_blank"
              className="underline hover:text-teal-600"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
