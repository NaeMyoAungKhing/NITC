/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, Sliders, Zap, ChevronLeft, ChevronRight, Rocket,
  Calendar, CheckCircle2, Pin, ShieldAlert, Cpu
} from "lucide-react";
import { ModuleStatus, FlightPlanItem } from "../types";
import { INSTALLED_MODULES, WEEKLY_FLIGHT_PLAN } from "../mockData";
import NITCLogo from "./NITCLogo";
import { GeometricTileBackground } from "./NITCBackground";

interface DashboardScreenProps {
  onNavigateToMissions: () => void;
  roboticsLabImage: string;
}

export default function DashboardScreen({ onNavigateToMissions, roboticsLabImage }: DashboardScreenProps) {
  const [modules, setModules] = useState<ModuleStatus[]>(INSTALLED_MODULES);
  const [flightPlans, setFlightPlans] = useState<FlightPlanItem[]>(WEEKLY_FLIGHT_PLAN);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [missionLaunched, setMissionLaunched] = useState(false);
  const [activeFlightPlanId, setActiveFlightPlanId] = useState<string>("fp-1");

  const handleLaunchMission = () => {
    setMissionLaunched(true);
    // Simulate mission startup or stability syncing
    setTimeout(() => {
      // Increase competency stability a bit upon launch as a cool Easter Egg
      setModules(prev => 
        prev.map(m => m.category === "COMPETENCY" ? { ...m, stability: Math.min(m.stability + 15, 100) } : m)
      );
    }, 2000);
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
          OPERATIONAL STATUS: ACTIVE
        </div>
        <h2 className="font-hanken text-4xl font-extrabold text-[#001456] tracking-tight">
          Hello, Student.
        </h2>
        <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xl">
          Welcome back to NITC Mission Control. Your trajectory is currently optimal. Complete your 
          <span className="text-[#001456] font-semibold"> Robotics Lab Integration</span> mission to maintain 4-4-2 curriculum compliance.
        </p>
      </motion.div>

      {/* Grid: Matrix Summary + Action Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Curriculum Matrix Section - Left Side on Desktop (7 cols) */}
        <div className="md:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(26,43,109,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-hanken text-2xl font-bold text-[#001456]">
                Curriculum Matrix
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
                  <div key={m.id} className="bg-slate-50 hover:bg-slate-100/50 p-4 rounded-xl border border-slate-100 transition-all duration-300">
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
                          STABILITY
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlighted Project Card (Robotics Lab Integration) - Right Side (5 cols) */}
        <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto flex flex-col justify-end min-h-[340px]">
          {/* Real Background generated image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${roboticsLabImage || "https://picsum.photos/seed/cybernetics/800/600"})` }}
            referrerPolicy="no-referrer"
          />
          {/* Cybernetic Dark Mesh Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000a29] via-[#051124]/75 to-transparent pointer-events-none" />

          {/* Isometric Tile Grid Overlay */}
          <GeometricTileBackground theme="dark" className="opacity-[0.12]" />

          {/* Glowing tech grid and status labels inside cards */}
          <div className="absolute top-4 left-4 h-9 w-9 opacity-85">
            <NITCLogo variant="icon" />
          </div>

          <div className="absolute top-4 right-4 bg-red-500/25 border border-red-500/40 text-[9px] font-mono font-black text-rose-300 px-2.5 py-1 rounded tracking-[0.1em] ai-glow uppercase">
            PRIORITY ALPHA
          </div>

          <div className="relative z-10 p-6 text-white space-y-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-cyan-400/90 font-bold block uppercase mb-1">
                Active Benchmark Project
              </span>
              <h4 className="font-hanken text-3xl font-extrabold tracking-tight text-white leading-tight">
                Robotics Lab Integration
              </h4>
              <p className="text-xs text-slate-200/90 font-sans leading-relaxed mt-2">
                Synchronize AI neural pathing algorithms with hydraulic arm actuators inside Lab 4B mainframe.
              </p>
            </div>

            {/* Launch Action */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {!missionLaunched ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLaunchMission}
                    className="w-full bg-white text-[#001456] hover:bg-slate-50 font-mono font-extrabold text-xs tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300"
                  >
                    <span>LAUNCH ACTIVE MISSION</span>
                    <Rocket className="w-4.5 h-4.5 text-[#001456] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 p-3 rounded-xl flex items-center gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 animate-bounce" />
                    <div>
                      <span className="block font-mono font-bold text-white uppercase tracking-wider">Mission Synchronized</span>
                      <span className="block text-[10px] text-emerald-300/80">Calibration stream active in Lab 4B.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              Weekly Flight Plan
            </h3>
            <p className="font-sans text-xs text-slate-400">
              Scheduled academic sorties, lecture series, and practical calibration windows.
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
              {currentWeekOffset === 0 ? "CURRENT PHASE" : `PHASE ${currentWeekOffset > 0 ? "+" : ""}${currentWeekOffset}`}
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
                    <span className="block font-hanken text-lg font-extrabold text-[#001456] leading-tight">
                      {fp.dateNum + (currentWeekOffset * 7)}
                    </span>
                  </div>
                  
                  {/* Divider line in row */}
                  <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

                  {/* Title and location badge */}
                  <div>
                    <span className={`block font-sans text-sm font-extrabold ${fp.isBreak ? "text-slate-400 line-through" : "text-slate-800"}`}>
                      {fp.title}
                    </span>
                    <span className="block font-sans text-xs text-slate-400">
                      {fp.isBreak ? "Mission Rest Block" : "Theoretical calibration series"}
                    </span>
                  </div>
                </div>

                {/* Sub details on right */}
                <div className="flex items-center sm:text-right gap-3 mt-1 sm:mt-0">
                  <div className="font-mono text-right">
                    <span className="block text-xs font-bold text-[#001456]">
                      {fp.timeRange}
                    </span>
                    {fp.location && (
                      <span className="inline-block text-[9px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-1.5 py-0.5 rounded uppercase leading-none mt-1">
                        {fp.location}
                      </span>
                    )}
                  </div>

                  {/* Active/Linked visual feedback */}
                  {!fp.isBreak && (
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                      isAct ? "bg-[#001456] border-[#001456] text-white" : "border-slate-300 bg-white"
                    }`}>
                      {isAct && <div className="w-1 h-1 bg-white rounded-full" />}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
