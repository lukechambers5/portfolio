// app/work/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="flex items-center mb-8 space-x-4">
        <Image
          src="/logos/blitz-logo.png"
          alt="Blitz Medical Billing Logo"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
          <h3 className="text-2xl font-semibold mb-2">Automation & Data Engineering Intern</h3>
          <p className="text-base text-neutral-400 mb-1">
            Blitz Medical Billing | Frisco, TX
          </p>
          <p className="text-sm text-neutral-300 mb-4">May 2025 – Present</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed HIPAA-compliant automation workflows using Office Scripts and Power Automate, reducing manual steps in payment reconciliation by 90% and boosting accuracy.</li>
            <li>Engineered Python-based SFTP automations for secure data uploads/downloads and real-time error alerts, cutting monitoring time by 95%.</li>
            <li>Refined Tableau dashboards by debugging and designing new client-facing visualizations, improving load times by 25%.</li>
          </ul>
        </BackgroundGradient>

        <BackgroundGradient className="p-6 bg-zinc-900 rounded-xl h-full">
          <h3 className="text-2xl font-semibold mb-2">Software Development Intern</h3>
          <p className="text-base text-neutral-400 mb-1">
            Blitz Medical Billing | Frisco, TX
          </p>
          <p className="text-sm text-neutral-300 mb-4">May 2024 – Aug 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated Excel-based data aggregation for healthcare reporting using Python, cutting repetitive tasks by 90%.</li>
            <li>Packaged automation tools with PyInstaller, eliminating dependencies and simplifying team onboarding.</li>
          </ul>
        </BackgroundGradient>
      </div>
    </div>
  );
}
