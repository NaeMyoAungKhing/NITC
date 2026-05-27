/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  X, BookOpen, Info, Newspaper, LogIn, LayoutGrid, Rocket, TrendingUp,
  Users, Mail, GraduationCap, Cpu, HeartHandshake, Home, Briefcase, ExternalLink,
  Megaphone, Calendar, ClipboardCheck, Wallet
} from "lucide-react";
import NITCLogo from "./NITCLogo";

export type InfoView = "manual" | "about" | "news" | "announcements";

interface InfoModalProps {
  view: InfoView | null;
  onClose: () => void;
  onSetView: (v: InfoView) => void;
}

const MANUAL_STEPS = [
  { icon: <LogIn className="w-5 h-5" />, title: "1 · Sign in", text: "Choose Student Login or Guardian Access from the welcome screen." },
  { icon: <LayoutGrid className="w-5 h-5" />, title: "2 · Dashboard", text: "See your 4-4-2 curriculum progress, weekly timetable and current course at a glance." },
  { icon: <Rocket className="w-5 h-5" />, title: "3 · My Courses", text: "Open any course, search the catalogue and track your progress and instructor." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "4 · My Progress", text: "Use the GPA projection tool and review the 4-4-2 curriculum map." },
  { icon: <Users className="w-5 h-5" />, title: "5 · Guardian Portal", text: "Parents follow grades, attendance and fees, and switch between children." },
  { icon: <Mail className="w-5 h-5" />, title: "6 · Contact a Teacher", text: "Message faculty directly from the navbar or the Guardian dashboard." },
];

