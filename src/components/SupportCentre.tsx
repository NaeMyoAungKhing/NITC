/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  X, GraduationCap, Settings, Brain, Briefcase, Globe2, ShieldCheck, Mail, ArrowRight
} from "lucide-react";
import NITCLogo from "./NITCLogo";

export type SupportCategory =
  | "academic"
  | "technology"
  | "social_emotional"
  | "family_community"
  | "future_readiness";

export type SupportAction =
  | { type: "contact" }
  | { type: "go_courses"; courseId?: string }
  | { type: "go_parent" }
  | { type: "go_dashboard" }
  | { type: "open_info"; view: "manual" | "about" | "news" | "announcements" | "brand" | "curriculum" }
  | { type: "demo"; message: string };

interface SupportCentreProps {
  open: SupportCategory | null;
  onClose: () => void;
  onSetOpen: (c: SupportCategory) => void;
  onAction: (action: SupportAction) => void;
}

interface ServiceItem {
  title: string;
  text: string;
  action: SupportAction;
  cta: string;
}

interface CategoryContent {
  id: SupportCategory;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  accent: string;
  bg: string;
  tagline: string;
  intro: string;
  services: ServiceItem[];
  contacts: { icon: React.ReactNode; label: string; value: string }[];
}

export const CATEGORIES: CategoryContent[] = [
  {
    id: "academic",
    label: "Academic Support",
    shortLabel: "Academic",
    icon: <GraduationCap className="w-5 h-5" />,
    accent: "from-[#001456] to-[#293490]",
    bg: "bg-[#001456]/10 text-[#001456] border-[#001456]/15",
    tagline: "Helps students understand their lessons better.",
    intro:
      "Academic support helps students understand their lessons better — like tutoring and extra help from teachers.",
    services: [
      { title: "Tutoring",            text: "Extra one-to-one help with a teacher or peer for any course.", action: { type: "contact" }, cta: "Contact a teacher" },
      { title: "Extra Help Sessions", text: "Open hours where teachers help with questions and revision.",  action: { type: "go_courses" }, cta: "Go to my courses" },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />, label: "Contact", value: "academic-support@nitc.edu" },
    ],
  },
  {
    id: "technology",
    label: "Technology Support",
    shortLabel: "Technology",
    icon: <Settings className="w-5 h-5" />,
    accent: "from-cyan-600 to-[#001456]",
    bg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    tagline: "Helps students use computers and digital tools for learning.",
    intro:
      "Technology support helps students use computers and digital tools for learning.",
    services: [
      { title: "Device & Login Help", text: "Help with school accounts, the LMS and student devices.", action: { type: "demo", message: "A support ticket would be created and the IT team would reach out within 30 minutes." }, cta: "Open a ticket" },
      { title: "Digital Tools",       text: "Access to the software and platforms students need for class.", action: { type: "open_info", view: "manual" }, cta: "Open the manual" },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />, label: "Contact", value: "tech-support@nitc.edu" },
    ],
  },
  {
    id: "social_emotional",
    label: "Social-Emotional & Well-Being",
    shortLabel: "Well-Being",
    icon: <Brain className="w-5 h-5" />,
    accent: "from-rose-500 to-[#001456]",
    bg: "bg-rose-50 text-rose-800 border-rose-200",
    tagline: "Helps students feel safe, happy, and confident in school.",
    intro:
      "Social and emotional support helps students feel safe, happy, and confident in school.",
    services: [
      { title: "Counselling",     text: "A confidential space to talk when school feels hard.", action: { type: "contact" }, cta: "Book a session" },
      { title: "Peer Listeners",  text: "Trained senior students you can talk to about anything.", action: { type: "demo", message: "Peer-listener calendar would open here. Today: Archer, Lyra and 2 more are available between 12:00 and 17:00." }, cta: "See who's free" },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />, label: "Contact", value: "wellbeing@nitc.edu" },
    ],
  },
  {
    id: "family_community",
    label: "Family & Community",
    shortLabel: "Family",
    icon: <Globe2 className="w-5 h-5" />,
    accent: "from-emerald-600 to-[#001456]",
    bg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    tagline: "Working together with parents and the community to support students.",
    intro:
      "Family and community support means we work together with parents and the community to support students.",
    services: [
      { title: "Parent–Teacher Meetings", text: "Regular check-ins between teachers and families.", action: { type: "go_parent" }, cta: "Open Guardian portal" },
      { title: "Community Partners",      text: "Local partners who work with the school to support students.", action: { type: "open_info", view: "announcements" }, cta: "See announcements" },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />, label: "Contact", value: "family@nitc.edu" },
    ],
  },
  {
    id: "future_readiness",
    label: "Future Readiness, Career & Industry",
    shortLabel: "Career",
    icon: <Briefcase className="w-5 h-5" />,
    accent: "from-amber-600 to-[#001456]",
    bg: "bg-amber-50 text-amber-800 border-amber-200",
    tagline: "Helps students prepare for the future — jobs and real-world skills.",
    intro:
      "Career and industry support helps students prepare for the future — like jobs and real-world skills.",
    services: [
      { title: "Career Guidance",        text: "Conversations about pathways after NITC — work, study or start-up.", action: { type: "contact" }, cta: "Book a chat" },
      { title: "Onsite Career Training", text: "Real workplace experience with a partner company.", action: { type: "open_info", view: "curriculum" }, cta: "See in curriculum" },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />, label: "Contact", value: "careers@nitc.edu" },
    ],
  },
];

