"use client"

import React from 'react';
import {WavyBackground} from '../components/ui/WavyBackground';
import { Timeline } from '../components/ui/Timeline';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { TextHoverEffect } from '@/components/ui/TextHoverEffect';
import { BackgroundGradient } from '@/components/ui/BackgroundGradient';
import { IconAppWindow } from "@tabler/icons-react";
import { HoverEffect } from "@/components/ui/HoverEffect";
import TechnicalSkillsDisplay from '@/components/ui/TechnicalSkillsDisplay';

const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            Currently internshiping at Blitz Medical Billing, where I am
            working on automating HIPAA-compliant workflows and enhancing data
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
];


const technicalSkills = [
  {
    title: "Frontend",
    description: "Next.js, React, Tailwind CSS, HTML, CSS, JavaScript, TypeScript",
    link: "#frontend", // You can remove or modify this if not used
    icons: [
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ]
  },
  {
    title: "Backend",
    description: "Flask, Python, Supabase Edge Functions (Docker), AWS Lambda, Java, C++",
    link: "#backend",
    icons: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS Lambda", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }, // Closest for AWS Lambda
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ]
  },
  {
    title: "Database",
    description: "PostgreSQL, SQLite, DynamoDB, SQLAlchemy, Supabase, PgAdmin",
    link: "#database",
    icons: [
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "DynamoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }, // Closest for DynamoDB
      { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ]
  },
  {
    title: "Tools",
    description: "Git, Docker, Tableau, PyCharm, Visual Studio, Power Automate, Office Scripts",
    link: "#tools",
    icons: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Visual Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" },
      { name: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    ]
  },
];


const words = "Howdy! I am currently studying Computer Science at the University of Texas A&M! I will graduate spring of 2027, and I love full-stack web development.";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <main>
        {/* Hero section with WavyBackground and overlaid text */}
        <div className="relative h-screen"> {/* Parent container for layering */}
          {/* WavyBackground as the base layer */}
          <WavyBackground className="absolute inset-0" />

          {/* Content layer, positioned on top of WavyBackground */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex flex-col md:flex-row items-center justify-center gap-4">
              Hi, I'm {<TextHoverEffect text="LUKE" />}
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-neutral-300 text-center max-w-2xl">
              An aspiring Full Stack Developer passionate about building sleek web experiences.
            </p>
            <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              VIEW PROJECTS
            </button>
          </div>
        </div>

        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-700 h-[600px] overflow-hidden text-white">
          <div className="grid grid-cols-3 gap-4 items-start h-full overflow-y-auto">
            <div className="col-span-1 flex justify-center">
              <img
                src="/portfolio_pp.jpg"
                alt="Luke profilepic"
                className="object-contain rounded-md max-w-full h-[400px] lg:h-[500px]"
              />
            </div>

            <div className="col-span-2 overflow-y-auto pr-2 max-h-full">
              <p className="text-2xl font-bold text-white mb-2">
                About Me
              </p>
              <p className="text-lg text-white">
                Howdy! I'm Luke Chambers — a Computer Science major at Texas A&M University, graduating in May 2027, with a strong interest in full-stack development and automation. Whether it's building web applications with Next.js and Flask, streamlining workflows with Python and Power Automate, or deploying serverless tools on AWS, I thrive on turning complex problems into clean, efficient solutions.
                <br /><br />
                I've had the opportunity to intern at Blitz Medical Billing in both Software Development and Automation & Data Engineering roles, where I led initiatives to automate Excel-based processes, design dashboards in Tableau, and handle secure SFTP transfers — all while working cross-functionally in fast-paced environments.
                <br /><br />
                I’m a self-starter with a passion for learning and a strong sense of initiative, which I bring into personal projects like <i>eBrick</i>, a full-stack LEGO marketplace, and <i>Football for Girls</i>, a web app combining web scraping, Flask, and real-time trend tracking.
                <br /><br />
                Outside of tech, I serve as a percussion instructor and actively participate in the TAMU Percussion Studio and Data Science Club. These roles have helped me grow as a team player, leader, and communicator.
                <br /><br />
                United States Citizen • Open to Summer 2026 Internship Opportunities
              </p>
            </div>
          </div>

        </BackgroundGradient>

        {/*ADD AN EDUCATION SECTION*/}

        <TechnicalSkillsDisplay/>
        
        {/* Timeline section */}
        <div className="relative w-full overflow-clip ">
          <Timeline data={data} />
        </div>

        {/*ADD A PROJECT SECTION*/}

        {/*ADD A CONNECT WITH ME SECTION*/}
      </main>
    </div>
  );
}