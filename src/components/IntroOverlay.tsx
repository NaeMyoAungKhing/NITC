/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutGrid, Rocket, TrendingUp, Users, X, GraduationCap,
  Settings, Brain, Briefcase, Globe2, Wallet, CheckCircle2, Play, BookOpen
} from "lucide-react";
import NITCLogo from "./NITCLogo";
import { CyberGridBackground } from "./NITCBackground";

interface IntroOverlayProps {
  onFinish: () => void;
}

interface Slide {
  step: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: string;
  mockup: React.ReactNode;
}

const SLIDE_MS = 3400;
const STORAGE_KEY = "nitc_intro_seen_v1";

// --------- Mini-mockup components (CSS-only, no real screenshots) ---------

function DashboardMockup() {
  const pillars = [
    { icon: <GraduationCap className="w-3 h-3" />, color: "from-[#001456] to-[#293490]" },
    { icon: <Settings className="w-3 h-3" />,      color: "from-cyan-600 to-[#001456]" },
    { icon: <Brain className="w-3 h-3" />,         color: "from-rose-500 to-[#001456]" },
    { icon: <Globe2 className="w-3 h-3" />,        color: "from-emerald-600 to-[#001456]" },
    { icon: <Briefcase className="w-3 h-3" />,     color: "from-amber-600 to-[#001456]" },
  ];
  const curriculum = [
    { label: "THEORY", pct: 40, w: 75, color: "from-indigo-600 to-indigo-400" },
    { label: "COMPETENCY", pct: 40, w: 40, color: "from-amber-500 to-orange-400" },
    { label: "PRACTICAL", pct: 20, w: 60, color: "from-emerald-500 to-cyan-400" },
  ];
  return (
    <div className="rounded-xl bg-white/95 p-3 shadow-2xl border border-white/20 w-full text-[#001456]">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[8px] tracking-widest font-bold opacity-60">DASHBOARD · HELLO STUDENT</span>
        <span className="font-mono text-[7px] bg-cyan-50 border border-cyan-100 px-1.5 py-0.5 rounded text-cyan-700 font-bold tracking-widest">5 PILLARS</span>
      </div>
      <div className="grid grid-cols-5 gap-1 mb-3">
        {pillars.map((p, i) => (
          <div key={i} className={`bg-gradient-to-br ${p.color} h-10 rounded-md text-white flex items-center justify-center`}>
            {p.icon}
          </div>
        ))}
      </div>
      <div className="bg-slate-50 rounded-lg p-2 space-y-1.5">
        {curriculum.map((c, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[8px] font-bold opacity-70">{c.pct}% · {c.label}</span>
            </div>
            <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${c.color} rounded-full`} style={{ width: `${c.w}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursesMockup() {
  return (
    <div className="rounded-xl bg-white/95 p-3 shadow-2xl border border-white/20 w-full text-[#001456] space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-widest font-bold opacity-60">MY COURSES</span>
        <span className="font-mono text-[7px] bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded text-emerald-700 font-bold tracking-widest">ACTIVE · 2</span>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[7px] bg-[#001456] text-white px-1.5 py-0.5 rounded tracking-widest">CORE</span>
          <span className="font-mono text-[7px] opacity-50">04 · 4 DAYS</span>
        </div>
        <h4 className="font-hanken text-sm font-extrabold leading-tight">AI for Business Applications</h4>
        <div className="grid grid-cols-3 gap-1 my-1.5 text-center">
          <div className="bg-white border border-slate-100 rounded py-0.5"><span className="font-mono text-[7px]">4 THEORY</span></div>
          <div className="bg-white border border-slate-100 rounded py-0.5"><span className="font-mono text-[7px]">4 COMPETENCY</span></div>
          <div className="bg-white border border-slate-100 rounded py-0.5"><span className="font-mono text-[7px]">2 PRACTICAL</span></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[7px] opacity-60">78% COMPLETE</span>
          <div className="bg-[#001456] text-white px-1.5 py-0.5 rounded text-[7px] font-mono font-bold flex items-center gap-1">
            <Play className="w-2 h-2 fill-current" />CONTINUE
          </div>
        </div>
        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-[#001456] rounded-full" style={{ width: "78%" }} />
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center justify-between">
        <div>
          <span className="font-mono text-[7px] opacity-50">02</span>
          <h4 className="font-sans text-[10px] font-bold">Basic Business Data Analysis</h4>
        </div>
        <span className="font-mono text-[7px] opacity-60">42%</span>
      </div>
    </div>
  );
}

function ProgressMockup() {
  return (
    <div className="rounded-xl bg-white/95 p-3 shadow-2xl border border-white/20 w-full text-[#001456] space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-widest font-bold opacity-60">MY PROGRESS</span>
        <span className="font-mono text-[7px] bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-amber-700 font-bold tracking-widest">GPA · 3.84</span>
      </div>
      <div className="bg-gradient-to-br from-[#001456] to-[#293490] rounded-lg p-2.5 text-white">
        <span className="font-mono text-[7px] tracking-widest opacity-70">PROJECTED GPA</span>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="font-hanken text-2xl font-extrabold">3.92</span>
          <span className="font-mono text-[8px] text-emerald-300">↑ +0.08</span>
        </div>
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-cyan-300 rounded-full" style={{ width: "92%" }} />
        </div>
      </div>
      <div className="space-y-1">
        {[
          { label: "Theory", pct: 75, color: "bg-indigo-500" },
          { label: "Competency", pct: 40, color: "bg-amber-500" },
          { label: "Practical", pct: 60, color: "bg-emerald-500" },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="font-mono text-[7px] w-12 opacity-70">{p.label}</span>
            <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct}%` }} />
            </div>
            <span className="font-mono text-[7px] font-bold">{p.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ParentMockup() {
  return (
    <div className="rounded-xl bg-white/95 p-3 shadow-2xl border border-white/20 w-full text-[#001456] space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-widest font-bold opacity-60">GUARDIAN DASHBOARD</span>
        <span className="font-mono text-[7px] bg-cyan-50 border border-cyan-100 px-1.5 py-0.5 rounded text-cyan-700 font-bold tracking-widest">ARCHER</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center">
          <span className="font-mono text-[7px] text-emerald-700 font-bold tracking-widest">GPA</span>
          <div className="font-hanken text-lg font-extrabold text-emerald-700">3.92</div>
          <span className="font-mono text-[7px] text-emerald-600">TOP 5%</span>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-2 text-center">
          <span className="font-mono text-[7px] text-cyan-700 font-bold tracking-widest">ATTENDANCE</span>
          <div className="font-hanken text-lg font-extrabold text-cyan-700">98%</div>
          <span className="font-mono text-[7px] text-cyan-600">CONSISTENT</span>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            <Wallet className="w-3 h-3 text-[#001456]" />
            <span className="font-mono text-[7px] tracking-widest opacity-70 font-bold">FINANCE</span>
          </div>
          <span className="font-mono text-[7px] text-rose-700 bg-rose-50 border border-rose-200 px-1 py-0.5 rounded font-bold tracking-widest">DUE OCT 15</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="font-hanken text-sm font-extrabold">$850.00</span>
          <span className="font-mono text-[8px] opacity-60">balance · $2,450</span>
        </div>
      </div>
    </div>
  );
}

const SLIDES: Slide[] = [
  {
    step: "01 / 04",
    title: "Dashboard",
    body: "Your home screen. Curriculum, support and what to do next — all on one page.",
    icon: <LayoutGrid className="w-5 h-5" />,
    accent: "text-cyan-300",
    mockup: <DashboardMockup />,
  },
  {
    step: "02 / 04",
    title: "Courses (LMS)",
    body: "Every course end-to-end — lessons, materials, assignments, quizzes, discussion.",
    icon: <Rocket className="w-5 h-5" />,
    accent: "text-emerald-300",
    mockup: <CoursesMockup />,
  },
  {
    step: "03 / 04",
    title: "Progress",
    body: "Track GPA and your 4-4-2 balance across Theory, Competency and Practical.",
    icon: <TrendingUp className="w-5 h-5" />,
    accent: "text-amber-300",
    mockup: <ProgressMockup />,
  },
  {
    step: "04 / 04",
    title: "Parents",
    body: "Guardians follow grades, attendance and fees — and message teachers directly.",
    icon: <Users className="w-5 h-5" />,
    accent: "text-rose-300",
    mockup: <ParentMockup />,
  },
];

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
          <CyberGridBackground theme="dark" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04081a] via-[#06122f]/95 to-[#001456]/90 pointer-events-none" />

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

          {/* Slide content: mockup + caption */}
          <div className="relative z-10 max-w-3xl w-full px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
              >
                {/* Mockup */}
                <div className="order-2 sm:order-1">
                  {slide.mockup}
                </div>
                {/* Caption */}
                <div className="order-1 sm:order-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/8 border border-white/15 ${slide.accent}`}>
                      {slide.icon}
                    </div>
                    <span className="font-mono text-[10px] text-cyan-300 font-bold tracking-[0.3em] uppercase">
                      {slide.step}
                    </span>
                  </div>
                  <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed mt-3 max-w-md mx-auto sm:mx-0">
                    {slide.body}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-4 font-mono text-[10px] text-cyan-300 tracking-widest">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Live demo · explore after intro</span>
                  </div>
                </div>
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
