// app/contact/page.tsx

"use client";
import React from "react";
import Image from "next/image";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-zinc-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/luke2.jpeg"
              alt="Get in touch illustration"
              width={400}
              height={200}
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-neutral-300">
              Whether you have a question about my projects, want to collaborate, or just say hi, I’m all ears!
            </p>
            <div className="flex flex-col space-y-4">
              <a href="tel:4694304377" className="flex items-center space-x-3 hover:text-blue-400 transition">
                <FaPhone size={24} />
                <span className="text-base">469-430-4377</span>
              </a>
              <a href="mailto:lukechambers0217@gmail.com" className="flex items-center space-x-3 hover:text-blue-400 transition">
                <FaEnvelope size={24} />
                <span className="text-base">lukechambers0217@gmail.com</span>
              </a>
              <a href="https://github.com/lukechambers5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-400 transition">
                <FaGithub size={24} />
                <span className="text-base">github.com/lukechambers5</span>
              </a>
              <a href="https://linkedin.com/in/lukechambers5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-400 transition">
                <FaLinkedin size={24} />
                <span className="text-base">linkedin.com/in/lukechambers5</span>
              </a>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
