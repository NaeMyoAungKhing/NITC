/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, BookOpen, Layers, Zap, Rocket, ChevronRight, Play, Loader2, ArrowRight
} from "lucide-react";
import { ACTIVE_MISSIONS, UPCOMING_MODULES } from "../mockData";
import { ActiveMission } from "../types";

export default function MissionsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [missions, setMissions] = useState<ActiveMission[]>(ACTIVE_MISSIONS);
  const [resumingId, setResumingId] = useState<string | null>(null);

  const handleResumeMission = (id: string) => {
    setResumingId(id);
    setTimeout(() => {
      setMissions(prev => 
        prev.map(m => m.id === id ? { ...m, syncedPercentage: Math.min(m.syncedPercentage + 6, 100) } : m)
      );
      setResumingId(null);
    }, 1500);
  };

  const filteredMissions = missions.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.moduleCode.includes(searchQuery)
  );

  const filteredUpcoming = UPCOMING_MODULES.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.code.includes(searchQuery)
  );

  return (
    <div id="missions-screen" className="pb-24 space-y-8 select-none">
      {/* Page Title & Concept Headers */}
      <div className="flex flex-col gap-1.5">
        <h2 className="font-hanken text-4xl font-extrabold text-[#001456] tracking-tight">
          Workspace Central
        </h2>
        <p className="font-sans text-xs text-slate-500 max-w-lg leading-relaxed">
          Command your training curriculum, trigger active benchmark missions, and monitor sync status with live NITC faculty.
        </p>
      </div>

      {/* Underlined Interactive Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="FIND MISSION MATERIALS OR CODE (e.g. 02, Quantum)..."
          className="w-full bg-white border border-slate-200 focus:border-cyan-500 rounded-xl py-4.5 pl-12 pr-4 font-mono text-xs tracking-wider outline-none text-[#001456] transition-all placeholder:text-slate-400 shadow-sm"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Subsection Labels */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
          <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
            ACTIVE MISSIONS // CURRENT PHASE
          </span>
          <span className="font-mono text-[10px] text-cyan-600 font-semibold uppercase">
            {filteredMissions.length} PROJECTS FOUND
          </span>
        </div>

        {filteredMissions.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-xl font-sans text-xs text-slate-400">
            No active missions matching "{searchQuery}" detected. Try searching another term in the mainframe.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredMissions.map((mission) => {
              const isFirst = mission.id === "mission-1";
              
              return (
                <motion.div 
                  key={mission.id}
                  layoutId={mission.id}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_24px_rgba(26,43,109,0.03)] transition-all relative overflow-hidden"
                >
                  {/* Decorative glowing gradient borders */}
                  {isFirst && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-[#001456]" />
                  )}

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-[10px] bg-[#001456] text-white font-bold px-2.5 py-1 rounded">
                      {mission.priority}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 font-medium">
                      <span>MODULE // {mission.moduleCode}</span>
                      <span>•</span>
                      <span className="text-cyan-600 font-bold uppercase">EST. {mission.completionDays} DAYS</span>
                    </div>
                  </div>

                  {/* Mission Title */}
                  <h4 className="font-hanken text-2xl font-extrabold text-[#001456] leading-snug tracking-tight mb-2">
                    {mission.title}
                  </h4>

                  {/* Description or details */}
                  {mission.description && (
                    <p className="font-sans text-xs text-slate-500 leading-relaxed mb-4">
                      {mission.description}
                    </p>
                  )}

                  {/* Horizontal dividers & metrics */}
                  <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-4 mb-4 text-center">
                    <div className="flex flex-col items-center">
                      <BookOpen className="w-4.5 h-4.5 text-indigo-500 mb-1" />
                      <span className="font-mono text-[10px] text-[#001456] font-bold">{mission.theoryCount} THEORY</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-100 px-2">
                      <Layers className="w-4.5 h-4.5 text-cyan-500 mb-1" />
                      <span className="font-mono text-[10px] text-[#001456] font-bold">{mission.competencyCount} COMPETENCY</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Zap className="w-4.5 h-4.5 text-emerald-500 mb-1" />
                      <span className="font-mono text-[10px] text-[#001456] font-bold">{mission.practicalCount} PRACTICAL</span>
                    </div>
                  </div>

                  {/* Progress, Instructor & Call To Action Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    {/* Instructor profile */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={mission.instructorAvatar} 
                        alt={mission.instructor} 
                        className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="block text-[8px] font-mono text-slate-400 font-bold tracking-wider">INSTRUCTOR // BENCHMARK</span>
                        <span className="block font-sans text-xs font-extrabold text-[#001456]">{mission.instructor}</span>
                      </div>
                    </div>

                    {/* Progress details */}
                    <div className="flex-1 max-w-xs">
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                        <span className="text-slate-400 font-bold uppercase">SYNCHRONIZATION RATE</span>
                        <span className="text-[#001456] font-black">{mission.syncedPercentage}% SYNCED</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: `${mission.syncedPercentage}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-[#001456] rounded-full"
                        />
                      </div>
                    </div>

                    {/* Resume CTA */}
                    <div className="shrink-0">
                      <button
                        onClick={() => handleResumeMission(mission.id)}
                        disabled={resumingId !== null}
                        className="w-full sm:w-auto px-4 py-2.5 bg-[#001456] hover:bg-[#12287c] disabled:bg-slate-300 text-white font-mono text-[10px] tracking-widest font-extrabold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all uppercase shadow-md active:scale-95"
                      >
                        {resumingId === mission.id ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>SYNCING...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 fill-current" />
                            <span>RESUME MISSION</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Upcoming Modules Section */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
          <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
            UPCOMING MODULES // QUEUED
          </span>
          <button 
            onClick={() => alert("Curriculum tree maps are managed by NITC Registrar. Full view unlocked upon completing active missions.")}
            className="font-mono text-[10px] text-cyan-600 hover:text-[#001456] font-extrabold tracking-wider uppercase transition-colors cursor-pointer"
          >
            VIEW FULL MAP
          </button>
        </div>

        {filteredUpcoming.length === 0 ? (
          <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl font-sans text-xs text-slate-400">
            No upcoming queue spots matching search query.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredUpcoming.map((item, index) => {
              return (
                <div 
                  key={item.code}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Big Module Code badge */}
                    <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-mono text-sm font-black shrink-0">
                      {item.code}
                    </div>
                    <div>
                      <h5 className="font-hanken text-base font-extrabold text-[#001456] leading-snug">
                        {item.title}
                      </h5>
                      <span className="block font-mono text-[9px] text-slate-400 tracking-wider">
                        {item.instructor}
                      </span>
                    </div>
                  </div>

                  <div className="text-[#001456]/40 hover:text-cyan-500 transition-colors p-2 cursor-pointer">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
