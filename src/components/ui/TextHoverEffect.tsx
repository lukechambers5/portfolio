"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  // ViewBox dimensions based on text length
  const viewBoxWidth = text.length > 0 ? text.length * 60 : 60;
  const viewBoxHeight = 100;

  // maskPosition in SVG user space units (numbers)
  const [maskPosition, setMaskPosition] = useState({ cx: viewBoxWidth / 2, cy: viewBoxHeight / 2 });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();

      // Calculate cursor position relative to SVG viewBox units
      const cx = ((cursor.x - svgRect.left) / svgRect.width) * viewBoxWidth;
      const cy = ((cursor.y - svgRect.top) / svgRect.height) * viewBoxHeight;

      setMaskPosition({ cx, cy });
    }
  }, [cursor, viewBoxWidth, viewBoxHeight]);

  const fontSize = 70; // font size in SVG units

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          <stop offset="0%" stopColor={hovered ? "#eab308" : "#aaa"} />
          <stop offset="25%" stopColor={hovered ? "#ef4444" : "#aaa"} />
          <stop offset="50%" stopColor={hovered ? "#3b82f6" : "#aaa"} />
          <stop offset="75%" stopColor={hovered ? "#06b6d4" : "#aaa"} />
          <stop offset="100%" stopColor={hovered ? "#8b5cf6" : "#aaa"} />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={viewBoxHeight * 0.3} // radius: 30% of viewBox height
          initial={{ cx: viewBoxWidth / 2, cy: viewBoxHeight / 2 }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.3, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          {/* Use absolute width/height here for the mask */}
          <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Base "ghost" text (slightly visible on hover) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0, fontSize: `${fontSize}px` }}
      >
        {text}
      </text>

      {/* Stroke animation on load */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ fontSize: `${fontSize}px` }}
      >
        {text}
      </motion.text>

      {/* The masked gradient-colored text revealed on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth={hovered ? 1.2 : 0.3} // thicker stroke on hover for visibility
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ fontSize: `${fontSize}px`, transition: "stroke-width 0.3s ease" }}
      >
        {text}
      </text>
    </svg>
  );
};
