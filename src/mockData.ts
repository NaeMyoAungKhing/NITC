/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Student, ModuleStatus, ActiveMission, FlightPlanItem, Announcement, CourseDetail } from "./types";

// Real NITC faculty headshots (New School Design Group, "Team members").
import xie from "./assets/team/xie.png";
import nae from "./assets/team/nae.png";
import jia from "./assets/team/jia.png";
import nang from "./assets/team/nang.png";

export const STUDENTS: Student[] = [
  {
    id: "archer",
    name: "Archer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    gpa: 3.92,
    classRank: "TOP 5% OF CLASS",
    attendance: 98,
    attendanceStatus: "CONSISTENT PARTICIPANT",
    academicProgress: [
      { name: "BUSINESS DATA ANALYSIS", value: 12 },
      { name: "BUSINESS LANGUAGE", value: 8 }
    ],
    financial: {
      currentBalance: 2450.00,
      amountDue: 850.00,
      nextPayment: "OCT 15"
    }
  },
  {
    id: "lyra",
    name: "Lyra",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    gpa: 3.84,
    classRank: "TOP 12% OF CLASS",
    attendance: 95,
    attendanceStatus: "HIGHLY ENGAGED",
    academicProgress: [
      { name: "BUSINESS DATA ANALYSIS", value: 15 },
      { name: "BUSINESS LANGUAGE", value: 10 }
    ],
    financial: {
      currentBalance: 1200.00,
      amountDue: 400.00,
      nextPayment: "NOV 01"
    }
  }
];

export const INSTALLED_MODULES: ModuleStatus[] = [
  {
    id: "m1",
    code: "40%",
    title: "THEORY",
    subTitle: "Computational Maths · Digital Business Leadership · IT · Labor Law",
    category: "THEORY",
    stability: 75,
    iconType: "terminal"
  },
  {
    id: "m2",
    code: "40%",
    title: "COMPETENCY",
    subTitle: "Business Language 1&2 · Business Data Analysis 1&2",
    category: "COMPETENCY",
    stability: 40,
    iconType: "sliders"
  },
  {
    id: "m3",
    code: "20%",
    title: "PRACTICAL",
    subTitle: "Mobile App Development · Onsite Career Training (Compulsory)",
    category: "PRACTICAL",
    stability: 60,
    iconType: "lightning"
  }
];

// Year 1 curriculum (from official slide — Theory 40% / Competency 40% / Practical 20%).
export interface CurriculumSubject {
  code: string;
  name: string;
  pillar: "THEORY" | "COMPETENCY" | "PRACTICAL";
  compulsory?: boolean;
}

export const CURRICULUM_YEAR_1: CurriculumSubject[] = [
  { code: "TH-01", name: "Basic Computational Mathematics 1", pillar: "THEORY" },
  { code: "TH-02", name: "Digital Business Leadership",        pillar: "THEORY" },
  { code: "TH-03", name: "Introduction to Information Technology", pillar: "THEORY" },
  { code: "TH-04", name: "Basic Labor Law",                    pillar: "THEORY" },
  { code: "CP-01", name: "Basic Business Language 1 & 2",      pillar: "COMPETENCY" },
  { code: "CP-02", name: "Basic Business Data Analysis 1 & 2", pillar: "COMPETENCY" },
  { code: "PR-01", name: "Development of Basic Mobile Application", pillar: "PRACTICAL" },
  { code: "PR-02", name: "Onsite Career Training",             pillar: "PRACTICAL", compulsory: true },
];

export const ACTIVE_MISSIONS: ActiveMission[] = [
  {
    id: "mission-1",
    title: "AI for Business Applications",
    moduleCode: "04",
    completionDays: 4,
    priority: "CORE COURSE",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Xie Zihao (School Principal)",
    instructorAvatar: xie,
    syncedPercentage: 78,
    description: "Use AI tools to solve a real business problem and build a working solution.",
    status: "active"
  },
  {
    id: "mission-2",
    title: "Basic Business Data Analysis",
    moduleCode: "02",
    completionDays: 7,
    priority: "IN PROGRESS",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Nae Myo (Vice School Principal)",
    instructorAvatar: nae,
    syncedPercentage: 42,
    description: "Turn business datasets into clear, actionable insights.",
    status: "active"
  }
];

