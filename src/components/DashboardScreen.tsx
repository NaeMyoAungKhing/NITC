/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Terminal, Sliders, Zap, ChevronLeft, ChevronRight, Rocket, ArrowRight
} from "lucide-react";
import { ModuleStatus, FlightPlanItem } from "../types";
import { INSTALLED_MODULES, WEEKLY_FLIGHT_PLAN } from "../mockData";
import NITCLogo from "./NITCLogo";
import { GeometricTileBackground } from "./NITCBackground";
import { CATEGORIES as SUPPORT_CATEGORIES, SupportCategory } from "./SupportCentre";

interface DashboardScreenProps {
  onNavigateToMissions: (courseId?: string) => void;
  roboticsLabImage: string;
  onOpenSupport: (c: SupportCategory) => void;
}

interface FeaturedSlide {
  courseId: string;
  badge: string;
  badgeAccent: string;
  label: string;
  title: string;
  description: string;
  overlay: string;
}

const FEATURED_SLIDES: FeaturedSlide[] = [
  {
    courseId: "mission-1",
    badge: "CORE COURSE",
    badgeAccent: "bg-red-500/25 border-red-500/40 text-rose-300",
    label: "Featured Course",
    title: "AI for Business Applications",
    description: "Use AI tools and data analysis to solve a real business challenge with an industry partner.",
    overlay: "from-[#001456]/85 via-[#001a40]/75 to-transparent",
  },
  {
    courseId: "mission-2",
    badge: "IN PROGRESS",
    badgeAccent: "bg-emerald-500/25 border-emerald-500/40 text-emerald-300",
    label: "Continue your work",
    title: "Basic Business Data Analysis",
    description: "Turn business datasets into clear, actionable insights — your dashboard assignment is due soon.",
    overlay: "from-emerald-900/85 via-[#001a40]/75 to-transparent",
  },
  {
    courseId: "upcoming-05",
    badge: "OPENING SOON",
    badgeAccent: "bg-amber-500/25 border-amber-500/40 text-amber-300",
    label: "Next term · preview",
    title: "Digital Marketing",
    description: "Run real campaigns, read real numbers. Plan a small live campaign for a campus event.",
    overlay: "from-amber-900/85 via-[#001a40]/75 to-transparent",
  },
];

