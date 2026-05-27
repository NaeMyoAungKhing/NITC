/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, SwitchCamera, ShieldCheck, DollarSign, Calendar, Eye, Send, CheckCircle, 
  MapPin, Clock, X, Info
} from "lucide-react";
import { STUDENTS, ANNOUNCEMENTS, CONTACT_PRESETS } from "../mockData";
import { Student } from "../types";
import NITCLogo from "./NITCLogo";
import { GeometricTileBackground } from "./NITCBackground";

interface ParentScreenProps {
  onOpenContact: () => void;
}

export default function ParentScreen({ onOpenContact }: ParentScreenProps) {
  const [activeStudentId, setActiveStudentId] = useState<string>("archer");
  const [showStatementDrawer, setShowStatementDrawer] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [submittingContact, setSubmittingContact] = useState(false);
  const [quickMessage, setQuickMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("general");

  const activeStudent = STUDENTS.find(s => s.id === activeStudentId) || STUDENTS[0];
  const alternateStudent = STUDENTS.find(s => s.id !== activeStudentId) || STUDENTS[1];

  const handleStudentSwitch = () => {
    setActiveStudentId(alternateStudent.id);
  };

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim()) return;
    setSubmittingContact(true);
    setTimeout(() => {
      setSubmittingContact(false);
      setContactFormSubmitted(true);
      setQuickMessage("");
    }, 1200);
  };

  return (
    <div id="parent-dashboard-screen" className="pb-24 space-y-8 select-none">
      
      {/* Visual Header / Select Student Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 p-1 bg-slate-50 border border-slate-100 rounded-xl">
            <NITCLogo variant="light-icon" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-cyan-600 font-bold tracking-widest block uppercase leading-none mb-1">
PARENT / GUARDIAN PORTAL
            </span>
            <h2 className="font-hanken text-3xl font-extrabold text-[#001456] tracking-tight leading-none">
              Guardian Dashboard
            </h2>
          </div>
        </div>

        {/* Custom Controller Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_2px_12px_rgba(26,43,109,0.02)]">
          {/* Active / Switcher profiles */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Active Student display */}
            <div className="bg-slate-50 border-2 border-[#001456] rounded-xl p-2.5 flex items-center gap-3 w-48 transition-all">
              <img 
                src={activeStudent.avatar} 
                alt={activeStudent.name} 
                className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block font-mono text-[9px] text-cyan-600 font-bold uppercase tracking-wider">ACTIVE</span>
                <span className="block font-sans text-sm font-extrabold text-[#001456]">{activeStudent.name}</span>
              </div>
            </div>

            {/* Switch target overlay */}
            <button 
              onClick={handleStudentSwitch}
              className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-[#001456]/50 rounded-xl p-2.5 transition-all text-left w-48 cursor-pointer"
            >
              <img 
                src={alternateStudent.avatar} 
                alt={alternateStudent.name} 
                className="w-10 h-10 rounded-lg object-cover border border-slate-200 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <span className="block font-mono text-[9px] text-slate-400 font-semibold uppercase">SWITCH TO</span>
                <span className="block font-sans text-sm font-bold text-slate-700 group-hover:text-[#001456] transition-colors">{alternateStudent.name}</span>
              </div>
            </button>
          </div>

          {/* Contact Faculty primary route */}
          <button
            onClick={onOpenContact}
            className="bg-[#001456] hover:bg-[#12287c] text-white rounded-xl py-3.5 px-5 font-mono text-xs tracking-wider font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#001456]/10 active:scale-95 shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT FACULTY</span>
          </button>
        </div>
      </div>

      {/* Grid: Academic Health Metrics vs Financial Statements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Column 1: Academic Health Module */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_24px_rgba(26,43,109,0.02)]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
            <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
              ACADEMIC HEALTH
            </span>
            <span className="font-mono text-[9px] text-cyan-600 tracking-wider font-semibold">
              MODULE // ACADEMICS
            </span>
          </div>

          {/* Double Card Visual Blocks (GPA and Attendance) */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Box 1: GPA */}
            <div className="border border-slate-200 hover:border-[#001456]/30 rounded-xl p-5 text-center relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#001456]" />
              <span className="block font-hanken text-4xl font-black text-[#001456] tracking-tight leading-none mb-1">
                {activeStudent.gpa.toFixed(2)}
              </span>
              <span className="inline-block bg-[#001456]/5 text-[#001456] border border-[#001456]/10 font-mono text-[9px] font-extrabold py-0.5 px-2 rounded-md mb-2">
                GPA
              </span>
              <span className="block font-mono text-[9px] text-[#001456]/60 tracking-wider font-bold">
                {activeStudent.classRank}
              </span>
            </div>

            {/* Box 2: Attendance */}
            <div className="border border-slate-200 hover:border-cyan-500/30 rounded-xl p-5 text-center relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500" />
              <span className="block font-hanken text-4xl font-black text-[#001456] tracking-tight leading-none mb-1">
                {activeStudent.attendance}%
              </span>
              <span className="inline-block bg-cyan-500/5 text-cyan-600 border border-cyan-500/10 font-mono text-[9px] font-extrabold py-0.5 px-2 rounded-md mb-2">
                ATTENDANCE
              </span>
              <span className="block font-mono text-[9px] text-cyan-600/60 tracking-wider font-bold">
                {activeStudent.attendanceStatus}
              </span>
            </div>
          </div>

          {/* Mini Linear Bars */}
          <div className="space-y-4 pt-2">
            {activeStudent.academicProgress.map((prog, idx) => {
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500 font-bold">{prog.name}</span>
                    <span className="text-cyan-600 font-extrabold">+{prog.value}% INDEX CHANGE</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-900 h-full rounded-full"
                      style={{ width: `${(prog.value / 25) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Column 2: Financial Status Module */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_24px_rgba(26,43,109,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
              <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                FINANCIAL STATUS
              </span>
              <span className="font-mono text-[9px] text-cyan-600 tracking-wider font-semibold">
STATEMENT // TERM 1
              </span>
            </div>

            {/* Current Balance Block */}
            <div className="mb-6">
              <span className="block text-[10px] font-mono text-slate-400 font-bold tracking-wider">CURRENT ENROLLMENT BALANCE</span>
              <span className="block font-hanken text-4xl font-black text-[#001456] tracking-tight mt-1">
                ${activeStudent.financial.currentBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Payment breakdowns */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl mb-6">
              <div>
                <span className="block text-[8px] font-mono text-slate-400 font-bold">NEXT PAYMENT</span>
                <span className="block font-mono text-xs font-black text-[#001456] mt-0.5">{activeStudent.financial.nextPayment}</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-[8px] font-mono text-slate-400 font-bold">AMOUNT DUE</span>
                <span className="block font-sans text-xs font-extrabold text-[#001456] mt-0.5">
                  ${activeStudent.financial.amountDue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowStatementDrawer(true)}
            className="w-full bg-white border border-[#001456] hover:bg-slate-50 text-[#001456] font-mono text-[10px] tracking-widest font-extrabold py-3.5 rounded-xl transition-all cursor-pointer text-center uppercase"
          >
            VIEW STATEMENT DETAILS
          </button>
        </div>

      </div>

      {/* Announcements Carousel / List */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
          <span className="font-mono text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
            NITC ANNOUNCEMENTS
          </span>
          <span className="font-mono text-[9px] text-slate-400 font-bold">
            ACADEMIC STREAM ONLY
          </span>
        </div>

        {/* Announcement rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ANNOUNCEMENTS.map((ann) => {
            const isEvent = ann.category === "EVENT";
            
            return (
              <div 
                key={ann.id}
                className="bg-white border border-slate-100 rounded-2xl p-4 flex gap-4 hover:shadow-md transition-shadow"
              >
                {/* Polaroid style image on left */}
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 relative">
                  <img 
                    src={ann.imageUrl} 
                    alt={ann.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-1 left-1 font-mono text-[8px] font-black tracking-wider px-1.5 py-0.5 rounded text-white ${
                    isEvent ? "bg-cyan-500" : "bg-[#001456]"
                  }`}>
                    {ann.category}
                  </div>
                </div>

                {/* Announcement body details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-hanken text-base font-extrabold text-[#001456] leading-snug">
                      {ann.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1">
                      {ann.description}
                    </p>
                  </div>
                  <span className="block font-mono text-[9px] text-slate-300">
                    {ann.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View Statement Dynamic simulated sheet drawer */}
      <AnimatePresence>
        {showStatementDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStatementDrawer(false)}
              className="absolute inset-0 bg-[#0b1c30]/50 backdrop-blur-sm"
            />
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-md bg-white border border-slate-100 rounded-2xl shadow-2xl p-6"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowStatementDrawer(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cyan-600 font-mono text-[10px] font-black tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>NITC FINANCE OFFICE // VERIFIED</span>
              </div>

              <h3 className="font-hanken text-2xl font-extrabold text-[#001456] tracking-tight mb-4">
                Statement Ledger - {activeStudent.name}
              </h3>

              {/* Transactions Ledger table */}
              <div className="space-y-3.5 max-h-[300px] overflow-y-auto mb-6 pr-1">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 font-bold uppercase">DESCRIPTION</span>
                  <span className="text-slate-400 font-bold uppercase">AMOUNT</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="block font-semibold text-slate-800">Tuition Fee</span>
                    <span className="block text-[10px] text-slate-400">Term 1</span>
                  </div>
                  <span className="font-mono text-slate-800 font-bold">+$1,800.00</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="block font-semibold text-slate-800">Lab &amp; Equipment Fee</span>
                    <span className="block text-[10px] text-slate-400">Maker space &amp; lab access</span>
                  </div>
                  <span className="font-mono text-slate-800 font-bold">+$400.00</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="block font-semibold text-slate-800">Technology Fee</span>
                    <span className="block text-[10px] text-slate-400">Campus network &amp; devices</span>
                  </div>
                  <span className="font-mono text-slate-800 font-bold">+$250.00</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="block font-semibold text-emerald-600">Scholarship Grant</span>
                    <span className="block text-[10px] text-slate-400">Academic merit award</span>
                  </div>
                  <span className="font-mono text-emerald-600 font-bold">-$450.00</span>
                </div>

                {activeStudentId === "archer" && (
                  <div className="flex justify-between items-center text-xs border-t border-dashed border-slate-100 pt-3">
                    <div>
                      <span className="block font-semibold text-slate-700">Pre-Authorization Payment Made</span>
                      <span className="block text-[10px] text-slate-400">Oct 01 Auto-Debit Receipt #7741</span>
                    </div>
                    <span className="font-mono text-emerald-600 font-bold">-$450.00</span>
                  </div>
                )}
              </div>

              {/* Summary blocks inside modal */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Gross Ledger Balance:</span>
                  <span className="text-slate-600 font-medium">${(activeStudent.financial.currentBalance + activeStudent.financial.amountDue).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Discounts Applied:</span>
                  <span className="text-emerald-500 font-medium">-$450.00</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#001456] pt-1 border-t border-slate-200">
                  <span className="font-hanken font-bold">Net Balance:</span>
                  <span className="font-mono">${activeStudent.financial.currentBalance.toLocaleString()}</span>
                </div>
              </div>

              {/* Action */}
              <div className="flex gap-3">
                <button 
                  onClick={() => alert("Statement sent successfully to your verified guardian email address.")}
                  className="flex-1 bg-[#001456] hover:bg-[#12287c] text-white font-mono text-[10px] tracking-widest font-black py-3 rounded-lg text-center cursor-pointer transition-colors uppercase"
                >
                  EXPORT TO E-MAIL
                </button>
                <button 
                  onClick={() => setShowStatementDrawer(false)}
                  className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[10px] tracking-widest font-bold py-3 rounded-lg text-center cursor-pointer transition-colors"
                >
                  CLOSE
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
