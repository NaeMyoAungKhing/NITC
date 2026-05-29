/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles, Rocket, Layers, HeartHandshake, X
} from "lucide-react";
import NITCLogo from "./NITCLogo";
import { CyberGridBackground } from "./NITCBackground";

interface IntroOverlayProps {
  onFinish: () => void;
}

interface Slide {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: string; // tailwind text color for the icon ring
}

const SLIDES: Slide[] = [
  {
    eyebrow: "WELCOME",
    title: "Nova International Technology College",
    body: "A student-centred learning portal — built around how students actually learn.",
    icon: <Sparkles className="w-6 h-6" />,
    accent: "text-cyan-300",
  },
  {
    eyebrow: "LEARN",
    title: "Your courses, end-to-end",
    body: "Lessons, materials, assignments, quizzes and discussion — all in one place.",
    icon: <Rocket className="w-6 h-6" />,
    accent: "text-emerald-300",
  },
  {
    eyebrow: "STRUCTURE",
    title: "Built around 4-4-2",
    body: "Theory 40%, Competency 40%, Practical 20%. Every subject mapped to a real outcome.",
    icon: <Layers className="w-6 h-6" />,
    accent: "text-amber-300",
  },
  {
    eyebrow: "SUPPORT",
    title: "Five pillars of student support",
    body: "Academic, Technology, Well-Being, Family & Community, Career — together, end to end.",
    icon: <HeartHandshake className="w-6 h-6" />,
    accent: "text-rose-300",
  },
];

const SLIDE_MS = 2600;
const STORAGE_KEY = "nitc_intro_seen_v1";

export default function IntroOverlay({ onFinish }: IntroOverlayProps) {
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  // Auto-advance through slides; finish at the end.
  useEffect(() => {
    if (closing) return;
    const t = setTimeout(() => {
      if (index < SLIDES.length - 1) {
        setIndex(i => i + 1);
      } else {
        handleFinish();
      }
    }, SLIDE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, closing]);

  const handleFinish = () => {
    if (closing) return;
    setClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* sessionStorage might be unavailable; safe to ignore */
    }
    // Give the exit animation time to play.
    setTimeout(() => onFinish(), 420);
  };

  const slide = SLIDES[index];
  const progress = ((index + 1) / SLIDES.length) * 100;

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04081a] overflow-hidden select-none"
        >
          {/* Decorative animated grid */}
          <CyberGridBackground theme="dark" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04081a] via-[#06122f]/95 to-[#001456]/90 pointer-events-none" />

          {/* Floating brand glow */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ scale: 1.1, opacity: 0.4 }}
            animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-[#293490]/40 blur-3xl pointer-events-none"
          />

          {/* Skip button */}
          <button
            onClick={handleFinish}
            className="absolute top-5 right-5 z-10 flex items-center gap-1.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 rounded-full px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
          >
            <span>Skip intro</span><X className="w-3 h-3" />
          </button>

          {/* Brand at top */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 opacity-90">
            <div className="h-7 w-auto"><NITCLogo variant="full" /></div>
            <span className="font-mono text-[9px] text-amber-300 bg-amber-300/15 border border-amber-300/30 px-2 py-0.5 rounded font-bold tracking-widest uppercase">BETA</span>
          </div>

          {/* Slide content */}
          <div className="relative z-10 max-w-2xl w-full px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/8 border border-white/15 ${slide.accent} mb-6`}>
                  {slide.icon}
                </div>
                <span className="block font-mono text-[10px] text-cyan-300 font-bold tracking-[0.3em] uppercase mb-3">
                  {slide.eyebrow}
                </span>
                <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  {slide.title}
                </h2>
                <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed mt-4 max-w-xl mx-auto">
                  {slide.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom controls: progress bar + dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-10">
            <div className="w-full h-0.5 bg-white/15 rounded-full overflow-hidden mb-3">
              <motion.div
                key={`progress-${index}`}
                initial={{ width: `${((index) / SLIDES.length) * 100}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                className="h-full bg-cyan-300"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <p className="text-center font-mono text-[9px] text-white/40 tracking-widest mt-3">
              {index + 1} / {SLIDES.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper exported for App.tsx so it can decide whether to render the overlay.
export function shouldShowIntro(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}
