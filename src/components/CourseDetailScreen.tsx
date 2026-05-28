/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft, Play, BookOpen, FileText, FlaskConical, MessageCircle, ClipboardCheck,
  Calendar, MapPin, CheckCircle2, Clock,
  Download, Sparkles, Database, FileSpreadsheet, FileCode2, Presentation,
  Award, MessageSquare, Heart
} from "lucide-react";
import { CourseDetail, CourseLesson, MaterialKind, AssignmentStatus } from "../types";

interface CourseDetailScreenProps {
  course: CourseDetail;
  onBack: () => void;
}

type DetailTab = "overview" | "modules" | "materials" | "assignments" | "quizzes" | "discussion";

const TABS: { id: DetailTab; label: string; icon: React.ReactNode }[] = [
  { id: "overview",    label: "Overview",    icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: "modules",     label: "Lessons",     icon: <Play className="w-3.5 h-3.5" /> },
  { id: "materials",   label: "Materials",   icon: <FileText className="w-3.5 h-3.5" /> },
  { id: "assignments", label: "Assignments", icon: <ClipboardCheck className="w-3.5 h-3.5" /> },
  { id: "quizzes",     label: "Quizzes",     icon: <Award className="w-3.5 h-3.5" /> },
  { id: "discussion",  label: "Discussion",  icon: <MessageCircle className="w-3.5 h-3.5" /> },
];

function LessonIcon({ kind }: { kind: CourseLesson["kind"] }) {
  const map: Record<CourseLesson["kind"], React.ReactNode> = {
    video: <Play className="w-3.5 h-3.5" />,
    reading: <BookOpen className="w-3.5 h-3.5" />,
    lab: <FlaskConical className="w-3.5 h-3.5" />,
    discussion: <MessageCircle className="w-3.5 h-3.5" />,
    quiz: <Award className="w-3.5 h-3.5" />,
  };
  return <>{map[kind]}</>;
}

function MaterialIcon({ kind }: { kind: MaterialKind }) {
  const map: Record<MaterialKind, React.ReactNode> = {
    slides: <Presentation className="w-4 h-4" />,
    reading: <BookOpen className="w-4 h-4" />,
    video: <Play className="w-4 h-4" />,
    notebook: <FileCode2 className="w-4 h-4" />,
    dataset: <Database className="w-4 h-4" />,
    template: <FileSpreadsheet className="w-4 h-4" />,
  };
  return <>{map[kind]}</>;
}

