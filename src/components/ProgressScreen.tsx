/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, BarChart2, Award, Zap, BookOpen, Settings, Sliders, ShieldCheck 
} from "lucide-react";

export default function ProgressScreen() {
  const [theoryGrade, setTheoryGrade] = useState(85);
  const [competencyGrade, setCompetencyGrade] = useState(72);
  const [practicalGrade, setPracticalGrade] = useState(90);

  // Compute live GPA projection based on grades
  const projectedGpa = (
    ((theoryGrade / 25) * 0.4) + 
    ((competencyGrade / 25) * 0.4) + 
    ((practicalGrade / 25) * 0.2)
  ).toFixed(2);

  return (
    <div id="progress-screen" className="pb-24 space-y-8 select-none animate-fade-in">
      
      {/* Title block */}
      <div className="flex flex-col gap-1.5">
        <h2 className="font-hanken text-4xl font-extrabold text-[#001456] tracking-tight">
          My Progress
        </h2>
        <p className="font-sans text-xs text-slate-500 max-w-lg leading-relaxed">
          Track your progress across the 4-4-2 curriculum. Adjust the sliders below to see your projected grade.
        </p>
      </div>

      {/* Grid: GPA projecting sliders on Left, system completed map on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* GPA projection estimator (5 columns) */}
        <div className="md:col-span-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[#001456]" />
              <h3 className="font-hanken text-xl font-bold text-[#001456]">
                GPA Projection Tool
              </h3>
            </div>

            <div className="space-y-5">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500 font-bold">THEORY PRESET (WEIGHT 40%)</span>
                  <span className="text-[#001456] font-black">{theoryGrade}%</span>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="100"
                  value={theoryGrade}
                  onChange={(e) => setTheoryGrade(Number(e.target.value))}
                  className="w-full accent-[#001456] h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500 font-bold">COMPETENCY PRESET (WEIGHT 40%)</span>
                  <span className="text-cyan-600 font-black">{competencyGrade}%</span>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="100"
                  value={competencyGrade}
                  onChange={(e) => setCompetencyGrade(Number(e.target.value))}
                  className="w-full accent-cyan-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500 font-bold">PRACTICAL PRESET (WEIGHT 20%)</span>
                  <span className="text-emerald-600 font-black">{practicalGrade}%</span>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="100"
                  value={practicalGrade}
                  onChange={(e) => setPracticalGrade(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Outcome circle */}
          <div className="mt-8 border-t border-slate-100 pt-6 flex items-center justify-between">
            <div>
              <span className="block font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">PROJECTED GRADE PRESET</span>
              <span className="block font-hanken text-4xl font-extrabold text-[#001456] tracking-tight">
                {projectedGpa} <span className="text-xs text-slate-400 font-mono font-normal">GPA</span>
              </span>
            </div>
            
            <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-mono font-extrabold text-sm">
              A{parseFloat(projectedGpa) >= 3.6 ? "++" : parseFloat(projectedGpa) >= 3.2 ? "+" : ""}
            </div>
          </div>
        </div>

        {/* 4-4-2 Curriculum Grid Tracker (7 columns) */}
        <div className="md:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
            <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
              4-4-2 CURRICULUM PROGRESS
            </span>
            <span className="font-mono text-[9px] text-cyan-600 font-black">
              OVERALL: 82%
            </span>
          </div>

          <div className="space-y-6">
            {/* Class Row: Theory */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span className="font-mono text-[10px] font-extrabold text-slate-700 tracking-wider">THEORY UNITS (4/4 COMPLETE)</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["Computational Maths", "Intro to IT", "Digital Business", "Basic Labor Law"].map((n, i) => (
                  <div key={i} className="bg-indigo-50 border border-indigo-100/50 p-2.5 rounded-lg text-center">
                    <span className="block font-mono text-[9px] text-indigo-500 font-bold uppercase">MODULE 0{i+1}</span>
                    <span className="block font-sans text-xs font-bold text-[#001456] truncate">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Class Row: Competency */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4 text-cyan-500" />
                <span className="font-mono text-[10px] font-extrabold text-slate-700 tracking-wider">COMPETENCY (2/4 COMPLETE)</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["Business Language", "Data Analysis", "AI for Business", "Global Strategy"].map((n, i) => {
                  const isDone = i < 2;
                  return (
                    <div 
                      key={i} 
                      className={`p-2.5 rounded-lg text-center border ${
                        isDone 
                          ? "bg-cyan-50 border-cyan-100 text-cyan-700" 
                          : "bg-slate-50 border-slate-200/50 text-slate-400 opacity-60"
                      }`}
                    >
                      <span className="block font-mono text-[9px] uppercase font-bold text-slate-400">STAGE 0{i+1}</span>
                      <span className="block font-sans text-xs font-bold truncate">{n}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Class Row: Practical */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="font-mono text-[10px] font-extrabold text-slate-700 tracking-wider">PRACTICAL (1/2 ACTIVE)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Web & Mobile Development", "Industry Internship"].map((n, i) => {
                  const isActive = i === 0;
                  return (
                    <div 
                      key={i} 
                      className={`p-3 rounded-lg border flex items-center justify-between ${
                        isActive 
                          ? "bg-emerald-50 border-emerald-100 text-emerald-700 font-medium" 
                          : "bg-slate-50 border-slate-200/50 text-slate-400 opacity-60"
                      }`}
                    >
                      <div>
                        <span className="block font-mono text-[8px] uppercase font-bold text-slate-400">TRACK 0{i+1}</span>
                        <span className="block font-sans text-xs font-bold">{n}</span>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
