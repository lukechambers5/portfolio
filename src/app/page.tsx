"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { WavyBackground } from "../components/ui/WavyBackground";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import TechnicalSkillsDisplay from "@/components/ui/TechnicalSkillsDisplay";
import {
  FaPhone,
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaEnvelope,
  FaPlayCircle,
} from "react-icons/fa";

const projects = [
  {
    title: "eBrick - Personal",
    description:
      "Full-stack LEGO marketplace using Next.js, Supabase, Stripe, and AWS Lambda for real-time pricing.",
    video: "/videos/ebrick-demo.mp4",
    poster: "/thumbnail.png",
    github: "https://github.com/lukechambers5/eBrick",
    live: "https://ebrickshop.com",
  },
  {
    title: "Football for Girls - Personal",
    description:
      "Flask app scraping Wikipedia and ranking trending athletes using SQLite and user data.",
    image: "/football4girls.png",
    github: "https://github.com/lukechambers5/football4girls",
    live: "https://football4girls.biz",
  },
  {
    title: "LEGO set price Generator - Personal",
    description:
      "Leverages AWS Lambda, API Gateway, and DynamoDB to generate price based off market value, condition, and set number",
    image: "/price-generator.png",
    github: "https://github.com/lukechambers5/aws-lambda-hackathon",
    live: "https://aws-lambda-hackathon.vercel.app/",
  },
  {
    title: "Spotify Album Finder - Personal",
    description:
      "React app that uses Spotify’s Client Credentials flow to let users search for any artist and view their albums in a responsive card gallery.",
    image: "/spotify.png",
    github: "https://github.com/lukechambers5/spotifyalbumfinder",
    live: "https://spotifyalbumfinder.onrender.com/",
  },
  {
    title: "Census GUI - Blitz Medical Billing",
    description:
      "Python + Tkinter automation app for Excel and Tableau reconciliation.",
    image: "/census2.png",
    github: "https://github.com/lukechambers5/Census-Reconciliation",
    live: "",
  },
  {
    title: "QFX Automation - Blitz Medical Billing",
    description:
      "Python + Tkinter app that streamlines the processing of CSV files containing financial transaction data",
    image: "/logos/blitz-logo.png",
    github: "https://github.com/lukechambers5/QFX_Automation",
    live: "",
  },
  {
    title: "SFTP Automation - Blitz Medical Billing",
    description:
      "Python script automates the cleaning and formatting of provider charge CSV files",
    image: "/logos/blitz-logo.png",
    github: "https://github.com/lukechambers5/SFTP_Automation",
    live: "",
  },
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen">
          <WavyBackground className="absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold flex items-center justify-center gap-2 flex-wrap">
              Hi, I&apos;m
              <div className="w-full max-w-[480px] h-[195px]">
                <div className="text-hover-container">
                  <TextHoverEffect text="LUKE" duration={0.3} />
                </div>
              </div>
            </h1>
            <p className="mt-2 text-lg md:text-xl lg:text-2xl text-neutral-300 text-center max-w-2xl">
              An aspiring Software Engineer
            </p>
            <button
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="z-50 relative mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors cursor-pointer"
            >
              My Work
            </button>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">About Me</h2>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 overflow-hidden text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/portfolio_pp.jpg"
                  alt="Luke profilepic"
                  className="object-contain rounded-md w-full h-auto max-h-[500px]"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-lg">
                  Howdy! I&apos;mm Luke Chambers, a Computer Science major with a Business minor at Texas A&M, class of 2027.
                  <br />
                  <br />
                  I&apos;mve interned at Blitz Medical Billing in Software Development and Data Engineering, automating Excel workflows, building Tableau dashboards, and scripting secure data transfers.
                  <br />
                  <br />
                  I love building full-stack apps like <i>eBrick</i> and <i>Football for Girls</i> — combining Supabase, AWS, Python, and real-time tracking.
                  <br />
                  <br />
                  I&apos;mm also a percussion instructor and an active member of the TAMU Data Science Club and Percussion Studio.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </section>
        <div className="border-t border-gray-700 my-8"></div>

        {/* Education */}
        <section id="education" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">Education</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4 border-b border-gray-700 pb-4">
              <Image
                src="/logos/tamu-logo.webp"
                alt="Texas A&M Logo"
                className="w-30 h-30 mt-1"
              />
              <div>
                <h3 className="text-2xl font-semibold">Texas A&M University</h3>
                <p className="text-base">B.S. in Computer Science (2023–2027)</p>
                <p className="text-sm text-neutral-400">
                  GPA: 3.74 | TAMU Data Science Club · Percussion Studio
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/logos/legacy-logo.png"
                alt="Legacy Christian Academy Logo"
                className="w-30 h-30 mt-1"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Legacy Christian Academy
                </h3>
                <p className="text-base">High School Diploma (2019–2023)</p>
                <p className="text-sm text-neutral-400">
                  GPA: 4.2 | John Philip Sousa Band Award · NHS
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-gray-700 my-8"></div>

        {/* Work Experience */}
        <section id="work" className="px-6 py-12 md:px-12 lg:px-24">
          <div className="flex items-center mb-8 space-x-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              Work Experience
            </h2>
            <Image
              src="/logos/blitz-logo.png"
              alt="Blitz Medical Billing Logo"
              className="w-45 h-20"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-2">
                Automation & Data Engineering Intern
              </h3>
              <p className="text-base text-neutral-400 mb-1">
                Blitz Medical Billing | Frisco, TX
              </p>
              <p className="text-sm text-neutral-300 mb-4">
                May 2025 – Present
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed HIPAA-compliant automation workflows using Office
                  Scripts and Power Automate, reducing manual steps in payment
                  reconciliation by 90% and boosting accuracy.
                </li>
                <li>
                  Engineered Python-based SFTP automations for secure data
                  uploads/downloads and real-time error alerts, cutting
                  monitoring time by 95%.
                </li>
                <li>
                  Refined Tableau dashboards by debugging and designing new
                  client-facing visualizations, improving load times by 25%.
                </li>
              </ul>
            </BackgroundGradient>
            <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-2">
                Software Development Intern
              </h3>
              <p className="text-base text-neutral-400 mb-1">
                Blitz Medical Billing | Frisco, TX
              </p>
              <p className="text-sm text-neutral-300 mb-4">
                May 2024 – Aug 2024
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Automated Excel-based data aggregation for healthcare
                  reporting using Python, cutting repetitive tasks by 90%.
                </li>
                <li>
                  Packaged automation tools with PyInstaller, eliminating
                  dependencies and simplifying team onboarding.
                </li>
              </ul>
            </BackgroundGradient>
          </div>
        </section>
        <div className="border-t border-gray-700 my-8"></div>

        {/* Technical Skills */}
        <section id="skills" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">
            Technical Skills
          </h2>
          <TechnicalSkillsDisplay />
        </section>
        <div className="border-t border-gray-700 my-8"></div>

        {/* Projects */}
        <section id="projects" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <BackgroundGradient
                key={i}
                className="relative rounded-xl p-4 bg-zinc-900 h-full"
              >
                {project.video ? (
                  <div
                    onClick={() => setSelectedVideo(project.video)}
                    className="cursor-pointer w-full h-48 relative rounded-md overflow-hidden mb-4"
                  >
                    <video
                      src={project.video}
                      poster={project.poster}
                      muted
                      className="w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                    <FaPlayCircle className="absolute inset-0 m-auto text-6xl text-white opacity-75" />
                  </div>
                ) : (
                  <Image
                    src={project.image!}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-neutral-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-xl hover:text-white" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-xl hover:text-white" />
                    </a>
                  )}
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </section>
        <div className="border-t border-gray-700 my-8" />


        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <button
              className="absolute top-4 right-4 text-3xl text-white"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        )}

       {/* Contact */} 
        <section id="contact" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-center">
            Let’s Connect
          </h2>
          <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-zinc-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: illustrative image */}
              <div className="flex justify-center">
                <Image
                  src="/luke2.jpeg"        // ← swap in your image path
                  alt="Get in touch illustration"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </div>

              {/* Right: your contact info */}
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-neutral-300">
                  Whether you have a question about my projects, want to collaborate, or just say hi, I’m all ears!
                </p>
                <div className="flex flex-col space-y-4">
                  <a
                    href="469-430-4377"
                    className="flex items-center space-x-3 hover:text-blue-400 transition"
                  >
                    <FaPhone size={24} />
                    <span className="text-base">469-430-4377</span>
                  </a>
                  <a
                    href="mailto:lukechambers0217@gmail.com"
                    className="flex items-center space-x-3 hover:text-blue-400 transition"
                  >
                    <FaEnvelope size={24} />
                    <span className="text-base">lukechambers0217@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/lukechambers5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-blue-400 transition"
                  >
                    <FaGithub size={24} />
                    <span className="text-base">github.com/lukechambers5</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/lukechambers5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-blue-400 transition"
                  >
                    <FaLinkedin size={24} />
                    <span className="text-base">linkedin.com/in/lukechambers5</span>
                  </a>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </section>

      </main>
    </div>
  );
}