export default function SupportCentre({ open, onClose, onSetOpen, onAction }: SupportCentreProps) {
  if (!open) return null;
  const active = CATEGORIES.find(c => c.id === open) ?? CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#0b1c30]/55 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-auto"><NITCLogo variant="light-full" /></div>
              <span className="font-mono text-[9px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded font-extrabold tracking-widest uppercase">Student Support Centre</span>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => {
              const on = c.id === open;
              return (
                <button
                  key={c.id}
                  onClick={() => onSetOpen(c.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    on ? "bg-[#001456] text-white shadow-md" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {c.icon}<span>{c.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Hero */}
          <div className={`rounded-2xl p-5 bg-gradient-to-br ${active.accent} text-white relative overflow-hidden`}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">{active.icon}</div>
                <span className="font-mono text-[10px] text-cyan-200 tracking-widest font-bold uppercase">Category 0{CATEGORIES.findIndex(c => c.id === active.id) + 1} of 5</span>
              </div>
              <h3 className="font-hanken text-2xl font-extrabold leading-tight">{active.label}</h3>
              <p className="font-sans text-sm text-white/85 mt-1.5 leading-relaxed">{active.tagline}</p>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">What this covers</span>
            <p className="font-sans text-sm text-slate-600 leading-relaxed mt-1.5">{active.intro}</p>
          </div>

          {/* Quick actions */}
          <div>
            <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Quick access</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {active.services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (s.action.type === "demo") {
                      alert(s.action.message);
                    } else {
                      onClose();
                      onAction(s.action);
                    }
                  }}
                  className={`text-left rounded-xl border p-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group ${active.bg}`}
                >
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                    <div className="flex-1 min-w-0">
                      <span className="block font-sans text-sm font-extrabold leading-snug">{s.title}</span>
                      <span className="block font-sans text-xs leading-relaxed mt-0.5 opacity-90">{s.text}</span>
                      <span className="inline-flex items-center gap-1 mt-2 font-mono text-[10px] font-extrabold tracking-widest uppercase opacity-80 group-hover:opacity-100">
                        <span>{s.cta}</span><ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Get in touch</span>
            <div className="mt-3">
              {active.contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 text-[#001456] border border-slate-100 flex items-center justify-center shrink-0">{c.icon}</div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">{c.label}</span>
                    <span className="block font-sans text-xs font-bold text-[#001456] truncate">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing line */}
          <p className="font-sans text-[11px] text-slate-400 text-center italic leading-relaxed">
            All of these supports work together to help students succeed in school and in their future.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
