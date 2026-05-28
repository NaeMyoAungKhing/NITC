/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, ShieldAlert, BookOpen, Layers, Zap, Smartphone, Monitor, Info, Newspaper, Megaphone } from "lucide-react";
import { PortalMode } from "../types";
import { InfoView } from "./InfoModal";

import NITCLogo from "./NITCLogo";
import { CyberGridBackground } from "./NITCBackground";
import campusVideo from "../assets/campus-video.mp4";

interface LandingScreenProps {
  onSelectMode: (mode: PortalMode) => void;
  backgroundImageUrl: string;
  onOpenInfo: (v: InfoView) => void;
}

export default function LandingScreen({ onSelectMode, backgroundImageUrl, onOpenInfo }: LandingScreenProps) {
  const bgImg = backgroundImageUrl || "https://picsum.photos/seed/nitccampus/1080/1920";
  const [device, setDevice] = useState<"phone" | "desktop">("phone");
  const isPhone = device === "phone";

  return (
    <div id="landing-screen-container" className="relative min-h-[92vh] flex items-center justify-center p-4 overflow-hidden select-none">
      {/* NITC campus background video (poster falls back to the campus image) */}
      <video autoPlay muted loop playsInline poster={bgImg} className="absolute inset-0 w-full h-full object-cover">
        <source src={campusVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#051025]/88 via-[#000d36]/78 to-[#051025]/96" />
      <CyberGridBackground theme="dark" />

      <div className="relative z-10 flex flex-col items-center gap-5 w-full py-10">
        {/* Device view switcher */}
        <div className="flex items-center gap-1 bg-[#09152a]/70 border border-white/10 rounded-full p-1 backdrop-blur-md">
          {([["phone", "Mobile", Smartphone], ["desktop", "Tablet / Desktop", Monitor]] as const).map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => setDevice(id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                device === id ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30" : "text-slate-400 hover:text-slate-200 border border-transparent"
              }`}
            >
              <Icon className="w-3.5 h-3.5" /><span>{label}</span>
            </button>
          ))}
        </div>

        {/* Device frame wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`w-full bg-[#080c18] shadow-2xl overflow-hidden transition-all duration-500 ${
            isPhone ? "max-w-[380px] rounded-[2.4rem] border-[10px] border-[#080c18]" : "max-w-xl rounded-2xl border border-[#1c2742]"
          }`}
        >
          {/* Device chrome */}
          {isPhone ? (
            <div className="flex justify-center pt-2.5 pb-1"><div className="h-1.5 w-24 rounded-full bg-white/15" /></div>
          ) : (
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-[#0a1020]">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 font-mono text-[9px] text-slate-500">naemyoaungkhing.github.io/NITC</span>
            </div>
          )}

          {/* Glass card content */}
          <div className="relative bg-[#09152a]/75 backdrop-blur-xl p-6 overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center justify-center mb-7 border-b border-white/5 pb-5">
              <NITCLogo variant="full" />
              <div className="mt-3 flex items-center gap-1.5">
                <div className="px-2 py-0.5 bg-cyan-400/10 border border-cyan-400/20 rounded font-mono text-[8px] text-cyan-400 tracking-wider">V4.4.2_SECURE // ONLINE</div>
                <div className="px-2 py-0.5 bg-amber-400/15 border border-amber-400/40 rounded font-mono text-[8px] text-amber-300 tracking-wider font-bold">BETA</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-2 font-mono text-xs font-semibold text-cyan-400 tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /><span>SYSTEM // ONBOARDING</span>
            </div>
            <h1 className="font-hanken text-2xl font-extrabold text-white leading-tight tracking-tight mb-3">Welcome to the Future of Innovation.</h1>
            <p className="font-sans text-xs text-slate-300 leading-relaxed mb-7">
              Your journey toward <strong className="text-cyan-400 font-semibold">4-4-2 mastery</strong> begins here.
              Access your specialized learning workspace or monitor academic metrics in real-time.
            </p>

            <div className={`grid gap-4 ${isPhone ? "grid-cols-1" : "sm:grid-cols-2"}`}>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => onSelectMode("dashboard")}
                className="w-full text-left bg-gradient-to-r from-[#001456] to-[#12287c] hover:from-[#12287c] hover:to-[#1a389f] text-white rounded-xl p-5 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-between group transition-all duration-300 cursor-pointer ai-glow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400/20 transition-all"><GraduationCap className="w-5 h-5" /></div>
                  <div><span className="block font-mono text-[10px] text-cyan-400/80 tracking-widest font-bold">ACCESS PORTAL</span><span className="block font-hanken text-lg font-bold tracking-tight">STUDENT LOGIN</span></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 text-white transition-all">→</div>
              </motion.button>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => onSelectMode("parent")}
                className="w-full text-left bg-white/5 hover:bg-white/10 text-white rounded-xl p-5 border border-white/20 flex items-center justify-between group transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center border border-orange-400/20 text-orange-400 group-hover:bg-orange-400/20 transition-all"><ShieldAlert className="w-5 h-5" /></div>
                  <div><span className="block font-mono text-[10px] text-slate-400 tracking-widest font-bold">MONITORING</span><span className="block font-hanken text-lg font-bold text-white tracking-tight">GUARDIAN ACCESS</span></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 text-white transition-all">→</div>
              </motion.button>
            </div>

            <div className="border-t border-white/10 mt-7 pt-5 grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="flex flex-col items-center"><BookOpen className="w-4 h-4 text-cyan-400 mb-1" /><span className="font-mono text-white/40">THEORY</span><span className="font-mono text-white font-medium">(4 MODULES)</span></div>
              <div className="flex flex-col items-center border-x border-white/10 px-2"><Layers className="w-4 h-4 text-cyan-400 mb-1" /><span className="font-mono text-white/40">COMPETENCY</span><span className="font-mono text-white font-medium">(4 LEVELS)</span></div>
              <div className="flex flex-col items-center"><Zap className="w-4 h-4 text-cyan-400 mb-1" /><span className="font-mono text-white/40">PRACTICAL</span><span className="font-mono text-white font-medium">(2 TRACKS)</span></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom buttons: About / Manual / News */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button onClick={() => onOpenInfo("about")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 rounded-lg px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"><Info className="w-3.5 h-3.5" />About NITC</button>
          <button onClick={() => onOpenInfo("manual")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 rounded-lg px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"><BookOpen className="w-3.5 h-3.5" />How to use</button>
          <button onClick={() => onOpenInfo("news")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 rounded-lg px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"><Newspaper className="w-3.5 h-3.5" />Latest News</button>
          <button onClick={() => onOpenInfo("announcements")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 rounded-lg px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"><Megaphone className="w-3.5 h-3.5" />Announcements</button>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500 text-center tracking-[0.2em] w-full px-4 pointer-events-none">
        SECURE AUTHENTICATION REQUIRED // NITC-LMS-V4.4.2
      </div>
    </div>
  );
}
