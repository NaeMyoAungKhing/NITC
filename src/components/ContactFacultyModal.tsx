/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ShieldAlert, CheckCircle2, Loader2, Award } from "lucide-react";
import { CONTACT_PRESETS } from "../mockData";
import NITCLogo from "./NITCLogo";

interface ContactFacultyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INSTRUCTORS = [
  { id: "xie", name: "Xie Zihao", role: "School Principal", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { id: "nae", name: "Nae Myo", role: "Vice School Principal", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { id: "wu", name: "Wu Yue", role: "Finance Department", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
  { id: "zeng", name: "Zeng Xiaohuizi", role: "HR Department", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" },
  { id: "nang", name: "Nang Yay Seng Naw", role: "Student Affairs", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
  { id: "ramraj", name: "Ramraj Toopjam", role: "International Collaboration", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { id: "purinat", name: "Purinat Rattanapun", role: "Marketing Team", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" },
  { id: "jia", name: "Jia Ping", role: "Academic Department", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" }
];

export default function ContactFacultyModal({ isOpen, onClose }: ContactFacultyModalProps) {
  const [selectedInstructorId, setSelectedInstructorId] = useState("xie");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorText("Telemetry field empty. Please draft a message for the NITC faculty.");
      return;
    }
    setErrorText("");
    setLoading(true);

    // Simulate sending progress
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setMessage("");
    }, 1500);
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#0b1c30]/50 backdrop-blur-sm pointer-events-auto"
      />
      
      {/* Container Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 overflow-hidden"
      >
        {/* Soft cyan gradient side accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form 
              key="contact-form"
              onSubmit={handleSend}
              className="space-y-4"
            >
              <div>
                <div className="flex items-center gap-1.5 text-cyan-600 font-mono text-[9px] font-black tracking-widest uppercase mb-1">
                  <div className="h-4.5 w-4.5 shrink-0">
                    <NITCLogo variant="light-icon" />
                  </div>
                  <span>FACULTY RELATIONS MATRIX // SECURE</span>
                </div>
                <h3 className="font-hanken text-2xl font-extrabold text-[#001456] tracking-tight">
                  Brief Faculty Member
                </h3>
                <p className="font-sans text-xs text-slate-400">
                  Transmit secure briefings or general course performance queries to certified NITC instructors.
                </p>
              </div>

              {/* Selector 1: Tutors list */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Select Certified Instructor
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[160px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-slate-200">
                  {INSTRUCTORS.map((inst) => {
                    const isSelected = inst.id === selectedInstructorId;
                    return (
                      <div 
                        key={inst.id}
                        onClick={() => setSelectedInstructorId(inst.id)}
                        className={`p-2 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          isSelected 
                            ? "bg-[#001456]/5 border-[#001456] shadow-[0_4px_12px_rgba(26,43,109,0.04)]" 
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <img 
                          src={inst.avatar} 
                          alt={inst.name} 
                          className="w-7 h-7 rounded-full border border-slate-100 object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left truncate w-full">
                          <span className="block font-sans text-[10px] font-extrabold text-[#001456] truncate">
                            {inst.name}
                          </span>
                          <span className="block text-[7.5px] font-mono text-slate-400 truncate uppercase mt-0.5">
                            {inst.role}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selector 2: Topic Choice */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Query Classification Area
                </label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-[#001456] font-sans font-medium outline-none focus:border-[#001456]"
                >
                  {CONTACT_PRESETS.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Input Area: Message */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Briefing Stream Transmission Text
                </label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Draft academic query or feedback loop details..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:border-[#001456] font-sans leading-relaxed text-[#001456]"
                />
              </div>

              {errorText && (
                <div className="flex items-center gap-2 text-xs text-rose-500 font-mono">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{errorText}</span>
                </div>
              )}

              {/* Action row */}
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[10px] tracking-widest font-bold rounded-lg transition-colors cursor-pointer"
                >
                  ABORT
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-[#001456] hover:bg-[#12287c] text-white font-mono text-[10px] tracking-widest font-black py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 disabled:bg-slate-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>SEND STREAM</span>
                    </>
                  )}
                </button>
              </div>

            </motion.form>
          ) : (
            <motion.div 
              key="contact-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-hanken text-2xl font-black text-[#001456]">
                  Briefing Stream Established
                </h4>
                <p className="font-sans text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Your academic inquiry has been decrypted and queued in the recipient certified instructor's terminal inbox.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left max-w-sm mx-auto text-[11px] font-mono space-y-1">
                <div className="flex justify-between"><span className="text-slate-400">Stream Ref ID:</span><span className="font-bold text-[#001456]">NITC-STR-#{Math.floor(Math.random() * 90000 + 10000)}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Stream Status:</span><span className="text-emerald-600 font-bold">QUEUED FOR REVIEW</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Response Speed:</span><span className="text-slate-500 font-bold">~ 12 HOURS</span></div>
              </div>

              <button 
                onClick={handleReset}
                className="mx-auto w-40 bg-[#001456] hover:bg-[#12287c] text-white font-mono text-[10px] tracking-widest font-black py-3 rounded-lg text-center cursor-pointer transition-all uppercase block"
              >
                RETURN HOME
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
