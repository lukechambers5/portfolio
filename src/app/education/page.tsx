"use client";
import React from "react";
import Image from "next/image";

export default function EducationPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="space-y-8">
        <div className="flex items-start space-x-4 border-b border-gray-700 pb-4">
          <Image
            src="/logos/tamu-logo.webp"
            alt="Texas A&M Logo"
            width={80}
            height={80}
            className="mt-1"
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
            width={80}
            height={80}
            className="mt-1"
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
    </div>
  );
}
