/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  X, BookOpen, Info, Newspaper, LogIn, LayoutGrid, Rocket, TrendingUp,
  Users, Mail, GraduationCap, Cpu, HeartHandshake, Home, Briefcase, ExternalLink,
  Megaphone, Calendar, ClipboardCheck, Wallet, Palette, Type, Layers
} from "lucide-react";
import NITCLogo from "./NITCLogo";
import LogoBlue from "../assets/brand/logo-blue.png";
import BrandmarkBlue from "../assets/brand/brandmark-blue.png";
import Pattern1Blue from "../assets/brand/pattern1-blue.png";
import Pattern2Blue from "../assets/brand/pattern2-blue.png";
import LogoConceptArt from "../assets/brand/logo-concept.png";
import LogoArchitectureArt from "../assets/brand/logo-architecture.png";
import { CURRICULUM_YEAR_1 } from "../mockData";

export type InfoView = "manual" | "about" | "news" | "announcements" | "brand" | "curriculum";

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
  { id: "curriculum", label: "Curriculum", icon: <Layers className="w-4 h-4" /> },
  { id: "brand", label: "Brand", icon: <Palette className="w-4 h-4" /> },
  { id: "news", label: "News", icon: <Newspaper className="w-4 h-4" /> },
  { id: "announcements", label: "Announcements", icon: <Megaphone className="w-4 h-4" /> },
];

