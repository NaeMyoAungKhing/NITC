/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, ShieldAlert, BookOpen, Layers, Zap } from "lucide-react";
import { PortalMode } from "../types";

import NITCLogo from "./NITCLogo";
import { CyberGridBackground } from "./NITCBackground";

interface LandingScreenProps {
  onSelectMode: (mode: PortalMode) => void;
  backgroundImageUrl: string;
}

export default function LandingScreen({ onSelectMode, backgroundImageUrl }: LandingScreenProps) {
  // Let's use the generated image fallback just in case or feed the file path
  const bgImg = backgroundImageUrl || "https://picsum.photos/seed/nitccampus/1080/1920";

  return (
    <div id="landing-screen-container" className="relative min-h-[92vh] flex items-center justify-center p-4 overflow-hidden select-none">
      {/* Background with blur and darken filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700" 
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#051025]/95 via-[#000d36]/85 to-[#051025]/98" />

      {/* Official Blue Starburst Cyber Texture Overlay */}
      <CyberGridBackground theme="dark" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-[#09152a]/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Soft blue tech sphere behind logo */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top Header Row with NITC emblem */}
        <div className="flex flex-col items-center justify-center mb-8 border-b border-white/5 pb-5">
          <NITCLogo variant="full" />
          <div className="mt-3 px-2 py-0.5 bg-cyan-400/10 border border-cyan-400/20 rounded font-mono text-[8px] text-cyan-400 tracking-wider">
            V4.4.2_SECURE // ONLINE
          </div>
        </div>

        {/* System Subheader */}
        <div className="flex items-center gap-1.5 mb-2 font-mono text-xs font-semibold text-cyan-400 tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SYSTEM // ONBOARDING</span>
        </div>

        {/* Title & Description */}
        <h1 className="font-hanken text-2xl font-extrabold text-white leading-tight tracking-tight mb-3">
          Welcome to the Future of Innovation.
        </h1>
        <p className="font-sans text-xs text-slate-300 leading-relaxed mb-8">
          Your journey toward <strong className="text-cyan-400 font-semibold">4-4-2 mastery</strong> begins here. 
          Access your specialized learning workspace or monitor academic metrics in real-time.
        </p>

        {/* Interactive Portals */}
        <div className="space-y-4">
          {/* Card 1: Student Login */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectMode("dashboard")}
            className="w-full text-left bg-gradient-to-r from-[#001456] to-[#12287c] hover:from-[#12287c] hover:to-[#1a389f] text-white rounded-xl p-5 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-between group transition-all duration-300 cursor-pointer ai-glow"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400/20 transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-cyan-400/80 tracking-widest font-bold">ACCESS PORTAL</span>
                <span className="block font-hanken text-lg font-bold tracking-tight">STUDENT LOGIN</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 text-white transition-all">
              →
            </div>
          </motion.button>

          {/* Card 2: Guardian Access */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectMode("parent")}
            className="w-full text-left bg-transparent hover:bg-white/5 text-white bg-white/2 rounded-xl p-5 border border-white/20 flex items-center justify-between group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center border border-orange-400/20 text-orange-400 group-hover:bg-orange-400/20 transition-all">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-slate-400 tracking-widest font-bold">MONITORING</span>
                <span className="block font-hanken text-lg font-bold text-white tracking-tight">GUARDIAN ACCESS</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 text-white transition-all">
              →
            </div>
          </motion.button>
        </div>

        {/* Dynamic Metric Display Footer inside the glass box */}
        <div className="border-t border-white/10 mt-8 pt-5 grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="flex flex-col items-center">
            <BookOpen className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="font-mono text-white/40">THEORY</span>
            <span className="font-mono text-white font-medium">(4 MODULES)</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-2">
            <Layers className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="font-mono text-white/40">COMPETENCY</span>
            <span className="font-mono text-white font-medium">(4 LEVELS)</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="font-mono text-white/40">PRACTICAL</span>
            <span className="font-mono text-white font-medium">(2 TRACKS)</span>
          </div>
        </div>
      </motion.div>

      {/* Extreme Bottom Text Decal */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500 text-center tracking-[0.2em] w-full px-4">
        SECURE AUTHENTICATION REQUIRED // NITC-LMS-V4.4.2
      </div>
    </div>
  );
}
