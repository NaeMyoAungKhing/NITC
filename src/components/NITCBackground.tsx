/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface BackgroundProps {
  className?: string;
  theme?: "dark" | "light" | "blue";
}

/**
 * High-fidelity Cybernetic Starburst and Grid Pattern.
 * Replicates the elegant starburst polling grid pattern from the official NITC design.
 */
export function CyberGridBackground({ className = "", theme = "dark" }: BackgroundProps) {
  const isLight = theme === "light";
  const nodeOpacity = isLight ? "opacity-[0.06]" : "opacity-[0.15]";
  const lineColor = isLight ? "rgba(0,20,86,0.03)" : "rgba(6,182,212,0.03)";
  const dotColor = isLight ? "fill-[#001456]" : "fill-[#06b6d4]";

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Structural Wireframe Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Advanced Starburst / Crosshair Lattice SVG */}
      <svg
        id="cyber-grid-lattice"
        className={`absolute inset-0 w-full h-full ${nodeOpacity}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Tileable Starburst pattern */}
          <pattern id="starburst-pattern" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Grid coordinate center dots */}
            <circle cx="80" cy="80" r="4" className={dotColor} />
            <circle cx="80" cy="80" r="12" fill="none" className={isLight ? "stroke-[#001456]/20" : "stroke-[#06b6d4]/20"} strokeWidth="1" strokeDasharray="2 2" />
            
            {/* Crosshair rays */}
            <line x1="80" y1="56" x2="80" y2="104" className={isLight ? "stroke-[#001456]/40" : "stroke-[#06b6d4]/40"} strokeWidth="1" />
            <line x1="56" y1="80" x2="104" y2="80" className={isLight ? "stroke-[#001456]/40" : "stroke-[#06b6d4]/40"} strokeWidth="1" />
            
            {/* Diagonal guide ticks */}
            <line x1="68" y1="68" x2="92" y2="92" className={isLight ? "stroke-[#001456]/25" : "stroke-[#06b6d4]/25"} strokeWidth="0.75" />
            <line x1="68" y1="92" x2="92" y2="68" className={isLight ? "stroke-[#001456]/25" : "stroke-[#06b6d4]/25"} strokeWidth="0.75" />

            {/* Sub-node micro dots */}
            <circle cx="20" cy="20" r="1" className={dotColor} />
            <circle cx="140" cy="20" r="1" className={dotColor} />
            <circle cx="20" cy="140" r="1" className={dotColor} />
            <circle cx="140" cy="140" r="1" className={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#starburst-pattern)" />
      </svg>
    </div>
  );
}

/**
 * Geometric Tile Background Component.
 * Replicates the beautiful interlocking isometric structure of the official NITC design layouts.
 */
export function GeometricTileBackground({ className = "", theme = "blue" }: BackgroundProps) {
  const isDark = theme === "dark";
  const opacity = isDark ? "opacity-15" : "opacity-[0.08]";
  
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Hexagonal Isometric Interlocking Tile Grid */}
      <svg
        id="geometric-tile-grids"
        className={`absolute inset-0 w-full h-full ${opacity}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="isometric-hex-pattern" width="120" height="207.84" patternUnits="userSpaceOnUse">
            {/* Diagonal grids forming 3D cubes / isometric tiles */}
            <path
              d="M120 0 L0 69.28 L0 138.56 L120 207.84 L120 138.56 L120 69.28 Z"
              fill="none"
              stroke={isDark ? "#ffffff" : "#001456"}
              strokeWidth="0.75"
            />
            <path
              d="M60 34.64 L120 69.28 L60 103.92 L0 69.28 Z"
              fill="none"
              stroke={isDark ? "#ffffff" : "#001456"}
              strokeWidth="0.75"
            />
            <path
              d="M60 103.92 L60 173.2"
              fill="none"
              stroke={isDark ? "#ffffff" : "#001456"}
              strokeWidth="0.75"
            />
            <path
              d="M0 138.56 L60 173.2 L120 138.56"
              fill="none"
              stroke={isDark ? "#ffffff" : "#001456"}
              strokeWidth="0.75"
            />
            
            {/* Soft decorative shading in alternate faces for depth */}
            <polygon
              points="60,34.64 120,69.28 60,103.92 0,69.28"
              fill={isDark ? "rgba(255,255,255,0.02)" : "rgba(0,20,86,0.01)"}
            />
            <polygon
              points="0,69.28 60,103.92 60,207.84 0,138.56"
              fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,169,179,0.02)"}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric-hex-pattern)" />
      </svg>
    </div>
  );
}
