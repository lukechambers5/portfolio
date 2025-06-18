"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Make sure this is CORRECT

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Log hovered state changes
  useEffect(() => {
    console.log("HOVERED STATE UPDATED:", hovered);
    // Observe the linearGradient stop-color changes in the Elements tab manually if this fires
  }, [hovered]);

  // Log cursor and maskPosition updates
  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      console.log("SVG getBoundingClientRect:", svgRect); // Check these values - should match 480x300 roughly
      console.log("Raw Mouse Coords (cursor):", cursor); // Check this when you move the mouse

      if (svgRect.width === 0 || svgRect.height === 0) {
        console.warn("SVG still reporting 0 width/height from getBoundingClientRect, despite computed styles.");
        // This would be a very strange edge case, but check it.
        return;
      }

      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

      const newMaskPosition = {
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      };
      setMaskPosition(newMaskPosition);
      console.log("MASK POSITION CALCULATED & SET:", newMaskPosition); // THIS IS CRUCIAL
    }
  }, [cursor]);

  // Determine a more appropriate viewBox based on the text length for better fit
  // This is a heuristic and might need fine-tuning based on the font and exact text.
  const textLengthFactor = text.length > 0 ? text.length : 1;
  const calculatedViewBoxWidth = textLengthFactor * 60; // Adjust multiplier as needed
  const calculatedViewBoxHeight = 100; // Keep height relatively constant or adjust as well
  const fontSize = 70; // Set a specific font size in SVG units

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
      viewBox={`0 0 ${text.length > 0 ? text.length * 60 : 1 * 60} 100`} // Use dynamic viewBox
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setHovered(true);
        console.log("EVENT: MOUSE ENTERED SVG"); // CHECK IF THIS APPEARS
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log("EVENT: MOUSE LEFT SVG"); // CHECK IF THIS APPEARS
      }}
      onMouseMove={(e) => {
        setCursor({ x: e.clientX, y: e.clientY });
        // console.log("EVENT: MOUSE MOVED - Raw ClientX:", e.clientX, "ClientY:", e.clientY); // Can be noisy, uncomment if needed
      }}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {/* Check these stop-colors manually in Elements tab */}
          <stop offset="0%" stopColor={hovered ? "#eab308" : "#aaa"} />
          <stop offset="25%" stopColor={hovered ? "#ef4444" : "#aaa"} />
          <stop offset="50%" stopColor={hovered ? "#3b82f6" : "#aaa"} />
          <stop offset="75%" stopColor={hovered ? "#06b6d4" : "#aaa"} />
          <stop offset="100%" stopColor={hovered ? "#8b5cf6" : "#aaa"} />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }} // This will only apply on initial render
          animate={maskPosition} // THIS IS WHAT FRAMER-MOTION SHOULD BE ANIMATING
          transition={{ duration: duration ?? 0.3, ease: "easeOut" }} // Give it a small duration (e.g., 0.3s) to see the movement
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)"></rect>
        </mask>
      </defs>

      {/* The base "ghost" text */}
      <text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0, fontSize: `${fontSize}px` }}
      >
        {text}
      </text>

      {/* The initial stroke animation text (this might obscure things if it's always visible) */}
      <motion.text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ fontSize: `${fontSize}px` }}
      >
        {text}
      </motion.text>

      {/* The masked text that should reveal on hover */}
      <text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" stroke="url(#textGradient)" strokeWidth="0.3" mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ fontSize: `${fontSize}px` }}
      >
        {text}
      </text>
    </svg>
  );
};