export default function DashboardScreen({ onNavigateToMissions, roboticsLabImage, onOpenSupport }: DashboardScreenProps) {
  const [modules, setModules] = useState<ModuleStatus[]>(INSTALLED_MODULES);
  const [flightPlans, setFlightPlans] = useState<FlightPlanItem[]>(WEEKLY_FLIGHT_PLAN);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [activeFlightPlanId, setActiveFlightPlanId] = useState<string>("fp-1");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Auto-advance the featured-course carousel every 6 seconds.
  useEffect(() => {
    const id = setInterval(() => {
      setFeaturedIndex(i => (i + 1) % FEATURED_SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const activeSlide = FEATURED_SLIDES[featuredIndex];

  const handleOpenFeatured = () => {
    onNavigateToMissions(activeSlide.courseId);
  };

  const selectFlightDay = (id: string, isBreak?: boolean) => {
    if (isBreak) return;
    setActiveFlightPlanId(id);
  };

  return (
    <div id="dashboard-screen" className="pb-24 space-y-8 select-none">
      {/* Top Banner Context */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-1.5"
      >
        <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-cyan-600 tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          ENROLLMENT STATUS: ACTIVE
        </div>
        <h2 className="font-hanken text-4xl font-extrabold text-[#001456] tracking-tight">
          Hello, Student.
        </h2>
        <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xl">
          Welcome back to your NITC learning portal. You're on track this term. Continue your
          <span className="text-[#001456] font-semibold"> AI for Business Applications</span> course to stay on top of your 4-4-2 curriculum.
        </p>
      </motion.div>

      {/* Student Support Centre — 5 main support functions */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(26,43,109,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-hanken text-xl font-extrabold text-[#001456] tracking-tight">Student Support Centre</h3>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">Our five main support functions — tap a card to open the team that helps you with that.</p>
          </div>
          <span className="font-mono text-[10px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">5 PILLARS</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SUPPORT_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => onOpenSupport(cat.id)}
              className={`group relative overflow-hidden rounded-xl border border-transparent bg-gradient-to-br ${cat.accent} text-white p-4 text-left transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer min-h-[140px] flex flex-col justify-between`}
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                {cat.icon}
              </div>
              <div className="relative">
                <span className="block font-mono text-[8.5px] text-white/70 tracking-widest font-bold uppercase mb-1">Pillar 0{idx + 1}</span>
                <span className="block font-hanken text-sm font-extrabold leading-tight">{cat.label}</span>
                <div className="flex items-center gap-1 mt-2 font-mono text-[9px] text-white/80 group-hover:text-white tracking-wider">
                  <span>Open</span><ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Matrix Summary + Action Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Curriculum Matrix Section - Left Side on Desktop (7 cols) */}
        <div className="md:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(26,43,109,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-hanken text-2xl font-bold text-[#001456]">
                My Curriculum
              </h3>
              <span className="font-mono text-[10px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full font-bold">
                4-4-2 SYSTEM
              </span>
            </div>

            {/* List of Module Metrics */}
            <div className="space-y-4">
              {modules.map((m, idx) => {
                const isTheory = m.category === "THEORY";
                const isCompetency = m.category === "COMPETENCY";
                const isPractical = m.category === "PRACTICAL";

                return (
                  <button
                    key={m.id}
                    onClick={() => onNavigateToMissions()}
                    className="w-full text-left bg-slate-50 hover:bg-slate-100 hover:border-cyan-500/40 p-4 rounded-xl border border-slate-100 transition-all duration-300 cursor-pointer block"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                          isTheory ? "bg-indigo-50 border-indigo-100 text-indigo-600" :
                          isCompetency ? "bg-amber-50 border-amber-100 text-amber-600" :
                          "bg-emerald-50 border-emerald-100 text-emerald-600"
                        }`}>
                          {m.iconType === "terminal" && <Terminal className="w-5.5 h-5.5" />}
                          {m.iconType === "sliders" && <Sliders className="w-5.5 h-5.5" />}
                          {m.iconType === "lightning" && <Zap className="w-5.5 h-5.5" />}
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] text-slate-400 tracking-wider font-bold">
                            {m.code} // {m.title}
                          </span>
                          <span className="block font-sans text-xs font-semibold text-slate-800">
                            {m.subTitle}
                          </span>
                        </div>
                      </div>
                      
                      {/* Stability Level indicator */}
                      <div className="text-right">
                        <span className="block font-mono text-xs font-bold text-[#001456]">
                          {m.stability}%
                        </span>
                        <span className="block text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wide">
                          PROGRESS
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar with glow for high stability */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.stability}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full transition-all duration-500 ${
                          m.stability >= 75 ? "bg-gradient-to-r from-indigo-800 to-indigo-600" :
                          m.stability >= 50 ? "bg-gradient-to-r from-cyan-600 to-indigo-500" :
                          "bg-gradient-to-r from-rose-500 to-amber-500"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-2 font-mono text-[9px] text-slate-400 tracking-wider">
                      <span>VIEW COURSES</span><ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Course Carousel - Right Side (5 cols) */}
        <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto flex flex-col justify-end min-h-[340px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roboticsLabImage || "https://picsum.photos/seed/cybernetics/800/600"})` }}
          />

          {/* Per-slide animated gradient overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.courseId + "-overlay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${activeSlide.overlay}`}
            />
          </AnimatePresence>

          <GeometricTileBackground theme="dark" className="opacity-[0.12]" />

          <div className="absolute top-4 left-4 h-9 w-9 opacity-85">
            <NITCLogo variant="icon" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.courseId + "-badge"}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35 }}
              className={`absolute top-4 right-4 text-[9px] font-mono font-black px-2.5 py-1 rounded tracking-[0.1em] ai-glow uppercase border ${activeSlide.badgeAccent}`}
            >
              {activeSlide.badge}
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 p-6 text-white space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.courseId + "-body"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-mono text-[9px] tracking-widest text-cyan-400/90 font-bold block uppercase mb-1">
                  {activeSlide.label}
                </span>
                <h4 className="font-hanken text-3xl font-extrabold tracking-tight text-white leading-tight">
                  {activeSlide.title}
                </h4>
                <p className="text-xs text-slate-200/90 font-sans leading-relaxed mt-2">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-2 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenFeatured}
                className="flex-1 bg-white text-[#001456] hover:bg-slate-50 font-mono font-extrabold text-xs tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300"
              >
                <span>OPEN COURSE</span>
                <Rocket className="w-4.5 h-4.5 text-[#001456] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.button>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {FEATURED_SLIDES.map((s, i) => (
                  <button
                    key={s.courseId}
                    onClick={() => setFeaturedIndex(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === featuredIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Weekly Flight Plan (Class schedule) - Full Width */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(26,43,109,0.02)]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-hanken text-2xl font-bold text-[#001456] tracking-tight">
              Weekly Timetable
            </h3>
            <p className="font-sans text-xs text-slate-400">
              Your classes, lectures, and practical sessions for the week.
            </p>
          </div>

          {/* Navigation and state filters */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentWeekOffset(p => p - 1)}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#001456] font-bold px-3 py-1 bg-slate-100 rounded-md">
              {currentWeekOffset === 0 ? "THIS WEEK" : `WEEK ${currentWeekOffset > 0 ? "+" : ""}${currentWeekOffset}`}
            </span>
            <button 
              onClick={() => setCurrentWeekOffset(p => p + 1)}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List of flight days */}
        <div className="grid grid-cols-1 divide-y divide-slate-100">
          {flightPlans.map((fp) => {
            const isAct = fp.id === activeFlightPlanId && !fp.isBreak;
            
            return (
              <div 
                key={fp.id}
                onClick={() => selectFlightDay(fp.id, fp.isBreak)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 transition-all duration-300 cursor-pointer ${
                  fp.isBreak ? "bg-slate-50/50 cursor-not-allowed opacity-60" :
                  isAct ? "bg-[#001456]/5 border-l-4 border-l-[#001456]" : "hover:bg-slate-50 border-l-4 border-l-transparent"
                }`}
              >
                {/* Day / Date Identifier */}
                <div className="flex items-center gap-4 mb-2 sm:mb-0 shrink-0">
                  <div className="text-center w-12">
                    <span className="block font-mono text-[10px] text-slate-400 leading-none font-bold uppercase">
                      {fp.day}
                    </span>
                    <span className=