function statusChip(status: AssignmentStatus): { label: string; cls: string } {
  switch (status) {
    case "graded":      return { label: "GRADED",      cls: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    case "submitted":   return { label: "SUBMITTED",   cls: "bg-cyan-50 text-cyan-700 border-cyan-200" };
    case "in_progress": return { label: "IN PROGRESS", cls: "bg-amber-50 text-amber-700 border-amber-200" };
    case "not_started": return { label: "NOT STARTED", cls: "bg-slate-50 text-slate-500 border-slate-200" };
  }
}

export default function CourseDetailScreen({ course, onBack }: CourseDetailScreenProps) {
  const [tab, setTab] = useState<DetailTab>("overview");

  const lessonsTotal = course.modules.reduce((n, m) => n + m.lessons.length, 0);
  const lessonsDone  = course.modules.reduce((n, m) => n + m.lessons.filter(l => l.completed).length, 0);

  return (
    <div id="course-detail-screen" className="pb-24 space-y-6 select-none">
      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-slate-500 hover:text-[#001456] font-mono text-[10px] font-bold tracking-widest uppercase cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Courses
      </button>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${course.bannerGradient} text-white p-6 shadow-lg`}
      >
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] bg-white/15 border border-white/20 px-2 py-0.5 rounded font-bold tracking-widest">{course.code}</span>
              <span className="font-mono text-[10px] text-cyan-200 tracking-widest font-bold">·  {course.credits} CREDITS · {course.termWeeks} WEEKS</span>
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">{course.title}</h2>
            <p className="font-sans text-sm text-white/85 leading-relaxed mt-2 max-w-2xl">{course.tagline}</p>

            <div className="flex flex-wrap gap-3 mt-4 text-xs font-sans text-white/80">
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {course.meetingPattern}</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {course.location}</div>
            </div>
          </div>

          {/* Instructor card + progress */}
          <div className="lg:w-72 shrink-0 bg-white/10 border border-white/15 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={course.instructorAvatar} alt={course.instructor} className="w-12 h-12 rounded-full border-2 border-white/30 object-cover" />
              <div>
                <span className="block font-mono text-[9px] text-cyan-200 tracking-widest font-bold">INSTRUCTOR</span>
                <span className="block font-sans text-sm font-extrabold">{course.instructor}</span>
                <span className="block font-mono text-[9.5px] text-white/70">{course.instructorRole}</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between font-mono text-[9.5px] mb-1.5">
                <span className="text-cyan-200 tracking-widest font-bold">COURSE PROGRESS</span>
                <span className="text-white font-black">{course.progress}%</span>
              </div>
              <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-cyan-300 rounded-full"
                />
              </div>
              <span className="block font-mono text-[9px] text-white/70 mt-1.5">{lessonsDone}/{lessonsTotal} lessons complete</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                on ? "bg-[#001456] text-white shadow-md" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {t.icon}<span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Body */}
      {tab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white border border-slate-100 rounded-xl p-5">
              <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">About this course</span>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mt-2">{course.description}</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Up next</span>
                <button onClick={() => setTab("modules")} className="font-mono text-[10px] text-cyan-600 hover:text-[#001456] font-extrabold uppercase tracking-wider cursor-pointer">Open lessons →</button>
              </div>
              {course.modules.map(mod => {
                const next = mod.lessons.find(l => !l.completed);
                if (!next) return null;
                return (
                  <button key={mod.id} onClick={() => setTab("modules")} className="w-full text-left flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl p-3.5 cursor-pointer transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#001456] text-white flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block font-mono text-[9px] text-slate-400 tracking-widest font-bold uppercase">Week {mod.week} · {mod.title}</span>
                      <span className="block font-sans text-sm font-extrabold text-[#001456] truncate">{next.title}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1 shrink-0"><Clock className="w-3 h-3" /> {next.durationMin} min</span>
                  </button>
                );
              }).filter(Boolean).slice(0, 1)}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-5">
              <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Quick stats</span>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white border border-slate-100 rounded-lg p-3 text-center">
                  <Play className="w-4 h-4 text-cyan-600 mx-auto mb-1" />
                  <span className="block font-hanken text-xl font-extrabold text-[#001456]">{lessonsTotal}</span>
                  <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider">Lessons</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-lg p-3 text-center">
                  <ClipboardCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="block font-hanken text-xl font-extrabold text-[#001456]">{course.assignments.length}</span>
                  <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider">Assignments</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-lg p-3 text-center">
                  <Award className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                  <span className="block font-hanken text-xl font-extrabold text-[#001456]">{course.quizzes.length}</span>
                  <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider">Quizzes</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-lg p-3 text-center">
                  <FileText className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                  <span className="block font-hanken text-xl font-extrabold text-[#001456]">{course.materials.length}</span>
                  <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider">Resources</span>
                </div>
              </div>
            </div>

            <div className="bg-[#001456] text-white rounded-xl p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span className="font-mono text-[10px] text-cyan-300 font-bold tracking-widest uppercase">Skill outcomes</span>
              </div>
              <ul className="font-sans text-xs text-white/80 leading-relaxed space-y-1 mt-2">
                <li>· Frame a real business problem clearly</li>
                <li>· Apply the right tool to the right job</li>
                <li>· Communicate findings to non-technical stakeholders</li>
                <li>· Reflect and iterate on your own work</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === "modules" && (
        <div className="space-y-4">
          {course.modules.map((mod) => {
            const done = mod.lessons.filter(l => l.completed).length;
            const total = mod.lessons.length;
            return (
              <div key={mod.id} className="bg-white border border-slate-100 rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <span className="font-mono text-[9.5px] text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Week {mod.week}</span>
                    <h4 className="font-hanken text-xl font-extrabold text-[#001456] leading-snug mt-2">{mod.title}</h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1">{mod.summary}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Progress</span>
                    <span className="block font-mono text-sm font-black text-[#001456]">{done}/{total}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {mod.lessons.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => alert(`This would open the lesson: "${l.title}".\n\n(Demo placeholder — content is illustrative.)`)}
                      className={`w-full text-left flex items-center gap-3 rounded-xl p-3 border transition-all cursor-pointer ${
                        l.completed
                          ? "bg-emerald-50/40 border-emerald-100 hover:bg-emerald-50"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        l.completed ? "bg-emerald-500 text-white" : "bg-white text-[#001456] border border-slate-200"
                      }`}>
                        {l.completed ? <CheckCircle2 className="w-4 h-4" /> : <LessonIcon kind={l.kind} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block font-sans text-sm font-bold text-[#001456] truncate">{l.title}</span>
                        <span className="block font-mono text-[9.5px] text-slate-400 tracking-wider uppercase mt-0.5">{l.kind}</span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1 shrink-0"><Clock className="w-3 h-3" /> {l.durationMin} min</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "materials" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {course.materials.map(mat => (
            <button
              key={mat.id}
              onClick={() => alert(`This would download: "${mat.title}".\n\n(Demo placeholder — files are illustrative.)`)}
              className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4 hover:border-cyan-500/40 hover:bg-slate-50/50 transition-all text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center shrink-0">
                <MaterialIcon kind={mat.kind} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-sans text-sm font-extrabold text-[#001456] leading-snug">{mat.title}</span>
                <span className="block font-mono text-[10px] text-slate-400 mt-0.5">{mat.source}</span>
                <span className="block font-mono text-[10px] text-slate-400 mt-0.5">{mat.sizeOrLen}</span>
              </div>
              <Download className="w-4 h-4 text-slate-300 shrink-0" />
            </button>
          ))}
        </div>
      )}

      {tab === "assignments" && (
        <div className="space-y-3">
          {course.assignments.map(a => {
            const chip = statusChip(a.status);
            return (
              <div key={a.id} className="bg-white border border-slate-100 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`font-mono text-[9.5px] font-black border px-2 py-0.5 rounded tracking-widest uppercase ${chip.cls}`}>{chip.label}</span>
                      <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">Weight · {a.weight}%</span>
                      {a.grade && <span className="font-mono text-[10px] text-emerald-700 font-bold tracking-widest uppercase">Grade · {a.grade}</span>}
                    </div>
                    <h4 className="font-hanken text-lg font-extrabold text-[#001456] leading-snug">{a.title}</h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1.5">{a.brief}</p>
                    <div className="flex items-center gap-2 mt-3 font-mono text-[10px] text-slate-500">
                      <Calendar className="w-3.5 h-3.5" /> Due · {a.dueDate}
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`This would open the assignment workspace for "${a.title}".\n\n(Demo placeholder — submission is illustrative.)`)}
                    className="shrink-0 px-3.5 py-2 bg-[#001456] hover:bg-[#12287c] text-white font-mono text-[10px] tracking-widest font-extrabold rounded-lg cursor-pointer uppercase shadow-md active:scale-95"
                  >
                    {a.status === "graded" ? "View feedback" : a.status === "submitted" ? "View submission" : a.status === "in_progress" ? "Continue" : "Start"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "quizzes" && (
        <div className="space-y-3">
          {course.quizzes.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-xl font-sans text-xs text-slate-400">No quizzes scheduled yet.</div>
          ) : course.quizzes.map(q => (
            <div key={q.id} className="bg-white border border-slate-100 rounded-xl p-5 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-hanken text-base font-extrabold text-[#001456] leading-snug">{q.title}</h4>
                  <span className="block font-mono text-[10px] text-slate-400 mt-0.5">{q.questions} questions · attempts {q.attempts}/{q.attemptsAllowed}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {q.bestScore !== undefined ? (
                  <div className="text-right">
                    <span className="block font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">Best score</span>
                    <span className="block font-hanken text-lg font-extrabold text-emerald-700">{q.bestScore}%</span>
                  </div>
                ) : (
                  <div className="text-right">
                    <span className="block font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">Status</span>
                    <span className="block font-mono text-xs text-slate-500 font-bold">Not attempted</span>
                  </div>
                )}
                <button
                  onClick={() => alert(`This would start the quiz: "${q.title}".\n\n(Demo placeholder — questions are illustrative.)`)}
                  disabled={q.attempts >= q.attemptsAllowed}
                  className="px-3.5 py-2 bg-[#001456] hover:bg-[#12287c] disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-[10px] tracking-widest font-extrabold rounded-lg cursor-pointer uppercase shadow-md disabled:cursor-not-allowed"
                >
                  {q.attempts === 0 ? "Start quiz" : q.attempts < q.attemptsAllowed ? "Retake" : "Complete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "discussion" && (
        <div className="space-y-3">
          {course.discussion.map(p => (
            <div key={p.id} className={`rounded-xl p-4 border ${p.role === "INSTRUCTOR" ? "bg-[#001456]/5 border-[#001456]/15" : "bg-white border-slate-100"}`}>
              <div className="flex items-center gap-3 mb-2">
                {p.avatar ? (
                  <img src={p.avatar} alt={p.author} className="w-9 h-9 rounded-full border border-slate-200 object-cover" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-mono text-xs font-bold">{p.author.charAt(0)}</div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-sm font-extrabold text-[#001456]">{p.author}</span>
                    <span className={`font-mono text-[8.5px] px-1.5 py-0.5 rounded font-black tracking-widest uppercase ${
                      p.role === "INSTRUCTOR" ? "bg-[#001456] text-white" : p.role === "TA" ? "bg-cyan-600 text-white" : "bg-slate-200 text-slate-600"
                    }`}>{p.role}</span>
                  </div>
                  <span className="block font-mono text-[10px] text-slate-400">{p.postedAgo}</span>
                </div>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-3">{p.message}</p>
              <div className="flex items-center gap-4 font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {p.likes}</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {p.replies} replies</span>
                <button onClick={() => alert("Reply composer would open here.\n\n(Demo placeholder.)")} className="ml-auto font-bold tracking-widest uppercase text-cyan-600 hover:text-[#001456] cursor-pointer">Reply</button>
              </div>
            </div>
          ))}
          <button onClick={() => alert("New post composer would open here.\n\n(Demo placeholder.)")} className="w-full bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-200 rounded-xl py-3.5 font-mono text-[10px] text-slate-500 hover:text-[#001456] font-bold tracking-widest uppercase cursor-pointer transition-colors">
            + Start a new discussion
          </button>
        </div>
      )}
    </div>
  );
}
