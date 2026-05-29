/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  X, GraduationCap, Settings, Users, Brain, Briefcase, Globe2, ShieldCheck,
  Mail, Phone, MapPin, Clock, ArrowRight, ScrollText, SmilePlus, HandHelping
} from "lucide-react";
import NITCLogo from "./NITCLogo";

export type SupportCategory =
  | "academic"
  | "technology"
  | "social_emotional"
  | "family_community"
  | "future_readiness";

interface SupportCentreProps {
  open: SupportCategory | null;
  onClose: () => void;
  onSetOpen: (c: SupportCategory) => void;
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
  services: { title: string; text: string }[];
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
    tagline: "Help to learn deeply and finish strong.",
    intro:
      "Tutoring, study coaching, writing support and assessment guidance — all built around the NITC 4-4-2 model (Theory 40% / Competency 40% / Practical 20%) so help is matched to the kind of skill you're building.",
    services: [
      { title: "1-on-1 Tutoring",          text: "Book a peer or faculty tutor for any course — 30 min slots, in person or online." },
      { title: "Writing & Presentation",   text: "Get a senior to review your report, deck or pitch before you submit." },
      { title: "Maths Lab Drop-in",        text: "Open hours in Lab A every Tuesday and Friday afternoon." },
      { title: "Assessment Coaching",      text: "Plan study weeks, practice tests and feedback before exam blocks." },
      { title: "Academic Advising",        text: "Faculty mentors help you choose electives and capstone direction." },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />,   label: "Email",   value: "academic-support@nitc.edu" },
      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Office",  value: "Innovation Hall · Level 2" },
      { icon: <Clock className="w-3.5 h-3.5" />,  label: "Hours",   value: "Mon–Fri · 09:00–17:30" },
    ],
  },
  {
    id: "technology",
    label: "Technology Support",
    shortLabel: "Technology",
    icon: <Settings className="w-5 h-5" />,
    accent: "from-cyan-600 to-[#001456]",
    bg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    tagline: "Keep your tools working so learning never stops.",
    intro:
      "Device setup, account recovery, software licences, lab equipment, AV in classrooms and campus Wi-Fi. If a tool is in the way of learning, this team clears it.",
    services: [
      { title: "Device & Login Help",      text: "Reset passwords, fix MFA, set up email, M365 / Google Workspace and the LMS." },
      { title: "Software & Licences",      text: "Access free and discounted software — design, dev, data and AI tools." },
      { title: "Lab Equipment",            text: "Borrow a laptop, camera or sensor kit from the Resource Library." },
      { title: "Classroom AV",             text: "Same-day fix for projectors, screens and mics in any room." },
      { title: "Cyber Safety",             text: "Phishing tips, secure backups and digital wellbeing workshops." },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />,   label: "Email",   value: "tech-support@nitc.edu" },
      { icon: <Phone className="w-3.5 h-3.5" />,  label: "Hotline", value: "+66 (0) 2-555-NITC ext. 4" },
      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Helpdesk",value: "Lab B · IT Counter" },
      { icon: <Clock className="w-3.5 h-3.5" />,  label: "Hours",   value: "Mon–Sat · 08:30–18:00" },
    ],
  },
  {
    id: "social_emotional",
    label: "Social-Emotional & Well-Being",
    shortLabel: "Well-Being",
    icon: <Brain className="w-5 h-5" />,
    accent: "from-rose-500 to-[#001456]",
    bg: "bg-rose-50 text-rose-800 border-rose-200",
    tagline: "Look after the mind that learns.",
    intro:
      "Confidential counselling, mental-health resources, stress-week support and peer-listening — for the moments when school is hard and when you just want to talk.",
    services: [
      { title: "Confidential Counselling", text: "Book a one-to-one session with a school counsellor. Always confidential." },
      { title: "Peer Listeners",           text: "Trained senior students you can talk to over coffee — no booking required." },
      { title: "Stress-Week Support",      text: "Drop-in pop-ups during mid-term and finals weeks — short, useful resets." },
      { title: "Mindfulness & Movement",   text: "Weekly mindfulness, yoga and breathwork sessions in the campus garden." },
      { title: "Crisis Pathway",           text: "24/7 referral pathway to partner clinics with parent / guardian loop-in." },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />,   label: "Email",        value: "wellbeing@nitc.edu" },
      { icon: <Phone className="w-3.5 h-3.5" />,  label: "Care line",    value: "+66 (0) 2-555-NITC ext. 7" },
      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Wellness Hub", value: "Innovation Hall · Level 1, Quiet Room" },
      { icon: <Clock className="w-3.5 h-3.5" />,  label: "Hours",        value: "Mon–Fri · 09:00–17:00" },
    ],
  },
  {
    id: "family_community",
    label: "Family & Community",
    shortLabel: "Family",
    icon: <Globe2 className="w-5 h-5" />,
    accent: "from-emerald-600 to-[#001456]",
    bg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    tagline: "School is stronger when home and community are in the loop.",
    intro:
      "Parent / guardian portal access, family events, community service partnerships and a translator-supported channel so language never gets in the way of staying involved.",
    services: [
      { title: "Guardian Portal Access",   text: "Live view of grades, attendance and tuition — see Parent Portal in the app." },
      { title: "Parent–Teacher Meetings",  text: "Three structured family conferences per year + open-door any time." },
      { title: "Family Events",            text: "Innovation Showcase, capstone demos, cultural nights and open day." },
      { title: "Community Service",        text: "NITC partners with 12+ Bangkok and Chiang Mai community organisations." },
      { title: "Language Support",         text: "Translator-supported channel for parents in Thai, Burmese, Chinese and English." },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />,   label: "Email",      value: "family@nitc.edu" },
      { icon: <Phone className="w-3.5 h-3.5" />,  label: "Family Line",value: "+66 (0) 2-555-NITC ext. 2" },
      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Front Desk", value: "Registrar Office · Main Entrance" },
    ],
  },
  {
    id: "future_readiness",
    label: "Future Readiness, Career & Industry",
    shortLabel: "Career",
    icon: <Briefcase className="w-5 h-5" />,
    accent: "from-amber-600 to-[#001456]",
    bg: "bg-amber-50 text-amber-800 border-amber-200",
    tagline: "Build the bridge from classroom to industry.",
    intro:
      "Career advising, CV / portfolio workshops, interview practice, internships with NITC industry partners, and Onsite Career Training that turns Year-1 practicals into real workplace days.",
    services: [
      { title: "Career Advising",          text: "One-to-one with a career coach — pathways, gap-year, university or startup tracks." },
      { title: "Onsite Career Training",   text: "Compulsory Year-1 practical with a partner company. Real work, real mentor." },
      { title: "CV & Portfolio Lab",       text: "Drop-in clinic to sharpen CVs, LinkedIn and portfolio sites." },
      { title: "Interview Practice",       text: "Mock interviews with industry partners — feedback you can act on." },
      { title: "Industry Partner Network", text: "Tech, business and creative partners across Bangkok and Chiang Mai." },
    ],
    contacts: [
      { icon: <Mail className="w-3.5 h-3.5" />,   label: "Email",      value: "careers@nitc.edu" },
      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Career Lab", value: "Innovation Hall · Level 3" },
      { icon: <Clock className="w-3.5 h-3.5" />,  label: "Hours",      value: "Tue & Thu · 10:00–18:00" },
    ],
  },
];

export default function SupportCentre({ open, onClose, onSetOpen }: SupportCentreProps) {
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

          {/* Services */}
          <div>
            <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Services available</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {active.services.map((s, i) => (
                <div key={i} className={`rounded-xl border p-3.5 ${active.bg}`}>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                    <div>
                      <span className="block font-sans text-sm font-extrabold leading-snug">{s.title}</span>
                      <span className="block font-sans text-xs leading-relaxed mt-0.5 opacity-90">{s.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">How to reach this team</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
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

          <button
            onClick={() => alert(`This would open a service request for "${active.label}".\n\n(Demo placeholder — real form would submit to the team's queue.)`)}
            className={`w-full bg-gradient-to-r ${active.accent} text-white font-mono text-xs tracking-widest font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase shadow-md active:scale-95`}
          >
            <span>Request {active.shortLabel} Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
