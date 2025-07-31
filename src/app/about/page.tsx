/* eslint-disable react/no-unescaped-entities */

"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 overflow-hidden text-white">
        <div className="grid grid-cols-3 gap-4 items-start">
          <div className="col-span-1 flex justify-center">
            <Image
              src="/portfolio_pp.jpg"
              alt="Luke profilepic"
              width={400}
              height={500}
              className="rounded-2xl object-cover h-[400px] lg:h-[500px]"
            />
          </div>
          <div className="col-span-2">
            <p className="text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Howdy! I'm Luke Chambers, a Computer Science major with a Business minor at Texas A&M University, graduating in Spring of 2027. I'm passionate about building fast, reliable, and meaningful software, especially full-stack applications that make data-driven decisions in real time.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've interned at Blitz Medical Billing as both a Software Development Intern and most recently an Automation and Data Engineering Intern. One of my most impactful contributions was developing a Census Reconciliation tool that compares large-scale reports (800,000+ pieces of data) from AdvancedMD against Tableau's census data. This HIPAA-compliant Python app automated patient matching, applied charge code logic, and cut hours of manual review time.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My favorite personal project currently in development is eBrick, a full-stack LEGO marketplace built with Next.js, Supabase, and AWS (Lambda + DynamoDB), featuring serverless APIs and real-time price generation.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of tech, I’m a percussion instructor and an active member of both the TAMU Baptist Student Ministry and TAMU Percussion Studio. I’m also a big sports fan — I love cheering on the Dallas Mavericks, Dallas Stars, and New Orleans Saints, and I enjoy playing basketball in my free time.
            </p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}