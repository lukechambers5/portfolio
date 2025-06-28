"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/WavyBackground";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-full flex items-center justify-center pt-24">
        <WavyBackground className="absolute inset-0" />
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex items-center justify-center gap-2 flex-wrap">
            Hi, I&aposm
            <div className="w-[480px] h-[195px]">
              <div className="text-hover-container">
                <TextHoverEffect text="LUKE" duration={0.3} />
              </div>
            </div>
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto">
            An aspiring Software Engineer
          </p>
        </div>
      </section>
    </div>
  );
}
