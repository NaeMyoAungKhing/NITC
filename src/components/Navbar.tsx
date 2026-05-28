/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Bell, Layers, Sparkles, X, Mail, ShieldCheck } from "lucide-react";
import { PortalMode } from "../types";
import NITCLogo from "./NITCLogo";

interface NavbarProps {
  currentMode: PortalMode;
  onSetMode: (mode: PortalMode) => void;
  onOpenContact: () => void;
}

export default function Navbar({ currentMode, onSetMode, onOpenContact }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsRead, setNotificationsRead] = useState(false);

  const mockLogs = [
    { id: 1, text: "New materials added to Mobile App Development (Lab B).", type: "course" },
    { id: 2, text: "Tuition payment due 15 Oct.", type: "finance" },
    { id: 3, text: "Mr. Xie approved your AI for Business Applications submission.", type: "grade" }
  ];

  if (currentMode === "onboarding") return null;

  return (
    <header className="relative z-40 bg-white border-b border-slate-100 py-3.5 select-none">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Left Side: NITC Brand Launcher */}
        <div 
          onClick={() => onSetMode("onboarding")}
          className="flex items-center gap-2 cursor-pointer group hover:opacity-85 transition-opacity"
        >
          <NITCLogo variant="light-full" />
          <span className="px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-600 font-mono text-[8px] font-bold tracking-wider">BETA</span>
        </div>

        {/* Right Side: Faculty, Notifications & Reset */}
        <div className="flex items-center gap-3">
          
          {/* Quick Contact shortcut */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-[#001456] border border-slate-200 rounded-lg px-3 py-1.5 font-mono text-[9px] font-bold uppercase transition-all tracking-wider cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Teacher</span>
          </button>

          {/* Core Notification System */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setNotificationsRead(true);
              }}
              className="p-2 rounded-lg hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-[#001456] transition-colors cursor-pointer relative"
            >
              <Bell className="w-4.5 h-4.5" />
              {/* Active unread dot indicator */}
              {!notificationsRead && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 ai-glow border border-white" />
              )}
            </button>

            {/* Notification logs dropdown body */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-100 rounded-xl shadow-2xl p-4 z-50">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <span className="font-mono text-[10px] font-extrabold text-[#001456] tracking-wider uppercase">
                    NOTIFICATIONS
                  </span>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-[10px] font-mono text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>

                <div className="space-y-3">
                  {mockLogs.map((log) => (
                    <div key={log.id} className="text-xs bg-slate-50 border border-slate-100 p-2 rounded-lg hover:bg-slate-100/50 transition-colors">
                      <p className="font-sans text-slate-600 leading-snug">
                        {log.text}
                      </p>
                      <span className="block font-mono text-[8.5px] uppercase font-bold text-cyan-600 mt-1">
                        {log.type}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setNotificationsRead(true);
                    setShowNotifications(false);
                  }}
                  className="w-full mt-4 bg-slate-50 hover:bg-[#001456]/5 text-slate-600 hover:text-[#001456] text-center font-mono text-[9px] py-1.5 rounded-lg border border-slate-200 tracking-wider font-bold transition-all"
                >
                  MARK ALL AS READ
                </button>
              </div>
            )}
          </div>

          {/* Reset / Onboard route button */}
          <button
            onClick={() => onSetMode("onboarding")}
            className="p-2 rounded-lg hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-[#001456] font-mono text-[10px] font-extrabold cursor-pointer"
            title="Log Out to Main Onboarding Hub"
          >
            HUB
          </button>

        </div>

      </div>
    </header>
  );
}
