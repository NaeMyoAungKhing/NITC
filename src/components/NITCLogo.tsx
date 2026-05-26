/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// Official NITC brand assets (transparent PNGs supplied by the New School Design Group).
import logoBlue from "../assets/brand/logo-blue.png";
import logoWhite from "../assets/brand/logo-white.png";
import brandmarkBlue from "../assets/brand/brandmark-blue.png";
import brandmarkWhite from "../assets/brand/brandmark-white.png";

interface NITCLogoProps {
  /**
   * full        – emblem + wordmark, white art (use on dark backgrounds)
   * light-full  – emblem + wordmark, brand-blue art (use on light backgrounds)
   * icon        – emblem only, white art (use on dark backgrounds)
   * light-icon  – emblem only, brand-blue art (use on light backgrounds)
   */
  variant?: "icon" | "full" | "light-full" | "light-icon";
  className?: string;
  /** Extra classes applied to the rendered <img>. */
  classNameIcon?: string;
  /** @deprecated kept for backwards compatibility – no longer used. */
  classNameText?: string;
}

/**
 * Official NITC logo lockups, rendered from the real brand artwork.
 * The combined wordmark art already contains the starburst emblem, so the
 * "full" variants render a single crisp image rather than a reconstructed SVG.
 */
export default function NITCLogo({
  variant = "full",
  className = "",
  classNameIcon = "",
}: NITCLogoProps) {
  // Light variants sit on light surfaces, so they use the blue artwork.
  const isLightSurface = variant === "light-full" || variant === "light-icon";
  const isIcon = variant === "icon" || variant === "light-icon";

  if (isIcon) {
    return (
      <img
        src={isLightSurface ? brandmarkBlue : brandmarkWhite}
        alt="NITC emblem"
        draggable={false}
        className={`h-full w-full object-contain select-none ${className} ${classNameIcon}`}
      />
    );
  }

  return (
    <img
      src={isLightSurface ? logoBlue : logoWhite}
      alt="Nova International Technology College"
      draggable={false}
      className={`h-9 w-auto object-contain select-none ${className}`}
    />
  );
}
