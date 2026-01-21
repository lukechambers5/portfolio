"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const schools = [
  {
    title: "Texas A&M University",
    logo: "/logos/tamu-logo.webp",
    images: ["/tamu3.jpg"],
    bullets: [
      "B.S. in Computer Science, Class of 2027",
      "Minor in Business",
      "GPA: 3.608",
      "TAMU Baptist Student Ministry"
    ], 
  },
  {
    title: "Legacy Christian Academy",
    logo: "/logos/legacy-logo.png",
    images: ["/lca1.jpg", "/lca2.jpg"],
    bullets: [
      "High School Diploma, 2019–2023",
      "Percussion Captain (2022-2023), National Honor Society",
      "Currently Part-Time Percussion Instructor (2023-Present)"
    ],
  },
];

// Transform to TimelineEntry format
const timelineData = schools.map((school) => ({
  title: school.title,
  content: (
    <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md space-y-4">
      {/* Logo and bullets */}
      <div className="flex items-center space-x-4">
        <Image
          src={school.logo}
          alt={`${school.title} logo`}
          width={60}
          height={60}
          className="rounded"
        />
        <ul className="list-disc list-inside text-sm text-neutral-800 dark:text-neutral-300">
          {school.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Multiple images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {school.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${school.title} photo ${i + 1}`}
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  ),
}));

export default function EducationPage() {
  return <Timeline data={timelineData} />;
}