export const UPCOMING_MODULES = [
  {
    code: "05",
    title: "Digital Marketing",
    instructor: "Jia Ping (Academic Department)"
  },
  {
    code: "06",
    title: "Global Business Strategy",
    instructor: "Nang Yay Seng Naw (Student Affairs)"
  }
];

export const WEEKLY_FLIGHT_PLAN: FlightPlanItem[] = [
  {
    id: "fp-1",
    day: "MON",
    dateNum: 22,
    title: "Computational Maths",
    timeRange: "09:00 - 11:30",
    location: "ROOM A",
    isActive: true
  },
  {
    id: "fp-2",
    day: "TUE",
    dateNum: 23,
    title: "Self-Study",
    timeRange: "Free Period",
    location: "",
    isActive: false,
    isBreak: true
  },
  {
    id: "fp-3",
    day: "WED",
    dateNum: 24,
    title: "Mobile App Development",
    timeRange: "14:00 - 17:00",
    location: "LAB B",
    isActive: false
  },
  {
    id: "fp-4",
    day: "THU",
    dateNum: 25,
    title: "Digital Business Leadership",
    timeRange: "10:00 - 12:30",
    location: "ONLINE",
    isActive: false
  },
  {
    id: "fp-5",
    day: "FRI",
    dateNum: 26,
    title: "Branding Workshop",
    timeRange: "16:00 - 18:00",
    location: "STUDIO",
    isActive: false
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    category: "EVENT",
    title: "Annual Innovation Showcase",
    description: "A showcase of student startup projects and industry-partner collaborations.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&auto=format&fit=crop&q=80",
    date: "Term 1"
  },
  {
    id: "ann-2",
    category: "ACADEMIC",
    title: "Mid-Term Assessment Window",
    description: "Schedules for theory and practical assessments are now available.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&auto=format&fit=crop&q=80",
    date: "Term 1"
  }
];

// ---------- Mock LMS course content (real subjects, sensible placeholder content) ----------

