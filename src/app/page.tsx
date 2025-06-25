"use client";

import React from "react";
import { WavyBackground } from "../components/ui/WavyBackground";
import { Timeline } from "../components/ui/Timeline";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import TechnicalSkillsDisplay from "@/components/ui/TechnicalSkillsDisplay";

import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaUniversity, FaSchool } from "react-icons/fa";

const projects = [
  {
    title: "eBrick",
    description:
      "Full-stack LEGO marketplace using Next.js, Supabase, Stripe, and AWS Lambda for real-time pricing.",
    image: "/projects/ebrick.png",
    github: "https://github.com/lukechambers5/eBrick",
    live: "https://ebrickshop.com",
  },
  {
    title: "Football for Girls",
    description:
      "Flask app scraping Wikipedia and ranking trending athletes using SQLite and user data.",
    image: "/projects/football-for-girls.png",
    github: "https://github.com/lukechambers5/football-for-girls",
    live: "",
  },
  {
    title: "Census GUI",
    description:
      "Python + Tkinter automation app for Excel and Tableau reconciliation.",
    image: "/projects/census.png",
    github: "",
    live: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen">
          <WavyBackground className="absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex items-center justify-center gap-2 flex-wrap">
              Hi, I'm
              <div className="w-[480px] h-[195px]">
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
            <div className="grid grid-cols-3 gap-4 items-start">
              <div className="col-span-1 flex justify-center">
                <img
                  src="/portfolio_pp.jpg"
                  alt="Luke profilepic"
                  className="object-contain rounded-md max-w-full h-[400px] lg:h-[500px]"
                />
              </div>
              <div className="col-span-2">
                <p className="text-lg">
                  Howdy! I'm Luke Chambers, a Computer Science major with a Business minor at Texas A&M, class of 2027.
                  <br /><br />
                  I've interned at Blitz Medical Billing in Software Development and Data Engineering, automating Excel workflows, building Tableau dashboards, and scripting secure data transfers.
                  <br /><br />
                  I love building full-stack apps like <i>eBrick</i> and <i>Football for Girls</i> — combining Supabase, AWS, Python, and real-time tracking.
                  <br /><br />
                  I’m also a percussion instructor and an active member of the TAMU Data Science Club and Percussion Studio.
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
              <img src="/logos/tamu-logo.webp" alt="Texas A&M Logo" className="w-30 h-30 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Texas A&M University</h3>
                <p className="text-base">B.S. in Computer Science (2023–2027)</p>
                <p className="text-sm text-neutral-400">GPA: 3.74 | TAMU Data Science Club · Percussion Studio</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src="/logos/legacy-logo.png" alt="Legacy Christian Academy Logo" className="w-30 h-30 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Legacy Christian Academy</h3>
                <p className="text-base">High School Diploma (2019–2023)</p>
                <p className="text-sm text-neutral-400">GPA: 4.2 | John Philip Sousa Band Award · NHS</p>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-gray-700 my-8"></div>
        {/* Work Experience */}
        <section id="work" className="px-6 py-12 md:px-12 lg:px-24">
          <div className="flex items-center mb-8 space-x-4">
            <h2 className="text-4xl md:text-6xl font-bold">Work Experience</h2>
            <img src="/logos/blitz-logo.png" alt="Blitz Medical Billing Logo" className="w-45 h-20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-2">Automation & Data Engineering Intern</h3>
              <p className="text-base text-neutral-400 mb-1">Blitz Medical Billing | Frisco, TX</p>
              <p className="text-sm text-neutral-300 mb-4">May 2025 – Present</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed HIPAA-compliant automation workflows using Office Scripts and Power Automate, reducing manual steps in payment reconciliation by 90% and boosting accuracy.</li>
                <li>Engineered Python-based SFTP automations for secure data uploads/downloads and real-time error alerts, cutting monitoring time by 95%.</li>
                <li>Refined Tableau dashboards by debugging and designing new client-facing visualizations, improving load times by 25%.</li>
              </ul>
            </BackgroundGradient>
            <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-2">Software Development Intern</h3>
              <p className="text-base text-neutral-400 mb-1">Blitz Medical Billing | Frisco, TX</p>
              <p className="text-sm text-neutral-300 mb-4">May 2024 – Aug 2024</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Automated Excel-based data aggregation for healthcare reporting using Python, cutting repetitive tasks by 90%.</li>
                <li>Packaged automation tools with PyInstaller, eliminating dependencies and simplifying team onboarding.</li>
              </ul>
            </BackgroundGradient>
          </div>
        </section>
        <div className="border-t border-gray-700 my-8"></div>
        {/* Technical Skills */}
        <section id="skills" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">Technical Skills</h2>
          <TechnicalSkillsDisplay />
        </section>
        <div className="border-t border-gray-700 my-8"></div>
        {/* Projects */}
        <section id="projects" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <BackgroundGradient
                key={i}
                className="rounded-xl p-4 bg-zinc-900  h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-neutral-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-xl hover:text-white" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="text-xl hover:text-white" />
                    </a>
                  )}
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </section>
        <div className="border-t border-gray-700 my-8"></div>
        {/* Contact */}
        <section id="contact" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">Contact</h2>
          <p className="text-lg mb-4">Feel free to reach out through any of the following:</p>
          <div className="flex space-x-6 text-2xl">
            <a href="mailto:your.email@example.com">
              <FaEnvelope className="hover:text-white" />
            </a>
            <a href="https://github.com/lukechambers5" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/lukechambers5" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}