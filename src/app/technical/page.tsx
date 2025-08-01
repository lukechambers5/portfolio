// app/technical/page.tsx
"use client";
import React from "react";
import TechnicalSkillsDisplay from "@/components/ui/TechnicalSkillsDisplay";

export default function TechnicalPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <TechnicalSkillsDisplay />
    </div>
  );
}
