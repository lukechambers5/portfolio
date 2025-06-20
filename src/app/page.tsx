"use client";

import React from "react";
import { WavyBackground } from "../components/ui/WavyBackground";
import { Timeline } from "../components/ui/Timeline";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import TechnicalSkillsDisplay from "@/components/ui/TechnicalSkillsDisplay";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    title: "Summer 2025",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Automation & Data Engineering Intern – Blitz Medical Billing</strong>
          <br />
          • Created HIPAA-compliant Power Automate + Office Scripts workflows.
          <br />
          • Automated secure SFTP transfers with Python.
          <br />
          • Enhanced Tableau dashboards with new client-facing visualizations.
        </p>
      </div>
    ),
  },
  {
    title: "Summer 2024",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Software Development Intern – Blitz Medical Billing</strong>
          <br />
          • Built Python desktop automation tool for Excel data.
          <br />
          • Improved team efficiency with Tkinter GUI + PyInstaller.
        </p>
      </div>
    ),
  },
  {
    title: "June 2025",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Census Reconciliation Automation – Internship Project</strong>
          <br />
          • Desktop app to compare Excel vs. Tableau data.
          <br />
          • Integrated Tableau API + Excel parsing in real-time.
        </p>
      </div>
    ),
  },
  {
    title: "June 2024",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Automated Census Report – Internship Project</strong>
          <br />
          • Tkinter GUI to compile medical claim data.
          <br />
          • Enabled team-wide use via PyInstaller.
        </p>
      </div>
    ),
  },
  {
    title: "Fall 2025 (Planned)",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>eBrick – Personal Project</strong>
          <br />
          • Full-stack LEGO marketplace using Next.js, Supabase, and Stripe.
          <br />
          • AWS Lambda + DynamoDB for real-time price logic.
        </p>
      </div>
    ),
  },
  {
    title: "2024 – Present",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Football for Girls – Personal Project</strong>
          <br />
          • Flask scraper app with trending SQLite tracking.
        </p>
      </div>
    ),
  },
  {
    title: "2023 – Present",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>Percussion Instructor – Legacy Christian Academy</strong>
          <br />
          • Drumline tech and private lessons each summer.
        </p>
      </div>
    ),
  },
  {
    title: "Aug 2023 – May 2027",
    content: (
      <div>
        <p className="text-sm text-white">
          <strong>B.S. Computer Science – Texas A&M University</strong>
          <br />
          GPA: 3.69 | TAMU Data Science Club · Percussion Studio
        </p>
      </div>
    ),
  },
];

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
        <div className="relative h-screen">
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
              VIEW PROJECTS
            </button>
          </div>
        </div>

        {/* About Me */}
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 h-[600px] overflow-hidden text-white">
          <div className="grid grid-cols-3 gap-4 items-start h-full overflow-y-auto">
            <div className="col-span-1 flex justify-center">
              <img
                src="/portfolio_pp.jpg"
                alt="Luke profilepic"
                className="object-contain rounded-md max-w-full h-[400px] lg:h-[500px]"
              />
            </div>
            <div className="col-span-2 overflow-y-auto pr-2 max-h-full">
              <p className="text-2xl font-bold mb-2">About Me</p>
              <p className="text-lg">
                Howdy! I'm Luke Chambers, a Computer Science major with a Business minor at Texas A&M, class of 2027.
                <br /><br />
                I've interned at Blitz Medical Billing in Software Development and Data Engineering, automating Excel workflows, building dashboards in Tableau, and scripting secure data transfers.
                <br /><br />
                I love building full-stack apps like <i>eBrick</i> and <i>Football for Girls</i> — combining Supabase, AWS, Python, and real-time tracking.
                <br /><br />
                I’m also a percussion instructor and an active member of the TAMU Data Science Club and Percussion Studio.
              </p>
            </div>
          </div>
        </BackgroundGradient>

        {/* Education */}
        <section className="px-6 py-12 md:px-12 lg:px-24">
          <TextGenerateEffect words="Education" className="text-4xl md:text-6xl mb-8" />
          <TextGenerateEffect
            words="Texas A&M University – B.S. in Computer Science, 2023 to 2027. GPA 3.74. Involved in Data Science Club and TAMU Percussion Studio."
            className="text-lg mb-6"
          />
          <TextGenerateEffect
            words="Centennial High School – High School Diploma, 2019 to 2023. GPA 4.0. Honors include the John Philip Sousa Band Award and NHS membership."
            className="text-lg"
          />
        </section>

        {/* Skills */}
        <TechnicalSkillsDisplay />

        {/* Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>

        {/* Projects */}
        <section id="projects" className="px-6 py-12 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-6xl mb-8 font-bold">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <BackgroundGradient
                key={i}
                className="rounded-xl p-4 bg-zinc-900"
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
      </main>
    </div>
  );
}