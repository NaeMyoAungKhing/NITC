/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  LayoutGrid, Rocket, TrendingUp, Users, Menu, X, Landmark,
  Map, PhoneCall, BookOpen, ExternalLink, HelpCircle, Info, Newspaper, Megaphone
} from "lucide-react";
import { PortalMode } from "../types";
import { InfoView } from "./InfoModal";

interface FooterNavProps {
  currentMode: PortalMode;
  onSetMode: (mode: PortalMode) => void;
  onOpenInfo: (v: InfoView) => void;
}

export default function FooterNav({ currentMode, onSetMode, onOpenInfo }: FooterNavProps) {
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const openInfo = (v: InfoView) => { onOpenInfo(v); setShowMenuPopup(false); };

  if (currentMode === "onboarding") return null;

  const tabs: { mode: PortalMode; label: string; icon: React.ReactNode }[] = [
    { 
      mode: "dashboard", 
      label: "DASHBOARD", 
      icon: <LayoutGrid className="w-5 h-5 shrink-0" /> 
    },
    {
      mode: "missions",
      label: "COURSES",
      icon: <Rocket className="w-5 h-5 shrink-0" />
    },
    { 
      mode: "progress", 
      label: "PROGRESS", 
      icon: <TrendingUp className="w-5 h-5 shrink-0" /> 
    },
    { 
      mode: "parent", 
      label: "PARENT", 
      icon: <Users className="w-5 h-5 shrink-0" /> 
    }
  ];

  return (
    <>
      {/* Sticky Bottom Dock Container */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 py-3 select-none">
        <div className="w-full max-w-md mx-auto px-4 flex items-center justify-between">
          
          {/* Main Navigation tabs */}
          {tabs.map((tab) => {
            const isActive = currentMode === tab.mode;
            
            return (
              <button
                key={tab.mode}
                onClick={() => {
                  onSetMode(tab.mode);
                  setShowMenuPopup(false);
                }}
                className={`flex flex-col items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl transition-all cursor-pointer relative shrink-0 ${
                  isActive 
                    ? "text-white bg-[#001456] shadow-md shadow-[#001456]/10" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.icon}
                <span className="font-mono text-[9px] font-black tracking-widest leading-none">
                  {tab.label}
                </span>

                {/* Subtle active underline or state bubble */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </button>
            );
          })}

          {/* Active Hamburger Menu Tab */}
          <button
            onClick={() => setShowMenuPopup(!showMenuPopup)}
            className={`flex flex-col items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl transition-all cursor-pointer shrink-0 ${
              showMenuPopup 
                ? "text-white bg-cyan-600 shadow-md shadow-cyan-600/15" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <Menu className="w-5 h-5 shrink-0" />
            <span className="font-mono text-[9px] font-black tracking-widest leading-none">
              MENU
            </span>
          </button>

        </div>
      </nav>

      {/* Campus resources popup overlay */}
      {showMenuPopup && (
        <div className="fixed inset-x-0 bottom-24 z-50 p-4 w-full max-w-md mx-auto">
          {/* Outer Glass layer */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500" />
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-4">
              <span className="font-mono text-[9px] text-[#001456] font-extrabold tracking-widest uppercase">
                NITC UNIVERSITY QUICK SYSTEM LINKS
              </span>
              <button 
                onClick={() => setShowMenuPopup(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* App info shortcuts: Manual / About / News / Announcements */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button onClick={() => openInfo("manual")} className="flex items-center gap-2 p-2.5 bg-[#001456]/5 border border-[#001456]/10 hover:border-[#001456]/40 rounded-xl text-left transition-all cursor-pointer">
                <BookOpen className="w-4 h-4 text-[#001456] shrink-0" />
                <span className="font-mono text-[9px] font-bold text-[#001456] uppercase">User Manual</span>
              </button>
              <button onClick={() => openInfo("about")} className="flex items-center gap-2 p-2.5 bg-[#001456]/5 border border-[#001456]/10 hover:border-[#001456]/40 rounded-xl text-left transition-all cursor-pointer">
                <Info className="w-4 h-4 text-[#001456] shrink-0" />
                <span className="font-mono text-[9px] font-bold text-[#001456] uppercase">About NITC</span>
              </button>
              <button onClick={() => openInfo("news")} className="flex items-center gap-2 p-2.5 bg-[#001456]/5 border border-[#001456]/10 hover:border-[#001456]/40 rounded-xl text-left transition-all cursor-pointer">
                <Newspaper className="w-4 h-4 text-[#001456] shrink-0" />
                <span className="font-mono text-[9px] font-bold text-[#001456] uppercase">News</span>
              </button>
              <button onClick={() => openInfo("announcements")} className="flex items-center gap-2 p-2.5 bg-[#001456]/5 border border-[#001456]/10 hover:border-[#001456]/40 rounded-xl text-left transition-all cursor-pointer">
                <Megaphone className="w-4 h-4 text-[#001456] shrink-0" />
                <span className="font-mono text-[9px] font-bold text-[#001456] uppercase">Announcements</span>
              </button>
            </div>

            {/* Quick routes grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card option 1 */}
              <a 
                href="#registrar"
                onClick={(e) => { e.preventDefault(); alert("NITC Academic Registrar office connection established. Phone: +1 (800) NITC-EDU"); }}
                className="p-3 bg-slate-50 border border-slate-100 hover:border-[#001456]/40 rounded-xl block text-left transition-all"
              >
                <Landmark className="w-4 h-4 text-[#001456] mb-1.5" />
                <span className="block font-sans text-xs font-bold text-[#001456]">NITC Registrar Office</span>
                <span className="block font-mono text-[8.5px] text-slate-400 mt-0.5 uppercase">ADMIN STATIONS</span>
              </a>

              {/* Card option 2 */}
              <a 
                href="#library"
                onClick={(e) => { e.preventDefault(); alert("Accessing secure digital technical libraries... VPN credentials verified."); }}
                className="p-3 bg-slate-50 border border-slate-100 hover:border-cyan-500/40 rounded-xl block text-left transition-all"
              >
                <BookOpen className="w-4 h-4 text-cyan-600 mb-1.5" />
                <span className="block font-sans text-xs font-bold text-[#001456]">Campus Digital Library</span>
                <span className="block font-mono text-[8.5px] text-slate-400 mt-0.5 uppercase">RESEARCH HUB</span>
              </a>

              {/* Card option 3 */}
              <a 
                href="#map"
                onClick={(e) => { e.preventDefault(); alert("Opening campus interactive map overlay... Lab 4B is located on Floor 4 of Science Hall."); }}
                className="p-3 bg-slate-50 border border-slate-100 hover:border-emerald-500/40 rounded-xl block text-left transition-all"
              >
                <Map className="w-4 h-4 text-emerald-600 mb-1.5" />
                <span className="block font-sans text-xs font-bold text-[#001456]">Lab 4B Floorplan Map</span>
                <span className="block font-mono text-[8.5px] text-slate-400 mt-0.5 uppercase">GEOLOCATION</span>
              </a>

              {/* Card option 4 */}
              <a 
                href="#support"
                onClick={(e) => { e.preventDefault(); alert("NITC IT support: tech-support@nitc.edu"); }}
                className="p-3 bg-slate-50 border border-slate-100 hover:border-indigo-500/50 rounded-xl block text-left transition-all"
              >
                <HelpCircle className="w-4 h-4 text-indigo-500 mb-1.5" />
                <span className="block font-sans text-xs font-bold text-[#001456]">Help &amp; IT Support</span>
                <span className="block font-mono text-[8.5px] text-slate-400 mt-0.5 uppercase">TECH HELPDESK</span>
              </a>
            </div>

            {/* University Portal redirect label */}
            <div className="border-t border-slate-100 mt-4 pt-3 text-center">
              <span className="text-[8.5px] text-slate-400 font-mono flex items-center justify-center gap-1">
                CONNECTED TO SECURE MAIN ENTRANCE // NEW TAB OPEN OK
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
