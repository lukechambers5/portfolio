"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <h2 className="text-4xl md:text-6xl mb-6 font-bold">About Me</h2>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 overflow-hidden text-white">
        <div className="grid grid-cols-3 gap-4 items-start">
          <div className="col-span-1 flex justify-center">
            <Image
              src="/portfolio_pp.jpg"
              alt="Luke profilepic"
              width={300} 
              height={400}
              className="object-contain rounded-md max-w-full h-[400px] lg:h-[500px]"
            />
          </div>
          <div className="col-span-2">
            <p className="text-lg">
              Howdy! I'm Luke Chambers, a Computer Science major with a Business minor at Texas A&M, class of 2027.
              <br />
              <br />
              I've interned at Blitz Medical Billing in Software Development and Data Engineering, automating Excel workflows, building Tableau dashboards, and scripting secure data transfers.
              <br />
              <br />
              I love building full-stack apps like <i>eBrick</i> and <i>Football for Girls</i> — combining Supabase, AWS, Python, and real-time tracking.
              <br />
              <br />
              I’m also a percussion instructor and an active member of the TAMU Data Science Club and Percussion Studio.
            </p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}