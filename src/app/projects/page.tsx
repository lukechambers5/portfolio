// app/projects/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

const projects = [
  {
    title: "eBrick - Personal",
    description:
      "Full-stack LEGO marketplace using Next.js, Supabase, Stripe, and AWS Lambda for real-time pricing.",
    video: "https://www.youtube.com/watch?v=yiicxoi2Pl4",
    poster: "/thumbnail.png",
    github: "https://github.com/lukechambers5/eBrick",
    live: "https://ebrickshop.com",
  },
  {
    title: "CineScope - Personal",
    description:
      "Full-stack movie watchlist and recommendation app using Java Spring Boot, DynamoDB, AWS Lambda, AWS EC2, AWS S3, and React. Features JWT auth, movie enrichment, and TMDb integration.",
    image: "/cinescope.png",
    github: "https://github.com/lukechambers5/movie-watchlist",
    live: "https://lukechambers5.github.io/movie-frontend"
  },
  {
    title: "NBA Points Predictor - Personal",
    description:
      "Flask app that predicts NBA player points using a trained Random Forest model",
    image: "/nba.png",
    github: "https://github.com/lukechambers5/nba-points-ml",
    live: "https://nba-points-predictor.fly.dev/",
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
    title: "Census Reconciliation - Blitz Medical Billing",
    description:
      "Python + Tkinter automation app for AdvancedMD and Tableau reconciliation.",
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

export default function ProjectsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <BackgroundGradient
            key={i}
            className="relative rounded-xl p-4 bg-zinc-900 h-full"
          >
            {project.video ? (
              <div
                onClick={() => {
                  if (project.video.startsWith("http")) {
                    window.open(project.video, "_blank");
                  } else {
                    setSelectedVideo(project.video);
                  }
                }}
                className="cursor-pointer w-full h-48 relative rounded-md overflow-hidden mb-4"
              >
                <video
                  src={project.video}
                  poster={project.poster}
                  muted
                  className="w-full h-full object-cover filter brightness-50"
                />
                <FaPlayCircle className="absolute inset-0 m-auto text-6xl text-white opacity-75" />
              </div>
            ) : (
              <Image
                src={project.image!}
                alt={project.title}
                width={400}
                height={192}
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
    </div>
  );
}