export const COURSE_DETAILS: Record<string, CourseDetail> = {
  "mission-1": {
    id: "mission-1",
    code: "BUS-AI 401",
    title: "AI for Business Applications",
    tagline: "From prompt to product — apply AI to real business problems.",
    description:
      "A practical, project-driven course that teaches students how to use modern AI tools (LLMs, no-code automation, data assistants) to solve real business problems. Students leave with a working AI-powered solution and a short pitch.",
    instructor: "Xie Zihao",
    instructorRole: "School Principal",
    instructorAvatar: xie,
    meetingPattern: "Mon & Wed · 09:00–11:30",
    location: "Room A · Innovation Hall",
    credits: 4,
    termWeeks: 8,
    progress: 78,
    bannerGradient: "from-[#001456] via-[#12287c] to-cyan-600",
    modules: [
      {
        id: "m1-w1",
        week: 1,
        title: "AI Foundations for Business",
        summary: "What LLMs can and can't do. Where AI creates real value vs. hype.",
        lessons: [
          { id: "m1-w1-l1", kind: "video", title: "Lecture · The AI Stack for SMEs (2026 view)", durationMin: 38, completed: true },
          { id: "m1-w1-l2", kind: "reading", title: "Reading · HBR — How AI is reshaping small business", durationMin: 25, completed: true },
          { id: "m1-w1-l3", kind: "discussion", title: "Discuss · One business task you wish was automated", durationMin: 20, completed: true },
        ],
      },
      {
        id: "m1-w2",
        week: 2,
        title: "Prompt Engineering & AI Productivity",
        summary: "Write prompts that consistently produce useful business output.",
        lessons: [
          { id: "m1-w2-l1", kind: "video", title: "Lecture · Anatomy of a great business prompt", durationMin: 32, completed: true },
          { id: "m1-w2-l2", kind: "lab", title: "Lab · Build a customer-support reply assistant", durationMin: 60, completed: true },
          { id: "m1-w2-l3", kind: "quiz", title: "Quiz · Prompt Patterns Check", durationMin: 15, completed: true },
        ],
      },
      {
        id: "m1-w3",
        week: 3,
        title: "Building AI-Powered Solutions (No-Code)",
        summary: "Wire LLMs into Google Sheets, Notion, and a simple web form.",
        lessons: [
          { id: "m1-w3-l1", kind: "video", title: "Lecture · No-code AI stacks — Zapier, Make, n8n", durationMin: 28, completed: true },
          { id: "m1-w3-l2", kind: "lab", title: "Lab · Auto-tag inbound enquiries with an LLM", durationMin: 70, completed: false },
          { id: "m1-w3-l3", kind: "reading", title: "Reading · MIT Sloan — Practical AI deployment patterns", durationMin: 20, completed: false },
        ],
      },
      {
        id: "m1-w4",
        week: 4,
        title: "Capstone · Solve a Real Business Problem with AI",
        summary: "Pick a business near campus, identify a pain point, ship an AI-powered fix.",
        lessons: [
          { id: "m1-w4-l1", kind: "lab", title: "Lab · Discovery interview with a local business", durationMin: 90, completed: false },
          { id: "m1-w4-l2", kind: "lab", title: "Lab · Build & demo your AI prototype", durationMin: 120, completed: false },
          { id: "m1-w4-l3", kind: "discussion", title: "Capstone showcase · Peer feedback round", durationMin: 45, completed: false },
        ],
      },
    ],
    materials: [
      { id: "mat-1", kind: "slides",   title: "Week 1 — AI Stack for SMEs (slides)", source: "Mr. Xie · Lecture deck", sizeOrLen: "32 slides · 4.2 MB" },
      { id: "mat-2", kind: "reading",  title: "HBR — How AI is reshaping small business", source: "Harvard Business Review", sizeOrLen: "12 min read" },
      { id: "mat-3", kind: "reading",  title: "MIT Sloan — Practical AI deployment patterns", source: "MIT Sloan Management Review", sizeOrLen: "9 min read" },
      { id: "mat-4", kind: "notebook", title: "Prompt patterns starter (Google Colab)", source: "NITC Resource Library", sizeOrLen: "Colab · interactive" },
      { id: "mat-5", kind: "dataset",  title: "Sample customer-support tickets (anonymised)", source: "NITC dataset · 2026-T1", sizeOrLen: "500 rows · CSV" },
      { id: "mat-6", kind: "template", title: "Capstone discovery interview template", source: "NITC Capstone toolkit", sizeOrLen: "Google Doc · template" },
    ],
    assignments: [
      {
        id: "a-1",
        title: "Assignment 1 · AI Opportunity Map",
        brief: "Identify three real workflows at a local business that AI could realistically improve. Rank by impact vs. effort and pick one to build.",
        dueDate: "Wed · 12 Jun, 23:59",
        weight: 15,
        status: "graded",
        grade: "A (92/100)",
      },
      {
        id: "a-2",
        title: "Assignment 2 · No-Code AI Prototype",
        brief: "Ship a working prototype that automates the workflow you chose. Submit screencast + a 1-page write-up of cost, accuracy and risks.",
        dueDate: "Mon · 24 Jun, 23:59",
        weight: 35,
        status: "in_progress",
      },
      {
        id: "a-3",
        title: "Capstone · Pitch & Demo",
        brief: "Pitch your AI solution to the partner business and the class. 5-minute demo + Q&A.",
        dueDate: "Fri · 12 Jul, 14:00 · Room A",
        weight: 40,
        status: "not_started",
      },
    ],
    quizzes: [
      { id: "q-1", title: "AI Foundations Check",  questions: 10, bestScore: 90, attempts: 1, attemptsAllowed: 2 },
      { id: "q-2", title: "Prompt Patterns Check", questions: 12, bestScore: 83, attempts: 2, attemptsAllowed: 2 },
      { id: "q-3", title: "No-Code AI Wiring Check", questions: 8, attempts: 0, attemptsAllowed: 2 },
    ],
    discussion: [
      { id: "d-1", author: "Xie Zihao", role: "INSTRUCTOR", avatar: xie, postedAgo: "1 day ago",
        message: "Great work on Assignment 1 — most opportunity maps were realistic about cost. For Assignment 2, remember: pick the smallest slice that proves the idea, not the most ambitious one.",
        replies: 6, likes: 14 },
      { id: "d-2", author: "Lyra (Year 11)", role: "STUDENT", postedAgo: "9 hours ago",
        message: "I'm wiring an LLM into a Google Form for the bakery near campus — anyone got a tip for handling Thai + English mixed input cleanly?",
        replies: 3, likes: 5 },
      { id: "d-3", author: "Archer (Year 12)", role: "STUDENT", postedAgo: "4 hours ago",
        message: "Quick share: I benchmarked GPT-4o vs Claude on the support-ticket dataset — Claude was 7% more accurate on intent tagging but a bit slower. Posting numbers in the notebook.",
        replies: 2, likes: 8 },
    ],
  },

  "mission-2": {
    id: "mission-2",
    code: "BUS-DAT 201",
    title: "Basic Business Data Analysis",
    tagline: "Turn raw business data into clear, defensible decisions.",
    description:
      "Students learn to clean, summarise and visualise business datasets, then communicate findings in language a non-technical decision-maker can act on. Built around real anonymised cases from local businesses.",
    instructor: "Nae Myo",
    instructorRole: "Vice School Principal",
    instructorAvatar: nae,
    meetingPattern: "Tue & Thu · 13:30–15:30",
    location: "Lab B · Data Studio",
    credits: 3,
    termWeeks: 8,
    progress: 42,
    bannerGradient: "from-emerald-600 via-cyan-700 to-[#001456]",
    modules: [
      {
        id: "m2-w1",
        week: 1,
        title: "Data Literacy & Spreadsheet Foundations",
        summary: "What counts as data, common quality issues and how to fix them.",
        lessons: [
          { id: "m2-w1-l1", kind: "video", title: "Lecture · Why every business decision is a data decision", durationMin: 30, completed: true },
          { id: "m2-w1-l2", kind: "lab",   title: "Lab · Cleaning a messy sales export", durationMin: 60, completed: true },
          { id: "m2-w1-l3", kind: "quiz",  title: "Quiz · Data quality checklist", durationMin: 12, completed: true },
        ],
      },
      {
        id: "m2-w2",
        week: 2,
        title: "Descriptive Statistics & Visualization",
        summary: "Mean, median, distributions, and choosing the right chart.",
        lessons: [
          { id: "m2-w2-l1", kind: "video", title: "Lecture · When the average lies", durationMin: 26, completed: true },
          { id: "m2-w2-l2", kind: "lab",   title: "Lab · Build the monthly sales dashboard", durationMin: 75, completed: false },
          { id: "m2-w2-l3", kind: "reading", title: "Reading · Storytelling with Data — Ch. 3", durationMin: 22, completed: false },
        ],
      },
      {
        id: "m2-w3",
        week: 3,
        title: "Trend & Cohort Analysis",
        summary: "Spot real trends. Tell signal from noise. Group customers.",
        lessons: [
          { id: "m2-w3-l1", kind: "video", title: "Lecture · Cohorts for small businesses", durationMin: 28, completed: false },
          { id: "m2-w3-l2", kind: "lab",   title: "Lab · Customer cohort retention chart", durationMin: 70, completed: false },
        ],
      },
      {
        id: "m2-w4",
        week: 4,
        title: "Capstone · Analyse a Sales Dataset",
        summary: "Find one decision-grade insight in a real anonymised sales dataset and present it in 5 minutes.",
        lessons: [
          { id: "m2-w4-l1", kind: "lab", title: "Lab · Build your analysis from raw data → chart", durationMin: 120, completed: false },
          { id: "m2-w4-l2", kind: "discussion", title: "Capstone showcase · Peer review", durationMin: 45, completed: false },
        ],
      },
    ],
    materials: [
      { id: "mat-21", kind: "slides",  title: "Week 1 — Spreadsheet Foundations (slides)", source: "Ms. Nae · Lecture deck", sizeOrLen: "28 slides · 3.1 MB" },
      { id: "mat-22", kind: "dataset", title: "Anonymised café sales · 6 months", source: "NITC dataset · 2026-T1", sizeOrLen: "12k rows · CSV" },
      { id: "mat-23", kind: "reading", title: "Storytelling with Data — Chapter 3", source: "Cole Nussbaumer Knaflic", sizeOrLen: "22 min read" },
      { id: "mat-24", kind: "template", title: "Dashboard starter template", source: "NITC Resource Library", sizeOrLen: "Google Sheet · template" },
      { id: "mat-25", kind: "notebook", title: "Cohort analysis walkthrough (Colab)", source: "NITC Resource Library", sizeOrLen: "Colab · interactive" },
    ],
    assignments: [
      { id: "a-21", title: "Assignment 1 · Data-Cleaning Worksheet", brief: "Take the messy café export and produce a clean, well-labelled sheet ready for analysis.", dueDate: "Tue · 11 Jun, 23:59", weight: 20, status: "graded", grade: "A- (88/100)" },
      { id: "a-22", title: "Assignment 2 · Monthly Sales Dashboard", brief: "Build a one-page dashboard a café owner could actually use to decide what to stock.", dueDate: "Thu · 20 Jun, 23:59", weight: 30, status: "in_progress" },
      { id: "a-23", title: "Capstone · Decision-Grade Insight", brief: "Find one defensible insight in the dataset and present it in a 5-minute talk with one supporting chart.", dueDate: "Thu · 11 Jul, 14:00 · Lab B", weight: 35, status: "not_started" },
    ],
    quizzes: [
      { id: "q-21", title: "Data Quality Checklist", questions: 8,  bestScore: 88, attempts: 1, attemptsAllowed: 2 },
      { id: "q-22", title: "Charts & When to Use Them", questions: 10, attempts: 0, attemptsAllowed: 2 },
    ],
    discussion: [
      { id: "d-21", author: "Nae Myo", role: "INSTRUCTOR", avatar: nae, postedAgo: "2 days ago",
        message: "Reminder: the goal of Assignment 2 is a dashboard a non-technical owner can act on — not a wall of charts. Pick three numbers that would actually change a decision.",
        replies: 4, likes: 11 },
      { id: "d-22", author: "Archer (Year 12)", role: "STUDENT", postedAgo: "1 day ago",
        message: "My monthly chart shows what looks like a Friday spike — anyone else seeing that, or is it just my filter?",
        replies: 5, likes: 6 },
    ],
  },

  // ---- Upcoming course previews (lighter placeholders, judges can still browse) ----
  "upcoming-05": {
    id: "upcoming-05",
    code: "BUS-MKT 301",
    title: "Digital Marketing",
    tagline: "Run real campaigns. Read real numbers.",
    description:
      "An applied digital marketing course covering positioning, content, paid social, SEO and analytics. Students plan and run a small live campaign for a campus event.",
    instructor: "Jia Ping",
    instructorRole: "Academic Department",
    instructorAvatar: jia,
    meetingPattern: "Tue · 09:00–11:30",
    location: "Studio · Branding Lab",
    credits: 3,
    termWeeks: 8,
    progress: 0,
    bannerGradient: "from-pink-600 via-rose-600 to-[#001456]",
    modules: [
      { id: "mk-w1", week: 1, title: "Positioning & Brand Voice", summary: "Who you're for, what you stand for, and how that sounds.", lessons: [
        { id: "mk-w1-l1", kind: "video", title: "Lecture · Positioning fundamentals", durationMin: 32, completed: false },
        { id: "mk-w1-l2", kind: "lab",   title: "Lab · Write a positioning statement", durationMin: 60, completed: false },
      ]},
      { id: "mk-w2", week: 2, title: "Content & Channels", summary: "Match the message to the platform and the funnel stage.", lessons: [
        { id: "mk-w2-l1", kind: "reading", title: "Reading · Content strategy 101", durationMin: 18, completed: false },
        { id: "mk-w2-l2", kind: "lab", title: "Lab · Build a 4-week content calendar", durationMin: 60, completed: false },
      ]},
      { id: "mk-w3", week: 3, title: "Paid Social & Analytics", summary: "Set up, measure, and decide whether to keep spending.", lessons: [
        { id: "mk-w3-l1", kind: "video", title: "Lecture · Reading a campaign dashboard honestly", durationMin: 28, completed: false },
      ]},
    ],
    materials: [
      { id: "mk-mat-1", kind: "slides", title: "Positioning Fundamentals (slides)", source: "Ms. Jia · Lecture deck", sizeOrLen: "20 slides" },
      { id: "mk-mat-2", kind: "template", title: "Campaign brief template", source: "NITC Marketing Toolkit", sizeOrLen: "Google Doc · template" },
    ],
    assignments: [
      { id: "mk-a-1", title: "Assignment · Positioning Statement", brief: "Write a one-sentence positioning statement for a campus club or local business.", dueDate: "TBD", weight: 25, status: "not_started" },
    ],
    quizzes: [
      { id: "mk-q-1", title: "Positioning Check", questions: 8, attempts: 0, attemptsAllowed: 2 },
    ],
    discussion: [
      { id: "mk-d-1", author: "Jia Ping", role: "INSTRUCTOR", avatar: jia, postedAgo: "preview",
        message: "Welcome — this course is hands-on. Come ready to run a real (tiny) campaign by Week 4.", replies: 0, likes: 0 },
    ],
  },

  "upcoming-06": {
    id: "upcoming-06",
    code: "BUS-STR 302",
    title: "Global Business Strategy",
    tagline: "How small businesses make sharp choices in a global market.",
    description:
      "Frameworks for strategy with a strong emphasis on emerging-market realities. Students analyse two real businesses (one local, one global) and write a one-page strategic recommendation.",
    instructor: "Nang Yay Seng Naw",
    instructorRole: "Student Affairs",
    instructorAvatar: nang,
    meetingPattern: "Thu · 14:00–16:00",
    location: "Room A",
    credits: 3,
    termWeeks: 8,
    progress: 0,
    bannerGradient: "from-amber-600 via-orange-600 to-[#001456]",
    modules: [
      { id: "str-w1", week: 1, title: "What Strategy Actually Is", summary: "Trade-offs, not slogans.", lessons: [
        { id: "str-w1-l1", kind: "video", title: "Lecture · The strategy diamond", durationMin: 30, completed: false },
      ]},
      { id: "str-w2", week: 2, title: "Reading a Market", summary: "Sizing, segments, and the bits that don't fit the chart.", lessons: [
        { id: "str-w2-l1", kind: "lab", title: "Lab · Map a market you actually use", durationMin: 60, completed: false },
      ]},
    ],
    materials: [
      { id: "str-mat-1", kind: "slides", title: "What Strategy Actually Is (slides)", source: "Ms. Nang · Lecture deck", sizeOrLen: "18 slides" },
    ],
    assignments: [
      { id: "str-a-1", title: "Assignment · One-Page Strategy Memo", brief: "Pick a business you know and write a one-page strategic recommendation a CEO could act on this quarter.", dueDate: "TBD", weight: 30, status: "not_started" },
    ],
    quizzes: [],
    discussion: [
      { id: "str-d-1", author: "Nang Yay Seng Naw", role: "INSTRUCTOR", avatar: nang, postedAgo: "preview",
        message: "Bring a business you genuinely care about — the course is more fun when the strategy is for someone real.", replies: 0, likes: 0 },
    ],
  },
};

export const CONTACT_PRESETS = [
  { value: "general", label: "General Academic Progress" },
  { value: "financial", label: "Tuition & Fees" },
  { value: "curriculum", label: "Curriculum & Courses" },
  { value: "health", label: "Attendance & Conduct" }
];