const BRAND_COLORS = [
  { name: "Cosmic Cobalt", hex: "#2B338D", rgb: "43, 51, 141", cmyk: "70, 64, 0, 45", textOn: "white" },
  { name: "Flower White", hex: "#F8F3F0", rgb: "248, 243, 240", cmyk: "0, 2, 2, 33", textOn: "dark" },
  { name: "Attractive Black", hex: "#231F20", rgb: "35, 31, 32", cmyk: "0, 11, 9, 86", textOn: "white" },
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

          {view === "curriculum" && (
            <div className="space-y-5">
              <div>
                <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">The 4-4-2 Curriculum</h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Every NITC programme splits credit time three ways:
                  <span className="text-[#001456] font-semibold"> Theory 40% </span>,
                  <span className="text-[#001456] font-semibold"> Competency 40% </span>and
                  <span className="text-[#001456] font-semibold"> Practical 20% </span>.
                  Theory builds foundations; Competency builds the working skills employers ask for; Practical proves both in a real setting.
                </p>
              </div>

              {/* The 4-4-2 split visual */}
              <div className="rounded-xl overflow-hidden border border-slate-100 bg-white">
                <div className="flex h-3">
                  <div className="bg-indigo-600" style={{ width: "40%" }} />
                  <div className="bg-amber-500" style={{ width: "40%" }} />
                  <div className="bg-emerald-500" style={{ width: "20%" }} />
                </div>
                <div className="grid grid-cols-3 text-center divide-x divide-slate-100">
                  <div className="p-3">
                    <span className="block font-mono text-[10px] text-indigo-600 font-bold tracking-widest uppercase">Theory</span>
                    <span className="block font-hanken text-2xl font-extrabold text-[#001456]">40%</span>
                  </div>
                  <div className="p-3">
                    <span className="block font-mono text-[10px] text-amber-600 font-bold tracking-widest uppercase">Competency</span>
                    <span className="block font-hanken text-2xl font-extrabold text-[#001456]">40%</span>
                  </div>
                  <div className="p-3">
                    <span className="block font-mono text-[10px] text-emerald-600 font-bold tracking-widest uppercase">Practical</span>
                    <span className="block font-hanken text-2xl font-extrabold text-[#001456]">20%</span>
                  </div>
                </div>
              </div>

              {/* Year 1 subjects */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Year 1 · Subjects</span>
                  <span className="font-mono text-[10px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Term 1 · 2027</span>
                </div>
                <div className="space-y-3">
                  {(["THEORY", "COMPETENCY", "PRACTICAL"] as const).map(pillar => {
                    const subjects = CURRICULUM_YEAR_1.filter(s => s.pillar === pillar);
                    const pillarMeta = {
                      THEORY:     { pct: 40, accent: "text-indigo-700 bg-indigo-50 border-indigo-200" },
                      COMPETENCY: { pct: 40, accent: "text-amber-700 bg-amber-50 border-amber-200" },
                      PRACTICAL:  { pct: 20, accent: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                    }[pillar];
                    return (
                      <div key={pillar} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="font-hanken text-base font-extrabold text-[#001456]">{pillar} <span className="text-slate-400">·</span> <span className="text-cyan-700">{pillarMeta.pct}%</span></span>
                          <span className="font-mono text-[10px] text-slate-400">{subjects.length} subjects</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {subjects.map(s => (
                            <div key={s.code} className={`flex items-center gap-2 bg-white border rounded-lg px-3 py-2 text-xs font-sans ${pillarMeta.accent}`}>
                              <span className="font-mono text-[9.5px] font-black tracking-wider opacity-80">{s.code}</span>
                              <span className="font-bold flex-1 truncate">{s.name}</span>
                              {s.compulsory && <span className="font-mono text-[8.5px] bg-rose-100 text-rose-700 border border-rose-200 px-1.5 py-0.5 rounded font-black tracking-wider uppercase">Compulsory</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                Year 2 deepens competency and starts capstone projects; Year 3 raises the practical share with industry placements.
                Each course in the LMS is tagged by pillar so students can see their balance across Theory, Competency and Practical in real time.
              </p>
            </div>
          )}

          {view === "brand" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-hanken text-2xl font-extrabold text-[#001456] mb-1">NITC Brand Guideline</h3>
                <p className="font-sans text-xs text-slate-400">
                  The official identity system of Nova International Technology College — logo, colour, typography and pattern.
                  <span className="block mt-0.5 text-slate-300">Brand system by Jamesstus.</span>
                </p>
              </div>

              {/* Logo & concept */}
              <div className="bg-gradient-to-br from-[#001456] to-[#12287c] rounded-xl p-5 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-cyan-300 font-bold tracking-widest uppercase">Section 2.0 · Logo</span>
                  <span className="font-mono text-[9px] text-cyan-300/60">"Innovation Start Here"</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="col-span-2 bg-white/95 rounded-lg p-4 flex items-center justify-center">
                    <img src={LogoBlue} alt="NITC primary logo" className="max-h-16 w-auto object-contain" />
                  </div>
                  <div className="bg-white/95 rounded-lg p-4 flex items-center justify-center">
                    <img src={BrandmarkBlue} alt="NITC brand mark" className="max-h-16 w-auto object-contain" />
                  </div>
                </div>
                <p className="font-sans text-xs text-cyan-50/90 leading-relaxed">
                  The primary logo represents innovation, progress and academic excellence at the intersection of technology and business.
                  The brand mark — a dynamic "N" cutting through a square with a rising star — symbolises brilliance, ambition and the breaking of boundaries.
                </p>
              </div>

              {/* Logo concept — actual artist page from the brand guideline */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Section 2.5 · Logo Concept</span>
                  <span className="font-mono text-[9px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Hand-drawn by artist</span>
                </div>
                <div className="rounded-xl border border-slate-100 bg-[#faf6f1] p-3">
                  <img src={LogoConceptArt} alt="NITC logo concept — N for Nova, Star, Book, Stability, Innovation" className="w-full h-auto object-contain rounded-lg" />
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-2 leading-relaxed">
                  The mark layers four ideas: <span className="text-[#001456] font-semibold">N for Nova</span>, a rising <span className="text-[#001456] font-semibold">star</span> for innovation, an open <span className="text-[#001456] font-semibold">book</span> as the academic foundation, and the bolt cutting through for forward momentum.
                </p>
              </div>

              {/* Logo architecture — geometric construction grid */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Section 2.3 · Logo Architecture</span>
                  <span className="font-mono text-[9px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Construction grid</span>
                </div>
                <div className="rounded-xl border border-slate-100 bg-[#faf6f1] p-3">
                  <img src={LogoArchitectureArt} alt="NITC logo construction grid showing geometric proportions" className="w-full h-auto object-contain rounded-lg" />
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Every proportion in the logo is defined on a strict X-unit grid — the same construction the artist used to draw the mark from scratch.
                </p>
              </div>

              {/* Brand colour palette */}
              <div>
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Section 3.1 · Brand Colour</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  {BRAND_COLORS.map((c, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                      <div className="h-20 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                        <span className={`font-mono text-[10px] font-bold tracking-wider ${c.textOn === "white" ? "text-white/90" : "text-[#231F20]"}`}>
                          {c.hex}
                        </span>
                      </div>
                      <div className="p-3 bg-white">
                        <span className="block font-sans text-sm font-extrabold text-[#001456]">{c.name}</span>
                        <span className="block font-mono text-[10px] text-slate-500 mt-1">RGB · {c.rgb}</span>
                        <span className="block font-mono text-[10px] text-slate-500">CMYK · {c.cmyk}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Section 4.1 · Typography</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Type className="w-3.5 h-3.5 text-cyan-600" />
                      <span className="font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">Headline</span>
                    </div>
                    <span className="block font-hanken text-xl font-extrabold text-[#001456]">Audiowide</span>
                    <span className="block font-mono text-[10px] text-slate-500 mt-1">ABCDEFGHIJKL · 1234567890</span>
                    <span className="block font-sans text-[11px] text-slate-500 italic mt-1.5">"Innovation Start Here"</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Type className="w-3.5 h-3.5 text-cyan-600" />
                      <span className="font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">Secondary</span>
                    </div>
                    <span className="block font-hanken text-xl font-extrabold text-[#001456]">Saira</span>
                    <span className="block font-mono text-[10px] text-slate-500 mt-1">ABCDEFGHIJKL · 1234567890</span>
                    <span className="block font-sans text-[11px] text-slate-500 italic mt-1.5">"Innovation Start Here"</span>
                  </div>
                </div>
              </div>

              {/* Brand pattern */}
              <div>
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Section 5.1 · Brand Pattern</span>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="rounded-xl border border-slate-100 bg-white p-3 flex items-center justify-center">
                    <img src={Pattern1Blue} alt="NITC brand pattern 1" className="w-full h-28 object-contain" />
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-white p-3 flex items-center justify-center">
                    <img src={Pattern2Blue} alt="NITC brand pattern 2" className="w-full h-28 object-contain" />
                  </div>
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Brand patterns extend the identity onto stationery, campus signage and digital surfaces — built from the brand mark's geometry.
                </p>
              </div>

              {/* Usage rules summary */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Usage Rules</span>
                <ul className="mt-2 space-y-1.5 font-sans text-xs text-slate-600">
                  <li className="flex gap-2"><span className="text-[#001456] font-bold">·</span> Maintain a minimum clear space of <span className="font-mono">X</span> around the logo at all times.</li>
                  <li className="flex gap-2"><span className="text-[#001456] font-bold">·</span> Do not reproduce the logo at a height smaller than <span className="font-mono">5 mm</span>.</li>
                  <li className="flex gap-2"><span className="text-[#001456] font-bold">·</span> Use only the approved palette — Cosmic Cobalt, Flower White and Attractive Black.</li>
                  <li className="flex gap-2"><span className="text-[#001456] font-bold">·</span> Do not stretch, recolour, rotate or add effects to the logo.</li>
                </ul>
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
                  <div key={i} className="flex items-start gap-3 bg-sla