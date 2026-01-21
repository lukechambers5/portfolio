"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">

      {/* Logos */}
      <div className="flex items-center gap-8 mb-12">
        <Image
          src="/logos/ng.png"
          alt="Northrop Grumman Logo"
          width={140}
          height={40}
          className="object-contain"
        />
        <Image
          src="/logos/blitz-logo.png"
          alt="Blitz Medical Billing Logo"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* Northrop Grumman */}
        <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
          <h3 className="text-2xl font-semibold mb-2">
            Cyber Software Engineering Intern
          </h3>
          <p className="text-base text-neutral-400 mb-1">
            Northrop Grumman | San Antonio, TX
          </p>
          <p className="text-sm text-neutral-300 mb-4">
            Summer 2026 (Upcoming)
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Selected for a highly competitive software engineering internship
              supporting cyber and mission-critical systems.
            </li>
            <li>
              Will contribute to secure, large-scale defense applications with a
              focus on performance, security, and reliability.
            </li>
            <li>
              Expected to work in a classified, safety-critical environment using
              modern software engineering practices.
            </li>
          </ul>
        </BackgroundGradient>

        {/* Blitz – Automation */}
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
              Developed HIPAA-compliant automation workflows using Office Scripts
              and Power Automate, reducing manual steps by 90%.
            </li>
            <li>
              Built Python-based SFTP automations with error alerts, cutting
              monitoring time by 95%.
            </li>
            <li>
              Improved Tableau dashboard performance and usability for
              client-facing reports.
            </li>
          </ul>
        </BackgroundGradient>

        {/* Blitz – Software */}
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
              Automated Excel-based healthcare reporting using Python, reducing
              repetitive work by 90%.
            </li>
            <li>
              Packaged automation tools with PyInstaller to simplify team
              onboarding.
            </li>
          </ul>
        </BackgroundGradient>

      </div>
    </div>
  );
}