const SUPPORT_PILLARS = [
  { icon: <GraduationCap className="w-5 h-5" />, label: "Academic Support" },
  { icon: <Cpu className="w-5 h-5" />, label: "Technology Support" },
  { icon: <HeartHandshake className="w-5 h-5" />, label: "Social-Emotional & Well-Being" },
  { icon: <Home className="w-5 h-5" />, label: "Family & Community" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Career & Industry Readiness" },
];

const NEWS = [
  {
    tag: "THAILAND · AI CURRICULUM",
    title: "Thailand launches its first credit-bearing national AI curriculum",
    summary: "True, Google and the Ministry of Higher Education roll out \"AI for All Thais\" to close a gap of ~80,000 AI professionals and ready students for the future workforce.",
    source: "The Nation Thailand",
    url: "https://www.nationthailand.com/business/tech/40065861",
  },
  {
    tag: "THAILAND · TEACHING",
    title: "\"AI for Teachers\" upskills 160,000+ Thai educators",
    summary: "Over 160,000 teachers completed AI training reaching 3.3 million students — 76% report higher student engagement when AI is used in class.",
    source: "Bangkok Post",
    url: "https://www.bangkokpost.com/thailand/pr/3245752/ai-for-teachers-upskills-160-000-thai-educators-for-a-digital-future",
  },
  {
    tag: "GLOBAL · FUTURE SKILLS",
    title: "In the age of AI, human skills are the new advantage",
    summary: "The World Economic Forum argues that creativity, adaptability and leadership — exactly NITC's 4-4-2 outcomes — are what set graduates apart alongside AI fluency.",
    source: "World Economic Forum",
    url: "https://www.weforum.org/stories/2026/01/ai-and-human-skills/",
  },
  {
    tag: "GLOBAL · EDTECH",
    title: "AI education trends 2026: building the future startup talent pipeline",
    summary: "AI is moving from an optional subject to a default layer across entrepreneurship and innovation education — embedded across disciplines, not siloed in computer science.",
    source: "EU-Startups",
    url: "https://www.eu-startups.com/2025/12/ai-education-trends-for-2026-how-european-classrooms-are-shaping-the-future-startup-talent-pipeline-sponsored/",
  },
];

const ANNOUNCEMENTS = [
  { icon: <Calendar className="w-5 h-5" />, tag: "EVENT", when: "Term 1 · Week 1", title: "Orientation Week", text: "New students begin onboarding and campus tours. Bring your device to get set up on the portal." },
  { icon: <ClipboardCheck className="w-5 h-5" />, tag: "ACADEMIC", when: "Term 1 · Mid", title: "Mid-Term Assessment Window", text: "Theory and practical assessment schedules are now published in My Progress." },
  { icon: <Rocket className="w-5 h-5" />, tag: "EVENT", when: "Term 1 · End", title: "Annual Innovation Showcase", text: "Student startup projects and industry-partner demos in the Startup Lab — guardians welcome." },
  { icon: <Wallet className="w-5 h-5" />, tag: "FINANCE", when: "Due Oct 15", title: "Term 1 Tuition Reminder", text: "Your next installment is due soon — view the full statement in the Guardian Portal." },
];

const TABS: { id: InfoView; label: string; icon: React.ReactNode }[] = [
  { id: "manual", label: "Manual", icon: <BookOpen className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
  { id: "news", label: "News", icon: <Newspaper className="w-4 h-4" /> },
  { id: "announcements", label: "Announcements", icon: <Megaphone className="w-4 h-4" /> },
];

export default function InfoModal({ view, onClose, onSetView }: InfoModalProps) {
  if (!view) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#0b1c30]/55 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[88vh]"
      >
        {/* Header + tabs */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="h-7 w-auto"><NITCLogo variant="light-full" /></div>
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => {
              const on = t.id === view;
              return (
                <button
                  key={t.id}
                  onClick={() => onSetView(t.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    on ? "bg-[#001456] text-white shadow-md" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {t.icon}<span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {view === "manual" && (
            <div>
              <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">How to use NITC Mission Control</h3>
              <p className="font-sans text-xs text-slate-400 mb-5">A quick guide to getting around your student-support portal.</p>
              <div className="space-y-3">
                {MANUAL_STEPS.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[#001456]/5 text-[#001456] border border-[#001456]/10 flex items-center justify-center">{s.icon}</div>
                    <div>
                      <span className="block font-sans text-sm font-extrabold text-[#001456]">{s.title}</span>
                      <span className="block font-sans text-xs text-slate-500 leading-relaxed mt-0.5">{s.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "about" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">About NITC</h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Nova International Technology College is a student-centered technology &amp; business school for ages 15-18,
                  built on the <span className="text-[#001456] font-semibold">4-4-2 model</span> — Theory, Competency, Practical.
                  This portal brings the whole student-support system together: an <span className="font-semibold">LMS</span>,
                  a <span className="font-semibold">payment &amp; guardian</span> portal, <span className="font-semibold">resource management</span>,
                  and <span className="font-semibold">catch-up news</span>.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#001456] to-[#12287c] rounded-xl p-5 text-white">
                <span className="font-mono text-[10px] text-cyan-300 font-bold tracking-widest uppercase">Mission</span>
                <p className="font-hanken text-base font-bold leading-snug mt-1">"Commit skill-mindset to innovation, Responsive Action to Challenges, and Sustainable Leadership to nourish global community."</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <span className="font-mono text-[10px] text-cyan-700 font-bold tracking-widest uppercase">Vision</span>
                <p className="font-hanken text-base font-bold text-[#001456] leading-snug mt-1">"We nurture future leaders to innovate bravely, and empower change-makers to advance a sustainable world with shared social values."</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Student Support System</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                  {SUPPORT_PILLARS.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">{p.icon}</div>
                      <span className="font-sans text-sm font-semibold text-[#001456]">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === "news" && (
            <div>
              <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">Catch-up News</h3>
              <p className="font-sans text-xs text-slate-400 mb-5">Recent developments in Thailand and worldwide that shape learning at NITC.</p>
              <div className="space-y-3">
                {NEWS.map((n, i) => (
                  <a key={i} href={n.url} target="_blank" rel="noreferrer"
                    className="block bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl p-4 transition-colors group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] font-black text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded uppercase tracking-wider">{n.tag}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#001456]" />
                    </div>
                    <h4 className="font-hanken text-base font-extrabold text-[#001456] leading-snug">{n.title}</h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1">{n.summary}</p>
                    <span className="block font-mono text-[10px] text-slate-400 mt-2">Source: {n.source}</span>
                  </a>
                ))}
              </div>
              <p className="font-sans text-[10px] text-slate-300 mt-4 text-center">Sample references for the Resource &amp; News module — links open in a new tab.</p>
            </div>
          )}

          {view === "announcements" && (
            <div>
              <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">Announcements</h3>
              <p className="font-sans text-xs text-slate-400 mb-5">Official notices from NITC — events, assessments and finance.</p>
              <div className="space-y-3">
                {ANNOUNCEMENTS.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">{a.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[9px] font-black text-[#001456] bg-[#001456]/5 border border-[#001456]/10 px-2 py-0.5 rounded uppercase tracking-wider">{a.tag}</span>
                        <span className="font-mono text-[10px] text-slate-400">{a.when}</span>
                      </div>
                      <h4 className="font-hanken text-base font-extrabold text-[#001456] leading-snug">{a.title}</h4>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed mt-0.5">{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
