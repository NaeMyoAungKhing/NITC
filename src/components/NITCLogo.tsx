/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface NITCLogoProps {
  variant?: "icon" | "full" | "light-full" | "light-icon";
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
}

/**
 * High-fidelity, vector-drawn NITC Logo Branding.
 * Replicates the modern, tech-forward aesthetic of the official NITC starburst emblem
 * and horizontal combo wordmark. Highly responsive and crisp at any scale.
 */
export default function NITCLogo({
  variant = "full",
  className = "",
  classNameIcon = "",
  classNameText = "",
}: NITCLogoProps) {
  
  // Recreates the exact "Brandmark-blue" logo: slanted block, lightning cutout, star burst
  const LogoEmblem = ({ isDark = false }: { isDark?: boolean }) => {
    const brandBlue = "#001456";
    const whiteColor = "#FFFFFF";

    return (
      <svg
        id="nitc-brandmark-svg"
        viewBox="0 0 100 100"
        className={`h-full w-auto select-none ${classNameIcon}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left slanted block (main card) */}
        <path
          d="M16 28 C16 26 19 25 21 25 L58 25 C64 25 67 29 65 34 L48 81 C46 86 41 89 36 89 L10 89 C4 89 1 85 3 80 Z"
          fill={isDark ? whiteColor : brandBlue}
        />
        
        {/* Lightning cutout inside left slanted block - rendered in white/empty space */}
        <path
          d="M39 25 L16 57 L28 57 L11 89 L39 52 L26 52 Z"
          fill={isDark ? brandBlue : whiteColor}
        />

        {/* Dynamic nested bottom-right parallel stroke accent */}
        <path
          d="M32 81 L56 81 C59 81 61 79 62 76 L71 52"
          stroke={isDark ? "rgba(255,255,255,0.4)" : brandBlue}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right smaller slanted block */}
        <path
          d="M60 31 C60 29.5 62 28.5 63.5 28.5 L73 28.5 C76 28.5 78 30.5 77 33 L61 80 C60 83 57.5 85 54.5 85 L44 85 C41.5 85 40 83 40.5 81 Z"
          fill={isDark ? whiteColor : brandBlue}
          opacity="0.95"
        />

        {/* 4-pointed Starburst at the top right of the right card */}
        <path
          d="M71,4 Q71,15 65,15 Q71,15 71,26 Q71,15 77,15 Q71,15 71,4 Z"
          fill={isDark ? "#22d3ee" : brandBlue}
        />
      </svg>
    );
  };

  const isLight = variant === "light-full" || variant === "light-icon" || variant === "full" || variant === "icon";
  const isIcon = variant === "icon" || variant === "light-icon";
  const isDarkText = variant === "light-full";

  if (isIcon) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ height: "100%" }}>
        <LogoEmblem isDark={variant === "light-icon"} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem Frame */}
      <div className="h-9 w-9 md:h-10 md:w-10 shrink-0">
        <LogoEmblem isDark={isDarkText} />
      </div>
      
      {/* High-fidelity Brand Wordmark Typography */}
      <div className="flex flex-col justify-center select-none">
        <div className="flex items-center gap-1">
          <span 
            className={`font-mono text-xs md:text-sm font-black tracking-[0.25em] leading-tight ${
              isDarkText ? "text-[#001456]" : "text-white"
            } ${classNameText}`}
          >
            NOVA INTERNATIONAL
          </span>
        </div>
        <span 
          className={`font-sans text-[8px] md:text-[9.5px] font-bold tracking-[0.16em] leading-none uppercase mt-0.5 ${
            isDarkText ? "text-slate-500" : "text-cyan-400"
          }`}
        >
          TECHNOLOGY COLLEGE
        </span>
      </div>
    </div>
  );
}
